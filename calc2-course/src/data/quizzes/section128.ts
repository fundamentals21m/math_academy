import type { QuizQuestion } from './types';

export const section128Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An open connected set $S$ in the plane is simply connected if:',
    options: [
      'It has finite area',
      'For every Jordan curve in $S$, the interior of the curve is also in $S
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A set is simply connected if it has no "holes"—every Jordan curve lying in the set has its interior also contained in the set.',
  },
      'It is bounded',
      'It contains no isolated points',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A set is simply connected if it has no "holes"—every Jordan curve lying in the set has its interior also contained in the set.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An annulus (region between two concentric circles) is:',
    options: [
      'Simply connected',
      'Convex',
      'Not connected',
      'Multiply connected (not simply connected)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An annulus is multiply connected because a circle centered at the common center with intermediate radius lies in the annulus, but its interior (containing the inner disk) is not in the annulus.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'On a simply connected domain, the condition $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ is:',
    options: [
      'Sufficient but not necessary',
      'Necessary but not sufficient for $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j}$ to be a gradient',
      'Both necessary and sufficient',
      'Neither necessary nor sufficient',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 11.11: On a simply connected domain, $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ is both necessary and sufficient for $\\mathbf{F}$ to be a gradient.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The vector field $\\mathbf{F} = \\frac{-y}{x^2+y^2}\\mathbf{i} + \\frac{x}{x^2+y^2}\\mathbf{j}$ satisfies $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ on $\\mathbb{R}^2 - \\{(0,0)\\}$, but is NOT a gradient there because:',
    options: [
      'The field is not continuous',
      'The domain is not simply connected (it has a "hole" at the origin)',
      'The partial derivatives are not continuous',
      'The field is unbounded',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The punctured plane $\\mathbb{R}^2 - \\{(0,0)\\}$ is multiply connected (has a hole at the origin). The equality of partials is necessary but not sufficient on such domains.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The proof that the condition $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ implies path independence on simply connected domains uses:',
    options: [
      'Green\\\\'s theorem applied to regions bounded by different paths',
      'The implicit function theorem',
      'The inverse function theorem',
      'Integration by parts',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The proof uses Green\'s theorem: if two paths join the same points, they form a closed curve bounding a region in $S$. By Green\'s theorem, the integral around this curve is zero, proving path independence.',
  },
];
