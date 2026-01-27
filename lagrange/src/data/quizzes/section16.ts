import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The kinetic energy of a rigid body rotating with angular velocity $\\boldsymbol{\\Omega}$ is:',
    options: [
      '$T = \\frac{1}{2}\\langle\\boldsymbol{\\Omega}, \\mathcal{I}\\boldsymbol{\\Omega}\\rangle = \\frac{1}{2}\\boldsymbol{\\Omega}^T \\mathcal{I} \\boldsymbol{\\Omega}$',
      '$T = \\frac{1}{2}I\\omega$',
      '$T = \\frac{1}{2}m\\omega^2$',
      '$T = I\\omega^2$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The rotational kinetic energy is a quadratic form in $\\boldsymbol{\\Omega}$: $T = \\frac{1}{2}\\boldsymbol{\\Omega}^T \\mathcal{I} \\boldsymbol{\\Omega}$. This reduces to $\\frac{1}{2}I\\omega^2$ for rotation about a principal axis.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The angular momentum of a rigid body about its center of mass is:',
    options: [
      '$\\mathbf{L} = \\mathcal{I}\\boldsymbol{\\Omega}$',
      '$\\mathbf{L} = I\\boldsymbol{\\Omega}$',
      '$\\mathbf{L} = m\\mathbf{r} \\times \\boldsymbol{\\Omega}$',
      '$\\mathbf{L} = \\boldsymbol{\\Omega} \\times \\mathcal{I}$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The angular momentum is related to angular velocity through the inertia tensor: $\\mathbf{L} = \\mathcal{I}\\boldsymbol{\\Omega}$. This is the rotational analog of $\\mathbf{p} = m\\mathbf{v}$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'A solid sphere of mass $M = 5$ kg and radius $R = 0.4$ m has $I = \\frac{2}{5}MR^2$. If it rotates at $\\omega = 10$ rad/s, what is its kinetic energy (in J)?',
    correctAnswer: 16,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$I = \\frac{2}{5}(5)(0.16) = 0.32$ kg$\\cdot$m$^2$. Then $T = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.32)(100) = 16$ J.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When does the angular momentum $\\mathbf{L}$ point in the same direction as the angular velocity $\\boldsymbol{\\Omega}$?',
    options: [
      'When the body rotates about a principal axis',
      'Always, for any rigid body',
      'Never, they are always perpendicular',
      'Only when the body is a sphere'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $\\mathbf{L} = \\mathcal{I}\\boldsymbol{\\Omega}$, $\\mathbf{L}$ is parallel to $\\boldsymbol{\\Omega}$ only when $\\boldsymbol{\\Omega}$ is an eigenvector of $\\mathcal{I}$, i.e., along a principal axis.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name for a body whose three principal moments of inertia are all equal?',
    correctAnswer: 'spherical top',
    difficulty: 'hard',
    explanation: 'A spherical top has $I_1 = I_2 = I_3$. Examples include a uniform sphere or a cube. For such bodies, every axis through the center of mass is a principal axis.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The equation of motion for a rigid body\'s rotation about a fixed point is:',
    options: [
      '$\\dot{\\mathbf{L}} = \\boldsymbol{\\tau}$ where $\\boldsymbol{\\tau}$ is the external torque',
      '$\\dot{\\mathbf{L}} = \\mathbf{F}$',
      '$\\mathbf{L} = \\boldsymbol{\\tau}$',
      '$\\ddot{\\mathbf{L}} = \\boldsymbol{\\tau}$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The rotational equation of motion is $\\dot{\\mathbf{L}} = \\boldsymbol{\\tau}$, analogous to Newton\'s second law $\\dot{\\mathbf{p}} = \\mathbf{F}$ for linear motion.',
  },
];
