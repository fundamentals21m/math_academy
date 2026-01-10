import type { QuizQuestion } from './types';

export const section74Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Stokes\' theorem in its general form states that for a $k$-form $\\omega$ and $(k+1)$-chain $c$:',
    options: [
      '$\\int_c d\\omega = \\int_{\\partial c} \\omega$',
      '$\\int_c \\omega = \\int_{\\partial c} d\\omega$',
      '$d\\int_c \\omega = \\int_{\\partial c} \\omega$',
      '$\\int_c d\\omega = d\\int_{\\partial c} \\omega$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Stokes\' theorem equates the integral of $d\\omega$ over a chain to the integral of $\\omega$ over its boundary. This unifies many classical theorems.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Fundamental Theorem of Calculus $\\int_a^b f\'(x) dx = f(b) - f(a)$ is a special case of Stokes\' theorem when:',
    options: [
      '$\\omega = f$ is a 0-form on a 1-chain (interval)',
      '$\\omega = f dx$ is a 1-form',
      'Applied to a closed curve',
      'Applied to a 2-dimensional surface'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a 0-form (function) $f$, $df = f\' dx$. The boundary of $[a,b]$ is $\\{b\\} - \\{a\\}$ with orientations. Stokes gives $\\int_a^b df = f(b) - f(a)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Green\'s theorem (relating a line integral to a double integral) is Stokes\' theorem in:',
    options: [
      'Dimension 2, with a 1-form on a 2-chain (region)',
      'Dimension 3, with a 2-form',
      'Dimension 1',
      'Dimension 4'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Green\'s theorem is Stokes\' theorem for 1-forms in $\\mathbb{R}^2$: $\\oint_{\\partial R} P\\,dx + Q\\,dy = \\iint_R (Q_x - P_y) dA$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The classical divergence theorem (Gauss) is Stokes\' theorem applied to:',
    options: [
      'A 2-form on a 3-chain (solid region) in $\\mathbb{R}^3$',
      'A 1-form on a 2-chain in $\\mathbb{R}^3$',
      'A 0-form on a 1-chain',
      'A 3-form on a 4-chain'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The divergence theorem $\\iiint_V \\nabla \\cdot F\\, dV = \\iint_{\\partial V} F \\cdot n\\, dS$ is Stokes\' theorem for the 2-form associated to the vector field $F$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\omega$ is a closed form ($d\\omega = 0$) and $c$ is a cycle ($\\partial c = 0$), then:',
    options: [
      '$\\int_c \\omega$ depends only on the homology class of $c$',
      '$\\int_c \\omega = 0$',
      '$\\int_c \\omega = 1$',
      '$\\omega$ must be exact'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For closed forms, $\\int_c \\omega$ is unchanged if $c$ is replaced by a homologous cycle. This is because $\\int_{c+\\partial b} \\omega = \\int_c \\omega + \\int_{\\partial b} \\omega = \\int_c \\omega + \\int_b d\\omega = \\int_c \\omega$.',
  },
];
