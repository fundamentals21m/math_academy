import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Hayek mean by "individualism" in Western civilization?',
    options: [
      'Selfishness and egotism',
      'Economic competition only',
      'Respect for the individual and tolerance for diverse views',
      'Isolation from society'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Hayek clarifies that individualism means respect for the individual man and tolerance—it has no necessary connection with egotism or selfishness.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Hayek, what was discovered about spontaneous market order?',
    options: [
      'It emerged after freedom made progress—the argument followed the reality',
      'It was designed by brilliant economists',
      'It only works in small economies',
      'It was created by government planning',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The realization that uncontrolled individual efforts could produce complex economic order came only after freedom had made progress—the argument for economic freedom was the outcome of free growth, not its cause.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which thinkers warned that socialism means slavery?',
    options: [
      'Marx and Engels',
      'de Tocqueville and Lord Acton',
      'Hegel and Schmoller',
      'Hitler and Mussolini',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Hayek reminds us that the great liberal thinkers de Tocqueville and Lord Acton warned that socialism means slavery—warnings that were ignored.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why did liberalism decline despite its success, according to Hayek?',
    options: [
      'It failed to produce any progress',
      'Foreign powers suppressed it',
      'Success bred impatience—people took progress for granted and wanted faster change',
      'Religious authorities banned it',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The very success of liberalism led people to take progress for granted and become impatient with the "slow" rate of improvement, demanding to scrap the liberal framework entirely.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Around 1870, what major shift occurred in the flow of ideas between nations?',
    options: [
      'American ideas began dominating Europe',
      'French ideas conquered Germany',
      'Asian ideas reached Europe',
      'English liberal ideas stopped spreading and collectivist ideas from Germany advanced westward',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'After 1870, the tide reversed: England began importing collectivist ideas from Germany rather than exporting liberal ideas eastward.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A Nazi leader described National Socialism as a "counter-Renaissance." Hayek says this was:',
    options: [
      'Completely false propaganda',
      'A translation error',
      'A reference to art movements',
      'More true than he knew—it destroyed individualist civilization'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Hayek argues the Nazi leader was more accurate than he realized: Nazism represented a destruction of the individualist civilization built since the Renaissance.',
  },
];
