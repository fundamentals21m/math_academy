import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 16: Volume
 */
export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The unit of volume is:',
    options: [
      'The unit length',
      'The unit square',
      'The unit cube',
      'The unit circle',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Just as area is measured by unit squares, volume is measured by unit cubes (cubes with sides of unit length).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A parallelepiped is:',
    options: [
      'The 3D analog of a parallelogram',
      'A 2D shape with parallel sides',
      'A type of prism with circular base',
      'A regular polygon',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'A parallelepiped is the three-dimensional figure analogous to the parallelogram, with six faces that are parallelograms.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is the tetrahedron important for volume theory?',
    options: [
      'All polyhedra can be built from tetrahedra',
      'It is the simplest 3D shape',
      'It has the smallest volume',
      'It is the only shape with flat faces',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Just as any polygon can be cut into triangles, any polyhedron can be built from tetrahedra, making the tetrahedron volume formula fundamental.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How did the Greeks find the volume of a tetrahedron?',
    options: [
      'By finite cutting and pasting',
      'By an infinite construction filling it with prisms',
      'By using calculus',
      'They could not find it',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Greeks were unable to cut and paste the tetrahedron into a cuboid, so they used infinite constructions, like filling it with infinitely many prisms.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The volume of a tetrahedron is:',
    options: [
      'base × height',
      '$\\frac{1}{2}$ × base × height',
      '$\\frac{1}{4}$ × base × height',
      '$\\frac{1}{3}$ × base × height',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The volume of a tetrahedron is (1/3) × base × height, derived using infinite geometric series.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What did Max Dehn prove in 1900?',
    options: [
      'The tetrahedron volume formula',
      'A tetrahedron cannot be converted to a cube by finite cuts',
      'The cube can be cut into tetrahedra',
      'All polyhedra have rational volume',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      "Dehn proved it is impossible to convert a regular tetrahedron into a cube by cutting it into a finite number of polyhedral pieces. This solved Hilbert's third problem.",
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      "In Euclid's proof, what is the combined volume of the first two prisms?",
    options: [
      '$\\frac{1}{3}$ × base × height',
      '$\\frac{1}{2}$ × base × height',
      '$\\frac{1}{8}$ × base × height',
      '$\\frac{1}{4}$ × base × height',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Each prism has volume (1/8) × base × height, so the two prisms combined give (1/4) × base × height.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Figures like parallelepipeds and prisms have what special property?',
    options: [
      'They have curved surfaces',
      'They cannot be cut into cubes',
      'They have constant cross section',
      'They have irrational volume',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Parallelepipeds and prisms have constant cross section, which is why their volumes can be found by cut-and-paste methods similar to those used for parallelograms and triangles in 2D.',
  },
];
