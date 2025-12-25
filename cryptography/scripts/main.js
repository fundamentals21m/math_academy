// Magic Internet Math - Shared Utilities

// ============================================
// Navigation & UI Helpers
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav .nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.endsWith(href) || currentPath.includes(href.replace('../', '')))) {
      link.classList.add('active');
    }
  });
});

// Animate element with Web Animations API
function animate(element, keyframes, options) {
  return element.animate(keyframes, options);
}

// Promise-based delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================
// Random & Shuffle Utilities
// ============================================

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============================================
// Core Math Functions
// ============================================

// Modular arithmetic - handles negative numbers correctly
function mod(a, n) {
  return ((a % n) + n) % n;
}

// Greatest Common Divisor using Euclidean algorithm
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Extended Euclidean Algorithm
// Returns { gcd, x, y } where ax + by = gcd(a, b)
function extendedGcd(a, b) {
  if (b === 0) {
    return { gcd: a, x: 1, y: 0 };
  }

  const result = extendedGcd(b, a % b);
  return {
    gcd: result.gcd,
    x: result.y,
    y: result.x - Math.floor(a / b) * result.y
  };
}

// Modular inverse of a mod n (if it exists)
// Returns null if inverse doesn't exist
function modInverse(a, n) {
  const result = extendedGcd(mod(a, n), n);
  if (result.gcd !== 1) {
    return null; // Inverse doesn't exist
  }
  return mod(result.x, n);
}

// Check if a number is prime (trial division)
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Get prime factorization
function primeFactorize(n) {
  const factors = [];
  let divisor = 2;
  let num = n;

  while (num > 1) {
    while (num % divisor === 0) {
      factors.push(divisor);
      num = num / divisor;
    }
    divisor++;
    if (divisor * divisor > num && num > 1) {
      factors.push(num);
      break;
    }
  }

  return factors;
}

// Euler's totient function
function totient(n) {
  if (n === 1) return 1;

  let result = n;
  let temp = n;

  for (let p = 2; p * p <= temp; p++) {
    if (temp % p === 0) {
      while (temp % p === 0) {
        temp = temp / p;
      }
      result -= result / p;
    }
  }

  if (temp > 1) {
    result -= result / temp;
  }

  return result;
}

// Modular exponentiation using square-and-multiply
// Computes (base^exp) mod modulus efficiently
function modPow(base, exp, modulus) {
  if (modulus === 1) return 0;

  let result = 1;
  base = mod(base, modulus);

  while (exp > 0) {
    if (exp % 2 === 1) {
      result = mod(result * base, modulus);
    }
    exp = Math.floor(exp / 2);
    base = mod(base * base, modulus);
  }

  return result;
}

// BigInt version of modular exponentiation for large numbers
function modPowBigInt(base, exp, modulus) {
  base = BigInt(base);
  exp = BigInt(exp);
  modulus = BigInt(modulus);

  if (modulus === 1n) return 0n;

  let result = 1n;
  base = base % modulus;

  while (exp > 0n) {
    if (exp % 2n === 1n) {
      result = (result * base) % modulus;
    }
    exp = exp / 2n;
    base = (base * base) % modulus;
  }

  return result;
}

// Generate a random prime of approximately n bits
function generatePrime(bits) {
  const min = Math.pow(2, bits - 1);
  const max = Math.pow(2, bits) - 1;

  let candidate;
  do {
    candidate = randomInt(min, max);
    if (candidate % 2 === 0) candidate++;
  } while (!isPrime(candidate));

  return candidate;
}

// Check if two numbers are coprime
function areCoprime(a, b) {
  return gcd(a, b) === 1;
}

// Get all numbers coprime to n in range [1, n-1]
function getCoprimes(n) {
  const coprimes = [];
  for (let i = 1; i < n; i++) {
    if (areCoprime(i, n)) {
      coprimes.push(i);
    }
  }
  return coprimes;
}

// ============================================
// Step-by-Step Calculation Helpers
// ============================================

// GCD with steps
function gcdWithSteps(a, b) {
  const steps = [];
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    steps.push({
      a,
      b,
      quotient,
      remainder,
      equation: `${a} = ${b} × ${quotient} + ${remainder}`
    });
    a = b;
    b = remainder;
  }

  return { gcd: a, steps };
}

// Extended GCD with steps
function extendedGcdWithSteps(a, b) {
  const steps = [];
  const original = { a, b };

  // Forward pass
  const forwardSteps = [];
  let tempA = a, tempB = b;

  while (tempB !== 0) {
    const quotient = Math.floor(tempA / tempB);
    const remainder = tempA % tempB;
    forwardSteps.push({ a: tempA, b: tempB, q: quotient, r: remainder });
    tempA = tempB;
    tempB = remainder;
  }

  const gcdValue = tempA;

  // Back substitution
  let x = 1, y = 0;
  for (let i = forwardSteps.length - 1; i >= 0; i--) {
    const step = forwardSteps[i];
    const newX = y;
    const newY = x - step.q * y;
    steps.push({
      equation: `${step.a} = ${step.b} × ${step.q} + ${step.r}`,
      x: newX,
      y: newY
    });
    x = newX;
    y = newY;
  }

  return {
    gcd: gcdValue,
    x,
    y,
    steps: forwardSteps,
    verification: `${original.a} × ${x} + ${original.b} × ${y} = ${gcdValue}`
  };
}

