import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Chinese Remainder Theorem for rings states that if $I$ and $J$ are ideals with $I + J = R$, then:',
    options: [
      '$I \\cap J = IJ$',
      '$R/(I \\cap J) \\cong R/I \\times R/J$',
      '$I = J$',
      '$R/I \\cong R/J$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The CRT states that when $I + J = R$ (ideals are comaximal), there is an isomorphism $R/(I \\cap J) \\cong R/I \\times R/J$. Moreover, $I \\cap J = IJ$ when $I + J = R$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In $\\mathbb{Z}$, the ideals $(6)$ and $(35)$ satisfy $(6) + (35) = $',
    options: [
      '$(1) = \\mathbb{Z}$',
      '$(6)$',
      '$(35)$',
      '$(210)$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $\\gcd(6, 35) = 1$, we have $(6) + (35) = (\\gcd(6, 35)) = (1) = \\mathbb{Z}$. The ideals are comaximal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'By CRT, $\\mathbb{Z}_{15} \\cong$',
    options: [
      '$\\mathbb{Z}_3 \\times \\mathbb{Z}_5$',
      '$\\mathbb{Z}_5 \\times \\mathbb{Z}_3$',
      'Both A and B are correct',
      '$\\mathbb{Z}_{15}$ cannot be decomposed'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $15 = 3 \\times 5$ and $\\gcd(3, 5) = 1$, CRT gives $\\mathbb{Z}_{15} \\cong \\mathbb{Z}_3 \\times \\mathbb{Z}_5$. Both orderings give the same ring up to isomorphism.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The ideals $(4)$ and $(6)$ in $\\mathbb{Z}$ are:',
    options: [
      'Comaximal',
      'Not comaximal since $\\gcd(4, 6) = 2 \\neq 1$',
      'Equal',
      'Both prime ideals'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Two ideals $(m)$ and $(n)$ in $\\mathbb{Z}$ are comaximal iff $\\gcd(m, n) = 1$. Since $\\gcd(4, 6) = 2$, the ideals are not comaximal, so CRT does not apply directly.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Using CRT, if $x \\equiv 2 \\pmod{3}$ and $x \\equiv 3 \\pmod{5}$, then $x \\equiv$',
    options: [
      '$5 \\pmod{15}$',
      '$8 \\pmod{15}$',
      '$11 \\pmod{15}$',
      '$13 \\pmod{15}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We need $x \\equiv 2 \\pmod{3}$ and $x \\equiv 3 \\pmod{5}$. Checking: $8 = 2 + 2 \\cdot 3 = 8$ and $8 \\equiv 2 \\pmod{3}$, $8 \\equiv 3 \\pmod{5}$. So $x \\equiv 8 \\pmod{15}$.',
  },
];
