import type { QuizQuestion } from './types';

export const section100Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A closed $n$-dimensional interval $[a, b]$ in $\\mathbb{R}^n$ is defined as:',
    options: [
      'A single point in $\\mathbb{R}^n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A closed $n$-dimensional interval is the Cartesian product of $n$ closed intervals: $[a, b] = [a_1, b_1] \\times \\cdots \\times [a_n, b_n]$. For $n = 2$, this is a rectangle.',
  },
      'An open ball of radius $1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A closed $n$-dimensional interval is the Cartesian product of $n$ closed intervals: $[a, b] = [a_1, b_1] \\times \\cdots \\times [a_n, b_n]$. For $n = 2$, this is a rectangle.',
  },
      'The set of all points with $\\|x\\| \\leq 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A closed $n$-dimensional interval is the Cartesian product of $n$ closed intervals: $[a, b] = [a_1, b_1] \\times \\cdots \\times [a_n, b_n]$. For $n = 2$, this is a rectangle.',
  },
      'The Cartesian product $[a_1, b_1] \\times \\cdots \\times [a_n, b_n]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A closed $n$-dimensional interval is the Cartesian product of $n$ closed intervals: $[a, b] = [a_1, b_1] \\times \\cdots \\times [a_n, b_n]$. For $n = 2$, this is a rectangle.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A closed $n$-dimensional interval is the Cartesian product of $n$ closed intervals: $[a, b] = [a_1, b_1] \\times \\cdots \\times [a_n, b_n]$. For $n = 2$, this is a rectangle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Boundedness Theorem states that if $f$ is continuous on a closed interval $[a, b]$ in $\\mathbb{R}^n$, then:',
    options: [
      '$f$ is bounded on $[a, b]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Boundedness Theorem states that a continuous scalar field on a closed bounded interval is bounded: there exists $C > 0$ such that $|f(x)| \\leq C$ for all $x$ in $[a, b]$.',
  },
      '$f$ has infinitely many zeros',
      '$f$ is differentiable on $[a, b]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Boundedness Theorem states that a continuous scalar field on a closed bounded interval is bounded: there exists $C > 0$ such that $|f(x)| \\leq C$ for all $x$ in $[a, b]$.',
  },
      '$f$ is monotonic on $[a, b]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Boundedness Theorem states that a continuous scalar field on a closed bounded interval is bounded: there exists $C > 0$ such that $|f(x)| \\leq C$ for all $x$ in $[a, b]$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Boundedness Theorem states that a continuous scalar field on a closed bounded interval is bounded: there exists $C > 0$ such that $|f(x)| \\leq C$ for all $x$ in $[a, b]$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Extreme-Value Theorem in $\\mathbb{R}^n$ states that if $f$ is continuous on a closed interval $[a, b]$, then:',
    options: [
      '$f$ is constant on $[a, b]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Extreme-Value Theorem guarantees that a continuous function on a closed bounded interval attains its maximum and minimum: there exist points $c, d \\in [a, b]$ with $f(c) = \\sup f$ and $f(d) = \\inf f$.',
  },
      '$f$ attains its supremum and infimum on $[a, b]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Extreme-Value Theorem guarantees that a continuous function on a closed bounded interval attains its maximum and minimum: there exist points $c, d \\in [a, b]$ with $f(c) = \\sup f$ and $f(d) = \\inf f$.',
  },
      '$f$ has no critical points',
      '$f$ is zero somewhere in $[a, b]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Extreme-Value Theorem guarantees that a continuous function on a closed bounded interval attains its maximum and minimum: there exist points $c, d \\in [a, b]$ with $f(c) = \\sup f$ and $f(d) = \\inf f$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Extreme-Value Theorem guarantees that a continuous function on a closed bounded interval attains its maximum and minimum: there exist points $c, d \\in [a, b]$ with $f(c) = \\sup f$ and $f(d) = \\inf f$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The proof of the Boundedness Theorem uses:',
    options: [
      'The Mean Value Theorem',
      'Successive bisection and nested intervals',
      'The Implicit Function Theorem',
      'Green\\\\'s Theorem',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The proof uses successive bisection: if $f$ were unbounded on $[a, b]$, bisecting creates nested intervals on which $f$ is unbounded. These nest to a point where continuity gives a contradiction.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Uniform Continuity Theorem (small-span theorem) states that for continuous $f$ on a closed $[a, b]$, for every $\\varepsilon > 0$:',
    options: [
      '$f$ can be made constant by changing finitely many values',
      '$f$ has at most finitely many discontinuities',
      'The derivative of $f$ exists and is bounded by $\\varepsilon
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Uniform Continuity Theorem says we can partition $[a, b]$ into finitely many subintervals so that the span (max minus min) of $f$ on each subinterval is less than $\\varepsilon$. This is the essence of uniform continuity.',
  },
      'There is a partition where the span of $f$ on each subinterval is less than $\\varepsilon
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Uniform Continuity Theorem says we can partition $[a, b]$ into finitely many subintervals so that the span (max minus min) of $f$ on each subinterval is less than $\\varepsilon$. This is the essence of uniform continuity.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Uniform Continuity Theorem says we can partition $[a, b]$ into finitely many subintervals so that the span (max minus min) of $f$ on each subinterval is less than $\\varepsilon$. This is the essence of uniform continuity.',
  },
];
