import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Ramsey number $R(s,t)$ is the minimum $n$ such that every 2-coloring of $K_n$ contains:',
    options: [
      'A monochromatic spanning tree',
      'A red $K_s$ or blue $K_t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$R(s,t)$: any red-blue edge-coloring of $K_n$ has red $K_s$ or blue $K_t$.',
  },
      'A rainbow triangle',
      'A monochromatic Hamiltonian path',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$R(s,t)$: any red-blue edge-coloring of $K_n$ has red $K_s$ or blue $K_t$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is $R(3,3)$ (the "party problem" Ramsey number)?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: '$R(3,3) = 6$: any 2-coloring of $K_6$ has a monochromatic triangle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The probabilistic method proof that $R(s,s) > 2^{s/2}$ uses:',
    options: [
      'Induction on $s
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Erdős: randomly color edges; expected number of monochromatic $K_s$ is $< 1$ when $n < 2^{s/2}$.',
  },
      'Explicit construction',
      'The Lovász Local Lemma',
      'Random 2-coloring and expected monochromatic cliques',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Erdős: randomly color edges; expected number of monochromatic $K_s$ is $< 1$ when $n < 2^{s/2}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The recurrence $R(s,t) \\leq R(s-1,t) + R(s,t-1)$ proves:',
    options: [
      '$R(s,t)$ is always finite',
      '$R(s,t) \\leq \\binom{s+t-2}{s-1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'This recurrence proves existence of $R(s,t)$ and gives upper bound $\\binom{s+t-2}{s-1}$.',
  },
      '$R(s,t) = st
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This recurrence proves existence of $R(s,t)$ and gives upper bound $\\binom{s+t-2}{s-1}$.',
  },
      'Both that $R(s,t)$ is finite and the binomial bound',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This recurrence proves existence of $R(s,t)$ and gives upper bound $\\binom{s+t-2}{s-1}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is $R(3,4)$?',
    correctAnswer: 9,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'hard',
    explanation: '$R(3,4) = 9$: any 2-coloring of $K_9$ has red $K_3$ or blue $K_4$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For $R(5,5)$, we currently know:',
    options: [
      '$43 \\leq R(5,5) \\leq 48$ (exact value unknown)',
      '$R(5,5) = 43
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$R(5,5)$ is between 43 and 48; the exact value remains unknown despite decades of research.',
  },
      '$R(5,5) = 48
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$R(5,5)$ is between 43 and 48; the exact value remains unknown despite decades of research.',
  },
      '$R(5,5) > 100
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$R(5,5)$ is between 43 and 48; the exact value remains unknown despite decades of research.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$R(5,5)$ is between 43 and 48; the exact value remains unknown despite decades of research.',
  },
];
