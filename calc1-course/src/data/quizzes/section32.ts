import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A critical point of $f$ is a point where:',
    options: [
      '$f(x) = 0$',
      '$f\'(x) = 0$ or $f\'(x)$ does not exist',
      '$f$ is discontinuous',
      '$f(x)$ is maximum'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Critical points occur where the derivative is zero or undefined.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ has a local maximum at $c$ and $f\'(c)$ exists, then:',
    options: [
      '$f\'(c) > 0$',
      '$f\'(c) < 0$',
      '$f\'(c) = 0$',
      '$f\'(c)$ is undefined'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Fermat\'s theorem: local extrema with existing derivative have $f\'(c) = 0$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Find the critical point of $f(x) = x^2 - 4x + 3$.',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$f\'(x) = 2x - 4 = 0$ gives $x = 2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The First Derivative Test: if $f\'$ changes from positive to negative at $c$, then $f$ has:',
    options: [
      'A local minimum at $c$',
      'A local maximum at $c$',
      'An inflection point at $c$',
      'No extremum at $c$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Positive to negative derivative means increasing then decreasing: local max.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To find absolute extrema on $[a, b]$, we check:',
    options: [
      'Only critical points',
      'Only endpoints',
      'Critical points and endpoints',
      'Only where $f\'\'(x) = 0$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Absolute extrema can occur at critical points OR endpoints.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'What is the minimum value of $f(x) = x^2 - 4x + 5$ on $[0, 3]$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$f\'(x) = 2x - 4 = 0$ at $x = 2$. $f(0) = 5$, $f(2) = 1$, $f(3) = 2$. Min is 1.',
  },
];
