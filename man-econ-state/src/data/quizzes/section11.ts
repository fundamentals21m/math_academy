import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is intervention in the Rothbardian sense?',
    options: [
      'Any government action',
      'The use of coercion to alter voluntary exchanges or restrict individual action',
      'Helpful government programs',
      'International diplomacy',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Intervention is the use of force or threat of force to interfere with voluntary exchanges or individual freedom.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are the three types of intervention according to Rothbard?',
    options: [
      'Federal, state, and local',
      'Direct, indirect, and regulatory',
      'Economic, political, and social',
      'Autistic, binary, and triangular'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Rothbard classifies intervention as autistic (restricting individual alone), binary (government-individual exchange), or triangular (regulating exchanges).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does all intervention reduce social utility?',
    options: [
      'Because at least one party is forced to act against their demonstrated preference',
      'Because government is inefficient',
      'Because politicians are corrupt',
      'Because taxes fund it'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Intervention overrides voluntary choices. The coerced party would not have chosen that action, demonstrating utility loss.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is an example of autistic intervention?',
    options: [
      'Drug prohibition',
      'Taxation',
      'Price controls',
      'Tariffs',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Autistic intervention restricts an individual\'s use of their own person or property, like drug laws or censorship.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is an example of triangular intervention?',
    options: [
      'Income tax',
      'Military conscription',
      'Minimum wage laws',
      'Drug prohibition'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Triangular intervention regulates exchanges between private parties, like price controls or licensing requirements.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'According to Rothbard, can any intervention be justified on utilitarian grounds?',
    options: [
      'Yes, if benefits exceed costs',
      'No, because interpersonal utility comparisons are impossible',
      'Only during emergencies',
      'Yes, if approved democratically',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Since we cannot compare utilities across individuals, we cannot demonstrate that intervention produces net benefits.',
  },
];
