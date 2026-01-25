import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: \\mathbf{R} \\to \\mathbf{C}$ is periodic with period $L$ if:',
    options: [
      '$f(x) = f(L)$ for all $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A function is $L$-periodic if $f(x + L) = f(x)$ for all $x$.',
  },
      '$f(x + L) = -f(x)$ for all $x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A function is $L$-periodic if $f(x + L) = f(x)$ for all $x$.',
  },
      '$f$ is bounded by $L
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A function is $L$-periodic if $f(x + L) = f(x)$ for all $x$.',
  },
      '$f(x + L) = f(x)$ for all $x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A function is $L$-periodic if $f(x + L) = f(x)$ for all $x$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A function is $L$-periodic if $f(x + L) = f(x)$ for all $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ has period $L$, then $f$ also has period:',
    options: [
      '$2L
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $f(x + L) = f(x)$, then $f(x + 2L) = f((x + L) + L) = f(x + L) = f(x)$.',
  },
      '$L/2$ always',
      '$L - 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If $f(x + L) = f(x)$, then $f(x + 2L) = f((x + L) + L) = f(x + L) = f(x)$.',
  },
      '$\\sqrt{L}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If $f(x + L) = f(x)$, then $f(x + 2L) = f((x + L) + L) = f(x + L) = f(x)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If $f(x + L) = f(x)$, then $f(x + 2L) = f((x + L) + L) = f(x + L) = f(x)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The fundamental period of $f$ is:',
    options: [
      'The largest period of $f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The fundamental period is the smallest positive $L$ such that $f(x + L) = f(x)$.',
  },
      'The smallest positive period of $f
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The fundamental period is the smallest positive $L$ such that $f(x + L) = f(x)$.',
  },
      'Any period of $f
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The fundamental period is the smallest positive $L$ such that $f(x + L) = f(x)$.',
  },
      '$2\\pi$ always',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The fundamental period is the smallest positive $L$ such that $f(x + L) = f(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The function $\\sin(x)$ has fundamental period:',
    options: [
      '$\\pi
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sin(x + 2\\pi) = \\sin(x)$, and $2\\pi$ is the smallest such positive number.',
  },
      '$\\pi/2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sin(x + 2\\pi) = \\sin(x)$, and $2\\pi$ is the smallest such positive number.',
  },
      '$2\\pi
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sin(x + 2\\pi) = \\sin(x)$, and $2\\pi$ is the smallest such positive number.',
  },
      '$4\\pi
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sin(x + 2\\pi) = \\sin(x)$, and $2\\pi$ is the smallest such positive number.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sin(x + 2\\pi) = \\sin(x)$, and $2\\pi$ is the smallest such positive number.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f$ has period $L$ and $g$ has period $L$, then $f + g$:',
    options: [
      'Has period $2L
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$(f + g)(x + L) = f(x + L) + g(x + L) = f(x) + g(x) = (f + g)(x)$.',
  },
      'Has period $L/2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(f + g)(x + L) = f(x + L) + g(x + L) = f(x) + g(x) = (f + g)(x)$.',
  },
      'Might not be periodic',
      'Has period $L
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(f + g)(x + L) = f(x + L) + g(x + L) = f(x) + g(x) = (f + g)(x)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(f + g)(x + L) = f(x + L) + g(x + L) = f(x) + g(x) = (f + g)(x)$.',
  },
];
