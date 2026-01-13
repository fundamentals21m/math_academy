import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does EUF-CMA security mean for a signature scheme?',
    options: [
      'Signatures can be forged with some probability',
      'Existential Unforgeability under Chosen Message Attack - adversary cannot forge on any new message even after seeing signatures on chosen messages',
      'Signatures are encrypted',
      'Messages must be fixed in advance',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'EUF-CMA means an adversary who can request signatures on any messages of their choice still cannot produce a valid signature on a message that was never signed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'FROST\'s security reduction proves that if an adversary can forge with probability $\\varepsilon$, then:',
    options: [
      'The discrete log problem is easy',
      'The discrete log can be solved with probability related to $\\varepsilon^2$',
      'The hash function is broken',
      'The signature is invalid',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The reduction shows: if FROST can be broken with probability $\\varepsilon$, then discrete log can be solved with probability $\\geq \\varepsilon^2 / (2n_H + (\\pi+1)n_P + 1)$. This is a "security reduction."',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What proof technique is used in FROST\'s security reduction?',
    options: [
      'Direct proof',
      'Proof by contradiction',
      'Forking lemma (run adversary twice with different random oracle answers)',
      'Induction',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The forking lemma runs the adversary twice, "forking" at a critical point with different random oracle outputs. If both runs produce forgeries, the discrete log can be extracted by comparing them.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why does FROST\'s security bound have $\\varepsilon^2$ (quadratic loss) in the numerator?',
    options: [
      'Because FROST uses two commitments',
      'Because the forking lemma requires both forks to succeed, probability $\\approx \\varepsilon \\cdot \\varepsilon$',
      'Because there are two hash functions',
      'Because the threshold is $t=2$',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The forking lemma requires BOTH forked executions to produce forgeries. If each succeeds with probability $\\varepsilon$, both succeed with probability approximately $\\varepsilon^2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In FROST\'s security bound, what does $n_H$ represent?',
    options: [
      'The number of honest participants',
      'The number of hash queries the adversary makes',
      'The hash output length',
      'The number of signatures produced',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$n_H$ is the number of queries the adversary makes to the hash oracles $H_1$ and $H_2$. More queries give the adversary more chances to find useful values, slightly weakening the bound.',
  },
];
