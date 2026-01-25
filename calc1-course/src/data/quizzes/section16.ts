import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The volume of a solid of revolution using the disk method is:',
    options: [
      '$\\int_a^b \\pi[f(x)]^2\\,dx
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Disk method: $V = \\int_a^b \\pi[f(x)]^2\\,dx$ (sum of disk volumes).',
  },
      '$\\int_a^b f(x)\\,dx
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Disk method: $V = \\int_a^b \\pi[f(x)]^2\\,dx$ (sum of disk volumes).',
  },
      '$\\int_a^b 2\\pi f(x)\\,dx
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Disk method: $V = \\int_a^b \\pi[f(x)]^2\\,dx$ (sum of disk volumes).',
  },
      '$\\int_a^b [f(x)]^2\\,dx
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Disk method: $V = \\int_a^b \\pi[f(x)]^2\\,dx$ (sum of disk volumes).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Disk method: $V = \\int_a^b \\pi[f(x)]^2\\,dx$ (sum of disk volumes).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When rotating $y = f(x)$ about the $x$-axis, each disk has radius:',
    options: [
      '$x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The radius of each disk is the $y$-value, which is $f(x)$.',
  },
      '$dx
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The radius of each disk is the $y$-value, which is $f(x)$.',
  },
      '$f(x)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The radius of each disk is the $y$-value, which is $f(x)$.',
  },
      '$\\pi f(x)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The radius of each disk is the $y$-value, which is $f(x)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The radius of each disk is the $y$-value, which is $f(x)$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'The volume of a sphere of radius $R$ is $\\frac{4}{3}\\pi R^3$. What is the volume when $R = 3$? (Give answer as a multiple of $\\pi$)',
    correctAnswer: 36,
    numericRange: { min: 0, max: 200, precision: 0 },
    difficulty: 'medium',
    explanation: '$V = \\frac{4}{3}\\pi(3)^3 = \\frac{4}{3}\\pi \\cdot 27 = 36\\pi$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The washer method is used when:',
    options: [
      'The region has no hole',
      'The region has a hole (inner and outer radius)',
      'Rotating about the $y$-axis only',
      'The function is negative',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Washer method: $V = \\int_a^b \\pi([R(x)]^2 - [r(x)]^2)\\,dx$ for regions with holes.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The shell method formula when rotating about the $y$-axis is:',
    options: [
      '$\\int_a^b \\pi[f(x)]^2\\,dx
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Shell method: $V = \\int_a^b 2\\pi x f(x)\\,dx$ (circumference × height × thickness).',
  },
      '$\\int_a^b f(x)\\,dx
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Shell method: $V = \\int_a^b 2\\pi x f(x)\\,dx$ (circumference × height × thickness).',
  },
      '$\\int_a^b x\\,dx
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Shell method: $V = \\int_a^b 2\\pi x f(x)\\,dx$ (circumference × height × thickness).',
  },
      '$\\int_a^b 2\\pi x f(x)\\,dx
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Shell method: $V = \\int_a^b 2\\pi x f(x)\\,dx$ (circumference × height × thickness).',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Shell method: $V = \\int_a^b 2\\pi x f(x)\\,dx$ (circumference × height × thickness).',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'A cone has base radius $r$ and height $h$. Its volume is $\\frac{1}{3}\\pi r^2 h$. If $r = 3$ and $h = 4$, what is the volume? (Answer as multiple of $\\pi$)',
    correctAnswer: 12,
    numericRange: { min: 0, max: 200, precision: 0 },
    difficulty: 'medium',
    explanation: '$V = \\frac{1}{3}\\pi(3)^2(4) = \\frac{1}{3}\\pi \\cdot 36 = 12\\pi$.',
  },
];
