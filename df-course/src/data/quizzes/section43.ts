import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The degree of the zero polynomial is conventionally defined as:',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The zero polynomial has no terms with nonzero coefficients, so it has no leading term. Its degree is conventionally defined as $-\\infty$ or left undefined to make degree formulas work correctly.',
  },
      '$-1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The zero polynomial has no terms with nonzero coefficients, so it has no leading term. Its degree is conventionally defined as $-\\infty$ or left undefined to make degree formulas work correctly.',
  },
      '$-\\infty$ or undefined',
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The zero polynomial has no terms with nonzero coefficients, so it has no leading term. Its degree is conventionally defined as $-\\infty$ or left undefined to make degree formulas work correctly.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The zero polynomial has no terms with nonzero coefficients, so it has no leading term. Its degree is conventionally defined as $-\\infty$ or left undefined to make degree formulas work correctly.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For polynomials $f, g \\in R[x]$ where $R$ is an integral domain, $\\deg(fg) = $',
    options: [
      '$\\deg(f) \\cdot \\deg(g)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When $R$ is an integral domain, $\\deg(fg) = \\deg(f) + \\deg(g)$ because the leading coefficients multiply to give a nonzero leading coefficient for $fg$.',
  },
      '$\\max(\\deg(f), \\deg(g))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $R$ is an integral domain, $\\deg(fg) = \\deg(f) + \\deg(g)$ because the leading coefficients multiply to give a nonzero leading coefficient for $fg$.',
  },
      '$\\min(\\deg(f), \\deg(g))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $R$ is an integral domain, $\\deg(fg) = \\deg(f) + \\deg(g)$ because the leading coefficients multiply to give a nonzero leading coefficient for $fg$.',
  },
      '$\\deg(f) + \\deg(g)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $R$ is an integral domain, $\\deg(fg) = \\deg(f) + \\deg(g)$ because the leading coefficients multiply to give a nonzero leading coefficient for $fg$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $R$ is an integral domain, $\\deg(fg) = \\deg(f) + \\deg(g)$ because the leading coefficients multiply to give a nonzero leading coefficient for $fg$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The leading coefficient of $f(x) = 4x^5 - 3x^3 + 2x - 7$ is:',
    options: [
      '$-7
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The leading coefficient is the coefficient of the highest degree term. Here the highest degree term is $4x^5$, so the leading coefficient is $4$.',
  },
      '$4
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The leading coefficient is the coefficient of the highest degree term. Here the highest degree term is $4x^5$, so the leading coefficient is $4$.',
  },
      '$2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The leading coefficient is the coefficient of the highest degree term. Here the highest degree term is $4x^5$, so the leading coefficient is $4$.',
  },
      '$-3
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The leading coefficient is the coefficient of the highest degree term. Here the highest degree term is $4x^5$, so the leading coefficient is $4$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The leading coefficient is the coefficient of the highest degree term. Here the highest degree term is $4x^5$, so the leading coefficient is $4$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A polynomial $f(x) \\in R[x]$ is called monic if:',
    options: [
      'Its constant term is $1$',
      'Its degree is $1$',
      'All its coefficients are $1$',
      'Its leading coefficient is $1$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A monic polynomial is one whose leading coefficient (coefficient of the highest degree term) is $1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $R$ has zero divisors, then for $f, g \\in R[x]$ with $fg \\neq 0$:',
    options: [
      '$\\deg(fg) \\leq \\deg(f) + \\deg(g)$, and strict inequality is possible',
      '$\\deg(fg) = \\deg(f) + \\deg(g)$ always',
      '$\\deg(fg) > \\deg(f) + \\deg(g)$',
      '$\\deg(fg)$ is undefined'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'When $R$ has zero divisors, the leading coefficients of $f$ and $g$ might multiply to $0$, causing $\\deg(fg) < \\deg(f) + \\deg(g)$. For example, in $\\mathbb{Z}_6[x]$: $(2x)(3x) = 6x^2 = 0$.',
  },
];
