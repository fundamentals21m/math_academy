import type { QuizQuestion } from './types';

export const section135Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Cylindrical coordinates $(r, \\theta, z)$ are related to Cartesian coordinates by:',
    options: [
      '$x = r\\sin\\theta\\cos\\varphi$, $y = r\\sin\\theta\\sin\\varphi$, $z = r\\cos\\theta$',
      '$x = r\\cos z$, $y = r\\sin z$, $z = \\theta$',
      '$x = r$, $y = \\theta$, $z = z$',
      '$x = r\\cos\\theta$, $y = r\\sin\\theta$, $z = z$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Cylindrical coordinates use polar coordinates in the xy-plane ($x = r\\cos\\theta$, $y = r\\sin\\theta$) while leaving $z$ unchanged.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Jacobian determinant for cylindrical coordinates is:',
    options: [
      '$1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Jacobian for cylindrical coordinates is $r$, the same as for polar coordinates. The volume element is $dV = r\\,dr\\,d\\theta\\,dz$.',
  },
      '$r
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Jacobian for cylindrical coordinates is $r$, the same as for polar coordinates. The volume element is $dV = r\\,dr\\,d\\theta\\,dz$.',
  },
      '$r^2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Jacobian for cylindrical coordinates is $r$, the same as for polar coordinates. The volume element is $dV = r\\,dr\\,d\\theta\\,dz$.',
  },
      '$r^2\\sin\\theta
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Jacobian for cylindrical coordinates is $r$, the same as for polar coordinates. The volume element is $dV = r\\,dr\\,d\\theta\\,dz$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Jacobian for cylindrical coordinates is $r$, the same as for polar coordinates. The volume element is $dV = r\\,dr\\,d\\theta\\,dz$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In cylindrical coordinates, the surface $r = $ constant represents:',
    options: [
      'A plane',
      'A sphere',
      'A vertical cylinder centered on the z-axis',
      'A cone',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$r = c$ describes all points at distance $c$ from the z-axis, forming a vertical cylinder of radius $c$ centered on the z-axis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The paraboloid $x^2 + y^2 = 2z$ in cylindrical coordinates becomes:',
    options: [
      '$r^2 = 2z
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $x^2 + y^2 = r^2$ in cylindrical coordinates, the paraboloid $x^2 + y^2 = 2z$ becomes $r^2 = 2z$ or $z = r^2/2$.',
  },
      '$r = 2z
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $x^2 + y^2 = r^2$ in cylindrical coordinates, the paraboloid $x^2 + y^2 = 2z$ becomes $r^2 = 2z$ or $z = r^2/2$.',
  },
      '$r = z^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $x^2 + y^2 = r^2$ in cylindrical coordinates, the paraboloid $x^2 + y^2 = 2z$ becomes $r^2 = 2z$ or $z = r^2/2$.',
  },
      '$r\\theta = 2z
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $x^2 + y^2 = r^2$ in cylindrical coordinates, the paraboloid $x^2 + y^2 = 2z$ becomes $r^2 = 2z$ or $z = r^2/2$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $x^2 + y^2 = r^2$ in cylindrical coordinates, the paraboloid $x^2 + y^2 = 2z$ becomes $r^2 = 2z$ or $z = r^2/2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Cylindrical coordinates are particularly useful for regions with:',
    options: [
      'Spherical symmetry',
      'No particular symmetry',
      'Planar symmetry',
      'Cylindrical symmetry (about the z-axis)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Cylindrical coordinates are ideal for regions bounded by cylinders, cones, or surfaces of revolution about the z-axis, where the symmetry simplifies the integration limits.',
  },
];
