import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.44 construct?',
    options: [
      'A parallelogram on a given line equal to a given triangle with a given angle',
      'A square equal to a triangle',
      'A triangle equal to a parallelogram',
      'A rectangle from a parallelogram'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'I.44: To apply to a given straight line a parallelogram equal to a given triangle in a given angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is "application of areas" that I.44 introduces?',
    options: [
      'Measuring areas with units',
      'Constructing a parallelogram of given area on a specific line segment',
      'Comparing areas of circles and squares',
      'Calculating areas numerically'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Application of areas: constructing a figure of specified area on a given line—a powerful Greek geometric technique.',
  },
];
