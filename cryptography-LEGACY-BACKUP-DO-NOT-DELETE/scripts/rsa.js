// RSA Encryption Module

const RSA = {
  // Generate RSA key pair
  generateKeys(p, q) {
    const steps = [];

    // Validate primes
    if (!MathUtils.isPrime(p) || !MathUtils.isPrime(q)) {
      return { error: 'Both p and q must be prime numbers' };
    }

    if (p === q) {
      return { error: 'p and q must be different primes' };
    }

    steps.push(`Step 1: Choose two primes p = ${p}, q = ${q}`);

    // Compute n
    const n = p * q;
    steps.push(`Step 2: Compute n = p × q = ${p} × ${q} = ${n}`);

    // Compute totient
    const phi = (p - 1) * (q - 1);
    steps.push(`Step 3: Compute φ(n) = (p-1)(q-1) = ${p - 1} × ${q - 1} = ${phi}`);

    // Choose e (commonly 65537, but for small demos we use smaller values)
    let e = 65537;
    if (e >= phi) {
      // Find a smaller e
      for (e = 3; e < phi; e += 2) {
        if (MathUtils.gcd(e, phi) === 1) break;
      }
    }
    if (MathUtils.gcd(e, phi) !== 1) {
      // Fallback
      for (e = 2; e < phi; e++) {
        if (MathUtils.gcd(e, phi) === 1) break;
      }
    }

    steps.push(`Step 4: Choose e coprime to φ(n): e = ${e} (GCD(${e}, ${phi}) = 1)`);

    // Compute d
    const d = MathUtils.modInverse(e, phi);
    steps.push(`Step 5: Compute d = e⁻¹ mod φ(n) = ${e}⁻¹ mod ${phi} = ${d}`);

    // Verify
    steps.push(`Verification: e × d mod φ(n) = ${e} × ${d} mod ${phi} = ${(e * d) % phi}`);

    return {
      publicKey: { e, n },
      privateKey: { d, n },
      p,
      q,
      phi,
      steps
    };
  },

  // Encrypt a message
  encrypt(message, e, n) {
    if (message >= n) {
      return { error: `Message must be less than n (${n})` };
    }

    const steps = [];
    steps.push(`Encrypting message m = ${message}`);
    steps.push(`Using public key: e = ${e}, n = ${n}`);
    steps.push(`c = m^e mod n = ${message}^${e} mod ${n}`);

    const ciphertext = MathUtils.modPow(message, e, n);
    steps.push(`c = ${ciphertext}`);

    return {
      ciphertext,
      steps
    };
  },

  // Decrypt a ciphertext
  decrypt(ciphertext, d, n) {
    const steps = [];
    steps.push(`Decrypting ciphertext c = ${ciphertext}`);
    steps.push(`Using private key: d = ${d}, n = ${n}`);
    steps.push(`m = c^d mod n = ${ciphertext}^${d} mod ${n}`);

    const message = MathUtils.modPow(ciphertext, d, n);
    steps.push(`m = ${message}`);

    return {
      message,
      steps
    };
  },

  // Convert text to numbers (simple encoding)
  textToNumbers(text) {
    return text.split('').map(c => c.charCodeAt(0));
  },

  // Convert numbers back to text
  numbersToText(numbers) {
    return numbers.map(n => String.fromCharCode(n)).join('');
  },

  // Encrypt text
  encryptText(text, e, n) {
    const numbers = this.textToNumbers(text);
    const encrypted = numbers.map(m => {
      if (m >= n) return null;
      return MathUtils.modPow(m, e, n);
    });

    if (encrypted.includes(null)) {
      return { error: 'Some characters are too large for this key size' };
    }

    return {
      original: text,
      numbers,
      encrypted
    };
  },

  // Decrypt text
  decryptText(encrypted, d, n) {
    const decrypted = encrypted.map(c => MathUtils.modPow(c, d, n));
    const text = this.numbersToText(decrypted);

    return {
      encrypted,
      decrypted,
      text
    };
  }
};

const RSADemo = {
  keys: null,

  generateRandomPrimes(bits = 8) {
    const primes = [];
    const min = Math.pow(2, bits - 1);
    const max = Math.pow(2, bits) - 1;

    // Find two different primes
    while (primes.length < 2) {
      const candidate = MathUtils.randomInt(min, max) | 1; // Make odd
      if (MathUtils.isPrime(candidate) && !primes.includes(candidate)) {
        primes.push(candidate);
      }
    }

    return { p: primes[0], q: primes[1] };
  }
};

const FactoringDemo = {
  // Try to factor n (brute force for demo)
  factor(n, maxAttempts = 100000) {
    const startTime = Date.now();
    let attempts = 0;

    for (let i = 2; i * i <= n && attempts < maxAttempts; i++) {
      attempts++;
      if (n % i === 0) {
        return {
          found: true,
          p: i,
          q: n / i,
          attempts,
          time: Date.now() - startTime
        };
      }
    }

    return {
      found: false,
      attempts,
      time: Date.now() - startTime
    };
  }
};

// Export
window.RSA = RSA;
window.RSADemo = RSADemo;
window.FactoringDemo = FactoringDemo;
