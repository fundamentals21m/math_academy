import type { QuizQuestion } from './types';

export const section131Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.12 prove about proportional magnitudes?',
    options: [
      'They cannot be summed',
      'If A:B = C:D = E:F, then A:B = (A+C+E):(B+D+F)',
      'Sums have different ratios',
      'Only two magnitudes can be proportional'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.12 shows that when multiple ratios are equal, the ratio of the sum of antecedents to the sum of consequents equals the common ratio.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a/b = c/d = e/f = k, what is (a+c+e)/(b+d+f)?',
    options: [
      'k²',
      '3k',
      'k',
      'k/3'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If each ratio equals k, then a = kb, c = kd, e = kf. So (a+c+e) = k(b+d+f), giving ratio k.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'V.12 is useful for proving that similar figures have:',
    options: [
      'Equal areas',
      'Perimeters in the same ratio as corresponding sides',
      'The same shape',
      'Integer dimensions'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In similar figures, corresponding sides are in equal ratios. By V.12, summing all sides (perimeter) maintains that ratio.',
  },
];
