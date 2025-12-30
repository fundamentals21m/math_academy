import { useState } from 'react';

export function PrimeFactorizationVisualizer() {
  const [number, setNumber] = useState(60);

  // Check if a number is prime
  const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Get prime factorization
  const getPrimeFactors = (n: number): { factor: number; count: number }[] => {
    const factors: { factor: number; count: number }[] = [];
    let num = n;

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        let count = 0;
        while (num % i === 0) {
          count++;
          num = num / i;
        }
        factors.push({ factor: i, count });
      }
    }
    return factors;
  };

  // Get factorization steps
  const getFactorizationSteps = (n: number): { dividend: number; divisor: number; quotient: number }[] => {
    const steps: { dividend: number; divisor: number; quotient: number }[] = [];
    let num = n;

    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        const quotient = num / i;
        steps.push({ dividend: num, divisor: i, quotient });
        num = quotient;
      }
    }
    return steps;
  };

  const factors = getPrimeFactors(number);
  const steps = getFactorizationSteps(number);
  const isNumberPrime = isPrime(number);

  // Format the factorization as a string
  const formatFactorization = () => {
    if (number <= 1) return number.toString();
    if (isNumberPrime) return `${number} (prime)`;
    return factors
      .map(f => f.count > 1 ? `${f.factor}^${f.count}` : f.factor.toString())
      .join(' × ');
  };

  // SVG dimensions for factor tree
  const width = 350;
  const height = 200;

  return (
    <div className="bg-dark-800 rounded-xl p-6 my-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Prime Factorization Explorer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <svg width={width} height={height} className="bg-dark-900 rounded-lg">
            {/* Division ladder visualization */}
            {steps.length > 0 ? (
              <>
                {steps.map((step, i) => {
                  const y = 30 + i * 35;
                  return (
                    <g key={i}>
                      {/* Divisor on left */}
                      <text x={30} y={y + 5} fill="#10b981" fontSize="14" textAnchor="end" fontWeight="bold">
                        {step.divisor}
                      </text>
                      {/* Vertical line */}
                      <line x1={40} y1={y - 15} x2={40} y2={y + 15} stroke="#6b7280" strokeWidth="1" />
                      {/* Dividend */}
                      <text x={60} y={y + 5} fill="#e5e7eb" fontSize="14">
                        {step.dividend}
                      </text>
                      {/* Horizontal line below */}
                      <line x1={40} y1={y + 15} x2={120} y2={y + 15} stroke="#6b7280" strokeWidth="1" />
                    </g>
                  );
                })}
                {/* Final quotient (should be 1 or a prime) */}
                <text x={60} y={30 + steps.length * 35 + 5} fill="#f59e0b" fontSize="14" fontWeight="bold">
                  {steps.length > 0 ? steps[steps.length - 1].quotient : number}
                </text>

                {/* Result on right side */}
                <text x={200} y={40} fill="#6b7280" fontSize="12">
                  Prime factors:
                </text>
                {factors.map((f, i) => (
                  <g key={i}>
                    <circle cx={200 + i * 40} cy={70} r="18" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth="2" />
                    <text x={200 + i * 40} y={75} fill="#10b981" fontSize="14" textAnchor="middle" fontWeight="bold">
                      {f.factor}
                    </text>
                    {f.count > 1 && (
                      <text x={210 + i * 40} y={62} fill="#f59e0b" fontSize="10">
                        ×{f.count}
                      </text>
                    )}
                  </g>
                ))}

                {/* Factorization result */}
                <text x={200} y={height - 40} fill="#e5e7eb" fontSize="12">
                  {number} =
                </text>
                <text x={200} y={height - 20} fill="#f59e0b" fontSize="14" fontWeight="bold">
                  {formatFactorization()}
                </text>
              </>
            ) : (
              <text x={width / 2} y={height / 2} fill="#6b7280" fontSize="14" textAnchor="middle">
                {number <= 1 ? 'Enter a number > 1' : `${number} is prime!`}
              </text>
            )}
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-dark-300 mb-2">
              Number to factorize: {number}
            </label>
            <input
              type="range"
              min="2"
              max="200"
              step="1"
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[12, 36, 60, 84, 100, 144, 180].map((n) => (
              <button
                key={n}
                onClick={() => setNumber(n)}
                className={`px-3 py-1 rounded text-sm ${
                  number === n ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          <div className="bg-dark-700 rounded-lg p-4 space-y-2 text-sm">
            <div className="text-dark-200">
              <span className="text-primary-400">Number:</span> {number}
            </div>
            <div className="text-dark-200">
              <span className="text-emerald-400">Prime?</span> {isNumberPrime ? 'Yes!' : 'No'}
            </div>
            <div className="border-t border-dark-600 pt-2 text-dark-200">
              <span className="text-amber-400">Factorization:</span>
            </div>
            <div className="text-amber-400 font-mono text-lg">
              {number} = {formatFactorization()}
            </div>
            {factors.length > 0 && (
              <div className="text-dark-400 text-xs">
                {factors.length} distinct prime factor{factors.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
