import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// =============================================================================
// TYPES
// =============================================================================

type RacingTier = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface RacingTierConfig {
  tier: RacingTier;
  name: string;
  unlockLevel: number;
  modulusRange: [number, number];
  dividendRange: [number, number];
  basePoints: number;
}

const RACING_TIERS: RacingTierConfig[] = [
  { tier: 1,  name: 'Beginner',      unlockLevel: 1,  modulusRange: [2, 5],    dividendRange: [10, 25],      basePoints: 50 },
  { tier: 2,  name: 'Novice',        unlockLevel: 2,  modulusRange: [2, 7],    dividendRange: [15, 50],      basePoints: 75 },
  { tier: 3,  name: 'Intermediate',  unlockLevel: 3,  modulusRange: [3, 10],   dividendRange: [20, 100],     basePoints: 100 },
  { tier: 4,  name: 'Advanced',      unlockLevel: 5,  modulusRange: [5, 13],   dividendRange: [50, 200],     basePoints: 150 },
  { tier: 5,  name: 'Expert',        unlockLevel: 7,  modulusRange: [7, 17],   dividendRange: [100, 500],    basePoints: 200 },
  { tier: 6,  name: 'Master',        unlockLevel: 9,  modulusRange: [11, 23],  dividendRange: [200, 999],    basePoints: 300 },
  { tier: 7,  name: 'Grandmaster',   unlockLevel: 12, modulusRange: [13, 31],  dividendRange: [500, 2000],   basePoints: 400 },
  { tier: 8,  name: 'Legend',        unlockLevel: 15, modulusRange: [17, 47],  dividendRange: [1000, 5000],  basePoints: 500 },
  { tier: 9,  name: 'Mythic',        unlockLevel: 18, modulusRange: [23, 67],  dividendRange: [2000, 9999],  basePoints: 650 },
  { tier: 10, name: 'Transcendent',  unlockLevel: 21, modulusRange: [31, 97],  dividendRange: [5000, 99999], basePoints: 800 },
];

// Speed bonus thresholds (in milliseconds) - same as client
const SPEED_BONUS_FAST = 1000;    // Under 1s: max bonus
const SPEED_BONUS_MEDIUM = 3000;  // 1-3s: high bonus
const SPEED_BONUS_SLOW = 10000;   // 3-10s: decreasing bonus

interface ModularProblem {
  id: string;
  dividend: number;
  modulus: number;
  correctAnswer: number;
  displayText: string;
}

interface PlayerState {
  npub: string;
  displayName: string | null;
  score: number;
  streak: number;
  correctAnswers: number;
  isReady: boolean;
  lastAnswerAt: admin.firestore.Timestamp | null;
}

