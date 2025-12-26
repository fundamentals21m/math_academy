// Chapter 2: Sequences and Series
// Based on Kenneth A. Ross - Elementary Analysis
import type { QuizQuestion } from './types';

// Section 5: Sequences and Their Limits
export const section05Questions: QuizQuestion[] = [
  {
    id: 'ra-s05-q1',
    question: 'A sequence {aₙ} converges to L if:',
    options: [
      'For every ε > 0, there exists N such that |aₙ - L| < ε for all n > N',
      'The sequence is bounded and monotonic',
      'lim (aₙ₊₁/aₙ) exists and is less than 1',
      'The series Σaₙ converges'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This is the ε-N definition of convergence for sequences. For every ε > 0, there exists some N such that all terms after N are within ε of L.'
  },
  {
    id: 'ra-s05-q2',
    question: 'Which of these sequences converges?',
    options: [
      '{n/(n+1)}',
      '{(-1)ⁿ}',
      '{n²}',
      '{1/n}'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sequence {1/n} converges to 0. The others diverge: {n/(n+1)} → 1, {(-1)ⁿ} oscillates, and {n²} → ∞.'
  },
  {
    id: 'ra-s05-q3',
    question: 'If lim aₙ = L and lim bₙ = M, then lim (aₙ + bₙ) =',
    options: [
      'L + M',
      'L · M',
      'max(L, M)',
      'min(L, M)'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The limit of a sum is the sum of the limits. This is one of the basic limit theorems for sequences.'
  }
];

// Section 6: Infinite Series
export const section06Questions: QuizQuestion[] = [
  {
    id: 'ra-s06-q1',
    question: 'The infinite series Σaₖ converges to S if:',
    options: [
      'The sequence of partial sums {sₙ} converges to S',
      'Each term aₖ approaches 0',
      'The terms alternate in sign',
      'The series is geometric'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A series converges if and only if its sequence of partial sums converges. This is the definition of convergence for infinite series.'
  },
  {
    id: 'ra-s06-q2',
    question: 'The harmonic series Σ(1/n) is:',
    options: [
      'Convergent',
      'Divergent',
      'Conditionally convergent',
      'Absolutely convergent'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The harmonic series diverges. This can be shown by comparing it to the integral ∫ dx/x from 1 to ∞, or by grouping terms.'
  },
  {
    id: 'ra-s06-q3',
    question: 'For a geometric series Σarⁿ, it converges when:',
    options: [
      '|r| < 1',
      '|r| ≤ 1',
      'r > 0',
      'r ≠ 0'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A geometric series converges when the common ratio r satisfies |r| < 1. The sum is a/(1-r).'
  }
];

// Section 7: Convergence Tests
export const section07Questions: QuizQuestion[] = [
  {
    id: 'ra-s07-q1',
    question: 'The comparison test states that if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then:',
    options: [
      'Σaₙ converges',
      'Σaₙ diverges',
      'Nothing can be concluded',
      'Σaₙ converges absolutely'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The comparison test: if 0 ≤ aₙ ≤ bₙ for all n and Σbₙ converges, then Σaₙ converges. If Σaₙ diverges and 0 ≤ bₙ ≤ aₙ, then Σbₙ diverges.'
  },
  {
    id: 'ra-s07-q2',
    question: 'For the ratio test, if lim |aₙ₊₁/aₙ| = L, then the series:',
    options: [
      'Converges if L < 1',
      'Diverges if L > 1',
      'Inconclusive if L = 1',
      'All of the above'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The ratio test: if L < 1, series converges; if L > 1, series diverges; if L = 1, test is inconclusive.'
  },
  {
    id: 'ra-s07-q3',
    question: 'The alternating series test requires that the series is alternating and:',
    options: [
      'The terms approach 0',
      'The terms are decreasing',
      'Both conditions',
      'Neither condition'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The alternating series test requires two conditions: (1) terms alternate in sign, and (2) |aₙ| is decreasing and approaches 0.'
  }
];

// Section 8: Power Series
export const section08Questions: QuizQuestion[] = [
  {
    id: 'ra-s08-q1',
    question: 'A power series Σcₙ(x-a)ⁿ has a radius of convergence R where:',
    options: [
      'R is always infinite',
      'R is always 1',
      '0 ≤ R ≤ ∞',
      'R must be positive'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The radius of convergence R can be any non-negative real number or infinity. It\'s determined by lim |cₙ₊₁/cₙ| or the root test.'
  },
  {
    id: 'ra-s08-q2',
    question: 'For Σcₙxⁿ, the radius of convergence is 1/lim sup |cₙ|¹/ⁿ. This is the:',
    options: [
      'Ratio test',
      'Root test',
      'Comparison test',
      'Integral test'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The root test gives the radius of convergence for power series. The formula R = 1/lim sup |cₙ|¹/ⁿ comes from applying the root test.'
  },
  {
    id: 'ra-s08-q3',
    question: 'At the endpoints of the interval of convergence, a power series may:',
    options: [
      'Always converge',
      'Always diverge',
      'Converge or diverge - must check separately',
      'Have radius 0'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'At the endpoints (x = a ± R), the series may converge, diverge, or converge conditionally. Each endpoint must be tested separately.'
  }
];