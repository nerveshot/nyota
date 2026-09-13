// Built-in Web Audio API Synthesizer for high-fidelity ambient background music

class AmbientMusicEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentTrack = 'romanticPiano';
    this.intervalId = null;
    this.masterGain = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playNote(freq, type = 'sine', duration = 1.8, delay = 0) {
    if (!this.ctx || this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

    // Warm envelope
    noteGain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
    noteGain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + delay + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + delay + duration);

    osc.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + duration);
  }

  startTrack(trackId = 'romanticPiano') {
    this.init();
    this.stopTrack();
    this.isPlaying = true;
    this.currentTrack = trackId;

    let step = 0;
    const chordSequences = {
      romanticPiano: [
        [261.63, 329.63, 392.00, 523.25], // C Major
        [220.00, 261.63, 329.63, 440.00], // A Minor
        [174.61, 220.00, 261.63, 349.23], // F Major
        [196.00, 246.94, 293.66, 392.00], // G Major
      ],
      acousticJoy: [
        [293.66, 369.99, 440.00, 587.33], // D Major
        [220.00, 277.18, 329.63, 440.00], // A Major
        [246.94, 293.66, 369.99, 493.88], // B Minor
        [196.00, 246.94, 293.66, 392.00], // G Major
      ],
      lofiVibes: [
        [261.63, 311.13, 392.00, 466.16], // C minor 7
        [233.08, 293.66, 349.23, 440.00], // Bb Major 7
        [207.65, 261.63, 311.13, 392.00], // Ab Major 7
        [196.00, 246.94, 293.66, 349.23], // G7
      ],
      orchestralGala: [
        [220.00, 277.18, 329.63, 440.00], // A Major
        [246.94, 311.13, 369.99, 493.88], // B Major
        [207.65, 261.63, 311.13, 415.30], // G# Minor
        [220.00, 277.18, 329.63, 554.37], // A Major add 9
      ]
    };

    const chords = chordSequences[trackId] || chordSequences.romanticPiano;

    const playChord = () => {
      if (!this.isPlaying) return;
      const currentChord = chords[step % chords.length];
      
      // Arpeggiate
      currentChord.forEach((freq, idx) => {
        this.playNote(freq, trackId === 'acousticJoy' ? 'triangle' : 'sine', 3.2, idx * 0.22);
      });

      // Bass note
      this.playNote(currentChord[0] / 2, 'sine', 3.8, 0);

      step++;
    };

    playChord();
    this.intervalId = setInterval(playChord, 3600);
  }

  stopTrack() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.18, this.ctx.currentTime);
    }
    return this.isMuted;
  }
}

export const musicEngine = new AmbientMusicEngine();
