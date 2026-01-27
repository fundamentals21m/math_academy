import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The moment of inertia of a rigid body about an axis is defined as:',
    options: [
      '$I = \\int \\rho(y^2 + z^2) \\, dV$ where $y, z$ are distances from the axis',
      '$I = \\int \\rho \\, dV$',
      '$I = \\int \\rho r \\, dV$',
      '$I = \\int \\rho (x^2 + y^2 + z^2) \\, dV$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The moment of inertia is the integral of the density times the square of the perpendicular distance from the rotation axis. For an axis along $x$, this is $I = \\int \\rho(y^2 + z^2) \\, dV$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The parallel axis theorem states that the moment of inertia about an axis through point $G$ is related to that through the center of mass $O$ by:',
    options: [
      '$I_G = I_O + Md^2$ where $d$ is the distance between axes',
      '$I_G = I_O - Md^2$',
      '$I_G = I_O \\cdot d^2$',
      '$I_G = I_O / d^2$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The parallel axis theorem states that $I_G = I_O + Md^2$, where $d$ is the perpendicular distance between the parallel axes. This shows that the moment of inertia is minimized about the center of mass.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'A thin rod of mass $M = 3$ kg and length $L = 2$ m has moment of inertia $I_{cm} = \\frac{1}{12}ML^2$ about its center. What is its moment of inertia about one end (in kg$\\cdot$m$^2$)?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 20, precision: 1 },
    difficulty: 'medium',
    explanation: 'Using the parallel axis theorem: $I_{end} = I_{cm} + M(L/2)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{1}{3}ML^2 = \\frac{1}{3}(3)(4) = 4$ kg$\\cdot$m$^2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The inertia tensor $\\mathcal{I}$ of a rigid body is a:',
    options: [
      'Symmetric $3 \\times 3$ matrix',
      'Skew-symmetric $3 \\times 3$ matrix',
      'Diagonal matrix in all coordinate systems',
      'Scalar quantity'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The inertia tensor is a symmetric $3 \\times 3$ matrix with components $I_{ij} = \\int \\rho(r^2\\delta_{ij} - x_i x_j) dV$. Its symmetry guarantees real eigenvalues (principal moments).',
  },
  {
    id: 5,
    type: 'text',
    question: 'What are the axes of a rigid body called along which the inertia tensor is diagonal?',
    correctAnswer: 'principal axes',
    difficulty: 'easy',
    explanation: 'The principal axes are the eigenvectors of the inertia tensor. When the body rotates about a principal axis, the angular momentum is parallel to the angular velocity.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For a body with rotational symmetry about one axis, how many distinct principal moments of inertia are there?',
    options: [
      'Two (one along the symmetry axis, one perpendicular)',
      'Three (all different)',
      'One (all equal)',
      'None (no principal axes exist)'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An axially symmetric body (like a cylinder or cone) has two distinct principal moments: one along the symmetry axis and a degenerate pair for any two perpendicular axes.',
  },
];
