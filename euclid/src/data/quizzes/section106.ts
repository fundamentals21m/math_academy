import type { QuizQuestion } from './types';

export const section106Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the incircle of a triangle?',
    options: [
      'The circle passing through all three vertices',
      'The largest circle that fits inside, tangent to all three sides',
      'A circle centered at a vertex',
      'Any circle inside the triangle',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The incircle (inscribed circle) is the largest circle that fits inside the triangle, touching all three sides.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is the incenter of a triangle found in IV.4?',
    options: [
      'By bisecting two angles and finding their intersection',
      'By bisecting the sides',
      'By drawing altitudes',
      'By drawing the medians',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The incenter is the intersection of the angle bisectors. Euclid bisects two angles; their intersection point is equidistant from all three sides.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If a triangle has area A and semiperimeter s, what is the incircle radius r?',
    options: [
      'r = A × s',
      'r = s / A',
      'r = A / s',
      'r = √(A × s)',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The incircle radius r = A/s, where A is the area and s is the semiperimeter (half the perimeter).',
  },
];
