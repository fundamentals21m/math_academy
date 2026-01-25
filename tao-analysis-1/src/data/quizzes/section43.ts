import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Extreme Value Theorem states that if $f: [a,b] \\to \\mathbb{R}$ is continuous, then:',
    options: [
      '$f$ is differentiable on $(a,b)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Extreme Value Theorem guarantees that a continuous function on a closed bounded interval attains its maximum and minimum values.',
  },
      '$f$ is uniformly continuous on $[a,b]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Extreme Value Theorem guarantees that a continuous function on a closed bounded interval attains its maximum and minimum values.',
  },
      '$f$ is bounded but may not attain its supremum',
      '$f$ attains both a maximum and minimum value on $[a,b]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Extreme Value Theorem guarantees that a continuous function on a closed bounded interval attains its maximum and minimum values.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Extreme Value Theorem guarantees that a continuous function on a closed bounded interval attains its maximum and minimum values.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which hypothesis in the Extreme Value Theorem is violated if we consider $f(x) = x$ on $(0,1)$?',
    options: [
      'The interval being closed',
      'Continuity of $f
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The interval $(0,1)$ is not closed. The function $f(x) = x$ on $(0,1)$ has supremum $1$ and infimum $0$, but attains neither.',
  },
      'The interval being bounded',
      '$f$ being real-valued',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The interval $(0,1)$ is not closed. The function $f(x) = x$ on $(0,1)$ has supremum $1$ and infimum $0$, but attains neither.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f: [a,b] \\to \\mathbb{R}$ is continuous, then there exist $c, d \\in [a,b]$ such that:',
    options: [
      '$f(c) = f(d)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the Extreme Value Theorem, $f$ attains its minimum at some $c$ and maximum at some $d$, so $f(c) \\leq f(x) \\leq f(d)$ for all $x$.',
  },
      '$f(c) \\leq f(x) \\leq f(d)$ for all $x \\in [a,b]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the Extreme Value Theorem, $f$ attains its minimum at some $c$ and maximum at some $d$, so $f(c) \\leq f(x) \\leq f(d)$ for all $x$.',
  },
      '$f(c) < f(x) < f(d)$ for all $x \\in (a,b)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the Extreme Value Theorem, $f$ attains its minimum at some $c$ and maximum at some $d$, so $f(c) \\leq f(x) \\leq f(d)$ for all $x$.',
  },
      '$c = a$ and $d = b
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the Extreme Value Theorem, $f$ attains its minimum at some $c$ and maximum at some $d$, so $f(c) \\leq f(x) \\leq f(d)$ for all $x$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the Extreme Value Theorem, $f$ attains its minimum at some $c$ and maximum at some $d$, so $f(c) \\leq f(x) \\leq f(d)$ for all $x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The function $f(x) = 1/x$ on $[1, \\infty)$ does NOT satisfy the conclusion of the Extreme Value Theorem because:',
    options: [
      '$f$ is not continuous',
      'The domain is not closed',
      '$f$ is not differentiable',
      'The domain is not bounded'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The interval $[1, \\infty)$ is closed but unbounded. The Extreme Value Theorem requires a closed AND bounded interval.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Consider $f(x) = \\begin{cases} x & 0 \\leq x < 1 \\\\ 0 & x = 1 \\end{cases}$ on $[0,1]$. This function:',
    options: [
      'Attains its maximum and minimum by the EVT',
      'Has no supremum',
      'Does not attain its supremum because $f$ is discontinuous',
      'Is continuous on $[0,1]
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The supremum of $f$ on $[0,1]$ is $1$, but $f(x) < 1$ for all $x \\in [0,1]$. The function is discontinuous at $x=1$, so EVT does not apply.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The supremum of $f$ on $[0,1]$ is $1$, but $f(x) < 1$ for all $x \\in [0,1]$. The function is discontinuous at $x=1$, so EVT does not apply.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Let $f(x) = x^2 - 2x + 3$ on $[0, 3]$. The minimum value of $f$ on this interval is:',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$f(x) = (x-1)^2 + 2$ has minimum at $x = 1$ where $f(1) = 2$. Since $1 \\in [0,3]$, the minimum on $[0,3]$ is $2$.',
  },
];
