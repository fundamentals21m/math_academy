import type { QuizQuestion } from './types';

export const section124Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The total mass $m(S)$ of a thin plate with shape $S$ and density function $f(x,y)$ is:',
    options: [
      '$\\iint_S dx\\,dy
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $f(x,y)$ represents mass per unit area (density), then the total mass is obtained by integrating the density over the region: $m(S) = \\iint_S f(x,y)\\,dx\\,dy$.',
  },
      '$\\iint_S [f(x,y)]^2\\,dx\\,dy
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $f(x,y)$ represents mass per unit area (density), then the total mass is obtained by integrating the density over the region: $m(S) = \\iint_S f(x,y)\\,dx\\,dy$.',
  },
      '$\\iint_S f(x,y)\\,dx\\,dy
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $f(x,y)$ represents mass per unit area (density), then the total mass is obtained by integrating the density over the region: $m(S) = \\iint_S f(x,y)\\,dx\\,dy$.',
  },
      '$\\iint_S \\sqrt{f(x,y)}\\,dx\\,dy
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $f(x,y)$ represents mass per unit area (density), then the total mass is obtained by integrating the density over the region: $m(S) = \\iint_S f(x,y)\\,dx\\,dy$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $f(x,y)$ represents mass per unit area (density), then the total mass is obtained by integrating the density over the region: $m(S) = \\iint_S f(x,y)\\,dx\\,dy$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The x-coordinate $\\bar{x}$ of the center of mass of a plate with density $f$ over region $S$ satisfies:',
    options: [
      '$\\bar{x} = \\iint_S x\\,dx\\,dy
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The center of mass is a weighted average: $\\bar{x} \\cdot m(S) = \\iint_S x f(x,y)\\,dx\\,dy$. The integral $\\iint_S x f(x,y)\\,dx\\,dy$ is called the moment about the y-axis.',
  },
      '$\\bar{x} = \\iint_S f(x,y)\\,dx\\,dy
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The center of mass is a weighted average: $\\bar{x} \\cdot m(S) = \\iint_S x f(x,y)\\,dx\\,dy$. The integral $\\iint_S x f(x,y)\\,dx\\,dy$ is called the moment about the y-axis.',
  },
      '$\\bar{x} \\cdot a(S) = \\iint_S x f(x,y)\\,dx\\,dy
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The center of mass is a weighted average: $\\bar{x} \\cdot m(S) = \\iint_S x f(x,y)\\,dx\\,dy$. The integral $\\iint_S x f(x,y)\\,dx\\,dy$ is called the moment about the y-axis.',
  },
      '$\\bar{x} \\cdot m(S) = \\iint_S x f(x,y)\\,dx\\,dy
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The center of mass is a weighted average: $\\bar{x} \\cdot m(S) = \\iint_S x f(x,y)\\,dx\\,dy$. The integral $\\iint_S x f(x,y)\\,dx\\,dy$ is called the moment about the y-axis.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The center of mass is a weighted average: $\\bar{x} \\cdot m(S) = \\iint_S x f(x,y)\\,dx\\,dy$. The integral $\\iint_S x f(x,y)\\,dx\\,dy$ is called the moment about the y-axis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When the density is constant, the center of mass is called the:',
    options: [
      'Moment of inertia',
      'Centroid',
      'Radius of gyration',
      'Principal axis',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When density is constant, the center of mass depends only on the geometry of the region and is called the centroid. The constant density factor cancels in the formula.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The moment of inertia $I_y$ of a plate about the y-axis is given by:',
    options: [
      '$\\iint_S y f(x,y)\\,dx\\,dy
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The moment of inertia about the y-axis is $I_y = \\iint_S x^2 f(x,y)\\,dx\\,dy$, where $x^2$ is the square of the distance from each point to the y-axis.',
  },
      '$\\iint_S x^2 f(x,y)\\,dx\\,dy
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The moment of inertia about the y-axis is $I_y = \\iint_S x^2 f(x,y)\\,dx\\,dy$, where $x^2$ is the square of the distance from each point to the y-axis.',
  },
      '$\\iint_S y^2 f(x,y)\\,dx\\,dy
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The moment of inertia about the y-axis is $I_y = \\iint_S x^2 f(x,y)\\,dx\\,dy$, where $x^2$ is the square of the distance from each point to the y-axis.',
  },
      '$\\iint_S x f(x,y)\\,dx\\,dy
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The moment of inertia about the y-axis is $I_y = \\iint_S x^2 f(x,y)\\,dx\\,dy$, where $x^2$ is the square of the distance from each point to the y-axis.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The moment of inertia about the y-axis is $I_y = \\iint_S x^2 f(x,y)\\,dx\\,dy$, where $x^2$ is the square of the distance from each point to the y-axis.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The polar moment of inertia $I_0$ about the origin is related to $I_x$ and $I_y$ by:',
    options: [
      '$I_0 = I_x + I_y$',
      '$I_0 = I_x \\cdot I_y$',
      '$I_0 = I_x - I_y$',
      '$I_0 = \\sqrt{I_x^2 + I_y^2}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The polar moment of inertia is $I_0 = \\iint_S (x^2 + y^2)f\\,dx\\,dy = I_y + I_x$, since the squared distance from the origin is $x^2 + y^2$.',
  },
];
