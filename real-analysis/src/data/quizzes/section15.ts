import type { QuizQuestion } from './types';

export const section15Quiz = {
  easy: [
    {
      id: 's15-e01',
      type: 'multiple-choice',
      question: 'A sequence of functions $\\{f_n\\}$ converges pointwise to $f$ if:',
      options: [
        '$f_n = f$ for large $n$',
        '$\\sup_x |f_n(x) - f(x)| \\to 0$',
        'All $f_n$ are continuous',
        'For each $x$, $\\lim_{n \\to \\infty} f_n(x) = f(x)$'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Pointwise convergence: limit exists at each individual point.'
    },
    {
      id: 's15-e02',
      type: 'multiple-choice',
      question: 'A sequence $\\{f_n\\}$ converges uniformly to $f$ on $S$ if:',
      options: [
      'For each $x$, $f_n(x) \\to f(x)
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Uniform: the rate of convergence is the same at all points.'
    },
      '$f_n(0) \\to f(0)
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Uniform: the rate of convergence is the same at all points.'
    },
      'All $f_n$ are bounded',
      '$\\sup_{x \\in S} |f_n(x) - f(x)| \\to 0
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Uniform: the rate of convergence is the same at all points.'
    },
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Uniform: the rate of convergence is the same at all points.'
    },
    {
      id: 's15-e03',
      type: 'multiple-choice',
      question: 'Uniform convergence implies:',
      options: [
      'Nothing about pointwise convergence',
      'Differentiability',
      'Bounded functions',
      'Pointwise convergence',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Uniform convergence is stronger than pointwise convergence.'
    },
    {
      id: 's15-e04',
      type: 'multiple-choice',
      question: 'If $f_n \\to f$ uniformly and each $f_n$ is continuous, then $f$ is:',
      options: [
      'Differentiable',
      'Continuous',
      'Not necessarily continuous',
      'Constant',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Uniform limit of continuous functions is continuous.'
    },
    {
      id: 's15-e05',
      type: 'multiple-choice',
      question: 'The sequence $f_n(x) = x^n$ on $[0, 1]$ converges pointwise to:',
      options: [
      '$f(x) = 0$ for all $x
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$x^n \\to 0$ for $|x| < 1$, and $1^n = 1$.'
    },
      '$f(x) = 0$ for $x \\in [0,1)$, $f(1) = 1
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$x^n \\to 0$ for $|x| < 1$, and $1^n = 1$.'
    },
      '$f(x) = 1$ for all $x
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$x^n \\to 0$ for $|x| < 1$, and $1^n = 1$.'
    },
      '$f(x) = x
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$x^n \\to 0$ for $|x| < 1$, and $1^n = 1$.'
    },
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$x^n \\to 0$ for $|x| < 1$, and $1^n = 1$.'
    },
    {
      id: 's15-e06',
      type: 'multiple-choice',
      question: 'The convergence of $f_n(x) = x^n$ on $[0, 1]$ is:',
      options: [
      'Uniform',
      'Uniform on $[0, 1)
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Continuous $f_n$ converge to discontinuous $f$, so not uniform on $[0,1]$.'
    },
      'Both A and C',
      'Not uniform (limit is discontinuous)',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Continuous $f_n$ converge to discontinuous $f$, so not uniform on $[0,1]$.'
    },
    {
      id: 's15-e07',
      type: 'multiple-choice',
      question: 'The sup-norm (uniform norm) of $f$ on $[a,b]$ is:',
      options: [
        '$|f(a)|$',
        '$\\sup_{x \\in [a,b]} |f(x)|$',
        '$\\int_a^b |f|$',
        '$|f(b) - f(a)|$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$\\|f\\|_\\infty = \\sup |f(x)|$ is the uniform norm.'
    },
    {
      id: 's15-e08',
      type: 'multiple-choice',
      question: '$f_n \\to f$ uniformly iff:',
      options: [
      '$\\|f_n - f\\|_\\infty \\to 0
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Uniform convergence means convergence in the sup-norm.'
    },
      '$\\int |f_n - f| \\to 0
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Uniform convergence means convergence in the sup-norm.'
    },
      '$|f_n(0) - f(0)| \\to 0
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Uniform convergence means convergence in the sup-norm.'
    },
      '$f_n\\'(x) \\to f\\'(x)
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Uniform convergence means convergence in the sup-norm.'
    },
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Uniform convergence means convergence in the sup-norm.'
    },
    {
      id: 's15-e09',
      type: 'multiple-choice',
      question: 'If $f_n(x) = \\frac{x}{n}$ on $[0, 1]$, then $f_n \\to$:',
      options: [
      '$f(x) = 0
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$\\frac{x}{n} \\to 0$ for all $x$ as $n \\to \\infty$.'
    },
      '$f(x) = x
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$\\frac{x}{n} \\to 0$ for all $x$ as $n \\to \\infty$.'
    },
      'Does not converge',
      '$f(x) = 1
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$\\frac{x}{n} \\to 0$ for all $x$ as $n \\to \\infty$.'
    },
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$\\frac{x}{n} \\to 0$ for all $x$ as $n \\to \\infty$.'
    },
    {
      id: 's15-e10',
      type: 'multiple-choice',
      question: 'The convergence $f_n(x) = \\frac{x}{n} \\to 0$ on $[0, 1]$ is:',
      options: [
      'Uniform',
      'Only pointwise',
      'Neither',
      'Undefined',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$\\sup_{[0,1]} |x/n| = 1/n \\to 0$, so convergence is uniform.'
    },
    {
      id: 's15-e11',
      type: 'multiple-choice',
      question: 'The Weierstrass M-test is used to prove:',
      options: [
      'Pointwise convergence of series',
      'Continuity of functions',
      'Differentiability',
      'Uniform convergence of series',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'M-test: if $|f_n(x)| \\leq M_n$ and $\\sum M_n < \\infty$, then $\\sum f_n$ converges uniformly.'
    },
    {
      id: 's15-e12',
      type: 'multiple-choice',
      question: 'The Weierstrass M-test requires:',
      options: [
        '$f_n$ differentiable',
        '$f_n$ continuous',
        '$|f_n(x)| \\leq M_n$ for all $x$, and $\\sum M_n < \\infty$',
        '$M_n \\to 0$'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Domination by summable constants implies uniform convergence.'
    },
    {
      id: 's15-e13',
      type: 'multiple-choice',
      question: 'If $f_n \\to f$ uniformly on $[a,b]$, then $\\int_a^b f_n \\to$:',
      options: [
      'The limit may not exist',
      '$f(b) - f(a)
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Uniform convergence allows interchange of limit and integral.'
    },
      '$\\int_a^b f
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Uniform convergence allows interchange of limit and integral.'
    },
      '$0
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Uniform convergence allows interchange of limit and integral.'
    },
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Uniform convergence allows interchange of limit and integral.'
    },
    {
      id: 's15-e14',
      type: 'multiple-choice',
      question: 'A power series $\\sum a_n x^n$ converges uniformly on:',
      options: [
        'Any closed subinterval of the interior of its interval of convergence',
        'Its entire interval of convergence',
        'Only at $x = 0$',
        'Never'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Uniform convergence on compact subsets of the open interval of convergence.'
    },
    {
      id: 's15-e15',
      type: 'multiple-choice',
      question: 'Pointwise convergence of continuous functions:',
      options: [
      'Guarantees continuity of the limit',
      'Implies uniform convergence',
      'Does not guarantee continuity of the limit',
      'Is impossible',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Example: $x^n$ on $[0,1]$ - continuous functions, discontinuous limit.'
    },
    {
      id: 's15-e16',
      type: 'multiple-choice',
      question: 'If $f_n(x) = \\sin(nx)/n$ on $\\mathbb{R}$, then $f_n \\to$:',
      options: [
      '$\\sin x
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$|\\sin(nx)/n| \\leq 1/n \\to 0$.'
    },
      '$\\cos x
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$|\\sin(nx)/n| \\leq 1/n \\to 0$.'
    },
      'Does not converge',
      '$0
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$|\\sin(nx)/n| \\leq 1/n \\to 0$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$|\\sin(nx)/n| \\leq 1/n \\to 0$.'
    },
    {
      id: 's15-e17',
      type: 'multiple-choice',
      question: 'The convergence $\\sin(nx)/n \\to 0$ is:',
      options: [
      'Uniform on $\\mathbb{R}
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$\\sup_x |\\sin(nx)/n| = 1/n \\to 0$, so uniform on all of $\\mathbb{R}$.'
    },
      'Only pointwise',
      'Not convergent',
      'Uniform only on bounded sets',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$\\sup_x |\\sin(nx)/n| = 1/n \\to 0$, so uniform on all of $\\mathbb{R}$.'
    },
    {
      id: 's15-e18',
      type: 'multiple-choice',
      question: 'Dini\'s theorem states that if $f_n \\downarrow f$ pointwise on $[a,b]$ with continuous $f_n$ and $f$:',
      options: [
      'Convergence is uniform',
      'Convergence may not be uniform',
      '$f$ is constant',
      '$f_n$ are bounded',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Dini: monotone pointwise convergence of continuous functions is uniform on compact sets.'
    },
    {
      id: 's15-e19',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^\\infty \\frac{x^n}{n!}$ converges:',
      options: [
      'Only for $|x| < 1
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'This is $e^x - 1$; the series for $e^x$ converges for all $x$.'
    },
      'Only for $x = 0
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This is $e^x - 1$; the series for $e^x$ converges for all $x$.'
    },
      'For all $x \\in \\mathbb{R}
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This is $e^x - 1$; the series for $e^x$ converges for all $x$.'
    },
      'For $|x| \\leq 1
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This is $e^x - 1$; the series for $e^x$ converges for all $x$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This is $e^x - 1$; the series for $e^x$ converges for all $x$.'
    },
    {
      id: 's15-e20',
      type: 'multiple-choice',
      question: 'If $\\sum f_n$ converges uniformly and each $f_n$ is continuous:',
      options: [
      'The sum is continuous',
      'The sum may be discontinuous',
      'The sum is constant',
      'The sum is differentiable',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Uniform limit of continuous functions is continuous.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's15-m01',
      type: 'multiple-choice',
      question: 'The sequence $f_n(x) = nx e^{-nx}$ on $[0, \\infty)$:',
      options: [
      'Converges uniformly to $0
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Pointwise limit is $0$, but $\\max f_n = 1/e$ at $x = 1/n$, so not uniform.'
    },
      'Converges to $x
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Pointwise limit is $0$, but $\\max f_n = 1/e$ at $x = 1/n$, so not uniform.'
    },
      'Converges pointwise to $0$ but not uniformly',
      'Does not converge',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Pointwise limit is $0$, but $\\max f_n = 1/e$ at $x = 1/n$, so not uniform.'
    },
    {
      id: 's15-m02',
      type: 'multiple-choice',
      question: 'If $f_n \\to f$ pointwise and $f_n\' \\to g$ uniformly, then:',
      options: [
      '$f$ may not be differentiable',
      '$f\\'$ doesn\\'t exist',
      '$f$ is differentiable and $f\\' = g
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Uniform convergence of derivatives with pointwise convergence of functions implies $f\' = g$.'
    },
      '$g = 0
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Uniform convergence of derivatives with pointwise convergence of functions implies $f\' = g$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Uniform convergence of derivatives with pointwise convergence of functions implies $f\' = g$.'
    },
    {
      id: 's15-m03',
      type: 'multiple-choice',
      question: 'For $f_n(x) = x^n(1-x)$ on $[0,1]$, $\\lim \\int_0^1 f_n = $:',
      options: [
      '$1
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\int_0^1 x^n(1-x)\\,dx = \\frac{1}{n+1} - \\frac{1}{n+2} \\to 0$.'
    },
      '$\\int_0^1 (\\lim f_n)
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\int_0^1 x^n(1-x)\\,dx = \\frac{1}{n+1} - \\frac{1}{n+2} \\to 0$.'
    },
      '$0
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\int_0^1 x^n(1-x)\\,dx = \\frac{1}{n+1} - \\frac{1}{n+2} \\to 0$.'
    },
      '$1/2
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\int_0^1 x^n(1-x)\\,dx = \\frac{1}{n+1} - \\frac{1}{n+2} \\to 0$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\int_0^1 x^n(1-x)\\,dx = \\frac{1}{n+1} - \\frac{1}{n+2} \\to 0$.'
    },
    {
      id: 's15-m04',
      type: 'multiple-choice',
      question: 'The Arzelà-Ascoli theorem characterizes:',
      options: [
        'Uniform convergence',
        'Differentiability',
        'Compact subsets of $C([a,b])$',
        'Integrability'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Arzelà-Ascoli: precompact sets in $C([a,b])$ are bounded and equicontinuous.'
    },
    {
      id: 's15-m05',
      type: 'multiple-choice',
      question: 'A family of functions $\\mathcal{F}$ is equicontinuous if:',
      options: [
      'All functions are continuous',
      'All functions share the same modulus of continuity',
      'The functions are bounded',
      'Each function is uniformly continuous',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Equicontinuity: for all $\\varepsilon$, one $\\delta$ works for all $f \\in \\mathcal{F}$.'
    },
    {
      id: 's15-m06',
      type: 'numeric',
      question: 'For $f_n(x) = \\frac{nx}{1+n^2x^2}$, find $\\max_{x \\geq 0} f_n(x)$.',
      correctAnswer: 0.5,
      difficulty: 'medium',
      explanation: 'Max occurs at $x = 1/n$, giving $f_n(1/n) = \\frac{1}{2}$.'
    },
    {
      id: 's15-m07',
      type: 'multiple-choice',
      question: 'The pointwise limit of $f_n(x) = \\frac{nx}{1+n^2x^2}$ for $x > 0$ is:',
      options: [
      '$x
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'For fixed $x > 0$: $\\frac{nx}{1+n^2x^2} \\sim \\frac{1}{nx} \\to 0$.'
    },
      '$0
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'For fixed $x > 0$: $\\frac{nx}{1+n^2x^2} \\sim \\frac{1}{nx} \\to 0$.'
    },
      '$1/x
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'For fixed $x > 0$: $\\frac{nx}{1+n^2x^2} \\sim \\frac{1}{nx} \\to 0$.'
    },
      '$1
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'For fixed $x > 0$: $\\frac{nx}{1+n^2x^2} \\sim \\frac{1}{nx} \\to 0$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'For fixed $x > 0$: $\\frac{nx}{1+n^2x^2} \\sim \\frac{1}{nx} \\to 0$.'
    },
    {
      id: 's15-m08',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$ converges:',
      options: [
      'Pointwise but not uniformly',
      'Only for $x = 0
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'By M-test: $|\\cos(nx)/n^2| \\leq 1/n^2$ and $\\sum 1/n^2 < \\infty$.'
    },
      'Uniformly on $\\mathbb{R}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By M-test: $|\\cos(nx)/n^2| \\leq 1/n^2$ and $\\sum 1/n^2 < \\infty$.'
    },
      'Nowhere',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By M-test: $|\\cos(nx)/n^2| \\leq 1/n^2$ and $\\sum 1/n^2 < \\infty$.'
    },
    {
      id: 's15-m09',
      type: 'multiple-choice',
      question: 'If $f_n \\to f$ uniformly and $g_n \\to g$ uniformly on $[a,b]$, then $f_n g_n \\to$:',
      options: [
      'Does not converge',
      '$fg$ uniformly (if $f_n, g_n$ are bounded)',
      '$fg$ only pointwise',
      '$f + g
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Products of uniformly convergent bounded sequences converge uniformly.'
    },
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Products of uniformly convergent bounded sequences converge uniformly.'
    },
    {
      id: 's15-m10',
      type: 'multiple-choice',
      question: 'The Stone-Weierstrass theorem generalizes:',
      options: [
        'FTC',
        'Intermediate value theorem',
        'Mean value theorem',
        'Weierstrass approximation (polynomials are dense in $C([a,b])$)'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Stone-Weierstrass: subalgebras separating points are dense in $C(X)$.'
    },
    {
      id: 's15-m11',
      type: 'multiple-choice',
      question: 'Weierstrass approximation: every continuous $f$ on $[a,b]$ can be:',
      options: [
      'Exactly represented by a polynomial',
      'Approximated only at finitely many points',
      ',
      explanation: ',
      'Extended to all of $\\mathbb{R}
      correctIndex: 2,
      difficulty: ',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Polynomials are dense in $C([a,b])$ with respect to uniform convergence.'
    },
    {
      id: 's15-m12',
      type: 'multiple-choice',
      question: 'If $\\sum f_n$ converges uniformly and each $f_n$ is integrable:',
      options: [
      '$\\int \\sum f_n = \\sum \\int f_n
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Uniform convergence justifies term-by-term integration.'
    },
      'Integration cannot be interchanged',
      'The sum is not integrable',
      '$\\int \\sum f_n = 0
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Uniform convergence justifies term-by-term integration.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Uniform convergence justifies term-by-term integration.'
    },
    {
      id: 's15-m13',
      type: 'multiple-choice',
      question: 'For the series $\\sum_{n=1}^\\infty x^n$ on $(-1, 1)$:',
      options: [
        'Converges uniformly on $(-1, 1)$',
        'Does not converge uniformly anywhere',
        'Converges uniformly on $[-r, r]$ for any $r < 1$',
        'Converges only at $x = 0$'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Geometric series converges uniformly on compact subsets of $(-1, 1)$.'
    },
    {
      id: 's15-m14',
      type: 'multiple-choice',
      question: 'Term-by-term differentiation of $\\sum f_n$ is valid when:',
      options: [
      '$\\sum f_n$ converges',
      '$\\sum f_n\\'$ converges uniformly (and $\\sum f_n$ converges at one point)',
      'Always',
      'Each $f_n$ is differentiable',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Need uniform convergence of derivatives plus pointwise convergence of original.'
    },
    {
      id: 's15-m15',
      type: 'multiple-choice',
      question: 'The Bernstein polynomials $B_n(f; x)$ approximate:',
      options: [
        'Any continuous function uniformly on $[0,1]$',
        'Only polynomials',
        'Only differentiable functions',
        'Constant functions'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Bernstein polynomials provide constructive proof of Weierstrass theorem.'
    },
    {
      id: 's15-m16',
      type: 'numeric',
      question: 'If $f_n(x) = (1 + x/n)^n$, then $\\lim_{n \\to \\infty} f_n(1) = $? Round to 2 decimals.',
      correctAnswer: 2.72,
      numericRange: { min: 2.71, max: 2.73 },
      difficulty: 'medium',
      explanation: '$(1 + 1/n)^n \\to e \\approx 2.718$.'
    },
    {
      id: 's15-m17',
      type: 'multiple-choice',
      question: 'The sequence $(1 + x/n)^n$ converges to $e^x$:',
      options: [
      'Uniformly on compact subsets of $\\mathbb{R}
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Convergence is uniform on bounded intervals, not on all of $\\mathbb{R}$.'
    },
      'Only pointwise on $\\mathbb{R}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Convergence is uniform on bounded intervals, not on all of $\\mathbb{R}$.'
    },
      'Uniformly on all of $\\mathbb{R}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Convergence is uniform on bounded intervals, not on all of $\\mathbb{R}$.'
    },
      'Nowhere',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Convergence is uniform on bounded intervals, not on all of $\\mathbb{R}$.'
    },
    {
      id: 's15-m18',
      type: 'multiple-choice',
      question: 'If $f_n$ are equicontinuous and bounded on $[a,b]$:',
      options: [
      '$\\{f_n\\}$ has no convergent subsequence',
      '$\\{f_n\\}$ converges uniformly',
      '$\\{f_n\\}$ has a uniformly convergent subsequence',
      '$f_n$ are constant',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Arzelà-Ascoli: bounded + equicontinuous implies precompact.'
    },
    {
      id: 's15-m19',
      type: 'multiple-choice',
      question: 'The Cauchy criterion for uniform convergence: $f_n$ converges uniformly iff:',
      options: [
      '$f_n$ are continuous',
      'For all $\\varepsilon > 0$, $\\exists N$: $m, n > N \\Rightarrow \\|f_m - f_n\\|_\\infty < \\varepsilon
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Cauchy criterion in the uniform norm characterizes uniform convergence.'
    },
      '$f_n(x) \\to f(x)$ for each $x
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Cauchy criterion in the uniform norm characterizes uniform convergence.'
    },
      '$\\sup |f_n| < \\infty
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Cauchy criterion in the uniform norm characterizes uniform convergence.'
    },
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Cauchy criterion in the uniform norm characterizes uniform convergence.'
    },
    {
      id: 's15-m20',
      type: 'multiple-choice',
      question: 'The space $C([a,b])$ with uniform norm is:',
      options: [
      'A complete metric space (Banach space)',
      'Not complete',
      'Finite dimensional',
      'Not a metric space',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Uniform limits of continuous functions are continuous; $C([a,b])$ is complete.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's15-h01',
      type: 'multiple-choice',
      question: 'The dominated convergence theorem for Riemann integrals:',
      options: [
      'Doesn\\'t exist; DCT is only for Lebesgue integrals',
      'Requires uniform convergence',
      'Holds: if $|f_n| \\leq g$ integrable and $f_n \\to f$ pointwise, then $\\int f_n \\to \\int f
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'A version of DCT holds for Riemann integrals with appropriate conditions.'
    },
      'Requires $f_n$ continuous',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'A version of DCT holds for Riemann integrals with appropriate conditions.'
    },
    {
      id: 's15-h02',
      type: 'multiple-choice',
      question: 'There exists a sequence $f_n \\to f$ pointwise with $\\lim \\int f_n \\neq \\int f$ because:',
      options: [
      '$f$ is not integrable',
      'All sequences allow interchange',
      'This is impossible',
      'Pointwise convergence is too weak to interchange limits',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Classic counterexamples show pointwise convergence doesn\'t preserve integrals.'
    },
    {
      id: 's15-h03',
      type: 'multiple-choice',
      question: 'The Baire category theorem implies:',
      options: [
        '$C([0,1])$ is first category',
        'Nowhere-differentiable functions don\'t exist',
        'All continuous functions are differentiable',
        'The set of continuous nowhere-differentiable functions is residual (comeager) in $C([0,1])$'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Generic continuous functions are nowhere differentiable (Baire category argument).'
    },
    {
      id: 's15-h04',
      type: 'multiple-choice',
      question: 'Osgood\'s theorem: if $f_n \\to f$ pointwise and each $f_n$ is continuous:',
      options: [
      '$f$ is continuous everywhere',
      '$f$ is discontinuous everywhere',
      '$f$ is continuous on a dense set',
      '$f$ is differentiable',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Osgood: pointwise limits of continuous functions are continuous on a residual set.'
    },
    {
      id: 's15-h05',
      type: 'multiple-choice',
      question: 'If $\\sum f_n$ converges absolutely and uniformly, and each $f_n$ is $C^1$:',
      options: [
      'The sum may not be differentiable',
      'The sum is always $C^\\infty
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Term-by-term differentiation requires uniform convergence of derivatives.'
    },
      'The sum is $C^1$ if $\\sum f_n\\'$ also converges uniformly',
      'Term-by-term differentiation always fails',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Term-by-term differentiation requires uniform convergence of derivatives.'
    },
    {
      id: 's15-h06',
      type: 'multiple-choice',
      question: 'The Weierstrass function $\\sum a^n \\cos(b^n \\pi x)$ with $0 < a < 1$, $ab > 1 + 3\\pi/2$:',
      options: [
      'Is differentiable everywhere',
      'Is continuous but nowhere differentiable',
      'Is discontinuous',
      'Is a polynomial',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Classic example of continuous nowhere-differentiable function.'
    },
    {
      id: 's15-h07',
      type: 'multiple-choice',
      question: 'For power series $\\sum a_n x^n$ with radius $R$:',
      options: [
        'Convergence at $R$ implies uniform convergence on $[0, R]$',
        'Abel\'s theorem guarantees uniform convergence',
        'The series never converges at $R$',
        'Convergence at $R$ doesn\'t guarantee uniform convergence to $R$'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Convergence at endpoint doesn\'t imply uniform convergence including endpoint.'
    },
    {
      id: 's15-h08',
      type: 'multiple-choice',
      question: 'Abel\'s theorem states that if $\\sum a_n$ converges:',
      options: [
      'The power series diverges at $x = 1
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Abel: power series are continuous from the left at convergent boundary points.'
    },
      '$\\lim_{x \\to 1^-} \\sum a_n x^n = \\sum a_n
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Abel: power series are continuous from the left at convergent boundary points.'
    },
      'The series converges uniformly',
      '$\\sum a_n = 0
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Abel: power series are continuous from the left at convergent boundary points.'
    },
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Abel: power series are continuous from the left at convergent boundary points.'
    },
    {
      id: 's15-h09',
      type: 'multiple-choice',
      question: 'Tauber\'s theorem is a partial converse to Abel\'s theorem requiring:',
      options: [
      'No additional conditions',
      '$a_n$ to be positive',
      '$\\sum a_n$ to diverge',
      '$a_n = o(1/n)$ or similar growth condition',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Tauberian theorems recover $\\sum a_n$ from Abel sum with growth conditions.'
    },
    {
      id: 's15-h10',
      type: 'multiple-choice',
      question: 'The Moore-Osgood theorem: if $f_{mn} \\to f_n$ as $m \\to \\infty$ uniformly in $n$, and $f_n(m) \\to g(m)$:',
      options: [
      'Double limits may not exist',
      'The limits are unrelated',
      'One limit must be zero',
      '$\\lim_m \\lim_n f_{mn} = \\lim_n \\lim_m f_{mn}
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Moore-Osgood gives conditions for interchanging iterated limits.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Moore-Osgood gives conditions for interchanging iterated limits.'
    },
    {
      id: 's15-h11',
      type: 'multiple-choice',
      question: 'Egorov\'s theorem: if $f_n \\to f$ pointwise a.e. on $E$ with $m(E) < \\infty$:',
      options: [
        'Convergence is uniform',
        'This is about differentiation',
        'Convergence is never uniform',
        'For each $\\varepsilon$, convergence is uniform except on a set of measure $< \\varepsilon$'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Egorov: pointwise convergence is nearly uniform on finite measure spaces.'
    },
    {
      id: 's15-h12',
      type: 'multiple-choice',
      question: 'A sequence $f_n$ on $[0,1]$ is uniformly bounded but not equicontinuous. Then:',
      options: [
      'Arzelà-Ascoli still applies',
      'There may be no uniformly convergent subsequence',
      'All subsequences converge',
      '$f_n$ converges uniformly',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Equicontinuity is essential for Arzelà-Ascoli; without it, compactness fails.'
    },
    {
      id: 's15-h13',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^\\infty \\frac{\\sin(nx)}{n}$ (Fourier series of sawtooth):',
      options: [
      'Converges pointwise but not uniformly (Gibbs phenomenon)',
      'Converges uniformly on $\\mathbb{R}
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Gibbs phenomenon: Fourier series overshoots at discontinuities, preventing uniform convergence.'
    },
      'Diverges everywhere',
      'Converges only at $x = 0
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Gibbs phenomenon: Fourier series overshoots at discontinuities, preventing uniform convergence.'
    },
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Gibbs phenomenon: Fourier series overshoots at discontinuities, preventing uniform convergence.'
    },
    {
      id: 's15-h14',
      type: 'multiple-choice',
      question: 'If $f_n \\in C^\\infty$ converge uniformly to $f$, and all $f_n^{(k)}$ converge uniformly for each $k$:',
      options: [
      '$f \\in C^\\infty
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Uniform convergence of all derivatives implies the limit is smooth.'
    },
      '$f$ may not be smooth',
      '$f$ is analytic',
      '$f$ is constant',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Uniform convergence of all derivatives implies the limit is smooth.'
    },
    {
      id: 's15-h15',
      type: 'multiple-choice',
      question: 'The compact-open topology on $C(X, Y)$:',
      options: [
      'Is unrelated to uniform convergence',
      'Is discrete',
      'Makes all functions continuous',
      'Gives uniform convergence on compact sets when $Y$ is a metric space',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Compact-open topology captures uniform convergence on compact subsets.'
    },
    {
      id: 's15-h16',
      type: 'multiple-choice',
      question: 'Lusin\'s theorem: every measurable $f$ on $[0,1]$ equals a continuous function except on:',
      options: [
      'A null set',
      'A dense set',
      'The whole interval',
      'A set of arbitrarily small measure',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Lusin: measurable functions are nearly continuous.'
    },
    {
      id: 's15-h17',
      type: 'multiple-choice',
      question: 'For holomorphic functions, uniform convergence on compact sets implies:',
      options: [
      'Only continuity of limit',
      'The limit is holomorphic and derivatives converge',
      'Nothing about derivatives',
      'The limit is constant',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Weierstrass theorem in complex analysis: holomorphic limits preserve holomorphy.'
    },
    {
      id: 's15-h18',
      type: 'multiple-choice',
      question: 'Runge\'s theorem: every holomorphic function on a compact $K$ can be:',
      options: [
      'Uniformly approximated by polynomials (if $\\mathbb{C} \\setminus K$ is connected)',
      'Approximated only at the boundary',
      'Exactly represented by a polynomial',
      'Extended to all of $\\mathbb{C}
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Runge: rational (or polynomial) approximation of holomorphic functions.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Runge: rational (or polynomial) approximation of holomorphic functions.'
    },
    {
      id: 's15-h19',
      type: 'multiple-choice',
      question: 'The principle of uniform boundedness (Banach-Steinhaus) applied to function spaces:',
      options: [
      'Is unrelated to pointwise convergence',
      'Convergence is always uniform',
      'Pointwise bounded operators are uniformly bounded',
      'All functions are bounded',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Uniform boundedness principle: pointwise bounded implies uniformly bounded for operators.'
    },
    {
      id: 's15-h20',
      type: 'multiple-choice',
      question: 'Mercer\'s theorem concerns:',
      options: [
      'Pointwise convergence',
      'Uniform convergence of eigenfunction expansions of positive kernels',
      'Divergence of series',
      'Non-uniform limits',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Mercer: positive definite kernels have uniformly convergent eigenfunction expansions.'
    }
  ] as QuizQuestion[],
};
