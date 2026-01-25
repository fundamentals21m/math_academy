import type { QuizQuestion } from './types';

export const section152Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does VI.7 establish about triangles with one equal angle?',
    options: [
      'If two triangles have one angle equal and sides about another angle proportional with both remaining angles less than (or both not less than) a right angle, they are similar',
      'They are always congruent',
      'They have equal areas',
      'They share a common base'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'VI.7 provides a refined similarity criterion involving one equal angle and proportional sides about a different angle, with conditions on the remaining angles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does VI.7 require the condition about the remaining angles being "both less than" or "both not less than" a right angle?',
    options: [
      'To make the proof easier',
      'Because all triangles must have a right angle',
      'To ensure the triangles are isosceles',
      'To avoid ambiguous cases where the proportional sides could form different triangles',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The angle condition prevents the ambiguous case (like SSA in congruence) where proportional sides could form two different triangles.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.7 can be seen as addressing what modern geometric concern?',
    options: [
      'The calculation of area',
      'The ambiguous case in triangle construction',
      'The measurement of circles',
      'The construction of parallel lines',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.7 addresses the same issue as the "ambiguous case" or "SSA condition" in modern geometry where additional constraints are needed for uniqueness.',
  },
];
