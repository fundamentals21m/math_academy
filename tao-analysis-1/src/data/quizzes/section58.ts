import type { QuizQuestion } from './types';

export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f$ is monotonically increasing on $[a,b]$, then $f$ is:',
    options: [
      'Riemann integrable',
      'Not necessarily Riemann integrable',
      'Riemann integrable only if continuous',
      'Riemann integrable only if bounded',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Every monotonic function on a closed bounded interval is Riemann integrable, even if it has discontinuities. Monotonic functions on $[a,b]$ can only have countably many discontinuities.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a monotonically increasing function $f$ on $[a,b]$ with partition $P = \\{x_0, \\ldots, x_n\\}$:',
    options: [
      '$M_i = f(x_{i-1})$ and $m_i = f(x_i)$',
      '$M_i$ and $m_i$ cannot be determined without more information',
      '$M_i = m_i = f(x_i)$',
      '$M_i = f(x_i)$ and $m_i = f(x_{i-1})$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For increasing $f$: on $[x_{i-1}, x_i]$, the sup is $M_i = f(x_i)$ (right endpoint) and inf is $m_i = f(x_{i-1})$ (left endpoint).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For monotonically increasing $f$ on $[a,b]$, the difference $U(f,P) - L(f,P)$ equals:',
    options: [
      '$(b-a)(f(b) - f(a))
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'For increasing $f$: $U - L = \\sum (M_i - m_i)\\Delta x_i = \\sum (f(x_i) - f(x_{i-1}))(x_i - x_{i-1})$.',
  },
      '$\\|P\\| \\cdot (f(b) - f(a))
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For increasing $f$: $U - L = \\sum (M_i - m_i)\\Delta x_i = \\sum (f(x_i) - f(x_{i-1}))(x_i - x_{i-1})$.',
  },
      '$\\sum_{i=1}^{n}(f(x_i) - f(x_{i-1}))(x_i - x_{i-1})
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For increasing $f$: $U - L = \\sum (M_i - m_i)\\Delta x_i = \\sum (f(x_i) - f(x_{i-1}))(x_i - x_{i-1})$.',
  },
      '$f(b) - f(a)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For increasing $f$: $U - L = \\sum (M_i - m_i)\\Delta x_i = \\sum (f(x_i) - f(x_{i-1}))(x_i - x_{i-1})$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For increasing $f$: $U - L = \\sum (M_i - m_i)\\Delta x_i = \\sum (f(x_i) - f(x_{i-1}))(x_i - x_{i-1})$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A monotonic function on $[a,b]$ can have:',
    options: [
      'At most countably many discontinuities',
      'No discontinuities',
      'At most finitely many discontinuities',
      'Uncountably many discontinuities',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Monotonic functions can have at most countably many discontinuities, and all discontinuities must be jump discontinuities. This is why they are Riemann integrable.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Let $f$ be increasing on $[0, 2]$ with $f(0) = 1$ and $f(2) = 5$. For uniform partition $P$ with $n = 2$ subintervals, what is $U(f,P) - L(f,P)$?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'For increasing $f$, $U - L \\leq \\|P\\|(f(b) - f(a)) = 1 \\cdot (5-1) = 4$. With the telescoping sum formula, this bound is achieved when using endpoints.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why does refining the partition help show monotonic functions are integrable?',
    options: [
      'It makes the function continuous',
      'It makes $U(f,P) - L(f,P)$ arbitrarily small',
      'It reduces the total variation of $f
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For monotonic $f$, $U(f,P) - L(f,P) \\leq \\|P\\|(f(b) - f(a))$. By taking finer partitions (smaller mesh), this difference can be made arbitrarily small, proving integrability.',
  },
      'It eliminates discontinuities',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For monotonic $f$, $U(f,P) - L(f,P) \\leq \\|P\\|(f(b) - f(a))$. By taking finer partitions (smaller mesh), this difference can be made arbitrarily small, proving integrability.',
  },
];
