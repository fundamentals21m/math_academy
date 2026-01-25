import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Pollard\'s rho algorithm finds factors using:',
    options: [
      'Trial division',
      'Matrix operations',
      'A pseudo-random walk with cycle detection',
      'Continued fractions',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Pollard rho uses $f(x) = x^2 + c \\bmod n$ and detects cycles via Floyd\'s algorithm.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The expected running time of Pollard\'s rho to find a factor $p$ is:',
    options: [
      '$O(p)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Birthday paradox: collision expected after $O(\\sqrt{p})$ iterations.',
  },
      '$O(p^2)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Birthday paradox: collision expected after $O(\\sqrt{p})$ iterations.',
  },
      '$O(\\sqrt{p})
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Birthday paradox: collision expected after $O(\\sqrt{p})$ iterations.',
  },
      '$O(\\log p)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Birthday paradox: collision expected after $O(\\sqrt{p})$ iterations.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Birthday paradox: collision expected after $O(\\sqrt{p})$ iterations.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Floyd\'s cycle detection uses how many pointers?',
    options: [
      'One',
      'Three',
      'Logarithmically many',
      'Two (slow and fast)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Floyd\'s "tortoise and hare": slow pointer moves 1 step, fast moves 2 steps.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'In Pollard rho, if $x_i = x_{2i}$ (mod $p$) but $x_i \\neq x_{2i}$ (mod $n$), then $\\gcd(x_i - x_{2i}, n)$ reveals:',
    correctAnswer: 1,
    numericRange: { min: 0, max: 1, precision: 0 },
    difficulty: 'hard',
    explanation: 'The GCD reveals a non-trivial factor of $n$ (specifically $p$). Answer 1 represents "a factor".',
  },
  {
    id: 5,
    type: 'text',
    question: 'What mathematical phenomenon explains why Pollard rho finds collisions quickly?',
    correctAnswer: 'birthday',
    difficulty: 'medium',
    explanation: 'The birthday paradox: in a set of size $n$, expect collisions after $O(\\sqrt{n})$ samples.',
  },
];
