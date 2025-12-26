// Clock Arithmetic Module for Modular Arithmetic Lesson

const ClockDemo = {
  canvas: null,
  ctx: null,
  state: {
    currentHour: 0,
    targetHour: 0,
    animating: false,
    animationProgress: 0,
    modulus: 12
  },

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.draw();
  },

  draw() {
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 30;

    // Clear canvas
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, width, height);

    // Draw clock face
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#0f172a';
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw hour markers and numbers
    const mod = this.state.modulus;
    for (let i = 0; i < mod; i++) {
      const angle = (i / mod) * Math.PI * 2 - Math.PI / 2;
      const markerRadius = radius - 10;
      const textRadius = radius - 35;

      // Marker line
      const innerRadius = radius - 20;
      ctx.beginPath();
      ctx.moveTo(
        centerX + Math.cos(angle) * innerRadius,
        centerY + Math.sin(angle) * innerRadius
      );
      ctx.lineTo(
        centerX + Math.cos(angle) * markerRadius,
        centerY + Math.sin(angle) * markerRadius
      );
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Number
      const displayNum = i === 0 ? mod : i;
      ctx.font = 'bold 16px sans-serif';
      ctx.fillStyle = '#e2e8f0';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        displayNum.toString(),
        centerX + Math.cos(angle) * textRadius,
        centerY + Math.sin(angle) * textRadius
      );
    }

    // Calculate current angle based on animation
    let displayHour = this.state.currentHour;
    if (this.state.animating) {
      displayHour = MathUtils.lerp(
        this.state.currentHour,
        this.state.targetHour,
        MathUtils.easeInOut(this.state.animationProgress)
      );
    }

    // Draw hour hand
    const handAngle = (displayHour / this.state.modulus) * Math.PI * 2 - Math.PI / 2;
    const handLength = radius - 50;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + Math.cos(handAngle) * handLength,
      centerY + Math.sin(handAngle) * handLength
    );
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Draw center dot
    ctx.beginPath();
    ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#6366f1';
    ctx.fill();

    // Continue animation if needed
    if (this.state.animating) {
      requestAnimationFrame(() => this.draw());
    }
  },

  async animateToHour(targetHour, duration = 1000) {
    this.state.targetHour = targetHour;
    this.state.animating = true;
    this.state.animationProgress = 0;

    const startTime = Date.now();
    const startHour = this.state.currentHour;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      this.state.animationProgress = Math.min(elapsed / duration, 1);

      if (this.state.animationProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.state.currentHour = targetHour % this.state.modulus;
        this.state.animating = false;
      }
      this.draw();
    };

    animate();

    return new Promise(resolve => setTimeout(resolve, duration));
  },

  setModulus(mod) {
    this.state.modulus = mod;
    this.state.currentHour = this.state.currentHour % mod;
    this.draw();
  },

  async addHours(hours) {
    const newHour = this.state.currentHour + hours;
    await this.animateToHour(newHour);
    return this.state.currentHour;
  },

  reset() {
    this.state.currentHour = 0;
    this.state.targetHour = 0;
    this.state.animating = false;
    this.draw();
  }
};

// Modular Calculator
const ModCalculator = {
  calculate(a, b, operation, modulus) {
    let result;
    let steps = [];

    switch (operation) {
      case '+':
        result = MathUtils.mod(a + b, modulus);
        steps.push(`${a} + ${b} = ${a + b}`);
        steps.push(`${a + b} mod ${modulus} = ${result}`);
        break;

      case '-':
        result = MathUtils.mod(a - b, modulus);
        steps.push(`${a} - ${b} = ${a - b}`);
        steps.push(`${a - b} mod ${modulus} = ${result}`);
        break;

      case '*':
        result = MathUtils.mod(a * b, modulus);
        steps.push(`${a} × ${b} = ${a * b}`);
        steps.push(`${a * b} mod ${modulus} = ${result}`);
        break;

      case '^':
        result = MathUtils.modPow(a, b, modulus);
        const intermediate = Math.pow(a, b);
        if (b <= 10 && intermediate < 1000000) {
          steps.push(`${a}^${b} = ${intermediate}`);
          steps.push(`${intermediate} mod ${modulus} = ${result}`);
        } else {
          steps.push(`${a}^${b} mod ${modulus} = ${result}`);
          steps.push(`(computed using fast modular exponentiation)`);
        }
        break;
    }

    return { result, steps };
  }
};

// Power Table Generator
const PowerTable = {
  generate(base, modulus, limit = 20) {
    const table = [];
    let value = 1;

    for (let exp = 0; exp <= limit; exp++) {
      table.push({
        exponent: exp,
        value: value,
        isRepeat: exp > 0 && value === 1
      });

      if (exp > 0 && value === 1) {
        // Found the cycle
        break;
      }

      value = MathUtils.mod(value * base, modulus);
    }

    return table;
  }
};

// Export
window.ClockDemo = ClockDemo;
window.ModCalculator = ModCalculator;
window.PowerTable = PowerTable;
