import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Cartesian plane is denoted:',
    options: [
      '$\\mathbb{R}^2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}^2$ is the set of all ordered pairs (x, y) of real numbers.',
  },
      '$\\mathbb{R}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}^2$ is the set of all ordered pairs (x, y) of real numbers.',
  },
      '$\\mathbb{C}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}^2$ is the set of all ordered pairs (x, y) of real numbers.',
  },
      '$\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}^2$ is the set of all ordered pairs (x, y) of real numbers.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}^2$ is the set of all ordered pairs (x, y) of real numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A point in the plane is represented by:',
    options: [
      'A line',
      'An ordered pair (x, y)',
      'A single number',
      'A set of points',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Each point corresponds to a unique ordered pair (x, y) giving its coordinates.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The distance between points $(x_1, y_1)$ and $(x_2, y_2)$ is:',
    options: [
      '$|x_2 - x_1| + |y_2 - y_1|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Euclidean distance formula comes from the Pythagorean theorem.',
  },
      '$\\max(|x_2 - x_1|, |y_2 - y_1|)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Euclidean distance formula comes from the Pythagorean theorem.',
  },
      '$\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Euclidean distance formula comes from the Pythagorean theorem.',
  },
      '$(x_2 - x_1)(y_2 - y_1)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Euclidean distance formula comes from the Pythagorean theorem.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Euclidean distance formula comes from the Pythagorean theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The origin of the coordinate system has coordinates:',
    options: [
      '(1, 0)',
      '(1, 1)',
      '(0, 1)',
      '(0, 0)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The origin is where the x-axis and y-axis intersect, at (0, 0).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The midpoint of segment from $(x_1, y_1)$ to $(x_2, y_2)$ is:',
    options: [
      '$(x_1 + x_2, y_1 + y_2)$',
      '$\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$',
      '$(x_1 x_2, y_1 y_2)$',
      '$(x_2 - x_1, y_2 - y_1)$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The midpoint coordinates are the averages of the endpoint coordinates.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Analytic geometry unifies geometry and algebra by:',
    options: [
      'Representing geometric objects as equations',
      'Using only compass constructions',
      'Eliminating numbers entirely',
      'Avoiding coordinates',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Descartes showed geometric problems can be translated into algebraic equations and vice versa.',
  },
];
