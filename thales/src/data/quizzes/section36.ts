import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 36: Complex Numbers
 */
export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who introduced complex numbers to solve cubic equations?',
    options: [
      'Euclid',
      'De Moivre',
      'Cardano',
      'Cauchy',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Girolamo Cardano (1501–1576) introduced complex numbers in his Ars Magna (1545) to solve cubic equations, famously telling readers to "put aside the mental tortures involved."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the multiplication rule for complex numbers as ordered pairs (a, b) · (c, d)?',
    options: [
      '(a + c, b + d)',
      '(ac, bd)',
      '(ac - bd, ad + bc)',
      '(ac + bd, ad - bc)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The multiplication rule for complex numbers as pairs is (a, b) · (c, d) = (ac - bd, ad + bc). This corresponds to (a + bi)(c + di) = (ac - bd) + (ad + bc)i.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the ordered pair representation, which pair represents i?',
    options: [
      '(0, 1)',
      '(1, 0)',
      '(-1, 0)',
      '(0, -1)',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'In the ordered pair representation, (0, 1) plays the role of i. We can verify: (0, 1) · (0, 1) = (0·0 - 1·1, 0·1 + 1·0) = (-1, 0), confirming that i² = -1.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the absolute value of the complex number 3 + 4i?',
    options: [
      '7',
      '5',
      '12',
      '25',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The absolute value |a + bi| = √(a² + b²). So |3 + 4i| = √(9 + 16) = √25 = 5.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How can ℂ be defined as a quotient ring?',
    options: [
      'ℝ[x]/(x² + 1)',
      'ℝ[x]/(x)',
      'ℝ[x]/(x² - 1)',
      'ℤ[x]/(x² + 1)',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'ℂ = ℝ[x]/(x² + 1), where polynomials differing by a multiple of x² + 1 are equivalent. The equivalence class of x plays the role of i, since x² ≡ -1.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In the matrix representation, what is the matrix for i?',
    options: [
      '[[1, 0], [0, 1]]',
      '[[0, -1], [1, 0]]',
      '[[0, 1], [-1, 0]]',
      '[[-1, 0], [0, -1]]'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The matrix for i is [[0, 1], [-1, 0]]. You can verify that squaring this gives [[-1, 0], [0, -1]], which represents -1.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What does the two-squares identity (ac - bd)² + (ad + bc)² = (a² + b²)(c² + d²) express?',
    options: [
      'That |uv| = |u||v| for complex numbers',
      'The triangle inequality',
      'The commutativity of multiplication',
      'De Moivre\\\\\'s theorem',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The two-squares identity is equivalent to |uv| = |u||v| for complex numbers u = a + bi and v = c + di. This identity was known to al-Khazin in 950 AD.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the polar form of a complex number a + bi?',
    options: [
      'r + θi',
      'r(cos θ + i sin θ)',
      '(r, θ)',
      'r · e^θ',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The polar form is a + bi = r(cos θ + i sin θ), where r = |a + bi| is the absolute value and θ is the angle (argument).',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What does De Moivre\'s theorem state about (r(cos θ + i sin θ))^m?',
    options: [
      'r^m(cos θ + i sin(mθ))',
      'mr(cos(mθ) + i sin(mθ))',
      'r(cos(m + θ) + i sin(m + θ))',
      'r^m(cos(mθ) + i sin(mθ))',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'De Moivre\'s theorem states: (r(cos θ + i sin θ))^m = r^m(cos(mθ) + i sin(mθ)). Powers multiply the absolute value and multiply the angle by m.',
  },
];
