import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What "dummy stack element" problem does BIP-147 address?',
    options: [
      'Empty scripts fail validation',
      'Signatures have trailing zeros',
      'CHECKMULTISIG consumes an extra unused element',
      'Addresses have extra characters',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'CHECKMULTISIG has a bug requiring an extra dummy element on the stack that isn\'t used.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What must the dummy element be in SegWit according to BIP-147?',
    options: [
      'Any value',
      'An empty byte array (null)',
      'The number zero',
      'A valid signature',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-147 requires the dummy element to be a null/empty element for SegWit scripts.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-147 is also known as the NULLDUMMY rule or _____ fix.',
    correctAnswer: 'malleability',
    difficulty: 'medium',
    explanation: 'BIP-147 is a malleability fix, preventing third parties from changing the dummy element.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Before BIP-147, the dummy element was a source of:',
    options: [
      'Network partitions',
      'Higher fees',
      'Slower validation',
      'Transaction malleability',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Anyone could modify the dummy element without invalidating the signature, causing malleability.',
  },
];
