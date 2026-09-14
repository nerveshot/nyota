// ==========================================================================
// NYOTA RSVP FORM COMPONENT (PURE VANILLA JS)
// ==========================================================================

import { submitRsvp } from '../db.js';
import { showToast } from '../utils/helpers.js';
import { triggerConfetti } from '../utils/confetti.js';

export function renderRsvpSection(containerId, invitationData = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const invId = invitationData.id || 'default_invitation';
  const deadline = invitationData.rsvpDeadline || 'Kindly RSVP by September 15, 2026';

  container.innerHTML = `
    <div class="glass-panel" style="max-width: 680px; margin: 0 auto; padding: 2.5rem 2rem;">
      <div class="text-center" style="margin-bottom: 2rem;">
        <span class="badge badge-gold" style="margin-bottom: 0.75rem;">RSVP Response</span>
        <h3 class="font-serif" style="font-size: 2rem; color: #FFF; margin-bottom: 0.5rem;">Celebrate With Us</h3>
        <p class="text-muted" style="font-size: 0.875rem;">${deadline}</p>
      </div>

      <form id="nyota-rsvp-form">
        <div class="form-group">
          <label class="form-label">Full Name *</label>
          <input type="text" id="rsvp-guest-name" class="form-input" placeholder="e.g. Tariq & Yasmin Al-Mansoor" required />
        </div>

        <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input type="email" id="rsvp-guest-email" class="form-input" placeholder="tariq@example.com" required />
          </div>
          <div class="form-group">
            <label class="form-label">Phone / WhatsApp</label>
            <input type="tel" id="rsvp-guest-phone" class="form-input" placeholder="+1 (555) 000-0000" />
          </div>
        </div>

        <div class="form-group" style="margin-top: 0.5rem;">
          <label class="form-label">Will you be attending?</label>
          <div class="flex gap-4" style="margin-top: 0.25rem;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; color: #FFF;">
              <input type="radio" name="rsvp-status" value="attending" checked />
              <span>Joyfully Accepts ✨</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; color: var(--text-muted);">
              <input type="radio" name="rsvp-status" value="declined" />
              <span>Regretfully Declines</span>
            </label>
          </div>
        </div>

        <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
          <div class="form-group">
            <label class="form-label">Total Attending Guests</label>
            <select id="rsvp-guest-count" class="form-select">
              <option value="1">1 Guest</option>
              <option value="2" selected>2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Dietary Preferences</label>
            <select id="rsvp-dietary" class="form-select">
              <option value="Halal / Standard" selected>Halal / Standard Feast</option>
              <option value="Vegetarian">Pure Vegetarian / Vegan</option>
              <option value="Gluten-Free">Gluten-Free</option>
              <option value="Nut-Allergy">Nut Allergy / Special</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin-top: 0.5rem;">
          <label class="form-label">Warm Wishes & Duas for the Couple</label>
          <textarea id="rsvp-message" class="form-textarea" placeholder="May Allah shower both of you with eternal love, barakah, and happiness..."></textarea>
        </div>

        <button type="submit" id="rsvp-submit-btn" class="btn btn-primary-gold btn-block btn-lg" style="margin-top: 1rem;">
          <span>Submit RSVP Confirmation</span>
          <span>✨</span>
        </button>
      </form>

      <div id="rsvp-success-state" class="hidden text-center" style="padding: 2rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
        <h4 class="font-serif" style="font-size: 1.75rem; color: var(--gold-light); margin-bottom: 0.5rem;">RSVP Confirmed!</h4>
        <p class="text-secondary" style="font-size: 0.9rem; max-width: 440px; margin: 0 auto;">Thank you for celebrating with us. We have recorded your response and look forward to sharing this blessed celebration!</p>
      </div>
    </div>
  `;

  const form = document.getElementById('nyota-rsvp-form');
  const successState = document.getElementById('rsvp-success-state');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('rsvp-submit-btn');
      btn.disabled = true;
      btn.innerHTML = '<span>Saving...</span>';

      const guestName = document.getElementById('rsvp-guest-name').value.trim();
      const guestEmail = document.getElementById('rsvp-guest-email').value.trim();
      const guestPhone = document.getElementById('rsvp-guest-phone').value.trim();
      const status = document.querySelector('input[name="rsvp-status"]:checked')?.value || 'attending';
      const guestCount = parseInt(document.getElementById('rsvp-guest-count').value, 10) || 1;
      const dietary = document.getElementById('rsvp-dietary').value;
      const message = document.getElementById('rsvp-message').value.trim();

      try {
        await submitRsvp({
          invitationId: invId,
          guestName,
          guestEmail,
          guestPhone,
          status,
          guestCount: status === 'attending' ? guestCount : 0,
          dietary,
          message,
        });

        triggerConfetti();
        form.classList.add('hidden');
        successState.classList.remove('hidden');
        showToast('RSVP submitted successfully!', 'success');
      } catch (err) {
        showToast('Failed to submit RSVP. Please try again.', 'error');
        btn.disabled = false;
        btn.innerHTML = '<span>Submit RSVP Confirmation</span><span>✨</span>';
      }
    });
  }
}
