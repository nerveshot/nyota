import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, XCircle, Users, Utensils, Music, MessageSquare, 
  Send, Sparkles, Heart, BarChart3, Clock, Check, Trash2, Database, RefreshCw
} from 'lucide-react';
import { subscribeToRsvps, submitRsvpToCloud, deleteRsvpFromCloud } from '../firebase/nyotaDb';

export default function RsvpSection({ 
  invitationData, 
  onGuestSubmitted, 
  customRsvpSettings = {} 
}) {
  const [activeTab, setActiveTab] = useState('guestForm'); // 'guestForm' | 'hostDashboard'

  // Guest Form State
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [attendance, setAttendance] = useState('attending'); // 'attending' | 'declined'
  const [plusOnes, setPlusOnes] = useState(0);
  const [dietary, setDietary] = useState('None');
  const [songRequest, setSongRequest] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Real-time Guest List connected to Firestore (/nyota/rsvps/items)
  const [guestList, setGuestList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  // Subscribe to real-time updates from Firestore /nyota/rsvps/items
  useEffect(() => {
    const invitationId = invitationData?.id || 'default-wedding';
    const unsubscribe = subscribeToRsvps(invitationId, (rsvps) => {
      setGuestList(rsvps);
      setLoadingList(false);
    });

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [invitationData?.id]);

  const handleSubmitRsvp = async (e) => {
    e.preventDefault();
    if (!guestName.trim() || isSubmitting) return;

    setIsSubmitting(true);

    const newGuest = {
      name: guestName.trim(),
      email: guestEmail.trim() || 'guest@example.com',
      status: attendance,
      plusOnes: parseInt(plusOnes) || 0,
      dietary: dietary,
      song: songRequest.trim(),
      message: message.trim(),
      invitationId: invitationData?.id || 'default-wedding',
    };

    try {
      await submitRsvpToCloud(newGuest);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch (err) {
        console.log(err);
      }

      if (onGuestSubmitted) {
        onGuestSubmitted(newGuest);
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteRsvp = async (id, e) => {
    e.stopPropagation();
    if (window.confirm('Remove this RSVP from the guest list?')) {
      await deleteRsvpFromCloud(id);
    }
  };

  const attendingCount = guestList
    .filter(g => g.status === 'attending')
    .reduce((acc, g) => acc + 1 + (Number(g.plusOnes) || 0), 0);
  const declinedCount = guestList.filter(g => g.status === 'declined').length;
  const totalResponses = guestList.length;
  const dietaryAlertsCount = guestList.filter(g => g.dietary && g.dietary !== 'None').length;

  return (
    <section id="rsvp-section" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-champagne-400" />
            <span>Interactive Guest & RSVP Management</span>
          </div>
          <h2 className="text-3xl font-cinzel font-bold text-white">
            Guest Portal & <span className="gold-gradient-text">Live Host Tracker</span>
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Experience how your guests submit their RSVPs, plus-ones, meal preferences, and heartfelt guestbook messages in real-time.
          </p>

          {/* Toggle between Guest View and Host Analytics View */}
          <div className="flex justify-center pt-3">
            <div className="inline-flex p-1 bg-[#120F24] rounded-xl border border-white/10">
              <button
                onClick={() => setActiveTab('guestForm')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'guestForm'
                    ? 'bg-champagne-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Guest RSVP Form View
              </button>
              <button
                onClick={() => setActiveTab('hostDashboard')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'hostDashboard'
                    ? 'bg-champagne-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Host Realtime Dashboard ({attendingCount} Attending)</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: GUEST RSVP FORM */}
        {activeTab === 'guestForm' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-luxury border border-champagne-500/30 max-w-xl mx-auto">
            
            {!submitted ? (
              <form onSubmit={handleSubmitRsvp} className="space-y-5">
                
                <div className="text-center pb-2 border-b border-white/10">
                  <h3 className="font-serif text-xl font-bold text-champagne-300">
                    Will You Be Joining Us?
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {invitationData?.rsvpDeadline || 'Kindly respond at your earliest convenience'}
                  </p>
                </div>

                {/* Attendance Selection */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance('attending')}
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                      attendance === 'attending'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-glow-emerald'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Joyfully Accept</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance('declined')}
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                      attendance === 'declined'
                        ? 'bg-rose-500/20 border-rose-400 text-rose-300 shadow-glow-rose'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>Regretfully Decline</span>
                  </button>
                </div>

                {/* Guest Full Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name(s) *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Lord & Lady Sterling"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-champagne-400"
                  />
                </div>

                {/* Guest Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address (For event updates & reminders)
                  </label>
                  <input
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="guest@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-champagne-400"
                  />
                </div>

                {attendance === 'attending' && (
                  <>
                    {/* Plus Ones & Dietary */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Number of Plus-Ones
                        </label>
                        <select
                          value={plusOnes}
                          onChange={(e) => setPlusOnes(Number(e.target.value))}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#120F24] border border-white/15 text-sm text-white focus:outline-none focus:border-champagne-400"
                        >
                          <option value={0}>Just me (1 Guest)</option>
                          <option value={1}>+1 Guest (2 Total)</option>
                          <option value={2}>+2 Guests (3 Total)</option>
                          <option value={3}>+3 Guests (4 Total)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Dietary Preferences
                        </label>
                        <select
                          value={dietary}
                          onChange={(e) => setDietary(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#120F24] border border-white/15 text-sm text-white focus:outline-none focus:border-champagne-400"
                        >
                          <option value="None">No Dietary Restrictions</option>
                          <option value="Vegetarian">Vegetarian</option>
                          <option value="Vegan">Vegan</option>
                          <option value="Gluten-Free">Gluten-Free</option>
                          <option value="Halal">Halal</option>
                          <option value="Kosher">Kosher</option>
                        </select>
                      </div>
                    </div>

                    {/* DJ Song Request */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Song Request to get you on the dance floor 🎵
                      </label>
                      <input
                        type="text"
                        value={songRequest}
                        onChange={(e) => setSongRequest(e.target.value)}
                        placeholder="Song title & Artist"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-champagne-400"
                      />
                    </div>
                  </>
                )}

                {/* Guestbook Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Heartfelt Note for the Hosts / Guestbook Wish 💕
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Leave a sweet congratulatory note or memory..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-champagne-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Saving Response...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Confirm RSVP & Send Wishes</span>
                    </>
                  )}
                </button>

              </form>
            ) : (
              /* CONFIRMATION SUCCESS VIEW */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 mx-auto flex items-center justify-center shadow-glow-emerald">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold gold-gradient-text">
                  Thank You, {guestName}!
                </h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  {attendance === 'attending' 
                    ? "Your RSVP has been securely saved! We cannot wait to celebrate together." 
                    : "We will miss your presence, but thank you for sending your warm wishes!"
                  }
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setGuestName('');
                    setGuestEmail('');
                    setSongRequest('');
                    setMessage('');
                  }}
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-champagne-300 font-semibold border border-white/15 transition-all"
                >
                  Submit Another Response
                </button>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: HOST REALTIME DASHBOARD */}
        {activeTab === 'hostDashboard' && (
          <div className="space-y-6">
            
            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-panel p-4 rounded-2xl border border-champagne-500/20 text-center">
                <div className="text-xs text-slate-400 uppercase font-mono">Confirmed Guests</div>
                <div className="text-3xl font-bold font-cinzel text-emerald-400 mt-1">{attendingCount}</div>
                <div className="text-[11px] text-emerald-300/80 mt-0.5">Ready to celebrate</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-champagne-500/20 text-center">
                <div className="text-xs text-slate-400 uppercase font-mono">Declined</div>
                <div className="text-3xl font-bold font-cinzel text-rose-400 mt-1">{declinedCount}</div>
                <div className="text-[11px] text-rose-300/80 mt-0.5">Sent best wishes</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-champagne-500/20 text-center">
                <div className="text-xs text-slate-400 uppercase font-mono">Total Responses</div>
                <div className="text-3xl font-bold font-cinzel text-champagne-300 mt-1">{totalResponses}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Live Real-time</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-champagne-500/20 text-center">
                <div className="text-xs text-slate-400 uppercase font-mono">Dietary Alerts</div>
                <div className="text-3xl font-bold font-cinzel text-amber-400 mt-1">{dietaryAlertsCount}</div>
                <div className="text-[11px] text-amber-300/80 mt-0.5">Special requirements</div>
              </div>
            </div>

            {/* Guestbook and RSVP Feed */}
            <div className="glass-panel rounded-3xl p-6 border border-champagne-500/20 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-champagne-400" />
                  <h4 className="font-cinzel font-bold text-white text-base">
                    Live Guestbook & Responses Feed
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Live Sync</span>
                </div>
              </div>

              {loadingList ? (
                <div className="py-12 text-center text-slate-400 flex items-center justify-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin text-champagne-400" />
                  <span>Loading RSVPs...</span>
                </div>
              ) : guestList.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                  <Users className="w-8 h-8 mx-auto text-slate-600 mb-2" />
                  <p>No RSVPs received yet. Share your invitation link to start collecting guest responses!</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                  {guestList.map((g) => (
                    <div 
                      key={g.id} 
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group hover:border-champagne-500/30 transition-all"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm text-white">{g.name}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                            g.status === 'attending' 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          }`}>
                            {g.status === 'attending' ? `Attending (${1 + (Number(g.plusOnes) || 0)})` : 'Declined'}
                          </span>
                          {g.dietary && g.dietary !== 'None' && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              {g.dietary}
                            </span>
                          )}
                        </div>
                        {g.message && (
                          <p className="text-xs text-slate-300 italic">
                            "{g.message}"
                          </p>
                        )}
                        {g.song && (
                          <div className="text-[11px] text-champagne-300/80 flex items-center gap-1">
                            <Music className="w-3 h-3 text-champagne-400" />
                            <span>Song: {g.song}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 self-end sm:self-center">
                        <span className="text-[11px] text-slate-400 font-mono whitespace-nowrap">
                          {g.time}
                        </span>
                        <button
                          onClick={(e) => handleDeleteRsvp(g.id, e)}
                          title="Delete RSVP"
                          className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
