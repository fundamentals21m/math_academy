import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Euler\'s equations for a rigid body in the body frame are:',
    options: [
      '$I_1\\dot{\\Omega}_1 + (I_3 - I_2)\\Omega_2\\Omega_3 = K_1$ (and cyclic permutations)',
      '$I_1\\dot{\\Omega}_1 = K_1$',
      '$I_1\\ddot{\\Omega}_1 + (I_3 - I_2)\\Omega_2\\Omega_3 = K_1$',
      '$\\dot{\\Omega}_1 + (I_3 - I_2)\\Omega_2\\Omega_3 = K_1$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Euler\'s equations are $I_1\\dot{\\Omega}_1 + (I_3 - I_2)\\Omega_2\\Omega_3 = K_1$, with cyclic permutations for the other components. They describe rotation in the body-fixed principal axis frame.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why do Euler\'s equations have the nonlinear $(I_j - I_k)\\Omega_j\\Omega_k$ terms?',
    options: [
      'Because the body frame rotates with the body, so there is a transport term',
      'Because of air resistance',
      'Because the mass changes during rotation',
      'Because of gravitational torque'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Euler\'s equations are written in the rotating body frame. The transport theorem adds $\\boldsymbol{\\Omega} \\times \\mathbf{L}$ when converting $\\dot{\\mathbf{L}}$ to the body frame, giving rise to the nonlinear coupling terms.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For torque-free motion ($K_1 = K_2 = K_3 = 0$) of a rigid body, which quantity is conserved?',
    options: [
      'The angular momentum vector $\\mathbf{L}$ in the inertial frame',
      'The angular velocity vector $\\boldsymbol{\\Omega}$ in the body frame',
      'Each component $L_i$ separately',
      'The direction of $\\boldsymbol{\\Omega}$ in the body frame'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In torque-free motion, $\\dot{\\mathbf{L}} = \\mathbf{0}$ in the inertial frame, so $\\mathbf{L}$ is constant. However, $\\boldsymbol{\\Omega}$ and its direction in the body frame generally change.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For an asymmetric top ($I_1 \\neq I_2 \\neq I_3$) in torque-free motion, rotation about which principal axis is unstable?',
    options: [
      'The intermediate axis (middle principal moment)',
      'The axis of largest moment of inertia',
      'The axis of smallest moment of inertia',
      'All axes are equally stable'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The tennis racket theorem states that rotation about the intermediate axis is unstable. Small perturbations grow, while rotations about the axes of largest and smallest moments are stable.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the common name for the instability of rotation about the intermediate principal axis of an asymmetric rigid body?',
    correctAnswer: 'tennis racket theorem',
    difficulty: 'hard',
    explanation: 'The tennis racket theorem (also called the intermediate axis theorem or Dzhanibekov effect) describes the instability of rotation about the intermediate axis of an asymmetric rigid body.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If a symmetric top has $I_1 = I_2 = 2$ kg$\\cdot$m$^2$ and $I_3 = 4$ kg$\\cdot$m$^2$, and rotates about axis 3 with $\\Omega_3 = 5$ rad/s, what is $\\dot{\\Omega}_3$ (in rad/s$^2$) for torque-free motion?',
    correctAnswer: 0,
    numericRange: { min: -10, max: 10, precision: 1 },
    difficulty: 'medium',
    explanation: 'From Euler\'s equation for component 3: $I_3\\dot{\\Omega}_3 + (I_2 - I_1)\\Omega_1\\Omega_2 = 0$. For pure rotation about axis 3, $\\Omega_1 = \\Omega_2 = 0$, so $\\dot{\\Omega}_3 = 0$.',
  },
];
