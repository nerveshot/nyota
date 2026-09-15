// ==========================================================================
// NYOTA NAVBAR COMPONENT (PURE VANILLA JS)
// ==========================================================================

import { subscribeToAuth, logoutUser } from '../db.js';
import { openModal } from '../utils/helpers.js';

export function renderNavbar(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { onNavigate = () => {}, currentView = 'landing' } = options;

  container.innerHTML = `
    <nav class="navbar">
      <div class="container nav-container">
        
        <!-- Brand Logo -->
        <a href="#" class="nav-brand" data-view="landing">
          <div class="nav-logo-icon" style="display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #180F2A, #0A0714); border: 1px solid #D4AF37; box-shadow: 0 0 15px rgba(212,175,55,0.4);">
            <svg viewBox="0 0 48 48" fill="none" style="width: 22px; height: 22px;">
              <rect x="6" y="11" width="36" height="26" rx="3.5" fill="#170D28" stroke="#D4AF37" stroke-width="1.4" />
              <path d="M6 37L19 25" stroke="#D4AF37" stroke-width="1" stroke-linecap="round" opacity="0.65" />
              <path d="M42 37L29 25" stroke="#D4AF37" stroke-width="1" stroke-linecap="round" opacity="0.65" />
              <path d="M6 12L24 26L42 12" fill="#24143D" stroke="#D4AF37" stroke-width="1.4" stroke-linejoin="round" />
              <circle cx="24" cy="26" r="5.5" fill="#F5D061" stroke="#3D2604" stroke-width="0.6" />
              <circle cx="24" cy="26" r="1.8" fill="#FFFFFF" />
            </svg>
          </div>
          <span class="nav-title gold-gradient-text">NYOTA</span>
        </a>

        <!-- Nav Links -->
        <ul class="nav-links">
          <li><a href="#" class="nav-link ${currentView === 'landing' ? 'active' : ''}" data-view="landing">Home</a></li>
          <li><a href="#gallery-section" class="nav-link" data-view="landing">Templates</a></li>
          <li><a href="#contact-section" class="nav-link" data-view="landing">Contact & Help</a></li>
          <li><a href="#" class="nav-link ${currentView === 'studio' ? 'active' : ''}" data-view="studio">Customizer Studio</a></li>
          <li><a href="#" class="nav-link ${currentView === 'dashboard' ? 'active' : ''}" data-view="dashboard">My Invitations</a></li>
          <li><a href="#" class="nav-link ${currentView === 'admin' ? 'active' : ''}" data-view="admin">Admin Portal</a></li>
        </ul>

        <!-- Nav Actions -->
        <div class="nav-actions">
          <button id="nav-pricing-btn" class="btn btn-sm btn-gold-outline">
            <span>₹1001 Suite</span>
          </button>
          
          <div id="nav-auth-slot">
            <button id="nav-login-btn" class="btn btn-sm btn-primary-gold">
              <span>Sign In</span>
            </button>
          </div>
        </div>

      </div>
    </nav>
  `;

  // Bind view navigation
  container.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = el.dataset.view;
      onNavigate(targetView);
    });
  });

  const pricingBtn = document.getElementById('nav-pricing-btn');
  if (pricingBtn) {
    pricingBtn.addEventListener('click', () => {
      openModal('checkout-modal');
    });
  }

  // Subscribe to Auth state
  subscribeToAuth((user) => {
    const authSlot = document.getElementById('nav-auth-slot');
    if (!authSlot) return;

    if (user) {
      authSlot.innerHTML = `
        <div class="flex items-center gap-2">
          <span style="font-size: 0.8rem; color: var(--gold-light); font-weight: 600;">
            ${user.displayName || user.email?.split('@')[0] || 'Member'}
          </span>
          <button id="nav-logout-btn" class="btn btn-sm btn-secondary">Logout</button>
        </div>
      `;
      document.getElementById('nav-logout-btn')?.addEventListener('click', () => {
        logoutUser();
      });
    } else {
      authSlot.innerHTML = `
        <button id="nav-login-btn" class="btn btn-sm btn-primary-gold">
          <span>Sign In</span>
        </button>
      `;
      document.getElementById('nav-login-btn')?.addEventListener('click', () => {
        openModal('auth-modal');
      });
    }
  });
}
