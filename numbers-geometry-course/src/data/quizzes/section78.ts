import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 78: Discussion
 */
export const section78Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What structure is preserved when extending ℕ → ℤ → ℚ → ℝ → ℂ?',
    options: [
      'Order structure',
      'Field structure (add, subtract, multiply, divide)',
      'Countability',
      'Finiteness',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Field structure (allowing +, -, ×, ÷) is preserved and guides all extensions of the number system.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What did Cantor prove about ℝ in 1874?',
    options: [
      'ℝ is finite',
      'ℝ is uncountable',
      'ℝ is countable',
      'ℝ is algebraic',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Cantor proved ℝ is uncountable, showing there are more real numbers than can be listed.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why do transcendental numbers exist?',
    options: [
      'Because some numbers are very large',
      'Because of the fundamental theorem of algebra',
      'Because algebraic numbers are countable but ℝ is uncountable',
      'Because π and e were computed',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Since algebraic numbers are countable but ℝ is uncountable, most real numbers must be transcendental.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the logarithm provide between multiplicative and additive groups?',
    options: [
      'An isomorphism',
      'A homomorphism',
      'An embedding',
      'A bijection'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The logarithm is an isomorphism: it maps (positive reals, ×) to (all reals, +) bijectively, preserving structure.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What unifies the circle and hyperbola parametrizations?',
    options: [
      'They have the same equation',
      'They are both degree 2 curves',
      'Complex numbers',
      'The exponential function and Euler\\'s formula',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'eⁱᶿ = cos θ + i sin θ unifies circular (cos, sin) and hyperbolic (cosh, sinh) functions via the exponential.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What area of mathematics studies Z[√d] and similar rings?',
    options: [
      'Algebraic geometry',
      'Complex analysis',
      'Algebraic number theory',
      'Group theory'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Algebraic number theory studies number rings like Z[√d], extending unique factorization ideas.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the main theme of "Numbers and Geometry"?',
    options: [
      'The creative tension between arithmetic and geometry',
      'Arithmetic and geometry are separate',
      'Geometry is more important than arithmetic',
      'All mathematics reduces to numbers',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The book\'s theme is that arithmetic and geometry enrich each other through creative tension.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'How did √2 prove its worth in number theory?',
    options: [
      'By being the first irrational number',
      'By appearing in the Pythagorean theorem',
      'By defining the real numbers',
      'By generating solutions to x² - 2y² = 1',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      '√2 generates integer solutions to Pell\'s equation x² - 2y² = 1 via (x + y√2)ⁿ.',
  },
];
