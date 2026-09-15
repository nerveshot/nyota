// ==========================================================================
// NYOTA DIRECT WHATSAPP CONCIERGE & CONTACT COMPONENT (PURE VANILLA JS)
// Direct WhatsApp messaging for custom orders, bespoke designs & live support
// ==========================================================================

import { copyToClipboard } from '../utils/helpers.js';

export const OWNER_WHATSAPP_NUMBER = '918302929248'; // +91 8302929248

export function renderContactSection(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const whatsappNumber = options.whatsappNumber || OWNER_WHATSAPP_NUMBER;

  // Custom Order pre-filled message
  const customOrderText = encodeURIComponent(
    "Hi! ✨ I would like to order a bespoke custom invitation webpage with specialized requirements. Please share design options and custom pricing for my event."
  );
  const customOrderUrl = `https://wa.me/${whatsappNumber}?text=${customOrderText}`;

  // Support / Help pre-filled message
  const supportText = encodeURIComponent(
    "Hi! 🛠️ I need assistance with my Nyota invitation / ₹1001 payment verification / editor setup."
  );
  const supportUrl = `https://wa.me/${whatsappNumber}?text=${supportText}`;

  container.innerHTML = `
    <section id="contact-section" style="position: relative; padding: 6rem 0; overflow: hidden; background: radial-gradient(circle at 50% 30%, #130F29 0%, #0B0914 100%); border-top: 1px solid rgba(212,175,55,0.15);">
      
      <!-- Ambient Glow Blobs -->
      <div style="position: absolute; top: 20%; left: 15%; width: 350px; height: 350px; background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%); pointer-events: none; filter: blur(60px);"></div>
      <div style="position: absolute; bottom: 20%; right: 15%; width: 350px; height: 350px; background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%); pointer-events: none; filter: blur(60px);"></div>

      <div class="container" style="position: relative; z-index: 10;">
        
        <!-- Section Header -->
        <div class="text-center" style="max-width: 700px; margin: 0 auto 3.5rem;">
          <div class="badge badge-emerald" style="margin-bottom: 0.85rem; font-size: 0.75rem; letter-spacing: 0.15em;">
            <span>💬</span>
            <span>Direct WhatsApp Concierge & Support</span>
          </div>
          
          <h2 class="font-cinzel" style="font-size: 2.5rem; color: #FFF; margin-bottom: 0.75rem; font-weight: 700;">
            Need Custom Work or <span class="gold-gradient-text">Instant Help?</span>
          </h2>
          
          <p class="text-muted" style="font-size: 0.95rem; line-height: 1.7;">
            Reach out directly on WhatsApp for bespoke custom invitation designs, unique caricature artwork, special animation requests, or prompt customer support.
          </p>
        </div>

        <!-- 2-Column Action Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2.25rem; max-width: 1080px; margin: 0 auto;">
          
          <!-- CARD 1: BESPOKE CUSTOM INVITATION ORDERS -->
          <div class="glass-panel" style="padding: 2.75rem 2.25rem; border: 2px solid rgba(212, 175, 55, 0.45); border-radius: var(--radius-xl); display: flex; flex-direction: column; justify-content: space-between; transition: var(--transition);" onmouseenter="this.style.borderColor='rgba(212,175,55,0.85)'; this.style.transform='translateY(-6px)'" onmouseleave="this.style.borderColor='rgba(212,175,55,0.45)'; this.style.transform='translateY(0)'">
            
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                <div style="width: 52px; height: 52px; border-radius: 16px; background: rgba(212, 175, 55, 0.18); border: 1px solid rgba(212, 175, 55, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--gold-light); box-shadow: var(--shadow-gold);">
                  ✨
                </div>
                <span class="badge badge-gold" style="font-size: 0.7rem; font-family: var(--font-mono);">
                  Bespoke Design
                </span>
              </div>

              <h3 class="font-cinzel" style="font-size: 1.5rem; color: #FFF; font-weight: 700; margin-bottom: 0.6rem;">
                Order Custom Invitations
              </h3>
              
              <p class="text-muted" style="font-size: 0.88rem; line-height: 1.65; margin-bottom: 1.5rem;">
                Looking for custom bride & groom caricature artwork, complex multi-event itineraries, 3D palace themes, video intros, or tailored royal animations?
              </p>

              <!-- Tailored Pricing Policy Note -->
              <div style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(212, 175, 55, 0.25); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.5rem;">
                <div style="font-size: 0.82rem; font-weight: 700; color: var(--gold-light); display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.25rem;">
                  <span>🤝</span>
                  <span>Tailored Pricing Policy:</span>
                </div>
                <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.5;">
                  Custom handcrafted invitations are priced individually based on design complexity, custom illustration assets, and specific client requirements.
                </p>
              </div>

              <!-- Feature Bullet List -->
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.85rem; color: #E2E8F0; margin-bottom: 2rem;">
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>1-on-1 direct designer collaboration</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>Unlimited revisions & custom audio/tracks</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>Dedicated custom domain & private hosting</span>
                </li>
              </ul>
            </div>

            <a href="${customOrderUrl}" target="_blank" rel="noopener" class="btn btn-block btn-lg" style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: #FFF; font-weight: 700; box-shadow: 0 8px 25px rgba(16, 185, 129, 0.35); text-decoration: none;">
              <span>💬</span>
              <span>Chat on WhatsApp for Custom Order</span>
              <span>→</span>
            </a>

          </div>

          <!-- CARD 2: INSTANT SUPPORT & ASSISTANCE -->
          <div class="glass-panel" style="padding: 2.75rem 2.25rem; border: 2px solid rgba(16, 185, 129, 0.4); border-radius: var(--radius-xl); display: flex; flex-direction: column; justify-content: space-between; transition: var(--transition);" onmouseenter="this.style.borderColor='rgba(16, 185, 129, 0.85)'; this.style.transform='translateY(-6px)'" onmouseleave="this.style.borderColor='rgba(16, 185, 129, 0.4)'; this.style.transform='translateY(0)'">
            
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                <div style="width: 52px; height: 52px; border-radius: 16px; background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #6EE7B7; box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);">
                  🛠️
                </div>
                <span class="badge badge-emerald" style="font-size: 0.7rem; font-family: var(--font-mono);">
                  Fast Support
                </span>
              </div>

              <h3 class="font-cinzel" style="font-size: 1.5rem; color: #FFF; font-weight: 700; margin-bottom: 0.6rem;">
                Need Help or Facing Any Issue?
              </h3>
              
              <p class="text-muted" style="font-size: 0.88rem; line-height: 1.65; margin-bottom: 1.5rem;">
                Have a question about your ₹1001 payment verification, photo sizing, Firestore RSVP management, or link sharing? We are here to help!
              </p>

              <!-- Prompt Response Box -->
              <div style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.5rem;">
                <div style="font-size: 0.82rem; font-weight: 700; color: #6EE7B7; display: flex; align-items: gap: 0.4rem; margin-bottom: 0.25rem;">
                  <span>⚡</span>
                  <span>Prompt Response Time:</span>
                </div>
                <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.5;">
                  We reply directly on WhatsApp within minutes to resolve any doubts, approve payments, or assist with your live event setup.
                </p>
              </div>

              <!-- Feature Bullet List -->
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.85rem; color: #E2E8F0; margin-bottom: 2rem;">
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>Instant payment & UTR verification help</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>Assistance with audio tracks & photo sizing</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: #10B981; font-weight: bold;">✓</span>
                  <span>RSVP guest list export & technical guidance</span>
                </li>
              </ul>
            </div>

            <a href="${supportUrl}" target="_blank" rel="noopener" class="btn btn-block btn-lg" style="background: rgba(16, 185, 129, 0.2); border: 1.5px solid #10B981; color: #6EE7B7; font-weight: 700; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.2); text-decoration: none;">
              <span>📞</span>
              <span>Contact Support on WhatsApp</span>
              <span>→</span>
            </a>

          </div>

        </div>

        <!-- Quick Contact Info Bar with Copy Button -->
        <div class="glass-panel" style="max-width: 600px; margin: 3rem auto 0; padding: 1.25rem 1.75rem; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; text-align: left;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(16, 185, 129, 0.2); color: #10B981; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
              💬
            </div>
            <div>
              <div style="font-size: 0.85rem; font-weight: 700; color: #FFF;">Direct WhatsApp Helpline</div>
              <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--gold-light);">+${whatsappNumber}</div>
            </div>
          </div>

          <button id="copy-whatsapp-number-btn" class="btn btn-sm btn-gold-outline" style="cursor: pointer;">
            <span>Copy Number</span>
          </button>
        </div>

      </div>
    </section>
  `;

  // Bind copy number event
  const copyBtn = document.getElementById('copy-whatsapp-number-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(`+${whatsappNumber}`, 'WhatsApp number copied to clipboard!');
    });
  }
}
