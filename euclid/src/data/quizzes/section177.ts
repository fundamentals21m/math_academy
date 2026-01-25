import type { QuizQuestion } from './types';

export const section177Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.32 concerns two triangles that have:',
    options: [
      'Equal areas',
      'Perpendicular sides',
      'One pair of equal angles and sides about another angle proportional',
      'All sides equal',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'VI.32 considers triangles with one angle equal and the sides about another angle proportional, and proves a relationship about their parallel sides.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In VI.32, when two triangles have the specified proportional relationship, the remaining sides are:',
    options: [
      'Perpendicular to each other',
      'Parallel to each other',
      'Equal in length',
      'In the same ratio as the first sides',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.32 proves that when triangles have one equal angle and proportional sides about another angle, the remaining pair of sides (not involved in the proportion) are parallel.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.32 is useful for:',
    options: [
      'Establishing when triangles share parallel elements despite not being similar',
      'Constructing perpendicular lines',
      'Finding circle centers',
      'Bisecting angles',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'VI.32 identifies conditions under which triangles have parallel sides without being fully similar. This extends the theory of proportion to identify parallel relationships.',
  },
];
