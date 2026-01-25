import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 's10-q1',
    type: 'multiple-choice',
    question: 'What is the "professional embarrassment" mentioned in this section?',
    options: [
      'Fund managers\\' lack of education',
      'Ordinary bitcoin holders massively outperformed every professional fund manager',
      'Regulatory failures',
      'High management fees',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Ordinary people who simply held bitcoin outperformed every hedge fund, mutual fund, and special purpose fund, despite most never passing the hiring process of any investment company.'
  },
  {
    id: 's10-q2',
    type: 'multiple-choice',
    question: 'According to the section, what does a 1-2% bitcoin allocation generate?',
    options: [
      'Massive tracking error',
      'Regulatory concerns',
      'Significant alpha over time',
      'Portfolio underperformance',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Small allocations (1-2%) can generate significant alpha over time with minimal tracking error, making them suitable even for conservative funds.'
  },
  {
    id: 's10-q3',
    type: 'multiple-choice',
    question: 'What is the "shifting fiduciary liability" described in the book?',
    options: [
      'Fiduciaries are no longer personally liable',
      'Government now covers all losses',
      'Insurance companies take on all risk',
      'Greater liability may now be from NOT including bitcoin rather than including it',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'If competitors include bitcoin and it appreciates significantly while your fund doesn\'t include it, fiduciaries face greater long-term risk from exclusion than inclusion.'
  },
  {
    id: 's10-q4',
    type: 'multiple-choice',
    question: 'What creates "hidden short positions" against bitcoin according to this section?',
    options: [
      'Holdings in banks, payment processors, and bonds without bitcoin exposure',
      'Using index funds',
      'Holding cash only',
      'Investing in gold',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Funds holding banks, payment processors, fiat currencies, long-duration bonds, or gold miners may be structurally short bitcoin even without intending to be.'
  },
  {
    id: 's10-q5',
    type: 'multiple-choice',
    question: 'Why are target date funds (TDFs) the biggest opportunity for bitcoin integration?',
    options: [
      'They have the lowest fees',
      'They hold trillions with long horizons and passive investors who won\\\'t panic sell',
      'They are government backed',
      'They have the highest returns',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'TDFs hold trillions in assets with 30-40 year horizons, and their passive investors won\'t panic sell during drawdowns because they don\'t watch daily prices.'
  }
];
