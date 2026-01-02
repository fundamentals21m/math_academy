/**
 * Gamification context provider and hook.
 * Manages XP, achievements, streaks, and progress tracking.
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
} from './types';
import { loadState, saveState } from './storage';
import { createDefaultState } from './defaults';
import { checkAchievements } from './achievements';
import { gamificationReducer } from './reducer';

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
  if (isIOSWebView()) {
    (window as WebKitWindow).webkit!.messageHandlers!.progressHandler!.postMessage({
      type,
      ...data,
    });
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
  /** Whether state is still loading from storage */
  isLoading: boolean;
  /** Pending achievement notifications to display */
  notifications: AchievementNotification[];
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
  
  // Ref for debouncing achievement checks
  const achievementCheckTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      dispatch({ type: 'LOAD_STATE', payload: saved });
    }
    setIsLoading(false);
  }, []);

  // Save state to localStorage on changes
  useEffect(() => {
    if (!isLoading) {
      saveState(state);
    }
  }, [state, isLoading]);

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
      dispatch({
        type: 'RECORD_QUIZ',
        payload: {
          sectionId: makeSectionId(sectionId),
          difficulty,
          score,
          correctAnswers,
          totalQuestions,
        },
      });

      // Notify iOS app if running in WKWebView
      postToiOS('quizCompleted', {
        sectionId: makeSectionId(sectionId),
        courseId,
        score,
        correctAnswers,
        totalQuestions,
      });
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

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo<GamificationContextValue>(
    () => ({
      state,
      isLoading,
      notifications,
      visitSection,
      completeSection,
      recordQuiz,
      useVisualization,
      dismissNotification,
      resetProgress,
    }),
    [
      state,
      isLoading,
      notifications,
      visitSection,
      completeSection,
      recordQuiz,
      useVisualization,
      dismissNotification,
      resetProgress,
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
