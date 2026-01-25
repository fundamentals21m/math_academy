import type { QuizQuestion } from './types';

export const section179Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Weak Law of Large Numbers states that for i.i.d. random variables with mean $m$:',
    options: [
      '$\\bar{X} \\to m$ with probability 0',
      '$\\lim_{n \\to \\infty} P(|\\bar{X} - m| > \\epsilon) = 0$ for every $\\epsilon > 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Weak Law: sample averages converge to the population mean in probability. For any $\\epsilon > 0$, $P(|\\bar{X} - m| > \\epsilon) \\to 0$ as $n \\to \\infty$.',
  },
      '$P(\\bar{X} = m) = 1$ for all $n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Weak Law: sample averages converge to the population mean in probability. For any $\\epsilon > 0$, $P(|\\bar{X} - m| > \\epsilon) \\to 0$ as $n \\to \\infty$.',
  },
      '$\\bar{X} = m$ always',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Weak Law: sample averages converge to the population mean in probability. For any $\\epsilon > 0$, $P(|\\bar{X} - m| > \\epsilon) \\to 0$ as $n \\to \\infty$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The sample mean $\\bar{X} = \\frac{1}{n}\\sum_{k=1}^n X_k$ has variance:',
    options: [
      '$n\\sigma^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For i.i.d. variables with variance $\\sigma^2$: $\\text{Var}(\\bar{X}) = \\sigma^2/n$. Variance decreases as $n$ increases.',
  },
      '$\\sigma^2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For i.i.d. variables with variance $\\sigma^2$: $\\text{Var}(\\bar{X}) = \\sigma^2/n$. Variance decreases as $n$ increases.',
  },
      '$\\sigma/n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For i.i.d. variables with variance $\\sigma^2$: $\\text{Var}(\\bar{X}) = \\sigma^2/n$. Variance decreases as $n$ increases.',
  },
      '$\\sigma^2/n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For i.i.d. variables with variance $\\sigma^2$: $\\text{Var}(\\bar{X}) = \\sigma^2/n$. Variance decreases as $n$ increases.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For i.i.d. variables with variance $\\sigma^2$: $\\text{Var}(\\bar{X}) = \\sigma^2/n$. Variance decreases as $n$ increases.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of the Weak Law of Large Numbers uses:',
    options: [
      'Integration by parts',
      'Chebyshev\\\\'s inequality',
      'The Chain Rule',
      'L\\\\'Hopital\\\\'s Rule',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The proof applies Chebyshev\'s inequality to $\\bar{X}$: $P(|\\bar{X} - m| > \\epsilon) \\leq \\sigma^2/(n\\epsilon^2) \\to 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Law of Large Numbers justifies:',
    options: [
      'Using sample averages to estimate population means',
      'Using single observations as estimates',
      'Ignoring sample size',
      'Assuming all distributions are normal',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Law of Large Numbers shows that sample averages converge to population means, justifying their use as estimators.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In Bernoulli trials with success probability $p$, the Law of Large Numbers says that $X/n$ (relative frequency) converges to:',
    options: [
      '$0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The relative frequency of successes $X/n$ converges in probability to $p$, the true success probability. This connects probability to long-run frequency.',
  },
      '$p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The relative frequency of successes $X/n$ converges in probability to $p$, the true success probability. This connects probability to long-run frequency.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The relative frequency of successes $X/n$ converges in probability to $p$, the true success probability. This connects probability to long-run frequency.',
  },
      '$1 - p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The relative frequency of successes $X/n$ converges in probability to $p$, the true success probability. This connects probability to long-run frequency.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The relative frequency of successes $X/n$ converges in probability to $p$, the true success probability. This connects probability to long-run frequency.',
  },
];
