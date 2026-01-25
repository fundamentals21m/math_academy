import type { QuizQuestion } from './types';

export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The inverse function theorem applies when:',
    options: [
      '$f$ is continuous',
      '$f$ is bounded',
      '$f$ is linear',
      '$f$ is differentiable and $Df(x_0)$ is invertible',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The inverse function theorem requires differentiability and invertibility of the derivative.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f: \\mathbf{R}^n \\to \\mathbf{R}^n$ is $C^1$ and $Df(x_0)$ is invertible, then near $x_0$:',
    options: [
      '$f$ is constant',
      '$f$ is not continuous',
      '$f$ has a local $C^1$ inverse',
      '$f$ maps to a lower-dimensional space'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The inverse function theorem guarantees a local inverse that is also $C^1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The derivative of the inverse function $f^{-1}$ at $y_0 = f(x_0)$ is:',
    options: [
      '$Df(x_0)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The derivative of the inverse is the inverse of the derivative: $D(f^{-1})(y_0) = (Df(x_0))^{-1}$.',
  },
      '$(Df(x_0))^{-1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The derivative of the inverse is the inverse of the derivative: $D(f^{-1})(y_0) = (Df(x_0))^{-1}$.',
  },
      '$-Df(x_0)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The derivative of the inverse is the inverse of the derivative: $D(f^{-1})(y_0) = (Df(x_0))^{-1}$.',
  },
      '$Df^{-1}(x_0)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The derivative of the inverse is the inverse of the derivative: $D(f^{-1})(y_0) = (Df(x_0))^{-1}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The derivative of the inverse is the inverse of the derivative: $D(f^{-1})(y_0) = (Df(x_0))^{-1}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $f: \\mathbf{R} \\to \\mathbf{R}$, the condition "$Df(x_0)$ is invertible" means:',
    options: [
      '$f(x_0) = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In one dimension, the derivative is invertible iff it\'s nonzero.',
  },
      '$f\\'(x_0) = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In one dimension, the derivative is invertible iff it\'s nonzero.',
  },
      '$f$ is linear',
      '$f\\'(x_0) \\neq 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In one dimension, the derivative is invertible iff it\'s nonzero.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In one dimension, the derivative is invertible iff it\'s nonzero.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The inverse function theorem is proved using:',
    options: [
      'The contraction mapping theorem',
      'The intermediate value theorem',
      'The extreme value theorem',
      'Taylor\\\\'s theorem',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The proof constructs the inverse via iteration and uses the contraction mapping principle.',
  },
];
