// Elliptic Curves Module

const EllipticCurve = {
  // Curve: y² = x³ + ax + b (mod p)

  // Check if point is on curve
  isOnCurve(x, y, a, b, p) {
    const left = MathUtils.mod(y * y, p);
    const right = MathUtils.mod(x * x * x + a * x + b, p);
    return left === right;
  },

  // Point addition
  addPoints(P, Q, a, p) {
    // Handle identity (point at infinity)
    if (P === null) return Q;
    if (Q === null) return P;

    const [x1, y1] = P;
    const [x2, y2] = Q;

    // Point + its inverse = identity
    if (x1 === x2 && MathUtils.mod(y1 + y2, p) === 0) {
      return null;
    }

    let m;

    if (x1 === x2 && y1 === y2) {
      // Point doubling
      const numerator = MathUtils.mod(3 * x1 * x1 + a, p);
      const denominator = MathUtils.mod(2 * y1, p);
      const denominatorInv = MathUtils.modInverse(denominator, p);
      if (denominatorInv === null) return null;
      m = MathUtils.mod(numerator * denominatorInv, p);
    } else {
      // Regular addition
      const numerator = MathUtils.mod(y2 - y1, p);
      const denominator = MathUtils.mod(x2 - x1, p);
      const denominatorInv = MathUtils.modInverse(denominator, p);
      if (denominatorInv === null) return null;
      m = MathUtils.mod(numerator * denominatorInv, p);
    }

    const x3 = MathUtils.mod(m * m - x1 - x2, p);
    const y3 = MathUtils.mod(m * (x1 - x3) - y1, p);

    return [x3, y3];
  },

  // Scalar multiplication (n * P)
  scalarMultiply(n, P, a, p) {
    if (n === 0 || P === null) return null;

    let result = null;
    let current = P;

    while (n > 0) {
      if (n & 1) {
        result = this.addPoints(result, current, a, p);
      }
      current = this.addPoints(current, current, a, p);
      n >>= 1;
    }

    return result;
  },

  // Find all points on curve (for small p)
  findAllPoints(a, b, p) {
    const points = [];

    for (let x = 0; x < p; x++) {
      const rhs = MathUtils.mod(x * x * x + a * x + b, p);

      for (let y = 0; y < p; y++) {
        if (MathUtils.mod(y * y, p) === rhs) {
          points.push([x, y]);
        }
      }
    }

    return points;
  }
};

