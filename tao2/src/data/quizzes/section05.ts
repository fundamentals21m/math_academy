import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: X \\to Y$ between metric spaces is continuous at $x_0$ if:',
    options: [
      'For every $\\varepsilon > 0$, there exists $\\delta > 0$ such that $d_X(x, x_0) < \\delta$ implies $d_Y(f(x), f(x_0)) < \\varepsilon$',
      '$f$ maps open sets to open sets',
      '$f$ is bounded near $x_0$',
      '$f(x_0)$ exists'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This is the $\\varepsilon$-$\\delta$ definition of continuity at a point in metric spaces.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which characterization of continuity is TRUE? A function $f: X \\to Y$ is continuous if and only if:',
    options: [
      'The preimage of every open set is open',
      'The image of every open set is open',
      'The preimage of every closed set is open',
      'The image of every closed set is closed'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A function is continuous iff the preimage of every open set is open. Equivalently, the preimage of every closed set is closed.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f: X \\to Y$ and $g: Y \\to Z$ are continuous, then $g \\circ f: X \\to Z$ is:',
    options: [
      'Not necessarily continuous',
      'Continuous',
      'Continuous only if $f$ is surjective',
      'Continuous only if $g$ is injective'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The composition of continuous functions is continuous.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A function $f: X \\to Y$ is continuous at $x_0$ if and only if:',
    options: [
      'For every sequence $(x_n)$ in $X$, $f(x_n)$ converges',
      'For every sequence $(x_n) \\to x_0$, we have $f(x_n) \\to f(x_0)$',
      '$f$ is bounded',
      '$f$ maps Cauchy sequences to Cauchy sequences'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This is the sequential characterization of continuity: $f$ is continuous at $x_0$ iff it preserves limits of sequences converging to $x_0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The function $f: \\mathbf{R} \\to \\mathbf{R}$ defined by $f(x) = 1/x$ for $x \\neq 0$ and $f(0) = 0$ is:',
    options: [
      'Continuous everywhere',
      'Continuous except at $x = 0$',
      'Discontinuous everywhere',
      'Continuous only on $(0, \\infty)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The function $1/x$ is continuous on its natural domain. Defining $f(0) = 0$ creates a discontinuity at 0 since $\\lim_{x \\to 0} 1/x$ does not exist.',
  },
];
