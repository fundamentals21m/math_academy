import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 's34-e01',
    type: 'multiple-choice',
    question: 'What does the Fundamental Theorem of Calculus connect?',
    difficulty: 'easy',
    options: [
      'Addition and subtraction',
      'Algebra and geometry',
      'Differentiation and integration',
      'Trigonometry and calculus',
    ],
    correctIndex: 2,
    explanation:
      'The Fundamental Theorem of Calculus establishes that differentiation and integration are inverse operations. The derivative of an integral returns the original function, and integrating a derivative gives back the function (up to a constant).',
  },
  {
    id: 's34-e02',
    type: 'multiple-choice',
    question:
      'If $F(x) = \\int_a^x f(t)\\,dt$, what is $F\'(x)$?',
    difficulty: 'easy',
    options: [
      '$0$',
      '$f(a)$',
      '$f(x)$',
      '$\\int_a^x f\'(t)\\,dt$',
    ],
    correctIndex: 2,
    explanation:
      'This is the first part of the Fundamental Theorem: the derivative of the integral is the original function. If $F(x) = \\int_a^x f(t)\\,dt$, then $F\'(x) = f(x)$.',
  },
  {
    id: 's34-m01',
    type: 'multiple-choice',
    question:
      'According to FTC Part II, how do you compute $\\int_a^b f(x)\\,dx$?',
    difficulty: 'medium',
    options: [
      'Find the area of rectangles approximating the curve',
      'Find an antiderivative $F$ and compute $F(b) - F(a)$',
      'Differentiate $f$ and evaluate at the endpoints',
      'Compute the average value of $f$ on $[a,b]$',
    ],
    correctIndex: 1,
    explanation:
      'FTC Part II states: if $F\' = f$, then $\\int_a^b f(x)\\,dx = F(b) - F(a)$. This transforms integration from a limit of sums into finding an antiderivative and evaluating at endpoints.',
  },
  {
    id: 's34-m02',
    type: 'multiple-choice',
    question:
      'What is the intuitive reason why $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$?',
    difficulty: 'medium',
    options: [
      'Integration and differentiation cancel by definition',
      'The rate of change of area under a curve equals the height of the curve',
      'Derivatives are always equal to the original function',
      'The integral is just the antiderivative by another name',
    ],
    correctIndex: 1,
    explanation:
      'When $x$ increases by a small amount $h$, the area under the curve increases by approximately $f(x) \\cdot h$ (a thin rectangle). So the rate of change of area is $f(x)$—the height of the curve at that point.',
  },
  {
    id: 's34-h01',
    type: 'numeric',
    question:
      'Using the Fundamental Theorem, compute $\\int_0^2 x^2\\,dx$. Enter your answer as a fraction in decimal form.',
    difficulty: 'hard',
    correctAnswer: 2.67,
    explanation:
      'Since $\\frac{d}{dx}(\\frac{x^3}{3}) = x^2$, we have $\\int_0^2 x^2\\,dx = [\\frac{x^3}{3}]_0^2 = \\frac{8}{3} - 0 = \\frac{8}{3} \\approx 2.67$.',
  },
  {
    id: 's34-h02',
    type: 'multiple-choice',
    question:
      'What transformation did the Fundamental Theorem bring to mathematics?',
    difficulty: 'hard',
    options: [
      'It made geometric proofs obsolete',
      'It unified tangent problems and area problems into a single theory',
      'It proved that all functions are differentiable',
      'It eliminated the need for limits',
    ],
    correctIndex: 1,
    explanation:
      'Before FTC, finding tangents and finding areas were separate problems requiring different techniques. The Fundamental Theorem showed they are inverse operations, unifying them into a coherent theory and making both much easier to compute.',
  },
];
