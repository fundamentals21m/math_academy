import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

type View = 'signing' | 'verification' | 'features';

/**
 * Side-by-side comparison of ECDSA and Schnorr signatures.
 * Highlights the simplicity of Schnorr and its advantages.
 */
export function SchnorrComparison({ className = '' }: Props) {
  const [view, setView] = useState<View>('signing');
  const [highlightedFeature, setHighlightedFeature] = useState<string | null>(null);

  const signingComparison = {
    ecdsa: {
      title: 'ECDSA',
      color: 'blue',
      steps: [
        { step: '1', formula: 'z = H(m)', desc: 'Hash message' },
        { step: '2', formula: 'k \u2190 random', desc: 'Generate nonce' },
        { step: '3', formula: 'R = kG', desc: 'Compute nonce point' },
        { step: '4', formula: 'r = x(R) mod n', desc: 'Extract x-coordinate' },
        { step: '5', formula: 's = k\u207b\u00b9(z + rd) mod n', desc: 'Compute s value' },
        { step: '6', formula: 'return (r, s)', desc: 'Output signature' },
      ],
    },
    schnorr: {
      title: 'Schnorr',
      color: 'amber',
      steps: [
        { step: '1', formula: 'k \u2190 random', desc: 'Generate nonce' },
        { step: '2', formula: 'R = kG', desc: 'Compute nonce point' },
        { step: '3', formula: 'e = H(R || P || m)', desc: 'Hash commitment' },
        { step: '4', formula: 's = k + ed', desc: 'Compute s value' },
        { step: '5', formula: 'return (R, s)', desc: 'Output signature' },
      ],
    },
  };

  const verificationComparison = {
    ecdsa: {
      title: 'ECDSA',
      color: 'blue',
      steps: [
        { step: '1', formula: 'u\u2081 = zs\u207b\u00b9 mod n', desc: 'Compute u\u2081' },
        { step: '2', formula: 'u\u2082 = rs\u207b\u00b9 mod n', desc: 'Compute u\u2082' },
        { step: '3', formula: 'P = u\u2081G + u\u2082Q', desc: 'EC point ops (2 scalar mults)' },
        { step: '4', formula: 'verify x(P) = r', desc: 'Check x-coordinate' },
      ],
    },
    schnorr: {
      title: 'Schnorr',
      color: 'amber',
      steps: [
        { step: '1', formula: 'e = H(R || P || m)', desc: 'Recompute hash' },
        { step: '2', formula: 'verify sG = R + eP', desc: 'Single equation check' },
      ],
    },
  };

  const features = [
    {
      id: 'simplicity',
      title: 'Simplicity',
      ecdsa: 'Complex formula with modular inverse',
      schnorr: 'Simple linear combination: s = k + ed',
      winner: 'schnorr',
    },
    {
      id: 'provable',
      title: 'Provable Security',
      ecdsa: 'Security proof requires "forking lemma"',
      schnorr: 'Direct reduction to discrete log',
      winner: 'schnorr',
    },
    {
      id: 'linearity',
      title: 'Linearity',
      ecdsa: 'Non-linear \u2192 no native aggregation',
      schnorr: 'Linear \u2192 signatures can be added!',
      winner: 'schnorr',
    },
    {
      id: 'batch',
      title: 'Batch Verification',
      ecdsa: 'Must verify each signature separately',
      schnorr: 'Verify n signatures faster than n\u00d7 single',
      winner: 'schnorr',
    },
    {
      id: 'malleability',
      title: 'Malleability',
      ecdsa: 'Signatures can be modified (s \u2192 n-s)',
      schnorr: 'No malleability with proper encoding',
      winner: 'schnorr',
    },
    {
      id: 'patent',
      title: 'Patent Status',
      ecdsa: 'Always patent-free',
      schnorr: 'Patent expired 2008',
      winner: 'tie',
    },
  ];

  const currentComparison = view === 'signing' ? signingComparison : verificationComparison;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">ECDSA vs Schnorr</h3>
      <p className="text-dark-400 text-sm mb-4">
        Compare the two signature schemes side-by-side. Schnorr was adopted in Bitcoin via BIP 340.
      </p>

      {/* View selector */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'signing', label: 'Signing' },
          { id: 'verification', label: 'Verification' },
          { id: 'features', label: 'Features' },
        ].map((v) => (
          <button
            key={v.id}
            onClick={() => setView(v.id as View)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              view === v.id
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'bg-dark-700 text-dark-400 border border-dark-600 hover:bg-dark-600'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {view !== 'features' ? (
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* ECDSA Column */}
            <div className="rounded-xl bg-blue-500/5 border border-blue-500/20 p-4">
              <h4 className="text-lg font-semibold text-blue-400 mb-4">
                {currentComparison.ecdsa.title}
              </h4>
              <div className="space-y-3">
                {currentComparison.ecdsa.steps.map((s) => (
                  <div key={s.step} className="flex gap-3">
                    <span className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">
                      {s.step}
                    </span>
                    <div>
                      <p className="font-mono text-sm text-blue-300">{s.formula}</p>
                      <p className="text-xs text-dark-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-blue-500/20">
                <p className="text-dark-500 text-xs">
                  Steps: {currentComparison.ecdsa.steps.length}
                </p>
              </div>
            </div>

            {/* Schnorr Column */}
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-4">
              <h4 className="text-lg font-semibold text-amber-400 mb-4">
                {currentComparison.schnorr.title}
              </h4>
              <div className="space-y-3">
                {currentComparison.schnorr.steps.map((s) => (
                  <div key={s.step} className="flex gap-3">
                    <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">
                      {s.step}
                    </span>
                    <div>
                      <p className="font-mono text-sm text-amber-300">{s.formula}</p>
                      <p className="text-xs text-dark-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/20 flex justify-between items-center">
                <p className="text-dark-500 text-xs">
                  Steps: {currentComparison.schnorr.steps.length}
                </p>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs">
                  Simpler!
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="features"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-3"
          >
            {features.map((f) => (
              <div
                key={f.id}
                className={`rounded-xl border transition-colors cursor-pointer ${
                  highlightedFeature === f.id
                    ? 'bg-dark-700/50 border-dark-500/50'
                    : 'bg-dark-700/20 border-dark-600/30 hover:bg-dark-700/30'
                }`}
                onMouseEnter={() => setHighlightedFeature(f.id)}
                onMouseLeave={() => setHighlightedFeature(null)}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-dark-200">{f.title}</h4>
                    {f.winner !== 'tie' && (
                      <span
                        className={`px-2 py-0.5 rounded text-xs ${
                          f.winner === 'schnorr'
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {f.winner === 'schnorr' ? 'Schnorr' : 'ECDSA'} wins
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-blue-400 mb-1">ECDSA</p>
                      <p className="text-sm text-dark-400">{f.ecdsa}</p>
                    </div>
                    <div>
                      <p className="text-xs text-amber-400 mb-1">Schnorr</p>
                      <p className="text-sm text-dark-400">{f.schnorr}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MuSig highlight */}
      <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
        <h4 className="text-purple-400 font-semibold mb-2">Schnorr Enables MuSig</h4>
        <p className="text-dark-400 text-sm mb-3">
          Because Schnorr signatures are linear (s = k + ed), multiple parties can create a
          combined signature that looks like a single signature:
        </p>
        <div className="p-3 rounded-lg bg-dark-800/50 font-mono text-sm">
          <p className="text-purple-300">
            P<sub>agg</sub> = P<sub>1</sub> + P<sub>2</sub> + P<sub>3</sub>
          </p>
          <p className="text-purple-300 mt-1">
            s<sub>agg</sub> = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub>
          </p>
        </div>
        <p className="text-dark-500 text-xs mt-2">
          Result: 3-of-3 multisig that's indistinguishable from a single-sig (same size, same
          verification cost, better privacy).
        </p>
      </div>

      {/* BIP callout */}
      <div className="mt-4 p-3 rounded-xl bg-dark-700/30">
        <p className="text-dark-500 text-sm">
          <strong className="text-dark-300">Taproot (Nov 2021):</strong> Bitcoin adopted Schnorr
          via BIP 340/341/342. All Taproot outputs use Schnorr signatures, enabling better
          privacy and cheaper multisig.
        </p>
      </div>
    </div>
  );
}