interface GameRoom {
  roomCode: string;
  status: 'waiting' | 'countdown' | 'active' | 'completed';
  tier: RacingTier;
  hostNpub: string;
  players: Record<string, PlayerState>;
  currentRound: number;
  totalRounds: number;
  currentProblem: Omit<ModularProblem, 'correctAnswer'> | null;
  correctAnswer: number | null; // Kept separate, never sent to client
  roundStartedAt: admin.firestore.Timestamp | null;
  roundWinner: string | null; // First correct answer
  createdAt: admin.firestore.Timestamp;
  completedAt: admin.firestore.Timestamp | null;
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Generate a 6-character room code
 */
function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Avoid confusing characters
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/**
 * Get primes up to n using Sieve of Eratosthenes
 */
function getPrimes(max: number): number[] {
  const sieve: boolean[] = new Array(max + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= max; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= max; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.map((isPrime, num) => isPrime ? num : -1).filter(n => n > 0);
}

const PRIMES = getPrimes(50);

/**
 * Generate a modular arithmetic problem for a given tier
 */
function generateProblem(tier: RacingTier): ModularProblem {
  const config = RACING_TIERS.find(t => t.tier === tier)!;
  const [minMod, maxMod] = config.modulusRange;
  const [minDiv, maxDiv] = config.dividendRange;

  // 60% chance of prime modulus
  const usePrime = Math.random() < 0.6;
  let modulus: number;

  if (usePrime) {
    const validPrimes = PRIMES.filter(p => p >= minMod && p <= maxMod);
    if (validPrimes.length > 0) {
      modulus = validPrimes[Math.floor(Math.random() * validPrimes.length)];
    } else {
      modulus = Math.floor(Math.random() * (maxMod - minMod + 1)) + minMod;
    }
  } else {
    modulus = Math.floor(Math.random() * (maxMod - minMod + 1)) + minMod;
  }

  // Generate dividend ensuring it's greater than modulus
  const effectiveMin = Math.max(minDiv, modulus + 1);
  let dividend: number;
  let correctAnswer: number;

  // 90% chance of non-zero remainder (more interesting problems)
  const wantNonZero = Math.random() < 0.9;
  let attempts = 0;
  const maxAttempts = 50;

  do {
    dividend = Math.floor(Math.random() * (maxDiv - effectiveMin + 1)) + effectiveMin;
    correctAnswer = dividend % modulus;
    attempts++;
  } while (wantNonZero && correctAnswer === 0 && attempts < maxAttempts);

  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    dividend,
    modulus,
    correctAnswer,
    displayText: `${dividend} mod ${modulus}`,
  };
}

/**
 * Calculate streak multiplier
 */
function getStreakMultiplier(streak: number): number {
  if (streak >= 10) return 1.5;
  if (streak >= 7) return 1.3;
  if (streak >= 5) return 1.2;
  if (streak >= 3) return 1.1;
  return 1.0;
}

/**
 * Calculate speed bonus based on absolute response time
 * - Under 1s: 100% bonus (2x total)
 * - 1-3s: 100% down to 50% bonus
 * - 3-10s: 50% down to 0% bonus
 * - Over 10s: no bonus
 */
function calculateSpeedBonus(
  basePoints: number,
  responseTimeMs: number
): number {
  if (responseTimeMs <= SPEED_BONUS_FAST) {
    // Under 1 second: full 100% bonus
    return basePoints;
  }

  if (responseTimeMs <= SPEED_BONUS_MEDIUM) {
    // 1-3 seconds: 100% to 50% bonus (linear)
    const ratio = 1 - (responseTimeMs - SPEED_BONUS_FAST) / (SPEED_BONUS_MEDIUM - SPEED_BONUS_FAST);
    return Math.floor(basePoints * (0.5 + 0.5 * ratio));
  }

  if (responseTimeMs <= SPEED_BONUS_SLOW) {
    // 3-10 seconds: 50% to 0% bonus (linear)
    const ratio = 1 - (responseTimeMs - SPEED_BONUS_MEDIUM) / (SPEED_BONUS_SLOW - SPEED_BONUS_MEDIUM);
    return Math.floor(basePoints * 0.5 * ratio);
  }

  // Over 10 seconds: no bonus
  return 0;
}

// =============================================================================
// CLOUD FUNCTIONS
// =============================================================================

/**
 * Create a new game room
 */
export const createRoom = functions.https.onCall(
  async (
    data: { tier: RacingTier; totalRounds?: number },
    context
  ): Promise<{ roomId: string; roomCode: string }> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const { tier, totalRounds = 10 } = data;

    // Validate tier
    if (!tier || tier < 1 || tier > 10) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'tier must be between 1 and 10'
      );
    }

    // Validate totalRounds
    if (totalRounds < 5 || totalRounds > 20) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'totalRounds must be between 5 and 20'
      );
    }

    const npub = context.auth.uid;

    // Get user display name
    const userDoc = await admin.firestore().collection('users').doc(npub).get();
    const displayName = userDoc.exists ? userDoc.data()?.displayName : null;

    // Generate unique room code
    let roomCode: string;
    let isUnique = false;
    let attempts = 0;

    do {
      roomCode = generateRoomCode();
      const existingRooms = await admin.firestore()
        .collection('gameRooms')
        .where('roomCode', '==', roomCode)
        .where('status', 'in', ['waiting', 'countdown', 'active'])
        .limit(1)
        .get();
      isUnique = existingRooms.empty;
      attempts++;
    } while (!isUnique && attempts < 10);

    if (!isUnique) {
      throw new functions.https.HttpsError(
        'resource-exhausted',
        'Unable to generate unique room code'
      );
    }

    const room: GameRoom = {
      roomCode: roomCode!,
      status: 'waiting',
      tier,
      hostNpub: npub,
      players: {
        [npub]: {
          npub,
          displayName,
          score: 0,
          streak: 0,
          correctAnswers: 0,
          isReady: false,
          lastAnswerAt: null,
        },
      },
      currentRound: 0,
      totalRounds,
      currentProblem: null,
      correctAnswer: null,
      roundStartedAt: null,
      roundWinner: null,
      createdAt: admin.firestore.Timestamp.now(),
      completedAt: null,
    };

    const roomRef = await admin.firestore().collection('gameRooms').add(room);

    return { roomId: roomRef.id, roomCode: roomCode! };
  }
);

