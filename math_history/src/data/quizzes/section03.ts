import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The proof that $\\sqrt{2}$ is irrational uses which technique?',
    options: [
      'Direct computation',
      'Mathematical induction',
      'Proof by contradiction',
      'Proof by exhaustion'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The classical proof assumes $\\sqrt{2}$ is rational, then derives a contradiction, proving the assumption false.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the proof of irrationality of $\\sqrt{2}$, if $p^2 = 2q^2$, why must $p$ be even?',
    options: [
      'Because $q$ is even',
      'Because $p^2$ is even, and odd² = odd',
      'Because $p > q$',
      'Because 2 is even'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $p^2 = 2q^2$, then $p^2$ is even. Since the square of an odd number is odd, $p$ must be even.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to legend, what happened to Hippasus after revealing the existence of irrational numbers?',
    options: [
      'He was celebrated as a hero',
      'He was drowned at sea',
      'He became the leader of the Pythagoreans',
      'He moved to Athens'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Legend says the Pythagoreans drowned Hippasus for revealing the scandalous existence of irrational numbers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following numbers is irrational?',
    options: [
      '$\\frac{22}{7}$',
      '$\\sqrt{4}$',
      '$\\sqrt{3}$',
      '$0.75$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sqrt{3}$ is irrational. $\\frac{22}{7}$ is rational (a fraction), $\\sqrt{4} = 2$ is rational, and $0.75 = \\frac{3}{4}$ is rational.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The discovery of irrational numbers showed that:',
    options: [
      'All numbers are rational',
      'Geometry and arithmetic are completely separate',
      'Some geometric quantities cannot be expressed as fractions',
      'The Pythagorean theorem is false'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Irrational numbers like $\\sqrt{2}$ arise from simple geometry (the diagonal of a unit square) but cannot be expressed as ratios of integers.',
  },
];
