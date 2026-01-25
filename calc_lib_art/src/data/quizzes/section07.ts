import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the paradox of instantaneous velocity?',
    options: [
      'Objects can\'t move faster than light',
      'Velocity and speed are different',
      'Speedometers are always inaccurate',
      'At a single instant, no time passes and no distance is traveled, so how can there be a speed?'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The paradox is that speed = distance/time, but at a single instant, both distance and time are zero. How can velocity exist at a moment?',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is instantaneous velocity defined in calculus?',
    options: [
      'Distance divided by time',
      'The limit of average velocities as the time interval shrinks to zero',
      'The maximum speed reached',
      'The speed at the midpoint of a journey',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Instantaneous velocity is the limit of average velocities over smaller and smaller time intervals—the derivative of position with respect to time.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If position is given by $x(t)$, velocity by $v(t)$, what is acceleration?',
    options: [
      'The integral of position',
      'The product of position and velocity',
      'The derivative of velocity (or second derivative of position)',
      'The average of position over time',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Acceleration is the rate of change of velocity, which is the derivative of velocity or equivalently the second derivative of position.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a falling object with position $x = \\frac{1}{2}gt^2$, what is the velocity?',
    options: [
      '$v = gt
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taking the derivative of $\\frac{1}{2}gt^2$ with respect to $t$ gives $gt$. The velocity increases linearly with time.',
  },
      '$v = \\frac{1}{2}g
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Taking the derivative of $\\frac{1}{2}gt^2$ with respect to $t$ gives $gt$. The velocity increases linearly with time.',
  },
      '$v = gt^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Taking the derivative of $\\frac{1}{2}gt^2$ with respect to $t$ gives $gt$. The velocity increases linearly with time.',
  },
      '$v = g
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Taking the derivative of $\\frac{1}{2}gt^2$ with respect to $t$ gives $gt$. The velocity increases linearly with time.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Taking the derivative of $\\frac{1}{2}gt^2$ with respect to $t$ gives $gt$. The velocity increases linearly with time.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does a car\'s speedometer reading of "60 mph" actually mean?',
    options: [
      'The car has traveled 60 miles',
      'The car will definitely travel 60 miles in the next hour',
      'The car is exactly 60 miles from its starting point',
      'If the current rate of change continued for an hour, 60 miles would be covered'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Instantaneous velocity is about the current rate of change. "60 mph" means at the current rate, you would cover 60 miles in an hour—but the rate may change.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What is the third derivative of position called (the rate of change of acceleration)?',
    correctAnswer: 'jerk',
    difficulty: 'hard',
    explanation: 'The third derivative of position is called "jerk"—it measures how quickly acceleration is changing, which is important for ride comfort in vehicles.',
  },
];
