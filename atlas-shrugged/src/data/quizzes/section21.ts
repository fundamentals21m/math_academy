import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why is the chapter titled "The Utopia of Greed"?',
    options: [
      'To mock the inhabitants as greedy',
      'To describe excessive materialism in the valley',
      'To reclaim "greed" as the rational pursuit of one\'s own happiness',
      'To criticize the outside world\'s economy'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The title reclaims "greed" from its negative connotation. In Rand\'s view, the rational pursuit of one\'s own values and happiness is moral, not shameful.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How do the valley\'s inhabitants earn their living?',
    options: [
      'They share resources equally',
      'A central committee assigns work',
      'They live off stored wealth',
      'They each work and trade based on their skills'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each person in the valley works at what they do best and trades with others. Even billionaires work—Midas Mulligan runs a bank, and Francisco works in the copper mines.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What oath do the inhabitants of the valley take?',
    options: [
      '"I swear by my life and my love of it that I will never live for the sake of another man, nor ask another man to live for mine."',
      '"I swear to share all I have with my brothers."',
      '"I swear loyalty to John Galt above all else."',
      '"I swear to destroy the looters\' world."'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This oath embodies the novel\'s philosophy: the rejection of both sacrificing oneself for others and demanding that others sacrifice for you. It affirms rational self-interest.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why does the valley function so well despite being populated by "selfish" individuals?',
    options: [
      'A strong leader forces cooperation',
      'Rational self-interest naturally leads to productive cooperation',
      'They have no conflicts because they\'re isolated',
      'They suppress their selfish impulses'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When people deal with each other by reason and trade rather than force, their self-interest leads to mutual benefit. No one gains by harming others in a free market.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What role do former industrialists play in the valley?',
    options: [
      'They live as honored retirees',
      'They serve as the governing council',
      'They continue working at various trades and businesses',
      'They only supervise others\' work'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The former industrialists don\'t rest on their laurels—they actively work. Judge Narragansett farms, Ken Danagger works in a coal mine. Work is viewed as a joy, not a burden.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does life in the valley demonstrate about the relationship between selfishness and benevolence?',
    options: [
      'Selfishness excludes all benevolence',
      'The two are unrelated concepts',
      'Benevolence requires self-sacrifice',
      'True benevolence flows from rational self-interest, not duty'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The valley shows that genuine goodwill toward others comes from valuing oneself first. People freely help each other because they want to, not from guilt or obligation.',
  },
];
