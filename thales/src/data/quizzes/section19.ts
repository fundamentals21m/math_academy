import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 19: Alexandria from 200 BC to 500 AD
 */
export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who is credited with founding trigonometry by creating the first table of chords?',
    options: [
      'Hipparchus',
      'Ptolemy',
      'Menelaus',
      'Heron',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Hipparchus (190–120 BC) created the first trigonometric table, which gave the length of the chord cut off by each angle at the center of a unit circle. In modern terms, chord(x) = 2sin(x/2).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does Heron\'s formula calculate?',
    options: [
      'The volume of a sphere',
      'The area of a triangle given its three sides',
      'The length of a chord in a circle',
      'The sum of angles in a polygon',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Heron\'s formula gives the area of a triangle as √(s(s-a)(s-b)(s-c)), where s = (a+b+c)/2 is the semi-perimeter and a, b, c are the side lengths. The formula was probably discovered by Archimedes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does Ptolemy\'s Theorem state about cyclic quadrilaterals?',
    options: [
      'The sum of opposite angles equals 180°',
      'The diagonals bisect each other',
      'The product of diagonals equals the sum of products of opposite sides',
      'All four sides are equal in length',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Ptolemy\'s Theorem states that in a cyclic quadrilateral (inscribed in a circle), the product of the diagonals equals the sum of the products of the two pairs of opposite sides.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What was Diophantus\'s major work called?',
    options: [
      'The Elements',
      'The Almagest',
      'The Arithmetica',
      'The Collection',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Diophantus wrote the Arithmetica, originally containing 13 books of algebraic problems. He was the first to make systematic use of symbolic notation for algebraic expressions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is ironic about what we call "Diophantine equations"?',
    options: [
      'Diophantus never actually solved any equations',
      'They require integer solutions, but Diophantus accepted rational solutions',
      'Diophantus used geometric methods, not algebraic ones',
      'The equations were actually invented by Ptolemy',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Today, a "Diophantine equation" is one whose unknowns must be integers. However, Diophantus himself was content with any rational solution—he did not restrict himself to integers.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Who was Hypatia?',
    options: [
      'The wife of Ptolemy who edited his works',
      'A female mathematician who wrote commentaries on Apollonius and Diophantus',
      'The founder of the Library of Alexandria',
      'A Roman empress who patronized mathematics',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Hypatia (c. 360–415 AD) was the daughter of Theon of Alexandria and wrote commentaries on Apollonius and Diophantus. She was murdered by a mob during an anti-pagan riot and is the first female mathematician known to history.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What important mathematical concept does Pappus\'s Theorem express?',
    options: [
      'The distributive property of multiplication',
      'The associativity of addition',
      'The commutativity of multiplication',
      'The existence of multiplicative inverses',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Pappus\'s Theorem, about collinearity of intersection points, expresses the commutativity of multiplication and is fundamental to projective geometry. Hilbert used it in his axiomatic presentation of Euclidean geometry.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'In what year did Emperor Justinian close the pagan schools of philosophy at Athens?',
    options: [
      '320 AD',
      '415 AD',
      '529 AD',
      '641 AD',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'In 529 AD, Emperor Justinian closed the pagan schools of philosophy at Athens, marking the beginning of the "Dark Ages" of Europe. The Arabs would conquer Alexandria in 641 AD.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Which mathematician founded spherical trigonometry and proved a theorem about collinear points on a triangle?',
    options: [
      'Hipparchus',
      'Menelaus',
      'Ptolemy',
      'Pappus',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Menelaus (c. 70–140 AD) was the first to study spherical trigonometry. His theorem states that if D, E, F lie on lines BC, AC, AB of triangle ABC, they are collinear if and only if BD·CE·AF = CD·AE·BF.',
  },
];
