// Audio Manager with Spanish Flamenco audio file + Web Audio generative fallback
class FlamencoAudioManager {
  constructor() {
    this.audioEl = null;
    this.audioCtx = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.5;
    this.synthInterval = null;
    this.initAudioElement();
  }

  initAudioElement() {
    try {
      this.audioEl = new Audio('/audio/flamenco.mp3');
      this.audioEl.loop = true;
      this.audioEl.volume = this.volume;
      this.audioEl.preload = 'auto';
    } catch (e) {
      console.warn('Audio element initialization failed:', e);
    }
  }

  async play() {
    this.isPlaying = true;
    if (this.audioEl) {
      this.audioEl.volume = this.isMuted ? 0 : this.volume;
      try {
        await this.audioEl.play();
        return true;
      } catch (err) {
        console.log('Audio autoplay prevented or error, falling back to Web Audio on user gesture', err);
      }
    }
    this.startGuitarSynth();
    return true;
  }

  pause() {
    this.isPlaying = false;
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.stopGuitarSynth();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.audioEl) {
      this.audioEl.volume = this.isMuted ? 0 : this.volume;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.audioEl) {
      this.audioEl.volume = this.isMuted ? 0 : this.volume;
    }
    return this.isMuted;
  }

  // Generative Spanish Flamenco Arpeggio (Spanish Phrygian / Andalusian Cadence)
  startGuitarSynth() {
    if (this.synthInterval || this.isMuted) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      // Spanish flamenco chord roots: Am, G, F, E (Andalusian Cadence)
      const chords = [
        [220.00, 261.63, 329.63, 440.00, 523.25], // Am
        [196.00, 246.94, 293.66, 392.00, 493.88], // G
        [174.61, 220.00, 261.63, 349.23, 440.00], // F
        [164.81, 207.65, 246.94, 329.63, 415.30]  // E Spanish Phrygian
      ];

      let chordIdx = 0;
      let noteIdx = 0;

      this.synthInterval = setInterval(() => {
        if (!this.isPlaying || this.isMuted || !this.audioCtx) return;
        const currentChord = chords[chordIdx];
        const freq = currentChord[noteIdx % currentChord.length];
        this.playGuitarPluck(freq);

        noteIdx++;
        if (noteIdx % 8 === 0) {
          chordIdx = (chordIdx + 1) % chords.length;
        }
      }, 340);
    } catch (e) {
      console.warn('Web Audio synth not supported:', e);
    }
  }

  playGuitarPluck(freq) {
    if (!this.audioCtx || this.isMuted) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, this.audioCtx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.8);

      const now = this.audioCtx.currentTime;
      const vol = this.volume * 0.15;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(vol, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.95);
    } catch (e) {
      // ignore
    }
  }

  stopGuitarSynth() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }
}

export const audioManager = new FlamencoAudioManager();
