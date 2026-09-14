// ==========================================================================
// NYOTA STANDALONE WEBPAGE INVITATION COMPONENT (PURE VANILLA JS)
// ==========================================================================

import { musicEngine } from '../utils/audio.js';
import { copyToClipboard } from '../utils/helpers.js';
import { renderRsvpSection } from './rsvp.js';
import { COLOR_THEMES, FONT_PAIRINGS } from '../templates.js';

export function renderInvitationWebpage(containerId, invitationData = {}, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const {
    themeId = invitationData.themeId || 'royalRedNavyBlack',
    fontPairingId = invitationData.fontPairingId || 'classicSerif',
    ambientTrackId = invitationData.ambientTrackId || 'romanticPiano',
  } = options;

  const theme = COLOR_THEMES[themeId] || COLOR_THEMES.royalRedNavyBlack;
  const fonts = FONT_PAIRINGS[fontPairingId] || FONT_PAIRINGS.classicSerif;

  const {
    bismillah = 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
    quranVerse = '“And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy.”',
    quranRef = 'Surah Ar-Rum (30:21)',
    duaBlessing = 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
    duaTranslation = 'May Allah bless you, shower His blessings upon you, and unite you both in goodness & harmony.',
    tag = 'TOGETHER WITH THEIR FAMILIES',
    title = 'Cordially invite you to grace the blessed wedding celebration & Nikah of',
    primaryNames = 'Zayd Al-Mansoor & Aaliyah Khan',
    dateText = 'Saturday, October 24, 2026',
    timeText = 'Five O\'Clock In The Evening',
    venueName = 'The Royal Emirates Palace & Grand Ballroom',
    venueAddress = 'West Corniche Road, Grand Palace Avenue, NY 10022',
    heroPhoto = '/images/muslim-royal-couple.jpg',
    receptionInfo = 'Grand Royal Walima Banquet & Celebrations to Follow',
    dressCode = 'Royal Arabian / Traditional Formal / Black Tie',
    dressCodeNote = 'We warmly encourage our cherished guests to embrace royal jewel tones, traditional formal attire or evening gowns & tuxedos.',
    itinerary = [],
    loveStories = [],
    wishingWellTitle = 'Digital Shagun / Gift Fund',
    wishingWellAccount = 'shagun.zayd-aaliyah@upi',
    wishingWellNote = 'Your prayers and presence on our special day are the greatest blessings of all.'
  } = invitationData;

  container.innerHTML = `
    <div style="${theme.bgClass}; min-height: 100vh; color: var(--text-primary);">
      
      <!-- Floating Audio Controller -->
      <div id="floating-music-btn" class="floating-audio-control">
        <span id="music-icon-state">🎵</span>
        <span id="music-text-state">Play Music</span>
      </div>

      <!-- Hero Header -->
      <header class="webpage-hero" style="background-image: url('${heroPhoto}');">
        <div class="webpage-hero-content">
          ${bismillah ? `<div class="invitation-bismillah ${fonts.heading}">${bismillah}</div>` : ''}
          
          <div class="badge badge-gold" style="margin-bottom: 1rem;">${tag}</div>
          
          <p style="font-size: 0.95rem; color: var(--gold-light); margin-bottom: 0.75rem;">${title}</p>
          
          <h1 class="invitation-names ${fonts.heading}" style="font-size: 3rem; margin: 0.5rem 0;">
            ${primaryNames}
          </h1>

          <div style="font-size: 1.25rem; font-family: var(--font-cinzel); color: var(--gold-light); margin-top: 1rem;">
            ${dateText} • ${timeText}
          </div>

          <div style="font-size: 1rem; color: var(--text-secondary); margin-top: 0.5rem;">
            📍 ${venueName}
          </div>

          <!-- Live Countdown Clock -->
          <div class="countdown-grid">
            <div class="countdown-box">
              <div class="countdown-number" id="cd-days">42</div>
              <div class="countdown-label">Days</div>
            </div>
            <div class="countdown-box">
              <div class="countdown-number" id="cd-hours">14</div>
              <div class="countdown-label">Hours</div>
            </div>
            <div class="countdown-box">
              <div class="countdown-number" id="cd-minutes">36</div>
              <div class="countdown-label">Minutes</div>
            </div>
            <div class="countdown-box">
              <div class="countdown-number" id="cd-seconds">20</div>
              <div class="countdown-label">Seconds</div>
            </div>
          </div>

          <div class="flex justify-center gap-4" style="margin-top: 2rem;">
            <a href="#rsvp-section-anchor" class="btn btn-primary-gold btn-lg">RSVP Now ✨</a>
            <a href="#itinerary-section" class="btn btn-secondary btn-lg">View Schedule</a>
          </div>
        </div>
      </header>

      <!-- Quran & Blessing Section -->
      ${quranVerse ? `
      <section style="padding: 4rem 1.5rem; text-align: center;">
        <div class="container-narrow glass-panel" style="padding: 3rem 2rem;">
          <div style="font-size: 2rem; margin-bottom: 1rem;">✨ 🕊️ ✨</div>
          <blockquote class="${fonts.heading}" style="font-size: 1.35rem; color: #FFF; line-height: 1.7; font-style: italic;">
            ${quranVerse}
          </blockquote>
          <div style="margin-top: 1rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--gold-hover); letter-spacing: 0.1em;">
            — ${quranRef}
          </div>
          ${duaBlessing ? `
            <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(212,175,55,0.2);">
              <div style="font-size: 1.25rem; color: var(--gold-light);">${duaBlessing}</div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">${duaTranslation}</p>
            </div>
          ` : ''}
        </div>
      </section>
      ` : ''}

      <!-- Itinerary Schedule -->
      ${itinerary && itinerary.length > 0 ? `
      <section id="itinerary-section" style="padding: 4rem 1.5rem;">
        <div class="container">
          <div class="text-center">
            <span class="badge badge-gold">Order of Events</span>
            <h2 class="font-serif" style="font-size: 2.25rem; color: #FFF; margin-top: 0.5rem;">Celebration Itinerary</h2>
          </div>

          <div class="itinerary-timeline">
            ${itinerary.map(item => `
              <div class="itinerary-item">
                <div class="itinerary-node">${item.icon || '✨'}</div>
                <div class="itinerary-card">
                  <div class="itinerary-time">${item.time}</div>
                  <div class="itinerary-title">${item.event}</div>
                  <div class="itinerary-desc">${item.desc || ''}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
      ` : ''}

      <!-- Love Story Milestones -->
      ${loveStories && loveStories.length > 0 ? `
      <section style="padding: 4rem 1.5rem; background: rgba(0,0,0,0.2);">
        <div class="container">
          <div class="text-center">
            <span class="badge badge-rose">Our Journey</span>
            <h2 class="font-serif" style="font-size: 2.25rem; color: #FFF; margin-top: 0.5rem;">Our Love Story</h2>
          </div>

          <div class="story-grid">
            ${loveStories.map(story => `
              <div class="story-card">
                ${story.image ? `<img src="${story.image}" alt="${story.title}" class="story-image" loading="lazy" />` : ''}
                <div class="story-content">
                  <div class="story-year">${story.year}</div>
                  <div class="story-title">${story.title}</div>
                  <p class="text-muted" style="font-size: 0.875rem;">${story.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
      ` : ''}

      <!-- Venue & Directions -->
      <section style="padding: 4rem 1.5rem;">
        <div class="container-narrow glass-panel text-center" style="padding: 3rem 2rem;">
          <span class="badge badge-gold">Ceremony Location</span>
          <h2 class="font-serif" style="font-size: 2rem; color: #FFF; margin-top: 0.5rem;">${venueName}</h2>
          <p class="text-muted" style="font-size: 0.95rem; margin: 0.5rem 0 1.5rem;">${venueAddress}</p>
          
          <a href="https://maps.google.com/?q=${encodeURIComponent(venueName + ' ' + venueAddress)}" target="_blank" rel="noopener" class="btn btn-primary-gold">
            <span>Open in Google Maps</span>
            <span>📍</span>
          </a>
        </div>
      </section>

      <!-- Dress Code & Wishing Well -->
      <section style="padding: 2rem 1.5rem 4rem;">
        <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
          
          <!-- Dress Code -->
          <div class="glass-panel" style="padding: 2.5rem 2rem; text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.75rem;">👔 👗</div>
            <h3 class="font-serif" style="font-size: 1.5rem; color: #FFF; margin-bottom: 0.5rem;">Dress Code</h3>
            <p style="color: var(--gold-light); font-weight: 600; margin-bottom: 0.5rem;">${dressCode}</p>
            <p class="text-muted" style="font-size: 0.85rem;">${dressCodeNote}</p>
          </div>

          <!-- Wishing Well -->
          <div class="glass-panel" style="padding: 2.5rem 2rem; text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.75rem;">🎁 💌</div>
            <h3 class="font-serif" style="font-size: 1.5rem; color: #FFF; margin-bottom: 0.5rem;">${wishingWellTitle}</h3>
            <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 1rem;">${wishingWellNote}</p>
            
            <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--gold-border); padding: 0.75rem 1rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--gold-light);">${wishingWellAccount}</span>
              <button id="copy-bank-btn" class="btn btn-sm btn-gold-outline">Copy</button>
            </div>
          </div>

        </div>
      </section>

      <!-- RSVP Section Anchor -->
      <section id="rsvp-section-anchor" style="padding: 4rem 1.5rem 6rem;">
        <div id="rsvp-mount-point"></div>
      </section>

    </div>
  `;

  // Mount RSVP
  renderRsvpSection('rsvp-mount-point', invitationData);

  // Audio Button Logic
  const musicBtn = document.getElementById('floating-music-btn');
  const musicIcon = document.getElementById('music-icon-state');
  const musicText = document.getElementById('music-text-state');
  let isPlaying = false;

  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      if (!isPlaying) {
        musicEngine.startTrack(ambientTrackId);
        isPlaying = true;
        musicIcon.textContent = '🔊';
        musicText.textContent = 'Pause Music';
      } else {
        musicEngine.stopTrack();
        isPlaying = false;
        musicIcon.textContent = '🎵';
        musicText.textContent = 'Play Music';
      }
    });
  }

  // Copy Bank details
  const copyBtn = document.getElementById('copy-bank-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(wishingWellAccount, 'Gift UPI account copied!');
    });
  }

  // Real-time Countdown Timer
  function updateCountdown() {
    const target = new Date('2026-10-24T17:00:00');
    const now = new Date();
    const diff = target - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const dEl = document.getElementById('cd-days');
      const hEl = document.getElementById('cd-hours');
      const mEl = document.getElementById('cd-minutes');
      const sEl = document.getElementById('cd-seconds');

      if (dEl) dEl.textContent = days;
      if (hEl) hEl.textContent = hours;
      if (mEl) mEl.textContent = minutes;
      if (sEl) sEl.textContent = seconds;
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}
