import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: [a,b] \\to \\mathbb{R}$ is monotonically increasing if:',
    options: [
      '$f\\'(x) > 0$ for all $x \\in (a,b)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A function is monotonically increasing if $x < y$ implies $f(x) \\leq f(y)$. This is the definition; it does not require differentiability or strict inequality.',
  },
      '$f(a) < f(b)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A function is monotonically increasing if $x < y$ implies $f(x) \\leq f(y)$. This is the definition; it does not require differentiability or strict inequality.',
  },
      '$x < y$ implies $f(x) \\leq f(y)$ for all $x, y \\in [a,b]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A function is monotonically increasing if $x < y$ implies $f(x) \\leq f(y)$. This is the definition; it does not require differentiability or strict inequality.',
  },
      '$f$ is continuous on $[a,b]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A function is monotonically increasing if $x < y$ implies $f(x) \\leq f(y)$. This is the definition; it does not require differentiability or strict inequality.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A function is monotonically increasing if $x < y$ implies $f(x) \\leq f(y)$. This is the definition; it does not require differentiability or strict inequality.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ is differentiable on $(a,b)$ and $f\'(x) > 0$ for all $x \\in (a,b)$, then $f$ is:',
    options: [
      'Strictly increasing on $(a,b)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $f\'(x) > 0$ for all $x$ in an interval, then $f$ is strictly increasing on that interval. This follows from the Mean Value Theorem: for $x < y$, we have $f(y) - f(x) = f\'(c)(y-x) > 0$ for some $c \\in (x,y)$.',
  },
      'Monotonically increasing on $(a,b)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $f\'(x) > 0$ for all $x$ in an interval, then $f$ is strictly increasing on that interval. This follows from the Mean Value Theorem: for $x < y$, we have $f(y) - f(x) = f\'(c)(y-x) > 0$ for some $c \\in (x,y)$.',
  },
      'Constant on $(a,b)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $f\'(x) > 0$ for all $x$ in an interval, then $f$ is strictly increasing on that interval. This follows from the Mean Value Theorem: for $x < y$, we have $f(y) - f(x) = f\'(c)(y-x) > 0$ for some $c \\in (x,y)$.',
  },
      'Bounded on $(a,b)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $f\'(x) > 0$ for all $x$ in an interval, then $f$ is strictly increasing on that interval. This follows from the Mean Value Theorem: for $x < y$, we have $f(y) - f(x) = f\'(c)(y-x) > 0$ for some $c \\in (x,y)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $f\'(x) > 0$ for all $x$ in an interval, then $f$ is strictly increasing on that interval. This follows from the Mean Value Theorem: for $x < y$, we have $f(y) - f(x) = f\'(c)(y-x) > 0$ for some $c \\in (x,y)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ is differentiable on $(a,b)$ and $f\'(x) = 0$ for all $x \\in (a,b)$, then:',
    options: [
      '$f$ is strictly increasing',
      '$f$ is constant on $(a,b)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $f\'(x) = 0$ for all $x$ in an interval, then $f$ is constant. This follows from the Mean Value Theorem: for any $x, y$ in the interval, $f(y) - f(x) = f\'(c)(y-x) = 0$.',
  },
      '$f$ is strictly decreasing',
      '$f$ has infinitely many local extrema',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If $f\'(x) = 0$ for all $x$ in an interval, then $f$ is constant. This follows from the Mean Value Theorem: for any $x, y$ in the interval, $f(y) - f(x) = f\'(c)(y-x) = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Consider $f(x) = x^3$ on $[-1, 1]$. Which statement is true?',
    options: [
      '$f\\'(x) > 0$ for all $x \\in (-1, 1)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$f\'(x) = 3x^2 \\geq 0$ for all $x$, with $f\'(0) = 0$. Despite the derivative being zero at one point, $f$ is still strictly increasing since $x < y$ implies $x^3 < y^3$.',
  },
      '$f$ is monotonically increasing but not strictly increasing',
      '$f$ is strictly increasing but $f\\'(0) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f\'(x) = 3x^2 \\geq 0$ for all $x$, with $f\'(0) = 0$. Despite the derivative being zero at one point, $f$ is still strictly increasing since $x < y$ implies $x^3 < y^3$.',
  },
      '$f$ is not monotonic',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f\'(x) = 3x^2 \\geq 0$ for all $x$, with $f\'(0) = 0$. Despite the derivative being zero at one point, $f$ is still strictly increasing since $x < y$ implies $x^3 < y^3$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Mean Value Theorem states that if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c \\in (a,b)$ such that:',
    options: [
      '$f\\'(c) = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Mean Value Theorem guarantees that $f\'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a,b)$. The derivative at some point equals the average rate of change over the interval.',
  },
      '$f(c) = \\frac{f(a) + f(b)}{2}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Mean Value Theorem guarantees that $f\'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a,b)$. The derivative at some point equals the average rate of change over the interval.',
  },
      '$f\\'(c) = f(b) - f(a)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Mean Value Theorem guarantees that $f\'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a,b)$. The derivative at some point equals the average rate of change over the interval.',
  },
      '$f\\'(c) = \\frac{f(b) - f(a)}{b - a}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Mean Value Theorem guarantees that $f\'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a,b)$. The derivative at some point equals the average rate of change over the interval.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Mean Value Theorem guarantees that $f\'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a,b)$. The derivative at some point equals the average rate of change over the interval.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'For $f(x) = x^2$ on $[1, 3]$, find the value of $c$ guaranteed by the Mean Value Theorem (i.e., find $c$ such that $f\'(c) = \\frac{f(3) - f(1)}{3 - 1}$).',
    correctAnswer: 2,
    numericRange: { min: 1, max: 3, precision: 1 },
    difficulty: 'medium',
    explanation: 'We have $\\frac{f(3) - f(1)}{3-1} = \\frac{9 - 1}{2} = 4$. Since $f\'(x) = 2x$, we need $2c = 4$, so $c = 2$.',
  },
];
