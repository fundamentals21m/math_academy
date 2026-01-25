import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.25 prove?',
    options: [
      'The greater base implies the greater included angle',
      'The greater angle implies the greater base',
      'Equal bases imply equal angles',
      'All angles in an equilateral triangle are equal'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'I.25: If two triangles have two pairs of equal sides but unequal bases, the greater base is opposite the greater included angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What proof technique is used in I.25?',
    options: [
      'Direct proof',
      'Superposition',
      'Proof by cases and contradiction',
      'Exhaustion',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'I.25 considers cases (angle equal, angle less) and derives contradictions using I.4 and I.24.',
  },
];
