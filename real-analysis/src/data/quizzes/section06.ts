import type { QuizQuestion } from './types';

export const section06Quiz = {
  easy: [
    {
      id: 's06-e01',
      type: 'multiple-choice',
      question: 'An infinite series $\\sum_{n=1}^{\\infty} a_n$ converges if:',
      options: [
      'Each term $a_n$ is small',
      'The terms alternate in sign',
      '$a_n \\to 0
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'A series converges if and only if its sequence of partial sums converges to a finite limit.'
    },
      'The sequence of partial sums $S_N = \\sum_{n=1}^{N} a_n$ converges',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A series converges if and only if its sequence of partial sums converges to a finite limit.'
    },
    {
      id: 's06-e02',
      type: 'multiple-choice',
      question: 'The geometric series $\\sum_{n=0}^{\\infty} r^n$ converges when:',
      options: [
      '$|r| < 1
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'A geometric series converges if and only if $|r| < 1$, and the sum is $\\frac{1}{1-r}$.'
    },
      '$r > 1
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A geometric series converges if and only if $|r| < 1$, and the sum is $\\frac{1}{1-r}$.'
    },
      '$r = 1
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A geometric series converges if and only if $|r| < 1$, and the sum is $\\frac{1}{1-r}$.'
    },
      '$r < -1
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A geometric series converges if and only if $|r| < 1$, and the sum is $\\frac{1}{1-r}$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A geometric series converges if and only if $|r| < 1$, and the sum is $\\frac{1}{1-r}$.'
    },
    {
      id: 's06-e03',
      type: 'multiple-choice',
      question: 'What is the sum of $\\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n$?',
      options: [
      '$1
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Using the formula $\\frac{1}{1-r}$ with $r = 1/2$: $\\frac{1}{1-1/2} = 2$.'
    },
      '$\\infty
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Using the formula $\\frac{1}{1-r}$ with $r = 1/2$: $\\frac{1}{1-1/2} = 2$.'
    },
      '$1/2
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Using the formula $\\frac{1}{1-r}$ with $r = 1/2$: $\\frac{1}{1-1/2} = 2$.'
    },
      '$2
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Using the formula $\\frac{1}{1-r}$ with $r = 1/2$: $\\frac{1}{1-1/2} = 2$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Using the formula $\\frac{1}{1-r}$ with $r = 1/2$: $\\frac{1}{1-1/2} = 2$.'
    },
    {
      id: 's06-e04',
      type: 'multiple-choice',
      question: 'The harmonic series $\\sum_{n=1}^{\\infty} \\frac{1}{n}$:',
      options: [
      'Converges to $1
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The harmonic series diverges. This can be shown by comparison with $\\ln n$.'
    },
      'Diverges',
      'Converges to $e
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The harmonic series diverges. This can be shown by comparison with $\\ln n$.'
    },
      'Converges to $2
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The harmonic series diverges. This can be shown by comparison with $\\ln n$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The harmonic series diverges. This can be shown by comparison with $\\ln n$.'
    },
    {
      id: 's06-e05',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ converges, then $\\lim_{n \\to \\infty} a_n = $',
      options: [
      '$0
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'If a series converges, its terms must approach $0$. This is necessary but not sufficient.'
    },
      '$1
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'If a series converges, its terms must approach $0$. This is necessary but not sufficient.'
    },
      '$\\infty
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'If a series converges, its terms must approach $0$. This is necessary but not sufficient.'
    },
      'Can be any value',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'If a series converges, its terms must approach $0$. This is necessary but not sufficient.'
    },
    {
      id: 's06-e06',
      type: 'multiple-choice',
      question: 'The $n$th term test says that if $\\lim a_n \\neq 0$, then $\\sum a_n$:',
      options: [
      'Converges',
      'Converges conditionally',
      'Diverges',
      'Cannot be determined',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'If terms do not approach $0$, the series must diverge. The contrapositive of the necessary condition.'
    },
    {
      id: 's06-e07',
      type: 'numeric',
      question: 'What is the sum of $\\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n$?',
      correctAnswer: 1.5,
      difficulty: 'easy',
      explanation: '$\\frac{1}{1-1/3} = \\frac{1}{2/3} = \\frac{3}{2} = 1.5$.'
    },
    {
      id: 's06-e08',
      type: 'multiple-choice',
      question: 'A telescoping series is one where:',
      options: [
      'Terms grow exponentially',
      'Consecutive terms cancel leaving only boundary terms',
      'The sum equals $\\pi
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'In a telescoping series, partial sums simplify due to cancellation of adjacent terms.'
    },
      'All terms are positive',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'In a telescoping series, partial sums simplify due to cancellation of adjacent terms.'
    },
    {
      id: 's06-e09',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$:',
      options: [
      'Diverges',
      'Oscillates',
      'Equals $1
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'This is the Basel problem; the series converges to $\\pi^2/6$.'
    },
      'Converges',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This is the Basel problem; the series converges to $\\pi^2/6$.'
    },
    {
      id: 's06-e10',
      type: 'multiple-choice',
      question: 'A $p$-series $\\sum \\frac{1}{n^p}$ converges when:',
      options: [
      '$p > 1
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The $p$-series test: $\\sum 1/n^p$ converges if and only if $p > 1$.'
    },
      '$p > 0
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The $p$-series test: $\\sum 1/n^p$ converges if and only if $p > 1$.'
    },
      '$p \\geq 1
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The $p$-series test: $\\sum 1/n^p$ converges if and only if $p > 1$.'
    },
      '$p < 1
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The $p$-series test: $\\sum 1/n^p$ converges if and only if $p > 1$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The $p$-series test: $\\sum 1/n^p$ converges if and only if $p > 1$.'
    },
    {
      id: 's06-e11',
      type: 'multiple-choice',
      question: 'What is $\\sum_{n=1}^{\\infty} \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)$?',
      options: [
      '$0
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'This telescopes: $S_N = 1 - \\frac{1}{N+1} \\to 1$ as $N \\to \\infty$.'
    },
      '$2
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This telescopes: $S_N = 1 - \\frac{1}{N+1} \\to 1$ as $N \\to \\infty$.'
    },
      'Diverges',
      '$1
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This telescopes: $S_N = 1 - \\frac{1}{N+1} \\to 1$ as $N \\to \\infty$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This telescopes: $S_N = 1 - \\frac{1}{N+1} \\to 1$ as $N \\to \\infty$.'
    },
    {
      id: 's06-e12',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ and $\\sum b_n$ both converge, then $\\sum (a_n + b_n)$:',
      options: [
      'May diverge',
      'Equals $0
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The sum of convergent series converges: $\\sum(a_n + b_n) = \\sum a_n + \\sum b_n$.'
    },
      'Converges',
      'Converges to $\\sum a_n \\cdot \\sum b_n
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The sum of convergent series converges: $\\sum(a_n + b_n) = \\sum a_n + \\sum b_n$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The sum of convergent series converges: $\\sum(a_n + b_n) = \\sum a_n + \\sum b_n$.'
    },
    {
      id: 's06-e13',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ converges and $c$ is a constant, then $\\sum c \\cdot a_n$:',
      options: [
      'Diverges',
      'Converges to $0
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Constants factor out: $\\sum c a_n = c \\sum a_n$.'
    },
      'Converges to $c \\cdot \\sum a_n
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Constants factor out: $\\sum c a_n = c \\sum a_n$.'
    },
      'Depends on $c
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Constants factor out: $\\sum c a_n = c \\sum a_n$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Constants factor out: $\\sum c a_n = c \\sum a_n$.'
    },
    {
      id: 's06-e14',
      type: 'numeric',
      question: 'What is the sum of $\\sum_{n=1}^{\\infty} \\frac{1}{2^n}$?',
      correctAnswer: 1,
      difficulty: 'easy',
      explanation: 'This is $\\sum_{n=1}^{\\infty} (1/2)^n = \\frac{1/2}{1-1/2} = 1$, or equivalently $\\sum_{n=0}^{\\infty}(1/2)^n - 1 = 2 - 1 = 1$.'
    },
    {
      id: 's06-e15',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} 1$ (sum of $1$s):',
      options: [
      'Converges to $\\infty
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The partial sums grow without bound, so the series diverges.'
    },
      'Converges to $1
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The partial sums grow without bound, so the series diverges.'
    },
      'Equals $e
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The partial sums grow without bound, so the series diverges.'
    },
      'Diverges',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The partial sums grow without bound, so the series diverges.'
    },
    {
      id: 's06-e16',
      type: 'multiple-choice',
      question: 'A series $\\sum a_n$ converges absolutely if:',
      options: [
      '$a_n > 0$ for all $n
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Absolute convergence means the series of absolute values converges.'
    },
      '$\\lim a_n = 0
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Absolute convergence means the series of absolute values converges.'
    },
      '$\\sum |a_n|$ converges',
      'The series alternates',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Absolute convergence means the series of absolute values converges.'
    },
    {
      id: 's06-e17',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ converges absolutely, then $\\sum a_n$:',
      options: [
      'Diverges',
      'Converges conditionally',
      'May not exist',
      'Converges',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Absolute convergence implies convergence. The converse is not true.'
    },
    {
      id: 's06-e18',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} (-1)^n$ is:',
      options: [
      'Convergent',
      'Divergent',
      'Absolutely convergent',
      'Conditionally convergent',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The partial sums alternate between $-1$ and $0$, never settling on a limit.'
    },
    {
      id: 's06-e19',
      type: 'multiple-choice',
      question: 'What is $\\sum_{n=0}^{\\infty} \\frac{1}{n!}$?',
      options: [
      '$e
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'This is the Taylor series for $e^x$ at $x=1$: $e = \\sum_{n=0}^{\\infty} \\frac{1}{n!}$.'
    },
      '$1
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'This is the Taylor series for $e^x$ at $x=1$: $e = \\sum_{n=0}^{\\infty} \\frac{1}{n!}$.'
    },
      '$2
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'This is the Taylor series for $e^x$ at $x=1$: $e = \\sum_{n=0}^{\\infty} \\frac{1}{n!}$.'
    },
      '$\\pi
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'This is the Taylor series for $e^x$ at $x=1$: $e = \\sum_{n=0}^{\\infty} \\frac{1}{n!}$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'This is the Taylor series for $e^x$ at $x=1$: $e = \\sum_{n=0}^{\\infty} \\frac{1}{n!}$.'
    },
    {
      id: 's06-e20',
      type: 'numeric',
      question: 'What is the sum $\\sum_{n=0}^{\\infty} \\left(\\frac{1}{4}\\right)^n$?',
      correctAnswer: 1.333,
      numericRange: { min: 1.3, max: 1.4 },
      difficulty: 'easy',
      explanation: '$\\frac{1}{1-1/4} = \\frac{1}{3/4} = \\frac{4}{3} \\approx 1.333$.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's06-m01',
      type: 'multiple-choice',
      question: 'The alternating harmonic series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$:',
      options: [
      'Diverges',
      'Converges conditionally',
      'Converges absolutely',
      'Oscillates',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'It converges (by the alternating series test) to $\\ln 2$, but $\\sum 1/n$ diverges, so convergence is conditional.'
    },
    {
      id: 's06-m02',
      type: 'multiple-choice',
      question: 'What is $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$?',
      options: [
      '$1
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'The alternating harmonic series sums to $\\ln 2 \\approx 0.693$.'
    },
      '$e
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The alternating harmonic series sums to $\\ln 2 \\approx 0.693$.'
    },
      '$\\pi/4
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The alternating harmonic series sums to $\\ln 2 \\approx 0.693$.'
    },
      '$\\ln 2
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The alternating harmonic series sums to $\\ln 2 \\approx 0.693$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The alternating harmonic series sums to $\\ln 2 \\approx 0.693$.'
    },
    {
      id: 's06-m03',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ converges conditionally, which statement is true?',
      options: [
      '$\\sum |a_n|$ diverges',
      '$\\sum |a_n|$ converges',
      '$a_n > 0$ for all $n
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Conditional convergence means $\\sum a_n$ converges but $\\sum |a_n|$ diverges.'
    },
      'The series can be rearranged without changing its sum',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Conditional convergence means $\\sum a_n$ converges but $\\sum |a_n|$ diverges.'
    },
    {
      id: 's06-m04',
      type: 'multiple-choice',
      question: 'The Riemann rearrangement theorem states that a conditionally convergent series can be rearranged to:',
      options: [
      'Only converge to its original sum',
      'Converge to any real number or diverge',
      'Converge to $0
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Any conditionally convergent series can be rearranged to converge to any prescribed real number, or to diverge.'
    },
      'Only diverge',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Any conditionally convergent series can be rearranged to converge to any prescribed real number, or to diverge.'
    },
    {
      id: 's06-m05',
      type: 'multiple-choice',
      question: 'For an absolutely convergent series, rearranging terms:',
      options: [
      'Does not change the sum',
      'Always changes the sum',
      'May change the sum',
      'Causes divergence',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Absolutely convergent series are unconditionally convergent; any rearrangement gives the same sum.'
    },
    {
      id: 's06-m06',
      type: 'numeric',
      question: 'The sum $\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$ equals:',
      correctAnswer: 1,
      difficulty: 'medium',
      explanation: 'Using partial fractions: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. This telescopes to $1$.'
    },
    {
      id: 's06-m07',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{1}{n^{3/2}}$:',
      options: [
      'Diverges',
      'Oscillates',
      'Converges',
      'Equals $\\pi
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'This is a $p$-series with $p = 3/2 > 1$, so it converges.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'This is a $p$-series with $p = 3/2 > 1$, so it converges.'
    },
    {
      id: 's06-m08',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$:',
      options: [
      'Converges',
      'Converges to $2
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'This is a $p$-series with $p = 1/2 < 1$, so it diverges.'
    },
      'Converges conditionally',
      'Diverges',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'This is a $p$-series with $p = 1/2 < 1$, so it diverges.'
    },
    {
      id: 's06-m09',
      type: 'multiple-choice',
      question: 'What is $\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!}$?',
      options: [
      '$0
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'This is the Taylor series for $e^x$ at $x = -1$: $e^{-1} = 1/e$.'
    },
      '$1
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'This is the Taylor series for $e^x$ at $x = -1$: $e^{-1} = 1/e$.'
    },
      '$-e
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'This is the Taylor series for $e^x$ at $x = -1$: $e^{-1} = 1/e$.'
    },
      '$e^{-1}
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'This is the Taylor series for $e^x$ at $x = -1$: $e^{-1} = 1/e$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'This is the Taylor series for $e^x$ at $x = -1$: $e^{-1} = 1/e$.'
    },
    {
      id: 's06-m10',
      type: 'multiple-choice',
      question: 'If $a_n = \\frac{1}{n \\ln n}$ for $n \\geq 2$, then $\\sum a_n$:',
      options: [
      'Converges',
      'Converges to $e
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'By the integral test, $\\int_2^{\\infty} \\frac{dx}{x \\ln x} = \\ln(\\ln x) |_2^{\\infty} = \\infty$, so the series diverges.'
    },
      'Diverges',
      'Converges to $\\ln 2
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By the integral test, $\\int_2^{\\infty} \\frac{dx}{x \\ln x} = \\ln(\\ln x) |_2^{\\infty} = \\infty$, so the series diverges.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By the integral test, $\\int_2^{\\infty} \\frac{dx}{x \\ln x} = \\ln(\\ln x) |_2^{\\infty} = \\infty$, so the series diverges.'
    },
    {
      id: 's06-m11',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$:',
      options: [
      'Converges to $2
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Using the formula for $\\sum n x^n = x/(1-x)^2$ with $x = 1/2$: $\\frac{1/2}{(1/2)^2} = 2$.'
    },
      'Diverges',
      'Converges to $1
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Using the formula for $\\sum n x^n = x/(1-x)^2$ with $x = 1/2$: $\\frac{1/2}{(1/2)^2} = 2$.'
    },
      'Converges to $4
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Using the formula for $\\sum n x^n = x/(1-x)^2$ with $x = 1/2$: $\\frac{1/2}{(1/2)^2} = 2$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Using the formula for $\\sum n x^n = x/(1-x)^2$ with $x = 1/2$: $\\frac{1/2}{(1/2)^2} = 2$.'
    },
    {
      id: 's06-m12',
      type: 'multiple-choice',
      question: 'If $\\sum_{n=1}^{\\infty} a_n = S$ and $\\sum_{n=1}^{\\infty} b_n = T$, what is $\\sum_{n=1}^{\\infty} (2a_n - 3b_n)$?',
      options: [
      '$S + T
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Linearity: $\\sum(2a_n - 3b_n) = 2\\sum a_n - 3\\sum b_n = 2S - 3T$.'
    },
      '$2S - 3T
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Linearity: $\\sum(2a_n - 3b_n) = 2\\sum a_n - 3\\sum b_n = 2S - 3T$.'
    },
      '$ST
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Linearity: $\\sum(2a_n - 3b_n) = 2\\sum a_n - 3\\sum b_n = 2S - 3T$.'
    },
      '$(S-T)/2
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Linearity: $\\sum(2a_n - 3b_n) = 2\\sum a_n - 3\\sum b_n = 2S - 3T$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Linearity: $\\sum(2a_n - 3b_n) = 2\\sum a_n - 3\\sum b_n = 2S - 3T$.'
    },
    {
      id: 's06-m13',
      type: 'numeric',
      question: 'What is $\\sum_{n=2}^{\\infty} \\frac{1}{n^2 - 1}$?',
      correctAnswer: 0.75,
      difficulty: 'medium',
      explanation: '$\\frac{1}{n^2-1} = \\frac{1}{2}\\left(\\frac{1}{n-1} - \\frac{1}{n+1}\\right)$. Telescoping gives $\\frac{1}{2}(1 + 1/2) = 3/4$.'
    },
    {
      id: 's06-m14',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{\\cos(n\\pi)}{n}$ is:',
      options: [
      'The same as the harmonic series',
      'Divergent',
      'The alternating harmonic series',
      'Equal to $0
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\cos(n\\pi) = (-1)^n$, so this is $\\sum \\frac{(-1)^n}{n}$, the alternating harmonic series.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\cos(n\\pi) = (-1)^n$, so this is $\\sum \\frac{(-1)^n}{n}$, the alternating harmonic series.'
    },
    {
      id: 's06-m15',
      type: 'multiple-choice',
      question: 'If $a_n \\geq 0$ and $\\sum a_n$ diverges, then:',
      options: [
      '$\\sum a_n^2$ must converge',
      '$\\sum a_n^2$ may converge or diverge',
      '$\\sum a_n^2$ must diverge',
      '$a_n \\to \\infty
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Example: $a_n = 1/n$ diverges, but $\\sum 1/n^2$ converges. However, $a_n = 1/\\sqrt{n}$ diverges and so does $\\sum 1/n$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Example: $a_n = 1/n$ diverges, but $\\sum 1/n^2$ converges. However, $a_n = 1/\\sqrt{n}$ diverges and so does $\\sum 1/n$.'
    },
    {
      id: 's06-m16',
      type: 'multiple-choice',
      question: 'The partial sum $S_N = \\sum_{n=1}^{N} \\frac{1}{n}$ satisfies $S_N \\approx$:',
      options: [
      '$\\ln N
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The partial sums of the harmonic series grow like $\\ln N + \\gamma$ where $\\gamma$ is Euler\'s constant.'
    },
      '$N
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The partial sums of the harmonic series grow like $\\ln N + \\gamma$ where $\\gamma$ is Euler\'s constant.'
    },
      '$e^N
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The partial sums of the harmonic series grow like $\\ln N + \\gamma$ where $\\gamma$ is Euler\'s constant.'
    },
      '$\\sqrt{N}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The partial sums of the harmonic series grow like $\\ln N + \\gamma$ where $\\gamma$ is Euler\'s constant.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The partial sums of the harmonic series grow like $\\ln N + \\gamma$ where $\\gamma$ is Euler\'s constant.'
    },
    {
      id: 's06-m17',
      type: 'multiple-choice',
      question: 'What is $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$?',
      options: [
      '$\\ln(1+x)
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'This is the Maclaurin series for $e^x$, valid for all $x \\in \\mathbb{R}$.'
    },
      '$\\sin x
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'This is the Maclaurin series for $e^x$, valid for all $x \\in \\mathbb{R}$.'
    },
      '$\\cos x
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'This is the Maclaurin series for $e^x$, valid for all $x \\in \\mathbb{R}$.'
    },
      '$e^x
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'This is the Maclaurin series for $e^x$, valid for all $x \\in \\mathbb{R}$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'This is the Maclaurin series for $e^x$, valid for all $x \\in \\mathbb{R}$.'
    },
    {
      id: 's06-m18',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2}$:',
      options: [
      'Diverges',
      'Converges conditionally',
      'Converges absolutely',
      'Equals $0
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Since $\\sum 1/n^2$ converges, the alternating series converges absolutely.'
    },
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Since $\\sum 1/n^2$ converges, the alternating series converges absolutely.'
    },
    {
      id: 's06-m19',
      type: 'numeric',
      question: 'What is $\\sum_{n=1}^{\\infty} \\frac{1}{4^n}$?',
      correctAnswer: 0.333,
      numericRange: { min: 0.32, max: 0.34 },
      difficulty: 'medium',
      explanation: '$\\sum_{n=1}^{\\infty} (1/4)^n = \\frac{1/4}{1-1/4} = \\frac{1/4}{3/4} = 1/3 \\approx 0.333$.'
    },
    {
      id: 's06-m20',
      type: 'multiple-choice',
      question: 'The Cauchy criterion for series states that $\\sum a_n$ converges if and only if:',
      options: [
      '$a_n \\to 0
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'The Cauchy criterion says finite chunks of the series can be made arbitrarily small.'
    },
      '$\\sum |a_n|$ converges',
      'The sequence of partial sums is bounded',
      'For every $\\varepsilon > 0$, there exists $N$ such that $|\\sum_{k=m}^{n} a_k| < \\varepsilon$ for all $n > m > N
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The Cauchy criterion says finite chunks of the series can be made arbitrarily small.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The Cauchy criterion says finite chunks of the series can be made arbitrarily small.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's06-h01',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=2}^{\\infty} \\frac{1}{n (\\ln n)^2}$:',
      options: [
      'Converges',
      'Diverges',
      'Oscillates',
      'Depends on the starting index',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'By the integral test, $\\int \\frac{dx}{x(\\ln x)^2} = -1/\\ln x$ converges, so the series converges.'
    },
    {
      id: 's06-h02',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ converges and $a_n > 0$, then $\\sum a_n^2$:',
      options: [
      'Must converge',
      'Must diverge',
      'May converge or diverge',
      'Converges to $(\\sum a_n)^2
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Since $a_n \\to 0$, eventually $a_n < 1$, so $a_n^2 < a_n$. By comparison, $\\sum a_n^2$ converges.'
    },
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Since $a_n \\to 0$, eventually $a_n < 1$, so $a_n^2 < a_n$. By comparison, $\\sum a_n^2$ converges.'
    },
    {
      id: 's06-h03',
      type: 'multiple-choice',
      question: 'The Dirichlet series $\\sum_{n=1}^{\\infty} \\frac{1}{n^s}$ converges for:',
      options: [
      '$s > 0
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'This is the Riemann zeta function $\\zeta(s)$, which converges for $\\text{Re}(s) > 1$ (or $s > 1$ for real $s$).'
    },
      '$s \\geq 1
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the Riemann zeta function $\\zeta(s)$, which converges for $\\text{Re}(s) > 1$ (or $s > 1$ for real $s$).'
    },
      'All real $s
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the Riemann zeta function $\\zeta(s)$, which converges for $\\text{Re}(s) > 1$ (or $s > 1$ for real $s$).'
    },
      '$s > 1
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the Riemann zeta function $\\zeta(s)$, which converges for $\\text{Re}(s) > 1$ (or $s > 1$ for real $s$).'
    },
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the Riemann zeta function $\\zeta(s)$, which converges for $\\text{Re}(s) > 1$ (or $s > 1$ for real $s$).'
    },
    {
      id: 's06-h04',
      type: 'multiple-choice',
      question: 'If $\\sum_{n=1}^{\\infty} a_n = S$ (absolutely convergent), what is $\\sum_{n=1}^{\\infty} a_{2n-1} + \\sum_{n=1}^{\\infty} a_{2n}$?',
      options: [
      '$S/2
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Splitting into odd and even terms is a rearrangement. For absolutely convergent series, the sum is unchanged.'
    },
      '$2S
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Splitting into odd and even terms is a rearrangement. For absolutely convergent series, the sum is unchanged.'
    },
      '$S
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Splitting into odd and even terms is a rearrangement. For absolutely convergent series, the sum is unchanged.'
    },
      'Cannot be determined',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Splitting into odd and even terms is a rearrangement. For absolutely convergent series, the sum is unchanged.'
    },
    {
      id: 's06-h05',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$ is:',
      options: [
      'Conditionally convergent',
      'Absolutely convergent',
      'Divergent',
      'Convergent to $0
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'By the alternating series test, it converges. But $\\sum 1/\\sqrt{n}$ diverges, so convergence is conditional.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'By the alternating series test, it converges. But $\\sum 1/\\sqrt{n}$ diverges, so convergence is conditional.'
    },
    {
      id: 's06-h06',
      type: 'multiple-choice',
      question: 'If $a_n = \\frac{1}{n^p}$ and the series converges, what is the smallest integer value of $p$?',
      options: [
      '$0
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The $p$-series converges for $p > 1$. The smallest integer greater than $1$ is $2$.'
    },
      '$2
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The $p$-series converges for $p > 1$. The smallest integer greater than $1$ is $2$.'
    },
      '$1
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The $p$-series converges for $p > 1$. The smallest integer greater than $1$ is $2$.'
    },
      'No such integer exists',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The $p$-series converges for $p > 1$. The smallest integer greater than $1$ is $2$.'
    },
    {
      id: 's06-h07',
      type: 'multiple-choice',
      question: 'The product $(1 + a_1)(1 + a_2)(1 + a_3)\\cdots$ converges if:',
      options: [
      '$\\sum a_n$ converges absolutely',
      '$a_n \\to 0
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'An infinite product $\\prod(1+a_n)$ converges iff $\\sum a_n$ converges absolutely (assuming $a_n > -1$).'
    },
      '$\\sum a_n$ converges',
      '$a_n > 0$ for all $n
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'An infinite product $\\prod(1+a_n)$ converges iff $\\sum a_n$ converges absolutely (assuming $a_n > -1$).'
    },
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'An infinite product $\\prod(1+a_n)$ converges iff $\\sum a_n$ converges absolutely (assuming $a_n > -1$).'
    },
    {
      id: 's06-h08',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + n}$:',
      options: [
      'Converges to $1
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$\\frac{1}{n^2+n} = \\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ telescopes to $1$.'
    },
      'Diverges',
      'Converges to $2
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$\\frac{1}{n^2+n} = \\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ telescopes to $1$.'
    },
      'Converges to $\\pi^2/6
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$\\frac{1}{n^2+n} = \\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ telescopes to $1$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$\\frac{1}{n^2+n} = \\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ telescopes to $1$.'
    },
    {
      id: 's06-h09',
      type: 'multiple-choice',
      question: 'If $a_n > 0$ and $\\lim \\frac{a_{n+1}}{a_n} = 1$, then $\\sum a_n$:',
      options: [
      'Diverges',
      'Cannot be determined from this information alone',
      'Converges',
      'Converges absolutely',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The ratio test is inconclusive when the limit is $1$. Examples: $1/n$ diverges, $1/n^2$ converges, both have ratio $\\to 1$.'
    },
    {
      id: 's06-h10',
      type: 'numeric',
      question: 'What is $\\sum_{n=1}^{\\infty} \\frac{n}{3^n}$?',
      correctAnswer: 0.75,
      difficulty: 'hard',
      explanation: 'Using $\\sum nx^n = x/(1-x)^2$ with $x = 1/3$: $\\frac{1/3}{(2/3)^2} = \\frac{1/3}{4/9} = \\frac{3}{4}$.'
    },
    {
      id: 's06-h11',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{\\sin n}{n^2}$:',
      options: [
      'Converges absolutely',
      'Diverges',
      'Converges conditionally',
      'Oscillates',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$|\\sin n / n^2| \\leq 1/n^2$, and $\\sum 1/n^2$ converges, so the series converges absolutely by comparison.'
    },
    {
      id: 's06-h12',
      type: 'multiple-choice',
      question: 'What is $\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{2n+1}$?',
      options: [
      '$\\ln 2
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'This is the Leibniz formula: $1 - 1/3 + 1/5 - 1/7 + \\cdots = \\pi/4$.'
    },
      '$e
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the Leibniz formula: $1 - 1/3 + 1/5 - 1/7 + \\cdots = \\pi/4$.'
    },
      '$1
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the Leibniz formula: $1 - 1/3 + 1/5 - 1/7 + \\cdots = \\pi/4$.'
    },
      '$\\pi/4
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the Leibniz formula: $1 - 1/3 + 1/5 - 1/7 + \\cdots = \\pi/4$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the Leibniz formula: $1 - 1/3 + 1/5 - 1/7 + \\cdots = \\pi/4$.'
    },
    {
      id: 's06-h13',
      type: 'multiple-choice',
      question: 'The Weierstrass M-test is used to prove:',
      options: [
        'Convergence of a single series',
        'Divergence of harmonic series',
        'Uniform convergence of a series of functions',
        'Absolute convergence implies conditional convergence'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The M-test provides a sufficient condition for uniform (and absolute) convergence of function series.'
    },
    {
      id: 's06-h14',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ converges conditionally to $S$, then by rearrangement we can make it converge to:',
      options: [
      'Any real number',
      'Only $S
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Riemann\'s rearrangement theorem: any conditionally convergent series can be rearranged to sum to any real number.'
    },
      'Only $S$ or $-S
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Riemann\'s rearrangement theorem: any conditionally convergent series can be rearranged to sum to any real number.'
    },
      'Any positive number',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Riemann\'s rearrangement theorem: any conditionally convergent series can be rearranged to sum to any real number.'
    },
    {
      id: 's06-h15',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{n^2 + 1}$:',
      options: [
      'Converges absolutely',
      'Diverges',
      'Converges to $0
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'By alternating series test (terms $\\to 0$, decreasing), it converges. But $\\sum n/(n^2+1) \\sim \\sum 1/n$ diverges.'
    },
      'Converges conditionally',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'By alternating series test (terms $\\to 0$, decreasing), it converges. But $\\sum n/(n^2+1) \\sim \\sum 1/n$ diverges.'
    },
    {
      id: 's06-h16',
      type: 'multiple-choice',
      question: 'The Cauchy product of two absolutely convergent series $\\sum a_n$ and $\\sum b_n$ is:',
      options: [
        'May diverge',
        'Converges to $(\\sum a_n)(\\sum b_n)$',
        'Converges conditionally',
        'Always equals $0$'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Mertens\' theorem: if both series converge absolutely, their Cauchy product converges to the product of sums.'
    },
    {
      id: 's06-h17',
      type: 'numeric',
      question: 'What is $\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)(n+2)}$?',
      correctAnswer: 0.25,
      difficulty: 'hard',
      explanation: 'Partial fractions: $\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)}\\right)$. Telescopes to $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$.'
    },
    {
      id: 's06-h18',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$:',
      options: [
      'Diverges',
      'Oscillates',
      'Converges',
      'Converges to $e
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'By the ratio test: $\\frac{(n+1)!/( n+1)^{n+1}}{n!/n^n} = \\frac{n^n}{(n+1)^n} = (1 - 1/(n+1))^n \\to e^{-1} < 1$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'By the ratio test: $\\frac{(n+1)!/( n+1)^{n+1}}{n!/n^n} = \\frac{n^n}{(n+1)^n} = (1 - 1/(n+1))^n \\to e^{-1} < 1$.'
    },
    {
      id: 's06-h19',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ diverges and $\\sum b_n$ converges, then $\\sum(a_n + b_n)$:',
      options: [
      'Must converge',
      'Must diverge',
      'May converge or diverge',
      'Converges to $\\sum b_n
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'If $\\sum(a_n + b_n)$ converged, then $\\sum a_n = \\sum(a_n + b_n) - \\sum b_n$ would converge, contradiction.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'If $\\sum(a_n + b_n)$ converged, then $\\sum a_n = \\sum(a_n + b_n) - \\sum b_n$ would converge, contradiction.'
    },
    {
      id: 's06-h20',
      type: 'multiple-choice',
      question: 'The double series $\\sum_{m=1}^{\\infty} \\sum_{n=1}^{\\infty} \\frac{1}{m^2 n^2}$ equals:',
      options: [
      '$\\pi^4/36
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The double sum factors: $\\left(\\sum 1/m^2\\right)\\left(\\sum 1/n^2\\right) = (\\pi^2/6)^2 = \\pi^4/36$.'
    },
      '$\\pi^2/6
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The double sum factors: $\\left(\\sum 1/m^2\\right)\\left(\\sum 1/n^2\\right) = (\\pi^2/6)^2 = \\pi^4/36$.'
    },
      '$(\\pi^2/6)^2
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The double sum factors: $\\left(\\sum 1/m^2\\right)\\left(\\sum 1/n^2\\right) = (\\pi^2/6)^2 = \\pi^4/36$.'
    },
      '$\\pi^4/90
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The double sum factors: $\\left(\\sum 1/m^2\\right)\\left(\\sum 1/n^2\\right) = (\\pi^2/6)^2 = \\pi^4/36$.'
    },
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The double sum factors: $\\left(\\sum 1/m^2\\right)\\left(\\sum 1/n^2\\right) = (\\pi^2/6)^2 = \\pi^4/36$.'
    }
  ] as QuizQuestion[],
};
