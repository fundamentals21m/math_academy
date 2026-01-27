import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Poinsot\'s construction for torque-free motion, the angular velocity vector $\\boldsymbol{\\Omega}$ traces a curve on:',
    options: [
      'The inertia ellipsoid',
      'A sphere',
      'A plane',
      'A cylinder'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Poinsot\'s construction shows that $\\boldsymbol{\\Omega}$ moves on the inertia ellipsoid (defined by constant kinetic energy $\\frac{1}{2}\\boldsymbol{\\Omega}^T\\mathcal{I}\\boldsymbol{\\Omega} = T$) while also lying on the invariable plane perpendicular to $\\mathbf{L}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The invariable plane in Poinsot\'s construction is perpendicular to:',
    options: [
      'The angular momentum vector $\\mathbf{L}$',
      'The angular velocity vector $\\boldsymbol{\\Omega}$',
      'The principal axis of largest moment',
      'The velocity of the center of mass'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The invariable plane is perpendicular to the conserved angular momentum vector $\\mathbf{L}$. The inertia ellipsoid rolls without slipping on this plane during torque-free motion.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a symmetric top ($I_1 = I_2 \\neq I_3$) in torque-free motion, the angular velocity traces what curve on the inertia ellipsoid?',
    options: [
      'A circle (polhode)',
      'A point (no motion)',
      'A figure-eight',
      'An irregular curve'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For a symmetric top, the polhode (path of $\\boldsymbol{\\Omega}$ on the inertia ellipsoid) is a circle centered on the symmetry axis, reflecting the body\'s axial symmetry.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the name of the curve traced by the angular velocity vector on the inertia ellipsoid?',
    correctAnswer: 'polhode',
    difficulty: 'medium',
    explanation: 'The polhode is the curve traced by the tip of the angular velocity vector $\\boldsymbol{\\Omega}$ on the inertia ellipsoid in the body frame.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name of the curve traced by the angular velocity vector on the invariable plane (in the inertial frame)?',
    correctAnswer: 'herpolhode',
    difficulty: 'medium',
    explanation: 'The herpolhode is the curve traced by the contact point of the inertia ellipsoid on the invariable plane, or equivalently, the path of $\\boldsymbol{\\Omega}$ in the inertial frame.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In Poinsot\'s construction, the inertia ellipsoid:',
    options: [
      'Rolls without slipping on the invariable plane',
      'Slides on the invariable plane',
      'Bounces off the invariable plane',
      'Remains stationary in space'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The inertia ellipsoid rolls without slipping on the invariable plane. The contact point is where $\\boldsymbol{\\Omega}$ touches the plane, and no slipping occurs because $\\boldsymbol{\\Omega}$ is the instantaneous axis of rotation.',
  },
];
