import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In perspective drawing, parallel lines that recede from the viewer appear to:',
    options: [
      'Remain parallel',
      'Meet at a vanishing point on the horizon',
      'Curve',
      'Diverge',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Parallel lines converge to a single vanishing point in perspective.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The costruzione legittima was first published by:',
    options: [
      'Descartes',
      'Euclid',
      'Newton',
      'Leon Battista Alberti',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Alberti published the method in 1436.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To find successive rows of tiles in perspective, the costruzione legittima uses:',
    options: [
      'Measurement with a ruler',
      'The diagonal of a tile',
      'Random placement',
      'Calculus',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The tile diagonal crosses columns at corners of successive rows.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If the eye is at (−1, 1) and we view point (n, 0), its perspective image on the y-axis is at:',
    options: [
      '$y = \\frac{1}{n}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The line from (−1, 1) to (n, 0) crosses the y-axis at y = n/(n+1).',
  },
      '$y = n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The line from (−1, 1) to (n, 0) crosses the y-axis at y = n/(n+1).',
  },
      '$y = n + 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The line from (−1, 1) to (n, 0) crosses the y-axis at y = n/(n+1).',
  },
      '$y = \\frac{n}{n+1}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The line from (−1, 1) to (n, 0) crosses the y-axis at y = n/(n+1).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The line from (−1, 1) to (n, 0) crosses the y-axis at y = n/(n+1).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The function f(y) = 1/(2−y) shifts perspective images of equally spaced points. Its fixed point y = 1 represents:',
    options: [
      'The origin',
      'The viewer\\\\\'s position',
      'The horizon',
      'The first tile',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'y = 1 is not moved by f, corresponding to the limit point at infinity (the horizon).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The perspective images of x = 0, 1, 2, 3, ... are y = 0, 1/2, 2/3, 3/4, ..., which converge to:',
    options: [
      '1',
      '1/2',
      '0',
      '2',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'As n → ∞, n/(n+1) → 1, which is the horizon.',
  },
];
