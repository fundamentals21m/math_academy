import type { QuizQuestion } from './types';

export const section68Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A field extension $E/F$ is Galois if and only if it is:',
    options: [
      'Algebraic',
      'Finite',
      'Normal and separable',
      'Simple'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A finite extension is Galois if and only if it is both normal (every irreducible polynomial with one root in $E$ splits in $E$) and separable (every element has separable minimal polynomial).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Galois group $\\text{Gal}(E/F)$ consists of:',
    options: [
      'All homomorphisms from $E$ to $F$',
      'All automorphisms of $E$ that fix $F$ pointwise',
      'All isomorphisms from $E$ to any field',
      'All endomorphisms of $E$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\text{Gal}(E/F) = \\{\\sigma: E \\to E \\mid \\sigma \\text{ is an automorphism and } \\sigma(a) = a \\text{ for all } a \\in F\\}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The fixed field $E^H$ of a subgroup $H \\leq \\text{Gal}(E/F)$ is defined as:',
    options: [
      '$\\{\\alpha \\in E : h(\\alpha) = \\alpha \\text{ for some } h \\in H\\}$',
      '$\\{\\alpha \\in E : h(\\alpha) = \\alpha \\text{ for all } h \\in H\\}$',
      '$\\{h(\\alpha) : h \\in H, \\alpha \\in E\\}$',
      '$H \\cap E$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The fixed field $E^H$ consists of all elements of $E$ that are fixed by every automorphism in $H$. This is a subfield of $E$ containing $F$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $E/F$ is a Galois extension, then $|\\text{Gal}(E/F)|$ equals:',
    options: [
      'The number of intermediate fields',
      '$[E:F]$',
      '$[E:F]!$',
      '$\\phi([E:F])$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a Galois extension, the order of the Galois group equals the degree of the extension: $|\\text{Gal}(E/F)| = [E:F]$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The extension $\\mathbb{Q}(\\sqrt[3]{2})/\\mathbb{Q}$ is:',
    options: [
      'Galois',
      'Normal but not separable',
      'Separable but not normal',
      'Neither normal nor separable'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Over $\\mathbb{Q}$ (characteristic $0$), all extensions are separable. However, $\\mathbb{Q}(\\sqrt[3]{2})$ is not normal because the minimal polynomial $x^3 - 2$ has roots $\\sqrt[3]{2}, \\sqrt[3]{2}\\omega, \\sqrt[3]{2}\\omega^2$, and the complex roots are not in $\\mathbb{Q}(\\sqrt[3]{2}) \\subset \\mathbb{R}$.',
  },
];
