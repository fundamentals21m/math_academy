import { useState, useCallback } from 'react';

interface Props {
  className?: string;
}

export function PrimeSieve({ className = '' }: Props) {
  const [limit, setLimit] = useState(100);
  const [sieveState, setSieveState] = useState<boolean[]>([]);
  const [currentPrime, setCurrentPrime] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [_isRunning, setIsRunning] = useState(false);

  // Initialize sieve
  const initSieve = useCallback(() => {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;
    setSieveState(sieve);
    setCurrentPrime(null);
    setStep(0);
  }, [limit]);

  // Run one step
  const runStep = useCallback(() => {
    if (sieveState.length === 0) {
      initSieve();
      return;
    }

    // Find next prime to process
    let nextPrime = currentPrime === null ? 2 : currentPrime + 1;
    while (nextPrime <= Math.sqrt(limit) && !sieveState[nextPrime]) {
      nextPrime++;
    }

    if (nextPrime > Math.sqrt(limit)) {
      setIsRunning(false);
      setCurrentPrime(null);
      return;
    }

    // Mark multiples
    const newSieve = [...sieveState];
    for (let i = nextPrime * nextPrime; i <= limit; i += nextPrime) {
      newSieve[i] = false;
    }

    setSieveState(newSieve);
    setCurrentPrime(nextPrime);
    setStep(s => s + 1);
  }, [sieveState, currentPrime, limit, initSieve]);

  // Auto-run
  const runAll = useCallback(() => {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;

    for (let p = 2; p * p <= limit; p++) {
      if (sieve[p]) {
        for (let i = p * p; i <= limit; i += p) {
          sieve[i] = false;
        }
      }
    }

    setSieveState(sieve);
    setCurrentPrime(null);
    setStep(Math.floor(Math.sqrt(limit)));
  }, [limit]);

  const reset = () => {
    setSieveState([]);
    setCurrentPrime(null);
    setStep(0);
    setIsRunning(false);
  };

  const primes = sieveState.reduce((acc, isPrime, n) => {
    if (isPrime && n >= 2) acc.push(n);
    return acc;
  }, [] as number[]);

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Sieve of Eratosthenes</h3>

      <p className="text-dark-300 mb-6">
        Find all primes up to a limit by systematically crossing out multiples. Start with 2 and
        cross out 4, 6, 8, ... Then 3 and cross out 9, 12, 15, ... Continue until done!
      </p>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="text-emerald-400 text-sm">Limit: {limit}</label>
          <input
            type="range"
            min="20"
            max="200"
            step="10"
            value={limit}
            onChange={(e) => {
              setLimit(parseInt(e.target.value));
              reset();
            }}
            className="w-32 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={sieveState.length === 0 ? initSieve : runStep}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
          >
            {sieveState.length === 0 ? 'Start' : 'Step'}
          </button>
          <button
            onClick={runAll}
            className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
          >
            Run All
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 rounded-lg bg-dark-600 text-dark-300 font-medium hover:bg-dark-500 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Current step info */}
      {currentPrime && (
        <div className="mb-4 p-3 rounded-xl bg-orange-500/20 border border-orange-500/30">
          <p className="text-orange-400">
            Step {step}: Crossing out multiples of <span className="font-bold">{currentPrime}</span>
          </p>
        </div>
      )}

      {/* Number grid */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(10, 1fr)' }}>
          {sieveState.map((isPrime, n) => {
            if (n < 2) return null;
            const isCurrentPrime = n === currentPrime;
            const isMultiple = currentPrime && n > currentPrime && n % currentPrime === 0;

            return (
              <div
                key={n}
                className={`
                  w-8 h-8 flex items-center justify-center text-sm font-mono rounded
                  transition-all duration-200
                  ${isCurrentPrime
                    ? 'bg-orange-500 text-white scale-110'
                    : isPrime
                      ? 'bg-emerald-500/30 text-emerald-400 border border-emerald-500/50'
                      : 'bg-dark-700/50 text-dark-500 line-through'}
                  ${isMultiple ? 'ring-2 ring-red-500' : ''}
                `}
              >
                {n}
              </div>
            );
          })}
        </div>
      </div>

      {/* Results */}
      {sieveState.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <p className="text-dark-400 text-xs">Primes Found</p>
            <p className="text-emerald-400 font-mono text-2xl">{primes.length}</p>
          </div>
          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-dark-400 text-xs">Prime Density</p>
            <p className="text-blue-400 font-mono text-2xl">
              {((primes.length / (limit - 1)) * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      )}

      {/* Prime list */}
      {primes.length > 0 && (
        <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600">
          <p className="text-emerald-400 font-medium mb-2">Primes up to {limit}:</p>
          <p className="text-dark-300 text-sm font-mono">
            {primes.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}
