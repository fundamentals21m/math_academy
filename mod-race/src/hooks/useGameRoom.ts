// =============================================================================
// MULTIPLAYER GAME ROOM HOOK
// =============================================================================
// Manages real-time connection to a game room via Firestore listeners.
// Handles room state, player updates, and Cloud Function calls.
// =============================================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  doc,
  onSnapshot,
  httpsCallable,
  getFirebaseFirestore,
  getFirebaseFunctions,
  isFirebaseConfigured,
} from '@shared/gamification';
import type { RacingTier } from '@shared/gamification';

// =============================================================================
// TYPES
// =============================================================================

export interface PlayerState {
  npub: string;
  displayName: string | null;
  score: number;
  streak: number;
  correctAnswers: number;
  isReady: boolean;
  lastAnswerAt: { toMillis: () => number } | null;
}

export interface ModularProblem {
  id: string;
  dividend: number;
  modulus: number;
  displayText: string;
}

export interface GameRoom {
  roomCode: string;
  status: 'waiting' | 'countdown' | 'active' | 'completed';
  tier: RacingTier;
  hostNpub: string;
  players: Record<string, PlayerState>;
  currentRound: number;
  totalRounds: number;
  currentProblem: ModularProblem | null;
  roundStartedAt: { toMillis: () => number } | null;
  roundWinner: string | null;
  createdAt: { toMillis: () => number };
  completedAt: { toMillis: () => number } | null;
}

export interface AnswerResult {
  isCorrect: boolean;
  points: number;
  newStreak: number;
  isFirst: boolean;
  correctAnswer: number;
}

export interface FinalRanking {
  npub: string;
  displayName: string | null;
  score: number;
  correctAnswers: number;
}

export type RoomStatus =
  | 'idle'
  | 'creating'
  | 'joining'
  | 'connected'
  | 'error';

export interface GameRoomState {
  status: RoomStatus;
  roomId: string | null;
  room: GameRoom | null;
  error: string | null;
  lastAnswerResult: AnswerResult | null;
  finalRankings: FinalRanking[] | null;
}

export interface GameRoomActions {
  createRoom: (tier: RacingTier, totalRounds?: number) => Promise<void>;
  joinRoom: (roomCode: string) => Promise<void>;
  setReady: (isReady: boolean) => Promise<void>;
  startRound: () => Promise<void>;
  submitAnswer: (answer: number) => Promise<AnswerResult>;
  advanceRound: () => Promise<{ isComplete: boolean; problem?: ModularProblem; finalRankings?: FinalRanking[] }>;
  leaveRoom: () => Promise<void>;
  disconnect: () => void;
}

// =============================================================================
// HOOK
// =============================================================================

