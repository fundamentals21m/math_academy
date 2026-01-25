import type { QuizQuestion } from './types';

export const section150Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A set function $f$ is called finitely additive if for every pair of disjoint sets $A$ and $B$:',
    options: [
      '$f(A \\cup B) = f(A) + f(B)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Finite additivity means that for disjoint sets, the set function of the union equals the sum of the set functions of the individual sets: $f(A \\cup B) = f(A) + f(B)$.',
  },
      '$f(A \\cup B) = \\max(f(A), f(B))
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Finite additivity means that for disjoint sets, the set function of the union equals the sum of the set functions of the individual sets: $f(A \\cup B) = f(A) + f(B)$.',
  },
      '$f(A \\cap B) = f(A) \\cdot f(B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Finite additivity means that for disjoint sets, the set function of the union equals the sum of the set functions of the individual sets: $f(A \\cup B) = f(A) + f(B)$.',
  },
      '$f(A \\cup B) = f(A) \\cdot f(B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Finite additivity means that for disjoint sets, the set function of the union equals the sum of the set functions of the individual sets: $f(A \\cup B) = f(A) + f(B)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Finite additivity means that for disjoint sets, the set function of the union equals the sum of the set functions of the individual sets: $f(A \\cup B) = f(A) + f(B)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ is a finitely additive set function and $\\varnothing$ is in the Boolean algebra, what is $f(\\varnothing)$?',
    options: [
      '$-1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $A = A \\cup \\varnothing$ with $A$ and $\\varnothing$ disjoint, we have $f(A) = f(A) + f(\\varnothing)$, which implies $f(\\varnothing) = 0$.',
  },
      '$1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $A = A \\cup \\varnothing$ with $A$ and $\\varnothing$ disjoint, we have $f(A) = f(A) + f(\\varnothing)$, which implies $f(\\varnothing) = 0$.',
  },
      'Undefined',
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $A = A \\cup \\varnothing$ with $A$ and $\\varnothing$ disjoint, we have $f(A) = f(A) + f(\\varnothing)$, which implies $f(\\varnothing) = 0$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $A = A \\cup \\varnothing$ with $A$ and $\\varnothing$ disjoint, we have $f(A) = f(A) + f(\\varnothing)$, which implies $f(\\varnothing) = 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For any two sets $A$ and $B$ in a Boolean algebra (not necessarily disjoint), the inclusion-exclusion principle states:',
    options: [
      '$f(A \\cup B) = f(A) + f(B)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The inclusion-exclusion principle accounts for the overlap: $f(A \\cup B) = f(A) + f(B) - f(A \\cap B)$. We subtract the intersection to avoid counting it twice.',
  },
      '$f(A \\cup B) = f(A) + f(B) + f(A \\cap B)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inclusion-exclusion principle accounts for the overlap: $f(A \\cup B) = f(A) + f(B) - f(A \\cap B)$. We subtract the intersection to avoid counting it twice.',
  },
      '$f(A \\cup B) = f(A) \\cdot f(B) - f(A \\cap B)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inclusion-exclusion principle accounts for the overlap: $f(A \\cup B) = f(A) + f(B) - f(A \\cap B)$. We subtract the intersection to avoid counting it twice.',
  },
      '$f(A \\cup B) = f(A) + f(B) - f(A \\cap B)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inclusion-exclusion principle accounts for the overlap: $f(A \\cup B) = f(A) + f(B) - f(A \\cap B)$. We subtract the intersection to avoid counting it twice.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inclusion-exclusion principle accounts for the overlap: $f(A \\cup B) = f(A) + f(B) - f(A \\cap B)$. We subtract the intersection to avoid counting it twice.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A Boolean algebra $\\mathscr{B}$ of subsets of $S$ must be closed under which operations?',
    options: [
      'Complementation and union',
      'Union only',
      'Complementation only',
      'Intersection only',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A Boolean algebra is defined as a nonempty collection closed under complementation and union. Closure under intersection and set difference then follows from these properties.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f$ is finitely additive and $A \\subseteq B$, then:',
    options: [
      '$f(B - A) = f(B) + f(A)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $B = A \\cup (B - A)$ with $A$ and $B - A$ disjoint, we have $f(B) = f(A) + f(B - A)$, so $f(B - A) = f(B) - f(A)$.',
  },
      '$f(B - A) = f(B) - f(A)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since $B = A \\cup (B - A)$ with $A$ and $B - A$ disjoint, we have $f(B) = f(A) + f(B - A)$, so $f(B - A) = f(B) - f(A)$.',
  },
      '$f(B - A) = f(B) / f(A)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since $B = A \\cup (B - A)$ with $A$ and $B - A$ disjoint, we have $f(B) = f(A) + f(B - A)$, so $f(B - A) = f(B) - f(A)$.',
  },
      '$f(B - A) = f(A) - f(B)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since $B = A \\cup (B - A)$ with $A$ and $B - A$ disjoint, we have $f(B) = f(A) + f(B - A)$, so $f(B - A) = f(B) - f(A)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since $B = A \\cup (B - A)$ with $A$ and $B - A$ disjoint, we have $f(B) = f(A) + f(B - A)$, so $f(B - A) = f(B) - f(A)$.',
  },
];
