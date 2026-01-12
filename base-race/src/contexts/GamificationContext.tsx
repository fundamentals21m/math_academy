/**
 * GamificationContext - Re-exports from shared gamification module
 *
 * This file re-exports the shared GamificationProvider and useGamification hook,
 * wrapping the provider to automatically inject the course ID.
 */

import { type ReactNode } from 'react';
import { COURSE_ID } from '@/config';
import {
  GamificationProvider as SharedGamificationProvider,
  useGamification,
  type SectionId,
} from '@shared/gamification';

// Re-export the hook directly
export { useGamification };

// Course prefix for section IDs
const COURSE_PREFIX = COURSE_ID;

// Helper to create a full section ID from a numeric ID
export function makeSectionId(numericId: number): SectionId {
  return `${COURSE_PREFIX}:${numericId}` as SectionId;
}

// Wrapper component that injects the course ID
export function GamificationProvider({ children }: { children: ReactNode }) {
  return (
    <SharedGamificationProvider courseId={COURSE_ID}>
      {children}
    </SharedGamificationProvider>
  );
}
