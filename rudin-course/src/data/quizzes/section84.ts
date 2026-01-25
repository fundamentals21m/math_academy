import type { QuizQuestion } from './types';

export const section84Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A complex-valued function $f = u + iv$ is Lebesgue integrable if:',
    options: [
      'Only $u$ is integrable',
      'Both real functions $u$ and $v$ are Lebesgue integrable',
      '$|f|$ is bounded',
      '$f$ is continuous',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Complex integrability means both real and imaginary parts are integrable. Equivalently, $\\int |f| < \\infty$ since $|u|, |v| \\leq |f| \\leq |u| + |v|$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The integral of a complex function satisfies:',
    options: [
      '$\\int (u + iv) = \\int u + i \\int v
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Complex integration is defined component-wise: integrate the real and imaginary parts separately and combine. This preserves linearity over $\\mathbb{C}$.',
  },
      '$\\int |f|^2 = |\\int f|^2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Complex integration is defined component-wise: integrate the real and imaginary parts separately and combine. This preserves linearity over $\\mathbb{C}$.',
  },
      '$\\int \\overline{f} = \\overline{\\int f}$ always fails',
      'Complex functions cannot be integrated',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Complex integration is defined component-wise: integrate the real and imaginary parts separately and combine. This preserves linearity over $\\mathbb{C}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For complex integrable $f$, the inequality $|\\int f| \\leq \\int |f|$ is called:',
    options: [
      'The triangle inequality for integrals',
      'Jensen\\\'s inequality',
      'Cauchy-Schwarz inequality',
      'The modulus inequality',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The integral version of the triangle inequality: $|\\int f| \\leq \\int |f|$. This follows from writing $\\int f = re^{i\\theta}$ and integrating $e^{-i\\theta}f$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Dominated Convergence Theorem applies to complex functions when:',
    options: [
      '$f_n \\to f$ pointwise and $|f_n| \\leq g$ for integrable real $g
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'DCT works for complex functions using the same hypothesis: pointwise convergence dominated by an integrable function. Apply to real and imaginary parts.',
  },
      '$f_n$ converge uniformly',
      'Only for real functions',
      '$f_n$ are uniformly bounded',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'DCT works for complex functions using the same hypothesis: pointwise convergence dominated by an integrable function. Apply to real and imaginary parts.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The space of complex integrable functions $L^1(\\mu)$ is:',
    options: [
      'Not a vector space',
      'A complex vector space with norm $\\|f\\|_1 = \\int |f| d\\mu
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$L^1$ is a complex Banach space (complete normed vector space) under the $L^1$ norm. Completeness follows from the fact that Cauchy sequences have convergent subsequences.',
  },
      'A real vector space only',
      'Complete only for finite measures',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$L^1$ is a complex Banach space (complete normed vector space) under the $L^1$ norm. Completeness follows from the fact that Cauchy sequences have convergent subsequences.',
  },
];
