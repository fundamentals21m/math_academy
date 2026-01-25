import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A point $x_0$ is a local maximum of $f$ if:',
    options: [
      '$f(x_0) \\geq f(x)$ for all $x$ in the domain',
      '$f\\'(x_0) > 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A local maximum only requires $f(x_0) \\geq f(x)$ for all $x$ in some neighborhood (open interval) containing $x_0$, not globally.',
  },
      '$f(x_0) \\geq f(x)$ for all $x$ in some neighborhood of $x_0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A local maximum only requires $f(x_0) \\geq f(x)$ for all $x$ in some neighborhood (open interval) containing $x_0$, not globally.',
  },
      '$f\\'(x_0) < 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A local maximum only requires $f(x_0) \\geq f(x)$ for all $x$ in some neighborhood (open interval) containing $x_0$, not globally.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A local maximum only requires $f(x_0) \\geq f(x)$ for all $x$ in some neighborhood (open interval) containing $x_0$, not globally.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ has a local extremum at an interior point $x_0$ and $f$ is differentiable at $x_0$, then:',
    options: [
      '$f\\'(x_0) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This is Fermat\'s theorem: if $f$ has a local extremum at an interior point $x_0$ where $f$ is differentiable, then $f\'(x_0) = 0$. The derivative must vanish at interior local extrema.',
  },
      '$f\\'(x_0) > 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This is Fermat\'s theorem: if $f$ has a local extremum at an interior point $x_0$ where $f$ is differentiable, then $f\'(x_0) = 0$. The derivative must vanish at interior local extrema.',
  },
      '$f\\'(x_0) < 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This is Fermat\'s theorem: if $f$ has a local extremum at an interior point $x_0$ where $f$ is differentiable, then $f\'(x_0) = 0$. The derivative must vanish at interior local extrema.',
  },
      '$f\\'(x_0)$ does not exist',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This is Fermat\'s theorem: if $f$ has a local extremum at an interior point $x_0$ where $f$ is differentiable, then $f\'(x_0) = 0$. The derivative must vanish at interior local extrema.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Consider $f(x) = x^3$ on $\\mathbb{R}$. At $x = 0$:',
    options: [
      '$f$ has a local maximum',
      '$f\\'(0) = 0$ but $f$ has no local extremum at $0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We have $f\'(x) = 3x^2$, so $f\'(0) = 0$. However, $f(x) = x^3$ is strictly increasing, so $x = 0$ is not a local extremum. This shows the converse of Fermat\'s theorem is false.',
  },
      '$f$ has a local minimum',
      '$f\\'(0) \\neq 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'We have $f\'(x) = 3x^2$, so $f\'(0) = 0$. However, $f(x) = x^3$ is strictly increasing, so $x = 0$ is not a local extremum. This shows the converse of Fermat\'s theorem is false.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'We have $f\'(x) = 3x^2$, so $f\'(0) = 0$. However, $f(x) = x^3$ is strictly increasing, so $x = 0$ is not a local extremum. This shows the converse of Fermat\'s theorem is false.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A critical point of $f$ is a point where:',
    options: [
      '$f$ has a local maximum',
      '$f$ has a local minimum',
      '$f$ is discontinuous',
      '$f\\\'(x_0) = 0$ or $f\\\'(x_0)$ does not exist',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A critical point is where the derivative is zero or does not exist. All local extrema at interior points occur at critical points, but not all critical points are extrema.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Find the number of critical points of $f(x) = x^4 - 4x^3 + 4x^2$ on $\\mathbb{R}$.',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'hard',
    explanation: '$f\'(x) = 4x^3 - 12x^2 + 8x = 4x(x^2 - 3x + 2) = 4x(x-1)(x-2)$. Setting $f\'(x) = 0$ gives $x = 0, 1, 2$. So there are $3$ critical points.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The second derivative test states that if $f\'(x_0) = 0$ and $f\'\'(x_0) > 0$, then:',
    options: [
      '$x_0$ is a local maximum',
      '$x_0$ is an inflection point',
      '$x_0$ is a local minimum',
      'The test is inconclusive',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $f\'(x_0) = 0$ and $f\'\'(x_0) > 0$, the function is concave up at $x_0$, indicating a local minimum. If $f\'\'(x_0) < 0$, it would be a local maximum.',
  },
];
