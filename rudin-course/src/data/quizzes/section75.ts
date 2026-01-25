import type { QuizQuestion } from './types';

export const section75Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A differential form $\\omega$ is called closed if:',
    options: [
      '$\\omega$ has compact support',
      '$\\omega = df$ for some function $f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A form is closed if its exterior derivative vanishes: $d\\omega = 0$. This is a local condition analogous to a vector field being curl-free.',
  },
      '$d\\omega = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A form is closed if its exterior derivative vanishes: $d\\omega = 0$. This is a local condition analogous to a vector field being curl-free.',
  },
      '$\\int_c \\omega = 0$ for all cycles $c
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A form is closed if its exterior derivative vanishes: $d\\omega = 0$. This is a local condition analogous to a vector field being curl-free.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A form is closed if its exterior derivative vanishes: $d\\omega = 0$. This is a local condition analogous to a vector field being curl-free.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A differential form $\\omega$ is called exact if:',
    options: [
      '$d\\omega = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A form is exact if it is the exterior derivative of another form: $\\omega = d\\eta$. Exact forms are analogous to conservative vector fields.',
  },
      '$\\omega$ integrates to zero over any closed curve',
      '$\\omega$ is a polynomial in the coordinate differentials',
      '$\\omega = d\\eta$ for some form $\\eta
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A form is exact if it is the exterior derivative of another form: $\\omega = d\\eta$. Exact forms are analogous to conservative vector fields.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A form is exact if it is the exterior derivative of another form: $\\omega = d\\eta$. Exact forms are analogous to conservative vector fields.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Every exact form is closed because:',
    options: [
      'Closed forms have compact support',
      '$d^2 = 0$, so $d(d\\eta) = 0$',
      'Exactness implies smoothness',
      'The integral over boundaries vanishes'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $\\omega = d\\eta$, then $d\\omega = d(d\\eta) = 0$ by the fundamental property $d^2 = 0$. So every exact form is automatically closed.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Poincaré lemma states that on a contractible domain:',
    options: [
      'Every closed form is exact',
      'Every form is closed',
      'Every exact form is closed',
      'No form is exact',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Poincaré lemma says that on contractible (star-shaped) domains, closed = exact. This fails on domains with "holes," like $\\mathbb{R}^2 \\setminus \\{0\\}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The 1-form $\\omega = \\frac{-y\\,dx + x\\,dy}{x^2 + y^2}$ on $\\mathbb{R}^2 \\setminus \\{0\\}$ is:',
    options: [
      'Not defined',
      'Exact',
      'Closed but not exact',
      'Neither closed nor exact',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'This form equals $d\\theta$ locally (where $\\theta = \\arctan(y/x)$), so it is closed. But $\\int_{\\text{circle}} \\omega = 2\\pi \\neq 0$, so it is not exact on the punctured plane.',
  },
];
