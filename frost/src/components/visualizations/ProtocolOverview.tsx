/**
 * FROST Protocol Overview Visualization
 * Shows the three phases: DKG → Preprocessing → Signing
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Phase {
  id: string;
  title: string;
  subtitle: string;
  rounds: string;
  color: string;
  inputs: string[];
  outputs: string[];
  description: string;
}

const phases: Phase[] = [
  {
    id: 'dkg',
    title: 'DKG',
    subtitle: 'Key Generation',
    rounds: '2 rounds',
    color: '#8b5cf6', // violet
    inputs: ['Security parameter', 'Participant identities', 'Threshold t, n'],
    outputs: ['Group public key Y', 'Individual shares sᵢ', 'Verification shares Yᵢ'],
    description:
      'Distributed Key Generation creates the shared secret without any single party knowing it. Each participant contributes randomness, and Feldman commitments enable verification.',
  },
  {
    id: 'preprocessing',
    title: 'Preprocessing',
    subtitle: 'Commitment Generation',
    rounds: '0 rounds',
    color: '#10b981', // emerald
    inputs: ['Individual shares sᵢ', 'Random seed'],
    outputs: ['Commitment pairs (Dᵢ, Eᵢ)', 'Private nonces (dᵢ, eᵢ)'],
    description:
      'Non-interactive phase where participants generate batches of commitment pairs. Can be done offline during idle time. Each pair is used exactly once for signing.',
  },
  {
    id: 'signing',
    title: 'Signing',
    subtitle: 'Single Round!',
    rounds: '1 round',
    color: '#3b82f6', // blue
    inputs: ['Message m', 'Signing set S', 'Preprocessed commitments'],
    outputs: ['Signature (R, z)', 'Standard Schnorr format'],
    description:
      'The magic of FROST: signing completes in a single communication round! Coordinator collects commitments, signers compute shares, and the final signature is aggregated.',
  },
];

export function ProtocolOverview() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [animationStep, setAnimationStep] = useState(0);

  const handlePhaseClick = (phaseId: string) => {
    setSelectedPhase(selectedPhase === phaseId ? null : phaseId);
  };

  const runAnimation = () => {
    setAnimationStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setAnimationStep(step);
      if (step >= 4) clearInterval(interval);
    }, 800);
  };

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg font-semibold text-indigo-400">
          FROST Protocol Overview
        </h4>
        <button
          onClick={runAnimation}
          className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-500/30 transition-colors border border-indigo-500/50"
        >
          Animate Flow
        </button>
      </div>

      {/* Timeline visualization */}
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-dark-700 -translate-y-1/2 mx-8" />

        {/* Animated flow */}
        <motion.div
          className="absolute top-1/2 left-8 h-1 bg-gradient-to-r from-violet-500 via-emerald-500 to-blue-500 -translate-y-1/2"
          initial={{ width: 0 }}
          animate={{
            width:
              animationStep >= 3
                ? 'calc(100% - 4rem)'
                : animationStep >= 2
                  ? '66%'
                  : animationStep >= 1
                    ? '33%'
                    : 0,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Phase boxes */}
        <div className="relative flex justify-between items-center px-4">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              className="relative z-10 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: animationStep > index ? 1 : 0.5,
                y: 0,
                scale: selectedPhase === phase.id ? 1.05 : 1,
              }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
              onClick={() => handlePhaseClick(phase.id)}
            >
              {/* Phase card */}
              <div
                className={`w-36 p-4 rounded-xl border-2 transition-all ${
                  selectedPhase === phase.id
                    ? 'bg-dark-800 shadow-lg'
                    : 'bg-dark-900 hover:bg-dark-800'
                }`}
                style={{
                  borderColor:
                    selectedPhase === phase.id ? phase.color : '#374151',
                }}
              >
                {/* Phase number */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 mx-auto"
                  style={{ backgroundColor: phase.color }}
                >
                  {index + 1}
                </div>

                {/* Title */}
                <h5 className="text-center font-semibold text-dark-100">
                  {phase.title}
                </h5>
                <p
                  className="text-center text-xs mt-1"
                  style={{ color: phase.color }}
                >
                  {phase.subtitle}
                </p>

                {/* Rounds badge */}
                <div className="mt-2 text-center">
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                    style={{
                      backgroundColor: `${phase.color}20`,
                      color: phase.color,
                    }}
                  >
                    {phase.rounds}
                  </span>
                </div>
              </div>

              {/* Arrow to next phase */}
              {index < phases.length - 1 && (
                <motion.div
                  className="absolute top-1/2 -right-8 -translate-y-1/2"
                  animate={{
                    opacity: animationStep > index ? 1 : 0.3,
                    x: animationStep > index ? [0, 4, 0] : 0,
                  }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={phase.color}
                    strokeWidth="2"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Phase details panel */}
      <AnimatePresence mode="wait">
        {selectedPhase && (
          <motion.div
            key={selectedPhase}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 overflow-hidden"
          >
            {phases
              .filter((p) => p.id === selectedPhase)
              .map((phase) => (
                <div
                  key={phase.id}
                  className="p-4 rounded-xl border"
                  style={{
                    backgroundColor: `${phase.color}10`,
                    borderColor: `${phase.color}40`,
                  }}
                >
                  <p className="text-dark-200 mb-4">{phase.description}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Inputs */}
                    <div className="p-3 bg-dark-900/50 rounded-lg">
                      <h6 className="text-sm font-semibold text-dark-300 mb-2 flex items-center gap-2">
                        <span className="text-rose-400">→</span> Inputs
                      </h6>
                      <ul className="space-y-1">
                        {phase.inputs.map((input, i) => (
                          <li
                            key={i}
                            className="text-sm text-dark-300 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                            {input}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outputs */}
                    <div className="p-3 bg-dark-900/50 rounded-lg">
                      <h6 className="text-sm font-semibold text-dark-300 mb-2 flex items-center gap-2">
                        <span className="text-emerald-400">←</span> Outputs
                      </h6>
                      <ul className="space-y-1">
                        {phase.outputs.map((output, i) => (
                          <li
                            key={i}
                            className="text-sm text-dark-300 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {output}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Efficiency comparison */}
      <div className="mt-6 p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
        <h5 className="text-sm font-semibold text-dark-200 mb-3">
          Communication Rounds Comparison
        </h5>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-violet-400">2</div>
            <div className="text-xs text-dark-400">DKG (one-time)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">0</div>
            <div className="text-xs text-dark-400">Preprocessing</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">1</div>
            <div className="text-xs text-dark-400">Each signature</div>
          </div>
        </div>
        <p className="text-center text-sm text-amber-400 mt-3">
          vs. 3+ rounds for traditional threshold schemes
        </p>
      </div>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
        <p className="text-sm text-blue-200">
          <strong>Key Insight:</strong> FROST achieves single-round signing by moving
          commitment generation to the preprocessing phase. Participants generate batches
          of (D, E) pairs in advance, enabling instant response when signing is needed.
        </p>
      </div>
    </div>
  );
}
