import type { QuizQuestion } from './types';

export const section145Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Book VI Definition 1, what makes two rectilinear figures "similar"?',
    options: [
      'They have equal areas',
      'They have equiangular angles and proportional sides about the equal angles',
      'They have the same number of sides',
      'They can be superimposed exactly'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Similar figures must satisfy two conditions: (1) equiangular (same angles) and (2) the sides about the equal angles are proportional.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does "reciprocally proportional" mean for two figures with sides A, B and C, D?',
    options: [
      'A:C = B:D',
      'A:B = C:D',
      'A:D = C:B (sides are inversely proportional)',
      'All sides are equal'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Reciprocal proportion means the antecedent of one ratio is to the consequent of the other as the antecedent of the second is to the consequent of the first: A:D = C:B.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A line segment is divided in "extreme and mean ratio" when:',
    options: [
      'It is divided into two equal parts',
      'The whole is to the greater part as the greater is to the lesser',
      'The ratio is exactly 2:1',
      'The parts are in ratio 3:1'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Extreme and mean ratio (the golden ratio) occurs when whole:greater = greater:lesser, giving the ratio (1 + sqrt(5))/2.',
  },
];
