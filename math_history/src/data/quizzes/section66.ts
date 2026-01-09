import type { QuizQuestion } from './types';

export const section66Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's66-e01',
    type: 'multiple-choice',
    question: 'A space is "simply connected" if:',
    options: [
      'Every loop can be continuously shrunk to a point',
      'It has no boundary',
      'It is two-dimensional',
      'It has Euler characteristic 2',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'A simply connected space has trivial fundamental group—every loop can be continuously contracted to a point. Examples include R^n and spheres S^n for n ≥ 2. The circle is NOT simply connected.',
  },
  {
    id: 's66-e02',
    type: 'multiple-choice',
    question: 'The fundamental group of the circle $S^1$ is:',
    options: [
      '$\\mathbb{Z}$ (the integers)',
      'The trivial group',
      '$\\mathbb{Z} \\times \\mathbb{Z}$',
      'A finite group',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'π₁(S¹) = Z. Loops on the circle are classified by their winding number: how many times they go around. Going around once is 1, twice is 2, backwards is -1, etc.',
  },
  // Medium questions
  {
    id: 's66-m01',
    type: 'multiple-choice',
    question: 'The fundamental group of the torus $T^2$ is:',
    options: [
      '$\\mathbb{Z} \\times \\mathbb{Z}$',
      '$\\mathbb{Z}$',
      'The trivial group',
      'A non-abelian group',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'π₁(T²) = Z × Z. The torus has two independent directions for loops (around and through the hole), each contributing a Z factor. Loops are classified by pairs of integers (m, n).',
  },
  {
    id: 's66-m02',
    type: 'multiple-choice',
    question: 'Two loops are homotopic if:',
    options: [
      'One can be continuously deformed into the other',
      'They have the same length',
      'They pass through the same points',
      'They have the same starting point only',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Homotopy is continuous deformation. Two loops based at the same point are homotopic if one can be "morphed" into the other continuously without breaking or leaving the space. The fundamental group consists of homotopy classes of loops.',
  },
  // Hard questions
  {
    id: 's66-h01',
    type: 'multiple-choice',
    question: 'The fundamental group of a figure-eight (two circles joined at a point) is:',
    options: [
      'The free group on two generators',
      '$\\mathbb{Z} \\times \\mathbb{Z}$',
      '$\\mathbb{Z}$',
      'The trivial group',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'π₁(figure-eight) = F₂, the free group on two generators (one for each circle). Unlike Z × Z (which is abelian), F₂ is non-abelian: going around circle A then B is different from B then A.',
  },
  {
    id: 's66-h02',
    type: 'multiple-choice',
    question: 'The Poincaré Conjecture (proved by Perelman) states that:',
    options: [
      'A simply connected closed 3-manifold is homeomorphic to the 3-sphere',
      'All 3-manifolds have trivial fundamental group',
      'The fundamental group is always abelian',
      'Every surface is simply connected',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Poincaré Conjecture asked: if a closed 3-manifold has trivial fundamental group (simply connected), must it be topologically a 3-sphere? Perelman proved this is true in 2003, resolving a century-old problem.',
  },
];
