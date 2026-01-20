import { useState, useEffect, useCallback } from 'react';
import { COURSE_ID } from '@/config';

interface ProblemProgress {
  completed: Set<string>;
  solutionViewed: Set<string>;
}

interface ProblemProgressState {
  completed: string[];
  solutionViewed: string[];
}

const STORAGE_KEY = `${COURSE_ID}:problems:progress`;

/**
 * Hook for managing problem set completion progress with localStorage persistence.
 */
export function useProblemProgress() {
  const [progress, setProgress] = useState<ProblemProgress>({
    completed: new Set(),
    solutionViewed: new Set(),
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: ProblemProgressState = JSON.parse(stored);
        setProgress({
          completed: new Set(parsed.completed || []),
          solutionViewed: new Set(parsed.solutionViewed || []),
        });
      }
    } catch (e) {
      console.error('Failed to load problem progress:', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever progress changes
  useEffect(() => {
    if (!isLoaded) return;

    try {
      const state: ProblemProgressState = {
        completed: Array.from(progress.completed),
        solutionViewed: Array.from(progress.solutionViewed),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save problem progress:', e);
    }
  }, [progress, isLoaded]);

  const toggleComplete = useCallback((problemId: string) => {
    setProgress((prev) => {
      const newCompleted = new Set(prev.completed);
      if (newCompleted.has(problemId)) {
        newCompleted.delete(problemId);
      } else {
        newCompleted.add(problemId);
      }
      return { ...prev, completed: newCompleted };
    });
  }, []);

  const markComplete = useCallback((problemId: string) => {
    setProgress((prev) => {
      const newCompleted = new Set(prev.completed);
      newCompleted.add(problemId);
      return { ...prev, completed: newCompleted };
    });
  }, []);

  const markIncomplete = useCallback((problemId: string) => {
    setProgress((prev) => {
      const newCompleted = new Set(prev.completed);
      newCompleted.delete(problemId);
      return { ...prev, completed: newCompleted };
    });
  }, []);

  const markSolutionViewed = useCallback((problemId: string) => {
    setProgress((prev) => {
      const newSolutionViewed = new Set(prev.solutionViewed);
      newSolutionViewed.add(problemId);
      return { ...prev, solutionViewed: newSolutionViewed };
    });
  }, []);

  const isComplete = useCallback(
    (problemId: string) => progress.completed.has(problemId),
    [progress.completed]
  );

  const hasSolutionViewed = useCallback(
    (problemId: string) => progress.solutionViewed.has(problemId),
    [progress.solutionViewed]
  );

  const getCompletionStats = useCallback(
    (problemIds: string[]) => {
      const completed = problemIds.filter((id) => progress.completed.has(id)).length;
      return {
        completed,
        total: problemIds.length,
        percentage: problemIds.length > 0 ? Math.round((completed / problemIds.length) * 100) : 0,
      };
    },
    [progress.completed]
  );

  const resetProgress = useCallback(() => {
    setProgress({
      completed: new Set(),
      solutionViewed: new Set(),
    });
  }, []);

  return {
    isLoaded,
    completed: progress.completed,
    solutionViewed: progress.solutionViewed,
    toggleComplete,
    markComplete,
    markIncomplete,
    markSolutionViewed,
    isComplete,
    hasSolutionViewed,
    getCompletionStats,
    resetProgress,
  };
}

export type UseProblemProgressReturn = ReturnType<typeof useProblemProgress>;
