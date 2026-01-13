import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Forking Lemma used for in Schnorr-based signature security proofs?',
    options: [
      'To prove signatures are computed correctly',
      'To extract the discrete logarithm from an adversary who can forge signatures',
      'To verify that nonces are generated randomly',
      'To optimize the signature verification algorithm',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Forking Lemma shows that if an adversary can produce one forgery with non-negligible probability, by "rewinding" and giving different random oracle responses, we can obtain two forgeries with the same $R$ but different challenges $c$ and $c\'$. From these, we extract the discrete log.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Given two valid forgeries $(R, z, c)$ and $(R, z\', c\')$ with the same commitment $R$ but $c \\neq c\'$, how is the secret key extracted?',
    options: [
      '$s = z + z\'$',
      '$s = z \\cdot z\'$',
      '$s = (z - z\') / (c - c\')$',
      '$s = (z - z\') \\cdot (c - c\')$',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'From $z = k + s \\cdot c$ and $z\' = k + s \\cdot c\'$, subtracting gives $z - z\' = s(c - c\')$. Thus $s = (z - z\')/(c - c\')$. This is the key extraction at the heart of the security proof.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is "rewinding" the adversary necessary in the Forking Lemma?',
    options: [
      'To check if the adversary is running in polynomial time',
      'To obtain a second forgery with a different challenge value',
      'To verify the adversary\'s randomness source',
      'To reduce memory usage during the proof',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rewinding runs the adversary again with the same random tape but different random oracle responses after the "fork point." This produces a second forgery with the same commitment $R$ (same nonce $k$) but a different challenge $c\'$, enabling key extraction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What probability loss factor does the basic Forking Lemma introduce?',
    options: [
      'No loss - success probability is preserved exactly',
      'A factor of roughly $1/q_H$ where $q_H$ is the number of hash queries',
      'A factor of $2^{-128}$ regardless of parameters',
      'A factor proportional to the signature size',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Forking Lemma introduces a success probability loss of roughly $\\varepsilon^2 / q_H$ where $\\varepsilon$ is the forgery probability and $q_H$ is the number of random oracle queries. This affects concrete security bounds.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What makes the forking technique work specifically for Schnorr-type signatures?',
    options: [
      'The use of RSA moduli',
      'The linear relationship $z = k + s \\cdot c$ in the response',
      'The use of symmetric encryption',
      'The fixed signature length',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The forking technique exploits Schnorr\'s linear response structure $z = k + s \\cdot c$. With two equations sharing the same $k$ but different $c$ values, we have two equations in two unknowns ($k$ and $s$) which can be solved algebraically.',
  },
];
