import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What major structural element begins with this chapter?',
    options: [
      'Part Two of the novel, "Either-Or"',
      'The epilogue',
      'The final section',
      'A flashback sequence'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This chapter begins Part Two of Atlas Shrugged, titled "Either-Or," named after the logical principle of excluded middle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What type of character does "The Man Who Belonged on Earth" introduce or focus on?',
    options: [
      'A politician',
      'A union leader',
      'A journalist',
      'A scientist or inventor',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The chapter focuses on a scientist character, emphasizing the theme of the mind\'s importance in human achievement.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the phrase "belonged on earth" suggest about the character?',
    options: [
      'He should leave for space',
      'He is unambitious',
      'He is a farmer',
      'He is a practical, reality-oriented thinker',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Belonging "on earth" means being oriented toward reality and practical achievement, not lost in mysticism or impractical theory.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How does the novel present the relationship between science and industry?',
    options: [
      'As opposed to each other',
      'As separate domains with no connection',
      'As naturally allied in pursuing rational achievement',
      'As competing for resources',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rand presents science and industry as natural allies - both require rational thought applied to reality to create value.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What threat do the scientists in the novel face?',
    options: [
      'Competition from other scientists',
      'Regulations, bureaucracy, and intellectual persecution',
      'Lack of natural talent',
      'Public adoration',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Scientists face the same threats as industrialists: increasing regulation, bureaucratic control, and persecution for their achievements.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What philosophical point does focusing on scientists reinforce?',
    options: [
      'That science is more important than industry',
      'That the mind is the source of all human achievement',
      'That scientists should stay out of business',
      'That theory matters more than practice'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By including scientists among the strikers, Rand emphasizes that all productive achievement depends on the rational mind, not just business.',
  },
];
