import type { QuizQuestion } from './types';

export const section67Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The law of exponents $e^{A+B} = e^A e^B$ holds for matrices when:',
    options: [
      'Always',
      'When $A$ and $B$ are both diagonal',
      'When $A$ and $B$ are both symmetric',
      'When $AB = BA$ (commuting matrices)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The law $e^{A+B} = e^A e^B$ holds if and only if $A$ and $B$ commute: $AB = BA$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the matrix exponential, $e^{tA} \\cdot e^{sA}$ equals:',
    options: [
      '$e^{tsA}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $tA$ and $sA$ commute (both are scalar multiples of $A$), we have $e^{tA}e^{sA} = e^{(t+s)A}$.',
  },
      '$e^{tA + sA}$ only if $t = s
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $tA$ and $sA$ commute (both are scalar multiples of $A$), we have $e^{tA}e^{sA} = e^{(t+s)A}$.',
  },
      '$e^{(t+s)A}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $tA$ and $sA$ commute (both are scalar multiples of $A$), we have $e^{tA}e^{sA} = e^{(t+s)A}$.',
  },
      '$(e^A)^{t+s}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $tA$ and $sA$ commute (both are scalar multiples of $A$), we have $e^{tA}e^{sA} = e^{(t+s)A}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $tA$ and $sA$ commute (both are scalar multiples of $A$), we have $e^{tA}e^{sA} = e^{(t+s)A}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The inverse of $e^A$ is:',
    options: [
      '$e^{-A}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Using the law of exponents: $e^A \\cdot e^{-A} = e^{A + (-A)} = e^O = I$, so $(e^A)^{-1} = e^{-A}$.',
  },
      '$e^{1/A}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Using the law of exponents: $e^A \\cdot e^{-A} = e^{A + (-A)} = e^O = I$, so $(e^A)^{-1} = e^{-A}$.',
  },
      '$(e^A)^T
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Using the law of exponents: $e^A \\cdot e^{-A} = e^{A + (-A)} = e^O = I$, so $(e^A)^{-1} = e^{-A}$.',
  },
      '$I - A
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Using the law of exponents: $e^A \\cdot e^{-A} = e^{A + (-A)} = e^O = I$, so $(e^A)^{-1} = e^{-A}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Using the law of exponents: $e^A \\cdot e^{-A} = e^{A + (-A)} = e^O = I$, so $(e^A)^{-1} = e^{-A}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $A$ and $B$ do not commute, then in general:',
    options: [
      '$e^{A+B} = e^A e^B
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $AB \\neq BA$, the simple law of exponents fails. The correct formula involves the Baker-Campbell-Hausdorff series.',
  },
      '$e^{A+B} \\neq e^A e^B
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $AB \\neq BA$, the simple law of exponents fails. The correct formula involves the Baker-Campbell-Hausdorff series.',
  },
      '$e^{A+B} = e^B e^A
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $AB \\neq BA$, the simple law of exponents fails. The correct formula involves the Baker-Campbell-Hausdorff series.',
  },
      '$e^{A+B}$ does not exist',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $AB \\neq BA$, the simple law of exponents fails. The correct formula involves the Baker-Campbell-Hausdorff series.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The derivative $\\frac{d}{dt}e^{tA}$ equals:',
    options: [
      '$e^{tA}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dt}e^{tA} = Ae^{tA} = e^{tA}A$ because $A$ and $e^{tA}$ commute (both are polynomials/series in $A$).',
  },
      '$Ae^{tA}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dt}e^{tA} = Ae^{tA} = e^{tA}A$ because $A$ and $e^{tA}$ commute (both are polynomials/series in $A$).',
  },
      '$e^{tA}A$ (which equals $Ae^{tA}$ since $A$ commutes with $e^{tA}$)',
      '$te^{tA}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dt}e^{tA} = Ae^{tA} = e^{tA}A$ because $A$ and $e^{tA}$ commute (both are polynomials/series in $A$).',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dt}e^{tA} = Ae^{tA} = e^{tA}A$ because $A$ and $e^{tA}$ commute (both are polynomials/series in $A$).',
  },
];
