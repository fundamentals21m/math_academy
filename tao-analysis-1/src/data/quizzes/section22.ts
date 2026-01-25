import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The extended real number system $\\overline{\\mathbb{R}}$ consists of:',
    options: [
      '$\\mathbb{R}$ together with $0$ and $1$',
      'All complex numbers',
      '$\\mathbb{R}$ together with $+\\infty$ and $-\\infty$',
      '$\\mathbb{R}$ together with infinitesimals'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The extended reals are $\\overline{\\mathbb{R}} = \\mathbb{R} \\cup \\{+\\infty, -\\infty\\}$. These symbols extend the ordering: $-\\infty < x < +\\infty$ for all $x \\in \\mathbb{R}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the extended reals, $\\sup(\\mathbb{R}) = $?',
    options: [
      '$+\\infty
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In $\\overline{\\mathbb{R}}$, the set $\\mathbb{R}$ is bounded above by $+\\infty$, and no smaller extended real bounds $\\mathbb{R}$ from above, so $\\sup(\\mathbb{R}) = +\\infty$.',
  },
      'Does not exist',
      '$0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In $\\overline{\\mathbb{R}}$, the set $\\mathbb{R}$ is bounded above by $+\\infty$, and no smaller extended real bounds $\\mathbb{R}$ from above, so $\\sup(\\mathbb{R}) = +\\infty$.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In $\\overline{\\mathbb{R}}$, the set $\\mathbb{R}$ is bounded above by $+\\infty$, and no smaller extended real bounds $\\mathbb{R}$ from above, so $\\sup(\\mathbb{R}) = +\\infty$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In $\\overline{\\mathbb{R}}$, the set $\\mathbb{R}$ is bounded above by $+\\infty$, and no smaller extended real bounds $\\mathbb{R}$ from above, so $\\sup(\\mathbb{R}) = +\\infty$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which arithmetic operation is NOT defined in the extended reals?',
    options: [
      '$\\infty - \\infty$',
      '$\\infty \\cdot \\infty$',
      '$3 + \\infty$',
      '$1 / \\infty$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The expression $\\infty - \\infty$ is indeterminate and undefined. Also $0 \\cdot \\infty$ and $\\infty / \\infty$ are undefined. However, $x + \\infty = \\infty$ for $x \\in \\mathbb{R}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'We say $\\lim_{n \\to \\infty} a_n = +\\infty$ if:',
    options: [
      '$a_n = \\infty$ for some $n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A sequence diverges to $+\\infty$ if for any bound $M$, the terms eventually exceed $M$. This is a precise definition of "going to infinity."',
  },
      'The sequence is increasing',
      'For every $M > 0$, there exists $N$ such that $a_n > M$ for all $n \\geq N
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A sequence diverges to $+\\infty$ if for any bound $M$, the terms eventually exceed $M$. This is a precise definition of "going to infinity."',
  },
      '$a_n > 0$ for all $n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A sequence diverges to $+\\infty$ if for any bound $M$, the terms eventually exceed $M$. This is a precise definition of "going to infinity."',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A sequence diverges to $+\\infty$ if for any bound $M$, the terms eventually exceed $M$. This is a precise definition of "going to infinity."',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the extended reals, $(-\\infty) + (-\\infty) = $?',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Adding $-\\infty$ to $-\\infty$ gives $-\\infty$. This is consistent: both "infinitely negative" quantities sum to something "infinitely negative."',
  },
      'Undefined',
      '$+\\infty
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Adding $-\\infty$ to $-\\infty$ gives $-\\infty$. This is consistent: both "infinitely negative" quantities sum to something "infinitely negative."',
  },
      '$-\\infty
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Adding $-\\infty$ to $-\\infty$ gives $-\\infty$. This is consistent: both "infinitely negative" quantities sum to something "infinitely negative."',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Adding $-\\infty$ to $-\\infty$ gives $-\\infty$. This is consistent: both "infinitely negative" quantities sum to something "infinitely negative."',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The sequence $a_n = (-1)^n \\cdot n$ has:',
    options: [
      '$\\lim a_n = +\\infty
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sequence $(-1, 2, -3, 4, -5, \\ldots)$ oscillates between arbitrarily large positive and negative values. It does not converge to $+\\infty$, $-\\infty$, or any real number.',
  },
      'No limit (even in $\\overline{\\mathbb{R}}$)',
      '$\\lim a_n = -\\infty
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The sequence $(-1, 2, -3, 4, -5, \\ldots)$ oscillates between arbitrarily large positive and negative values. It does not converge to $+\\infty$, $-\\infty$, or any real number.',
  },
      '$\\lim a_n = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The sequence $(-1, 2, -3, 4, -5, \\ldots)$ oscillates between arbitrarily large positive and negative values. It does not converge to $+\\infty$, $-\\infty$, or any real number.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The sequence $(-1, 2, -3, 4, -5, \\ldots)$ oscillates between arbitrarily large positive and negative values. It does not converge to $+\\infty$, $-\\infty$, or any real number.',
  },
];
