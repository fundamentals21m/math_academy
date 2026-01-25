import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The imaginary unit $i$ satisfies:',
    options: [
      '$i = -1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, $i^2 = -1$, so $i = \\sqrt{-1}$.',
  },
      '$i^2 = -1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, $i^2 = -1$, so $i = \\sqrt{-1}$.',
  },
      '$i^2 = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, $i^2 = -1$, so $i = \\sqrt{-1}$.',
  },
      '$i = \\sqrt{1}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, $i^2 = -1$, so $i = \\sqrt{-1}$.',
  },
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
      '$a
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Real part is $a$, imaginary part is $b$.',
  },
      '$b
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Real part is $a$, imaginary part is $b$.',
  },
      '$i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Real part is $a$, imaginary part is $b$.',
  },
      '$a + b
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Real part is $a$, imaginary part is $b$.',
  },
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
      '$-a - bi
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Conjugate $\\bar{z} = a - bi$ (negate imaginary part).',
  },
      '$-a + bi
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Conjugate $\\bar{z} = a - bi$ (negate imaginary part).',
  },
      '$b + ai
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Conjugate $\\bar{z} = a - bi$ (negate imaginary part).',
  },
      '$a - bi
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Conjugate $\\bar{z} = a - bi$ (negate imaginary part).',
  },
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
      'Field (with addition and multiplication)',
      'Ring but not a field',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Complex numbers are a field (all nonzero elements have multiplicative inverses).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '$(a + bi)(c + di) = ?$',
    options: [
      '$ac + bdi
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'FOIL and use $i^2 = -1$: real part $ac - bd$, imaginary part $ad + bc$.',
  },
      '$(ac + bd) + (ad + bc)i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'FOIL and use $i^2 = -1$: real part $ac - bd$, imaginary part $ad + bc$.',
  },
      '$(ac - bd) + (ad + bc)i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'FOIL and use $i^2 = -1$: real part $ac - bd$, imaginary part $ad + bc$.',
  },
      '$ac + bd + (ad - bc)i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'FOIL and use $i^2 = -1$: real part $ac - bd$, imaginary part $ad + bc$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'FOIL and use $i^2 = -1$: real part $ac - bd$, imaginary part $ad + bc$.',
  },
];
