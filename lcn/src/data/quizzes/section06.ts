import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Variant A (removing $s_a$), why does PSHVZK break?',
    options: [
      'The protocol becomes incomplete',
      'The commitment becomes unbinding',
      'The verification equations fail',
      'The adversary knows $a$ and can check if $l = a
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Without blinding, $l = a$ directly. The adversary knows $a$ and can distinguish real ($l = a$) from simulated (random $l$).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Without blinding, $l = a$ directly. The adversary knows $a$ and can distinguish real ($l = a$) from simulated (random $l$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the PSHVZK simulator construction, which values are drawn uniformly at random?',
    options: [
      'Only $x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The simulator draws $x, l, r, \\mu, \\tau_x, T_2$ randomly, then computes $S$ and $T_1$ from verification equations.',
  },
      '$x, l, r, \\mu, \\tau_x, T_2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The simulator draws $x, l, r, \\mu, \\tau_x, T_2$ randomly, then computes $S$ and $T_1$ from verification equations.',
  },
      'The witness values',
      'All transcript values',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The simulator draws $x, l, r, \\mu, \\tau_x, T_2$ randomly, then computes $S$ and $T_1$ from verification equations.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The simulator computes $S$ as:',
    options: [
      '$s_a G_0 + s_b G_1 + s_S H
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The simulator sets $S = \\frac{1}{x}(lG_0 + rG_1 + \\mu H - C)$ to satisfy the first verification equation.',
  },
      'A random group element',
      '$C + xT_1
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The simulator sets $S = \\frac{1}{x}(lG_0 + rG_1 + \\mu H - C)$ to satisfy the first verification equation.',
  },
      '$\\frac{1}{x}(lG_0 + rG_1 + \\mu H - C)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The simulator sets $S = \\frac{1}{x}(lG_0 + rG_1 + \\mu H - C)$ to satisfy the first verification equation.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The simulator sets $S = \\frac{1}{x}(lG_0 + rG_1 + \\mu H - C)$ to satisfy the first verification equation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why can\'t we remove $\\tau_2$ from the protocol?',
    options: [
      'Completeness would fail',
      'The protocol would become non-interactive',
      'The adversary could compute $s_a s_b$ from $l, r, x$ and check $T_2
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Given $a, b, x, l, r$, the adversary can compute $s_a = (l-a)/x$ and $s_b = (r-b)/x$, then check if $T_2 = s_a s_b G_0$.',
  },
      '$T_2$ is needed for binding',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Given $a, b, x, l, r$, the adversary can compute $s_a = (l-a)/x$ and $s_b = (r-b)/x$, then check if $T_2 = s_a s_b G_0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Each blinding factor serves to make its corresponding transcript value:',
    options: [
      'Computationally hard',
      'Binding',
      'Non-malleable',
      'Uniformly distributed',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Blinding factors ensure transcript values are uniformly distributed, allowing simulation without the witness.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In the proof of PSHVZK, the key step is showing:',
    options: [
      'The protocol is complete',
      'Real and simulated transcript distributions are equal',
      'The simulator runs in polynomial time',
      'The witness is extractable',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The proof shows that both distributions factor the same way, proving they are identical.',
  },
];
