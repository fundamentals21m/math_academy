import type { QuizQuestion } from './types';

export const section136Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Spherical coordinates $(\\rho, \\theta, \\varphi)$ are related to Cartesian coordinates by:',
    options: [
      '$x = \\rho\\cos\\theta$, $y = \\rho\\sin\\theta$, $z = \\rho
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In spherical coordinates: $x = \\rho\\cos\\theta\\sin\\varphi$, $y = \\rho\\sin\\theta\\sin\\varphi$, $z = \\rho\\cos\\varphi$, where $\\rho$ is the distance from origin, $\\theta$ is the azimuthal angle, and $\\varphi$ is the polar angle.',
  },
      '$x = \\rho\\sin\\varphi$, $y = \\rho\\cos\\varphi$, $z = \\rho\\theta
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In spherical coordinates: $x = \\rho\\cos\\theta\\sin\\varphi$, $y = \\rho\\sin\\theta\\sin\\varphi$, $z = \\rho\\cos\\varphi$, where $\\rho$ is the distance from origin, $\\theta$ is the azimuthal angle, and $\\varphi$ is the polar angle.',
  },
      '$x = \\rho$, $y = \\theta$, $z = \\varphi
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In spherical coordinates: $x = \\rho\\cos\\theta\\sin\\varphi$, $y = \\rho\\sin\\theta\\sin\\varphi$, $z = \\rho\\cos\\varphi$, where $\\rho$ is the distance from origin, $\\theta$ is the azimuthal angle, and $\\varphi$ is the polar angle.',
  },
      '$x = \\rho\\cos\\theta\\sin\\varphi$, $y = \\rho\\sin\\theta\\sin\\varphi$, $z = \\rho\\cos\\varphi
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In spherical coordinates: $x = \\rho\\cos\\theta\\sin\\varphi$, $y = \\rho\\sin\\theta\\sin\\varphi$, $z = \\rho\\cos\\varphi$, where $\\rho$ is the distance from origin, $\\theta$ is the azimuthal angle, and $\\varphi$ is the polar angle.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In spherical coordinates: $x = \\rho\\cos\\theta\\sin\\varphi$, $y = \\rho\\sin\\theta\\sin\\varphi$, $z = \\rho\\cos\\varphi$, where $\\rho$ is the distance from origin, $\\theta$ is the azimuthal angle, and $\\varphi$ is the polar angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Jacobian determinant for spherical coordinates is:',
    options: [
      '$\\rho
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Jacobian for spherical coordinates is $|J| = \\rho^2\\sin\\varphi$. The volume element is $dV = \\rho^2\\sin\\varphi\\,d\\rho\\,d\\theta\\,d\\varphi$.',
  },
      '$\\rho^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Jacobian for spherical coordinates is $|J| = \\rho^2\\sin\\varphi$. The volume element is $dV = \\rho^2\\sin\\varphi\\,d\\rho\\,d\\theta\\,d\\varphi$.',
  },
      '$\\rho^2\\sin\\varphi
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Jacobian for spherical coordinates is $|J| = \\rho^2\\sin\\varphi$. The volume element is $dV = \\rho^2\\sin\\varphi\\,d\\rho\\,d\\theta\\,d\\varphi$.',
  },
      '$\\rho\\sin\\varphi
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Jacobian for spherical coordinates is $|J| = \\rho^2\\sin\\varphi$. The volume element is $dV = \\rho^2\\sin\\varphi\\,d\\rho\\,d\\theta\\,d\\varphi$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Jacobian for spherical coordinates is $|J| = \\rho^2\\sin\\varphi$. The volume element is $dV = \\rho^2\\sin\\varphi\\,d\\rho\\,d\\theta\\,d\\varphi$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In spherical coordinates, the surface $\\varphi = $ constant represents:',
    options: [
      'A sphere',
      'A half-plane through the z-axis',
      'A cylinder',
      'A circular cone with axis along the z-axis',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\varphi = c$ describes all points making angle $c$ with the positive z-axis, forming a cone with vertex at the origin and axis along the z-axis.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'The volume of a sphere of radius $a = 3$ using spherical coordinates is $\\frac{4\\pi a^3}{3}$. Calculate this volume.',
    correctAnswer: 113.1,
    numericRange: { min: 100, max: 130, precision: 1 },
    difficulty: 'easy',
    explanation: 'Volume = $\\frac{4\\pi \\cdot 27}{3} = \\frac{108\\pi}{3} = 36\\pi \\approx 113.1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The factor $\\sin\\varphi$ in the Jacobian $\\rho^2\\sin\\varphi$ accounts for:',
    options: [
      'The radial scaling',
      'The varying circumference of latitude circles as $\\varphi$ changes',
      'The coordinate singularity at $\\theta = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The factor $\\sin\\varphi$ reflects that circles of constant $\\varphi$ have circumference $2\\pi\\rho\\sin\\varphi$, which varies from 0 at the poles to maximum at the equator.',
  },
      'The curvature of the sphere',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The factor $\\sin\\varphi$ reflects that circles of constant $\\varphi$ have circumference $2\\pi\\rho\\sin\\varphi$, which varies from 0 at the poles to maximum at the equator.',
  },
];
