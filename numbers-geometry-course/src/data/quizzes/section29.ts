import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 29: Pythagorean Triples
 */
export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a Pythagorean triple?',
    options: [
      'Three natural numbers $(a, b, c)$ with $a^2 + b^2 = c^2
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'A Pythagorean triple is a triple (a, b, c) of natural numbers satisfying a² + b² = c². By the converse Pythagorean theorem, these are also the side lengths of right-angled triangles.',
  },
      'Any three consecutive integers',
      'Three prime numbers',
      'The sides of any triangle',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'A Pythagorean triple is a triple (a, b, c) of natural numbers satisfying a² + b² = c². By the converse Pythagorean theorem, these are also the side lengths of right-angled triangles.',
  },
  {
    id: 2,
    type: 'numeric',
    question:
      'Approximately what year B.C. does the Plimpton 322 tablet date from?',
    correctAnswer: 1800,
    numericRange: { min: 1700, max: 1900, precision: 0 },
    difficulty: 'medium',
    explanation:
      'The Plimpton 322 tablet dates from around 1800 B.C. It is one of the most astonishing documents in the history of mathematics, containing a list of Pythagorean triples.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Babylonians used what number base for their arithmetic?',
    options: [
      'Base 2',
      'Base 60',
      'Base 10',
      'Base 12',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Babylonians wrote their numbers in base 60 (sexagesimal). This is why multiples of 60 appear as "round" numbers in the Plimpton 322 tablet.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which is the smallest Pythagorean triple?',
    options: [
      '(1, 2, 3)',
      '(3, 4, 5)',
      '(2, 3, 4)',
      '(5, 12, 13)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      '(3, 4, 5) is the smallest Pythagorean triple: 3² + 4² = 9 + 16 = 25 = 5². (1, 2, 3) does not work since 1 + 4 ≠ 9.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $(3, 4, 5)$ is a Pythagorean triple, which of these is also?',
    options: [
      '(4, 5, 6)',
      '(3, 5, 7)',
      '(6, 8, 10)',
      '(9, 16, 25)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'If (a, b, c) is a Pythagorean triple, then so is (ka, kb, kc) for any natural number k. Here (6, 8, 10) = 2 × (3, 4, 5), so 36 + 64 = 100.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does it mean for a Pythagorean triple to be "primitive"?',
    options: [
      'It was known to ancient people',
      'The numbers are all prime',
      'The numbers a, b, c have no common divisor > 1',
      'The triple contains an odd number',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A Pythagorean triple (a, b, c) is primitive if gcd(a, b, c) = 1, meaning the three numbers share no common divisor greater than 1. Every triple is a multiple of a unique primitive triple.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why do multiples of a Pythagorean triple represent the "same" triangle?',
    options: [
      'They have the same angles',
      'They have the same perimeter',
      'Multiplication changes nothing',
      'They are congruent',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Multiplying all sides by a constant k changes the size but not the shape of the triangle. The angles remain the same—it\'s just a different choice of unit length. This is why we focus on primitive triples.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Who discovered the meaning of the numbers on Plimpton 322?',
    options: [
      'Pythagoras',
      'Euclid',
      'Diophantus',
      'Neugebauer and Sachs',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Otto Neugebauer and Abraham Sachs discovered the meaning of the pairs (b, c) on Plimpton 322 in 1945. They showed that c² - b² is always a perfect square, revealing the tablet as a list of Pythagorean triples.',
  },
];
