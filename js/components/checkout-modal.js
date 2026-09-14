// ==========================================================================
// NYOTA CHECKOUT & PRICING MODAL (PURE VANILLA JS)
// Shagun ₹1001 Package with QR payment & Order creation
// ==========================================================================

import { createOrder } from '../db.js';
import { closeModal, showToast, copyToClipboard } from '../utils/helpers.js';
import { PRICING_PACKAGES } from '../templates.js';

export function renderCheckoutModal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const pkg = PRICING_PACKAGES[0];

  container.innerHTML = `
    <div id="checkout-modal" class="modal-overlay">
      <div class="modal-content" style="max-width: 540px;">
        
        <div class="modal-header">
          <div>
            <span class="badge badge-gold" style="margin-bottom: 0.25rem;">${pkg.shagunBadge}</span>
            <h3 class="font-serif" style="font-size: 1.4rem; color: #FFF;">${pkg.name}</h3>
          </div>
          <button class="modal-close-btn" data-close="checkout-modal">&times;</button>
        </div>

        <div class="modal-body">
          <div class="flex items-baseline gap-2" style="margin-bottom: 1rem;">
            <span style="font-family: var(--font-cinzel); font-size: 2.25rem; font-weight: 700; color: var(--gold-light);">
              ${pkg.currencySymbol}${pkg.price}
            </span>
            <span class="text-muted" style="text-decoration: line-through; font-size: 1rem;">
              ${pkg.currencySymbol}${pkg.originalPrice}
            </span>
            <span class="badge badge-emerald">60% Off Shagun Price</span>
          </div>

          <p class="text-secondary" style="font-size: 0.875rem; margin-bottom: 1.5rem;">
            ${pkg.description}
          </p>

          <!-- QR Code payment preview -->
          <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--gold-border); border-radius: var(--radius-md); padding: 1.25rem; text-align: center; margin-bottom: 1.5rem;">
            <img src="/payment-qr.jpg" alt="UPI QR Payment" style="max-width: 180px; border-radius: var(--radius-sm); margin: 0 auto 0.75rem; display: block;" />
            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--gold-light);">
              UPI: <code>faizansalam@upi</code>
            </div>
            <button id="checkout-copy-upi" class="btn btn-sm btn-gold-outline" style="margin-top: 0.5rem;">Copy UPI ID</button>
          </div>

          <form id="checkout-order-form">
            <div class="form-group">
              <label class="form-label">Host Name</label>
              <input type="text" id="order-host-name" class="form-input" placeholder="e.g. Faizan Salam" required />
            </div>

            <div class="form-group">
              <label class="form-label">Host Email / WhatsApp</label>
              <input type="text" id="order-host-contact" class="form-input" placeholder="faizan@example.com or +91 9876543210" required />
            </div>

            <div class="form-group">
              <label class="form-label">UPI Transaction Reference / UTR Number</label>
              <input type="text" id="order-utr" class="form-input" placeholder="e.g. 429182910291" required />
            </div>

            <button type="submit" id="checkout-submit-btn" class="btn btn-primary-gold btn-block btn-lg" style="margin-top: 1rem;">
              <span>Submit Payment for Instant Verification</span>
              <span>✨</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  `;

  // Close
  container.querySelector('[data-close="checkout-modal"]')?.addEventListener('click', () => {
    closeModal('checkout-modal');
  });

  // Copy UPI
  document.getElementById('checkout-copy-upi')?.addEventListener('click', () => {
    copyToClipboard('faizansalam@upi', 'UPI ID copied to clipboard!');
  });

  // Submit Order
  document.getElementById('checkout-order-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('checkout-submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<span>Verifying & Recording Order...</span>';

    const hostName = document.getElementById('order-host-name').value.trim();
    const hostContact = document.getElementById('order-host-contact').value.trim();
    const utr = document.getElementById('order-utr').value.trim();

    try {
      await createOrder({
        hostName,
        hostContact,
        utr,
        amount: 1001,
        packageId: 'all-in-one-shagun',
      });

      showToast('Order submitted! Your invitation package is unlocked ✨', 'success');
      closeModal('checkout-modal');
    } catch (err) {
      showToast('Failed to record order', 'error');
      btn.disabled = false;
      btn.innerHTML = '<span>Submit Payment for Instant Verification</span><span>✨</span>';
    }
  });
}
