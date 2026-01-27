import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the primary difference between Russian-style socialism and social-democratic socialism?',
    options: [
      'Social democracy uses violent revolution',
      'Social democracy permits private ownership but redistributes income through taxation',
      'Social democracy nationalizes all industries',
      'Social democracy abolishes money'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Social-democratic socialism does not outlaw private ownership of the means of production. Instead, it redistributes income derived from production through taxation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Hoppe, why did social-democratic socialism emerge?',
    options: [
      'It was invented by German philosophers',
      'The disappointing economic performance of Russian-style socialism',
      'Workers demanded higher wages',
      'Capitalists wanted more government protection'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The disappointing experience with Soviet Russia\'s economic performance led to a constant decline in orthodox Marxist socialism and spurred the development of social-democratic socialism.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why can taxation never be economically "neutral" according to Hoppe?',
    options: [
      'Governments always waste tax money',
      'It changes the relative costs of production versus nonproductive methods of gaining income',
      'People always evade taxes',
      'Tax collectors are corrupt'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Taxation changes the incentive structure by making it relatively less costly to attain income through nonproductive means (participating in redistribution) rather than through actual production.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which sectors are typically NOT privately owned even under social-democratic socialism?',
    options: [
      'Restaurants and retail stores',
      'Manufacturing and agriculture',
      'Education, central banking, and transportation',
      'Housing and real estate'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Social-democratic socialism accepts private ownership with exceptions for education, traffic and communication, central banking, and certain "natural monopolies."',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What happens when government regulation becomes sufficiently extensive?',
    options: [
      'The economy becomes more efficient',
      'Innovation increases',
      'The nominal private owner becomes a de facto caretaker',
      'Prices decrease for consumers'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When regulation is extensive enough, owners hold legal title but cannot use property according to their own judgment—they become caretakers rather than true owners.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why can social-democratic socialism persist longer than Russian-style socialism?',
    options: [
      'It has better propaganda',
      'People are more obedient in democracies',
      'It permits private production and market prices, avoiding the calculation problem',
      'It has stronger military forces'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Because social-democratic socialism permits private ownership and market prices, it avoids the economic calculation problem that made Soviet-style central planning unworkable.',
  },
  {
    id: 7,
    type: 'text',
    question: 'What type of economy combines private ownership with government redistribution of income?',
    correctAnswer: 'mixed economy',
    difficulty: 'easy',
    explanation: 'Social-democratic socialism represents a "mixed economy" that combines private ownership of production with government redistribution of income.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'According to Hoppe, what does increased taxation cause producers to do?',
    options: [
      'Work harder to compensate for lost income',
      'Immediately stop all production',
      'Increasingly use exploitative methods rather than productive efforts',
      'Move their businesses to other countries'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Even if producers want more money after taxes, they will increasingly attain it not by intensifying productive efforts but through exploitative (political) methods, because the incentive structure has changed.',
  },
];
