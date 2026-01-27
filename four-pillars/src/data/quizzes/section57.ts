import type { QuizQuestion } from './types';

export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The upper half plane $\\mathcal{H}$ consists of all complex numbers $z = x + iy$ with:',
    options: [
      '$y < 0$',
      '$x > 0$',
      '$|z| > 1$',
      '$y > 0$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The upper half plane is defined by the condition that the imaginary part y > 0.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A non-Euclidean line in the upper half plane is:',
    options: [
      'A vertical ray or a semicircle centered on the x-axis',
      'Any straight line',
      'A horizontal line',
      'Any circle'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Non-Euclidean lines are vertical rays (x = c, y > 0) or semicircles with centers on the x-axis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Non-Euclidean lines meet the x-axis at:',
    options: [
      'Acute angles',
      'Right angles',
      'Obtuse angles',
      'Various angles'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Both vertical rays and semicircles centered on the x-axis meet the boundary at right angles (90°).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Given a line L and point P not on L in hyperbolic geometry, how many parallels to L pass through P?',
    options: [
      'None',
      'Exactly one',
      'Infinitely many',
      'Exactly two'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is the defining property of hyperbolic geometry: infinitely many lines through P do not meet L.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a Möbius transformation $f(z) = (az+b)/(cz+d)$ to map the upper half plane to itself, we need:',
    options: [
      '$ad - bc < 0$',
      '$ad - bc = 0$',
      '$a = d = 0$',
      '$ad - bc > 0$ with real coefficients'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'With real coefficients, ad − bc > 0 ensures the upper half plane maps to itself.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The failure of the parallel axiom in hyperbolic geometry was discovered in:',
    options: [
      'The 19th century',
      'Ancient Greece',
      'The Renaissance',
      'The 20th century'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Lobachevsky and Bolyai independently discovered non-Euclidean geometry in the 1820s-1830s.',
  },
];
