import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Music, Volume2, ArrowRight, RotateCcw, Check } from 'lucide-react';
import InvitationCard from './InvitationCard';
import { COLOR_THEMES, WAX_SEALS } from '../data/templates';
import { musicEngine } from '../utils/audioPlayer';

export default function EnvelopeExperience({
  invitationData,
  themeId = 'royalRedNavyBlack',
  fontPairingId = 'classicSerif',
  sealId = 'botanical',
  sealColor = '#B88B42',
  ambientTrackId = 'romanticPiano',
  onClose,
  onProceedToRsvp,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const theme = COLOR_THEMES[themeId] || COLOR_THEMES.royalRedNavyBlack;
  const seal = WAX_SEALS.find(s => s.id === sealId) || WAX_SEALS[0];

  const handleOpenEnvelope = () => {
    if (isOpen) return;

    setIsOpen(true);
    
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AA64', '#FAF5ED', '#F8B6C3', '#E5C07B', '#FFFFFF'],
      });
    } catch (e) {
      console.log(e);
    }

    // Trigger ambient celebration music automatically upon opening
    musicEngine.startTrack(ambientTrackId || 'romanticPiano');
    setIsPlayingAudio(true);
  };

  const handleReset = () => {
    setIsOpen(false);
    musicEngine.stopTrack();
    setIsPlayingAudio(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto py-8 px-4 flex flex-col items-center">
      
      {/* Top Experience Instructions Banner */}
      <div className="w-full text-center space-y-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
          <span>Interactive 3D Guest Unboxing Experience</span>
        </div>
        <p className="text-sm text-slate-300">
          {!isOpen 
            ? "Tap the wax seal below to break the seal, open the envelope, and reveal the invitation with music."
            : "Invitation unlocked! You can scroll, view the schedule, or proceed to RSVP."
          }
        </p>
      </div>

      {/* The Envelope Stage */}
      <div className="relative w-full max-w-lg min-h-[520px] flex items-center justify-center">
        
        {!isOpen ? (
          /* CLOSED ENVELOPE WITH WAX SEAL */
          <div 
            onClick={handleOpenEnvelope}
            className="group cursor-pointer relative w-full aspect-[4/3] rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center border-2 border-champagne-500/30 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] select-none"
            style={{ backgroundColor: theme.envelopeBg }}
          >
            {/* Flap Triangles Illusion */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent clip-triangle pointer-events-none rounded-t-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,170,100,0.15),transparent_70%)] pointer-events-none" />

            {/* Envelope Borders */}
            <div className="absolute inset-3 border border-champagne-400/20 rounded-xl pointer-events-none" />

            {/* Recipient Monogram Crest */}
            <div className="text-center space-y-2 z-10">
              <div className="text-[10px] tracking-[0.3em] uppercase text-champagne-300/80 font-mono">
                SPECIAL INVITATION FOR
              </div>
              <div className="font-serif italic text-xl text-white">
                Honored Guest
              </div>
            </div>

            {/* Wax Seal Center Button with Pulse */}
            <div className="mt-8 z-20 flex flex-col items-center gap-3">
              <div 
                className="w-20 h-20 rounded-full p-[3px] shadow-glow-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative"
                style={{
                  background: `linear-gradient(135deg, #FFF, ${sealColor}, #222)`
                }}
              >
                {/* Ping ring animation */}
                <div className="absolute inset-0 rounded-full border-2 border-champagne-400/80 animate-ping opacity-60" />

                <div 
                  className="w-full h-full rounded-full flex items-center justify-center text-3xl shadow-inner border-2 border-white/40"
                  style={{ backgroundColor: sealColor }}
                >
                  {seal.icon}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-champagne-300 group-hover:text-champagne-200">
                <span>Tap Seal To Open</span>
                <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
              </div>
            </div>

            {/* Bottom stamp */}
            <div className="absolute bottom-4 right-6 text-[10px] text-slate-400/60 font-mono tracking-widest">
              NYOTA LUXE • AIR MAIL
            </div>
          </div>
        ) : (
          /* OPENED STATE: CARD SLIDES OUT */
          <div className="w-full animate-float transition-all duration-700">
            <InvitationCard
              invitationData={invitationData}
              themeId={themeId}
              fontPairingId={fontPairingId}
              sealId={sealId}
              sealColor={sealColor}
            />
          </div>
        )}

      </div>

      {/* Control Actions Bar */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {isOpen && (
          <>
            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/15 transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Re-fold Envelope</span>
            </button>

            {onProceedToRsvp && (
              <button
                onClick={onProceedToRsvp}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-champagne-400 via-amber-500 to-champagne-600 text-slate-950 text-xs font-bold shadow-glow-gold hover:opacity-95 transition-all flex items-center gap-2"
              >
                <span>Proceed to RSVP Response</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </>
        )}
      </div>

    </div>
  );
}
