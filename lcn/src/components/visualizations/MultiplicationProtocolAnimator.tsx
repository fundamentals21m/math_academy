import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

type Step = 0 | 1 | 2 | 3;

/**
 * 4-step walkthrough of the ZK multiplication proof protocol.
 */
export function MultiplicationProtocolAnimator({ className = '' }: Props) {
  const [step, setStep] = useState<Step>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  // Demo values (simplified for visualization)
  const demoValues = {
    a: 3,
    b: 5,
    ab: 15,
    challenge: 7,
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setTimeout(() => {
      if (step < 3) {
        setStep((step + 1) as Step);
      } else {
        setIsPlaying(false);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const steps = [
    {
      title: 'Prover Commits',
      subtitle: 'Generate random blinding factors and compute commitments',
      proverAction: 'Computes S, T₁, T₂',
      verifierAction: 'Waits...',
      details: [
        { name: 'S', value: 's_a·G₀ + s_b·G₁ + s_S·H', desc: 'Blinded commitment' },
        { name: 'T₁', value: 'Cross-term commitment', desc: 'For l(x)·r(x) evaluation' },
        { name: 'T₂', value: 's_a·s_b·G₀ + τ₂·H', desc: 'Quadratic term' },
      ],
    },
    {
      title: 'Verifier Challenges',
      subtitle: 'Send a random challenge value x',
      proverAction: 'Receives x',
      verifierAction: 'Sends x ← random',
      details: [
        { name: 'x', value: `${demoValues.challenge}`, desc: 'Random field element' },
      ],
    },
    {
      title: 'Prover Responds',
      subtitle: 'Compute opening values using the challenge',
      proverAction: 'Computes l, r, μ, τ_x',
      verifierAction: 'Waits...',
      details: [
        { name: 'l', value: `a + s_a·x = ${demoValues.a} + s_a·${demoValues.challenge}`, desc: 'Opened left poly' },
        { name: 'r', value: `b + s_b·x = ${demoValues.b} + s_b·${demoValues.challenge}`, desc: 'Opened right poly' },
        { name: 'μ', value: 's_S + ... + τ₂·x²', desc: 'Blinding opening' },
        { name: 'τ_x', value: 's_V + τ₁·x + τ₂·x²', desc: 'Value blinding' },
      ],
    },
    {
      title: 'Verifier Checks',
      subtitle: 'Verify the two main equations',
      proverAction: 'Done',
      verifierAction: 'Checks equations',
      details: [
        { name: 'Check 1', value: 'l·G₀ + r·G₁ + μ·H = C + x·S', desc: 'Commitment consistency' },
        { name: 'Check 2', value: 'l·r·G₀ + τ_x·H = V + x·T₁ + x²·T₂', desc: 'Multiplication correctness' },
      ],
    },
  ];

  const currentStep = steps[step];

  // SVG dimensions
  const width = 500;
  const height = 280;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">
        ZK Multiplication Protocol
      </h3>
      <p className="text-dark-400 text-sm mb-4">
        Proving knowledge of a, b such that V commits to a·b, without revealing a or b.
      </p>

      {/* Controls */}
      <div className="flex gap-2 mb-4 flex-wrap">
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
          {isPlaying ? 'Pause' : 'Play All'}
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
        <button
          onClick={() => setShowDetails(!showDetails)}
          className={`px-3 py-1.5 rounded-lg text-sm ${
            showDetails ? 'bg-primary-500/20 text-primary-400' : 'bg-dark-700 text-dark-400'
          }`}
        >
          {showDetails ? 'Hide' : 'Show'} Details
        </button>
      </div>

      {/* Step indicators */}
      <div className="flex gap-1 mb-4">
        {[0, 1, 2, 3].map((s) => (
          <button
            key={s}
            onClick={() => setStep(s as Step)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              step === s
                ? 'bg-primary-500 text-white'
                : step > s
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-dark-700 text-dark-500'
            }`}
          >
            {s + 1}. {['Commit', 'Challenge', 'Response', 'Verify'][s]}
          </button>
        ))}
      </div>

      {/* SVG Visualization */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto bg-dark-900/50 rounded-xl mb-4"
      >
        {/* Prover side */}
        <rect x="30" y="30" width="150" height="200" rx="12" fill="#1e293b" stroke="#374151" strokeWidth="2" />
        <text x="105" y="55" fill="#10b981" fontSize="14" fontWeight="bold" textAnchor="middle">
          Prover
        </text>
        <text x="105" y="75" fill="#6b7280" fontSize="10" textAnchor="middle">
          knows (a, b, ab)
        </text>

        {/* Prover state */}
        <motion.g
          key={`prover-${step}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <rect x="45" y="90" width="120" height="50" rx="6" fill={step === 0 || step === 2 ? '#10b98120' : '#37415150'} />
          <text x="105" y="115" fill={step === 0 || step === 2 ? '#10b981' : '#6b7280'} fontSize="10" textAnchor="middle">
            {currentStep.proverAction}
          </text>
          {(step === 0 || step === 2) && (
            <motion.circle
              cx="155"
              cy="115"
              r="4"
              fill="#10b981"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </motion.g>

        {/* Verifier side */}
        <rect x="320" y="30" width="150" height="200" rx="12" fill="#1e293b" stroke="#374151" strokeWidth="2" />
        <text x="395" y="55" fill="#6366f1" fontSize="14" fontWeight="bold" textAnchor="middle">
          Verifier
        </text>
        <text x="395" y="75" fill="#6b7280" fontSize="10" textAnchor="middle">
          checks proof
        </text>

        {/* Verifier state */}
        <motion.g
          key={`verifier-${step}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <rect x="335" y="90" width="120" height="50" rx="6" fill={step === 1 || step === 3 ? '#6366f120' : '#37415150'} />
          <text x="395" y="115" fill={step === 1 || step === 3 ? '#6366f1' : '#6b7280'} fontSize="10" textAnchor="middle">
            {currentStep.verifierAction}
          </text>
          {(step === 1 || step === 3) && (
            <motion.circle
              cx="445"
              cy="115"
              r="4"
              fill="#6366f1"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </motion.g>

        {/* Messages */}
        <AnimatePresence>
          {/* Step 0: Commitments P → V */}
          {step >= 0 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step === 0 ? 1 : 0.4 }}
            >
              <motion.line
                x1="180"
                y1="160"
                x2="320"
                y2="160"
                stroke="#10b981"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              <polygon points="315,155 325,160 315,165" fill="#10b981" />
              <text x="250" y="152" fill="#10b981" fontSize="10" textAnchor="middle">
                S, T₁, T₂
              </text>
            </motion.g>
          )}

          {/* Step 1: Challenge V → P */}
          {step >= 1 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step === 1 ? 1 : 0.4 }}
            >
              <motion.line
                x1="320"
                y1="185"
                x2="180"
                y2="185"
                stroke="#6366f1"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              <polygon points="185,180 175,185 185,190" fill="#6366f1" />
              <text x="250" y="200" fill="#6366f1" fontSize="10" textAnchor="middle">
                x (challenge)
              </text>
            </motion.g>
          )}

          {/* Step 2: Response P → V */}
          {step >= 2 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step === 2 ? 1 : 0.4 }}
            >
              <motion.line
                x1="180"
                y1="210"
                x2="320"
                y2="210"
                stroke="#10b981"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              <polygon points="315,205 325,210 315,215" fill="#10b981" />
              <text x="250" y="225" fill="#10b981" fontSize="10" textAnchor="middle">
                l, r, μ, τ_x
              </text>
            </motion.g>
          )}

          {/* Step 3: Verification result */}
          {step === 3 && (
            <motion.g
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <rect x="335" y="150" width="120" height="70" rx="8" fill="#10b98120" stroke="#10b981" strokeWidth="2" />
              <text x="395" y="175" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">
                ✓ Valid Proof
              </text>
              <text x="395" y="195" fill="#6b7280" fontSize="9" textAnchor="middle">
                Both equations
              </text>
              <text x="395" y="208" fill="#6b7280" fontSize="9" textAnchor="middle">
                verified!
              </text>
            </motion.g>
          )}
        </AnimatePresence>
      </svg>

      {/* Step description */}
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 rounded-xl bg-dark-700/30 border border-dark-600/30 mb-4"
      >
        <h4 className="text-primary-400 font-bold mb-1">
          Step {step + 1}: {currentStep.title}
        </h4>
        <p className="text-dark-400 text-sm">{currentStep.subtitle}</p>
      </motion.div>

      {/* Details */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentStep.details.map((detail, i) => (
                <motion.div
                  key={detail.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-3 rounded-lg bg-dark-700/50 border border-dark-600/30"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary-400 font-mono font-bold text-sm">{detail.name}</span>
                  </div>
                  <p className="text-dark-300 text-xs font-mono">{detail.value}</p>
                  <p className="text-dark-500 text-xs mt-1">{detail.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
