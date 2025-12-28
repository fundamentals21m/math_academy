/**
 * Quiz Questions Index
 *
 * Export all section quizzes from this file.
 * Add new exports as you create quiz files for each section.
 *
 * Usage in section components:
 *   import { section00Questions } from '@/data/quizzes';
 *   <SectionQuiz sectionId={0} questions={section00Questions} />
 */

export type { QuizQuestion, SectionQuestions } from './types';

// =============================================================================
// SECTION QUIZ EXPORTS
// =============================================================================

// Part 1: The Quest to Understand Change
export { section00Questions } from './section00';
export { section01Questions } from './section01';
export { section02Questions } from './section02';

// Part 2: The Birth of Calculus
export { section03Questions } from './section03';
export { section04Questions } from './section04';
export { section05Questions } from './section05';

// Part 3: The Derivative
export { section06Questions } from './section06';
export { section07Questions } from './section07';
export { section08Questions } from './section08';

// Part 4: The Integral
export { section09Questions } from './section09';
export { section10Questions } from './section10';
export { section11Questions } from './section11';

// Part 5: Calculus in the World
export { section12Questions } from './section12';
export { section13Questions } from './section13';
export { section14Questions } from './section14';
