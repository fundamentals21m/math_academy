import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A series $\\sum a_n$ is absolutely convergent if:',
    options: [
      '$\\sum a_n$ converges',
      '$|a_n| \\to 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By definition, a series is absolutely convergent if the series of absolute values $\\sum |a_n|$ converges.',
  },
      '$\\sum |a_n|$ converges',
      '$\\sum a_n^2$ converges',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, a series is absolutely convergent if the series of absolute values $\\sum |a_n|$ converges.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a series is absolutely convergent, then it is:',
    options: [
      'Also convergent (absolutely implies convergence)',
      'Conditionally convergent',
      'Divergent',
      'Bounded but may not converge',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Absolute convergence implies convergence. If $\\sum |a_n|$ converges, then $\\sum a_n$ converges. The converse is false (conditional convergence).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The alternating harmonic series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ is:',
    options: [
      'Divergent',
      'Absolutely convergent',
      'Conditionally convergent',
      'Neither convergent nor divergent',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This series converges by the alternating series test (to $\\ln 2$), but $\\sum \\frac{1}{n}$ (harmonic series) diverges. So it is conditionally convergent.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Riemann\'s rearrangement theorem, a conditionally convergent series can be rearranged to:',
    options: [
      'Converge to any real number, or diverge to $\\pm\\infty
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Riemann\'s theorem: any conditionally convergent series can be rearranged to converge to any prescribed real number, or to diverge to $+\\infty$ or $-\\infty$.',
  },
      'Converge to any positive number',
      'Only converge to the original sum',
      'Only diverge',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Riemann\'s theorem: any conditionally convergent series can be rearranged to converge to any prescribed real number, or to diverge to $+\\infty$ or $-\\infty$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For an absolutely convergent series $\\sum a_n$, any rearrangement:',
    options: [
      'May converge to a different sum',
      'May diverge',
      'Converges to the absolute value of the original sum',
      'Converges to the same sum',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A key property of absolute convergence: any rearrangement of an absolutely convergent series converges to the same sum. This is not true for conditional convergence.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which series is conditionally convergent?',
    options: [
      '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converges by the alternating series test, but $\\sum \\frac{1}{\\sqrt{n}}$ diverges ($p = 1/2 < 1$). The second converges absolutely, the third has no alternating sign, and the fourth diverges.',
  },
      '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converges by the alternating series test, but $\\sum \\frac{1}{\\sqrt{n}}$ diverges ($p = 1/2 < 1$). The second converges absolutely, the third has no alternating sign, and the fourth diverges.',
  },
      '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converges by the alternating series test, but $\\sum \\frac{1}{\\sqrt{n}}$ diverges ($p = 1/2 < 1$). The second converges absolutely, the third has no alternating sign, and the fourth diverges.',
  },
      '$\\sum_{n=1}^{\\infty} (-1)^n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converges by the alternating series test, but $\\sum \\frac{1}{\\sqrt{n}}$ diverges ($p = 1/2 < 1$). The second converges absolutely, the third has no alternating sign, and the fourth diverges.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converges by the alternating series test, but $\\sum \\frac{1}{\\sqrt{n}}$ diverges ($p = 1/2 < 1$). The second converges absolutely, the third has no alternating sign, and the fourth diverges.',
  },
];
