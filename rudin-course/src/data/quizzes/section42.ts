import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f \\in \\mathscr{R}(\\alpha)$ on $[a, b]$ and $c \\in (a, b)$, then:',
    options: [
      '$\\int_a^b f \\, d\\alpha = \\int_a^c f \\, d\\alpha \\cdot \\int_c^b f \\, d\\alpha$',
      '$\\int_a^b f \\, d\\alpha = \\int_c^b f \\, d\\alpha - \\int_a^c f \\, d\\alpha$',
      '$\\int_a^b f \\, d\\alpha = \\int_a^c f \\, d\\alpha + \\int_c^b f \\, d\\alpha$',
      'The integral cannot be split'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 6.12(c): If $f \\in \\mathscr{R}(\\alpha)$ on $[a,b]$ and $c \\in (a,b)$, then $f \\in \\mathscr{R}(\\alpha)$ on $[a,c]$ and $[c,b]$, and $\\int_a^b f \\, d\\alpha = \\int_a^c f \\, d\\alpha + \\int_c^b f \\, d\\alpha$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f \\in \\mathscr{R}(\\alpha)$ and $g \\in \\mathscr{R}(\\alpha)$ on $[a, b]$, then:',
    options: [
      '$f + g$ may not be in $\\mathscr{R}(\\alpha)$',
      '$f/g \\in \\mathscr{R}(\\alpha)$ always',
      '$fg$ may not be in $\\mathscr{R}(\\alpha)$',
      '$fg \\in \\mathscr{R}(\\alpha)$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 6.13: If $f, g \\in \\mathscr{R}(\\alpha)$, then $fg \\in \\mathscr{R}(\\alpha)$. Also $f + g$, $cf$ (for constant $c$), and $|f|$ are in $\\mathscr{R}(\\alpha)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ is continuous and $\\alpha$ is monotonically increasing on $[a, b]$, then:',
    options: [
      '$f$ may not be integrable with respect to $\\alpha
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Theorem 6.8: If $f$ is continuous on $[a,b]$ and $\\alpha$ is monotonically increasing, then $f \\in \\mathscr{R}(\\alpha)$. Continuity ensures we can make upper and lower sums arbitrarily close.',
  },
      '$f \\in \\mathscr{R}(\\alpha)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Theorem 6.8: If $f$ is continuous on $[a,b]$ and $\\alpha$ is monotonically increasing, then $f \\in \\mathscr{R}(\\alpha)$. Continuity ensures we can make upper and lower sums arbitrarily close.',
  },
      '$\\alpha \\in \\mathscr{R}(f)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Theorem 6.8: If $f$ is continuous on $[a,b]$ and $\\alpha$ is monotonically increasing, then $f \\in \\mathscr{R}(\\alpha)$. Continuity ensures we can make upper and lower sums arbitrarily close.',
  },
      'The integral equals zero',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Theorem 6.8: If $f$ is continuous on $[a,b]$ and $\\alpha$ is monotonically increasing, then $f \\in \\mathscr{R}(\\alpha)$. Continuity ensures we can make upper and lower sums arbitrarily close.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Integration by parts for Riemann-Stieltjes integrals: If $f, \\alpha$ are appropriately integrable, then:',
    options: [
      '$\\int_a^b f \\, d\\alpha + \\int_a^b \\alpha \\, df = f(b)\\alpha(b) - f(a)\\alpha(a)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 6.22: $\\int_a^b f \\, d\\alpha + \\int_a^b \\alpha \\, df = f(b)\\alpha(b) - f(a)\\alpha(a)$. This is the integration by parts formula for Riemann-Stieltjes integrals.',
  },
      '$\\int_a^b f \\, d\\alpha = -\\int_a^b \\alpha \\, df
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 6.22: $\\int_a^b f \\, d\\alpha + \\int_a^b \\alpha \\, df = f(b)\\alpha(b) - f(a)\\alpha(a)$. This is the integration by parts formula for Riemann-Stieltjes integrals.',
  },
      '$\\int_a^b f \\, d\\alpha \\cdot \\int_a^b \\alpha \\, df = f(b)\\alpha(b)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 6.22: $\\int_a^b f \\, d\\alpha + \\int_a^b \\alpha \\, df = f(b)\\alpha(b) - f(a)\\alpha(a)$. This is the integration by parts formula for Riemann-Stieltjes integrals.',
  },
      '$\\int_a^b f \\, d\\alpha = f(b)\\alpha(b)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 6.22: $\\int_a^b f \\, d\\alpha + \\int_a^b \\alpha \\, df = f(b)\\alpha(b) - f(a)\\alpha(a)$. This is the integration by parts formula for Riemann-Stieltjes integrals.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 6.22: $\\int_a^b f \\, d\\alpha + \\int_a^b \\alpha \\, df = f(b)\\alpha(b) - f(a)\\alpha(a)$. This is the integration by parts formula for Riemann-Stieltjes integrals.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f \\leq g$ on $[a, b]$ and $\\alpha$ is monotonically increasing, then:',
    options: [
      '$\\int_a^b f \\, d\\alpha \\geq \\int_a^b g \\, d\\alpha
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Theorem 6.12(b): If $f \\leq g$ and $\\alpha$ is increasing, then $\\int_a^b f \\, d\\alpha \\leq \\int_a^b g \\, d\\alpha$. This follows because each $\\Delta\\alpha_i \\geq 0$.',
  },
      '$\\int_a^b f \\, d\\alpha \\leq \\int_a^b g \\, d\\alpha
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 6.12(b): If $f \\leq g$ and $\\alpha$ is increasing, then $\\int_a^b f \\, d\\alpha \\leq \\int_a^b g \\, d\\alpha$. This follows because each $\\Delta\\alpha_i \\geq 0$.',
  },
      '$\\int_a^b f \\, d\\alpha = \\int_a^b g \\, d\\alpha
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 6.12(b): If $f \\leq g$ and $\\alpha$ is increasing, then $\\int_a^b f \\, d\\alpha \\leq \\int_a^b g \\, d\\alpha$. This follows because each $\\Delta\\alpha_i \\geq 0$.',
  },
      'No comparison is possible',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 6.12(b): If $f \\leq g$ and $\\alpha$ is increasing, then $\\int_a^b f \\, d\\alpha \\leq \\int_a^b g \\, d\\alpha$. This follows because each $\\Delta\\alpha_i \\geq 0$.',
  },
];
