import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A critical point of $f$ is a point where:',
    options: [
      '$f(x) = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Critical points occur where the derivative is zero or undefined.',
  },
      '$f\\'(x) = 0$ or $f\\'(x)$ does not exist',
      '$f$ is discontinuous',
      '$f(x)$ is maximum',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Critical points occur where the derivative is zero or undefined.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ has a local maximum at $c$ and $f\'(c)$ exists, then:',
    options: [
      '$f\\'(c) > 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Fermat\'s theorem: local extrema with existing derivative have $f\'(c) = 0$.',
  },
      '$f\\'(c) < 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Fermat\'s theorem: local extrema with existing derivative have $f\'(c) = 0$.',
  },
      '$f\\'(c) = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Fermat\'s theorem: local extrema with existing derivative have $f\'(c) = 0$.',
  },
      '$f\\'(c)$ is undefined',
    ],
    correctIndex: 1,
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
      'A local maximum at $c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Positive to negative derivative means increasing then decreasing: local max.',
  },
      'A local minimum at $c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Positive to negative derivative means increasing then decreasing: local max.',
  },
      'An inflection point at $c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Positive to negative derivative means increasing then decreasing: local max.',
  },
      'No extremum at $c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Positive to negative derivative means increasing then decreasing: local max.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Positive to negative derivative means increasing then decreasing: local max.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To find absolute extrema on $[a, b]$, we check:',
    options: [
      'Only critical points',
      'Critical points and endpoints',
      'Only endpoints',
      'Only where $f\\'\\'(x) = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Absolute extrema can occur at critical points OR endpoints.',
  },
    ],
    correctIndex: 3,
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
