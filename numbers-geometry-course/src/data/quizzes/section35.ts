import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 35: The Area of Rational Right Triangles
 */
export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What did Fermat prove about the area of rational right triangles?',
    options: [
      'The area is always rational',
      'The area is always odd',
      'The area is never a perfect square',
      'The area equals the perimeter',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Fermat proved in 1640 that the area of a rational right triangle is never a perfect square. This is proved using infinite descent.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'In what year did Fermat prove his theorem on rational right triangles?',
    correctAnswer: 1640,
    numericRange: { min: 1600, max: 1700, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Fermat proved his theorem in 1640, using his method of infinite descent applied to Pythagorean triples.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What proof technique did Fermat use?',
    options: [
      'Infinite descent',
      'Mathematical induction',
      'Contradiction',
      'Exhaustive search',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Fermat used infinite descent: if a rational right triangle with square area existed, we could construct a smaller one with the same property, and repeat forever—impossible.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who first asked if a rational right triangle can have square area?',
    options: [
      'Euclid',
      'Diophantus',
      'Fermat',
      'Fibonacci',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Fibonacci raised the question in his Liber Quadratorum (Book of Squares) in 1225. It took over 400 years until Fermat answered it.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'For a primitive Pythagorean triple $(a, b, c)$ with $a = 2uv$, $b = u^2 - v^2$, what is the area?',
    options: [
      '$uv
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The area is ab/2 = (2uv)(u² - v²)/2 = uv(u² - v²) = uv(u-v)(u+v). For this to be a square, each factor must be a square.',
  },
      '$uv(u-v)(u+v)
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The area is ab/2 = (2uv)(u² - v²)/2 = uv(u² - v²) = uv(u-v)(u+v). For this to be a square, each factor must be a square.',
  },
      '$u^2 + v^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The area is ab/2 = (2uv)(u² - v²)/2 = uv(u² - v²) = uv(u-v)(u+v). For this to be a square, each factor must be a square.',
  },
      '$(u-v)(u+v)
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The area is ab/2 = (2uv)(u² - v²)/2 = uv(u² - v²) = uv(u-v)(u+v). For this to be a square, each factor must be a square.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The area is ab/2 = (2uv)(u² - v²)/2 = uv(u² - v²) = uv(u-v)(u+v). For this to be a square, each factor must be a square.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which equation is proved impossible by Fermat\'s theorem on right triangles?',
    options: [
      '$a^2 + b^2 = c^2
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Fermat\'s theorem implies a⁴ - b⁴ = c² has no natural number solutions. If it did, the triangle (a⁴ - b⁴, 2a²b², a⁴ + b⁴) would have square area a²b²c².',
  },
      '$a^3 + b^3 = c^3
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Fermat\'s theorem implies a⁴ - b⁴ = c² has no natural number solutions. If it did, the triangle (a⁴ - b⁴, 2a²b², a⁴ + b⁴) would have square area a²b²c².',
  },
      '$a^4 - b^4 = c^2
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Fermat\'s theorem implies a⁴ - b⁴ = c² has no natural number solutions. If it did, the triangle (a⁴ - b⁴, 2a²b², a⁴ + b⁴) would have square area a²b²c².',
  },
      '$a^2 - b^2 = c
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Fermat\'s theorem implies a⁴ - b⁴ = c² has no natural number solutions. If it did, the triangle (a⁴ - b⁴, 2a²b², a⁴ + b⁴) would have square area a²b²c².',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Fermat\'s theorem implies a⁴ - b⁴ = c² has no natural number solutions. If it did, the triangle (a⁴ - b⁴, 2a²b², a⁴ + b⁴) would have square area a²b²c².',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What special case of Fermat\'s Last Theorem follows from this result?',
    options: [
      '$x^2 + y^2 = z^2$ has no solutions',
      '$x^4 + y^4 = z^4$ has no solutions',
      '$x^3 + y^3 = z^3$ has no solutions',
      '$x^5 + y^5 = z^5$ has no solutions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The case n = 4 of Fermat\'s Last Theorem follows: if x⁴ + y⁴ = z⁴, then z⁴ - y⁴ = (x²)², contradicting the impossibility of a⁴ - b⁴ = c².',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'In what year was Fermat\'s Last Theorem finally proved in full?',
    correctAnswer: 1995,
    numericRange: { min: 1990, max: 2000, precision: 0 },
    difficulty: 'hard',
    explanation:
      'Fermat\'s Last Theorem was proved by Andrew Wiles in 1995, over 350 years after Fermat claimed to have a proof. The n = 4 case was the only case Fermat actually proved.',
  },
];
