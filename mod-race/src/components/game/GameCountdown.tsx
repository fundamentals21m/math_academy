// =============================================================================
// GAME COUNTDOWN
// =============================================================================
// 3-2-1 countdown animation before the game starts.
// =============================================================================

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playTickSound, playStartSound } from '../../lib/sounds';

interface GameCountdownProps {
  onComplete: () => void;
}

export function GameCountdown({ onComplete }: GameCountdownProps) {
  const [count, setCount] = useState(3);

  // Play tick sound on each count change
  useEffect(() => {
    if (count > 0) {
      playTickSound();
    } else {
      playStartSound();
    }
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-950/90 z-50">
      <AnimatePresence mode="wait">
        {count > 0 ? (
          <motion.div
            key={count}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-9xl font-bold text-cyan-400"
          >
            {count}
          </motion.div>
        ) : (
          <motion.div
            key="go"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-7xl font-bold text-green-400"
          >
            GO!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
