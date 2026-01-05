import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Lenstra\'s ECM (Elliptic Curve Method) is used for:',
    options: [
      'Primality testing',
      'Integer factorization',
      'Discrete logarithms',
      'Key generation'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'ECM is a factorization algorithm that finds small to medium factors efficiently.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'ECM\'s running time depends primarily on:',
    options: [
      'The size of $n$ being factored',
      'The size of the smallest prime factor',
      'The number of curves tried',
      'The field characteristic'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Unlike QS/NFS, ECM\'s complexity depends on the factor size, not $n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'ECM generalizes which classical factoring method?',
    options: [
      'Trial division',
      'Fermat\'s method',
      'Pollard\'s $p-1$ method',
      'Quadratic sieve'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'ECM generalizes $p-1$ by using elliptic curve groups instead of $(\\mathbb{Z}/p\\mathbb{Z})^*$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'ECM finds a factor when:',
    options: [
      'A point has infinite order',
      'A GCD computation yields a non-trivial factor',
      'The curve is supersingular',
      'The group order equals $p$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When computing $MP$ fails due to non-invertible denominator, GCD reveals a factor.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What form of elliptic curves, named after a mathematician, is often used in ECM for efficiency?',
    correctAnswer: 'Montgomery',
    difficulty: 'hard',
    explanation: 'Montgomery curves allow faster point operations using only x-coordinates.',
  },
];
