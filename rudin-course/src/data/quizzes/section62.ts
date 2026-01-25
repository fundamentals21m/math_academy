import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Inverse Function Theorem requires that at the point $a$, the derivative $f\'(a)$:',
    options: [
      'Is an invertible linear transformation',
      'Is symmetric',
      'Has all positive eigenvalues',
      'Has determinant equal to 1',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The key hypothesis is that $f\'(a)$ must be invertible (equivalently, $\\det f\'(a) \\neq 0$). This ensures the linear approximation is locally bijective.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f: \\mathbb{R}^n \\to \\mathbb{R}^n$ is $C^1$ and $f\'(a)$ is invertible, the Inverse Function Theorem guarantees:',
    options: [
      '$f\\'$ is constant near $a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The theorem provides local invertibility: there exist neighborhoods $U$ of $a$ and $V$ of $f(a)$ such that $f: U \\to V$ is a bijection with $C^1$ inverse.',
  },
      '$f$ is globally invertible',
      '$f$ is locally invertible near $a$ with $C^1$ inverse',
      '$f$ is a linear map',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The theorem provides local invertibility: there exist neighborhoods $U$ of $a$ and $V$ of $f(a)$ such that $f: U \\to V$ is a bijection with $C^1$ inverse.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ is $C^k$ ($k \\geq 1$) and $f\'(a)$ is invertible, then the local inverse $g = f^{-1}$ is:',
    options: [
      '$C^1$ but not necessarily $C^k
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Inverse Function Theorem preserves differentiability class: if $f$ is $C^k$, so is its local inverse. This is proven by differentiating the relation $g(f(x)) = x$.',
  },
      '$C^\\infty
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Inverse Function Theorem preserves differentiability class: if $f$ is $C^k$, so is its local inverse. This is proven by differentiating the relation $g(f(x)) = x$.',
  },
      'Only continuous',
      '$C^k
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Inverse Function Theorem preserves differentiability class: if $f$ is $C^k$, so is its local inverse. This is proven by differentiating the relation $g(f(x)) = x$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Inverse Function Theorem preserves differentiability class: if $f$ is $C^k$, so is its local inverse. This is proven by differentiating the relation $g(f(x)) = x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The derivative of the inverse function $g = f^{-1}$ satisfies:',
    options: [
      '$g\\'(y) = [f\\'(g(y))]^{-1}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'By the chain rule applied to $g(f(x)) = x$, we get $g\'(f(x)) f\'(x) = I$, so $g\'(y) = [f\'(g(y))]^{-1}$ where $y = f(x)$.',
  },
      '$g\\'(y) = [f\\'(y)]^{-1}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the chain rule applied to $g(f(x)) = x$, we get $g\'(f(x)) f\'(x) = I$, so $g\'(y) = [f\'(g(y))]^{-1}$ where $y = f(x)$.',
  },
      '$g\\'(y) = -f\\'(g(y))
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the chain rule applied to $g(f(x)) = x$, we get $g\'(f(x)) f\'(x) = I$, so $g\'(y) = [f\'(g(y))]^{-1}$ where $y = f(x)$.',
  },
      '$g\\'(y) = f\\'(g(y))^T
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the chain rule applied to $g(f(x)) = x$, we get $g\'(f(x)) f\'(x) = I$, so $g\'(y) = [f\'(g(y))]^{-1}$ where $y = f(x)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the chain rule applied to $g(f(x)) = x$, we get $g\'(f(x)) f\'(x) = I$, so $g\'(y) = [f\'(g(y))]^{-1}$ where $y = f(x)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The proof of the Inverse Function Theorem uses:',
    options: [
      'The Bolzano-Weierstrass Theorem',
      'The Intermediate Value Theorem',
      'Rolle\\\\\'s Theorem',
      'The Contraction Mapping Principle',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The standard proof constructs the inverse using fixed point iteration. For each $y$ near $f(a)$, the equation $f(x) = y$ is reformulated as finding a fixed point of a contraction.',
  },
];
