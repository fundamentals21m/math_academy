import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What problem does public key cryptography solve?',
    options: [
      'Making encryption faster',
      'Key distribution without a secure channel',
      'Reducing key size',
      'Preventing brute force attacks'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Public key crypto allows secure communication without pre-shared secrets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a public key system, the encryption key is:',
    options: [
      'Kept secret by the sender',
      'Kept secret by the receiver',
      'Made public',
      'Shared between sender and receiver'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The public key is published; anyone can encrypt. Only the private key holder can decrypt.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A trapdoor function is:',
    options: [
      'Easy to compute in both directions',
      'Hard to compute in both directions',
      'Easy to compute, hard to invert without secret information',
      'Impossible to compute'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Trapdoor functions are easy to compute but hard to invert unless you know the trapdoor (secret).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who published the first public key cryptography paper?',
    options: [
      'Rivest, Shamir, and Adleman',
      'Diffie and Hellman',
      'Shannon',
      'Turing'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Diffie and Hellman published "New Directions in Cryptography" in 1976.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What type of cryptography uses a pair of keys: one public and one private?',
    correctAnswer: 'asymmetric',
    difficulty: 'easy',
    explanation: 'Asymmetric (or public key) cryptography uses key pairs, unlike symmetric cryptography which uses one shared key.',
  },
];
