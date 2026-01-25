import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The first systematic procedures for solving differential equations were developed primarily by:',
    options: [
      'Newton and Leibniz only',
      'Bernoulli only',
      'Cauchy alone',
      'Euler, Lagrange, and Laplace',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'While early work was by Newton, Leibniz, and the Bernoullis, more systematic procedures were developed during the 18th century by Euler, Lagrange, and Laplace.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Cauchy\'s existence theorem in the 1820s proved that every first-order equation $y\' = f(x, y)$ has a solution when:',
    options: [
      '$f$ is continuous',
      '$f$ is always positive',
      '$f$ satisfies certain general conditions',
      '$f$ is a polynomial',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Cauchy proved existence when $f(x, y)$ satisfies certain conditions (continuity and Lipschitz condition), not just any function.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Ricatti equation has the form:',
    options: [
      '$y\' = P(x)y$',
      '$y\' = P(x)y^2 + Q(x)y + R(x)$',
      '$y\'\' + P(x)y = 0$',
      '$y\' = y^3$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Ricatti equation is $y\' = P(x)y^2 + Q(x)y + R(x)$, a nonlinear first-order equation that is generally not solvable by elementary means.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When elementary methods fail to solve a differential equation, mathematicians began to ask:',
    options: [
      'Whether to use only polynomial solutions',
      'Whether to abandon the equation',
      'Whether the equation is wrong',
      'Whether solutions exist and what properties they have',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The modern approach focuses on existence and uniqueness theorems, and studying qualitative properties of solutions from the equation itself.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Linear differential equations are particularly important because:',
    options: [
      'They are tractable and arise in many scientific problems',
      'They are the only solvable equations',
      'They were invented by Cauchy',
      'They have no applications',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear differential equations are amenable to systematic analysis while still capturing essential physical phenomena in a wide variety of applications.',
  },
];
