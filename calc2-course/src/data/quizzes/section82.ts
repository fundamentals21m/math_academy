import type { QuizQuestion } from './types';

export const section82Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If all directional derivatives of $f$ exist at $\\mathbf{a}$, then $f$ is:',
    options: [
      'Necessarily continuous at $\\mathbf{a}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Existence of all directional derivatives does not guarantee continuity. Classic example: $f(x,y) = \\frac{x^2y}{x^4+y^2}$ with $f(0,0)=0$.',
  },
      'Not necessarily continuous at $\\mathbf{a}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Existence of all directional derivatives does not guarantee continuity. Classic example: $f(x,y) = \\frac{x^2y}{x^4+y^2}$ with $f(0,0)=0$.',
  },
      'Necessarily differentiable at $\\mathbf{a}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Existence of all directional derivatives does not guarantee continuity. Classic example: $f(x,y) = \\frac{x^2y}{x^4+y^2}$ with $f(0,0)=0$.',
  },
      'Necessarily constant near $\\mathbf{a}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Existence of all directional derivatives does not guarantee continuity. Classic example: $f(x,y) = \\frac{x^2y}{x^4+y^2}$ with $f(0,0)=0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Existence of all directional derivatives does not guarantee continuity. Classic example: $f(x,y) = \\frac{x^2y}{x^4+y^2}$ with $f(0,0)=0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For $f(x,y) = \\begin{cases} \\frac{xy^2}{x^2+y^4} & (x,y) \\neq (0,0) \\\\ 0 & (x,y) = (0,0) \\end{cases}$, the directional derivatives at origin:',
    options: [
      'Do not exist in any direction',
      'All equal zero',
      'All equal 1',
      'Exist but $f$ is not continuous at $(0,0)$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Along any line through origin, the limit is 0, so all directional derivatives are 0. But along $x = y^2$, $f \\to 1/2$, so $f$ is discontinuous.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $f$ to be continuous at $\\mathbf{a}$, having all partial derivatives exist at $\\mathbf{a}$ is:',
    options: [
      'Necessary',
      'Sufficient',
      'Neither necessary nor sufficient',
      'Both necessary and sufficient',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Partial derivatives can exist without continuity, and continuity can hold without partial derivatives existing.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is differentiable at $\\mathbf{a}$, then all directional derivatives exist and:',
    options: [
      'Equal $\\nabla f(\\mathbf{a}) \\cdot \\mathbf{u}$ for direction $\\mathbf{u}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Differentiability implies directional derivatives exist and can be computed via the gradient: $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}$.',
  },
      'Are equal',
      'Are zero',
      'Are undefined',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Differentiability implies directional derivatives exist and can be computed via the gradient: $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Differentiability of $f$ at $\\mathbf{a}$ implies:',
    options: [
      'That $f$ is constant',
      'Boundedness of $f
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Differentiability at a point implies continuity at that point (but the converse is false).',
  },
      'That all partial derivatives are zero',
      'Continuity at $\\mathbf{a}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Differentiability at a point implies continuity at that point (but the converse is false).',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Differentiability at a point implies continuity at that point (but the converse is false).',
  },
];
