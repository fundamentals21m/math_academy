import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear transformation $T$ is Hermitian if for all $x, y$ in the domain:',
    options: [
      '$(T(x), y) = -(x, T(y))
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A Hermitian operator satisfies $(T(x), y) = (x, T(y))$, meaning $T$ can be "shifted" between factors without changing the inner product.',
  },
      '$(T(x), y) = (y, T(x))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Hermitian operator satisfies $(T(x), y) = (x, T(y))$, meaning $T$ can be "shifted" between factors without changing the inner product.',
  },
      '$(T(x), y) = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Hermitian operator satisfies $(T(x), y) = (x, T(y))$, meaning $T$ can be "shifted" between factors without changing the inner product.',
  },
      '$(T(x), y) = (x, T(y))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Hermitian operator satisfies $(T(x), y) = (x, T(y))$, meaning $T$ can be "shifted" between factors without changing the inner product.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Hermitian operator satisfies $(T(x), y) = (x, T(y))$, meaning $T$ can be "shifted" between factors without changing the inner product.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a real Euclidean space, Hermitian transformations are called:',
    options: [
      'Unitary',
      'Symmetric',
      'Orthogonal',
      'Normal',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In real spaces, the Hermitian condition $(T(x), y) = (x, T(y))$ is called symmetry, so Hermitian operators are called symmetric.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The differentiation operator $D(f) = f\'$ on $C(a, b)$ with periodic boundary conditions $f(a) = f(b)$ is:',
    options: [
      'Skew-symmetric',
      'Symmetric',
      'Unitary',
      'Hermitian',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The integrand in the skew-symmetry condition is $(fg)\' = f\'g + fg\'$. Integrating gives $[fg]_a^b = 0$ due to periodicity, proving $D$ is skew-symmetric.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Sturm-Liouville operator $T(f) = (pf\')\'+ qf$ is symmetric with respect to which inner product?',
    options: [
      '$(f, g) = \\int_a^b f(t) + g(t)\\, dt
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Sturm-Liouville operator is symmetric with respect to the standard $L^2$ inner product $(f, g) = \\int_a^b f(t)g(t)\\, dt$.',
  },
      '$(f, g) = f(a)g(a) + f(b)g(b)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Sturm-Liouville operator is symmetric with respect to the standard $L^2$ inner product $(f, g) = \\int_a^b f(t)g(t)\\, dt$.',
  },
      '$(f, g) = f\\'(a)g\\'(b)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Sturm-Liouville operator is symmetric with respect to the standard $L^2$ inner product $(f, g) = \\int_a^b f(t)g(t)\\, dt$.',
  },
      '$(f, g) = \\int_a^b f(t)g(t)\\, dt
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Sturm-Liouville operator is symmetric with respect to the standard $L^2$ inner product $(f, g) = \\int_a^b f(t)g(t)\\, dt$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Sturm-Liouville operator is symmetric with respect to the standard $L^2$ inner product $(f, g) = \\int_a^b f(t)g(t)\\, dt$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A skew-Hermitian transformation satisfies:',
    options: [
      '$(T(x), y) = (x, T(y))
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A skew-Hermitian operator satisfies $(T(x), y) = -(x, T(y))$; shifting $T$ between factors introduces a sign change.',
  },
      '$(T(x), y) = (T(y), x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A skew-Hermitian operator satisfies $(T(x), y) = -(x, T(y))$; shifting $T$ between factors introduces a sign change.',
  },
      '$(T(x), y) = -(x, T(y))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A skew-Hermitian operator satisfies $(T(x), y) = -(x, T(y))$; shifting $T$ between factors introduces a sign change.',
  },
      '$(T(x), y) = i(x, T(y))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A skew-Hermitian operator satisfies $(T(x), y) = -(x, T(y))$; shifting $T$ between factors introduces a sign change.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A skew-Hermitian operator satisfies $(T(x), y) = -(x, T(y))$; shifting $T$ between factors introduces a sign change.',
  },
];
