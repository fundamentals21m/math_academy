import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many infinite branches can a cubic curve have at most?',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A curve of degree $n$ can have at most $n$ infinite branches. Since a cubic has degree 3, it can have at most 3 infinite branches.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a serpentine cubic?',
    options: [
      'A cubic with no real points',
      'A cubic that crosses the axis multiple times, like an S-curve',
      'A cubic with three branches',
      'A cubic that forms a closed loop'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A serpentine cubic is one that winds back and forth, crossing its axis multiple times, resembling a serpent or S-shape.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What determines the number of infinite branches of a cubic?',
    options: [
      'The constant term',
      'The number of real roots of the leading homogeneous terms',
      'The coefficient of $x$',
      'The location of the origin'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The infinite branches are determined by the highest-degree (homogeneous) terms. The number of real directions at infinity corresponds to real roots.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Can a cubic curve have exactly two infinite branches?',
    options: [
      'Yes, this is common',
      'No, it must have 1 or 3',
      'Only if it has a node',
      'Only for special coefficients'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Yes, a cubic can have 1, 2, or 3 infinite branches depending on the equation. Having exactly 2 is possible and common.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is Newton\'s classification of cubic curves based on?',
    options: [
      'The color of the curve',
      'The number and arrangement of infinite branches and singular points',
      'Who discovered each curve',
      'The year of discovery'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Newton classified cubics based on their infinite branches (parabolic, hyperbolic) and singular points (nodes, cusps), identifying 72+ species.',
  },
];
