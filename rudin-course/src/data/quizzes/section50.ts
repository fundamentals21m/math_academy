import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To differentiate a series $\\sum f_n(x)$ term by term, Theorem 7.17 requires:',
    options: [
      '$\\sum f_n$ converges uniformly',
      '$\\sum f_n\'$ converges uniformly and $\\sum f_n(x_0)$ converges for some $x_0$',
      'Each $f_n$ is differentiable',
      '$\\sum |f_n\'|$ converges'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Theorem 7.17: If $\\{f_n\'\\}$ converges uniformly on $[a,b]$, each $f_n\'$ is continuous, and $\\sum f_n(x_0)$ converges for some $x_0 \\in [a,b]$, then $\\sum f_n$ converges uniformly and $(\\sum f_n)\' = \\sum f_n\'$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The condition for term-by-term differentiation is on the derivatives, not the original functions, because:',
    options: [
      'Differentiation is a local operation',
      'The derivatives control the rate of convergence needed for the limit to be differentiable',
      'Integration is easier than differentiation',
      'Functions may not be differentiable'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Differentiation is a "local" operation that can amplify small oscillations. For the derivative of the limit to equal the limit of derivatives, we need control over how the derivatives behave (uniform convergence of $f_n\'$), not just the functions themselves.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Consider $f_n(x) = \\frac{\\sin(nx)}{n}$ on $\\mathbb{R}$. Then $\\sum f_n$ converges uniformly but:',
    options: [
      '$\\sum f_n\'$ converges uniformly to $(\\sum f_n)\'$',
      '$\\sum f_n\'(x) = \\sum \\cos(nx)$ diverges for most $x$',
      '$(\\sum f_n)\'$ does not exist',
      '$\\sum f_n$ does not converge'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We have $f_n\'(x) = \\cos(nx)$, and $\\sum \\cos(nx)$ diverges for most $x$ (the terms don\'t go to $0$). This shows that uniform convergence of $\\sum f_n$ does NOT imply we can differentiate term-by-term.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f_n \\to f$ uniformly on $[a, b]$, $f_n$ is differentiable, and $f_n\' \\to g$ uniformly, then:',
    options: [
      '$f$ is differentiable and $f\' = g$',
      '$f$ may not be differentiable',
      '$f\' = g$ only at isolated points',
      '$g$ may not be continuous'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This is the sequence version of Theorem 7.17: uniform convergence of both $f_n$ and $f_n\'$ (with $f_n\'$ continuous) implies $f$ is differentiable with $f\' = g$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a power series $\\sum a_n x^n$ with radius of convergence $R > 0$:',
    options: [
      'It can be differentiated term-by-term only at $x = 0$',
      'It can be differentiated term-by-term for $|x| < R$, and the derivative has the same radius $R$',
      'The derivative has radius of convergence $R - 1$',
      'Term-by-term differentiation is never valid'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 8.1: A power series can be differentiated term-by-term inside its radius of convergence, and the derived series $\\sum n a_n x^{n-1}$ has the same radius of convergence $R$.',
  },
];
