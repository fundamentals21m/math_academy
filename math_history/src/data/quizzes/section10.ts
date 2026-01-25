import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 's10-e01',
    type: 'multiple-choice',
    question: 'What is $\\gcd(48, 18)$?',
    difficulty: 'easy',
    options: [
      '2',
      '3',
      '6',
      '9',
    ],
    correctIndex: 2,
    explanation:
      'Using the Euclidean algorithm: 48 = 18 × 2 + 12, then 18 = 12 × 1 + 6, then 12 = 6 × 2 + 0. The last nonzero remainder is 6, so $\\gcd(48, 18) = 6$.',
  },
  {
    id: 's10-e02',
    type: 'multiple-choice',
    question:
      'In the division algorithm, if $a = 47$ and $b = 13$, what is the remainder $r$?',
    difficulty: 'easy',
    options: [
      '3',
      '5',
      '11',
      '8',
    ],
    correctIndex: 3,
    explanation:
      '$47 = 13 \\times 3 + 8$. The quotient is 3 and the remainder is 8.',
  },
  {
    id: 's10-m01',
    type: 'multiple-choice',
    question:
      "According to Euclid's lemma, $\\gcd(a, b) = \\gcd(b, r)$ where $r$ is the remainder when dividing $a$ by $b$. What is the geometric interpretation of this?",
    difficulty: 'medium',
    options: [
      'The largest square tiling a rectangle also tiles the remaining strip',
      'The area of a rectangle equals the sum of areas of squares',
      'All rectangles can be divided into equal squares',
      'The diagonal of a rectangle has integer length',
    ],
    correctIndex: 0,
    explanation:
      'Geometrically, if a square of side $d$ tiles an $a \\times b$ rectangle, it must also tile the $b \\times r$ remaining strip. This is why $\\gcd(a, b) = \\gcd(b, r)$.',
  },
  {
    id: 's10-m02',
    type: 'numeric',
    question:
      'How many steps does the Euclidean algorithm take to find $\\gcd(55, 34)$? (Each division with remainder counts as one step.)',
    difficulty: 'medium',
    correctAnswer: 8,
    explanation:
      '55 = 34×1 + 21, 34 = 21×1 + 13, 21 = 13×1 + 8, 13 = 8×1 + 5, 8 = 5×1 + 3, 5 = 3×1 + 2, 3 = 2×1 + 1, 2 = 1×2 + 0. That is 8 steps. Note: 55 and 34 are consecutive Fibonacci numbers, which gives the worst-case behavior.',
  },
  {
    id: 's10-h01',
    type: 'multiple-choice',
    question:
      "Bézout's identity states that $\\gcd(a, b) = ax + by$ for some integers $x, y$. For $\\gcd(35, 15) = 5$, which pair $(x, y)$ satisfies $35x + 15y = 5$?",
    difficulty: 'hard',
    options: [
      '(-1, 2)',
      '(1, -2)',
      '(2, -3)',
      '(1, -1)',
    ],
    correctIndex: 1,
    explanation:
      '$35 \\times 1 + 15 \\times (-2) = 35 - 30 = 5$. We can verify: $\\gcd(35, 15) = 5$ using 35 = 15×2 + 5, 15 = 5×3 + 0.',
  },
  {
    id: 's10-h02',
    type: 'multiple-choice',
    question:
      "According to Lamé's theorem, what determines the maximum number of steps in the Euclidean algorithm for $\\gcd(a, b)$ with $a > b$?",
    difficulty: 'hard',
    options: [
      'The value of $a
    correctIndex: 1,
    explanation:
      "Lamé's theorem states that the number of steps is at most five times the number of digits in $b$ (the smaller number). This shows the algorithm runs in time proportional to $\\log b$.",
  },
      'The number of digits in $b
    correctIndex: 2,
    explanation:
      "Lamé's theorem states that the number of steps is at most five times the number of digits in $b$ (the smaller number). This shows the algorithm runs in time proportional to $\\log b$.",
  },
      'The difference $a - b
    correctIndex: 2,
    explanation:
      "Lamé's theorem states that the number of steps is at most five times the number of digits in $b$ (the smaller number). This shows the algorithm runs in time proportional to $\\log b$.",
  },
      'The product $a \\times b
    correctIndex: 2,
    explanation:
      "Lamé's theorem states that the number of steps is at most five times the number of digits in $b$ (the smaller number). This shows the algorithm runs in time proportional to $\\log b$.",
  },
    ],
    correctIndex: 2,
    explanation:
      "Lamé's theorem states that the number of steps is at most five times the number of digits in $b$ (the smaller number). This shows the algorithm runs in time proportional to $\\log b$.",
  },
];
