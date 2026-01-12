// =============================================================================
// GAME ROUND
// =============================================================================
// Active game round with problem display and answer input.
// No time limit - speed bonuses are based on absolute response time.
// =============================================================================

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { BaseConversionProblem, BaseRacingTier } from '../../lib/problemGenerator';
import { formatPoints, formatTime } from '../../lib/scoring';
import { playCorrectSound, playWrongSound, playClickSound } from '../../lib/sounds';

interface GameRoundProps {
  problem: BaseConversionProblem;
  tier: BaseRacingTier;
  roundNumber: number;
  totalRounds: number;
  score: number;
  streak: number;
  onAnswer: (answer: string, responseTimeMs: number) => void;
  lastResult?: {
    isCorrect: boolean;
    points: number;
    correctAnswer: string;
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

  // Check if hex input is needed (tier 4+)
  const showHexButtons = tier >= 4;

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

    // Submit if we have any input
    if (answer.trim() !== '') {
      playClickSound();
      onAnswer(answer.trim(), responseTime);
    }
  }, [answer, startTime, onAnswer]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && answer.trim() !== '') {
      handleSubmit();
    }
  };

  // Filter input to only allow valid characters (0-9, A-F for hex)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    // Only allow hex characters (0-9, A-F)
    const filtered = value.replace(/[^0-9A-F]/g, '');
    setAnswer(filtered);
  };

  const appendCharacter = (char: string) => {
    setAnswer(answer + char);
    inputRef.current?.focus();
  };

  const clearLastCharacter = () => {
    setAnswer(answer.slice(0, -1));
    inputRef.current?.focus();
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
            <div className="text-2xl font-bold text-emerald-400">{score.toLocaleString()}</div>
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
        <div className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {problem.displayText}
        </div>
        <div className="text-xl text-dark-400">
          = ?
        </div>
      </motion.div>

      {/* Answer Input */}
      <div className="flex gap-4 mb-6">
        <input
          ref={inputRef}
          type="text"
          inputMode="text"
          value={answer}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="?"
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="characters"
          spellCheck={false}
          className="
            flex-1 text-center text-4xl font-bold py-4
            bg-dark-800 border-2 border-dark-600 rounded-lg
            text-white placeholder-dark-500 uppercase
            focus:border-emerald-500 focus:outline-none
          "
        />
        <button
          onClick={handleSubmit}
          disabled={answer.trim() === ''}
          className="
            px-8 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-dark-600 disabled:cursor-not-allowed
            text-white font-bold text-xl rounded-lg
            transition-colors
          "
        >
          Submit
        </button>
      </div>

      {/* Number/Hex Pad (for mobile) */}
      <div className="sm:hidden">
        {/* Numbers 0-9 */}
        <div className="grid grid-cols-5 gap-2 mb-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              onClick={() => appendCharacter(num.toString())}
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

        {/* Hex letters A-F (only shown for tier 4+) */}
        {showHexButtons && (
          <div className="grid grid-cols-6 gap-2 mb-2">
            {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
              <button
                key={letter}
                onClick={() => appendCharacter(letter)}
                className="
                  py-4 bg-emerald-700 hover:bg-emerald-600
                  text-white font-bold text-2xl rounded-lg
                  transition-colors
                "
              >
                {letter}
              </button>
            ))}
          </div>
        )}

        {/* Clear button */}
        <button
          onClick={clearLastCharacter}
          disabled={answer === ''}
          className="
            w-full py-3 bg-dark-600 hover:bg-dark-500 disabled:opacity-50
            text-dark-300 font-medium rounded-lg
            transition-colors
          "
        >
          Clear
        </button>
      </div>
    </div>
  );
}
