import type { QuizQuestion } from './types';

export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The structure theorem for finitely generated modules over a PID states that such a module is isomorphic to:',
    options: [
      'A free module',
      'A direct sum of a free module and cyclic torsion modules',
      'A field',
      'A single cyclic module'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Every f.g. module over a PID is $\\cong R^r \\oplus R/(d_1) \\oplus \\cdots \\oplus R/(d_k)$ where $d_1 | d_2 | \\cdots | d_k$ (invariant factors).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The torsion submodule of an $R$-module $M$ (where $R$ is a domain) consists of:',
    options: [
      'All elements of $M$',
      '$\\{m \\in M : rm = 0 \\text{ for some } r \\neq 0\\}$',
      'Only $0$',
      'All units of $R$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The torsion submodule is $\\text{Tor}(M) = \\{m \\in M : rm = 0 \\text{ for some non-zero } r \\in R\\}$. If $\\text{Tor}(M) = 0$, $M$ is torsion-free.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a finitely generated abelian group $G$ (i.e., $\\mathbb{Z}$-module), the structure theorem gives:',
    options: [
      '$G \\cong \\mathbb{Z}^r \\oplus \\mathbb{Z}_{d_1} \\oplus \\cdots \\oplus \\mathbb{Z}_{d_k}$ with $d_1 | d_2 | \\cdots | d_k$',
      '$G \\cong \\mathbb{Q}^n$',
      '$G$ is always finite',
      '$G \\cong \\mathbb{Z}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The fundamental theorem of finitely generated abelian groups: $G \\cong \\mathbb{Z}^r \\oplus \\mathbb{Z}_{d_1} \\oplus \\cdots \\oplus \\mathbb{Z}_{d_k}$ (invariant factor form).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The rank of a finitely generated module $M$ over a PID $R$ is:',
    options: [
      'The number of torsion elements',
      'The rank of the free part (i.e., $r$ in $M \\cong R^r \\oplus \\text{torsion}$)',
      'Always $0$',
      'The number of generators'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The rank is the dimension of $M \\otimes_R K$ where $K$ is the fraction field of $R$. It equals the rank $r$ of the free summand in the decomposition.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The elementary divisors of a f.g. module over a PID are:',
    options: [
      'The same as invariant factors',
      'Prime power factors of the invariant factors',
      'Always equal to $1$',
      'The generators of the module'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Elementary divisors are the prime power factors appearing when we factor each invariant factor. They give an alternative (equivalent) description of the module structure.',
  },
];
