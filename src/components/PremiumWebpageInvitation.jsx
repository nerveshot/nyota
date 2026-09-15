import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Heart, Calendar, Clock, MapPin, Navigation, 
  Music, Volume2, VolumeX, Share2, Copy, Check, ChevronDown, 
  ExternalLink, Gift, Shirt, Send, MessageSquare, Compass, Eye, ArrowRight, ArrowLeft,
  ShieldCheck, Car, Sparkle, Play, Users, QrCode, Star, Globe, Crown
} from 'lucide-react';
import { musicEngine } from '../utils/audioPlayer';
import RsvpSection from './RsvpSection';
import ScratchCard from './ScratchCard';
import { COLOR_THEMES, FONT_PAIRINGS } from '../data/templates';

const getCoupleInitials = (names) => {
  if (!names) return 'N & Y';
  const parts = names.split('&').map(s => s.trim());
  if (parts.length >= 2) {
    const first = parts[0].charAt(0).toUpperCase() || 'A';
    const second = parts[1].charAt(0).toUpperCase() || 'B';
    return `${first} & ${second}`;
  }
  const words = names.trim().split(/\s+/);
  if (words.length >= 2) {
    return `${words[0].charAt(0).toUpperCase()} & ${words[words.length - 1].charAt(0).toUpperCase()}`;
  }
  return names.slice(0, 2).toUpperCase();
};

