// Euler's Totient Function Module

const TotientVisualizer = {
  generate(n) {
    const numbers = [];

    for (let i = 1; i <= n; i++) {
      const gcd = MathUtils.gcd(i, n);
      numbers.push({
        value: i,
        isCoprime: gcd === 1,
        gcd
      });
    }

    const coprimes = numbers.filter(x => x.isCoprime);

    return {
      n,
      numbers,
      coprimes: coprimes.map(x => x.value),
      totient: coprimes.length
    };
  }
};

const TotientCalculator = {
  calculate(n) {
    if (n < 1) return { totient: 0, steps: ['n must be positive'] };

    if (n === 1) {
      return {
        totient: 1,
        steps: ['φ(1) = 1 by definition']
      };
    }

    const steps = [];
    steps.push(`Calculating φ(${n})`);

    // Factor n
    const factors = this.primeFactorization(n);

    if (factors.length === 1 && factors[0].count === 1) {
      // n is prime
      steps.push(`${n} is prime`);
      steps.push(`φ(p) = p - 1 for prime p`);
      steps.push(`φ(${n}) = ${n} - 1 = ${n - 1}`);
      return { totient: n - 1, steps, factors };
    }

    // Display factorization
    const factorStr = factors.map(f =>
      f.count === 1 ? f.prime : `${f.prime}^${f.count}`
    ).join(' × ');
    steps.push(`${n} = ${factorStr}`);

    // Apply formula
    steps.push(`Using φ(n) = n × ∏(1 - 1/p) for each prime p dividing n`);

    let result = n;
    factors.forEach(f => {
      const before = result;
      result = result - result / f.prime;
      steps.push(`Factor ${f.prime}: ${before} × (1 - 1/${f.prime}) = ${before} - ${before / f.prime} = ${result}`);
    });

    steps.push(`φ(${n}) = ${result}`);

    return { totient: result, steps, factors };
  },

  primeFactorization(n) {
    const factors = [];
    let temp = n;
    let d = 2;

    while (d * d <= temp) {
      if (temp % d === 0) {
        let count = 0;
        while (temp % d === 0) {
          temp = temp / d;
          count++;
        }
        factors.push({ prime: d, count });
      }
      d++;
    }

    if (temp > 1) {
      factors.push({ prime: temp, count: 1 });
    }

    return factors;
  }
};

const EulerTheoremDemo = {
  verify(a, n) {
    if (MathUtils.gcd(a, n) !== 1) {
      return {
        valid: false,
        reason: `GCD(${a}, ${n}) ≠ 1, so Euler's theorem doesn't apply`
      };
    }

    const phi = MathUtils.totient(n);
    const result = MathUtils.modPow(a, phi, n);

    return {
      valid: true,
      a,
      n,
      phi,
      result,
      steps: [
        `φ(${n}) = ${phi}`,
        `${a}^φ(${n}) = ${a}^${phi}`,
        `${a}^${phi} mod ${n} = ${result}`,
        result === 1 ? 'Euler\'s theorem confirmed!' : 'Error in calculation'
      ]
    };
  }
};

// Export
window.TotientVisualizer = TotientVisualizer;
window.TotientCalculator = TotientCalculator;
window.EulerTheoremDemo = EulerTheoremDemo;
