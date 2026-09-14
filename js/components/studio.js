// ==========================================================================
// NYOTA LIVE CUSTOMIZER STUDIO (PURE VANILLA JS)
// Real-time two-way sync, preview pane, themes, fonts, and Firestore save
// ==========================================================================

import { saveInvitation } from '../db.js';
import { showToast } from '../utils/helpers.js';
import { COLOR_THEMES, FONT_PAIRINGS, WAX_SEALS, AMBIENT_TRACKS, INVITATION_TEMPLATES } from '../templates.js';
import { renderEnvelopeComponent } from './envelope.js';
import { renderInvitationWebpage } from './invitation-view.js';

export function renderStudio(containerId, initialData = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const defaultTemplate = INVITATION_TEMPLATES[0];
  let state = {
    themeId: initialData?.themeId || defaultTemplate.themeId,
    fontPairingId: initialData?.fontPairingId || defaultTemplate.fontPairingId,
    sealId: initialData?.sealId || defaultTemplate.sealId,
    sealColor: initialData?.sealColor || defaultTemplate.sealColor,
    ambientTrackId: initialData?.ambientTrackId || defaultTemplate.ambientTrackId,
    previewMode: 'card', // 'card' | 'envelope' | 'webpage'
    activeTab: 'details', // 'details' | 'ceremony' | 'design' | 'story'
    data: {
      ...defaultTemplate.defaults,
      ...(initialData?.defaults || initialData || {})
    }
  };

  function updateStudioUI() {
    container.innerHTML = `
      <div class="studio-container">
        
        <!-- SIDEBAR CONTROLS -->
        <aside class="studio-sidebar">
          
          <!-- Tab Navigation -->
          <div class="studio-tabs-nav">
            <button class="studio-tab-btn ${state.activeTab === 'details' ? 'active' : ''}" data-tab="details">💍 Couple & Text</button>
            <button class="studio-tab-btn ${state.activeTab === 'ceremony' ? 'active' : ''}" data-tab="ceremony">📅 Date & Venue</button>
            <button class="studio-tab-btn ${state.activeTab === 'design' ? 'active' : ''}" data-tab="design">🎨 Themes & Audio</button>
            <button class="studio-tab-btn ${state.activeTab === 'story' ? 'active' : ''}" data-tab="story">📖 Story & Gifts</button>
          </div>

          <!-- Tab Content Form -->
          <div class="studio-tab-content">
            ${renderTabContent(state)}
          </div>

          <!-- Footer Actions -->
          <div class="studio-footer-actions">
            <button id="studio-save-btn" class="btn btn-primary-gold btn-block">
              <span>Save & Publish Invitation</span>
              <span>💾</span>
            </button>
          </div>
        </aside>

        <!-- LIVE PREVIEW PANE -->
        <main class="studio-preview-pane">
          
          <!-- Mode Selector Switcher -->
          <div class="preview-mode-bar">
            <button class="preview-mode-btn ${state.previewMode === 'card' ? 'active' : ''}" data-mode="card">Luxury Card</button>
            <button class="preview-mode-btn ${state.previewMode === 'envelope' ? 'active' : ''}" data-mode="envelope">3D Envelope</button>
            <button class="preview-mode-btn ${state.previewMode === 'webpage' ? 'active' : ''}" data-mode="webpage">Full Webpage</button>
          </div>

          <!-- Live Canvas -->
          <div id="studio-preview-canvas" class="preview-canvas-wrapper ${state.previewMode === 'webpage' ? 'preview-full-webpage' : ''}">
            <!-- Rendered dynamically -->
          </div>
        </main>

      </div>
    `;

    bindStudioEvents();
    renderActivePreview();
  }

  function renderTabContent(s) {
    if (s.activeTab === 'details') {
      return `
        <div class="form-group">
          <label class="form-label">Featured Couple / Host Names *</label>
          <input type="text" id="input-primaryNames" class="form-input" value="${s.data.primaryNames || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Header Tagline</label>
          <input type="text" id="input-tag" class="form-input" value="${s.data.tag || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Ceremony Title</label>
          <input type="text" id="input-title" class="form-input" value="${s.data.title || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Sacred Arabic Calligraphy (Bismillah)</label>
          <input type="text" id="input-bismillah" class="form-input" value="${s.data.bismillah || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Quran Verse / Quote</label>
          <textarea id="input-quranVerse" class="form-textarea">${s.data.quranVerse || ''}</textarea>
        </div>
      `;
    }

    if (s.activeTab === 'ceremony') {
      return `
        <div class="form-group">
          <label class="form-label">Event Date Text *</label>
          <input type="text" id="input-dateText" class="form-input" value="${s.data.dateText || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Event Time Text *</label>
          <input type="text" id="input-timeText" class="form-input" value="${s.data.timeText || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Venue / Ballroom Name *</label>
          <input type="text" id="input-venueName" class="form-input" value="${s.data.venueName || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Venue Address / Directions</label>
          <input type="text" id="input-venueAddress" class="form-input" value="${s.data.venueAddress || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">RSVP Deadline</label>
          <input type="text" id="input-rsvpDeadline" class="form-input" value="${s.data.rsvpDeadline || ''}" />
        </div>
      `;
    }

    if (s.activeTab === 'design') {
      return `
        <div class="form-group">
          <label class="form-label">Color Theme Palette</label>
          <div class="theme-picker-grid">
            ${Object.values(COLOR_THEMES).map(t => `
              <div class="theme-card ${s.themeId === t.id ? 'active' : ''}" data-theme="${t.id}">
                <div class="theme-color-preview" style="background: ${t.cardBg}; border: 2px solid ${t.accent};"></div>
                <div class="theme-name">${t.name}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="form-group" style="margin-top: 1.5rem;">
          <label class="form-label">Typography Pairing</label>
          <select id="select-fontPairing" class="form-select">
            ${Object.values(FONT_PAIRINGS).map(f => `
              <option value="${f.id}" ${s.fontPairingId === f.id ? 'selected' : ''}>${f.name} (${f.description})</option>
            `).join('')}
          </select>
        </div>

        <div class="form-group" style="margin-top: 1rem;">
          <label class="form-label">Ambient Celebration Music</label>
          <select id="select-ambientTrack" class="form-select">
            ${AMBIENT_TRACKS.map(t => `
              <option value="${t.id}" ${s.ambientTrackId === t.id ? 'selected' : ''}>${t.title}</option>
            `).join('')}
          </select>
        </div>
      `;
    }

    if (s.activeTab === 'story') {
      return `
        <div class="form-group">
          <label class="form-label">Wishing Well / Digital Shagun Title</label>
          <input type="text" id="input-wishingWellTitle" class="form-input" value="${s.data.wishingWellTitle || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">UPI / Bank Account Handle</label>
          <input type="text" id="input-wishingWellAccount" class="form-input" value="${s.data.wishingWellAccount || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Dress Code Specification</label>
          <input type="text" id="input-dressCode" class="form-input" value="${s.data.dressCode || ''}" />
        </div>
      `;
    }
  }

  function renderActivePreview() {
    const previewCanvas = document.getElementById('studio-preview-canvas');
    if (!previewCanvas) return;

    const currentTheme = COLOR_THEMES[state.themeId] || COLOR_THEMES.royalRedNavyBlack;
    const currentFonts = FONT_PAIRINGS[state.fontPairingId] || FONT_PAIRINGS.classicSerif;

    if (state.previewMode === 'card') {
      previewCanvas.innerHTML = `
        <div class="invitation-card" style="background-color: ${currentTheme.cardBg}; border-color: ${currentTheme.border};">
          <div class="invitation-arch-border"></div>
          ${state.data.bismillah ? `<div class="invitation-bismillah">${state.data.bismillah}</div>` : ''}
          <div class="invitation-tag">${state.data.tag}</div>
          <p style="font-size: 0.85rem; color: var(--text-muted);">${state.data.title}</p>
          <h2 class="invitation-names ${currentFonts.heading}">${state.data.primaryNames}</h2>
          <div class="invitation-date">${state.data.dateText} • ${state.data.timeText}</div>
          <div class="invitation-venue">📍 ${state.data.venueName}</div>
        </div>
      `;
    } else if (state.previewMode === 'envelope') {
      renderEnvelopeComponent('studio-preview-canvas', {
        invitationData: state.data,
        themeId: state.themeId,
        sealId: state.sealId,
        sealColor: state.sealColor,
        ambientTrackId: state.ambientTrackId,
        onOpened: () => {
          showToast('Envelope opened!', 'success');
        }
      });
    } else if (state.previewMode === 'webpage') {
      renderInvitationWebpage('studio-preview-canvas', state.data, {
        themeId: state.themeId,
        fontPairingId: state.fontPairingId,
        ambientTrackId: state.ambientTrackId
      });
    }
  }

  function bindStudioEvents() {
    // Tab switching
    container.querySelectorAll('.studio-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeTab = btn.dataset.tab;
        updateStudioUI();
      });
    });

    // Preview mode switching
    container.querySelectorAll('.preview-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.previewMode = btn.dataset.mode;
        container.querySelectorAll('.preview-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const previewCanvas = document.getElementById('studio-preview-canvas');
        if (state.previewMode === 'webpage') {
          previewCanvas.classList.add('preview-full-webpage');
        } else {
          previewCanvas.classList.remove('preview-full-webpage');
        }
        renderActivePreview();
      });
    });

    // Real-time input listeners
    const inputs = container.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const field = e.target.id.replace('input-', '');
        state.data[field] = e.target.value;
        renderActivePreview();
      });
    });

    // Theme pickers
    container.querySelectorAll('.theme-card').forEach(card => {
      card.addEventListener('click', () => {
        state.themeId = card.dataset.theme;
        updateStudioUI();
      });
    });

    // Font select
    const fontSelect = document.getElementById('select-fontPairing');
    if (fontSelect) {
      fontSelect.addEventListener('change', (e) => {
        state.fontPairingId = e.target.value;
        renderActivePreview();
      });
    }

    // Audio select
    const audioSelect = document.getElementById('select-ambientTrack');
    if (audioSelect) {
      audioSelect.addEventListener('change', (e) => {
        state.ambientTrackId = e.target.value;
      });
    }

    // Save action
    const saveBtn = document.getElementById('studio-save-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', async () => {
        saveBtn.disabled = true;
        saveBtn.innerHTML = '<span>Saving to Firestore...</span>';

        try {
          const res = await saveInvitation({
            ...state.data,
            themeId: state.themeId,
            fontPairingId: state.fontPairingId,
            sealId: state.sealId,
            sealColor: state.sealColor,
            ambientTrackId: state.ambientTrackId
          });

          showToast('Invitation published successfully! 🎉', 'success');
          saveBtn.disabled = false;
          saveBtn.innerHTML = '<span>Save & Publish Invitation</span><span>💾</span>';
        } catch (e) {
          showToast('Failed to save invitation', 'error');
          saveBtn.disabled = false;
          saveBtn.innerHTML = '<span>Save & Publish Invitation</span><span>💾</span>';
        }
      });
    }
  }

  updateStudioUI();
}
