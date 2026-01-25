import type { QuizQuestion } from './types';

export const section138Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does "convertendo" (V.19) prove?',
    options: [
      'Ratios can be inverted',
      'Ratios cannot be converted',
      'Only equal ratios can be converted',
      'If (A+B):(C+D) = B:D, then (A+B):(C+D) = A:C',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Convertendo: if the ratio of wholes equals the ratio of parts, it also equals the ratio of remainders.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If (A+B):(C+D) = B:D, what can we conclude about A:C?',
    options: [
      'A:C = B:D = (A+B):(C+D)',
      'A:C is different from the other ratios',
      'A:C = 1:1',
      'A:C cannot be determined',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By V.19, if the whole:whole ratio equals the part:part ratio, then the remainder:remainder ratio is also equal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Convertendo is useful when:',
    options: [
      'We want to multiply ratios',
      'We want to add ratios',
      'We know whole and part relationships and want to deduce remainder relationships',
      'We want to find common factors',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Convertendo helps deduce relationships about remainders from known relationships between wholes and parts.',
  },
];
