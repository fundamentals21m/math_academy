import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Integration by parts states $\\int u\\,dv = ?$',
    options: [
      '$uv - \\int v\\,du
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integration by parts: $\\int u\\,dv = uv - \\int v\\,du$.',
  },
      '$uv + \\int v\\,du
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Integration by parts: $\\int u\\,dv = uv - \\int v\\,du$.',
  },
      '$\\int u \\cdot \\int dv
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Integration by parts: $\\int u\\,dv = uv - \\int v\\,du$.',
  },
      '$u\\'v - \\int u\\'v\\'
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Integration by parts: $\\int u\\,dv = uv - \\int v\\,du$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Integration by parts: $\\int u\\,dv = uv - \\int v\\,du$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To evaluate $\\int x e^x\\,dx$, we should choose:',
    options: [
      '$u = e^x$, $dv = x\\,dx
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Let $u = x$ (so $du = dx$) and $dv = e^x\\,dx$ (so $v = e^x$).',
  },
      '$u = xe^x$, $dv = dx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $u = x$ (so $du = dx$) and $dv = e^x\\,dx$ (so $v = e^x$).',
  },
      'Substitution instead',
      '$u = x$, $dv = e^x\\,dx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $u = x$ (so $du = dx$) and $dv = e^x\\,dx$ (so $v = e^x$).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $u = x$ (so $du = dx$) and $dv = e^x\\,dx$ (so $v = e^x$).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: '$\\int x e^x\\,dx = ?$',
    options: [
      '$xe^x + e^x + C$',
      '$xe^x - e^x + C$',
      '$x^2e^x/2 + C$',
      '$e^x + C$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By parts: $xe^x - \\int e^x\\,dx = xe^x - e^x + C$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The LIATE rule suggests choosing $u$ in order of:',
    options: [
      'Algebraic, Trig, Inverse trig, Log, Exponential',
      'Exponential, Trig, Algebraic, Inverse trig, Log',
      'Log, Inverse trig, Algebraic, Trig, Exponential',
      'Any order works equally well'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'LIATE: Logs, Inverse trig, Algebraic, Trig, Exponential (preference for $u$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$\\int \\ln x\\,dx = ?$',
    options: [
      '$1/x + C$',
      '$x\\ln x + x + C$',
      '$\\ln x / x + C$',
      '$x\\ln x - x + C$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Let $u = \\ln x$, $dv = dx$. Then $\\int \\ln x\\,dx = x\\ln x - x + C$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Integration by parts may need to be applied:',
    options: [
      'Exactly once',
      'Multiple times for some integrals',
      'Never more than twice',
      'Only for polynomials',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Some integrals (like $\\int x^2 e^x\\,dx$) require multiple applications.',
  },
];
