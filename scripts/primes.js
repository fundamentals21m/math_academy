// Prime Numbers Module

const SieveDemo = {
  canvas: null,
  ctx: null,
  state: {
    limit: 100,
    numbers: [],
    currentPrime: 2,
    phase: 'ready', // ready, running, complete
    animationSpeed: 100,
    isPaused: false
  },

  init(canvasId, limit = 100) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.state.limit = limit;
    this.reset();
  },

  reset() {
    this.state.numbers = [];
    for (let i = 0; i <= this.state.limit; i++) {
      this.state.numbers.push({
        value: i,
        isPrime: i >= 2,
        isMarked: false,
        isCurrentMultiple: false
      });
    }
    this.state.currentPrime = 2;
    this.state.phase = 'ready';
    this.state.isPaused = false;
    this.draw();
  },

  draw() {
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;

    // Clear
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, width, height);

    // Calculate grid dimensions
    const cols = 10;
    const rows = Math.ceil(this.state.limit / cols);
    const cellWidth = width / cols;
    const cellHeight = height / rows;
    const cellSize = Math.min(cellWidth, cellHeight) - 4;

    for (let i = 1; i <= this.state.limit; i++) {
      const num = this.state.numbers[i];
      const col = (i - 1) % cols;
      const row = Math.floor((i - 1) / cols);

      const x = col * cellWidth + cellWidth / 2;
      const y = row * cellHeight + cellHeight / 2;

      // Determine color
      let fillColor = '#334155'; // default
      let textColor = '#e2e8f0';

      if (num.isCurrentMultiple) {
        fillColor = '#f59e0b'; // warning yellow
        textColor = '#000';
      } else if (!num.isPrime && num.isMarked) {
        fillColor = '#991b1b'; // crossed out (dark red)
        textColor = '#fca5a5';
      } else if (num.isPrime && num.isMarked) {
        fillColor = '#22c55e'; // confirmed prime
        textColor = '#fff';
      }

      // Draw cell
      ctx.beginPath();
      ctx.roundRect(x - cellSize / 2, y - cellSize / 2, cellSize, cellSize, 4);
      ctx.fillStyle = fillColor;
      ctx.fill();

      // Draw number
      ctx.font = `${cellSize * 0.4}px sans-serif`;
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(i.toString(), x, y);
    }

    // Draw legend
    this.drawLegend();
  },

  drawLegend() {
    const ctx = this.ctx;
    const y = this.canvas.height - 25;

    const items = [
      { color: '#22c55e', label: 'Prime' },
      { color: '#991b1b', label: 'Composite' },
      { color: '#f59e0b', label: 'Current' },
      { color: '#334155', label: 'Unchecked' }
    ];

    let x = 10;
    ctx.font = '12px sans-serif';

    items.forEach(item => {
      ctx.fillStyle = item.color;
      ctx.fillRect(x, y, 14, 14);
      ctx.fillStyle = '#94a3b8';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.label, x + 20, y + 7);
      x += 90;
    });
  },

  async step() {
    if (this.state.phase === 'complete') return false;

    const prime = this.state.currentPrime;

    // Mark current prime as confirmed
    this.state.numbers[prime].isPrime = true;
    this.state.numbers[prime].isMarked = true;

    // Mark multiples
    for (let i = prime * 2; i <= this.state.limit; i += prime) {
      this.state.numbers[i].isCurrentMultiple = true;
      this.draw();
      await MathUtils.delay(this.state.animationSpeed);

      this.state.numbers[i].isPrime = false;
      this.state.numbers[i].isMarked = true;
      this.state.numbers[i].isCurrentMultiple = false;
    }

    this.draw();

    // Find next prime
    let nextPrime = prime + 1;
    while (nextPrime <= this.state.limit && !this.state.numbers[nextPrime].isPrime) {
      nextPrime++;
    }

    if (nextPrime * nextPrime > this.state.limit) {
      // Mark all remaining unmarked as prime
      for (let i = 2; i <= this.state.limit; i++) {
        if (!this.state.numbers[i].isMarked) {
          this.state.numbers[i].isMarked = true;
        }
      }
      this.state.phase = 'complete';
      this.draw();
      return false;
    }

    this.state.currentPrime = nextPrime;
    return true;
  },

  async run() {
    if (this.state.phase === 'complete') {
      this.reset();
    }

    this.state.phase = 'running';
    this.state.isPaused = false;

    while (this.state.phase === 'running' && !this.state.isPaused) {
      const hasMore = await this.step();
      if (!hasMore) break;
      await MathUtils.delay(200);
    }
  },

  pause() {
    this.state.isPaused = true;
  },

  getPrimes() {
    return this.state.numbers
      .filter(n => n.isPrime && n.value >= 2)
      .map(n => n.value);
  }
};

// Factorization with steps
const Factorizer = {
  factorize(n) {
    if (n < 2) return { factors: [], steps: ['Number must be 2 or greater'] };

    const factors = [];
    const steps = [];
    let remaining = n;
    let divisor = 2;
    let stepCount = 0;

    while (remaining > 1) {
      stepCount++;
      if (remaining % divisor === 0) {
        factors.push(divisor);
        steps.push(`${remaining} ÷ ${divisor} = ${remaining / divisor}`);
        remaining = remaining / divisor;
      } else {
        divisor++;
        if (divisor * divisor > remaining && remaining > 1) {
          factors.push(remaining);
          steps.push(`${remaining} is prime`);
          break;
        }
      }
    }

    return {
      factors,
      steps,
      stepCount,
      factorization: this.formatFactors(factors)
    };
  },

  formatFactors(factors) {
    if (factors.length === 0) return '1';
    if (factors.length === 1) return factors[0].toString();

    const counts = {};
    factors.forEach(f => {
      counts[f] = (counts[f] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([base, exp]) => exp === 1 ? base : `${base}^${exp}`)
      .join(' × ');
  }
};

// Prime Checker
const PrimeChecker = {
  check(n) {
    if (n < 2) {
      return {
        isPrime: false,
        reason: 'Must be 2 or greater',
        steps: []
      };
    }

    if (n === 2) {
      return {
        isPrime: true,
        reason: '2 is the smallest prime',
        steps: ['2 is the only even prime']
      };
    }

    if (n % 2 === 0) {
      return {
        isPrime: false,
        reason: `${n} is even`,
        factor: 2,
        steps: [`${n} ÷ 2 = ${n / 2} (no remainder)`]
      };
    }

    const steps = [];
    const limit = Math.sqrt(n);

    for (let i = 3; i <= limit; i += 2) {
      steps.push(`Trying ${i}...`);
      if (n % i === 0) {
        return {
          isPrime: false,
          reason: `${n} is divisible by ${i}`,
          factor: i,
          steps: [...steps.slice(0, -1), `${n} ÷ ${i} = ${n / i} (found factor!)`]
        };
      }
    }

    return {
      isPrime: true,
      reason: `No factors found up to √${n} ≈ ${Math.floor(limit)}`,
      steps: [...steps, 'No divisors found - prime!']
    };
  }
};

// Export
window.SieveDemo = SieveDemo;
window.Factorizer = Factorizer;
window.PrimeChecker = PrimeChecker;
