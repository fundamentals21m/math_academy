import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does $\\text{negl}(\\lambda)$ denote?',
    options: [
      'The set of polynomial functions',
      'The set of negligible functions',
      'The set of exponential functions',
      'The security parameter'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\text{negl}(\\lambda)$ denotes the set of negligible functions in the security parameter $\\lambda$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A function $f$ is negligible if:',
    options: [
      '$f(\\lambda)$ is polynomial in $\\lambda$',
      '$f(\\lambda)^{-1}$ is polynomial in $\\lambda$',
      '$f(\\lambda)^{-1}$ is NOT polynomial in $\\lambda$',
      '$f(\\lambda)$ is constant'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A negligible function decreases faster than the inverse of any polynomial, so $f(\\lambda)^{-1} \\notin \\text{poly}(\\lambda)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does PPT stand for in cryptography?',
    options: [
      'Polynomial Prime Testing',
      'Probabilistic Polynomial-Time',
      'Provably Perfect Theorem',
      'Public Parameter Transfer'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'PPT stands for Probabilistic Polynomial-Time, referring to efficient randomized algorithms.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In additive notation for a cyclic group $\\mathbb{G}$, scalar multiplication $n \\cdot G$ represents:',
    options: [
      'Raising $G$ to the power $n$',
      'Adding $G$ to itself $n$ times',
      'Multiplying $G$ by $n$ as a scalar',
      'Computing $G \\mod n$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In additive notation, $n \\cdot G$ means $G + G + \\ldots + G$ ($n$ times), equivalent to $G^n$ in multiplicative notation.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the identity element in additive group notation?',
    correctAnswer: '0',
    difficulty: 'easy',
    explanation: 'In additive notation, the identity element is $0$ (compared to $1$ in multiplicative notation).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $p$ is a $\\lambda$-bit prime, approximately how large is $p$?',
    options: [
      '$O(\\lambda)$',
      '$O(\\lambda^2)$',
      '$O(2^\\lambda)$',
      '$O(\\log \\lambda)$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A $\\lambda$-bit prime is approximately $2^\\lambda$ in magnitude, which is exponential in $\\lambda$.',
  },
];
