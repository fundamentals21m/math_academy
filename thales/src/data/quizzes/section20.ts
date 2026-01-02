import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 20: Mathematics in China and India
 */
export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What method for solving systems of linear equations appears in the Chinese "Arithmetic in Nine Sections"?',
    options: [
      'Newton\'s method',
      'Gaussian elimination',
      'The quadratic formula',
      'Completing the square',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Chapter 8 of the Arithmetic in Nine Sections (before 200 AD) shows how to solve n linear equations in n unknowns using a method essentially the same as Gaussian elimination—about 1800 years before Gauss!',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is special about the Lo Shu magic square from ancient China?',
    options: [
      'All numbers are prime',
      'All rows, columns, and diagonals sum to the same value',
      'It contains the first nine square numbers',
      'It encodes the value of π',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Lo Shu magic square has the property that all rows, columns, and both diagonals sum to 15. According to legend, it was brought to humankind on the back of a tortoise from the River Lo.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who was the first mathematician to give systematic rules for working with zero and negative numbers?',
    options: [
      'Aryabhata',
      'Brahmagupta',
      'Bhaskara',
      'Diophantus',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Brahmagupta (b. 598 AD) was the first to give a systematic presentation of rules for working with zero and negative numbers in his Brahmasphuita Siddhanta, including rules for signs in division.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is Brahmagupta\'s formula used to calculate?',
    options: [
      'The volume of a sphere',
      'The area of a cyclic quadrilateral',
      'The roots of a cubic equation',
      'The circumference of an ellipse',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Brahmagupta\'s formula gives the area of a cyclic quadrilateral with sides a, b, c, d as √((s-a)(s-b)(s-c)(s-d)), where s = (a+b+c+d)/2. This generalizes Heron\'s formula for triangles.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which Indian mathematician gave trigonometry its modern form by defining sin A = (chord 2A)/2?',
    options: [
      'Aryabhata',
      'Brahmagupta',
      'Mahavira',
      'Bhaskara',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Aryabhata (b. 476 AD) was one of the first to use the sine function instead of chords, defining sin A = (chord 2A)/2. This simplified the addition formulas and gave trigonometry its modern form.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What unique feature distinguished Indian mathematical texts from Greek ones?',
    options: [
      'They were written in hieroglyphics',
      'They contained no proofs',
      'They were written in verse',
      'They used Roman numerals',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Unlike the ancient Greeks, Indian mathematicians wrote their mathematics books in verse! For example, Bhaskara posed algebra problems as poetic riddles about bees, camels, and lotus flowers.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What did Bhaskara claim was the value of a/0 (a number divided by zero)?',
    options: [
      '0',
      '1',
      'undefined',
      'infinity',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Bhaskara (1114–1185) declared that a/0 = ∞ (infinity). While this is not quite correct by modern standards, it shows the Indian mathematicians were grappling with the concept of division by zero.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Chu Shih Chieh\'s "Precious Mirror of the Four Elements" (1303) contains what mathematical object, 350 years before Pascal?',
    options: [
      'The quadratic formula',
      'Pascal\'s Triangle',
      'The Fibonacci sequence',
      'The golden ratio',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Chu Shih Chieh gave Pascal\'s Triangle in his 1303 work, about 350 years before Pascal rediscovered it in 1653. The triangle was also known in India.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'The Chinese Remainder Theorem, originating from Sun Tsu\'s problem (400 AD), is fundamental to what modern field?',
    options: [
      'Geometry',
      'Calculus',
      'Cryptography and number theory',
      'Topology',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The Chinese Remainder Theorem, which allows finding numbers with specified remainders when divided by different moduli, is fundamental to modern number theory and is extensively used in cryptography (e.g., RSA encryption).',
  },
];
