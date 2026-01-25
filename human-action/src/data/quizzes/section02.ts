import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two main branches of the sciences of human action according to Mises?',
    options: [
      'Psychology and sociology',
      'Praxeology and history',
      'Economics and politics',
      'Philosophy and mathematics',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Mises identifies praxeology (deductive theory) and history (interpretation of unique events) as the two main branches studying human action.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Praxeology derives its theorems through:',
    options: [
      'Empirical testing and experimentation',
      'Statistical analysis of data',
      'Surveys and interviews',
      'Logical deduction from the action axiom',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Praxeology is an a priori science - its theorems are derived through logical deduction from the category of human action, not from empirical observation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Methodological individualism holds that:',
    options: [
      'Only selfish actions matter in economics',
      'Collectives have their own consciousness',
      'All social phenomena must be explained through individual actions',
      'Individuals are always isolated from society'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Methodological individualism means all social phenomena must ultimately be explained in terms of individuals\' actions - collectives do not act, only individuals do.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why can\'t economic theories be tested experimentally like physics?',
    options: [
      'Economists are not scientists',
      'Economic data is always falsified',
      'Controlled experiments on economies are impossible - too many variables change simultaneously',
      'Physics is simpler than economics',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'In economics, we cannot run controlled experiments holding everything else equal. When prices rise, thousands of factors change simultaneously.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Mises distinguishes between "conception" and "understanding." Which tool does praxeology use?',
    options: [
      'Conception',
      'Understanding',
      'Intuition',
      'Observation'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Conception is the mental tool of praxeology - grasping logical implications through deductive reasoning. Understanding is the tool of history.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Methodological singularism means economists should analyze:',
    options: [
      'Only one variable at a time',
      'Specific, concrete choices between definite quantities in particular circumstances',
      'Abstract universals only',
      'Singular events in history'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Methodological singularism requires analyzing specific choices between definite quantities in particular circumstances, not abstract universals like "water vs. diamonds."',
  },
];
