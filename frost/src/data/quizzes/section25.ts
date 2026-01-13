import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In FROST\'s binding mechanism, when must the adversary commit to $D_1, E_1$?',
    options: [
      'After seeing all other commitments and the message',
      'Before seeing other participants\' commitments or the binding values',
      'After computing the challenge $c$',
      'After the signature is complete',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The adversary must publish $(D_1, E_1)$ BEFORE seeing other participants\' commitments, the message, or any binding values $\\rho_i$. This is the commit-before-know constraint.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What happens when an adversary changes their commitment $D_1$ to $D_1\'$ after seeing others?',
    options: [
      'Only their own $\\rho_1$ changes',
      'No binding values change',
      'ALL binding values $\\rho_i$ for ALL participants change',
      'The signature becomes invalid',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Since all $\\rho_i = H_1(i, m, B)$ depend on the commitment list $B$, changing any commitment changes $B$, which changes ALL binding values for ALL participants unpredictably.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does binding break the linear algebra required by Wagner\'s algorithm?',
    options: [
      'It makes the math slower',
      'Sessions become entangled - changing anything in one session changes everything unpredictably',
      'It uses a different hash function',
      'It increases the signature size',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: "Wagner's algorithm needs independent challenges across sessions that can be linearly combined. Binding makes sessions entangled: any change propagates unpredictably through the hash function.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the "binding cascade," what is the correct chain of effects when an adversary changes a commitment?',
    options: [
      'Challenge changes directly',
      'Commitment change -> $B$ changes -> all $\\rho_i$ change -> all $R_i$ change -> $R$ changes -> $c$ changes unpredictably',
      'Only the final signature changes',
      'The secret key is revealed',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The cascade: (1) Commitment changes (2) $B$ changes (3) ALL $\\rho_i$ change (4) ALL $R_i = D_i + [\\rho_i]E_i$ change (5) $R = \\sum R_i$ changes (6) $c = H_2(R, Y, m)$ changes unpredictably.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What security level does FROST achieve with binding, compared to without?',
    options: [
      'Same security level ($2^{32}$ operations)',
      'From $\\approx 2^{32}$ (attackable) to $\\approx 2^{256}$ (discrete log security)',
      'Slightly better ($2^{64}$ operations)',
      'Worse security but faster signing',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Without binding, Drijvers attack requires only $\\approx 2^{32}$ operations. With binding, security is reduced to the discrete log problem, requiring $\\approx 2^{256}$ operations - cryptographically secure.',
  },
];
