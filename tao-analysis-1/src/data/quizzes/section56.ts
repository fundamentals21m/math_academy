import type { QuizQuestion } from './types';

export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A bounded function $f$ on $[a,b]$ is Riemann integrable if and only if:',
    options: [
      '$f$ is differentiable on $(a,b)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By definition, $f$ is Riemann integrable iff the upper and lower integrals are equal: $\\overline{\\int} f = \\underline{\\int} f$.',
  },
      '$f$ is continuous on $[a,b]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, $f$ is Riemann integrable iff the upper and lower integrals are equal: $\\overline{\\int} f = \\underline{\\int} f$.',
  },
      '$f$ is monotonic on $[a,b]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, $f$ is Riemann integrable iff the upper and lower integrals are equal: $\\overline{\\int} f = \\underline{\\int} f$.',
  },
      '$\\overline{\\int_a^b} f = \\underline{\\int_a^b} f
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, $f$ is Riemann integrable iff the upper and lower integrals are equal: $\\overline{\\int} f = \\underline{\\int} f$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, $f$ is Riemann integrable iff the upper and lower integrals are equal: $\\overline{\\int} f = \\underline{\\int} f$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ and $g$ are Riemann integrable on $[a,b]$, then $f + g$ is:',
    options: [
      'Riemann integrable with $\\int (f+g) = \\int f + \\int g
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Riemann integral is linear: if $f$ and $g$ are integrable, so is $f + g$, and $\\int_a^b (f + g) = \\int_a^b f + \\int_a^b g$.',
  },
      'Not necessarily Riemann integrable',
      'Riemann integrable but $\\int (f+g) \\neq \\int f + \\int g$ in general',
      'Only Riemann integrable if $f$ and $g$ are both continuous',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Riemann integral is linear: if $f$ and $g$ are integrable, so is $f + g$, and $\\int_a^b (f + g) = \\int_a^b f + \\int_a^b g$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ is Riemann integrable on $[a,b]$ and $c \\in \\mathbb{R}$, then $\\int_a^b cf$:',
    options: [
      'May not exist',
      'Equals $c \\int_a^b f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Scalar multiplication: if $f$ is integrable, so is $cf$, and $\\int_a^b cf = c \\int_a^b f$ for any constant $c$.',
  },
      'Equals $\\int_a^b f + c
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Scalar multiplication: if $f$ is integrable, so is $cf$, and $\\int_a^b cf = c \\int_a^b f$ for any constant $c$.',
  },
      'Equals $|c| \\int_a^b f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Scalar multiplication: if $f$ is integrable, so is $cf$, and $\\int_a^b cf = c \\int_a^b f$ for any constant $c$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Scalar multiplication: if $f$ is integrable, so is $cf$, and $\\int_a^b cf = c \\int_a^b f$ for any constant $c$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f \\leq g$ on $[a,b]$ and both are Riemann integrable, then:',
    options: [
      '$\\int_a^b f = \\int_a^b g
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The integral preserves order: if $f(x) \\leq g(x)$ for all $x \\in [a,b]$, then $\\int_a^b f \\leq \\int_a^b g$.',
  },
      '$\\int_a^b f \\geq \\int_a^b g
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral preserves order: if $f(x) \\leq g(x)$ for all $x \\in [a,b]$, then $\\int_a^b f \\leq \\int_a^b g$.',
  },
      '$\\int_a^b f \\leq \\int_a^b g
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral preserves order: if $f(x) \\leq g(x)$ for all $x \\in [a,b]$, then $\\int_a^b f \\leq \\int_a^b g$.',
  },
      'No relationship in general',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral preserves order: if $f(x) \\leq g(x)$ for all $x \\in [a,b]$, then $\\int_a^b f \\leq \\int_a^b g$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $a < c < b$, if $f$ is Riemann integrable on $[a,b]$, then:',
    options: [
      '$\\int_a^b f = \\int_a^c f \\cdot \\int_c^b f
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The integral is additive over intervals: $\\int_a^b f = \\int_a^c f + \\int_c^b f$ for any $c \\in (a,b)$.',
  },
      '$f$ may not be integrable on $[a,c]$ or $[c,b]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The integral is additive over intervals: $\\int_a^b f = \\int_a^c f + \\int_c^b f$ for any $c \\in (a,b)$.',
  },
      '$\\int_a^b f = \\int_a^c f + \\int_c^b f
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The integral is additive over intervals: $\\int_a^b f = \\int_a^c f + \\int_c^b f$ for any $c \\in (a,b)$.',
  },
      '$\\int_a^c f = \\int_c^b f
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The integral is additive over intervals: $\\int_a^b f = \\int_a^c f + \\int_c^b f$ for any $c \\in (a,b)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The integral is additive over intervals: $\\int_a^b f = \\int_a^c f + \\int_c^b f$ for any $c \\in (a,b)$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $\\int_0^3 f = 7$ and $\\int_0^1 f = 2$, what is $\\int_1^3 f$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'By additivity: $\\int_0^3 f = \\int_0^1 f + \\int_1^3 f$, so $\\int_1^3 f = 7 - 2 = 5$.',
  },
];
