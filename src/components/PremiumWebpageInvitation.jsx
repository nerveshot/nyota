import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Heart, Calendar, Clock, MapPin, Navigation, 
  Music, Volume2, VolumeX, Share2, Copy, Check, ChevronDown, 
  ExternalLink, Gift, Shirt, Send, MessageSquare, Compass, Eye, ArrowRight,
  ShieldCheck, Car, Sparkle, Play, Users, QrCode, Moon, Star, Globe
} from 'lucide-react';
import { musicEngine } from '../utils/audioPlayer';
import RsvpSection from './RsvpSection';
import { COLOR_THEMES, FONT_PAIRINGS } from '../data/templates';

export default function PremiumWebpageInvitation({
  invitationData,
  themeId = 'emeraldGold',
  fontPairingId = 'classicSerif',
  ambientTrackId = 'romanticPiano',
  onBack,
  isStandalone = false,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 36,
    seconds: 20
  });

  const fonts = FONT_PAIRINGS[fontPairingId] || FONT_PAIRINGS.classicSerif;

  const {
    bismillah = 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
    quranVerse = '“And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy.”',
    quranRef = 'Surah Ar-Rum (30:21)',
    duaBlessing = 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
    duaTranslation = 'May Allah bless you, shower His blessings upon you, and unite you both in goodness & harmony.',
    tag = 'TOGETHER WITH THEIR FAMILIES',
    title = 'Cordially invite you to grace the blessed wedding celebration & Nikah of',
    primaryNames = 'Zayd Al-Mansoor & Aaliyah Khan',
    dateText = 'Saturday, October 24, 2026',
    timeText = 'Five O\'Clock In The Evening',
    venueName = 'The Royal Emirates Palace & Grand Ballroom',
    venueAddress = 'West Corniche Road, Grand Palace Avenue, NY 10022',
    venueImage = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&auto=format&fit=crop&q=80',
    receptionInfo = 'Grand Royal Walima Banquet & Celebrations to Follow',
    dressCode = 'Royal Crimson, Navy Blue & Black Formal / Black Tie',
    dressCodeNote = 'We warmly encourage our cherished guests to embrace royal crimson red, deep navy sapphire, midnight black, luxury traditional attire (Sherwanis, Anarkalis, Abayas, Lehengas) or classic evening gowns & tuxedos.',
    rsvpDeadline = 'Kindly RSVP by September 15, 2026',
    hostMessage = 'With the grace and blessings of Allah (SWT), we invite you to celebrate our sacred union and share in our joy, prayers, and lifelong memories.',
    heroPhoto = '/images/muslim-royal-couple.jpg',
    itinerary = [
      { 
        time: '4:00 PM', 
        event: 'Holy Nikah Ceremony & Sacred Vows', 
        icon: '💍', 
        date: 'Oct 24, 2026',
        desc: 'The sacred religious marriage contract and exchange of solemn vows in the presence of beloved family and elders.',
        dressCodeHint: 'Royal Crimson & Gold Embroidery',
        venue: 'The Grand Mosque Pavilion'
      },
      { 
        time: '5:30 PM', 
        event: 'Dawat-e-Khas & Welcome Refreshments', 
        icon: '🥂', 
        date: 'Oct 24, 2026',
        desc: 'Gourmet Medjool dates, Arabian Kahwa, fragrant pomegranate rose coolers, and handcrafted royal appetizers.',
        dressCodeHint: 'Royal Navy & Velvet Attire',
        venue: 'The Palace Fountain Courtyard'
      },
      { 
        time: '7:00 PM', 
        event: 'Baraat Arrival & Royal Reception', 
        icon: '👑', 
        date: 'Oct 24, 2026',
        desc: 'Grand royal welcome of the groom and family followed by celebratory blessings and couple entrance under floral chandeliers.',
        dressCodeHint: 'Black Tie & Midnight Velvet',
        venue: 'The Imperial Sapphire Ballroom'
      },
      { 
        time: '8:30 PM', 
        event: 'Grand Walima Feast & Dinner Banquet', 
        icon: '🍽️', 
        date: 'Oct 24, 2026',
        desc: 'An authentic multi-course royal Mughlai and Arabian feast, dessert lounge, and celebratory toasts under the starlit ceiling.',
        dressCodeHint: 'Formal Evening / Royal Red & Black',
        venue: 'The Grand Palace Dining Hall'
      },
      { 
        time: '11:00 PM', 
        event: 'Rukhsati & Heartfelt Duas', 
        icon: '✨', 
        date: 'Oct 24, 2026',
        desc: 'A tender, emotional farewell with Quranic blessings and best wishes as the newlyweds begin their blessed journey.',
        dressCodeHint: 'Formal',
        venue: 'The Palace Main Porte-Cochère'
      },
    ],
    registryUrl = 'https://registry.example.com/zayd-aaliyah',
    wishingWellTitle = 'Digital Shagun / Wedding Gift Fund',
    wishingWellAccount = 'shagun.zayd-aaliyah@upi',
    wishingWellNote = 'Your prayers, love, and presence on our special day are the greatest blessings of all. For friends and family who wish to bestow a traditional digital Shagun or gift:',
    loveStories: customLoveStories,
    sections = {},
  } = invitationData || {};

  // Section Visibility Flags
  const showCountdown = sections.countdown !== false;
  const showLoveStory = sections.loveStory !== false;
  const showItinerary = sections.itinerary !== false;
  const showVenue = sections.venue !== false;
  const showDressCode = sections.dressCode !== false;
  const showWishingWell = sections.wishingWell !== false;
  const showRsvp = sections.rsvp !== false;
  const showMusic = sections.music !== false;

  // Live countdown ticker
  useEffect(() => {
    const targetDate = new Date('2026-10-24T17:00:00').getTime();
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
  const loveStories = customLoveStories && customLoveStories.length > 0 ? customLoveStories : [
    {
      year: '2022',
      title: 'Written in Destiny (Qadr)',
      desc: 'An arranged family introduction that blossomed into deep mutual respect, shared faith, laughter, and an unbreakable bond.',
      image: '/images/muslim-destiny.jpg',
    },
    {
      year: '2024',
      title: 'The Blessed Engagement',
      desc: 'Surrounded by our families and sincere prayers, our rings were exchanged under golden lights with the blessings of elders.',
      image: '/images/muslim-engagement.jpg',
    },
    {
      year: '2026',
      title: 'Nikah & Two Souls United',
      desc: 'Committing to a lifetime of love, companionship, and faith as husband and wife under the grace of Allah (SWT).',
      image: '/images/muslim-nikah.jpg',
    }
  ];

  // Royal Black, Royal Red & Navy Blue Color Palette Swatches
  const dressCodeColors = [
    { name: 'Royal Crimson', hex: '#8B152B' },
    { name: 'Midnight Navy', hex: '#0B1B3D' },
    { name: 'Obsidian Black', hex: '#08080C' },
    { name: 'Imperial Gold', hex: '#D4AF37' },
    { name: 'Champagne Silk', hex: '#F5E6CC' },
  ];

  // Smooth entrance unveiling
  const handleOpenInvitation = () => {
    if (isEntering) return;
    setIsEntering(true);

    try {
      confetti({
        particleCount: 130,
        spread: 95,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#8B152B', '#0B1B3D', '#FFFFFF', '#F5D38B'],
      });
    } catch (e) {
      console.log(e);
    }

    if (showMusic) {
      musicEngine.startTrack(ambientTrackId || 'romanticPiano');
      setIsPlayingMusic(true);
    }

    setTimeout(() => {
      setIsOpened(true);
      setTimeout(() => {
        const el = document.getElementById('invitation-hero');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }, 800);
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
    navigator.clipboard.writeText(wishingWellAccount);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = `✨ You are cordially invited to the Royal Islamic Wedding Celebration of ${primaryNames}!\n\n📅 Date: ${dateText}\n📍 Venue: ${venueName}\n\nView our Arabic Style luxury invitation webpage, itinerary & RSVP here:\n${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Google Calendar Link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(primaryNames + ' - ' + title)}&dates=20261024T170000Z/20261025T010000Z&details=${encodeURIComponent(hostMessage)}&location=${encodeURIComponent(venueName + ', ' + venueAddress)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060F] via-[#100612] to-[#040207] text-slate-100 selection:bg-rose-500/30 selection:text-amber-200 relative overflow-x-hidden font-sans transition-colors duration-500">
      
      {/* BACKGROUND ROYAL BLACK, RED & NAVY BLUE GLOWS & STAR LATTICE */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Navy Blue Glow Orb */}
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#0A1A40]/30 blur-[150px]" />
        
        {/* Royal Red / Crimson Glow Orb */}
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#6E0E21]/25 blur-[150px]" />
        
        {/* Imperial Gold Center Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[160px]" />
        
        {/* Deep Navy / Red Bottom Glows */}
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0B1B3D]/30 blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4A0A17]/30 blur-[140px]" />
        
        {/* Subtle Islamic Mashrabiya Star Lattice */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#D4AF37 1.5px, transparent 1.5px), radial-gradient(#D4AF37 1.5px, #05060F 1.5px)`,
            backgroundSize: `36px 36px`,
            backgroundPosition: `0 0, 18px 18px`
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 1. ROYAL ARABIAN GATEWAY (SMOOTH & ELEGANT OPENING EXPERIENCE) */}
      {/* ========================================================================= */}
      {!isOpened && (
        <div className={`fixed inset-0 z-50 bg-[#04030A]/95 backdrop-blur-3xl flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-700 ${
          isEntering ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}>
          
          <div className="w-full max-w-lg text-center space-y-7 sm:space-y-9 animate-fadeIn flex flex-col items-center relative">
            
            {/* Top Crescent & Star Emblem in Royal Red & Gold */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-rose-500/80 to-amber-400/80" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A0A17] to-[#0A1838] border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-glow-gold">
                <Moon className="w-5 h-5 fill-amber-300/20 text-amber-300" />
              </div>
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-rose-500/80 to-amber-400/80" />
            </div>

            {/* Bismillah Arabic Calligraphy Card */}
            <div className="space-y-3 px-4">
              <div 
                className="text-2xl sm:text-4xl md:text-5xl font-serif text-amber-300 font-bold tracking-wide gold-gradient-text drop-shadow-lg leading-relaxed select-none"
                style={{ fontFamily: `'Scheherazade New', 'Amiri', serif` }}
                dir="rtl"
              >
                {bismillah}
              </div>
            </div>

            {/* Grand Moorish Royal Arch Preview Card (Black, Royal Red & Navy Blue) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] p-6 sm:p-8 rounded-t-[160px] rounded-b-3xl bg-gradient-to-b from-[#1C0612] via-[#0D1024] to-[#05030A] border-2 border-amber-400/60 shadow-[0_0_40px_rgba(139,21,43,0.35)] space-y-4 text-center group hover:border-amber-400/90 transition-all">
              
              {/* Gold Filigree Inner Border */}
              <div className="absolute inset-2 rounded-t-[150px] rounded-b-2xl border border-amber-400/30 pointer-events-none" />

              {/* Couple Initial Monogram Crest */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto p-[2px] bg-gradient-to-br from-amber-300 via-rose-500 to-blue-600 shadow-glow-gold flex items-center justify-center">
                <div className="w-full h-full bg-[#12040D] rounded-full flex items-center justify-center border-2 border-amber-300/50">
                  <span className="font-cinzel text-lg sm:text-2xl font-bold gold-gradient-text">
                    Z ✦ A
                  </span>
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <div className="text-[10px] text-rose-300 font-mono tracking-widest uppercase">
                  Dawat-e-Khas • Nikah Ceremony
                </div>
                <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white gold-gradient-text leading-snug">
                  {primaryNames}
                </h2>
                <p className="text-xs text-slate-300 font-mono pt-1">
                  {dateText}
                </p>
              </div>

              {/* Quranic Verse Snippet */}
              <div className="pt-2 border-t border-amber-400/25">
                <p className="text-[11px] text-amber-200/90 italic font-serif leading-relaxed line-clamp-2">
                  {quranVerse}
                </p>
                <div className="text-[9px] text-amber-400/70 font-mono mt-1">
                  {quranRef}
                </div>
              </div>
            </div>

            {/* Smooth Open Invitation Action Button */}
            <div className="space-y-3 pt-2 w-full max-w-xs">
              <button
                type="button"
                onClick={handleOpenInvitation}
                disabled={isEntering}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-glow-gold flex items-center justify-center gap-2.5 hover:opacity-95 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
                <span>{isEntering ? 'Unveiling Invitation...' : 'Open Royal Invitation'}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <div className="text-[11px] text-amber-300/90 font-mono tracking-wide flex items-center justify-center gap-1.5 pt-1">
                <Music className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span>Ambient celebration melody plays on opening</span>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. FLOATING TOP CONTROLS (MUSIC & SHARE) */}
      {/* ========================================================================= */}
      {isOpened && (
        <div className="fixed top-4 left-4 right-4 z-40 max-w-5xl mx-auto flex items-center justify-between pointer-events-none animate-fadeIn">
          {onBack ? (
            <button
              onClick={onBack}
              className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-slate-200 border border-amber-500/30 text-xs font-semibold hover:bg-white/10 transition-colors shadow-lg flex items-center gap-1.5"
            >
              ← Back to Studio
            </button>
          ) : <div />}

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={handleShareWhatsApp}
              title="Share on WhatsApp"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0B1B3D] to-[#4A0A17] hover:opacity-90 text-white text-xs font-semibold backdrop-blur-md border border-amber-400/40 shadow-lg transition-all"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>

            {/* Rotating Vinyl Music Player */}
            {showMusic && (
              <button
                onClick={handleToggleMusic}
                title={isPlayingMusic ? "Mute audio" : "Play celebration song"}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-medium shadow-glow-gold hover:bg-black/95 transition-all"
              >
                {isPlayingMusic ? (
                  <>
                    <div className="w-4 h-4 rounded-full border border-amber-400 flex items-center justify-center animate-spin">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </div>
                    <span className="hidden sm:inline">Playing Melody</span>
                    <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                    <span>Play Song</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. MAIN ARABIC ROYAL WEDDING WEBPAGE CONTENT */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto min-h-screen pb-40 px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HERO SECTION WITH BISMILLAH & MOORISH PALACE ARCH */}
        {/* ========================================================================= */}
        <section id="invitation-hero" className="scroll-mt-20 pt-16 sm:pt-24 pb-10 sm:pb-14 text-center space-y-6 sm:space-y-8 animate-fadeIn">
          
          {/* Sacred Bismillah Calligraphy */}
          <div className="space-y-3">
            <div 
              className="text-3xl sm:text-5xl md:text-6xl font-serif text-amber-300 font-bold tracking-wide gold-gradient-text leading-relaxed select-none"
              style={{ fontFamily: `'Scheherazade New', 'Amiri', serif` }}
              dir="rtl"
            >
              {bismillah}
            </div>

            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent via-rose-500/80 to-amber-400/60" />
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.35em] uppercase text-champagne-300 font-semibold">
                {tag}
              </span>
              <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent via-blue-500/80 to-amber-400/60" />
            </div>
          </div>

          {/* Couple Monogram Emblem with Crescent */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto p-[2px] bg-gradient-to-br from-amber-300 via-rose-500 to-blue-600 shadow-glow-gold flex items-center justify-center animate-float-gentle">
            <div className="w-full h-full bg-[#12050E] rounded-full flex items-center justify-center border-2 border-amber-300/40">
              <span className="font-cinzel text-xl sm:text-3xl font-bold gold-gradient-text">
                Z ✦ A
              </span>
            </div>
          </div>

          {/* Couple Names & Formal Title */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <p className={`text-xs sm:text-base text-rose-200/90 italic ${fonts.body}`}>
              {title}
            </p>

            <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight gold-gradient-text ${fonts.heading}`}>
              {primaryNames}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300/90 max-w-lg mx-auto leading-relaxed italic pt-1">
              "{hostMessage}"
            </p>
          </div>

          {/* QURANIC VERSE ON LOVE & MERCY CARD (Black, Red & Navy Blue) */}
          <div className="max-w-2xl mx-auto p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#170512]/90 via-[#0B1028]/90 to-[#07030F]/95 border border-amber-400/40 shadow-luxury text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-rose-300 text-xs font-mono uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-rose-300 text-rose-300" />
              <span>Ayah on Love & Marriage</span>
              <Star className="w-3.5 h-3.5 fill-rose-300 text-rose-300" />
            </div>
            <p className="font-serif italic text-sm sm:text-base text-amber-100 leading-relaxed max-w-xl mx-auto">
              {quranVerse}
            </p>
            <div className="text-xs text-amber-400 font-mono tracking-wider font-semibold">
              — {quranRef}
            </div>
          </div>

          {/* GRAND MOORISH ARCH COUPLE PORTRAIT */}
          <div className="relative max-w-md sm:max-w-lg mx-auto pt-4">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-t-[160px] sm:rounded-t-[200px] rounded-b-3xl overflow-hidden border-4 border-amber-400/70 shadow-2xl p-2 bg-gradient-to-b from-rose-950/40 via-blue-950/30 to-amber-950/40">
              
              <div className="w-full h-full rounded-t-[150px] sm:rounded-t-[190px] rounded-b-2xl overflow-hidden relative">
                <img
                  src={heroPhoto}
                  alt={primaryNames}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08020A]/95 via-black/20 to-transparent flex flex-col justify-end p-6 text-center">
                  <div className="font-cinzel text-lg sm:text-2xl font-bold text-white gold-gradient-text">
                    {primaryNames}
                  </div>
                  <div className="text-xs text-rose-200 font-mono tracking-widest mt-1">
                    {dateText}
                  </div>
                </div>
              </div>

              {/* Ornate Gold Crescent Accent */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black/80 backdrop-blur-md border border-amber-400 flex items-center justify-center text-amber-300 text-sm shadow-glow-gold">
                🌙
              </div>
            </div>
          </div>

          {/* Date & Location Main Summary Card */}
          <div className="p-5 sm:p-7 rounded-3xl border border-amber-400/40 max-w-2xl mx-auto space-y-4 shadow-luxury my-6 bg-gradient-to-br from-[#150614]/90 via-[#0B0E28]/90 to-[#06030F]/95 backdrop-blur-xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="space-y-1.5 text-center sm:text-left sm:border-r sm:border-white/10 sm:pr-4">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-rose-300 text-xs font-mono tracking-wider uppercase font-semibold">
                  <Calendar className="w-4 h-4 text-rose-400" />
                  <span>{dateText}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white flex items-center justify-center sm:justify-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400/80" />
                  <span>{timeText}</span>
                </div>
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="font-bold text-white text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{venueName}</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300">{venueAddress}</div>
              </div>
            </div>

            {/* Action Navigation & Calendar Buttons */}
            <div className={`pt-3 border-t border-white/10 grid grid-cols-1 ${showVenue ? 'sm:grid-cols-2' : ''} gap-2.5`}>
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#4A0A17] to-[#12234A] text-amber-200 text-xs font-semibold border border-amber-400/50 flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 hover:opacity-90"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Add To Google Calendar</span>
              </a>

              {showVenue && (
                <button
                  type="button"
                  onClick={() => scrollToSection('venue-section')}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-100 text-xs font-semibold border border-white/15 flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                  <span>Get Directions & Maps</span>
                </button>
              )}
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 4. LIVE COUNTDOWN CLOCK */}
        {/* ========================================================================= */}
        {showCountdown && (
          <section className="py-8 text-center space-y-4 max-w-2xl mx-auto animate-fadeIn">
            <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-mono font-semibold flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>COUNTING DOWN TO OUR NIKAH</span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            </div>

            <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
              <div className="p-3 sm:p-5 rounded-2xl border border-rose-500/30 text-center bg-gradient-to-b from-[#180614]/80 to-[#08030C]/80">
                <div className="text-2xl sm:text-4xl font-bold font-cinzel text-white">{timeLeft.days}</div>
                <div className="text-[10px] sm:text-xs text-rose-300 uppercase font-mono mt-1">Days</div>
              </div>

              <div className="p-3 sm:p-5 rounded-2xl border border-blue-500/30 text-center bg-gradient-to-b from-[#0A122C]/80 to-[#040614]/80">
                <div className="text-2xl sm:text-4xl font-bold font-cinzel text-white">{timeLeft.hours}</div>
                <div className="text-[10px] sm:text-xs text-blue-300 uppercase font-mono mt-1">Hours</div>
              </div>

              <div className="p-3 sm:p-5 rounded-2xl border border-rose-500/30 text-center bg-gradient-to-b from-[#180614]/80 to-[#08030C]/80">
                <div className="text-2xl sm:text-4xl font-bold font-cinzel text-white">{timeLeft.minutes}</div>
                <div className="text-[10px] sm:text-xs text-rose-300 uppercase font-mono mt-1">Mins</div>
              </div>

              <div className="p-3 sm:p-5 rounded-2xl border border-amber-500/40 text-center bg-gradient-to-b from-[#1F140A]/80 to-[#0C0803]/80 shadow-glow-gold">
                <div className="text-2xl sm:text-4xl font-bold font-cinzel text-amber-300">{timeLeft.seconds}</div>
                <div className="text-[10px] sm:text-xs text-amber-300 uppercase font-mono mt-1">Secs</div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 5. ROYAL ISLAMIC FESTIVITIES & PROGRAM TIMELINE */}
        {/* ========================================================================= */}
        {showItinerary && (
          <section id="schedule-section" className="scroll-mt-20 py-12 space-y-8 max-w-3xl mx-auto animate-fadeIn">
            
            {/* Header matching screenshot */}
            <div className="text-center space-y-2">
              {/* Clock Emblem */}
              <div className="w-10 h-10 rounded-full mx-auto bg-rose-500/15 border border-rose-400/40 flex items-center justify-center text-rose-300 shadow-sm">
                <Clock className="w-5 h-5 text-rose-400" />
              </div>

              {/* Script Title */}
              <h2 className="font-script text-3xl sm:text-5xl md:text-6xl text-rose-200 tracking-wide pt-1 drop-shadow-sm">
                Program Timeline
              </h2>

              {/* Fine Divider with Centered Heart */}
              <div className="flex items-center justify-center gap-3 py-1 max-w-xs mx-auto">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-rose-400/60" />
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/30" />
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-rose-400/60" />
              </div>
            </div>

            {/* Timeline Card Container */}
            <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-b from-[#180614]/85 via-[#0D102A]/85 to-[#06030F]/90 border border-amber-400/40 shadow-2xl space-y-8">
              
              {/* Vertical Continuous Timeline with Solid Crimson Dots */}
              <div className="relative pl-6 sm:pl-8 space-y-8 border-l-2 border-rose-500/40 ml-2 sm:ml-4">
                {itinerary.map((item, idx) => (
                  <div key={idx} className="relative group">
                    
                    {/* Solid Crimson Red Dot on the line */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 border-2 border-[#0B030A] shadow-[0_0_10px_rgba(225,29,72,0.6)] group-hover:scale-125 transition-transform" />

                    <div className="space-y-1">
                      {/* Event Title */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-rose-200 group-hover:text-amber-200 transition-colors">
                        {item.event}
                      </h3>

                      {/* Date & Time */}
                      <div className="text-xs sm:text-sm font-serif font-medium text-amber-300/90 flex items-center gap-2">
                        <span>{item.date ? `${item.date}, ${item.time}` : item.time}</span>
                      </div>

                      {/* Warm Welcome / Subtitle Note */}
                      <p className="text-xs sm:text-sm text-slate-300/90 italic font-serif leading-relaxed pt-0.5">
                        {item.desc || 'We Warmly welcome you..!'}
                      </p>

                      {/* Venue Tag */}
                      {item.venue && (
                        <div className="text-[11px] text-slate-400 font-mono pt-1 flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-amber-400" />
                          <span>{item.venue}</span>
                        </div>
                      )}
                    </div>

                  </div>
                ))}
              </div>



            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 6. OUR DESTINY & LOVE STORY */}
        {/* ========================================================================= */}
        {showLoveStory && (
          <section id="story-section" className="scroll-mt-20 py-12 space-y-8 animate-fadeIn">
            <div className="text-center space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-rose-300 text-xs font-mono uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-rose-400" />
                <span>Our Sacred Journey</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-white">
                The Journey of <span className="gold-gradient-text">Destiny</span>
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-8 sm:space-y-10">
              {loveStories.map((story, idx) => (
                <div 
                  key={idx} 
                  className="rounded-3xl overflow-hidden border border-amber-500/25 shadow-2xl space-y-0 group hover:border-amber-400/60 transition-all duration-500 bg-gradient-to-b from-[#140513]/90 via-[#0A0D22]/90 to-[#05020B]/95 relative"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black/60">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D22] via-black/25 to-transparent" />
                    
                    {/* Chapter & Year Badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-amber-300 text-xs font-mono font-bold border border-amber-400/40 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      <span>Chapter {idx + 1} • {story.year}</span>
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="p-6 sm:p-8 space-y-2.5">
                    <div className="inline-flex items-center gap-1.5 text-rose-300 text-xs font-mono uppercase tracking-wider">
                      <Heart className="w-3 h-3 fill-rose-400" />
                      <span>Milestone {idx + 1}</span>
                    </div>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-light">
                      {story.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 7. VENUE & GOOGLE MAPS NAVIGATION */}
        {/* ========================================================================= */}
        {showVenue && (
          <section id="venue-section" className="scroll-mt-20 py-12 space-y-8 animate-fadeIn">
            <div className="text-center space-y-1.5">
              <div className="text-amber-400 text-xs font-mono uppercase tracking-widest">
                LOCATION & DIRECTIONS
              </div>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-white">
                Palace Venue & <span className="gold-gradient-text">Travel</span>
              </h2>
            </div>

            <div className="rounded-3xl p-5 sm:p-8 border border-amber-400/40 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-gradient-to-br from-[#160613]/90 via-[#0A102D]/90 to-[#06030F]/95">
              <div className="lg:col-span-7 aspect-video rounded-2xl overflow-hidden relative shadow-inner bg-black/40 border border-amber-400/30">
                <img
                  src={venueImage}
                  alt={venueName || 'Palace Ballroom'}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&auto=format&fit=crop&q=80';
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06020A]/95 via-black/30 to-transparent flex items-end p-5 sm:p-6">
                  <div>
                    <div className="font-cinzel text-lg sm:text-2xl font-bold text-white gold-gradient-text">{venueName}</div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-0.5">{venueAddress}</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-1.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-rose-300 font-semibold flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-rose-400" />
                    <span>Valet & Chauffeur Services</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Complimentary valet parking and designated chauffeur drop-off are available at the Palace Grand Porte-Cochère for all guests.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 pt-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueName + ' ' + venueAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all"
                  >
                    <Navigation className="w-4 h-4 text-slate-950" />
                    <span>Open in Google Maps</span>
                  </a>

                  <a
                    href={`https://maps.apple.com/?q=${encodeURIComponent(venueName + ' ' + venueAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/15 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-rose-300" />
                    <span>Open in Apple Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 8. DRESS CODE & MOODBOARD (Black, Royal Red & Navy Blue) */}
        {/* ========================================================================= */}
        {showDressCode && (
          <section className="py-10 text-center space-y-6 max-w-2xl mx-auto animate-fadeIn">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <Shirt className="w-4 h-4" />
              <span>Dress Code & Royal Palette</span>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-amber-500/20 space-y-5 bg-gradient-to-b from-[#170614]/85 via-[#0A0E2A]/85 to-[#06030F]/90">
              <div className="text-lg sm:text-2xl font-bold text-white font-cinzel gold-gradient-text">
                {dressCode}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                {dressCodeNote}
              </p>

              <div className="pt-2">
                <div className="text-[11px] sm:text-xs text-rose-300/90 uppercase font-mono mb-3">
                  Royal Color Palette Inspiration
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {dressCodeColors.map((color, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1.5">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 shadow-md transform hover:scale-110 transition-transform"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-[10px] sm:text-xs text-slate-300 font-medium">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 9. DIGITAL SHAGUN & WISHING WELL */}
        {/* ========================================================================= */}
        {showWishingWell && (
          <section className="py-10 text-center space-y-6 max-w-2xl mx-auto animate-fadeIn">
            <div className="inline-flex items-center gap-1.5 text-rose-300 text-xs font-mono uppercase tracking-wider">
              <Gift className="w-4 h-4" />
              <span>Digital Shagun & Wishing Well</span>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-5 bg-gradient-to-b from-[#180515]/90 via-[#0B0F2A]/90 to-[#06030F]/95">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                {wishingWellNote}
              </p>

              <div className="bg-black/60 p-5 rounded-2xl border border-amber-400/30 space-y-3 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white">
                  <QrCode className="w-4 h-4 text-amber-400" />
                  <span>{wishingWellTitle}</span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-amber-300 bg-black/40 py-2 px-3 rounded-lg border border-white/10 select-all">
                  {wishingWellAccount}
                </div>
                <button
                  onClick={handleCopyBank}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 shadow-md hover:opacity-95 transition-opacity"
                >
                  {copiedBank ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedBank ? 'Details Copied!' : 'Copy Shagun Details'}</span>
                </button>
              </div>

              {registryUrl && (
                <div className="pt-2">
                  <a
                    href={registryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-rose-300 hover:text-amber-200 underline underline-offset-4 inline-flex items-center gap-1.5"
                  >
                    <span>View Online Gift Registry</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 10. REAL-TIME RSVP & BLESSINGS WALL */}
        {/* ========================================================================= */}
        {showRsvp && (
          <section id="rsvp-section" className="scroll-mt-20 py-12 animate-fadeIn">
            <RsvpSection
              invitationData={invitationData}
            />
          </section>
        )}

        {/* ========================================================================= */}
        {/* DUA & BLESSINGS FOOTER */}
        {/* ========================================================================= */}
        <div className="text-center pt-8 pb-12 space-y-4 text-xs text-slate-400">
          <div className="max-w-md mx-auto p-5 rounded-2xl bg-gradient-to-r from-[#1E0719] via-[#0D1230] to-[#070310] border border-amber-400/40 space-y-2">
            <div 
              className="text-lg sm:text-xl font-serif text-amber-300 font-semibold"
              style={{ fontFamily: `'Scheherazade New', 'Amiri', serif` }}
              dir="rtl"
            >
              {duaBlessing}
            </div>
            <p className="text-xs text-rose-100/90 italic">
              "{duaTranslation}"
            </p>
          </div>

          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-600/30 to-blue-600/30 text-amber-400 mx-auto flex items-center justify-center font-bold text-sm border border-amber-400/40">
            ⚜️
          </div>
          <p className="font-serif italic text-base text-rose-200">
            With endless love, prayers & gratitude, {primaryNames}
          </p>
          <div className="text-[10px] text-slate-500 font-mono">
            Crafted with Nyota Luxury Arabic Style Webpage Invitations
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 11. PERMANENTLY FIXED BOTTOM ACTIONS DOCK */}
      {/* ========================================================================= */}
      {isOpened && (
        <div className="fixed bottom-4 inset-x-0 z-[60] flex justify-center px-4 pointer-events-none">
          <div className="pointer-events-auto w-full max-w-md sm:max-w-lg py-2.5 px-4 sm:px-6 rounded-full border border-amber-400/50 shadow-2xl flex items-center justify-between text-xs font-semibold bg-gradient-to-r from-[#170514]/95 via-[#0B0F2B]/95 to-[#06030F]/95 backdrop-blur-2xl ring-1 ring-white/10">
            
            <button
              type="button"
              onClick={() => scrollToSection('invitation-hero')}
              className="p-2 flex flex-col items-center gap-0.5 text-slate-300 hover:text-amber-300 transition-colors active:scale-95"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span className="text-[10px]">Top</span>
            </button>

            {showItinerary && (
              <button
                type="button"
                onClick={() => scrollToSection('schedule-section')}
                className="p-2 flex flex-col items-center gap-0.5 text-slate-300 hover:text-rose-300 transition-colors active:scale-95"
              >
                <Clock className="w-4 h-4 text-rose-400" />
                <span className="text-[10px]">Program</span>
              </button>
            )}

            {showLoveStory && !showItinerary && (
              <button
                type="button"
                onClick={() => scrollToSection('story-section')}
                className="p-2 flex flex-col items-center gap-0.5 text-slate-300 hover:text-rose-300 transition-colors active:scale-95"
              >
                <Heart className="w-4 h-4 text-rose-400" />
                <span className="text-[10px]">Story</span>
              </button>
            )}

            {showVenue && (
              <button
                type="button"
                onClick={() => scrollToSection('venue-section')}
                className="p-2 flex flex-col items-center gap-0.5 text-slate-300 hover:text-blue-300 transition-colors active:scale-95"
              >
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-[10px]">Venue</span>
              </button>
            )}

            {showRsvp && (
              <button
                type="button"
                onClick={() => scrollToSection('rsvp-section')}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 text-slate-950 font-bold shadow-glow-gold flex items-center gap-1.5 hover:opacity-95 transition-all transform hover:scale-105 active:scale-95"
              >
                <Send className="w-3.5 h-3.5 text-slate-950" />
                <span>RSVP</span>
              </button>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
