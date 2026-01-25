/**
 * Interactive Isomorphism Theorems Visualizer
 * Demonstrates the First, Second, and Third Isomorphism Theorems
 */
import { useState } from 'react';
import { motion } from 'framer-motion';

type TheoremType = 'first' | 'second' | 'third';

export function IsomorphismTheoremsVisualizer() {
  const [selectedTheorem, setSelectedTheorem] = useState<TheoremType>('first');

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <h4 className="text-lg font-semibold text-indigo-400 mb-4">
        Isomorphism Theorems Visualizer
      </h4>

      {/* Theorem selector */}
      <div className="mb-4">
        <label className="block text-sm text-dark-300 mb-2">Select Theorem:</label>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedTheorem('first')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedTheorem === 'first'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
            }`}
          >
            First (Fundamental)
          </button>
          <button
            onClick={() => setSelectedTheorem('second')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedTheorem === 'second'
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
            }`}
          >
            Second (Diamond)
          </button>
          <button
            onClick={() => setSelectedTheorem('third')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedTheorem === 'third'
                ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:bg-dark-700'
            }`}
          >
            Third (Quotient)
          </button>
        </div>
      </div>

      {/* First Isomorphism Theorem */}
      {selectedTheorem === 'first' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
            <p className="text-lg font-semibold text-emerald-400 mb-2">
              First Isomorphism Theorem
            </p>
            <p className="text-sm text-dark-200 font-mono">
              If φ: G → H is a homomorphism, then G/ker(φ) ≅ im(φ)
            </p>
          </div>

          <svg viewBox="0 0 400 250" className="w-full bg-dark-950 rounded-lg">
            {/* G ellipse */}
            <ellipse cx={80} cy={125} rx={60} ry={80} fill="#10b98120" stroke="#10b981" strokeWidth={2} />
            <text x={80} y={40} textAnchor="middle" fill="#10b981" fontSize={16} fontWeight="bold">G</text>

            {/* ker(φ) inside G */}
            <ellipse cx={80} cy={140} rx={30} ry={35} fill="#ef444440" stroke="#ef4444" strokeWidth={2} />
            <text x={80} y={145} textAnchor="middle" fill="#ef4444" fontSize={12}>ker(φ)</text>

            {/* H ellipse */}
            <ellipse cx={320} cy={125} rx={60} ry={80} fill="#3b82f620" stroke="#3b82f6" strokeWidth={2} />
            <text x={320} y={40} textAnchor="middle" fill="#3b82f6" fontSize={16} fontWeight="bold">H</text>

            {/* im(φ) inside H */}
            <ellipse cx={320} cy={125} rx={40} ry={50} fill="#22c55e40" stroke="#22c55e" strokeWidth={2} />
            <text x={320} y={130} textAnchor="middle" fill="#22c55e" fontSize={12}>im(φ)</text>

            {/* Arrow φ */}
            <defs>
              <marker id="arrowhead-first" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24" />
              </marker>
            </defs>
            <path d="M 145 100 Q 200 60 255 100" fill="none" stroke="#fbbf24" strokeWidth={2} markerEnd="url(#arrowhead-first)" />
            <text x={200} y={55} textAnchor="middle" fill="#fbbf24" fontSize={14}>φ</text>

            {/* Isomorphism arrow */}
            <path d="M 145 180 Q 200 220 255 180" fill="none" stroke="#a855f7" strokeWidth={2} strokeDasharray="5,5" markerEnd="url(#arrowhead-first)" />
            <text x={200} y={235} textAnchor="middle" fill="#a855f7" fontSize={12}>G/ker(φ) ≅ im(φ)</text>
          </svg>

          <div className="p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
            <p className="text-sm text-dark-300">
              <strong className="text-emerald-400">Example:</strong> Let φ: ℤ → ℤ/nℤ be the reduction mod n.
            </p>
            <p className="text-sm text-dark-300 mt-1">
              • ker(φ) = nℤ (multiples of n)
            </p>
            <p className="text-sm text-dark-300">
              • im(φ) = ℤ/nℤ (surjective)
            </p>
            <p className="text-sm text-dark-300">
              • Thus ℤ/nℤ ≅ ℤ/nℤ ✓
            </p>
          </div>
        </motion.div>
      )}

      {/* Second Isomorphism Theorem */}
      {selectedTheorem === 'second' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <p className="text-lg font-semibold text-blue-400 mb-2">
              Second Isomorphism Theorem (Diamond)
            </p>
            <p className="text-sm text-dark-200 font-mono">
              If H ≤ G and N ⊴ G, then HN/N ≅ H/(H ∩ N)
            </p>
          </div>

          <svg viewBox="0 0 400 280" className="w-full bg-dark-950 rounded-lg">
            {/* Diamond lattice structure */}
            {/* HN at top */}
            <circle cx={200} cy={40} r={25} fill="#a855f720" stroke="#a855f7" strokeWidth={2} />
            <text x={200} y={45} textAnchor="middle" fill="#a855f7" fontSize={14} fontWeight="bold">HN</text>

            {/* H on left */}
            <circle cx={100} cy={120} r={25} fill="#3b82f620" stroke="#3b82f6" strokeWidth={2} />
            <text x={100} y={125} textAnchor="middle" fill="#3b82f6" fontSize={14} fontWeight="bold">H</text>

            {/* N on right */}
            <circle cx={300} cy={120} r={25} fill="#ef444420" stroke="#ef4444" strokeWidth={2} />
            <text x={300} y={125} textAnchor="middle" fill="#ef4444" fontSize={14} fontWeight="bold">N</text>
            <text x={340} y={125} fill="#ef4444" fontSize={10}>⊴ G</text>

            {/* H ∩ N at bottom */}
            <circle cx={200} cy={200} r={25} fill="#22c55e20" stroke="#22c55e" strokeWidth={2} />
            <text x={200} y={205} textAnchor="middle" fill="#22c55e" fontSize={12} fontWeight="bold">H∩N</text>

            {/* Connecting lines */}
            <line x1={175} y1={55} x2={125} y2={100} stroke="#6b7280" strokeWidth={1} />
            <line x1={225} y1={55} x2={275} y2={100} stroke="#6b7280" strokeWidth={1} />
            <line x1={100} y1={145} x2={175} y2={180} stroke="#6b7280" strokeWidth={1} />
            <line x1={300} y1={145} x2={225} y2={180} stroke="#6b7280" strokeWidth={1} />

            {/* Isomorphism annotation */}
            <text x={200} y={260} textAnchor="middle" fill="#fbbf24" fontSize={14} fontWeight="bold">
              HN/N ≅ H/(H∩N)
            </text>

            {/* Index labels */}
            <text x={55} y={85} fill="#6b7280" fontSize={10}>[HN:H]</text>
            <text x={320} y={85} fill="#6b7280" fontSize={10}>[HN:N]</text>
            <text x={130} y={175} fill="#6b7280" fontSize={10}>[H:H∩N]</text>
            <text x={250} y={175} fill="#6b7280" fontSize={10}>[N:H∩N]</text>
          </svg>

          <div className="p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
            <p className="text-sm text-dark-300">
              <strong className="text-blue-400">Example:</strong> G = S₄, H = S₃ (fixing 4), N = V₄ (Klein four-group)
            </p>
            <p className="text-sm text-dark-300 mt-1">
              • H ∩ N = {'{e}'} (trivial)
            </p>
            <p className="text-sm text-dark-300">
              • HN = S₄ (since |HN| = |H||N|/|H∩N| = 24)
            </p>
            <p className="text-sm text-dark-300">
              • S₄/V₄ ≅ S₃/{'{e}'} = S₃
            </p>
          </div>
        </motion.div>
      )}

      {/* Third Isomorphism Theorem */}
      {selectedTheorem === 'third' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="p-4 bg-violet-500/10 rounded-lg border border-violet-500/30">
            <p className="text-lg font-semibold text-violet-400 mb-2">
              Third Isomorphism Theorem (Quotient of Quotients)
            </p>
            <p className="text-sm text-dark-200 font-mono">
              If N ⊴ K ⊴ G, then (G/N)/(K/N) ≅ G/K
            </p>
          </div>

          <svg viewBox="0 0 400 250" className="w-full bg-dark-950 rounded-lg">
            {/* Tower G > K > N */}
            {/* G */}
            <rect x={50} y={30} width={80} height={180} rx={8} fill="#3b82f610" stroke="#3b82f6" strokeWidth={2} />
            <text x={90} y={25} textAnchor="middle" fill="#3b82f6" fontSize={14} fontWeight="bold">G</text>

            {/* K inside G */}
            <rect x={60} y={80} width={60} height={120} rx={6} fill="#a855f720" stroke="#a855f7" strokeWidth={2} />
            <text x={90} y={75} textAnchor="middle" fill="#a855f7" fontSize={12}>K ⊴ G</text>

            {/* N inside K */}
            <rect x={70} y={130} width={40} height={60} rx={4} fill="#ef444430" stroke="#ef4444" strokeWidth={2} />
            <text x={90} y={165} textAnchor="middle" fill="#ef4444" fontSize={11}>N</text>

            {/* Arrow to quotients */}
            <defs>
              <marker id="arrowhead-third" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24" />
              </marker>
            </defs>
            <path d="M 140 120 L 180 120" stroke="#fbbf24" strokeWidth={2} markerEnd="url(#arrowhead-third)" />
            <text x={160} y={110} textAnchor="middle" fill="#fbbf24" fontSize={10}>mod N</text>

            {/* G/N */}
            <rect x={200} y={50} width={80} height={140} rx={8} fill="#22c55e10" stroke="#22c55e" strokeWidth={2} />
            <text x={240} y={45} textAnchor="middle" fill="#22c55e" fontSize={14} fontWeight="bold">G/N</text>

            {/* K/N inside G/N */}
            <rect x={210} y={100} width={60} height={80} rx={6} fill="#fbbf2430" stroke="#fbbf24" strokeWidth={2} />
            <text x={240} y={145} textAnchor="middle" fill="#fbbf24" fontSize={11}>K/N</text>

            {/* Final quotient */}
            <path d="M 290 120 L 330 120" stroke="#10b981" strokeWidth={2} markerEnd="url(#arrowhead-third)" />

            {/* (G/N)/(K/N) = G/K */}
            <rect x={340} y={80} width={50} height={80} rx={6} fill="#10b98130" stroke="#10b981" strokeWidth={2} />
            <text x={365} y={125} textAnchor="middle" fill="#10b981" fontSize={11}>G/K</text>

            {/* Equation */}
            <text x={200} y={230} textAnchor="middle" fill="#e5e7eb" fontSize={12}>
              (G/N) / (K/N) ≅ G/K
            </text>
          </svg>

          <div className="p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
            <p className="text-sm text-dark-300">
              <strong className="text-violet-400">Example:</strong> G = ℤ, K = 6ℤ, N = 12ℤ
            </p>
            <p className="text-sm text-dark-300 mt-1">
              • G/N = ℤ/12ℤ
            </p>
            <p className="text-sm text-dark-300">
              • K/N = 6ℤ/12ℤ ≅ ℤ/2ℤ (subgroup of order 2 in ℤ/12ℤ)
            </p>
            <p className="text-sm text-dark-300">
              • (ℤ/12ℤ)/(ℤ/2ℤ) ≅ ℤ/6ℤ = G/K ✓
            </p>
          </div>
        </motion.div>
      )}

      {/* Key insight */}
      <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
        <p className="text-sm text-indigo-200">
          <strong>Key Insight:</strong> These theorems describe how quotient groups interact.
          The first theorem identifies quotients with images, the second relates different quotients,
          and the third shows how nested quotients simplify.
        </p>
      </div>
    </div>
  );
}
