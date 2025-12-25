// Euclidean Algorithm Module

const EuclideanDemo = {
  canvas: null,
  ctx: null,
  state: {
    a: 0,
    b: 0,
    steps: [],
    currentStep: 0,
    phase: 'ready'
  },

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
  },

  calculate(a, b) {
    this.state.a = Math.abs(a);
    this.state.b = Math.abs(b);
    this.state.steps = [];
    this.state.currentStep = 0;

    let tempA = this.state.a;
    let tempB = this.state.b;

    while (tempB !== 0) {
      const quotient = Math.floor(tempA / tempB);
      const remainder = tempA % tempB;

      this.state.steps.push({
        a: tempA,
        b: tempB,
        quotient,
        remainder,
        equation: `${tempA} = ${tempB} × ${quotient} + ${remainder}`
      });

      tempA = tempB;
      tempB = remainder;
    }

    this.state.steps.push({
      a: tempA,
      b: 0,
      quotient: 0,
      remainder: 0,
      equation: `GCD = ${tempA}`,
      isFinal: true
    });

    this.state.phase = 'ready';
    this.draw();

    return tempA;
  },

  draw() {
    if (!this.ctx) return;

    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;

    // Clear
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, width, height);

    if (this.state.steps.length === 0) {
      ctx.font = '16px sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.textAlign = 'center';
      ctx.fillText('Enter two numbers to visualize the algorithm', width / 2, height / 2);
      return;
    }

    // Draw bar visualization
    const maxVal = Math.max(this.state.a, this.state.b);
    const barHeight = 40;
    const padding = 40;
    const availableWidth = width - padding * 2;

    let y = 30;

    this.state.steps.forEach((step, i) => {
      if (step.isFinal) return;

      const isCurrentOrPast = i <= this.state.currentStep;
      const isCurrent = i === this.state.currentStep;

      // Draw a bar
      const aWidth = (step.a / maxVal) * availableWidth;
      const bWidth = (step.b / maxVal) * availableWidth;

      // Bar for a
      ctx.fillStyle = isCurrent ? '#6366f1' : (isCurrentOrPast ? '#4f46e5' : '#334155');
      ctx.fillRect(padding, y, aWidth, barHeight / 2 - 2);

      // Bar for b
      ctx.fillStyle = isCurrent ? '#10b981' : (isCurrentOrPast ? '#059669' : '#334155');
      ctx.fillRect(padding, y + barHeight / 2, bWidth, barHeight / 2 - 2);

      // Labels
      ctx.font = '12px sans-serif';
      ctx.fillStyle = isCurrentOrPast ? '#e2e8f0' : '#64748b';
      ctx.textAlign = 'left';
      ctx.fillText(`a=${step.a}`, padding + aWidth + 5, y + 12);
      ctx.fillText(`b=${step.b}`, padding + bWidth + 5, y + barHeight - 4);

      // Step number
      ctx.textAlign = 'right';
      ctx.fillText(`${i + 1}`, padding - 5, y + barHeight / 2);

      y += barHeight + 15;
    });

    // Draw result
    if (this.state.currentStep >= this.state.steps.length - 1) {
      const gcd = this.state.steps[this.state.steps.length - 1].a;
      ctx.font = 'bold 18px sans-serif';
      ctx.fillStyle = '#22c55e';
      ctx.textAlign = 'center';
      ctx.fillText(`GCD(${this.state.a}, ${this.state.b}) = ${gcd}`, width / 2, y + 20);
    }
  },

  step() {
    if (this.state.currentStep < this.state.steps.length - 1) {
      this.state.currentStep++;
      this.draw();
      return true;
    }
    return false;
  },

  reset() {
    this.state.currentStep = 0;
    this.draw();
  },

  runAll() {
    this.state.currentStep = this.state.steps.length - 1;
    this.draw();
  }
};

// Extended Euclidean Algorithm display
const ExtendedEuclidean = {
  calculate(a, b) {
    const originalA = a;
    const originalB = b;
    const steps = [];

    // Forward pass (regular Euclidean)
    let tempA = Math.abs(a);
    let tempB = Math.abs(b);

    while (tempB !== 0) {
      const q = Math.floor(tempA / tempB);
      const r = tempA % tempB;
      steps.push({ a: tempA, b: tempB, q, r });
      tempA = tempB;
      tempB = r;
    }

    const gcd = tempA;

    // Back substitution
    let x = 1, y = 0;
    const backSteps = [];

    for (let i = steps.length - 1; i >= 0; i--) {
      const step = steps[i];
      const newX = y;
      const newY = x - step.q * y;
      backSteps.push({
        equation: `${step.a} = ${step.b} × ${step.q} + ${step.r}`,
        x: newX,
        y: newY
      });
      x = newX;
      y = newY;
    }

    // Adjust for original signs
    if (originalA < 0) x = -x;
    if (originalB < 0) y = -y;

    return {
      gcd,
      x,
      y,
      forwardSteps: steps,
      backSteps,
      verification: `(${originalA})(${x}) + (${originalB})(${y}) = ${originalA * x + originalB * y}`
    };
  }
};

// Export
window.EuclideanDemo = EuclideanDemo;
window.ExtendedEuclidean = ExtendedEuclidean;
