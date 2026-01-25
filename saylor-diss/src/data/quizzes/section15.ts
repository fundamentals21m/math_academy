import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does sensitivity analysis reveal about the model?',
    options: [
      'All parameters are equally important',
      'Some parameters have much larger effects than others',
      'Parameters don\\\'t matter at all',
      'The model is completely random',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Sensitivity analysis shows which parameters have the largest impact on system behavior.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which parameter tends to be most critical for stability?',
    options: [
      'The exact population size',
      'The time of year',
      'The speed of expectation adjustment',
      'The color of the executive\\\'s clothes',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'How quickly expectations adjust strongly affects whether the system remains stable.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens when expectation adjustment is too fast?',
    options: [
      'Greater stability',
      'No effect',
      'Immediate prosperity',
      'Oscillations and potential instability',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fast expectation adjustment can cause overshooting and instability.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does parameter sensitivity imply for real political systems?',
    options: [
      'Small changes in key variables can have large effects',
      'All policies have equal effect',
      'Nothing can affect outcomes',
      'Only military strength matters',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Sensitivity analysis shows that small changes in key variables can produce large effects.',
  },
];
