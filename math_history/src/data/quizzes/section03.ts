import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The proof that $\\sqrt{2}$ is irrational uses which technique?',
    options: [
      'Proof by contradiction',
      'Direct computation',
      'Mathematical induction',
      'Proof by exhaustion',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The classical proof assumes $\\sqrt{2}$ is rational, then derives a contradiction, proving the assumption false.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the proof of irrationality of $\\sqrt{2}$, if $p^2 = 2q^2$, why must $p$ be even?',
    options: [
      'Because $p^2$ is even, and odd² = odd',
      'Because $q$ is even',
      'Because 2 is even',
      'Because $p > q
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $p^2 = 2q^2$, then $p^2$ is even. Since the square of an odd number is odd, $p$ must be even.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $p^2 = 2q^2$, then $p^2$ is even. Since the square of an odd number is odd, $p$ must be even.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to legend, what happened to Hippasus after revealing the existence of irrational numbers?',
    options: [
      'He was celebrated as a hero',
      'He became the leader of the Pythagoreans',
      'He moved to Athens',
      'He was drowned at sea',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Legend says the Pythagoreans drowned Hippasus for revealing the scandalous existence of irrational numbers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following numbers is irrational?',
    options: [
      '$\\frac{22}{7}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\sqrt{3}$ is irrational. $\\frac{22}{7}$ is rational (a fraction), $\\sqrt{4} = 2$ is rational, and $0.75 = \\frac{3}{4}$ is rational.',
  },
      '$\\sqrt{4}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sqrt{3}$ is irrational. $\\frac{22}{7}$ is rational (a fraction), $\\sqrt{4} = 2$ is rational, and $0.75 = \\frac{3}{4}$ is rational.',
  },
      '$0.75
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sqrt{3}$ is irrational. $\\frac{22}{7}$ is rational (a fraction), $\\sqrt{4} = 2$ is rational, and $0.75 = \\frac{3}{4}$ is rational.',
  },
      '$\\sqrt{3}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sqrt{3}$ is irrational. $\\frac{22}{7}$ is rational (a fraction), $\\sqrt{4} = 2$ is rational, and $0.75 = \\frac{3}{4}$ is rational.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\sqrt{3}$ is irrational. $\\frac{22}{7}$ is rational (a fraction), $\\sqrt{4} = 2$ is rational, and $0.75 = \\frac{3}{4}$ is rational.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The discovery of irrational numbers showed that:',
    options: [
      'All numbers are rational',
      'Some geometric quantities cannot be expressed as fractions',
      'Geometry and arithmetic are completely separate',
      'The Pythagorean theorem is false',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Irrational numbers like $\\sqrt{2}$ arise from simple geometry (the diagonal of a unit square) but cannot be expressed as ratios of integers.',
  },
];
