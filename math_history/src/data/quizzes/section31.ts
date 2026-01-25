import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 's31-e01',
    type: 'multiple-choice',
    question: 'How old was Blaise Pascal when he discovered his famous theorem about hexagons and conics?',
    difficulty: 'easy',
    options: [
      '12 years old',
      '16 years old',
      '25 years old',
      '40 years old',
    ],
    correctIndex: 1,
    explanation:
      'Pascal proved his "mystic hexagon" theorem in 1640 at age 16. He derived over 400 corollaries from it and impressed even Descartes, who initially doubted a teenager could have produced such work.',
  },
  {
    id: 's31-e02',
    type: 'multiple-choice',
    question: 'In Pascal\'s theorem, what is inscribed in a conic?',
    difficulty: 'easy',
    options: [
      'A triangle',
      'A square',
      'A hexagon',
      'A circle',
    ],
    correctIndex: 2,
    explanation:
      'Pascal\'s theorem concerns a hexagon inscribed in a conic (its six vertices lie on the conic). The theorem states that the three pairs of opposite sides meet in collinear points.',
  },
  {
    id: 's31-m01',
    type: 'multiple-choice',
    question: 'What is the "Pascal line" of a hexagon inscribed in a conic?',
    difficulty: 'medium',
    options: [
      'A line connecting opposite vertices',
      'The longest diagonal',
      'A tangent to the conic',
      'The line through the three intersection points of opposite sides'
    ],
    correctIndex: 3,
    explanation:
      'In Pascal\'s theorem, opposite sides $AB \\cap DE$, $BC \\cap EF$, and $CD \\cap FA$ meet in three points $P$, $Q$, $R$. The Pascal line is the unique line through these three collinear points.',
  },
  {
    id: 's31-m02',
    type: 'multiple-choice',
    question:
      'How many different hexagons can be formed from 6 points on a conic?',
    difficulty: 'medium',
    options: [
      '60',
      '15',
      '6',
      '720'
    ],
    correctIndex: 0,
    explanation:
      'From 6 points, there are 60 different ways to order them into a hexagon (accounting for cyclic and reflection symmetries). Each ordering gives a different Pascal line, creating intricate configurations.',
  },
  {
    id: 's31-h01',
    type: 'multiple-choice',
    question:
      'When the "conic" in Pascal\'s theorem degenerates into two lines, what classical theorem results?',
    difficulty: 'hard',
    options: [
      'Desargues\' theorem',
      'Pappus\' theorem',
      'Menelaus\' theorem',
      'Ceva\'s theorem',
    ],
    correctIndex: 1,
    explanation:
      'When the conic becomes two lines (with three points on each), Pascal\'s theorem reduces to Pappus\' theorem (c. 340 CE): the cross-joins of points on two lines meet in collinear points.',
  },
  {
    id: 's31-h02',
    type: 'multiple-choice',
    question:
      'What happens in Pascal\'s theorem when two adjacent vertices of the hexagon coincide?',
    difficulty: 'hard',
    options: [
      'The theorem fails',
      'The conic becomes a parabola',
      'The side between them becomes a tangent to the conic',
      'The Pascal line passes through the center'
    ],
    correctIndex: 2,
    explanation:
      'If two adjacent vertices coincide (say $B = C$), then "side $BC$" becomes the tangent line to the conic at that point. This gives a construction for tangent lines using only a straightedge!',
  },
];
