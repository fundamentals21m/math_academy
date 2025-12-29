import type { QuizQuestion } from './types';

export const section86Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The arc length of $\\mathbf{r}(t)$ from $t = a$ to $t = b$ is:',
    options: [
      '$\\int_a^b \\mathbf{r}(t)\\,dt$',
      '$\\int_a^b |\\mathbf{r}\'(t)|\\,dt$',
      '$|\\mathbf{r}(b) - \\mathbf{r}(a)|$',
      '$\\mathbf{r}(b) - \\mathbf{r}(a)$'
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
      '$\\sqrt{1 + t^2}$',
      '$\\sqrt{1 + 4t^2}$',
      '$1 + 2t$',
      '$\\sqrt{t^2 + t^4}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbf{r}\'(t) = (1, 2t)$, so $|\\mathbf{r}\'(t)| = \\sqrt{1 + 4t^2}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Arc length parametrization uses parameter $s$ where:',
    options: [
      '$s$ is time',
      '$s$ measures distance along the curve from a starting point',
      '$s = t^2$',
      '$s$ is arbitrary'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Arc length parameter: $s = $ distance traveled.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When parametrized by arc length, $|\\mathbf{r}\'(s)| = ?$',
    options: [
      '$0$',
      '$1$',
      '$s$',
      'Variable'
    ],
    correctIndex: 1,
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
      'Zero',
      'The Euclidean distance between endpoints',
      'Infinity',
      'The parameter range'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For a line, arc length = distance between endpoints.',
  },
];
