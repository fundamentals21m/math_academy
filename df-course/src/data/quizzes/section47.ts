import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Over a field $F$, $F[x]$ is:',
    options: [
      'A field',
      'A Euclidean domain',
      'Not an integral domain',
      'A finite ring'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$F[x]$ is a Euclidean domain with the Euclidean function being the degree. This means we have a division algorithm and $F[x]$ is also a PID and UFD.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The number of monic irreducible polynomials of degree $2$ over $\\mathbb{Z}_2$ is:',
    options: [
      '$0$',
      '$1$',
      '$2$',
      '$3$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Monic degree 2 over $\\mathbb{Z}_2$: $x^2, x^2+1, x^2+x, x^2+x+1$. Check: $x^2 = x \\cdot x$, $x^2+1 = (x+1)^2$, $x^2+x = x(x+1)$ are reducible. Only $x^2+x+1$ is irreducible.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f(x) \\in F[x]$ is irreducible and $\\deg(f) = n$, then $F[x]/(f)$ is:',
    options: [
      'Isomorphic to $F$',
      'A field extension of $F$ of degree $n$',
      'Not a field',
      'Isomorphic to $F^n$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $f$ is irreducible, $(f)$ is a maximal ideal in $F[x]$ (since $F[x]$ is a PID), so $F[x]/(f)$ is a field. As a vector space over $F$, it has dimension $n = \\deg(f)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The formal derivative of $f(x) = x^p$ over $\\mathbb{Z}_p$ is:',
    options: [
      '$px^{p-1} = 0$',
      '$x^{p-1}$',
      '$1$',
      '$p$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The formal derivative is $f\'(x) = px^{p-1}$. In $\\mathbb{Z}_p$, we have $p = 0$, so $f\'(x) = 0$. This shows $x^p$ has zero derivative over $\\mathbb{Z}_p$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A polynomial $f \\in F[x]$ has a repeated root if and only if:',
    options: [
      '$f$ and $f\'$ have a common factor of positive degree',
      '$f$ is irreducible',
      '$\\deg(f) > 1$',
      '$f(0) = 0$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$f$ has a repeated root iff $\\gcd(f, f\') \\neq 1$. If $(x-a)^2 | f$, then $(x-a) | f\'$, so $(x-a)$ is a common factor.',
  },
];
