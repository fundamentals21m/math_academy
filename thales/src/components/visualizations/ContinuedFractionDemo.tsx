import { useState, useMemo } from 'react';

interface Props {
  className?: string;
}

type PresetType = 'sqrt2' | 'sqrt3' | 'phi' | 'e' | 'pi' | 'custom';

export function ContinuedFractionDemo({ className = '' }: Props) {
  const [preset, setPreset] = useState<PresetType>('phi');
  const [customNum, setCustomNum] = useState('3.14159');
  const [depth, setDepth] = useState(8);

  // Get the target value
  const targetValue = useMemo(() => {
    switch (preset) {
      case 'sqrt2': return Math.sqrt(2);
      case 'sqrt3': return Math.sqrt(3);
      case 'phi': return (1 + Math.sqrt(5)) / 2;
      case 'e': return Math.E;
      case 'pi': return Math.PI;
      case 'custom': return parseFloat(customNum) || 0;
      default: return 0;
    }
  }, [preset, customNum]);

  // Compute continued fraction coefficients
  const coefficients = useMemo(() => {
    const coefs: number[] = [];
    let x = targetValue;

    for (let i = 0; i < depth && x !== 0; i++) {
      const a = Math.floor(x);
      coefs.push(a);
      const frac = x - a;
      if (frac < 1e-10) break;
      x = 1 / frac;
      if (x > 1e10) break; // Prevent overflow
    }

    return coefs;
  }, [targetValue, depth]);

  // Compute convergents
  const convergents = useMemo(() => {
    const result: { p: number; q: number; value: number }[] = [];
    let p_prev = 1, p_curr = coefficients[0] || 0;
    let q_prev = 0, q_curr = 1;

    result.push({ p: p_curr, q: q_curr, value: p_curr / q_curr });

    for (let i = 1; i < coefficients.length; i++) {
      const a = coefficients[i];
      const p_next = a * p_curr + p_prev;
      const q_next = a * q_curr + q_prev;
      result.push({ p: p_next, q: q_next, value: p_next / q_next });
      p_prev = p_curr;
      p_curr = p_next;
      q_prev = q_curr;
      q_curr = q_next;
    }

    return result;
  }, [coefficients]);

  // Format continued fraction notation
  const formatCF = () => {
    if (coefficients.length === 0) return '[]';
    if (coefficients.length === 1) return `[${coefficients[0]}]`;
    return `[${coefficients[0]}; ${coefficients.slice(1).join(', ')}]`;
  };

  // Known patterns
  const getPattern = () => {
    switch (preset) {
      case 'sqrt2': return '[1; 2, 2, 2, ...] (all 2s after first term)';
      case 'sqrt3': return '[1; 1, 2, 1, 2, ...] (repeating 1, 2)';
      case 'phi': return '[1; 1, 1, 1, ...] (all 1s — simplest irrational!)';
      case 'e': return '[2; 1, 2, 1, 1, 4, 1, 1, 6, ...] (pattern in middle terms)';
      case 'pi': return '[3; 7, 15, 1, 292, ...] (no known pattern)';
      default: return '';
    }
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">Continued Fractions</h3>

      <p className="text-dark-300 mb-6">
        Every real number can be written as a continued fraction: a₀ + 1/(a₁ + 1/(a₂ + ...)).
        Rationals terminate; quadratic irrationals are eventually periodic!
      </p>

      {/* Preset selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { type: 'phi' as const, label: 'φ (Golden)' },
          { type: 'sqrt2' as const, label: '√2' },
          { type: 'sqrt3' as const, label: '√3' },
          { type: 'e' as const, label: 'e' },
          { type: 'pi' as const, label: 'π' },
          { type: 'custom' as const, label: 'Custom' },
        ].map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setPreset(type)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              preset === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Custom input */}
      {preset === 'custom' && (
        <div className="mb-4">
          <input
            type="text"
            value={customNum}
            onChange={(e) => setCustomNum(e.target.value)}
            placeholder="Enter a number"
            className="w-full p-2 rounded-lg bg-dark-700 text-dark-100 border border-dark-600"
          />
        </div>
      )}

      {/* Depth control */}
      <div className="mb-4">
        <label className="text-blue-400 text-sm">Terms: {depth}</label>
        <input
          type="range"
          min="2"
          max="15"
          step="1"
          value={depth}
          onChange={(e) => setDepth(parseInt(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Continued fraction display */}
      <div className="p-4 rounded-xl bg-dark-900 mb-4">
        <p className="text-dark-400 text-sm">Continued Fraction:</p>
        <p className="text-orange-400 font-mono text-lg">{formatCF()}</p>
        {getPattern() && (
          <p className="text-emerald-400 text-sm mt-2">{getPattern()}</p>
        )}
      </div>

      {/* Visual representation */}
      <div className="p-4 rounded-xl bg-dark-900 mb-4">
        <p className="text-dark-400 text-sm mb-2">Nested Form:</p>
        <div className="text-dark-100 font-mono text-sm overflow-x-auto">
          {coefficients.slice(0, 5).map((a, i) => (
            <span key={i}>
              {i === 0 ? `${a}` : ` + 1/(${a}`}
            </span>
          ))}
          {coefficients.length > 5 ? ' + ...' : ''}
          {coefficients.slice(1, 5).map((_, i) => ')').join('')}
        </div>
      </div>

      {/* Convergents table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-dark-400 border-b border-dark-700">
              <th className="p-2 text-left">n</th>
              <th className="p-2 text-left">aₙ</th>
              <th className="p-2 text-left">pₙ/qₙ</th>
              <th className="p-2 text-left">Value</th>
              <th className="p-2 text-left">Error</th>
            </tr>
          </thead>
          <tbody>
            {convergents.slice(0, 10).map((conv, i) => (
              <tr key={i} className="border-b border-dark-800">
                <td className="p-2 text-dark-400">{i}</td>
                <td className="p-2 text-orange-400 font-mono">{coefficients[i]}</td>
                <td className="p-2 text-blue-400 font-mono">
                  {conv.p}/{conv.q}
                </td>
                <td className="p-2 text-dark-300 font-mono">{conv.value.toFixed(10)}</td>
                <td className="p-2 text-emerald-400 font-mono">
                  {Math.abs(conv.value - targetValue).toExponential(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Target value */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-dark-400 text-xs">Target Value</p>
          <p className="text-blue-400 font-mono">{targetValue.toFixed(15)}</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-dark-400 text-xs">Best Approximation</p>
          <p className="text-emerald-400 font-mono">
            {convergents.length > 0 ? `${convergents[convergents.length - 1].p}/${convergents[convergents.length - 1].q}` : '-'}
          </p>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
        <p className="text-emerald-400 font-medium">Best Rational Approximations</p>
        <p className="text-dark-300 text-sm mt-2">
          The convergents pₙ/qₙ are the best rational approximations to the target:
          no other fraction with smaller denominator is closer to the target!
        </p>
        <p className="text-dark-400 text-xs mt-2">
          Lagrange's theorem: A number has an eventually periodic continued fraction
          ⟺ it is a quadratic irrational (like √2 or φ).
        </p>
      </div>
    </div>
  );
}