/**
 * Join an existing game room
 */
export const joinRoom = functions.https.onCall(
  async (
    data: { roomCode: string },
    context
  ): Promise<{ roomId: string; room: Omit<GameRoom, 'correctAnswer'> }> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const { roomCode } = data;

    if (!roomCode || typeof roomCode !== 'string') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'roomCode is required'
      );
    }

    const npub = context.auth.uid;

    // Get user display name
    const userDoc = await admin.firestore().collection('users').doc(npub).get();
    const displayName = userDoc.exists ? userDoc.data()?.displayName : null;

    // Find room by code
    const roomsSnapshot = await admin.firestore()
      .collection('gameRooms')
      .where('roomCode', '==', roomCode.toUpperCase())
      .where('status', '==', 'waiting')
      .limit(1)
      .get();

    if (roomsSnapshot.empty) {
      throw new functions.https.HttpsError(
        'not-found',
        'Room not found or game already started'
      );
    }

    const roomDoc = roomsSnapshot.docs[0];
    const room = roomDoc.data() as GameRoom;

    // Check if room is full (max 8 players)
    if (Object.keys(room.players).length >= 8) {
      throw new functions.https.HttpsError(
        'resource-exhausted',
        'Room is full'
      );
    }

    // Add player to room
    const playerState: PlayerState = {
      npub,
      displayName,
      score: 0,
      streak: 0,
      correctAnswers: 0,
      isReady: false,
      lastAnswerAt: null,
    };

    await roomDoc.ref.update({
      [`players.${npub}`]: playerState,
    });

    // Return room without correctAnswer
    const { correctAnswer, ...safeRoom } = room;
    safeRoom.players[npub] = playerState;

    return { roomId: roomDoc.id, room: safeRoom };
  }
);

/**
 * Set player ready status and start game when all ready
 */
export const setReady = functions.https.onCall(
  async (
    data: { roomId: string; isReady: boolean },
    context
  ): Promise<{ starting: boolean }> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const { roomId, isReady } = data;
    const npub = context.auth.uid;

    const roomRef = admin.firestore().collection('gameRooms').doc(roomId);

    return admin.firestore().runTransaction(async (transaction) => {
      const roomDoc = await transaction.get(roomRef);

      if (!roomDoc.exists) {
        throw new functions.https.HttpsError('not-found', 'Room not found');
      }

      const room = roomDoc.data() as GameRoom;

      if (room.status !== 'waiting') {
        throw new functions.https.HttpsError(
          'failed-precondition',
          'Game has already started'
        );
      }

      if (!room.players[npub]) {
        throw new functions.https.HttpsError(
          'permission-denied',
          'You are not in this room'
        );
      }

      // Update ready status
      transaction.update(roomRef, {
        [`players.${npub}.isReady`]: isReady,
      });

      // Check if all players are ready (minimum 2 players)
      const updatedPlayers = { ...room.players };
      updatedPlayers[npub].isReady = isReady;

      const playerCount = Object.keys(updatedPlayers).length;
      const allReady = playerCount >= 2 &&
        Object.values(updatedPlayers).every(p => p.isReady);

      if (allReady) {
        // Start the game
        transaction.update(roomRef, {
          status: 'countdown',
        });
        return { starting: true };
      }

      return { starting: false };
    });
  }
);

/**
 * Start the first round (called after countdown)
 */
