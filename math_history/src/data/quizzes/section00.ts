import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Pythagorean theorem states that in a right triangle with legs $a$ and $b$ and hypotenuse $c$:',
    options: [
      '$a + b = c$',
      '$a^2 + b^2 = c^2$',
      '$a^2 - b^2 = c^2$',
      '$ab = c^2$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Pythagorean theorem states that the sum of the squares of the two legs equals the square of the hypotenuse: $a^2 + b^2 = c^2$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is a Pythagorean triple?',
    options: [
      '$(2, 3, 4)$',
      '$(3, 4, 5)$',
      '$(4, 5, 6)$',
      '$(5, 6, 7)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(3, 4, 5)$ is a Pythagorean triple because $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If a right triangle has legs of length 5 and 12, what is the length of the hypotenuse?',
    correctAnswer: 13,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Using the Pythagorean theorem: $c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Pythagorean theorem was known before Pythagoras by which civilization?',
    options: [
      'The Romans',
      'The Babylonians',
      'The Egyptians',
      'The Persians'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Babylonian clay tablets from around 1800 BCE show knowledge of Pythagorean triples, predating Pythagoras by over 1000 years.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Calculate $8^2 + 15^2$. This is the square of what number?',
    correctAnswer: 17,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$8^2 + 15^2 = 64 + 225 = 289 = 17^2$. So $(8, 15, 17)$ is a Pythagorean triple.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What philosophical belief did the Pythagoreans hold about mathematics?',
    options: [
      '"Mathematics is a tool for trade"',
      '"All is number"',
      '"Geometry is merely decoration"',
      '"Numbers are dangerous"'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Pythagoreans believed "all is number"—that the universe could be understood through mathematics.',
  },
];
