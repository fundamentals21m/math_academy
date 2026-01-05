// =============================================================================
// MULTIPLAYER GAME
// =============================================================================
// Real-time multiplayer game UI showing opponents, live scoring, and game state.
// =============================================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RACING_TIERS } from '@magic-internet-math/shared';
import type { GameRoom, AnswerResult, FinalRanking } from '../../hooks/useGameRoom';

interface MultiplayerGameProps {
  room: GameRoom;
  userNpub: string;
  lastAnswerResult: AnswerResult | null;
  finalRankings: FinalRanking[] | null;
  isHost: boolean;
  onStartRound: () => void;
  onSubmitAnswer: (answer: number) => Promise<AnswerResult>;
  onAdvanceRound: () => void;
  onLeaveRoom: () => void;
}

export function MultiplayerGame({
  room,
  userNpub,
  lastAnswerResult,
  finalRankings,
  isHost,
  onStartRound,
  onSubmitAnswer,
  onAdvanceRound,
  onLeaveRoom,
}: MultiplayerGameProps) {
  // Show countdown phase
  if (room.status === 'countdown') {
    return (
      <CountdownPhase
        isHost={isHost}
        onStart={onStartRound}
      />
    );
  }

  // Show completed phase
  if (room.status === 'completed' || finalRankings) {
    return (
      <ResultsPhase
        room={room}
        userNpub={userNpub}
        finalRankings={finalRankings || []}
        onLeave={onLeaveRoom}
      />
    );
  }

  // Show active game phase
  return (
    <ActiveGamePhase
      room={room}
      userNpub={userNpub}
      lastAnswerResult={lastAnswerResult}
      isHost={isHost}
      onSubmitAnswer={onSubmitAnswer}
      onAdvanceRound={onAdvanceRound}
    />
  );
}

// =============================================================================
// COUNTDOWN PHASE
// =============================================================================

interface CountdownPhaseProps {
  isHost: boolean;
  onStart: () => void;
}

function CountdownPhase({ isHost, onStart }: CountdownPhaseProps) {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isHost) {
      // Host starts the first round after countdown
      onStart();
    }
  }, [countdown, isHost, onStart]);

  return (
    <div className="fixed inset-0 bg-dark-900 flex items-center justify-center">
      <motion.div
        key={countdown}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.5, opacity: 0 }}
        className="text-center"
      >
        {countdown > 0 ? (
          <div className="text-9xl font-bold text-cyan-400">
            {countdown}
          </div>
        ) : (
          <div className="text-6xl font-bold text-green-400">
            GO!
          </div>
        )}
      </motion.div>
    </div>
  );
}

// =============================================================================
// ACTIVE GAME PHASE
// =============================================================================

interface ActiveGamePhaseProps {
  room: GameRoom;
  userNpub: string;
  lastAnswerResult: AnswerResult | null;
  isHost: boolean;
  onSubmitAnswer: (answer: number) => Promise<AnswerResult>;
  onAdvanceRound: () => void;
}

