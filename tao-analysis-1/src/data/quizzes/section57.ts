import type { QuizQuestion } from './types';

export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f$ is continuous on $[a,b]$, then $f$ is:',
    options: [
      'Riemann integrable',
      'Not necessarily Riemann integrable',
      'Riemann integrable only if $f$ is also differentiable',
      'Riemann integrable only if $f$ is monotonic',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Every continuous function on a closed bounded interval is Riemann integrable. This is a fundamental theorem.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The proof that continuous functions are Riemann integrable relies on the fact that continuous functions on $[a,b]$ are:',
    options: [
      'Differentiable',
      'Monotonic',
      'Bounded above but not below',
      'Uniformly continuous',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Continuous functions on compact sets are uniformly continuous. Uniform continuity allows us to make $U(f,P) - L(f,P)$ arbitrarily small by choosing fine enough partitions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ is continuous on $[a,b]$, then for any $\\varepsilon > 0$ there exists a partition $P$ such that:',
    options: [
      '$U(f, P) < \\varepsilon
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For continuous (hence uniformly continuous) $f$, we can make the difference $U(f,P) - L(f,P) < \\varepsilon$ by choosing $P$ with small enough mesh.',
  },
      '$L(f, P) > -\\varepsilon
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For continuous (hence uniformly continuous) $f$, we can make the difference $U(f,P) - L(f,P) < \\varepsilon$ by choosing $P$ with small enough mesh.',
  },
      '$U(f, P) - L(f, P) < \\varepsilon
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For continuous (hence uniformly continuous) $f$, we can make the difference $U(f,P) - L(f,P) < \\varepsilon$ by choosing $P$ with small enough mesh.',
  },
      '$U(f, P) = L(f, P)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For continuous (hence uniformly continuous) $f$, we can make the difference $U(f,P) - L(f,P) < \\varepsilon$ by choosing $P$ with small enough mesh.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For continuous (hence uniformly continuous) $f$, we can make the difference $U(f,P) - L(f,P) < \\varepsilon$ by choosing $P$ with small enough mesh.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is continuous on $[a,b]$ and $F(x) = \\int_a^x f(t)\\,dt$, then:',
    options: [
      '$F$ is continuous but not differentiable',
      '$F$ is differentiable with $F\\'(x) = f(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Fundamental Theorem of Calculus (Part 1): if $f$ is continuous, then $F(x) = \\int_a^x f$ is differentiable with $F\'(x) = f(x)$.',
  },
      '$F\\'(x) = f\\'(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Fundamental Theorem of Calculus (Part 1): if $f$ is continuous, then $F(x) = \\int_a^x f$ is differentiable with $F\'(x) = f(x)$.',
  },
      '$F$ is constant',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Fundamental Theorem of Calculus (Part 1): if $f$ is continuous, then $F(x) = \\int_a^x f$ is differentiable with $F\'(x) = f(x)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The oscillation of $f$ on interval $[c,d]$ is defined as:',
    options: [
      '$\\sup_{[c,d]} f + \\inf_{[c,d]} f
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The oscillation measures how much $f$ varies on $[c,d]$: $\\omega_f([c,d]) = \\sup f - \\inf f$. For continuous $f$, this can be made small on small intervals.',
  },
      '$\\sup_{[c,d]} |f|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The oscillation measures how much $f$ varies on $[c,d]$: $\\omega_f([c,d]) = \\sup f - \\inf f$. For continuous $f$, this can be made small on small intervals.',
  },
      '$f(d) - f(c)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The oscillation measures how much $f$ varies on $[c,d]$: $\\omega_f([c,d]) = \\sup f - \\inf f$. For continuous $f$, this can be made small on small intervals.',
  },
      '$\\sup_{[c,d]} f - \\inf_{[c,d]} f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The oscillation measures how much $f$ varies on $[c,d]$: $\\omega_f([c,d]) = \\sup f - \\inf f$. For continuous $f$, this can be made small on small intervals.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The oscillation measures how much $f$ varies on $[c,d]$: $\\omega_f([c,d]) = \\sup f - \\inf f$. For continuous $f$, this can be made small on small intervals.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $f(x) = x^2$ on $[0, 1]$ and $P = \\{0, 0.5, 1\\}$, what is the oscillation of $f$ on $[0, 0.5]$?',
    correctAnswer: 0.25,
    numericRange: { min: 0, max: 1, precision: 2 },
    difficulty: 'medium',
    explanation: 'On $[0, 0.5]$: $\\sup f = 0.25$ (at $x=0.5$) and $\\inf f = 0$ (at $x=0$). Oscillation $= 0.25 - 0 = 0.25$.',
  },
];
