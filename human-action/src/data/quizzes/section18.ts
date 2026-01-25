import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is time preference according to Mises?',
    options: [
      'The preference for leisure time over work time',
      'The preference for spending time on production rather than consumption',
      'The preference for present goods over future goods of the same kind and quantity',
      'The preference for shorter production periods',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Time preference is the universal preference for present goods over future goods of the same kind and quantity. Every acting person values a present good more highly than the same good available in the future.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Mises, what are capital goods?',
    options: [
      'Money and financial instruments',
      'Produced factors of production used to make other goods',
      'Consumer goods that last a long time',
      'Natural resources like land and minerals',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Capital goods are produced factors of production—goods that have been made by human effort and are used to produce other goods. They are intermediate stages in the production process, deriving their value from their contribution to producing consumer goods.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens when saving falls short of capital depreciation?',
    options: [
      'Capital is consumed and future productivity declines',
      'The economy enters a boom period',
      'Interest rates fall',
      'The money supply increases',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When saving falls short of depreciation, capital is consumed—often called "eating the seed corn." The period of production shortens and future productivity falls. This may not be immediately apparent but ultimately leads to a lower standard of living.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is time preference a necessary feature of human action?',
    options: [
      'Because without it, there would never be any urgency to begin acting',
      'Because humans are naturally impatient',
      'Because future events are uncertain',
      'Because present consumption is more enjoyable',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Mises argues that time preference is categorical, not merely psychological. An actor who did not prefer earlier to later satisfaction would never begin any action at all—there would always be some future moment that would seem more appropriate to start.'
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the relationship between saving and investment according to Mises?',
    options: [
      'Investment creates saving through the multiplier effect',
      'Saving and investment are independent of each other',
      'Government can create investment without private saving',
      'Genuine investment requires prior genuine saving',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Genuine investment requires prior genuine saving. Saving releases resources from producing consumer goods, making them available for producing capital goods. When banks create credit not backed by real saving, they create the illusion of capital without the reality.'
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does a longer period of production require and produce?',
    options: [
      'Less capital and more immediate output',
      'Government planning and lower interest rates',
      'More capital accumulation and ultimately greater productivity',
      'Reduced saving and increased consumption',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Lengthening the period of production—adopting more roundabout methods—requires capital accumulation through saving. While results are delayed, this ultimately produces enormously greater productivity. This is the source of modern prosperity.'
  }
];
