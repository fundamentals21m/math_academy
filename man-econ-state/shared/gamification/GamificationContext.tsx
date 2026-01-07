/**
 * Gamification context provider and hook.
 * Manages XP, achievements, streaks, and progress tracking.
 * Server is the source of truth when authenticated.
 * @module gamification/GamificationContext
 */

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  useState,
  useRef,
  type ReactNode,
} from 'react';
import {
  type GamificationState,
  type SectionId,
  type Difficulty,
  type AchievementNotification,
  type CourseId,
  type RaceGameResult,
} from './types';
import { loadState, saveState, hasUnmigratedProgress, markAsMigrated } from './storage';
import { createDefaultState } from './defaults';
import { checkAchievements } from './achievements';
import { gamificationReducer } from './reducer';
import { getProgressSyncManager, type SyncStatus } from './progressSyncManager';
import { useNostrAuth } from '../contexts/NostrAuthContext';
import { getLogger } from '../utils/logger';

const progressLogger = getLogger('GamificationProgress');

/** Debounce delay for achievement checks in milliseconds */
const ACHIEVEMENT_CHECK_DEBOUNCE_MS = 500;

// =============================================================================
// iOS WEBVIEW BRIDGE
// =============================================================================

/** Window type with iOS WebKit message handlers */
interface WebKitWindow extends Window {
  webkit?: {
    messageHandlers?: {
      progressHandler?: {
        postMessage: (message: unknown) => void;
      };
    };
  };
}

/**
 * Check if running inside iOS WKWebView with progress handler
 */
const isIOSWebView = (): boolean => {
  return !!(window as WebKitWindow).webkit?.messageHandlers?.progressHandler;
};

/**
 * Send a progress event to the iOS app via WKWebView message handler.
 * No-op if not running in iOS WebView.
 */
const postToiOS = (type: string, data: Record<string, unknown>): void => {
  const inWebView = isIOSWebView();
  console.log(`[iOS Bridge] postToiOS called: type=${type}, inWebView=${inWebView}`, data);

  if (inWebView) {
    console.log('[iOS Bridge] Sending message to iOS...');
    (window as WebKitWindow).webkit!.messageHandlers!.progressHandler!.postMessage({
      type,
      ...data,
    });
    console.log('[iOS Bridge] Message sent successfully');
  }
};

// =============================================================================
// CONTEXT TYPES
// =============================================================================

/**
 * Value provided by the GamificationContext.
 */
interface GamificationContextValue {
  /** Current gamification state */
  state: GamificationState;
  /** Whether state is still loading from storage/server */
  isLoading: boolean;
  /** Pending achievement notifications to display */
  notifications: AchievementNotification[];
  /** Current sync status with server */
  syncStatus: SyncStatus;
  /** Mark a section as visited (awards XP on first visit) */
  visitSection: (sectionId: number) => void;
  /** Mark a section as completed (awards XP on first completion) */
  completeSection: (sectionId: number) => void;
  /** Record a quiz attempt with score and difficulty */
  recordQuiz: (
    sectionId: number,
    difficulty: Difficulty,
    score: number,
    correctAnswers: number,
    totalQuestions: number
  ) => void;
  /** Track visualization usage (awards XP on first use) */
  useVisualization: (sectionId: number, visualizationName: string) => void;
  /** Dismiss an achievement notification */
  dismissNotification: (id: string) => void;
  /** Reset all progress (development only) */
  resetProgress: () => void;
  /** Record a racing game result (awards XP based on performance) */
  recordRaceGame: (result: RaceGameResult) => void;
  /** Raw dispatch function for advanced use cases */
  dispatch: React.Dispatch<import('./reducer').GamificationAction>;
}

// =============================================================================
// CONTEXT
// =============================================================================

const GamificationContext = createContext<GamificationContextValue | null>(null);

/**
 * Props for the GamificationProvider component.
 */
interface GamificationProviderProps {
  /** Child components that will have access to gamification context */
  children: ReactNode;
  /** Course identifier for section ID generation */
  courseId: CourseId;
}

/**
 * Provider component for gamification state management.
 * Wraps the application to provide XP tracking, achievements, and progress.
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <GamificationProvider courseId="crypto">
 *       <YourApp />
 *     </GamificationProvider>
 *   );
 * }
 * ```
 */
