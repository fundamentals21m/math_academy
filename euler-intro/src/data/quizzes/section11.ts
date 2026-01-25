import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many asymptotes can a cubic curve have at most?',
    options: [
      '1',
      '2',
      '3',
      '4',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A cubic curve can have at most 3 asymptotes, one for each infinite branch. This is the maximum for any third-degree curve.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Can a cubic curve have a curved asymptote?',
    options: [
      'No, asymptotes are always straight lines',
      'Only if the cubic degenerates',
      'Only in complex coordinates',
      'Yes, it can approach a parabola asymptotically',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Yes! Some cubics have parabolic asymptotes—they approach a parabola rather than a straight line as they extend to infinity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a rectilinear asymptote?',
    options: [
      'An asymptote that is a straight line',
      'An asymptote with positive slope',
      'An asymptote that is perpendicular to the axis',
      'An asymptote that passes through the origin',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A rectilinear asymptote is simply a straight-line asymptote, as opposed to a curved (e.g., parabolic) asymptote.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If a cubic has only one real infinite branch, how many rectilinear asymptotes does it have?',
    options: [
      '1',
      '0',
      '2',
      '3'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Each infinite branch corresponds to one asymptote (rectilinear or curvilinear). One real infinite branch gives one asymptote.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does Euler find asymptotes of higher-degree curves?',
    options: [
      'By graphing and visual inspection',
      'By analyzing the leading terms and their behavior at infinity',
      'By computing derivatives',
      'By numerical approximation'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euler finds asymptotes by examining the dominant terms of the equation as variables approach infinity, extracting the limiting behavior.',
  },
];
