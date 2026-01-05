import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 38: Circular Functions
 */
export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How are cos θ and sin θ defined using the unit circle?',
    options: [
      'As the lengths of sides of a triangle',
      'As the coordinates of a point at angle θ on the unit circle',
      'As the area and perimeter of a sector',
      'As roots of a polynomial equation',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'On the unit circle, the point at angle θ has coordinates (cos θ, sin θ). This extends the trigonometric ratios to all real angles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the Pythagorean identity for cos and sin?',
    options: [
      'cos θ + sin θ = 1',
      'cos² θ + sin² θ = 1',
      'cos θ × sin θ = 1',
      'cos² θ - sin² θ = 1',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Since (cos θ, sin θ) lies on the unit circle x² + y² = 1, we have cos² θ + sin² θ = 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the period of the cosine and sine functions?',
    options: ['π', '2π', 'π/2', '4π'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Both cos and sin have period 2π, meaning cos(θ + 2π) = cos θ and sin(θ + 2π) = sin θ. This corresponds to one complete rotation around the circle.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why are cos and sin called transcendental functions?',
    options: [
      'They are very complex',
      'They transcend human understanding',
      'They cannot be expressed as roots of polynomials',
      'They were discovered by transcendental meditation',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Transcendental functions cannot be expressed as algebraic functions (solutions to polynomial equations). The sine curve meets the line y = 0 infinitely often, which is impossible for any algebraic curve.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is lim(θ→0) sin θ / θ?',
    options: ['0', '1', 'π', 'Does not exist'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'This fundamental limit equals 1. It can be proved by the squeeze theorem using sin θ < θ < tan θ for small positive θ.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What physical phenomenon does cos θ model when θ represents time?',
    options: [
      'Constant motion',
      'Simple harmonic motion (vibration)',
      'Exponential growth',
      'Random motion',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When a point moves uniformly around a circle, its x-coordinate traces out cos θ, which models simple harmonic motion—the basis of musical tones and many vibrations.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'If sin θ = 3/5 and θ is in the first quadrant, what is cos θ?',
    options: ['3/5', '4/5', '5/4', '5/3'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Using cos² θ + sin² θ = 1, we get cos² θ = 1 - 9/25 = 16/25, so cos θ = 4/5 (positive in the first quadrant).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why does the graph of sin lag behind cos by π/2?',
    options: [
      'They are unrelated functions',
      'Because sin θ = cos(θ - π/2)',
      'Because of a computational error',
      'They have different periods',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'From the unit circle, sin θ = cos(π/2 - θ) = cos(-(θ - π/2)) = cos(θ - π/2). So the sine wave is the cosine wave shifted right by π/2.',
  },
];
