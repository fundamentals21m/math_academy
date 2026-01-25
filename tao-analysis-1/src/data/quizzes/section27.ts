import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For $x > 0$ and $\\alpha \\in \\mathbb{R}$, how is $x^\\alpha$ defined using the exponential function?',
    options: [
      '$x^\\alpha = e^{\\alpha \\ln x}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For any real exponent $\\alpha$ and $x > 0$, we define $x^\\alpha = e^{\\alpha \\ln x}$. This extends exponentiation from rational to real exponents.',
  },
      '$x^\\alpha = (e^x)^\\alpha
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For any real exponent $\\alpha$ and $x > 0$, we define $x^\\alpha = e^{\\alpha \\ln x}$. This extends exponentiation from rational to real exponents.',
  },
      '$x^\\alpha = \\alpha e^{\\ln x}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For any real exponent $\\alpha$ and $x > 0$, we define $x^\\alpha = e^{\\alpha \\ln x}$. This extends exponentiation from rational to real exponents.',
  },
      '$x^\\alpha = \\ln(e^{\\alpha x})
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For any real exponent $\\alpha$ and $x > 0$, we define $x^\\alpha = e^{\\alpha \\ln x}$. This extends exponentiation from rational to real exponents.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For any real exponent $\\alpha$ and $x > 0$, we define $x^\\alpha = e^{\\alpha \\ln x}$. This extends exponentiation from rational to real exponents.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which property holds for real exponentiation when $x, y > 0$ and $\\alpha, \\beta \\in \\mathbb{R}$?',
    options: [
      '$x^{\\alpha + \\beta} = x^\\alpha + x^\\beta
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The law $x^{\\alpha + \\beta} = x^\\alpha \\cdot x^\\beta$ holds for real exponents. This follows from $e^{(\\alpha+\\beta)\\ln x} = e^{\\alpha \\ln x} \\cdot e^{\\beta \\ln x}$.',
  },
      '$(xy)^\\alpha = x^\\alpha + y^\\alpha
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The law $x^{\\alpha + \\beta} = x^\\alpha \\cdot x^\\beta$ holds for real exponents. This follows from $e^{(\\alpha+\\beta)\\ln x} = e^{\\alpha \\ln x} \\cdot e^{\\beta \\ln x}$.',
  },
      '$x^{\\alpha\\beta} = x^\\alpha \\cdot x^\\beta
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The law $x^{\\alpha + \\beta} = x^\\alpha \\cdot x^\\beta$ holds for real exponents. This follows from $e^{(\\alpha+\\beta)\\ln x} = e^{\\alpha \\ln x} \\cdot e^{\\beta \\ln x}$.',
  },
      '$x^{\\alpha + \\beta} = x^\\alpha \\cdot x^\\beta
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The law $x^{\\alpha + \\beta} = x^\\alpha \\cdot x^\\beta$ holds for real exponents. This follows from $e^{(\\alpha+\\beta)\\ln x} = e^{\\alpha \\ln x} \\cdot e^{\\beta \\ln x}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The law $x^{\\alpha + \\beta} = x^\\alpha \\cdot x^\\beta$ holds for real exponents. This follows from $e^{(\\alpha+\\beta)\\ln x} = e^{\\alpha \\ln x} \\cdot e^{\\beta \\ln x}$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is $4^{3/2}$?',
    correctAnswer: 8,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$4^{3/2} = (4^{1/2})^3 = 2^3 = 8$. Alternatively, $4^{3/2} = (4^3)^{1/2} = 64^{1/2} = 8$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $x > 0$ and $\\alpha \\in \\mathbb{R}$, the function $f(x) = x^\\alpha$ is:',
    options: [
      'Continuous only for rational $\\alpha
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $x^\\alpha = e^{\\alpha \\ln x}$ is a composition of continuous functions ($\\ln$ and $\\exp$), it is continuous on $(0, \\infty)$ for all real $\\alpha$.',
  },
      'Continuous only for $\\alpha > 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $x^\\alpha = e^{\\alpha \\ln x}$ is a composition of continuous functions ($\\ln$ and $\\exp$), it is continuous on $(0, \\infty)$ for all real $\\alpha$.',
  },
      'Continuous on $(0, \\infty)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $x^\\alpha = e^{\\alpha \\ln x}$ is a composition of continuous functions ($\\ln$ and $\\exp$), it is continuous on $(0, \\infty)$ for all real $\\alpha$.',
  },
      'Discontinuous at $x = 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $x^\\alpha = e^{\\alpha \\ln x}$ is a composition of continuous functions ($\\ln$ and $\\exp$), it is continuous on $(0, \\infty)$ for all real $\\alpha$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $x^\\alpha = e^{\\alpha \\ln x}$ is a composition of continuous functions ($\\ln$ and $\\exp$), it is continuous on $(0, \\infty)$ for all real $\\alpha$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is $\\lim_{\\alpha \\to 0} x^\\alpha$ for fixed $x > 0$?',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'As $\\alpha \\to 0$, $x^\\alpha = e^{\\alpha \\ln x} \\to e^0 = 1$. This holds for any $x > 0$.',
  },
      '$x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'As $\\alpha \\to 0$, $x^\\alpha = e^{\\alpha \\ln x} \\to e^0 = 1$. This holds for any $x > 0$.',
  },
      '$e
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'As $\\alpha \\to 0$, $x^\\alpha = e^{\\alpha \\ln x} \\to e^0 = 1$. This holds for any $x > 0$.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'As $\\alpha \\to 0$, $x^\\alpha = e^{\\alpha \\ln x} \\to e^0 = 1$. This holds for any $x > 0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'As $\\alpha \\to 0$, $x^\\alpha = e^{\\alpha \\ln x} \\to e^0 = 1$. This holds for any $x > 0$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $2^x = 8$, what is $x$?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$2^x = 8 = 2^3$, so $x = 3$. This can also be found using logarithms: $x = \\log_2 8 = 3$.',
  },
];
