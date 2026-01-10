// =============================================================================
// RACING GAME PAGE
// =============================================================================
// Main page component that orchestrates the racing game experience.
// Supports both single-player and multiplayer modes.
// =============================================================================

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useGamification } from '@shared/gamification/GamificationContext';
import { useNostrAuth } from '@shared/contexts/NostrAuthContext';
import { LEVEL_THRESHOLDS } from '@shared/gamification';
import { FEATURES } from '@/config';
import { useGameSession } from '../hooks/useGameSession';
import { useGameRoom } from '../hooks/useGameRoom';
import {
  GameLobby,
  GameCountdown,
  GameRound,
  GameResults,
  MultiplayerLobby,
  MultiplayerGame,
} from '../components/game';

type GameMode = 'menu' | 'single' | 'multi';

export default function RacingGame() {
  const { state, recordRaceGame, syncStatus } = useGamification();
  const { npub, connect, disconnect, isConnecting, error: authError, hasExtension, extensionChecked } = useNostrAuth();
  const [gameMode, setGameMode] = useState<GameMode>('menu');
  const isSignedIn = !!npub;

  // Single-player hooks
  const [session, actions] = useGameSession();

  // Multiplayer hooks
  const [roomState, roomActions] = useGameRoom(npub);

  // Get user level and XP for display
  const userLevel = state.user.level;
  const totalXP = state.user.totalXP;
  const racingStats = state.racingStats;

  // Calculate XP progress to next level
  const currentLevelXP = LEVEL_THRESHOLDS[userLevel - 1] || 0;
  const nextLevelXP = LEVEL_THRESHOLDS[userLevel] || currentLevelXP + 1000;
  const xpInCurrentLevel = totalXP - currentLevelXP;
  const xpNeededForNextLevel = nextLevelXP - currentLevelXP;
  const xpProgress = Math.min(100, Math.round((xpInCurrentLevel / xpNeededForNextLevel) * 100));

  // Handle single-player game completion - record stats and award XP
  const handleGameComplete = useCallback(() => {
    const result = actions.getGameResult();

    if (result) {
      // Record the game result to update stats and award XP
      recordRaceGame(result);
    }
  }, [actions, recordRaceGame]);

  // Watch for single-player game completion
  useEffect(() => {
    if (session.phase === 'results') {
      handleGameComplete();
    }
  }, [session.phase, handleGameComplete]);

  // Calculate if this is a new high score
  const isNewHighScore =
    session.phase === 'results' &&
    session.score > (racingStats?.highScore ?? 0);

  // Handle returning to menu
  const handleReturnToMenu = useCallback(() => {
    setGameMode('menu');
    actions.returnToLobby();
    roomActions.disconnect();
  }, [actions, roomActions]);

  // Main Menu
  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Modular Arithmetic Racing
            </h1>
            <p className="text-dark-300">
              Race to compute remainders!
            </p>
          </div>

          {/* Stats Preview */}
          <div className="bg-dark-800 rounded-lg p-4 mb-6">
            {/* Level and XP Progress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-purple-400 font-bold">Level {userLevel}</span>
                <span className="text-dark-400 text-sm">{xpInCurrentLevel} / {xpNeededForNextLevel} XP</span>
              </div>
              <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 transition-all duration-300"
                  style={{ width: `${xpProgress}%` }}
                />
              </div>
            </div>

            {/* Other Stats */}
            <div className="grid grid-cols-4 gap-3 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-400">
                  {totalXP.toLocaleString()}
                </div>
                <div className="text-sm text-dark-400">XP</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">
                  {racingStats?.highScore.toLocaleString() ?? 0}
                </div>
                <div className="text-sm text-dark-400">High Score</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">
                  {racingStats?.gamesPlayed ?? 0}
                </div>
                <div className="text-sm text-dark-400">Games</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">
                  {racingStats?.longestStreak ?? 0}
                </div>
                <div className="text-sm text-dark-400">Best Streak</div>
              </div>
            </div>
          </div>

          {/* Sign In Section */}
          {FEATURES.nostrAuth && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-6"
            >
              {isSignedIn ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-400 text-sm font-medium">
                        Progress synced to cloud
                      </span>
                    </div>
                    <button
                      onClick={disconnect}
                      className="text-dark-400 hover:text-white text-sm transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                  <div className="text-xs text-dark-500 mt-1">
                    {npub?.slice(0, 16)}...
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-yellow-400 text-sm font-medium">
                      Progress not saved!
                    </span>
                  </div>
                  {extensionChecked && !hasExtension ? (
                    <>
                      <p className="text-dark-400 text-xs mb-3">
                        Install a Nostr extension to save your scores.
                      </p>
                      <a
                        href="https://getalby.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-colors text-sm text-center"
                      >
                        Get Alby Extension
                      </a>
                      <p className="text-dark-500 text-xs mt-2 text-center">
                        Or use nos2x, Flamingo, or any NIP-07 extension
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-dark-400 text-xs mb-3">
                        Sign in with Nostr to save your scores permanently.
                      </p>
                      {authError && (
                        <p className="text-red-400 text-xs mb-2">{authError}</p>
                      )}
                      <button
                        onClick={connect}
                        disabled={isConnecting || !extensionChecked}
                        className="w-full py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-dark-600 text-white font-bold rounded-lg transition-colors text-sm"
                      >
                        {!extensionChecked ? 'Checking...' : isConnecting ? 'Connecting...' : 'Sign in with Nostr'}
                      </button>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* Mode Selection */}
          <div className="space-y-4">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => setGameMode('single')}
              className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xl rounded-lg transition-colors"
            >
              Single Player
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setGameMode('multi')}
              disabled={!npub}
              className="w-full py-4 bg-dark-700 hover:bg-dark-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xl rounded-lg transition-colors border border-dark-500"
            >
              Multiplayer
              {!npub && (
                <span className="block text-sm font-normal text-dark-400 mt-1">
                  Sign in to play online
                </span>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Single Player Mode
  if (gameMode === 'single') {
    return (
      <div className="min-h-screen bg-dark-950">
        {/* Lobby */}
        {session.phase === 'lobby' && (
          <>
            <button
              onClick={handleReturnToMenu}
              className="absolute top-4 left-4 text-dark-400 hover:text-white transition-colors"
            >
              ← Back
            </button>
            <GameLobby
              userLevel={userLevel}
              racingStats={racingStats}
              onStartGame={actions.startGame}
            />
          </>
        )}

        {/* Countdown */}
        {session.phase === 'countdown' && (
          <GameCountdown onComplete={actions.completeCountdown} />
        )}

        {/* Active Game */}
        {session.phase === 'playing' && session.currentProblem && (
          <GameRound
            problem={session.currentProblem}
            tier={session.tier}
            roundNumber={session.currentRound}
            totalRounds={session.roundCount}
            score={session.score}
            streak={session.streak}
            onAnswer={actions.submitAnswer}
            lastResult={session.lastRoundResult}
          />
        )}

        {/* Results */}
        {session.phase === 'results' && (
          <GameResults
            tier={session.tier}
            totalScore={session.score}
            correctAnswers={session.roundResults.filter((r) => r.isCorrect).length}
            incorrectAnswers={session.roundResults.filter((r) => !r.isCorrect).length}
            maxStreak={(() => {
              let max = 0;
              let current = 0;
              for (const r of session.roundResults) {
                if (r.isCorrect) {
                  current++;
                  max = Math.max(max, current);
                } else {
                  current = 0;
                }
              }
              return max;
            })()}
            fastAnswers={session.roundResults.filter((r) => r.isCorrect && r.responseTimeMs < 2000).length}
            avgResponseTime={
              session.roundResults.length > 0
                ? Math.round(
                    session.roundResults.reduce((sum, r) => sum + r.responseTimeMs, 0) /
                      session.roundResults.length
                  )
                : 0
            }
            xpEarned={actions.getFinalScore()?.xpEarned ?? 0}
            isNewHighScore={isNewHighScore}
            previousHighScore={racingStats?.highScore}
            onPlayAgain={actions.playAgain}
            onChangeTier={actions.returnToLobby}
            onExit={handleReturnToMenu}
          />
        )}
      </div>
    );
  }

  // Multiplayer Mode
  if (gameMode === 'multi' && npub) {
    const room = roomState.room;
    const isHost = room?.hostNpub === npub;

    // Show multiplayer lobby if no active room or waiting
    if (!room || room.status === 'waiting') {
      return (
        <div className="min-h-screen bg-dark-950">
          <button
            onClick={handleReturnToMenu}
            className="absolute top-4 left-4 text-dark-400 hover:text-white transition-colors z-10"
          >
            ← Back
          </button>
          <MultiplayerLobby
            userNpub={npub}
            userLevel={userLevel}
            room={room}
            isCreating={roomState.status === 'creating'}
            isJoining={roomState.status === 'joining'}
            error={roomState.error}
            onCreateRoom={roomActions.createRoom}
            onJoinRoom={roomActions.joinRoom}
            onSetReady={roomActions.setReady}
            onLeaveRoom={roomActions.leaveRoom}
            onBack={handleReturnToMenu}
          />
        </div>
      );
    }

    // Show active multiplayer game
    return (
      <MultiplayerGame
        room={room}
        userNpub={npub}
        lastAnswerResult={roomState.lastAnswerResult}
        finalRankings={roomState.finalRankings}
        isHost={isHost}
        onStartRound={roomActions.startRound}
        onSubmitAnswer={roomActions.submitAnswer}
        onAdvanceRound={roomActions.advanceRound}
        onLeaveRoom={handleReturnToMenu}
      />
    );
  }

  // Fallback (should not happen)
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <button
        onClick={handleReturnToMenu}
        className="text-white hover:text-cyan-400"
      >
        Return to Menu
      </button>
    </div>
  );
}
