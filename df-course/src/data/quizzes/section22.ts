import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two elements $g, h \\in G$ are conjugate if:',
    options: [
      '$gh = hg$',
      '$g = xhx^{-1}$ for some $x \\in G$',
      '$g = h^n$ for some $n$',
      '$\\langle g \\rangle = \\langle h \\rangle$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$g$ and $h$ are conjugate if $g = xhx^{-1}$ for some $x \\in G$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Class Equation for a finite group $G$ is:',
    options: [
      '$|G| = |Z(G)| + \\sum [G : C_G(g_i)]$',
      '$|G| = \\sum |C_G(g_i)|$',
      '$|G| = |Z(G)| \\cdot \\sum [G : C_G(g_i)]$',
      '$|G| = |Z(G)| - \\sum [G : C_G(g_i)]$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Class Equation: $|G| = |Z(G)| + \\sum_{i} [G : C_G(g_i)]$, summing over representatives of non-central conjugacy classes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The size of the conjugacy class of $g$ equals:',
    options: [
      '$|C_G(g)|$',
      '$[G : C_G(g)]$',
      '$|Z(G)|$',
      '$|N_G(g)|$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The conjugacy class of $g$ has size $[G : C_G(g)]$ by the orbit-stabilizer theorem (conjugation action).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'An element $g \\in G$ is in the center $Z(G)$ if and only if:',
    options: [
      'Its conjugacy class has size $> 1$',
      'Its conjugacy class is $\\{g\\}$',
      '$C_G(g) = \\{e\\}$',
      '$N_G(\\langle g \\rangle) = \\langle g \\rangle$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$g \\in Z(G)$ iff $g$ commutes with all elements iff $xgx^{-1} = g$ for all $x$ iff conjugacy class is $\\{g\\}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'In $S_3$, how many conjugacy classes are there?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$S_3$ has 3 conjugacy classes: $\\{e\\}$, $\\{(12), (13), (23)\\}$ (transpositions), and $\\{(123), (132)\\}$ (3-cycles).',
  },
];
