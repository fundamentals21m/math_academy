import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

interface FactorResult {
  factors: number[];
  primeFactorization: Map<number, number>;
  formatted: string;
}

export function PrimeCalculator({ className = '' }: Props) {
  const [number, setNumber] = useState(97);
  const [isPrime, setIsPrime] = useState<boolean | null>(null);
  const [factors, setFactors] = useState<FactorResult | null>(null);
  const [divisorChecks, setDivisorChecks] = useState<{ divisor: number; divides: boolean }[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const checkPrime = (n: number): boolean => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const handleCheckPrime = () => {
    if (number < 2) {
      setIsPrime(false);
      setDivisorChecks([]);
      setFactors(null);
      return;
    }

    setIsChecking(true);
    setIsPrime(null);
    setFactors(null);
    setDivisorChecks([]);

    const checks: { divisor: number; divides: boolean }[] = [];
    const sqrt = Math.floor(Math.sqrt(number));
    
    // Check divisibility
    for (let i = 2; i <= Math.min(sqrt, 20); i++) {
      checks.push({ divisor: i, divides: number % i === 0 });
    }

    // Animate through checks
    let index = 0;
    const interval = setInterval(() => {
      if (index < checks.length) {
        setDivisorChecks(checks.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsPrime(checkPrime(number));
        setIsChecking(false);
      }
    }, 150);
  };

  const handleFactorize = () => {
    if (number < 2) {
      setFactors(null);
      return;
    }

    setIsChecking(true);
    setIsPrime(null);
    setDivisorChecks([]);

    setTimeout(() => {
      const allFactors: number[] = [];
      const primeFactorization = new Map<number, number>();
      
      let n = number;
      
      // Find prime factors
      for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
          allFactors.push(i);
          primeFactorization.set(i, (primeFactorization.get(i) || 0) + 1);
          n = n / i;
        }
      }

      // Format prime factorization
      const parts: string[] = [];
      primeFactorization.forEach((exp, base) => {
        parts.push(exp === 1 ? `${base}` : `${base}^${exp}`);
      });

      setFactors({
        factors: allFactors,
        primeFactorization,
        formatted: parts.join(' × '),
      });
      setIsPrime(allFactors.length === 1);
      setIsChecking(false);
    }, 500);
  };

  const reset = () => {
    setIsPrime(null);
    setFactors(null);
    setDivisorChecks([]);
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Prime Checker & Factorization</h3>
      
      <p className="text-dark-300 mb-6">
        Prime numbers are the building blocks of cryptography. A prime number has exactly 
        two factors: 1 and itself. Composite numbers can be broken down into prime factors.
      </p>

      <div className="space-y-6">
        {/* Input */}
        <div>
          <label className="block text-dark-300 text-sm mb-2">Enter a number</label>
          <input
            type="number"
            min="2"
            value={number}
            onChange={(e) => {
              setNumber(parseInt(e.target.value) || 0);
              reset();
            }}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleCheckPrime}
            disabled={isChecking || number < 2}
            className="px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Check if Prime
          </button>
          <button
            onClick={handleFactorize}
            disabled={isChecking || number < 2}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Factorize
          </button>
        </div>

        {/* Divisibility Checks */}
        <AnimatePresence>
          {divisorChecks.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-xl bg-dark-700/50 border border-dark-600"
            >
              <h4 className="text-dark-200 font-medium mb-3">Checking divisibility:</h4>
              <div className="flex flex-wrap gap-2">
                {divisorChecks.map((check, index) => (
                  <motion.div
                    key={check.divisor}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      check.divides
                        ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                        : 'bg-dark-600/50 text-dark-300 border border-dark-500'
                    }`}
                  >
                    ÷{check.divisor} {check.divides ? '✓' : '✗'}
                  </motion.div>
                ))}
              </div>
              {!isChecking && (
                <p className="text-dark-400 text-sm mt-3">
                  Checked divisibility up to √{number} ≈ {Math.floor(Math.sqrt(number))}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Prime Result */}
        <AnimatePresence>
          {isPrime !== null && !factors && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`p-6 rounded-xl border ${
                isPrime
                  ? 'bg-emerald-500/20 border-emerald-500/50'
                  : 'bg-amber-500/20 border-amber-500/50'
              }`}
            >
              <div className="text-center">
                <p className={`text-3xl font-bold ${isPrime ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {number} is {isPrime ? 'PRIME' : 'NOT PRIME'}
                </p>
                <p className="text-dark-400 text-sm mt-2">
                  {isPrime
                    ? `${number} can only be divided evenly by 1 and ${number}`
                    : `${number} has divisors other than 1 and itself. Try factorizing it!`}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Factorization Result */}
        <AnimatePresence>
          {factors && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 rounded-xl bg-gradient-to-r from-primary-500/20 to-emerald-500/20 border border-primary-500/50"
            >
              <div className="text-center space-y-4">
                <div>
                  <p className="text-dark-300 mb-2">Prime Factorization:</p>
                  <p className="text-3xl font-bold text-primary-400">
                    {number} = {factors.formatted}
                  </p>
                </div>
                
                <div className="flex justify-center gap-2 flex-wrap">
                  {factors.factors.map((factor, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 rounded-full bg-primary-500/30 text-primary-300 font-medium"
                    >
                      {factor}
                    </motion.span>
                  ))}
                </div>

                <p className="text-dark-400 text-sm">
                  {isPrime
                    ? `${number} is a prime number (its only prime factor is itself)`
                    : `${number} is composite with ${factors.factors.length} prime factor${factors.factors.length > 1 ? 's' : ''}`}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explanation */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-dark-700/30 border border-dark-600/50">
            <h4 className="text-dark-200 font-medium mb-2">Prime Numbers</h4>
            <p className="text-dark-400 text-sm">
              A prime number is a natural number greater than 1 that cannot be formed by 
              multiplying two smaller natural numbers. Examples: 2, 3, 5, 7, 11, 13...
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-dark-700/30 border border-dark-600/50">
            <h4 className="text-dark-200 font-medium mb-2">Fundamental Theorem</h4>
            <p className="text-dark-400 text-sm">
              Every integer greater than 1 can be represented uniquely as a product of 
              prime numbers, up to the order of the factors. This is the basis of RSA encryption.
            </p>
          </div>
        </div>

        {/* Why it matters */}
        <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30">
          <h4 className="text-primary-400 font-medium mb-2">Why are primes crucial for cryptography?</h4>
          <p className="text-dark-400 text-sm">
            RSA encryption relies on the fact that multiplying two large primes is easy, 
            but factoring their product back into the original primes is computationally 
            infeasible. This asymmetry is what makes RSA secure.
          </p>
        </div>
      </div>
    </div>
  );
}
