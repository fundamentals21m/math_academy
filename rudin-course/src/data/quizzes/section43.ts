import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The First Fundamental Theorem of Calculus states that if $f \\in \\mathscr{R}$ on $[a, b]$ and $F(x) = \\int_a^x f(t) \\, dt$, then:',
    options: [
      '$F$ is continuous on $[a, b]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 6.20: If $f \\in \\mathscr{R}$ on $[a,b]$, then $F(x) = \\int_a^x f(t)\\,dt$ is continuous on $[a,b]$. Furthermore, if $f$ is continuous at a point $x_0$, then $F$ is differentiable at $x_0$ with $F\'(x_0) = f(x_0)$.',
  },
      '$F$ is differentiable everywhere with $F\\' = f
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 6.20: If $f \\in \\mathscr{R}$ on $[a,b]$, then $F(x) = \\int_a^x f(t)\\,dt$ is continuous on $[a,b]$. Furthermore, if $f$ is continuous at a point $x_0$, then $F$ is differentiable at $x_0$ with $F\'(x_0) = f(x_0)$.',
  },
      '$F$ is monotonically increasing',
      '$F\\'(x) = f(x)$ for all $x \\in [a, b]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 6.20: If $f \\in \\mathscr{R}$ on $[a,b]$, then $F(x) = \\int_a^x f(t)\\,dt$ is continuous on $[a,b]$. Furthermore, if $f$ is continuous at a point $x_0$, then $F$ is differentiable at $x_0$ with $F\'(x_0) = f(x_0)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 6.20: If $f \\in \\mathscr{R}$ on $[a,b]$, then $F(x) = \\int_a^x f(t)\\,dt$ is continuous on $[a,b]$. Furthermore, if $f$ is continuous at a point $x_0$, then $F$ is differentiable at $x_0$ with $F\'(x_0) = f(x_0)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Second Fundamental Theorem of Calculus states that if $F\' = f$ and $f \\in \\mathscr{R}$ on $[a, b]$, then:',
    options: [
      '$\\int_a^b f(x) \\, dx = F(a) - F(b)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Theorem 6.21: If $f \\in \\mathscr{R}$ on $[a,b]$ and there exists a differentiable function $F$ on $[a,b]$ with $F\' = f$, then $\\int_a^b f(x)\\,dx = F(b) - F(a)$.',
  },
      '$\\int_a^b f(x) \\, dx = F(b) - F(a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Theorem 6.21: If $f \\in \\mathscr{R}$ on $[a,b]$ and there exists a differentiable function $F$ on $[a,b]$ with $F\' = f$, then $\\int_a^b f(x)\\,dx = F(b) - F(a)$.',
  },
      '$\\int_a^b F(x) \\, dx = f(b) - f(a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Theorem 6.21: If $f \\in \\mathscr{R}$ on $[a,b]$ and there exists a differentiable function $F$ on $[a,b]$ with $F\' = f$, then $\\int_a^b f(x)\\,dx = F(b) - F(a)$.',
  },
      '$F(x) = \\int_a^x f(t) \\, dt
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Theorem 6.21: If $f \\in \\mathscr{R}$ on $[a,b]$ and there exists a differentiable function $F$ on $[a,b]$ with $F\' = f$, then $\\int_a^b f(x)\\,dx = F(b) - F(a)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Theorem 6.21: If $f \\in \\mathscr{R}$ on $[a,b]$ and there exists a differentiable function $F$ on $[a,b]$ with $F\' = f$, then $\\int_a^b f(x)\\,dx = F(b) - F(a)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ has a removable discontinuity at $c \\in (a, b)$ but is otherwise continuous, and $F(x) = \\int_a^x f(t) \\, dt$, then:',
    options: [
      '$F$ is differentiable at $c$ with $F\\'(c) = \\lim_{t \\to c} f(t)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The key insight is that integration "smooths out" removable discontinuities. $F$ is differentiable at $c$ and $F\'(c) = \\lim_{t \\to c} f(t)$, not $f(c)$. The value of $f$ at an isolated point doesn\'t affect the integral.',
  },
      '$F$ is not differentiable at $c
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The key insight is that integration "smooths out" removable discontinuities. $F$ is differentiable at $c$ and $F\'(c) = \\lim_{t \\to c} f(t)$, not $f(c)$. The value of $f$ at an isolated point doesn\'t affect the integral.',
  },
      '$F$ is discontinuous at $c
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The key insight is that integration "smooths out" removable discontinuities. $F$ is differentiable at $c$ and $F\'(c) = \\lim_{t \\to c} f(t)$, not $f(c)$. The value of $f$ at an isolated point doesn\'t affect the integral.',
  },
      '$F\\'(c) = f(c)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The key insight is that integration "smooths out" removable discontinuities. $F$ is differentiable at $c$ and $F\'(c) = \\lim_{t \\to c} f(t)$, not $f(c)$. The value of $f$ at an isolated point doesn\'t affect the integral.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The key insight is that integration "smooths out" removable discontinuities. $F$ is differentiable at $c$ and $F\'(c) = \\lim_{t \\to c} f(t)$, not $f(c)$. The value of $f$ at an isolated point doesn\'t affect the integral.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $g$ is continuous and $F(x) = \\int_a^{x^2} g(t) \\, dt$, then $F\'(x) = $',
    options: [
      '$g(x^2)$',
      '$g(x^2) \\cdot 2x + g(a)$',
      '$2x \\cdot g(x^2)$',
      '$\\int_a^{x^2} g\'(t) \\, dt$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the chain rule combined with FTC: Let $G(u) = \\int_a^u g(t)\\,dt$, so $F(x) = G(x^2)$. Then $F\'(x) = G\'(x^2) \\cdot 2x = g(x^2) \\cdot 2x$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which hypothesis is NOT required for the Second FTC to hold?',
    options: [
      '$f$ is Riemann integrable on $[a, b]$',
      '$F$ is differentiable on $[a, b]$',
      '$F\' = f$ on $[a, b]$',
      '$f$ is continuous on $[a, b]$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Second FTC (Theorem 6.21) requires: (1) $f \\in \\mathscr{R}$, (2) $F$ differentiable with $F\' = f$. It does NOT require $f$ to be continuous. For example, $f$ could be a step function with $F$ piecewise linear.',
  },
];
