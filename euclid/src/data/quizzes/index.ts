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

// Book VII sections (206-218)
export { section206Questions } from './section206';
export { section207Questions } from './section207';
export { section208Questions } from './section208';
export { section209Questions } from './section209';
export { section210Questions } from './section210';
export { section211Questions } from './section211';
export { section212Questions } from './section212';
export { section213Questions } from './section213';
export { section214Questions } from './section214';
export { section215Questions } from './section215';
export { section216Questions } from './section216';
export { section217Questions } from './section217';
export { section218Questions } from './section218';

// Example: Uncomment and add as you create more sections
// export { section01Questions } from './section01';
// export { section02Questions } from './section02';
// ... etc
