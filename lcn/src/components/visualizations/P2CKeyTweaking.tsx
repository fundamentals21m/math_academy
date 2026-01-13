import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

type Step = 0 | 1 | 2 | 3;

/**
 * Interactive visualization of Pay-to-Contract key tweaking.
 * Shows the transformation P → P + H(P,m)·G used in Bitcoin Taproot.
 */
export function P2CKeyTweaking({ className = '' }: Props) {
  const [step, setStep] = useState<Step>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('script_root');

  // Auto-play through steps
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (step < 3) {
        setStep((step + 1) as Step);
      } else {
        setIsPlaying(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const stepDescriptions = [
    {
      title: 'Original Public Key P',
      description: 'Start with an original public key P = sk·G on the elliptic curve.',
      color: '#f97316',
    },
    {
      title: 'Compute Hash t = H(P, m)',
      description: 'Hash the public key P together with the message m to get tweak scalar t.',
      color: '#8b5cf6',
    },
    {
      title: 'Compute Tweak Point t·G',
      description: 'Multiply the generator G by the tweak scalar t to get a point on the curve.',
      color: '#06b6d4',
    },
    {
      title: 'Final Key Q = P + t·G',
      description: 'Add the tweak point to the original key to get the committed public key Q.',
      color: '#10b981',
    },
  ];

  // SVG dimensions
  const width = 500;
  const height = 320;
  const centerX = width / 2;
  const centerY = height / 2;

  // Simulated elliptic curve point positions
  const points = {
    G: { x: centerX - 150, y: centerY + 50, label: 'G' },
    P: { x: centerX - 80, y: centerY - 40, label: 'P' },
    tG: { x: centerX + 60, y: centerY + 30, label: 't·G' },
    Q: { x: centerX + 120, y: centerY - 60, label: 'Q' },
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">
        Pay-to-Contract Key Tweaking
      </h3>
      <p className="text-dark-400 text-sm mb-4">
        See how Taproot commits to a message by tweaking an elliptic curve public key.
      </p>

      {/* Message input */}
      <div className="mb-4">
        <label className="block text-dark-300 text-sm mb-2">
          Message to commit: <span className="text-purple-400 font-mono">{message}</span>
        </label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 font-mono text-sm focus:outline-none focus:border-primary-500"
          placeholder="Enter message..."
        />
      </div>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStep(Math.max(0, step - 1) as Step)}
          disabled={step === 0}
          className="px-3 py-1.5 rounded-lg bg-dark-600 hover:bg-dark-500 disabled:opacity-30 text-dark-200 text-sm"
        >
          ← Prev
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (isPlaying) {
              setIsPlaying(false);
            } else {
              setStep(0);
              setIsPlaying(true);
            }
          }}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
            isPlaying
              ? 'bg-amber-500 hover:bg-amber-600 text-white'
              : 'bg-primary-500 hover:bg-primary-600 text-white'
          }`}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStep(Math.min(3, step + 1) as Step)}
          disabled={step === 3}
          className="px-3 py-1.5 rounded-lg bg-dark-600 hover:bg-dark-500 disabled:opacity-30 text-dark-200 text-sm"
        >
          Next →
        </motion.button>
        <div className="flex-1" />
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((s) => (
            <button
              key={s}
              onClick={() => setStep(s as Step)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                step === s
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
              }`}
            >
              {s + 1}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Visualization */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto bg-dark-900/50 rounded-xl mb-4"
      >
        {/* Grid */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={50 + i * 50}
            y1="20"
            x2={50 + i * 50}
            y2={height - 20}
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="2,4"
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="20"
            y1={30 + i * 50}
            x2={width - 20}
            y2={30 + i * 50}
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="2,4"
          />
        ))}

        {/* Elliptic curve hint */}
        <path
          d={`M 50 ${centerY + 80} Q ${centerX} ${centerY - 100} ${width - 50} ${centerY + 80}`}
          fill="none"
          stroke="#4b5563"
          strokeWidth="2"
          strokeDasharray="8,4"
        />
        <text x={width - 80} y={centerY + 100} fill="#6b7280" fontSize="10">
          Elliptic Curve
        </text>

        {/* Generator G - always visible */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <circle cx={points.G.x} cy={points.G.y} r="8" fill="#6b7280" />
          <text x={points.G.x} y={points.G.y + 25} fill="#9ca3af" fontSize="12" textAnchor="middle">
            G (generator)
          </text>
        </motion.g>

        {/* Step 0: Original P */}
        <AnimatePresence>
          {step >= 0 && (
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <circle cx={points.P.x} cy={points.P.y} r="10" fill="#f97316" />
              <text x={points.P.x} y={points.P.y - 18} fill="#f97316" fontSize="12" fontWeight="bold" textAnchor="middle">
                P = sk·G
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 1: Hash computation */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hash box */}
              <rect x={centerX - 60} y="20" width="120" height="40" rx="8" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
              <text x={centerX} y="38" fill="#8b5cf6" fontSize="10" textAnchor="middle">
                H(P, "{message.slice(0, 10)}{message.length > 10 ? '...' : ''}")
              </text>
              <text x={centerX} y="52" fill="#c4b5fd" fontSize="11" fontWeight="bold" textAnchor="middle">
                = t
              </text>

              {/* Arrow from P to hash */}
              <motion.path
                d={`M ${points.P.x} ${points.P.y - 30} Q ${points.P.x + 30} 45 ${centerX - 60} 40`}
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2"
                strokeDasharray="4,2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 2: Tweak point t·G */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <circle cx={points.tG.x} cy={points.tG.y} r="10" fill="#06b6d4" />
              <text x={points.tG.x} y={points.tG.y + 25} fill="#06b6d4" fontSize="12" fontWeight="bold" textAnchor="middle">
                t·G
              </text>

              {/* Arrow from G to t·G */}
              <motion.line
                x1={points.G.x + 10}
                y1={points.G.y}
                x2={points.tG.x - 12}
                y2={points.tG.y}
                stroke="#06b6d4"
                strokeWidth="2"
                markerEnd="url(#arrowCyan)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 3: Final point Q */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <circle cx={points.Q.x} cy={points.Q.y} r="12" fill="#10b981" stroke="#10b981" strokeWidth="3" />
              <text x={points.Q.x} y={points.Q.y - 20} fill="#10b981" fontSize="13" fontWeight="bold" textAnchor="middle">
                Q = P + t·G
              </text>

              {/* Arrows showing addition */}
              <motion.path
                d={`M ${points.P.x + 10} ${points.P.y} Q ${(points.P.x + points.Q.x) / 2} ${points.P.y - 40} ${points.Q.x - 10} ${points.Q.y}`}
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.path
                d={`M ${points.tG.x} ${points.tG.y - 10} Q ${(points.tG.x + points.Q.x) / 2} ${points.tG.y - 50} ${points.Q.x} ${points.Q.y + 10}`}
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray="4,2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Arrow markers */}
        <defs>
          <marker id="arrowCyan" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
          </marker>
        </defs>
      </svg>

      {/* Step description */}
      <motion.div
        key={step}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-4 rounded-xl border"
        style={{
          backgroundColor: `${stepDescriptions[step].color}10`,
          borderColor: `${stepDescriptions[step].color}30`,
        }}
      >
        <h4 className="font-bold mb-1" style={{ color: stepDescriptions[step].color }}>
          Step {step + 1}: {stepDescriptions[step].title}
        </h4>
        <p className="text-dark-300 text-sm">{stepDescriptions[step].description}</p>
      </motion.div>

      {/* Taproot context */}
      <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
        <h4 className="text-amber-400 font-medium text-sm mb-1">Bitcoin Taproot Application</h4>
        <p className="text-dark-400 text-xs">
          In Taproot, the message <code className="text-purple-400">m</code> is the Merkle root of a script tree.
          The tweaked key <code className="text-emerald-400">Q</code> can be spent either by signing with
          the tweaked secret key <code className="text-orange-400">(sk + t)</code>, or by revealing the script and proving
          it hashes to <code className="text-purple-400">m</code>.
        </p>
      </div>
    </div>
  );
}
