import type { QuizQuestion } from './types';

export const section148Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does VI.3 (the angle bisector theorem) state about a triangle\'s angle bisector?',
    options: [
      'It always bisects the opposite side',
      'It is perpendicular to the opposite side',
      'It divides the opposite side in the ratio of the adjacent sides',
      'It equals the other two sides combined',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The angle bisector theorem (VI.3) states that an angle bisector divides the opposite side in the same ratio as the adjacent sides.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In triangle ABC, the bisector of angle A meets BC at D. If AB = 6, AC = 9, and BC = 10, what is BD?',
    options: [
      '3',
      '4',
      '5',
      '6'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By VI.3, BD:DC = AB:AC = 6:9 = 2:3. Since BD + DC = 10, we get BD = 4 and DC = 6.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In modern geometry, the angle bisector theorem is fundamental for:',
    options: [
      'Calculating circle circumference',
      'Proving all triangles are equilateral',
      'Computing volumes of solids',
      'Locating the incenter and understanding angle bisector concurrency',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The angle bisector theorem is essential for proving that the three angle bisectors of a triangle are concurrent at the incenter.',
  },
];
