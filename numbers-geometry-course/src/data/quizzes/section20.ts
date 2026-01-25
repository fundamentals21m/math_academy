import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 20: Intersections
 */
export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      "What defect exists in Euclid's axioms regarding circle intersections?",
    options: [
      'Circles cannot be drawn',
      'His axioms guarantee circles exist but not their intersections',
      'Circles have no center',
      'There is no defect',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "Euclid's axioms guarantee that circles can be drawn, but they do not guarantee that two circles actually intersect. Coordinates solve this by turning the question into one about solutions of equations.",
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'When finding the intersection of two circles analytically, what number appears in the equilateral triangle example?',
    options: [
      '$\\sqrt{2}
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'When circles centered at (−1, 0) and (1, 0) with radius 2 intersect, the y-coordinates of the intersection points are ±√3.',
  },
      '$\\sqrt{5}
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When circles centered at (−1, 0) and (1, 0) with radius 2 intersect, the y-coordinates of the intersection points are ±√3.',
  },
      '$\\sqrt{3}
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When circles centered at (−1, 0) and (1, 0) with radius 2 intersect, the y-coordinates of the intersection points are ±√3.',
  },
      '$\\pi
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When circles centered at (−1, 0) and (1, 0) with radius 2 intersect, the y-coordinates of the intersection points are ±√3.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When circles centered at (−1, 0) and (1, 0) with radius 2 intersect, the y-coordinates of the intersection points are ±√3.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'Points constructible by ruler and compass have coordinates involving only:',
    options: [
      'Rational operations and square roots',
      'Integers',
      'Rational numbers',
      'Cube roots',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Constructible points have coordinates obtainable from 1 by the rational operations (+, −, ×, ÷) and square roots. Cube roots cannot be constructed.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'The intersection of two lines is found using what type of operations?',
    options: [
      'Only square roots',
      'Cube roots',
      'Trigonometric functions',
      'Only rational operations',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Solving two linear equations to find their intersection requires only rational operations (addition, subtraction, multiplication, division).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Finding where a line meets a circle requires:',
    options: [
      'Only rational operations',
      'Cube roots',
      'Trigonometry',
      'Rational operations and square roots',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Substituting the line equation into the circle equation gives a quadratic, which is solved using the quadratic formula—requiring rational operations plus a square root.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'Why is the cube root of 2 ($\\sqrt[3]{2}$) not constructible by ruler and compass?',
    options: [
      'It cannot be expressed using rational operations and square roots alone',
      'It is too large',
      'It is irrational',
      'Euclid forbade it',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Cube root of 2 satisfies x³ = 2, which cannot be reduced to equations solvable by rational operations and square roots. This proves "doubling the cube" is impossible.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How is the product of two lengths $a$ and $b$ constructed?',
    options: [
      'By joining them end to end',
      'It cannot be constructed',
      'Using similar triangles',
      'By drawing a circle',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Similar triangles can be used to construct the product ab. If you have lengths 1, a, and b, proportionality gives a length equal to ab.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'For how many years did mathematicians try to solve problems like doubling the cube before they were proven impossible?',
    options: [
      'About 100 years',
      'About 2000 years',
      'About 500 years',
      'About 5000 years',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Problems like doubling the cube, trisecting the angle, and squaring the circle were attempted for about 2000 years before being proven impossible using algebraic methods in the 19th century.',
  },
];
