import type { QuizQuestion } from './types';

export const section91Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The character $\\chi_V$ of a representation $V$ of $G$ is defined by:',
    options: [
      '$\\chi_V(g) = \\dim(V)$',
      '$\\chi_V(g) = \\det(\\rho(g))$',
      '$\\chi_V(g) = \\text{tr}(\\rho(g))$',
      '$\\chi_V(g) = \\rho(g)_{11}$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The character is the trace function: $\\chi_V(g) = \\text{tr}(\\rho(g))$ where $\\rho: G \\to GL(V)$ is the representation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Characters are constant on:',
    options: [
      'Cosets',
      'Subgroups',
      'Conjugacy classes',
      'Normal subgroups'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $\\text{tr}(ABA^{-1}) = \\text{tr}(B)$, we have $\\chi(hgh^{-1}) = \\chi(g)$. Characters are class functions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The first orthogonality relation for irreducible characters $\\chi_i, \\chi_j$ states:',
    options: [
      '$\\sum_{g \\in G} \\chi_i(g) = 0$',
      '$\\frac{1}{|G|}\\sum_{g \\in G} \\chi_i(g)\\overline{\\chi_j(g)} = \\delta_{ij}$',
      '$\\chi_i(e) = \\chi_j(e)$',
      '$\\chi_i \\chi_j = \\chi_{i+j}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The first orthogonality relation: $\\langle \\chi_i, \\chi_j \\rangle = \\frac{1}{|G|}\\sum_{g \\in G} \\chi_i(g)\\overline{\\chi_j(g)} = \\delta_{ij}$ for irreducible characters.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The second orthogonality relation sums over:',
    options: [
      'Group elements',
      'Irreducible characters',
      'Conjugacy classes',
      'Subgroups'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The second (column) orthogonality: $\\sum_i \\chi_i(g)\\overline{\\chi_i(h)} = \\begin{cases} |C_G(g)| & \\text{if } g, h \\text{ conjugate} \\\\ 0 & \\text{otherwise}\\end{cases}$. It sums over irreducible characters.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The sum $\\sum_i \\chi_i(e)^2$ over all irreducible characters equals:',
    options: [
      '$1$',
      'The number of conjugacy classes',
      '$|G|$',
      '$|G|^2$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\sum_i (\\dim V_i)^2 = |G|$ because $\\mathbb{C}G \\cong \\bigoplus_i M_{n_i}(\\mathbb{C})$ where $n_i = \\chi_i(e)$, and $\\dim(\\mathbb{C}G) = |G| = \\sum_i n_i^2$.',
  },
];
