// ==========================================================================
// ROYAL MUSLIM WEDDING INVITATION MASTER CONTROLLER
// Dr. Faizan Salam & Dr. Mushira Shaikh
// Wedding: 13th November 2026 — Masjid al-Haram, Mecca, Saudi Arabia
// Reception: 25th December 2026, 7:00 PM — THE FLORENCE RESORT, Pune
// ==========================================================================

import { musicEngine } from './utils/audio.js';
import { triggerConfetti } from './utils/confetti.js';
import { showToast, copyToClipboard } from './utils/helpers.js';

// --------------------------------------------------------------------------
// 1. ROUTING & URL SYNC (nyota.pages.dev/faizan-weds-mushira)
// --------------------------------------------------------------------------
function initRouting() {
  const targetPath = '/faizan-weds-mushira';
  // If user lands on root or without path, update URL in address bar smoothly
  if (window.location.pathname === '/' || window.location.pathname === '') {
    try {
      window.history.replaceState(null, '', targetPath + window.location.search);
    } catch (e) {
      // In some sandbox environments history.replaceState may be restricted
    }
  }
}

// --------------------------------------------------------------------------
// 2. SCROLL PROGRESS BAR
// --------------------------------------------------------------------------
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  }, { passive: true });
}

// --------------------------------------------------------------------------
// 3. FLOATING ROSE PETALS GENERATOR
// --------------------------------------------------------------------------
function initFloatingRosePetals() {
  const container = document.getElementById('floating-petals-container');
  if (!container) return;

  const petalCount = 18;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'rose-petal';
    
    const size = 12 + Math.random() * 16;
    const left = Math.random() * 100;
    const duration = 9 + Math.random() * 11;
    const delay = Math.random() * 12;
    
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;
    petal.style.left = `${left}%`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    
    container.appendChild(petal);
  }
}

// --------------------------------------------------------------------------
// 4. STARLIGHT & GOLDEN DUST CANVAS PARTICLES
// --------------------------------------------------------------------------
function initStarlightParticles() {
  const canvas = document.getElementById('starlight-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  const particleCount = 45;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      pulseSpeed: Math.random() * 0.02 + 0.008
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.01;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      const alphaClamped = Math.max(0.1, Math.min(0.85, p.alpha));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${alphaClamped})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(255, 235, 160, 0.8)';
      ctx.fill();
    });

    animationFrameId = requestAnimationFrame(draw);
  }

  draw();
}

