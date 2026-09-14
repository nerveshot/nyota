// ==========================================================================
// NYOTA HERO LANDING SECTION (PURE VANILLA JS)
// ==========================================================================

import { INVITATION_TEMPLATES, COLOR_THEMES } from '../templates.js';
import { formatStackedNames } from '../utils/helpers.js';

export function renderHero(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { onStartCustomizing = () => {}, onOpenEnvelopeDemo = () => {} } = options;
  const sample = INVITATION_TEMPLATES[0];
  const theme = COLOR_THEMES[sample.themeId] || COLOR_THEMES.royalRedNavyBlack;

  container.innerHTML = `
    <section style="position: relative; padding: 6rem 0 4rem; overflow: hidden; background: radial-gradient(circle at 50% 20%, #16102C 0%, #0B0914 80%);">
      
      <!-- Subtle Background Glows -->
      <div style="position: absolute; top: 10%; left: 50%; transform: translateX(-50%); width: 600px; height: 350px; background: radial-gradient(ellipse, rgba(212, 175, 55, 0.12) 0%, transparent 70%); pointer-events: none;"></div>

      <div class="container" style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3.5rem; align-items: center;">
        
        <!-- Hero Text & Value Proposition -->
        <div>
          <div class="badge badge-gold" style="margin-bottom: 1.25rem;">
            <span>✨</span>
            <span>Digital Luxury Wedding & Gala Invitations</span>
          </div>

          <h1 class="font-serif" style="font-size: 3.25rem; line-height: 1.15; color: #FFF; margin-bottom: 1.25rem;">
            Unforgettable <span class="gold-gradient-text">Celebrations</span> Begin With Royalty.
          </h1>

          <p class="text-secondary" style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem;">
            Experience 3D wax-seal unboxing, cinematic webpage invitations, ambient background music, and real-time Firestore guest RSVPs — all for one simple ₹1001 Shagun price.
          </p>

          <div class="flex gap-4" style="flex-wrap: wrap;">
            <button id="hero-create-btn" class="btn btn-primary-gold btn-lg">
              <span>Start Customizing</span>
              <span>✨</span>
            </button>
            <button id="hero-unboxing-demo-btn" class="btn btn-secondary btn-lg">
              <span>Try 3D Unboxing Demo</span>
              <span>✉️</span>
            </button>
          </div>

          <!-- Feature Highlights -->
          <div class="flex gap-6" style="margin-top: 3rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 2rem;">
            <div>
              <div style="font-family: var(--font-cinzel); font-size: 1.4rem; color: var(--gold-light); font-weight: 700;">100%</div>
              <div class="text-muted" style="font-size: 0.75rem; text-transform: uppercase;">Zero Lag Speed</div>
            </div>
            <div>
              <div style="font-family: var(--font-cinzel); font-size: 1.4rem; color: var(--gold-light); font-weight: 700;">3D Box</div>
              <div class="text-muted" style="font-size: 0.75rem; text-transform: uppercase;">Wax Seal Reveal</div>
            </div>
            <div>
              <div style="font-family: var(--font-cinzel); font-size: 1.4rem; color: var(--gold-light); font-weight: 700;">Realtime</div>
              <div class="text-muted" style="font-size: 0.75rem; text-transform: uppercase;">Firestore RSVPs</div>
            </div>
          </div>
        </div>

        <!-- Hero Interactive Invitation Card Preview -->
        <div style="perspective: 1000px; display: flex; justify-content: center;">
          <div class="invitation-card" style="background-color: ${theme.cardBg}; border-color: ${theme.border}; max-width: 440px; transform: rotate(1deg) translateY(-8px); box-shadow: var(--shadow-gold-lg); transition: transform 0.4s ease;" onmouseenter="this.style.transform='rotate(0deg) scale(1.02)'" onmouseleave="this.style.transform='rotate(1deg) translateY(-8px)'">
            <div class="invitation-arch-border"></div>
            
            <div class="invitation-bismillah font-serif">${sample.defaults.bismillah}</div>
            <div class="invitation-tag font-mono">${sample.defaults.tag}</div>
            
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">
              ${sample.defaults.title}
            </p>

            ${formatStackedNames(sample.defaults.primaryNames, { size: 'normal', fontClass: 'font-cinzel' })}

            <div class="invitation-date">
              ${sample.defaults.dateText}
            </div>
            <div style="font-size: 0.85rem; color: var(--gold-hover); margin-top: 0.25rem;">
              ${sample.defaults.timeText}
            </div>

            <div class="invitation-venue" style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(212,175,55,0.2);">
              📍 ${sample.defaults.venueName}
            </div>
          </div>
        </div>

      </div>
    </section>
  `;

  document.getElementById('hero-create-btn')?.addEventListener('click', onStartCustomizing);
  document.getElementById('hero-unboxing-demo-btn')?.addEventListener('click', onOpenEnvelopeDemo);
}
