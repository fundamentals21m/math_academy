import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's64-e01',
    type: 'multiple-choice',
    question: 'For a convex polyhedron, Euler\'s formula states that $V - E + F$ equals:',
    options: [
      '1',
      '0',
      '2',
      'It depends on the polyhedron'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Euler\'s polyhedron formula states that for any convex polyhedron, V - E + F = 2, where V is the number of vertices, E is the number of edges, and F is the number of faces.',
  },
  {
    id: 's64-e02',
    type: 'numeric',
    question: 'A cube has 8 vertices and 12 edges. How many faces does it have? (Use Euler\'s formula)',
    correctAnswer: 6,
    difficulty: 'easy',
    explanation:
      'Using V - E + F = 2: 8 - 12 + F = 2, so F = 6. Indeed, a cube has 6 square faces.',
  },
  // Medium questions
  {
    id: 's64-m01',
    type: 'multiple-choice',
    question: 'The Euler characteristic of a torus (donut shape) is:',
    options: [
      '-2',
      '2',
      '1',
      '0'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The Euler characteristic χ = 2 - 2g where g is the genus (number of holes). A torus has genus 1, so χ = 2 - 2(1) = 0. This can be verified by any decomposition of the torus.',
  },
  {
    id: 's64-m02',
    type: 'multiple-choice',
    question: 'The Euler characteristic is a topological invariant, meaning it:',
    options: [
      'Stays the same under continuous deformations of the surface',
      'Changes when you add vertices',
      'Depends on the size of the shape',
      'Is different for each decomposition',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A topological invariant is preserved under continuous deformations (stretching, bending, but not tearing or gluing). The Euler characteristic depends only on the topology of the surface, not on how it\'s decomposed or its geometric properties.',
  },
  // Hard questions
  {
    id: 's64-h01',
    type: 'multiple-choice',
    question: 'The relationship between Euler characteristic $\\chi$ and genus $g$ for orientable surfaces is:',
    options: [
      '$\\chi = g$',
      '$\\chi = 2 - 2g$',
      '$\\chi = 2g$',
      '$\\chi = 2 + 2g$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'For orientable surfaces, χ = 2 - 2g. A sphere (g=0) has χ=2, a torus (g=1) has χ=0, a double torus (g=2) has χ=-2, and so on. Each additional handle decreases χ by 2.',
  },
  {
    id: 's64-h02',
    type: 'multiple-choice',
    question: 'Euler\'s formula can be used to prove that $K_5$ (complete graph on 5 vertices) is non-planar because:',
    options: [
      'The formula gives a negative number of faces',
      '$K_5$ has too many vertices',
      'The required number of faces contradicts the edge-face inequality',
      '$K_5$ has odd Euler characteristic'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'If K₅ (V=5, E=10) were planar, Euler\'s formula gives F=7. But since each face needs ≥3 edges and each edge borders ≤2 faces, we need 3F ≤ 2E, so F ≤ 6.67. This contradicts F=7, proving K₅ is non-planar.',
  },
];
