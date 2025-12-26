import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
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

function factorize(n: number): number[] {
  const factors: number[] = [];
  let num = n;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    while (num % i === 0) {
      factors.push(i);
      num = num / i;
    }
  }
  if (num > 1) factors.push(num);
  return factors;
}

export function TotientCalculator({ className = '' }: Props) {
  const [n, setN] = useState<number>(12);
  const [coprimes, setCoprimes] = useState<number[]>([]);
  const [phi, setPhi] = useState<number | null>(null);
  const [specialCase, setSpecialCase] = useState<string>('');
  const [calculated, setCalculated] = useState(false);

  const calculateTotient = () => {
    if (n < 1 || !Number.isInteger(n)) {
      setPhi(null);
      setCoprimes([]);
      setSpecialCase('Please enter a positive integer.');
      setCalculated(false);
      return;
    }

    // Find all coprimes
    const coprimeList: number[] = [];
    for (let i = 1; i <= n; i++) {
      if (gcd(i, n) === 1) {
        coprimeList.push(i);
      }
    }
    setCoprimes(coprimeList);
    setPhi(coprimeList.length);
    setCalculated(true);

    // Determine special case
    if (isPrime(n)) {
      setSpecialCase(`${n} is prime, so phi(${n}) = ${n} - 1 = ${n - 1}`);
    } else {
      const factors = factorize(n);
      const uniqueFactors = [...new Set(factors)];
      
      if (uniqueFactors.length === 2 && factors.length === 2) {
        const [p, q] = uniqueFactors;
        setSpecialCase(`${n} = ${p} x ${q} (two primes), so phi(${n}) = (${p}-1)(${q}-1) = ${(p-1)*(q-1)}`);
      } else if (uniqueFactors.length === 1 && factors.length > 1) {
        const p = uniqueFactors[0];
        const k = factors.length;
        setSpecialCase(`${n} = ${p}^${k} (prime power), so phi(${n}) = ${p}^${k} - ${p}^${k-1} = ${Math.pow(p, k) - Math.pow(p, k-1)}`);
      } else {
        setSpecialCase('Composite number with multiple prime factors.');
      }
    }
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Euler's Totient Calculator</h3>
      
      <p className="text-dark-300 mb-6 text-sm">
        Euler's totient function phi(n) counts how many integers from 1 to n are coprime with n 
        (share no common factors other than 1).
      </p>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-dark-300 text-sm mb-2">Enter n:</label>
          <input
            type="number"
            min="1"
            max="1000"
            value={n}
            onChange={(e) => {
              setN(parseInt(e.target.value) || 1);
              setCalculated(false);
            }}
            className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div className="flex items-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateTotient}
            className="px-6 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
          >
            Calculate phi({n})
          </motion.button>
        </div>
      </div>

      {calculated && phi !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {/* Result */}
          <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
            <div className="text-2xl font-bold text-emerald-400 mb-2">
              phi({n}) = {phi}
            </div>
            <div className="text-cyan-400 text-sm">{specialCase}</div>
          </div>

          {/* Coprime numbers */}
          <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
            <h4 className="text-dark-200 font-medium mb-3">
              Numbers coprime to {n} (from 1 to {n}):
            </h4>
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
              {coprimes.map((num, index) => (
                <motion.span
                  key={num}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-mono"
                >
                  {num}
                </motion.span>
              ))}
            </div>
            <div className="mt-3 text-dark-400 text-sm">
              Total count: <span className="text-emerald-400 font-bold">{phi}</span> numbers
            </div>
          </div>

          {/* Explanation */}
          <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
            <h4 className="text-dark-200 font-medium mb-2">How it works:</h4>
            <ul className="text-dark-400 text-sm space-y-1">
              <li>• For each number from 1 to {n}, we check if gcd(number, {n}) = 1</li>
              <li>• If yes, the number is coprime to {n}</li>
              <li>• The count of such numbers is phi({n})</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
