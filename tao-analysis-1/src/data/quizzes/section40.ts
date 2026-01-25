import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The statement $\\lim_{x \\to a} f(x) = L$ means that for every $\\epsilon > 0$, there exists $\\delta > 0$ such that:',
    options: [
      '$|x - a| < \\delta$ implies $|f(x) - L| < \\epsilon
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The condition $0 < |x - a|$ excludes the point $x = a$ itself. We require that whenever $x$ is close to (but not equal to) $a$, $f(x)$ is close to $L$.',
  },
      '$|f(x) - L| < \\delta$ implies $|x - a| < \\epsilon
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The condition $0 < |x - a|$ excludes the point $x = a$ itself. We require that whenever $x$ is close to (but not equal to) $a$, $f(x)$ is close to $L$.',
  },
      '$|x - a| < \\epsilon$ implies $|f(x) - L| < \\delta
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The condition $0 < |x - a|$ excludes the point $x = a$ itself. We require that whenever $x$ is close to (but not equal to) $a$, $f(x)$ is close to $L$.',
  },
      '$0 < |x - a| < \\delta$ implies $|f(x) - L| < \\epsilon
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The condition $0 < |x - a|$ excludes the point $x = a$ itself. We require that whenever $x$ is close to (but not equal to) $a$, $f(x)$ is close to $L$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The condition $0 < |x - a|$ excludes the point $x = a$ itself. We require that whenever $x$ is close to (but not equal to) $a$, $f(x)$ is close to $L$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the condition $0 < |x - a|$ (rather than $|x - a|$) used in the definition of $\\lim_{x \\to a} f(x)$?',
    options: [
      'To allow $f$ to be undefined at $a$ or have $f(a) \\neq L
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The limit describes behavior near $a$, not at $a$. This allows us to discuss limits even when $f(a)$ is undefined or differs from $L$.',
  },
      'To ensure $f$ is continuous at $a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The limit describes behavior near $a$, not at $a$. This allows us to discuss limits even when $f(a)$ is undefined or differs from $L$.',
  },
      'To make the limit unique',
      'To ensure the limit exists',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The limit describes behavior near $a$, not at $a$. This allows us to discuss limits even when $f(a)$ is undefined or differs from $L$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then $\\lim_{x \\to a}(f(x) + g(x)) =$',
    options: [
      '$L \\cdot M
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The limit of a sum equals the sum of the limits, provided both limits exist. This is the sum rule for limits.',
  },
      '$L + M
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The limit of a sum equals the sum of the limits, provided both limits exist. This is the sum rule for limits.',
  },
      'Cannot be determined',
      '$L - M
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The limit of a sum equals the sum of the limits, provided both limits exist. This is the sum rule for limits.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The limit of a sum equals the sum of the limits, provided both limits exist. This is the sum rule for limits.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For $f(x) = 3x - 2$, if we want $|f(x) - 4| < 0.3$ when $x$ is near $2$, what is the largest $\\delta$ such that $0 < |x - 2| < \\delta$ guarantees this? Give the answer as a decimal.',
    correctAnswer: 0.1,
    numericRange: { min: 0, max: 1, precision: 2 },
    difficulty: 'hard',
    explanation: '$|f(x) - 4| = |3x - 2 - 4| = |3x - 6| = 3|x - 2|$. We need $3|x - 2| < 0.3$, so $|x - 2| < 0.1$. Thus $\\delta = 0.1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} f(x) = M$, then:',
    options: [
      '$L$ and $M$ can be any two real numbers',
      '$L \\leq M
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Limits are unique: if a limit exists, there is only one value it can be. This follows from the epsilon-delta definition.',
  },
      '$L = M$ (limits are unique)',
      'At least one of $L$ or $M$ must be zero',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Limits are unique: if a limit exists, there is only one value it can be. This follows from the epsilon-delta definition.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Consider $f(x) = \\frac{x^2 - 4}{x - 2}$. What is $\\lim_{x \\to 2} f(x)$?',
    options: [
      '$4
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For $x \\neq 2$, $\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x + 2$. As $x \\to 2$, this approaches $4$.',
  },
      'Does not exist',
      '$2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $x \\neq 2$, $\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x + 2$. As $x \\to 2$, this approaches $4$.',
  },
      '$0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $x \\neq 2$, $\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x + 2$. As $x \\to 2$, this approaches $4$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $x \\neq 2$, $\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x + 2$. As $x \\to 2$, this approaches $4$.',
  },
];
