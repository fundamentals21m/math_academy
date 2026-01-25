import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The $q$-cyclotomic coset of $s$ modulo $n$ is defined as:',
    options: [
      '$\\{s, s+1, s+2, \\ldots\\} \\pmod{n}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The $q$-cyclotomic coset of $s$ modulo $n$ is $C_s = \\{s, qs, q^2s, \\ldots, q^{m-1}s\\} \\pmod{n}$ where $m$ is the smallest positive integer with $q^m s \\equiv s \\pmod{n}$.',
  },
      '$\\{s, s+q, s+2q, \\ldots\\} \\pmod{n}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The $q$-cyclotomic coset of $s$ modulo $n$ is $C_s = \\{s, qs, q^2s, \\ldots, q^{m-1}s\\} \\pmod{n}$ where $m$ is the smallest positive integer with $q^m s \\equiv s \\pmod{n}$.',
  },
      '$\\{s, qs, q^2s, \\ldots\\} \\pmod{n}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The $q$-cyclotomic coset of $s$ modulo $n$ is $C_s = \\{s, qs, q^2s, \\ldots, q^{m-1}s\\} \\pmod{n}$ where $m$ is the smallest positive integer with $q^m s \\equiv s \\pmod{n}$.',
  },
      '$\\{s, s/q, s/q^2, \\ldots\\} \\pmod{n}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The $q$-cyclotomic coset of $s$ modulo $n$ is $C_s = \\{s, qs, q^2s, \\ldots, q^{m-1}s\\} \\pmod{n}$ where $m$ is the smallest positive integer with $q^m s \\equiv s \\pmod{n}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The $q$-cyclotomic coset of $s$ modulo $n$ is $C_s = \\{s, qs, q^2s, \\ldots, q^{m-1}s\\} \\pmod{n}$ where $m$ is the smallest positive integer with $q^m s \\equiv s \\pmod{n}$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'For $q = 2$ and $n = 7$, the 2-cyclotomic coset containing $1$ is $C_1 = \\{1, 2, 4\\}$. What is the size of $C_1$?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 7, precision: 0 },
    difficulty: 'easy',
    explanation: '$C_1 = \\{1, 2, 4\\}$ has size 3. This is because $2^1 \\cdot 1 = 2$, $2^2 \\cdot 1 = 4$, $2^3 \\cdot 1 = 8 \\equiv 1 \\pmod 7$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The irreducible factors of $x^n - 1$ over $\\mathbb{F}_q$ correspond to:',
    options: [
      '$q$-cyclotomic cosets modulo $n$',
      'Prime divisors of $n$',
      'Subgroups of $\\mathbb{Z}_n$',
      'Elements of $\\mathbb{F}_q$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Each irreducible factor of $x^n - 1$ over $\\mathbb{F}_q$ corresponds to a $q$-cyclotomic coset. The degree of the factor equals the size of the coset.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For $q = 2$, $n = 15$, the coset $C_1 = \\{1, 2, 4, 8\\}$ has size 4. What is the degree of the corresponding irreducible factor of $x^{15} - 1$ over $\\mathbb{F}_2$?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 15, precision: 0 },
    difficulty: 'medium',
    explanation: 'The degree of the minimal polynomial (irreducible factor) corresponding to a cyclotomic coset equals the size of the coset. Since $|C_1| = 4$, the factor has degree 4.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The 2-cyclotomic coset $C_0$ modulo any $n$ contains:',
    options: [
      'All elements from $0$ to $n-1$',
      'Only the element $0$',
      'All even elements',
      'All powers of 2 less than $n$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$C_0 = \\{0 \\cdot 2^k \\pmod n : k \\geq 0\\} = \\{0\\}$. The coset containing 0 is always just $\\{0\\}$, corresponding to the factor $(x - 1)$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'For $n = 7$, how many distinct 2-cyclotomic cosets are there modulo $7$? (The cosets partition $\\{0, 1, 2, \\ldots, 6\\}$.)',
    correctAnswer: 3,
    numericRange: { min: 1, max: 7, precision: 0 },
    difficulty: 'medium',
    explanation: 'The cosets are $C_0 = \\{0\\}$, $C_1 = \\{1, 2, 4\\}$, $C_3 = \\{3, 6, 5\\}$. These three cosets partition $\\mathbb{Z}_7$, so there are 3 cyclotomic cosets.',
  },
];
