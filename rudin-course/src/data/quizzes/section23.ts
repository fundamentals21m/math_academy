import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 'sec23-q1',
    type: 'multiple-choice',
    question: 'Summation by parts is the discrete analog of:',
    options: [
      'The chain rule',
      'L\'H\\^opital\'s rule',
      'The product rule',
      'Integration by parts'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Summation by parts: $\\sum a_n b_n = A_N b_N - \\sum A_n (b_{n+1} - b_n)$ where $A_n = \\sum_{k=1}^n a_k$. This mirrors $\\int u\\,dv = uv - \\int v\\,du$.',
  },
  {
    id: 'sec23-q2',
    type: 'multiple-choice',
    question: 'Abel\'s theorem concerns:',
    options: [
      'Continuity of power series at boundary points where they converge',
      'The divergence of the harmonic series',
      'The irrationality of $e$',
      'Compact sets in $\\mathbb{R}^n$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Abel\'s theorem: if $\\sum c_n$ converges to $s$, then $\\lim_{x \\to 1^-} \\sum c_n x^n = s$. The power series extends continuously to $x = 1$.',
  },
  {
    id: 'sec23-q3',
    type: 'multiple-choice',
    question: 'Dirichlet\'s test for convergence requires:',
    options: [
      '$a_n$ and $b_n$ both positive',
      '$\\{a_n\\}$ with bounded partial sums and $\\{b_n\\}$ monotonically decreasing to $0$',
      '$a_n b_n \\to 0$',
      '$\\sum a_n$ and $\\sum b_n$ both converge'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Dirichlet\'s test: if partial sums $A_n = \\sum_{k=1}^n a_k$ are bounded and $b_n \\downarrow 0$, then $\\sum a_n b_n$ converges. Proved using summation by parts.',
  },
  {
    id: 'sec23-q4',
    type: 'multiple-choice',
    question: 'The alternating series $\\sum (-1)^n / n$ converges by:',
    options: [
      'The comparison test',
      'The ratio test',
      'The Leibniz (alternating series) test or Dirichlet\'s test',
      'The root test'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Take $a_n = (-1)^n$ (bounded partial sums: $0$ or $-1$) and $b_n = 1/n \\downarrow 0$. Dirichlet\'s test applies. Equivalently, use the alternating series test.',
  },
  {
    id: 'sec23-q5',
    type: 'multiple-choice',
    question: 'Using Abel\'s theorem, $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ equals:',
    options: [
      '$e$',
      '$\\pi$',
      '$1$',
      '$\\ln 2$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'We know $\\ln(1+x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}$ for $|x| < 1$. The series at $x = 1$ converges. By Abel\'s theorem, it equals $\\lim_{x \\to 1^-} \\ln(1+x) = \\ln 2$.',
  },
];
