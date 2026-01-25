import type { QuizQuestion } from './types';

export const section85Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If position is $\\mathbf{r}(t)$, then velocity is:',
    options: [
      '$\\mathbf{r}(t)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Velocity = derivative of position.',
  },
      '$\\mathbf{r}\\'\\'(t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Velocity = derivative of position.',
  },
      '$|\\mathbf{r}(t)|
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Velocity = derivative of position.',
  },
      '$\\mathbf{r}\\'(t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Velocity = derivative of position.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Velocity = derivative of position.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Acceleration is:',
    options: [
      '$\\mathbf{r}\\'(t)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Acceleration = derivative of velocity = second derivative of position.',
  },
      '$|\\mathbf{r}\\'(t)|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Acceleration = derivative of velocity = second derivative of position.',
  },
      '$\\mathbf{r}\\'\\'(t)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Acceleration = derivative of velocity = second derivative of position.',
  },
      '$\\mathbf{r}(t)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Acceleration = derivative of velocity = second derivative of position.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Acceleration = derivative of velocity = second derivative of position.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Speed is:',
    options: [
      'Velocity',
      'The magnitude of velocity: $|\\mathbf{v}(t)|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Speed = $|\\mathbf{r}\'(t)|$ (scalar, not vector).',
  },
      'Acceleration',
      'The direction of motion',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Speed = $|\\mathbf{r}\'(t)|$ (scalar, not vector).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For projectile motion with gravity, $\\mathbf{r}\'\'(t) = ?$',
    options: [
      '$(0, 0)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Constant downward acceleration: $\\mathbf{a} = (0, -g)$ in 2D.',
  },
      '$(g, g)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Constant downward acceleration: $\\mathbf{a} = (0, -g)$ in 2D.',
  },
      '$(0, -g)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Constant downward acceleration: $\\mathbf{a} = (0, -g)$ in 2D.',
  },
      '$(v_0, 0)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Constant downward acceleration: $\\mathbf{a} = (0, -g)$ in 2D.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Constant downward acceleration: $\\mathbf{a} = (0, -g)$ in 2D.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In uniform circular motion, the acceleration points:',
    options: [
      'Toward the center (centripetal)',
      'Tangent to the circle',
      'Away from the center',
      'In the direction of velocity',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Centripetal acceleration points toward the center.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $\\mathbf{r}(t) = (t, t^2, t^3)$, what is the $z$-component of $\\mathbf{r}\'\'(1)$?',
    correctAnswer: 6,
    numericRange: { min: 5, max: 7, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\mathbf{r}\'(t) = (1, 2t, 3t^2)$, $\\mathbf{r}\'\'(t) = (0, 2, 6t)$. At $t=1$: $z$-component is $6$.',
  },
];
