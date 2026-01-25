import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why is Bitcoin unsuitable for short-term cash management?',
    options: [
      'Its volatility creates unacceptable uncertainty',
      'It has high transaction fees',
      'It cannot be converted to fiat currency',
      'It is too slow for daily transactions'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Bitcoin\'s volatility—with historical drawdowns exceeding 80%—makes it unsuitable for short-term cash needs where stability is required.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What expression reminds Bitcoiners about short-term price unpredictability?',
    options: [
      '"Diamond hands"',
      '"Stay humble"',
      '"To the moon"',
      '"Number go up"'
    ],
    correctIndex: 1,
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
      'Long-term savings',
      'Emergency reserves'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Bitcoin is excellent for long-term savings, but businesses need fiat for operational expenses like payroll, taxes, and emergencies where value stability is critical.',
  },
];
