// ==========================================================================
// NYOTA MAIN APP CONTROLLER & ROUTER (PURE VANILLA JS)
// Zero-framework lightweight SPA coordinator
// ==========================================================================

import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderTemplateGallery } from './components/gallery.js';
import { renderStudio } from './components/studio.js';
import { renderUserDashboard } from './components/dashboard.js';
import { renderAdminPortal } from './components/admin.js';
import { renderAuthModal } from './components/auth-modal.js';
import { renderCheckoutModal } from './components/checkout-modal.js';
import { renderExportModal } from './components/export-modal.js';
import { renderEnvelopeComponent } from './components/envelope.js';
import { renderInvitationWebpage } from './components/invitation-view.js';
import { openModal } from './utils/helpers.js';
import { INVITATION_TEMPLATES } from './templates.js';
import { getInvitationById } from './db.js';

class NyotaApp {
  constructor() {
    this.currentView = 'landing'; // 'landing' | 'studio' | 'dashboard' | 'admin' | 'envelope_demo'
    this.selectedTemplate = INVITATION_TEMPLATES[0];
  }

  init() {
    this.initModals();
    this.handleUrlRouting();
    this.renderCurrentView();

    // Listen to browser popstate
    window.addEventListener('popstate', () => {
      this.handleUrlRouting();
      this.renderCurrentView();
    });
  }

  initModals() {
    renderAuthModal('modal-auth-slot');
    renderCheckoutModal('modal-checkout-slot');
    renderExportModal('modal-export-slot');
  }

  handleUrlRouting() {
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');
    const admin = params.get('admin');
    const invite = params.get('invite') || params.get('id') || params.get('slug');

    if (admin === 'true') {
      this.currentView = 'admin';
      return;
    }

    if (view === 'studio') {
      this.currentView = 'studio';
      return;
    }

    if (view === 'dashboard') {
      this.currentView = 'dashboard';
      return;
    }

    if (invite) {
      getInvitationById(invite).then(data => {
        if (data) {
          this.selectedTemplate = {
            ...INVITATION_TEMPLATES[0],
            defaults: data,
            ...data
          };
          this.currentView = 'envelope_demo';
          this.renderCurrentView();
        }
      });
      return;
    }

    this.currentView = 'landing';
  }

