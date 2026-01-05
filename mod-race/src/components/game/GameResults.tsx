// =============================================================================
// GAME RESULTS
// =============================================================================
// Final results screen showing score, stats, and XP earned.
// =============================================================================

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { RacingTier } from '@magic-internet-math/shared';
import { getTierConfig } from '../../lib/problemGenerator';
import { formatTime } from '../../lib/scoring';
import { playVictorySound } from '../../lib/sounds';

interface GameResultsProps {
  tier: RacingTier;
  totalScore: number;
  correctAnswers: number;
  incorrectAnswers: number;
  maxStreak: number;
  fastAnswers: number;
  avgResponseTime: number;
  xpEarned: number;
  isNewHighScore: boolean;
  previousHighScore?: number;
  onPlayAgain: () => void;
  onChangeTier: () => void;
  onExit: () => void;
}

export function GameResults({
  tier,
  totalScore,
  correctAnswers,
  incorrectAnswers,
  maxStreak,
  fastAnswers,
  avgResponseTime,
  xpEarned,
  isNewHighScore,
  previousHighScore,
  onPlayAgain,
  onChangeTier,
  onExit,
}: GameResultsProps) {
  const config = getTierConfig(tier);
  const totalQuestions = correctAnswers + incorrectAnswers;
  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  // Play victory sound on mount
  useEffect(() => {
    playVictorySound();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Race Complete!
        </h1>
        <p className="text-dark-300">
          {config.name} Mode
        </p>
      </motion.div>

      {/* Score Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-8"
      >
        <div className="text-6xl font-bold text-cyan-400 mb-2">
          {totalScore.toLocaleString()}
        </div>
        <div className="text-xl text-dark-400">Final Score</div>

        {isNewHighScore && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4"
          >
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full font-bold">
              New High Score!
            </span>
            {previousHighScore !== undefined && previousHighScore > 0 && (
              <div className="text-sm text-dark-400 mt-2">
                Previous best: {previousHighScore.toLocaleString()}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
      >
        <div className="bg-dark-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-400">
            {correctAnswers}/{totalQuestions}
          </div>
          <div className="text-sm text-dark-400">Correct</div>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">
            {accuracy}%
          </div>
          <div className="text-sm text-dark-400">Accuracy</div>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-400">
            {maxStreak}
          </div>
          <div className="text-sm text-dark-400">Best Streak</div>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">
            {formatTime(avgResponseTime)}
          </div>
          <div className="text-sm text-dark-400">Avg Time</div>
        </div>
      </motion.div>

      {/* XP Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-dark-800 rounded-lg p-4 mb-8"
      >
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-white">XP Earned</span>
          <span className="text-2xl font-bold text-cyan-400">+{xpEarned}</span>
        </div>
        {fastAnswers >= 10 && (
          <div className="text-sm text-green-400 mt-2">
            Speed Demon bonus applied!
          </div>
        )}
        {maxStreak >= 10 && (
          <div className="text-sm text-orange-400 mt-1">
            Streak Master bonus applied!
          </div>
        )}
        {correctAnswers === totalQuestions && totalQuestions >= 10 && (
          <div className="text-sm text-yellow-400 mt-1">
            Perfect Game bonus applied!
          </div>
        )}
      </motion.div>

      {/* Performance Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap gap-2 justify-center mb-8"
      >
        {accuracy >= 90 && (
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
            Sharp Mind
          </span>
        )}
        {avgResponseTime < 2000 && (
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
            Lightning Fast
          </span>
        )}
        {maxStreak >= 5 && (
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
            On Fire
          </span>
        )}
        {fastAnswers >= 5 && (
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            Quick Thinker
          </span>
        )}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <button
          onClick={onPlayAgain}
          className="
            flex-1 py-3 bg-cyan-600 hover:bg-cyan-500
            text-white font-bold rounded-lg transition-colors
          "
        >
          Play Again
        </button>
        <button
          onClick={onChangeTier}
          className="
            flex-1 py-3 bg-dark-700 hover:bg-dark-600
            text-white font-medium rounded-lg transition-colors
          "
        >
          Change Tier
        </button>
        <button
          onClick={onExit}
          className="
            flex-1 py-3 bg-dark-800 hover:bg-dark-700 border border-dark-600
            text-dark-300 font-medium rounded-lg transition-colors
          "
        >
          Exit
        </button>
      </motion.div>
    </div>
  );
}
