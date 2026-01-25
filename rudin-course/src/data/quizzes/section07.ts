import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 'sec07-q1',
    type: 'multiple-choice',
    question: 'A Dedekind cut is a subset $\\alpha \\subset \\mathbb{Q}$ satisfying which conditions?',
    options: [
      '$\\alpha$ is finite and nonempty',
      '$\\alpha$ contains exactly half of the rationals',
      '$\\alpha$ is an interval with rational endpoints',
      '$\\alpha$ is nonempty, $\\alpha \\neq \\mathbb{Q}$, $\\alpha$ is closed downward, and $\\alpha$ has no largest element',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A Dedekind cut $\\alpha$ is: (i) nonempty, (ii) not all of $\\mathbb{Q}$, (iii) if $p \\in \\alpha$ and $q < p$ then $q \\in \\alpha$, and (iv) $\\alpha$ has no maximum element.',
  },
  {
    id: 'sec07-q2',
    type: 'multiple-choice',
    question: 'The Dedekind cut representing $\\sqrt{2}$ is:',
    options: [
      '$\\{p \\in \\mathbb{Q} : p \\leq \\sqrt{2}\\}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Since $\\sqrt{2} \\notin \\mathbb{Q}$, we define its cut as $\\alpha = \\{p \\in \\mathbb{Q} : p < 0\\} \\cup \\{p \\in \\mathbb{Q} : p \\geq 0 \\text{ and } p^2 < 2\\}$. This has no maximum and is closed downward.',
  },
      '$\\{p \\in \\mathbb{Q} : p^2 = 2\\}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since $\\sqrt{2} \\notin \\mathbb{Q}$, we define its cut as $\\alpha = \\{p \\in \\mathbb{Q} : p < 0\\} \\cup \\{p \\in \\mathbb{Q} : p \\geq 0 \\text{ and } p^2 < 2\\}$. This has no maximum and is closed downward.',
  },
      '$\\{p \\in \\mathbb{Q} : p > \\sqrt{2}\\}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since $\\sqrt{2} \\notin \\mathbb{Q}$, we define its cut as $\\alpha = \\{p \\in \\mathbb{Q} : p < 0\\} \\cup \\{p \\in \\mathbb{Q} : p \\geq 0 \\text{ and } p^2 < 2\\}$. This has no maximum and is closed downward.',
  },
      '$\\{p \\in \\mathbb{Q} : p < 0 \\text{ or } p^2 < 2\\}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since $\\sqrt{2} \\notin \\mathbb{Q}$, we define its cut as $\\alpha = \\{p \\in \\mathbb{Q} : p < 0\\} \\cup \\{p \\in \\mathbb{Q} : p \\geq 0 \\text{ and } p^2 < 2\\}$. This has no maximum and is closed downward.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Since $\\sqrt{2} \\notin \\mathbb{Q}$, we define its cut as $\\alpha = \\{p \\in \\mathbb{Q} : p < 0\\} \\cup \\{p \\in \\mathbb{Q} : p \\geq 0 \\text{ and } p^2 < 2\\}$. This has no maximum and is closed downward.',
  },
  {
    id: 'sec07-q3',
    type: 'multiple-choice',
    question: 'If $\\alpha$ and $\\beta$ are cuts, we define $\\alpha < \\beta$ when:',
    options: [
      '$\\alpha \\supset \\beta
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For Dedekind cuts, $\\alpha < \\beta$ means $\\alpha$ is a proper subset of $\\beta$. Larger cuts contain more rationals (they go further "right" on the number line).',
  },
      '$\\alpha \\cap \\beta = \\emptyset
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For Dedekind cuts, $\\alpha < \\beta$ means $\\alpha$ is a proper subset of $\\beta$. Larger cuts contain more rationals (they go further "right" on the number line).',
  },
      '$\\alpha \\subset \\beta$ (proper subset)',
      '$\\sup \\alpha < \\sup \\beta$ in $\\mathbb{Q}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For Dedekind cuts, $\\alpha < \\beta$ means $\\alpha$ is a proper subset of $\\beta$. Larger cuts contain more rationals (they go further "right" on the number line).',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For Dedekind cuts, $\\alpha < \\beta$ means $\\alpha$ is a proper subset of $\\beta$. Larger cuts contain more rationals (they go further "right" on the number line).',
  },
  {
    id: 'sec07-q4',
    type: 'multiple-choice',
    question: 'To define addition of cuts $\\alpha + \\beta$, we set:',
    options: [
      '$\\alpha + \\beta = \\alpha \\cup \\beta
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum of cuts is defined pointwise: $\\alpha + \\beta = \\{r + s : r \\in \\alpha, s \\in \\beta\\}$. One must verify this is again a cut.',
  },
      '$\\alpha + \\beta = \\{p + q : p \\in \\alpha, q \\in \\beta\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sum of cuts is defined pointwise: $\\alpha + \\beta = \\{r + s : r \\in \\alpha, s \\in \\beta\\}$. One must verify this is again a cut.',
  },
      '$\\alpha + \\beta = \\alpha \\cap \\beta
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sum of cuts is defined pointwise: $\\alpha + \\beta = \\{r + s : r \\in \\alpha, s \\in \\beta\\}$. One must verify this is again a cut.',
  },
      '$\\alpha + \\beta = \\{pq : p \\in \\alpha, q \\in \\beta\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sum of cuts is defined pointwise: $\\alpha + \\beta = \\{r + s : r \\in \\alpha, s \\in \\beta\\}$. One must verify this is again a cut.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sum of cuts is defined pointwise: $\\alpha + \\beta = \\{r + s : r \\in \\alpha, s \\in \\beta\\}$. One must verify this is again a cut.',
  },
  {
    id: 'sec07-q5',
    type: 'multiple-choice',
    question: 'The main purpose of the Dedekind cut construction is to:',
    options: [
      'Prove that $\\mathbb{Q}$ is countable',
      'Construct $\\mathbb{R}$ from $\\mathbb{Q}$ and prove the LUB property',
      'Define the complex numbers',
      'Show that $\\sqrt{2}$ is irrational',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Dedekind cut construction rigorously builds $\\mathbb{R}$ from $\\mathbb{Q}$. Each real number is identified with a cut, and one proves the resulting ordered field satisfies the least upper bound property.',
  },
];
