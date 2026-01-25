import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 3: Integers and Rationals
 */
export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why do mathematicians extend $\\mathbb{N}$ to $\\mathbb{Z}$?',
    options: [
      'To make counting easier',
      'To make multiplication faster',
      'To eliminate fractions',
      'To make subtraction always possible',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The natural numbers $\\mathbb{N}$ don\'t permit unlimited subtraction (we can\'t take 7 from 3). By adding 0 and negative integers, we get $\\mathbb{Z}$ where any subtraction is possible.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the additive inverse of $-5$?',
    options: [
      '$5
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The additive inverse of $a$ is the number $b$ such that $a + b = 0$. Since $(-5) + 5 = 0$, the additive inverse of $-5$ is $5$. In general, $-(-a) = a$.',
  },
      '$-5
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The additive inverse of $a$ is the number $b$ such that $a + b = 0$. Since $(-5) + 5 = 0$, the additive inverse of $-5$ is $5$. In general, $-(-a) = a$.',
  },
      '$0
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The additive inverse of $a$ is the number $b$ such that $a + b = 0$. Since $(-5) + 5 = 0$, the additive inverse of $-5$ is $5$. In general, $-(-a) = a$.',
  },
      '$1/5
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The additive inverse of $a$ is the number $b$ such that $a + b = 0$. Since $(-5) + 5 = 0$, the additive inverse of $-5$ is $5$. In general, $-(-a) = a$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The additive inverse of $a$ is the number $b$ such that $a + b = 0$. Since $(-5) + 5 = 0$, the additive inverse of $-5$ is $5$. In general, $-(-a) = a$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which property states that $a + (b + c) = (a + b) + c$?',
    options: [
      'Commutative law',
      'Associative law',
      'Distributive law',
      'Identity property',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The associative law says that the grouping of terms doesn\'t matter: $a + (b + c) = (a + b) + c$. This is different from the commutative law ($a + b = b + a$), which says the order doesn\'t matter.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the distributive law state?',
    options: [
      '$a \\times 1 = a
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The distributive law connects multiplication and addition: $a \\times (b + c) = a \\times b + a \\times c$. It\'s the key property that lets us "distribute" multiplication over addition.',
  },
      '$a + b = b + a
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The distributive law connects multiplication and addition: $a \\times (b + c) = a \\times b + a \\times c$. It\'s the key property that lets us "distribute" multiplication over addition.',
  },
      '$a + 0 = a
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The distributive law connects multiplication and addition: $a \\times (b + c) = a \\times b + a \\times c$. It\'s the key property that lets us "distribute" multiplication over addition.',
  },
      '$a \\times (b + c) = a \\times b + a \\times c
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The distributive law connects multiplication and addition: $a \\times (b + c) = a \\times b + a \\times c$. It\'s the key property that lets us "distribute" multiplication over addition.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The distributive law connects multiplication and addition: $a \\times (b + c) = a \\times b + a \\times c$. It\'s the key property that lets us "distribute" multiplication over addition.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does $(-1) \\times (-1) = 1$?',
    options: [
      'Because $a \\times (-1) = -a$, so $(-1) \\times (-1) = -(-1) = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Using the ring properties, we can prove that $a \\times (-1) = -a$ for any $a$. Therefore $(-1) \\times (-1) = -(-1) = 1$, since the additive inverse of $-1$ is $1$.',
  },
      'By definition of negative numbers',
      'Because multiplication is commutative',
      'Because $-1 + (-1) = -2
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Using the ring properties, we can prove that $a \\times (-1) = -a$ for any $a$. Therefore $(-1) \\times (-1) = -(-1) = 1$, since the additive inverse of $-1$ is $1$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Using the ring properties, we can prove that $a \\times (-1) = -a$ for any $a$. Therefore $(-1) \\times (-1) = -(-1) = 1$, since the additive inverse of $-1$ is $1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the multiplicative inverse of $3$?',
    options: [
      '$1/3
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The multiplicative inverse of $a$ (written $a^{-1}$) is the number such that $a \\times a^{-1} = 1$. Since $3 \\times (1/3) = 1$, the multiplicative inverse of $3$ is $1/3$.',
  },
      '$-3
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The multiplicative inverse of $a$ (written $a^{-1}$) is the number such that $a \\times a^{-1} = 1$. Since $3 \\times (1/3) = 1$, the multiplicative inverse of $3$ is $1/3$.',
  },
      '$0
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The multiplicative inverse of $a$ (written $a^{-1}$) is the number such that $a \\times a^{-1} = 1$. Since $3 \\times (1/3) = 1$, the multiplicative inverse of $3$ is $1/3$.',
  },
      '$3
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The multiplicative inverse of $a$ (written $a^{-1}$) is the number such that $a \\times a^{-1} = 1$. Since $3 \\times (1/3) = 1$, the multiplicative inverse of $3$ is $1/3$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The multiplicative inverse of $a$ (written $a^{-1}$) is the number such that $a \\times a^{-1} = 1$. Since $3 \\times (1/3) = 1$, the multiplicative inverse of $3$ is $1/3$.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the difference between a ring and a field?',
    options: [
      'A field has addition, a ring doesn\\\\'t',
      'A ring has the commutative law, a field doesn\\\\'t',
      'A field has multiplicative inverses for all nonzero elements, a ring doesn\\\\'t necessarily',
      'There is no difference',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Both rings and fields satisfy the ring properties (associative, commutative, distributive laws, etc.). A field additionally requires that every nonzero element has a multiplicative inverse. $\\mathbb{Z}$ is a ring but not a field; $\\mathbb{Q}$ is a field.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Calculate $\\frac{2}{3} + \\frac{1}{4}$ using the formula $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$.',
    options: [
      '$\\frac{3}{7}
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Using the formula: $\\frac{2}{3} + \\frac{1}{4} = \\frac{2 \\cdot 4 + 1 \\cdot 3}{3 \\cdot 4} = \\frac{8 + 3}{12} = \\frac{11}{12}$.',
  },
      '$\\frac{8}{12}
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Using the formula: $\\frac{2}{3} + \\frac{1}{4} = \\frac{2 \\cdot 4 + 1 \\cdot 3}{3 \\cdot 4} = \\frac{8 + 3}{12} = \\frac{11}{12}$.',
  },
      '$\\frac{5}{7}
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Using the formula: $\\frac{2}{3} + \\frac{1}{4} = \\frac{2 \\cdot 4 + 1 \\cdot 3}{3 \\cdot 4} = \\frac{8 + 3}{12} = \\frac{11}{12}$.',
  },
      '$\\frac{11}{12}
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Using the formula: $\\frac{2}{3} + \\frac{1}{4} = \\frac{2 \\cdot 4 + 1 \\cdot 3}{3 \\cdot 4} = \\frac{8 + 3}{12} = \\frac{11}{12}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Using the formula: $\\frac{2}{3} + \\frac{1}{4} = \\frac{2 \\cdot 4 + 1 \\cdot 3}{3 \\cdot 4} = \\frac{8 + 3}{12} = \\frac{11}{12}$.',
  },
];
