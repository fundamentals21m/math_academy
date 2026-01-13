import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

type Phase = 'setup' | 'sign' | 'verify' | 'complete';

/**
 * Interactive walkthrough of ECDSA signing and verification.
 * Shows the mathematical steps with symbolic values and highlights the nonce catastrophe.
 */
export function ECDSASigningFlow({ className = '' }: Props) {
  const [phase, setPhase] = useState<Phase>('setup');
  const [step, setStep] = useState(0);
  const [showNonceCatastrophe, setShowNonceCatastrophe] = useState(false);

  // Symbolic values (we show the math, not actual computations)
  const values = useMemo(
    () => ({
      privateKey: 'd',
      publicKey: 'Q = dG',
      message: 'm',
      messageHash: 'z = H(m)',
      nonce: 'k',
      R: 'R = kG',
      r: 'r = x(R) mod n',
      s: 's = k\u207b\u00b9(z + rd) mod n',
      signature: '(r, s)',
    }),
    []
  );

  const setupSteps = [
    { title: 'Private Key', value: values.privateKey, desc: 'Random 256-bit integer in [1, n-1]' },
    { title: 'Public Key', value: values.publicKey, desc: 'Scalar multiply private key by generator G' },
  ];

  const signSteps = [
    { title: 'Hash Message', value: values.messageHash, desc: 'Compute SHA-256 hash of the message' },
    { title: 'Generate Nonce', value: values.nonce, desc: 'CRITICAL: Must be random and unique!', isWarning: true },
    { title: 'Compute R', value: values.R, desc: 'Scalar multiply nonce by generator G' },
    { title: 'Extract r', value: values.r, desc: 'Take x-coordinate of R, reduce mod n' },
    { title: 'Compute s', value: values.s, desc: 'Combine hash, r, private key with nonce inverse' },
    { title: 'Signature', value: values.signature, desc: 'The pair (r, s) is the ECDSA signature' },
  ];

  const verifySteps = [
    { title: 'Compute u\u2081', value: 'u\u2081 = z \u00b7 s\u207b\u00b9 mod n', desc: 'Scale message hash by s inverse' },
    { title: 'Compute u\u2082', value: 'u\u2082 = r \u00b7 s\u207b\u00b9 mod n', desc: 'Scale r by s inverse' },
    { title: 'Compute Point', value: 'P = u\u2081G + u\u2082Q', desc: 'Linear combination of G and public key' },
    { title: 'Verify', value: 'x(P) \u225f r', desc: 'Check if x-coordinate equals r' },
  ];

  const currentSteps = phase === 'setup' ? setupSteps : phase === 'sign' ? signSteps : verifySteps;

  const nextStep = () => {
    if (step < currentSteps.length - 1) {
      setStep(step + 1);
    } else if (phase === 'setup') {
      setPhase('sign');
      setStep(0);
    } else if (phase === 'sign') {
      setPhase('verify');
      setStep(0);
    } else {
      setPhase('complete');
    }
  };

  const reset = () => {
    setPhase('setup');
    setStep(0);
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">ECDSA Signing Flow</h3>
      <p className="text-dark-400 text-sm mb-4">
        Step through the signing and verification process interactively.
      </p>

      {/* Phase indicator */}
      <div className="flex gap-2 mb-6">
        {(['setup', 'sign', 'verify'] as Phase[]).map((p, i) => (
          <div
            key={p}
            className={`flex-1 p-3 rounded-lg text-center transition-colors ${
              phase === p
                ? p === 'setup'
                  ? 'bg-blue-500/20 border border-blue-500/30'
                  : p === 'sign'
                  ? 'bg-amber-500/20 border border-amber-500/30'
                  : 'bg-emerald-500/20 border border-emerald-500/30'
                : phase === 'complete' || (phase === 'verify' && i < 2) || (phase === 'sign' && i < 1)
                ? 'bg-dark-700/30 border border-dark-600/30 opacity-50'
                : 'bg-dark-700/30 border border-dark-600/30'
            }`}
          >
            <p
              className={`text-sm font-medium ${
                phase === p
                  ? p === 'setup'
                    ? 'text-blue-400'
                    : p === 'sign'
                    ? 'text-amber-400'
                    : 'text-emerald-400'
                  : 'text-dark-400'
              }`}
            >
              {i + 1}. {p.charAt(0).toUpperCase() + p.slice(1)}
            </p>
          </div>
        ))}
      </div>

      {/* Main content area */}
      <AnimatePresence mode="wait">
        {phase !== 'complete' ? (
          <motion.div
            key={`${phase}-${step}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6"
          >
            <div
              className={`p-6 rounded-xl ${
                currentSteps[step]?.isWarning
                  ? 'bg-red-500/10 border border-red-500/30'
                  : 'bg-dark-700/50 border border-dark-600/50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h4
                  className={`text-lg font-semibold ${
                    currentSteps[step]?.isWarning ? 'text-red-400' : 'text-dark-200'
                  }`}
                >
                  {currentSteps[step]?.title}
                </h4>
                <span className="text-dark-500 text-sm">
                  Step {step + 1}/{currentSteps.length}
                </span>
              </div>
              <div className="p-4 rounded-lg bg-dark-800/50 mb-3">
                <p className="text-xl font-mono text-amber-400">{currentSteps[step]?.value}</p>
              </div>
              <p
                className={`text-sm ${
                  currentSteps[step]?.isWarning ? 'text-red-300' : 'text-dark-400'
                }`}
              >
                {currentSteps[step]?.desc}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center"
          >
            <p className="text-4xl mb-2">&#10003;</p>
            <h4 className="text-lg font-semibold text-emerald-400">Signature Verified!</h4>
            <p className="text-dark-400 text-sm mt-2">
              The signature (r, s) is valid for message m under public key Q
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 text-sm"
        >
          Reset
        </button>
        <div className="flex-1" />
        {phase !== 'complete' && (
          <button
            onClick={nextStep}
            className="px-6 py-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 font-medium"
          >
            {step === currentSteps.length - 1
              ? phase === 'verify'
                ? 'Complete'
                : 'Next Phase'
              : 'Next Step'}
          </button>
        )}
      </div>

      {/* Nonce catastrophe warning */}
      <div className="border-t border-dark-700/50 pt-4">
        <button
          onClick={() => setShowNonceCatastrophe(!showNonceCatastrophe)}
          className="flex items-center gap-2 w-full text-left"
        >
          <span className="text-red-400">&#9888;</span>
          <span className="text-dark-300 text-sm font-medium">The Nonce Catastrophe</span>
          <motion.span
            className="text-dark-500 ml-auto"
            animate={{ rotate: showNonceCatastrophe ? 180 : 0 }}
          >
            &#9660;
          </motion.span>
        </button>

        <AnimatePresence>
          {showNonceCatastrophe && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                <p className="text-red-300 text-sm mb-3">
                  <strong>If you reuse a nonce k for two different messages:</strong>
                </p>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-dark-300">
                    s<sub>1</sub> = k<sup>-1</sup>(z<sub>1</sub> + rd) mod n
                  </p>
                  <p className="text-dark-300">
                    s<sub>2</sub> = k<sup>-1</sup>(z<sub>2</sub> + rd) mod n
                  </p>
                  <div className="my-3 border-t border-red-500/30" />
                  <p className="text-red-400">
                    k = (z<sub>1</sub> - z<sub>2</sub>) / (s<sub>1</sub> - s<sub>2</sub>) mod n
                  </p>
                  <p className="text-red-400 font-bold">
                    d = (s<sub>1</sub>k - z<sub>1</sub>) / r mod n
                  </p>
                </div>
                <p className="text-dark-400 text-xs mt-3">
                  <strong>Private key leaked!</strong> This happened to PlayStation 3 (2010),
                  Android Bitcoin wallets (2013), and others.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Summary diagram */}
      <div className="mt-4 p-4 rounded-xl bg-dark-700/30">
        <p className="text-dark-500 text-xs mb-3">ECDSA Overview</p>
        <div className="flex items-center justify-between text-center">
          <div className="flex-1">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">
              &#128274;
            </div>
            <p className="text-xs text-dark-400 mt-1">Private Key d</p>
          </div>
          <div className="text-dark-600">&#8594;</div>
          <div className="flex-1">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xl">
              &#9998;
            </div>
            <p className="text-xs text-dark-400 mt-1">Sign (r, s)</p>
          </div>
          <div className="text-dark-600">&#8594;</div>
          <div className="flex-1">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl">
              &#10003;
            </div>
            <p className="text-xs text-dark-400 mt-1">Verify with Q</p>
          </div>
        </div>
      </div>
    </div>
  );
}
