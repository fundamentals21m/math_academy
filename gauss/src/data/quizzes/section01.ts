import type { QuizQuestion } from './types';

/**
 * Section 1: Linear Congruences
 * Topics: GCD, Euclidean algorithm, solving linear congruences, Chinese Remainder Theorem
 */
export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'What is $\\gcd(48, 18)$?',
    correctAnswer: 6,
    numericRange: { min: 1, max: 48, precision: 0 },
    difficulty: 'easy',
    explanation: 'Using the Euclidean algorithm: $48 = 2 \\cdot 18 + 12$, $18 = 1 \\cdot 12 + 6$, $12 = 2 \\cdot 6 + 0$. So $\\gcd(48, 18) = 6$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The linear congruence $ax \\equiv b \\pmod{m}$ has a solution if and only if:',
    options: [
      '$a$ divides $b$',
      '$\\gcd(a, m)$ divides $b$',
      '$m$ divides $a$',
      '$a$ and $m$ are coprime'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A linear congruence $ax \\equiv b \\pmod{m}$ has a solution if and only if $\\gcd(a, m) \\mid b$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Solve $3x \\equiv 6 \\pmod{9}$. What is the smallest positive solution?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 8, precision: 0 },
    difficulty: 'medium',
    explanation: 'Since $\\gcd(3, 9) = 3$ divides $6$, solutions exist. Dividing by $3$: $x \\equiv 2 \\pmod{3}$. The smallest positive solution is $x = 2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\gcd(a, m) = 1$, how many solutions does $ax \\equiv b \\pmod{m}$ have?',
    options: [
      'Exactly one solution modulo $m
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $\\gcd(a, m) = 1$, the congruence has exactly one solution modulo $m$ because $a$ has a multiplicative inverse.',
  },
      'No solutions',
      'Exactly $m$ solutions',
      'Infinitely many solutions',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When $\\gcd(a, m) = 1$, the congruence has exactly one solution modulo $m$ because $a$ has a multiplicative inverse.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Find $x$ such that $x \\equiv 2 \\pmod{3}$ and $x \\equiv 3 \\pmod{5}$. What is the smallest positive $x$?',
    correctAnswer: 8,
    numericRange: { min: 1, max: 15, precision: 0 },
    difficulty: 'hard',
    explanation: 'By CRT, the solution is unique mod $15$. From $x \\equiv 2 \\pmod{3}$: $x \\in \\{2, 5, 8, 11, 14, ...\\}$. Checking mod $5$: $8 \\equiv 3 \\pmod{5}$. So $x = 8$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Chinese Remainder Theorem guarantees a unique solution modulo $m_1 m_2$ when:',
    options: [
      '$m_1$ and $m_2$ are both prime',
      '$m_1 + m_2$ is prime',
      '$m_1$ and $m_2$ are coprime (i.e., $\\gcd(m_1, m_2) = 1$)',
      '$m_1$ divides $m_2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The CRT requires the moduli to be pairwise coprime. Then the system has a unique solution modulo the product.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The CRT requires the moduli to be pairwise coprime. Then the system has a unique solution modulo the product.',
  },
  {
    id: 7,
    type: 'numeric',
    question: 'What is the multiplicative inverse of $3$ modulo $7$?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 6, precision: 0 },
    difficulty: 'medium',
    explanation: 'We need $3x \\equiv 1 \\pmod{7}$. Testing: $3 \\cdot 5 = 15 = 2 \\cdot 7 + 1 \\equiv 1 \\pmod{7}$. So the inverse is $5$.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Using the Euclidean algorithm, which step comes after $\\gcd(a, b)$ with $a > b$?',
    options: [
      'Compute $\\gcd(a - b, b)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Euclidean algorithm replaces $(a, b)$ with $(b, a \\mod b)$ at each step, continuing until the remainder is $0$.',
  },
      'Compute $\\gcd(a, b - a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Euclidean algorithm replaces $(a, b)$ with $(b, a \\mod b)$ at each step, continuing until the remainder is $0$.',
  },
      'Compute $\\gcd(a/b, b)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Euclidean algorithm replaces $(a, b)$ with $(b, a \\mod b)$ at each step, continuing until the remainder is $0$.',
  },
      'Compute $\\gcd(b, a \\mod b)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Euclidean algorithm replaces $(a, b)$ with $(b, a \\mod b)$ at each step, continuing until the remainder is $0$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Euclidean algorithm replaces $(a, b)$ with $(b, a \\mod b)$ at each step, continuing until the remainder is $0$.',
  },
  {
    id: 9,
    type: 'numeric',
    question: 'How many solutions does $6x \\equiv 9 \\pmod{15}$ have modulo $15$?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 15, precision: 0 },
    difficulty: 'hard',
    explanation: 'Since $\\gcd(6, 15) = 3$ and $3 \\mid 9$, the congruence has exactly $3$ solutions modulo $15$.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'If $x \\equiv 1 \\pmod{2}$ and $x \\equiv 1 \\pmod{3}$ and $x \\equiv 1 \\pmod{5}$, what is $x \\pmod{30}$?',
    options: [
      '$0$',
      '$1$',
      '$15$',
      '$29$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $x \\equiv 1$ modulo $2$, $3$, and $5$, then $x \\equiv 1 \\pmod{\\text{lcm}(2,3,5)} = 1 \\pmod{30}$.',
  },
];