// --------------------------------------------------------------------------
// 5. LIVE COUNTDOWN TIMER (25 December 2026 Grand Celebration)
// --------------------------------------------------------------------------
function initLiveCountdown() {
  // Target: Grand Reception on Friday, 25th December 2026, 7:00 PM IST
  const targetDate = new Date('2026-12-25T19:00:00+05:30').getTime();

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-minutes');
  const secsEl = document.getElementById('cd-seconds');

  function updateCountdown() {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// --------------------------------------------------------------------------
// 6. MULTI-STAGE ARABIC ROYAL WALKTHROUGH OPENING GATEWAY
// --------------------------------------------------------------------------
function initRoyalOpeningWalkthrough() {
  const openCurtainsBtn = document.getElementById('open-royal-curtains-btn');
  const curtainGateway = document.getElementById('royal-curtain-gateway');
  const centerCard = document.getElementById('curtain-center-card');
  const risingBismillah = document.getElementById('rising-bismillah-slot');
  const bridePuller = document.getElementById('bride-puller');
  const groomPuller = document.getElementById('groom-puller');

  if (!openCurtainsBtn || !curtainGateway) return;

  openCurtainsBtn.addEventListener('click', () => {
    // 1. Confetti explosion with royal wedding tones
    triggerConfetti({
      particleCount: 220,
      colors: ['#D4AF37', '#0F5132', '#8B152B', '#FFFFFF', '#F5D38B', '#F8B6C3']
    });

    // 2. Start celebration audio: Alfaaz (Vocals Only - Hamza Malik & Zain Zohaib)
    musicEngine.startTrack('alfaazVocals');
    updateMusicUI(true);

    // 3. Characters tug golden braided ropes
    if (bridePuller) bridePuller.classList.add('animate-tug-left');
    if (groomPuller) groomPuller.classList.add('animate-tug-right');

    // 4. Center card fades out smoothly
    if (centerCard) {
      centerCard.style.opacity = '0';
      centerCard.style.transform = 'scale(0.8) translateY(-25px)';
      centerCard.style.pointerEvents = 'none';
    }

    // Stage 1 Entrance: Outer Crimson velvet curtains open, walk into Crystal Chandelier Hallway
    curtainGateway.classList.add('entering');

    // Stage 2 Entrance: Inner Sapphire Silk curtains tie-back swoosh, revealing Main Arena
    setTimeout(() => {
      curtainGateway.classList.add('stage-2-active');
    }, 1900);

    // Stage 3 Bismillah Rising:
    if (risingBismillah) {
      risingBismillah.classList.remove('hidden');
      setTimeout(() => {
        risingBismillah.classList.add('rising');
      }, 3200);
    }

    // Final Transition: Smooth fade-out to reveal the full webpage invitation suite
    setTimeout(() => {
      curtainGateway.classList.add('faded-out');
      setTimeout(() => {
        curtainGateway.remove();
        window.dispatchEvent(new Event('resize'));
        const heroEl = document.getElementById('invitation-hero');
        if (heroEl) heroEl.scrollIntoView({ behavior: 'smooth' });
      }, 1400);
    }, 5600);
  });
}

// --------------------------------------------------------------------------
// 7. FLOATING AMBIANCE MUSIC CONTROLLER
// --------------------------------------------------------------------------
let isAudioPlaying = false;

function updateMusicUI(playing) {
  isAudioPlaying = playing;
  const musicText = document.getElementById('music-text-state');
  const vinylDisc = document.getElementById('music-vinyl-disc');
  const soundBars = document.getElementById('music-sound-bars');
  
  if (musicText) musicText.textContent = playing ? 'Pause Music' : 'Alfaaz (Vocals Only) 🎵';
  if (vinylDisc) {
    if (playing) vinylDisc.classList.add('playing');
    else vinylDisc.classList.remove('playing');
  }
  if (soundBars) {
    if (playing) soundBars.classList.add('playing');
    else soundBars.classList.remove('playing');
  }
}

function initMusicToggle() {
  const musicBtn = document.getElementById('floating-music-btn');
  if (!musicBtn) return;

  musicBtn.addEventListener('click', () => {
    if (musicEngine.isPlaying && !musicEngine.isMuted) {
      musicEngine.toggleMute();
      updateMusicUI(false);
      showToast('Music paused 🔇');
    } else if (musicEngine.isPlaying && musicEngine.isMuted) {
      musicEngine.toggleMute();
      updateMusicUI(true);
      showToast('Playing Alfaaz (Vocals Only) 🎶');
    } else {
      musicEngine.startTrack('alfaazVocals');
      updateMusicUI(true);
      showToast('Playing Alfaaz (Vocals Only) 🎶');
    }
  });
}

// --------------------------------------------------------------------------
// 8. INTERACTIVE CANVAS SCRATCH CARD (REVEAL RECEPTION DATE)
// --------------------------------------------------------------------------
function initScratchCard() {
  const canvas = document.getElementById('reception-scratch-canvas');
  const wrapper = document.getElementById('scratch-card-wrapper');
  const revealBtn = document.getElementById('instant-reveal-btn');
  if (!canvas || !wrapper) return;

  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  let isRevealed = false;

  function setupCanvas() {
    const width = wrapper.offsetWidth || Math.min(440, window.innerWidth * 0.92);
    const height = wrapper.offsetHeight || Math.min(410, window.innerWidth * 0.86);
    canvas.width = width;
    canvas.height = height;

    // Draw Royal Golden Shimmer Foil Scratch Surface
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#B8860B');
    grad.addColorStop(0.3, '#E5C07B');
    grad.addColorStop(0.5, '#F5D38B');
    grad.addColorStop(0.7, '#D4AF37');
    grad.addColorStop(1, '#8F662C');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Heart and instruction text on foil
    ctx.font = '26px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('💖', canvas.width / 2, canvas.height / 2 - 20);

    ctx.font = 'bold 1.35rem "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = '#1A0602';
    ctx.fillText('Scratch to reveal', canvas.width / 2, canvas.height / 2 + 16);
  }

  // Handle Resize
  setupCanvas();
  window.addEventListener('resize', () => {
    if (!isRevealed) setupCanvas();
  });

  function scratch(x, y) {
    if (isRevealed) return;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  }

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  // Mouse Listeners
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const { x, y } = getPos(e);
    scratch(x, y);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    const { x, y } = getPos(e);
    scratch(x, y);
  });

  window.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  // Touch Listeners
  canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    const { x, y } = getPos(e);
    scratch(x, y);
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (!isDrawing) return;
    const { x, y } = getPos(e);
    scratch(x, y);
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchend', () => {
    isDrawing = false;
  });

  function checkScratchPercentage() {
    if (isRevealed) return;
    
    // Sample 200 random points for fast non-blocking percentage evaluation
    let transparentCount = 0;
    const sampleTotal = 200;
    
    for (let i = 0; i < sampleTotal; i++) {
      const sx = Math.floor(Math.random() * canvas.width);
      const sy = Math.floor(Math.random() * canvas.height);
      const pixel = ctx.getImageData(sx, sy, 1, 1).data;
      if (pixel[3] < 128) {
        transparentCount++;
      }
    }

    const clearedRatio = transparentCount / sampleTotal;
    if (clearedRatio > 0.35) {
      revealFullCard();
    }
  }

  function revealFullCard() {
    if (isRevealed) return;
    isRevealed = true;
    
    // Particle burst celebration!
    triggerConfetti({
      particleCount: 160,
      colors: ['#D4AF37', '#10B981', '#F5D38B', '#FFFFFF', '#8B152B']
    });

    // Fade away canvas
    canvas.style.opacity = '0';
    canvas.style.pointerEvents = 'none';
    setTimeout(() => {
      canvas.remove();
    }, 800);

    const instEl = document.getElementById('scratch-instruction-pill');
    if (instEl) {
      instEl.innerHTML = '🎉 Reception Details Unlocked! We Can\'t Wait To Celebrate With You!';
      instEl.style.borderColor = '#10B981';
      instEl.style.color = '#34D399';
    }

    showToast('Reception Date Revealed! 🎉', 'success');
  }

  if (revealBtn) {
    revealBtn.addEventListener('click', revealFullCard);
  }
}

