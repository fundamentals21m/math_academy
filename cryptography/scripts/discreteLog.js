// Discrete Logarithm Module

const DiscreteLogDemo = {
  // Brute force discrete log (for small numbers)
  solve(g, h, p, maxAttempts = 10000) {
    const startTime = Date.now();
    let power = 1;

    for (let x = 0; x < maxAttempts; x++) {
      if (power === h) {
        return {
          found: true,
          x,
          attempts: x + 1,
          time: Date.now() - startTime,
          steps: x <= 20 ? this.getSteps(g, x, p) : null
        };
      }
      power = (power * g) % p;
    }

    return {
      found: false,
      attempts: maxAttempts,
      time: Date.now() - startTime
    };
  },

  getSteps(g, maxX, p) {
    const steps = [];
    let power = 1;

    for (let x = 0; x <= maxX; x++) {
      steps.push({
        x,
        value: power,
        equation: `${g}^${x} mod ${p} = ${power}`
      });
      power = (power * g) % p;
    }

    return steps;
  },

  // Generate power table
  generateTable(g, p, limit = null) {
    const actualLimit = limit || p - 1;
    const table = [];
    let power = 1;

    for (let x = 0; x <= actualLimit && x < p; x++) {
      table.push({
        exponent: x,
        value: power
      });

      if (x > 0 && power === 1) break; // Found cycle

      power = (power * g) % p;
    }

    return table;
  }
};

const OneWayDemo = {
  // Forward direction: compute g^x mod p
  forward(g, x, p) {
    const startTime = Date.now();
    const result = MathUtils.modPow(g, x, p);
    const time = Date.now() - startTime;

    return {
      input: { g, x, p },
      result,
      time,
      description: `${g}^${x} mod ${p} = ${result}`
    };
  },

  // Reverse direction: find x given g^x = h mod p
  reverse(g, h, p, maxAttempts = 5000) {
    return DiscreteLogDemo.solve(g, h, p, maxAttempts);
  }
};

const DLogPuzzle = {
  currentPuzzle: null,

  generate(difficulty = 'easy') {
    let p, g, x;

    switch (difficulty) {
      case 'easy':
        p = [7, 11, 13, 17, 19, 23][Math.floor(Math.random() * 6)];
        x = Math.floor(Math.random() * (p - 2)) + 1;
        break;
      case 'medium':
        p = [29, 31, 37, 41, 43, 47][Math.floor(Math.random() * 6)];
        x = Math.floor(Math.random() * (p - 2)) + 1;
        break;
      case 'hard':
        p = [53, 59, 61, 67, 71, 73][Math.floor(Math.random() * 6)];
        x = Math.floor(Math.random() * (p - 2)) + 1;
        break;
    }

    // Find a generator
    g = this.findGenerator(p);

    const h = MathUtils.modPow(g, x, p);

    this.currentPuzzle = { g, h, p, x, difficulty, attempts: 0 };

    return {
      g,
      h,
      p,
      difficulty
    };
  },

  findGenerator(p) {
    // Simple approach: try small numbers
    for (let g = 2; g < p; g++) {
      const order = this.getOrder(g, p);
      if (order === p - 1) return g;
    }
    return 2;
  },

  getOrder(g, p) {
    let power = g % p;
    for (let i = 1; i < p; i++) {
      if (power === 1) return i;
      power = (power * g) % p;
    }
    return p - 1;
  },

  guess(x) {
    if (!this.currentPuzzle) return { error: 'No puzzle active' };

    this.currentPuzzle.attempts++;

    const computed = MathUtils.modPow(
      this.currentPuzzle.g,
      x,
      this.currentPuzzle.p
    );

    if (computed === this.currentPuzzle.h) {
      return {
        correct: true,
        x,
        attempts: this.currentPuzzle.attempts,
        message: `Correct! ${this.currentPuzzle.g}^${x} mod ${this.currentPuzzle.p} = ${this.currentPuzzle.h}`
      };
    } else {
      return {
        correct: false,
        x,
        computed,
        target: this.currentPuzzle.h,
        message: `${this.currentPuzzle.g}^${x} mod ${this.currentPuzzle.p} = ${computed}, not ${this.currentPuzzle.h}`
      };
    }
  }
};

// Export
window.DiscreteLogDemo = DiscreteLogDemo;
window.OneWayDemo = OneWayDemo;
window.DLogPuzzle = DLogPuzzle;
