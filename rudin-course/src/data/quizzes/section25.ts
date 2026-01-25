import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 'sec25-q1',
    type: 'multiple-choice',
    question: 'The Cauchy product of $\\sum a_n$ and $\\sum b_n$ is $\\sum c_n$ where:',
    options: [
      '$c_n = a_n b_n$',
      '$c_n = \\sum_{k=0}^{n} a_k b_{n-k}$',
      '$c_n = a_n + b_n$',
      '$c_n = a_n / b_n$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Cauchy product is defined by $c_n = \\sum_{k=0}^{n} a_k b_{n-k}$. This corresponds to the product of formal power series: $(\\sum a_n x^n)(\\sum b_n x^n) = \\sum c_n x^n$.',
  },
  {
    id: 'sec25-q2',
    type: 'multiple-choice',
    question: 'If $\\sum a_n$ and $\\sum b_n$ both converge absolutely, then their Cauchy product:',
    options: [
      'May diverge',
      'Converges conditionally only',
      'Converges to $(\\sum a_n)(\\sum b_n)$',
      'Equals $\\sum a_n b_n$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Mertens\' theorem: if at least one series converges absolutely, the Cauchy product converges to the product of the sums. With both absolutely convergent, the result is absolute as well.',
  },
  {
    id: 'sec25-q3',
    type: 'multiple-choice',
    question: 'The Cauchy product of $\\sum_{n=0}^{\\infty} x^n$ with itself gives:',
    options: [
      '$\\sum_{n=0}^{\\infty} x^{2n}$',
      '$\\sum_{n=0}^{\\infty} x^n / n!$',
      '$\\sum_{n=0}^{\\infty} 2^n x^n$',
      '$\\sum_{n=0}^{\\infty} (n+1)x^n$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'With $a_n = b_n = 1$, $c_n = \\sum_{k=0}^{n} 1 \\cdot 1 = n + 1$. So $(\\sum x^n)^2 = \\sum (n+1)x^n = 1/(1-x)^2$ for $|x| < 1$.',
  },
  {
    id: 'sec25-q4',
    type: 'multiple-choice',
    question: 'Using the Cauchy product, $e^x \\cdot e^y$ equals:',
    options: [
      '$e^{x+y}$',
      '$e^{xy}$',
      '$e^x + e^y$',
      '$(e^x)^y$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Cauchy product of $e^x = \\sum x^n/n!$ and $e^y = \\sum y^n/n!$ gives $\\sum (x+y)^n/n! = e^{x+y}$ by the binomial theorem.',
  },
  {
    id: 'sec25-q5',
    type: 'multiple-choice',
    question: 'If $\\sum a_n$ converges conditionally and $\\sum b_n$ also converges conditionally, their Cauchy product:',
    options: [
      'Always converges',
      'May diverge',
      'Converges absolutely',
      'Always equals zero'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Cauchy product of two conditionally convergent series may diverge. A classic example is the Cauchy square of $\\sum (-1)^n/\\sqrt{n+1}$, which diverges.',
  },
];
