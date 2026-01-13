import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

type Phase = 'input' | 'committing' | 'committed' | 'reveal' | 'collision';

/**
 * Interactive visualization of the commitment binding property using a locked box metaphor.
 * Shows why finding two values with the same commitment is computationally infeasible.
 */
export function CommitmentBindingGame({ className = '' }: Props) {
  const [phase, setPhase] = useState<Phase>('input');
  const [value, setValue] = useState('secret');
  const [commitment, setCommitment] = useState('');
  const [collisionAttempt, setCollisionAttempt] = useState('');
  const [showCollisionFailure, setShowCollisionFailure] = useState(false);

  // Simple hash simulation (not cryptographic, just for visualization)
  const computeHash = (v: string): string => {
    let hash = 0;
    for (let i = 0; i < v.length; i++) {
      const char = v.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16).padStart(8, '0').toUpperCase();
  };

  const handleCommit = () => {
    setPhase('committing');
    setTimeout(() => {
      setCommitment(computeHash(value));
      setPhase('committed');
    }, 1000);
  };

  const handleReveal = () => {
    setPhase('reveal');
  };

  const handleTryCollision = () => {
    setPhase('collision');
    setCollisionAttempt('');
    setShowCollisionFailure(false);
  };

  const handleCheckCollision = () => {
    setShowCollisionFailure(true);
  };

  const handleReset = () => {
    setPhase('input');
    setValue('secret');
    setCommitment('');
    setCollisionAttempt('');
    setShowCollisionFailure(false);
  };

  const collisionHash = collisionAttempt ? computeHash(collisionAttempt) : '';
  const isCollision = collisionHash === commitment && collisionAttempt !== value && collisionAttempt.length > 0;

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">
        Commitment Binding Game
      </h3>
      <p className="text-dark-400 text-sm mb-6">
        Commitments are like locked boxes: once committed, you cannot change what's inside.
      </p>

      {/* Lockbox Visualization */}
      <div className="flex justify-center mb-8">
        <svg viewBox="0 0 200 160" className="w-64 h-auto">
          {/* Box body */}
          <motion.rect
            x="40"
            y="60"
            width="120"
            height="80"
            rx="8"
            fill="#374151"
            stroke="#6366f1"
            strokeWidth="3"
          />

          {/* Box lid */}
          <motion.g
            animate={{
              rotateX: phase === 'input' || phase === 'reveal' ? 0 : -90,
            }}
            style={{ transformOrigin: '100px 60px' }}
            transition={{ duration: 0.5 }}
          >
            <rect
              x="40"
              y="30"
              width="120"
              height="35"
              rx="8"
              fill="#4b5563"
              stroke="#6366f1"
              strokeWidth="3"
            />
            {/* Lock */}
            <motion.g
              animate={{
                fill: phase === 'committed' || phase === 'collision' ? '#ef4444' : '#9ca3af',
              }}
            >
              <rect x="90" y="55" width="20" height="15" rx="3" fill="currentColor" />
              <path
                d="M95 55 L95 48 A5 5 0 0 1 105 48 L105 55"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </motion.g>
          </motion.g>

          {/* Value inside box */}
          <AnimatePresence>
            {(phase === 'input' || phase === 'reveal') && (
              <motion.text
                x="100"
                y="110"
                textAnchor="middle"
                fill="#10b981"
                fontSize="14"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                "{value}"
              </motion.text>
            )}
          </AnimatePresence>

          {/* Commitment hash display */}
          {(phase === 'committed' || phase === 'collision' || phase === 'reveal') && (
            <motion.text
              x="100"
              y="155"
              textAnchor="middle"
              fill="#6366f1"
              fontSize="10"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Com = {commitment}
            </motion.text>
          )}
        </svg>
      </div>

      {/* Controls based on phase */}
      <div className="space-y-4">
        {phase === 'input' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-dark-300 text-sm mb-2">
                Enter a value to commit:
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 font-mono focus:outline-none focus:border-primary-500"
                placeholder="Enter your secret..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCommit}
              disabled={!value}
              className="w-full px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-white font-medium transition-colors"
            >
              Lock the Box (Commit)
            </motion.button>
          </motion.div>
        )}

        {phase === 'committing' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-4"
          >
            <div className="animate-spin w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full mx-auto mb-2" />
            <p className="text-dark-400">Computing commitment...</p>
          </motion.div>
        )}

        {phase === 'committed' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-emerald-400 text-sm">
                <strong>Committed!</strong> The box is locked. The commitment hash is public,
                but the value inside is hidden.
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReveal}
                className="flex-1 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
              >
                Reveal Value
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleTryCollision}
                className="flex-1 px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium"
              >
                Try to Cheat
              </motion.button>
            </div>
          </motion.div>
        )}

        {phase === 'reveal' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-emerald-400">
                <strong>Revealed:</strong> The value was <span className="font-mono">"{value}"</span>
              </p>
              <p className="text-dark-400 text-sm mt-2">
                Anyone can verify: Hash("{value}") = {commitment} ✓
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleReset}
              className="w-full px-4 py-2 rounded-xl bg-dark-600 hover:bg-dark-500 text-dark-200 font-medium"
            >
              Try Again
            </motion.button>
          </motion.div>
        )}

        {phase === 'collision' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-red-400 text-sm">
                <strong>Adversary's Challenge:</strong> Try to find a different value that
                produces the same commitment hash: <span className="font-mono">{commitment}</span>
              </p>
            </div>

            <div>
              <label className="block text-dark-300 text-sm mb-2">
                Enter a different value:
              </label>
              <input
                type="text"
                value={collisionAttempt}
                onChange={(e) => {
                  setCollisionAttempt(e.target.value);
                  setShowCollisionFailure(false);
                }}
                className="w-full px-4 py-2 rounded-xl bg-dark-700 border border-dark-600 text-dark-100 font-mono focus:outline-none focus:border-red-500"
                placeholder="Try to find a collision..."
              />
            </div>

            {collisionAttempt && (
              <div className="p-3 rounded-lg bg-dark-700/50">
                <p className="text-dark-400 text-sm">
                  Hash("{collisionAttempt}") = <span className={`font-mono ${collisionHash === commitment ? 'text-emerald-400' : 'text-red-400'}`}>{collisionHash}</span>
                </p>
                <p className="text-dark-500 text-xs mt-1">
                  Target: {commitment}
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckCollision}
                disabled={!collisionAttempt || collisionAttempt === value}
                className="flex-1 px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white font-medium"
              >
                Check Collision
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-dark-600 hover:bg-dark-500 text-dark-200 font-medium"
              >
                Reset
              </motion.button>
            </div>

            <AnimatePresence>
              {showCollisionFailure && !isCollision && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20"
                >
                  <p className="text-amber-400 text-sm">
                    <strong>No collision found!</strong> The hashes don't match.
                  </p>
                  <p className="text-dark-400 text-xs mt-2">
                    In a real cryptographic hash function, finding a collision requires
                    ~2<sup>128</sup> attempts on average — more than atoms in the observable universe.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Explanation */}
      <div className="mt-6 p-4 rounded-xl bg-dark-700/30 border border-dark-600/30">
        <h4 className="text-dark-200 font-medium mb-2">Why is this binding?</h4>
        <p className="text-dark-400 text-sm">
          A commitment scheme is <strong className="text-primary-400">binding</strong> if the probability
          of finding two different values (x₀, r₀) and (x₁, r₁) with the same commitment is
          <strong className="text-red-400"> negligible</strong> — so small that even with all the
          computing power in the world, you couldn't find one.
        </p>
      </div>
    </div>
  );
}
