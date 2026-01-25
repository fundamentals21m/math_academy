import type { QuizQuestion } from './types';

export const section86Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The arc length of $\\mathbf{r}(t)$ from $t = a$ to $t = b$ is:',
    options: [
      '$\\int_a^b \\mathbf{r}(t)\\,dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Arc length = $\\int_a^b \\|\\mathbf{r}\'(t)\\|\\,dt$ (integrate speed).',
  },
      '$|\\mathbf{r}(b) - \\mathbf{r}(a)|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Arc length = $\\int_a^b \\|\\mathbf{r}\'(t)\\|\\,dt$ (integrate speed).',
  },
      '$\\int_a^b |\\mathbf{r}\\'(t)|\\,dt
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Arc length = $\\int_a^b \\|\\mathbf{r}\'(t)\\|\\,dt$ (integrate speed).',
  },
      '$\\mathbf{r}(b) - \\mathbf{r}(a)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Arc length = $\\int_a^b \\|\\mathbf{r}\'(t)\\|\\,dt$ (integrate speed).',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Arc length = $\\int_a^b \\|\\mathbf{r}\'(t)\\|\\,dt$ (integrate speed).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For $\\mathbf{r}(t) = (t, t^2)$, $|\\mathbf{r}\'(t)| = ?$',
    options: [
      '$\\sqrt{1 + t^2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbf{r}\'(t) = (1, 2t)$, so $|\\mathbf{r}\'(t)| = \\sqrt{1 + 4t^2}$.',
  },
      '$\\sqrt{1 + 4t^2}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbf{r}\'(t) = (1, 2t)$, so $|\\mathbf{r}\'(t)| = \\sqrt{1 + 4t^2}$.',
  },
      '$1 + 2t
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbf{r}\'(t) = (1, 2t)$, so $|\\mathbf{r}\'(t)| = \\sqrt{1 + 4t^2}$.',
  },
      '$\\sqrt{t^2 + t^4}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbf{r}\'(t) = (1, 2t)$, so $|\\mathbf{r}\'(t)| = \\sqrt{1 + 4t^2}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbf{r}\'(t) = (1, 2t)$, so $|\\mathbf{r}\'(t)| = \\sqrt{1 + 4t^2}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Arc length parametrization uses parameter $s$ where:',
    options: [
      '$s$ is time',
      '$s$ is arbitrary',
      '$s$ measures distance along the curve from a starting point',
      '$s = t^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Arc length parameter: $s = $ distance traveled.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Arc length parameter: $s = $ distance traveled.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When parametrized by arc length, $|\\mathbf{r}\'(s)| = ?$',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Arc length parametrization: unit speed, $|\\mathbf{r}\'(s)| = 1$.',
  },
      '$s
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Arc length parametrization: unit speed, $|\\mathbf{r}\'(s)| = 1$.',
  },
      'Variable',
      '$1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Arc length parametrization: unit speed, $|\\mathbf{r}\'(s)| = 1$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Arc length parametrization: unit speed, $|\\mathbf{r}\'(s)| = 1$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'The arc length of $(t, 0)$ from $t = 0$ to $t = 3$ is:',
    correctAnswer: 3,
    numericRange: { min: 2, max: 4, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\mathbf{r}\'(t) = (1, 0)$, $|\\mathbf{r}\'| = 1$. Arc length $= \\int_0^3 1\\,dt = 3$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For a straight line segment, arc length equals:',
    options: [
      'The Euclidean distance between endpoints',
      'Zero',
      'Infinity',
      'The parameter range',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For a line, arc length = distance between endpoints.',
  },
];
