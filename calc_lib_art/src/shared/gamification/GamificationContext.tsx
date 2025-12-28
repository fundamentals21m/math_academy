/**
 * Simplified Gamification context provider for standalone deployment.
 * Provides XP tracking, achievements, and progress locally.
 */

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  type GamificationState,
  type SectionId,
  type Difficulty,
  type AchievementNotification,
  type CourseId,
  type SectionProgress,
  type MasteryLevel,
  XP_CONFIG,
} from './types';

// Storage key
const STORAGE_KEY = 'gamification_state_v2';

// =============================================================================
// DEFAULT STATE
// =============================================================================

function createDefaultState(): GamificationState {
  return {
    version: 2,
    user: {
      totalXP: 0,
      level: 1,
      sectionsCompleted: [],
      partsCompleted: [],
      quizzesTaken: 0,
      perfectQuizzes: 0,
      visualizationsUsed: 0,
      totalTimeSpentMinutes: 0,
      joinedAt: new Date().toISOString(),
    },
    sections: {},
    achievements: [],
    streak: {
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: null,
      freezesRemaining: 3,
      freezeUsedToday: false,
    },
    dailyGoals: {
      date: new Date().toISOString().split('T')[0],
      xpEarned: 0,
      xpGoal: 50,
      completed: false,
    },
    lastUpdated: new Date().toISOString(),
  };
}

function createDefaultSectionProgress(sectionId: SectionId): SectionProgress {
  return {
    sectionId,
    visitedAt: null,
    completedAt: null,
    timeSpentSeconds: 0,
    quizAttempts: [],
    masteryLevel: 'none' as MasteryLevel,
    visualizationsInteracted: [],
  };
}

// =============================================================================
// STORAGE
// =============================================================================

function loadState(): GamificationState | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // Ignore errors
  }
  return null;
}

function saveState(state: GamificationState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore errors
  }
}

// =============================================================================
// REDUCER
// =============================================================================

type GamificationAction =
  | { type: 'LOAD_STATE'; payload: GamificationState }
  | { type: 'VISIT_SECTION'; payload: { sectionId: SectionId } }
  | { type: 'COMPLETE_SECTION'; payload: { sectionId: SectionId } }
  | { type: 'RECORD_QUIZ'; payload: { sectionId: SectionId; difficulty: Difficulty; score: number; correctAnswers: number; totalQuestions: number } }
  | { type: 'USE_VISUALIZATION'; payload: { sectionId: SectionId; name: string } }
  | { type: 'UPDATE_STREAK' }
  | { type: 'RESET_PROGRESS' };

function gamificationReducer(state: GamificationState, action: GamificationAction): GamificationState {
  switch (action.type) {
    case 'LOAD_STATE':
      return action.payload;

    case 'VISIT_SECTION': {
      const { sectionId } = action.payload;
      const section = state.sections[sectionId] || createDefaultSectionProgress(sectionId);
      if (section.visitedAt) return state;

      return {
        ...state,
        user: {
          ...state.user,
          totalXP: state.user.totalXP + XP_CONFIG.SECTION_VISIT,
        },
        sections: {
          ...state.sections,
          [sectionId]: {
            ...section,
            visitedAt: new Date().toISOString(),
            masteryLevel: 'learning' as MasteryLevel,
          },
        },
        lastUpdated: new Date().toISOString(),
      };
    }

    case 'COMPLETE_SECTION': {
      const { sectionId } = action.payload;
      const section = state.sections[sectionId] || createDefaultSectionProgress(sectionId);
      if (section.completedAt) return state;

      return {
        ...state,
        user: {
          ...state.user,
          totalXP: state.user.totalXP + XP_CONFIG.SECTION_COMPLETE,
          sectionsCompleted: [...state.user.sectionsCompleted, sectionId],
        },
        sections: {
          ...state.sections,
          [sectionId]: {
            ...section,
            completedAt: new Date().toISOString(),
          },
        },
        lastUpdated: new Date().toISOString(),
      };
    }

    case 'RECORD_QUIZ': {
      const { sectionId, difficulty, score, correctAnswers, totalQuestions } = action.payload;
      const section = state.sections[sectionId] || createDefaultSectionProgress(sectionId);

      const baseXP = { easy: XP_CONFIG.QUIZ_EASY, medium: XP_CONFIG.QUIZ_MEDIUM, hard: XP_CONFIG.QUIZ_HARD }[difficulty];
      const earnedXP = Math.round(baseXP * (score / 100));
      const isPerfect = score === 100;

      return {
        ...state,
        user: {
          ...state.user,
          totalXP: state.user.totalXP + earnedXP,
          quizzesTaken: state.user.quizzesTaken + 1,
          perfectQuizzes: state.user.perfectQuizzes + (isPerfect ? 1 : 0),
        },
        sections: {
          ...state.sections,
          [sectionId]: {
            ...section,
            quizAttempts: [
              ...section.quizAttempts,
              {
                timestamp: new Date().toISOString(),
                difficulty,
                score,
                correctAnswers,
                totalQuestions,
              },
            ],
          },
        },
        lastUpdated: new Date().toISOString(),
      };
    }

    case 'USE_VISUALIZATION': {
      const { sectionId, name } = action.payload;
      const section = state.sections[sectionId] || createDefaultSectionProgress(sectionId);
      if (section.visualizationsInteracted.includes(name)) return state;

      return {
        ...state,
        user: {
          ...state.user,
          totalXP: state.user.totalXP + XP_CONFIG.VISUALIZATION_USE,
          visualizationsUsed: state.user.visualizationsUsed + 1,
        },
        sections: {
          ...state.sections,
          [sectionId]: {
            ...section,
            visualizationsInteracted: [...section.visualizationsInteracted, name],
          },
        },
        lastUpdated: new Date().toISOString(),
      };
    }

    case 'UPDATE_STREAK':
      return state;

    case 'RESET_PROGRESS':
      return createDefaultState();

    default:
      return state;
  }
}

