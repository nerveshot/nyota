import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Sliders, Type, Palette, Music, Users, Download, 
  Share2, ShoppingBag, Eye, Smartphone, Monitor, Plus, Trash2, 
  Check, ArrowLeft, Volume2, VolumeX, Heart, Crown, Shield, Lock, CheckCircle2, Clock,
  Layers, Gift, Shirt, MapPin, Calendar, Send, Image, EyeOff, CheckSquare
} from 'lucide-react';
import InvitationCard from './InvitationCard';
import EnvelopeExperience from './EnvelopeExperience';
import RsvpSection from './RsvpSection';
import PremiumWebpageInvitation from './PremiumWebpageInvitation';
import { COLOR_THEMES, FONT_PAIRINGS, WAX_SEALS, AMBIENT_TRACKS, INVITATION_TEMPLATES } from '../data/templates';
import { musicEngine } from '../utils/audioPlayer';
import { saveInvitationToCloud, subscribeToAuthUser, subscribeToUserAccess } from '../firebase/nyotaDb';

export default function CustomizerStudio({
  selectedTemplate,
  onBackToGallery,
  onOpenCheckout,
  onOpenExport,
}) {
  const currentTemplate = selectedTemplate || INVITATION_TEMPLATES[0];

  // Studio Customization States
  const [activeTab, setActiveTab] = useState('content'); // 'content' | 'sections' | 'theme' | 'itinerary' | 'music'
  const [previewMode, setPreviewMode] = useState('webpage'); // 'webpage' | 'card' | 'envelope' | 'rsvp'
  const [deviceMode, setDeviceMode] = useState('desktop'); // 'desktop' | 'mobile'
  const [currentUser, setCurrentUser] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const unsub = subscribeToAuthUser((user) => {
      setCurrentUser(user);
    });
    return () => {
      if (typeof unsub === 'function') unsub();
    };
  }, []);

  // Invitation Content Fields
  const [invitationData, setInvitationData] = useState({
    tag: currentTemplate.defaults?.tag || 'TOGETHER WITH THEIR FAMILIES',
    title: currentTemplate.defaults?.title || 'The Wedding Celebration Of',
    primaryNames: currentTemplate.defaults?.primaryNames || 'Elena Vance & Arthur Pendelton',
    dateText: currentTemplate.defaults?.dateText || 'Saturday, October 24, 2026',
    timeText: currentTemplate.defaults?.timeText || 'Four O\'clock In The Afternoon',
    venueName: currentTemplate.defaults?.venueName || 'The St. Regis Grand Ballroom',
    venueAddress: currentTemplate.defaults?.venueAddress || 'Two East 55th Street, New York, NY 10022',
    receptionInfo: currentTemplate.defaults?.receptionInfo || 'Dinner, Dancing & Champagne Reception To Follow',
    dressCode: currentTemplate.defaults?.dressCode || 'Black Tie Optional',
    dressCodeNote: currentTemplate.defaults?.dressCodeNote || 'We kindly request our guests to dress in formal attire. Formal evening gowns and classic dark suits or tuxedos are warmly encouraged.',
    rsvpDeadline: currentTemplate.defaults?.rsvpDeadline || 'Kindly RSVP by September 15, 2026',
    hostMessage: currentTemplate.defaults?.hostMessage || 'We would be profoundly honored by your presence.',
    registryUrl: currentTemplate.defaults?.registryUrl || 'https://registry.example.com/elena-arthur',
    wishingWellTitle: currentTemplate.defaults?.wishingWellTitle || 'Honeymoon Fund • Chase / Zelle',
    wishingWellAccount: currentTemplate.defaults?.wishingWellAccount || 'US94830294829103948 (Elena & Arthur)',
    wishingWellNote: currentTemplate.defaults?.wishingWellNote || 'Your love, presence, and prayers on our special day are the greatest gifts of all. For those who wish to contribute toward our honeymoon adventures:',
    itinerary: currentTemplate.defaults?.itinerary || [
      { time: '4:00 PM', event: 'Guest Arrival & Welcome Drinks' },
      { time: '4:30 PM', event: 'Vow Ceremony in the Rose Garden' },
      { time: '6:00 PM', event: 'Cocktails & Hors d\'œuvres' },
      { time: '7:30 PM', event: 'Grand Dinner & Toasts' },
      { time: '9:00 PM', event: 'Live Music & Dancing under the Stars' },
    ],
    loveStories: currentTemplate.defaults?.loveStories || [
      {
        year: '2021',
        title: 'The First Encounter',
        desc: 'A chance meeting on a rainy autumn evening in Manhattan that turned into hours of endless conversation over espresso.',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&auto=format&fit=crop&q=80',
      },
      {
        year: '2024',
        title: 'Under Lake Como Stars',
        desc: 'Surrounded by the serene Italian waters and candlelight, Arthur asked the question that changed forever.',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
      },
      {
        year: '2026',
        title: 'Forever Begins',
        desc: 'Gathered with our most cherished family and friends to exchange sacred vows and dance through the night.',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
      }
    ],
    sections: {
      countdown: true,
      loveStory: true,
      itinerary: true,
      venue: true,
      dressCode: true,
      wishingWell: true,
      rsvp: true,
      music: true,
      ...(currentTemplate.defaults?.sections || {})
    },
  });

  // Section Toggle Handler
  const handleToggleSection = (sectionKey) => {
    setInvitationData(prev => {
      const currentVal = prev.sections ? prev.sections[sectionKey] : true;
      const newVal = currentVal === false ? true : false;
      return {
        ...prev,
        sections: {
          ...(prev.sections || {}),
          [sectionKey]: newVal
        }
      };
    });
  };

  // Love Story Handler
  const handleUpdateLoveStory = (index, field, value) => {
    setInvitationData(prev => {
      const stories = [...(prev.loveStories || [])];
      stories[index] = { ...stories[index], [field]: value };
      return { ...prev, loveStories: stories };
    });
  };

  // Field change handler
  const handleFieldChange = (key, value) => {
    setInvitationData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Itinerary handlers
  const handleAddItineraryItem = () => {
    setInvitationData(prev => ({
      ...prev,
      itinerary: [...prev.itinerary, { time: '8:00 PM', event: 'Celebration Toast & Dance' }]
    }));
  };

  const handleUpdateItinerary = (index, field, value) => {
    setInvitationData(prev => {
      const updated = [...prev.itinerary];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, itinerary: updated };
    });
  };

  const handleRemoveItinerary = (index) => {
    setInvitationData(prev => ({
      ...prev,
      itinerary: prev.itinerary.filter((_, i) => i !== index)
    }));
  };

  // Music Preview
  const handlePlayAudioTrack = (trackId) => {
    setAmbientTrackId(trackId);
    musicEngine.startTrack(trackId);
    setIsAudioPlaying(true);
  };

  const handleStopAudio = () => {
    musicEngine.stopTrack();
    setIsAudioPlaying(false);
  };

  // Cloud Save to Firestore /nyota/invitations/items
  const handleSaveToCloud = async () => {
    setIsCloudSaving(true);
    setCloudSaveMessage('');
    try {
      const payload = {
        ...invitationData,
        themeId,
        fontPairingId,
        sealId,
        sealColor,
        ambientTrackId,
        templateId: currentTemplate.id,
      };
      const res = await saveInvitationToCloud(payload);
      if (res.success) {
        setCloudSaveMessage('✓ Draft Saved');
      }
    } catch (err) {
      console.error('Save error:', err);
      setCloudSaveMessage('Error saving draft');
    } finally {
      setIsCloudSaving(false);
      setTimeout(() => setCloudSaveMessage(''), 3500);
    }
  };

  const isVerified = currentUser?.accessGranted || currentUser?.paymentStatus === 'verified';

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Studio Top Control Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToGallery}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-all flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Templates</span>
          </button>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-cinzel font-bold text-white">
                Invitation Customizer Studio
              </h1>
              
              {isVerified ? (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Verified Client Access</span>
                </span>
              ) : currentUser?.paymentStatus === 'pending_verification' ? (
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold border border-amber-500/40 flex items-center gap-1 animate-pulse">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>Awaiting ₹501 Admin Approval</span>
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full bg-champagne-500/20 text-champagne-300 text-[11px] font-bold border border-champagne-500/30 flex items-center gap-1">
                  <span>₹501 Shagun Offer</span>
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400">
              Customize text, colors, fonts, wax seals, itinerary & ambient music in real time.
            </p>
          </div>
        </div>

        {/* Top Action Buttons (Save Draft, Export & Buy) */}
        <div className="flex items-center gap-2.5 w-full md:w-auto flex-wrap">
          <button
            onClick={handleSaveToCloud}
            disabled={isCloudSaving}
            className="px-3.5 py-2.5 rounded-xl bg-champagne-500/15 hover:bg-champagne-500/25 text-champagne-300 font-semibold text-xs border border-champagne-500/30 transition-all flex items-center justify-center gap-1.5"
          >
            <Sparkles className={`w-3.5 h-3.5 ${isCloudSaving ? 'animate-spin' : ''}`} />
            <span>{cloudSaveMessage || (isCloudSaving ? 'Saving...' : 'Save Draft')}</span>
          </button>

          <button
            onClick={() => onOpenExport({
              invitationData,
              themeId,
              fontPairingId,
              sealId,
              sealColor,
              ambientTrackId
            })}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/15 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-champagne-400" />
            <span>Export & Share</span>
          </button>

          <button
            onClick={() => onOpenCheckout({
              invitationData,
              themeId,
              fontPairingId,
              sealId,
              sealColor,
              ambientTrackId,
              selectedTemplate: currentTemplate
            })}
            className="flex-1 md:flex-initial px-6 py-2.5 rounded-xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-xs shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-2"
          >
            {isVerified ? (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Publish Live Webpage</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-slate-950" />
                <span>Pay ₹501 Shagun & Publish</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Main Studio Workspace: Left Controls (5 cols), Right Preview Canvas (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: EDITING TABS & CONTROLS */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-5 border border-champagne-500/20 shadow-xl space-y-6">
          
          {/* Studio Navigation Tabs */}
          <div className="grid grid-cols-5 gap-1 p-1 bg-black/40 rounded-2xl border border-white/10">
            <button
              onClick={() => setActiveTab('content')}
              className={`py-2 px-1 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                activeTab === 'content'
                  ? 'bg-champagne-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span className="text-[11px]">Details</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('sections');
                if (previewMode !== 'webpage') setPreviewMode('webpage');
              }}
              className={`py-2 px-1 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                activeTab === 'sections'
                  ? 'bg-champagne-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="text-[11px]">Sections</span>
            </button>

            <button
              onClick={() => setActiveTab('theme')}
              className={`py-2 px-1 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                activeTab === 'theme'
                  ? 'bg-champagne-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span className="text-[11px]">Theme</span>
            </button>

            <button
              onClick={() => setActiveTab('itinerary')}
              className={`py-2 px-1 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                activeTab === 'itinerary'
                  ? 'bg-champagne-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="text-[11px]">Schedule</span>
            </button>

            <button
              onClick={() => setActiveTab('music')}
              className={`py-2 px-1 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                activeTab === 'music'
                  ? 'bg-champagne-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
              <span className="text-[11px]">Audio</span>
            </button>
          </div>

          {/* TAB 1: CONTENT & EVENT DETAILS */}
          {activeTab === 'content' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                  Top Tagline / Greeting
                </label>
                <input
                  type="text"
                  value={invitationData.tag}
                  onChange={(e) => handleFieldChange('tag', e.target.value)}
                  placeholder="e.g. TOGETHER WITH THEIR FAMILIES"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-champagne-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                  Event Sub-Title
                </label>
                <input
                  type="text"
                  value={invitationData.title}
                  onChange={(e) => handleFieldChange('title', e.target.value)}
                  placeholder="e.g. The Wedding Celebration Of"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-champagne-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-champagne-300 mb-1 uppercase tracking-wider">
                  Primary Names (Hosts / Couple / Honoree) *
                </label>
                <input
                  type="text"
                  value={invitationData.primaryNames}
                  onChange={(e) => handleFieldChange('primaryNames', e.target.value)}
                  placeholder="e.g. Elena Vance & Arthur Pendelton"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-champagne-400/40 text-sm font-semibold text-white focus:outline-none focus:ring-1 focus:ring-champagne-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    Date Text
                  </label>
                  <input
                    type="text"
                    value={invitationData.dateText}
                    onChange={(e) => handleFieldChange('dateText', e.target.value)}
                    placeholder="e.g. Saturday, October 24, 2026"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-champagne-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    Time Text
                  </label>
                  <input
                    type="text"
                    value={invitationData.timeText}
                    onChange={(e) => handleFieldChange('timeText', e.target.value)}
                    placeholder="e.g. Four O'clock In The Afternoon"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-champagne-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                  Venue Name
                </label>
                <input
                  type="text"
                  value={invitationData.venueName}
                  onChange={(e) => handleFieldChange('venueName', e.target.value)}
                  placeholder="e.g. The St. Regis Grand Ballroom"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-champagne-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                  Venue Full Address
                </label>
                <input
                  type="text"
                  value={invitationData.venueAddress}
                  onChange={(e) => handleFieldChange('venueAddress', e.target.value)}
                  placeholder="e.g. Two East 55th Street, New York, NY"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-champagne-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    Dress Code
                  </label>
                  <input
                    type="text"
                    value={invitationData.dressCode}
                    onChange={(e) => handleFieldChange('dressCode', e.target.value)}
                    placeholder="e.g. Black Tie Optional"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-champagne-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    RSVP Deadline
                  </label>
                  <input
                    type="text"
                    value={invitationData.rsvpDeadline}
                    onChange={(e) => handleFieldChange('rsvpDeadline', e.target.value)}
                    placeholder="e.g. Kindly RSVP by September 15"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-champagne-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                  Host's Welcome Message / Note
                </label>
                <textarea
                  rows={2}
                  value={invitationData.hostMessage}
                  onChange={(e) => handleFieldChange('hostMessage', e.target.value)}
                  placeholder="We would be profoundly honored by your presence..."
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-champagne-400"
                />
              </div>
            </div>
          )}

          {/* TAB: SECTION VISIBILITY & LAYOUT MANAGER */}
          {activeTab === 'sections' && (
            <div className="space-y-4">
              
              {/* Header explanation banner */}
              <div className="p-3 rounded-2xl bg-champagne-500/10 border border-champagne-500/30 flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200 leading-relaxed">
                  <span className="font-bold text-champagne-300">Section Visibility Manager:</span> Toggle individual sections on or off to tailor the invitation to your specific celebration.
                </div>
              </div>

              {/* Section Toggle Cards */}
              <div className="space-y-3">
                
                {/* 1. RSVP & GUESTBOOK */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  invitationData.sections?.rsvp !== false 
                    ? 'border-champagne-400/40 bg-white/5 shadow-sm' 
                    : 'border-white/10 bg-black/40 opacity-70'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                        <Send className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">RSVP & Live Guestbook</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            invitationData.sections?.rsvp !== false 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                          }`}>
                            {invitationData.sections?.rsvp !== false ? 'Active' : 'Disabled'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Guest attendance form, meal preferences & public wishes feed.
                        </p>
                      </div>
                    </div>

                    {/* iOS Style Switch */}
                    <button
                      type="button"
                      onClick={() => handleToggleSection('rsvp')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        invitationData.sections?.rsvp !== false ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          invitationData.sections?.rsvp !== false ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* 2. LOVE STORY & PHOTO GALLERY */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  invitationData.sections?.loveStory !== false 
                    ? 'border-champagne-400/40 bg-white/5 shadow-sm' 
                    : 'border-white/10 bg-black/40 opacity-70'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-rose-500/15 border border-rose-500/30 text-roseGold-300">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Love Story & Gallery</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            invitationData.sections?.loveStory !== false 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                          }`}>
                            {invitationData.sections?.loveStory !== false ? 'Active' : 'Disabled'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Milestones, romance timeline & photo memories.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleSection('loveStory')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        invitationData.sections?.loveStory !== false ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          invitationData.sections?.loveStory !== false ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expandable milestone configuration if active */}
                  {invitationData.sections?.loveStory !== false && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                      <div className="text-[11px] font-semibold text-champagne-300 uppercase tracking-wider">
                        Custom Milestones & Photos
                      </div>
                      {invitationData.loveStories?.map((story, sIdx) => (
                        <div key={sIdx} className="p-2 rounded-xl bg-black/40 border border-white/10 space-y-1.5 text-xs">
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={story.year}
                              onChange={(e) => handleUpdateLoveStory(sIdx, 'year', e.target.value)}
                              placeholder="Year (e.g. 2021)"
                              className="w-20 px-2 py-1 rounded bg-white/5 border border-white/10 text-champagne-300 font-mono text-xs"
                            />
                            <input
                              type="text"
                              value={story.title}
                              onChange={(e) => handleUpdateLoveStory(sIdx, 'title', e.target.value)}
                              placeholder="Story Title"
                              className="flex-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-white text-xs font-semibold"
                            />
                          </div>
                          <input
                            type="text"
                            value={story.image}
                            onChange={(e) => handleUpdateLoveStory(sIdx, 'image', e.target.value)}
                            placeholder="Photo Image URL (https://...)"
                            className="w-full px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300 text-[11px]"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. EVENT SCHEDULE / ITINERARY */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  invitationData.sections?.itinerary !== false 
                    ? 'border-champagne-400/40 bg-white/5 shadow-sm' 
                    : 'border-white/10 bg-black/40 opacity-70'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-champagne-500/15 border border-champagne-500/30 text-champagne-300">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Schedule / Order of Celebration</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            invitationData.sections?.itinerary !== false 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                          }`}>
                            {invitationData.sections?.itinerary !== false ? 'Active' : 'Disabled'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Step-by-step ceremony and reception timeline.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleSection('itinerary')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        invitationData.sections?.itinerary !== false ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          invitationData.sections?.itinerary !== false ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* 4. VENUE & GOOGLE MAPS NAVIGATION */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  invitationData.sections?.venue !== false 
                    ? 'border-champagne-400/40 bg-white/5 shadow-sm' 
                    : 'border-white/10 bg-black/40 opacity-70'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Venue & Map Directions</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            invitationData.sections?.venue !== false 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                          }`}>
                            {invitationData.sections?.venue !== false ? 'Active' : 'Disabled'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Venue address, Google/Apple Maps buttons & parking info.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleSection('venue')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        invitationData.sections?.venue !== false ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          invitationData.sections?.venue !== false ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* 5. DRESS CODE & MOODBOARD */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  invitationData.sections?.dressCode !== false 
                    ? 'border-champagne-400/40 bg-white/5 shadow-sm' 
                    : 'border-white/10 bg-black/40 opacity-70'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                        <Shirt className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Dress Code & Moodboard</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            invitationData.sections?.dressCode !== false 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                          }`}>
                            {invitationData.sections?.dressCode !== false ? 'Active' : 'Disabled'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Attire guidance and curated color palette inspiration dots.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleSection('dressCode')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        invitationData.sections?.dressCode !== false ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          invitationData.sections?.dressCode !== false ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {invitationData.sections?.dressCode !== false && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                      <input
                        type="text"
                        value={invitationData.dressCodeNote || ''}
                        onChange={(e) => handleFieldChange('dressCodeNote', e.target.value)}
                        placeholder="Attire Note (e.g. Formal evening gowns and dark suits encouraged)"
                        className="w-full px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white"
                      />
                    </div>
                  )}
                </div>

                {/* 6. WISHING WELL & DIGITAL REGISTRY */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  invitationData.sections?.wishingWell !== false 
                    ? 'border-champagne-400/40 bg-white/5 shadow-sm' 
                    : 'border-white/10 bg-black/40 opacity-70'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-fuchsia-500/15 border border-fuchsia-500/30 text-fuchsia-300">
                        <Gift className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Wishing Well & Registry</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            invitationData.sections?.wishingWell !== false 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                          }`}>
                            {invitationData.sections?.wishingWell !== false ? 'Active' : 'Disabled'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Honeymoon fund, Bank transfer / Zelle / UPI info & online registry link.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleSection('wishingWell')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        invitationData.sections?.wishingWell !== false ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          invitationData.sections?.wishingWell !== false ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {invitationData.sections?.wishingWell !== false && (
                    <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                      <input
                        type="text"
                        value={invitationData.wishingWellTitle || ''}
                        onChange={(e) => handleFieldChange('wishingWellTitle', e.target.value)}
                        placeholder="Fund Title (e.g. Honeymoon Fund • Chase / Zelle)"
                        className="w-full px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white"
                      />
                      <input
                        type="text"
                        value={invitationData.wishingWellAccount || ''}
                        onChange={(e) => handleFieldChange('wishingWellAccount', e.target.value)}
                        placeholder="Account / UPI / Zelle details"
                        className="w-full px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs text-champagne-300 font-mono"
                      />
                      <input
                        type="text"
                        value={invitationData.registryUrl || ''}
                        onChange={(e) => handleFieldChange('registryUrl', e.target.value)}
                        placeholder="Online Registry URL (e.g. https://amazon.com/...)"
                        className="w-full px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-300"
                      />
                    </div>
                  )}
                </div>

                {/* 7. COUNTDOWN CLOCK */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  invitationData.sections?.countdown !== false 
                    ? 'border-champagne-400/40 bg-white/5 shadow-sm' 
                    : 'border-white/10 bg-black/40 opacity-70'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Live Countdown Clock</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            invitationData.sections?.countdown !== false 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                          }`}>
                            {invitationData.sections?.countdown !== false ? 'Active' : 'Disabled'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Ticking days, hours, mins & secs countdown timer.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleSection('countdown')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        invitationData.sections?.countdown !== false ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          invitationData.sections?.countdown !== false ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* 8. AMBIENT MUSIC PLAYER */}
                <div className={`p-3.5 rounded-2xl border transition-all ${
                  invitationData.sections?.music !== false 
                    ? 'border-champagne-400/40 bg-white/5 shadow-sm' 
                    : 'border-white/10 bg-black/40 opacity-70'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-yellow-500/15 border border-yellow-500/30 text-yellow-300">
                        <Music className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Ambient Background Music</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            invitationData.sections?.music !== false 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                          }`}>
                            {invitationData.sections?.music !== false ? 'Active' : 'Disabled'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Floating sound button & envelope opening soundtrack.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleSection('music')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        invitationData.sections?.music !== false ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          invitationData.sections?.music !== false ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 3: THEME, FONTS & WAX SEAL */}
          {activeTab === 'theme' && (
            <div className="space-y-6">
              
              {/* Color Themes */}
              <div>
                <label className="block text-xs font-semibold text-champagne-300 mb-2 uppercase tracking-wider">
                  Select Color Theme & Foil Texture
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.values(COLOR_THEMES).map((thm) => (
                    <button
                      key={thm.id}
                      onClick={() => setThemeId(thm.id)}
                      className={`p-2.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        themeId === thm.id
                          ? 'border-champagne-400 bg-white/10 shadow-glow-gold'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div 
                        className="w-6 h-6 rounded-full border border-white/30 flex-shrink-0"
                        style={{ backgroundColor: thm.accent }}
                      />
                      <div className="truncate">
                        <div className="text-xs font-semibold text-white truncate">{thm.name}</div>
                        <div className="text-[10px] text-slate-400 capitalize">{thm.foilType} Foil</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Typography Pairings */}
              <div>
                <label className="block text-xs font-semibold text-champagne-300 mb-2 uppercase tracking-wider">
                  Typography Pairing
                </label>
                <div className="space-y-2">
                  {Object.values(FONT_PAIRINGS).map((fnt) => (
                    <button
                      key={fnt.id}
                      onClick={() => setFontPairingId(fnt.id)}
                      className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        fontPairingId === fnt.id
                          ? 'border-champagne-400 bg-white/10 shadow-glow-gold'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{fnt.name}</div>
                        <div className="text-[11px] text-slate-400">{fnt.description}</div>
                      </div>
                      {fontPairingId === fnt.id && (
                        <Check className="w-4 h-4 text-champagne-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wax Seal Symbol */}
              <div>
                <label className="block text-xs font-semibold text-champagne-300 mb-2 uppercase tracking-wider">
                  Wax Seal Design
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {WAX_SEALS.map((seal) => (
                    <button
                      key={seal.id}
                      onClick={() => setSealId(seal.id)}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                        sealId === seal.id
                          ? 'border-champagne-400 bg-champagne-500/20 text-white shadow-glow-gold'
                          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="text-xl">{seal.icon}</span>
                      <span className="text-[9px] truncate w-full text-center">{seal.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Wax Color Picker */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Custom Wax Seal Color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={sealColor}
                    onChange={(e) => setSealColor(e.target.value)}
                    className="w-10 h-10 rounded-xl cursor-pointer bg-transparent border-0"
                  />
                  <span className="text-xs font-mono text-slate-300">{sealColor}</span>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: ITINERARY & SCHEDULE */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Event Day Timeline Items
                </span>
                <button
                  type="button"
                  onClick={handleAddItineraryItem}
                  className="px-2.5 py-1 rounded-lg bg-champagne-500/20 hover:bg-champagne-500/30 text-champagne-300 text-xs font-semibold border border-champagne-500/30 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Step</span>
                </button>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {invitationData.itinerary?.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                    <input
                      type="text"
                      value={item.time}
                      onChange={(e) => handleUpdateItinerary(idx, 'time', e.target.value)}
                      placeholder="4:00 PM"
                      className="w-24 px-2 py-1 bg-black/40 border border-white/10 rounded-lg text-xs font-mono text-champagne-300"
                    />
                    <input
                      type="text"
                      value={item.event}
                      onChange={(e) => handleUpdateItinerary(idx, 'event', e.target.value)}
                      placeholder="Event name"
                      className="flex-1 px-2 py-1 bg-black/40 border border-white/10 rounded-lg text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveItinerary(idx)}
                      className="p-1 text-slate-400 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: AUDIO & AMBIENT MUSIC */}
          {activeTab === 'music' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-300">
                Choose the ambient music track that auto-plays when guests open the 3D envelope.
              </div>

              <div className="space-y-2">
                {AMBIENT_TRACKS.map((track) => {
                  const isSelected = ambientTrackId === track.id;
                  const isCurrentlyPlaying = isSelected && isAudioPlaying;

                  return (
                    <div
                      key={track.id}
                      className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'border-champagne-400 bg-champagne-500/10'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{track.title}</div>
                        <div className="text-[11px] text-champagne-300/80">{track.genre}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isCurrentlyPlaying ? (
                          <button
                            onClick={handleStopAudio}
                            className="p-2 rounded-xl bg-champagne-500 text-slate-950 text-xs font-bold flex items-center gap-1 shadow-glow-gold"
                          >
                            <VolumeX className="w-3.5 h-3.5" />
                            <span>Stop</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handlePlayAudioTrack(track.id)}
                            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-champagne-300 text-xs font-semibold flex items-center gap-1 border border-white/15"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Play</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: INTERACTIVE CANVAS PREVIEW */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Canvas Mode Switcher Bar */}
          <div className="glass-panel p-2.5 rounded-2xl border border-champagne-500/20 flex flex-wrap items-center justify-between gap-3 shadow-md">
            
            {/* View Modes */}
            <div className="flex items-center gap-1 overflow-x-auto">
              <button
                onClick={() => setPreviewMode('webpage')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  previewMode === 'webpage'
                    ? 'bg-gradient-to-r from-champagne-400 to-amber-500 text-slate-950 font-bold shadow-md'
                    : 'text-champagne-300 bg-champagne-500/10 hover:bg-champagne-500/20 border border-champagne-500/30'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Arabic Style Invitation</span>
              </button>

              <button
                onClick={() => setPreviewMode('card')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  previewMode === 'card'
                    ? 'bg-champagne-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Card View</span>
              </button>

              <button
                onClick={() => setPreviewMode('envelope')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  previewMode === 'envelope'
                    ? 'bg-champagne-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D Unboxing</span>
              </button>

              <button
                onClick={() => setPreviewMode('rsvp')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  previewMode === 'rsvp'
                    ? 'bg-champagne-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>RSVP View</span>
              </button>
            </div>

            {/* Device Frame Switcher */}
            <div className="flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setDeviceMode('mobile')}
                title="Mobile Screen (375px)"
                className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all ${
                  deviceMode === 'mobile' 
                    ? 'bg-champagne-500 text-slate-950 font-bold shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>

              <button
                onClick={() => setDeviceMode('tablet')}
                title="Tablet Screen (768px)"
                className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all ${
                  deviceMode === 'tablet' 
                    ? 'bg-champagne-500 text-slate-950 font-bold shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>

              <button
                onClick={() => setDeviceMode('desktop')}
                title="Desktop Screen (Fluid)"
                className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all ${
                  deviceMode === 'desktop' 
                    ? 'bg-champagne-500 text-slate-950 font-bold shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
            </div>

          </div>

          {/* Live Preview Stage Container */}
          <div className="glass-panel rounded-3xl p-2 sm:p-6 border border-champagne-500/20 shadow-2xl flex flex-col items-center justify-center min-h-[580px] overflow-x-auto">
            
            {/* Viewport Dimension Header Badge */}
            <div className="w-full flex items-center justify-between pb-3 px-2 text-[11px] font-mono text-slate-400 border-b border-white/10 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold">Live Responsive Canvas:</span>
                <span className="text-champagne-300">
                  {deviceMode === 'mobile' ? '375 × 812 (Mobile Viewport)' : deviceMode === 'tablet' ? '768 × 1024 (Tablet Viewport)' : '100% Fluid (Desktop Full Viewport)'}
                </span>
              </div>
              <div className="hidden sm:block text-slate-500">
                Responsive CSS Grid & Flexbox
              </div>
            </div>

            <div className={`transition-all duration-300 w-full ${
              deviceMode === 'mobile' 
                ? 'max-w-[390px] border-[6px] border-slate-700 rounded-[44px] overflow-hidden bg-black/95 shadow-2xl relative' 
                : deviceMode === 'tablet'
                  ? 'max-w-[768px] border-[8px] border-slate-700 rounded-[32px] overflow-hidden bg-black/95 shadow-2xl'
                  : 'max-w-full rounded-2xl overflow-hidden bg-black/90'
            }`}>
              
              {/* Dynamic Island for mobile frame */}
              {deviceMode === 'mobile' && (
                <div className="w-full h-7 bg-black flex items-center justify-center relative z-30 pt-1">
                  <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-between px-2">
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-900/60" />
                  </div>
                </div>
              )}

              {previewMode === 'webpage' && (
                <div className="max-h-[750px] overflow-y-auto">
                  <PremiumWebpageInvitation
                    invitationData={invitationData}
                    themeId={themeId}
                    fontPairingId={fontPairingId}
                    sealId={sealId}
                    sealColor={sealColor}
                    ambientTrackId={ambientTrackId}
                  />
                </div>
              )}

              {previewMode === 'card' && (
                <div className="p-4 sm:p-6 flex justify-center">
                  <InvitationCard
                    invitationData={invitationData}
                    themeId={themeId}
                    fontPairingId={fontPairingId}
                    sealId={sealId}
                    sealColor={sealColor}
                  />
                </div>
              )}

              {previewMode === 'envelope' && (
                <div className="p-4 sm:p-6 flex justify-center">
                  <EnvelopeExperience
                    invitationData={invitationData}
                    themeId={themeId}
                    fontPairingId={fontPairingId}
                    sealId={sealId}
                    sealColor={sealColor}
                    ambientTrackId={ambientTrackId}
                    onProceedToRsvp={() => setPreviewMode('rsvp')}
                  />
                </div>
              )}

              {previewMode === 'rsvp' && (
                <div className="p-4 sm:p-6">
                  <RsvpSection
                    invitationData={invitationData}
                  />
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
