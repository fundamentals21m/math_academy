import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 1: Scales of Notation
 */
export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why did ancient peoples commonly use base 10 for counting?',
    options: [
      'Because 10 is a prime number',
      'Because it was decreed by Egyptian priests',
      'Because they counted using their fingers',
      'Because base 10 is mathematically optimal',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The decimal (base 10) system arose naturally from the habit of counting on fingers. This is why base 10 appears in many unrelated cultures.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'In the Six Weight Problem, what weights allow you to measure any load from 1 to 63 kg?',
    options: [
      '1, 2, 3, 4, 5, 6 kg',
      '1, 3, 9, 27, 81, 243 kg',
      '10, 20, 30, 40, 50, 60 kg',
      '1, 2, 4, 8, 16, 32 kg',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Weights of 1, 2, 4, 8, 16, and 32 kg (powers of 2) allow any integer from 1 to 63 kg to be measured, since every number has a unique binary representation.',
  },
  {
    id: 3,
    type: 'numeric',
    question:
      'What is the number 12 written in binary (base 2)? Enter the decimal value of $(1100)_2$.',
    correctAnswer: 12,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation:
      'In binary, 12 = 8 + 4 = 2³ + 2² = (1100)₂. The Egyptians used this fact when multiplying by 12.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'Why did the Egyptians sometimes use base 7 in their calculations?',
    options: [
      'Seven was considered a lucky number',
      'Seven is a prime number',
      'There are seven palms in a cubit',
      'The week has seven days',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Egyptians used base 7 in some calculations because there are seven palms in a cubit, a standard unit of measurement.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'In the Four Weight Problem, what weights allow measuring up to 40 kg when weights can be placed on either side of the balance?',
    options: [
      '1, 3, 9, 27 kg',
      '1, 2, 4, 8 kg',
      '1, 5, 10, 20 kg',
      '2, 4, 8, 16 kg'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Weights of 1, 3, 9, and 27 kg (powers of 3) work because any integer can be written in balanced ternary with digits -1, 0, or 1. Placing a weight on the same side as the load corresponds to -1.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      "Where does binary notation appear in ancient Chinese culture (1200 BC)?",
    options: [
      'In astronomical calculations',
      'In the Book of Changes (I Ching) divination system',
      'In trade and commerce records',
      'In architectural measurements',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "The binary scale appears in the Chinese Book of Changes (I Ching), where six-place binary numbers represent concepts. The digit 1 was associated with 'yang' (male) and 0 with 'yin' (female).",
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'In the Game of Nim, what is the winning strategy when it is your turn?',
    options: [
      'Make each column of the binary representation sum to an even number',
      'Always take all matches from the largest pile',
      'Always take exactly one match',
      'Leave an equal number of matches in each pile',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The winning strategy is to arrange it so that each column of the binary representations sums to an even number. This is equivalent to making the XOR of all pile sizes equal to zero.',
  },
  {
    id: 8,
    type: 'numeric',
    question:
      'What is the maximum total weight (in kg) you can measure with weights of 1, 2, 4, 8, 16, and 32 kg?',
    correctAnswer: 63,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation:
      'The maximum is 1 + 2 + 4 + 8 + 16 + 32 = 63 kg, achieved when all six binary digits are 1, giving (111111)₂ = 63.',
  },
];
