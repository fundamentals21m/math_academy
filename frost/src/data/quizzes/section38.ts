import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What form does the concrete security bound for FROST take?',
    options: [
      '$\\varepsilon_{\\text{FROST}} \\leq \\varepsilon_{\\text{DLP}}^2 / (2n_H + n_S)$',
      '$\\varepsilon_{\\text{FROST}} \\leq \\varepsilon_{\\text{DLP}} + $ negligible terms',
      '$\\varepsilon_{\\text{FROST}} = \\varepsilon_{\\text{DLP}}$',
      '$\\varepsilon_{\\text{FROST}} \\geq 2\\varepsilon_{\\text{DLP}}$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The concrete security bound has the form $\\varepsilon_{\\text{FROST}} \\leq \\varepsilon_{\\text{DLP}}^2 / (2n_H + n_S)$ where $n_H$ is the number of hash queries and $n_S$ is the number of signing queries. This reflects the loss from the Forking Lemma.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does $n_H$ represent in the security bound $\\varepsilon^2 / (2n_H + n_S)$?',
    options: [
      'The number of honest participants',
      'The size of the hash output in bits',
      'The number of random oracle (hash) queries the adversary makes',
      'The number of threshold shares',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$n_H$ represents the number of queries the adversary makes to the random oracle (hash function). The Forking Lemma requires guessing which query will be the "fork point," introducing a factor of $1/n_H$ in the success probability.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does increasing the number of signing queries $n_S$ weaken the concrete security bound?',
    options: [
      'Each signing query reveals partial information about the secret',
      'More queries give the adversary more chances to guess the fork point',
      'Signing queries consume the nonce pool',
      'More signatures make the public key easier to factor',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'More signing queries give the adversary additional oracle query opportunities, increasing the denominator $2n_H + n_S$. The forking point could occur at any query, so more queries mean lower probability of successful extraction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For 128-bit security with a bound of $\\varepsilon^2 / (2n_H + n_S)$, approximately how large should the group order be?',
    options: [
      '128 bits',
      '1024 bits',
      '512 bits',
      '256 bits'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Due to the $\\varepsilon^2$ factor (squaring from the Forking Lemma), achieving 128-bit security requires starting with 256-bit security in the underlying DLP. This is why secp256k1 (256-bit curve) is used for Bitcoin.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is "concrete security" as opposed to "asymptotic security"?',
    options: [
      'Security proven without any assumptions',
      'Security expressed as explicit bounds for specific parameter sizes',
      'Security that only applies to concrete (non-abstract) implementations',
      'Security guaranteed by physical hardware',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Concrete security gives explicit numerical bounds like "an adversary making $2^{80}$ queries has success probability at most $2^{-128}$." This is more practical than asymptotic statements like "negligible in the security parameter."',
  },
];
