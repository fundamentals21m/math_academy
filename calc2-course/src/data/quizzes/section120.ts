import type { QuizQuestion } from './types';

export const section120Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f$ is continuous on a rectangle $Q = [a, b] \\times [c, d]$, then according to Theorem 11.6, which statement is true?',
    options: [
      '$f$ is integrable only if it is bounded',
      '$f$ is integrable on $Q$ and the integral can be computed by iterated integration',
      '$f$ may not be integrable even though it is continuous',
      'The order of iterated integration cannot be changed',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Theorem 11.6 states that continuous functions on rectangles are integrable, and the value can be obtained by iterated integration in either order: $\\iint_Q f = \\int_c^d [\\int_a^b f(x,y)\\,dx]dy = \\int_a^b [\\int_c^d f(x,y)\\,dy]dx$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the proof of Theorem 11.6 (integrability of continuous functions), the small-span theorem is used to show that:',
    options: [
      'There exists a partition such that the span of $f$ in every subrectangle is arbitrarily small',
      '$f$ is bounded on $Q
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The small-span theorem (Theorem 9.10) guarantees that for any $\\epsilon > 0$, there is a partition of $Q$ into subrectangles such that the span (difference between max and min) of $f$ in every subrectangle is less than $\\epsilon$.',
  },
      '$f$ has finitely many discontinuities',
      'The upper and lower integrals are both zero',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The small-span theorem (Theorem 9.10) guarantees that for any $\\epsilon > 0$, there is a partition of $Q$ into subrectangles such that the span (difference between max and min) of $f$ in every subrectangle is less than $\\epsilon$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In proving integrability, step functions $s$ and $t$ are constructed satisfying $s \\leq f \\leq t$. The key step shows that:',
    options: [
      '$\\iint_Q s = \\iint_Q t
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The proof shows that $\\iint_Q t - \\iint_Q s < \\epsilon \\cdot a(Q)$ where $a(Q)$ is the area of the rectangle. Since $\\epsilon$ can be made arbitrarily small, this forces $\\underline{I}(f) = \\overline{I}(f)$, proving integrability.',
  },
      '$s$ and $t$ are continuous functions',
      '$s = t$ everywhere on $Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The proof shows that $\\iint_Q t - \\iint_Q s < \\epsilon \\cdot a(Q)$ where $a(Q)$ is the area of the rectangle. Since $\\epsilon$ can be made arbitrarily small, this forces $\\underline{I}(f) = \\overline{I}(f)$, proving integrability.',
  },
      '$\\iint_Q t - \\iint_Q s < \\epsilon \\cdot a(Q)$ for arbitrarily small $\\epsilon
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The proof shows that $\\iint_Q t - \\iint_Q s < \\epsilon \\cdot a(Q)$ where $a(Q)$ is the area of the rectangle. Since $\\epsilon$ can be made arbitrarily small, this forces $\\underline{I}(f) = \\overline{I}(f)$, proving integrability.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The proof shows that $\\iint_Q t - \\iint_Q s < \\epsilon \\cdot a(Q)$ where $a(Q)$ is the area of the rectangle. Since $\\epsilon$ can be made arbitrarily small, this forces $\\underline{I}(f) = \\overline{I}(f)$, proving integrability.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $A(y) = \\int_a^b f(x, y)\\,dx$ where $f$ is continuous on $Q = [a,b] \\times [c,d]$, what property does $A$ have?',
    options: [
      '$A$ is discontinuous at finitely many points',
      '$A$ may be undefined for some values of $y
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $f$ is continuous on $Q$, the partial integral $A(y) = \\int_a^b f(x,y)\\,dx$ exists for all $y \\in [c,d]$ and defines a continuous function on $[c,d]$. This allows $\\int_c^d A(y)\\,dy$ to exist and equal $\\iint_Q f$.',
  },
      '$A$ is continuous on $[c, d]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $f$ is continuous on $Q$, the partial integral $A(y) = \\int_a^b f(x,y)\\,dx$ exists for all $y \\in [c,d]$ and defines a continuous function on $[c,d]$. This allows $\\int_c^d A(y)\\,dy$ to exist and equal $\\iint_Q f$.',
  },
      '$A$ is constant',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $f$ is continuous on $Q$, the partial integral $A(y) = \\int_a^b f(x,y)\\,dx$ exists for all $y \\in [c,d]$ and defines a continuous function on $[c,d]$. This allows $\\int_c^d A(y)\\,dy$ to exist and equal $\\iint_Q f$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The two-dimensional integrability theorem for continuous functions is analogous to which one-dimensional result?',
    options: [
      'The fundamental theorem of calculus',
      'The mean value theorem',
      'Every differentiable function is continuous',
      'Continuous functions on closed intervals are Riemann integrable',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Theorem 11.6 is the two-dimensional analogue of the fact that continuous functions on closed intervals $[a,b]$ are Riemann integrable. Both results rely on uniform continuity to approximate the function by step functions.',
  },
];
