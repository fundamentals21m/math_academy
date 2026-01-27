import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the state according to Hoppe\'s analysis?',
    options: [
      'A voluntary association of citizens',
      'An institution with a territorial monopoly on the use of force',
      'A democratic assembly',
      'A charitable organization'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The state is defined as an institution that claims a territorial monopoly on the use of force, obtaining revenue through compulsory taxation rather than voluntary exchange.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why can no government maintain power through force alone?',
    options: [
      'Force is too expensive',
      'The ruled always outnumber the rulers and suppression costs would be prohibitive',
      'International law prohibits it',
      'Modern technology prevents it'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The ruled always outnumber the rulers, and the cost of suppressing a determined population would be prohibitive. Therefore, every government depends on ideological legitimacy.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is ideological legitimacy?',
    options: [
      'Government propaganda',
      'The belief among the population that the government has a right to rule',
      'Constitutional law',
      'Electoral victory'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Ideological legitimacy is the acceptance by the governed that the governing authority has a right to rule, based on tradition, religion, democracy, or expertise claims.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which psychological factor does NOT help explain socialism\'s appeal?',
    options: [
      'Envy of others\' success',
      'Desire for security over opportunity',
      'Long-term thinking and delayed gratification',
      'Intellectual misunderstanding of economics'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Long-term thinking (low time preference) actually works against socialism. High time preference—preferring immediate consumption—makes people susceptible to redistribution that offers immediate benefits at long-term costs.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What creates the symbiotic relationship between intellectuals and the state?',
    options: [
      'Intellectuals provide ideological legitimacy; the state provides funding',
      'Intellectuals run for office; the state hires them',
      'Intellectuals write laws; the state enforces them',
      'Intellectuals oppose the state; the state tolerates them'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Intellectuals provide ideological support and legitimacy for the state, while the state subsidizes intellectuals through public education, grants, and government-funded research.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the "ratchet effect" in democratic socialism?',
    options: [
      'Programs automatically adjust for inflation',
      'Once established, programs create constituencies that fight to preserve them, so programs only grow',
      'Voters always demand more services',
      'Politicians always raise taxes'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Once a socialist program is established, it creates a dependent constituency. Programs rarely shrink—they only grow—creating a ratchet effect where state intervention expands over time.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why do democratic incentives favor socialist policies?',
    options: [
      'Voters are inherently socialist',
      'Politicians can promise benefits to concentrated groups while spreading costs across the general public',
      'Democracy requires redistribution',
      'Only socialists run for office'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Politicians seeking votes have incentives to promise benefits to concentrated interest groups (who are intensely motivated) while spreading costs across the general public (where each individual cost is too small to motivate opposition).',
  },
  {
    id: 8,
    type: 'text',
    question: 'What is the term for the preference for immediate consumption over future rewards?',
    correctAnswer: 'time preference',
    difficulty: 'medium',
    explanation: 'Time preference refers to the degree to which people prefer present goods over future goods. High time preference individuals prefer immediate consumption, making them susceptible to socialist promises of immediate benefits.',
  },
];
