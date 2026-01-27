import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is social engineering socialism based on?',
    options: [
      'The will of the working class',
      'Traditional values and customs',
      'The claim that experts can scientifically manage society',
      'Democratic voting'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Social engineering socialism claims the authority of science and expertise, believing that society can be rationally designed and improved through scientific management by experts.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What did Hayek call the belief that experts can design better outcomes than markets?',
    options: [
      'The calculation problem',
      'The pretense of knowledge',
      'The coordination failure',
      'The planning fallacy'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'F.A. Hayek called this the "pretense of knowledge"—the dangerous illusion that experts can design better outcomes than emerge spontaneously from voluntary interactions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is the knowledge required for economic coordination impossible to centralize?',
    options: [
      'It is too expensive to gather',
      'Computers are not powerful enough',
      'It is dispersed, tacit, and constantly changing',
      'People refuse to share information'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The knowledge required for economic coordination is dispersed among millions of individuals, tacit (incapable of being fully articulated), and constantly changing. No central authority can gather and process it.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is social engineering classified as socialist?',
    options: [
      'It redistributes income to the poor',
      'It transfers decision-making from property owners to nonowners (experts)',
      'It nationalizes all industries',
      'It eliminates private property'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Social engineering is socialist because it transfers decision-making authority from natural property owners to nonowners (the "experts"), denying individuals the right to use their property according to their own judgment.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the "intervention spiral"?',
    options: [
      'Government programs that automatically expand',
      'Each intervention creates problems that seem to require further intervention',
      'A debate technique used by politicians',
      'A type of economic cycle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each social engineering intervention creates unintended consequences that seem to call for further intervention, creating a self-perpetuating cycle where failures are never attributed to intervention itself.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which is NOT typically a form of social engineering intervention?',
    options: [
      'Urban planning by experts',
      'Voluntary market transactions',
      'Central bank monetary policy',
      'Mandatory educational curricula'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Voluntary market transactions are the opposite of social engineering—they represent individuals making their own decisions rather than having experts decide for them.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is social engineering considered paternalistic?',
    options: [
      'It favors fathers over mothers',
      'It assumes experts know better than individuals what is good for them',
      'It supports traditional family structures',
      'It was invented by fathers of economics'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Social engineering is inherently paternalistic because it assumes experts know better than individuals what is good for them, denying their status as autonomous beings capable of directing their own lives.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why is the socialism of social engineering particularly dangerous according to Hoppe?',
    options: [
      'It uses more violence than other forms',
      'It appears ideologically neutral and scientifically justified',
      'It is more expensive to implement',
      'It spreads more quickly'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Social engineering is particularly dangerous because it appears ideologically neutral and scientifically justified, appealing to people across the political spectrum and making it harder to resist.',
  },
];
