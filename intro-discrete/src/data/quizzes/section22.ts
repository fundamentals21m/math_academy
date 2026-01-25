import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The division algorithm for polynomials over a field states that $f = qg + r$ where:',
    options: [
      '$\\deg(r) = \\deg(g)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The remainder $r$ must have degree strictly less than the divisor $g$, or be zero.',
  },
      '$\\deg(r) > \\deg(g)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The remainder $r$ must have degree strictly less than the divisor $g$, or be zero.',
  },
      '$\\deg(r) < \\deg(g)$ or $r = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The remainder $r$ must have degree strictly less than the divisor $g$, or be zero.',
  },
      '$r = f
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The remainder $r$ must have degree strictly less than the divisor $g$, or be zero.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The remainder $r$ must have degree strictly less than the divisor $g$, or be zero.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When dividing polynomials, the GCD is normalized to be:',
    options: [
      'Of degree 0',
      'Equal to 1',
      'Monic (leading coefficient 1)',
      'Of maximum degree',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'We normalize the GCD to be monic to ensure uniqueness.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The polynomial GCD can be computed using:',
    options: [
      'Factoring only',
      'The Euclidean algorithm',
      'Derivatives',
      'Integration',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Euclidean algorithm works for polynomials over fields, just as for integers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'By the Remainder Theorem, when $f(x)$ is divided by $(x - a)$, the remainder is:',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Remainder Theorem: $f(x) = q(x)(x-a) + r$ where $r = f(a)$ is a constant.',
  },
      '$a
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Remainder Theorem: $f(x) = q(x)(x-a) + r$ where $r = f(a)$ is a constant.',
  },
      '$f(0)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Remainder Theorem: $f(x) = q(x)(x-a) + r$ where $r = f(a)$ is a constant.',
  },
      '$f(a)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Remainder Theorem: $f(x) = q(x)(x-a) + r$ where $r = f(a)$ is a constant.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Remainder Theorem: $f(x) = q(x)(x-a) + r$ where $r = f(a)$ is a constant.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Bézout\'s identity for polynomials states that $\\gcd(f, g) = $',
    options: [
      '$fg
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Just like for integers, the GCD can be written as a linear combination: $d = sf + tg$.',
  },
      '$f + g
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Just like for integers, the GCD can be written as a linear combination: $d = sf + tg$.',
  },
      'The constant 1 always',
      '$sf + tg$ for some polynomials $s, t
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Just like for integers, the GCD can be written as a linear combination: $d = sf + tg$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Just like for integers, the GCD can be written as a linear combination: $d = sf + tg$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'By the Factor Theorem, $(x - 2)$ divides $f(x)$ if and only if:',
    options: [
      '$f(2) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$(x - a)$ divides $f(x)$ if and only if $f(a) = 0$.',
  },
      '$f(0) = 2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(x - a)$ divides $f(x)$ if and only if $f(a) = 0$.',
  },
      '$f(-2) = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(x - a)$ divides $f(x)$ if and only if $f(a) = 0$.',
  },
      '$f(x) = x - 2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(x - a)$ divides $f(x)$ if and only if $f(a) = 0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(x - a)$ divides $f(x)$ if and only if $f(a) = 0$.',
  },
];
