import type { QuizQuestion } from './types';

export const section171Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.26 concerns the relationship between a parallelogram and its:',
    options: [
      'Circumscribed circle',
      'Gnomon (the L-shaped figure remaining when a similar parallelogram is removed)',
      'Inscribed triangle',
      'Altitude'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.26 deals with the gnomon of a parallelogram, which is the L-shaped region formed when a smaller similar parallelogram is removed from a corner.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to VI.26, if a gnomon is removed from a parallelogram about its diameter, the remaining similar parallelogram:',
    options: [
      'Has equal area to the gnomon',
      'Is positioned about the same diameter as the original',
      'Has perpendicular sides',
      'Is congruent to the gnomon'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'VI.26 proves that when a similar parallelogram is removed from the original (creating a gnomon), both the original and the removed parallelogram share the same diameter.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The gnomon concept in VI.26 is fundamental to understanding:',
    options: [
      'Circle theorems',
      'Application of areas (geometric algebra)',
      'Angle bisection',
      'Parallel postulate'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Gnomons are essential to Greek geometric algebra. They allow manipulation of areas (adding/subtracting parallelograms) while maintaining proportional relationships.',
  },
];
