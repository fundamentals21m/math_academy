import type { QuizQuestion } from './types';

export const section177Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The variance of a random variable $X$ is defined as:',
    options: [
      '$\\text{Var}(X) = E(X)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Variance is the expected squared deviation from the mean: $\\text{Var}(X) = E[(X - E(X))^2]$.',
  },
      '$\\text{Var}(X) = E(X^2)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Variance is the expected squared deviation from the mean: $\\text{Var}(X) = E[(X - E(X))^2]$.',
  },
      '$\\text{Var}(X) = [E(X)]^2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Variance is the expected squared deviation from the mean: $\\text{Var}(X) = E[(X - E(X))^2]$.',
  },
      '$\\text{Var}(X) = E[(X - E(X))^2]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Variance is the expected squared deviation from the mean: $\\text{Var}(X) = E[(X - E(X))^2]$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Variance is the expected squared deviation from the mean: $\\text{Var}(X) = E[(X - E(X))^2]$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The computational formula for variance is:',
    options: [
      '$\\text{Var}(X) = E(X^2) - [E(X)]^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The shortcut formula: $\\text{Var}(X) = E(X^2) - [E(X)]^2$.',
  },
      '$\\text{Var}(X) = E(X^2) + [E(X)]^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The shortcut formula: $\\text{Var}(X) = E(X^2) - [E(X)]^2$.',
  },
      '$\\text{Var}(X) = [E(X)]^2 - E(X^2)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The shortcut formula: $\\text{Var}(X) = E(X^2) - [E(X)]^2$.',
  },
      '$\\text{Var}(X) = E(X^2) \\cdot [E(X)]^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The shortcut formula: $\\text{Var}(X) = E(X^2) - [E(X)]^2$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The shortcut formula: $\\text{Var}(X) = E(X^2) - [E(X)]^2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a constant $a$, $\\text{Var}(aX)$ equals:',
    options: [
      '$a\\text{Var}(X)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Variance scales by the square of the constant: $\\text{Var}(aX) = a^2 \\text{Var}(X)$.',
  },
      '$a^2\\text{Var}(X)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Variance scales by the square of the constant: $\\text{Var}(aX) = a^2 \\text{Var}(X)$.',
  },
      '$\\text{Var}(X)/a
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Variance scales by the square of the constant: $\\text{Var}(aX) = a^2 \\text{Var}(X)$.',
  },
      '$\\text{Var}(X)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Variance scales by the square of the constant: $\\text{Var}(aX) = a^2 \\text{Var}(X)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Variance scales by the square of the constant: $\\text{Var}(aX) = a^2 \\text{Var}(X)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the uniform distribution on $[a, b]$, the variance is:',
    options: [
      '$(b - a)/12
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The variance of a uniform distribution on $[a, b]$ is $\\text{Var}(X) = (b - a)^2/12$.',
  },
      '$(b - a)^2/12
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The variance of a uniform distribution on $[a, b]$ is $\\text{Var}(X) = (b - a)^2/12$.',
  },
      '$(b - a)^2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The variance of a uniform distribution on $[a, b]$ is $\\text{Var}(X) = (b - a)^2/12$.',
  },
      '$(a + b)^2/12
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The variance of a uniform distribution on $[a, b]$ is $\\text{Var}(X) = (b - a)^2/12$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The variance of a uniform distribution on $[a, b]$ is $\\text{Var}(X) = (b - a)^2/12$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $X$ and $Y$ are independent, then $\\text{Var}(X + Y)$ equals:',
    options: [
      '$\\text{Var}(X) \\cdot \\text{Var}(Y)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For independent variables, variances add: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$.',
  },
      '$\\text{Var}(X) - \\text{Var}(Y)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For independent variables, variances add: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$.',
  },
      '$\\text{Var}(X) + \\text{Var}(Y)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For independent variables, variances add: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$.',
  },
      '$[\\text{Var}(X) + \\text{Var}(Y)]^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For independent variables, variances add: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For independent variables, variances add: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$.',
  },
];
