import type { QuizQuestion } from './types';

export const section132Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The polar coordinate transformation is $x = r\\cos\\theta$, $y = r\\sin\\theta$. The Jacobian determinant is:',
    options: [
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$J = \\begin{vmatrix} \\cos\\theta & \\sin\\theta \\\\ -r\\sin\\theta & r\\cos\\theta \\end{vmatrix} = r\\cos^2\\theta + r\\sin^2\\theta = r$.',
  },
      '$r^2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$J = \\begin{vmatrix} \\cos\\theta & \\sin\\theta \\\\ -r\\sin\\theta & r\\cos\\theta \\end{vmatrix} = r\\cos^2\\theta + r\\sin^2\\theta = r$.',
  },
      '$\\cos\\theta \\sin\\theta
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$J = \\begin{vmatrix} \\cos\\theta & \\sin\\theta \\\\ -r\\sin\\theta & r\\cos\\theta \\end{vmatrix} = r\\cos^2\\theta + r\\sin^2\\theta = r$.',
  },
      '$r
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$J = \\begin{vmatrix} \\cos\\theta & \\sin\\theta \\\\ -r\\sin\\theta & r\\cos\\theta \\end{vmatrix} = r\\cos^2\\theta + r\\sin^2\\theta = r$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$J = \\begin{vmatrix} \\cos\\theta & \\sin\\theta \\\\ -r\\sin\\theta & r\\cos\\theta \\end{vmatrix} = r\\cos^2\\theta + r\\sin^2\\theta = r$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The transformation formula in polar coordinates is:',
    options: [
      '$\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f(r\\cos\\theta, r\\sin\\theta)\\,dr\\,d\\theta
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The area element in polar coordinates is $dx\\,dy = r\\,dr\\,d\\theta$, giving $\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta$.',
  },
      '$\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The area element in polar coordinates is $dx\\,dy = r\\,dr\\,d\\theta$, giving $\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta$.',
  },
      '$\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f(r\\cos\\theta, r\\sin\\theta)\\,r^2\\,dr\\,d\\theta
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The area element in polar coordinates is $dx\\,dy = r\\,dr\\,d\\theta$, giving $\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta$.',
  },
      '$\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f(r, \\theta)\\,dr\\,d\\theta
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The area element in polar coordinates is $dx\\,dy = r\\,dr\\,d\\theta$, giving $\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The area element in polar coordinates is $dx\\,dy = r\\,dr\\,d\\theta$, giving $\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f(r\\cos\\theta, r\\sin\\theta)\\,r\\,dr\\,d\\theta$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In polar coordinates, the r-curves (constant $\\theta$) are:',
    options: [
      'Circles centered at the origin',
      'Ellipses',
      'Straight lines through the origin',
      'Spirals',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When $\\theta$ is constant, varying $r$ traces a ray from the origin at angle $\\theta$ to the positive x-axis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To compute $\\iint_S \\sqrt{a^2 - x^2 - y^2}\\,dx\\,dy$ over the first quadrant of the disk $x^2 + y^2 \\leq a^2$, polar coordinates transform this to:',
    options: [
      '$\\int_0^{\\pi/2}\\int_0^a \\sqrt{a^2 - r^2}\\,r\\,dr\\,d\\theta$',
      '$\\int_0^{2\\pi}\\int_0^a \\sqrt{a^2 - r^2}\\,r\\,dr\\,d\\theta$',
      '$\\int_0^{\\pi/2}\\int_0^a \\sqrt{a^2 - r^2}\\,dr\\,d\\theta$',
      '$\\int_0^a\\int_0^{\\pi/2} \\sqrt{a^2 - r^2}\\,dr\\,d\\theta$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'First quadrant means $0 \\leq \\theta \\leq \\pi/2$. The disk $x^2 + y^2 \\leq a^2$ becomes $0 \\leq r \\leq a$. Include the factor $r$ from the Jacobian.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'The volume of one octant of a sphere of radius $a = 6$ is $\\frac{\\pi a^3}{6}$. What is this volume?',
    correctAnswer: 113.1,
    numericRange: { min: 100, max: 130, precision: 1 },
    difficulty: 'medium',
    explanation: 'Volume = $\\frac{\\pi \\cdot 6^3}{6} = \\frac{216\\pi}{6} = 36\\pi \\approx 113.1$.',
  },
];
