import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the fundamental problem with taxation according to Rothbard?',
    options: [
      'It is coercion—taking property by force without consent',
      'It is inefficient',
      'It requires too much paperwork',
      'It is too complicated',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taxation is not a voluntary exchange but coercion—taking property by force. The state extracts resources at the point of a gun. The taxpayer does not consent to the transaction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is taxation not analogous to club dues?',
    options: [
      'Clubs have higher fees',
      'You can exit a club; you cannot exit the state\\\\'s territory without its permission',
      'Clubs provide more services',
      'Taxation is voluntary',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'You can exit a club without the club\'s permission—you simply stop paying. But you cannot exit the state\'s claimed territory without its permission, and even then you may owe exit taxes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the "social contract" theory of taxation and what is its flaw?',
    options: [
      'An explicit agreement that is always honored',
      'A legal document signed at birth',
      'An international treaty',
      'A hypothetical agreement that no one actually signed',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The social contract is hypothetical. No one signed it. There was no moment when the people actually agreed to the terms. Tacit consent by remaining is dubious since exit is costly and often restricted.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does "consent of the governed" actually mean in practice?',
    options: [
      'Everyone agrees to every law',
      'Unanimous agreement',
      'Majority rule with minorities bound to obey, which is not genuine consent',
      'Voluntary compliance only',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Consent of the governed means majority rule—minorities are bound to obey. This is not genuine consent. No one asks the individual taxpayer for his consent; his consent is simply assumed.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does Rothbard view the relationship between taxation and theft?',
    options: [
      'They are completely different',
      'Theft is worse because it\\\\'s illegal',
      'They are essentially the same—taking property without consent',
      'Taxation is justified theft',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rothbard argues taxation is essentially the same as theft—both involve taking property without the owner\'s consent. The main difference is that taxation is conducted by an entity claiming legal authority.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What type of transaction is taxation NOT, according to the Austrian view?',
    options: [
      'Voluntary',
      'Legal',
      'Economic',
      'Historical'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Taxation is not a voluntary transaction. Unlike market exchange where both parties consent, taxation is imposed regardless of the individual\'s wishes. Refusal results in penalties.',
  },
];
