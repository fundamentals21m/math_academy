import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of the four axioms for an inner product?',
    options: [
      'Symmetry: $(x, y) = (y, x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The four axioms are symmetry, additivity, homogeneity $(cx, y) = c(x, y)$, and positivity. There is no associativity axiom for inner products, as the result of an inner product is a scalar, not an element of $V$.',
  },
      'Associativity: $((x, y), z) = (x, (y, z))
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The four axioms are symmetry, additivity, homogeneity $(cx, y) = c(x, y)$, and positivity. There is no associativity axiom for inner products, as the result of an inner product is a scalar, not an element of $V$.',
  },
      'Additivity: $(x + y, z) = (x, z) + (y, z)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The four axioms are symmetry, additivity, homogeneity $(cx, y) = c(x, y)$, and positivity. There is no associativity axiom for inner products, as the result of an inner product is a scalar, not an element of $V$.',
  },
      'Positivity: $(x, x) \\geq 0$ with equality iff $x = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The four axioms are symmetry, additivity, homogeneity $(cx, y) = c(x, y)$, and positivity. There is no associativity axiom for inner products, as the result of an inner product is a scalar, not an element of $V$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The four axioms are symmetry, additivity, homogeneity $(cx, y) = c(x, y)$, and positivity. There is no associativity axiom for inner products, as the result of an inner product is a scalar, not an element of $V$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the standard inner product on $V_n$, what is $(x, y)$?',
    options: [
      '$\\sum_{i=1}^n x_i y_i$',
      '$\\sum_{i=1}^n x_i + y_i$',
      '$\\sum_{i=1}^n |x_i - y_i|$',
      '$\\max_i |x_i y_i|$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The standard inner product (dot product) on $V_n$ is defined as $(x, y) = \\sum_{i=1}^n x_i y_i$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the Cauchy-Schwarz inequality state about an inner product?',
    options: [
      '$|(x, y)|^2 \\leq (x, x)(y, y)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Cauchy-Schwarz inequality states $|(x, y)|^2 \\leq (x, x)(y, y)$, or equivalently $|(x, y)| \\leq \\|x\\| \\|y\\|$. Equality holds iff $x$ and $y$ are dependent.',
  },
      '$|(x, y)| = \\|x\\| \\|y\\|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Cauchy-Schwarz inequality states $|(x, y)|^2 \\leq (x, x)(y, y)$, or equivalently $|(x, y)| \\leq \\|x\\| \\|y\\|$. Equality holds iff $x$ and $y$ are dependent.',
  },
      '$(x, y) \\geq 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Cauchy-Schwarz inequality states $|(x, y)|^2 \\leq (x, x)(y, y)$, or equivalently $|(x, y)| \\leq \\|x\\| \\|y\\|$. Equality holds iff $x$ and $y$ are dependent.',
  },
      '$|(x, y)| > (x, x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Cauchy-Schwarz inequality states $|(x, y)|^2 \\leq (x, x)(y, y)$, or equivalently $|(x, y)| \\leq \\|x\\| \\|y\\|$. Equality holds iff $x$ and $y$ are dependent.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Cauchy-Schwarz inequality states $|(x, y)|^2 \\leq (x, x)(y, y)$, or equivalently $|(x, y)| \\leq \\|x\\| \\|y\\|$. Equality holds iff $x$ and $y$ are dependent.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How is the norm $\\|x\\|$ defined in a Euclidean space?',
    options: [
      '$\\|x\\| = (x, x)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The norm is defined as $\\|x\\| = (x, x)^{1/2} = \\sqrt{(x, x)}$, the square root of the inner product of $x$ with itself.',
  },
      '$\\|x\\| = |(x, x)|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The norm is defined as $\\|x\\| = (x, x)^{1/2} = \\sqrt{(x, x)}$, the square root of the inner product of $x$ with itself.',
  },
      '$\\|x\\| = (x, x)^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The norm is defined as $\\|x\\| = (x, x)^{1/2} = \\sqrt{(x, x)}$, the square root of the inner product of $x$ with itself.',
  },
      '$\\|x\\| = (x, x)^{1/2}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The norm is defined as $\\|x\\| = (x, x)^{1/2} = \\sqrt{(x, x)}$, the square root of the inner product of $x$ with itself.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The norm is defined as $\\|x\\| = (x, x)^{1/2} = \\sqrt{(x, x)}$, the square root of the inner product of $x$ with itself.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The angle $\\theta$ between two nonzero elements $x$ and $y$ satisfies:',
    options: [
      '$\\sin \\theta = \\frac{(x, y)}{\\|x\\| \\|y\\|}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The angle between $x$ and $y$ is defined by $\\cos \\theta = \\frac{(x, y)}{\\|x\\| \\|y\\|}$, where $0 \\leq \\theta \\leq \\pi$.',
  },
      '$\\theta = \\frac{(x, y)}{\\|x\\| \\|y\\|}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The angle between $x$ and $y$ is defined by $\\cos \\theta = \\frac{(x, y)}{\\|x\\| \\|y\\|}$, where $0 \\leq \\theta \\leq \\pi$.',
  },
      '$\\cos \\theta = \\frac{(x, y)}{\\|x\\| \\|y\\|}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The angle between $x$ and $y$ is defined by $\\cos \\theta = \\frac{(x, y)}{\\|x\\| \\|y\\|}$, where $0 \\leq \\theta \\leq \\pi$.',
  },
      '$\\tan \\theta = \\frac{(x, y)}{\\|x\\| \\|y\\|}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The angle between $x$ and $y$ is defined by $\\cos \\theta = \\frac{(x, y)}{\\|x\\| \\|y\\|}$, where $0 \\leq \\theta \\leq \\pi$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The angle between $x$ and $y$ is defined by $\\cos \\theta = \\frac{(x, y)}{\\|x\\| \\|y\\|}$, where $0 \\leq \\theta \\leq \\pi$.',
  },
];
