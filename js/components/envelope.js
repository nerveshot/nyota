// ==========================================================================
// NYOTA 3D DIGITAL ENVELOPE UNBOXING COMPONENT (PURE VANILLA JS)
// ==========================================================================

import { triggerConfetti } from '../utils/confetti.js';
import { musicEngine } from '../utils/audio.js';
import { COLOR_THEMES, WAX_SEALS } from '../templates.js';

export function renderEnvelopeComponent(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const {
    invitationData = {},
    themeId = 'royalRedNavyBlack',
    sealId = 'botanical',
    sealColor = '#B88B42',
    ambientTrackId = 'romanticPiano',
    onOpened = () => {}
  } = options;

  const theme = COLOR_THEMES[themeId] || COLOR_THEMES.royalRedNavyBlack;
  const seal = WAX_SEALS.find(s => s.id === sealId) || WAX_SEALS[0];

  container.innerHTML = `
    <div class="envelope-stage">
      <div id="envelope-box" class="envelope-wrapper" style="background-color: ${theme.envelopeBg};">
        
        <!-- Flap -->
        <div class="envelope-flap"></div>
        <div class="envelope-inner-glow"></div>
        <div class="envelope-border-line"></div>

        <!-- Recipient Header -->
        <div class="envelope-stamp-top">
          <div class="envelope-recipient-tag">SPECIAL INVITATION FOR</div>
          <div class="envelope-recipient-name">Honored Guest</div>
        </div>

        <!-- Wax Seal Center Button -->
        <div id="wax-seal-trigger" class="wax-seal-btn">
          <div class="wax-seal-badge" style="background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.45) 0%, rgba(212,175,55,0.2) 20%, transparent 60%), linear-gradient(135deg, ${sealColor} 0%, #4a3606 100%);">
            <div class="wax-seal-pulse-ring"></div>
            <span>${seal.icon}</span>
          </div>
          <div class="wax-seal-label">
            <span>Tap Seal To Open</span>
            <span>✨</span>
          </div>
        </div>

        <!-- Bottom Luxury Seal Stamp -->
        <div style="position: absolute; bottom: 1.25rem; right: 1.5rem; font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.15em; color: rgba(255,255,255,0.4);">
          NYOTA LUXE • AIR MAIL
        </div>

      </div>
    </div>
  `;

  const sealTrigger = document.getElementById('wax-seal-trigger');
  const envelopeBox = document.getElementById('envelope-box');

  if (sealTrigger && envelopeBox) {
    sealTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      envelopeBox.classList.add('open');
      
      // Confetti celebration
      triggerConfetti();

      // Start synthesized luxury ambient music
      musicEngine.startTrack(ambientTrackId || 'romanticPiano');

      setTimeout(() => {
        onOpened();
      }, 1000);
    });
  }
}
