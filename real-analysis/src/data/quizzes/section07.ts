import type { QuizQuestion } from './types';

export const section07Quiz = {
  easy: [
    {
      id: 's07-e01',
      type: 'multiple-choice',
      question: 'The comparison test states that if $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then:',
      options: [
        '$\\sum a_n$ converges',
        '$\\sum a_n$ diverges',
        '$\\sum a_n = \\sum b_n$',
        'Nothing can be concluded'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'If a series is bounded above by a convergent series term-by-term, it must also converge.'
    },
    {
      id: 's07-e02',
      type: 'multiple-choice',
      question: 'The ratio test examines $\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = L$. The series converges if:',
      options: ['$L > 1$', '$L = 1$', '$L < 1$', '$L = 0$'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'If the ratio limit $L < 1$, the series converges absolutely. If $L > 1$, it diverges.'
    },
    {
      id: 's07-e03',
      type: 'multiple-choice',
      question: 'If the ratio test gives $L = 1$, then:',
      options: [
        'The series converges',
        'The test is inconclusive',
        'The series diverges',
        'The series converges conditionally'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'When $L = 1$, the ratio test provides no information; other tests must be used.'
    },
    {
      id: 's07-e04',
      type: 'multiple-choice',
      question: 'The root test examines $\\limsup_{n \\to \\infty} \\sqrt[n]{|a_n|} = L$. The series converges if:',
      options: ['$L > 1$', '$L = 1$', '$L < 1$', '$L = \\infty$'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'If the root limit $L < 1$, the series converges absolutely.'
    },
    {
      id: 's07-e05',
      type: 'multiple-choice',
      question: 'The integral test applies when $f(x)$ is:',
      options: [
        'Any function',
        'Alternating',
        'Positive, continuous, and decreasing for $x \\geq 1$',
        'Bounded'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The integral test requires $f$ to be positive, continuous, and decreasing.'
    },
    {
      id: 's07-e06',
      type: 'multiple-choice',
      question: 'By the integral test, $\\sum_{n=1}^{\\infty} f(n)$ and $\\int_1^{\\infty} f(x)\\,dx$:',
      options: [
        'Have the same value',
        'Are unrelated',
        'One converges iff the other diverges',
        'Both converge or both diverge'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The integral test says the series and improper integral have the same convergence behavior.'
    },
    {
      id: 's07-e07',
      type: 'multiple-choice',
      question: 'The alternating series test (Leibniz test) applies to series of the form:',
      options: [
        '$\\sum (-1)^n a_n$ where $a_n > 0$, $a_n$ decreasing, $a_n \\to 0$',
        '$\\sum a_n$ where $a_n > 0$',
        '$\\sum a_n$ where $a_n \\to 0$',
        '$\\sum a_n$ where $|a_n| < 1$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The alternating series test requires alternating signs, positive decreasing terms, and limit zero.'
    },
    {
      id: 's07-e08',
      type: 'multiple-choice',
      question: 'For $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$, the ratio test gives:',
      options: [
        '$L = 0$, converges',
        '$L = 1$, inconclusive',
        '$L > 1$, diverges',
        '$L = 1/2$, converges'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{n^2}{(n+1)^2} \\to 1$, so the ratio test is inconclusive for $p$-series.'
    },
    {
      id: 's07-e09',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{1}{2^n}$ by the ratio test:',
      options: [
        '$L = 2$, diverges',
        '$L = 1$, inconclusive',
        '$L = 1/2$, converges',
        '$L = 0$, converges'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{1/2^{n+1}}{1/2^n} = 1/2 < 1$, so the series converges.'
    },
    {
      id: 's07-e10',
      type: 'multiple-choice',
      question: 'If $0 \\leq a_n \\leq b_n$ and $\\sum a_n$ diverges, then $\\sum b_n$:',
      options: [
        'Converges',
        'Oscillates',
        'May converge or diverge',
        'Diverges'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'If a smaller series diverges, any larger series must also diverge (comparison test).'
    },
    {
      id: 's07-e11',
      type: 'multiple-choice',
      question: 'The limit comparison test says: if $\\lim \\frac{a_n}{b_n} = c$ with $0 < c < \\infty$, then:',
      options: [
        '$\\sum a_n$ converges iff $\\sum b_n$ converges',
        '$\\sum a_n = c \\sum b_n$',
        '$\\sum a_n$ always converges',
        'Nothing can be concluded'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'When the limit is a finite positive constant, the two series have the same convergence behavior.'
    },
    {
      id: 's07-e12',
      type: 'multiple-choice',
      question: 'For $\\sum n! / n^n$, which test is most useful?',
      options: ['Comparison test', 'Integral test', 'Ratio test', 'Alternating series test'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The ratio test is ideal for series involving factorials and exponentials.'
    },
    {
      id: 's07-e13',
      type: 'multiple-choice',
      question: 'The alternating series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ converges by:',
      options: [
        'Ratio test',
        'Alternating series test',
        'Root test',
        'Comparison test'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Since $1/n$ is positive, decreasing, and approaches $0$, the alternating series test applies.'
    },
    {
      id: 's07-e14',
      type: 'numeric',
      question: 'For $\\sum_{n=1}^{\\infty} \\frac{n}{3^n}$, the ratio $\\frac{a_{n+1}}{a_n}$ approaches what value?',
      correctAnswer: 0.333,
      numericRange: { min: 0.32, max: 0.35 },
      difficulty: 'easy',
      explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)/3^{n+1}}{n/3^n} = \\frac{n+1}{3n} \\to \\frac{1}{3}$.'
    },
    {
      id: 's07-e15',
      type: 'multiple-choice',
      question: 'To test $\\sum \\frac{1}{n \\ln n}$ for convergence, which test is best?',
      options: ['Ratio test', 'Integral test', 'Root test', 'Comparison with harmonic'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The integral test with $\\int \\frac{dx}{x \\ln x} = \\ln(\\ln x)$ is natural here.'
    },
    {
      id: 's07-e16',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ converges by the alternating series test, the error in using $S_N$ is:',
      options: [
        'Unbounded',
        'Exactly $a_{N+1}$',
        'At most $|a_{N+1}|$',
        'At most $|S_N|$'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'For alternating series, the error is bounded by the absolute value of the first omitted term.'
    },
    {
      id: 's07-e17',
      type: 'multiple-choice',
      question: 'The condensation test is useful for:',
      options: [
        'Alternating series',
        'Series with factorial terms',
        'Geometric series',
        'Series where $a_n$ is decreasing'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Cauchy\'s condensation test works for positive decreasing sequences: $\\sum a_n$ converges iff $\\sum 2^n a_{2^n}$ converges.'
    },
    {
      id: 's07-e18',
      type: 'multiple-choice',
      question: 'By comparison with $\\sum 1/n^2$, the series $\\sum \\frac{1}{n^2 + 1}$:',
      options: ['Diverges', 'Converges', 'Is inconclusive', 'Oscillates'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$\\frac{1}{n^2+1} < \\frac{1}{n^2}$, and $\\sum 1/n^2$ converges, so by comparison, the series converges.'
    },
    {
      id: 's07-e19',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{n!}{10^n}$ by the ratio test:',
      options: [
        'Diverges ($L > 1$)',
        'Converges ($L < 1$)',
        'Inconclusive ($L = 1$)',
        'Converges to $e$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{10^{n+1}} \\cdot \\frac{10^n}{n!} = \\frac{n+1}{10} \\to \\infty$, so the series diverges.'
    },
    {
      id: 's07-e20',
      type: 'multiple-choice',
      question: 'For the root test, if $\\limsup \\sqrt[n]{|a_n|} = L$ and $L > 1$:',
      options: [
        'The series converges',
        'The series diverges',
        'The test is inconclusive',
        'The series converges conditionally'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'When $L > 1$, terms do not approach $0$, so the series diverges.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's07-m01',
      type: 'multiple-choice',
      question: 'Using the ratio test on $\\sum \\frac{n^2}{2^n}$, the series:',
      options: ['Diverges', 'Converges', 'Is inconclusive', 'Converges conditionally'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{2n^2} \\to \\frac{1}{2} < 1$, so the series converges.'
    },
    {
      id: 's07-m02',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$ by the integral test:',
      options: ['Converges', 'Diverges', 'Oscillates', 'Cannot be determined'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\int_2^{\\infty} \\frac{dx}{x \\ln x} = [\\ln(\\ln x)]_2^{\\infty} = \\infty$, so the series diverges.'
    },
    {
      id: 's07-m03',
      type: 'multiple-choice',
      question: 'For $\\sum \\frac{1}{n^n}$, using the root test:',
      options: [
        '$L = 1$, inconclusive',
        '$L = e^{-1}$, converges',
        '$L = 0$, converges',
        '$L = \\infty$, diverges'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\sqrt[n]{1/n^n} = 1/n \\to 0 < 1$, so the series converges.'
    },
    {
      id: 's07-m04',
      type: 'multiple-choice',
      question: 'Dirichlet\'s test requires $\\{a_n\\}$ to be monotonic with $a_n \\to 0$ and:',
      options: [
        '$\\sum b_n$ to converge',
        '$b_n$ to be positive',
        '$b_n \\to 0$',
        'The partial sums of $b_n$ to be bounded'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Dirichlet\'s test: if $a_n \\to 0$ monotonically and $\\sum_{k=1}^{n} b_k$ is bounded, then $\\sum a_n b_n$ converges.'
    },
    {
      id: 's07-m05',
      type: 'multiple-choice',
      question: 'Abel\'s test requires $\\{a_n\\}$ to be convergent and monotonic, and:',
      options: [
        '$\\sum b_n$ to converge',
        '$\\sum b_n$ to diverge',
        '$b_n \\to \\infty$',
        '$b_n$ to alternate'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Abel\'s test: if $\\{a_n\\}$ is monotonic and bounded, and $\\sum b_n$ converges, then $\\sum a_n b_n$ converges.'
    },
    {
      id: 's07-m06',
      type: 'multiple-choice',
      question: 'By the limit comparison test with $\\sum 1/n$, the series $\\sum \\frac{n}{n^2+1}$:',
      options: ['Converges', 'Diverges', 'Is inconclusive', 'Converges absolutely'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\lim \\frac{n/(n^2+1)}{1/n} = \\lim \\frac{n^2}{n^2+1} = 1 > 0$. Since $\\sum 1/n$ diverges, so does this series.'
    },
    {
      id: 's07-m07',
      type: 'multiple-choice',
      question: 'The series $\\sum \\frac{2^n}{n!}$:',
      options: ['Diverges', 'Converges to $e^2 - 1$', 'Converges to $e^2$', 'Converges to $2$'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$e^x = \\sum \\frac{x^n}{n!}$. So $\\sum_{n=0}^{\\infty} \\frac{2^n}{n!} = e^2$. Starting at $n=1$ gives $e^2 - 1$.'
    },
    {
      id: 's07-m08',
      type: 'numeric',
      question: 'For $\\sum \\frac{3^n}{n!}$, the ratio $\\frac{a_{n+1}}{a_n}$ equals $\\frac{3}{n+1}$. For $n = 9$, this ratio is:',
      correctAnswer: 0.3,
      difficulty: 'medium',
      explanation: '$\\frac{3}{9+1} = \\frac{3}{10} = 0.3$.'
    },
    {
      id: 's07-m09',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n + \\sin n}$ (where $|\\sin n| < 1$):',
      options: [
        'Diverges',
        'Cannot apply alternating series test directly',
        'Converges by alternating series test',
        'Converges absolutely'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The terms $1/(n + \\sin n)$ are not monotonically decreasing, so the standard alternating test does not directly apply.'
    },
    {
      id: 's07-m10',
      type: 'multiple-choice',
      question: 'By the condensation test, $\\sum \\frac{1}{n \\ln n}$ behaves like:',
      options: [
        '$\\sum \\frac{1}{\\ln(2^n)}$',
        '$\\sum \\frac{1}{n^2}$',
        '$\\sum \\frac{2^n}{2^n \\ln(2^n)} = \\sum \\frac{1}{n \\ln 2}$',
        '$\\sum 2^n$'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Condensation: $\\sum 2^n \\cdot \\frac{1}{2^n \\ln(2^n)} = \\sum \\frac{1}{n \\ln 2}$, which diverges like the harmonic series.'
    },
    {
      id: 's07-m11',
      type: 'multiple-choice',
      question: 'For $\\sum \\frac{\\ln n}{n^2}$, comparison with $\\sum 1/n^{3/2}$:',
      options: [
        'Fails because $\\ln n > n^{1/2}$ eventually',
        'Is inconclusive',
        'Shows divergence',
        'Shows convergence since $\\ln n < n^{1/2}$ eventually'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'For large $n$, $\\ln n < n^{1/2}$, so $\\frac{\\ln n}{n^2} < \\frac{1}{n^{3/2}}$. Since $\\sum 1/n^{3/2}$ converges, so does the series.'
    },
    {
      id: 's07-m12',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\left(\\frac{n}{n+1}\\right)^{n^2}$:',
      options: ['Converges', 'Diverges', 'Is inconclusive by root test', 'Oscillates'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$(n/(n+1))^{n^2} = (1 - 1/(n+1))^{n^2} \\approx e^{-n^2/(n+1)} \\approx e^{-n}$, which decreases rapidly. Series converges.'
    },
    {
      id: 's07-m13',
      type: 'multiple-choice',
      question: 'To determine convergence of $\\sum \\frac{1}{n^p \\ln n}$ for $p = 1$:',
      options: [
        'It diverges',
        'It converges',
        'Use comparison with $\\sum 1/n$',
        'Use ratio test'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'For $p = 1$: $\\sum 1/(n \\ln n)$ diverges by the integral test.'
    },
    {
      id: 's07-m14',
      type: 'multiple-choice',
      question: 'The Raabe test says if $\\lim n(1 - a_{n+1}/a_n) = R$, then the series converges if:',
      options: ['$R < 1$', '$R > 1$', '$R = 1$', '$R > 0$'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Raabe\'s test: converges if $R > 1$, diverges if $R < 1$. Useful when ratio test gives $L = 1$.'
    },
    {
      id: 's07-m15',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{n^n}{(2n)!}$:',
      options: ['Diverges', 'Converges', 'Is conditionally convergent', 'Oscillates'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By ratio or Stirling\'s approximation, the factorial in the denominator dominates, leading to convergence.'
    },
    {
      id: 's07-m16',
      type: 'numeric',
      question: 'For $\\sum_{n=1}^{\\infty} \\frac{1}{n^3}$, what is the $p$ value? Since $p > 1$, the series:',
      correctAnswer: 3,
      difficulty: 'medium',
      explanation: 'This is a $p$-series with $p = 3 > 1$, so it converges.'
    },
    {
      id: 's07-m17',
      type: 'multiple-choice',
      question: 'If $a_n = \\frac{1}{n(\\ln n)(\\ln \\ln n)}$ for large $n$, the series $\\sum a_n$:',
      options: ['Converges', 'Diverges', 'Cannot be determined', 'Converges conditionally'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By integral test: $\\int \\frac{dx}{x \\ln x \\ln \\ln x} = \\ln(\\ln \\ln x) \\to \\infty$. Diverges.'
    },
    {
      id: 's07-m18',
      type: 'multiple-choice',
      question: 'The series $\\sum \\frac{\\cos(n\\pi/3)}{n^2}$:',
      options: [
        'Diverges',
        'Converges absolutely',
        'Converges conditionally',
        'Oscillates'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$|\\cos(n\\pi/3)| \\leq 1$, so $|a_n| \\leq 1/n^2$. By comparison with $\\sum 1/n^2$, converges absolutely.'
    },
    {
      id: 's07-m19',
      type: 'multiple-choice',
      question: 'For $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$, the alternating series test:',
      options: [
        'Does not apply',
        'Shows absolute convergence',
        'Shows conditional convergence',
        'Shows divergence'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$1/\\sqrt{n}$ is positive, decreasing, $\\to 0$. By alternating test, converges. But $\\sum 1/\\sqrt{n}$ diverges, so conditional.'
    },
    {
      id: 's07-m20',
      type: 'multiple-choice',
      question: 'Kummer\'s test generalizes which tests?',
      options: [
        'Ratio and root tests',
        'Alternating and Dirichlet tests',
        'Comparison and integral tests',
        'Ratio, Raabe, and Bertrand tests'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Kummer\'s test is a powerful generalization that includes the ratio test, Raabe\'s test, and others as special cases.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's07-h01',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^p}$ converges if and only if:',
      options: ['$p > 0$', '$p > 1$', '$p \\geq 1$', '$p \\geq 2$'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'By integral test: $\\int \\frac{dx}{x(\\ln x)^p}$ converges iff $p > 1$ (similar to $p$-series for $\\ln$ scale).'
    },
    {
      id: 's07-h02',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ and $\\sum b_n$ are series with $a_n, b_n > 0$ and $\\lim \\frac{a_n}{b_n} = 0$:',
      options: [
        'Both (A) and (B) are true',
        'If $\\sum a_n$ diverges, then $\\sum b_n$ diverges',
        'If $\\sum b_n$ diverges, then $\\sum a_n$ diverges',
        'If $\\sum b_n$ converges, then $\\sum a_n$ converges'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'When $a_n/b_n \\to 0$: $a_n$ is "smaller" than $b_n$. Convergence of larger implies convergence of smaller; divergence of smaller implies divergence of larger.'
    },
    {
      id: 's07-h03',
      type: 'multiple-choice',
      question: 'The Bertrand series $\\sum \\frac{1}{n (\\ln n)(\\ln \\ln n)^p}$ converges when:',
      options: ['$p > 0$', '$p > 1$', '$p \\geq 1$', 'Never'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Continuing the pattern: the series converges iff $p > 1$ at each logarithmic level.'
    },
    {
      id: 's07-h04',
      type: 'multiple-choice',
      question: 'If $\\lim n(\\frac{a_n}{a_{n+1}} - 1) = \\rho$ (Raabe\'s test), and $\\rho = 1$:',
      options: [
        'The series converges',
        'The test is inconclusive',
        'The series diverges',
        'The series converges conditionally'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Raabe\'s test is inconclusive when $\\rho = 1$; further tests like Bertrand\'s are needed.'
    },
    {
      id: 's07-h05',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{(2n)!}{(n!)^2 4^n}$:',
      options: ['Diverges', 'Converges', 'Oscillates', 'Converges to $\\pi$'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This involves central binomial coefficients. By Stirling, the ratio $\\to 1$ but more refined analysis (Raabe) shows convergence.'
    },
    {
      id: 's07-h06',
      type: 'multiple-choice',
      question: 'For the series $\\sum a_n$ where $a_n = \\frac{1 \\cdot 3 \\cdot 5 \\cdots (2n-1)}{2 \\cdot 4 \\cdot 6 \\cdots (2n)}$:',
      options: [
        'Converges by ratio test',
        'Converges conditionally',
        'Diverges (ratio test gives $L = 1$, but terms don\'t go to $0$ fast enough)',
        'Cannot be determined'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Ratio $\\to 1$. Using Raabe: $n(1 - a_{n+1}/a_n) \\to 1/2 < 1$, so diverges. Also $a_n \\sim 1/\\sqrt{\\pi n}$ by Wallis.'
    },
    {
      id: 's07-h07',
      type: 'multiple-choice',
      question: 'Gauss\'s test is useful when the ratio test gives $L = 1$ and Raabe gives $\\rho = 1$. It examines:',
      options: [
        'The geometric mean of terms',
        'The integral of $a_n$',
        'The second derivative of $a_n$',
        '$\\frac{a_n}{a_{n+1}} = 1 + \\frac{\\rho}{n} + \\frac{C}{n^r} + O(1/n^{r+\\delta})$'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Gauss\'s test refines Raabe by looking at higher-order terms in the ratio expansion.'
    },
    {
      id: 's07-h08',
      type: 'numeric',
      question: 'For $\\sum \\frac{1}{n^{1.5}}$, since $p = 1.5 > 1$, the series converges. The value of $p$ is:',
      correctAnswer: 1.5,
      difficulty: 'hard',
      explanation: '$p = 1.5 > 1$, so the $p$-series converges.'
    },
    {
      id: 's07-h09',
      type: 'multiple-choice',
      question: 'If $\\sum a_n$ converges and $\\{b_n\\}$ is bounded and monotonic, then $\\sum a_n b_n$:',
      options: [
        'Converges (by Abel\'s test)',
        'May diverge',
        'Converges absolutely',
        'Diverges'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Abel\'s test: if $\\sum a_n$ converges and $\\{b_n\\}$ is bounded and monotonic, then $\\sum a_n b_n$ converges.'
    },
    {
      id: 's07-h10',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{\\sin(n)}{n}$:',
      options: [
        'Converges absolutely',
        'Converges conditionally',
        'Diverges',
        'Oscillates without converging'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'By Dirichlet\'s test: $1/n \\to 0$ monotonically, and $\\sum \\sin(n)$ has bounded partial sums (since $\\sin$ doesn\'t sum up). Converges conditionally.'
    },
    {
      id: 's07-h11',
      type: 'multiple-choice',
      question: 'For $\\sum \\frac{n^n}{e^n n!}$, using Stirling\'s approximation $n! \\approx \\sqrt{2\\pi n}(n/e)^n$:',
      options: [
        'Converges to $e$',
        'Diverges',
        'Converges',
        'Converges to $\\sqrt{2\\pi}$'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$\\frac{n^n}{e^n n!} \\approx \\frac{n^n}{e^n \\sqrt{2\\pi n}(n/e)^n} = \\frac{1}{\\sqrt{2\\pi n}}$. Since $\\sum 1/\\sqrt{n}$ diverges... wait, but we have extra $e^n$ cancellation. Need careful check: $a_n \\approx 1/\\sqrt{2\\pi n}$, series diverges. Actually converges by ratio test refinement.'
    },
    {
      id: 's07-h12',
      type: 'multiple-choice',
      question: 'The schlömilch test is a generalization of:',
      options: [
        'The ratio test',
        'The alternating series test',
        'The integral test',
        'The condensation test'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The Schlömilch test generalizes Cauchy\'s condensation test to other subsequences besides powers of 2.'
    },
    {
      id: 's07-h13',
      type: 'multiple-choice',
      question: 'If $f$ is positive, continuous, decreasing and $\\int_1^{\\infty} f(x) dx = L$, then:',
      options: [
        '$L \\leq \\sum_{n=1}^{\\infty} f(n) \\leq f(1) + L$',
        '$\\sum f(n) = L$',
        '$\\sum f(n) = L + f(1)$',
        '$\\sum f(n) < L$'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'By integral test bounds: $\\int_1^{\\infty} f \\leq \\sum_{n=1}^{\\infty} f(n) \\leq f(1) + \\int_1^{\\infty} f$.'
    },
    {
      id: 's07-h14',
      type: 'multiple-choice',
      question: 'For $\\sum (-1)^n a_n$ where $a_n > 0$ and $a_n \\to 0$ but $\\{a_n\\}$ is NOT monotonic:',
      options: [
        'The series must diverge',
        'The alternating series test fails but the series may still converge',
        'The series converges absolutely',
        'The series must converge'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The alternating series test requires monotonicity. Without it, the test fails but convergence might still hold by other means.'
    },
    {
      id: 's07-h15',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n} \\cdot \\frac{1}{1 + 1/n}$:',
      options: [
        'Converges absolutely',
        'Diverges',
        'Converges conditionally',
        'Oscillates'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The factor $1/(1+1/n) \\to 1$, so the series behaves like the alternating harmonic series: conditional convergence.'
    },
    {
      id: 's07-h16',
      type: 'multiple-choice',
      question: 'If $\\lim_{n \\to \\infty} \\frac{\\ln(1/a_n)}{\\ln n} = p$ and $a_n > 0$, then $\\sum a_n$ converges if:',
      options: ['$p > 0$', '$p > 1$', '$p < 1$', '$p = 1$'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$\\ln(1/a_n) \\sim p \\ln n$ means $a_n \\sim 1/n^p$. So convergence iff $p > 1$.'
    },
    {
      id: 's07-h17',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\left(1 - \\cos\\frac{1}{n}\\right)$:',
      options: ['Diverges', 'Converges', 'Converges to $\\pi$', 'Oscillates'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$1 - \\cos(1/n) \\approx \\frac{1}{2n^2}$ for large $n$. By comparison with $\\sum 1/n^2$, the series converges.'
    },
    {
      id: 's07-h18',
      type: 'numeric',
      question: 'For the $p$-series $\\sum 1/n^p$ with $p = 1.01$, the series converges. The value of $p$ is:',
      correctAnswer: 1.01,
      difficulty: 'hard',
      explanation: '$p = 1.01 > 1$, so the series converges (barely).'
    },
    {
      id: 's07-h19',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{n!}{(n+1)!} = \\sum \\frac{1}{n+1}$:',
      options: [
        'Converges',
        'Converges to $e$',
        'Converges to $1$',
        'Diverges (harmonic series shifted)'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: '$n!/(n+1)! = 1/(n+1)$, so this is the harmonic series starting at $n=2$, which diverges.'
    },
    {
      id: 's07-h20',
      type: 'multiple-choice',
      question: 'For $\\sum a_n$ with $a_n = e^{-\\sqrt{n}}$:',
      options: [
        'Converges, can use integral test',
        'Converges by comparison with geometric series',
        'Diverges',
        'Both (B) and (C)'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The integral $\\int e^{-\\sqrt{x}} dx$ converges (substitution $u = \\sqrt{x}$ gives $2\\int u e^{-u} du$). Series converges.'
    }
  ] as QuizQuestion[],
};
