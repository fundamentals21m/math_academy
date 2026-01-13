import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
}

interface Session {
  id: number;
  step: 'sign' | 'sign_prime' | 'complete';
  commitment?: string;
}

/**
 * Interactive visualization of the Sequential Unforgeability (SUNF) game for blind signatures.
 */
export function SUNFGameAnimator({ className = '' }: Props) {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [forgeries, setForgeries] = useState<number>(0);
  const [gamePhase, setGamePhase] = useState<'setup' | 'playing' | 'submit' | 'result'>('setup');
  const [result, setResult] = useState<'pending' | 'win' | 'lose'>('pending');

  const k = sessions.filter(s => s.step === 'complete').length; // Completed sessions
  const n = forgeries; // Number of forgeries submitted

  const startGame = () => {
    setSessions([]);
    setForgeries(0);
    setResult('pending');
    setGamePhase('playing');
  };

  const callSign = () => {
    const newSession: Session = {
      id: sessions.length + 1,
      step: 'sign',
      commitment: `R_${sessions.length + 1}`,
    };
    setSessions([...sessions, newSession]);
  };

  const callSignPrime = (sessionId: number) => {
    setSessions(sessions.map(s =>
      s.id === sessionId ? { ...s, step: 'sign_prime' as const } : s
    ));
    // After a delay, mark as complete
    setTimeout(() => {
      setSessions(prev => prev.map(s =>
        s.id === sessionId ? { ...s, step: 'complete' as const } : s
      ));
    }, 500);
  };

  const submitForgeries = () => {
    setGamePhase('submit');
  };

  const addForgery = () => {
    setForgeries(f => f + 1);
  };

  const checkResult = () => {
    // Win condition: k < n (more forgeries than sessions)
    const completedSessions = sessions.filter(s => s.step === 'complete').length;
    if (forgeries > completedSessions) {
      setResult('win');
    } else {
      setResult('lose');
    }
    setGamePhase('result');
  };

  const reset = () => {
    setSessions([]);
    setForgeries(0);
    setResult('pending');
    setGamePhase('setup');
  };

  return (
    <div className={`p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 ${className}`}>
      <h3 className="text-xl font-bold text-dark-100 mb-2">
        Sequential Unforgeability Game (SUNF)
      </h3>
      <p className="text-dark-400 text-sm mb-4">
        The adversary wins if they can produce more valid signatures than signing sessions completed.
      </p>

      {/* Game status */}
      <div className="flex gap-4 mb-6 p-4 rounded-xl bg-dark-700/30">
        <div className="flex-1 text-center">
          <div className="text-3xl font-bold text-primary-400">{k}</div>
          <div className="text-dark-400 text-xs">Sessions (k)</div>
        </div>
        <div className="flex items-center text-dark-500 text-2xl">
          {k < n ? '<' : k > n ? '>' : '='}
        </div>
        <div className="flex-1 text-center">
          <div className="text-3xl font-bold text-amber-400">{n}</div>
          <div className="text-dark-400 text-xs">Forgeries (n)</div>
        </div>
        <div className="flex items-center">
          <div className={`px-3 py-1 rounded-lg text-sm font-medium ${
            k < n ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'
          }`}>
            {k < n ? 'Adversary winning!' : 'Scheme secure'}
          </div>
        </div>
      </div>

      {/* Game phases */}
      <AnimatePresence mode="wait">
        {gamePhase === 'setup' && (
          <motion.div
            key="setup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <h4 className="text-purple-400 font-bold mb-2">Game Setup</h4>
              <p className="text-dark-300 text-sm">
                The challenger generates a signing key pair (sk*, pk*) and gives pk* to the adversary.
                The adversary's goal: produce <strong>more valid signatures</strong> than the number
                of signing sessions they complete.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startGame}
              className="w-full px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium"
            >
              Start Game
            </motion.button>
          </motion.div>
        )}

        {gamePhase === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {/* Oracle buttons */}
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={callSign}
                className="px-4 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-400 font-medium"
              >
                Call Sign()
                <p className="text-xs text-cyan-300/60 mt-1">Start new session</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={submitForgeries}
                className="px-4 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-400 font-medium"
              >
                Submit Forgeries
                <p className="text-xs text-amber-300/60 mt-1">End oracle phase</p>
              </motion.button>
            </div>

            {/* Sessions list */}
            <div className="space-y-2">
              <h4 className="text-dark-300 text-sm font-medium">Active Sessions:</h4>
              {sessions.length === 0 ? (
                <p className="text-dark-500 text-sm p-3 rounded-lg bg-dark-700/30 text-center">
                  No sessions started yet
                </p>
              ) : (
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {sessions.map((session) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`p-3 rounded-lg border ${
                        session.step === 'complete'
                          ? 'bg-emerald-500/10 border-emerald-500/30'
                          : session.step === 'sign_prime'
                          ? 'bg-amber-500/10 border-amber-500/30'
                          : 'bg-cyan-500/10 border-cyan-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-mono text-sm">Session #{session.id}</span>
                          <span className={`ml-2 text-xs px-2 py-0.5 rounded ${
                            session.step === 'complete'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : session.step === 'sign_prime'
                              ? 'bg-amber-500/20 text-amber-400'
                              : 'bg-cyan-500/20 text-cyan-400'
                          }`}>
                            {session.step === 'complete' ? 'Complete ✓' : session.step === 'sign_prime' ? 'Completing...' : 'Awaiting Sign\''}
                          </span>
                        </div>
                        {session.step === 'sign' && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => callSignPrime(session.id)}
                            className="px-3 py-1 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-xs font-medium"
                          >
                            Call Sign'(c)
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {gamePhase === 'submit' && (
          <motion.div
            key="submit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <h4 className="text-amber-400 font-bold mb-2">Submit Forgeries</h4>
              <p className="text-dark-300 text-sm">
                Submit message-signature pairs. Each must be valid and on a distinct message.
                Win if you submit more forgeries than completed sessions!
              </p>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={addForgery}
                className="flex-1 px-4 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-400 font-medium"
              >
                Add Valid Forgery (m_{forgeries + 1}, σ_{forgeries + 1})
              </motion.button>
            </div>

            {forgeries > 0 && (
              <div className="p-3 rounded-lg bg-dark-700/30">
                <p className="text-dark-300 text-sm">
                  Forgeries submitted: <span className="text-amber-400 font-bold">{forgeries}</span>
                </p>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={checkResult}
              className="w-full px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium"
            >
              Check Win Condition
            </motion.button>
          </motion.div>
        )}

        {gamePhase === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className={`p-6 rounded-xl text-center ${
              result === 'win'
                ? 'bg-red-500/20 border border-red-500/30'
                : 'bg-emerald-500/20 border border-emerald-500/30'
            }`}>
              <div className="text-4xl mb-2">{result === 'win' ? '💀' : '🛡️'}</div>
              <h4 className={`text-xl font-bold mb-2 ${
                result === 'win' ? 'text-red-400' : 'text-emerald-400'
              }`}>
                {result === 'win' ? 'Adversary Wins!' : 'Scheme Secure!'}
              </h4>
              <p className={`text-sm ${result === 'win' ? 'text-red-300' : 'text-emerald-300'}`}>
                {result === 'win'
                  ? `${n} forgeries > ${k} sessions (k < n satisfied)`
                  : `${n} forgeries ≤ ${k} sessions (cannot forge more than signed)`
                }
              </p>
            </div>

            <div className="p-4 rounded-xl bg-dark-700/30">
              <p className="text-dark-400 text-sm">
                <strong className="text-dark-200">SUNF Security:</strong> A blind signature scheme is
                SUNF-secure if no efficient adversary can win this game with non-negligible probability.
                The sequential constraint prevents interleaving attacks.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={reset}
              className="w-full px-6 py-3 rounded-xl bg-dark-600 hover:bg-dark-500 text-dark-200 font-medium"
            >
              Play Again
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
