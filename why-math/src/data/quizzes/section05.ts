import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many solutions does a quadratic equation typically have?',
    options: [
      'One',
      'Three',
      'Two',
      'Infinitely many'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Quadratic equations typically have two solutions (which may be repeated or complex).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are the solutions to $x^2 - 4 = 0$?',
    options: [
      '$x = 4$',
      '$x = 2$ only',
      '$x = \\pm 4$',
      '$x = \\pm 2$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$x^2 = 4$, so $x = 2$ or $x = -2$, written as $x = \\pm 2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To solve $x^2 - 6x - 16 = 0$ by factoring, we write:',
    options: [
      '$(x - 8)(x + 2) = 0$',
      '$(x - 4)(x + 4) = 0$',
      '$(x + 8)(x - 2) = 0$',
      '$(x - 16)(x + 1) = 0$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'We need factors of -16 that sum to -6: that\'s -8 and +2. So $(x - 8)(x + 2) = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Quadratic Formula states that solutions to $ax^2 + bx + c = 0$ are:',
    options: [
      '$x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
      '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
      '$x = \\frac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}$',
      '$x = \\frac{b \\pm \\sqrt{b^2 + 4ac}}{a}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Quadratic Formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The discriminant $b^2 - 4ac$ determines:',
    options: [
      'The y-intercept of the parabola',
      'The vertex of the parabola',
      'The nature of the solutions (real, repeated, or none)',
      'The x-intercept only'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $b^2-4ac > 0$: two real solutions. If $= 0$: one repeated. If $< 0$: no real solutions.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The graph of $y = ax^2 + bx + c$ (with $a \\neq 0$) is called a:',
    options: [
      'Line',
      'Circle',
      'Hyperbola',
      'Parabola'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The graph of a quadratic polynomial is a parabola.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'If $a > 0$ in $y = ax^2 + bx + c$, the parabola:',
    options: [
      'Opens upward and has a minimum',
      'Opens downward and has a maximum',
      'Is a horizontal line',
      'Opens to the right'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When $a > 0$, the parabola opens upward and has a minimum at its vertex.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'The vertex form of a parabola is $y = a(x - h)^2 + k$. The vertex is at:',
    options: [
      '$(0, 0)$',
      '$(h, k)$',
      '$(-h, k)$',
      '$(h, -k)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In vertex form $y = a(x - h)^2 + k$, the vertex is at $(h, k)$.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'A baseball thrown upward follows $h = 50t - 16t^2$. It reaches 30 feet at:',
    options: [
      'One time only',
      'Never',
      'Two different times (going up and coming down)',
      'Continuously'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The ball passes 30 feet twice—once on the way up and once on the way down.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'To maximize the area of a rectangle with fixed perimeter $p$, the shape should be:',
    options: [
      'Very long and thin',
      'A circle',
      'Any rectangle works the same',
      'A square'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Area $A = x(\\frac{p}{2} - x)$ is a downward parabola. Maximum occurs when both dimensions equal $\\frac{p}{4}$—a square.',
  },
];
