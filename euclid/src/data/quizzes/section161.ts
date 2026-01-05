import type { QuizQuestion } from './types';

export const section161Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.16 states: If four lines are proportional (A:B = C:D), then:',
    options: [
      'The rectangle on A and D equals the rectangle on B and C',
      'The rectangle on A and B equals the rectangle on C and D',
      'The sum A + D equals B + C',
      'All four lines are equal'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VI.16 proves that if A:B = C:D, then the rectangle contained by the extremes (A × D) equals the rectangle contained by the means (B × C).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The phrase "rectangle contained by" two lines means:',
    options: [
      'A rectangle with those lines as diagonals',
      'A rectangle with those lines as adjacent sides',
      'A rectangle inscribed between those lines',
      'A rectangle with perimeter equal to the sum of those lines'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The rectangle contained by lines A and B is the rectangle with sides of length A and B, having area A × B.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.16 is essentially a geometric statement of which algebraic fact?',
    options: [
      'If a/b = c/d, then a + b = c + d',
      'If a/b = c/d, then ad = bc (cross multiplication)',
      'If a/b = c/d, then a - b = c - d',
      'If a/b = c/d, then a^2 = cd'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Cross multiplication: a/b = c/d implies ad = bc. Geometrically, the rectangle on extremes equals the rectangle on means.',
  },
];
