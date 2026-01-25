import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 's23-e01',
    type: 'multiple-choice',
    question: 'Who discovered the solution to quartic (degree 4) equations?',
    difficulty: 'easy',
    options: [
      'Ferrari',
      'Cardano',
      'Tartaglia',
      'Viete',
    ],
    correctIndex: 0,
    explanation:
      'Lodovico Ferrari, Cardano\'s young student, discovered the solution to quartic equations. It was published in Cardano\'s Ars Magna (1545).',
  },
  {
    id: 's23-e02',
    type: 'multiple-choice',
    question: 'What is the "resolvent cubic" in Ferrari\'s method?',
    difficulty: 'easy',
    options: [
      'A cubic equation that reduces to a quadratic',
      'A cubic equation with no solutions',
      'The original quartic rewritten in cubic form',
      'A cubic equation that arises when solving a quartic',
    ],
    correctIndex: 3,
    explanation:
      'The resolvent cubic is a cubic equation in an auxiliary variable $y$ that arises when setting up Ferrari\'s method. Solving it allows the quartic to be factored.',
  },
  {
    id: 's23-m01',
    type: 'multiple-choice',
    question:
      'An equation is "solvable by radicals" if its roots can be expressed using:',
    difficulty: 'medium',
    options: [
      'Only square roots',
      'Arithmetic operations and nth roots',
      'Only addition and subtraction',
      'Trigonometric functions',
    ],
    correctIndex: 1,
    explanation:
      'Solution by radicals means expressing roots using only the coefficients, the four arithmetic operations (+, -, ×, ÷), and taking nth roots.',
  },
  {
    id: 's23-m02',
    type: 'multiple-choice',
    question:
      'Bring (1786) reduced the general quintic to which simplified form?',
    difficulty: 'medium',
    options: [
      '$x^5 - x - A = 0
    correctIndex: 0,
    explanation:
      'Bring showed that any quintic can be reduced to $x^5 - x - A = 0$ with only one parameter. Yet even this simplified form cannot be solved by radicals.',
  },
      '$x^5 = A
    correctIndex: 1,
    explanation:
      'Bring showed that any quintic can be reduced to $x^5 - x - A = 0$ with only one parameter. Yet even this simplified form cannot be solved by radicals.',
  },
      '$x^5 - x = A
    correctIndex: 1,
    explanation:
      'Bring showed that any quintic can be reduced to $x^5 - x - A = 0$ with only one parameter. Yet even this simplified form cannot be solved by radicals.',
  },
      '$x^5 + Ax + B = 0
    correctIndex: 1,
    explanation:
      'Bring showed that any quintic can be reduced to $x^5 - x - A = 0$ with only one parameter. Yet even this simplified form cannot be solved by radicals.',
  },
    ],
    correctIndex: 1,
    explanation:
      'Bring showed that any quintic can be reduced to $x^5 - x - A = 0$ with only one parameter. Yet even this simplified form cannot be solved by radicals.',
  },
  {
    id: 's23-h01',
    type: 'multiple-choice',
    question:
      'Who first proved that the general quintic cannot be solved by radicals?',
    difficulty: 'hard',
    options: [
      'Cardano (1545)',
      'Bring (1786)',
      'Ruffini (1799)',
      'Galois (1831)',
    ],
    correctIndex: 2,
    explanation:
      'Ruffini offered the first proof in 1799, though it had gaps. Abel gave a complete proof in 1826, and Galois developed a general theory explaining which equations are solvable.',
  },
  {
    id: 's23-h02',
    type: 'multiple-choice',
    question:
      'Descartes\' Factor Theorem states that if $p(a) = 0$, then:',
    difficulty: 'hard',
    options: [
      '$p(x)$ has no other roots',
      '$(x - a)$ is a factor of $p(x)
    correctIndex: 1,
    explanation:
      'Descartes proved that if $p(a) = 0$, then $p(x)$ has $(x - a)$ as a factor: $p(x) = (x - a) \\cdot q(x)$ where $q(x)$ has degree one less than $p(x)$.',
  },
      '$a$ must be rational',
      '$p(x) = (x - a)
    correctIndex: 3,
    explanation:
      'Descartes proved that if $p(a) = 0$, then $p(x)$ has $(x - a)$ as a factor: $p(x) = (x - a) \\cdot q(x)$ where $q(x)$ has degree one less than $p(x)$.',
  },
    ],
    correctIndex: 3,
    explanation:
      'Descartes proved that if $p(a) = 0$, then $p(x)$ has $(x - a)$ as a factor: $p(x) = (x - a) \\cdot q(x)$ where $q(x)$ has degree one less than $p(x)$.',
  },
];
