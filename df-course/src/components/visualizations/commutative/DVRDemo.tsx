import { useState } from 'react';
import { motion } from 'framer-motion';

interface DVRExample {
  name: string;
  ring: string;
  uniformizer: string;
  residueField: string;
  fractionField: string;
}

const DVR_EXAMPLES: DVRExample[] = [
  {
    name: 'Z₍ₚ₎',
    ring: 'Z localized at (p)',
    uniformizer: 'p',
    residueField: 'F_p',
    fractionField: 'Q',
  },
  {
    name: 'k[[t]]',
    ring: 'Formal power series',
    uniformizer: 't',
    residueField: 'k',
    fractionField: 'k((t))',
  },
  {
    name: 'Z_p',
    ring: 'p-adic integers',
    uniformizer: 'p',
    residueField: 'F_p',
    fractionField: 'Q_p',
  },
];

export function DVRDemo() {
  const [selectedDVR, setSelectedDVR] = useState(0);
  const [inputValue, setInputValue] = useState('12');
  const [prime, setPrime] = useState(2);

  const dvr = DVR_EXAMPLES[selectedDVR];

  // Calculate p-adic valuation
  const calculateValuation = (n: number, p: number): number => {
    if (n === 0) return Infinity;
    n = Math.abs(n);
    let v = 0;
    while (n % p === 0) {
      v++;
      n = n / p;
    }
    return v;
  };

  const num = parseInt(inputValue) || 0;
  const valuation = calculateValuation(num, prime);

  // Generate ideal chain visualization
  const idealChain = Array.from({ length: 5 }, (_, i) => ({
    ideal: `(${dvr.uniformizer}${i > 0 ? `^${i}` : ''})`,
    index: i,
  }));

  return (
    <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 my-6">
      <h4 className="text-lg font-semibold text-primary-400 mb-4">
        Discrete Valuation Rings
      </h4>

      {/* DVR selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {DVR_EXAMPLES.map((d, i) => (
          <button
            key={i}
            onClick={() => setSelectedDVR(i)}
            className={`px-3 py-1 rounded text-sm ${
              selectedDVR === i
                ? 'bg-blue-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* DVR properties */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xs text-dark-400 mb-1">Ring</div>
            <div className="text-blue-400 font-mono">{dvr.ring}</div>
          </div>
          <div>
            <div className="text-xs text-dark-400 mb-1">Uniformizer π</div>
            <div className="text-amber-400 font-mono text-xl">{dvr.uniformizer}</div>
          </div>
          <div>
            <div className="text-xs text-dark-400 mb-1">Residue Field</div>
            <div className="text-emerald-400 font-mono">{dvr.residueField}</div>
          </div>
          <div>
            <div className="text-xs text-dark-400 mb-1">Fraction Field</div>
            <div className="text-purple-400 font-mono">{dvr.fractionField}</div>
          </div>
        </div>
      </div>

      {/* Ideal chain */}
      <div className="bg-dark-900 rounded-lg p-4 mb-4">
        <div className="text-sm text-dark-400 mb-3">Ideal chain (totally ordered):</div>
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          <span className="text-dark-300">R</span>
          <span className="text-dark-500">⊃</span>
          {idealChain.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="px-2 py-1 bg-dark-700 rounded font-mono text-sm text-amber-400">
                {item.ideal}
              </span>
              {i < idealChain.length - 1 && (
                <span className="text-dark-500">⊃</span>
              )}
            </motion.div>
          ))}
          <span className="text-dark-500">⊃ ...</span>
        </div>
        <div className="text-xs text-dark-500 text-center mt-2">
          Every ideal is (π^n) for some n ≥ 0
        </div>
      </div>

      {/* Valuation calculator */}
      <div className="bg-dark-900 rounded-lg p-4">
        <div className="text-sm text-dark-400 mb-3">
          Calculate {prime}-adic valuation v_{prime}:
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div>
            <label className="text-xs text-dark-400 block mb-1">Prime p</label>
            <select
              value={prime}
              onChange={(e) => setPrime(parseInt(e.target.value))}
              className="px-3 py-2 bg-dark-700 rounded text-dark-100"
            >
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={7}>7</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-dark-400 block mb-1">Integer n</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-24 px-3 py-2 bg-dark-700 rounded text-dark-100 font-mono"
            />
          </div>
          <div className="text-center">
            <label className="text-xs text-dark-400 block mb-1">Valuation</label>
            <motion.div
              key={`${num}-${prime}`}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-2xl font-mono text-emerald-400"
            >
              v_{prime}({num}) = {valuation === Infinity ? '∞' : valuation}
            </motion.div>
          </div>
        </div>

        {num !== 0 && valuation < Infinity && (
          <div className="text-sm text-dark-300">
            <span className="text-dark-400">Decomposition:</span>{' '}
            <span className="font-mono">
              {num} = {prime}^{valuation} × {Math.abs(num) / Math.pow(prime, valuation)}
            </span>
            <span className="text-dark-500 ml-2">
              (unit × uniformizer^v)
            </span>
          </div>
        )}
      </div>

      {/* Key characterization */}
      <div className="mt-4 p-3 bg-dark-900/50 rounded text-sm">
        <div className="text-dark-400 mb-2">DVR Characterizations (all equivalent):</div>
        <ul className="space-y-1 text-dark-300">
          <li>• Local PID that is not a field</li>
          <li>• Noetherian local ring with principal maximal ideal ≠ 0</li>
          <li>• One-dimensional regular local ring</li>
          <li>• Local Dedekind domain that is not a field</li>
        </ul>
      </div>

      <div className="mt-4 text-xs text-dark-500">
        DVRs capture "order of vanishing" at a point. Every nonzero element is
        uπ^n for unit u and unique n = v(x).
      </div>
    </div>
  );
}
