import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a function $f: X \\to \\mathbb{R}$ where $X$ is countable and $f(x) \\geq 0$, the sum $\\sum_{x \\in X} f(x)$ is defined as:',
    options: [
      '$\\sup \\left\\{ \\sum_{x \\in A} f(x) : A \\subseteq X, A \\text{ finite} \\right\\}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For non-negative functions on countable sets, the sum is defined as the supremum over all finite partial sums. This definition is independent of any enumeration.',
  },
      '$\\lim_{n \\to \\infty} \\sum_{k=1}^{n} f(x_k)$ for some enumeration',
      'The integral $\\int_X f \\, d\\mu
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For non-negative functions on countable sets, the sum is defined as the supremum over all finite partial sums. This definition is independent of any enumeration.',
  },
      '$\\max_{x \\in X} f(x)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For non-negative functions on countable sets, the sum is defined as the supremum over all finite partial sums. This definition is independent of any enumeration.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For non-negative functions on countable sets, the sum is defined as the supremum over all finite partial sums. This definition is independent of any enumeration.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\sum_{x \\in X} f(x) < \\infty$ for non-negative $f$, then the set $\\{x \\in X : f(x) > 0\\}$ is:',
    options: [
      'Possibly uncountable',
      'Finite',
      'Empty',
      'At most countable',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'If the sum converges, only countably many terms can be positive. For each $n$, at most finitely many $x$ have $f(x) > 1/n$. The union over all $n$ is countable.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For absolutely convergent series, the sum over a countable set $X$ is:',
    options: [
      'Always equal to zero',
      'Independent of the order of summation',
      'Dependent on the enumeration of $X
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For absolutely convergent series (where $\\sum |f(x)| < \\infty$), the sum is well-defined and independent of the order. This extends the rearrangement theorem to countable index sets.',
  },
      'Defined only for finite $X
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For absolutely convergent series (where $\\sum |f(x)| < \\infty$), the sum is well-defined and independent of the order. This extends the rearrangement theorem to countable index sets.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For absolutely convergent series (where $\\sum |f(x)| < \\infty$), the sum is well-defined and independent of the order. This extends the rearrangement theorem to countable index sets.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Fubini\'s theorem for sums states that if $\\sum_{(x,y) \\in X \\times Y} |f(x,y)| < \\infty$, then:',
    options: [
      'The double sum may not exist',
      '$\\sum_{x \\in X} \\sum_{y \\in Y} f(x,y) = \\sum_{y \\in Y} \\sum_{x \\in X} f(x,y)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Fubini\'s theorem: for absolutely convergent double sums, the order of summation can be interchanged. Both iterated sums equal the double sum.',
  },
      'The iterated sums may differ',
      'Only one order of summation is valid',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Fubini\'s theorem: for absolutely convergent double sums, the order of summation can be interchanged. Both iterated sums equal the double sum.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the double sum $\\sum_{m=1}^{\\infty} \\sum_{n=1}^{\\infty} \\frac{1}{2^{m+n}}$, the value is:',
    options: [
      '$2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\sum_{m=1}^{\\infty} \\sum_{n=1}^{\\infty} \\frac{1}{2^{m+n}} = \\sum_{m=1}^{\\infty} \\frac{1}{2^m} \\sum_{n=1}^{\\infty} \\frac{1}{2^n} = 1 \\cdot 1 = 1$, where each geometric series sums to $1$.',
  },
      '$\\frac{1}{2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum_{m=1}^{\\infty} \\sum_{n=1}^{\\infty} \\frac{1}{2^{m+n}} = \\sum_{m=1}^{\\infty} \\frac{1}{2^m} \\sum_{n=1}^{\\infty} \\frac{1}{2^n} = 1 \\cdot 1 = 1$, where each geometric series sums to $1$.',
  },
      '$1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum_{m=1}^{\\infty} \\sum_{n=1}^{\\infty} \\frac{1}{2^{m+n}} = \\sum_{m=1}^{\\infty} \\frac{1}{2^m} \\sum_{n=1}^{\\infty} \\frac{1}{2^n} = 1 \\cdot 1 = 1$, where each geometric series sums to $1$.',
  },
      '$\\frac{1}{4}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum_{m=1}^{\\infty} \\sum_{n=1}^{\\infty} \\frac{1}{2^{m+n}} = \\sum_{m=1}^{\\infty} \\frac{1}{2^m} \\sum_{n=1}^{\\infty} \\frac{1}{2^n} = 1 \\cdot 1 = 1$, where each geometric series sums to $1$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum_{m=1}^{\\infty} \\sum_{n=1}^{\\infty} \\frac{1}{2^{m+n}} = \\sum_{m=1}^{\\infty} \\frac{1}{2^m} \\sum_{n=1}^{\\infty} \\frac{1}{2^n} = 1 \\cdot 1 = 1$, where each geometric series sums to $1$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $f: \\mathbb{N} \\to \\mathbb{R}$ with $f(n) = \\frac{1}{2^n}$, what is $\\sum_{n \\in \\mathbb{N}} f(n)$ (starting from $n=1$)?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 10, precision: 2 },
    difficulty: 'easy',
    explanation: '$\\sum_{n=1}^{\\infty} \\frac{1}{2^n} = \\frac{1/2}{1 - 1/2} = 1$ by the geometric series formula.',
  },
];
