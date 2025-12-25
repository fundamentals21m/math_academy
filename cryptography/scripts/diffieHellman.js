// Diffie-Hellman Key Exchange Module

const DiffieHellman = {
  // Generate public parameters
  generateParams(bits = 8) {
    // Find a prime
    const min = Math.pow(2, bits - 1);
    const max = Math.pow(2, bits) - 1;

    let p;
    do {
      p = MathUtils.randomInt(min, max) | 1;
    } while (!MathUtils.isPrime(p));

    // Find a generator (primitive root)
    const g = this.findGenerator(p);

    return { p, g };
  },

  findGenerator(p) {
    // For small primes, find an actual generator
    for (let g = 2; g < p; g++) {
      if (this.isPrimitiveRoot(g, p)) {
        return g;
      }
    }
    return 2; // Fallback
  },

  isPrimitiveRoot(g, p) {
    const phi = p - 1;
    const factors = MathUtils.primeFactorize(phi);
    const uniqueFactors = [...new Set(factors)];

    for (const q of uniqueFactors) {
      if (MathUtils.modPow(g, phi / q, p) === 1) {
        return false;
      }
    }
    return true;
  },

  // Perform key exchange
  exchange(p, g, a, b) {
    const steps = [];

    steps.push({
      phase: 'setup',
      text: `Public parameters: p = ${p}, g = ${g}`
    });

    // Alice computes A = g^a mod p
    const A = MathUtils.modPow(g, a, p);
    steps.push({
      phase: 'alice-public',
      text: `Alice: A = g^a mod p = ${g}^${a} mod ${p} = ${A}`,
      actor: 'Alice'
    });

    // Bob computes B = g^b mod p
    const B = MathUtils.modPow(g, b, p);
    steps.push({
      phase: 'bob-public',
      text: `Bob: B = g^b mod p = ${g}^${b} mod ${p} = ${B}`,
      actor: 'Bob'
    });

    steps.push({
      phase: 'exchange',
      text: `Alice and Bob exchange A and B publicly`
    });

    // Alice computes shared secret
    const aliceSecret = MathUtils.modPow(B, a, p);
    steps.push({
      phase: 'alice-secret',
      text: `Alice: s = B^a mod p = ${B}^${a} mod ${p} = ${aliceSecret}`,
      actor: 'Alice'
    });

    // Bob computes shared secret
    const bobSecret = MathUtils.modPow(A, b, p);
    steps.push({
      phase: 'bob-secret',
      text: `Bob: s = A^b mod p = ${A}^${b} mod ${p} = ${bobSecret}`,
      actor: 'Bob'
    });

    steps.push({
      phase: 'result',
      text: `Shared secret: ${aliceSecret} (Both computed g^(ab) mod p)`
    });

    return {
      p,
      g,
      alicePrivate: a,
      bobPrivate: b,
      alicePublic: A,
      bobPublic: B,
      sharedSecret: aliceSecret,
      steps
    };
  }
};

