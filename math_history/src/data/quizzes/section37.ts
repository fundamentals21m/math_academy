import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's37-e01',
    type: 'multiple-choice',
    question: 'What is the Maclaurin series a special case of?',
    options: [
      'A Taylor series centered at $a = 0$',
      'A Taylor series centered at $a = 1$',
      'A Fourier series',
      'A geometric series',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Maclaurin series is simply a Taylor series where the center point $a = 0$. This special case was popularized by Colin Maclaurin, though Taylor had developed the general formula earlier.',
  },
  {
    id: 's37-e02',
    type: 'multiple-choice',
    question: 'In the exponential series $e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$, what is the coefficient of $x^4$?',
    options: [
      '$\\frac{1}{24}$',
      '$\\frac{1}{4}$',
      '$\\frac{1}{16}$',
      '$\\frac{1}{120}$',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The coefficient of $x^n$ in the exponential series is $\\frac{1}{n!}$. For $n = 4$, this is $\\frac{1}{4!} = \\frac{1}{24}$.',
  },
  // Medium questions
  {
    id: 's37-m01',
    type: 'multiple-choice',
    question: 'Newton\'s generalized binomial series $(1+x)^{1/2}$ represents which function?',
    options: [
      '$\\sqrt{1+x}$',
      '$\\frac{1}{\\sqrt{1+x}}$',
      '$(1+x)^2$',
      '$\\ln(1+x)$',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Newton extended the binomial theorem to non-integer exponents. The series $(1+x)^{1/2}$ converges to $\\sqrt{1+x}$ for $|x| < 1$, allowing square roots to be computed by polynomial arithmetic.',
  },
  {
    id: 's37-m02',
    type: 'multiple-choice',
    question: 'Why do the sine and cosine series have only odd and even powers respectively?',
    options: [
      'Because sine is an odd function and cosine is an even function',
      'Because of the alternating signs in the series',
      'Because the Taylor formula requires this pattern',
      'Because Euler discovered them that way',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The sine function satisfies $\\sin(-x) = -\\sin(x)$ (odd symmetry), so only odd powers of $x$ can appear. The cosine function satisfies $\\cos(-x) = \\cos(x)$ (even symmetry), so only even powers appear. The series reflect the symmetry of the functions.',
  },
  // Hard questions
  {
    id: 's37-h01',
    type: 'multiple-choice',
    question: 'The geometric series $\\frac{1}{1-x} = 1 + x + x^2 + \\cdots$ converges when:',
    options: [
      '$|x| < 1$',
      '$x < 1$',
      '$|x| \\leq 1$',
      'For all $x$',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The geometric series converges if and only if the absolute value of the common ratio is less than 1: $|x| < 1$. At $x = 1$, the series becomes $1 + 1 + 1 + \\cdots$ which diverges. At $x = -1$, it becomes $1 - 1 + 1 - 1 + \\cdots$ which also fails to converge.',
  },
  {
    id: 's37-h02',
    type: 'multiple-choice',
    question: 'The Lagrange remainder formula $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ tells us that:',
    options: [
      'The error in truncating a Taylor series can be bounded using the next derivative',
      'Every Taylor series converges to its function',
      'The remainder is always smaller than the last term kept',
      'Taylor series converge faster than geometric series',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Lagrange remainder formula gives an exact expression for the error when we approximate a function by a partial Taylor sum. By bounding $f^{(n+1)}$ on the interval, we can bound the error, proving convergence when the remainder goes to zero as $n \\to \\infty$.',
  },
];
