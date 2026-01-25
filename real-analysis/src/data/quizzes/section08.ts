import type { QuizQuestion } from './types';

export const section08Quiz = {
  easy: [
    {
      id: 's08-e01',
      type: 'multiple-choice',
      question: 'A power series has the form:',
      options: [
      '$\\sum_{n=0}^{\\infty} a_n
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A power series centered at $a$ is $\\sum c_n(x-a)^n$ where $c_n$ are coefficients.'
    },
      '$\\sum_{n=0}^{\\infty} n^x
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A power series centered at $a$ is $\\sum c_n(x-a)^n$ where $c_n$ are coefficients.'
    },
      '$\\sum_{n=0}^{\\infty} c_n (x - a)^n
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A power series centered at $a$ is $\\sum c_n(x-a)^n$ where $c_n$ are coefficients.'
    },
      '$\\sum_{n=0}^{\\infty} x^{c_n}
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A power series centered at $a$ is $\\sum c_n(x-a)^n$ where $c_n$ are coefficients.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A power series centered at $a$ is $\\sum c_n(x-a)^n$ where $c_n$ are coefficients.'
    },
    {
      id: 's08-e02',
      type: 'multiple-choice',
      question: 'The radius of convergence $R$ of a power series is:',
      options: [
      'Always $1
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The radius of convergence determines the interval where the series converges absolutely.'
    },
      'Always $\\infty
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The radius of convergence determines the interval where the series converges absolutely.'
    },
      'The sum of the series',
      'The distance from center to where the series stops converging',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The radius of convergence determines the interval where the series converges absolutely.'
    },
    {
      id: 's08-e03',
      type: 'multiple-choice',
      question: 'If $R$ is the radius of convergence, the series converges absolutely for:',
      options: [
      '$x = a$ only',
      '$|x - a| < R
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Inside the radius ($|x-a| < R$), the series converges absolutely.'
    },
      '$|x - a| > R
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Inside the radius ($|x-a| < R$), the series converges absolutely.'
    },
      '$|x - a| = R
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Inside the radius ($|x-a| < R$), the series converges absolutely.'
    },
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Inside the radius ($|x-a| < R$), the series converges absolutely.'
    },
    {
      id: 's08-e04',
      type: 'multiple-choice',
      question: 'At the boundary $|x - a| = R$:',
      options: [
      'The series always diverges',
      'Convergence must be checked separately at each endpoint',
      'The series always converges',
      'The series converges conditionally',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'At the endpoints, the series may converge, diverge, or converge conditionally - each must be tested.'
    },
    {
      id: 's08-e05',
      type: 'multiple-choice',
      question: 'The power series for $e^x$ is:',
      options: [
      '$\\sum_{n=0}^{\\infty} x^n
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The Maclaurin series for $e^x$ is $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$, valid for all $x$.'
    },
      '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n}
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The Maclaurin series for $e^x$ is $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$, valid for all $x$.'
    },
      '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n!}
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The Maclaurin series for $e^x$ is $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$, valid for all $x$.'
    },
      '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The Maclaurin series for $e^x$ is $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$, valid for all $x$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The Maclaurin series for $e^x$ is $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$, valid for all $x$.'
    },
    {
      id: 's08-e06',
      type: 'multiple-choice',
      question: 'The radius of convergence of $\\sum_{n=0}^{\\infty} x^n$ is:',
      options: [
      '$0
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'This geometric series converges for $|x| < 1$, so $R = 1$.'
    },
      '$\\infty
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This geometric series converges for $|x| < 1$, so $R = 1$.'
    },
      '$e
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This geometric series converges for $|x| < 1$, so $R = 1$.'
    },
      '$1
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This geometric series converges for $|x| < 1$, so $R = 1$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This geometric series converges for $|x| < 1$, so $R = 1$.'
    },
    {
      id: 's08-e07',
      type: 'multiple-choice',
      question: 'The radius of convergence of $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ is:',
      options: [
      '$0
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The series for $e^x$ converges for all $x \\in \\mathbb{R}$, so $R = \\infty$.'
    },
      '$\\infty
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The series for $e^x$ converges for all $x \\in \\mathbb{R}$, so $R = \\infty$.'
    },
      '$1
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The series for $e^x$ converges for all $x \\in \\mathbb{R}$, so $R = \\infty$.'
    },
      '$e
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The series for $e^x$ converges for all $x \\in \\mathbb{R}$, so $R = \\infty$.'
    },
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The series for $e^x$ converges for all $x \\in \\mathbb{R}$, so $R = \\infty$.'
    },
    {
      id: 's08-e08',
      type: 'multiple-choice',
      question: 'If $R = 0$, the power series converges only at:',
      options: [
        'No points',
        'All real numbers',
        'The center $x = a$',
        'The interval $[-1, 1]$'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'When $R = 0$, the series converges only at the single point $x = a$.'
    },
    {
      id: 's08-e09',
      type: 'multiple-choice',
      question: 'The formula $R = \\lim_{n \\to \\infty} \\left|\\frac{c_n}{c_{n+1}}\\right|$ gives the radius when:',
      options: [
      'The limit exists',
      'Always',
      'The limit is $0
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'This formula (derived from the ratio test) gives $R$ when the limit exists.'
    },
      'The coefficients alternate',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'This formula (derived from the ratio test) gives $R$ when the limit exists.'
    },
    {
      id: 's08-e10',
      type: 'multiple-choice',
      question: 'The power series $\\sum_{n=0}^{\\infty} n! x^n$ has $R = $:',
      options: ['$0$', '$1$', '$e$', '$\\infty$'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'By ratio test: $\\lim |c_{n+1}/c_n| = \\lim (n+1) = \\infty$, so $R = 0$.'
    },
    {
      id: 's08-e11',
      type: 'multiple-choice',
      question: 'The Maclaurin series for $\\sin x$ is:',
      options: [
      '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$.'
    },
      '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$.'
    },
      '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$.'
    },
      '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n}
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$.'
    },
    {
      id: 's08-e12',
      type: 'multiple-choice',
      question: 'The Maclaurin series for $\\cos x$ is:',
      options: [
      '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$.'
    },
      '$\\sum_{n=0}^{\\infty} \\frac{x^{2n}}{(2n)!}
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$.'
    },
      '$\\sum_{n=0}^{\\infty} x^n
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$.'
    },
      '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$.'
    },
    {
      id: 's08-e13',
      type: 'numeric',
      question: 'The geometric series $\\sum_{n=0}^{\\infty} x^n$ equals $\\frac{1}{1-x}$ for $|x| < 1$. What is the sum when $x = 0.5$?',
      correctAnswer: 2,
      difficulty: 'easy',
      explanation: '$\\frac{1}{1-0.5} = \\frac{1}{0.5} = 2$.'
    },
    {
      id: 's08-e14',
      type: 'multiple-choice',
      question: 'The interval of convergence includes the radius endpoints if:',
      options: [
      'Always',
      'Never',
      'The coefficients are positive',
      'The series converges there (must check)',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Endpoints are included in the interval of convergence only if the series converges at those points.'
    },
    {
      id: 's08-e15',
      type: 'multiple-choice',
      question: 'A function equals its Taylor series on an interval if it is:',
      options: [
      'Continuous',
      'Differentiable',
      'Bounded',
      'Analytic on that interval',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'A function is analytic if it equals its Taylor series in some neighborhood of each point.'
    },
    {
      id: 's08-e16',
      type: 'multiple-choice',
      question: 'The power series $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ represents which function for $|x| < 1$?',
      options: [
      '$e^x
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Integrating $\\frac{1}{1-x} = \\sum x^n$ gives $-\\ln(1-x) = \\sum \\frac{x^n}{n}$.'
    },
      '$-\\ln(1-x)
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Integrating $\\frac{1}{1-x} = \\sum x^n$ gives $-\\ln(1-x) = \\sum \\frac{x^n}{n}$.'
    },
      '$\\sin x
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Integrating $\\frac{1}{1-x} = \\sum x^n$ gives $-\\ln(1-x) = \\sum \\frac{x^n}{n}$.'
    },
      '$\\cos x
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Integrating $\\frac{1}{1-x} = \\sum x^n$ gives $-\\ln(1-x) = \\sum \\frac{x^n}{n}$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Integrating $\\frac{1}{1-x} = \\sum x^n$ gives $-\\ln(1-x) = \\sum \\frac{x^n}{n}$.'
    },
    {
      id: 's08-e17',
      type: 'multiple-choice',
      question: 'Differentiating a power series $\\sum c_n x^n$ term by term gives:',
      options: [
        '$\\sum n c_n x^{n-1}$',
        '$\\sum c_n x^{n+1}$',
        '$\\sum \\frac{c_n x^{n+1}}{n+1}$',
        '$\\sum c_n$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Term-by-term differentiation: $\\frac{d}{dx}(c_n x^n) = n c_n x^{n-1}$.'
    },
    {
      id: 's08-e18',
      type: 'multiple-choice',
      question: 'Integrating a power series $\\sum c_n x^n$ term by term gives:',
      options: [
      '$\\sum c_n x^{n-1}
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Term-by-term integration: $\\int c_n x^n dx = \\frac{c_n x^{n+1}}{n+1}$.'
    },
      '$\\sum n c_n x^n
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Term-by-term integration: $\\int c_n x^n dx = \\frac{c_n x^{n+1}}{n+1}$.'
    },
      '$\\sum c_n
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Term-by-term integration: $\\int c_n x^n dx = \\frac{c_n x^{n+1}}{n+1}$.'
    },
      '$\\sum \\frac{c_n x^{n+1}}{n+1} + C
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Term-by-term integration: $\\int c_n x^n dx = \\frac{c_n x^{n+1}}{n+1}$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Term-by-term integration: $\\int c_n x^n dx = \\frac{c_n x^{n+1}}{n+1}$.'
    },
    {
      id: 's08-e19',
      type: 'multiple-choice',
      question: 'The radius of convergence of $\\sum_{n=0}^{\\infty} \\frac{x^n}{2^n}$ is:',
      options: [
      '$1
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'This is geometric with ratio $x/2$, converging for $|x/2| < 1$, i.e., $|x| < 2$. So $R = 2$.'
    },
      '$1/2
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This is geometric with ratio $x/2$, converging for $|x/2| < 1$, i.e., $|x| < 2$. So $R = 2$.'
    },
      '$\\infty
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This is geometric with ratio $x/2$, converging for $|x/2| < 1$, i.e., $|x| < 2$. So $R = 2$.'
    },
      '$2
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This is geometric with ratio $x/2$, converging for $|x/2| < 1$, i.e., $|x| < 2$. So $R = 2$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'This is geometric with ratio $x/2$, converging for $|x/2| < 1$, i.e., $|x| < 2$. So $R = 2$.'
    },
    {
      id: 's08-e20',
      type: 'numeric',
      question: 'For $\\sum_{n=0}^{\\infty} c_n x^n$ with $c_n = 1/3^n$, the radius of convergence is:',
      correctAnswer: 3,
      difficulty: 'easy',
      explanation: 'The series is $\\sum (x/3)^n$, converging for $|x| < 3$.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's08-m01',
      type: 'multiple-choice',
      question: 'Using the root test formula $R = 1/\\limsup |c_n|^{1/n}$, find $R$ for $\\sum n^2 x^n$:',
      options: [
      '$1
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$\\limsup |n^2|^{1/n} = \\limsup n^{2/n} = 1$, so $R = 1/1 = 1$.'
    },
      '$0
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\limsup |n^2|^{1/n} = \\limsup n^{2/n} = 1$, so $R = 1/1 = 1$.'
    },
      '$2
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\limsup |n^2|^{1/n} = \\limsup n^{2/n} = 1$, so $R = 1/1 = 1$.'
    },
      '$\\infty
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\limsup |n^2|^{1/n} = \\limsup n^{2/n} = 1$, so $R = 1/1 = 1$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\limsup |n^2|^{1/n} = \\limsup n^{2/n} = 1$, so $R = 1/1 = 1$.'
    },
    {
      id: 's08-m02',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ has $R = 1$. At $x = 1$, the series:',
      options: [
      'Converges absolutely',
      'Diverges',
      'Converges conditionally',
      'Equals $0
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'At $x = 1$, we get $\\sum 1/n$, the harmonic series, which diverges.'
    },
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'At $x = 1$, we get $\\sum 1/n$, the harmonic series, which diverges.'
    },
    {
      id: 's08-m03',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ at $x = -1$:',
      options: [
      'Diverges',
      'Oscillates',
      'Converges absolutely',
      'Converges conditionally',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'At $x = -1$, we get $\\sum \\frac{(-1)^n}{n}$, the alternating harmonic series, which converges conditionally.'
    },
    {
      id: 's08-m04',
      type: 'multiple-choice',
      question: 'The interval of convergence for $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ is:',
      options: ['$(-1, 1)$', '$[-1, 1)$', '$(-1, 1]$', '$[-1, 1]$'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$R = 1$. At $x = -1$: converges. At $x = 1$: diverges. So $[-1, 1)$.'
    },
    {
      id: 's08-m05',
      type: 'multiple-choice',
      question: 'For $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$, differentiating term by term gives:',
      options: [
      '$\\sum_{n=1}^{\\infty} \\frac{x^{n-1}}{(n-1)!}
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\frac{d}{dx}\\sum \\frac{x^n}{n!} = \\sum \\frac{nx^{n-1}}{n!} = \\sum \\frac{x^{n-1}}{(n-1)!} = \\sum \\frac{x^n}{n!} = e^x$.'
    },
      '$\\sum_{n=0}^{\\infty} \\frac{x^{n+1}}{(n+1)!}
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$\\frac{d}{dx}\\sum \\frac{x^n}{n!} = \\sum \\frac{nx^{n-1}}{n!} = \\sum \\frac{x^{n-1}}{(n-1)!} = \\sum \\frac{x^n}{n!} = e^x$.'
    },
      '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$\\frac{d}{dx}\\sum \\frac{x^n}{n!} = \\sum \\frac{nx^{n-1}}{n!} = \\sum \\frac{x^{n-1}}{(n-1)!} = \\sum \\frac{x^n}{n!} = e^x$.'
    },
      '$0
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$\\frac{d}{dx}\\sum \\frac{x^n}{n!} = \\sum \\frac{nx^{n-1}}{n!} = \\sum \\frac{x^{n-1}}{(n-1)!} = \\sum \\frac{x^n}{n!} = e^x$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$\\frac{d}{dx}\\sum \\frac{x^n}{n!} = \\sum \\frac{nx^{n-1}}{n!} = \\sum \\frac{x^{n-1}}{(n-1)!} = \\sum \\frac{x^n}{n!} = e^x$.'
    },
    {
      id: 's08-m06',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=0}^{\\infty} \\frac{(2x)^n}{n!}$ represents:',
      options: [
      '$e^x
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Substituting $2x$ into the series for $e^t$: $\\sum \\frac{(2x)^n}{n!} = e^{2x}$.'
    },
      '$2e^x
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Substituting $2x$ into the series for $e^t$: $\\sum \\frac{(2x)^n}{n!} = e^{2x}$.'
    },
      '$\\sin(2x)
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Substituting $2x$ into the series for $e^t$: $\\sum \\frac{(2x)^n}{n!} = e^{2x}$.'
    },
      '$e^{2x}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Substituting $2x$ into the series for $e^t$: $\\sum \\frac{(2x)^n}{n!} = e^{2x}$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Substituting $2x$ into the series for $e^t$: $\\sum \\frac{(2x)^n}{n!} = e^{2x}$.'
    },
    {
      id: 's08-m07',
      type: 'multiple-choice',
      question: 'The Taylor series for $\\ln(1+x)$ centered at $0$ is:',
      options: [
      '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n}
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}$.'
    },
      '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}$.'
    },
      '$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}$.'
    },
      '$\\sum_{n=1}^{\\infty} (-1)^n x^n
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}$.'
    },
    {
      id: 's08-m08',
      type: 'numeric',
      question: 'For $\\sum_{n=0}^{\\infty} \\frac{x^n}{4^n}$, the radius of convergence is:',
      correctAnswer: 4,
      difficulty: 'medium',
      explanation: 'This is $\\sum (x/4)^n$, converging for $|x| < 4$.'
    },
    {
      id: 's08-m09',
      type: 'multiple-choice',
      question: 'The binomial series $(1+x)^\\alpha = \\sum_{n=0}^{\\infty} \\binom{\\alpha}{n} x^n$ converges for $|x| < 1$ when:',
      options: [
      '$\\alpha$ is a positive integer',
      '$\\alpha = 0
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'For any real $\\alpha$, the binomial series converges absolutely for $|x| < 1$.'
    },
      '$\\alpha$ is rational',
      '$\\alpha$ is any real number',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'For any real $\\alpha$, the binomial series converges absolutely for $|x| < 1$.'
    },
    {
      id: 's08-m10',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{x^n}{n^2}$ has $R = 1$. At both endpoints:',
      options: [
      'The series converges absolutely',
      'The series diverges',
      'Cannot be determined',
      'The series converges conditionally at one endpoint',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'At $x = 1$: $\\sum 1/n^2$ converges. At $x = -1$: $\\sum (-1)^n/n^2$ converges absolutely.'
    },
    {
      id: 's08-m11',
      type: 'multiple-choice',
      question: 'If $f(x) = \\sum_{n=0}^{\\infty} c_n x^n$, then $c_n = $:',
      options: [
      '$f^{(n)}(0)
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'By Taylor\'s theorem, the coefficient $c_n = \\frac{f^{(n)}(0)}{n!}$.'
    },
      '$f(n)
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'By Taylor\'s theorem, the coefficient $c_n = \\frac{f^{(n)}(0)}{n!}$.'
    },
      '$\\frac{f^{(n)}(0)}{n!}
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'By Taylor\'s theorem, the coefficient $c_n = \\frac{f^{(n)}(0)}{n!}$.'
    },
      '$\\frac{f(0)}{n!}
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'By Taylor\'s theorem, the coefficient $c_n = \\frac{f^{(n)}(0)}{n!}$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'By Taylor\'s theorem, the coefficient $c_n = \\frac{f^{(n)}(0)}{n!}$.'
    },
    {
      id: 's08-m12',
      type: 'multiple-choice',
      question: 'The power series $\\sum_{n=0}^{\\infty} (-1)^n x^{2n}$ equals:',
      options: [
      '$\\frac{1}{1-x^2}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'This is geometric with ratio $-x^2$: $\\sum (-x^2)^n = \\frac{1}{1+x^2}$ for $|x| < 1$.'
    },
      '$\\frac{1}{1+x^2}
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'This is geometric with ratio $-x^2$: $\\sum (-x^2)^n = \\frac{1}{1+x^2}$ for $|x| < 1$.'
    },
      '$\\cos x
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'This is geometric with ratio $-x^2$: $\\sum (-x^2)^n = \\frac{1}{1+x^2}$ for $|x| < 1$.'
    },
      '$e^{-x^2}
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'This is geometric with ratio $-x^2$: $\\sum (-x^2)^n = \\frac{1}{1+x^2}$ for $|x| < 1$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'This is geometric with ratio $-x^2$: $\\sum (-x^2)^n = \\frac{1}{1+x^2}$ for $|x| < 1$.'
    },
    {
      id: 's08-m13',
      type: 'multiple-choice',
      question: 'To find the series for $\\arctan x$, we integrate:',
      options: [
      '$\\frac{1}{1-x}
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\arctan x = \\int \\frac{1}{1+x^2} dx = \\int \\sum (-1)^n x^{2n} dx = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$.'
    },
      '$\\frac{1}{x}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\arctan x = \\int \\frac{1}{1+x^2} dx = \\int \\sum (-1)^n x^{2n} dx = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$.'
    },
      '$e^x
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\arctan x = \\int \\frac{1}{1+x^2} dx = \\int \\sum (-1)^n x^{2n} dx = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$.'
    },
      '$\\frac{1}{1+x^2}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\arctan x = \\int \\frac{1}{1+x^2} dx = \\int \\sum (-1)^n x^{2n} dx = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\arctan x = \\int \\frac{1}{1+x^2} dx = \\int \\sum (-1)^n x^{2n} dx = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$.'
    },
    {
      id: 's08-m14',
      type: 'multiple-choice',
      question: 'The radius of convergence of $\\sum_{n=0}^{\\infty} n! x^n$ is:',
      options: [
      '$1
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Ratio: $\\frac{(n+1)!|x|^{n+1}}{n!|x|^n} = (n+1)|x| \\to \\infty$ for any $x \\neq 0$. So $R = 0$.'
    },
      '$e
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Ratio: $\\frac{(n+1)!|x|^{n+1}}{n!|x|^n} = (n+1)|x| \\to \\infty$ for any $x \\neq 0$. So $R = 0$.'
    },
      '$0
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Ratio: $\\frac{(n+1)!|x|^{n+1}}{n!|x|^n} = (n+1)|x| \\to \\infty$ for any $x \\neq 0$. So $R = 0$.'
    },
      '$\\infty
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Ratio: $\\frac{(n+1)!|x|^{n+1}}{n!|x|^n} = (n+1)|x| \\to \\infty$ for any $x \\neq 0$. So $R = 0$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Ratio: $\\frac{(n+1)!|x|^{n+1}}{n!|x|^n} = (n+1)|x| \\to \\infty$ for any $x \\neq 0$. So $R = 0$.'
    },
    {
      id: 's08-m15',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=0}^{\\infty} \\frac{x^{2n}}{(2n)!}$ represents:',
      options: [
      '$\\cosh x
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$\\cosh x = \\frac{e^x + e^{-x}}{2} = \\sum \\frac{x^{2n}}{(2n)!}$ (even terms of $e^x$).'
    },
      '$\\sin x
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\cosh x = \\frac{e^x + e^{-x}}{2} = \\sum \\frac{x^{2n}}{(2n)!}$ (even terms of $e^x$).'
    },
      '$\\cos x
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\cosh x = \\frac{e^x + e^{-x}}{2} = \\sum \\frac{x^{2n}}{(2n)!}$ (even terms of $e^x$).'
    },
      '$e^x
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\cosh x = \\frac{e^x + e^{-x}}{2} = \\sum \\frac{x^{2n}}{(2n)!}$ (even terms of $e^x$).'
    },
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\cosh x = \\frac{e^x + e^{-x}}{2} = \\sum \\frac{x^{2n}}{(2n)!}$ (even terms of $e^x$).'
    },
    {
      id: 's08-m16',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{(2n+1)!}$ represents:',
      options: [
      '$\\sin x
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\sinh x = \\frac{e^x - e^{-x}}{2} = \\sum \\frac{x^{2n+1}}{(2n+1)!}$ (odd terms of $e^x$).'
    },
      '$\\sinh x
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\sinh x = \\frac{e^x - e^{-x}}{2} = \\sum \\frac{x^{2n+1}}{(2n+1)!}$ (odd terms of $e^x$).'
    },
      '$\\cos x
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\sinh x = \\frac{e^x - e^{-x}}{2} = \\sum \\frac{x^{2n+1}}{(2n+1)!}$ (odd terms of $e^x$).'
    },
      '$e^x
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\sinh x = \\frac{e^x - e^{-x}}{2} = \\sum \\frac{x^{2n+1}}{(2n+1)!}$ (odd terms of $e^x$).'
    },
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\sinh x = \\frac{e^x - e^{-x}}{2} = \\sum \\frac{x^{2n+1}}{(2n+1)!}$ (odd terms of $e^x$).'
    },
    {
      id: 's08-m17',
      type: 'numeric',
      question: 'For $\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n \\cdot 3^n}$, the center is at $a = $:',
      correctAnswer: 2,
      difficulty: 'medium',
      explanation: 'The series is centered at $a = 2$, as seen from $(x-2)^n$.'
    },
    {
      id: 's08-m18',
      type: 'multiple-choice',
      question: 'Cauchy-Hadamard formula states $R = 1/\\limsup |c_n|^{1/n}$. This uses:',
      options: [
      'The ratio test',
      'The integral test',
      'The root test',
      'The comparison test',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The Cauchy-Hadamard formula is based on the root test applied to the power series.'
    },
    {
      id: 's08-m19',
      type: 'multiple-choice',
      question: 'If the series $\\sum c_n x^n$ has $R = 5$, then $\\sum c_n (2x)^n$ has $R = $:',
      options: [
      '$5
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Substituting $2x$ for $x$: converges when $|2x| < 5$, i.e., $|x| < 2.5$.'
    },
      '$10
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Substituting $2x$ for $x$: converges when $|2x| < 5$, i.e., $|x| < 2.5$.'
    },
      '$2.5
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Substituting $2x$ for $x$: converges when $|2x| < 5$, i.e., $|x| < 2.5$.'
    },
      '$5/2
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Substituting $2x$ for $x$: converges when $|2x| < 5$, i.e., $|x| < 2.5$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Substituting $2x$ for $x$: converges when $|2x| < 5$, i.e., $|x| < 2.5$.'
    },
    {
      id: 's08-m20',
      type: 'multiple-choice',
      question: 'A power series and its derivatives have:',
      options: [
      'Different radii of convergence',
      'The same radius of convergence',
      'Derivatives have smaller radius',
      'Derivatives have larger radius',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'A power series, its term-by-term derivative, and integral all have the same radius of convergence.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's08-h01',
      type: 'multiple-choice',
      question: 'The function $f(x) = e^{-1/x^2}$ for $x \\neq 0$ and $f(0) = 0$ is:',
      options: [
      'Not differentiable at $0
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$f$ is infinitely differentiable with all derivatives at $0$ equal to $0$, so its Taylor series is $0$, but $f \\neq 0$ for $x \\neq 0$.'
    },
      'Analytic everywhere',
      'Differentiable but not analytic at $0
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$f$ is infinitely differentiable with all derivatives at $0$ equal to $0$, so its Taylor series is $0$, but $f \\neq 0$ for $x \\neq 0$.'
    },
      'Equal to its Taylor series at $0
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$f$ is infinitely differentiable with all derivatives at $0$ equal to $0$, so its Taylor series is $0$, but $f \\neq 0$ for $x \\neq 0$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$f$ is infinitely differentiable with all derivatives at $0$ equal to $0$, so its Taylor series is $0$, but $f \\neq 0$ for $x \\neq 0$.'
    },
    {
      id: 's08-h02',
      type: 'multiple-choice',
      question: 'The radius of convergence of $\\sum_{n=0}^{\\infty} \\frac{n!}{n^n} x^n$ is:',
      options: [
      '$0
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'By Stirling: $n!/n^n \\approx \\sqrt{2\\pi n}/e^n$. Ratio test: $\\frac{c_{n+1}}{c_n} \\to 1/e$, so $R = e$.'
    },
      '$e
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'By Stirling: $n!/n^n \\approx \\sqrt{2\\pi n}/e^n$. Ratio test: $\\frac{c_{n+1}}{c_n} \\to 1/e$, so $R = e$.'
    },
      '$1
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'By Stirling: $n!/n^n \\approx \\sqrt{2\\pi n}/e^n$. Ratio test: $\\frac{c_{n+1}}{c_n} \\to 1/e$, so $R = e$.'
    },
      '$\\infty
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'By Stirling: $n!/n^n \\approx \\sqrt{2\\pi n}/e^n$. Ratio test: $\\frac{c_{n+1}}{c_n} \\to 1/e$, so $R = e$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'By Stirling: $n!/n^n \\approx \\sqrt{2\\pi n}/e^n$. Ratio test: $\\frac{c_{n+1}}{c_n} \\to 1/e$, so $R = e$.'
    },
    {
      id: 's08-h03',
      type: 'multiple-choice',
      question: 'The power series $\\sum_{n=1}^{\\infty} \\frac{x^n}{n^n}$ has $R = $:',
      options: [
      '$0
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'By root test: $(1/n^n)^{1/n} = 1/n \\to 0 < 1$ for all $x$. The series converges for all $x$, so $R = \\infty$.'
    },
      '$\\infty
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'By root test: $(1/n^n)^{1/n} = 1/n \\to 0 < 1$ for all $x$. The series converges for all $x$, so $R = \\infty$.'
    },
      '$1
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'By root test: $(1/n^n)^{1/n} = 1/n \\to 0 < 1$ for all $x$. The series converges for all $x$, so $R = \\infty$.'
    },
      '$e
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'By root test: $(1/n^n)^{1/n} = 1/n \\to 0 < 1$ for all $x$. The series converges for all $x$, so $R = \\infty$.'
    },
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'By root test: $(1/n^n)^{1/n} = 1/n \\to 0 < 1$ for all $x$. The series converges for all $x$, so $R = \\infty$.'
    },
    {
      id: 's08-h04',
      type: 'multiple-choice',
      question: 'For $\\sum_{n=0}^{\\infty} 2^n x^{n^2}$ (a lacunary series), the radius of convergence is:',
      options: [
      '$1
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'For $|x| < 1$: terms go to $0$ since $x^{n^2} \\to 0$ faster than $2^n$ grows. For $|x| > 1$: diverges. $R = 1$.'
    },
      '$0
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'For $|x| < 1$: terms go to $0$ since $x^{n^2} \\to 0$ faster than $2^n$ grows. For $|x| > 1$: diverges. $R = 1$.'
    },
      '$1/2
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'For $|x| < 1$: terms go to $0$ since $x^{n^2} \\to 0$ faster than $2^n$ grows. For $|x| > 1$: diverges. $R = 1$.'
    },
      '$\\infty
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'For $|x| < 1$: terms go to $0$ since $x^{n^2} \\to 0$ faster than $2^n$ grows. For $|x| > 1$: diverges. $R = 1$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'For $|x| < 1$: terms go to $0$ since $x^{n^2} \\to 0$ faster than $2^n$ grows. For $|x| > 1$: diverges. $R = 1$.'
    },
    {
      id: 's08-h05',
      type: 'multiple-choice',
      question: 'Abel\'s theorem states that if $\\sum c_n$ converges to $S$, then:',
      options: [
      '$\\sum c_n x^n$ diverges at $x = 1
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Abel\'s theorem: if $\\sum c_n$ converges, then $\\lim_{x \\to 1^-} \\sum c_n x^n = \\sum c_n$.'
    },
      '$R = 1$ always',
      'The series converges uniformly',
      '$\\lim_{x \\to 1^-} \\sum c_n x^n = S
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Abel\'s theorem: if $\\sum c_n$ converges, then $\\lim_{x \\to 1^-} \\sum c_n x^n = \\sum c_n$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Abel\'s theorem: if $\\sum c_n$ converges, then $\\lim_{x \\to 1^-} \\sum c_n x^n = \\sum c_n$.'
    },
    {
      id: 's08-h06',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ at $x = 1$ gives the harmonic series. By Abel\'s theorem applied at $x = -1$:',
      options: [
        '$\\lim_{x \\to -1^+} \\sum \\frac{x^n}{n} = \\ln 2$',
        'The limit does not exist',
        '$\\lim_{x \\to -1^+} \\sum \\frac{x^n}{n} = -\\ln 2$',
        'Abel\'s theorem does not apply'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$\\sum \\frac{(-1)^n}{n} = -\\ln 2$. By Abel, $\\lim_{x \\to -1^+} \\sum \\frac{x^n}{n} = -\\ln 2$.'
    },
    {
      id: 's08-h07',
      type: 'multiple-choice',
      question: 'The product of two power series $\\sum a_n x^n$ and $\\sum b_n x^n$ (both with $R > 0$) is:',
      options: [
      '$\\sum c_n x^n$ where $c_n = \\sum_{k=0}^{n} a_k b_{n-k}
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The Cauchy product: $c_n = \\sum_{k=0}^{n} a_k b_{n-k}$ gives a power series with $R \\geq \\min(R_1, R_2)$.'
    },
      '$\\sum (a_n + b_n) x^n
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The Cauchy product: $c_n = \\sum_{k=0}^{n} a_k b_{n-k}$ gives a power series with $R \\geq \\min(R_1, R_2)$.'
    },
      '$\\sum a_n b_n x^n
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The Cauchy product: $c_n = \\sum_{k=0}^{n} a_k b_{n-k}$ gives a power series with $R \\geq \\min(R_1, R_2)$.'
    },
      'Not a power series',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The Cauchy product: $c_n = \\sum_{k=0}^{n} a_k b_{n-k}$ gives a power series with $R \\geq \\min(R_1, R_2)$.'
    },
    {
      id: 's08-h08',
      type: 'multiple-choice',
      question: 'A real analytic function has the property that:',
      options: [
      'It is continuous',
      'It equals its Taylor series in some neighborhood of each point',
      'It is differentiable once',
      'It is bounded',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Real analytic means locally equal to a convergent power series.'
    },
    {
      id: 's08-h09',
      type: 'numeric',
      question: 'For $\\sum_{n=0}^{\\infty} \\frac{(x-1)^n}{n+1}$, the radius of convergence is:',
      correctAnswer: 1,
      difficulty: 'hard',
      explanation: 'Ratio: $\\frac{n+1}{n+2} \\to 1$, so $R = 1$. Centered at $a = 1$.'
    },
    {
      id: 's08-h10',
      type: 'multiple-choice',
      question: 'The Weierstrass M-test applied to power series on $[-r, r]$ with $r < R$ shows:',
      options: [
        'Pointwise convergence',
        'Uniform convergence',
        'Absolute convergence',
        'Conditional convergence'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'On any closed interval inside the radius, the power series converges uniformly.'
    },
    {
      id: 's08-h11',
      type: 'multiple-choice',
      question: 'The Maclaurin series for $(1-x)^{-1/2}$ involves:',
      options: [
      'Integer coefficients',
      'Factorial coefficients',
      'Fibonacci numbers',
      'Binomial coefficients $\\binom{-1/2}{n}
      correctIndex: 3,
      difficulty: 'hard',
      explanation: '$(1-x)^{-1/2} = \\sum \\binom{-1/2}{n} (-x)^n$ where $\\binom{-1/2}{n} = \\frac{(-1/2)(-3/2)\\cdots}{n!}$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$(1-x)^{-1/2} = \\sum \\binom{-1/2}{n} (-x)^n$ where $\\binom{-1/2}{n} = \\frac{(-1/2)(-3/2)\\cdots}{n!}$.'
    },
    {
      id: 's08-h12',
      type: 'multiple-choice',
      question: 'If $\\sum c_n x^n$ has a natural boundary at $|x| = R$, then:',
      options: [
      'The series cannot be analytically continued beyond $|x| = R
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'A natural boundary means no analytic continuation exists beyond the circle of convergence.'
    },
      'The series can be analytically continued beyond $R
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'A natural boundary means no analytic continuation exists beyond the circle of convergence.'
    },
      '$R = \\infty
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'A natural boundary means no analytic continuation exists beyond the circle of convergence.'
    },
      'The function is entire',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'A natural boundary means no analytic continuation exists beyond the circle of convergence.'
    },
    {
      id: 's08-h13',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=0}^{\\infty} x^{2^n}$ (lacunary) has a natural boundary at:',
      options: [
      '$x = 0
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Lacunary series with $n_k/n_{k-1} \\to \\infty$ have the circle of convergence as a natural boundary.'
    },
      '$|x| = 2
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Lacunary series with $n_k/n_{k-1} \\to \\infty$ have the circle of convergence as a natural boundary.'
    },
      '$|x| = 1
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Lacunary series with $n_k/n_{k-1} \\to \\infty$ have the circle of convergence as a natural boundary.'
    },
      'No boundary exists',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Lacunary series with $n_k/n_{k-1} \\to \\infty$ have the circle of convergence as a natural boundary.'
    },
    {
      id: 's08-h14',
      type: 'multiple-choice',
      question: 'The generating function $\\sum_{n=0}^{\\infty} F_n x^n$ for Fibonacci numbers $F_n$ equals:',
      options: [
      '$\\frac{1}{1-x-x^2}
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Using $F_{n+2} = F_{n+1} + F_n$, one derives $\\sum F_n x^n = \\frac{x}{1-x-x^2}$.'
    },
      '$\\frac{1}{1-x}
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Using $F_{n+2} = F_{n+1} + F_n$, one derives $\\sum F_n x^n = \\frac{x}{1-x-x^2}$.'
    },
      '$\\frac{x}{1-x-x^2}
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Using $F_{n+2} = F_{n+1} + F_n$, one derives $\\sum F_n x^n = \\frac{x}{1-x-x^2}$.'
    },
      '$e^x
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Using $F_{n+2} = F_{n+1} + F_n$, one derives $\\sum F_n x^n = \\frac{x}{1-x-x^2}$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Using $F_{n+2} = F_{n+1} + F_n$, one derives $\\sum F_n x^n = \\frac{x}{1-x-x^2}$.'
    },
    {
      id: 's08-h15',
      type: 'multiple-choice',
      question: 'The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^{2n-1}}{2n-1}$ represents:',
      options: [
      '$\\sin x
      correctIndex: 3,
      difficulty: 'hard',
      explanation: '$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^{2n-1}}{2n-1}$.'
    },
      '$\\cos x
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^{2n-1}}{2n-1}$.'
    },
      '$\\ln(1+x)
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^{2n-1}}{2n-1}$.'
    },
      '$\\arctan x
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^{2n-1}}{2n-1}$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^{2n-1}}{2n-1}$.'
    },
    {
      id: 's08-h16',
      type: 'multiple-choice',
      question: 'If $f(x) = \\sum c_n (x-a)^n$ has $R > 0$, then $f$ is:',
      options: [
      'Continuous on $(a-R, a+R)$ only',
      'Infinitely differentiable on $(a-R, a+R)
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Power series define infinitely differentiable (and analytic) functions inside their interval of convergence.'
    },
      'Differentiable exactly once',
      'Discontinuous at $x = a
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Power series define infinitely differentiable (and analytic) functions inside their interval of convergence.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Power series define infinitely differentiable (and analytic) functions inside their interval of convergence.'
    },
    {
      id: 's08-h17',
      type: 'multiple-choice',
      question: 'The Taylor series of $\\tan x$ about $x = 0$:',
      options: [
      'Has $R = \\pi/2
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$\\tan x$ has vertical asymptotes at $x = \\pm\\pi/2$, limiting the radius to $R = \\pi/2$.'
    },
      'Has $R = \\infty
      correctIndex: 3,
      difficulty: 'hard',
      explanation: '$\\tan x$ has vertical asymptotes at $x = \\pm\\pi/2$, limiting the radius to $R = \\pi/2$.'
    },
      'Does not exist',
      'Has only even powers',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: '$\\tan x$ has vertical asymptotes at $x = \\pm\\pi/2$, limiting the radius to $R = \\pi/2$.'
    },
    {
      id: 's08-h18',
      type: 'numeric',
      question: 'The radius of convergence of $\\sum_{n=1}^{\\infty} \\frac{x^n}{n^p}$ is always $R = $ (for any $p > 0$):',
      correctAnswer: 1,
      difficulty: 'hard',
      explanation: 'By ratio test: $\\frac{n^p}{(n+1)^p} \\to 1$, so $R = 1$ regardless of $p$.'
    },
    {
      id: 's08-h19',
      type: 'multiple-choice',
      question: 'If $\\sum c_n z^n$ converges at some $z_0 \\neq 0$, then it converges absolutely for all $z$ with:',
      options: [
      '$|z| = |z_0|
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'If the series converges at $z_0$, then $|c_n z_0^n|$ is bounded, implying absolute convergence for $|z| < |z_0|$.'
    },
      '$|z| > |z_0|
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'If the series converges at $z_0$, then $|c_n z_0^n|$ is bounded, implying absolute convergence for $|z| < |z_0|$.'
    },
      '$|z| < |z_0|
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'If the series converges at $z_0$, then $|c_n z_0^n|$ is bounded, implying absolute convergence for $|z| < |z_0|$.'
    },
      '$z = z_0$ only',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'If the series converges at $z_0$, then $|c_n z_0^n|$ is bounded, implying absolute convergence for $|z| < |z_0|$.'
    },
    {
      id: 's08-h20',
      type: 'multiple-choice',
      question: 'For the series $\\sum_{p \\text{ prime}} x^p$, the radius of convergence is:',
      options: [
      '$0
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'This is a subseries of the geometric series; it converges iff $|x| < 1$, so $R = 1$.'
    },
      '$2
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is a subseries of the geometric series; it converges iff $|x| < 1$, so $R = 1$.'
    },
      '$\\infty
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is a subseries of the geometric series; it converges iff $|x| < 1$, so $R = 1$.'
    },
      '$1
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is a subseries of the geometric series; it converges iff $|x| < 1$, so $R = 1$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is a subseries of the geometric series; it converges iff $|x| < 1$, so $R = 1$.'
    }
  ] as QuizQuestion[],
};
