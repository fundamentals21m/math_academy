import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the focus of a parabola?',
    options: [
      'The vertex of the parabola',
      'A point from which distances to points on the parabola equal distances to the directrix',
      'The center of the parabola',
      'The point where the axis crosses the parabola'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The focus is a point such that for any point $P$ on the parabola, the distance from $P$ to the focus equals the distance from $P$ to the directrix.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the eccentricity of a circle?',
    options: [
      '$e = 0$',
      '$e = 1$',
      '$e = 2$',
      '$e = \\infty$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A circle has eccentricity $e = 0$. The eccentricity measures how "stretched" a conic is—a circle is perfectly round, hence $e = 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What geometric property do all points on an ellipse share?',
    options: [
      'Equal distance from the center',
      'The sum of distances to the two foci is constant',
      'Equal distance from the directrix',
      'The product of distances to the foci is constant'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For any point $P$ on an ellipse with foci $F_1$ and $F_2$, the sum $PF_1 + PF_2$ is constant (equal to the major axis length $2a$).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the relationship between the semi-axes $a$, $b$ and the distance $c$ from center to focus in an ellipse?',
    options: [
      '$a^2 = b^2 + c^2$',
      '$b^2 = a^2 + c^2$',
      '$c^2 = a^2 + b^2$',
      '$a + b = c$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In an ellipse, $a^2 = b^2 + c^2$ where $a$ is the semi-major axis, $b$ is the semi-minor axis, and $c$ is the distance from center to focus.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What property distinguishes a hyperbola from other conics?',
    options: [
      'It is bounded',
      'The difference of distances from any point to the two foci is constant',
      'It has no foci',
      'It is symmetric about one axis only'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a hyperbola, the absolute difference $|PF_1 - PF_2|$ is constant for any point $P$ on the curve, unlike the ellipse where the sum is constant.',
  },
];
