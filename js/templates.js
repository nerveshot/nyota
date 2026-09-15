// ==========================================================================
// NYOTA TEMPLATES, THEMES & DATA DEFINITIONS
// ==========================================================================

export const TEMPLATE_CATEGORIES = [
  { id: 'all', label: 'All Templates', icon: '✨' },
  { id: 'wedding', label: 'Wedding & Engagement', icon: '💍' },
  { id: 'birthday', label: 'Birthdays & Milestones', icon: '🎂' },
  { id: 'babyshower', label: 'Baby Shower & Reveal', icon: '👶' },
  { id: 'anniversary', label: 'Anniversaries & Romance', icon: '🍷' },
  { id: 'corporate', label: 'Galas & Corporate', icon: '💼' },
];

export const COLOR_THEMES = {
  royalRedNavyBlack: {
    id: 'royalRedNavyBlack',
    name: 'Royal Red, Navy & Obsidian Black',
    bgClass: 'background: linear-gradient(135deg, #05060F 0%, #100612 50%, #040207 100%);',
    cardBg: '#12050E',
    accent: '#D4AF37',
    accentText: '#F5D38B',
    secondaryText: '#FECDD3',
    border: 'rgba(212, 175, 55, 0.4)',
    envelopeBg: '#1C0612',
    foilType: 'gold',
    isLight: false,
  },
  pearlWhiteGold: {
    id: 'pearlWhiteGold',
    name: 'Royal Pearl & White Gold (Light)',
    bgClass: 'background: linear-gradient(180deg, #FAF8F5 0%, #F5EFE6 50%, #ECE4D8 100%);',
    cardBg: '#FFFFFF',
    accent: '#B8860B',
    accentText: '#8F662C',
    secondaryText: '#475569',
    border: 'rgba(184, 134, 11, 0.35)',
    envelopeBg: '#FAF7F2',
    foilType: 'gold',
    isLight: true,
  },
  ivoryMarbleGold: {
    id: 'ivoryMarbleGold',
    name: 'Ivory Marble & Imperial Gold (Light)',
    bgClass: 'background: linear-gradient(135deg, #FFFFFF 0%, #F8F5EE 40%, #EFE9DC 100%);',
    cardBg: '#FCFBF9',
    accent: '#C59B27',
    accentText: '#785210',
    secondaryText: '#334155',
    border: 'rgba(197, 155, 39, 0.4)',
    envelopeBg: '#F7F3EB',
    foilType: 'gold',
    isLight: true,
  },
  emeraldGold: {
    id: 'emeraldGold',
    name: 'Royal Emerald & Gold Foil',
    bgClass: 'background: linear-gradient(135deg, #061C14 0%, #0B2E21 50%, #04120D 100%);',
    cardBg: '#09261B',
    accent: '#D4AA64',
    accentText: '#F5E5C9',
    secondaryText: '#A7F3D0',
    border: 'rgba(212, 170, 100, 0.3)',
    envelopeBg: '#072017',
    foilType: 'gold',
    isLight: false,
  },
  midnightGold: {
    id: 'midnightGold',
    name: 'Celestial Midnight & Starlight',
    bgClass: 'background: linear-gradient(135deg, #090B1E 0%, #121638 50%, #060714 100%);',
    cardBg: '#0F1230',
    accent: '#E5C07B',
    accentText: '#FDE68A',
    secondaryText: '#C7D2FE',
    border: 'rgba(229, 192, 123, 0.3)',
    envelopeBg: '#0B0E28',
    foilType: 'gold',
    isLight: false,
  },
  roseQuartz: {
    id: 'roseQuartz',
    name: 'Romantic Rose Quartz & Velvet',
    bgClass: 'background: linear-gradient(135deg, #2D121B 0%, #451B2A 50%, #1F0B12 100%);',
    cardBg: '#361521',
    accent: '#F8B6C3',
    accentText: '#FDA4AF',
    secondaryText: '#FECDD3',
    border: 'rgba(248, 182, 195, 0.3)',
    envelopeBg: '#2A101A',
    foilType: 'roseGold',
    isLight: false,
  },
  noirLuxe: {
    id: 'noirLuxe',
    name: 'Black Tie Noir & Silver Platinum',
    bgClass: 'background: linear-gradient(135deg, #121215 0%, #1A1A22 50%, #0A0A0C 100%);',
    cardBg: '#16161D',
    accent: '#E2E8F0',
    accentText: '#E2E8F0',
    secondaryText: '#94A3B8',
    border: 'rgba(148, 163, 184, 0.3)',
    envelopeBg: '#121217',
    foilType: 'silver',
    isLight: false,
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
};

export const WAX_SEALS = [
  { id: 'botanical', name: 'Olive Branch Laurel', icon: '🌿' },
  { id: 'monogram', name: 'Intertwined Monogram', icon: '⚜️' },
  { id: 'heart', name: 'Eternal Heart', icon: '❤️' },
  { id: 'crown', name: 'Imperial Crown', icon: '👑' },
  { id: 'star', name: 'Celestial Star', icon: '⭐' },
];

export const AMBIENT_TRACKS = [
  { id: 'romanticPiano', title: 'Moonlight Romance (Serenade Piano)', genre: 'Classical / Romantic' },
  { id: 'acousticJoy', title: 'Acoustic Joy (Celebratory & Bright)', genre: 'Acoustic / Celebration' },
  { id: 'lofiVibes', title: 'Golden Hour (Chill Ambient)', genre: 'Lo-Fi / Modern' },
  { id: 'orchestralGala', title: 'Imperial Waltz (Grand Orchestral)', genre: 'Gala / Grand' },
];

export const INVITATION_TEMPLATES = [
  {
    id: 'wedding-emerald-luxury',
    category: 'wedding',
    name: 'Arabic Royal Wedding Invitation',
    tagline: 'An opulent royal Arabian palace theme with sacred Bismillah calligraphy, Moorish arches, and starlit Walima banquet.',
    badge: 'Bestseller ⭐',
    basePrice: 1001,
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
      primaryNames: 'Faizan Salam & Mushira Shaikh',
      dateText: 'Saturday, October 24, 2026',
      timeText: 'Five O\'Clock In The Evening',
      isoDate: '2026-10-24T17:00:00',
      venueName: 'The Royal Emirates Palace & Grand Ballroom',
      venueAddress: 'West Corniche Road, Grand Palace Avenue, NY 10022',
      heroPhoto: '/images/muslim-royal-couple.jpg',
      receptionInfo: 'Grand Royal Walima Banquet & Celebrations to Follow',
      dressCode: 'Royal Arabian / Traditional Formal / Black Tie',
      dressCodeNote: 'We warmly encourage our cherished guests to embrace royal jewel tones, traditional formal attire (Sherwanis, Anarkalis, Abayas, Lehengas) or evening tuxedos & gowns.',
      rsvpDeadline: 'Kindly RSVP by September 15, 2026',
      hostMessage: 'With the grace and blessings of Allah (SWT), we invite you to celebrate our sacred union and share in our joy, prayers, and lifelong memories.',
      groomParents: 'Mr. & Mrs. Mohammed Salam',
      brideParents: 'Mr. & Mrs. Tariq Shaikh',
      familyBlessingText: 'Request the honor of your presence and heartfelt blessings on the auspicious occasion of the Nikah & Walima of their cherished children.',
      itinerary: [
        { time: '4:00 PM', event: 'Holy Nikah Ceremony & Sacred Vows', icon: '💍', desc: 'The sacred religious marriage contract in the presence of beloved family.' },
        { time: '5:30 PM', event: 'Dawat-e-Khas & Welcome Refreshments', icon: '🥂', desc: 'Gourmet Medjool dates, Arabian Kahwa, and handcrafted royal appetizers.' },
        { time: '7:00 PM', event: 'Baraat Arrival & Royal Reception', icon: '👑', desc: 'Grand royal welcome of the groom and celebratory blessings.' },
        { time: '8:30 PM', event: 'Grand Walima Feast & Dinner Banquet', icon: '🍽️', desc: 'An authentic multi-course royal Mughlai and Arabian feast.' },
        { time: '11:00 PM', event: 'Rukhsati & Heartfelt Duas', icon: '✨', desc: 'A tender farewell with heartfelt blessings as the newlyweds begin their journey.' },
      ],
      loveStories: [
        { year: '2022', title: 'Written in Destiny (Qadr)', desc: 'An arranged family introduction that blossomed into deep mutual respect and shared faith.', image: '/images/muslim-destiny.jpg' },
        { year: '2024', title: 'The Blessed Engagement', desc: 'Surrounded by our families and sincere prayers, our rings were exchanged under golden lights.', image: '/images/muslim-engagement.jpg' },
        { year: '2026', title: 'Nikah & Two Souls United', desc: 'Committing to a lifetime of love and companionship as husband and wife.', image: '/images/muslim-nikah.jpg' }
      ],
      galleryPhotos: [
        { image: '/images/muslim-royal-couple.jpg', caption: 'Royal Couple Portrait' },
        { image: '/images/muslim-nikah.jpg', caption: 'The Sacred Nikah Ceremony' },
        { image: '/images/muslim-engagement.jpg', caption: 'Golden Ring Exchange' },
        { image: '/images/muslim-destiny.jpg', caption: 'Written in Destiny' },
        { image: '/images/royal-chandelier-hallway.jpg', caption: 'Crystal Palace Promenade' },
        { image: '/images/royal-main-wedding-arena.jpg', caption: 'Grand Reception Stage' }
      ],
      faqs: [
        { q: 'Is valet parking available?', a: 'Yes, complimentary VIP valet parking is available at the Main Grand Ballroom Entrance Portico.' },
        { q: 'What is the dress code recommendation?', a: 'Guests are warmly encouraged to wear royal jewel tones, traditional South Asian / Arabian formal attire, or black-tie evening wear.' },
        { q: 'Are children & families welcome?', a: 'We cherish family togetherness! Children and family members of all ages are joyfully invited.' },
        { q: 'Can we take photographs & share on social media?', a: 'Yes! Please share your cherished moments and tag the couple with #FaizanMushira2026.' }
      ],
      wishingWellTitle: 'Digital Shagun / Wedding Gift Fund',
      wishingWellAccount: 'shagun.faizan-mushira@upi',
      wishingWellNote: 'Your prayers, love, and presence on our special day are the greatest blessings of all. For friends and family who wish to bestow a traditional digital Shagun:'
    }
  }
];

export const PRICING_PACKAGES = [
  {
    id: 'all-in-one-shagun',
    name: 'All-In-One Complete Luxury Suite',
    price: 1001,
    originalPrice: 2501,
    currencySymbol: '₹',
    currency: 'INR',
    popular: true,
    shagunBadge: 'All-Inclusive Shagun ₹1001 🕉️',
    description: 'One simple price. Everything included forever — live webpage, full customizer, 3D unboxing, real-time RSVPs, music, and instant admin verification.',
    features: [
      'Full Access to Customizer Studio (Unlimited Live Editing)',
      'Cinematic Webpage Invitation',
      'Personalized Shareable Web Link for WhatsApp & Instagram',
      'Interactive 3D Wax Seal Envelope Unboxing Experience',
      'Real-time Firestore Guest RSVP & Guestbook Registry',
      'Live Countdown Clock to Celebration Day',
      'Love Story Milestones & Photo Gallery',
      'Interactive Google Maps Navigation',
      'Ambient Celebration Background Music Player',
      'Dress Code Moodboard & Digital Wishing Well / Bank Details',
      'Instant HD Digital Download'
    ]
  }
];
