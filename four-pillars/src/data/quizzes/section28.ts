import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Cauchy-Schwarz inequality states:',
    options: [
      '$|\\mathbf{u} \\cdot \\mathbf{v}| = |\\mathbf{u}||\\mathbf{v}|$',
      '$|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}||\\mathbf{v}|$',
      '$|\\mathbf{u} \\cdot \\mathbf{v}| \\geq |\\mathbf{u}||\\mathbf{v}|$',
      '$\\mathbf{u} \\cdot \\mathbf{v} = 0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The absolute value of the inner product is at most the product of lengths.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The triangle inequality for vectors states:',
    options: [
      '$|\\mathbf{u} + \\mathbf{v}| = |\\mathbf{u}| + |\\mathbf{v}|$',
      '$|\\mathbf{u} + \\mathbf{v}| \\geq |\\mathbf{u}| + |\\mathbf{v}|$',
      '$|\\mathbf{u} + \\mathbf{v}| \\leq |\\mathbf{u}| + |\\mathbf{v}|$',
      '$|\\mathbf{u} + \\mathbf{v}| = |\\mathbf{u}| - |\\mathbf{v}|$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The length of the sum is at most the sum of the lengths.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Cauchy-Schwarz inequality follows from the fact that:',
    options: [
      '$\\sin\\theta \\leq 1$',
      '$\\tan\\theta$ is bounded',
      '$\\theta$ is always positive',
      '$|\\cos\\theta| \\leq 1$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since u · v = |u||v|cos θ and |cos θ| ≤ 1, we get |u · v| ≤ |u||v|.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The inner product in ℝ³ for u = (u₁, u₂, u₃) and v = (v₁, v₂, v₃) is:',
    options: [
      '$u_1v_1 + u_2v_2 + u_3v_3$',
      '$u_1v_1 + u_2v_2$',
      '$(u_1v_1, u_2v_2, u_3v_3)$',
      '$u_1 + u_2 + u_3 + v_1 + v_2 + v_3$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In ℝⁿ, the inner product sums all n products of corresponding components.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The distance formula in ℝ³ is:',
    options: [
      '$|\\mathbf{u}| = u_1^2 + u_2^2 + u_3^2$',
      '$|\\mathbf{u}| = \\sqrt{u_1^2 + u_2^2 + u_3^2}$',
      '$|\\mathbf{u}| = u_1 + u_2 + u_3$',
      '$|\\mathbf{u}| = \\sqrt{u_1 + u_2 + u_3}$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'This extends the Pythagorean theorem to three dimensions.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The algebraic proof of Cauchy-Schwarz uses the fact that (u + xv)·(u + xv) ≥ 0 is a quadratic in x with:',
    options: [
      'Positive leading coefficient',
      'Non-positive discriminant',
      'All of the above',
      'No real roots when u ≠ 0, v ≠ 0'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A non-negative quadratic with positive leading coefficient has discriminant ≤ 0.',
  },
];