export function GamificationProvider({ children, courseId }: GamificationProviderProps) {
  const [state, dispatch] = useReducer(gamificationReducer, createDefaultState());
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState<AchievementNotification[]>([]);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');

  // Ref for debouncing achievement checks
  const achievementCheckTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track if we've completed initial server load
  const hasLoadedFromServerRef = useRef(false);
  const prevIsAuthenticatedRef = useRef(false);

  // Get auth state
  const { isAuthenticated, npub } = useNostrAuth();

  /**
   * Create a section ID from a numeric section number.
   * Memoized with courseId to prevent unnecessary recreations.
   */
  const makeSectionId = useCallback(
    (numericId: number): SectionId => {
      return `${courseId}:${numericId}` as SectionId;
    },
    [courseId]
  );

  // Load state from localStorage on mount (initial load for non-authenticated users)
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      dispatch({ type: 'LOAD_STATE', payload: saved });
    }
    // If not authenticated, we're done loading
    // If authenticated, the server sync effect will handle the rest
    if (!isAuthenticated) {
      queueMicrotask(() => setIsLoading(false));
    }
  }, []);

  // Handle server sync when authentication state changes
  useEffect(() => {
    const syncManager = getProgressSyncManager();

    // Subscribe to sync status changes
    const unsubscribe = syncManager.onStatusChange(setSyncStatus);

    // Handle auth state transition
    const wasAuthenticated = prevIsAuthenticatedRef.current;
    prevIsAuthenticatedRef.current = isAuthenticated;

    if (isAuthenticated && !wasAuthenticated) {
      // Just became authenticated - fetch from server
      progressLogger.info('User authenticated, fetching progress from server');
      syncManager.setAuthenticated(true);

      const loadFromServer = async () => {
        setIsLoading(true);

        try {
          // Check if we have unmigrated local progress
          const needsMigration = hasUnmigratedProgress();
          const localState = loadState();

          if (needsMigration && localState) {
            // Migrate local progress to server
            progressLogger.info('Migrating local progress to server');
            const result = await syncManager.migrateLocalProgress(localState);

            if (result.success && result.state) {
              dispatch({ type: 'MERGE_WITH_SERVER', payload: result.state });
              markAsMigrated();
              progressLogger.info('Migration complete');
            } else {
              progressLogger.warn('Migration failed, using local state');
            }
          } else {
            // No local progress to migrate - fetch from server
            const serverResponse = await syncManager.fetchServerProgress();

            if (serverResponse.found && serverResponse.progress) {
              progressLogger.info('Loaded progress from server');
              dispatch({ type: 'LOAD_FROM_SERVER', payload: serverResponse.progress });
              syncManager.setLastSyncedAt(serverResponse.lastSyncedAt);
            } else {
              progressLogger.info('No server progress found, using local state');
            }
          }
        } catch (error) {
          progressLogger.error('Failed to sync with server:', error);
        } finally {
          queueMicrotask(() => setIsLoading(false));
          hasLoadedFromServerRef.current = true;
        }
      };

      loadFromServer();
      syncManager.startPeriodicSync();
    } else if (!isAuthenticated && wasAuthenticated) {
      // Just logged out
      progressLogger.info('User logged out');
      syncManager.setAuthenticated(false);
      syncManager.stopPeriodicSync();
      hasLoadedFromServerRef.current = false;
    } else if (!isAuthenticated) {
      // Not authenticated and wasn't before - ensure loading is complete
      queueMicrotask(() => setIsLoading(false));
    }

    return () => {
      unsubscribe();
    };
  }, [isAuthenticated, npub]);

  // Save state to localStorage and sync to server on changes
  useEffect(() => {
    if (!isLoading) {
      // Always save to localStorage (for offline support)
      saveState(state);

      // Sync to server if authenticated and initial load is complete
      if (isAuthenticated && hasLoadedFromServerRef.current) {
        const syncManager = getProgressSyncManager();
        syncManager.requestSync(state);
      }
    }
  }, [state, isLoading, isAuthenticated]);

  // Update streak on mount
  useEffect(() => {
    if (!isLoading) {
      dispatch({ type: 'UPDATE_STREAK' });
    }
  }, [isLoading]);

  // Check achievements on state changes (debounced)
  useEffect(() => {
    if (isLoading) return;

    // Clear any pending achievement check
    if (achievementCheckTimeoutRef.current) {
      clearTimeout(achievementCheckTimeoutRef.current);
    }

    // Debounce achievement checks to avoid running on every state change
    achievementCheckTimeoutRef.current = setTimeout(() => {
      const newAchievements = checkAchievements(state);
      if (newAchievements.length > 0) {
        setNotifications((prev) => [...prev, ...newAchievements]);
      }
    }, ACHIEVEMENT_CHECK_DEBOUNCE_MS);

    // Cleanup timeout on unmount or state change
    return () => {
      if (achievementCheckTimeoutRef.current) {
        clearTimeout(achievementCheckTimeoutRef.current);
      }
    };
  }, [state, isLoading]);

  // Memoized action handlers
  const visitSection = useCallback(
    (sectionId: number) => {
      dispatch({ type: 'VISIT_SECTION', payload: { sectionId: makeSectionId(sectionId) } });
    },
    [makeSectionId]
  );

  const completeSection = useCallback(
    (sectionId: number) => {
      dispatch({ type: 'COMPLETE_SECTION', payload: { sectionId: makeSectionId(sectionId) } });

      // Notify iOS app if running in WKWebView
      postToiOS('sectionCompleted', {
        sectionId: makeSectionId(sectionId),
        courseId,
      });
    },
    [makeSectionId, courseId]
  );

  const recordQuiz = useCallback(
    (
      sectionId: number,
      difficulty: Difficulty,
      score: number,
      correctAnswers: number,
      totalQuestions: number
    ) => {
      const fullSectionId = makeSectionId(sectionId);

      dispatch({
        type: 'RECORD_QUIZ',
        payload: {
          sectionId: fullSectionId,
          difficulty,
          score,
          correctAnswers,
          totalQuestions,
        },
      });

      // Notify iOS app if running in WKWebView
      postToiOS('quizCompleted', {
        sectionId: fullSectionId,
        courseId,
        score,
        correctAnswers,
        totalQuestions,
      });

      // If quiz passed (score >= 80%), also send sectionCompleted
      // This mirrors the reducer logic that auto-completes sections on passing quiz
      if (score >= 80) {
        postToiOS('sectionCompleted', {
          sectionId: fullSectionId,
          courseId,
        });
      }
    },
    [makeSectionId, courseId]
  );

  const useVisualization = useCallback(
    (sectionId: number, name: string) => {
      dispatch({
        type: 'USE_VISUALIZATION',
        payload: { sectionId: makeSectionId(sectionId), name },
      });
    },
    [makeSectionId]
  );

  const dismissNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const resetProgress = useCallback(() => {
    dispatch({ type: 'RESET_PROGRESS' });
  }, []);

  const recordRaceGame = useCallback((result: RaceGameResult) => {
    dispatch({ type: 'RECORD_RACE_GAME', payload: result });

    // Notify iOS app if running in WKWebView
    postToiOS('raceGameCompleted', {
      courseId,
      score: result.score,
      tier: result.tier,
      correctAnswers: result.correctAnswers,
      totalQuestions: result.totalQuestions,
      isMultiplayer: result.isMultiplayer,
    });
  }, [courseId]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo<GamificationContextValue>(
    () => ({
      state,
      isLoading,
      notifications,
      syncStatus,
      visitSection,
      completeSection,
      recordQuiz,
      useVisualization,
      dismissNotification,
      resetProgress,
      recordRaceGame,
      dispatch,
    }),
    [
      state,
      isLoading,
      notifications,
      syncStatus,
      visitSection,
      completeSection,
      recordQuiz,
      useVisualization,
      dismissNotification,
      resetProgress,
      recordRaceGame,
      dispatch,
    ]
  );

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
}

/**
 * Hook to access gamification state and actions.
 * Must be used within a GamificationProvider.
 *
 * @returns {GamificationContextValue} Object containing:
 *   - state: Current gamification state (user progress, sections, achievements)
 *   - isLoading: Whether state is still loading from storage
 *   - notifications: Pending achievement notifications
 *   - visitSection: Mark a section as visited (awards XP)
 *   - completeSection: Mark a section as completed (awards XP)
 *   - recordQuiz: Record quiz attempt and calculate XP
 *   - useVisualization: Track visualization usage (awards XP)
 *   - dismissNotification: Clear an achievement notification
 *   - resetProgress: Reset all progress (development only)
 *
 * @throws {Error} If used outside of GamificationProvider
 *
 * @example
 * ```tsx
 * function QuizComponent() {
 *   const { state, recordQuiz } = useGamification();
 *
 *   const handleSubmit = (score: number) => {
 *     recordQuiz(1, 'medium', score, 8, 10);
 *   };
 *
 *   return <div>Total XP: {state.user.totalXP}</div>;
 * }
 * ```
 */
export function useGamification(): GamificationContextValue {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
}
