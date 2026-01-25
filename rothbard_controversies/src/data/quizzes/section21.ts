import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the real difference between the "public" and "private" sectors?',
    options: [
      'Public benefit vs. private benefit',
      'Voluntary finance vs. coercive (tax) finance',
      'Large vs. small organizations',
      'Democratic vs. autocratic control',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The real difference is between voluntary and coercive finance. The private sector is financed by voluntary exchange; the public sector is financed by compulsory taxation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the concept of "public goods" problematic?',
    options: [
      'Non-excludability is largely a function of technology and legal institutions, not inherent',
      'Public goods don\\'t exist',
      'Only government can provide them',
      'They are too expensive',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Non-excludability is largely a function of technology and legal institutions—what is non-excludable today may be excludable tomorrow. Many "public goods" are in fact provided privately: lighthouses, roads, parks.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How is public sector "production" valued in national accounts?',
    options: [
      'At market prices',
      'By voting outcomes',
      'By consumer surveys',
      'At cost—assuming services are worth what was spent on them'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Public sector output is typically valued at cost—assuming that something is worth whatever was spent on it. This assumption is groundless; private output is valued at market prices reflecting what consumers will pay.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the "ratchet effect" in government growth?',
    options: [
      'Steady, even growth',
      'Government shrinks during booms',
      'Government expands during crises and never fully contracts afterward',
      'Growth follows elections',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The growth of government displays a ratchet effect: it expands during crises (wars, depressions) and never fully contracts afterward. Each expansion creates new constituencies defending their programs.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is "crowding out"?',
    options: [
      'Resources absorbed by the public sector are unavailable to the private sector',
      'Too many people in government offices',
      'Private firms displacing government',
      'Population growth',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Crowding out means resources absorbed by the public sector are unavailable to the private sector. This reduces private investment, consumption, and economic growth.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What type of spending cannot be evaluated by market prices because services are not sold to willing buyers?',
    options: [
      'Private investment',
      'Government spending',
      'Consumer spending',
      'Foreign investment',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Government spending cannot be evaluated by market prices. There is no way to measure the value of public sector output—it is valued at cost rather than by what consumers would pay.',
  },
];
