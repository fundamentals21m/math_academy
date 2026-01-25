import type { QuizQuestion } from './types';

export const section102Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The line integral of a vector field $f$ along a path $\\alpha$ on $[a, b]$ is defined as:',
    options: [
      '$\\int_a^b f(\\alpha(t)) \\, dt
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The line integral is $\\int f \\cdot d\\alpha = \\int_a^b f[\\alpha(t)] \\cdot \\alpha\'(t) \\, dt$, the integral of the dot product of the field evaluated along the path with the path\'s tangent vector.',
  },
      '$\\int_a^b f[\\alpha(t)] \\cdot \\alpha\\'(t) \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The line integral is $\\int f \\cdot d\\alpha = \\int_a^b f[\\alpha(t)] \\cdot \\alpha\'(t) \\, dt$, the integral of the dot product of the field evaluated along the path with the path\'s tangent vector.',
  },
      '$\\int_a^b \\|f(\\alpha(t))\\| \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The line integral is $\\int f \\cdot d\\alpha = \\int_a^b f[\\alpha(t)] \\cdot \\alpha\'(t) \\, dt$, the integral of the dot product of the field evaluated along the path with the path\'s tangent vector.',
  },
      '$\\int_a^b f(t) \\cdot \\alpha(t) \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The line integral is $\\int f \\cdot d\\alpha = \\int_a^b f[\\alpha(t)] \\cdot \\alpha\'(t) \\, dt$, the integral of the dot product of the field evaluated along the path with the path\'s tangent vector.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The line integral is $\\int f \\cdot d\\alpha = \\int_a^b f[\\alpha(t)] \\cdot \\alpha\'(t) \\, dt$, the integral of the dot product of the field evaluated along the path with the path\'s tangent vector.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In component form with $f = (f_1, \\ldots, f_n)$ and $\\alpha = (\\alpha_1, \\ldots, \\alpha_n)$, the line integral equals:',
    options: [
      '$\\sum_{k=1}^n f_k[\\alpha(t)]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In components: $\\int f \\cdot d\\alpha = \\sum_{k=1}^n \\int_a^b f_k[\\alpha(t)] \\alpha_k\'(t) \\, dt$, which is also written as $\\int f_1 \\, d\\alpha_1 + \\cdots + f_n \\, d\\alpha_n$.',
  },
      '$\\sum_{k=1}^n \\int_a^b f_k[\\alpha(t)] \\alpha_k\\'(t) \\, dt
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In components: $\\int f \\cdot d\\alpha = \\sum_{k=1}^n \\int_a^b f_k[\\alpha(t)] \\alpha_k\'(t) \\, dt$, which is also written as $\\int f_1 \\, d\\alpha_1 + \\cdots + f_n \\, d\\alpha_n$.',
  },
      '$\\int_a^b (f_1 + \\cdots + f_n) \\, dt
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In components: $\\int f \\cdot d\\alpha = \\sum_{k=1}^n \\int_a^b f_k[\\alpha(t)] \\alpha_k\'(t) \\, dt$, which is also written as $\\int f_1 \\, d\\alpha_1 + \\cdots + f_n \\, d\\alpha_n$.',
  },
      '$\\prod_{k=1}^n \\int_a^b f_k[\\alpha(t)] \\, dt
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In components: $\\int f \\cdot d\\alpha = \\sum_{k=1}^n \\int_a^b f_k[\\alpha(t)] \\alpha_k\'(t) \\, dt$, which is also written as $\\int f_1 \\, d\\alpha_1 + \\cdots + f_n \\, d\\alpha_n$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In components: $\\int f \\cdot d\\alpha = \\sum_{k=1}^n \\int_a^b f_k[\\alpha(t)] \\alpha_k\'(t) \\, dt$, which is also written as $\\int f_1 \\, d\\alpha_1 + \\cdots + f_n \\, d\\alpha_n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\alpha(a) = \\alpha(b)$ (closed path), the line integral is often denoted:',
    options: [
      '$\\iint
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The symbol $\\oint$ is used to indicate integration along a closed path, where the starting and ending points coincide.',
  },
      '$\\int
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The symbol $\\oint$ is used to indicate integration along a closed path, where the starting and ending points coincide.',
  },
      '$\\oint
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The symbol $\\oint$ is used to indicate integration along a closed path, where the starting and ending points coincide.',
  },
      '$\\partial
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The symbol $\\oint$ is used to indicate integration along a closed path, where the starting and ending points coincide.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The symbol $\\oint$ is used to indicate integration along a closed path, where the starting and ending points coincide.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $f(x, y) = \\sqrt{y}\\mathbf{i} + (x^3 + y)\\mathbf{j}$, integrating from $(0, 0)$ to $(1, 1)$ along different paths:',
    options: [
      'May give different values depending on the path',
      'Always gives the same value',
      'Is always zero',
      'Is undefined',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In general, line integrals depend on the path, not just the endpoints. The example in the section shows two different paths give values $17/12$ and $59/42$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In two dimensions, the line integral notation $\\int_C f_1 \\, dx + f_2 \\, dy$ means:',
    options: [
      '$\\int_a^b [f_1(\\alpha(t))\\alpha_1\\'(t) + f_2(\\alpha(t))\\alpha_2\\'(t)] \\, dt
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The notation $\\int_C f_1 \\, dx + f_2 \\, dy$ is shorthand for $\\int_a^b [f_1(\\alpha(t))\\alpha_1\'(t) + f_2(\\alpha(t))\\alpha_2\'(t)] \\, dt$ where $\\alpha = (\\alpha_1, \\alpha_2)$ parametrizes $C$.',
  },
      '$\\int_C (f_1 + f_2)(dx + dy)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The notation $\\int_C f_1 \\, dx + f_2 \\, dy$ is shorthand for $\\int_a^b [f_1(\\alpha(t))\\alpha_1\'(t) + f_2(\\alpha(t))\\alpha_2\'(t)] \\, dt$ where $\\alpha = (\\alpha_1, \\alpha_2)$ parametrizes $C$.',
  },
      '$f_1 \\cdot f_2 \\cdot \\text{length of } C
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The notation $\\int_C f_1 \\, dx + f_2 \\, dy$ is shorthand for $\\int_a^b [f_1(\\alpha(t))\\alpha_1\'(t) + f_2(\\alpha(t))\\alpha_2\'(t)] \\, dt$ where $\\alpha = (\\alpha_1, \\alpha_2)$ parametrizes $C$.',
  },
      '$\\int_a^b f_1 \\, dt + \\int_a^b f_2 \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The notation $\\int_C f_1 \\, dx + f_2 \\, dy$ is shorthand for $\\int_a^b [f_1(\\alpha(t))\\alpha_1\'(t) + f_2(\\alpha(t))\\alpha_2\'(t)] \\, dt$ where $\\alpha = (\\alpha_1, \\alpha_2)$ parametrizes $C$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The notation $\\int_C f_1 \\, dx + f_2 \\, dy$ is shorthand for $\\int_a^b [f_1(\\alpha(t))\\alpha_1\'(t) + f_2(\\alpha(t))\\alpha_2\'(t)] \\, dt$ where $\\alpha = (\\alpha_1, \\alpha_2)$ parametrizes $C$.',
  },
];
