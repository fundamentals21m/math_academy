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
// Add new section exports here as you create them
// =============================================================================

export { section00Questions } from './section00';

// Example: Uncomment and add as you create more sections
// export { section01Questions } from './section01';
// export { section02Questions } from './section02';
// ... etc
