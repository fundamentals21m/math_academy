import type { QuizQuestion } from './types';

export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition II.9 states that (a+x)² + (a-x)² equals:',
    options: [
      '(a+x)(a-x)',
      '4ax',
      '2a² + 2x²',
      '2a² - 2x²',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'II.9 proves that when a line is cut into equal and unequal parts, the sum of squares on unequal parts equals twice the square on the half plus twice the square on the difference.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many times is the Pythagorean theorem (I.47) used in the proof of II.9?',
    options: [
      'Once',
      'Three times',
      'Twice',
      'Four times',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The proof of II.9 applies the Pythagorean theorem three times to different right triangles constructed in the proof.',
  },
];
