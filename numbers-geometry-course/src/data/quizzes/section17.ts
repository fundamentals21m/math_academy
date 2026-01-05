import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 17: The Whole and the Part
 */
export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'What assumption about area is made implicitly in cutting and pasting?',
    options: [
      'Areas can only be integers',
      'Areas are always positive',
      'Area is conserved',
      'Area depends on color',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'When we cut and paste, we assume area is conserved—that we never get a polygon larger or smaller than the one we started with.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "What axiom did Euclid use because he couldn't prove it?",
    options: [
      'The parallel postulate',
      'The whole is greater than the part',
      'Area equals base times height',
      'All right angles are equal',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Euclid could not prove that a polygon could not be cut and pasted onto a smaller part of itself, so he assumed "the whole is greater than the part."',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Triangles with the same angles are called:',
    options: ['Congruent', 'Similar', 'Equal', 'Identical'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Triangles with the same angles are called similar. Euclid proved that the corresponding sides of similar triangles are proportional.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'In any triangle, the product of a side by its corresponding height is:',
    options: [
      'Different for each side',
      'Always an integer',
      'Constant (the same for all sides)',
      'Zero for acute triangles',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The product of base × height is constant regardless of which side is chosen as the base. This is proved using similar triangles.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Who proved that different subdivisions give the same area?',
    options: ['Euclid', 'Pythagoras', 'Hilbert', 'Gauss'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Hilbert (1899) proved that different subdivisions of the same polygon give the same numerical area, using the concept of signed area.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "What is the key feature of Hilbert's signed area [ABC]?",
    options: [
      'It is always positive',
      'It changes sign with vertex order',
      'It only works for rectangles',
      'It requires calculus',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Signed area [ABC] is positive when vertices are clockwise and negative when counterclockwise. This sign convention makes interior edges cancel when summing.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Two polygons are equidecomposable if:',
    options: [
      'They have the same number of sides',
      'One can be cut into pieces that reassemble into the other',
      'They are congruent',
      'They have the same perimeter',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Polygons are equidecomposable if one can be cut into polygonal pieces that can be pasted together to form the other.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What does the Bolyai-Gerwien theorem state?',
    options: [
      'All triangles have the same area',
      'Polygons with equal area are equidecomposable',
      'The tetrahedron cannot be cut into a cube',
      'Area is not conserved under cutting',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The Bolyai-Gerwien theorem states that any two polygons of equal numerical area are equidecomposable—they can be cut into the same pieces.',
  },
];
