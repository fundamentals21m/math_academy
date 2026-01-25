import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What problem does public-key cryptography solve?',
    options: [
      'Making data smaller for storage',
      'Speeding up calculations',
      'Enabling secure communication without pre-shared secrets',
      'Generating random numbers',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Public-key cryptography allows Alice and Bob to communicate securely without having to meet first to exchange a secret key.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why did Bitcoin choose elliptic curves over RSA?',
    options: [
      'RSA was invented after Bitcoin',
      'Elliptic curves provide equivalent security with much smaller keys',
      'RSA cannot be used for signatures',
      'Elliptic curves are simpler to understand'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A 256-bit ECC key provides roughly the same security as a 3072-bit RSA key, resulting in smaller transactions and signatures.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a "one-way function" in cryptography?',
    options: [
      'A function that can only be computed once',
      'A function that always returns the same value',
      'A function that cannot be computed by computers',
      'A function easy to compute but hard to reverse',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A one-way function is easy to compute in one direction but computationally infeasible to reverse without special knowledge.',
  },
  {
    id: 4,
    type: 'text',
    question: 'In secp256k1, the "256" refers to what?',
    correctAnswer: '256',
    difficulty: 'easy',
    explanation: 'The "256" in secp256k1 refers to the bit length of the prime field—the curve operates with 256-bit numbers.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the Elliptic Curve Discrete Logarithm Problem (ECDLP)?',
    options: [
      'Given $Q = dG$, finding the scalar $d
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The ECDLP is: given points $G$ and $Q = dG$, find the scalar $d$. This is believed to be computationally infeasible for large $d$.',
  },
      'Finding the equation of an elliptic curve',
      'Factoring the curve\\'s prime',
      'Computing the square root of a point',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The ECDLP is: given points $G$ and $Q = dG$, find the scalar $d$. This is believed to be computationally infeasible for large $d$.',
  },
];
