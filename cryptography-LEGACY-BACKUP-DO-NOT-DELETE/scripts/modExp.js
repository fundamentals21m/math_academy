// Modular Exponentiation Module

const ModExpDemo = {
  // Square-and-multiply with detailed steps
  calculate(base, exp, mod) {
    const steps = [];
    const binary = exp.toString(2);

    steps.push({
      type: 'init',
      text: `Computing ${base}^${exp} mod ${mod}`,
      detail: `Exponent in binary: ${exp} = ${binary}₂`
    });

    let result = 1;
    let currentBase = base % mod;
    let bitPosition = 0;

    const binarySteps = [];

    for (let i = binary.length - 1; i >= 0; i--) {
      const bit = binary[i];
      const bitIndex = binary.length - 1 - i;

      binarySteps.push({
        position: bitIndex,
        bit,
        basePower: Math.pow(2, bitIndex),
        currentBase,
        resultBefore: result,
        multiply: bit === '1'
      });

      if (bit === '1') {
        const oldResult = result;
        result = (result * currentBase) % mod;
        steps.push({
          type: 'multiply',
          text: `Bit ${bitIndex} = 1: multiply`,
          detail: `${oldResult} × ${currentBase} mod ${mod} = ${result}`
        });
      } else {
        steps.push({
          type: 'skip',
          text: `Bit ${bitIndex} = 0: skip multiply`,
          detail: `Result stays ${result}`
        });
      }

      if (i > 0) {
        const oldBase = currentBase;
        currentBase = (currentBase * currentBase) % mod;
        steps.push({
          type: 'square',
          text: `Square the base`,
          detail: `${oldBase}² mod ${mod} = ${currentBase}`
        });
      }
    }

    steps.push({
      type: 'result',
      text: `Final result`,
      detail: `${base}^${exp} mod ${mod} = ${result}`
    });

    return {
      result,
      steps,
      binary,
      binarySteps
    };
  },

  // Naive method for comparison
  calculateNaive(base, exp, mod, maxSteps = 100) {
    const steps = [];
    let result = 1;

    for (let i = 0; i < Math.min(exp, maxSteps); i++) {
      const oldResult = result;
      result = (result * base) % mod;
      steps.push(`Step ${i + 1}: ${oldResult} × ${base} mod ${mod} = ${result}`);
    }

    return {
      result: exp <= maxSteps ? result : null,
      steps,
      truncated: exp > maxSteps,
      totalSteps: exp
    };
  }
};

const ModExpVisualizer = {
  canvas: null,
  ctx: null,
  state: null,

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
  },

  visualize(data) {
    if (!this.ctx) return;

    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, width, height);

    const binary = data.binary;
    const boxWidth = Math.min(50, (width - 40) / binary.length);
    const startX = (width - binary.length * boxWidth) / 2;

    // Draw binary representation
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';

    for (let i = 0; i < binary.length; i++) {
      const x = startX + i * boxWidth + boxWidth / 2;
      const bit = binary[i];

      // Box
      ctx.fillStyle = bit === '1' ? '#6366f1' : '#334155';
      ctx.fillRect(startX + i * boxWidth + 2, 30, boxWidth - 4, 40);

      // Bit value
      ctx.fillStyle = '#fff';
      ctx.fillText(bit, x, 55);

      // Power of 2
      const power = binary.length - 1 - i;
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px sans-serif';
      ctx.fillText(`2^${power}`, x, 85);
    }

    // Legend
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'left';
    ctx.fillText('Binary representation of exponent:', 20, 20);

    // Result summary
    ctx.textAlign = 'center';
    ctx.fillStyle = '#22c55e';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(`Result: ${data.result}`, width / 2, height - 20);

    // Step count
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText(`Only ${binary.length} squarings + ${binary.split('1').length - 1} multiplications!`, width / 2, height - 45);
  }
};

// Export
window.ModExpDemo = ModExpDemo;
window.ModExpVisualizer = ModExpVisualizer;
