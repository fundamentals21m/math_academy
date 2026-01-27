import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which notation for calculus do we primarily use today, Newton\'s or Leibniz\'s?',
    options: [
      'Newton\'s dot notation exclusively',
      'A completely different notation',
      'Leibniz\'s $\\frac{dy}{dx}$ notation',
      'Both equally'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Leibniz\'s notation ($\\frac{dy}{dx}$, $\\int$) became standard because it better suggests the operations being performed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What symbol did Leibniz introduce for integration?',
    options: [
      '$\\Sigma$',
      '$\\partial$',
      '$\\Delta$',
      '$\\int$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Leibniz introduced the integral sign $\\int$, an elongated S for "summa" (sum).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Leibniz dreamed of creating a universal language of logic called:',
    options: [
      'Characteristica universalis',
      'Mathesis universalis',
      'Lingua mathematica',
      'Ars combinatoria'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The characteristica universalis was Leibniz\'s vision of a universal formal language for all reasoning.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What number system did Leibniz develop that is fundamental to computers?',
    options: [
      'Decimal',
      'Binary',
      'Hexadecimal',
      'Octal'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Leibniz developed the binary (base-2) number system, using only 0 and 1, now fundamental to computing.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The bitter priority dispute between Newton and Leibniz concerned:',
    options: [
      'The discovery of gravity',
      'The laws of motion',
      'The invention of calculus',
      'The theory of light'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Both independently developed calculus, leading to a bitter dispute about who deserved credit.',
  },
  {
    id: 6,
    type: 'text',
    question: 'Leibniz\'s philosophy proposed that the universe consists of simple substances called what?',
    correctAnswer: 'monads',
    difficulty: 'hard',
    explanation: 'Leibniz\'s Monadology describes the universe as composed of simple, indivisible substances called monads.',
  },
];
