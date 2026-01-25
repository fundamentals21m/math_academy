import type { QuizQuestion } from './types';

export const section119Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What makes Definition V.5 the cornerstone of Eudoxus\'s theory of proportion?',
    options: [
      'It requires ratios to be expressed as fractions',
      'It only works for whole numbers',
      'It depends on finding a common measure',
      'It defines ratio equality through equimultiple comparisons, handling incommensurable magnitudes',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Definition V.5 defines when A:B = C:D by requiring that for ALL positive integers m, n, the comparison of mA vs nB matches mC vs nD. This works even when magnitudes have no common measure.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does Definition V.4 (the Archimedean property) guarantee?',
    options: [
      'That all magnitudes are commensurable',
      'That ratios can be expressed as decimals',
      'That magnitudes can exceed each other when multiplied sufficiently',
      'That circles can be squared'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Definition V.4 states that magnitudes have a ratio if one can be multiplied to exceed the other. This excludes infinitesimals and infinities from the theory.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What transformation does "alternando" (Definition V.12) describe?',
    options: [
      'If A:B = C:D, then A:C = B:D',
      'If A:B = C:D, then (A+B):B = (C+D):D',
      'If A:B = C:D, then A-B:B = C-D:D',
      'If A:B = C:D, then B:A = D:C',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Alternando swaps the middle terms: from A:B = C:D, we get A:C = B:D (antecedent to antecedent, consequent to consequent).',
  },
];
