import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Euler call the horizontal distance from the origin to a point on the axis?',
    options: ['Ordinate', 'Abscissa', 'Coordinate', 'Applicata'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Euler uses the term "abscissa" (plural: abscissae) for the horizontal distance, corresponding to our modern $x$-coordinate.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Euler, what is a "continuous" curve?',
    options: [
      'A curve that has no breaks or gaps',
      'A curve that extends infinitely in both directions',
      'A curve that passes through the origin',
      'A curve whose entire nature is expressed by a single function',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Euler defines a continuous curve as one whose entire nature is expressed by a single function of $x$. A discontinuous curve is composed of portions defined by different functions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Euler\'s framework, where is the ordinate drawn when $y$ is negative?',
    options: [
      'Below the axis',
      'Above the axis',
      'To the left of the origin',
      'On the axis itself',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $y$ is positive, the ordinate $PM$ is drawn above the axis. When $y$ is negative, it is drawn below the axis.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What modern coordinate corresponds to Euler\'s "ordinate" or "applicata"?',
    correctAnswer: 'y',
    difficulty: 'easy',
    explanation: 'Euler\'s "ordinate" or "applicata" corresponds to our modern $y$-coordinate, the perpendicular distance from the axis.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the fundamental insight Euler establishes about functions and curves?',
    options: [
      'Only polynomial functions can define curves',
      'Curves can only be drawn mechanically, not analytically',
      'Every function defines a curve, and every curve can be expressed as an equation',
      'Functions and curves are unrelated mathematical objects'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Euler establishes the two-way correspondence: every function $y = f(x)$ determines a unique curve, and every curve can be expressed as an equation relating $x$ and $y$.',
  },
];
