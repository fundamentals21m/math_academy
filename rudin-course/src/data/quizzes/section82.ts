import type { QuizQuestion } from './types';

export const section82Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Lebesgue integral of a non-negative measurable function $f$ is defined as:',
    options: [
      '$\\int_a^b f(x) \\, dx$ using Riemann sums',
      '$\\lim_{n \\to \\infty} \\sum_{k=1}^n f(x_k) \\Delta x
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Lebesgue integral of $f \\geq 0$ is the supremum of integrals of simple functions bounded above by $f$. This definition extends naturally to signed and complex functions.',
  },
      'The area under the graph of $f
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Lebesgue integral of $f \\geq 0$ is the supremum of integrals of simple functions bounded above by $f$. This definition extends naturally to signed and complex functions.',
  },
      '$\\int f \\, d\\mu = \\sup\\{\\int s \\, d\\mu : 0 \\leq s \\leq f, s \\text{ simple}\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Lebesgue integral of $f \\geq 0$ is the supremum of integrals of simple functions bounded above by $f$. This definition extends naturally to signed and complex functions.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Lebesgue integral of $f \\geq 0$ is the supremum of integrals of simple functions bounded above by $f$. This definition extends naturally to signed and complex functions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Monotone Convergence Theorem states that if $0 \\leq f_1 \\leq f_2 \\leq \\cdots$ and $f_n \\to f$ pointwise, then:',
    options: [
      'The integrals need not converge',
      '$\\int f \\, d\\mu \\leq \\liminf \\int f_n \\, d\\mu
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'MCT: for an increasing sequence of non-negative measurable functions converging to $f$, the integrals converge to $\\int f$. No domination hypothesis is needed.',
  },
      '$\\int f_n \\, d\\mu \\to \\int f \\, d\\mu
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'MCT: for an increasing sequence of non-negative measurable functions converging to $f$, the integrals converge to $\\int f$. No domination hypothesis is needed.',
  },
      '$\\int f_n \\, d\\mu$ is bounded',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'MCT: for an increasing sequence of non-negative measurable functions converging to $f$, the integrals converge to $\\int f$. No domination hypothesis is needed.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Fatou\'s Lemma states that for non-negative measurable $f_n$:',
    options: [
      '$\\int \\limsup f_n \\, d\\mu \\geq \\limsup \\int f_n \\, d\\mu
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Fatou\'s Lemma: $\\int \\liminf f_n \\leq \\liminf \\int f_n$. The inequality can be strict. This is a key tool when the sequence is not monotone.',
  },
      '$\\int \\lim f_n = \\lim \\int f_n
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Fatou\'s Lemma: $\\int \\liminf f_n \\leq \\liminf \\int f_n$. The inequality can be strict. This is a key tool when the sequence is not monotone.',
  },
      '$\\int \\liminf f_n \\, d\\mu \\leq \\liminf \\int f_n \\, d\\mu
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Fatou\'s Lemma: $\\int \\liminf f_n \\leq \\liminf \\int f_n$. The inequality can be strict. This is a key tool when the sequence is not monotone.',
  },
      '$\\int f_n$ converges',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Fatou\'s Lemma: $\\int \\liminf f_n \\leq \\liminf \\int f_n$. The inequality can be strict. This is a key tool when the sequence is not monotone.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Dominated Convergence Theorem requires:',
    options: [
      '$f_n \\to f$ pointwise and $|f_n| \\leq g$ for some integrable $g
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'DCT: if $f_n \\to f$ pointwise and $|f_n| \\leq g$ with $\\int g < \\infty$, then $\\int f_n \\to \\int f$. The dominating function $g$ must be integrable.',
  },
      '$f_n \\to f$ uniformly',
      '$f_n$ be bounded by a constant',
      '$f_n$ be continuous',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'DCT: if $f_n \\to f$ pointwise and $|f_n| \\leq g$ with $\\int g < \\infty$, then $\\int f_n \\to \\int f$. The dominating function $g$ must be integrable.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A measurable function $f$ is Lebesgue integrable if:',
    options: [
      '$f$ is continuous',
      '$\\int |f| \\, d\\mu < \\infty
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Integrability means the integral of $|f|$ is finite. We then define $\\int f = \\int f^+ - \\int f^-$ where $f^\\pm$ are the positive/negative parts.',
  },
      '$f$ is bounded',
      'The Riemann integral exists',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Integrability means the integral of $|f|$ is finite. We then define $\\int f = \\int f^+ - \\int f^-$ where $f^\\pm$ are the positive/negative parts.',
  },
];
