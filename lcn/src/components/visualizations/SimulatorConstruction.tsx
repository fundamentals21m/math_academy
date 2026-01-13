import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

type Phase = 'intro' | 'sample' | 'derive_S' | 'derive_T1' | 'compare';

/**
 * Visualization of how the simulator constructs valid-looking transcripts without the witness.
 */
export function SimulatorConstruction({ className = '' }: Props) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [sampledValues, setSampledValues] = useState({
    x: 7,
    l: 23,
    r: 41,
    mu: 19,
    tau_x: 31,
    T2: 'T₂',
  });

  const phases: Phase[] = ['intro', 'sample', 'derive_S', 'derive_T1', 'compare'];
  const currentIndex = phases.indexOf(phase);

  const regenerateValues = () => {
    setSampledValues({
      x: Math.floor(Math.random() * 100) + 1,
      l: Math.floor(Math.random() * 100) + 1,
      r: Math.floor(Math.random() * 100) + 1,
      mu: Math.floor(Math.random() * 100) + 1,
      tau_x: Math.floor(Math.random() * 100) + 1,
      T2: 'T₂',
    });
  };

  const nextPhase = () => {
    const next = phases[Math.min(currentIndex + 1, phases.length - 1)];
    if (next === 'sample') regenerateValues();
    setPhase(next);
  };

  const prevPhase = () => {
    setPhase(phases[Math.max(currentIndex - 1, 0)]);
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">
        PSHVZK Simulator Construction
      </h3>
      <p className="text-dark-400 text-sm mb-4">
        See how the simulator produces valid transcripts without knowing the witness.
      </p>

      {/* Phase controls */}
      <div className="flex gap-2 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevPhase}
          disabled={currentIndex === 0}
          className="px-3 py-1.5 rounded-lg bg-dark-600 hover:bg-dark-500 disabled:opacity-30 text-dark-200 text-sm"
        >
          ← Back
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextPhase}
          disabled={currentIndex === phases.length - 1}
          className="px-4 py-1.5 rounded-lg bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-white text-sm font-medium"
        >
          Next →
        </motion.button>
        <div className="flex-1" />
        <div className="flex gap-1">
          {phases.map((p, i) => (
            <button
              key={p}
              onClick={() => setPhase(p)}
              className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                currentIndex === i
                  ? 'bg-primary-500 text-white'
                  : currentIndex > i
                  ? 'bg-emerald-500/30 text-emerald-400'
                  : 'bg-dark-700 text-dark-500'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Phase content */}
      <AnimatePresence mode="wait">
        {phase === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <h4 className="text-purple-400 font-bold mb-2">The Simulator's Challenge</h4>
              <p className="text-dark-300 text-sm">
                The simulator must produce a transcript that looks identical to a real proof,
                but <strong className="text-purple-400">without knowing the witness</strong> (a, b, and their blinding factors).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-dark-700/30">
              <h4 className="text-dark-200 font-medium mb-2">Key Insight</h4>
              <p className="text-dark-400 text-sm">
                The simulator receives the verifier's randomness (challenge x) in advance.
                It works <strong className="text-amber-400">backwards</strong> from the verification equations
                to derive commitments S and T₁.
              </p>
            </div>
          </motion.div>
        )}

        {phase === 'sample' && (
          <motion.div
            key="sample"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <h4 className="text-cyan-400 font-bold mb-2">Step 1: Sample Random Values</h4>
              <p className="text-dark-300 text-sm mb-3">
                The simulator samples the transcript values uniformly at random:
              </p>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'x', value: sampledValues.x, desc: 'challenge (from verifier)' },
                  { name: 'l', value: sampledValues.l, desc: 'left response' },
                  { name: 'r', value: sampledValues.r, desc: 'right response' },
                  { name: 'μ', value: sampledValues.mu, desc: 'blinding response' },
                  { name: 'τ_x', value: sampledValues.tau_x, desc: 'value blinding' },
                  { name: 'T₂', value: '(random point)', desc: 'quadratic commitment' },
                ].map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-3 rounded-lg bg-dark-700/50"
                  >
                    <span className="text-cyan-400 font-mono font-bold">{item.name}</span>
                    <span className="text-dark-400"> = </span>
                    <span className="text-dark-100 font-mono">
                      {typeof item.value === 'number' ? item.value : item.value}
                    </span>
                    <p className="text-dark-500 text-xs mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={regenerateValues}
                className="mt-3 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 text-sm hover:bg-cyan-500/30"
              >
                🎲 Resample Values
              </motion.button>
            </div>
          </motion.div>
        )}

        {phase === 'derive_S' && (
          <motion.div
            key="derive_S"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <h4 className="text-emerald-400 font-bold mb-2">Step 2: Derive S from Verification Equation 1</h4>
              <p className="text-dark-300 text-sm mb-3">
                Rearrange the first verification equation to solve for S:
              </p>

              <div className="space-y-3 font-mono text-sm">
                <div className="p-3 rounded-lg bg-dark-800/50">
                  <p className="text-dark-400">Original equation:</p>
                  <p className="text-emerald-300">l·G₀ + r·G₁ + μ·H = C + x·S</p>
                </div>

                <div className="text-center text-dark-500">↓ solve for S</div>

                <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                  <p className="text-dark-400">Simulator computes:</p>
                  <p className="text-emerald-400 font-bold">
                    S = (1/x)(l·G₀ + r·G₁ + μ·H - C)
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-dark-700/50">
                  <p className="text-dark-400 text-xs">With sampled values:</p>
                  <p className="text-dark-300">
                    S = (1/{sampledValues.x})({sampledValues.l}·G₀ + {sampledValues.r}·G₁ + {sampledValues.mu}·H - C)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {phase === 'derive_T1' && (
          <motion.div
            key="derive_T1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <h4 className="text-amber-400 font-bold mb-2">Step 3: Derive T₁ from Verification Equation 2</h4>
              <p className="text-dark-300 text-sm mb-3">
                Rearrange the second verification equation to solve for T₁:
              </p>

              <div className="space-y-3 font-mono text-sm">
                <div className="p-3 rounded-lg bg-dark-800/50">
                  <p className="text-dark-400">Original equation:</p>
                  <p className="text-amber-300">l·r·G₀ + τ_x·H = V + x·T₁ + x²·T₂</p>
                </div>

                <div className="text-center text-dark-500">↓ solve for T₁</div>

                <div className="p-3 rounded-lg bg-amber-500/20 border border-amber-500/30">
                  <p className="text-dark-400">Simulator computes:</p>
                  <p className="text-amber-400 font-bold">
                    T₁ = (1/x)(l·r·G₀ + τ_x·H - V - x²·T₂)
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-dark-700/50">
                  <p className="text-dark-400 text-xs">With sampled values:</p>
                  <p className="text-dark-300">
                    T₁ = (1/{sampledValues.x})({sampledValues.l}·{sampledValues.r}·G₀ + {sampledValues.tau_x}·H - V - {sampledValues.x}²·T₂)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {phase === 'compare' && (
          <motion.div
            key="compare"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <h4 className="text-purple-400 font-bold mb-2">Result: Identical Distributions!</h4>
              <p className="text-dark-300 text-sm mb-4">
                The simulated transcript is indistinguishable from a real transcript:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-medium text-sm mb-2">Real Transcript</h5>
                  <p className="text-dark-400 text-xs">
                    Generated using actual witness (a, b) and random blinding factors.
                    Values are distributed uniformly due to blinding.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <h5 className="text-purple-400 font-medium text-sm mb-2">Simulated Transcript</h5>
                  <p className="text-dark-400 text-xs">
                    Generated by sampling uniformly and deriving commitments.
                    Values are distributed uniformly by construction.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-dark-700/50 text-center">
                <p className="text-dark-300 text-sm">
                  <span className="text-emerald-400 font-mono">Real</span>
                  <span className="text-dark-500 mx-2">≡</span>
                  <span className="text-purple-400 font-mono">Simulated</span>
                </p>
                <p className="text-dark-500 text-xs mt-1">
                  (identical probability distributions)
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-dark-700/30">
              <h4 className="text-dark-200 font-medium mb-2">Why This Proves Zero-Knowledge</h4>
              <p className="text-dark-400 text-sm">
                If a simulator can produce transcripts that look exactly like real ones
                <strong className="text-purple-400"> without the witness</strong>,
                then the verifier learns nothing from a real transcript that they couldn't
                compute themselves. The proof reveals no information about a or b!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
