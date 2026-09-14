export const TEMPLATE_CATEGORIES = [
  { id: 'all', label: 'All Templates', icon: 'Sparkles' },
  { id: 'wedding', label: 'Wedding & Engagement', icon: 'Heart' },
  { id: 'birthday', label: 'Birthdays & Milestones', icon: 'Cake' },
  { id: 'babyshower', label: 'Baby Shower & Gender Reveal', icon: 'Baby' },
  { id: 'anniversary', label: 'Anniversaries & Romance', icon: 'Wine' },
  { id: 'corporate', label: 'Galas & Corporate Events', icon: 'Briefcase' },
];

export const COLOR_THEMES = {
  royalRedNavyBlack: {
    id: 'royalRedNavyBlack',
    name: 'Royal Red, Navy Blue & Obsidian Black',
    bgClass: 'bg-gradient-to-b from-[#05060F] via-[#100612] to-[#040207]',
    cardBg: '#12050E',
    accent: '#D4AF37',
    accentText: 'text-amber-300',
    secondaryText: 'text-rose-200/80',
    border: 'border-amber-400/40',
    envelopeBg: '#1C0612',
    foilType: 'gold',
  },
  emeraldGold: {
    id: 'emeraldGold',
    name: 'Royal Emerald & Gold Foil',
    bgClass: 'bg-gradient-to-br from-[#061C14] via-[#0B2E21] to-[#04120D]',
    cardBg: '#09261B',
    accent: '#D4AA64',
    accentText: 'text-champagne-400',
    secondaryText: 'text-emerald-200/80',
    border: 'border-[#D4AA64]/30',
    envelopeBg: '#072017',
    foilType: 'gold',
  },
  midnightGold: {
    id: 'midnightGold',
    name: 'Celestial Midnight & Starlight',
    bgClass: 'bg-gradient-to-br from-[#090B1E] via-[#121638] to-[#060714]',
    cardBg: '#0F1230',
    accent: '#E5C07B',
    accentText: 'text-amber-300',
    secondaryText: 'text-indigo-200/80',
    border: 'border-[#E5C07B]/30',
    envelopeBg: '#0B0E28',
    foilType: 'gold',
  },
  roseQuartz: {
    id: 'roseQuartz',
    name: 'Romantic Rose Quartz & Velvet',
    bgClass: 'bg-gradient-to-br from-[#2D121B] via-[#451B2A] to-[#1F0B12]',
    cardBg: '#361521',
    accent: '#F8B6C3',
    accentText: 'text-roseGold-300',
    secondaryText: 'text-rose-200/80',
    border: 'border-roseGold-400/30',
    envelopeBg: '#2A101A',
    foilType: 'roseGold',
  },
  ivoryMinimal: {
    id: 'ivoryMinimal',
    name: 'Minimalist Ivory & Champagne',
    bgClass: 'bg-gradient-to-br from-[#FAF5ED] via-[#F4E8D4] to-[#ECE1CC]',
    cardBg: '#FAF6F0',
    accent: '#8F662C',
    accentText: 'text-[#8F662C]',
    primaryText: 'text-[#2C2419]',
    secondaryText: 'text-[#69563E]',
    border: 'border-[#D4AA64]/40',
    envelopeBg: '#EFE5D2',
    foilType: 'gold',
    isLight: true,
  },
  noirLuxe: {
    id: 'noirLuxe',
    name: 'Black Tie Noir & Silver Platinum',
    bgClass: 'bg-gradient-to-br from-[#121215] via-[#1A1A22] to-[#0A0A0C]',
    cardBg: '#16161D',
    accent: '#E2E8F0',
    accentText: 'text-slate-200',
    secondaryText: 'text-slate-400',
    border: 'border-slate-500/30',
    envelopeBg: '#121217',
    foilType: 'silver',
  },
  neonCelebration: {
    id: 'neonCelebration',
    name: 'Vibrant Neon Glow & Violet Disco',
    bgClass: 'bg-gradient-to-br from-[#1F0933] via-[#330F55] to-[#120420]',
    cardBg: '#260B40',
    accent: '#E879F9',
    accentText: 'text-fuchsia-300',
    secondaryText: 'text-purple-200/80',
    border: 'border-fuchsia-500/40',
    envelopeBg: '#1A062C',
    foilType: 'magenta',
  },
  terracottaWarmth: {
    id: 'terracottaWarmth',
    name: 'Warm Sunset Terracotta & Linen',
    bgClass: 'bg-gradient-to-br from-[#3D1E16] via-[#5C2B1E] to-[#2B130D]',
    cardBg: '#482117',
    accent: '#FDBA74',
    accentText: 'text-orange-300',
    secondaryText: 'text-orange-100/80',
    border: 'border-orange-400/30',
    envelopeBg: '#341811',
    foilType: 'gold',
  }
};

export const FONT_PAIRINGS = {
  classicSerif: {
    id: 'classicSerif',
    name: 'Playfair Display + Outfit',
    heading: 'font-serif',
    script: 'font-script',
    body: 'font-sans',
    description: 'Timeless, romantic and formal',
  },
  majesticCinzel: {
    id: 'majesticCinzel',
    name: 'Cinzel + Cormorant',
    heading: 'font-cinzel',
    script: 'font-alex',
    body: 'font-cormorant',
    description: 'Regal, classical, and grand',
  },
  flowingCalligraphy: {
    id: 'flowingCalligraphy',
    name: 'Great Vibes + Playfair',
    heading: 'font-script',
    script: 'font-script',
    body: 'font-serif',
    description: 'Whimsical, intimate, and delicate',
  },
  modernEditorial: {
    id: 'modernEditorial',
    name: 'Outfit Sans + Cormorant',
    heading: 'font-sans uppercase tracking-widest',
    script: 'font-alex',
    body: 'font-sans',
    description: 'Contemporary chic and stylish',
  }
};

