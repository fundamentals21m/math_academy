import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 65: Properties of Conic Sections
 */
export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the eccentricity of a parabola?',
    options: ['e = 0', 'e < 1', 'e = 1', 'e > 1'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'A parabola has eccentricity exactly 1, the transitional case between ellipse and hyperbola.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What happens to parallel rays hitting a parabolic mirror?',
    options: [
      'They scatter randomly',
      'They all reflect through the focus',
      'They reflect back parallel',
      'They are absorbed',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The focal property of the parabola: parallel rays reflect through the focus.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is true about the sum of focal distances for any point on an ellipse?',
    options: [
      'It varies depending on the point',
      'It equals the eccentricity',
      'It is constant (= 2a)',
      'It equals 1',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'For any point P on an ellipse, F₁P + F₂P = 2a (the length of the major axis).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does "focus" mean in Latin?',
    options: ['Point', 'Center', 'Fireplace', 'Reflection'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Focus means "fireplace" in Latin—named by Kepler for where heat concentrates.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For an ellipse x²/a² + y²/b² = 1 with a > b, what is the eccentricity?',
    options: [
      'e = a/b',
      'e = b/a',
      'e = √(1 - b²/a²)',
      'e = √(1 - a²/b²)',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The eccentricity of an ellipse is e = √(1 - b²/a²), which is less than 1.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Who first proved the focal property of the parabola?',
    options: ['Euclid', 'Apollonius', 'Diocles', 'Archimedes'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Diocles proved this around 200 B.C. in his book "On Burning Mirrors."',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the "thread construction" used for?',
    options: [
      'Drawing a parabola',
      'Drawing an ellipse',
      'Drawing a hyperbola',
      'Measuring eccentricity',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Tying thread to two foci and pulling taut traces an ellipse.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'In planetary motion, where is the sun located?',
    options: [
      'At the center of the ellipse',
      'At one focus of the orbit',
      'At the directrix',
      'Outside the orbit',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'By Kepler\'s first law, planets orbit in ellipses with the sun at one focus.',
  },
];