export const startRound = functions.https.onCall(
  async (
    data: { roomId: string },
    context
  ): Promise<{ problem: Omit<ModularProblem, 'correctAnswer'> }> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const { roomId } = data;
    const npub = context.auth.uid;

    const roomRef = admin.firestore().collection('gameRooms').doc(roomId);

    return admin.firestore().runTransaction(async (transaction) => {
      const roomDoc = await transaction.get(roomRef);

      if (!roomDoc.exists) {
        throw new functions.https.HttpsError('not-found', 'Room not found');
      }

      const room = roomDoc.data() as GameRoom;

      // Only host can start rounds
      if (room.hostNpub !== npub) {
        throw new functions.https.HttpsError(
          'permission-denied',
          'Only host can start rounds'
        );
      }

      if (room.status !== 'countdown' && room.status !== 'active') {
        throw new functions.https.HttpsError(
          'failed-precondition',
          'Game is not in progress'
        );
      }

      // Generate new problem
      const problem = generateProblem(room.tier);
      const { correctAnswer, ...safeProblem } = problem;

      transaction.update(roomRef, {
        status: 'active',
        currentRound: room.currentRound + 1,
        currentProblem: safeProblem,
        correctAnswer,
        roundStartedAt: admin.firestore.Timestamp.now(),
        roundWinner: null,
      });

      return { problem: safeProblem };
    });
  }
);

/**
 * Submit an answer for the current round
 */
export const submitAnswer = functions.https.onCall(
  async (
    data: { roomId: string; answer: number; clientTimestamp?: number },
    context
  ): Promise<{
    isCorrect: boolean;
    points: number;
    newStreak: number;
    isFirst: boolean;
    correctAnswer: number;
  }> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const { roomId, answer } = data;
    const npub = context.auth.uid;

    if (typeof answer !== 'number') {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'answer must be a number'
      );
    }

    const roomRef = admin.firestore().collection('gameRooms').doc(roomId);

    return admin.firestore().runTransaction(async (transaction) => {
      const roomDoc = await transaction.get(roomRef);

      if (!roomDoc.exists) {
        throw new functions.https.HttpsError('not-found', 'Room not found');
      }

      const room = roomDoc.data() as GameRoom;

      if (room.status !== 'active') {
        throw new functions.https.HttpsError(
          'failed-precondition',
          'Game is not active'
        );
      }

      const player = room.players[npub];
      if (!player) {
        throw new functions.https.HttpsError(
          'permission-denied',
          'You are not in this room'
        );
      }

      if (room.correctAnswer === null) {
        throw new functions.https.HttpsError(
          'failed-precondition',
          'No active problem'
        );
      }

      // Check if already answered this round
      if (player.lastAnswerAt && room.roundStartedAt &&
          player.lastAnswerAt.toMillis() >= room.roundStartedAt.toMillis()) {
        throw new functions.https.HttpsError(
          'already-exists',
          'Already answered this round'
        );
      }

      const isCorrect = answer === room.correctAnswer;
      const config = RACING_TIERS.find(t => t.tier === room.tier)!;

      // Calculate response time
      const now = admin.firestore.Timestamp.now();
      const responseTimeMs = room.roundStartedAt
        ? now.toMillis() - room.roundStartedAt.toMillis()
        : 10000; // Default to 10s if no start time

      let points = 0;
      let newStreak = player.streak;
      let isFirst = false;

      if (isCorrect) {
        // Check if first correct answer
        isFirst = room.roundWinner === null;

        newStreak = player.streak + 1;
        const basePoints = config.basePoints;
        const speedBonus = calculateSpeedBonus(basePoints, responseTimeMs);
        const streakMultiplier = getStreakMultiplier(newStreak);

        points = Math.floor((basePoints + speedBonus) * streakMultiplier);

        // First correct answer bonus
        if (isFirst) {
          points = Math.floor(points * 1.25);
        }

        // Update room state
        const updates: Record<string, unknown> = {
          [`players.${npub}.score`]: player.score + points,
          [`players.${npub}.streak`]: newStreak,
          [`players.${npub}.correctAnswers`]: player.correctAnswers + 1,
          [`players.${npub}.lastAnswerAt`]: now,
        };

        if (isFirst) {
          updates.roundWinner = npub;
        }

        transaction.update(roomRef, updates);
      } else {
        // Wrong answer: penalty and streak reset
        newStreak = 0;
        points = -Math.floor(config.basePoints * 0.5);

        transaction.update(roomRef, {
          [`players.${npub}.score`]: Math.max(0, player.score + points),
          [`players.${npub}.streak`]: 0,
          [`players.${npub}.lastAnswerAt`]: now,
        });
      }

      return {
        isCorrect,
        points,
        newStreak,
        isFirst,
        correctAnswer: room.correctAnswer,
      };
    });
  }
);

