import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 's05-q1',
    type: 'multiple-choice',
    question: 'What is a bearer asset?',
    options: [
      'An asset that requires government approval to own',
      'An asset that generates regular income',
      'An asset where ownership is determined by physical possession, not registration',
      'An asset held by a financial institution',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A bearer asset is a type of financial asset where ownership is determined by physical possession, rather than by registration or the holder\'s identity.'
  },
  {
    id: 's05-q2',
    type: 'multiple-choice',
    question: 'When did cash cease to be a bearer asset?',
    options: [
      '1929 (Great Depression)',
      '1971 (Nixon closed the gold window)',
      '1944 (Bretton Woods)',
      '2008 (Financial Crisis)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cash lost its power as a bearer asset when Nixon closed the gold window in 1971, breaking the direct link between cash and gold.'
  },
  {
    id: 's05-q3',
    type: 'multiple-choice',
    question: 'Why is bitcoin called "the most powerful bearer asset to have ever existed"?',
    options: [
      'It generates the highest returns',
      'It is backed by the most governments',
      'It has the longest history',
      'It is non-physical, easy to validate, and cannot be stolen through violence',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Bitcoin\'s non-physical nature makes it the most powerful bearer asset - it cannot be stolen through violence, and unlimited wealth can be stored in a memorized 12-word seed.'
  },
  {
    id: 's05-q4',
    type: 'multiple-choice',
    question: 'What personal transformation occurs when taking self-custody of bitcoin?',
    options: [
      'A level of individual sovereignty previously unavailable to humans',
      'Becoming a professional trader',
      'Guaranteed financial returns',
      'Automatic tax benefits',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Knowing one can sell everything, put it on a 12-word seed, and go anywhere in the world is a level of individual sovereignty previously unavailable to human beings.'
  },
  {
    id: 's05-q5',
    type: 'multiple-choice',
    question: 'What "discount" does the book say institutions must understand?',
    options: [
      'Trading fee discounts on exchanges',
      'Volume discounts on large bitcoin purchases',
      'Tax discounts for institutional investors',
      'A deep discount applied to every layer of institutional ownership they yield bearer power to',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'People place a significant premium on bearer ownership and will apply a deep discount towards every layer of institutional ownership they have to yield this power to.'
  }
];
