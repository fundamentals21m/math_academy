// =============================================================================
// GAME LOBBY
// =============================================================================
// Entry point for the racing game. Allows tier selection and game mode choice.
// =============================================================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { RacingStats } from '@shared/gamification';
import {
  BASE_RACING_TIERS,
  getTierBasesDescription,
  type BaseRacingTier,
} from '../../lib/problemGenerator';

interface GameLobbyProps {
  userLevel: number;
  racingStats?: RacingStats;
  onStartGame: (tier: BaseRacingTier, roundCount: number) => void;
}

export function GameLobby({ racingStats, onStartGame }: GameLobbyProps) {
  const [selectedTier, setSelectedTier] = useState<BaseRacingTier>(1);
  const [roundCount, setRoundCount] = useState(10);

  const handleStartGame = () => {
    onStartGame(selectedTier, roundCount);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Base Conversion Racing
        </h1>
        <p className="text-dark-300">
          Race to convert numbers between binary, decimal, and hex!
        </p>
      </motion.div>

      {/* Stats Card */}
      {racingStats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-800 rounded-lg p-4 mb-6"
        >
          <h2 className="text-lg font-semibold text-white mb-3">Your Stats</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {racingStats.highScore.toLocaleString()}
              </div>
              <div className="text-sm text-dark-400">High Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {racingStats.gamesPlayed}
              </div>
              <div className="text-sm text-dark-400">Games</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                {racingStats.longestStreak}
              </div>
              <div className="text-sm text-dark-400">Best Streak</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tier Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-white mb-3">Select Difficulty</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {BASE_RACING_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.tier;

            return (
              <button
                key={tier.tier}
                onClick={() => setSelectedTier(tier.tier)}
                className={`
                  relative p-4 rounded-lg border-2 transition-all
                  ${isSelected
                    ? 'border-emerald-500 bg-emerald-500/10'
                    : 'border-dark-600 bg-dark-800 hover:border-dark-500'
                  }
                `}
              >
                <div className={`text-lg font-bold ${isSelected ? 'text-emerald-400' : 'text-white'}`}>
                  {tier.name}
                </div>
                <div className="text-sm text-dark-400 mt-1">
                  {tier.basePoints} pts base
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Round Count Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-lg font-semibold text-white mb-3">Rounds</h2>
        <div className="flex gap-3">
          {[5, 10, 15, 20].map((count) => (
            <button
              key={count}
              onClick={() => setRoundCount(count)}
              className={`
                flex-1 py-3 rounded-lg border-2 transition-all font-medium
                ${roundCount === count
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                  : 'border-dark-600 bg-dark-800 text-white hover:border-dark-500'
                }
              `}
            >
              {count}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Selected Tier Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-dark-800 rounded-lg p-4 mb-6"
      >
        {(() => {
          const tier = BASE_RACING_TIERS.find(t => t.tier === selectedTier)!;
          const basesDescription = getTierBasesDescription(selectedTier);
          return (
            <>
              <h3 className="font-semibold text-white mb-2">{tier.name} Mode</h3>
              <ul className="text-sm text-dark-300 space-y-1">
                <li>Bases: {basesDescription}</li>
                <li>Numbers: {tier.range[0]} - {tier.range[1]}</li>
                <li>Base points: {tier.basePoints} per correct answer</li>
                <li>Speed bonus: Answer faster for more points!</li>
              </ul>
            </>
          );
        })()}
      </motion.div>

      {/* Start Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleStartGame}
        className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xl rounded-lg transition-colors"
      >
        Start Game
      </motion.button>
    </div>
  );
}