// Modular exponentiation with steps
function modPowWithSteps(base, exp, modulus) {
  const steps = [];
  const binary = exp.toString(2);

  let result = 1;
  let currentBase = mod(base, modulus);
  let currentExp = exp;
  let position = 0;

  steps.push({
    action: 'init',
    description: `Starting: base = ${base}, exp = ${exp} (binary: ${binary}), mod = ${modulus}`,
    result: 1
  });

  while (currentExp > 0) {
    const bit = currentExp % 2;

    if (bit === 1) {
      const oldResult = result;
      result = mod(result * currentBase, modulus);
      steps.push({
        action: 'multiply',
        description: `Bit ${position} is 1: ${oldResult} × ${currentBase} mod ${modulus} = ${result}`,
        result
      });
    } else {
      steps.push({
        action: 'skip',
        description: `Bit ${position} is 0: skip multiplication`,
        result
      });
    }

    currentExp = Math.floor(currentExp / 2);

    if (currentExp > 0) {
      const oldBase = currentBase;
      currentBase = mod(currentBase * currentBase, modulus);
      steps.push({
        action: 'square',
        description: `Square: ${oldBase}² mod ${modulus} = ${currentBase}`,
        result
      });
    }

    position++;
  }

  steps.push({
    action: 'final',
    description: `Final result: ${base}^${exp} mod ${modulus} = ${result}`,
    result
  });

  return { result, steps, binary };
}

// ============================================
// Display Helpers
// ============================================

// Format a number with thousand separators
function formatNumber(n) {
  return n.toLocaleString();
}

// Create a step display element
function createStepElement(stepNumber, content, isHighlight = false) {
  const div = document.createElement('div');
  div.className = 'step' + (isHighlight ? ' highlight' : '');

  const numSpan = document.createElement('span');
  numSpan.className = 'step-number';
  numSpan.textContent = stepNumber;

  const contentSpan = document.createElement('span');
  contentSpan.innerHTML = content;

  div.appendChild(numSpan);
  div.appendChild(contentSpan);

  return div;
}

// Clear and populate a steps container
function displaySteps(containerId, steps) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  steps.forEach((step, i) => {
    container.appendChild(createStepElement(i + 1, step));
  });
}

// ============================================
// Canvas Helpers
// ============================================

// Clear canvas with background color
function clearCanvas(ctx, width, height, bgColor = '#1e293b') {
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
}

// Draw text centered at a position
function drawCenteredText(ctx, text, x, y, font = '14px sans-serif', color = '#e2e8f0') {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y);
}

// Draw a circle
function drawCircle(ctx, x, y, radius, fillColor, strokeColor = null, lineWidth = 2) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = fillColor;
  ctx.fill();
  if (strokeColor) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

// Linear interpolation
function lerp(start, end, t) {
  return start + (end - start) * t;
}

// Ease in-out function
function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

// ============================================
// Proof Modal System
// ============================================

const ProofModal = {
  overlay: null,
  modal: null,

  init() {
    // Create modal overlay if it doesn't exist
    if (!document.getElementById('proof-modal-overlay')) {
      this.createModalElements();
    }
    this.overlay = document.getElementById('proof-modal-overlay');
    this.modal = document.getElementById('proof-modal');

    // Bind close handlers
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
        this.close();
      }
    });

    // Initialize all theorem proof buttons
    this.initButtons();
  },

  createModalElements() {
    const overlay = document.createElement('div');
    overlay.id = 'proof-modal-overlay';
    overlay.className = 'proof-modal-overlay';
    overlay.innerHTML = `
      <div id="proof-modal" class="proof-modal">
        <div class="proof-modal-header">
          <div>
            <span class="proof-label">Proof</span>
            <h4 id="proof-modal-title"></h4>
          </div>
          <button class="proof-modal-close" onclick="ProofModal.close()">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="proof-modal-content" id="proof-modal-body"></div>
      </div>
    `;
    document.body.appendChild(overlay);
  },

  initButtons() {
    document.querySelectorAll('.theorem[data-proof]').forEach(theorem => {
      const proofId = theorem.dataset.proof;
      const proofElement = document.getElementById(proofId);

      if (proofElement) {
        // Hide the proof content
        proofElement.style.display = 'none';

        // Add view proof button if not already present
        if (!theorem.querySelector('.view-proof-btn')) {
          const header = theorem.querySelector('.theorem-header') || theorem;
          const btn = document.createElement('button');
          btn.className = 'view-proof-btn';
          btn.innerHTML = `
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            View Proof
          `;
          btn.onclick = () => this.open(theorem);

          if (header.classList.contains('theorem-header')) {
            header.appendChild(btn);
          } else {
            const headerDiv = document.createElement('div');
            headerDiv.className = 'theorem-header';
            headerDiv.appendChild(btn);
            theorem.insertBefore(headerDiv, theorem.firstChild);
          }
        }
      }
    });
  },

  open(theorem) {
    const title = theorem.querySelector('h3')?.textContent || 'Theorem';
    const proofId = theorem.dataset.proof;
    const proofElement = document.getElementById(proofId);

    if (!proofElement) return;

    document.getElementById('proof-modal-title').textContent = title;

    const body = document.getElementById('proof-modal-body');
    body.innerHTML = proofElement.innerHTML + `
      <div class="proof-qed">
        <span>∎ QED</span>
      </div>
    `;

    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  ProofModal.init();
});

// ============================================
// Export for use in other modules
// ============================================

window.ProofModal = ProofModal;

window.MathUtils = {
  // Basic
  mod,
  gcd,
  extendedGcd,
  modInverse,
  isPrime,
  primeFactorize,
  totient,
  modPow,
  modPowBigInt,
  generatePrime,
  areCoprime,
  getCoprimes,

  // With steps
  gcdWithSteps,
  extendedGcdWithSteps,
  modPowWithSteps,

  // Helpers
  randomInt,
  shuffle,
  delay,
  formatNumber,
  displaySteps,

  // Canvas
  clearCanvas,
  drawCenteredText,
  drawCircle,
  lerp,
  easeInOut
};
