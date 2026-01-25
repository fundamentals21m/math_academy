import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is $\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$?',
    options: [
      '$\\infty
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'This is the classic definition of $e$ (Euler\'s number). The limit equals $e \\approx 2.71828...$',
  },
      '$e
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'This is the classic definition of $e$ (Euler\'s number). The limit equals $e \\approx 2.71828...$',
  },
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'This is the classic definition of $e$ (Euler\'s number). The limit equals $e \\approx 2.71828...$',
  },
      '$0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'This is the classic definition of $e$ (Euler\'s number). The limit equals $e \\approx 2.71828...$',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'This is the classic definition of $e$ (Euler\'s number). The limit equals $e \\approx 2.71828...$',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For what values of $x$ does $\\lim_{n \\to \\infty} x^n$ exist and equal $0$?',
    options: [
      '$x \\leq 1$',
      '$|x| \\leq 1$',
      '$x < 1$',
      '$|x| < 1$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $|x| < 1$, then $x^n \\to 0$. If $|x| = 1$ (except $x=1$), the sequence oscillates. If $|x| > 1$, it diverges to $\\pm\\infty$. If $x = 1$, the limit is $1$, not $0$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is $\\lim_{n \\to \\infty} \\frac{n}{2^n}$?',
    correctAnswer: 0,
    numericRange: { min: 0, max: 10, precision: 2 },
    difficulty: 'medium',
    explanation: 'Exponential growth dominates polynomial growth. For any polynomial $p(n)$, $\\lim_{n \\to \\infty} \\frac{p(n)}{a^n} = 0$ when $a > 1$. Here $p(n) = n$ and $a = 2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which limit is correct?',
    options: [
      '$\\lim_{n \\to \\infty} n^{1/n} = e
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taking logarithm: $\\ln(n^{1/n}) = \\frac{\\ln n}{n} \\to 0$ as $n \\to \\infty$. Therefore $n^{1/n} \\to e^0 = 1$.',
  },
      '$\\lim_{n \\to \\infty} n^{1/n} = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taking logarithm: $\\ln(n^{1/n}) = \\frac{\\ln n}{n} \\to 0$ as $n \\to \\infty$. Therefore $n^{1/n} \\to e^0 = 1$.',
  },
      '$\\lim_{n \\to \\infty} n^{1/n} = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taking logarithm: $\\ln(n^{1/n}) = \\frac{\\ln n}{n} \\to 0$ as $n \\to \\infty$. Therefore $n^{1/n} \\to e^0 = 1$.',
  },
      '$\\lim_{n \\to \\infty} n^{1/n} = \\infty
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taking logarithm: $\\ln(n^{1/n}) = \\frac{\\ln n}{n} \\to 0$ as $n \\to \\infty$. Therefore $n^{1/n} \\to e^0 = 1$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taking logarithm: $\\ln(n^{1/n}) = \\frac{\\ln n}{n} \\to 0$ as $n \\to \\infty$. Therefore $n^{1/n} \\to e^0 = 1$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is $\\lim_{n \\to \\infty} \\frac{n!}{n^n}$?',
    correctAnswer: 0,
    numericRange: { min: 0, max: 1, precision: 2 },
    difficulty: 'hard',
    explanation: 'By Stirling\'s approximation or direct analysis, $\\frac{n!}{n^n} = \\frac{1 \\cdot 2 \\cdots n}{n \\cdot n \\cdots n} \\leq \\frac{1}{n} \\to 0$. Each factor $\\frac{k}{n} \\leq 1$ and the first factor $\\frac{1}{n} \\to 0$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is $\\lim_{n \\to \\infty} \\frac{\\ln n}{n}$?',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Logarithmic growth is slower than linear growth. By L\'Hôpital\'s rule or by noting $\\ln n < n^{\\epsilon}$ for any $\\epsilon > 0$, we get $\\frac{\\ln n}{n} \\to 0$.',
  },
      '$\\infty
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Logarithmic growth is slower than linear growth. By L\'Hôpital\'s rule or by noting $\\ln n < n^{\\epsilon}$ for any $\\epsilon > 0$, we get $\\frac{\\ln n}{n} \\to 0$.',
  },
      '$0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Logarithmic growth is slower than linear growth. By L\'Hôpital\'s rule or by noting $\\ln n < n^{\\epsilon}$ for any $\\epsilon > 0$, we get $\\frac{\\ln n}{n} \\to 0$.',
  },
      '$e
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Logarithmic growth is slower than linear growth. By L\'Hôpital\'s rule or by noting $\\ln n < n^{\\epsilon}$ for any $\\epsilon > 0$, we get $\\frac{\\ln n}{n} \\to 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Logarithmic growth is slower than linear growth. By L\'Hôpital\'s rule or by noting $\\ln n < n^{\\epsilon}$ for any $\\epsilon > 0$, we get $\\frac{\\ln n}{n} \\to 0$.',
  },
];
