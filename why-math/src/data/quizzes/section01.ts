import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which property states that $a + b = b + a$?',
    options: [
      'Associative Law',
      'Commutative Law',
      'Distributive Law',
      'Identity Law'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Commutative Law states that the order of operands does not matter for addition and multiplication.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the value of $3 \\times (4 + 5)$ using the distributive law?',
    options: [
      '$3 \\times 4 + 5 = 17$',
      '$3 + 4 \\times 5 = 23$',
      '$3 \\times 4 + 3 \\times 5 = 27$',
      '$(3 + 4) \\times 5 = 35$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The distributive law: $a \\times (b + c) = a \\times b + a \\times c$. So $3 \\times (4 + 5) = 3 \\times 4 + 3 \\times 5 = 12 + 15 = 27$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is $\\frac{2}{3} \\div \\frac{4}{5}$?',
    options: [
      '$\\frac{8}{15}$',
      '$\\frac{6}{20}$',
      '$\\frac{10}{12}$',
      '$\\frac{5}{6}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To divide fractions, invert and multiply: $\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to the laws of exponents, what is $a^3 \\times a^4$?',
    options: [
      '$a^7$',
      '$a^{12}$',
      '$a^{4/3}$',
      '$2a^7$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The product rule for exponents: $a^m \\times a^n = a^{m+n}$. So $a^3 \\times a^4 = a^{3+4} = a^7$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If an item costs $80 and sales tax is 7.5%, what is the total cost in dollars?',
    correctAnswer: 86,
    numericRange: { min: 0, max: 200, precision: 0 },
    difficulty: 'medium',
    explanation: 'Tax = $80 \\times 0.075 = $6. Total = $80 + $6 = $86.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A stock rises from $40 to $50. What is the percentage increase?',
    options: [
      '10%',
      '25%',
      '20%',
      '50%'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Percentage change = $\\frac{50 - 40}{40} \\times 100\\% = \\frac{10}{40} \\times 100\\% = 25\\%$.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which is a better deal: 12 oz for $2.40 or 20 oz for $3.60?',
    options: [
      '12 oz for $2.40 (lower total price)',
      'They are the same price per ounce',
      '20 oz for $3.60 (lower price per ounce)',
      'Cannot be determined'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '12 oz: $2.40/12 = $0.20/oz. 20 oz: $3.60/20 = $0.18/oz. The 20 oz option has a lower unit price.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'On a map, 1 inch represents 50 miles. If two cities are 3.5 inches apart, how many miles apart are they?',
    correctAnswer: 175,
    numericRange: { min: 0, max: 500, precision: 0 },
    difficulty: 'easy',
    explanation: 'Using proportions: $\\frac{1}{50} = \\frac{3.5}{x}$. Cross-multiply: $x = 50 \\times 3.5 = 175$ miles.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'In the order of operations (PEMDAS), what comes first?',
    options: [
      'Addition',
      'Multiplication',
      'Exponents',
      'Parentheses'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. Parentheses come first.',
  },
  {
    id: 10,
    type: 'numeric',
    question: 'Evaluate: $3 + 4 \\times 2^2$',
    correctAnswer: 19,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'Following PEMDAS: First exponent $2^2 = 4$, then multiplication $4 \\times 4 = 16$, then addition $3 + 16 = 19$.',
  },
];
