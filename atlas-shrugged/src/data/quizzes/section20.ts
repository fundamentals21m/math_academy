import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Galt\'s Gulch also known as?',
    options: [
      'The Valley of Freedom',
      'The Hidden City',
      'Paradise Valley',
      'Atlantis',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Galt\'s Gulch is called "Atlantis" by its inhabitants, referencing the legendary civilization that sank beneath the sea—except this Atlantis has risen above the corrupt world.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does Dagny discover Galt\'s Gulch?',
    options: [
      'She is invited by Francisco',
      'She follows a map given by Ellis Wyatt',
      'She stumbles upon it while hiking',
      'She crashes her plane while pursuing a mysterious aircraft',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Dagny discovers the valley when she crashes her plane while pursuing Quentin Daniels, who is being recruited to join the strike. Her crash landing brings her into the hidden community.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who are the inhabitants of Galt\'s Gulch?',
    options: [
      'Political refugees from various countries',
      'Wealthy retirees seeking privacy',
      'The productive minds who have gone on strike',
      'Scientists conducting secret research'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Galt\'s Gulch is populated by the strikers—the industrialists, artists, scientists, and other men of the mind who have withdrawn from a world that punishes their achievements.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the fundamental principle governing life in the valley?',
    options: [
      'Each according to his needs',
      'The strong shall rule the weak',
      'Trading value for value without force or fraud',
      'Majority rule democracy',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The valley operates on voluntary trade between individuals, where each person offers value in exchange for value, with no initiation of force or fraud permitted.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does Dagny initially feel about leaving the outside world permanently?',
    options: [
      'Immediate eagerness to stay',
      'Conflict because she hasn\\'t given up on the railroad',
      'Indifference to her former life',
      'Fear of the valley\\'s inhabitants',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Though attracted to the valley, Dagny feels torn because she hasn\'t yet given up hope for the outside world. Her railroad still means something to her, and she isn\'t ready to quit.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does Galt\'s Gulch represent philosophically?',
    options: [
      'The proof that a society based on rational self-interest is possible',
      'An escape from reality',
      'A utopian fantasy disconnected from human nature',
      'A temporary refuge until circumstances change',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Galt\'s Gulch demonstrates that a society based on individual rights, productive achievement, and voluntary exchange can work—it is the proof of concept for Rand\'s philosophy.',
  },
];
