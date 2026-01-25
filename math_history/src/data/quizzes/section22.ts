import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 's22-e01',
    type: 'multiple-choice',
    question: 'Who first discovered a solution to cubic equations?',
    difficulty: 'easy',
    options: [
      'Cardano',
      'Scipione del Ferro',
      'Tartaglia',
      'Ferrari'
    ],
    correctIndex: 1,
    explanation:
      'Scipione del Ferro of Bologna discovered the first solution to a class of cubic equations before his death in 1526, though he kept it secret.',
  },
  {
    id: 's22-e02',
    type: 'multiple-choice',
    question: 'What is a "depressed cubic"?',
    difficulty: 'easy',
    options: [
      'A cubic with no solutions',
      'A cubic with negative coefficients',
      'A cubic with no quadratic term',
      'A cubic that cannot be solved'
    ],
    correctIndex: 2,
    explanation:
      'A depressed cubic has no $x^2$ term, taking the form $y^3 = py + q$. Any cubic can be transformed into this form by a linear substitution.',
  },
  {
    id: 's22-m01',
    type: 'multiple-choice',
    question:
      'In Cardano\'s method, what substitution transforms $y^3 = py + q$ into a system?',
    difficulty: 'medium',
    options: [
      '$y = u - v$',
      '$y = u/v$',
      '$y = uv$',
      '$y = u + v$'
    ],
    correctIndex: 3,
    explanation:
      'Setting $y = u + v$ and expanding gives $y^3 = u^3 + v^3 + 3uv(u + v) = u^3 + v^3 + 3uvy$. Comparing coefficients yields $3uv = p$ and $u^3 + v^3 = q$.',
  },
  {
    id: 's22-m02',
    type: 'multiple-choice',
    question:
      'Viete\'s trigonometric solution shows that solving the cubic $4y^3 - 3y = c$ is equivalent to:',
    difficulty: 'medium',
    options: [
      'Trisecting an angle',
      'Finding a square root',
      'Doubling a cube',
      'Squaring a circle'
    ],
    correctIndex: 0,
    explanation:
      'Since $4\\cos^3\\theta - 3\\cos\\theta = \\cos 3\\theta$, setting $y = \\cos\\theta$ converts the cubic into $\\cos 3\\theta = c$. Solving requires trisecting the angle $\\cos^{-1}(c)$.',
  },
  {
    id: 's22-h01',
    type: 'numeric',
    question:
      'Using Cardano\'s formula for $y^3 = 6y + 6$, we get $y = \\sqrt[3]{3 + \\sqrt{1}} + \\sqrt[3]{3 - \\sqrt{1}}$. What is $\\sqrt[3]{4} + \\sqrt[3]{2}$ approximately (to 1 decimal place)?',
    difficulty: 'hard',
    correctAnswer: 2.8,
    explanation:
      '$\\sqrt[3]{4} \\approx 1.587$ and $\\sqrt[3]{2} \\approx 1.260$. Their sum is approximately $2.85$, which rounds to $2.8$.',
  },
  {
    id: 's22-h02',
    type: 'multiple-choice',
    question:
      'The solution of the cubic was described by Cardano as:',
    difficulty: 'hard',
    options: [
      'A minor improvement over Greek methods',
      'A truly celestial gift surpassing mortal talent',
      'An obvious extension of quadratic methods',
      'A simple algebraic trick',
    ],
    correctIndex: 1,
    explanation:
      'Cardano wrote that the solution "surpasses all human subtlety and the perspicuity of mortal talent and is a truly celestial gift." It was the first major advance in mathematics since ancient Greece.',
  },
];
