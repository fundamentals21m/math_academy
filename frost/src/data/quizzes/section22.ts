import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the formula for the binding value $\\rho_i$ in FROST?',
    options: [
      '$\\rho_i = H_1(m)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The binding value is $\\rho_i = H_1(i, m, B)$ where $i$ is the participant index, $m$ is the message, and $B$ is the list of all commitments for this signing session.',
  },
      '$\\rho_i = H_1(s_i, k_i)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The binding value is $\\rho_i = H_1(i, m, B)$ where $i$ is the participant index, $m$ is the message, and $B$ is the list of all commitments for this signing session.',
  },
      '$\\rho_i = H_1(Y)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The binding value is $\\rho_i = H_1(i, m, B)$ where $i$ is the participant index, $m$ is the message, and $B$ is the list of all commitments for this signing session.',
  },
      '$\\rho_i = H_1(i, m, B)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The binding value is $\\rho_i = H_1(i, m, B)$ where $i$ is the participant index, $m$ is the message, and $B$ is the list of all commitments for this signing session.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The binding value is $\\rho_i = H_1(i, m, B)$ where $i$ is the participant index, $m$ is the message, and $B$ is the list of all commitments for this signing session.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the binding value formula, what does $B$ represent?',
    options: [
      'The Bitcoin address',
      'The block hash',
      'The list of all commitment pairs: $[(1, D_1, E_1), (2, D_2, E_2), ...]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$B$ is the commitment list containing all participants\' commitment pairs $(D_i, E_i)$ along with their indices. This binds each response to the specific set of commitments in this session.',
  },
      'The balance of the wallet',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$B$ is the commitment list containing all participants\' commitment pairs $(D_i, E_i)$ along with their indices. This binds each response to the specific set of commitments in this session.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why are two commitments $(D_i, E_i)$ needed per participant instead of one?',
    options: [
      'To make the signature larger',
      'To enable the binding formula $R_i = D_i + [\\rho_i]E_i$ with session-specific flexibility',
      'To use more storage',
      'To require more computation',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The dual commitment structure allows computing $R_i = D_i + [\\rho_i]E_i$, where the binding value $\\rho_i$ (unknown at commitment time) scales $E_i$. A single commitment wouldn\'t provide this flexibility.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens to all $\\rho_i$ values if any single commitment $D_j$ or $E_j$ changes?',
    options: [
      'All $\\rho_i$ values change because they all depend on $B
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'All binding values $\\rho_i = H_1(i, m, B)$ depend on the full commitment list $B$. Changing any commitment changes $B$, which changes the hash output for ALL participants.',
  },
      'Only $\\rho_j$ changes',
      'Only the coordinator\\'s $\\rho$ changes',
      'No $\\rho_i$ values change',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'All binding values $\\rho_i = H_1(i, m, B)$ depend on the full commitment list $B$. Changing any commitment changes $B$, which changes the hash output for ALL participants.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the formula for the group commitment $R$ using individual binding values?',
    options: [
      '$R = \\sum_{i \\in S} D_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The group commitment is $R = \\sum_{i \\in S} R_i = \\sum_{i \\in S} (D_i + [\\rho_i]E_i)$. Each individual commitment $R_i$ incorporates both the pre-committed values and the session-specific binding.',
  },
      '$R = \\prod_{i \\in S} D_i \\cdot E_i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The group commitment is $R = \\sum_{i \\in S} R_i = \\sum_{i \\in S} (D_i + [\\rho_i]E_i)$. Each individual commitment $R_i$ incorporates both the pre-committed values and the session-specific binding.',
  },
      '$R = D_1 \\cdot E_1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The group commitment is $R = \\sum_{i \\in S} R_i = \\sum_{i \\in S} (D_i + [\\rho_i]E_i)$. Each individual commitment $R_i$ incorporates both the pre-committed values and the session-specific binding.',
  },
      '$R = \\sum_{i \\in S} (D_i + [\\rho_i]E_i)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The group commitment is $R = \\sum_{i \\in S} R_i = \\sum_{i \\in S} (D_i + [\\rho_i]E_i)$. Each individual commitment $R_i$ incorporates both the pre-committed values and the session-specific binding.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The group commitment is $R = \\sum_{i \\in S} R_i = \\sum_{i \\in S} (D_i + [\\rho_i]E_i)$. Each individual commitment $R_i$ incorporates both the pre-committed values and the session-specific binding.',
  },
];
