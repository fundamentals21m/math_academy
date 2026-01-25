import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the Erdős-Rényi model $G(n,p)$, each edge appears:',
    options: [
      'With probability $1/n$',
      'Deterministically',
      'Independently with probability $p$',
      'With probability $p^2$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$G(n,p)$: each of the $\\binom{n}{2}$ possible edges appears independently with probability $p$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The expected number of edges in $G(n,p)$ is:',
    options: [
      '$np
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Each of $\\binom{n}{2}$ edges appears with probability $p$, so $E[|E|] = p\\binom{n}{2}$.',
  },
      '$2np
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each of $\\binom{n}{2}$ edges appears with probability $p$, so $E[|E|] = p\\binom{n}{2}$.',
  },
      '$p\\binom{n}{2}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each of $\\binom{n}{2}$ edges appears with probability $p$, so $E[|E|] = p\\binom{n}{2}$.',
  },
      '$n^2p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each of $\\binom{n}{2}$ edges appears with probability $p$, so $E[|E|] = p\\binom{n}{2}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each of $\\binom{n}{2}$ edges appears with probability $p$, so $E[|E|] = p\\binom{n}{2}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The threshold function for connectivity in $G(n,p)$ is:',
    options: [
      '$p = 1/n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Connectivity threshold: $p = (\\log n)/n$. Below this, a.s. disconnected; above, a.s. connected.',
  },
      '$p = \\log n / n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Connectivity threshold: $p = (\\log n)/n$. Below this, a.s. disconnected; above, a.s. connected.',
  },
      '$p = 1/n^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Connectivity threshold: $p = (\\log n)/n$. Below this, a.s. disconnected; above, a.s. connected.',
  },
      '$p = 1/2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Connectivity threshold: $p = (\\log n)/n$. Below this, a.s. disconnected; above, a.s. connected.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Connectivity threshold: $p = (\\log n)/n$. Below this, a.s. disconnected; above, a.s. connected.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The \"giant component\" phase transition occurs at:',
    options: [
      '$p = 1/n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'At $p = c/n$: for $c < 1$, all components small; for $c > 1$, unique giant component emerges.',
  },
      '$p = 1/n^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'At $p = c/n$: for $c < 1$, all components small; for $c > 1$, unique giant component emerges.',
  },
      '$p = \\log n / n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'At $p = c/n$: for $c < 1$, all components small; for $c > 1$, unique giant component emerges.',
  },
      '$p = 1/2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'At $p = c/n$: for $c < 1$, all components small; for $c > 1$, unique giant component emerges.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'At $p = c/n$: for $c < 1$, all components small; for $c > 1$, unique giant component emerges.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The chromatic number of $G(n, 1/2)$ is typically:',
    options: [
      '$O(1)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\chi(G(n,1/2)) \\approx n/(2\\log_2 n)$ almost surely.',
  },
      '$O(\\log n)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\chi(G(n,1/2)) \\approx n/(2\\log_2 n)$ almost surely.',
  },
      '$\\Theta(n)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\chi(G(n,1/2)) \\approx n/(2\\log_2 n)$ almost surely.',
  },
      '$\\Theta(n / \\log n)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\chi(G(n,1/2)) \\approx n/(2\\log_2 n)$ almost surely.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\chi(G(n,1/2)) \\approx n/(2\\log_2 n)$ almost surely.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The probabilistic method pioneered by Erdős can prove:',
    options: [
      'Only upper bounds on parameters',
      'Only lower bounds on Ramsey numbers',
      'Algorithm correctness',
      'Existence of structures without explicit construction'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Probabilistic method: show random objects have desired property with positive probability, proving existence.',
  },
];
