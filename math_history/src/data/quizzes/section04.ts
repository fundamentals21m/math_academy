import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the Babylonian method for computing $\\sqrt{2}$, the iteration formula is:',
    options: [
      '$x_{n+1} = x_n + 1$',
      '$x_{n+1} = \\frac{1}{2}(x_n + \\frac{2}{x_n})$',
      '$x_{n+1} = 2x_n$',
      '$x_{n+1} = x_n^2$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Babylonian method uses $x_{n+1} = \\frac{1}{2}(x_n + \\frac{2}{x_n})$, which converges rapidly to $\\sqrt{2}$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Using the Babylonian method with $x_0 = 1$, what is $x_1$? (Enter as a decimal)',
    correctAnswer: 1.5,
    numericRange: { min: 0, max: 10, precision: 1 },
    difficulty: 'easy',
    explanation: '$x_1 = \\frac{1}{2}(1 + \\frac{2}{1}) = \\frac{1}{2}(1 + 2) = \\frac{3}{2} = 1.5$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The continued fraction for $\\sqrt{2}$ is $[1; 2, 2, 2, ...]$. What does this mean?',
    options: [
      '$\\sqrt{2} = 1 + 2 + 2 + 2 + ...$',
      '$\\sqrt{2} = 1.222...$',
      '$\\sqrt{2}$ has a periodic continued fraction with repeating 2s',
      '$\\sqrt{2} = 1 \\times 2 \\times 2 \\times 2 \\times ...$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The notation $[1; 2, 2, 2, ...]$ means $\\sqrt{2} = 1 + \\frac{1}{2 + \\frac{1}{2 + \\frac{1}{2 + ...}}}$, a periodic continued fraction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'ISO paper sizes (A0, A1, A2, A3, A4...) all have the same aspect ratio because:',
    options: [
      'They are all squares',
      'The ratio is $\\sqrt{2}:1$, which is preserved when cut in half',
      'They are all the same size',
      'The ratio is $2:1$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A rectangle with ratio $\\sqrt{2}:1$ has the unique property that when cut in half parallel to the short side, the halves have the same aspect ratio.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The convergents $\\frac{1}{1}, \\frac{3}{2}, \\frac{7}{5}, \\frac{17}{12}...$ are:',
    options: [
      'Powers of 2',
      'Prime numbers',
      'Best rational approximations to $\\sqrt{2}$',
      'Pythagorean triples'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The convergents of the continued fraction for $\\sqrt{2}$ give the best possible rational approximations for their denominator size.',
  },
];
