/**
 * Real Analysis Quiz Questions Index
 *
 * Based on Kenneth A. Ross - Elementary Analysis
 * Export all section quizzes from this file.
 *
 * Quiz Structure:
 * - Each section has 60 questions (20 easy, 20 medium, 20 hard)
 * - Each chapter has 20 hard questions covering all sections
 *
 * Usage in section components:
 *   import { section01Quiz } from '@/data/quizzes';
 *   <SectionQuiz sectionId={1} questions={section01Quiz} />
 */

export type { QuizQuestion, SectionQuestions } from './types';

// =============================================================================
// SECTION QUIZ EXPORTS - REAL ANALYSIS COURSE
// Each section quiz has { easy: [...], medium: [...], hard: [...] } structure
// =============================================================================

// Part 1: Foundations of Analysis
export { section01Quiz } from './section01'; // Real Number System
export { section02Quiz } from './section02'; // Mathematical Induction
export { section03Quiz } from './section03'; // Finite and Infinite Sets
export { section04Quiz } from './section04'; // Functions and Relations

// Part 2: Sequences and Series
export { section05Quiz } from './section05'; // Sequences and Limits
export { section06Quiz } from './section06'; // Infinite Series
export { section07Quiz } from './section07'; // Convergence Tests
export { section08Quiz } from './section08'; // Power Series

// Part 3: Continuity and Differentiation
export { section09Quiz } from './section09'; // Limits and Continuity
export { section10Quiz } from './section10'; // Continuous Functions
export { section11Quiz } from './section11'; // Differentiation
export { section12Quiz } from './section12'; // Derivative Applications

// Part 4: Integration and Advanced Topics
export { section13Quiz } from './section13'; // Riemann Integral
export { section14Quiz } from './section14'; // Fundamental Theorem
export { section15Quiz } from './section15'; // Sequences of Functions

// =============================================================================
// CHAPTER QUIZ EXPORTS
// Each chapter quiz has 20 hard questions covering all sections in the chapter
// =============================================================================

export { chapter01Quiz } from './chapter01'; // Foundations of Analysis
export { chapter02Quiz } from './chapter02'; // Sequences and Series
export { chapter03Quiz } from './chapter03'; // Continuity and Differentiation
export { chapter04Quiz } from './chapter04'; // Integration and Advanced Topics
