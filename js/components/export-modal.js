// ==========================================================================
// NYOTA SHARE & EXPORT MODAL (PURE VANILLA JS)
// ==========================================================================

import { closeModal, copyToClipboard, showToast } from '../utils/helpers.js';

export function renderExportModal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let currentLink = window.location.origin + '/invite.html';

  function update() {
    container.innerHTML = `
      <div id="export-modal" class="modal-overlay">
        <div class="modal-content" style="max-width: 480px;">
          
          <div class="modal-header">
            <div>
              <span class="badge badge-gold" style="margin-bottom: 0.25rem;">Share & Send</span>
              <h3 class="font-serif" style="font-size: 1.35rem; color: #FFF;">Share Your Invitation</h3>
            </div>
            <button class="modal-close-btn" data-close="export-modal">&times;</button>
          </div>

          <div class="modal-body">
            <p class="text-secondary" style="font-size: 0.875rem; margin-bottom: 1.25rem;">
              Send this link to family and friends via WhatsApp, SMS, or Instagram for instant 3D unboxing and RSVP collection:
            </p>

            <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--gold-border); padding: 0.75rem 1rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 1.5rem;">
              <span id="export-link-text" style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--gold-light); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                ${currentLink}
              </span>
              <button id="export-copy-btn" class="btn btn-sm btn-primary-gold">Copy</button>
            </div>

            <div class="flex flex-col gap-2">
              <button id="export-whatsapp-btn" class="btn btn-block" style="background: #25D366; color: #000; font-weight: 700;">
                <span>Share Directly on WhatsApp</span>
                <span>💬</span>
              </button>

              <button id="export-email-btn" class="btn btn-secondary btn-block">
                <span>Share via Email</span>
                <span>✉️</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    // Close
    container.querySelector('[data-close="export-modal"]')?.addEventListener('click', () => {
      closeModal('export-modal');
    });

    // Copy
    document.getElementById('export-copy-btn')?.addEventListener('click', () => {
      copyToClipboard(currentLink, 'Invitation link copied!');
    });

    // WhatsApp
    document.getElementById('export-whatsapp-btn')?.addEventListener('click', () => {
      const msg = encodeURIComponent(`You are cordially invited to celebrate with us! ✨ Please open our digital invitation here: ${currentLink}`);
      window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
    });

    // Email
    document.getElementById('export-email-btn')?.addEventListener('click', () => {
      const subject = encodeURIComponent('Special Wedding & Celebration Invitation');
      const body = encodeURIComponent(`Dear Honored Guest,\n\nYou are cordially invited to celebrate our special day with us!\nPlease view our interactive digital invitation here:\n${currentLink}\n\nWith warm wishes & prayers.`);
      window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
    });
  }

  window.setExportModalLink = (newLink) => {
    currentLink = newLink;
    update();
  };

  update();
}
