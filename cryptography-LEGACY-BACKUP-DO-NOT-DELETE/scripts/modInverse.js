// Modular Inverse Module

const InverseCalculator = {
  calculate(a, n) {
    a = MathUtils.mod(a, n);

    const steps = [];
    steps.push(`Finding inverse of ${a} mod ${n}`);

    // Check if inverse exists
    const gcd = MathUtils.gcd(a, n);
    if (gcd !== 1) {
      return {
        exists: false,
        gcd,
        steps: [
          ...steps,
          `GCD(${a}, ${n}) = ${gcd}`,
          `Since GCD ≠ 1, no inverse exists`
        ]
      };
    }

    steps.push(`GCD(${a}, ${n}) = 1 ✓ (inverse exists)`);

    // Use extended Euclidean algorithm
    const ext = this.extendedGcd(a, n);

    steps.push(`Using Extended Euclidean Algorithm:`);
    ext.steps.forEach(s => steps.push(`  ${s}`));

    const inverse = MathUtils.mod(ext.x, n);
    steps.push(`x = ${ext.x}, adjusted to mod ${n}: ${inverse}`);
    steps.push(`Verification: ${a} × ${inverse} mod ${n} = ${MathUtils.mod(a * inverse, n)}`);

    return {
      exists: true,
      inverse,
      gcd: 1,
      steps
    };
  },

  extendedGcd(a, b) {
    const steps = [];
    const originalA = a;
    const originalB = b;

    let old_r = a, r = b;
    let old_s = 1, s = 0;

    while (r !== 0) {
      const quotient = Math.floor(old_r / r);
      steps.push(`${old_r} = ${r} × ${quotient} + ${old_r - quotient * r}`);

      [old_r, r] = [r, old_r - quotient * r];
      [old_s, s] = [s, old_s - quotient * s];
    }

    return {
      gcd: old_r,
      x: old_s,
      steps
    };
  }
};

// Generate table of all inverses mod n
const InverseTable = {
  generate(n) {
    const table = [];

    for (let i = 1; i < n; i++) {
      const gcd = MathUtils.gcd(i, n);
      if (gcd === 1) {
        const inverse = MathUtils.modInverse(i, n);
        table.push({
          value: i,
          inverse,
          hasInverse: true
        });
      } else {
        table.push({
          value: i,
          inverse: null,
          hasInverse: false,
          gcd
        });
      }
    }

    return table;
  }
};

// Linear Congruence Solver: ax ≡ b (mod n)
const CongruenceSolver = {
  solve(a, b, n) {
    const steps = [];
    steps.push(`Solving: ${a}x ≡ ${b} (mod ${n})`);

    a = MathUtils.mod(a, n);
    b = MathUtils.mod(b, n);

    const gcd = MathUtils.gcd(a, n);

    if (b % gcd !== 0) {
      steps.push(`GCD(${a}, ${n}) = ${gcd}`);
      steps.push(`${b} is not divisible by ${gcd}`);
      return {
        hasSolution: false,
        steps,
        reason: 'b is not divisible by GCD(a, n)'
      };
    }

    steps.push(`GCD(${a}, ${n}) = ${gcd}`);

    if (gcd === 1) {
      // Unique solution
      const inverse = MathUtils.modInverse(a, n);
      const solution = MathUtils.mod(inverse * b, n);

      steps.push(`Since GCD = 1, there is exactly one solution`);
      steps.push(`${a}⁻¹ mod ${n} = ${inverse}`);
      steps.push(`x = ${inverse} × ${b} mod ${n} = ${solution}`);

      return {
        hasSolution: true,
        solutions: [solution],
        steps
      };
    } else {
      // Multiple solutions
      const a2 = a / gcd;
      const b2 = b / gcd;
      const n2 = n / gcd;

      steps.push(`Dividing through by GCD: ${a2}x ≡ ${b2} (mod ${n2})`);

      const inverse = MathUtils.modInverse(a2, n2);
      const baseSolution = MathUtils.mod(inverse * b2, n2);

      steps.push(`${a2}⁻¹ mod ${n2} = ${inverse}`);
      steps.push(`Base solution: x ≡ ${baseSolution} (mod ${n2})`);

      // Generate all solutions mod n
      const solutions = [];
      for (let k = 0; k < gcd; k++) {
        solutions.push(baseSolution + k * n2);
      }

      steps.push(`All solutions mod ${n}: ${solutions.join(', ')}`);

      return {
        hasSolution: true,
        solutions,
        steps
      };
    }
  }
};

// Export
window.InverseCalculator = InverseCalculator;
window.InverseTable = InverseTable;
window.CongruenceSolver = CongruenceSolver;
