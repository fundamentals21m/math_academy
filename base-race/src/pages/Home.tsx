import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COURSE_NAME, COURSE_DESCRIPTION, COURSE_ICON, FEATURES } from '@/config';
import { useGamification } from '@/contexts/GamificationContext';
import { XPDisplay, StreakBadge } from '@/components/gamification';

export default function Home() {
  const gamificationContext = useGamification();
  const gamification = FEATURES.gamification ? gamificationContext : null;
  const racingStats = gamification?.state.racingStats;

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-6xl mb-4 block">{COURSE_ICON}</span>
          <h1 className="text-4xl font-bold text-dark-100 mb-4">{COURSE_NAME}</h1>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">{COURSE_DESCRIPTION}</p>
        </motion.div>

        {/* Stats Card */}
        {FEATURES.gamification && gamification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-dark-100">Your Stats</h2>
              <StreakBadge streak={gamification.state.streak.currentStreak} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <XPDisplay
                  xp={gamification.state.user.totalXP}
                  level={gamification.state.user.level}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl font-bold text-cyan-400">
                  {racingStats?.highScore?.toLocaleString() ?? 0}
                </div>
                <div className="text-sm text-dark-400">High Score</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl font-bold text-dark-100">
                  {racingStats?.gamesPlayed ?? 0}
                </div>
                <div className="text-sm text-dark-400">Games Played</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl font-bold text-orange-400">
                  {racingStats?.longestStreak ?? 0}
                </div>
                <div className="text-sm text-dark-400">Best Streak</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Play Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <Link
            to="/play"
            className="inline-block px-12 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-2xl rounded-xl transition-colors shadow-lg shadow-cyan-500/20"
          >
            Start Racing
          </Link>
        </motion.div>

        {/* How to Play */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 mb-8"
        >
          <h2 className="text-xl font-bold text-dark-100 mb-4">How to Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-dark-100 mb-2">Calculate Remainders</h3>
              <p className="text-sm text-dark-400">
                Given a number and modulus, compute the remainder as fast as you can.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-dark-100 mb-2">Beat the Clock</h3>
              <p className="text-sm text-dark-400">
                Answer quickly for speed bonuses. Build streaks for multipliers up to 1.5x!
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-dark-100 mb-2">Level Up</h3>
              <p className="text-sm text-dark-400">
                Earn XP to unlock harder tiers with bigger rewards. Master tier awaits!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Difficulty Tiers Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50"
        >
          <h2 className="text-xl font-bold text-dark-100 mb-4">Difficulty Tiers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Beginner', level: 1, color: 'text-green-400' },
              { name: 'Novice', level: 2, color: 'text-blue-400' },
              { name: 'Intermediate', level: 3, color: 'text-cyan-400' },
              { name: 'Advanced', level: 5, color: 'text-yellow-400' },
              { name: 'Expert', level: 7, color: 'text-orange-400' },
              { name: 'Master', level: 9, color: 'text-red-400' },
            ].map((tier) => {
              const isUnlocked = (gamification?.state.user.level ?? 1) >= tier.level;
              return (
                <div
                  key={tier.name}
                  className={`p-3 rounded-lg border ${
                    isUnlocked
                      ? 'border-dark-600 bg-dark-700/50'
                      : 'border-dark-700 bg-dark-800/30 opacity-60'
                  }`}
                >
                  <div className={`font-semibold ${isUnlocked ? tier.color : 'text-dark-500'}`}>
                    {tier.name}
                  </div>
                  <div className="text-xs text-dark-500">
                    {isUnlocked ? 'Unlocked' : `Level ${tier.level}`}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
