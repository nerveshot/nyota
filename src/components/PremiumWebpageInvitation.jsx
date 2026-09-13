import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Heart, Calendar, Clock, MapPin, Navigation, 
  Music, Volume2, VolumeX, Share2, Copy, Check, ChevronDown, 
  ExternalLink, Gift, Shirt, Send, MessageSquare, Compass, Eye, ArrowRight
} from 'lucide-react';
import { musicEngine } from '../utils/audioPlayer';
import RsvpSection from './RsvpSection';
import { COLOR_THEMES, FONT_PAIRINGS, WAX_SEALS } from '../data/templates';

export default function PremiumWebpageInvitation({
  invitationData,
  themeId = 'emeraldGold',
  fontPairingId = 'classicSerif',
  sealId = 'botanical',
  sealColor = '#B88B42',
  ambientTrackId = 'romanticPiano',
  onBack,
  isStandalone = false,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 36,
    seconds: 20
  });

  const theme = COLOR_THEMES[themeId] || COLOR_THEMES.emeraldGold;
  const fonts = FONT_PAIRINGS[fontPairingId] || FONT_PAIRINGS.classicSerif;
  const seal = WAX_SEALS.find(s => s.id === sealId) || WAX_SEALS[0];

  const {
    tag = 'TOGETHER WITH THEIR FAMILIES',
    title = 'The Wedding Celebration Of',
    primaryNames = 'Elena Vance & Arthur Pendelton',
    dateText = 'Saturday, October 24, 2026',
    timeText = 'Four O\'clock In The Afternoon',
    venueName = 'The St. Regis Grand Ballroom',
    venueAddress = 'Two East 55th Street, New York, NY 10022',
    receptionInfo = 'Dinner, Dancing & Champagne Reception To Follow',
    dressCode = 'Black Tie Optional',
    rsvpDeadline = 'Kindly RSVP by September 15, 2026',
    hostMessage = 'Two souls with but a single thought, two hearts that beat as one. We invite you to share in our joy as we begin this new chapter.',
    itinerary = [
      { time: '4:00 PM', event: 'Guest Arrival & Welcome Champagne', icon: '🥂' },
      { time: '4:30 PM', event: 'Holy Matrimony & Vows', icon: '💍' },
      { time: '6:00 PM', event: 'Twilight Cocktail Hour & Canapés', icon: '🍸' },
      { time: '7:30 PM', event: 'Four-Course Gala Dinner & Toasts', icon: '🍽️' },
      { time: '9:00 PM', event: 'First Dance & Dancing Under The Stars', icon: '✨' },
    ],
    registryUrl = 'https://registry.example.com/elena-arthur',
  } = invitationData || {};

  // Live countdown ticker
  useEffect(() => {
    const targetDate = new Date('2026-10-24T16:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Story milestones
  const loveStories = [
    {
      year: '2021',
      title: 'The First Encounter',
      desc: 'A chance meeting on a rainy autumn evening in Manhattan that turned into hours of endless conversation over espresso.',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80',
    },
    {
      year: '2024',
      title: 'Under Lake Como Stars',
      desc: 'Surrounded by the serene Italian waters and candlelight, Arthur asked the question that changed forever.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80',
    },
    {
      year: '2026',
      title: 'Forever Begins',
      desc: 'Gathered with our most cherished family and friends to exchange sacred vows and dance through the night.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=80',
    }
  ];

  // Dress code color palette
  const dressCodeColors = [
    { name: 'Emerald', hex: '#0B3325' },
    { name: 'Gold Foil', hex: '#D4AA64' },
    { name: 'Champagne', hex: '#F4E8D4' },
    { name: 'Rose Quartz', hex: '#E8A598' },
    { name: 'Midnight', hex: '#121638' },
  ];

  const handleOpenInvitation = () => {
    setIsOpened(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AA64', '#FAF5ED', '#F8B6C3', '#0B3325', '#FFFFFF'],
      });
    } catch (e) {
      console.log(e);
    }

    musicEngine.startTrack(ambientTrackId || 'romanticPiano');
    setIsPlayingMusic(true);

    setTimeout(() => {
      const el = document.getElementById('invitation-hero');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const handleToggleMusic = () => {
    if (isPlayingMusic) {
      musicEngine.stopTrack();
      setIsPlayingMusic(false);
    } else {
      musicEngine.startTrack(ambientTrackId || 'romanticPiano');
      setIsPlayingMusic(true);
    }
  };

  const handleCopyBank = () => {
    navigator.clipboard.writeText('US94830294829103948 - Elena & Arthur');
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate Google Calendar Link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(primaryNames + ' - ' + title)}&dates=20261024T200000Z/20261025T040000Z&details=${encodeURIComponent(hostMessage)}&location=${encodeURIComponent(venueName + ', ' + venueAddress)}`;

  return (
    <div className={`min-h-screen ${theme.bgClass} text-slate-100 selection:bg-champagne-500/30 selection:text-champagne-300 relative overflow-x-hidden font-sans`}>
      
      {/* BACKGROUND FLOATING GLOW & SPARKLES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-champagne-500/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-roseGold-500/10 blur-[130px]" />
      </div>

      {/* ========================================================================= */}
      {/* 1. CINEMATIC UNBOXING ENVELOPE GATE (INITIAL VIEW BEFORE OPENING) */}
      {/* ========================================================================= */}
      {!isOpened && (
        <div className="fixed inset-0 z-50 bg-[#0B0914]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-fadeIn">
          
          <div className="relative w-full max-w-md text-center space-y-6">
            
            {/* Top Monogram Emblem */}
            <div className="w-16 h-16 rounded-full mx-auto p-[2px] bg-gradient-to-br from-champagne-400 via-amber-500 to-amber-700 shadow-glow-gold flex items-center justify-center">
              <div className="w-full h-full bg-[#0E0C1C] rounded-full flex items-center justify-center">
                <span className="font-cinzel text-xl font-bold gold-gradient-text">
                  E ✦ A
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.3em] text-champagne-300 font-mono">
                EXCLUSIVE WEBPAGE INVITATION
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug">
                {primaryNames}
              </h1>
              <p className="text-xs text-slate-300 italic max-w-xs mx-auto">
                "We cordially invite you to celebrate our love story and wedding celebration."
              </p>
            </div>

            {/* 3D Wax Seal Unboxing Button */}
            <div className="pt-4 flex flex-col items-center gap-3">
              <button
                onClick={handleOpenInvitation}
                className="group relative w-24 h-24 rounded-full p-[3px] shadow-glow-gold flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                style={{
                  background: `linear-gradient(135deg, #FFF, ${sealColor}, #222)`
                }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-champagne-400 animate-ping opacity-60 pointer-events-none" />
                <div 
                  className="w-full h-full rounded-full flex items-center justify-center text-4xl shadow-inner border-2 border-white/40"
                  style={{ backgroundColor: sealColor }}
                >
                  {seal.icon}
                </div>
              </button>

              <button
                onClick={handleOpenInvitation}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-xs shadow-glow-gold flex items-center gap-2 group-hover:opacity-95"
              >
                <span>Tap Seal to Open Invitation</span>
                <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              </button>
            </div>

            <div className="text-[10px] text-slate-400 font-mono tracking-widest pt-4">
              🎵 Background celebration audio will auto-play upon opening
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. FLOATING TOP CONTROLS (MUSIC PLAYER & BACK BUTTON) */}
      {/* ========================================================================= */}
      {isOpened && (
        <div className="fixed top-4 left-4 right-4 z-40 max-w-xl mx-auto flex items-center justify-between pointer-events-none">
          {onBack ? (
            <button
              onClick={onBack}
              className="pointer-events-auto px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-slate-200 border border-white/15 text-xs font-semibold hover:bg-white/10 transition-colors shadow-lg"
            >
              ← Back to Studio
            </button>
          ) : <div />}

          {/* Floating Rotating Vinyl Music Button */}
          <button
            onClick={handleToggleMusic}
            title={isPlayingMusic ? "Mute audio" : "Play ambient music"}
            className="pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-champagne-400/40 text-champagne-300 text-xs font-medium shadow-glow-gold hover:bg-black/90 transition-all"
          >
            {isPlayingMusic ? (
              <>
                <div className="w-4 h-4 rounded-full border border-champagne-400 flex items-center justify-center animate-spin">
                  <div className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
                </div>
                <span className="hidden sm:inline">Music Playing</span>
                <Volume2 className="w-3.5 h-3.5 text-champagne-400" />
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span>Play Song</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. MAIN WEBPAGE INVITATION CONTENT CONTAINER (MAX-W-XL MOBILE-FIRST STYLE) */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-lg mx-auto min-h-screen pb-28">
        
        {/* HERO HEADER SECTION */}
        <section id="invitation-hero" className="pt-20 pb-12 px-6 text-center space-y-6">
          
          {/* Monogram Crest */}
          <div className="w-20 h-20 rounded-full mx-auto p-[2px] bg-gradient-to-br from-champagne-400 via-amber-500 to-amber-700 shadow-glow-gold flex items-center justify-center">
            <div className="w-full h-full bg-[#09261B] rounded-full flex items-center justify-center border border-champagne-300/40">
              <span className="font-cinzel text-2xl font-bold gold-gradient-text">
                E ✦ A
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-champagne-400/60" />
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-champagne-300 font-semibold">
                {tag}
              </span>
              <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-champagne-400/60" />
            </div>

            <p className={`text-xs sm:text-sm text-slate-300/90 italic ${fonts.body}`}>
              {title}
            </p>

            {/* Names in Calligraphy */}
            <h1 className={`text-4xl sm:text-5xl font-bold tracking-wide leading-tight gold-gradient-text ${fonts.heading}`}>
              {primaryNames}
            </h1>

            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed pt-2">
              "{hostMessage}"
            </p>
          </div>

          {/* Date & Location Pill Card */}
          <div className="glass-panel p-5 rounded-3xl border border-champagne-500/30 space-y-3 shadow-luxury">
            <div className="flex items-center justify-center gap-2 text-champagne-300 text-xs font-mono tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5 text-champagne-400" />
              <span>{dateText}</span>
            </div>

            <div className="text-sm font-semibold text-white">
              {timeText}
            </div>

            <div className="pt-2 border-t border-white/10 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white">{venueName}</div>
              <div className="text-[11px] text-slate-400">{venueAddress}</div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-champagne-500/20 hover:bg-champagne-500/30 text-champagne-300 text-xs font-semibold border border-champagne-500/40 flex items-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-champagne-400" />
                <span>Add To Calendar</span>
              </a>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 4. COUNTDOWN CLOCK */}
        {/* ========================================================================= */}
        <section className="px-6 py-6 text-center space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-champagne-400 font-mono font-semibold">
            COUNTING DOWN TO FOREVER
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            <div className="glass-panel p-3 rounded-2xl border border-champagne-500/20 text-center">
              <div className="text-2xl sm:text-3xl font-bold font-cinzel text-white">{timeLeft.days}</div>
              <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">Days</div>
            </div>

            <div className="glass-panel p-3 rounded-2xl border border-champagne-500/20 text-center">
              <div className="text-2xl sm:text-3xl font-bold font-cinzel text-white">{timeLeft.hours}</div>
              <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">Hours</div>
            </div>

            <div className="glass-panel p-3 rounded-2xl border border-champagne-500/20 text-center">
              <div className="text-2xl sm:text-3xl font-bold font-cinzel text-white">{timeLeft.minutes}</div>
              <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">Mins</div>
            </div>

            <div className="glass-panel p-3 rounded-2xl border border-champagne-500/20 text-center">
              <div className="text-2xl sm:text-3xl font-bold font-cinzel text-champagne-400">{timeLeft.seconds}</div>
              <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">Secs</div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. LOVE STORY & PHOTO MEMORIES (POLAROID CAROUSEL) */}
        {/* ========================================================================= */}
        <section className="px-6 py-10 space-y-6">
          <div className="text-center space-y-1">
            <div className="inline-flex items-center gap-1 text-roseGold-300 text-xs font-mono uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-roseGold-400" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-2xl font-cinzel font-bold text-white">
              The Love <span className="gold-gradient-text">Story</span>
            </h2>
          </div>

          <div className="space-y-6">
            {loveStories.map((story, idx) => (
              <div 
                key={idx} 
                className="glass-panel rounded-3xl p-4 border border-white/10 shadow-xl space-y-3 group hover:border-champagne-400/40 transition-all"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-champagne-300 text-xs font-mono font-bold border border-white/20">
                    {story.year}
                  </div>
                </div>

                <div className="space-y-1 px-1">
                  <h3 className="font-cinzel text-base font-bold text-white">
                    {story.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {story.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. EVENT ITINERARY / TIMELINE */}
        {/* ========================================================================= */}
        <section id="schedule-section" className="px-6 py-10 space-y-6">
          <div className="text-center space-y-1">
            <div className="text-champagne-400 text-xs font-mono uppercase tracking-wider">
              EVENT PROGRAM
            </div>
            <h2 className="text-2xl font-cinzel font-bold text-white">
              Order of <span className="gold-gradient-text">Celebration</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-champagne-500/30 ml-4 space-y-6 pl-6 py-2">
            {itinerary.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Golden Timeline Node Dot */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-champagne-500 border-4 border-[#09261B] shadow-glow-gold" />

                <div className="glass-panel p-3.5 rounded-2xl border border-white/10 space-y-1 group-hover:border-champagne-400/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-champagne-300">
                      {item.time}
                    </span>
                    <span className="text-sm">{item.icon || '✦'}</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {item.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. VENUE & GOOGLE MAPS NAVIGATION */}
        {/* ========================================================================= */}
        <section id="venue-section" className="px-6 py-10 space-y-6">
          <div className="text-center space-y-1">
            <div className="text-champagne-400 text-xs font-mono uppercase tracking-wider">
              LOCATION & TRAVEL
            </div>
            <h2 className="text-2xl font-cinzel font-bold text-white">
              The Venue & <span className="gold-gradient-text">Directions</span>
            </h2>
          </div>

          <div className="glass-panel rounded-3xl p-5 border border-champagne-500/30 space-y-4 shadow-luxury">
            <div className="aspect-video rounded-2xl overflow-hidden relative shadow-inner bg-black/40">
              <img
                src="https://images.unsplash.com/photo-1545232979-fbf6c14e1071?w=600&auto=format&fit=crop&q=80"
                alt="Venue Grand Ballroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <div>
                  <div className="font-cinzel text-lg font-bold text-white">{venueName}</div>
                  <div className="text-xs text-slate-300">{venueAddress}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueName + ' ' + venueAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-champagne-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-champagne-400 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>

              <a
                href={`https://maps.apple.com/?q=${encodeURIComponent(venueName + ' ' + venueAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/15 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Apple Maps</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. DRESS CODE & COLOR PALETTE */}
        {/* ========================================================================= */}
        <section className="px-6 py-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-champagne-400 text-xs font-mono uppercase tracking-wider">
            <Shirt className="w-3.5 h-3.5" />
            <span>Dress Code & Moodboard</span>
          </div>

          <div className="glass-panel p-5 rounded-3xl border border-white/10 space-y-4">
            <div className="text-base font-bold text-white font-cinzel">
              {dressCode}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
              We kindly request our guests to dress in formal attire. Formal evening gowns and classic dark suits or tuxedos are warmly encouraged.
            </p>

            <div className="pt-2">
              <div className="text-[11px] text-slate-400 uppercase font-mono mb-2">
                Color Palette Inspiration
              </div>
              <div className="flex items-center justify-center gap-3">
                {dressCodeColors.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white/30 shadow-md transform hover:scale-110 transition-transform"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[9px] text-slate-400">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. WISHING WELL & DIGITAL ENVELOPE / GIFT REGISTRY */}
        {/* ========================================================================= */}
        <section className="px-6 py-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-champagne-400 text-xs font-mono uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            <span>Wishing Well & Registry</span>
          </div>

          <div className="glass-panel p-5 rounded-3xl border border-white/10 space-y-4">
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
              Your love, presence, and prayers on our special day are the greatest gifts of all. 
              For those who wish to contribute toward our honeymoon adventures:
            </p>

            <div className="bg-black/50 p-3.5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-white">
                Honeymoon Fund • Chase / Zelle
              </div>
              <div className="text-xs font-mono text-champagne-300">
                US94830294829103948 (Elena & Arthur)
              </div>
              <button
                onClick={handleCopyBank}
                className="mt-1 px-4 py-1.5 rounded-lg bg-champagne-500 text-slate-950 font-bold text-xs inline-flex items-center gap-1 shadow-md hover:bg-champagne-400 transition-colors"
              >
                {copiedBank ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBank ? 'Account Copied!' : 'Copy Account Details'}</span>
              </button>
            </div>

            {registryUrl && (
              <div className="pt-1">
                <a
                  href={registryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-champagne-300 hover:text-champagne-200 underline underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>View Online Crate & Barrel / Amazon Registry</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. INTERACTIVE RSVP & GUESTBOOK FEED */}
        {/* ========================================================================= */}
        <section id="rsvp-section" className="px-6 py-10">
          <RsvpSection
            invitationData={invitationData}
          />
        </section>

        {/* FOOTER OF THE INVITATION */}
        <div className="text-center pt-8 pb-12 space-y-2 text-xs text-slate-400">
          <div className="w-8 h-8 rounded-full bg-champagne-500/20 text-champagne-400 mx-auto flex items-center justify-center font-bold text-xs border border-champagne-400/40">
            ⚜️
          </div>
          <p className="font-serif italic text-sm text-slate-300">
            With endless love, {primaryNames}
          </p>
          <div className="text-[10px] text-slate-500 font-mono">
            Crafted with Nyota Luxury Webpage Invitations
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 11. STICKY BOTTOM MOBILE QUICK ACTIONS BAR */}
      {/* ========================================================================= */}
      {isOpened && (
        <div className="fixed bottom-3 left-4 right-4 z-40 max-w-md mx-auto">
          <div className="glass-panel py-2 px-3 rounded-full border border-champagne-400/40 shadow-2xl flex items-center justify-around text-xs font-semibold bg-black/80 backdrop-blur-lg">
            
            <button
              onClick={() => scrollToSection('invitation-hero')}
              className="p-2 flex flex-col items-center gap-0.5 text-slate-300 hover:text-champagne-300"
            >
              <Compass className="w-4 h-4 text-champagne-400" />
              <span className="text-[10px]">Top</span>
            </button>

            <button
              onClick={() => scrollToSection('schedule-section')}
              className="p-2 flex flex-col items-center gap-0.5 text-slate-300 hover:text-champagne-300"
            >
              <Clock className="w-4 h-4 text-champagne-400" />
              <span className="text-[10px]">Program</span>
            </button>

            <button
              onClick={() => scrollToSection('venue-section')}
              className="p-2 flex flex-col items-center gap-0.5 text-slate-300 hover:text-champagne-300"
            >
              <MapPin className="w-4 h-4 text-champagne-400" />
              <span className="text-[10px]">Venue</span>
            </button>

            <button
              onClick={() => scrollToSection('rsvp-section')}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold shadow-glow-gold flex items-center gap-1"
            >
              <Send className="w-3.5 h-3.5 text-slate-950" />
              <span>RSVP</span>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
