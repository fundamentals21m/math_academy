import { useState } from 'react';

interface Props {
  className?: string;
}

export function IrrationalSqrt2Demo({ className = '' }: Props) {
  const [showProof, setShowProof] = useState(false);
  const [approximationStep, setApproximationStep] = useState(5);

  // Continued fraction approximations to √2
  // √2 = [1; 2, 2, 2, ...] = 1 + 1/(2 + 1/(2 + 1/(2 + ...)))
  const getConvergent = (n: number): [number, number] => {
    // p/q convergents: p_{-1}=1, p_0=1, q_{-1}=0, q_0=1
    // Then p_n = a_n * p_{n-1} + p_{n-2}, same for q
    let p_prev = 1, p_curr = 1;
    let q_prev = 0, q_curr = 1;

    for (let i = 0; i < n; i++) {
      const a = 2; // All partial quotients are 2 after the first
      const p_next = a * p_curr + p_prev;
      const q_next = a * q_curr + q_prev;
      p_prev = p_curr;
      p_curr = p_next;
      q_prev = q_curr;
      q_curr = q_next;
    }

    return [p_curr, q_curr];
  };

  const convergents = Array.from({ length: approximationStep }, (_, i) => getConvergent(i));
  const sqrt2 = Math.sqrt(2);

  // SVG dimensions
  const width = 350;
  const height = 350;
  const scale = 120;
  const ox = 50;
  const oy = 300;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-4">The Irrationality of √2</h3>

      <p className="text-dark-300 mb-6">
        The Pythagoreans discovered that the diagonal of a unit square cannot be expressed
        as a ratio of integers. This was a crisis that shook the foundations of Greek mathematics!
      </p>

      {/* Toggle buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowProof(false)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            !showProof ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Geometric View
        </button>
        <button
          onClick={() => setShowProof(true)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            showProof ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          Proof by Contradiction
        </button>
      </div>

      {!showProof ? (
        <>
          {/* Approximation control */}
          <div className="mb-4">
            <label className="text-blue-400 text-sm">Approximation steps: {approximationStep}</label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={approximationStep}
              onChange={(e) => setApproximationStep(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Geometric visualization */}
          <div className="bg-dark-900 rounded-lg p-4">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
              {/* Unit square */}
              <rect
                x={ox}
                y={oy - scale}
                width={scale}
                height={scale}
                fill="#3b82f6"
                fillOpacity={0.2}
                stroke="#3b82f6"
                strokeWidth={2}
              />

              {/* Diagonal */}
              <line
                x1={ox}
                y1={oy}
                x2={ox + scale}
                y2={oy - scale}
                stroke="#f97316"
                strokeWidth={3}
              />

              {/* √2 length on x-axis */}
              <line
                x1={ox}
                y1={oy + 30}
                x2={ox + sqrt2 * scale}
                y2={oy + 30}
                stroke="#10b981"
                strokeWidth={3}
              />
              <circle cx={ox + sqrt2 * scale} cy={oy + 30} r={4} fill="#10b981" />

              {/* Labels */}
              <text x={ox + scale / 2} y={oy + 15} fill="#3b82f6" fontSize="12" textAnchor="middle">
                1
              </text>
              <text x={ox - 15} y={oy - scale / 2} fill="#3b82f6" fontSize="12" textAnchor="middle">
                1
              </text>
              <text x={ox + scale / 2 + 15} y={oy - scale / 2 - 10} fill="#f97316" fontSize="12">
                √2
              </text>
              <text x={ox + sqrt2 * scale / 2} y={oy + 50} fill="#10b981" fontSize="12" textAnchor="middle">
                √2 = {sqrt2.toFixed(6)}
              </text>

              {/* Convergent approximations */}
              {convergents.map(([p, q], i) => {
                const approx = p / q;
                const x = ox + approx * scale;
                return (
                  <g key={i}>
                    <line
                      x1={x}
                      y1={oy + 25}
                      x2={x}
                      y2={oy + 35}
                      stroke="#a855f7"
                      strokeWidth={2}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Convergents table */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-dark-400">
                  <th className="p-2">n</th>
                  <th className="p-2">p/q</th>
                  <th className="p-2">Value</th>
                  <th className="p-2">Error</th>
                </tr>
              </thead>
              <tbody>
                {convergents.map(([p, q], i) => (
                  <tr key={i} className="text-dark-300">
                    <td className="p-2 text-center">{i}</td>
                    <td className="p-2 text-center font-mono">{p}/{q}</td>
                    <td className="p-2 text-center font-mono">{(p / q).toFixed(8)}</td>
                    <td className="p-2 text-center font-mono text-orange-400">
                      {Math.abs(p / q - sqrt2).toExponential(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
            <p className="text-emerald-400 font-medium">Continued Fraction</p>
            <p className="text-dark-100 font-mono mt-1">
              √2 = 1 + 1/(2 + 1/(2 + 1/(2 + ...)))
            </p>
            <p className="text-dark-400 text-sm mt-2">
              The rationals 1/1, 3/2, 7/5, 17/12, 41/29, ... get ever closer but never equal √2.
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Proof by contradiction */}
          <div className="bg-dark-900 rounded-lg p-6 space-y-4">
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
              <p className="text-red-400 font-medium">Assumption (for contradiction):</p>
              <p className="text-dark-300 mt-1">
                Suppose √2 = p/q where p and q are integers with no common factors.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
              <p className="text-blue-400 font-medium">Step 1: Square both sides</p>
              <p className="text-dark-100 font-mono mt-1">2 = p²/q²</p>
              <p className="text-dark-100 font-mono">2q² = p²</p>
            </div>

            <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
              <p className="text-orange-400 font-medium">Step 2: p must be even</p>
              <p className="text-dark-300 mt-1">
                Since p² = 2q², p² is even. Therefore p is even (odd² is odd).
              </p>
              <p className="text-dark-100 font-mono mt-1">Let p = 2k for some integer k.</p>
            </div>

            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <p className="text-emerald-400 font-medium">Step 3: Substitute</p>
              <p className="text-dark-100 font-mono mt-1">2q² = (2k)² = 4k²</p>
              <p className="text-dark-100 font-mono">q² = 2k²</p>
              <p className="text-dark-300 mt-1">
                So q² is even, meaning q is also even.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50">
              <p className="text-red-400 font-medium">Contradiction!</p>
              <p className="text-dark-300 mt-1">
                Both p and q are even, so they share factor 2.
                This contradicts our assumption that p/q is in lowest terms.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
              <p className="text-purple-400 font-medium">Conclusion</p>
              <p className="text-dark-300 mt-1">
                Therefore, √2 cannot be written as a ratio of integers.
                √2 is <strong>irrational</strong>.
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600">
            <p className="text-dark-400 text-sm">
              <strong>Historical note:</strong> Legend says the Pythagorean who discovered this
              was drowned at sea. The proof shattered the Pythagorean belief that all is number (i.e., ratio).
            </p>
          </div>
        </>
      )}
    </div>
  );
}
