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
                <span>Instant 4K & PDF Export</span>
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
                <span>Live Webpage Demo (Zareqia Style)</span>
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

          {/* Right Column: Hero Visual Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative behind-the-card glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-champagne-500/40 via-roseGold-500/30 to-emeraldGlow-500/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Invitation Card Cardstock Container */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#072017] via-[#0B2E21] to-[#04120D] border-2 border-champagne-400/40 p-6 sm:p-8 shadow-luxury text-center space-y-5 overflow-hidden">
                
                {/* Gold foil corner accents */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-champagne-400/60 rounded-tl-lg pointer-events-none"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-champagne-400/60 rounded-tr-lg pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-champagne-400/60 rounded-bl-lg pointer-events-none"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-champagne-400/60 rounded-br-lg pointer-events-none"></div>

                {/* Subtle botanical watermark icon */}
                <div className="text-champagne-400/30 text-xs uppercase tracking-[0.3em] font-sans font-semibold pt-1">
                  TOGETHER WITH THEIR FAMILIES
                </div>

                <div className="font-serif italic text-sm text-emerald-200/90">
                  Request the honour of your presence
                </div>

                <div className="space-y-1">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text tracking-wide">
                    Elena & Arthur
                  </h2>
                  <div className="text-xs text-champagne-300/80 font-sans tracking-widest uppercase">
                    ARE GETTING MARRIED
                  </div>
                </div>

                <div className="py-2 border-y border-champagne-400/20 my-2 space-y-1">
                  <div className="font-cinzel text-sm sm:text-base font-semibold text-white">
                    SATURDAY, OCTOBER 24, 2026
                  </div>
                  <div className="text-xs text-emerald-200/70 font-sans">
                    FOUR O'CLOCK IN THE AFTERNOON
                  </div>
                  <div className="text-xs text-champagne-300 font-medium">
                    The St. Regis Grand Ballroom, New York
                  </div>
                </div>

                {/* Wax Seal Badge in Hero */}
                <div className="flex justify-center items-center gap-3 pt-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E2C38F] via-[#B88B42] to-[#8F662C] p-[2px] shadow-glow-gold flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#9B7029] flex items-center justify-center text-xl shadow-inner border border-champagne-300/40">
                      🌿
                    </div>
                  </div>
                </div>

                {/* Interactive Demo Action Bar on Card */}
                <div className="pt-2">
                  <button
                    onClick={onPreviewDemoEnvelope}
                    className="w-full py-2.5 px-4 rounded-xl bg-champagne-500/20 hover:bg-champagne-500/30 border border-champagne-400/40 text-champagne-200 text-xs font-semibold transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Tap to Test Interactive Unboxing & Music</span>
                    <Sparkles className="w-3.5 h-3.5 text-champagne-400 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>

              </div>

              {/* Floating feature pills around preview */}
              <div className="absolute -bottom-4 -left-4 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2 text-xs font-medium text-slate-200 shadow-xl border border-champagne-500/20 hidden sm:flex">
                <Music className="w-4 h-4 text-champagne-400" />
                <span>Ambient Romance Audio</span>
              </div>
              <div className="absolute -top-4 -right-4 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2 text-xs font-medium text-emerald-300 shadow-xl border border-emerald-500/20 hidden sm:flex">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>Realtime RSVP Sync</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