// =============================================================================
// CONTEXT
// =============================================================================

interface GamificationContextValue {
  state: GamificationState;
  isLoading: boolean;
  notifications: AchievementNotification[];
  visitSection: (sectionId: number) => void;
  completeSection: (sectionId: number) => void;
  recordQuiz: (sectionId: number, difficulty: Difficulty, score: number, correctAnswers: number, totalQuestions: number) => void;
  useVisualization: (sectionId: number, visualizationName: string) => void;
  dismissNotification: (id: string) => void;
  resetProgress: () => void;
}

const GamificationContext = createContext<GamificationContextValue | null>(null);

interface GamificationProviderProps {
  children: ReactNode;
  courseId: CourseId;
}

export function GamificationProvider({ children, courseId }: GamificationProviderProps) {
  const [state, dispatch] = useReducer(gamificationReducer, createDefaultState());
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState<AchievementNotification[]>([]);

  const makeSectionId = useCallback(
    (numericId: number): SectionId => `${courseId}:${numericId}` as SectionId,
    [courseId]
  );

  // Load state from localStorage
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      dispatch({ type: 'LOAD_STATE', payload: saved });
    }
    setIsLoading(false);
  }, []);

  // Save state to localStorage
  useEffect(() => {
    if (!isLoading) {
      saveState(state);
    }
  }, [state, isLoading]);

  const visitSection = useCallback(
    (sectionId: number) => dispatch({ type: 'VISIT_SECTION', payload: { sectionId: makeSectionId(sectionId) } }),
    [makeSectionId]
  );

  const completeSection = useCallback(
    (sectionId: number) => dispatch({ type: 'COMPLETE_SECTION', payload: { sectionId: makeSectionId(sectionId) } }),
    [makeSectionId]
  );

  const recordQuiz = useCallback(
    (sectionId: number, difficulty: Difficulty, score: number, correctAnswers: number, totalQuestions: number) =>
      dispatch({ type: 'RECORD_QUIZ', payload: { sectionId: makeSectionId(sectionId), difficulty, score, correctAnswers, totalQuestions } }),
    [makeSectionId]
  );

  const useVisualization = useCallback(
    (sectionId: number, name: string) => dispatch({ type: 'USE_VISUALIZATION', payload: { sectionId: makeSectionId(sectionId), name } }),
    [makeSectionId]
  );

  const dismissNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const resetProgress = useCallback(() => dispatch({ type: 'RESET_PROGRESS' }), []);

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
    [state, isLoading, notifications, visitSection, completeSection, recordQuiz, useVisualization, dismissNotification, resetProgress]
  );

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification(): GamificationContextValue {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
}
