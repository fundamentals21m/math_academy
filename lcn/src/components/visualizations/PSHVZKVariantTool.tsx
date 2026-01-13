import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

type Variant = 'full' | 'A' | 'B' | 'C';

interface VariantInfo {
  name: string;
  missing: string;
  consequence: string;
  isPSHVZK: boolean;
}

/**
 * Interactive tool showing how different protocol variants break PSHVZK.
 */
export function PSHVZKVariantTool({ className = '' }: Props) {
  const [variant, setVariant] = useState<Variant>('full');
  const [showDistinguisher, setShowDistinguisher] = useState(false);

  const variants: Record<Variant, VariantInfo> = {
    full: {
      name: 'Full Protocol',
      missing: 'None',
      consequence: 'All blinding factors present. Transcript values are uniformly distributed.',
      isPSHVZK: true,
    },
    A: {
      name: 'Variant A',
      missing: 's_a (blinding for a)',
      consequence: 'The response l = a + s_a·x becomes l = a + 0·x = a, directly revealing a!',
      isPSHVZK: false,
    },
    B: {
      name: 'Variant B',
      missing: 's_S (blinding for S)',
      consequence: 'The commitment S loses its randomness, and μ reveals s_C.',
      isPSHVZK: false,
    },
    C: {
      name: 'Variant C',
      missing: 'τ₂ (blinding for T₂)',
      consequence: 'T₂ = s_a·s_b·G₀ reveals information about the product of blinding factors.',
      isPSHVZK: false,
    },
  };

  const currentVariant = variants[variant];

  // Transcript elements with highlighting for missing components
  const transcriptElements = [
    { name: 'S', formula: 's_a·G₀ + s_b·G₁ + s_S·H', affected: variant === 'B' },
    { name: 'T₁', formula: 's_a·b·G₀ + s_b·a·G₀ + τ₁·H', affected: false },
    { name: 'T₂', formula: 's_a·s_b·G₀ + τ₂·H', affected: variant === 'C' },
    { name: 'l', formula: 'a + s_a·x', affected: variant === 'A' },
    { name: 'r', formula: 'b + s_b·x', affected: false },
    { name: 'μ', formula: 's_S + (s_a·s_b + τ₁)·x + τ₂·x²', affected: variant === 'B' || variant === 'C' },
    { name: 'τ_x', formula: 's_V + τ₁·x + τ₂·x²', affected: variant === 'C' },
  ];

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">
        PSHVZK Variant Comparison
      </h3>
      <p className="text-dark-400 text-sm mb-4">
        See what happens when we remove blinding factors from the multiplication protocol.
      </p>

      {/* Variant selector */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(Object.keys(variants) as Variant[]).map((v) => (
          <motion.button
            key={v}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setVariant(v)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              variant === v
                ? variants[v].isPSHVZK
                  ? 'bg-emerald-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
            }`}
          >
            {v === 'full' ? 'Full Protocol' : `Variant ${v}`}
          </motion.button>
        ))}
      </div>

      {/* Status indicator */}
      <motion.div
        key={variant}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-4 rounded-xl mb-6 ${
          currentVariant.isPSHVZK
            ? 'bg-emerald-500/10 border border-emerald-500/30'
            : 'bg-red-500/10 border border-red-500/30'
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-2xl ${currentVariant.isPSHVZK ? '' : 'animate-pulse'}`}>
            {currentVariant.isPSHVZK ? '✓' : '✗'}
          </span>
          <div>
            <h4 className={`font-bold ${currentVariant.isPSHVZK ? 'text-emerald-400' : 'text-red-400'}`}>
              {currentVariant.name}
            </h4>
            <p className={`text-sm ${currentVariant.isPSHVZK ? 'text-emerald-300' : 'text-red-300'}`}>
              {currentVariant.isPSHVZK ? 'PSHVZK holds' : 'PSHVZK broken'}
            </p>
          </div>
        </div>

        {variant !== 'full' && (
          <div className="mt-3 pt-3 border-t border-dark-600/50">
            <p className="text-dark-400 text-sm">
              <span className="text-red-400 font-mono">Missing:</span> {currentVariant.missing}
            </p>
            <p className="text-dark-400 text-sm mt-1">
              <span className="text-amber-400 font-mono">Consequence:</span> {currentVariant.consequence}
            </p>
          </div>
        )}
      </motion.div>

      {/* Transcript visualization */}
      <div className="mb-6">
        <h4 className="text-dark-200 font-medium mb-3">Protocol Transcript</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {transcriptElements.map((elem) => (
            <motion.div
              key={elem.name}
              animate={{
                backgroundColor: elem.affected ? 'rgba(239, 68, 68, 0.15)' : 'rgba(55, 65, 81, 0.3)',
                borderColor: elem.affected ? 'rgba(239, 68, 68, 0.5)' : 'rgba(75, 85, 99, 0.5)',
              }}
              className="p-3 rounded-lg border"
            >
              <div className="flex items-center gap-2">
                <span className={`font-mono font-bold ${elem.affected ? 'text-red-400' : 'text-primary-400'}`}>
                  {elem.name}
                </span>
                {elem.affected && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-red-400 text-xs bg-red-500/20 px-2 py-0.5 rounded"
                  >
                    LEAKS INFO
                  </motion.span>
                )}
              </div>
              <p className={`text-xs font-mono mt-1 ${elem.affected ? 'text-red-300 line-through' : 'text-dark-400'}`}>
                = {elem.formula}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Distinguisher toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowDistinguisher(!showDistinguisher)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            showDistinguisher
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
          }`}
        >
          {showDistinguisher ? 'Hide' : 'Show'} Distinguisher Attack
        </button>
      </div>

      {/* Distinguisher explanation */}
      <AnimatePresence>
        {showDistinguisher && !currentVariant.isPSHVZK && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <h4 className="text-amber-400 font-medium mb-2">How an Adversary Distinguishes</h4>
              <div className="space-y-2 text-sm text-dark-300">
                {variant === 'A' && (
                  <>
                    <p>1. Receive transcript with <code className="text-red-400">l = a</code> (no blinding)</p>
                    <p>2. Check if <code className="text-primary-400">l·G₀ + r·G₁ = C</code> gives l that divides commitment</p>
                    <p>3. In real protocol: l contains the actual witness value a!</p>
                    <p>4. Simulator cannot produce this since it doesn't know a</p>
                  </>
                )}
                {variant === 'B' && (
                  <>
                    <p>1. S has no blinding: <code className="text-red-400">S = s_a·G₀ + s_b·G₁</code></p>
                    <p>2. Adversary can extract relationship between s_a, s_b from S</p>
                    <p>3. Combined with μ, this reveals s_C</p>
                    <p>4. Simulator's S would have different distribution</p>
                  </>
                )}
                {variant === 'C' && (
                  <>
                    <p>1. T₂ becomes <code className="text-red-400">T₂ = s_a·s_b·G₀</code> (no τ₂)</p>
                    <p>2. This is a deterministic function of blinding factors</p>
                    <p>3. Adversary can verify T₂ against other transcript values</p>
                    <p>4. Simulator cannot fake this relationship</p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showDistinguisher && currentVariant.isPSHVZK && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-emerald-400 text-sm">
            <strong>No distinguisher exists!</strong> With all blinding factors, every transcript value
            is uniformly distributed. A simulator can produce identically distributed transcripts
            without knowing the witness.
          </p>
        </div>
      )}

      {/* Key insight */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/30 border border-dark-600/30">
        <p className="text-dark-400 text-sm">
          <strong className="text-primary-400">Key Insight:</strong> Each blinding factor serves a specific
          purpose. Remove any one, and the transcript leaks information that allows distinguishing
          real proofs from simulated ones.
        </p>
      </div>
    </div>
  );
}