// --------------------------------------------------------------------------
// 9. SECRET KEYS GAME (INPUT VALIDATION & QUOTE REVEAL)
// --------------------------------------------------------------------------
function initSecretKeysGame() {
  const keysConfig = [
    {
      id: 'key-1',
      answers: ['doctor', 'doctors', 'dr', 'medicine', 'medic', 'physician', 'surgeon', 'healing', 'healer'],
      quote: '“Two healers destined to mend hearts, now blessed by Allah to hold each other’s for eternity.”',
      reference: 'Dr. Faizan Salam & Dr. Mushira Shaikh'
    },
    {
      id: 'key-2',
      answers: ['mecca', 'makkah', 'masjid al-haram', 'haram', 'great mosque of mecca', 'mecca saudi arabia'],
      quote: '“Where millions pray towards one sacred center, our two souls begin their blessed forever under the shadow of the Kaaba.”',
      reference: 'Masjid al-Haram, Mecca'
    },
    {
      id: 'key-3',
      answers: ['qubool', 'qubool hai', 'qabul', 'qabul hai', 'qabiltu'],
      quote: '“With three words Qubool Hai, faith becomes our anchor and love becomes our lifelong sanctuary.”',
      reference: 'The Sacred Nikah Covenant'
    }
  ];

  let unlockedCount = 0;

  keysConfig.forEach((cfg) => {
    const cardEl = document.getElementById(cfg.id);
    if (!cardEl) return;

    const inputEl = cardEl.querySelector('.key-input');
    const submitBtn = cardEl.querySelector('.key-submit-btn');
    const hintBtn = cardEl.querySelector('.key-hint-btn');

    function checkKey() {
      if (!inputEl) return;
      const val = inputEl.value.trim().toLowerCase();
      if (!val) {
        showToast('Please type your guess before unlocking 🗝️', 'default');
        return;
      }

      const isCorrect = cfg.answers.some(ans => val.includes(ans) || ans.includes(val));
      if (isCorrect) {
        // Correct key!
        cardEl.classList.add('unlocked');
        unlockedCount++;

        // Trigger golden particle burst!
        triggerConfetti({
          particleCount: 90,
          colors: ['#D4AF37', '#10B981', '#F5D38B', '#FFFFFF']
        });

        // Play gentle audio chime note
        try {
          musicEngine.playNote(587.33, 'triangle', 0.8, 0); // D5
          musicEngine.playNote(739.99, 'sine', 1.2, 0.15); // F#5
          musicEngine.playNote(880.00, 'sine', 1.6, 0.3);  // A5
        } catch (e) {}

        showToast('Secret Key Unlocked! ✨', 'success');

        // Check if all 3 keys are solved
        if (unlockedCount >= 3) {
          const grandCard = document.getElementById('grand-keymaster-card');
          if (grandCard) {
            grandCard.style.display = 'block';
            grandCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            triggerConfetti({
              particleCount: 250,
              colors: ['#D4AF37', '#10B981', '#F5D38B', '#FFFFFF', '#8B152B']
            });
          }
        }
      } else {
        // Wrong key
        cardEl.style.transform = 'translateX(-8px)';
        setTimeout(() => cardEl.style.transform = 'translateX(8px)', 100);
        setTimeout(() => cardEl.style.transform = 'translateX(0)', 200);
        showToast('Not quite! Think of our shared journey or click Hint 💡', 'error');
      }
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', checkKey);
    }

    if (inputEl) {
      inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') checkKey();
      });
    }

    if (hintBtn) {
      hintBtn.addEventListener('click', () => {
        if (cfg.id === 'key-1') showToast('💡 Hint: The noble medical profession shared by both Bride & Groom!');
        if (cfg.id === 'key-2') showToast('💡 Hint: The sacred city where Masjid al-Haram is located!');
        if (cfg.id === 'key-3') showToast('💡 Hint: The iconic Urdu/Arabic phrase meaning "I accept"!');
      });
    }
  });
}

