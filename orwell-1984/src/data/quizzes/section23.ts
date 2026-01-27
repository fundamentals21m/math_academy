import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Where does Winston spend his days after being released?',
    options: ['The Chestnut Tree Cafe', 'The Ministry of Truth', 'The prole quarters', 'Victory Mansions'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Winston sits in the Chestnut Tree Cafe—the traditional haunt of disgraced Party members—drinking Victory Gin and playing chess.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What happens when Winston meets Julia after their release?',
    options: ['They plan another rebellion', 'They speak briefly with no emotion—both have betrayed each other', 'They pretend not to know each other', 'Julia refuses to speak to him'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'They meet and speak matter-of-factly about their betrayals. Winston feels nothing for her—neither love nor hatred. The Party has won.'
  },
  {
    id: 3,
    type: 'text',
    question: 'What are the final five words of the novel?',
    correctAnswer: 'He loved Big Brother',
    difficulty: 'easy',
    explanation: 'The novel ends: "He had won the victory over himself. He loved Big Brother." Winston\'s spiritual annihilation is complete.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the ending of the novel represent?',
    options: ['Winston\'s escape', 'A hopeful new beginning', 'Winston\'s complete spiritual defeat', 'The Brotherhood\'s victory'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The ending represents total defeat—not death, but something worse: Winston genuinely loves his oppressor. His humanity has been destroyed.'
  }
];