const CurveVisualizer = {
  canvas: null,
  ctx: null,
  state: {
    a: -1,
    b: 1,
    p: 17,
    points: [],
    selectedPoint: null,
    highlightedPoints: []
  },

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
  },

  setCurve(a, b, p) {
    this.state.a = a;
    this.state.b = b;
    this.state.p = p;
    this.state.points = EllipticCurve.findAllPoints(a, b, p);
    this.state.selectedPoint = null;
    this.state.highlightedPoints = [];
    this.draw();
    return this.state.points;
  },

  draw() {
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const p = this.state.p;

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, width, height);

    const padding = 40;
    const gridWidth = width - padding * 2;
    const gridHeight = height - padding * 2;
    const cellWidth = gridWidth / p;
    const cellHeight = gridHeight / p;

    // Draw grid
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 0.5;

    for (let i = 0; i <= p; i++) {
      // Vertical
      ctx.beginPath();
      ctx.moveTo(padding + i * cellWidth, padding);
      ctx.lineTo(padding + i * cellWidth, height - padding);
      ctx.stroke();

      // Horizontal
      ctx.beginPath();
      ctx.moveTo(padding, padding + i * cellHeight);
      ctx.lineTo(width - padding, padding + i * cellHeight);
      ctx.stroke();
    }

    // Draw axis labels
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'center';

    for (let i = 0; i < p; i++) {
      ctx.fillText(i.toString(), padding + i * cellWidth + cellWidth / 2, height - padding + 15);
      ctx.fillText(i.toString(), padding - 15, height - padding - i * cellHeight - cellHeight / 2 + 4);
    }

    // Draw points
    this.state.points.forEach(([x, y]) => {
      const px = padding + x * cellWidth + cellWidth / 2;
      const py = height - padding - y * cellHeight - cellHeight / 2;

      const isHighlighted = this.state.highlightedPoints.some(p => p[0] === x && p[1] === y);
      const isSelected = this.state.selectedPoint && this.state.selectedPoint[0] === x && this.state.selectedPoint[1] === y;

      ctx.beginPath();
      ctx.arc(px, py, isSelected ? 8 : 5, 0, Math.PI * 2);

      if (isSelected) {
        ctx.fillStyle = '#22c55e';
      } else if (isHighlighted) {
        ctx.fillStyle = '#f59e0b';
      } else {
        ctx.fillStyle = '#6366f1';
      }

      ctx.fill();
    });

    // Title
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#e2e8f0';
    ctx.textAlign = 'center';
    ctx.fillText(`y² = x³ + ${this.state.a}x + ${this.state.b} (mod ${p})`, width / 2, 20);
    ctx.fillText(`${this.state.points.length} points`, width / 2, height - 5);
  },

  highlightPoint(point) {
    this.state.selectedPoint = point;
    this.draw();
  },

  highlightMultiples(point, count) {
    this.state.highlightedPoints = [];
    let current = point;

    for (let i = 1; i <= count && current !== null; i++) {
      this.state.highlightedPoints.push(current);
      current = EllipticCurve.addPoints(current, point, this.state.a, this.state.p);
    }

    this.draw();
    return this.state.highlightedPoints;
  }
};

const ECDHDemo = {
  // ECDH key exchange
  exchange(curve, G, a, b) {
    const { a: curveA, p } = curve;

    const steps = [];

    steps.push({
      text: `Curve: y² = x³ + ${curveA}x + ${curve.b} (mod ${p})`,
      phase: 'setup'
    });

    steps.push({
      text: `Generator point G = (${G[0]}, ${G[1]})`,
      phase: 'setup'
    });

    // Alice computes A = a*G
    const A = EllipticCurve.scalarMultiply(a, G, curveA, p);
    steps.push({
      text: `Alice: A = ${a}G = (${A ? A[0] : '∞'}, ${A ? A[1] : ''})`,
      phase: 'alice',
      actor: 'Alice'
    });

    // Bob computes B = b*G
    const B = EllipticCurve.scalarMultiply(b, G, curveA, p);
    steps.push({
      text: `Bob: B = ${b}G = (${B ? B[0] : '∞'}, ${B ? B[1] : ''})`,
      phase: 'bob',
      actor: 'Bob'
    });

    // Alice computes shared secret
    const aliceSecret = EllipticCurve.scalarMultiply(a, B, curveA, p);
    steps.push({
      text: `Alice: S = ${a}B = (${aliceSecret ? aliceSecret[0] : '∞'}, ${aliceSecret ? aliceSecret[1] : ''})`,
      phase: 'secret',
      actor: 'Alice'
    });

    // Bob computes shared secret
    const bobSecret = EllipticCurve.scalarMultiply(b, A, curveA, p);
    steps.push({
      text: `Bob: S = ${b}A = (${bobSecret ? bobSecret[0] : '∞'}, ${bobSecret ? bobSecret[1] : ''})`,
      phase: 'secret',
      actor: 'Bob'
    });

    steps.push({
      text: `Shared secret: (${aliceSecret ? aliceSecret[0] : '∞'}, ${aliceSecret ? aliceSecret[1] : ''})`,
      phase: 'result'
    });

    return {
      alicePublic: A,
      bobPublic: B,
      sharedSecret: aliceSecret,
      steps
    };
  }
};

// Export
window.EllipticCurve = EllipticCurve;
window.CurveVisualizer = CurveVisualizer;
window.ECDHDemo = ECDHDemo;
