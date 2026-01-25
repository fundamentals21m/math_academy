import type { QuizQuestion } from './types';

export const section184Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The interpolation error formula states that $f(x) - p(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} \\omega(x)$. What is $\\omega(x)$?',
    options: [
      '$(x - a)^{n+1}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\omega(x) = (x - x_0)(x - x_1)\\cdots(x - x_n)$ is the product of factors involving all interpolation points.',
  },
      '$(x - x_0)(x - x_1)\\cdots(x - x_n)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\omega(x) = (x - x_0)(x - x_1)\\cdots(x - x_n)$ is the product of factors involving all interpolation points.',
  },
      '$x^{n+1}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\omega(x) = (x - x_0)(x - x_1)\\cdots(x - x_n)$ is the product of factors involving all interpolation points.',
  },
      '$\\sum_{k=0}^{n}(x - x_k)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\omega(x) = (x - x_0)(x - x_1)\\cdots(x - x_n)$ is the product of factors involving all interpolation points.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\omega(x) = (x - x_0)(x - x_1)\\cdots(x - x_n)$ is the product of factors involving all interpolation points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The interpolation error formula involves the $(n+1)$-th derivative of $f$ evaluated at some point $\\xi$. Where is $\\xi$ located?',
    options: [
      'At $x_0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The point $\\xi$ lies somewhere in the smallest interval containing all the interpolation points and the evaluation point $x$.',
  },
      'In the smallest interval containing $x, x_0, x_1, \\ldots, x_n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The point $\\xi$ lies somewhere in the smallest interval containing all the interpolation points and the evaluation point $x$.',
  },
      'At $x_n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The point $\\xi$ lies somewhere in the smallest interval containing all the interpolation points and the evaluation point $x$.',
  },
      'Outside the interval $[x_0, x_n]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The point $\\xi$ lies somewhere in the smallest interval containing all the interpolation points and the evaluation point $x$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The point $\\xi$ lies somewhere in the smallest interval containing all the interpolation points and the evaluation point $x$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of the interpolation error formula uses which classical theorem?',
    options: [
      'Mean Value Theorem',
      'Fundamental Theorem of Calculus',
      'L\\'Hopital\\'s Rule',
      'Rolle\\'s Theorem',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The proof repeatedly applies Rolle\'s theorem to show that $g^{(n+1)}$ has at least one zero, which gives the error formula.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What phenomenon can occur when using equally spaced interpolation points for some functions?',
    options: [
      'The interpolation becomes exact',
      'The error decreases exponentially',
      'Runge\\\\'s phenomenon: error can grow as $n$ increases',
      'The polynomial becomes constant',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Runge\'s phenomenon shows that for some functions, equally spaced points can cause the interpolation error to grow unboundedly as the number of points increases.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Comparing interpolation error to Taylor remainder, which term replaces $(x-a)^{n+1}$?',
    options: [
      '$\\omega(x)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In interpolation, $\\omega(x) = (x - x_0)\\cdots(x - x_n)$ replaces $(x-a)^{n+1}$. Taylor expansion can be viewed as interpolation at $a$ with multiplicity $n+1$.',
  },
      '$n!
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In interpolation, $\\omega(x) = (x - x_0)\\cdots(x - x_n)$ replaces $(x-a)^{n+1}$. Taylor expansion can be viewed as interpolation at $a$ with multiplicity $n+1$.',
  },
      '$f^{(n+1)}(\\xi)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In interpolation, $\\omega(x) = (x - x_0)\\cdots(x - x_n)$ replaces $(x-a)^{n+1}$. Taylor expansion can be viewed as interpolation at $a$ with multiplicity $n+1$.',
  },
      '$(x - x_0)^{n+1}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In interpolation, $\\omega(x) = (x - x_0)\\cdots(x - x_n)$ replaces $(x-a)^{n+1}$. Taylor expansion can be viewed as interpolation at $a$ with multiplicity $n+1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In interpolation, $\\omega(x) = (x - x_0)\\cdots(x - x_n)$ replaces $(x-a)^{n+1}$. Taylor expansion can be viewed as interpolation at $a$ with multiplicity $n+1$.',
  },
];
