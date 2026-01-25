import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 's20-e01',
    type: 'multiple-choice',
    question: 'What is Pell\'s equation?',
    difficulty: 'easy',
    options: [
      '$x^2 + y^2 = N$',
      '$x^2 - y^2 = N$',
      '$x^2 + Ny^2 = 1$',
      '$x^2 - Ny^2 = 1$'
    ],
    correctIndex: 3,
    explanation:
      'Pell\'s equation is $x^2 - Ny^2 = 1$, where $N$ is a positive integer that is not a perfect square, and we seek integer solutions $(x, y)$.',
  },
  {
    id: 's20-e02',
    type: 'multiple-choice',
    question: 'Is $(3, 2)$ a solution to $x^2 - 2y^2 = 1$?',
    difficulty: 'easy',
    options: [
      'Yes, because $9 - 8 = 1$',
      'No, because $9 - 8 = 0$',
      'Yes, because $9 + 8 = 17$',
      'No, because $3$ and $2$ are too small',
    ],
    correctIndex: 0,
    explanation:
      'Substituting: $3^2 - 2 \\cdot 2^2 = 9 - 2(4) = 9 - 8 = 1$. Yes, $(3, 2)$ is a solution.',
  },
  {
    id: 's20-m01',
    type: 'multiple-choice',
    question:
      'Why is Pell\'s equation connected to approximating $\\sqrt{N}$?',
    difficulty: 'medium',
    options: [
      'Solutions give exact values of $\\sqrt{N}$',
      'If $(x, y)$ is a solution, then $x/y$ closely approximates $\\sqrt{N}$',
      'The equation has no connection to square roots',
      'Solutions are always perfect squares',
    ],
    correctIndex: 1,
    explanation:
      'If $x^2 - Ny^2 = 1$, then $x^2 \\approx Ny^2$, so $x/y \\approx \\sqrt{N}$. Larger solutions give better approximations.',
  },
  {
    id: 's20-m02',
    type: 'multiple-choice',
    question:
      'The Brahmagupta-Fibonacci identity shows that if $(x_1, y_1)$ and $(x_2, y_2)$ are solutions to Pell\'s equation, then we can construct:',
    difficulty: 'medium',
    options: [
      'The sum $(x_1 + x_2, y_1 + y_2)$ is also a solution',
      'The product $(x_1 x_2, y_1 y_2)$ is also a solution',
      '$(x_1 x_2 + Ny_1 y_2, x_1 y_2 + x_2 y_1)$ is also a solution',
      'No new solutions can be found',
    ],
    correctIndex: 2,
    explanation:
      'Brahmagupta discovered that composing solutions via $(x_1 x_2 + Ny_1 y_2, x_1 y_2 + x_2 y_1)$ produces another solution. This generates infinitely many solutions from one.',
  },
  {
    id: 's20-h01',
    type: 'numeric',
    question:
      'Using Brahmagupta\'s composition, if $(3, 2)$ solves $x^2 - 2y^2 = 1$, compose it with itself. What is the $x$-value of the new solution?',
    difficulty: 'hard',
    correctAnswer: 17,
    explanation:
      'Composing $(3,2)$ with $(3,2)$: $x = 3 \\cdot 3 + 2 \\cdot 2 \\cdot 2 = 9 + 8 = 17$. The new solution is $(17, 12)$.',
  },
  {
    id: 's20-h02',
    type: 'multiple-choice',
    question:
      'Bhāskara II solved $x^2 - 61y^2 = 1$ in the 12th century. When was this achievement matched in Europe?',
    difficulty: 'hard',
    options: [
      'In the 13th century by Fibonacci',
      'In the 15th century by Cardano',
      'In the 19th century by Gauss',
      'In the 17th century by Fermat and Wallis'
    ],
    correctIndex: 3,
    explanation:
      'Bhāskara solved $x^2 - 61y^2 = 1$ around 1150 CE using the chakravala method. Europeans didn\'t solve this until Fermat challenged mathematicians with it in the 1650s—about 500 years later.',
  },
];
