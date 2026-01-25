import type { QuizQuestion } from './types';

export const section169Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.24 states that parallelograms described about the diameter of a parallelogram are:',
    options: [
      'Equal in area to the whole parallelogram',
      'Perpendicular to the diameter',
      'Congruent to each other',
      'Similar to the whole parallelogram',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VI.24 proves that any parallelogram described about the diameter (diagonal) of another parallelogram is similar to the whole.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The key geometric insight of VI.24 is that the diagonal creates:',
    options: [
      'Equal areas on both sides',
      'Perpendicular lines',
      'A proportional subdivision that preserves shape',
      'Parallel segments only',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The diagonal (diameter) of a parallelogram creates similar triangles, and parallelograms formed about this diagonal share the same angles and proportional sides as the original.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which previous proposition is essential to proving VI.24?',
    options: [
      'VI.1 (triangles with same height have areas proportional to bases)',
      'VI.4 (equiangular triangles have proportional sides)',
      'VI.20 (similar polygons divide into similar triangles)',
      'VI.22 (duplicate ratio of similar figures)',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VI.24 relies on VI.4, which establishes that equiangular triangles have proportional sides. The diagonal creates equiangular triangles that share angles with the whole parallelogram.',
  },
];
