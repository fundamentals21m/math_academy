/**
 * Quiz Questions Index
 *
 * Exports all section quizzes for the Advanced Linear Algebra course.
 * The quizzes are organized by curriculum section (1-12).
 *
 * Note: These quizzes are based on Hoffman & Kunze's Linear Algebra textbook
 * and have been adapted to match the course curriculum structure.
 */

export type { QuizQuestion, DifficultyQuizData } from './types';

// =============================================================================
// SECTION QUIZ EXPORTS (Sections 1-12)
// =============================================================================

// Part 1: Algebraic Foundations
export { section01Quiz } from './chapter01'; // Fields and Number Systems
export { section07Quiz as section02Quiz } from './chapter02'; // Vector Spaces
export { section08Quiz as section03Quiz } from './chapter02'; // Subspaces
export { section09Quiz as section04Quiz } from './chapter02'; // Bases and Dimension

// Part 2: Linear Transformations
export { section13Quiz as section05Quiz } from './chapter03'; // Linear Transformations
export { section15Quiz as section06Quiz } from './chapter03'; // Matrix Representation
export { section17Quiz as section07Quiz } from './chapter03'; // Linear Functionals and Dual Spaces

// Part 3: Determinants and Systems
export { section02Quiz as section08Quiz } from './chapter01'; // Systems of Linear Equations
export { section30Quiz as section09Quiz } from './chapter05'; // Determinants

// Part 4: Eigentheory and Canonical Forms
export { section46Quiz as section10Quiz } from './chapter08'; // Eigenvalues and Eigenvectors
export { section47Quiz as section11Quiz } from './chapter08'; // Diagonalization
export { section48Quiz as section12Quiz } from './chapter08'; // Jordan Canonical Form

// =============================================================================
// CHAPTER QUIZ EXPORTS (for reference/comprehensive review)
// =============================================================================
export { chapter01Quiz } from './chapter01';
export { chapter02Quiz } from './chapter02';
export { chapter03Quiz } from './chapter03';
export { chapter04Quiz } from './chapter04';
export { chapter05Quiz } from './chapter05';
export { chapter06Quiz } from './chapter06';
export { chapter07Quiz } from './chapter07';
export { chapter08Quiz } from './chapter08';
export { chapter09Quiz } from './chapter09';
export { chapter10Quiz } from './chapter10';
