import type { QuizQuestion } from './types';

export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Fundamental Theorem of Algebra states that every non-constant polynomial with complex coefficients:',
    options: [
      'Has at least one real root',
      'Has at least one complex root',
      'Has exactly $n$ distinct roots where $n$ is the degree',
      'Has roots that are all algebraic numbers'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Fundamental Theorem of Algebra: Every non-constant polynomial $p(z)$ with complex coefficients has at least one complex root. Equivalently, $\\mathbb{C}$ is algebraically closed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Rudin\'s proof of the Fundamental Theorem of Algebra uses:',
    options: [
      'Galois theory',
      'Properties of the exponential function and compactness arguments',
      'Algebraic techniques only',
      'The residue theorem from complex analysis'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rudin\'s proof (Theorem 8.8) uses analysis: if $p(z) \\neq 0$ for all $z$, then $1/p(z)$ is a bounded entire function. The proof shows $|p(z)| \\to \\infty$ as $|z| \\to \\infty$, so $|p|$ attains a minimum, which must be $0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A consequence of the FTA is that every polynomial of degree $n$ has exactly:',
    options: [
      '$n$ distinct complex roots',
      '$n$ complex roots counting multiplicity',
      'At most $n$ complex roots',
      '$n$ real roots'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By repeatedly factoring out roots (each application of FTA gives one root), a degree-$n$ polynomial can be written as $c(z - r_1)(z - r_2)\\cdots(z - r_n)$, giving exactly $n$ roots counting multiplicity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The polynomial $p(z) = z^4 + 1$ over $\\mathbb{R}$:',
    options: [
      'Has four real roots',
      'Is irreducible over $\\mathbb{R}$',
      'Factors into two irreducible quadratics over $\\mathbb{R}$',
      'Has no complex roots'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$z^4 + 1 = (z^2 + \\sqrt{2}z + 1)(z^2 - \\sqrt{2}z + 1)$ over $\\mathbb{R}$. Each quadratic factor has complex conjugate roots (the 8th roots of unity: $e^{i\\pi/4}, e^{3i\\pi/4}, e^{5i\\pi/4}, e^{7i\\pi/4}$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The algebraic closure of $\\mathbb{R}$ is:',
    options: [
      '$\\mathbb{R}$ itself',
      '$\\mathbb{C}$',
      '$\\mathbb{Q}$',
      'The algebraic numbers'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By the FTA, every polynomial with real (hence complex) coefficients has all its roots in $\\mathbb{C}$. Since $\\mathbb{C} = \\mathbb{R}[i]$ (adjoining one root of $x^2 + 1$), $\\mathbb{C}$ is the algebraic closure of $\\mathbb{R}$.',
  },
];
