import React from 'react';
import { Sparkles, Heart, Crown, ArrowRight, ShieldCheck, Download, Smartphone, Music, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenStudio, onExploreTemplates, onPreviewDemoEnvelope, onPreviewZareqiaWebpage }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glow & Starfields */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-br from-champagne-500/15 via-roseGold-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-emeraldGlow-500/10 blur-[100px] pointer-events-none -z-10" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-24 left-[15%] text-champagne-400/40 text-xl animate-float pointer-events-none hidden lg:block">✦</div>
      <div className="absolute top-48 right-[18%] text-roseGold-300/40 text-2xl animate-float delay-1000 pointer-events-none hidden lg:block">✧</div>
      <div className="absolute bottom-16 left-[20%] text-champagne-400/30 text-lg animate-pulse pointer-events-none hidden lg:block">✦</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Pitch */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider shadow-glow-gold">
              <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
              <span>Next-Gen Custom Invitations & RSVP Platform</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel font-bold tracking-tight text-white leading-[1.15]">
              Breathtaking Invitations. <br />
              <span className="gold-gradient-text">Unforgettable Celebrations.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Design bespoke digital and print invitations in minutes. Delight your guests with 
              <span className="text-champagne-300 font-medium"> 3D envelope unboxings</span>, 
              <span className="text-champagne-300 font-medium"> ambient background music</span>, 
              and <span className="text-champagne-300 font-medium"> real-time RSVP & dietary tracking</span>.
            </p>

            {/* Key feature checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                <span>Cinematic Webpage Link</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                <span>Live Interactive RSVPs</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                <span>Wax Seal & Music Audio</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenStudio}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 font-bold text-base shadow-glow-gold hover:opacity-95 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Create Custom Invite</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={onPreviewZareqiaWebpage}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-champagne-500/15 hover:bg-champagne-500/25 text-champagne-300 hover:text-white font-semibold text-base border border-champagne-400/40 transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm shadow-glow-gold"
              >
                <Sparkles className="w-4 h-4 text-champagne-400" />
                <span>Arabic Style Invitation</span>
              </button>
            </div>

            {/* Social Proof & Metrics */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-cinzel text-white">15,000+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Events Celebrated</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-cinzel text-champagne-400">99.4%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Guest RSVP Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-cinzel text-roseGold-300">4.9 / 5.0</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Host Satisfaction</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative behind-the-card glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400/25 via-rose-600/20 to-blue-600/25 rounded-[40px] blur-2xl pointer-events-none animate-pulse"></div>

              {/* Grand Moorish Arch Couple Image Container */}
              <div 
                onClick={onPreviewZareqiaWebpage}
                className="relative rounded-t-[180px] rounded-b-3xl overflow-hidden border-4 border-amber-400/70 shadow-2xl p-2 bg-gradient-to-b from-[#2A0510] via-[#0D1530] to-[#08020A] group cursor-pointer transition-all hover:scale-[1.02] hover:border-amber-400"
              >
                <div className="w-full aspect-[3/4] rounded-t-[170px] rounded-b-2xl overflow-hidden relative">
                  <img
                    src="/images/royal-invitation-scroll.jpg"
                    alt="Royal Gold Invitation Scroll & Wax Seal"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Gradient Overlay with Royal Calligraphy Label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent flex flex-col justify-end p-6 text-center space-y-1.5">
                    <div 
                      className="text-2xl sm:text-3xl font-serif text-amber-300 font-bold gold-gradient-text drop-shadow-md"
                      style={{ fontFamily: `'Scheherazade New', 'Amiri', serif` }}
                      dir="rtl"
                    >
                      بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                    </div>
                    
                    <div className="font-cinzel text-lg sm:text-xl font-bold text-white gold-gradient-text">
                      Royal Luxury Invitation Scroll
                    </div>

                    <div className="text-[10px] sm:text-xs text-amber-300/90 font-mono tracking-widest uppercase">
                      24K Gold Foil • Wax Seal Unboxing
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating feature pills around image */}
              <div className="absolute -bottom-4 -left-4 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2 text-xs font-medium text-slate-200 shadow-xl border border-amber-500/30 hidden sm:flex">
                <Music className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Mosque Walkthrough & Audio</span>
              </div>
              <div className="absolute -top-3 -right-3 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2 text-xs font-medium text-amber-300 shadow-xl border border-amber-500/30 hidden sm:flex">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Live Interactive RSVP</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
