import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does "The Top and the Bottom" refer to in this chapter?',
    options: [
      'The contrast between producers and moochers',
      'Railroad management hierarchy',
      'The physical layout of a building',
      'Stock market highs and lows'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The chapter title refers to the contrast between those at the "top" who produce value and those at the "bottom" who survive by taking from others.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which character represents productive competence in this chapter?',
    options: [
      'James Taggart',
      'Orren Boyle',
      'Wesley Mouch',
      'Dagny Taggart',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Dagny Taggart represents productive competence, actively working to solve problems and keep the railroad running.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How do the "moochers" in this chapter justify their actions?',
    options: [
      'By claiming superior intelligence',
      'By demonstrating better results',
      'Through open acknowledgment of self-interest',
      'Through appeals to need, fairness, and public good',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The moochers justify taking from producers through moral claims about need, fairness, and serving the public good, rather than through productive achievement.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is James Taggart\'s method of operating the railroad?',
    options: [
      'Political connections and public relations',
      'Hands-on management and technical expertise',
      'Innovation and technological advancement',
      'Cost-cutting and efficiency improvements',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'James Taggart relies on political connections and public image rather than competence, leaving the actual work of running the railroad to his sister Dagny.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What philosophical point does Rand make through the contrast of "top" and "bottom"?',
    options: [
      'Society needs both producers and non-producers equally',
      'Social status determines moral worth',
      'The producers are morally and practically superior',
      'Economic equality is the highest goal',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Rand argues that those who produce value through rational effort are morally superior to those who survive by manipulating or mooching from producers.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How does the chapter portray the relationship between competence and moral character?',
    options: [
      'As unrelated qualities',
      'Productive competence as an expression of virtue',
      'Competence as a sign of moral corruption',
      'Morality as an obstacle to competence'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The chapter presents productive competence as an expression of virtues like rationality, honesty, and integrity, linking ability to moral character.',
  },
];
