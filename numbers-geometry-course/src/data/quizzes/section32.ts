import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 32: Rational Triangles
 */
export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What defines a "rational triangle"?',
    options: [
      'A triangle with integer sides',
      'A triangle with rational sides and rational area',
      'A right-angled triangle',
      'A triangle with rational angles',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A rational triangle has both rational side lengths and rational area. Since area = ½ base × height, this is equivalent to having all altitudes rational.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'In what year A.D. did Brahmagupta publish his treatment of rational triangles?',
    correctAnswer: 628,
    numericRange: { min: 600, max: 700, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Brahmagupta treated rational triangles thoroughly in his Brahma-sphuta-siddhanta of 628 A.D., the first comprehensive treatment of this topic.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What key property do all rational triangles have?',
    options: [
      'They are equilateral',
      'They have a 90° angle',
      'They split into two rational right triangles',
      'Their perimeter is rational',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Every rational triangle splits into two rational right-angled triangles when you drop an altitude. This follows from the parameterization of rational right triangles.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Triangles with rational sides and area are sometimes called:',
    options: [
      'Pythagorean',
      'Euclidean',
      'Diophantine',
      'Heronian',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Such triangles are called Heronian after the Greek mathematician Hero (first century A.D.), who is also known for Hero\'s formula for the area of a triangle.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Hero\'s formula for the area of a triangle with sides $a, b, c$ and semiperimeter $s$ is:',
    options: [
      '$\\frac{1}{2}ab
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Hero\'s formula states that Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2 is the semiperimeter.',
  },
      '$\\sqrt{s(s-a)(s-b)(s-c)}
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Hero\'s formula states that Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2 is the semiperimeter.',
  },
      '$\\frac{abc}{4R}
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Hero\'s formula states that Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2 is the semiperimeter.',
  },
      '$(a+b+c)/2
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Hero\'s formula states that Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2 is the semiperimeter.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Hero\'s formula states that Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2 is the semiperimeter.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The triangle (13, 14, 15) splits into which two right triangles?',
    options: [
      '(5, 12, 13) and (9, 12, 15)',
      '(3, 4, 5) and (5, 12, 13)',
      '(6, 8, 10) and (7, 14, 15)',
      '(5, 12, 13) and (8, 15, 17)',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The triangle (13, 14, 15) splits into (5, 12, 13) and (9, 12, 15) = 3×(3, 4, 5). The altitude is h = 12, and it splits side 14 into segments 5 and 9.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why did Hero\'s formula "defy" Greek geometric tradition?',
    options: [
      'It multiplied four lengths together',
      'It used irrational numbers',
      'It was discovered by a non-Greek',
      'It required calculus',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Hero\'s formula multiplies four lengths (s, s-a, s-b, s-c) together, which the Greeks usually rejected as physically meaningless. Geometrically, this corresponds to a 4-dimensional volume.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'If a triangle has altitude $h = 2u$, what is the relationship with Brahmagupta\'s parameters?',
    options: [
      '$u$ determines the altitude via $h = 2u
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'In Brahmagupta\'s parameterization, the altitude is h = 2u. The rational triangle is assembled from two rational right triangles sharing this common altitude.',
  },
      '$u$ is the area',
      '$u$ is one of the sides',
      '$u$ is the perimeter',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'In Brahmagupta\'s parameterization, the altitude is h = 2u. The rational triangle is assembled from two rational right triangles sharing this common altitude.',
  },
];
