export class Sound {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.master = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? 0.42 : 0;
    this.master.connect(this.ctx.destination);
  }

  setEnabled(value) {
    this.enabled = value;
    if (this.master) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime);
      this.master.gain.linearRampToValueAtTime(value ? 0.42 : 0, this.ctx.currentTime + 0.12);
    }
  }

  tone(freq, duration = 0.2, type = 'sine', gain = 0.08, delay = 0) {
    if (!this.ctx || !this.enabled) return;
    const t0 = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t0);
    osc.stop(t0 + duration + 0.05);
  }

  click() {
    this.init();
    this.tone(620, 0.08, 'triangle', 0.035);
    this.tone(930, 0.08, 'sine', 0.022, 0.025);
  }

  chime() {
    this.init();
    this.tone(392, 0.5, 'sine', 0.05);
    this.tone(523.25, 0.6, 'sine', 0.038, 0.08);
    this.tone(659.25, 0.9, 'sine', 0.03, 0.16);
  }

  cash() {
    this.init();
    this.tone(880, 0.18, 'triangle', 0.04);
    this.tone(1174.66, 0.32, 'triangle', 0.03, 0.08);
    this.tone(1567.98, 0.4, 'sine', 0.018, 0.16);
  }

  swoosh() {
    if (!this.ctx) this.init();
    if (!this.ctx || !this.enabled) return;
    const t0 = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, t0);
    osc.frequency.exponentialRampToValueAtTime(760, t0 + 1.1);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, t0);
    filter.frequency.exponentialRampToValueAtTime(1800, t0 + 1.1);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.035, t0 + 0.18);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.5);
    osc.connect(filter);
    filter.connect(g);
    g.connect(this.master);
    osc.start(t0);
    osc.stop(t0 + 1.6);
  }

  arrival() {
    this.init();
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tone(f, 0.7, 'sine', 0.04, i * 0.09));
  }
}
