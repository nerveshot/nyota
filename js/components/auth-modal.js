// ==========================================================================
// NYOTA AUTHENTICATION MODAL (PURE VANILLA JS)
// ==========================================================================

import { loginWithGoogle, loginWithEmail, registerWithEmail } from '../db.js';
import { closeModal, showToast } from '../utils/helpers.js';

export function renderAuthModal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let mode = 'signin'; // 'signin' | 'signup'

  function update() {
    container.innerHTML = `
      <div id="auth-modal" class="modal-overlay">
        <div class="modal-content" style="max-width: 440px;">
          
          <div class="modal-header">
            <div>
              <span class="badge badge-gold" style="margin-bottom: 0.25rem;">Nyota Access</span>
              <h3 class="font-serif" style="font-size: 1.35rem; color: #FFF;">
                ${mode === 'signin' ? 'Sign In to Nyota' : 'Create Member Account'}
              </h3>
            </div>
            <button class="modal-close-btn" data-close="auth-modal">&times;</button>
          </div>

          <div class="modal-body">
            <!-- Google One-Click Button -->
            <button id="google-auth-btn" class="btn btn-secondary btn-block" style="padding: 0.75rem; margin-bottom: 1.25rem;">
              <span style="font-size: 1.1rem;">🌐</span>
              <span>Continue with Google</span>
            </button>

            <div class="flex items-center gap-4" style="margin-bottom: 1.25rem;">
              <div style="flex: 1; height: 1px; background: rgba(255,255,255,0.1);"></div>
              <span class="text-muted" style="font-size: 0.75rem; text-transform: uppercase;">Or Email</span>
              <div style="flex: 1; height: 1px; background: rgba(255,255,255,0.1);"></div>
            </div>

            <form id="auth-email-form">
              <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" id="auth-email-input" class="form-input" placeholder="you@example.com" required />
              </div>

              <div class="form-group">
                <label class="form-label">Password</label>
                <input type="password" id="auth-password-input" class="form-input" placeholder="••••••••" required />
              </div>

              <button type="submit" id="auth-submit-btn" class="btn btn-primary-gold btn-block btn-lg" style="margin-top: 1rem;">
                <span>${mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
              </button>
            </form>

            <div class="text-center" style="margin-top: 1.25rem;">
              <button id="toggle-auth-mode-btn" style="background: none; border: none; color: var(--gold-light); font-size: 0.8rem; cursor: pointer; text-decoration: underline;">
                ${mode === 'signin' ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    // Close button
    container.querySelector('[data-close="auth-modal"]')?.addEventListener('click', () => {
      closeModal('auth-modal');
    });

    // Toggle mode
    document.getElementById('toggle-auth-mode-btn')?.addEventListener('click', () => {
      mode = mode === 'signin' ? 'signup' : 'signin';
      update();
      document.getElementById('auth-modal').classList.add('active');
    });

    // Google login
    document.getElementById('google-auth-btn')?.addEventListener('click', async () => {
      try {
        await loginWithGoogle();
        showToast('Signed in successfully with Google! ✨', 'success');
        closeModal('auth-modal');
      } catch (e) {
        showToast('Google Sign In failed: ' + e.message, 'error');
      }
    });

    // Email form
    document.getElementById('auth-email-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('auth-email-input').value.trim();
      const password = document.getElementById('auth-password-input').value.trim();
      const btn = document.getElementById('auth-submit-btn');
      btn.disabled = true;

      try {
        if (mode === 'signin') {
          await loginWithEmail(email, password);
          showToast('Welcome back! ✨', 'success');
        } else {
          await registerWithEmail(email, password);
          showToast('Account created successfully! ✨', 'success');
        }
        closeModal('auth-modal');
      } catch (err) {
        showToast(err.message, 'error');
        btn.disabled = false;
      }
    });
  }

  update();
}
