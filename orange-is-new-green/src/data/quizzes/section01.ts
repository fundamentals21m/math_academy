import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why is Bitcoin unsuitable for short-term cash management?',
    options: [
      'It has high transaction fees',
      'It cannot be converted to fiat currency',
      'Its volatility creates unacceptable uncertainty',
      'It is too slow for daily transactions',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Bitcoin\'s volatility—with historical drawdowns exceeding 80%—makes it unsuitable for short-term cash needs where stability is required.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What expression reminds Bitcoiners about short-term price unpredictability?',
    options: [
      '"Stay humble"',
      '"Diamond hands"',
      '"To the moon"',
      '"Number go up"',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '"Stay humble" reminds holders that nobody can confidently predict Bitcoin\'s price behavior over the short term, despite its long-term appreciation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Even Bitcoin-focused businesses typically need to hold fiat currency for all of the following EXCEPT:',
    options: [
      'Payroll',
      'Tax obligations',
      'Emergency reserves',
      'Long-term savings',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Bitcoin is excellent for long-term savings, but businesses need fiat for operational expenses like payroll, taxes, and emergencies where value stability is critical.',
  },
];