const PaintMixDemo = {
  canvas: null,
  ctx: null,
  state: {
    phase: 'initial',
    publicColor: null,
    aliceSecret: null,
    bobSecret: null
  },

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
  },

  hslToString(h, s = 70, l = 50) {
    return `hsl(${h}, ${s}%, ${l}%)`;
  },

  mixColors(h1, h2) {
    // Simple color mixing by averaging hues
    let diff = h2 - h1;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    return (h1 + diff / 2 + 360) % 360;
  },

  draw() {
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, width, height);

    const ballRadius = 30;
    const y1 = 60;
    const y2 = 140;
    const y3 = 220;

    // Labels
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'left';

    // Row 1: Public color
    ctx.fillText('Public:', 10, y1);
    if (this.state.publicColor !== null) {
      this.drawBall(100, y1, this.state.publicColor, 'Public');
    }

    // Row 2: Secret colors
    ctx.fillText('Secrets:', 10, y2);
    if (this.state.aliceSecret !== null) {
      this.drawBall(100, y2, this.state.aliceSecret, 'Alice');
    }
    if (this.state.bobSecret !== null) {
      this.drawBall(200, y2, this.state.bobSecret, 'Bob');
    }

    // Row 3: Mixed (public + secret)
    ctx.fillText('Mixed:', 10, y3);
    if (this.state.publicColor !== null && this.state.aliceSecret !== null) {
      const aliceMix = this.mixColors(this.state.publicColor, this.state.aliceSecret);
      this.drawBall(100, y3, aliceMix, 'A sends');

      // Alice computes final
      if (this.state.bobSecret !== null) {
        const aliceFinal = this.mixColors(aliceMix, this.state.bobSecret);
        this.drawBall(300, y3, aliceFinal, 'Alice\'s final');
      }
    }

    if (this.state.publicColor !== null && this.state.bobSecret !== null) {
      const bobMix = this.mixColors(this.state.publicColor, this.state.bobSecret);
      this.drawBall(200, y3, bobMix, 'B sends');

      // Bob computes final
      if (this.state.aliceSecret !== null) {
        const bobFinal = this.mixColors(bobMix, this.state.aliceSecret);
        this.drawBall(400, y3, bobFinal, 'Bob\'s final');
      }
    }

    // Show final result
    if (this.state.publicColor !== null && this.state.aliceSecret !== null && this.state.bobSecret !== null) {
      const aliceMix = this.mixColors(this.state.publicColor, this.state.aliceSecret);
      const bobMix = this.mixColors(this.state.publicColor, this.state.bobSecret);
      const final = this.mixColors(aliceMix, this.state.bobSecret);

      ctx.fillStyle = '#22c55e';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Same color! Shared secret established.', width / 2, height - 20);
    }
  },

  drawBall(x, y, hue, label) {
    const ctx = this.ctx;

    // Ball
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fillStyle = this.hslToString(hue);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Label
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'center';
    ctx.fillText(label, x, y + 40);
  },

  reset() {
    this.state = {
      phase: 'initial',
      publicColor: null,
      aliceSecret: null,
      bobSecret: null
    };
    this.draw();
  },

  setColors(publicHue, aliceHue, bobHue) {
    this.state.publicColor = publicHue;
    this.state.aliceSecret = aliceHue;
    this.state.bobSecret = bobHue;
    this.draw();
  }
};

const DHSimulator = {
  state: {
    p: null,
    g: null,
    alicePrivate: null,
    bobPrivate: null,
    alicePublic: null,
    bobPublic: null,
    phase: 'setup'
  },

  reset() {
    this.state = {
      p: null,
      g: null,
      alicePrivate: null,
      bobPrivate: null,
      alicePublic: null,
      bobPublic: null,
      phase: 'setup'
    };
  },

  setup(p, g) {
    this.state.p = p;
    this.state.g = g;
    this.state.phase = 'ready';
  },

  aliceGenerate(a) {
    this.state.alicePrivate = a;
    this.state.alicePublic = MathUtils.modPow(this.state.g, a, this.state.p);
    return this.state.alicePublic;
  },

  bobGenerate(b) {
    this.state.bobPrivate = b;
    this.state.bobPublic = MathUtils.modPow(this.state.g, b, this.state.p);
    return this.state.bobPublic;
  },

  aliceCompute() {
    if (!this.state.bobPublic || !this.state.alicePrivate) return null;
    return MathUtils.modPow(this.state.bobPublic, this.state.alicePrivate, this.state.p);
  },

  bobCompute() {
    if (!this.state.alicePublic || !this.state.bobPrivate) return null;
    return MathUtils.modPow(this.state.alicePublic, this.state.bobPrivate, this.state.p);
  },

  eveView() {
    return {
      p: this.state.p,
      g: this.state.g,
      alicePublic: this.state.alicePublic,
      bobPublic: this.state.bobPublic,
      canComputeSecret: false,
      reason: 'Would need to solve discrete log to find a or b'
    };
  }
};

// Export
window.DiffieHellman = DiffieHellman;
window.PaintMixDemo = PaintMixDemo;
window.DHSimulator = DHSimulator;
