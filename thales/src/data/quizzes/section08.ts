import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 8: Regular Polyhedra
 */
export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a Platonic solid?',
    options: [
      'Any three-dimensional shape with flat faces',
      'A polyhedron where all faces are identical regular polygons and the same number of faces meet at each vertex',
      'A solid that was discovered by Plato',
      'Any polyhedron with more than 6 faces',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A Platonic solid (regular polyhedron) is a 3D solid where all faces are congruent regular polygons and the same number of faces meet at each vertex. There are exactly five such solids.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many Platonic solids exist?',
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'There are exactly five Platonic solids: tetrahedron, cube (hexahedron), octahedron, dodecahedron, and icosahedron. This can be proven using the constraint that vertex angles must sum to less than 360°.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How many regular tilings of the plane exist?',
    options: ['2', '3', '4', 'Infinitely many'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'There are exactly three regular tilings of the plane: using equilateral triangles (6 per vertex), squares (4 per vertex), or regular hexagons (3 per vertex). The angles must sum to exactly 360° at each vertex.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      "In Plato's Timaeus, which Platonic solid was associated with the cosmos (universe)?",
    options: ['Tetrahedron', 'Cube', 'Icosahedron', 'Dodecahedron'],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      "Plato associated the dodecahedron with the cosmos in his Timaeus. Its 12 pentagonal faces corresponded to the 12 signs of the zodiac. The other solids represented the four classical elements: fire (tetrahedron), earth (cube), air (octahedron), and water (icosahedron).",
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "What is Euler's polyhedron formula?",
    options: [
      '$F + V + E = 0$',
      '$F + V - E = 2$',
      '$F - V + E = 2$',
      '$F \\times V = E$',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "Euler's polyhedron formula states that for any convex polyhedron, F + V - E = 2, where F is the number of faces, V is the number of vertices, and E is the number of edges.",
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which two Platonic solids are duals of each other?',
    options: [
      'Tetrahedron and cube',
      'Cube and octahedron',
      'Tetrahedron and octahedron',
      'Icosahedron and cube',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The cube and octahedron are duals — placing a vertex at each face center of a cube yields an octahedron, and vice versa. Similarly, the dodecahedron and icosahedron are duals. The tetrahedron is self-dual.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which Platonic solid has 20 triangular faces?',
    options: ['Tetrahedron', 'Octahedron', 'Dodecahedron', 'Icosahedron'],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The icosahedron has 20 triangular faces, 12 vertices, and 30 edges. It is the Platonic solid with the most faces and has 5 triangles meeting at each vertex.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Why is it impossible to have a regular polyhedron with hexagonal faces?',
    options: [
      'Hexagons have too many sides',
      'Three hexagons meeting at a vertex would sum to exactly 360°, lying flat',
      'Hexagons cannot be regular',
      'The ancient Greeks never discovered hexagons',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'A regular hexagon has interior angles of 120°. Three hexagons at a vertex would give 3 × 120° = 360°, which lies flat (like the hexagonal floor tiling) rather than closing into a 3D corner. The sum must be strictly less than 360° to form a polyhedron.',
  },
  {
    id: 9,
    type: 'numeric',
    question:
      'A cube has 6 faces and 8 vertices. Using Euler\'s formula $F + V - E = 2$, how many edges does it have?',
    correctAnswer: 12,
    numericRange: { min: 1, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation:
      "Using Euler's formula: F + V - E = 2. Substituting: 6 + 8 - E = 2, so 14 - E = 2, giving E = 12. A cube has 12 edges.",
  },
];
