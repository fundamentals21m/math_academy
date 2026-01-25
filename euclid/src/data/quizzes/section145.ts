import type { QuizQuestion } from './types';

export const section145Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Book VI Definition 1, what makes two rectilinear figures "similar"?',
    options: [
      'They have equal areas',
      'They can be superimposed exactly',
      'They have the same number of sides',
      'They have equiangular angles and proportional sides about the equal angles'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Similar figures must satisfy two conditions: (1) equiangular (same angles) and (2) the sides about the equal angles are proportional.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does "reciprocally proportional" mean for two figures with sides A, B and C, D?',
    options: [
      'A:D = C:B (sides are inversely proportional)',
      'A:B = C:D',
      'A:C = B:D',
      'All sides are equal'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Reciprocal proportion means the antecedent of one ratio is to the consequent of the other as the antecedent of the second is to the consequent of the first: A:D = C:B.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A line segment is divided in "extreme and mean ratio" when:',
    options: [
      'It is divided into two equal parts',
      'The ratio is exactly 2:1',
      'The whole is to the greater part as the greater is to the lesser',
      'The parts are in ratio 3:1',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Extreme and mean ratio (the golden ratio) occurs when whole:greater = greater:lesser, giving the ratio (1 + sqrt(5))/2.',
  },
];
