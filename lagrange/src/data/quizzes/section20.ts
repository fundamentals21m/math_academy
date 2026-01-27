import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Lagrange\'s top is a symmetric top with its pivot point:',
    options: [
      'At a point on the symmetry axis, not at the center of mass',
      'At the center of mass',
      'At the tip of the symmetry axis',
      'Free to move in space'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Lagrange\'s top (also called the heavy symmetric top) has a fixed pivot point on its symmetry axis, displaced from the center of mass. Gravity provides a torque that causes precession.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For Lagrange\'s top, which quantities are conserved?',
    options: [
      'Energy $E$, angular momentum about vertical $p_\\psi$, and angular momentum about symmetry axis $p_\\phi$',
      'Only energy $E$',
      'Only the total angular momentum',
      'Energy and linear momentum'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Lagrange\'s top has three integrals of motion: total energy $E$, the component of angular momentum along the fixed vertical ($p_\\psi$, since $\\psi$ is cyclic), and the spin angular momentum ($p_\\phi$, since $\\phi$ is cyclic).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the Lagrangian for the heavy symmetric top, the generalized momenta $p_\\psi$ and $p_\\phi$ are constant because:',
    options: [
      'The angles $\\psi$ and $\\phi$ are cyclic (do not appear explicitly in $L$)',
      'There is no gravity',
      'The top is in free fall',
      'The angular velocity is constant'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Lagrangian depends on $\\theta$ but not on $\\psi$ or $\\phi$ explicitly. By the Euler-Lagrange equations, $\\frac{\\partial L}{\\partial \\psi} = 0$ implies $p_\\psi = \\frac{\\partial L}{\\partial \\dot{\\psi}}$ is conserved, and similarly for $p_\\phi$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The condition for steady precession of a heavy symmetric top at constant nutation angle $\\theta_0$ is:',
    options: [
      '$\\dot{\\psi} = \\frac{Mgl}{I_3\\dot{\\phi}\\cos\\theta_0 + (I_1 - I_3)\\dot{\\psi}\\cos\\theta_0}$ (approximately)',
      '$\\dot{\\psi} = 0$',
      '$\\dot{\\phi} = 0$',
      '$\\theta_0 = 90°$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Steady precession requires the gravitational torque to be balanced by the gyroscopic effect. This leads to a quadratic equation in $\\dot{\\psi}$ that typically has two solutions (fast and slow precession).',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name for the oscillatory motion of the nutation angle $\\theta$ in a spinning top?',
    correctAnswer: 'nutation',
    difficulty: 'easy',
    explanation: 'Nutation refers to the oscillation or "nodding" of the top\'s symmetry axis as it precesses. The nutation angle $\\theta$ typically oscillates between two extreme values $\\theta_1$ and $\\theta_2$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The "sleeping top" configuration occurs when:',
    options: [
      'The top spins vertically ($\\theta = 0$) with sufficient angular velocity to be stable',
      'The top has stopped spinning',
      'The top precesses without spinning',
      'The nutation angle is $90°$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A sleeping top spins vertically upright. This configuration is stable only if the spin rate exceeds a critical value; otherwise, small perturbations cause the top to tilt and begin precessing and nutating.',
  },
];
