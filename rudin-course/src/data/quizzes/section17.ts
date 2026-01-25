import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 'sec17-q1',
    type: 'multiple-choice',
    question: 'What is $\\lim_{n \\to \\infty} \\frac{1}{n}$?',
    options: [
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By the Archimedean property, for any $\\varepsilon > 0$, there exists $N$ with $1/N < \\varepsilon$. Thus $1/n \\to 0$.',
  },
      '$\\infty
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By the Archimedean property, for any $\\varepsilon > 0$, there exists $N$ with $1/N < \\varepsilon$. Thus $1/n \\to 0$.',
  },
      'Does not exist',
      '$0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By the Archimedean property, for any $\\varepsilon > 0$, there exists $N$ with $1/N < \\varepsilon$. Thus $1/n \\to 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By the Archimedean property, for any $\\varepsilon > 0$, there exists $N$ with $1/N < \\varepsilon$. Thus $1/n \\to 0$.',
  },
  {
    id: 'sec17-q2',
    type: 'multiple-choice',
    question: 'If $|x| < 1$, what is $\\lim_{n \\to \\infty} x^n$?',
    options: [
      '$1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For $|x| < 1$, the sequence $|x|^n$ decreases geometrically to $0$. Hence $x^n \\to 0$.',
  },
      '$0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For $|x| < 1$, the sequence $|x|^n$ decreases geometrically to $0$. Hence $x^n \\to 0$.',
  },
      '$x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For $|x| < 1$, the sequence $|x|^n$ decreases geometrically to $0$. Hence $x^n \\to 0$.',
  },
      'Does not exist',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For $|x| < 1$, the sequence $|x|^n$ decreases geometrically to $0$. Hence $x^n \\to 0$.',
  },
  {
    id: 'sec17-q3',
    type: 'multiple-choice',
    question: 'What is $\\lim_{n \\to \\infty} n^{1/n}$?',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Let $y_n = n^{1/n}$. Taking logarithms: $\\ln y_n = \\frac{\\ln n}{n} \\to 0$ as $n \\to \\infty$. Thus $y_n \\to e^0 = 1$.',
  },
      '$\\infty
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Let $y_n = n^{1/n}$. Taking logarithms: $\\ln y_n = \\frac{\\ln n}{n} \\to 0$ as $n \\to \\infty$. Thus $y_n \\to e^0 = 1$.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Let $y_n = n^{1/n}$. Taking logarithms: $\\ln y_n = \\frac{\\ln n}{n} \\to 0$ as $n \\to \\infty$. Thus $y_n \\to e^0 = 1$.',
  },
      '$e
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Let $y_n = n^{1/n}$. Taking logarithms: $\\ln y_n = \\frac{\\ln n}{n} \\to 0$ as $n \\to \\infty$. Thus $y_n \\to e^0 = 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Let $y_n = n^{1/n}$. Taking logarithms: $\\ln y_n = \\frac{\\ln n}{n} \\to 0$ as $n \\to \\infty$. Thus $y_n \\to e^0 = 1$.',
  },
  {
    id: 'sec17-q4',
    type: 'multiple-choice',
    question: 'What is $\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$?',
    options: [
      '$2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'This is the definition of $e$: $\\lim_{n \\to \\infty} (1 + 1/n)^n = e \\approx 2.718$.',
  },
      '$1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This is the definition of $e$: $\\lim_{n \\to \\infty} (1 + 1/n)^n = e \\approx 2.718$.',
  },
      '$\\infty
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This is the definition of $e$: $\\lim_{n \\to \\infty} (1 + 1/n)^n = e \\approx 2.718$.',
  },
      '$e
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This is the definition of $e$: $\\lim_{n \\to \\infty} (1 + 1/n)^n = e \\approx 2.718$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This is the definition of $e$: $\\lim_{n \\to \\infty} (1 + 1/n)^n = e \\approx 2.718$.',
  },
  {
    id: 'sec17-q5',
    type: 'multiple-choice',
    question: 'If $p > 0$, what is $\\lim_{n \\to \\infty} \\frac{n^p}{(1+r)^n}$ for $r > 0$?',
    options: [
      '$0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Exponential growth beats polynomial growth: $(1+r)^n$ grows faster than $n^p$ for any fixed $p$. Thus $n^p/(1+r)^n \\to 0$.',
  },
      '$\\infty
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Exponential growth beats polynomial growth: $(1+r)^n$ grows faster than $n^p$ for any fixed $p$. Thus $n^p/(1+r)^n \\to 0$.',
  },
      '$1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Exponential growth beats polynomial growth: $(1+r)^n$ grows faster than $n^p$ for any fixed $p$. Thus $n^p/(1+r)^n \\to 0$.',
  },
      'Depends on $p$ and $r
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Exponential growth beats polynomial growth: $(1+r)^n$ grows faster than $n^p$ for any fixed $p$. Thus $n^p/(1+r)^n \\to 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Exponential growth beats polynomial growth: $(1+r)^n$ grows faster than $n^p$ for any fixed $p$. Thus $n^p/(1+r)^n \\to 0$.',
  },
];
