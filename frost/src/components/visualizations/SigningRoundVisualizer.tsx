/**
 * FROST Signing Round Visualizer
 * Shows the single-round signing process step by step
 */
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SigningStep {
  id: number;
  title: string;
  description: string;
  actor: 'coordinator' | 'signers' | 'all';
  formula?: string;
}

const signingSteps: SigningStep[] = [
  {
    id: 1,
    title: 'Select Commitments',
    description: 'Coordinator selects next unused commitment (Dᵢ, Eᵢ) from each signer',
    actor: 'coordinator',
  },
  {
    id: 2,
    title: 'Broadcast Data',
    description: 'Coordinator sends (B, m) to all signers, where B = list of commitments',
    actor: 'coordinator',
    formula: 'B = [(1, D₁, E₁), (2, D₂, E₂), ...]',
  },
  {
    id: 3,
    title: 'Compute Binding',
    description: 'Each signer computes their binding factor ρᵢ from the hash',
    actor: 'signers',
    formula: 'ρᵢ = H₁(i, m, B)',
  },
  {
    id: 4,
    title: 'Compute Nonce Point',
    description: 'Each signer computes their individual nonce commitment Rᵢ',
    actor: 'signers',
    formula: 'Rᵢ = Dᵢ + [ρᵢ]Eᵢ',
  },
  {
    id: 5,
    title: 'Aggregate R',
    description: 'Compute the group nonce commitment R by summing all Rᵢ',
    actor: 'all',
    formula: 'R = ΣRᵢ',
  },
  {
    id: 6,
    title: 'Compute Challenge',
    description: 'Compute the Schnorr challenge c from the group nonce, key, and message',
    actor: 'all',
    formula: 'c = H₂(R, Y, m)',
  },
  {
    id: 7,
    title: 'Compute Signature Share',
    description: 'Each signer computes their signature share zᵢ',
    actor: 'signers',
    formula: 'zᵢ = dᵢ + eᵢ·ρᵢ + λᵢ·sᵢ·c',
  },
  {
    id: 8,
    title: 'Return Shares',
    description: 'Each signer sends their share zᵢ back to the coordinator',
    actor: 'signers',
  },
  {
    id: 9,
    title: 'Aggregate Signature',
    description: 'Coordinator sums all shares to produce final signature (R, z)',
    actor: 'coordinator',
    formula: 'z = Σzᵢ → Signature: (R, z)',
  },
];

const signers = [
  { id: 1, label: 'Signer 1', color: '#ef4444', x: 100 },
  { id: 2, label: 'Signer 2', color: '#10b981', x: 200 },
  { id: 3, label: 'Signer 3', color: '#3b82f6', x: 300 },
];

