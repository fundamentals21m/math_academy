import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 'sec24-q1',
    type: 'multiple-choice',
    question: 'A series $\\sum a_n$ converges absolutely if:',
    options: [
      '$a_n \\to 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Absolute convergence means $\\sum |a_n| < \\infty$. This is stronger than ordinary (conditional) convergence.',
  },
      'The partial sums are bounded',
      '$a_n$ is monotonic',
      '$\\sum |a_n|$ converges',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Absolute convergence means $\\sum |a_n| < \\infty$. This is stronger than ordinary (conditional) convergence.',
  },
  {
    id: 'sec24-q2',
    type: 'multiple-choice',
    question: 'If $\\sum a_n$ converges absolutely, then:',
    options: [
      '$\\sum a_n$ diverges',
      '$\\sum a_n$ converges',
      '$a_n$ does not approach zero',
      'The series can be rearranged to diverge',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Absolute convergence implies convergence: if $\\sum |a_n|$ converges, then $\\sum a_n$ converges (and to a specific value independent of ordering).',
  },
  {
    id: 'sec24-q3',
    type: 'multiple-choice',
    question: 'The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$:',
    options: [
      'Converges conditionally (but not absolutely)',
      'Converges absolutely',
      'Diverges',
      'Oscillates without converging',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The alternating harmonic series converges (by the alternating series test) to $\\ln 2$. But $\\sum 1/n$ diverges, so convergence is conditional, not absolute.',
  },
  {
    id: 'sec24-q4',
    type: 'multiple-choice',
    question: 'Which series converges absolutely?',
    options: [
      '$\\sum \\frac{(-1)^n}{n}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $\\sum (-1)^n/n^2$, we have $\\sum |(-1)^n/n^2| = \\sum 1/n^2$, which is a convergent $p$-series ($p = 2 > 1$). So absolute convergence holds.',
  },
      '$\\sum \\frac{(-1)^n}{n^2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $\\sum (-1)^n/n^2$, we have $\\sum |(-1)^n/n^2| = \\sum 1/n^2$, which is a convergent $p$-series ($p = 2 > 1$). So absolute convergence holds.',
  },
      '$\\sum \\frac{(-1)^n}{\\sqrt{n}}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $\\sum (-1)^n/n^2$, we have $\\sum |(-1)^n/n^2| = \\sum 1/n^2$, which is a convergent $p$-series ($p = 2 > 1$). So absolute convergence holds.',
  },
      '$\\sum \\frac{(-1)^n}{\\ln n}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $\\sum (-1)^n/n^2$, we have $\\sum |(-1)^n/n^2| = \\sum 1/n^2$, which is a convergent $p$-series ($p = 2 > 1$). So absolute convergence holds.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $\\sum (-1)^n/n^2$, we have $\\sum |(-1)^n/n^2| = \\sum 1/n^2$, which is a convergent $p$-series ($p = 2 > 1$). So absolute convergence holds.',
  },
  {
    id: 'sec24-q5',
    type: 'multiple-choice',
    question: 'Why is absolute convergence a stronger property than conditional convergence?',
    options: [
      'Absolutely convergent series have larger sums',
      'Conditionally convergent series always diverge',
      'Absolutely convergent series can be rearranged without changing the sum',
      'Absolute convergence only applies to positive series',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Absolutely convergent series can be rearranged in any order with the same sum. Conditionally convergent series can be rearranged to converge to any value or to diverge (Riemann rearrangement theorem).',
  },
];
