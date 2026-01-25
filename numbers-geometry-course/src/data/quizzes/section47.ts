import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 47: Arithmetic mod n
 */
export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does a ≡ b (mod n) mean?',
    options: [
      'a equals b',
      'a times b equals n',
      'a is less than b',
      'n divides a - b'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The congruence a ≡ b (mod n) means that n divides a - b, or equivalently, a and b have the same remainder when divided by n.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is true?',
    options: [
      '15 ≡ 3 (mod 5)',
      '15 ≡ 2 (mod 5)',
      '15 ≡ 5 (mod 5)',
      '15 ≡ 0 (mod 5)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      '15 = 3 × 5 + 0, so 15 ≡ 0 (mod 5). Also, 15 ≡ 5 (mod 5) is equivalent, but 0 is the standard representative.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If a ≡ 3 (mod 7) and b ≡ 5 (mod 7), what is a + b mod 7?',
    options: [
      '1',
      '0',
      '8',
      '15',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      '3 + 5 = 8 ≡ 1 (mod 7). We can add congruences.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'Congruence mod n is an equivalence relation. Which property states that if a ≡ b and b ≡ c, then a ≡ c?',
    options: [
      'Reflexive',
      'Transitive',
      'Symmetric',
      'Commutative',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Transitivity is the property that allows us to "chain" congruences together.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many residue classes are there mod 12?',
    correctAnswer: 12,
    numericRange: { min: 12, max: 12, precision: 0 },
    difficulty: 'easy',
    explanation:
      'There are exactly n residue classes mod n, namely [0], [1], ..., [n-1]. So mod 12 has 12 classes.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If a ≡ 2 (mod 5), what is a² mod 5?',
    options: ['0', '2', '4', '9'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Since a ≡ 2, we have a² ≡ 2² = 4 (mod 5). We can compute with representatives.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is -7 mod 10 (as a number from 0 to 9)?',
    options: [
      '7',
      '3',
      '-7',
      '-3',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      '-7 = -1 × 10 + 3, so -7 ≡ 3 (mod 10). The standard representative is 3.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Who introduced the congruence notation a ≡ b (mod n)?',
    options: ['Euler', 'Fermat', 'Gauss', 'Legendre'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Carl Friedrich Gauss introduced this notation in his Disquisitiones Arithmeticae (1801).',
  },
];
