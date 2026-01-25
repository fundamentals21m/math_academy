import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 's24-e01',
    type: 'multiple-choice',
    question: 'What is the "casus irreducibilis"?',
    difficulty: 'easy',
    options: [
      'A cubic where Cardano\'s formula involves $\\sqrt{-1}$ even though all roots are real',
      'A cubic with no real roots',
      'A cubic that cannot be solved',
      'A cubic with three equal roots'
    ],
    correctIndex: 0,
    explanation:
      'The casus irreducibilis ("irreducible case") occurs when a cubic has three distinct real roots, yet Cardano\'s formula necessarily produces expressions involving $\\sqrt{-1}$.',
  },
  {
    id: 's24-e02',
    type: 'multiple-choice',
    question: 'Who first systematically computed with complex numbers?',
    difficulty: 'easy',
    options: [
      'Cardano',
      'Bombelli',
      'Euler',
      'Gauss',
    ],
    correctIndex: 1,
    explanation:
      'Rafael Bombelli (1526-1572) was the first to systematically work with complex numbers in his Algebra (1572), showing that Cardano\'s formula actually works even when it involves $\\sqrt{-1}$.',
  },
  {
    id: 's24-m01',
    type: 'multiple-choice',
    question:
      'If $(2 + i)$ is a cube root in Cardano\'s formula, what is the other cube root?',
    difficulty: 'medium',
    options: [
      '$(2 + i)$',
      '$(-2 + i)$',
      '$(2 - i)$',
      '$(-2 - i)$'
    ],
    correctIndex: 2,
    explanation:
      'The two cube roots in Cardano\'s formula are always complex conjugates. If one is $2 + i$, the other is $2 - i$. Their sum $(2 + i) + (2 - i) = 4$ is always real.',
  },
  {
    id: 's24-m02',
    type: 'multiple-choice',
    question:
      'What is $(2 + i)(2 - i)$?',
    difficulty: 'medium',
    options: [
      '$3$',
      '$4$',
      '$4 - i^2$',
      '$5$'
    ],
    correctIndex: 3,
    explanation:
      '$(2 + i)(2 - i) = 4 - i^2 = 4 - (-1) = 5$. In general, $z \\cdot \\bar{z} = a^2 + b^2$ for $z = a + bi$.',
  },
  {
    id: 's24-h01',
    type: 'multiple-choice',
    question:
      'Compute $(2 + i)^2$.',
    difficulty: 'hard',
    options: [
      '$3 + 4i$',
      '$4 + 4i$',
      '$5 + 4i$',
      '$4 + 2i$',
    ],
    correctIndex: 0,
    explanation:
      '$(2 + i)^2 = 4 + 4i + i^2 = 4 + 4i - 1 = 3 + 4i$.',
  },
  {
    id: 's24-h02',
    type: 'multiple-choice',
    question:
      'Why are complex numbers unavoidable when solving cubics algebraically?',
    difficulty: 'hard',
    options: [
      'Cubics always have complex roots',
      'The casus irreducibilis proves there is no real-only formula',
      'Cardano\'s formula is the only possible approach',
      'Complex numbers make calculations easier',
    ],
    correctIndex: 1,
    explanation:
      'The casus irreducibilis shows that when a cubic has three distinct real roots, any algebraic formula must involve complex numbers. Only transcendental methods (like Viete\'s trigonometric approach) can avoid them.',
  },
];
