import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In $\\mathbb{Z}/6\\mathbb{Z}$, what is $\\overline{4} + \\overline{5}$?',
    options: [
      '$\\overline{9}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\overline{4} + \\overline{5} = \\overline{4 + 5} = \\overline{9} = \\overline{3}$ since $9 \\equiv 3 \\pmod{6}$.',
  },
      '$\\overline{1}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\overline{4} + \\overline{5} = \\overline{4 + 5} = \\overline{9} = \\overline{3}$ since $9 \\equiv 3 \\pmod{6}$.',
  },
      '$\\overline{3}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\overline{4} + \\overline{5} = \\overline{4 + 5} = \\overline{9} = \\overline{3}$ since $9 \\equiv 3 \\pmod{6}$.',
  },
      '$\\overline{2}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\overline{4} + \\overline{5} = \\overline{4 + 5} = \\overline{9} = \\overline{3}$ since $9 \\equiv 3 \\pmod{6}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\overline{4} + \\overline{5} = \\overline{4 + 5} = \\overline{9} = \\overline{3}$ since $9 \\equiv 3 \\pmod{6}$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'In $\\mathbb{Z}/7\\mathbb{Z}$, what is $\\overline{5} \\cdot \\overline{4}$? (Enter the representative from 0 to 6)',
    correctAnswer: 6,
    numericRange: { min: 0, max: 6, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\overline{5} \\cdot \\overline{4} = \\overline{20} = \\overline{6}$ since $20 = 2 \\cdot 7 + 6$, so $20 \\equiv 6 \\pmod{7}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following elements is a unit (has a multiplicative inverse) in $\\mathbb{Z}/8\\mathbb{Z}$?',
    options: [
      '$\\overline{5}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An element $\\overline{a}$ is a unit in $\\mathbb{Z}/n\\mathbb{Z}$ iff $\\gcd(a, n) = 1$. Here $\\gcd(5, 8) = 1$, while $\\gcd(2, 8) = 2$, $\\gcd(4, 8) = 4$, $\\gcd(6, 8) = 2$.',
  },
      '$\\overline{2}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An element $\\overline{a}$ is a unit in $\\mathbb{Z}/n\\mathbb{Z}$ iff $\\gcd(a, n) = 1$. Here $\\gcd(5, 8) = 1$, while $\\gcd(2, 8) = 2$, $\\gcd(4, 8) = 4$, $\\gcd(6, 8) = 2$.',
  },
      '$\\overline{4}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An element $\\overline{a}$ is a unit in $\\mathbb{Z}/n\\mathbb{Z}$ iff $\\gcd(a, n) = 1$. Here $\\gcd(5, 8) = 1$, while $\\gcd(2, 8) = 2$, $\\gcd(4, 8) = 4$, $\\gcd(6, 8) = 2$.',
  },
      '$\\overline{6}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An element $\\overline{a}$ is a unit in $\\mathbb{Z}/n\\mathbb{Z}$ iff $\\gcd(a, n) = 1$. Here $\\gcd(5, 8) = 1$, while $\\gcd(2, 8) = 2$, $\\gcd(4, 8) = 4$, $\\gcd(6, 8) = 2$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An element $\\overline{a}$ is a unit in $\\mathbb{Z}/n\\mathbb{Z}$ iff $\\gcd(a, n) = 1$. Here $\\gcd(5, 8) = 1$, while $\\gcd(2, 8) = 2$, $\\gcd(4, 8) = 4$, $\\gcd(6, 8) = 2$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many units are there in $\\mathbb{Z}/12\\mathbb{Z}$?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 12, precision: 0 },
    difficulty: 'medium',
    explanation: 'The units are elements coprime to 12: $\\overline{1}, \\overline{5}, \\overline{7}, \\overline{11}$. This equals $\\phi(12) = 12(1 - 1/2)(1 - 1/3) = 4$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $a \\equiv b \\pmod{n}$ and $c \\equiv d \\pmod{n}$, which of the following is NOT always true?',
    options: [
      '$a + c \\equiv b + d \\pmod{n}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Division is not well-defined in modular arithmetic in general. We can only divide by elements that are units (have multiplicative inverses).',
  },
      '$a/c \\equiv b/d \\pmod{n}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Division is not well-defined in modular arithmetic in general. We can only divide by elements that are units (have multiplicative inverses).',
  },
      '$a - c \\equiv b - d \\pmod{n}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Division is not well-defined in modular arithmetic in general. We can only divide by elements that are units (have multiplicative inverses).',
  },
      '$ac \\equiv bd \\pmod{n}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Division is not well-defined in modular arithmetic in general. We can only divide by elements that are units (have multiplicative inverses).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Division is not well-defined in modular arithmetic in general. We can only divide by elements that are units (have multiplicative inverses).',
  },
];
