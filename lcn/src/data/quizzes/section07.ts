import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the SUNF game, the adversary wins if:',
    options: [
      'They produce any valid signature',
      'They produce more valid signatures than signing sessions ($k < n$)',
      'They guess the secret key',
      'They break the hash function'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The adversary wins by producing $n$ valid distinct signatures with fewer than $n$ Sign\' queries ($k < n$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The "sequential" restriction in SUNF means:',
    options: [
      'Signatures must be produced in order',
      'Each signing session must complete before starting another',
      'The adversary has limited time',
      'Messages must be sequential numbers'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Sequential means no interleaving - Sign\' must be called before the next Sign, enforced by the state variable.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Oracle Sign() returns:',
    options: [
      'A complete signature',
      'The first message/commitment from the signer',
      'The secret key',
      'A verification result'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Sign() returns the first round output (commitment) and sets up internal state for Sign\'.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In MSUNF compared to SUNF, the adversary outputs:',
    options: [
      'Only messages and signatures',
      'Messages, signatures, and key sets $(L_i, m_i, \\sigma_i)$',
      'Only public keys',
      'Hash collisions'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'MSUNF adds key sets $L_i$ to the output, and verification uses $\\text{KeyAgg}(L_i)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In MSUNF, distinctness is required for:',
    options: [
      'Messages $m_i$',
      'Pairs $(L_i, m_i)$',
      'Key sets $L_i$',
      'Signatures $\\sigma_i$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'MSUNF requires $(L_i, m_i) \\neq (L_j, m_j)$ for $i \\neq j$, not just distinct messages.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In MSUNF, verification uses:',
    options: [
      'The honest party\'s key $pk^*$',
      'The aggregated key $\\text{KeyAgg}(L_i)$',
      'A random public key',
      'All individual keys separately'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'MSUNF verifies against the aggregated key, with requirement that $pk^* \\in L_i$.',
  },
];
