import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The imaginary unit $i$ satisfies:',
    options: [
      '$i^2 = -1$',
      '$i = -1$',
      '$i^2 = 1$',
      '$i = \\sqrt{1}$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, $i^2 = -1$, so $i = \\sqrt{-1}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A complex number $z = a + bi$ has real part:',
    options: [
      '$b$',
      '$a$',
      '$i$',
      '$a + b$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Real part is $a$, imaginary part is $b$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The complex conjugate of $z = a + bi$ is:',
    options: [
      '$-a - bi$',
      '$-a + bi$',
      '$a - bi$',
      '$b + ai$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Conjugate $\\bar{z} = a - bi$ (negate imaginary part).',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $z = 3 + 4i$, what is $|z|$ (the modulus)?',
    correctAnswer: 5,
    numericRange: { min: 4, max: 6, precision: 0 },
    difficulty: 'easy',
    explanation: '$|z| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The complex numbers form a:',
    options: [
      'Group under addition only',
      'Vector space only',
      'Ring but not a field',
      'Field (with addition and multiplication)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Complex numbers are a field (all nonzero elements have multiplicative inverses).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '$(a + bi)(c + di) = ?$',
    options: [
      '$(ac - bd) + (ad + bc)i$',
      '$ac + bdi$',
      '$(ac + bd) + (ad + bc)i$',
      '$ac + bd + (ad - bc)i$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'FOIL and use $i^2 = -1$: real part $ac - bd$, imaginary part $ad + bc$.',
  },
];
