import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 72: Algebraic and Transcendental Functions
 */
export const section72Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is an algebraic function?',
    options: [
      'A function satisfying a polynomial equation p(x, y) = 0',
      'Any function that uses algebra',
      'A function that is always continuous',
      'A function defined by a formula',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'An algebraic function y of x satisfies a polynomial equation p(x, y) = 0.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does "transcendental" mean for a function?',
    options: [
      'It is infinite',
      'It is not algebraic (transcends algebra)',
      'It is complex-valued',
      'It is periodic',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Transcendental functions "transcend" algebra—they cannot be defined by any polynomial equation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is sin x transcendental?',
    options: [
      'It is defined using angles',
      'It is not continuous',
      'Its graph meets the x-axis infinitely many times',
      'It involves π',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'An algebraic curve meets the x-axis only finitely many times, but y = sin x meets it at 0, ±π, ±2π, ...',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following is an algebraic function?',
    options: [
      'sin x',
      '√x',
      'log x',
      'eˣ',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      '√x is algebraic because y = √x satisfies y² - x = 0, a polynomial equation.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why must periodic functions be transcendental?',
    options: [
      'They repeat, meeting horizontal lines infinitely many times',
      'They are defined by integrals',
      'They involve π',
      'They cannot be computed exactly'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A periodic function meets horizontal lines infinitely often, but algebraic curves have only finite intersections.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What geometric object will define the exponential function?',
    options: ['The circle', 'The parabola', 'The hyperbola', 'The ellipse'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The exponential function inherits its properties from the area under the hyperbola xy = 1.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Is the arc length of a circle algebraic?',
    options: [
      'Yes, it equals πr',
      'Yes, it is a polynomial in r',
      'It depends on the radius',
      'No, it is transcendental',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Arc length of the circle involves π and is transcendental—otherwise sin and cos would be algebraic.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the degree of an algebraic curve?',
    options: [
      'The number of variables',
      'The number of intersection points',
      'The dimension of the curve',
      'The highest power in the defining polynomial',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The degree is the highest total power of the polynomial p(x, y), e.g., x² + xy + y² has degree 2.',
  },
];
