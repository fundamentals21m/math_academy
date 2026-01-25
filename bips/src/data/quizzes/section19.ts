import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What "dummy stack element" problem does BIP-147 address?',
    options: [
      'CHECKMULTISIG consumes an extra unused element',
      'Empty scripts fail validation',
      'Signatures have trailing zeros',
      'Addresses have extra characters',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'CHECKMULTISIG has a bug requiring an extra dummy element on the stack that isn\'t used.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What must the dummy element be in SegWit according to BIP-147?',
    options: [
      'Any value',
      'The number zero',
      'An empty byte array (null)',
      'A valid signature'
    ],
    correctIndex: 2,
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
      'Transaction malleability',
      'Higher fees',
      'Slower validation',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Anyone could modify the dummy element without invalidating the signature, causing malleability.',
  },
];
