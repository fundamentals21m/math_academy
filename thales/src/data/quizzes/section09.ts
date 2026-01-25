import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 9: The Crisis of Incommensurables
 */
export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does it mean for two lengths to be commensurable?',
    options: [
      'They are equal in length',
      'They can both be measured with a ruler',
      'Their ratio can be expressed as a fraction of whole numbers',
      'They are both longer than 1 unit',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Two lengths a and b are commensurable if there exist positive integers p and q such that a/b = p/q. In modern terms, this means their ratio is a rational number.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'What geometric length did the Pythagoreans discover was incommensurable with a unit length?',
    options: [
      'The circumference of a circle with diameter 1',
      'The side of a regular pentagon',
      'The height of an equilateral triangle',
      'The diagonal of a unit square',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The Pythagoreans discovered that the diagonal of a unit square, which has length √2, is not commensurable with the side of the square. This was a shocking discovery that challenged their philosophy.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'In the proof that $\\sqrt{2}$ is irrational, what contradiction is reached?',
    options: [
      'The number becomes negative',
      'The square root cannot be computed',
      'Both p and q must be even, contradicting that they have no common factors',
      'p becomes larger than q',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Assuming √2 = p/q with p and q having no common factors, we show that p² = 2q², so p is even. Writing p = 2r, we get q² = 2r², so q is also even. But this contradicts our assumption that p and q have no common factors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'According to legend, what happened to Hippasus after revealing the secret of incommensurables?',
    options: [
      'He became the leader of the Pythagoreans',
      'He drowned in a shipwreck',
      'He was awarded a prize by the Greek government',
      'He moved to Athens to teach',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'According to legend, Hippasus leaked the secret of incommensurables to outsiders and allegedly drowned in a shipwreck as divine punishment. He was described as the "Trotsky" of the Pythagorean society.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'Why did the Greeks turn to geometric algebra after discovering incommensurables?',
    options: [
      'They preferred drawing pictures',
      'Geometry was easier to teach',
      'The Greek government banned algebra',
      'They did not know how to handle irrational numbers arithmetically',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The Greeks did not have infinite decimals or algebraic notation for irrational numbers. However, they knew √2 was a length, so they turned to geometry to represent algebraic relationships as areas and lengths.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'What equation did the Pythagoreans use to find rational approximations to $\\sqrt{2}$?',
    options: [
      '$x + y = 2
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Pythagoreans found that solutions to x² - 2y² = ±1 give excellent rational approximations to √2. If (x, y) satisfies this equation, then x/y approximates √2 with error less than 1/y².',
  },
      '$x^2 + y^2 = 2
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Pythagoreans found that solutions to x² - 2y² = ±1 give excellent rational approximations to √2. If (x, y) satisfies this equation, then x/y approximates √2 with error less than 1/y².',
  },
      '$x^2 - 2y^2 = \\pm 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Pythagoreans found that solutions to x² - 2y² = ±1 give excellent rational approximations to √2. If (x, y) satisfies this equation, then x/y approximates √2 with error less than 1/y².',
  },
      '$x/y = 2
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Pythagoreans found that solutions to x² - 2y² = ±1 give excellent rational approximations to √2. If (x, y) satisfies this equation, then x/y approximates √2 with error less than 1/y².',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Pythagoreans found that solutions to x² - 2y² = ±1 give excellent rational approximations to √2. If (x, y) satisfies this equation, then x/y approximates √2 with error less than 1/y².',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'Using the Pythagorean recurrence with $a_1 = 1$, $b_1 = 1$, $a_{n+1} = a_n + 2b_n$, $b_{n+1} = a_n + b_n$, what is the third approximation to $\\sqrt{2}$?',
    options: [
      '7/5',
      '3/2',
      '5/3',
      '17/12',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Starting with a₁=1, b₁=1: Then a₂ = 1+2(1) = 3, b₂ = 1+1 = 2 (giving 3/2). Then a₃ = 3+2(2) = 7, b₃ = 3+2 = 5 (giving 7/5). So the third approximation is 7/5 = 1.4.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Which book of Euclid\'s Elements later provided a rigorous treatment of incommensurable ratios?',
    options: [
      'Book I (basic geometry)',
      'Book V (Eudoxus\\\\'s theory of proportions)',
      'Book II (geometric algebra)',
      'Book XIII (regular polyhedra)',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Book V of Euclid\'s Elements contains Eudoxus\'s theory of proportions, which provided a rigorous way to handle ratios of incommensurable magnitudes. This resolved the crisis created by the discovery of irrationals.',
  },
  {
    id: 9,
    type: 'numeric',
    question:
      'The fraction 17/12 approximates $\\sqrt{2}$. What is $17^2 - 2 \\times 12^2$?',
    correctAnswer: 1,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation:
      '17² - 2×12² = 289 - 2×144 = 289 - 288 = 1. This confirms that 17/12 satisfies x² - 2y² = 1, making it an excellent approximation to √2.',
  },
];
