/**
 * Quiz Questions Index
 *
 * Export all section quizzes from this file.
 */

export type { QuizQuestion, SectionQuestions } from './types';

// Chapter 1: Fundamental Concepts (Sections 1-4)
export { section01Questions } from './section01';
export { section02Questions } from './section02';
export { section03Questions } from './section03';
export { section04Questions } from './section04';

// Chapter 2: Trees and Distance (Sections 5-7)
export { section05Questions } from './section05';
export { section06Questions } from './section06';
export { section07Questions } from './section07';

// Chapter 3: Matchings and Factors (Sections 8-10)
export { section08Questions } from './section08';
export { section09Questions } from './section09';
export { section10Questions } from './section10';

// Chapter 4: Connectivity and Paths (Sections 11-13)
export { section11Questions } from './section11';
export { section12Questions } from './section12';
export { section13Questions } from './section13';

// Chapter 5: Coloring of Graphs (Sections 14-16)
export { section14Questions } from './section14';
export { section15Questions } from './section15';
export { section16Questions } from './section16';

// Chapter 6: Planar Graphs (Sections 17-19)
export { section17Questions } from './section17';
export { section18Questions } from './section18';
export { section19Questions } from './section19';

// Chapter 7: Edges and Cycles (Sections 20-22)
export { section20Questions } from './section20';
export { section21Questions } from './section21';
export { section22Questions } from './section22';

// Chapter 8: Additional Topics (Sections 23-28)
export { section23Questions } from './section23';
export { section24Questions } from './section24';
export { section25Questions } from './section25';
export { section26Questions } from './section26';
export { section27Questions } from './section27';
export { section28Questions } from './section28';

// Quiz map for dynamic loading
export { default as quizMap, getQuizQuestions } from './quizMap';
