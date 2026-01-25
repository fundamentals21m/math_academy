import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The modulus of $z = a + bi$ is:',
    options: [
      '$a + b
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$|z| = \\sqrt{a^2 + b^2}$ is the distance from origin in the complex plane.',
  },
      '$|a| + |b|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$|z| = \\sqrt{a^2 + b^2}$ is the distance from origin in the complex plane.',
  },
      '$\\sqrt{a^2 + b^2}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$|z| = \\sqrt{a^2 + b^2}$ is the distance from origin in the complex plane.',
  },
      '$a^2 + b^2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$|z| = \\sqrt{a^2 + b^2}$ is the distance from origin in the complex plane.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$|z| = \\sqrt{a^2 + b^2}$ is the distance from origin in the complex plane.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The argument of $z$ is:',
    options: [
      'The real part of $z
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The argument is the angle from the positive real axis.',
  },
      'The angle $\\theta$ such that $z = |z|(\\cos\\theta + i\\sin\\theta)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The argument is the angle from the positive real axis.',
  },
      'The modulus of $z
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The argument is the angle from the positive real axis.',
  },
      '$|z|^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The argument is the angle from the positive real axis.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The argument is the angle from the positive real axis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the complex plane, the point $z = 1 + i$ lies in:',
    options: [
      'Quadrant IV',
      'Quadrant I',
      'Quadrant II',
      'Quadrant III',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$z = 1 + i$ has positive real and positive imaginary parts: Quadrant I.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is $|1 + i|$?',
    correctAnswer: 1.414,
    numericRange: { min: 1.4, max: 1.5, precision: 3 },
    difficulty: 'easy',
    explanation: '$|1 + i| = \\sqrt{1^2 + 1^2} = \\sqrt{2} \\approx 1.414$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The polar form of a complex number is:',
    options: [
      '$a + bi
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Polar form: $z = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta$.',
  },
      '$r + \\theta i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Polar form: $z = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta$.',
  },
      '$e^{r\\theta}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Polar form: $z = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta$.',
  },
      '$r(\\cos\\theta + i\\sin\\theta)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Polar form: $z = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Polar form: $z = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $|z| = r$, then $|z^2| = ?$',
    options: [
      '$r
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$|z^n| = |z|^n$, so $|z^2| = r^2$.',
  },
      '$2r
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|z^n| = |z|^n$, so $|z^2| = r^2$.',
  },
      '$r^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|z^n| = |z|^n$, so $|z^2| = r^2$.',
  },
      '$\\sqrt{r}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|z^n| = |z|^n$, so $|z^2| = r^2$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|z^n| = |z|^n$, so $|z^2| = r^2$.',
  },
];
