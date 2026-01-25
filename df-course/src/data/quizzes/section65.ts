import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The splitting field of $f(x) = x^3 - 2$ over $\\mathbb{Q}$ is:',
    options: [
      '$\\mathbb{Q}(\\sqrt[3]{2})$',
      '$\\mathbb{Q}(i)$',
      '$\\mathbb{Q}(\\sqrt[3]{2}, \\omega)$ where $\\omega = e^{2\\pi i/3}$',
      '$\\mathbb{Q}(\\sqrt{2})$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The roots of $x^3 - 2$ are $\\sqrt[3]{2}, \\sqrt[3]{2}\\omega, \\sqrt[3]{2}\\omega^2$ where $\\omega = e^{2\\pi i/3}$ is a primitive cube root of unity. The splitting field must contain all roots, so it is $\\mathbb{Q}(\\sqrt[3]{2}, \\omega)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An algebraic closure $\\overline{F}$ of a field $F$ is:',
    options: [
      'The smallest field containing $F
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An algebraic closure of $F$ is an algebraically closed field $\\overline{F}$ such that $\\overline{F}/F$ is an algebraic extension. Every polynomial in $\\overline{F}[x]$ splits completely in $\\overline{F}$.',
  },
      'An algebraically closed field that is algebraic over $F
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An algebraic closure of $F$ is an algebraically closed field $\\overline{F}$ such that $\\overline{F}/F$ is an algebraic extension. Every polynomial in $\\overline{F}[x]$ splits completely in $\\overline{F}$.',
  },
      'A finite extension of $F
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An algebraic closure of $F$ is an algebraically closed field $\\overline{F}$ such that $\\overline{F}/F$ is an algebraic extension. Every polynomial in $\\overline{F}[x]$ splits completely in $\\overline{F}$.',
  },
      'The field of all real numbers',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An algebraic closure of $F$ is an algebraically closed field $\\overline{F}$ such that $\\overline{F}/F$ is an algebraic extension. Every polynomial in $\\overline{F}[x]$ splits completely in $\\overline{F}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The degree $[\\mathbb{Q}(\\sqrt[3]{2}, \\omega):\\mathbb{Q}]$ of the splitting field of $x^3 - 2$ equals:',
    options: [
      '$4
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We have $[\\mathbb{Q}(\\sqrt[3]{2}):\\mathbb{Q}] = 3$ and $\\omega$ satisfies $x^2 + x + 1 = 0$ over $\\mathbb{Q}$. Since $\\omega \\notin \\mathbb{Q}(\\sqrt[3]{2}) \\subseteq \\mathbb{R}$, we have $[\\mathbb{Q}(\\sqrt[3]{2}, \\omega):\\mathbb{Q}(\\sqrt[3]{2})] = 2$. Thus the total degree is $3 \\cdot 2 = 6$.',
  },
      '$3
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'We have $[\\mathbb{Q}(\\sqrt[3]{2}):\\mathbb{Q}] = 3$ and $\\omega$ satisfies $x^2 + x + 1 = 0$ over $\\mathbb{Q}$. Since $\\omega \\notin \\mathbb{Q}(\\sqrt[3]{2}) \\subseteq \\mathbb{R}$, we have $[\\mathbb{Q}(\\sqrt[3]{2}, \\omega):\\mathbb{Q}(\\sqrt[3]{2})] = 2$. Thus the total degree is $3 \\cdot 2 = 6$.',
  },
      '$9
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'We have $[\\mathbb{Q}(\\sqrt[3]{2}):\\mathbb{Q}] = 3$ and $\\omega$ satisfies $x^2 + x + 1 = 0$ over $\\mathbb{Q}$. Since $\\omega \\notin \\mathbb{Q}(\\sqrt[3]{2}) \\subseteq \\mathbb{R}$, we have $[\\mathbb{Q}(\\sqrt[3]{2}, \\omega):\\mathbb{Q}(\\sqrt[3]{2})] = 2$. Thus the total degree is $3 \\cdot 2 = 6$.',
  },
      '$6
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'We have $[\\mathbb{Q}(\\sqrt[3]{2}):\\mathbb{Q}] = 3$ and $\\omega$ satisfies $x^2 + x + 1 = 0$ over $\\mathbb{Q}$. Since $\\omega \\notin \\mathbb{Q}(\\sqrt[3]{2}) \\subseteq \\mathbb{R}$, we have $[\\mathbb{Q}(\\sqrt[3]{2}, \\omega):\\mathbb{Q}(\\sqrt[3]{2})] = 2$. Thus the total degree is $3 \\cdot 2 = 6$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'We have $[\\mathbb{Q}(\\sqrt[3]{2}):\\mathbb{Q}] = 3$ and $\\omega$ satisfies $x^2 + x + 1 = 0$ over $\\mathbb{Q}$. Since $\\omega \\notin \\mathbb{Q}(\\sqrt[3]{2}) \\subseteq \\mathbb{R}$, we have $[\\mathbb{Q}(\\sqrt[3]{2}, \\omega):\\mathbb{Q}(\\sqrt[3]{2})] = 2$. Thus the total degree is $3 \\cdot 2 = 6$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which statement about splitting fields is FALSE?',
    options: [
      'The splitting field of a polynomial is unique up to isomorphism',
      'The splitting field of a degree $n$ polynomial always has degree $n!$ over $F$',
      'The splitting field is always a finite extension',
      'Every polynomial over $F$ has a splitting field'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The degree of a splitting field divides $n!$ but need not equal $n!$. For example, $x^2 - 2$ has splitting field $\\mathbb{Q}(\\sqrt{2})$ of degree $2$, not $2! = 2$ (which happens to be equal here, but for $x^4 - 1$ the splitting field has degree $2$, not $4! = 24$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The algebraic closure of a finite field $\\mathbb{F}_p$ is:',
    options: [
      'An infinite algebraic extension of $\\mathbb{F}_p
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The algebraic closure $\\overline{\\mathbb{F}_p}$ is the union of all finite fields $\\mathbb{F}_{p^n}$ for $n \\geq 1$. It is an infinite field (countably infinite) that is algebraic over $\\mathbb{F}_p$.',
  },
      'A finite field',
      'Isomorphic to $\\mathbb{C}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The algebraic closure $\\overline{\\mathbb{F}_p}$ is the union of all finite fields $\\mathbb{F}_{p^n}$ for $n \\geq 1$. It is an infinite field (countably infinite) that is algebraic over $\\mathbb{F}_p$.',
  },
      'Equal to $\\mathbb{F}_{p^\\infty}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The algebraic closure $\\overline{\\mathbb{F}_p}$ is the union of all finite fields $\\mathbb{F}_{p^n}$ for $n \\geq 1$. It is an infinite field (countably infinite) that is algebraic over $\\mathbb{F}_p$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The algebraic closure $\\overline{\\mathbb{F}_p}$ is the union of all finite fields $\\mathbb{F}_{p^n}$ for $n \\geq 1$. It is an infinite field (countably infinite) that is algebraic over $\\mathbb{F}_p$.',
  },
];
