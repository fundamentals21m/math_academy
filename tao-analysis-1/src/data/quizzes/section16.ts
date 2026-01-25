import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two Cauchy sequences $(a_n)$ and $(b_n)$ are called equivalent if:',
    options: [
      '$a_n = b_n$ for all $n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Equivalent Cauchy sequences eventually become arbitrarily close: for any $\\varepsilon > 0$, $|a_n - b_n| \\leq \\varepsilon$ for all sufficiently large $n$. This captures the idea that they "converge to the same limit."',
  },
      '$\\lim_{n \\to \\infty} (a_n - b_n) = 0$, i.e., $(a_n - b_n)$ is eventually zero',
      'For every $\\varepsilon > 0$, there exists $N$ such that $|a_n - b_n| \\leq \\varepsilon$ for all $n \\geq N
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Equivalent Cauchy sequences eventually become arbitrarily close: for any $\\varepsilon > 0$, $|a_n - b_n| \\leq \\varepsilon$ for all sufficiently large $n$. This captures the idea that they "converge to the same limit."',
  },
      'They have the same first term',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Equivalent Cauchy sequences eventually become arbitrarily close: for any $\\varepsilon > 0$, $|a_n - b_n| \\leq \\varepsilon$ for all sufficiently large $n$. This captures the idea that they "converge to the same limit."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The equivalence relation on Cauchy sequences is used to:',
    options: [
      'Construct the real numbers as equivalence classes of Cauchy sequences',
      'Define addition of sequences',
      'Prove that all Cauchy sequences converge in $\\mathbb{Q}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A real number is defined as an equivalence class of Cauchy sequences. Two sequences represent the same real number if and only if they are equivalent (their difference converges to zero).',
  },
      'Show that rationals are dense',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A real number is defined as an equivalence class of Cauchy sequences. Two sequences represent the same real number if and only if they are equivalent (their difference converges to zero).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $(a_n) \\sim (b_n)$ and $(b_n) \\sim (c_n)$ (using $\\sim$ for equivalence), then:',
    options: [
      'All three sequences must be constant',
      '$(a_n)$ and $(c_n)$ may not be equivalent',
      '$(c_n) \\sim (a_n)$ but not $(a_n) \\sim (c_n)$',
      '$(a_n) \\sim (c_n)$ (transitivity)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Equivalence of Cauchy sequences is transitive: if $|a_n - b_n| < \\varepsilon/2$ and $|b_n - c_n| < \\varepsilon/2$ for large $n$, then $|a_n - c_n| \\leq |a_n - b_n| + |b_n - c_n| < \\varepsilon$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The sequence $(a_n) = (1, 1, 1, \\ldots)$ is equivalent to which of the following?',
    options: [
      '$(0, 0, 0, \\ldots)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sequence $(1 + 1/n)$ satisfies $|(1) - (1 + 1/n)| = 1/n \\to 0$, so it is equivalent to the constant sequence $(1, 1, 1, \\ldots)$.',
  },
      '$(2, 2, 2, \\ldots)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The sequence $(1 + 1/n)$ satisfies $|(1) - (1 + 1/n)| = 1/n \\to 0$, so it is equivalent to the constant sequence $(1, 1, 1, \\ldots)$.',
  },
      '$(1 + 1/n)_{n=1}^{\\infty}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The sequence $(1 + 1/n)$ satisfies $|(1) - (1 + 1/n)| = 1/n \\to 0$, so it is equivalent to the constant sequence $(1, 1, 1, \\ldots)$.',
  },
      '$(1/n)_{n=1}^{\\infty}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The sequence $(1 + 1/n)$ satisfies $|(1) - (1 + 1/n)| = 1/n \\to 0$, so it is equivalent to the constant sequence $(1, 1, 1, \\ldots)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The sequence $(1 + 1/n)$ satisfies $|(1) - (1 + 1/n)| = 1/n \\to 0$, so it is equivalent to the constant sequence $(1, 1, 1, \\ldots)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A Cauchy sequence $(a_n)$ is called a "zero sequence" or equivalent to zero if:',
    options: [
      '$a_n = 0$ for all $n$',
      'For every $\\varepsilon > 0$, $|a_n| \\leq \\varepsilon$ for all sufficiently large $n$',
      '$a_1 = 0$',
      'The sequence is unbounded'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A sequence is equivalent to zero (represents the real number $0$) if its terms eventually become arbitrarily small in absolute value, i.e., $|a_n| \\to 0$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'For sequences $a_n = 2 + 1/n$ and $b_n = 2 - 1/n$, what is $|a_{10} - b_{10}|$ expressed as a decimal?',
    correctAnswer: 0.2,
    numericRange: { min: 0, max: 10, precision: 2 },
    difficulty: 'easy',
    explanation: '$a_{10} = 2.1$ and $b_{10} = 1.9$, so $|a_{10} - b_{10}| = |2.1 - 1.9| = 0.2$. As $n \\to \\infty$, this difference goes to $0$, confirming the sequences are equivalent.',
  },
];
