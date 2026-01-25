import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the Bolzano-Weierstrass theorem state?',
    options: [
      'Every monotone sequence converges',
      'Every bounded sequence has a convergent subsequence',
      'Every convergent sequence is bounded',
      'Every Cauchy sequence converges',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Bolzano-Weierstrass theorem states that every bounded sequence in $\\mathbb{R}$ has a convergent subsequence. This is a fundamental result in real analysis.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Let $a_n = (-1)^n$. Which of the following is a convergent subsequence?',
    options: [
      '$(a_{2n}) = (1, 1, 1, \\ldots)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The subsequence $(a_{2n})$ consists of all even-indexed terms: $a_2 = 1, a_4 = 1, a_6 = 1, \\ldots$, which converges to $1$. Similarly, $(a_{2n-1})$ converges to $-1$.',
  },
      'No convergent subsequence exists',
      '$(a_{n+1})
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The subsequence $(a_{2n})$ consists of all even-indexed terms: $a_2 = 1, a_4 = 1, a_6 = 1, \\ldots$, which converges to $1$. Similarly, $(a_{2n-1})$ converges to $-1$.',
  },
      '$(a_{n^2})$ when $n$ is odd',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The subsequence $(a_{2n})$ consists of all even-indexed terms: $a_2 = 1, a_4 = 1, a_6 = 1, \\ldots$, which converges to $1$. Similarly, $(a_{2n-1})$ converges to $-1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $(a_{n_k})$ is a subsequence of $(a_n)$ and $a_n \\to L$, then:',
    options: [
      '$a_{n_k}$ may converge to a different limit',
      '$a_{n_k}$ may diverge',
      'Nothing can be concluded about $(a_{n_k})
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Every subsequence of a convergent sequence converges to the same limit. If $a_n \\to L$, then for any subsequence $(a_{n_k})$, we also have $a_{n_k} \\to L$.',
  },
      '$a_{n_k} \\to L
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Every subsequence of a convergent sequence converges to the same limit. If $a_n \\to L$, then for any subsequence $(a_{n_k})$, we also have $a_{n_k} \\to L$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Every subsequence of a convergent sequence converges to the same limit. If $a_n \\to L$, then for any subsequence $(a_{n_k})$, we also have $a_{n_k} \\to L$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which sequence does NOT have a convergent subsequence?',
    options: [
      '$a_n = n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The sequence $a_n = n$ is unbounded, so by Bolzano-Weierstrass, it cannot have a convergent subsequence. The other sequences are all bounded.',
  },
      '$a_n = (-1)^n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sequence $a_n = n$ is unbounded, so by Bolzano-Weierstrass, it cannot have a convergent subsequence. The other sequences are all bounded.',
  },
      '$a_n = \\sin(n)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sequence $a_n = n$ is unbounded, so by Bolzano-Weierstrass, it cannot have a convergent subsequence. The other sequences are all bounded.',
  },
      '$a_n = \\frac{1}{n}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sequence $a_n = n$ is unbounded, so by Bolzano-Weierstrass, it cannot have a convergent subsequence. The other sequences are all bounded.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sequence $a_n = n$ is unbounded, so by Bolzano-Weierstrass, it cannot have a convergent subsequence. The other sequences are all bounded.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'The sequence $a_n = \\frac{n \\mod 4}{4}$ has how many distinct limit points?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'Since $n \\mod 4 \\in \\{0, 1, 2, 3\\}$, the sequence takes values $\\{0, \\frac{1}{4}, \\frac{1}{2}, \\frac{3}{4}\\}$ repeatedly. Each value is a limit point, giving $4$ distinct limit points.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A sequence $(a_n)$ converges if and only if:',
    options: [
      'The sequence is bounded',
      'Some subsequence of $(a_n)$ converges',
      'Every subsequence of $(a_n)$ converges to the same limit',
      'The sequence is monotone'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A sequence converges to $L$ if and only if every subsequence converges to $L$. Having just one convergent subsequence is not sufficient (e.g., $(-1)^n$).',
  },
];
