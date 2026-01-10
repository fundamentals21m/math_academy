// =============================================================================
// USE GAME SESSION HOOK
// =============================================================================
// Manages the complete game session state for single-player mode.
// Handles problem generation, scoring, and game lifecycle.
// =============================================================================

import { useState, useCallback, useMemo } from 'react';
import type { RacingTier, RaceGameResult } from '@shared/gamification';
import {
  generateProblemSet,
  validateAnswer,
  type ModularProblem,
} from '../lib/problemGenerator';
import {
  scoreCorrectAnswer,
  scoreIncorrectAnswer,
  calculateGameScore,
  type GameScore,
} from '../lib/scoring';

/**
 * Game session phases
 */
export type GamePhase = 'lobby' | 'countdown' | 'playing' | 'results';

/**
 * Result of a single round
 */
export interface RoundResult {
  problem: ModularProblem;
  userAnswer: number;
  isCorrect: boolean;
  responseTimeMs: number;
  points: number;
}

/**
 * Complete game session state
 */
export interface GameSession {
  phase: GamePhase;
  tier: RacingTier;
  roundCount: number;
  currentRound: number;
  currentProblem: ModularProblem | null;
  problems: ModularProblem[];
  roundResults: RoundResult[];
  score: number;
  streak: number;
  lastRoundResult?: {
    isCorrect: boolean;
    points: number;
    correctAnswer: number;
  };
}

/**
 * Actions for the game session
 */
export interface GameSessionActions {
  startGame: (tier: RacingTier, roundCount: number) => void;
  completeCountdown: () => void;
  submitAnswer: (answer: number, responseTimeMs: number) => void;
  playAgain: () => void;
  returnToLobby: () => void;
  getGameResult: () => RaceGameResult | null;
  getFinalScore: () => GameScore | null;
}

/**
 * Initial session state
 */
const createInitialState = (): GameSession => ({
  phase: 'lobby',
  tier: 1,
  roundCount: 10,
  currentRound: 0,
  currentProblem: null,
  problems: [],
  roundResults: [],
  score: 0,
  streak: 0,
});

/**
 * Hook to manage a single-player game session
 */
export function useGameSession(): [GameSession, GameSessionActions] {
  const [session, setSession] = useState<GameSession>(createInitialState);

  /**
   * Start a new game with the given tier and round count
   */
  const startGame = useCallback((tier: RacingTier, roundCount: number) => {
    const problems = generateProblemSet(tier, roundCount);

    setSession({
      phase: 'countdown',
      tier,
      roundCount,
      currentRound: 0,
      currentProblem: null,
      problems,
      roundResults: [],
      score: 0,
      streak: 0,
    });
  }, []);

  /**
   * Countdown complete, start playing
   */
  const completeCountdown = useCallback(() => {
    setSession((prev) => ({
      ...prev,
      phase: 'playing',
      currentRound: 1,
      currentProblem: prev.problems[0] || null,
    }));
  }, []);

  /**
   * Submit an answer for the current round
   */
  const submitAnswer = useCallback((answer: number, responseTimeMs: number) => {
    setSession((prev) => {
      if (!prev.currentProblem || prev.phase !== 'playing') {
        return prev;
      }

      const isCorrect = validateAnswer(prev.currentProblem, answer);

      // Calculate points
      let points: number;
      let newStreak: number;

      if (isCorrect) {
        const scoreResult = scoreCorrectAnswer(prev.tier, responseTimeMs, prev.streak);
        points = scoreResult.totalPoints;
        newStreak = scoreResult.newStreak;
      } else {
        const scoreResult = scoreIncorrectAnswer(prev.tier);
        points = scoreResult.totalPoints;
        newStreak = 0;
      }

      // Record round result
      const roundResult: RoundResult = {
        problem: prev.currentProblem,
        userAnswer: answer,
        isCorrect,
        responseTimeMs,
        points,
      };

      const newRoundResults = [...prev.roundResults, roundResult];
      const newScore = prev.score + points;

      // Check if game is over
      const isLastRound = prev.currentRound >= prev.roundCount;

      if (isLastRound) {
        return {
          ...prev,
          phase: 'results',
          score: newScore,
          streak: newStreak,
          roundResults: newRoundResults,
          lastRoundResult: {
            isCorrect,
            points,
            correctAnswer: prev.currentProblem.correctAnswer,
          },
        };
      }

      // Move to next round
      const nextRound = prev.currentRound + 1;
      const nextProblem = prev.problems[nextRound - 1] || null;

      return {
        ...prev,
        currentRound: nextRound,
        currentProblem: nextProblem,
        score: newScore,
        streak: newStreak,
        roundResults: newRoundResults,
        lastRoundResult: {
          isCorrect,
          points,
          correctAnswer: prev.currentProblem.correctAnswer,
        },
      };
    });
  }, []);

  /**
   * Play again with same settings
   */
  const playAgain = useCallback(() => {
    setSession((prev) => {
      const problems = generateProblemSet(prev.tier, prev.roundCount);

      return {
        phase: 'countdown',
        tier: prev.tier,
        roundCount: prev.roundCount,
        currentRound: 0,
        currentProblem: null,
        problems,
        roundResults: [],
        score: 0,
        streak: 0,
      };
    });
  }, []);

  /**
   * Return to lobby to change settings
   */
  const returnToLobby = useCallback(() => {
    setSession(createInitialState());
  }, []);

  /**
   * Get the game result for XP calculation
   */
  const getGameResult = useCallback((): RaceGameResult | null => {
    if (session.phase !== 'results') return null;

    const correctAnswers = session.roundResults.filter((r) => r.isCorrect).length;
    const fastAnswers = session.roundResults.filter(
      (r) => r.isCorrect && r.responseTimeMs < 2000
    ).length;

    // Calculate max streak
    let maxStreak = 0;
    let currentStreak = 0;
    for (const result of session.roundResults) {
      if (result.isCorrect) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    }

    const totalResponseTime = session.roundResults.reduce(
      (sum, r) => sum + r.responseTimeMs,
      0
    );
    const avgResponseTime =
      session.roundResults.length > 0
        ? Math.round(totalResponseTime / session.roundResults.length)
        : 0;

    return {
      tier: session.tier,
      score: session.score,
      correctAnswers,
      totalQuestions: session.roundResults.length,
      maxStreak,
      fastAnswers,
      avgResponseTime,
      timestamp: new Date().toISOString(),
      isMultiplayer: false,
    };
  }, [session]);

  /**
   * Get final game score with XP
   */
  const getFinalScore = useCallback((): GameScore | null => {
    if (session.phase !== 'results') return null;

    const roundData = session.roundResults.map((r) => ({
      isCorrect: r.isCorrect,
      responseTimeMs: r.responseTimeMs,
    }));

    return calculateGameScore(session.tier, roundData);
  }, [session]);

  const actions: GameSessionActions = useMemo(
    () => ({
      startGame,
      completeCountdown,
      submitAnswer,
      playAgain,
      returnToLobby,
      getGameResult,
      getFinalScore,
    }),
    [startGame, completeCountdown, submitAnswer, playAgain, returnToLobby, getGameResult, getFinalScore]
  );

  return [session, actions];
}
