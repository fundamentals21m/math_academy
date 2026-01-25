import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The integers $\\mathbb{Z}$ are constructed from natural numbers as:',
    options: [
      'Just the natural numbers with $0$ removed',
      'The union of positive and negative real numbers',
      'Equivalence classes of ordered pairs $(a, b)$ of natural numbers, representing $a - b
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'We define $\\mathbb{Z}$ using pairs $(a, b) \\in \\mathbb{N} \\times \\mathbb{N}$ where $(a, b) \\sim (c, d)$ iff $a + d = b + c$. Each equivalence class represents an integer (informally $a - b$).',
  },
      'Rational numbers with denominator $1
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We define $\\mathbb{Z}$ using pairs $(a, b) \\in \\mathbb{N} \\times \\mathbb{N}$ where $(a, b) \\sim (c, d)$ iff $a + d = b + c$. Each equivalence class represents an integer (informally $a - b$).',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We define $\\mathbb{Z}$ using pairs $(a, b) \\in \\mathbb{N} \\times \\mathbb{N}$ where $(a, b) \\sim (c, d)$ iff $a + d = b + c$. Each equivalence class represents an integer (informally $a - b$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the construction of integers, the equivalence class containing $(5, 2)$ represents which integer?',
    options: [
      '$3
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The pair $(5, 2)$ represents $5 - 2 = 3$. It is equivalent to $(6, 3)$, $(7, 4)$, etc., all representing $3$.',
  },
      '$-3
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The pair $(5, 2)$ represents $5 - 2 = 3$. It is equivalent to $(6, 3)$, $(7, 4)$, etc., all representing $3$.',
  },
      '$7
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The pair $(5, 2)$ represents $5 - 2 = 3$. It is equivalent to $(6, 3)$, $(7, 4)$, etc., all representing $3$.',
  },
      '$2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The pair $(5, 2)$ represents $5 - 2 = 3$. It is equivalent to $(6, 3)$, $(7, 4)$, etc., all representing $3$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The pair $(5, 2)$ represents $5 - 2 = 3$. It is equivalent to $(6, 3)$, $(7, 4)$, etc., all representing $3$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The equivalence relation $(a, b) \\sim (c, d)$ iff $a + d = b + c$ is used instead of $a - b = c - d$ because:',
    options: [
      'It gives different equivalence classes',
      'It makes the proofs shorter',
      'Addition is not commutative',
      'Subtraction is not yet defined on natural numbers'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'We cannot use $a - b = c - d$ because subtraction on $\\mathbb{N}$ is not always defined (e.g., $2 - 5$). The condition $a + d = b + c$ uses only addition.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'In the integer construction, which integer does the equivalence class containing $(2, 7)$ represent?',
    correctAnswer: -5,
    numericRange: { min: -20, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'The pair $(2, 7)$ represents $2 - 7 = -5$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Addition of integers $[(a, b)] + [(c, d)]$ is defined as:',
    options: [
      '$[(a \\cdot c, b \\cdot d)]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integer addition is defined by $[(a, b)] + [(c, d)] = [(a + c, b + d)]$. Informally: $(a - b) + (c - d) = (a + c) - (b + d)$.',
  },
      '$[(a + c, b + d)]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integer addition is defined by $[(a, b)] + [(c, d)] = [(a + c, b + d)]$. Informally: $(a - b) + (c - d) = (a + c) - (b + d)$.',
  },
      '$[(a + d, b + c)]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integer addition is defined by $[(a, b)] + [(c, d)] = [(a + c, b + d)]$. Informally: $(a - b) + (c - d) = (a + c) - (b + d)$.',
  },
      '$[(a - c, b - d)]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integer addition is defined by $[(a, b)] + [(c, d)] = [(a + c, b + d)]$. Informally: $(a - b) + (c - d) = (a + c) - (b + d)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integer addition is defined by $[(a, b)] + [(c, d)] = [(a + c, b + d)]$. Informally: $(a - b) + (c - d) = (a + c) - (b + d)$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The additive inverse (negative) of the integer $[(a, b)]$ is:',
    options: [
      '$[(a, b)]$',
      '$[(b, a)]$',
      '$[(0, a + b)]$',
      '$[(-a, -b)]$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The negative of $[(a, b)]$ is $[(b, a)]$ because $[(a, b)] + [(b, a)] = [(a + b, b + a)] = [(a + b, a + b)]$, which represents $0$.',
  },
];
