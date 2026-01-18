/**
 * Course configuration context for shared layout components.
 *
 * This context provides course-specific configuration to shared components
 * like Header, Sidebar, and LessonLayout without requiring direct imports.
 *
 * Usage in course App.tsx:
 * ```tsx
 * import { CourseConfigProvider } from '@shared/contexts/CourseConfigContext';
 * import { COURSE_ID, COURSE_NAME, COURSE_ICON, FEATURES, HUB_URL } from '@/config';
 * import { curriculum } from '@/data/curriculum';
 *
 * const courseConfig = {
 *   id: COURSE_ID,
 *   name: COURSE_NAME,
 *   icon: COURSE_ICON,
 *   hubUrl: HUB_URL,
 *   features: FEATURES,
 *   curriculum,
 * };
 *
 * function App() {
 *   return (
 *     <CourseConfigProvider config={courseConfig}>
 *       <AppContent />
 *     </CourseConfigProvider>
 *   );
 * }
 * ```
 *
 * Usage in shared components:
 * ```tsx
 * import { useCourseConfig } from '@shared/contexts/CourseConfigContext';
 *
 * function Header() {
 *   const { name, icon, features, hubUrl } = useCourseConfig();
 *   // ...
 * }
 * ```
 */

import { createContext, useContext, type ReactNode } from 'react';
import type { CourseId } from '../gamification/types';

/**
 * Feature flags that can be enabled/disabled per course
 */
export interface CourseFeatures {
  gamification: boolean;
  leaderboard: boolean;
  nostrAuth: boolean;
  quizzes: boolean;
  interactiveModules: boolean;
  theoremIndex: boolean;
  problemSets?: boolean;
}

/**
 * Section within a curriculum part
 */
export interface CurriculumSection {
  id: number;
  title: string;
}

/**
 * Part/chapter in the curriculum
 */
export interface CurriculumPart {
  id: number;
  title: string;
  sections: CurriculumSection[];
}

/**
 * Full curriculum structure
 */
export type Curriculum = CurriculumPart[];

/**
 * Course configuration provided to shared components
 */
export interface CourseConfig {
  /** Course identifier (e.g., 'df', 'bfi') */
  id: CourseId;
  /** Human-readable course name */
  name: string;
  /** Course icon/emoji */
  icon: string;
  /** URL to the main hub */
  hubUrl: string;
  /** Feature flags */
  features: CourseFeatures;
  /** Curriculum structure for navigation */
  curriculum: Curriculum;
  /** Optional course description */
  description?: string;
  /** Optional accent color */
  accent?: string;
}

const CourseConfigContext = createContext<CourseConfig | null>(null);

interface CourseConfigProviderProps {
  config: CourseConfig;
  children: ReactNode;
}

/**
 * Provider component that makes course configuration available to all children.
 */
export function CourseConfigProvider({ config, children }: CourseConfigProviderProps) {
  return (
    <CourseConfigContext.Provider value={config}>
      {children}
    </CourseConfigContext.Provider>
  );
}

/**
 * Hook to access course configuration from shared components.
 * Throws if used outside of CourseConfigProvider.
 */
export function useCourseConfig(): CourseConfig {
  const context = useContext(CourseConfigContext);
  if (!context) {
    throw new Error('useCourseConfig must be used within CourseConfigProvider');
  }
  return context;
}

/**
 * Hook to access course configuration, returning null if not available.
 * Useful for components that may render outside of a course context.
 */
export function useCourseConfigOptional(): CourseConfig | null {
  return useContext(CourseConfigContext);
}
