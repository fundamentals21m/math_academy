import type { QuizQuestion } from './types';

export const section130Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The winding number $W(\\alpha; P_0)$ of a closed curve $\\alpha$ with respect to a point $P_0$ not on the curve is:',
    options: [
      'Always a positive integer',
      'Any real number',
      'Always zero or one',
      'Always an integer (positive, negative, or zero)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The winding number is always an integer. It counts how many times the curve winds around the point, with positive values for counterclockwise and negative for clockwise.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a simple closed curve (Jordan curve) $C$ and a point $P_0$, the winding number is:',
    options: [
      '0 if $P_0$ is outside $C$, and $\\pm 1$ if $P_0$ is inside $C
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a Jordan curve, the winding number is 0 for exterior points and $+1$ or $-1$ for interior points, depending on the orientation (counterclockwise or clockwise).',
  },
      'Always 1',
      'The area enclosed by $C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a Jordan curve, the winding number is 0 for exterior points and $+1$ or $-1$ for interior points, depending on the orientation (counterclockwise or clockwise).',
  },
      '0 if $P_0$ is inside $C$, and 1 if $P_0$ is outside $C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a Jordan curve, the winding number is 0 for exterior points and $+1$ or $-1$ for interior points, depending on the orientation (counterclockwise or clockwise).',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a Jordan curve, the winding number is 0 for exterior points and $+1$ or $-1$ for interior points, depending on the orientation (counterclockwise or clockwise).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A curve traces a circle counterclockwise if the winding number with respect to interior points is:',
    options: [
      '$-1$',
      '$0$',
      '$+1$',
      'Undefined'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A curve traced counterclockwise (positive direction) has winding number $+1$ for all points inside. Clockwise traversal gives $-1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The winding number formula involves the line integral $\\frac{1}{2\\pi}\\oint_C \\frac{-(y-y_0)\\,dx + (x-x_0)\\,dy}{(x-x_0)^2 + (y-y_0)^2}$. This integrand satisfies $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ everywhere except:',
    options: [
      'On the curve $C
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The integrand has a singularity at $P_0 = (x_0, y_0)$ where the denominator vanishes. Away from $P_0$, the equality of partials holds, explaining why deformations not crossing $P_0$ preserve the winding number.',
  },
      'At the point $P_0 = (x_0, y_0)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The integrand has a singularity at $P_0 = (x_0, y_0)$ where the denominator vanishes. Away from $P_0$, the equality of partials holds, explaining why deformations not crossing $P_0$ preserve the winding number.',
  },
      'At the origin',
      'On the x-axis',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The integrand has a singularity at $P_0 = (x_0, y_0)$ where the denominator vanishes. Away from $P_0$, the equality of partials holds, explaining why deformations not crossing $P_0$ preserve the winding number.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For a circle of radius $a$ centered at $(x_0, y_0)$ traced once counterclockwise, what is the winding number with respect to the center?',
    correctAnswer: 1,
    numericRange: { min: -5, max: 5, precision: 0 },
    difficulty: 'easy',
    explanation: 'Using $\\alpha(t) = (a\\cos t + x_0, a\\sin t + y_0)$ for $0 \\leq t \\leq 2\\pi$, the winding number integral simplifies to $\\frac{1}{2\\pi}\\int_0^{2\\pi} 1\\,dt = 1$.',
  },
];
