import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f$ has an inverse if and only if it is:',
    options: [
      'Continuous',
      'One-to-one (injective)',
      'Differentiable',
      'Bounded'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A function is invertible iff it is one-to-one (each output has exactly one input).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ is strictly increasing on $[a,b]$, then $f$ is:',
    options: [
      'Not invertible',
      'Constant',
      'Undefined',
      'One-to-one and has an inverse',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Strictly monotonic functions are one-to-one, hence invertible.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f^{-1}$ is the inverse of $f$, then $f(f^{-1}(x)) = ?$',
    options: [
      '$f(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By definition: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By definition: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$.',
  },
      '$x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By definition: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$.',
  },
      '$0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By definition: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By definition: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $f(x) = 2x + 3$, and $f^{-1}$ is its inverse, what is $f^{-1}(7)$?',
    correctAnswer: 2,
    numericRange: { min: -100, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Solve $2x + 3 = 7$: $x = 2$. So $f^{-1}(7) = 2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The graph of $f^{-1}$ is related to the graph of $f$ by:',
    options: [
      'Reflection across the line $y = x$',
      'Reflection across the $y$-axis',
      'Reflection across the $x$-axis',
      'A 90° rotation'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The graphs of $f$ and $f^{-1}$ are reflections of each other across $y = x$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $f$ is continuous and strictly monotonic on $[a,b]$, then $f^{-1}$ is:',
    options: [
      'Discontinuous',
      'Also continuous and strictly monotonic',
      'Not defined',
      'A polynomial'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Inverses of continuous strictly monotonic functions are also continuous and strictly monotonic.',
  },
];
