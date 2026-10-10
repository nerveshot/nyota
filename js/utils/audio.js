// ==========================================================================
// NYOTA WEDDING MUSIC ENGINE
// Plays: "Alfaaz Vocals Only | Hamza Malik x Zain Zohaib"
// Starting at 1:00 (60s) from low volume, ramping up slowly to 1:05 (65s)
// ==========================================================================

class AmbientMusicEngine {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.fadeIntervalId = null;
    this.audioSources = [
      '/audio/alfaaz-vocals.m4a',
      './audio/alfaaz-vocals.m4a',
      '/audio/alfaaz-vocals.mp4',
      './audio/alfaaz-vocals.mp4'
    ];
    this.ctx = null;
    this.masterGain = null;
  }

  init() {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.src = this.audioSources[0];
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = 0.15; // Start with low volume

      let sourceIndex = 0;
      this.audio.addEventListener('error', () => {
        sourceIndex++;
        if (sourceIndex < this.audioSources.length) {
          this.audio.src = this.audioSources[sourceIndex];
          if (this.isPlaying) {
            this.audio.currentTime = 60.0;
            this.audio.play().catch(e => console.warn('Retry play error:', e));
          }
        }
      });
    }

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        try {
          this.ctx = new AudioCtx();
          this.masterGain = this.ctx.createGain();
          this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
          this.masterGain.connect(this.ctx.destination);
        } catch (e) {
          console.warn('AudioContext init error:', e);
        }
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playNote(freq, type = 'sine', duration = 1.2, delay = 0) {
    if (!this.ctx || this.isMuted) return;
    try {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      noteGain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
      noteGain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + delay + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + delay + duration);
      osc.connect(noteGain);
      noteGain.connect(this.masterGain);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    } catch (e) {
      console.warn('Sound chime error:', e);
    }
  }

  startTrack(trackId = 'alfaazVocals') {
    this.init();
    this.isPlaying = true;
    this.isMuted = false;

    if (this.audio) {
      this.audio.muted = false;
      // Start from 1:00 (60 seconds) as requested
      try {
        this.audio.currentTime = 60.0;
      } catch (e) {
        console.warn('Error setting currentTime:', e);
      }

      // Start from low volume (0.15)
      this.audio.volume = 0.15;

      const promise = this.audio.play();
      if (promise !== undefined) {
        promise.then(() => {
          this.rampVolume(0.15, 0.85, 5000); // Ramping up slowly to 1:05 (over 5s)
        }).catch(err => {
          console.warn('Playback prevented by browser until user gesture:', err);
        });
      }
    }
  }

  rampVolume(startVol, endVol, durationMs) {
    if (this.fadeIntervalId) {
      clearInterval(this.fadeIntervalId);
      this.fadeIntervalId = null;
    }

    const startTime = Date.now();
    this.fadeIntervalId = setInterval(() => {
      if (!this.audio || !this.isPlaying || this.isMuted) {
        clearInterval(this.fadeIntervalId);
        this.fadeIntervalId = null;
        return;
      }

      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const currentVolume = startVol + (endVol - startVol) * progress;

      this.audio.volume = Math.max(0, Math.min(1, currentVolume));

      if (progress >= 1) {
        clearInterval(this.fadeIntervalId);
        this.fadeIntervalId = null;
      }
    }, 100);
  }

  stopTrack() {
    this.isPlaying = false;
    if (this.fadeIntervalId) {
      clearInterval(this.fadeIntervalId);
      this.fadeIntervalId = null;
    }
    if (this.audio) {
      this.audio.pause();
    }
  }

  toggleMute() {
    this.init();
    if (this.isPlaying) {
      this.stopTrack();
      this.isMuted = true;
    } else {
      this.startTrack();
      this.isMuted = false;
    }
    return this.isMuted;
  }
}

export const musicEngine = new AmbientMusicEngine();
