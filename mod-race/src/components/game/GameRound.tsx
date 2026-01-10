// =============================================================================
// GAME ROUND
// =============================================================================
// Active game round with problem display and answer input.
// No time limit - speed bonuses are based on absolute response time.
// =============================================================================

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { ModularProblem } from '../../lib/problemGenerator';
import { formatPoints, formatTime } from '../../lib/scoring';
import { playCorrectSound, playWrongSound, playClickSound } from '../../lib/sounds';
import type { RacingTier } from '@shared/gamification';

interface GameRoundProps {
  problem: ModularProblem;
  tier: RacingTier;
  roundNumber: number;
  totalRounds: number;
  score: number;
  streak: number;
  onAnswer: (answer: number, responseTimeMs: number) => void;
  lastResult?: {
    isCorrect: boolean;
    points: number;
    correctAnswer: number;
  };
}

export function GameRound({
  problem,
  tier,
  roundNumber,
  totalRounds,
  score,
  streak,
  onAnswer,
  lastResult,
}: GameRoundProps) {
  const [answer, setAnswer] = useState('');
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset when problem changes
  useEffect(() => {
    setAnswer('');
    setStartTime(Date.now());
    setElapsedTime(0);
    inputRef.current?.focus();
  }, [problem.id]);

  // Track elapsed time for display
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 100);

    return () => clearInterval(interval);
  }, [startTime]);

  // Play sound effects when result changes
  useEffect(() => {
    if (lastResult) {
      if (lastResult.isCorrect) {
        playCorrectSound();
      } else {
        playWrongSound();
      }
    }
  }, [lastResult]);

  const handleSubmit = useCallback(() => {
    const responseTime = Date.now() - startTime;
    const numAnswer = parseInt(answer, 10);

    // Only submit if we have a valid non-negative number
    if (!isNaN(numAnswer) && numAnswer >= 0) {
      playClickSound();
      onAnswer(numAnswer, responseTime);
    }
  }, [answer, startTime, onAnswer]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && answer.trim() !== '') {
      handleSubmit();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header Stats */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-lg">
          <span className="text-dark-400">Round </span>
          <span className="text-white font-bold">{roundNumber}</span>
          <span className="text-dark-400"> / {totalRounds}</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">{score.toLocaleString()}</div>
            <div className="text-xs text-dark-400">Score</div>
          </div>
          {streak > 0 && (
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-400">{streak}</div>
              <div className="text-xs text-dark-400">Streak</div>
            </div>
          )}
        </div>
      </div>

      {/* Last Result Feedback */}
      {lastResult && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            text-center mb-4 py-2 rounded-lg
            ${lastResult.isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}
          `}
        >
          {lastResult.isCorrect ? (
            <span>{formatPoints(lastResult.points)} points!</span>
          ) : (
            <span>Wrong! Answer was {lastResult.correctAnswer} ({formatPoints(lastResult.points)})</span>
          )}
        </motion.div>
      )}

      {/* Elapsed Time Display */}
      <div className="text-center mb-4 text-dark-400">
        <span className="text-lg">{formatTime(elapsedTime)}</span>
      </div>

      {/* Problem Display */}
      <motion.div
        key={problem.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-8"
      >
        <div className="text-5xl sm:text-6xl font-bold text-white mb-4">
          {problem.dividend} mod {problem.modulus}
        </div>
        <div className="text-xl text-dark-400">
          What is the remainder?
        </div>
      </motion.div>

      {/* Answer Input */}
      <div className="flex gap-4 mb-6">
        <input
          ref={inputRef}
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="?"
          autoFocus
          className="
            flex-1 text-center text-4xl font-bold py-4
            bg-dark-800 border-2 border-dark-600 rounded-lg
            text-white placeholder-dark-500
            focus:border-cyan-500 focus:outline-none
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
          "
        />
        <button
          onClick={handleSubmit}
          disabled={answer.trim() === ''}
          className="
            px-8 py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-dark-600 disabled:cursor-not-allowed
            text-white font-bold text-xl rounded-lg
            transition-colors
          "
        >
          Submit
        </button>
      </div>

      {/* Quick Number Pad (for mobile) */}
      <div className="grid grid-cols-5 gap-2 sm:hidden">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => setAnswer(answer + num.toString())}
            className="
              py-4 bg-dark-700 hover:bg-dark-600
              text-white font-bold text-2xl rounded-lg
              transition-colors
            "
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
