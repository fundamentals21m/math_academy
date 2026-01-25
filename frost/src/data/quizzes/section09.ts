import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Shamir Secret Sharing, where is the secret encoded in the polynomial $f(x) = s + a_1 x + a_2 x^2 + \\ldots$?',
    options: [
      'In the leading coefficient $a_{t-1}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The secret is the constant term: $f(0) = s$. This is the key insight of Shamir\'s scheme - evaluating the polynomial at $x=0$ gives the secret.',
  },
      'In the sum of all coefficients',
      'In the degree of the polynomial',
      'In the constant term $f(0) = s
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The secret is the constant term: $f(0) = s$. This is the key insight of Shamir\'s scheme - evaluating the polynomial at $x=0$ gives the secret.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The secret is the constant term: $f(0) = s$. This is the key insight of Shamir\'s scheme - evaluating the polynomial at $x=0$ gives the secret.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a $t$-of-$n$ threshold scheme, what is the degree of the sharing polynomial?',
    options: [
      '$t - 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The polynomial has degree $t-1$ so that exactly $t$ points uniquely determine it. This is because a polynomial of degree $t-1$ has $t$ coefficients and needs $t$ equations to solve.',
  },
      '$n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The polynomial has degree $t-1$ so that exactly $t$ points uniquely determine it. This is because a polynomial of degree $t-1$ has $t$ coefficients and needs $t$ equations to solve.',
  },
      '$t
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The polynomial has degree $t-1$ so that exactly $t$ points uniquely determine it. This is because a polynomial of degree $t-1$ has $t$ coefficients and needs $t$ equations to solve.',
  },
      '$n - 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The polynomial has degree $t-1$ so that exactly $t$ points uniquely determine it. This is because a polynomial of degree $t-1$ has $t$ coefficients and needs $t$ equations to solve.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The polynomial has degree $t-1$ so that exactly $t$ points uniquely determine it. This is because a polynomial of degree $t-1$ has $t$ coefficients and needs $t$ equations to solve.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How are shares generated from the polynomial $f(x)$?',
    options: [
      'By computing $f(0)$ for each participant',
      'By computing the derivative $f\\'(x)$ at each point',
      'By evaluating $f(i)$ at distinct non-zero points for each participant $i
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Shares are points on the polynomial: participant $i$ receives $(i, f(i))$. The $x$-coordinates must be distinct and non-zero (since $f(0) = s$ is the secret).',
  },
      'By factoring the polynomial into linear terms',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Shares are points on the polynomial: participant $i$ receives $(i, f(i))$. The $x$-coordinates must be distinct and non-zero (since $f(0) = s$ is the secret).',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For the polynomial $f(x) = 42 + 17x + 8x^2$, what is the share value $f(2)$?',
    correctAnswer: 108,
    numericRange: { min: 0, max: 500, precision: 0 },
    difficulty: 'medium',
    explanation: '$f(2) = 42 + 17(2) + 8(2^2) = 42 + 34 + 32 = 108$',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does a polynomial of degree $t-1$ require exactly $t$ points to determine?',
    options: [
      'Because each point eliminates one possible polynomial',
      'Because the polynomial has $t$ coefficients, needing $t$ equations',
      'Because of the discrete logarithm problem',
      'Because $t-1$ points always form a unique line',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A degree $t-1$ polynomial $f(x) = a_0 + a_1 x + \\ldots + a_{t-1} x^{t-1}$ has $t$ unknown coefficients. Each point $(x_i, f(x_i))$ gives one linear equation. We need $t$ equations to solve for $t$ unknowns.',
  },
];
