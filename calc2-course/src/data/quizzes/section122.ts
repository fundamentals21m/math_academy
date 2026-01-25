import type { QuizQuestion } from './types';

export const section122Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To define the double integral of $f$ over a bounded region $S$ (not necessarily rectangular), we define $\\tilde{f}$ on an enclosing rectangle $Q$ by:',
    options: [
      '$\\tilde{f}(x,y) = f(x,y)$ for all $(x,y) \\in Q
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The extended function $\\tilde{f}$ equals $f$ inside $S$ and is set to zero outside $S$ (but within the enclosing rectangle $Q$). If $\\tilde{f}$ is integrable on $Q$, we define $\\iint_S f = \\iint_Q \\tilde{f}$.',
  },
      '$\\tilde{f}(x,y) = f(x,y)$ if $(x,y) \\in S$ and $\\tilde{f}(x,y) = 0$ if $(x,y) \\in Q - S
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The extended function $\\tilde{f}$ equals $f$ inside $S$ and is set to zero outside $S$ (but within the enclosing rectangle $Q$). If $\\tilde{f}$ is integrable on $Q$, we define $\\iint_S f = \\iint_Q \\tilde{f}$.',
  },
      '$\\tilde{f}(x,y) = 0$ for all $(x,y) \\in Q
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The extended function $\\tilde{f}$ equals $f$ inside $S$ and is set to zero outside $S$ (but within the enclosing rectangle $Q$). If $\\tilde{f}$ is integrable on $Q$, we define $\\iint_S f = \\iint_Q \\tilde{f}$.',
  },
      '$\\tilde{f}(x,y) = 1$ if $(x,y) \\in S$ and $\\tilde{f}(x,y) = f(x,y)$ if $(x,y) \\in Q - S
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The extended function $\\tilde{f}$ equals $f$ inside $S$ and is set to zero outside $S$ (but within the enclosing rectangle $Q$). If $\\tilde{f}$ is integrable on $Q$, we define $\\iint_S f = \\iint_Q \\tilde{f}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The extended function $\\tilde{f}$ equals $f$ inside $S$ and is set to zero outside $S$ (but within the enclosing rectangle $Q$). If $\\tilde{f}$ is integrable on $Q$, we define $\\iint_S f = \\iint_Q \\tilde{f}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A region of Type I is described by:',
    options: [
      '$\\{(x,y) \\mid c \\leq y \\leq d$ and $\\psi_1(y) \\leq x \\leq \\psi_2(y)\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Type I region is bounded between two curves $y = \\varphi_1(x)$ and $y = \\varphi_2(x)$ over an interval $a \\leq x \\leq b$. Vertical lines intersect the region in segments.',
  },
      '$\\{(x,y) \\mid a \\leq x \\leq b$ and $\\varphi_1(x) \\leq y \\leq \\varphi_2(x)\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A Type I region is bounded between two curves $y = \\varphi_1(x)$ and $y = \\varphi_2(x)$ over an interval $a \\leq x \\leq b$. Vertical lines intersect the region in segments.',
  },
      '$\\{(x,y) \\mid x^2 + y^2 \\leq r^2\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A Type I region is bounded between two curves $y = \\varphi_1(x)$ and $y = \\varphi_2(x)$ over an interval $a \\leq x \\leq b$. Vertical lines intersect the region in segments.',
  },
      '$\\{(x,y) \\mid a \\leq x \\leq b$ and $c \\leq y \\leq d\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A Type I region is bounded between two curves $y = \\varphi_1(x)$ and $y = \\varphi_2(x)$ over an interval $a \\leq x \\leq b$. Vertical lines intersect the region in segments.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A Type I region is bounded between two curves $y = \\varphi_1(x)$ and $y = \\varphi_2(x)$ over an interval $a \\leq x \\leq b$. Vertical lines intersect the region in segments.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a Type I region $S$ with $\\varphi_1(x) \\leq y \\leq \\varphi_2(x)$ for $a \\leq x \\leq b$, the double integral is computed by:',
    options: [
      '$\\int_c^d [\\int_a^b f(x,y)\\,dx]\\,dy
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a Type I region, we integrate first with respect to $y$ from $\\varphi_1(x)$ to $\\varphi_2(x)$, then with respect to $x$ from $a$ to $b$. The inner limits depend on $x$.',
  },
      '$\\int_a^b [\\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x,y)\\,dy]\\,dx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a Type I region, we integrate first with respect to $y$ from $\\varphi_1(x)$ to $\\varphi_2(x)$, then with respect to $x$ from $a$ to $b$. The inner limits depend on $x$.',
  },
      '$\\int_a^b \\int_c^d f(x,y)\\,dy\\,dx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a Type I region, we integrate first with respect to $y$ from $\\varphi_1(x)$ to $\\varphi_2(x)$, then with respect to $x$ from $a$ to $b$. The inner limits depend on $x$.',
  },
      '$\\int_a^b [\\int_a^b f(x,y)\\,dx]\\,dy
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a Type I region, we integrate first with respect to $y$ from $\\varphi_1(x)$ to $\\varphi_2(x)$, then with respect to $x$ from $a$ to $b$. The inner limits depend on $x$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a Type I region, we integrate first with respect to $y$ from $\\varphi_1(x)$ to $\\varphi_2(x)$, then with respect to $x$ from $a$ to $b$. The inner limits depend on $x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Theorem 11.8, the graph of a continuous function $\\varphi$ on $[a,b]$ has:',
    options: [
      'Positive area',
      'Infinite length',
      'Content zero',
      'Non-measurable area',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 11.8 states that the graph of a continuous function on a closed interval has content zero. This is key to proving integrability on Type I regions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A region of Type II differs from Type I in that:',
    options: [
      'It is bounded by horizontal lines instead of vertical lines',
      'Horizontal lines intersect it in segments (x varies between functions of y)',
      'It must be a rectangle',
      'It cannot be integrated over',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In a Type II region, $\\psi_1(y) \\leq x \\leq \\psi_2(y)$ for $c \\leq y \\leq d$. Horizontal lines intersect the region in segments, and we integrate first with respect to $x$.',
  },
];
