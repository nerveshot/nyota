import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Music, Volume2, VolumeX, Crown, Menu, X, ArrowRight } from 'lucide-react';
import { musicEngine } from '../utils/audioPlayer';

export default function Navbar({ onOpenStudio, onOpenPricing, activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMusic = () => {
    if (isPlayingMusic) {
      musicEngine.stopTrack();
      setIsPlayingMusic(false);
    } else {
      musicEngine.startTrack('romanticPiano');
      setIsPlayingMusic(true);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0B0914]/90 backdrop-blur-md border-b border-champagne-500/20 py-3 shadow-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 group text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-champagne-400 via-champagne-600 to-amber-700 p-[1px] shadow-glow-gold transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#0E0C1C] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-champagne-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="font-cinzel text-xl font-bold tracking-wider gold-gradient-text block">
              NYOTA
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-champagne-300/70 block -mt-1 font-sans">
              LUXURY INVITATIONS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button 
            onClick={() => onNavigate('templates')}
            className={`transition-colors hover:text-champagne-400 ${
              activeSection === 'templates' ? 'text-champagne-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Templates & Themes
          </button>
          <button 
            onClick={onOpenStudio}
            className={`transition-colors hover:text-champagne-400 ${
              activeSection === 'studio' ? 'text-champagne-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Customizer Studio
          </button>
          <button 
            onClick={() => onNavigate('features')}
            className={`transition-colors hover:text-champagne-400 ${
              activeSection === 'features' ? 'text-champagne-400 font-semibold' : 'text-slate-300'
            }`}
          >
            RSVP & Envelope Experience
          </button>
          <button 
            onClick={onOpenPricing}
            className={`transition-colors hover:text-champagne-400 ${
              activeSection === 'pricing' ? 'text-champagne-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Pricing & Monetization
          </button>
          <button 
            onClick={() => onNavigate('faq')}
            className="text-slate-300 transition-colors hover:text-champagne-400"
          >
            FAQ
          </button>
        </div>

        {/* Right Action & Music Player */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Ambient Music Toggle */}
          <button
            onClick={handleToggleMusic}
            title={isPlayingMusic ? "Mute ambient music" : "Play ambient celebration music"}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
              isPlayingMusic 
                ? 'bg-champagne-500/20 text-champagne-300 border-champagne-500/50 shadow-glow-gold' 
                : 'bg-white/5 text-slate-300 border-white/10 hover:border-champagne-500/30'
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-champagne-400 animate-pulse" />
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 animate-ping"></span>
                  Music Playing
                </span>
              </>
            ) : (
              <>
                <Music className="w-3.5 h-3.5 text-slate-400" />
                <span>Play Ambience</span>
              </>
            )}
          </button>

          {/* Create Custom Invite Button */}
          <button
            onClick={onOpenStudio}
            className="relative group overflow-hidden rounded-full p-[1px] font-medium text-sm transition-transform active:scale-95 shadow-glow-gold"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 rounded-full animate-shimmer"></span>
            <span className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-[#0E0C1C] text-champagne-300 group-hover:bg-opacity-80 transition-all font-semibold">
              <span>Create Invite</span>
              <ArrowRight className="w-4 h-4 text-champagne-400 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleToggleMusic}
            className="p-2 rounded-lg bg-white/5 text-champagne-300 border border-white/10"
            aria-label="Toggle ambient music"
          >
            {isPlayingMusic ? <Volume2 className="w-4 h-4" /> : <Music className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-slate-300 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-champagne-500/20 px-4 pt-3 pb-6 mt-3 space-y-3">
          <button
            onClick={() => { onNavigate('templates'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-champagne-400 font-medium"
          >
            Templates & Themes
          </button>
          <button
            onClick={() => { onOpenStudio(); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-champagne-400 font-medium"
          >
            Customizer Studio
          </button>
          <button
            onClick={() => { onNavigate('features'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-champagne-400 font-medium"
          >
            RSVP & Envelope Experience
          </button>
          <button
            onClick={() => { onOpenPricing(); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-champagne-400 font-medium"
          >
            Pricing & Packages
          </button>
          <div className="pt-2">
            <button
              onClick={() => { onOpenStudio(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-champagne-500 to-amber-600 text-slate-950 font-bold text-sm shadow-glow-gold"
            >
              Start Creating Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