export function useGameRoom(userNpub: string | null): [GameRoomState, GameRoomActions] {
  const [state, setState] = useState<GameRoomState>({
    status: 'idle',
    roomId: null,
    room: null,
    error: null,
    lastAnswerResult: null,
    finalRankings: null,
  });

  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Clean up listener on unmount
  useEffect(() => {
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);

  // Subscribe to room updates
  const subscribeToRoom = useCallback((roomId: string) => {
    console.log('[useGameRoom] subscribeToRoom called with roomId:', roomId);
    console.log('[useGameRoom] isFirebaseConfigured:', isFirebaseConfigured());

    if (!isFirebaseConfigured()) {
      setState(prev => ({ ...prev, status: 'error', error: 'Firebase not configured' }));
      return;
    }

    let db;
    try {
      db = getFirebaseFirestore();
      console.log('[useGameRoom] getFirebaseFirestore returned:', db);
      console.log('[useGameRoom] db type:', typeof db);
      console.log('[useGameRoom] db constructor:', db?.constructor?.name);
    } catch (error) {
      console.error('[useGameRoom] Failed to get Firestore:', error);
      setState(prev => ({ ...prev, status: 'error', error: 'Failed to initialize Firestore' }));
      return;
    }

    if (!db) {
      console.error('[useGameRoom] db is falsy');
      setState(prev => ({ ...prev, status: 'error', error: 'Firestore not available' }));
      return;
    }

    console.log('[useGameRoom] About to call doc() with db and roomId');
    const roomRef = doc(db, 'gameRooms', roomId);
    console.log('[useGameRoom] doc() succeeded, roomRef:', roomRef);

    unsubscribeRef.current = onSnapshot(
      roomRef,
      (snapshot) => {
        if (!snapshot.exists()) {
          setState(prev => ({
            ...prev,
            status: 'error',
            error: 'Room no longer exists',
          }));
          return;
        }

        const roomData = snapshot.data() as GameRoom;
        setState(prev => ({
          ...prev,
          room: roomData,
          status: 'connected',
        }));
      },
      (error) => {
        console.error('Room listener error:', error);
        setState(prev => ({
          ...prev,
          status: 'error',
          error: error.message,
        }));
      }
    );
  }, []);

  // Create a new room
  const createRoom = useCallback(async (tier: RacingTier, totalRounds = 10) => {
    if (!userNpub) {
      setState(prev => ({ ...prev, status: 'error', error: 'Not authenticated' }));
      return;
    }

    if (!isFirebaseConfigured()) {
      setState(prev => ({ ...prev, status: 'error', error: 'Firebase not configured' }));
      return;
    }

    setState(prev => ({ ...prev, status: 'creating', error: null }));

    try {
      const functions = getFirebaseFunctions();
      const createRoomFn = httpsCallable<
        { tier: RacingTier; totalRounds: number },
        { roomId: string; roomCode: string }
      >(functions, 'createRoom');

      const result = await createRoomFn({ tier, totalRounds });
      const { roomId } = result.data;

      setState(prev => ({
        ...prev,
        roomId,
        lastAnswerResult: null,
        finalRankings: null,
      }));

      subscribeToRoom(roomId);
    } catch (error) {
      console.error('Failed to create room:', error);
      setState(prev => ({
        ...prev,
        status: 'error',
        error: error instanceof Error ? error.message : 'Failed to create room',
      }));
    }
  }, [userNpub, subscribeToRoom]);

  // Join an existing room
  const joinRoom = useCallback(async (roomCode: string) => {
    if (!userNpub) {
      setState(prev => ({ ...prev, status: 'error', error: 'Not authenticated' }));
      return;
    }

    if (!isFirebaseConfigured()) {
      setState(prev => ({ ...prev, status: 'error', error: 'Firebase not configured' }));
      return;
    }

    setState(prev => ({ ...prev, status: 'joining', error: null }));

    try {
      const functions = getFirebaseFunctions();
      const joinRoomFn = httpsCallable<
        { roomCode: string },
        { roomId: string; room: GameRoom }
      >(functions, 'joinRoom');

      const result = await joinRoomFn({ roomCode: roomCode.toUpperCase() });
      const { roomId } = result.data;

      setState(prev => ({
        ...prev,
        roomId,
        lastAnswerResult: null,
        finalRankings: null,
      }));

      subscribeToRoom(roomId);
    } catch (error) {
      console.error('Failed to join room:', error);
      setState(prev => ({
        ...prev,
        status: 'error',
        error: error instanceof Error ? error.message : 'Failed to join room',
      }));
    }
  }, [userNpub, subscribeToRoom]);

  // Set ready status
  const setReady = useCallback(async (isReady: boolean) => {
    if (!state.roomId || !isFirebaseConfigured()) return;

    try {
      const functions = getFirebaseFunctions();
      const setReadyFn = httpsCallable<
        { roomId: string; isReady: boolean },
        { starting: boolean }
      >(functions, 'setReady');

      await setReadyFn({ roomId: state.roomId, isReady });
    } catch (error) {
      console.error('Failed to set ready:', error);
      throw error;
    }
  }, [state.roomId]);

  // Start a round (host only)
  const startRound = useCallback(async () => {
    if (!state.roomId || !isFirebaseConfigured()) return;

    try {
      const functions = getFirebaseFunctions();
      const startRoundFn = httpsCallable<
        { roomId: string },
        { problem: ModularProblem }
      >(functions, 'startRound');

      await startRoundFn({ roomId: state.roomId });
    } catch (error) {
      console.error('Failed to start round:', error);
      throw error;
    }
  }, [state.roomId]);

  // Submit an answer
  const submitAnswer = useCallback(async (answer: number): Promise<AnswerResult> => {
    if (!state.roomId || !isFirebaseConfigured()) {
      throw new Error('Not connected to a room');
    }

    try {
      const functions = getFirebaseFunctions();
      const submitAnswerFn = httpsCallable<
        { roomId: string; answer: number },
        AnswerResult
      >(functions, 'submitAnswer');

      const result = await submitAnswerFn({
        roomId: state.roomId,
        answer,
      });

      const answerResult = result.data;
      setState(prev => ({ ...prev, lastAnswerResult: answerResult }));

      return answerResult;
    } catch (error) {
      console.error('Failed to submit answer:', error);
      throw error;
    }
  }, [state.roomId]);

  // Advance to next round (host only)
  const advanceRound = useCallback(async () => {
    if (!state.roomId || !isFirebaseConfigured()) {
      throw new Error('Not connected to a room');
    }

    try {
      const functions = getFirebaseFunctions();
      const advanceRoundFn = httpsCallable<
        { roomId: string },
        { isComplete: boolean; problem?: ModularProblem; finalRankings?: FinalRanking[] }
      >(functions, 'advanceRound');

      const result = await advanceRoundFn({ roomId: state.roomId });

      if (result.data.isComplete && result.data.finalRankings) {
        setState(prev => ({ ...prev, finalRankings: result.data.finalRankings! }));
      }

      return result.data;
    } catch (error) {
      console.error('Failed to advance round:', error);
      throw error;
    }
  }, [state.roomId]);

  // Leave the room
  const leaveRoom = useCallback(async () => {
    if (!state.roomId || !isFirebaseConfigured()) return;

    try {
      const functions = getFirebaseFunctions();
      const leaveRoomFn = httpsCallable<
        { roomId: string },
        { success: boolean }
      >(functions, 'leaveRoom');

      await leaveRoomFn({ roomId: state.roomId });

      // Clean up
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }

      setState({
        status: 'idle',
        roomId: null,
        room: null,
        error: null,
        lastAnswerResult: null,
        finalRankings: null,
      });
    } catch (error) {
      console.error('Failed to leave room:', error);
    }
  }, [state.roomId]);

  // Disconnect without calling leaveRoom (for when component unmounts)
  const disconnect = useCallback(() => {
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }

    setState({
      status: 'idle',
      roomId: null,
      room: null,
      error: null,
      lastAnswerResult: null,
      finalRankings: null,
    });
  }, []);

  return [
    state,
    {
      createRoom,
      joinRoom,
      setReady,
      startRound,
      submitAnswer,
      advanceRound,
      leaveRoom,
      disconnect,
    },
  ];
}
