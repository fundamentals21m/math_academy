import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A sequence of functions $f_n: X \\to Y$ converges pointwise to $f$ if:',
    options: [
      'For all $\\varepsilon > 0$, there exists $N$ such that $d(f_n(x), f(x)) < \\varepsilon$ for all $n \\geq N$ and all $x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Pointwise convergence means convergence at each individual point $x$, with the rate possibly depending on $x$.',
  },
      'For each $x \\in X$, $\\lim_{n \\to \\infty} f_n(x) = f(x)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Pointwise convergence means convergence at each individual point $x$, with the rate possibly depending on $x$.',
  },
      'The convergence is uniform',
      '$\\sup_x |f_n(x) - f(x)| \\to 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Pointwise convergence means convergence at each individual point $x$, with the rate possibly depending on $x$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Pointwise convergence means convergence at each individual point $x$, with the rate possibly depending on $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A sequence $f_n$ converges uniformly to $f$ on $X$ if:',
    options: [
      'For each $x$, $f_n(x) \\to f(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Uniform convergence requires one $N$ that works for all points simultaneously.',
  },
      'The functions $f_n$ are all continuous',
      'For all $\\varepsilon > 0$, there exists $N$ such that for all $n \\geq N$ and all $x \\in X$, $d(f_n(x), f(x)) < \\varepsilon
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Uniform convergence requires one $N$ that works for all points simultaneously.',
  },
      '$f_n$ converges pointwise and each $f_n$ is bounded',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Uniform convergence requires one $N$ that works for all points simultaneously.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Consider $f_n(x) = x^n$ on $[0, 1]$. The pointwise limit is:',
    options: [
      '$f(x) = 0$ for all $x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $0 \\leq x < 1$, $x^n \\to 0$. For $x = 1$, $1^n = 1$ for all $n$.',
  },
      '$f(x) = 0$ for $x \\in [0, 1)$ and $f(1) = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $0 \\leq x < 1$, $x^n \\to 0$. For $x = 1$, $1^n = 1$ for all $n$.',
  },
      '$f(x) = 1$ for all $x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $0 \\leq x < 1$, $x^n \\to 0$. For $x = 1$, $1^n = 1$ for all $n$.',
  },
      '$f(x) = x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $0 \\leq x < 1$, $x^n \\to 0$. For $x = 1$, $1^n = 1$ for all $n$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $0 \\leq x < 1$, $x^n \\to 0$. For $x = 1$, $1^n = 1$ for all $n$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The sequence $f_n(x) = x^n$ on $[0, 1]$ converges:',
    options: [
      'Uniformly to the pointwise limit',
      'Uniformly on $[0, 1]$ and pointwise on $(0, 1)$',
      'Neither pointwise nor uniformly',
      'Pointwise but not uniformly'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The limit function is discontinuous at $x = 1$, but each $f_n$ is continuous. Since uniform limits of continuous functions are continuous, the convergence cannot be uniform.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Uniform convergence implies pointwise convergence. Is the converse true?',
    options: [
      'No, pointwise convergence does not imply uniform convergence',
      'Yes, always',
      'Yes, if the domain is compact',
      'Yes, if the functions are continuous'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Pointwise convergence does not imply uniform convergence. The example $f_n(x) = x^n$ on $[0, 1]$ demonstrates this.',
  },
];
