import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is a prime number?',
    options: [
      '4',
      '17',
      '9',
      '1',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '17 is prime (only divisible by 1 and 17). 1 is not prime by definition, 4 = 2×2, and 9 = 3×3.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the prime factorization of 171?',
    options: [
      '$3 \\times 57$',
      '$3^2 \\times 19$',
      '$9 \\times 19$',
      '$3 \\times 3 \\times 17$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$171 = 3 \\times 57 = 3 \\times 3 \\times 19 = 3^2 \\times 19$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A number is divisible by 3 if:',
    options: [
      'The sum of its digits is divisible by 3',
      'Its last digit is 3',
      'It ends in 0',
      'It is odd',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A number is divisible by 3 if and only if the sum of its digits is divisible by 3.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Using the Euclidean algorithm, what is GCF(252, 105)?',
    correctAnswer: 21,
    numericRange: { min: 0, max: 300, precision: 0 },
    difficulty: 'medium',
    explanation: '252 = 2×105 + 42; 105 = 2×42 + 21; 42 = 2×21 + 0. So GCF = 21.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is $\\frac{252}{105}$ reduced to lowest terms?',
    options: [
      '$\\frac{126}{52.5}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'GCF(252, 105) = 21. $\\frac{252}{105} = \\frac{252÷21}{105÷21} = \\frac{12}{5}$.',
  },
      '$\\frac{36}{15}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'GCF(252, 105) = 21. $\\frac{252}{105} = \\frac{252÷21}{105÷21} = \\frac{12}{5}$.',
  },
      '$\\frac{12}{5}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'GCF(252, 105) = 21. $\\frac{252}{105} = \\frac{252÷21}{105÷21} = \\frac{12}{5}$.',
  },
      '$\\frac{84}{35}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'GCF(252, 105) = 21. $\\frac{252}{105} = \\frac{252÷21}{105÷21} = \\frac{12}{5}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'GCF(252, 105) = 21. $\\frac{252}{105} = \\frac{252÷21}{105÷21} = \\frac{12}{5}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A rational number is a number that:',
    options: [
      'Has a terminating decimal expansion only',
      'Is always positive',
      'Cannot be negative',
      'Can be expressed as $\\frac{p}{q}$ where $p$ and $q$ are integers and $q \\neq 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A rational number is any number expressible as a ratio of two integers (with non-zero denominator).',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A rational number is any number expressible as a ratio of two integers (with non-zero denominator).',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'The decimal $0.\\overline{18}$ (repeating) equals:',
    options: [
      '$\\frac{18}{100}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$0.\\overline{18} = \\frac{18}{99} = \\frac{2}{11}$.',
  },
      '$\\frac{18}{99}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$0.\\overline{18} = \\frac{18}{99} = \\frac{2}{11}$.',
  },
      '$\\frac{2}{11}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$0.\\overline{18} = \\frac{18}{99} = \\frac{2}{11}$.',
  },
      '$\\frac{9}{50}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$0.\\overline{18} = \\frac{18}{99} = \\frac{2}{11}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$0.\\overline{18} = \\frac{18}{99} = \\frac{2}{11}$.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Which of the following is an irrational number?',
    options: [
      '$\\sqrt{2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ cannot be expressed as a ratio of integers. The others are all rational.',
  },
      '$\\frac{22}{7}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ cannot be expressed as a ratio of integers. The others are all rational.',
  },
      '$0.333...
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ cannot be expressed as a ratio of integers. The others are all rational.',
  },
      '$-5
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ cannot be expressed as a ratio of integers. The others are all rational.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sqrt{2}$ cannot be expressed as a ratio of integers. The others are all rational.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What distinguishes the decimal expansion of an irrational number?',
    options: [
      'It always terminates',
      'It always repeats',
      'It contains only odd digits',
      'It neither terminates nor repeats'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Irrational numbers have decimal expansions that neither terminate nor repeat.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'Why is 1 not considered a prime number?',
    options: [
      'Because it is odd',
      'Because it is too small',
      'Because it divides every integer',
      'Because it has only one positive divisor (itself)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A prime must have exactly two distinct positive divisors: 1 and itself. The number 1 has only one divisor.',
  },
];
