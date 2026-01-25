import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 29: The Eighteenth Century
 */
export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Maclaurin series?',
    options: [
      'The Taylor series with a = 1',
      'A series that always converges',
      'The Taylor series with a = 0',
      'A series for computing logarithms',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The Maclaurin series is the special case a = 0 of the Taylor series: f(x) = f(0) + xf\'(0) + (x²/2!)f\'\'(0) + ... Colin Maclaurin published this in his Treatise of Fluxions (1742).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is de Moivre\'s formula?',
    options: [
      '(cos x + i sin x)^n = cos nx + i sin nx',
      'e^(iπ) = -1',
      'V + F - E = 2',
      '1/1² + 1/2² + 1/3² + ... = π²/6',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'De Moivre\'s formula states that (cos x + i sin x)^n = cos nx + i sin nx. It can be proved for positive integers n by mathematical induction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What formula did Euler discover relating vertices, faces, and edges of a convex polyhedron?',
    options: [
      'V + F - E = 2',
      'V + F + E = 2',
      'V - F + E = 2',
      'V × F = E',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Euler\'s formula for polyhedra states that V + F - E = 2, where V is the number of vertices, F is the number of faces, and E is the number of edges. For example, a cube has 8 + 6 - 12 = 2.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is Euler\'s identity?',
    options: [
      'e^(iπ) = 1',
      'e^(iπ) = i',
      'e^(iπ) = -1',
      'e^(iπ) = 0',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Euler\'s identity is e^(iπ) = -1, often written as e^(iπ) + 1 = 0. This remarkable equation connects five fundamental constants: e, i, π, 1, and 0.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How many volumes do Euler\'s collected works run to?',
    options: [
      'About 25 volumes',
      'About 75 volumes',
      'About 50 volumes',
      'About 100 volumes',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Euler\'s collected works run to about 75 volumes. Despite becoming blind towards the end of his life, his mathematical output never slowed down. It has been said that "Euler picked all the raisins out of the mathematical cake."',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What theorem did Lagrange first prove about sums of squares?',
    options: [
      'Every natural number is a sum of three squares',
      'Every prime is a sum of two squares',
      'Some numbers cannot be expressed as sums of squares',
      'Every natural number is a sum of four squares',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Lagrange gave the first proof that every natural number is a sum of four squares. For example, 7 = 2² + 1² + 1² + 1² and 9 = 3² + 0² + 0² + 0².',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What did Laplace reply when Napoleon said he had written a book on the universe without mentioning its creator?',
    options: [
      '"God is implicit in the equations"',
      '"That is a matter for theologians"',
      '"I don\\\\\'t need that hypothesis"',
      '"The creator is mentioned in the appendix"',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'When Napoleon observed that Laplace had written about the universe without mentioning God, Laplace famously replied: "I don\'t need that hypothesis." Laplace was more of a mathematical physicist than a pure mathematician.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What special case of Fermat\'s Last Theorem did Legendre first prove?',
    options: [
      'x³ + y³ = z³ has no solutions',
      'x⁴ + y⁴ = z⁴ has no solutions',
      'x⁶ + y⁶ = z⁶ has no solutions',
      'x⁵ + y⁵ = z⁵ has no solutions',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Legendre was the first to prove that x⁵ + y⁵ = z⁵ has no nonzero integer solutions. This was an important step toward the full proof of Fermat\'s Last Theorem, which wasn\'t completed until 1994.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What did Euler do when Lagrange wrote to him about the calculus of variations?',
    options: [
      'He accused Lagrange of stealing his ideas',
      'He withheld his own results so Lagrange could publish first',
      'He refused to respond',
      'He immediately published his own more complete results',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When Lagrange wrote to Euler about his results in the calculus of variations, Euler was so impressed that he withheld his own results from publication so that Lagrange could publish first. Such unselfish acts are rare in mathematics.',
  },
];
