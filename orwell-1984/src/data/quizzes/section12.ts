import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What happens to Syme, as Winston predicted?',
    options: ['He vanishes—becomes an unperson', 'He is promoted', 'He defects to another country', 'He is publicly executed'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Syme simply disappears. His name is removed from all records, and he becomes an unperson—he "had never existed."'
  },
  {
    id: 2,
    type: 'text',
    question: 'What is the name of the week-long propaganda campaign against Goldstein?',
    correctAnswer: 'Hate Week',
    difficulty: 'easy',
    explanation: 'Hate Week is an orgy of anti-Goldstein propaganda that consumes the Ministry with sixteen-hour work days.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What do Winston and Julia discuss about their inevitable capture?',
    options: ['How to escape Oceania', 'What they will do under torture', 'Who will protect them', 'Whether to turn themselves in'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'They discuss what they will do when caught and tortured, with Julia believing confession doesn\'t matter—only feelings do.'
  }
];
