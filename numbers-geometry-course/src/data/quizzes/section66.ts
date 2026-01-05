import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 66: Quadratic Curves
 */
export const section66Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the discriminant of the quadratic equation ax² + bxy + cy² + dx + ey + f = 0?',
    options: ['a + c', 'b² - 4ac', 'ac - b²', 'd² + e²'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The discriminant is b² - 4ac, which determines the type of conic section.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If the discriminant b² - 4ac < 0, what type of conic is it?',
    options: ['Hyperbola', 'Parabola', 'Ellipse', 'Two parallel lines'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'A negative discriminant indicates an ellipse (or circle, or degenerate point).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why do we rotate the coordinate axes?',
    options: [
      'To make the curve larger',
      'To eliminate the xy term',
      'To change the discriminant',
      'To add linear terms',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Rotation eliminates the xy term, simplifying the equation toward standard form.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is true about the discriminant under rotation?',
    options: [
      'It changes sign',
      'It doubles',
      'It is invariant',
      'It becomes zero',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The discriminant is an invariant—it remains the same regardless of coordinate transformations.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What type of conic is xy = 1?',
    options: ['Ellipse', 'Parabola', 'Hyperbola', 'Circle'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'For xy = 1, we have a = 0, b = 1, c = 0, so Δ = 1 > 0, making it a hyperbola.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is a degenerate conic?',
    options: [
      'A conic with eccentricity 1',
      'A conic that is a point, line, or pair of lines',
      'A conic with no focus',
      'A conic that extends to infinity',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Degenerate conics occur when the plane passes through the cone\'s apex, giving points or lines.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the discriminant of x² + y² = 1?',
    options: ['0', '1', '-4', '4'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Here a = 1, b = 0, c = 1, so Δ = 0² - 4(1)(1) = -4 < 0, confirming it\'s an ellipse (circle).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'For the equation xy + x - y = 1, what type of conic is this?',
    options: ['Ellipse', 'Circle', 'Parabola', 'Hyperbola'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'With a = 0, b = 1, c = 0, we get Δ = 1 > 0, so it\'s a hyperbola.',
  },
];
