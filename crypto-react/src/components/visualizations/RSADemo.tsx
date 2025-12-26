import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

// Helper functions
function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function modPow(base: number, exp: number, mod: number): number {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) {
      result = (result * base) % mod;
    }
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
}

function modInverse(e: number, phi: number): number {
  // Extended Euclidean Algorithm
  let [old_r, r] = [phi, e];
  let [old_t, t] = [0, 1];

  while (r !== 0) {
    const quotient = Math.floor(old_r / r);
    [old_r, r] = [r, old_r - quotient * r];
    [old_t, t] = [t, old_t - quotient * t];
  }

  if (old_r > 1) return -1; // No inverse exists
  if (old_t < 0) old_t += phi;
  return old_t;
}

function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

export function RSADemo({ className = '' }: Props) {
  // Key generation
  const [p, setP] = useState<number>(61);
  const [q, setQ] = useState<number>(53);
  const [n, setN] = useState<number>(0);
  const [phi, setPhi] = useState<number>(0);
  const [e, setE] = useState<number>(17);
  const [d, setD] = useState<number>(0);
  const [keysGenerated, setKeysGenerated] = useState(false);
  const [keyError, setKeyError] = useState<string>('');

  // Encryption
  const [message, setMessage] = useState<number>(42);
  const [ciphertext, setCiphertext] = useState<number | null>(null);

  // Decryption
  const [inputCiphertext, setInputCiphertext] = useState<number>(0);
  const [decryptedMessage, setDecryptedMessage] = useState<number | null>(null);

  const generateKeys = () => {
    setKeyError('');
    setCiphertext(null);
    setDecryptedMessage(null);

    // Validate primes
    if (!isPrime(p)) {
      setKeyError(`${p} is not a prime number`);
      setKeysGenerated(false);
      return;
    }
    if (!isPrime(q)) {
      setKeyError(`${q} is not a prime number`);
      setKeysGenerated(false);
      return;
    }
    if (p === q) {
      setKeyError('p and q must be different primes');
      setKeysGenerated(false);
      return;
    }

    const newN = p * q;
    const newPhi = (p - 1) * (q - 1);

    // Validate e
    if (e <= 1 || e >= newPhi) {
      setKeyError(`e must be between 2 and ${newPhi - 1}`);
      setKeysGenerated(false);
      return;
    }
    if (gcd(e, newPhi) !== 1) {
      setKeyError(`e (${e}) must be coprime with phi(n) (${newPhi})`);
      setKeysGenerated(false);
      return;
    }

    const newD = modInverse(e, newPhi);
    if (newD === -1) {
      setKeyError('Could not compute modular inverse for d');
      setKeysGenerated(false);
      return;
    }

    setN(newN);
    setPhi(newPhi);
    setD(newD);
    setKeysGenerated(true);
  };

  const encrypt = () => {
    if (!keysGenerated) return;
    if (message < 0 || message >= n) {
      return;
    }
    const c = modPow(message, e, n);
    setCiphertext(c);
    setInputCiphertext(c);
  };

  const decrypt = () => {
    if (!keysGenerated) return;
    const m = modPow(inputCiphertext, d, n);
    setDecryptedMessage(m);
  };

  useEffect(() => {
    setKeysGenerated(false);
    setCiphertext(null);
    setDecryptedMessage(null);
  }, [p, q, e]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">RSA Encryption Demo</h3>
      
      <p className="text-dark-300 mb-6 text-sm">
        RSA is an asymmetric encryption algorithm. Generate a public/private key pair, 
        then encrypt and decrypt messages using modular exponentiation.
      </p>

      {/* Key Generation Section */}
      <div className="mb-6 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <h4 className="text-dark-100 font-semibold mb-4">1. Generate Keys</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-dark-300 text-sm mb-2">Prime p:</label>
            <input
              type="number"
              min="2"
              value={p}
              onChange={(e) => setP(parseInt(e.target.value) || 2)}
              className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-dark-300 text-sm mb-2">Prime q:</label>
            <input
              type="number"
              min="2"
              value={q}
              onChange={(e) => setQ(parseInt(e.target.value) || 2)}
              className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-dark-300 text-sm mb-2">Public exponent e:</label>
            <input
              type="number"
              min="2"
              value={e}
              onChange={(ev) => setE(parseInt(ev.target.value) || 2)}
              className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={generateKeys}
          className="px-6 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
        >
          Generate Keys
        </motion.button>

        {keyError && (
          <div className="mt-3 text-red-400 text-sm">{keyError}</div>
        )}

        {keysGenerated && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 space-y-2"
          >
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-dark-400">
                n = p × q = <span className="text-cyan-400 font-mono">{p} × {q} = {n}</span>
              </div>
              <div className="text-dark-400">
                phi(n) = (p-1)(q-1) = <span className="text-cyan-400 font-mono">{phi}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <div className="text-dark-400 text-xs mb-1">Public Key (n, e)</div>
                <div className="text-emerald-400 font-mono">({n}, {e})</div>
              </div>
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <div className="text-dark-400 text-xs mb-1">Private Key (n, d)</div>
                <div className="text-purple-400 font-mono">({n}, {d})</div>
              </div>
            </div>
            <div className="text-dark-500 text-xs mt-2">
              d is the modular inverse of e mod phi(n): {e} × {d} ≡ 1 (mod {phi})
            </div>
          </motion.div>
        )}
      </div>

      {/* Encryption Section */}
      <div className="mb-6 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <h4 className="text-dark-100 font-semibold mb-4">2. Encrypt Message</h4>
        
        <div className="flex flex-wrap gap-4 items-end mb-4">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-dark-300 text-sm mb-2">
              Message (0 to {keysGenerated ? n - 1 : '?'}):
            </label>
            <input
              type="number"
              min="0"
              max={keysGenerated ? n - 1 : 999}
              value={message}
              onChange={(e) => setMessage(parseInt(e.target.value) || 0)}
              disabled={!keysGenerated}
              className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500 disabled:opacity-50"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={encrypt}
            disabled={!keysGenerated}
            className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Encrypt
          </motion.button>
        </div>

        {ciphertext !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-3 rounded-lg bg-dark-800/50"
          >
            <div className="text-dark-400 text-sm mb-1">
              c = m<sup>e</sup> mod n = {message}<sup>{e}</sup> mod {n}
            </div>
            <div className="text-emerald-400 font-mono text-xl">
              Ciphertext: {ciphertext}
            </div>
          </motion.div>
        )}
      </div>

      {/* Decryption Section */}
      <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <h4 className="text-dark-100 font-semibold mb-4">3. Decrypt Ciphertext</h4>
        
        <div className="flex flex-wrap gap-4 items-end mb-4">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-dark-300 text-sm mb-2">Ciphertext:</label>
            <input
              type="number"
              min="0"
              value={inputCiphertext}
              onChange={(e) => setInputCiphertext(parseInt(e.target.value) || 0)}
              disabled={!keysGenerated}
              className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500 disabled:opacity-50"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={decrypt}
            disabled={!keysGenerated}
            className="px-6 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Decrypt
          </motion.button>
        </div>

        {decryptedMessage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-3 rounded-lg bg-dark-800/50"
          >
            <div className="text-dark-400 text-sm mb-1">
              m = c<sup>d</sup> mod n = {inputCiphertext}<sup>{d}</sup> mod {n}
            </div>
            <div className="text-purple-400 font-mono text-xl">
              Decrypted Message: {decryptedMessage}
            </div>
            {decryptedMessage === message && ciphertext === inputCiphertext && (
              <div className="text-emerald-400 text-sm mt-2">
                Original message recovered successfully!
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Educational note */}
      <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
        <div className="text-amber-400 text-sm">
          <strong>Note:</strong> This demo uses small numbers for educational purposes. 
          Real RSA uses primes with hundreds of digits, making factorization computationally infeasible.
        </div>
      </div>
    </div>
  );
}
