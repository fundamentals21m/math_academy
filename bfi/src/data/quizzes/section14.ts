import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 's14-q1',
    type: 'multiple-choice',
    question: 'What accounting standards does the book blame for pension problems?',
    options: [
      'IFRS 9 and IFRS 15',
      'FAS 87 and FAS 132',
      'SOX 404 and SOX 302',
      'ASC 606 and ASC 842'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'FAS 87 and FAS 132 allowed companies to assume expected returns regardless of actual performance, leading to irrational equity-heavy allocations.'
  },
  {
    id: 's14-q2',
    type: 'multiple-choice',
    question: 'What caused US corporate pensions to ignore LDI according to the book?',
    options: [
      'Lack of understanding',
      'Government regulations',
      'Inadequate reporting frameworks',
      'Insurance company resistance'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Inadequate reporting was the key driver - pension managers only saw asset returns in an "asset-only framework" and couldn\'t see the liability side of the equation.'
  },
  {
    id: 's14-q3',
    type: 'multiple-choice',
    question: 'What is the main lesson from the author\'s 30 years of institutional finance?',
    options: [
      'Markets are always efficient',
      'Regulations solve all problems',
      'Technology is the answer',
      'Incentives matter more than logic in driving corporate decisions'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The ruthless intractability of institutional incentives is the most pertinent parallel to bitcoin adoption today - incentives, not logic, drive corporate decision-making.'
  },
  {
    id: 's14-q4',
    type: 'multiple-choice',
    question: 'What does the book say institutions need to develop for sustainable bitcoin adoption?',
    options: [
      'New optics and metrics that demonstrate bitcoin success and failure',
      'Better technology',
      'Government partnerships',
      'Insurance products'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Without new metrics that capture bitcoin\'s unique properties (like funded status for pensions or credit quality redefinition), institutional adoption will remain temporary and fragile.'
  },
  {
    id: 's14-q5',
    type: 'multiple-choice',
    question: 'What book by Ayn Rand is recommended in the additional resources?',
    options: [
      'The Fountainhead',
      'Atlas Shrugged',
      'Anthem',
      'We the Living'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Atlas Shrugged by Ayn Rand is listed among the recommended seminal works for deepening understanding of bitcoin and institutional finance.'
  }
];