export const WAX_SEALS = [
  { id: 'botanical', name: 'Olive Branch Laurel', icon: '🌿', symbol: '🍃' },
  { id: 'monogram', name: 'Intertwined Monogram', icon: '⚜️', symbol: '💍' },
  { id: 'heart', name: 'Eternal Heart', icon: '❤️', symbol: '✨' },
  { id: 'crown', name: 'Imperial Crown', icon: '👑', symbol: '👑' },
  { id: 'star', name: 'Celestial Star', icon: '⭐', symbol: '🌟' },
];

export const AMBIENT_TRACKS = [
  {
    id: 'acousticJoy',
    title: 'Acoustic Joy (Celebratory & Bright)',
    genre: 'Acoustic / Celebration',
    synthType: 'acoustic',
  },
  {
    id: 'romanticPiano',
    title: 'Moonlight Romance (Serenade Piano)',
    genre: 'Classical / Romantic',
    synthType: 'piano',
  },
  {
    id: 'lofiVibes',
    title: 'Golden Hour (Chill Ambient Chillout)',
    genre: 'Lo-Fi / Modern',
    synthType: 'lofi',
  },
  {
    id: 'orchestralGala',
    title: 'Imperial Waltz (Grand Orchestral)',
    genre: 'Gala / Grand',
    synthType: 'waltz',
  }
];

export const INVITATION_TEMPLATES = [
  {
    id: 'wedding-emerald-luxury',
    category: 'wedding',
    name: 'Arabic Style Invitation',
    tagline: 'An opulent royal Arabian palace theme with sacred Bismillah calligraphy, Moorish arches, and starlit Walima banquet.',
    badge: 'Bestseller ⭐',
    basePrice: 19,
    themeId: 'royalRedNavyBlack',
    fontPairingId: 'classicSerif',
    sealId: 'botanical',
    sealColor: '#B88B42',
    ambientTrackId: 'romanticPiano',
    defaults: {
      bismillah: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
      tag: 'TOGETHER WITH THEIR FAMILIES',
      quranVerse: '“And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy.”',
      quranRef: 'Surah Ar-Rum (30:21)',
      duaBlessing: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
      duaTranslation: 'May Allah bless you, shower His blessings upon you, and unite you both in goodness & harmony.',
      title: 'Cordially invite you to grace the blessed wedding celebration & Nikah of',
      primaryNames: 'Zayd Al-Mansoor & Aaliyah Khan',
      dateText: 'Saturday, October 24, 2026',
      timeText: 'Five O\'Clock In The Evening',
      venueName: 'The Royal Emirates Palace & Grand Ballroom',
      venueAddress: 'West Corniche Road, Grand Palace Avenue, NY 10022',
      venueImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&auto=format&fit=crop&q=80',
      heroPhoto: '/images/muslim-royal-couple.jpg',
      receptionInfo: 'Grand Royal Walima Banquet & Celebrations to Follow',
      dressCode: 'Royal Arabian / Traditional Formal / Black Tie',
      dressCodeNote: 'We warmly encourage our cherished guests to embrace royal jewel tones, traditional formal attire (Sherwanis, Anarkalis, Abayas, Lehengas) or classic evening gowns & tuxedos.',
      rsvpDeadline: 'Kindly RSVP by September 15, 2026',
      hostMessage: 'With the grace and blessings of Allah (SWT), we invite you to celebrate our sacred union and share in our joy, prayers, and lifelong memories.',
      itinerary: [
        { time: '4:00 PM', event: 'Holy Nikah Ceremony & Sacred Vows' },
        { time: '5:30 PM', event: 'Dawat-e-Khas & Welcome Refreshments' },
        { time: '7:00 PM', event: 'Baraat Arrival & Royal Reception' },
        { time: '8:30 PM', event: 'Grand Walima Feast & Dinner Banquet' },
        { time: '11:00 PM', event: 'Rukhsati & Heartfelt Duas' },
      ],
      loveStories: [
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
      ],
      registryUrl: 'https://registry.example.com/zayd-aaliyah',
    }
  }
];

export const PRICING_PACKAGES = [
  {
    id: 'all-in-one-shagun',
    name: 'All-In-One Complete Luxury Suite',
    price: 501,
    originalPrice: 2100,
    currencySymbol: '₹',
    currency: 'INR',
    popular: true,
    shagunBadge: 'All-Inclusive Shagun ₹501 🕉️',
    description: 'One simple price. Everything included forever — live webpage, full customizer, 3D unboxing, real-time RSVPs, music, and instant admin verification.',
    features: [
      'Full Access to Customizer Studio (Unlimited Live Editing)',
      'Cinematic Webpage Invitation',
      'Personalized Shareable Web Link for WhatsApp & Instagram',
      'Interactive 3D Wax Seal Envelope Unboxing Experience',
      'Real-time Firestore Guest RSVP & Guestbook Registry',
      'Live Countdown Clock to Celebration Day',
      'Love Story Milestones & Photo Gallery',
      'Interactive Google Maps & Apple Maps Navigation',
      'Ambient Celebration Background Music Player',
      'Dress Code Moodboard & Digital Wishing Well / Bank Details',
      'Instant HD Digital Download (PNG/JPG)',
      'Permanent Google Account Access & 1-Click Admin Verification'
    ],
    highlight: true,
    ctaText: 'Pay ₹501 Shagun & Unlock Everything',
  }
];


