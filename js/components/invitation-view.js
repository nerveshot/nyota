// ==========================================================================
// NYOTA ARABIC ROYAL WEBPAGE INVITATION COMPONENT (PURE VANILLA JS)
// Multi-Stage Walkthrough Entrance:
// 1. Outer Crimson Velvet Curtains with Golden Tassels & Bride/Groom Pulling
// 2. Crystal Chandelier Palace Hallway with Sapphire Silk Tie-Back Waterfall Curtains
// 3. Grand Main Wedding Arena Stage with Ascending Golden Bismillah
// ==========================================================================

import { musicEngine } from '../utils/audio.js';
import { triggerConfetti } from '../utils/confetti.js';
import { copyToClipboard, getCoupleInitials, formatStackedNames } from '../utils/helpers.js';
import { renderRsvpSection } from './rsvp.js';
import { COLOR_THEMES, FONT_PAIRINGS } from '../templates.js';

export function renderInvitationWebpage(containerId, invitationData = {}, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const {
    themeId = invitationData.themeId || 'royalRedNavyBlack',
    fontPairingId = invitationData.fontPairingId || 'classicSerif',
    ambientTrackId = invitationData.ambientTrackId || 'romanticPiano',
    startWithCurtains = true,
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
    primaryNames = 'Faizan Salam & Mushira Shaikh',
    dateText = 'Saturday, October 24, 2026',
    timeText = 'Five O\'Clock In The Evening',
    venueName = 'The Royal Emirates Palace & Grand Ballroom',
    venueAddress = 'West Corniche Road, Grand Palace Avenue, NY 10022',
    heroPhoto = '/images/muslim-royal-couple.jpg',
    receptionInfo = 'Grand Royal Walima Banquet & Celebrations to Follow',
    dressCode = 'Royal Crimson, Midnight Sapphire & Obsidian Black Formal',
    dressCodeNote = 'We warmly encourage our cherished guests to embrace royal jewel tones, traditional formal attire (Sherwanis, Anarkalis, Abayas, Lehengas) or classic evening gowns & tuxedos.',
    itinerary = [],
    loveStories = [],
    wishingWellTitle = 'Digital Shagun / Wedding Gift Fund',
    wishingWellAccount = 'shagun.faizan-mushira@upi',
    wishingWellNote = 'Your prayers, love, and presence on our special day are the greatest blessings of all.'
  } = invitationData;

  const coupleInitials = getCoupleInitials(primaryNames);

  container.innerHTML = `
    <div style="${theme.bgClass}; min-height: 100vh; color: var(--text-primary); position: relative; overflow-x: hidden;">
      
      <!-- Background Ambient Starlight & Golden Dust Particle Canvas -->
      <canvas id="starlight-canvas" class="starlight-particle-canvas"></canvas>
      <div class="mashrabiya-backdrop"></div>

      <!-- ========================================================================= -->
      <!-- 1. MULTI-STAGE ROYAL CURTAINS & CHANDELIER HALLWAY WALKTHROUGH GATEWAY -->
      <!-- ========================================================================= -->
      ${startWithCurtains ? `
      <div id="royal-curtain-gateway" class="royal-entrance-stage">
        
        <!-- Backdrops Layer -->
        <div class="walkthrough-backdrops-container">
          
          <!-- Scene 1: Grand Crystal Chandelier Palace Hallway -->
          <div class="chandelier-hallway-wrapper">
            <img src="/images/royal-chandelier-hallway.jpg" alt="Grand Chandelier Hallway" class="chandelier-hallway-img" />
            <div class="chandelier-lighting-glow"></div>
          </div>

          <!-- Scene 2: Main Grand Wedding Arena & Canopy Stage -->
          <div class="wedding-arena-wrapper">
            <img src="/images/royal-main-wedding-arena.jpg" alt="Royal Wedding Arena Stage" class="wedding-arena-img" />
          </div>

          <!-- Rising Golden Arabic Bismillah Calligraphy & High-Contrast Welcome Plaque -->
          <div id="rising-bismillah-slot" class="bismillah-rising-hero hidden">
            <div class="royal-welcome-plaque">
              <div class="invitation-bismillah font-serif gold-gradient-text" style="font-size: 2.85rem; text-shadow: 0 0 30px rgba(212,175,55,1); margin-bottom: 0.25rem;">
                ${bismillah}
              </div>
              <div class="royal-welcome-badge">
                <span>✨</span>
                <span>Welcome to the Royal Celebration</span>
                <span>✨</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Layer 2 (Inner): Sapphire Blue Silk Curtains in Chandelier Hallway (Opens in Austrian Tieback Style) -->
        <div class="hallway-curtains-stage2">
          <div class="stage2-curtain-left">
            <div class="gold-damask-overlay" style="position: absolute; inset: 0;"></div>
            <div style="position: absolute; top: 0; bottom: 0; right: 0; width: 4px; background: linear-gradient(180deg, #F5D38B, #D4AF37); box-shadow: 0 0 12px rgba(212,175,55,0.8);"></div>
          </div>
          <div class="stage2-curtain-right">
            <div class="gold-damask-overlay" style="position: absolute; inset: 0;"></div>
            <div style="position: absolute; top: 0; bottom: 0; left: 0; width: 4px; background: linear-gradient(180deg, #F5D38B, #D4AF37); box-shadow: 0 0 12px rgba(212,175,55,0.8);"></div>
          </div>
        </div>

        <!-- Layer 1 (Outer): Royal Crimson Heavy Velvet Curtains with Pullers -->
        <div class="curtain-fabric-left">
          <div class="gold-damask-overlay" style="position: absolute; inset: 0;"></div>
          <div class="gold-fringe-pattern" style="position: absolute; top: 0; bottom: 0; right: 0; width: 8px; box-shadow: 0 0 15px rgba(212,175,55,0.8);"></div>

          <!-- Cartoon Bride Pulling Golden Braided Rope -->
          <div style="position: absolute; top: 40%; right: 12px; transform: translateY(-50%); display: flex; flex-direction: column; align-items: center; z-index: 35; pointer-events: none;">
            <div style="width: 5px; height: 80px; background: linear-gradient(180deg, #F5D38B, #B88B42); box-shadow: var(--shadow-gold); border-radius: 999px;"></div>
            <div id="bride-puller" style="width: 140px; height: 140px; transition: transform 0.4s ease;">
              <img src="/images/cartoon-bride-pulling.png" alt="Bride Pulling Curtain" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));" />
            </div>
            <div style="width: 16px; height: 36px; border-radius: 0 0 8px 8px; background: linear-gradient(180deg, #D4AF37, #8F662C); box-shadow: var(--shadow-gold);"></div>
          </div>
        </div>

        <div class="curtain-fabric-right">
          <div class="gold-damask-overlay" style="position: absolute; inset: 0;"></div>
          <div class="gold-fringe-pattern" style="position: absolute; top: 0; bottom: 0; left: 0; width: 8px; box-shadow: 0 0 15px rgba(212,175,55,0.8);"></div>

          <!-- Cartoon Groom Pulling Golden Braided Rope -->
          <div style="position: absolute; top: 40%; left: 12px; transform: translateY(-50%); display: flex; flex-direction: column; align-items: center; z-index: 35; pointer-events: none;">
            <div style="width: 5px; height: 80px; background: linear-gradient(180deg, #F5D38B, #B88B42); box-shadow: var(--shadow-gold); border-radius: 999px;"></div>
            <div id="groom-puller" style="width: 140px; height: 140px; transition: transform 0.4s ease;">
              <img src="/images/cartoon-groom-pulling.png" alt="Groom Pulling Curtain" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.8));" />
            </div>
            <div style="width: 16px; height: 36px; border-radius: 0 0 8px 8px; background: linear-gradient(180deg, #D4AF37, #8F662C); box-shadow: var(--shadow-gold);"></div>
          </div>
        </div>

        <!-- Top Austrian Pelmet Valance -->
        <div class="curtain-valance-box">
          <div class="curtain-valance"></div>
          <div class="curtain-swag-row">
            <div class="curtain-swag" style="width: 260px; height: 50px; border-radius: 0 0 100px 100px; border-bottom: 2px solid #D4AF37; display: flex; align-items: center; justify-content: center;">
              <div style="width: 36px; height: 36px; border-radius: 50%; background: #1A030A; border: 1.5px solid #D4AF37; display: flex; align-items: center; justify-content: center; font-size: 1rem; color: #F5D38B; box-shadow: var(--shadow-gold);">
                👑
              </div>
            </div>
          </div>
          <div class="curtain-jabot-left"></div>
          <div class="curtain-jabot-right"></div>
        </div>

        <!-- Center Gateway Preview Card -->
        <div id="curtain-center-card" style="position: relative; z-index: 45; width: 100%; max-width: 440px; padding: 1.5rem; text-align: center; transition: all 1s ease;">
          
          <!-- Arabic Calligraphy -->
          <div class="invitation-bismillah font-serif animate-bismillah-radiance" style="font-size: 1.85rem; margin-bottom: 1rem;">
            ${bismillah}
          </div>

          <!-- Moorish Arch Preview Card -->
          <div class="invitation-card royal-glow-box" style="padding: 2.5rem 1.75rem;">
            <div class="invitation-arch-border"></div>

            <!-- Monogram Crest -->
            <div style="width: 68px; height: 68px; border-radius: 50%; margin: 0 auto 1.25rem; background: linear-gradient(135deg, #D4AF37, #8B152B, #0B1B3D); padding: 2px; box-shadow: 0 0 20px rgba(212,175,55,0.7); display: flex; align-items: center; justify-content: center;">
              <div style="width: 100%; height: 100%; border-radius: 50%; background: #0A040A; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 0.75rem;" class="animate-crown-pulse">👑</span>
                <span class="font-cinzel" style="font-size: 0.85rem; font-weight: bold; color: var(--gold-light);">${coupleInitials}</span>
              </div>
            </div>

            <div style="font-family: var(--font-mono); font-size: 0.7rem; color: #FDA4AF; letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 0.35rem;">
              DAWAT-E-KHAS • NIKAH CEREMONY
            </div>

            ${formatStackedNames(primaryNames, { size: 'normal', fontClass: 'font-cinzel' })}

            <p class="font-serif text-muted" style="font-size: 0.88rem; font-style: italic; line-height: 1.6; margin: 1rem 0 1.75rem; border-top: 1px solid rgba(212,175,55,0.25); padding-top: 0.85rem;">
              ${quranVerse}
            </p>

            <!-- Grand Open Button -->
            <button id="open-royal-curtains-btn" class="btn btn-primary-gold btn-block btn-lg" style="font-size: 1.05rem; box-shadow: 0 0 30px rgba(212, 175, 55, 0.7); cursor: pointer;">
              <span>Open Royal Invitation</span>
              <span>✨</span>
            </button>

            <div style="display: flex; align-items: center; justify-content: center; gap: 0.45rem; font-size: 0.78rem; color: var(--gold-light); margin-top: 0.85rem;">
              <span>🎵</span>
              <span>Curtains unfold & walk through the royal palace</span>
            </div>
          </div>

        </div>

      </div>
      ` : ''}

      <!-- Floating Audio Controller with Animated Vinyl & Equalizer -->
      <div id="floating-music-btn" class="floating-audio-control">
        <div id="music-vinyl-disc" class="vinyl-disc-mini"></div>
        <div id="music-sound-bars" class="sound-bars-container">
          <div class="sound-bar"></div>
          <div class="sound-bar"></div>
          <div class="sound-bar"></div>
          <div class="sound-bar"></div>
        </div>
        <span id="music-text-state">Play Music</span>
      </div>

      <!-- ========================================================================= -->
      <!-- 2. ROYAL WEBPAGE HERO BANNER WITH STACKED COUPLE NAMES -->
      <!-- ========================================================================= -->
      <header id="invitation-hero" class="webpage-hero" style="background-image: url('${heroPhoto}');">
        <div class="webpage-hero-content">
          ${bismillah ? `<div class="invitation-bismillah ${fonts.heading} animate-bismillah-radiance">${bismillah}</div>` : ''}
          
          <div class="badge badge-gold animate-float-card" style="margin-bottom: 1.25rem; font-size: 0.75rem; letter-spacing: 0.25em;">
            ${tag}
          </div>
          
          <p style="font-size: 1.05rem; color: var(--gold-light); margin-bottom: 0.85rem; font-family: var(--font-serif); font-style: italic;">
            ${title}
          </p>
          
          ${formatStackedNames(primaryNames, { size: 'lg', fontClass: fonts.heading || 'font-cinzel' })}

          <div style="font-size: 1.35rem; font-family: var(--font-cinzel); color: var(--gold-light); margin-top: 1.25rem; text-shadow: 0 0 15px rgba(212,175,55,0.6);">
            ${dateText} • ${timeText}
          </div>

          <div style="font-size: 1.05rem; color: #FFFFFF; margin-top: 0.6rem; font-weight: 500;">
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

          <div class="flex justify-center gap-4" style="margin-top: 2.25rem;">
            <a href="#rsvp-section-anchor" class="btn btn-primary-gold btn-lg" style="box-shadow: 0 0 25px rgba(212, 175, 55, 0.6);">
              <span>RSVP Now</span>
              <span>✨</span>
            </a>
            <a href="#itinerary-section" class="btn btn-secondary btn-lg">
              <span>View Itinerary</span>
              <span>📜</span>
            </a>
          </div>
        </div>
      </header>

      <!-- ========================================================================= -->
      <!-- 3. SACRED QURANIC VERSE & WEDDING DUA -->
      <!-- ========================================================================= -->
      ${quranVerse ? `
      <section style="padding: 5rem 1.5rem; text-align: center; position: relative; z-index: 5;">
        <div class="container-narrow glass-panel royal-glow-box" style="padding: 3.5rem 2.5rem; border-radius: var(--radius-xl);">
          <div style="font-size: 2.25rem; margin-bottom: 1.25rem;" class="animate-float-card">✨ 🕊️ ✨</div>
          
          <blockquote class="${fonts.heading}" style="font-size: 1.45rem; color: #FFFFFF; line-height: 1.8; font-style: italic; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
            ${quranVerse}
          </blockquote>
          
          <div style="margin-top: 1.25rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--gold-light); letter-spacing: 0.15em;">
            — ${quranRef}
          </div>
          
          ${duaBlessing ? `
            <div style="margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid rgba(212,175,55,0.25);">
              <div class="font-serif animate-bismillah-radiance" style="font-size: 1.45rem; color: var(--gold-light);">${duaBlessing}</div>
              <p style="font-size: 0.92rem; color: #E2E8F0; margin-top: 0.75rem; font-style: italic;">${duaTranslation}</p>
            </div>
          ` : ''}
        </div>
      </section>
      ` : ''}

      <!-- ========================================================================= -->
      <!-- 4. CELEBRATION ITINERARY TIMELINE -->
      <!-- ========================================================================= -->
      ${itinerary && itinerary.length > 0 ? `
      <section id="itinerary-section" style="padding: 5rem 1.5rem; position: relative; z-index: 5;">
        <div class="container">
          <div class="text-center">
            <span class="badge badge-gold">Order of Events</span>
            <h2 class="font-serif" style="font-size: 2.5rem; color: #FFF; margin-top: 0.75rem; text-shadow: 0 0 20px rgba(212,175,55,0.5);">Celebration Itinerary</h2>
            <p style="color: var(--gold-light); font-size: 0.95rem; margin-top: 0.4rem;">Join us for an unforgettable evening of sacred vows and grand festivities</p>
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

      <!-- ========================================================================= -->
      <!-- 5. LOVE STORY MILESTONES & IMAGE SHOWCASE -->
      <!-- ========================================================================= -->
      ${loveStories && loveStories.length > 0 ? `
      <section style="padding: 5rem 1.5rem; background: linear-gradient(180deg, rgba(8,20,48,0.4) 0%, rgba(32,6,20,0.5) 100%); position: relative; z-index: 5;">
        <div class="container">
          <div class="text-center">
            <span class="badge badge-rose">Our Journey</span>
            <h2 class="font-serif" style="font-size: 2.5rem; color: #FFF; margin-top: 0.75rem; text-shadow: 0 0 20px rgba(244,63,94,0.4);">Our Love Story</h2>
            <p style="color: #FECDD3; font-size: 0.95rem; margin-top: 0.4rem;">Every chapter beautifully guided by faith, family, and destiny</p>
          </div>

          <div class="story-grid">
            ${loveStories.map(story => `
              <div class="story-card">
                ${story.image ? `
                  <div class="story-image-wrapper">
                    <img src="${story.image}" alt="${story.title}" class="story-image" loading="lazy" />
                    <div class="story-image-overlay"></div>
                  </div>
                ` : ''}
                <div class="story-content">
                  <span class="story-year">${story.year}</span>
                  <div class="story-title">${story.title}</div>
                  <p class="text-muted" style="font-size: 0.92rem; line-height: 1.6;">${story.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
      ` : ''}

      <!-- ========================================================================= -->
      <!-- 6. INTERACTIVE SECRET ROYAL BLESSING SCRATCH CARD -->
      <!-- ========================================================================= -->
      <section style="padding: 4rem 1.5rem; position: relative; z-index: 5;">
        <div class="container">
          <div class="royal-scratch-card">
            <span class="badge badge-gold">Special Couple Reveal</span>
            <h3 class="font-serif" style="font-size: 1.75rem; color: #FFF; margin: 0.6rem 0;">Secret Blessing From The Couple</h3>
            <p style="color: #CBD5E1; font-size: 0.9rem;">Tap or scratch the golden royal seal below to reveal a heartfelt private message!</p>
            
            <div id="secret-scratch-box" class="secret-reveal-box">
              <div id="secret-cover-layer" class="secret-reveal-cover">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;" class="animate-crown-pulse">👑</div>
                <div style="font-family: var(--font-cinzel); font-size: 1.1rem; color: #FFF; font-weight: bold; text-shadow: 0 2px 8px rgba(0,0,0,0.8);">
                  TAP TO UNSEAL BLESSING
                </div>
                <div style="font-size: 0.8rem; color: var(--gold-light); margin-top: 0.25rem;">✨ Touch with love & prayers ✨</div>
              </div>

              <!-- Unveiled Message -->
              <div style="padding: 1rem; text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">💌 💍 🕊️</div>
                <div class="font-serif" style="font-size: 1.25rem; color: var(--gold-light); font-style: italic; line-height: 1.6;">
                  “May unending peace, heartfelt laughter, and infinite barakah bless all who pray for us. Thank you for gracing the most sacred milestone of our lives!”
                </div>
                <div class="font-cinzel" style="font-size: 0.95rem; color: #FFFFFF; margin-top: 1rem; font-weight: bold; letter-spacing: 0.1em;">
                  — WITH ENDLESS LOVE, FAIZAN & MUSHIRA —
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 7. VENUE & GOOGLE MAPS NAVIGATION -->
      <!-- ========================================================================= -->
      <section style="padding: 4rem 1.5rem; position: relative; z-index: 5;">
        <div class="container-narrow glass-panel text-center royal-glow-box" style="padding: 3.5rem 2rem; border-radius: var(--radius-xl);">
          <span class="badge badge-gold">Ceremony Location</span>
          <h2 class="font-serif" style="font-size: 2.25rem; color: #FFF; margin-top: 0.75rem;">${venueName}</h2>
          <p class="text-muted" style="font-size: 1rem; margin: 0.75rem 0 2rem;">${venueAddress}</p>
          
          <a href="https://maps.google.com/?q=${encodeURIComponent(venueName + ' ' + venueAddress)}" target="_blank" rel="noopener" class="btn btn-primary-gold btn-lg" style="box-shadow: 0 0 25px rgba(212, 175, 55, 0.6);">
            <span>Open in Google Maps</span>
            <span>📍</span>
          </a>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 8. ROYAL DRESS CODE & WISHING WELL / SHAGUN -->
      <!-- ========================================================================= -->
      <section style="padding: 2rem 1.5rem 5rem; position: relative; z-index: 5;">
        <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2.5rem;">
          
          <!-- Dress Code Moodboard -->
          <div class="glass-panel" style="padding: 3rem 2rem; text-align: center; border-radius: var(--radius-xl); border: 1px solid rgba(212,175,55,0.35);">
            <div style="font-size: 2.5rem; margin-bottom: 0.75rem;" class="animate-float-card">👔 👗</div>
            <h3 class="font-serif" style="font-size: 1.65rem; color: #FFF; margin-bottom: 0.5rem;">Royal Dress Code</h3>
            <p style="color: var(--gold-light); font-weight: 600; font-size: 1.05rem; margin-bottom: 0.5rem;">${dressCode}</p>
            <p class="text-muted" style="font-size: 0.9rem; line-height: 1.6;">${dressCodeNote}</p>
            
            <!-- Palette Swatches -->
            <div class="dress-code-swatch-box">
              <div class="color-swatch-pill" title="Blood Red Velvet">
                <div class="swatch-dot" style="background: #8B152B;"></div>
                <span>Crimson Red</span>
              </div>
              <div class="color-swatch-pill" title="Midnight Sapphire">
                <div class="swatch-dot" style="background: #0B1B3D;"></div>
                <span>Sapphire Blue</span>
              </div>
              <div class="color-swatch-pill" title="Diamond White Silk">
                <div class="swatch-dot" style="background: #FFFFFF;"></div>
                <span>Diamond White</span>
              </div>
              <div class="color-swatch-pill" title="Obsidian Noir">
                <div class="swatch-dot" style="background: #040207;"></div>
                <span>Obsidian Black</span>
              </div>
              <div class="color-swatch-pill" title="Imperial Gold Foil">
                <div class="swatch-dot" style="background: #D4AF37;"></div>
                <span>Imperial Gold</span>
              </div>
            </div>
          </div>

          <!-- Wishing Well / Digital Shagun -->
          <div class="glass-panel" style="padding: 3rem 2rem; text-align: center; border-radius: var(--radius-xl); border: 1px solid rgba(212,175,55,0.35);">
            <div style="font-size: 2.5rem; margin-bottom: 0.75rem;" class="animate-float-card">🎁 💌</div>
            <h3 class="font-serif" style="font-size: 1.65rem; color: #FFF; margin-bottom: 0.5rem;">${wishingWellTitle}</h3>
            <p class="text-muted" style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.25rem;">${wishingWellNote}</p>
            
            <div style="background: rgba(0,0,0,0.5); border: 1px solid var(--gold-border); padding: 1rem 1.25rem; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; box-shadow: 0 8px 20px rgba(0,0,0,0.6);">
              <span style="font-family: var(--font-mono); font-size: 0.95rem; color: var(--gold-light); font-weight: 600;">${wishingWellAccount}</span>
              <button id="copy-bank-btn" class="btn btn-sm btn-gold-outline" style="cursor: pointer;">Copy UPI</button>
            </div>
            
            <div style="font-size: 0.8rem; color: var(--gold-hover); margin-top: 1rem;">
              ✨ Instant one-touch UPI / QR payment support ✨
            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 9. RSVP SECTION ANCHOR -->
      <!-- ========================================================================= -->
      <section id="rsvp-section-anchor" style="padding: 4rem 1.5rem 7rem; position: relative; z-index: 5;">
        <div id="rsvp-mount-point"></div>
      </section>

    </div>
  `;

  // Mount RSVP form
  renderRsvpSection('rsvp-mount-point', invitationData);

  // Initialize Canvas Particles
  initStarlightParticles();

  // Multi-Stage Royal Walkthrough Execution Sequence
  const openCurtainsBtn = document.getElementById('open-royal-curtains-btn');
  const curtainGateway = document.getElementById('royal-curtain-gateway');
  const centerCard = document.getElementById('curtain-center-card');
  const risingBismillah = document.getElementById('rising-bismillah-slot');
  const bridePuller = document.getElementById('bride-puller');
  const groomPuller = document.getElementById('groom-puller');

  if (openCurtainsBtn && curtainGateway) {
    openCurtainsBtn.addEventListener('click', () => {
      // 1. Confetti celebration explosion
      triggerConfetti({
        particleCount: 200,
        colors: ['#D4AF37', '#8B152B', '#0B1B3D', '#FFFFFF', '#F5D38B']
      });

      // 2. Play ambient royal celebration music
      musicEngine.startTrack(ambientTrackId || 'romanticPiano');
      updateMusicUI(true);

      // 3. Characters tug golden ropes
      if (bridePuller) bridePuller.classList.add('animate-tug-left');
      if (groomPuller) groomPuller.classList.add('animate-tug-right');

      // 4. Center card fades & Stage 1 Crimson curtains part
      if (centerCard) {
        centerCard.style.opacity = '0';
        centerCard.style.transform = 'scale(0.8) translateY(-25px)';
        centerCard.style.pointerEvents = 'none';
      }

      // Stage 1 Entrance: Outer Crimson curtains open, camera enters Crystal Chandelier Hallway
      curtainGateway.classList.add('entering');

      // Stage 2 Entrance (at 2s): Second Sapphire Silk curtains unfold & tie-back swoosh, revealing the Main Wedding Arena
      setTimeout(() => {
        curtainGateway.classList.add('stage-2-active');
      }, 1900);

      // Stage 3 Bismillah Rising (at 3.2s):
      if (risingBismillah) {
        risingBismillah.classList.remove('hidden');
        setTimeout(() => {
          risingBismillah.classList.add('rising');
        }, 3200);
      }

      // Final Transition (at 5.8s): Smooth fade-out to reveal the full webpage invitation suite
      setTimeout(() => {
        curtainGateway.classList.add('faded-out');
        setTimeout(() => {
          curtainGateway.remove();
          const heroEl = document.getElementById('invitation-hero');
          if (heroEl) heroEl.scrollIntoView({ behavior: 'smooth' });
        }, 1500);
      }, 5800);
    });
  }

  // Floating Audio Toggle
  const musicBtn = document.getElementById('floating-music-btn');
  let isPlayingMusic = startWithCurtains ? false : true;

  function updateMusicUI(playing) {
    const musicText = document.getElementById('music-text-state');
    const vinylDisc = document.getElementById('music-vinyl-disc');
    const soundBars = document.getElementById('music-sound-bars');
    
    if (musicText) musicText.textContent = playing ? 'Pause Music' : 'Play Music';
    if (vinylDisc) {
      if (playing) vinylDisc.classList.add('playing');
      else vinylDisc.classList.remove('playing');
    }
    if (soundBars) {
      if (playing) soundBars.classList.add('playing');
      else soundBars.classList.remove('playing');
    }
  }

  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      if (!isPlayingMusic) {
        musicEngine.startTrack(ambientTrackId);
        isPlayingMusic = true;
        updateMusicUI(true);
      } else {
        musicEngine.stopTrack();
        isPlayingMusic = false;
        updateMusicUI(false);
      }
    });
  }

  // Secret Scratch Card Reveal
  const scratchBox = document.getElementById('secret-scratch-box');
  const coverLayer = document.getElementById('secret-cover-layer');
  if (scratchBox && coverLayer) {
    scratchBox.addEventListener('click', () => {
      if (!coverLayer.classList.contains('scratched')) {
        coverLayer.classList.add('scratched');
        triggerConfetti({
          particleCount: 140,
          colors: ['#D4AF37', '#FDA4AF', '#FFFFFF', '#0B1B3D']
        });
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

// Lightweight Ambient Starlight & Golden Dust Canvas Particle System
function initStarlightParticles() {
  const canvas = document.getElementById('starlight-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let animationFrameId;
  let particles = [];
  const PARTICLE_COUNT = 45;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  const colors = [
    'rgba(212, 175, 55, ',    // Gold
    'rgba(255, 255, 255, ',   // White
    'rgba(253, 164, 175, ',   // Rose / Blood Red Tint
    'rgba(147, 197, 253, ',   // Sapphire Tint
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.75,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.7 + 0.2,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseFactor: Math.random() * Math.PI,
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y -= p.speedY;
      p.x += p.speedX;
      p.pulseFactor += p.pulseSpeed;

      const currentAlpha = Math.max(0.1, p.alpha * (0.6 + 0.4 * Math.sin(p.pulseFactor)));

      if (p.y < 0) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + currentAlpha + ')';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#D4AF37';
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}
