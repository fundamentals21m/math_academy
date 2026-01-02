import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 30: The Law of Quadratic Reciprocity
 */
export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What geometric construction did Gauss discover as a teenager?',
    options: [
      'Trisecting an angle with ruler and compass',
      'The regular 17-gon with ruler and compass',
      'Squaring the circle with ruler and compass',
      'Doubling the cube with ruler and compass',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Gauss was inspired to become a mathematician by discovering a ruler and compass construction for the regular 17-gon when he was only a teenager.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In what year did Gauss publish the Disquisitiones Arithmeticae?',
    options: ['1777', '1801', '1807', '1855'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "Gauss's monumental number theory book Disquisitiones Arithmeticae appeared in 1801. It included the first proof of the Law of Quadratic Reciprocity.",
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the Legendre symbol (n/p) equal when n is a quadratic residue mod p?',
    options: ['0', '1', '-1', 'p'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Legendre symbol (n/p) equals 1 when n is a quadratic residue modulo p (meaning n ≡ r² (mod p) for some r), and -1 when n is a quadratic non-residue.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to the Law of Quadratic Reciprocity, when are (p/q) and (q/p) different?',
    options: [
      'When both p and q are congruent to 1 mod 4',
      'When both p and q are congruent to 3 mod 4',
      'When p + q is even',
      'When p × q is a perfect square',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The Law of Quadratic Reciprocity states that (p/q)(q/p) = (-1)^((p-1)(q-1)/4). The product is -1 (meaning the symbols are opposite) if and only if both p ≡ 3 (mod 4) and q ≡ 3 (mod 4).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How many different proofs of Quadratic Reciprocity did Gauss give?',
    options: ['One', 'Two', 'Six', 'Twelve'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Gauss gave six different proofs of the Law of Quadratic Reciprocity. Today, over 200 different proofs are known.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "What astronomical achievement led to Gauss's appointment at Göttingen?",
    options: [
      'Predicting the return of Halley\'s Comet',
      'Calculating the position of the asteroid Ceres',
      'Discovering the planet Neptune',
      'Mapping the Moon\'s surface',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'In 1807, subsequent to his calculation of the position of the asteroid Ceres, Gauss was appointed director of the observatory at Göttingen.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "What is Euler's criterion for computing the Legendre symbol?",
    options: [
      'n^p ≡ (n/p) (mod p)',
      'n^(p-1)/2 ≡ (n/p) (mod p)',
      'n^(p+1)/2 ≡ (n/p) (mod p)',
      'n^2 ≡ (n/p) (mod p)',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      "Euler's criterion states that n^((p-1)/2) ≡ (n/p) (mod p). This follows from Fermat's Little Theorem and provides a computational method for the Legendre symbol.",
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What did Gauss call the Law of Quadratic Reciprocity?',
    options: [
      'The fundamental theorem',
      'The golden theorem (theorema aureum)',
      'The prime theorem',
      'The reciprocal law',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Gauss called the Law of Quadratic Reciprocity the "theorema aureum" (golden theorem) and considered it one of the most beautiful results in number theory.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What unit of measure is named after Gauss?',
    options: [
      'A unit of gravitational force',
      'A unit of magnetic intensity',
      'A unit of electrical resistance',
      'A unit of light wavelength',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The gauss is a unit of measure denoting magnetic intensity, named after Gauss for his pioneering work in electromagnetism.',
  },
];
