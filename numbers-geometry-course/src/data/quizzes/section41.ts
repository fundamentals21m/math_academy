import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 41: Hilbert's Third Problem
 */
export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "What is Hilbert's Third Problem?",
    options: [
      'Can a square be dissected into a circle?',
      'Can a tetrahedron be cut into pieces and reassembled into a cube?',
      'Can any angle be trisected?',
      'Can π be computed exactly?',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      "Hilbert's Third Problem asks whether a regular tetrahedron can be cut into finitely many pieces and reassembled into a cube of equal volume.",
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a dihedral angle?',
    options: [
      'The angle between two faces of a polyhedron',
      'An angle in a triangle',
      'Half of a full rotation',
      'An angle measured in radians',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'A dihedral angle is the angle between two faces of a polyhedron, measured along their common edge.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the dihedral angle of a cube?',
    options: [
      'π/3',
      'π/2',
      'π/4',
      '2π/3',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The faces of a cube meet at right angles, so the dihedral angle is π/2 (90 degrees).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'What is the cosine of the dihedral angle α of a regular tetrahedron?',
    options: [
      '1/3',
      '1/2',
      '√2/2',
      '√3/2',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Using the double angle formula and geometric calculation, cos α = 1/3 for the regular tetrahedron.',
  },
  {
    id: 5,
    type: 'numeric',
    question:
      'In what year did Hilbert pose his famous list of problems including the Third Problem?',
    correctAnswer: 1900,
    numericRange: { min: 1895, max: 1905, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Hilbert presented his 23 problems at the International Congress of Mathematicians in Paris in 1900.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "Who solved Hilbert's Third Problem?",
    options: [
      'David Hilbert',
      'Henri Poincaré',
      'Max Dehn',
      'Felix Klein',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      "Max Dehn, Hilbert's student, solved the problem just a few months after it was posed, showing the answer is no.",
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'What makes 3D scissors congruence different from 2D scissors congruence?',
    options: [
      'They are the same',
      '3D is easier because there are more dimensions',
      'Neither works in general',
      'In 2D, equal-area polygons can always be dissected into each other; in 3D this fails',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'In 2D, any two polygons of equal area are scissors congruent. In 3D, polyhedra of equal volume may not be scissors congruent.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Why does Hilbert\'s Third Problem matter for the theory of volume?',
    options: [
      'It shows volume cannot be defined',
      'It proves volume equals area',
      'It shows that 3D volume fundamentally requires limits, unlike 2D area',
      'It has no mathematical significance',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The negative answer means volume cannot be defined through finite dissections alone—unlike area, it inherently requires limits or calculus.',
  },
];