  navigate(viewName, data = null) {
    this.currentView = viewName;
    if (data) {
      this.selectedTemplate = data;
    }
    
    // Update URL query state without page reload
    const url = new URL(window.location.href);
    if (viewName === 'landing') {
      url.searchParams.delete('view');
      url.searchParams.delete('admin');
    } else if (viewName === 'admin') {
      url.searchParams.set('admin', 'true');
    } else {
      url.searchParams.set('view', viewName);
      url.searchParams.delete('admin');
    }
    window.history.pushState({}, '', url.toString());

    this.renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderCurrentView() {
    // 1. Render Navbar
    renderNavbar('app-navbar-slot', {
      currentView: this.currentView,
      onNavigate: (v) => this.navigate(v)
    });

    const mainContainer = document.getElementById('app-main-content');
    if (!mainContainer) return;

    // 2. Render View Content
    if (this.currentView === 'landing') {
      mainContainer.innerHTML = `
        <div id="landing-hero-slot"></div>
        <div id="landing-gallery-slot"></div>
        <div id="landing-faq-slot"></div>
        <div id="landing-footer-slot"></div>
      `;

      renderHero('landing-hero-slot', {
        onStartCustomizing: () => this.navigate('studio', this.selectedTemplate),
        onOpenEnvelopeDemo: () => this.navigate('envelope_demo')
      });

      renderTemplateGallery('landing-gallery-slot', (template) => {
        this.navigate('studio', template);
      });

      this.renderFAQAndFooter();

    } else if (this.currentView === 'studio') {
      mainContainer.innerHTML = `<div id="studio-mount-point"></div>`;
      renderStudio('studio-mount-point', this.selectedTemplate);

    } else if (this.currentView === 'dashboard') {
      mainContainer.innerHTML = `<div id="dashboard-mount-point"></div>`;
      renderUserDashboard('dashboard-mount-point', {
        onOpenStudio: () => this.navigate('studio'),
        onEditInvitation: (inv) => this.navigate('studio', inv)
      });

    } else if (this.currentView === 'admin') {
      mainContainer.innerHTML = `<div id="admin-mount-point"></div>`;
      renderAdminPortal('admin-mount-point');

    } else if (this.currentView === 'envelope_demo') {
      mainContainer.innerHTML = `<div id="webpage-revealed-slot"></div>`;
      renderInvitationWebpage('webpage-revealed-slot', this.selectedTemplate.defaults || this.selectedTemplate, {
        themeId: this.selectedTemplate.themeId || 'royalRedNavyBlack',
        fontPairingId: this.selectedTemplate.fontPairingId || 'classicSerif',
        ambientTrackId: this.selectedTemplate.ambientTrackId || 'romanticPiano',
        startWithCurtains: true
      });
    }
  }

  renderFAQAndFooter() {
    const faqSlot = document.getElementById('landing-faq-slot');
    if (faqSlot) {
      faqSlot.innerHTML = `
        <section style="padding: 5rem 0; background: rgba(0,0,0,0.3);">
          <div class="container-narrow text-center">
            <span class="badge badge-gold" style="margin-bottom: 0.75rem;">Frequently Asked Questions</span>
            <h2 class="font-serif" style="font-size: 2.25rem; color: #FFF; margin-bottom: 2rem;">Everything You Need To Know</h2>

            <div style="text-align: left; display: flex; flex-direction: column; gap: 1rem;">
              <div class="glass-panel" style="padding: 1.5rem;">
                <h4 style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.5rem;">How does the 3D unboxing experience work?</h4>
                <p class="text-muted" style="font-size: 0.875rem;">When your guests tap your custom WhatsApp or Instagram link, they are presented with a luxury 3D envelope and personalized wax seal. Tapping the seal plays ambient celebration music and reveals your full wedding webpage.</p>
              </div>
              <div class="glass-panel" style="padding: 1.5rem;">
                <h4 style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.5rem;">How are guest RSVPs managed?</h4>
                <p class="text-muted" style="font-size: 0.875rem;">All guest responses, party sizes, dietary requirements, and prayers are saved instantly to your secure Firestore database. You can track attendance live on your Host Dashboard.</p>
              </div>
              <div class="glass-panel" style="padding: 1.5rem;">
                <h4 style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.5rem;">Is the ₹1001 Shagun a one-time fee?</h4>
                <p class="text-muted" style="font-size: 0.875rem;">Yes, absolutely. No recurring subscriptions or hidden costs. One payment gives you unlimited live editing, permanent hosting, and instant support.</p>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    const footerSlot = document.getElementById('landing-footer-slot');
    if (footerSlot) {
      footerSlot.innerHTML = `
        <footer style="padding: 4rem 0 2rem; border-top: 1px solid rgba(212,175,55,0.15); background: #07050E;">
          <div class="container text-center">
            <div class="gold-gradient-text font-cinzel" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">NYOTA LUXURY INVITATIONS</div>
            <p class="text-muted" style="font-size: 0.85rem; max-width: 480px; margin: 0 auto 2rem;">Crafting timeless memories with regal digital invitations, 3D unboxing, and real-time celebrations.</p>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">
              &copy; ${new Date().getFullYear()} Nyota Luxury Invitations. Built with Vanilla HTML5, CSS3 & JavaScript.
            </div>
          </div>
        </footer>
      `;
    }
  }
}

function startApp() {
  try {
    const app = new NyotaApp();
    app.init();
    window.nyotaApp = app;
  } catch (err) {
    console.error('Error starting Nyota App:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
