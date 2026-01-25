import type { QuizQuestion } from './types';

export const section123Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the key insight of Proposition V.4?',
    options: [
      'Only specific multiples work in proportions',
      'Proportions require equal magnitudes',
      'The equimultiple test works for ANY choice of m, n if A:B = C:D',
      'Different multipliers give different results',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'V.4 states that for A:B = C:D, the comparison mA vs nB matches mC vs nD for ALL positive integers m, n. This is essentially Definition V.5 restated as a theorem.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How would you use V.4 to verify that two ratios are equal?',
    options: [
      'Check one pair of multipliers',
      'Show that for all m, n: mA ≷ nB ⟺ mC ≷ nD',
      'Divide the magnitudes',
      'Find the common measure',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'To prove A:B = C:D, V.4 says we must verify that any equimultiple comparison of the first pair matches the second pair.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'V.4 is sometimes called the "fundamental property of proportions" because:',
    options: [
      'It makes precise what equal ratios means in terms of all possible comparisons',
      'It was proved first',
      'Eudoxus called it that',
      'It only applies to fundamental magnitudes',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'V.4 characterizes ratio equality through the behavior under all multiplier tests, making it the operational definition of when ratios are equal.',
  },
];
