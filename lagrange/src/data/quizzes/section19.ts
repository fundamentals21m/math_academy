import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The three Euler angles $\\psi$, $\\theta$, $\\phi$ represent:',
    options: [
      'Precession, nutation, and spin respectively',
      'Rotation, translation, and reflection',
      'Roll, pitch, and yaw',
      'Latitude, longitude, and altitude'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In the standard convention, $\\psi$ is the precession angle (rotation about the fixed $z$-axis), $\\theta$ is the nutation angle (tilt from vertical), and $\\phi$ is the spin angle (rotation about the body\'s symmetry axis).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The nutation angle $\\theta$ in Euler angles measures:',
    options: [
      'The angle between the body\'s symmetry axis and the fixed vertical axis',
      'The rotation about the vertical axis',
      'The rotation about the body\'s symmetry axis',
      'The total rotation angle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The nutation angle $\\theta$ is the angle between the body\'s symmetry axis (body $z$-axis) and the fixed vertical (space $Z$-axis). It describes how much the top "tilts" from vertical.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How many Euler angles are needed to specify the orientation of a rigid body?',
    options: [
      '3',
      '2',
      '4',
      '6'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Three Euler angles completely specify the orientation of a rigid body. This corresponds to the three degrees of freedom of the rotation group SO(3).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The angular velocity components in terms of Euler angles include the term $\\dot{\\psi}\\cos\\theta$. This contributes to:',
    options: [
      'The component of angular velocity along the body\'s symmetry axis',
      'The precession rate',
      'The nutation rate',
      'The total kinetic energy only'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The angular velocity component along the body\'s symmetry axis is $\\Omega_3 = \\dot{\\phi} + \\dot{\\psi}\\cos\\theta$. The $\\dot{\\psi}\\cos\\theta$ term is the projection of the precession angular velocity onto the symmetry axis.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name for the phenomenon where Euler angles become ambiguous when $\\theta = 0$ or $\\theta = \\pi$?',
    correctAnswer: 'gimbal lock',
    difficulty: 'hard',
    explanation: 'Gimbal lock occurs when $\\theta = 0$ or $\\pi$, making $\\psi$ and $\\phi$ indistinguishable. This is a coordinate singularity, not a physical one, and can be avoided using quaternions.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If a symmetric top has $\\dot{\\phi} = 10$ rad/s, $\\dot{\\psi} = 2$ rad/s, and $\\theta = 60°$, what is the angular velocity component along the symmetry axis, $\\Omega_3 = \\dot{\\phi} + \\dot{\\psi}\\cos\\theta$ (in rad/s)?',
    correctAnswer: 11,
    numericRange: { min: 0, max: 20, precision: 1 },
    difficulty: 'medium',
    explanation: '$\\Omega_3 = \\dot{\\phi} + \\dot{\\psi}\\cos\\theta = 10 + 2\\cos(60°) = 10 + 2(0.5) = 11$ rad/s.',
  },
];
