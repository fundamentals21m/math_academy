/**
 * Real Analysis Quiz Questions Index
 *
 * Based on Kenneth A. Ross - Elementary Analysis
 * Export all section quizzes from this file.
 * Add new exports as you create quiz files for each section.
 *
 * Usage in section components:
 *   import { section01Questions } from '@/data/quizzes';
 *   <SectionQuiz sectionId={1} questions={section01Questions} />
 */

export type { QuizQuestion, SectionQuestions } from './types';

// =============================================================================
// SECTION QUIZ EXPORTS - REAL ANALYSIS COURSE
// Add new section exports here as you create them
// =============================================================================

// Part 1: Foundations of Analysis
export { section01Questions } from './chapter01'; // Real Number System
export { section02Questions } from './chapter01'; // Mathematical Induction
export { section03Questions } from './chapter01'; // Finite and Infinite Sets
export { section04Questions } from './chapter01'; // Functions and Relations

// Part 2: Sequences and Series
export { section05Questions } from './chapter02'; // Sequences and Limits
export { section06Questions } from './chapter02'; // Infinite Series
export { section07Questions } from './chapter02'; // Convergence Tests
export { section08Questions } from './chapter02'; // Power Series

// Part 3: Continuity and Differentiation
export { section09Questions } from './chapter03'; // Limits and Continuity
export { section10Questions } from './chapter03'; // Continuous Functions
export { section11Questions } from './chapter03'; // Differentiation
export { section12Questions } from './chapter03'; // Derivative Applications

// Part 4: Integration and Advanced Topics
export { section13Questions } from './chapter04'; // Riemann Integral
export { section14Questions } from './chapter04'; // Fundamental Theorem
export { section15Questions } from './chapter04'; // Sequences of Functions
