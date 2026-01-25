import type { QuizQuestion } from './types';

export const section190Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Euler summation formula connects:',
    options: [
      'Derivatives and integrals',
      'Finite sums and integrals',
      'Polynomials and rational functions',
      'Complex and real numbers',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Euler summation formula expresses a finite sum $\\sum_{k=1}^{n} f(k)$ in terms of an integral $\\int_1^n f(x)\\,dx$ plus correction terms.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which special numbers appear in the Euler summation formula?',
    options: [
      'Prime numbers',
      'Fibonacci numbers',
      'Bernoulli numbers',
      'Catalan numbers',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The correction terms in the Euler summation formula involve the Bernoulli numbers $B_{2k}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the value of $B_2$, the second Bernoulli number?',
    options: [
      '$\\frac{1}{6}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Bernoulli numbers are $B_0 = 1$, $B_1 = -\\frac{1}{2}$, $B_2 = \\frac{1}{6}$, $B_4 = -\\frac{1}{30}$, etc.',
  },
      '$-\\frac{1}{2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Bernoulli numbers are $B_0 = 1$, $B_1 = -\\frac{1}{2}$, $B_2 = \\frac{1}{6}$, $B_4 = -\\frac{1}{30}$, etc.',
  },
      '$-\\frac{1}{30}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Bernoulli numbers are $B_0 = 1$, $B_1 = -\\frac{1}{2}$, $B_2 = \\frac{1}{6}$, $B_4 = -\\frac{1}{30}$, etc.',
  },
      '$\\frac{1}{42}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Bernoulli numbers are $B_0 = 1$, $B_1 = -\\frac{1}{2}$, $B_2 = \\frac{1}{6}$, $B_4 = -\\frac{1}{30}$, etc.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Bernoulli numbers are $B_0 = 1$, $B_1 = -\\frac{1}{2}$, $B_2 = \\frac{1}{6}$, $B_4 = -\\frac{1}{30}$, etc.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Stirling\'s formula gives the asymptotic approximation:',
    options: [
      '$n! \\sim \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Stirling\'s formula $n! \\sim \\sqrt{2\\pi n}(n/e)^n$ is derived by applying the Euler summation formula to $\\ln(n!) = \\sum_{k=1}^{n} \\ln k$.',
  },
      '$n! \\sim n^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Stirling\'s formula $n! \\sim \\sqrt{2\\pi n}(n/e)^n$ is derived by applying the Euler summation formula to $\\ln(n!) = \\sum_{k=1}^{n} \\ln k$.',
  },
      '$n! \\sim e^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Stirling\'s formula $n! \\sim \\sqrt{2\\pi n}(n/e)^n$ is derived by applying the Euler summation formula to $\\ln(n!) = \\sum_{k=1}^{n} \\ln k$.',
  },
      '$n! \\sim 2^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Stirling\'s formula $n! \\sim \\sqrt{2\\pi n}(n/e)^n$ is derived by applying the Euler summation formula to $\\ln(n!) = \\sum_{k=1}^{n} \\ln k$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Stirling\'s formula $n! \\sim \\sqrt{2\\pi n}(n/e)^n$ is derived by applying the Euler summation formula to $\\ln(n!) = \\sum_{k=1}^{n} \\ln k$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the asymptotic expansion for the harmonic sum $\\sum_{k=1}^{n} \\frac{1}{k}$, what constant appears?',
    options: [
      '$\\pi
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The harmonic sum satisfies $\\sum_{k=1}^{n} \\frac{1}{k} = \\ln n + \\gamma + O(1/n)$, where $\\gamma \\approx 0.5772$ is the Euler-Mascheroni constant.',
  },
      '$e
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The harmonic sum satisfies $\\sum_{k=1}^{n} \\frac{1}{k} = \\ln n + \\gamma + O(1/n)$, where $\\gamma \\approx 0.5772$ is the Euler-Mascheroni constant.',
  },
      'The Euler-Mascheroni constant $\\gamma \\approx 0.5772
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The harmonic sum satisfies $\\sum_{k=1}^{n} \\frac{1}{k} = \\ln n + \\gamma + O(1/n)$, where $\\gamma \\approx 0.5772$ is the Euler-Mascheroni constant.',
  },
      'The golden ratio $\\phi
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The harmonic sum satisfies $\\sum_{k=1}^{n} \\frac{1}{k} = \\ln n + \\gamma + O(1/n)$, where $\\gamma \\approx 0.5772$ is the Euler-Mascheroni constant.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The harmonic sum satisfies $\\sum_{k=1}^{n} \\frac{1}{k} = \\ln n + \\gamma + O(1/n)$, where $\\gamma \\approx 0.5772$ is the Euler-Mascheroni constant.',
  },
];
