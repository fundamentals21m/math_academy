// Number Systems Conversion Module

const NumberSystems = {
  bits: [0, 0, 0, 0, 0, 0, 0, 0],

  init() {
    this.setupConverter();
    this.setupBitVisualizer();
  },

  // Converter functionality
  setupConverter() {
    const decimalInput = document.getElementById('decimalInput');
    const binaryInput = document.getElementById('binaryInput');
    const hexInput = document.getElementById('hexInput');

    if (!decimalInput || !binaryInput || !hexInput) return;

    decimalInput.addEventListener('input', (e) => {
      const value = e.target.value.trim();
      if (value === '') {
        this.clearConverter();
        return;
      }
      const decimal = parseInt(value, 10);
      if (!isNaN(decimal) && decimal >= 0) {
        binaryInput.value = decimal.toString(2);
        hexInput.value = decimal.toString(16).toUpperCase();
        this.showConversionSteps(decimal, 'decimal');
      }
    });

    binaryInput.addEventListener('input', (e) => {
      const value = e.target.value.trim();
      if (value === '') {
        this.clearConverter();
        return;
      }
      if (/^[01]+$/.test(value)) {
        const decimal = parseInt(value, 2);
        decimalInput.value = decimal;
        hexInput.value = decimal.toString(16).toUpperCase();
        this.showConversionSteps(decimal, 'binary');
      }
    });

    hexInput.addEventListener('input', (e) => {
      const value = e.target.value.trim().toUpperCase();
      if (value === '') {
        this.clearConverter();
        return;
      }
      if (/^[0-9A-F]+$/.test(value)) {
        const decimal = parseInt(value, 16);
        decimalInput.value = decimal;
        binaryInput.value = decimal.toString(2);
        this.showConversionSteps(decimal, 'hex');
      }
    });
  },

  clearConverter() {
    document.getElementById('decimalInput').value = '';
    document.getElementById('binaryInput').value = '';
    document.getElementById('hexInput').value = '';
    document.getElementById('conversionSteps').innerHTML =
      '<span class="muted">Enter a number to see conversion steps...</span>';
  },

  showConversionSteps(decimal, fromBase) {
    const stepsDiv = document.getElementById('conversionSteps');
    const binary = decimal.toString(2);
    const hex = decimal.toString(16).toUpperCase();

    let html = '';

    // Show the conversion from input base
    if (fromBase === 'decimal') {
      html += `<div style="margin-bottom: 1rem;">`;
      html += `<span class="muted">Decimal to Binary:</span>\n`;
      html += this.getDecimalToBinarySteps(decimal);
      html += `</div>`;

      html += `<div>`;
      html += `<span class="muted">Decimal to Hex:</span>\n`;
      html += this.getDecimalToHexSteps(decimal);
      html += `</div>`;
    } else if (fromBase === 'binary') {
      html += `<div style="margin-bottom: 1rem;">`;
      html += `<span class="muted">Binary to Decimal:</span>\n`;
      html += this.getBinaryToDecimalSteps(binary);
      html += `</div>`;

      html += `<div>`;
      html += `<span class="muted">Binary to Hex:</span>\n`;
      html += this.getBinaryToHexSteps(binary);
      html += `</div>`;
    } else if (fromBase === 'hex') {
      html += `<div style="margin-bottom: 1rem;">`;
      html += `<span class="muted">Hex to Decimal:</span>\n`;
      html += this.getHexToDecimalSteps(hex);
      html += `</div>`;

      html += `<div>`;
      html += `<span class="muted">Hex to Binary:</span>\n`;
      html += this.getHexToBinarySteps(hex);
      html += `</div>`;
    }

    stepsDiv.innerHTML = html;
  },

  getDecimalToBinarySteps(decimal) {
    if (decimal === 0) return `0 → <span class="success">0</span>`;

    let steps = [];
    let n = decimal;
    while (n > 0) {
      const remainder = n % 2;
      steps.push(`${n} ÷ 2 = ${Math.floor(n / 2)} remainder ${remainder}`);
      n = Math.floor(n / 2);
    }
    return steps.join('\n') + `\nRead bottom-up: <span class="success">${decimal.toString(2)}</span>`;
  },

  getDecimalToHexSteps(decimal) {
    if (decimal === 0) return `0 → <span class="success">0</span>`;

    let steps = [];
    let n = decimal;
    while (n > 0) {
      const remainder = n % 16;
      const hexChar = remainder.toString(16).toUpperCase();
      steps.push(`${n} ÷ 16 = ${Math.floor(n / 16)} remainder ${remainder}${remainder >= 10 ? ` (${hexChar})` : ''}`);
      n = Math.floor(n / 16);
    }
    return steps.join('\n') + `\nRead bottom-up: <span class="success">${decimal.toString(16).toUpperCase()}</span>`;
  },

  getBinaryToDecimalSteps(binary) {
    const digits = binary.split('').reverse();
    let steps = [];
    let total = 0;

    digits.forEach((digit, i) => {
      const value = parseInt(digit) * Math.pow(2, i);
      total += value;
      if (digit === '1') {
        steps.unshift(`${digit} × 2^${i} = ${value}`);
      }
    });

    if (steps.length === 0) return `All zeros → <span class="success">0</span>`;
    return steps.join(' + ') + ` = <span class="success">${total}</span>`;
  },

  getBinaryToHexSteps(binary) {
    // Pad to multiple of 4
    const padded = binary.padStart(Math.ceil(binary.length / 4) * 4, '0');
    let steps = [];

    for (let i = 0; i < padded.length; i += 4) {
      const group = padded.substr(i, 4);
      const value = parseInt(group, 2);
      const hexChar = value.toString(16).toUpperCase();
      steps.push(`${group} = ${hexChar}`);
    }

    const result = parseInt(binary, 2).toString(16).toUpperCase();
    return steps.join(', ') + ` → <span class="success">${result}</span>`;
  },

  getHexToDecimalSteps(hex) {
    const digits = hex.split('').reverse();
    let steps = [];
    let total = 0;

    digits.forEach((digit, i) => {
      const value = parseInt(digit, 16) * Math.pow(16, i);
      total += value;
      steps.unshift(`${digit} × 16^${i} = ${value}`);
    });

    return steps.join(' + ') + ` = <span class="success">${total}</span>`;
  },

  getHexToBinarySteps(hex) {
    let steps = [];

    for (const digit of hex) {
      const value = parseInt(digit, 16);
      const binary = value.toString(2).padStart(4, '0');
      steps.push(`${digit} = ${binary}`);
    }

    const result = parseInt(hex, 16).toString(2);
    return steps.join(', ') + ` → <span class="success">${result}</span>`;
  },

  // Bit Visualizer functionality
  setupBitVisualizer() {
    const container = document.getElementById('bitVisualizer');
    if (!container) return;

    this.renderBits();
  },

  renderBits() {
    const container = document.getElementById('bitVisualizer');
    if (!container) return;

    container.innerHTML = '';

    this.bits.forEach((bit, index) => {
      const bitDiv = document.createElement('div');
      bitDiv.className = 'bit-cell';
      bitDiv.style.cssText = `
        width: 50px;
        height: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${bit ? 'rgba(0, 245, 255, 0.2)' : 'var(--bg)'};
        border: 2px solid ${bit ? 'var(--neon-cyan)' : 'var(--border)'};
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: ${bit ? '0 0 15px rgba(0, 245, 255, 0.3)' : 'none'};
      `;

      const bitValue = document.createElement('div');
      bitValue.style.cssText = `
        font-size: 1.5rem;
        font-weight: 700;
        color: ${bit ? 'var(--neon-cyan)' : 'var(--text-muted)'};
        font-family: monospace;
      `;
      bitValue.textContent = bit;

      const bitPower = document.createElement('div');
      bitPower.style.cssText = `
        font-size: 0.7rem;
        color: var(--text-muted);
        margin-top: 4px;
      `;
      bitPower.textContent = `2^${7 - index}`;

      bitDiv.appendChild(bitValue);
      bitDiv.appendChild(bitPower);

      bitDiv.addEventListener('click', () => {
        this.toggleBit(index);
      });

      bitDiv.addEventListener('mouseenter', () => {
        bitDiv.style.transform = 'scale(1.05)';
      });

      bitDiv.addEventListener('mouseleave', () => {
        bitDiv.style.transform = 'scale(1)';
      });

      container.appendChild(bitDiv);
    });

    this.updateBitDisplay();
  },

  toggleBit(index) {
    this.bits[index] = this.bits[index] ? 0 : 1;
    this.renderBits();
  },

  updateBitDisplay() {
    const decimal = this.bitsToDecimal();
    const hex = decimal.toString(16).toUpperCase().padStart(2, '0');

    document.getElementById('bitDecimal').textContent = decimal;
    document.getElementById('bitHex').textContent = hex;
  },

  bitsToDecimal() {
    return this.bits.reduce((acc, bit, index) => {
      return acc + bit * Math.pow(2, 7 - index);
    }, 0);
  },

  clearBits() {
    this.bits = [0, 0, 0, 0, 0, 0, 0, 0];
    this.renderBits();
  },

  setAllBits() {
    this.bits = [1, 1, 1, 1, 1, 1, 1, 1];
    this.renderBits();
  },

  randomBits() {
    this.bits = this.bits.map(() => Math.round(Math.random()));
    this.renderBits();
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  NumberSystems.init();
});

// Export
window.NumberSystems = NumberSystems;