function ActiveGamePhase({
  room,
  userNpub,
  lastAnswerResult,
  isHost,
  onSubmitAnswer,
  onAdvanceRound,
}: ActiveGamePhaseProps) {
  const [userInput, setUserInput] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const tierConfig = RACING_TIERS.find(t => t.tier === room.tier)!;

  // Sort players by score
  const sortedPlayers = Object.values(room.players)
    .sort((a, b) => b.score - a.score);

  // Reset state when round changes
  useEffect(() => {
    setUserInput('');
    setHasAnswered(false);
    setIsSubmitting(false);
    setElapsedTime(0);
    inputRef.current?.focus();
  }, [room.currentRound]);

  // Track elapsed time
  useEffect(() => {
    if (!room.roundStartedAt || hasAnswered) return;

    const startTime = room.roundStartedAt.toMillis();

    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 100);

    return () => clearInterval(interval);
  }, [room.roundStartedAt, hasAnswered]);

  const handleSubmit = useCallback(async () => {
    if (hasAnswered || isSubmitting || !userInput) return;

    const answer = parseInt(userInput, 10);
    if (isNaN(answer) || answer < 0) return;

    setIsSubmitting(true);
    try {
      await onSubmitAnswer(answer);
      setHasAnswered(true);

      // Host advances after a delay
      if (isHost) {
        setTimeout(onAdvanceRound, 2000);
      }
    } catch {
      // Already answered or other error
      setHasAnswered(true);
    }
    setIsSubmitting(false);
  }, [userInput, hasAnswered, isSubmitting, onSubmitAnswer, isHost, onAdvanceRound]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }, [handleSubmit]);

  // Format elapsed time
  const formatElapsed = (ms: number) => {
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(1)}s`;
  };

  return (
    <div className="min-h-screen bg-dark-900 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex justify-between items-center text-dark-400">
          <span>Round {room.currentRound}/{room.totalRounds}</span>
          <span>{tierConfig.name}</span>
        </div>

        {/* Elapsed Time */}
        <div className="mt-2 text-center text-dark-400">
          {formatElapsed(elapsedTime)}
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Game Area */}
        <div className="lg:col-span-2">
          {/* Problem Display */}
          <motion.div
            key={room.currentRound}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-800 rounded-xl p-8 mb-6 text-center"
          >
            {room.currentProblem ? (
              <div className="text-4xl font-bold text-white">
                {room.currentProblem.displayText} = ?
              </div>
            ) : (
              <div className="text-2xl text-dark-400">
                Waiting for problem...
              </div>
            )}
          </motion.div>

          {/* Answer Input */}
          {!hasAnswered ? (
            <div className="flex gap-4">
              <input
                ref={inputRef}
                type="number"
                inputMode="numeric"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Your answer"
                className="flex-1 text-center text-3xl font-bold py-4 bg-dark-800 border-2 border-dark-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                autoFocus
                disabled={hasAnswered}
              />
              <button
                onClick={handleSubmit}
                disabled={!userInput || isSubmitting}
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-dark-600 text-white font-bold text-xl rounded-lg transition-colors"
              >
                {isSubmitting ? '...' : 'Submit'}
              </button>
            </div>
          ) : (
            <AnswerFeedback result={lastAnswerResult} />
          )}
        </div>

        {/* Scoreboard */}
        <div className="bg-dark-800 rounded-xl p-4">
          <h3 className="text-lg font-bold text-white mb-4">Scoreboard</h3>
          <div className="space-y-2">
            {sortedPlayers.map((player, index) => (
              <div
                key={player.npub}
                className={`
                  flex items-center justify-between p-2 rounded-lg
                  ${player.npub === userNpub ? 'bg-cyan-500/20' : 'bg-dark-700'}
                `}
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 text-center text-dark-400">
                    {index + 1}.
                  </span>
                  <span className={`font-medium ${player.npub === userNpub ? 'text-cyan-400' : 'text-white'}`}>
                    {player.displayName || player.npub.slice(0, 8)}
                  </span>
                  {player.streak >= 3 && (
                    <span className="text-orange-400 text-sm">
                      🔥{player.streak}
                    </span>
                  )}
                </div>
                <span className="font-bold text-white">
                  {player.score.toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          {room.roundWinner && (
            <div className="mt-4 p-2 bg-green-500/20 rounded-lg text-center text-green-400 text-sm">
              {room.roundWinner === userNpub
                ? 'You were first! 🏆'
                : `${room.players[room.roundWinner]?.displayName || 'Someone'} answered first!`
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// ANSWER FEEDBACK
// =============================================================================

interface AnswerFeedbackProps {
  result: AnswerResult | null;
}

function AnswerFeedback({ result }: AnswerFeedbackProps) {
  if (!result) {
    return (
      <div className="text-center py-4 text-dark-400">
        Waiting for result...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`
        text-center py-6 rounded-lg
        ${result.isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'}
      `}
    >
      <div className={`text-3xl font-bold ${result.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
        {result.isCorrect ? '✓ Correct!' : '✗ Wrong'}
      </div>
      <div className={`text-2xl font-bold mt-2 ${result.points >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {result.points >= 0 ? '+' : ''}{result.points} pts
      </div>
      {result.isFirst && (
        <div className="mt-2 text-yellow-400">
          🏆 First to answer! +25% bonus
        </div>
      )}
      {!result.isCorrect && (
        <div className="mt-2 text-dark-400">
          Answer: {result.correctAnswer}
        </div>
      )}
    </motion.div>
  );
}

// =============================================================================
// RESULTS PHASE
// =============================================================================

interface ResultsPhaseProps {
  room: GameRoom;
  userNpub: string;
  finalRankings: FinalRanking[];
  onLeave: () => void;
}

function ResultsPhase({ room, userNpub, finalRankings, onLeave }: ResultsPhaseProps) {
  const userRank = finalRankings.findIndex(p => p.npub === userNpub) + 1;
  const userResult = finalRankings.find(p => p.npub === userNpub);

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full bg-dark-800 rounded-xl p-6"
      >
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">
            {userRank === 1 ? '🏆' : userRank === 2 ? '🥈' : userRank === 3 ? '🥉' : '🎮'}
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {userRank === 1 ? 'Victory!' : `${userRank}${getOrdinalSuffix(userRank)} Place`}
          </h1>
          {userResult && (
            <div className="text-4xl font-bold text-cyan-400">
              {userResult.score.toLocaleString()} pts
            </div>
          )}
        </div>

        {/* Final Rankings */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-3">Final Standings</h2>
          <div className="space-y-2">
            {finalRankings.map((player, index) => (
              <motion.div
                key={player.npub}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  flex items-center justify-between p-3 rounded-lg
                  ${player.npub === userNpub ? 'bg-cyan-500/20 border border-cyan-500/30' : 'bg-dark-700'}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 text-center text-2xl">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`}
                  </span>
                  <div>
                    <div className={`font-medium ${player.npub === userNpub ? 'text-cyan-400' : 'text-white'}`}>
                      {player.displayName || player.npub.slice(0, 8)}
                    </div>
                    <div className="text-xs text-dark-400">
                      {player.correctAnswers}/{room.totalRounds} correct
                    </div>
                  </div>
                </div>
                <span className="font-bold text-white text-lg">
                  {player.score.toLocaleString()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <button
          onClick={onLeave}
          className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg rounded-lg transition-colors"
        >
          Back to Lobby
        </button>
      </motion.div>
    </div>
  );
}

function getOrdinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
