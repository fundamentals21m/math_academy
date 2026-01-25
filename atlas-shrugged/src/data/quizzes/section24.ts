import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is "Their Brothers\' Keepers" a reference to?',
    options: [
      'A religious organization in the novel',
      'A government welfare program',
      'The Biblical question "Am I my brother\\'s keeper?"',
      'A union of workers',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The title references the Biblical story of Cain and Abel. In the novel, it describes the doctrine that everyone is obligated to support everyone else.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the "brother\'s keeper" doctrine demand?',
    options: [
      'Voluntary charity',
      'Unlimited obligation to support others regardless of merit',
      'Family responsibility only',
      'Equal work from everyone'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The doctrine demands that the able sacrifice for the unable as a matter of duty, with no limit on how much can be demanded and no consideration of merit.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does the novel distinguish between helping others and being a "brother\'s keeper"?',
    options: [
      'Voluntary help is moral; forced sacrifice is immoral',
      'There is no distinction made',
      'Only family help is acceptable',
      'All help is considered exploitation',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Rand distinguishes between voluntary benevolence (freely chosen) and forced sacrifice (demanded as duty). The former is moral; the latter is slavery.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens when "collective obligation" becomes law?',
    options: [
      'Society becomes more caring',
      'Government becomes unnecessary',
      'Everyone shares equally',
      'The productive become slaves to the unproductive'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When obligation to others is enforced by law, the productive lose their rights and become servants of those who make demands, regardless of whether those demands are just.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does the novel reject the concept of unchosen obligations?',
    options: [
      'Because morality must be based on voluntary choice',
      'Because all obligations are impossible',
      'Because only self-interest exists',
      'Because obligations are old-fashioned'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Rand argues that genuine morality requires choice. Obligations you never agreed to, imposed by force, are not morality but slavery.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the contradiction in claiming others have a right to your life?',
    options: [
      'Rights only apply to government',
      'There is no contradiction',
      'Rights are purely legal concepts',
      'A right that violates another\\'s rights is not a right but a claim to slavery',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'If you claim a "right" to another person\'s labor or life, you are claiming ownership of them—which is slavery. Rights cannot include the power to enslave others.',
  },
];
