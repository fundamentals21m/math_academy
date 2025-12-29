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
export { section29Questions } from './section29';
export { section30Questions } from './section30';
export { section31Questions } from './section31';
export { section32Questions } from './section32';
export { section33Questions } from './section33';

// Example: Uncomment and add as you create more sections
// export { section01Questions } from './section01';
// export { section02Questions } from './section02';
// ... etc