// --------------------------------------------------------------------------
// 10. SECTION SCROLL ENTRANCE ANIMATIONS (IntersectionObserver)
// --------------------------------------------------------------------------
function initSectionObservers() {
  const sections = document.querySelectorAll('.royal-section');
  if (!sections || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

// --------------------------------------------------------------------------
// 11. QUICK ACTIONS: GOOGLE CALENDAR, WHATSAPP, COPY LINK
// --------------------------------------------------------------------------
function initQuickActions() {
  // Share on WhatsApp
  const shareBtn = document.getElementById('whatsapp-share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = `✨ You are cordially invited to the Royal Wedding Celebration of *Dr. Faizan Salam & Dr. Mushira Shaikh*!\n\n💍 Sacred Nikah: Masjid al-Haram (Mecca)\n👑 Grand Reception: Friday, 25th Dec 2026 at THE FLORENCE RESORT, Jaipur\n\nView our interactive royal invitation:\n${window.location.origin}/faizan-weds-mushira`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
    });
  }

  // Copy Link Button
  const copyBtn = document.getElementById('copy-invite-link-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const link = `${window.location.origin}/faizan-weds-mushira`;
      copyToClipboard(link, 'Invitation link copied! Share with cherished guests ✨');
    });
  }
}

// --------------------------------------------------------------------------
// 12. BOOTSTRAP ON LOAD
// --------------------------------------------------------------------------
export function startWeddingApp() {
  initRouting();
  initScrollProgress();
  initFloatingRosePetals();
  initStarlightParticles();
  initLiveCountdown();
  initRoyalOpeningWalkthrough();
  initMusicToggle();
  initScratchCard();
  initSectionObservers();
  initQuickActions();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startWeddingApp);
} else {
  startWeddingApp();
}
