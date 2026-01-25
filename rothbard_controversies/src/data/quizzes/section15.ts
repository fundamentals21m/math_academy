import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the marginal product of a factor?',
    options: [
      'The total output of a factor',
      'The average output per worker',
      'The additional output produced by employing one more unit of that factor',
      'The price of the factor',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The marginal product of a factor is the additional output produced by employing one more unit of that factor, holding other factors constant.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why are factors paid the discounted marginal product rather than the full marginal product?',
    options: [
      'Government regulations',
      'Workers prefer lower wages',
      'Employers pay workers before receiving revenue from sales, requiring a time discount',
      'Markets are inefficient'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Production takes time, and factors must be paid before the product is sold. The employer discounts expected future revenue to present value; the discount reflects the interest rate.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the Austrian response to the claim that discounting interest represents exploitation?',
    options: [
      'Interest compensates capitalists for bearing risk and waiting—a genuine service',
      'Exploitation is acceptable',
      'Interest should be abolished',
      'Workers should wait for payment',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Workers receive immediate payment; capitalists bear risk and waiting. The interest they earn is compensation for this genuine service, not exploitation. Workers could wait for pay but prefer immediate payment.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What distinguishes profit from interest?',
    options: [
      'Interest is calculable and contracted for in advance; profit arises from successfully anticipating future conditions',
      'They are the same thing',
      'Profit is fixed, interest is variable',
      'Only banks earn interest'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Interest is the return to time preference—calculable and contracted for in advance. Profit is the return to successful entrepreneurship—arising from correctly anticipating future conditions and not reducible to a factor payment.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Frank Knight, what distinguishes true uncertainty from risk?',
    options: [
      'Uncertainty is smaller',
      'They are the same',
      'Only governments face uncertainty',
      'Risk has known probabilities and can be insured; uncertainty has unknown probabilities and cannot',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Frank Knight distinguished risk (with known probabilities that can be insured against) from true uncertainty (with unknown probabilities that cannot be insured). The entrepreneur bears uncertainty.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What type of earnings does the entrepreneur receive—earnings that remain after all contracted payments to factors?',
    options: [
      'Fixed',
      'Residual',
      'Marginal',
      'Contracted',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Entrepreneurial earnings are residual—what remains after all contracted payments to factors. The entrepreneur is not paid a marginal product; his contribution cannot be measured at the margin.',
  },
];
