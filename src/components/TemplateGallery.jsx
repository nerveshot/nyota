import React from 'react';
import { 
  Sparkles, Heart, Play, Music, Users, Calendar, MapPin, 
  ArrowRight, CheckCircle2, ShieldCheck, Crown, Star, Eye
} from 'lucide-react';
import { INVITATION_TEMPLATES } from '../data/templates';

export default function TemplateGallery({ onOpenStudio, onOpenWebpageDemo }) {
  const arabicTemplate = INVITATION_TEMPLATES[0];

  const featuresList = [
    { label: '3D Velvet Curtain & Grand Mosque Walkthrough', icon: '🕌' },
    { label: 'Ascending Gold Calligraphy Bismillah Blessing', icon: '✨' },
    { label: 'Interactive Scratch-to-Reveal Sacred Date Card', icon: '🪙' },
    { label: 'Live Countdown Clock to Celebration Day', icon: '⏳' },
    { label: 'Multi-Event Itinerary (Nikah, Walima, Baraat, Dawat-e-Khas)', icon: '👑' },
    { label: 'Love Story Milestones & Photo Gallery', icon: '💍' },
    { label: '1-Tap Google Maps Navigation & Google Calendar', icon: '📍' },
    { label: 'Ambient Background Melody & Music Player', icon: '🎵' },
    { label: 'Real-Time Guest RSVP & WhatsApp Confirmation', icon: '💌' },
    { label: 'Digital Shagun / UPI Wishing Well Fund', icon: '🎁' }
  ];

  return (
    <section id="templates-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-glow-gold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Exclusive Luxury Collection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white leading-tight">
            The Royal <span className="gold-gradient-text">Arabic Style Invitation</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            An opulent royal Islamic palace celebration featuring 3D velvet curtains, Grand Mosque entrance animation, 
            sacred Bismillah calligraphy, interactive scratch-to-reveal date card, ambient melodies, and real-time RSVPs.
          </p>
        </div>

        {/* Exclusive Showcase Card for Arabic Style Invitation */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1C0612]/95 via-[#0D1024]/95 to-[#05030A]/95 border-2 border-amber-400/60 shadow-[0_0_60px_rgba(212,175,55,0.25)] p-6 sm:p-10 lg:p-12 backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Visual Preview Arch */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 via-rose-600/20 to-blue-600/20 rounded-[200px] blur-2xl pointer-events-none" />

                {/* Grand Moorish Arch Frame */}
                <div className="relative aspect-[3/4] rounded-t-[180px] rounded-b-3xl overflow-hidden border-4 border-amber-400/70 shadow-2xl p-2 bg-gradient-to-b from-[#2A0510] via-[#0D1530] to-[#08020A] group">
                  <div className="w-full h-full rounded-t-[170px] rounded-b-2xl overflow-hidden relative">
                    <img
                      src="/images/muslim-royal-couple.jpg"
                      alt="Arabic Style Royal Wedding Invitation"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-6 text-center space-y-2">
                      <div 
                        className="text-2xl font-serif text-amber-300 font-bold gold-gradient-text"
                        style={{ fontFamily: `'Scheherazade New', 'Amiri', serif` }}
                        dir="rtl"
                      >
                        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                      </div>
                      <div className="font-cinzel text-lg font-bold text-white gold-gradient-text">
                        Zayd Al-Mansoor & Aaliyah Khan
                      </div>
                      <div className="text-[10px] text-amber-300/90 font-mono tracking-widest uppercase">
                        Dawat-e-Khas • Nikah Ceremony
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Details, Included Highlights & Action CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold font-mono">
                    ✦ ALL-IN-ONE LUXURY SUITE
                  </span>
                  <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs font-semibold">
                    ₹1001 Shagun Lifetime Access
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white">
                  Arabic Style Royal Wedding & Nikah Webpage
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                  A timeless royal masterwork designed with Obsidian Black, Royal Crimson Red, and Deep Midnight Navy Blue accents, 
                  trimmed with imperial gold foil borders and authentic Islamic calligraphy.
                </p>
              </div>

              {/* Grid of features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-white/10 text-left">
                {featuresList.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <span className="text-sm flex-shrink-0">{feat.icon}</span>
                    <span className="font-sans leading-tight">{feat.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={onOpenWebpageDemo}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 text-slate-950 font-bold text-sm shadow-glow-gold hover:opacity-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Play className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>Launch Live Interactive Demo</span>
                  <Sparkles className="w-4 h-4 text-slate-950" />
                </button>

                <button
                  onClick={() => onOpenStudio(arabicTemplate)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-slate-100 font-semibold text-sm border border-amber-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Customize This Invitation</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
