import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a right triangle with legs $a$ and $b$ and hypotenuse $c$, the Pythagorean theorem states:',
    options: [
      '$a + b = c$',
      '$a^2 + b^2 = c^2$',
      '$a \\times b = c$',
      '$a^2 \\times b^2 = c^2$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Pythagorean theorem: $a^2 + b^2 = c^2$ where $c$ is the hypotenuse.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Is a triangle with sides 5, 12, and 13 a right triangle?',
    options: [
      'Yes, because $5^2 + 12^2 = 13^2$',
      'No, because $5 + 12 \\neq 13$',
      'Yes, because $5 + 12 > 13$',
      'No, because $5^2 + 12^2 \\neq 13^2$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$5^2 + 12^2 = 25 + 144 = 169 = 13^2$, so yes, it is a right triangle.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the length of the diagonal of a square with side 1? (Round to 2 decimal places)',
    correctAnswer: 1.41,
    numericRange: { min: 0, max: 5, precision: 2 },
    difficulty: 'easy',
    explanation: 'By the Pythagorean theorem: $d^2 = 1^2 + 1^2 = 2$, so $d = \\sqrt{2} \\approx 1.41$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the proof that $\\sqrt{2}$ is irrational, what type of argument is used?',
    options: [
      'Direct proof',
      'Proof by induction',
      'Proof by contradiction',
      'Proof by construction'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The classic proof assumes $\\sqrt{2}$ is rational and derives a contradiction.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\sqrt{2} = \\frac{p}{q}$ in lowest terms, then both $p$ and $q$ must be:',
    options: [
      'Odd',
      'Even',
      'Prime',
      'This leads to a contradiction'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The proof shows both must be even, contradicting that the fraction is in lowest terms.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Babylonian method for approximating $\\sqrt{N}$ uses the formula:',
    options: [
      '$x_{n+1} = \\frac{N}{x_n}$',
      '$x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{N}{x_n}\\right)$',
      '$x_{n+1} = x_n + N$',
      '$x_{n+1} = \\sqrt{x_n}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Babylonian method averages $x_n$ and $\\frac{N}{x_n}$ to get a better approximation.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which of the following is a Pythagorean triple?',
    options: [
      '(3, 4, 6)',
      '(5, 12, 13)',
      '(6, 7, 8)',
      '(2, 3, 4)'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$5^2 + 12^2 = 25 + 144 = 169 = 13^2$. The other options do not satisfy $a^2 + b^2 = c^2$.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'Using the Babylonian method with $x_0 = 1$ to approximate $\\sqrt{2}$, what is $x_1$?',
    correctAnswer: 1.5,
    numericRange: { min: 0, max: 5, precision: 1 },
    difficulty: 'medium',
    explanation: '$x_1 = \\frac{1}{2}\\left(1 + \\frac{2}{1}\\right) = \\frac{1}{2}(3) = 1.5$.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'The formula for generating primitive Pythagorean triples is $a = m^2 - n^2$, $b = 2mn$, $c = m^2 + n^2$. What triple does $m=2$, $n=1$ generate?',
    options: [
      '(3, 4, 5)',
      '(5, 12, 13)',
      '(8, 15, 17)',
      '(7, 24, 25)'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$a = 4-1 = 3$, $b = 2(2)(1) = 4$, $c = 4+1 = 5$. So the triple is (3, 4, 5).',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'Why is the Babylonian method so efficient?',
    options: [
      'It uses addition only',
      'It converges linearly',
      'It has quadratic convergence (roughly doubles correct digits each step)',
      'It requires no initial guess'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Quadratic convergence means each iteration roughly doubles the number of correct digits.',
  },
];
