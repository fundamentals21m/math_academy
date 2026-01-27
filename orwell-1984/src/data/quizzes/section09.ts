import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'text',
    question: 'What is the dark-haired girl\'s name?',
    correctAnswer: 'Julia',
    difficulty: 'easy',
    explanation: 'We learn her name is Julia when Winston and she finally meet in the countryside.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Where does Julia work?',
    options: ['Fiction Department', 'Records Department', 'Thought Police', 'Ministry of Peace'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Julia works in the Fiction Department at the Ministry of Truth, operating the novel-writing machines that produce cheap novels for the proles.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does Julia\'s approach to rebellion differ from Winston\'s?',
    options: ['She wants to overthrow the Party through organized resistance', 'Her rebellion is personal and sensual, not intellectual', 'She believes in working within the system', 'She wants to escape to another country'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Julia has no interest in understanding or fighting the Party systematically. Her rebellion is purely personal—through pleasure and breaking rules.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does Winston feel when Julia tells him about her previous lovers?',
    options: ['Jealousy and anger', 'Disgust and moral outrage', 'Delight—every act of desire is a blow against the Party', 'Indifference'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Winston is delighted rather than jealous because Julia\'s corruption represents resistance to the Party\'s puritanism.'
  }
];
