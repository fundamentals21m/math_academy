/**
 * Distributed Key Generation (DKG) Visualizer
 * Shows multi-party key generation with participant contributions
 */
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Participant {
  id: number;
  label: string;
  color: string;
  x: number;
  y: number;
}

// Pentagon layout for 5 participants
const participants: Participant[] = [
  { id: 1, label: 'P₁', color: '#ef4444', x: 200, y: 40 },
  { id: 2, label: 'P₂', color: '#f59e0b', x: 350, y: 130 },
  { id: 3, label: 'P₃', color: '#10b981', x: 300, y: 300 },
  { id: 4, label: 'P₄', color: '#3b82f6', x: 100, y: 300 },
  { id: 5, label: 'P₅', color: '#8b5cf6', x: 50, y: 130 },
];

const centerX = 200;
const centerY = 180;

type DKGStep =
  | 'idle'
  | 'round1-sample'
  | 'round1-commit'
  | 'round1-broadcast'
  | 'round2-verify'
  | 'round2-send'
  | 'round2-receive'
  | 'compute-share'
  | 'compute-key'
  | 'complete';

const stepDescriptions: Record<DKGStep, string> = {
  idle: 'Click "Start DKG" to begin the protocol',
  'round1-sample': 'Round 1: Each participant samples a random polynomial fᵢ(x)',
  'round1-commit': 'Round 1: Compute Feldman commitments Cᵢ = [aᵢ,ₖ]G for each coefficient',
  'round1-broadcast': 'Round 1: Broadcast commitments and proof of knowledge σᵢ',
  'round2-verify': 'Round 2: Verify all received proofs σⱼ',
  'round2-send': 'Round 2: Send share sᵢ,ⱼ = fᵢ(j) to each participant Pⱼ',
  'round2-receive': 'Round 2: Receive and verify shares from all other participants',
  'compute-share': 'Computing: sᵢ = Σⱼ sⱼ,ᵢ (sum all received shares)',
  'compute-key': 'Computing: Y = Σⱼ Cⱼ,₀ (group public key)',
  complete: 'DKG Complete! Each participant has their share, all share the public key Y',
};

