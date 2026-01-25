import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 73: The Area Bounded by a Curve
 */
export const section73Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How is the area under a curve defined?',
    options: [
      'By a formula involving x and y',
      'As the least upper bound of polygon areas',
      'Using calculus only',
      'By counting grid squares',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The area is defined as the least upper bound of all polygon areas contained in the region.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a region is scaled by M in x and N in y, how does area change?',
    options: [
      'Multiplied by M + N',
      'Multiplied by M²',
      'Unchanged',
      'Multiplied by M × N',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Scaling by M in x and N in y multiplies area by MN—this is why circle area is proportional to r².',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who first determined a curved area?',
    options: [
      'Hippocrates of Chios',
      'Archimedes',
      'Euclid',
      'Pythagoras',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Hippocrates of Chios (430 BC) found that a certain lune has the same area as a triangle.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the area under y = x² from x = 0 to x = 1?',
    options: [
      '1/2',
      '1/3',
      '1/4',
      '1',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Archimedes showed this area is 1/3 by summing squares 1² + 2² + ... + (n-1)² and taking the limit.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is the parabola special among algebraic curves?',
    options: [
      'Its area function is algebraic (not transcendental)',
      'It has the largest area',
      'It is the only curve with finite area',
      'It was discovered first',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The parabola\'s area function (x³/3) is algebraic, unlike the circle or hyperbola.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For a unit circle sector with angle θ, what is the area?',
    options: [
      'θ',
      '2θ',
      'θ/2',
      'πθ',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A sector with angle θ has area θ/2, so the parameter in (cos θ, sin θ) is twice the area.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why do we use area rather than arc length to define transcendental functions?',
    options: [
      'Arc length is undefined',
      'Area is always finite',
      'Arc length is always algebraic',
      'Area is usually more manageable',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'For most curves, area functions are easier to work with than arc length functions.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'The sum 1² + 2² + ... + n² equals:',
    options: [
      'n(n+1)/2',
      'n³/3',
      'n(n+1)(2n+1)/6',
      'n²(n+1)²/4',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'This formula, known to Archimedes, is n(n+1)(2n+1)/6 and is key to finding the parabola area.',
  },
];
