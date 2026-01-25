import type { QuizQuestion } from './types';

export const section129Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.10 prove (converse of V.8)?',
    options: [
      'If A:C > B:C, then A > B',
      'Greater ratios are meaningless',
      'Ratios cannot be compared',
      'All ratios are equal',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'V.10 proves the converse of V.8: if the ratio A:C exceeds B:C, then A exceeds B.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What complete characterization do V.7-V.10 establish?',
    options: [
      'That ratios are undefined',
      'A complete correspondence between magnitude ordering and ratio ordering',
      'That all magnitudes are commensurable',
      'That ratios only work for integers',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'V.7-V.10 establish: A = B ⟺ A:C = B:C, A > B ⟺ A:C > B:C, A < B ⟺ A:C < B:C. Ratios faithfully reflect magnitude ordering.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If we know 12:5 > 8:5, what can we conclude using V.10?',
    options: [
      '12 < 8',
      '12 = 8',
      '12 > 8',
      'We cannot conclude anything',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By V.10, if A:C > B:C, then A > B. So 12:5 > 8:5 implies 12 > 8.',
  },
];