/**
 * Advance to next round or end game
 */
export const advanceRound = functions.https.onCall(
  async (
    data: { roomId: string },
    context
  ): Promise<{
    isComplete: boolean;
    problem?: Omit<ModularProblem, 'correctAnswer'>;
    finalRankings?: Array<{ npub: string; displayName: string | null; score: number; correctAnswers: number }>;
  }> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const { roomId } = data;
    const npub = context.auth.uid;

    const roomRef = admin.firestore().collection('gameRooms').doc(roomId);

    return admin.firestore().runTransaction(async (transaction) => {
      const roomDoc = await transaction.get(roomRef);

      if (!roomDoc.exists) {
        throw new functions.https.HttpsError('not-found', 'Room not found');
      }

      const room = roomDoc.data() as GameRoom;

      // Only host can advance rounds
      if (room.hostNpub !== npub) {
        throw new functions.https.HttpsError(
          'permission-denied',
          'Only host can advance rounds'
        );
      }

      if (room.status !== 'active') {
        throw new functions.https.HttpsError(
          'failed-precondition',
          'Game is not active'
        );
      }

      // Check if game is complete
      if (room.currentRound >= room.totalRounds) {
        // Calculate final rankings
        const finalRankings = Object.values(room.players)
          .sort((a, b) => b.score - a.score)
          .map(p => ({
            npub: p.npub,
            displayName: p.displayName,
            score: p.score,
            correctAnswers: p.correctAnswers,
          }));

        transaction.update(roomRef, {
          status: 'completed',
          currentProblem: null,
          correctAnswer: null,
          completedAt: admin.firestore.Timestamp.now(),
        });

        return { isComplete: true, finalRankings };
      }

      // Generate next problem
      const problem = generateProblem(room.tier);
      const { correctAnswer, ...safeProblem } = problem;

      transaction.update(roomRef, {
        currentRound: room.currentRound + 1,
        currentProblem: safeProblem,
        correctAnswer,
        roundStartedAt: admin.firestore.Timestamp.now(),
        roundWinner: null,
      });

      return { isComplete: false, problem: safeProblem };
    });
  }
);

/**
 * Leave a game room
 */
export const leaveRoom = functions.https.onCall(
  async (
    data: { roomId: string },
    context
  ): Promise<{ success: boolean }> => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Authentication required'
      );
    }

    const { roomId } = data;
    const npub = context.auth.uid;

    const roomRef = admin.firestore().collection('gameRooms').doc(roomId);

    return admin.firestore().runTransaction(async (transaction) => {
      const roomDoc = await transaction.get(roomRef);

      if (!roomDoc.exists) {
        return { success: true }; // Room already deleted
      }

      const room = roomDoc.data() as GameRoom;

      if (!room.players[npub]) {
        return { success: true }; // Already not in room
      }

      // Remove player
      const updates: Record<string, unknown> = {
        [`players.${npub}`]: admin.firestore.FieldValue.delete(),
      };

      // If host leaves, assign new host or delete room
      const remainingPlayers = Object.keys(room.players).filter(p => p !== npub);

      if (remainingPlayers.length === 0) {
        // Delete room if empty
        transaction.delete(roomRef);
      } else if (room.hostNpub === npub) {
        // Assign new host
        updates.hostNpub = remainingPlayers[0];
        transaction.update(roomRef, updates);
      } else {
        transaction.update(roomRef, updates);
      }

      return { success: true };
    });
  }
);
