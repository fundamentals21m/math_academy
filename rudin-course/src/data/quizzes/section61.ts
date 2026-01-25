import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A mapping $\\varphi: X \\to X$ on a complete metric space is a contraction if:',
    options: [
      '$d(\\varphi(x), \\varphi(y)) < d(x,y)$ for all $x \\neq y
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A contraction requires a uniform constant $c < 1$ such that distances shrink by at least factor $c$. The condition $d(\\varphi(x), \\varphi(y)) < d(x,y)$ is weaker and does not guarantee a fixed point.',
  },
      '$\\varphi$ is continuous and bounded',
      '$\\|\\varphi\\'(x)\\| < 1$ for all $x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A contraction requires a uniform constant $c < 1$ such that distances shrink by at least factor $c$. The condition $d(\\varphi(x), \\varphi(y)) < d(x,y)$ is weaker and does not guarantee a fixed point.',
  },
      'There exists $c < 1$ such that $d(\\varphi(x), \\varphi(y)) \\leq c \\cdot d(x,y)$ for all $x,y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A contraction requires a uniform constant $c < 1$ such that distances shrink by at least factor $c$. The condition $d(\\varphi(x), \\varphi(y)) < d(x,y)$ is weaker and does not guarantee a fixed point.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A contraction requires a uniform constant $c < 1$ such that distances shrink by at least factor $c$. The condition $d(\\varphi(x), \\varphi(y)) < d(x,y)$ is weaker and does not guarantee a fixed point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Contraction Mapping Principle states that a contraction on a complete metric space:',
    options: [
      'Has finitely many fixed points',
      'Has at least one fixed point',
      'Has exactly one fixed point',
      'Has a fixed point only if the space is compact'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Contraction Mapping Principle (Banach Fixed Point Theorem) guarantees existence and uniqueness of a fixed point for any contraction on a complete metric space.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\varphi$ is a contraction with constant $c$ and fixed point $x^*$, the iteration $x_{n+1} = \\varphi(x_n)$ satisfies:',
    options: [
      '$d(x_n, x^*) \\leq c^n d(x_0, x^*)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The error bound $d(x_n, x^*) \\leq \\frac{c^n}{1-c} d(x_0, x_1)$ gives a computable estimate using only the first step. This is derived from the geometric series and the triangle inequality.',
  },
      '$d(x_n, x^*) \\leq \\frac{c^n}{1-c} d(x_0, x_1)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The error bound $d(x_n, x^*) \\leq \\frac{c^n}{1-c} d(x_0, x_1)$ gives a computable estimate using only the first step. This is derived from the geometric series and the triangle inequality.',
  },
      '$d(x_n, x^*) \\leq n \\cdot c \\cdot d(x_0, x^*)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The error bound $d(x_n, x^*) \\leq \\frac{c^n}{1-c} d(x_0, x_1)$ gives a computable estimate using only the first step. This is derived from the geometric series and the triangle inequality.',
  },
      '$d(x_n, x^*) = c^n d(x_0, x^*)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The error bound $d(x_n, x^*) \\leq \\frac{c^n}{1-c} d(x_0, x_1)$ gives a computable estimate using only the first step. This is derived from the geometric series and the triangle inequality.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The error bound $d(x_n, x^*) \\leq \\frac{c^n}{1-c} d(x_0, x_1)$ gives a computable estimate using only the first step. This is derived from the geometric series and the triangle inequality.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following is NOT required for the Contraction Mapping Principle?',
    options: [
      'The space must be compact',
      'The space must be complete',
      'The mapping must be a contraction',
      'The contraction constant must be strictly less than 1'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Compactness is not required. The theorem requires completeness of the metric space and a contraction constant $c < 1$. Compactness is a stronger condition that implies other fixed point theorems.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Contraction Mapping Principle is used to prove:',
    options: [
      'The Fundamental Theorem of Calculus',
      'The Inverse Function Theorem and existence theorems for ODEs',
      'The Bolzano-Weierstrass Theorem',
      'The Heine-Borel Theorem'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Contraction Mapping Principle is a fundamental tool for proving existence and uniqueness results, including the Inverse Function Theorem, Implicit Function Theorem, and Picard\'s theorem for ODEs.',
  },
];
