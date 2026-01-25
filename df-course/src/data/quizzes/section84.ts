import type { QuizQuestion } from './types';

export const section84Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A Dedekind domain is an integral domain that is:',
    options: [
      'A PID',
      'Noetherian, integrally closed, with every nonzero prime ideal maximal',
      'A field',
      'A UFD with finitely many prime elements'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A Dedekind domain is a Noetherian integral domain that is integrally closed (in its field of fractions) and has Krull dimension $1$ (every nonzero prime is maximal).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a Dedekind domain, every nonzero ideal $I$ can be written uniquely as:',
    options: [
      'A principal ideal',
      'A product of prime ideals',
      'An intersection of maximal ideals',
      'A sum of two ideals',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In a Dedekind domain, every nonzero ideal factors uniquely as a product of prime ideals: $I = P_1^{e_1} P_2^{e_2} \\cdots P_k^{e_k}$. This generalizes unique factorization of integers.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The ring of integers $\\mathcal{O}_K$ of a number field $K$ is always:',
    options: [
      'A Dedekind domain',
      'A PID',
      'A UFD',
      'A field',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The ring of integers of any number field is a Dedekind domain. It is a PID (and hence UFD) if and only if the class number is $1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In $\\mathbb{Z}[\\sqrt{-5}]$, the element $6$ factors as:',
    options: [
      '$6 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})$ only',
      '$6 = 2 \\cdot 3$ only',
      '$6$ is prime',
      'Both factorizations exist, showing non-unique factorization',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$6 = 2 \\cdot 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})$ are two distinct factorizations into irreducibles. This shows $\\mathbb{Z}[\\sqrt{-5}]$ is not a UFD, though it is a Dedekind domain where ideals factor uniquely.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The ideal class group of a Dedekind domain measures:',
    options: [
      'How many maximal ideals exist',
      'The number of units',
      'The failure of unique factorization of elements',
      'The Krull dimension',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The class group $\\text{Cl}(R)$ consists of fractional ideal classes under multiplication. It is trivial if and only if $R$ is a PID. A nontrivial class group indicates failure of unique factorization of elements.',
  },
];