export default function PremiumWebpageInvitation({
  invitationData,
  themeId = 'royalRedNavyBlack',
  fontPairingId = 'classicSerif',
  ambientTrackId = 'romanticPiano',
  onBack,
  isStandalone = false,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isBismillahRising, setIsBismillahRising] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const timelineRailRef = useRef(null);

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

  const coupleInitials = getCoupleInitials(primaryNames);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Cleanup music on unmount
  useEffect(() => {
    return () => {
      musicEngine.stopTrack();
    };
  }, []);

  // Track scroll position to glide the ring emoji smoothly down the itinerary nodes
  useEffect(() => {
    const handleScroll = () => {
      const nodes = document.querySelectorAll('.itinerary-event-node');
      if (!nodes || nodes.length === 0) return;

      const triggerY = window.innerHeight * 0.55;
      let currentIdx = 0;

      nodes.forEach((node, idx) => {
        const rect = node.getBoundingClientRect();
        if (rect.top <= triggerY) {
          currentIdx = idx;
        }
      });

      setActiveTimelineIdx(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [itinerary]);

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

  // Smooth entrance unveiling with Royal Velvet Curtain & Grand Mosque passage
  const handleOpenInvitation = () => {
    if (isEntering) return;
    setIsEntering(true);

    try {
      confetti({
        particleCount: 170,
        spread: 110,
        origin: { y: 0.45 },
        colors: ['#D4AF37', '#8B152B', '#0B1B3D', '#FFFFFF', '#F5D38B'],
      });
    } catch (e) {
      console.log(e);
    }

    if (showMusic) {
      musicEngine.startTrack(ambientTrackId || 'romanticPiano');
      setIsPlayingMusic(true);
    }

    // Step 1: Walk into mosque with glowing golden Bismillah in center as curtains gracefully part
    // Step 2: At 3.0s, Bismillah gracefully glides upwards into the top invitation header
    setTimeout(() => {
      setIsBismillahRising(true);
    }, 3000);

    // Step 3: At 5.0s, completely reveal the full royal invitation webpage smoothly
    setTimeout(() => {
      setIsOpened(true);
      setTimeout(() => {
        const el = document.getElementById('invitation-hero');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 5000);
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
      
      {/* Floating Exit / Return Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="fixed top-5 left-5 z-50 px-3.5 py-2 rounded-2xl bg-black/80 hover:bg-black text-white border border-champagne-400/40 backdrop-blur-md text-xs font-semibold flex items-center gap-1.5 shadow-2xl transition-all cursor-pointer hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 text-champagne-400" />
          <span>Exit Preview</span>
        </button>
      )}

      {/* BACKGROUND ROYAL BLACK, RED, NAVY BLUE GLOWS, MOSQUE ARCH & STAR LATTICE */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* GRAND MOSQUE ILLUMINATED TOP BACKDROP (VISUAL CONTINUITY) */}
        <div className="absolute top-0 inset-x-0 h-[650px] sm:h-[850px] md:h-[1050px] overflow-hidden pointer-events-none z-0">
          <img
            src="/images/grand-mosque-entrance.jpg"
            alt="Grand Mosque Courtyard Backdrop"
            className="w-full h-full object-cover object-top opacity-30 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05060F]/30 via-[#0A0612]/75 to-[#040207]" />
        </div>

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
      {/* ========================================================================= */}
      {/* 1. ROYAL VELVET MULTI-CURTAIN & GRAND MOSQUE ENTRANCE GATEWAY */}
      {/* ========================================================================= */}
      {!isOpened && (
        <div className={`fixed inset-0 z-50 overflow-hidden bg-black flex items-center justify-center transition-opacity duration-[1400ms] ${
          isBismillahRising ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          
          {/* BACKGROUND LAYER: CINEMATIC GRAND MOSQUE COURTYARD PASSAGE */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/images/grand-mosque-entrance.jpg"
              alt="Grand Mosque Royal Entrance"
              className={`w-full h-full object-cover transition-all duration-[4200ms] ${
                isEntering ? 'animate-mosque-enter brightness-110 filter' : 'scale-100 brightness-75'
              }`}
            />
            {/* Ambient Mosque Twilight Overlay & Volumetric Golden Light Rays */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${
              isEntering 
                ? 'bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-60' 
                : 'bg-black/65 backdrop-blur-[2px]'
            }`} />

            {/* Glowing Golden Light Beams When Curtains Part */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
              isEntering ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'radial-gradient(circle at 50% 45%, rgba(255, 215, 0, 0.35) 0%, rgba(212, 175, 55, 0.15) 40%, transparent 70%)'
            }}
            />

            {/* Glowing Golden Bismillah Rising during Mosque Entrance Walkthrough */}
            {isEntering && (
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center text-center z-30 pointer-events-none px-4 transition-all duration-[2400ms] ease-out ${
                  isBismillahRising 
                    ? '-translate-y-[26vh] sm:-translate-y-[30vh] md:-translate-y-[34vh] scale-90 opacity-95' 
                    : 'translate-y-0 scale-110 opacity-100'
                }`}
              >
                <div 
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-amber-300 font-bold gold-gradient-text drop-shadow-[0_0_35px_rgba(212,175,55,0.95)] leading-relaxed select-none"
                  style={{ fontFamily: `'Scheherazade New', 'Amiri', serif` }}
                  dir="rtl"
                >
                  {bismillah}
                </div>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* LAYER 2 (INNER): ROYAL SHEER GOLD GOSSAMER SILK CURTAINS (STAGGERED UNFOLD) */}
          {/* ========================================================================= */}
          {/* Left Inner Sheer Golden Drape */}
          <div
            className={`absolute top-0 bottom-0 left-0 w-[52%] z-10 curtain-sheer-gold-left transition-transform duration-[4600ms] delay-[350ms] ease-in-out flex flex-col justify-between ${
              isEntering ? '-translate-x-[102%] scale-x-75 -skew-y-1' : 'translate-x-0'
            }`}
          >
            <div className="absolute inset-0 gold-damask-overlay pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-b from-amber-300 via-yellow-100 to-amber-400 opacity-80 shadow-[0_0_12px_rgba(255,215,0,0.8)]" />
          </div>

          {/* Right Inner Sheer Golden Drape */}
          <div
            className={`absolute top-0 bottom-0 right-0 w-[52%] z-10 curtain-sheer-gold-right transition-transform duration-[4600ms] delay-[350ms] ease-in-out flex flex-col justify-between ${
              isEntering ? 'translate-x-[102%] scale-x-75 skew-y-1' : 'translate-x-0'
            }`}
          >
            <div className="absolute inset-0 gold-damask-overlay pointer-events-none" />
            <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b from-amber-300 via-yellow-100 to-amber-400 opacity-80 shadow-[0_0_12px_rgba(255,215,0,0.8)]" />
          </div>

          {/* ========================================================================= */}
          {/* LAYER 1 (OUTER): ROYAL CRIMSON HEAVY VELVET CURTAINS */}
          {/* ========================================================================= */}
          {/* LEFT ROYAL CRIMSON VELVET CURTAIN */}
          <div 
            className={`absolute top-0 bottom-0 left-0 w-[53%] z-20 curtain-fabric-left transition-transform duration-[4200ms] ease-in-out flex flex-col justify-between ${
              isEntering ? '-translate-x-[105%] scale-x-85' : 'translate-x-0'
            }`}
          >
            {/* Gold Damask Embossed Pattern Overlay */}
            <div className="absolute inset-0 gold-damask-overlay pointer-events-none" />

            {/* Gold Fringe & Braided Border on right edge */}
            <div className="absolute top-0 bottom-0 right-0 w-2 gold-fringe-pattern shadow-[0_0_12px_#D4AF37]" />
            <div className="absolute top-0 bottom-0 right-2 w-[1px] bg-amber-400/70" />

            {/* Left Curtain Cartoon Bride Pulling Golden Rope (Transparent Cutout) */}
            <div className="absolute top-[38%] -translate-y-1/2 right-1 sm:right-3 flex flex-col items-center z-30 pointer-events-none select-none">
              {/* Golden Rope Cord leading from top valance */}
              <div className="w-1.5 h-16 sm:h-24 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-glow-gold rounded-full mb-[-6px]" />
              
              {/* Free-standing Cutout Bride Character */}
              <div className={`relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-transform duration-[4200ms] ${
                isEntering ? 'animate-tug-left scale-110' : 'hover:scale-105'
              }`}>
                <img
                  src="/images/cartoon-bride-pulling.png"
                  alt="Royal Bride Pulling Curtain"
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
                />
              </div>

              {/* Golden Braided Tassel at Bottom of Rope */}
              <div className="w-3.5 h-10 sm:w-5 sm:h-14 rounded-b-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 shadow-glow-gold mt-[-6px] border-t border-amber-200 flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-slate-950 animate-pulse" />
              </div>
            </div>
          </div>

          {/* RIGHT ROYAL CRIMSON VELVET CURTAIN */}
          <div 
            className={`absolute top-0 bottom-0 right-0 w-[53%] z-20 curtain-fabric-right transition-transform duration-[4200ms] ease-in-out flex flex-col justify-between ${
              isEntering ? 'translate-x-[105%] scale-x-85' : 'translate-x-0'
            }`}
          >
            {/* Gold Damask Embossed Pattern Overlay */}
            <div className="absolute inset-0 gold-damask-overlay pointer-events-none" />

            {/* Gold Fringe & Braided Border on left edge */}
            <div className="absolute top-0 bottom-0 left-0 w-2 gold-fringe-pattern shadow-[0_0_12px_#D4AF37]" />
            <div className="absolute top-0 bottom-0 left-2 w-[1px] bg-amber-400/70" />

            {/* Right Curtain Cartoon Groom Pulling Golden Rope (Transparent Cutout) */}
            <div className="absolute top-[38%] -translate-y-1/2 left-1 sm:left-3 flex flex-col items-center z-30 pointer-events-none select-none">
              {/* Golden Rope Cord leading from top valance */}
              <div className="w-1.5 h-16 sm:h-24 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-glow-gold rounded-full mb-[-6px]" />
              
              {/* Free-standing Cutout Groom Character */}
              <div className={`relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-transform duration-[4200ms] ${
                isEntering ? 'animate-tug-right scale-110' : 'hover:scale-105'
              }`}>
                <img
                  src="/images/cartoon-groom-pulling.png"
                  alt="Royal Groom Pulling Curtain"
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
                />
              </div>

              {/* Golden Braided Tassel at Bottom of Rope */}
              <div className="w-3.5 h-10 sm:w-5 sm:h-14 rounded-b-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 shadow-glow-gold mt-[-6px] border-t border-amber-200 flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-slate-950 animate-pulse" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* LAYER 3: TOP AUSTRIAN FESTOON SWAGS & PELMET VALANCE */}
          {/* ========================================================================= */}
          <div className={`absolute top-0 inset-x-0 z-25 transition-transform duration-[3800ms] ${
            isEntering ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            {/* Main Pelmet Bar */}
            <div className="h-12 sm:h-14 curtain-valance flex items-center justify-center relative">
              {/* Top Gold Trim */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 shadow-glow-gold" />
            </div>

            {/* 3-Tier Scalloped Austrian Swag Drapes */}
            <div className="relative -mt-3 flex items-center justify-center gap-0 w-full px-2 sm:px-8">
              {/* Left Swag */}
              <div className="hidden sm:block flex-1 h-10 rounded-b-[100px] curtain-swag border-b-2 border-amber-400/80 shadow-lg relative overflow-hidden -mr-4">
                <div className="w-full h-1 gold-fringe-pattern absolute bottom-0" />
              </div>

              {/* Center Grand Medallion Swag */}
              <div className="w-48 sm:w-72 h-14 sm:h-16 rounded-b-[120px] curtain-swag border-b-2 border-amber-400 shadow-2xl relative z-10 flex items-center justify-center">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1A030A] border-2 border-amber-400 shadow-glow-gold flex items-center justify-center text-amber-300">
                  <Crown className="w-5 h-5 text-amber-300 drop-shadow-md" />
                </div>
                <div className="w-full h-1.5 gold-fringe-pattern absolute bottom-0 rounded-b-[120px]" />
              </div>

              {/* Right Swag */}
              <div className="hidden sm:block flex-1 h-10 rounded-b-[100px] curtain-swag border-b-2 border-amber-400/80 shadow-lg relative overflow-hidden -ml-4">
                <div className="w-full h-1 gold-fringe-pattern absolute bottom-0" />
              </div>
            </div>

            {/* Side Cascading Jabot Drapes (Left & Right Borders) */}
            <div className="absolute top-0 left-0 w-12 sm:w-16 h-36 sm:h-48 curtain-jabot-left border-r border-amber-400/60 pointer-events-none" />
            <div className="absolute top-0 right-0 w-12 sm:w-16 h-36 sm:h-48 curtain-jabot-right border-l border-amber-400/60 pointer-events-none" />
          </div>

          {/* CENTER GATEWAY INVITATION CARD */}
          <div className={`relative z-30 w-full max-w-lg p-4 sm:p-6 text-center transition-all duration-[1200ms] ${
            isEntering ? 'opacity-0 scale-75 -translate-y-12 pointer-events-none' : 'opacity-100 scale-100 translate-y-0'
          }`}>
            
            <div className="space-y-6 sm:space-y-8 flex flex-col items-center">
              
              {/* Top Flourish Emblem in Royal Red & Gold */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-rose-500/80 to-amber-400/80" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A0A17] to-[#0A1838] border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-glow-gold">
                  <Crown className="w-5 h-5 text-amber-300 drop-shadow-sm" />
                </div>
                <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-rose-500/80 to-amber-400/80" />
              </div>

              {/* Bismillah Arabic Calligraphy Card (Conditional) */}
              {bismillah && (
                <div className="space-y-3 px-4">
                  <div 
                    className="text-2xl sm:text-4xl md:text-5xl font-serif text-amber-300 font-bold tracking-wide gold-gradient-text drop-shadow-lg leading-relaxed select-none"
                    style={{ fontFamily: `'Scheherazade New', 'Amiri', serif` }}
                    dir="rtl"
                  >
                    {bismillah}
                  </div>
                </div>
              )}

              {/* Grand Moorish Royal Arch Preview Card (Black, Royal Red & Navy Blue) */}
              <div className="relative w-full max-w-[340px] sm:max-w-[390px] p-6 sm:p-8 rounded-t-[160px] rounded-b-3xl bg-gradient-to-b from-[#1C0612]/95 via-[#0D1024]/95 to-[#05030A]/95 border-2 border-amber-400/60 shadow-[0_0_50px_rgba(139,21,43,0.5)] space-y-4 text-center group hover:border-amber-400/90 transition-all backdrop-blur-md">
                
                {/* Gold Filigree Inner Border */}
                <div className="absolute inset-2 rounded-t-[150px] rounded-b-2xl border border-amber-400/30 pointer-events-none" />

                {/* Couple Initial Monogram Crest with Royal Crown */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto p-[2px] bg-gradient-to-br from-amber-300 via-rose-500 to-amber-500 shadow-glow-gold flex items-center justify-center">
                  <div className="w-full h-full bg-[#12040D] rounded-full flex flex-col items-center justify-center border-2 border-amber-300/50 relative overflow-hidden">
                    <Crown className="w-3.5 h-3.5 text-amber-300 drop-shadow-md mb-0.5" />
                    <span className="font-cinzel text-xs sm:text-sm font-bold gold-gradient-text tracking-wider">
                      {coupleInitials}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="text-[10px] text-rose-300 font-mono tracking-widest uppercase">
                    {invitationData?.templateName || 'Grand Celebration & Ceremony'}
                  </div>
                  <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white gold-gradient-text leading-snug">
                    {primaryNames}
                  </h2>
                </div>

                {/* Blessing / Quote Snippet */}
                {quranVerse && (
                  <div className="pt-2 border-t border-amber-400/25">
                    <p className="text-[11px] text-amber-200/90 italic font-serif leading-relaxed line-clamp-2">
                      {quranVerse}
                    </p>
                    {quranRef && (
                      <div className="text-[9px] text-amber-400/70 font-mono mt-1">
                        {quranRef}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Grand Open Invitation Action Button */}
              <div className="space-y-3 pt-2 w-full max-w-xs">
                <button
                  type="button"
                  onClick={handleOpenInvitation}
                  disabled={isEntering}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-glow-gold flex items-center justify-center gap-2.5 hover:opacity-95 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>Open Royal Invitation</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <div className="text-[11px] text-amber-300/90 font-mono tracking-wide flex items-center justify-center gap-1.5 pt-1">
                  <Music className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                  <span>Curtains open & ambient melody plays</span>
                </div>
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
          
          {/* Sacred Bismillah Calligraphy (Conditional) */}
          <div className="space-y-3">
            {bismillah && (
              <div 
                className="text-3xl sm:text-5xl md:text-6xl font-serif text-amber-300 font-bold tracking-wide gold-gradient-text leading-relaxed select-none"
                style={{ fontFamily: `'Scheherazade New', 'Amiri', serif` }}
                dir="rtl"
              >
                {bismillah}
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent via-rose-500/80 to-amber-400/60" />
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.35em] uppercase text-champagne-300 font-semibold">
                {tag}
              </span>
              <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent via-blue-500/80 to-amber-400/60" />
            </div>
          </div>

          {/* Couple Monogram Emblem with Royal Crown */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto p-[2px] bg-gradient-to-br from-amber-300 via-rose-500 to-amber-500 shadow-glow-gold flex items-center justify-center animate-float-gentle">
            <div className="w-full h-full bg-[#12050E] rounded-full flex flex-col items-center justify-center border-2 border-amber-300/40 relative overflow-hidden">
              <Crown className="w-5 h-5 text-amber-300 drop-shadow-md mb-1" />
              <span className="font-cinzel text-sm sm:text-base font-bold gold-gradient-text tracking-wider">
                {coupleInitials}
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
                </div>
              </div>
            </div>
          </div>

          {/* Date & Location Main Summary Card with Luxury Gold Scratch-to-Reveal */}
          <ScratchCard
            title="SCRATCH TO REVEAL DATE"
            subtitle="Rub with your finger or mouse to unveil the wedding celebration date"
          >
            <div className="p-5 sm:p-7 rounded-3xl border border-amber-400/40 max-w-2xl mx-auto space-y-4 shadow-luxury bg-gradient-to-br from-[#150614]/95 via-[#0B0E28]/95 to-[#06030F]/95 backdrop-blur-xl">
              
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
          </ScratchCard>

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
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#180614]/85 via-[#0D102A]/85 to-[#06030F]/90 border border-amber-400/40 shadow-2xl space-y-6">
              
              {/* Vertical Continuous Timeline Rail */}
              <div ref={timelineRailRef} className="relative pl-8 sm:pl-10 space-y-6 ml-3 sm:ml-4">
                
                {/* Background Rail Track Line */}
                <div className="absolute left-[11px] sm:left-[13px] top-4 bottom-4 w-[2px] bg-rose-500/20 rounded-full pointer-events-none" />

                {/* Dynamic Active Golden Progress Line */}
                <div 
                  className="absolute left-[11px] sm:left-[13px] top-4 w-[2px] bg-gradient-to-b from-amber-300 via-rose-500 to-amber-400 shadow-[0_0_10px_rgba(212,175,55,0.8)] rounded-full pointer-events-none transition-all duration-500 ease-out"
                  style={{
                    height: itinerary.length > 1 
                      ? `${(activeTimelineIdx / (itinerary.length - 1)) * 100}%` 
                      : '0%',
                  }}
                />

                {/* Timeline Items */}
                {itinerary.map((item, idx) => {
                  const isActive = idx === activeTimelineIdx;
                  const isPassed = idx <= activeTimelineIdx;

                  return (
                    <div 
                      key={idx} 
                      className="itinerary-event-node relative flex items-start group transition-all duration-300"
                    >
                      {/* Base Emoji Milestone Node on the Line */}
                      <div className={`absolute -left-[27px] sm:-left-[31px] top-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm border transition-all duration-300 z-10 ${
                        isActive
                          ? 'opacity-0 scale-75' // Hidden when the traveling ring badge is over it
                          : isPassed
                            ? 'bg-[#1F0614] border-amber-400 text-white shadow-[0_0_12px_rgba(212,175,55,0.5)]'
                            : 'bg-[#0E040B] border-rose-500/40 text-slate-400 opacity-80'
                      }`}>
                        <span>{item.icon || (idx === 0 ? '💍' : '✨')}</span>
                      </div>

                      {/* Traveling Golden Ring Emoji (Shows dynamically at the active node) */}
                      {isActive && (
                        <div 
                          className="absolute -left-[33px] sm:-left-[38px] top-1.5 w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[1.5px] bg-gradient-to-br from-[#FFF3D0] via-[#D4AF37] to-[#8C6214] shadow-[0_0_22px_rgba(212,175,55,0.95)] flex items-center justify-center z-20 animate-pulse"
                        >
                          <div className="w-full h-full bg-gradient-to-br from-[#2D0B1E] to-[#0A0412] rounded-full flex items-center justify-center text-base sm:text-lg">
                            💍
                          </div>
                        </div>
                      )}

                      {/* Uniform Event Content Card (Consistent size across all items) */}
                      <div className={`w-full p-4 sm:p-5 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#24081B]/95 via-[#111736]/95 to-[#090414]/95 border border-amber-400/70 shadow-[0_0_20px_rgba(212,175,55,0.25)] translate-x-1'
                          : 'bg-gradient-to-r from-[#160512]/80 via-[#0A0E24]/80 to-[#05020D]/80 border border-white/10 hover:border-white/20'
                      }`}>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-1">
                          {/* Event Title */}
                          <h3 className={`font-serif text-base sm:text-lg font-bold transition-colors ${
                            isActive ? 'gold-gradient-text' : 'text-slate-100'
                          }`}>
                            {item.event}
                          </h3>

                          {/* Time Badge */}
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-[11px] sm:text-xs font-mono font-semibold text-amber-300 w-fit">
                            <Clock className="w-3 h-3 text-amber-400" />
                            <span>{item.date ? `${item.date} • ${item.time}` : item.time}</span>
                          </div>
                        </div>

                        {/* Description */}
                        {item.desc && (
                          <p className="text-xs sm:text-sm text-slate-300/90 italic font-serif leading-relaxed pt-1">
                            {item.desc}
                          </p>
                        )}

                        {/* Venue Tag */}
                        {item.venue && (
                          <div className="text-[11px] text-slate-400 font-mono pt-2 flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-rose-400 flex-shrink-0" />
                            <span className="truncate">{item.venue}</span>
                            {item.dressCodeHint && (
                              <span className="text-amber-400/80 ml-2 hidden sm:inline">• {item.dressCodeHint}</span>
                            )}
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}
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
