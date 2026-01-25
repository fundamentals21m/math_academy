import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to the Division Algorithm, for integers $a$ and $b$ with $b > 0$, there exist unique integers $q$ and $r$ such that $a = bq + r$ where:',
    options: [
      '$0 < r < b$',
      '$r < b$',
      '$0 \\leq r \\leq b$',
      '$0 \\leq r < b$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Division Algorithm states that for $a, b \\in \\mathbb{Z}$ with $b > 0$, there exist unique $q, r \\in \\mathbb{Z}$ such that $a = bq + r$ where $0 \\leq r < b$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is $\\gcd(48, 18)$?',
    correctAnswer: 6,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Using the Euclidean algorithm: $48 = 2 \\cdot 18 + 12$, $18 = 1 \\cdot 12 + 6$, $12 = 2 \\cdot 6 + 0$. So $\\gcd(48, 18) = 6$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "Bezout's Identity states that for integers $a$ and $b$, there exist integers $x$ and $y$ such that:",
    options: [
      '$ax + by = 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: "Bezout's Identity states that $\\gcd(a, b)$ can be expressed as a linear combination of $a$ and $b$: there exist integers $x, y$ such that $ax + by = \\gcd(a, b)$.",
  },
      '$ax + by = \\gcd(a, b)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: "Bezout's Identity states that $\\gcd(a, b)$ can be expressed as a linear combination of $a$ and $b$: there exist integers $x, y$ such that $ax + by = \\gcd(a, b)$.",
  },
      '$ax + by = \\text{lcm}(a, b)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: "Bezout's Identity states that $\\gcd(a, b)$ can be expressed as a linear combination of $a$ and $b$: there exist integers $x, y$ such that $ax + by = \\gcd(a, b)$.",
  },
      '$ax + by = ab
    correctIndex: 0,
    difficulty: 'medium',
    explanation: "Bezout's Identity states that $\\gcd(a, b)$ can be expressed as a linear combination of $a$ and $b$: there exist integers $x, y$ such that $ax + by = \\gcd(a, b)$.",
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: "Bezout's Identity states that $\\gcd(a, b)$ can be expressed as a linear combination of $a$ and $b$: there exist integers $x, y$ such that $ax + by = \\gcd(a, b)$.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Two integers $a$ and $b$ are coprime (relatively prime) if and only if:',
    options: [
      '$\\gcd(a, b) = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two integers are coprime if their greatest common divisor is 1. Note that $\\text{lcm}(a, b) = ab$ is equivalent to $\\gcd(a, b) = 1$ for positive integers.',
  },
      '$a$ divides $b
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Two integers are coprime if their greatest common divisor is 1. Note that $\\text{lcm}(a, b) = ab$ is equivalent to $\\gcd(a, b) = 1$ for positive integers.',
  },
      '$b$ divides $a
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Two integers are coprime if their greatest common divisor is 1. Note that $\\text{lcm}(a, b) = ab$ is equivalent to $\\gcd(a, b) = 1$ for positive integers.',
  },
      '$\\text{lcm}(a, b) = ab
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Two integers are coprime if their greatest common divisor is 1. Note that $\\text{lcm}(a, b) = ab$ is equivalent to $\\gcd(a, b) = 1$ for positive integers.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Two integers are coprime if their greatest common divisor is 1. Note that $\\text{lcm}(a, b) = ab$ is equivalent to $\\gcd(a, b) = 1$ for positive integers.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $\\gcd(a, b) = 12$ and $\\text{lcm}(a, b) = 180$, what is $ab$?',
    correctAnswer: 2160,
    numericRange: { min: 1, max: 10000, precision: 0 },
    difficulty: 'medium',
    explanation: 'For any two positive integers $a$ and $b$, we have $\\gcd(a, b) \\cdot \\text{lcm}(a, b) = ab$. Thus $ab = 12 \\cdot 180 = 2160$.',
  },
];