export function DKGVisualizer() {
  const [step, setStep] = useState<DKGStep>('idle');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showShareLines, setShowShareLines] = useState<number[]>([]);
  const [highlightedParticipant, setHighlightedParticipant] = useState<number | null>(null);

  const runStep = useCallback(() => {
    const steps: DKGStep[] = [
      'round1-sample',
      'round1-commit',
      'round1-broadcast',
      'round2-verify',
      'round2-send',
      'round2-receive',
      'compute-share',
      'compute-key',
      'complete',
    ];

    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    } else {
      setIsPlaying(false);
    }
  }, [step]);

  useEffect(() => {
    if (isPlaying && step !== 'complete') {
      const timer = setTimeout(runStep, 1500);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, step, runStep]);

  const startDKG = () => {
    setStep('round1-sample');
    setIsPlaying(true);
    setShowShareLines([]);
  };

  const resetDKG = () => {
    setStep('idle');
    setIsPlaying(false);
    setShowShareLines([]);
    setHighlightedParticipant(null);
  };

  const togglePlay = () => {
    if (step === 'complete' || step === 'idle') {
      startDKG();
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Animation variants
  const broadcastVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.5, 1],
      opacity: [0, 0.8, 0],
      transition: { duration: 1.2 },
    },
  };

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-indigo-400">
          Distributed Key Generation (DKG)
        </h4>
        <div className="flex gap-2">
          <button
            onClick={togglePlay}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isPlaying
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
            }`}
          >
            {step === 'idle' || step === 'complete'
              ? 'Start DKG'
              : isPlaying
                ? 'Pause'
                : 'Resume'}
          </button>
          <button
            onClick={resetDKG}
            className="px-4 py-2 bg-dark-800 text-dark-300 rounded-lg text-sm font-medium hover:bg-dark-700 transition-colors border border-dark-700"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Step indicator */}
      <div className="mb-4 p-3 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <p className="text-sm text-dark-200">{stepDescriptions[step]}</p>
      </div>

      {/* SVG Visualization */}
      <svg viewBox="0 0 400 360" className="w-full bg-dark-950 rounded-lg" style={{ maxHeight: '360px' }}>
        {/* Center group key */}
        <AnimatePresence>
          {(step === 'compute-key' || step === 'complete') && (
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <circle
                cx={centerX}
                cy={centerY}
                r={35}
                fill="#fbbf24"
                opacity={0.2}
              />
              <circle
                cx={centerX}
                cy={centerY}
                r={25}
                fill="#fbbf24"
                stroke="#fef3c7"
                strokeWidth={2}
              />
              <text
                x={centerX}
                y={centerY + 5}
                textAnchor="middle"
                fill="#1f2937"
                fontSize={14}
                fontWeight="bold"
              >
                Y
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Share distribution lines (Round 2) */}
        <AnimatePresence>
          {(step === 'round2-send' || step === 'round2-receive') &&
            participants.map((from) =>
              participants
                .filter((to) => to.id !== from.id)
                .map((to) => (
                  <motion.line
                    key={`share-${from.id}-${to.id}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={from.color}
                    strokeWidth={1.5}
                    strokeDasharray="4,4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, delay: from.id * 0.1 }}
                  />
                ))
            )}
        </AnimatePresence>

        {/* Lines to center (Key computation) */}
        <AnimatePresence>
          {step === 'compute-key' &&
            participants.map((p) => (
              <motion.line
                key={`key-${p.id}`}
                x1={p.x}
                y1={p.y}
                x2={centerX}
                y2={centerY}
                stroke={p.color}
                strokeWidth={2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: p.id * 0.1 }}
              />
            ))}
        </AnimatePresence>

        {/* Participants */}
        {participants.map((p) => (
          <motion.g
            key={p.id}
            onMouseEnter={() => setHighlightedParticipant(p.id)}
            onMouseLeave={() => setHighlightedParticipant(null)}
            style={{ cursor: 'pointer' }}
          >
            {/* Broadcast animation (Round 1) */}
            <AnimatePresence>
              {step === 'round1-broadcast' && (
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r={60}
                  fill="none"
                  stroke={p.color}
                  strokeWidth={2}
                  variants={broadcastVariants}
                  initial="hidden"
                  animate="visible"
                />
              )}
            </AnimatePresence>

            {/* Participant circle */}
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={28}
              fill={p.color}
              stroke={highlightedParticipant === p.id ? 'white' : 'transparent'}
              strokeWidth={3}
              animate={{
                scale:
                  step === 'round1-sample' ||
                  step === 'round1-commit' ||
                  step === 'compute-share'
                    ? [1, 1.1, 1]
                    : 1,
              }}
              transition={{ duration: 0.5, repeat: step === 'round1-sample' ? Infinity : 0 }}
            />

            {/* Participant label */}
            <text
              x={p.x}
              y={p.y + 5}
              textAnchor="middle"
              fill="white"
              fontSize={14}
              fontWeight="bold"
            >
              {p.label}
            </text>

            {/* Polynomial indicator (Round 1 Sample) */}
            <AnimatePresence>
              {step === 'round1-sample' && (
                <motion.text
                  x={p.x}
                  y={p.y - 40}
                  textAnchor="middle"
                  fill={p.color}
                  fontSize={10}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: -40 }}
                  exit={{ opacity: 0 }}
                >
                  f{p.id}(x)
                </motion.text>
              )}
            </AnimatePresence>

            {/* Commitment indicator (Round 1 Commit) */}
            <AnimatePresence>
              {step === 'round1-commit' && (
                <motion.text
                  x={p.x}
                  y={p.y - 40}
                  textAnchor="middle"
                  fill={p.color}
                  fontSize={10}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  C{p.id}
                </motion.text>
              )}
            </AnimatePresence>

            {/* Share indicator (Compute Share) */}
            <AnimatePresence>
              {step === 'compute-share' && (
                <motion.text
                  x={p.x}
                  y={p.y + 45}
                  textAnchor="middle"
                  fill={p.color}
                  fontSize={11}
                  fontWeight="bold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  s{p.id} ✓
                </motion.text>
              )}
            </AnimatePresence>

            {/* Verification share (Complete) */}
            <AnimatePresence>
              {step === 'complete' && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <text
                    x={p.x}
                    y={p.y + 45}
                    textAnchor="middle"
                    fill={p.color}
                    fontSize={10}
                  >
                    Y{p.id} = [s{p.id}]G
                  </text>
                </motion.g>
              )}
            </AnimatePresence>
          </motion.g>
        ))}

        {/* Round indicator */}
        <text x={10} y={25} fill="#6b7280" fontSize={12}>
          {step.startsWith('round1')
            ? 'Round 1'
            : step.startsWith('round2')
              ? 'Round 2'
              : step.startsWith('compute')
                ? 'Computation'
                : step === 'complete'
                  ? 'Complete'
                  : ''}
        </text>
      </svg>

      {/* Round breakdown */}
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div
          className={`p-3 rounded-lg border ${
            step.startsWith('round1')
              ? 'bg-violet-500/10 border-violet-500/50'
              : 'bg-dark-800/50 border-dark-700/50'
          }`}
        >
          <h5 className="text-sm font-semibold text-violet-400 mb-2">Round 1: Commitments</h5>
          <ul className="text-xs text-dark-300 space-y-1">
            <li>• Sample random polynomial fᵢ(x)</li>
            <li>• Compute Feldman commitments</li>
            <li>• Broadcast with proof of knowledge</li>
          </ul>
        </div>
        <div
          className={`p-3 rounded-lg border ${
            step.startsWith('round2')
              ? 'bg-emerald-500/10 border-emerald-500/50'
              : 'bg-dark-800/50 border-dark-700/50'
          }`}
        >
          <h5 className="text-sm font-semibold text-emerald-400 mb-2">Round 2: Shares</h5>
          <ul className="text-xs text-dark-300 space-y-1">
            <li>• Verify received proofs</li>
            <li>• Send share fᵢ(j) to each Pⱼ</li>
            <li>• Verify received shares</li>
          </ul>
        </div>
      </div>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-violet-500/10 rounded-lg border border-violet-500/30">
        <p className="text-sm text-violet-200">
          <strong>Key Insight:</strong> No single participant ever knows the complete secret
          s = Σᵢ aᵢ,₀. Each only knows their polynomial fᵢ(x) and their final share sᵢ.
          The group key Y is computed from public commitments without revealing the secret.
        </p>
      </div>
    </div>
  );
}
