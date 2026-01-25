import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.44 construct?',
    options: [
      'A square equal to a triangle',
      'A parallelogram on a given line equal to a given triangle with a given angle',
      'A triangle equal to a parallelogram',
      'A rectangle from a parallelogram'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.44: To apply to a given straight line a parallelogram equal to a given triangle in a given angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is "application of areas" that I.44 introduces?',
    options: [
      'Measuring areas with units',
      'Comparing areas of circles and squares',
      'Constructing a parallelogram of given area on a specific line segment',
      'Calculating areas numerically'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Application of areas: constructing a figure of specified area on a given line—a powerful Greek geometric technique.',
  },
];