export function SigningRoundVisualizer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const advanceStep = useCallback(() => {
    if (currentStep < signingSteps.length) {
      setCurrentStep((s) => s + 1);
    } else {
      setIsPlaying(false);
    }
  }, [currentStep]);

  useEffect(() => {
    if (isPlaying && currentStep < signingSteps.length) {
      const timer = setTimeout(advanceStep, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep, advanceStep]);

  const startAnimation = () => {
    setCurrentStep(1);
    setIsPlaying(true);
  };

  const reset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const stepBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const stepForward = () => {
    if (currentStep < signingSteps.length) setCurrentStep(currentStep + 1);
  };

  const currentStepData = signingSteps[currentStep - 1];

  return (
    <div className="p-4 bg-dark-900/80 rounded-xl border border-dark-700/50">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-indigo-400">
          FROST Signing (Single Round)
        </h4>
        <div className="flex gap-2">
          <button
            onClick={isPlaying ? () => setIsPlaying(false) : startAnimation}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isPlaying
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
            }`}
          >
            {currentStep === 0
              ? 'Start Signing'
              : isPlaying
                ? 'Pause'
                : currentStep >= signingSteps.length
                  ? 'Restart'
                  : 'Resume'}
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-dark-800 text-dark-300 rounded-lg text-sm font-medium hover:bg-dark-700 transition-colors border border-dark-700"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Step controls */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          onClick={stepBack}
          disabled={currentStep <= 1}
          className="p-2 rounded-lg bg-dark-800 text-dark-300 hover:bg-dark-700 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="flex gap-1">
          {signingSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                currentStep === step.id
                  ? 'bg-indigo-500 text-white scale-110'
                  : currentStep > step.id
                    ? 'bg-emerald-500/50 text-emerald-200'
                    : 'bg-dark-700 text-dark-400'
              }`}
            >
              {step.id}
            </button>
          ))}
        </div>
        <button
          onClick={stepForward}
          disabled={currentStep >= signingSteps.length}
          className="p-2 rounded-lg bg-dark-800 text-dark-300 hover:bg-dark-700 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Current step info */}
      <AnimatePresence mode="wait">
        {currentStepData && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <h5 className="font-semibold text-dark-100 flex items-center gap-2">
                  <span className="text-indigo-400">Step {currentStep}:</span>
                  {currentStepData.title}
                </h5>
                <p className="text-sm text-dark-300 mt-1">{currentStepData.description}</p>
              </div>
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${
                  currentStepData.actor === 'coordinator'
                    ? 'bg-amber-500/20 text-amber-400'
                    : currentStepData.actor === 'signers'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-violet-500/20 text-violet-400'
                }`}
              >
                {currentStepData.actor === 'coordinator'
                  ? 'Coordinator'
                  : currentStepData.actor === 'signers'
                    ? 'Signers'
                    : 'All'}
              </span>
            </div>
            {currentStepData.formula && (
              <div className="mt-3 p-2 bg-dark-900 rounded font-mono text-sm text-indigo-300">
                {currentStepData.formula}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* SVG Visualization */}
      <svg viewBox="0 0 400 280" className="w-full bg-dark-950 rounded-lg" style={{ maxHeight: '280px' }}>
        {/* Coordinator */}
        <motion.g
          animate={{
            scale: currentStepData?.actor === 'coordinator' ? 1.05 : 1,
          }}
        >
          <rect
            x={150}
            y={20}
            width={100}
            height={50}
            rx={8}
            fill={currentStepData?.actor === 'coordinator' ? '#fbbf24' : '#374151'}
            opacity={currentStepData?.actor === 'coordinator' ? 0.3 : 0.2}
          />
          <rect
            x={155}
            y={25}
            width={90}
            height={40}
            rx={6}
            fill="#1f2937"
            stroke={currentStepData?.actor === 'coordinator' ? '#fbbf24' : '#4b5563'}
            strokeWidth={2}
          />
          <text x={200} y={50} textAnchor="middle" fill="#fbbf24" fontSize={12} fontWeight="bold">
            Coordinator
          </text>
        </motion.g>

        {/* Connection lines */}
        {signers.map((signer) => (
          <g key={`line-${signer.id}`}>
            {/* Down arrow (coordinator to signer) */}
            <AnimatePresence>
              {currentStep === 2 && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <line
                    x1={200}
                    y1={70}
                    x2={signer.x}
                    y2={150}
                    stroke="#fbbf24"
                    strokeWidth={2}
                    strokeDasharray="4,4"
                  />
                  <motion.circle
                    cx={200}
                    cy={70}
                    r={4}
                    fill="#fbbf24"
                    animate={{
                      cx: [200, signer.x],
                      cy: [70, 150],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.g>
              )}
            </AnimatePresence>

            {/* Up arrow (signer to coordinator) */}
            <AnimatePresence>
              {currentStep === 8 && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <line
                    x1={signer.x}
                    y1={150}
                    x2={200}
                    y2={70}
                    stroke={signer.color}
                    strokeWidth={2}
                    strokeDasharray="4,4"
                  />
                  <motion.circle
                    cx={signer.x}
                    cy={150}
                    r={4}
                    fill={signer.color}
                    animate={{
                      cx: [signer.x, 200],
                      cy: [150, 70],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.g>
              )}
            </AnimatePresence>

            {/* Static connection line */}
            <line
              x1={200}
              y1={70}
              x2={signer.x}
              y2={150}
              stroke="#374151"
              strokeWidth={1}
              opacity={0.3}
            />
          </g>
        ))}

        {/* Signers */}
        {signers.map((signer) => (
          <motion.g
            key={signer.id}
            animate={{
              scale:
                currentStepData?.actor === 'signers' || currentStepData?.actor === 'all'
                  ? 1.05
                  : 1,
            }}
          >
            <rect
              x={signer.x - 40}
              y={150}
              width={80}
              height={60}
              rx={8}
              fill={signer.color}
              opacity={0.2}
            />
            <rect
              x={signer.x - 35}
              y={155}
              width={70}
              height={50}
              rx={6}
              fill="#1f2937"
              stroke={signer.color}
              strokeWidth={2}
            />
            <text
              x={signer.x}
              y={175}
              textAnchor="middle"
              fill={signer.color}
              fontSize={11}
              fontWeight="bold"
            >
              {signer.label}
            </text>

            {/* Show current computation */}
            <AnimatePresence>
              {currentStep >= 3 && currentStep <= 7 && (
                <motion.text
                  x={signer.x}
                  y={195}
                  textAnchor="middle"
                  fill="#9ca3af"
                  fontSize={9}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {currentStep === 3
                    ? `ρ${signer.id}`
                    : currentStep === 4
                      ? `R${signer.id}`
                      : currentStep >= 7
                        ? `z${signer.id}`
                        : ''}
                </motion.text>
              )}
            </AnimatePresence>
          </motion.g>
        ))}

        {/* Final signature output */}
        <AnimatePresence>
          {currentStep >= 9 && (
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <rect
                x={125}
                y={230}
                width={150}
                height={40}
                rx={8}
                fill="#10b981"
                opacity={0.2}
              />
              <rect
                x={130}
                y={235}
                width={140}
                height={30}
                rx={6}
                fill="#1f2937"
                stroke="#10b981"
                strokeWidth={2}
              />
              <text x={200} y={255} textAnchor="middle" fill="#10b981" fontSize={12} fontWeight="bold">
                Signature: (R, z)
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Message indicator */}
        <text x={380} y={20} textAnchor="end" fill="#6b7280" fontSize={10}>
          Message: m
        </text>
      </svg>

      {/* Step summary table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-dark-400 border-b border-dark-700">
              <th className="py-2 px-2 text-left">Step</th>
              <th className="py-2 px-2 text-left">Action</th>
              <th className="py-2 px-2 text-left">Actor</th>
              <th className="py-2 px-2 text-left">Output</th>
            </tr>
          </thead>
          <tbody>
            {signingSteps.map((step) => (
              <tr
                key={step.id}
                className={`border-b border-dark-800 ${
                  currentStep === step.id ? 'bg-indigo-500/10' : ''
                }`}
              >
                <td className="py-1.5 px-2">
                  <span
                    className={`inline-flex w-5 h-5 rounded-full items-center justify-center text-xs ${
                      currentStep > step.id
                        ? 'bg-emerald-500/50 text-white'
                        : currentStep === step.id
                          ? 'bg-indigo-500 text-white'
                          : 'bg-dark-700 text-dark-400'
                    }`}
                  >
                    {step.id}
                  </span>
                </td>
                <td className="py-1.5 px-2 text-dark-300">{step.title}</td>
                <td className="py-1.5 px-2">
                  <span
                    className={`text-xs ${
                      step.actor === 'coordinator'
                        ? 'text-amber-400'
                        : step.actor === 'signers'
                          ? 'text-blue-400'
                          : 'text-violet-400'
                    }`}
                  >
                    {step.actor}
                  </span>
                </td>
                <td className="py-1.5 px-2 font-mono text-dark-400">
                  {step.formula?.split('→')[0] || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key insight */}
      <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
        <p className="text-sm text-blue-200">
          <strong>Key Insight:</strong> All 9 steps happen in a single communication round!
          The coordinator broadcasts once, signers compute and respond once. This is FROST's
          main efficiency advantage over traditional threshold schemes requiring 3+ rounds.
        </p>
      </div>
    </div>
  );
}
