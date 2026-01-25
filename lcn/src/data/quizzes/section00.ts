import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does $\\text{negl}(\\lambda)$ denote?',
    options: [
      'The set of negligible functions',
      'The set of polynomial functions',
      'The set of exponential functions',
      'The security parameter'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\text{negl}(\\lambda)$ denotes the set of negligible functions in the security parameter $\\lambda$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A function $f$ is negligible if:',
    options: [
      '$f(\\lambda)$ is polynomial in $\\lambda
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A negligible function decreases faster than the inverse of any polynomial, so $f(\\lambda)^{-1} \\notin \\text{poly}(\\lambda)$.',
  },
      '$f(\\lambda)^{-1}$ is polynomial in $\\lambda
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A negligible function decreases faster than the inverse of any polynomial, so $f(\\lambda)^{-1} \\notin \\text{poly}(\\lambda)$.',
  },
      '$f(\\lambda)^{-1}$ is NOT polynomial in $\\lambda
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A negligible function decreases faster than the inverse of any polynomial, so $f(\\lambda)^{-1} \\notin \\text{poly}(\\lambda)$.',
  },
      '$f(\\lambda)$ is constant',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A negligible function decreases faster than the inverse of any polynomial, so $f(\\lambda)^{-1} \\notin \\text{poly}(\\lambda)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does PPT stand for in cryptography?',
    options: [
      'Polynomial Prime Testing',
      'Provably Perfect Theorem',
      'Public Parameter Transfer',
      'Probabilistic Polynomial-Time',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'PPT stands for Probabilistic Polynomial-Time, referring to efficient randomized algorithms.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In additive notation for a cyclic group $\\mathbb{G}$, scalar multiplication $n \\cdot G$ represents:',
    options: [
      'Adding $G$ to itself $n$ times',
      'Raising $G$ to the power $n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In additive notation, $n \\cdot G$ means $G + G + \\ldots + G$ ($n$ times), equivalent to $G^n$ in multiplicative notation.',
  },
      'Computing $G \\mod n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In additive notation, $n \\cdot G$ means $G + G + \\ldots + G$ ($n$ times), equivalent to $G^n$ in multiplicative notation.',
  },
      'Multiplying $G$ by $n$ as a scalar',
    ],
    correctIndex: 3,
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
      '$O(\\lambda^2)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A $\\lambda$-bit prime is approximately $2^\\lambda$ in magnitude, which is exponential in $\\lambda$.',
  },
      '$O(2^\\lambda)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A $\\lambda$-bit prime is approximately $2^\\lambda$ in magnitude, which is exponential in $\\lambda$.',
  },
      '$O(\\lambda)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A $\\lambda$-bit prime is approximately $2^\\lambda$ in magnitude, which is exponential in $\\lambda$.',
  },
      '$O(\\log \\lambda)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A $\\lambda$-bit prime is approximately $2^\\lambda$ in magnitude, which is exponential in $\\lambda$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A $\\lambda$-bit prime is approximately $2^\\lambda$ in magnitude, which is exponential in $\\lambda$.',
  },
];
