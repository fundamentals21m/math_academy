import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the defining characteristic of "Russian-style" socialism according to Hoppe?',
    options: [
      'High taxes on income',
      'Nationalization of the means of production',
      'Government regulation of prices',
      'Universal basic income'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Russian-style socialism is characterized by the nationalization or socialization of the means of production, where scarce resources used to produce consumption goods are collectively owned.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Under socialization, what role do individuals play regarding the means of production?',
    options: [
      'Private owners who can sell and profit',
      'Shareholders in a public corporation',
      'Caretakers who cannot sell or keep profits privately',
      'Independent contractors with limited liability'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Under socialization, people act as caretakers rather than owners. They cannot sell the means of production or keep the receipts from their sale privately.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the first economic effect of socializing the means of production?',
    options: [
      'Increased innovation',
      'Higher wages for workers',
      'A relative drop in the rate of investment and capital formation',
      'More efficient resource allocation'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The immediate general effect of socialism is a relative drop in investment and capital formation because socialization favors non-producers and raises costs for producers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why does socialism result in wasteful use of resources according to Hoppe?',
    options: [
      'Workers are lazy under socialism',
      'There are no market prices for means of production, preventing economic calculation',
      'Central planners are corrupt',
      'Resources are deliberately destroyed'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Because means of production cannot be sold, no market prices exist for them. Without market prices, caretakers cannot engage in economic calculation to determine if resources are being used efficiently.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Mises, what is the "essential mark of socialism"?',
    options: [
      'Equal distribution of wealth',
      'Democratic control of industry',
      'One will alone directs all factors of production',
      'Worker ownership of factories'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Mises wrote that "the essential mark of socialism is that one will alone acts... The main thing is that the employment of all factors of production is directed by one agency only."',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What happens to the character of people under socialism according to Hoppe?',
    options: [
      'They become more productive',
      'They develop political rather than productive skills',
      'They become more cooperative',
      'They become more innovative'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Under socialism, advancement depends on political talents rather than productive skills. People spend less time developing productive skills and more time cultivating political talents like persuasion, demagoguery, and intrigue.',
  },
  {
    id: 7,
    type: 'text',
    question: 'What is the term for the underground economic activity that emerges when socialism forces lower living standards on people?',
    correctAnswer: 'black market',
    difficulty: 'easy',
    explanation: 'When lowered living standards are forced upon people, a tendency evolves to compensate by going underground, moonlighting, and creating black markets.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why does a caretaker tend to over-utilize capital equipment compared to a private owner?',
    options: [
      'Caretakers are trained to maximize output',
      'Caretakers cannot sell the means of production, reducing their incentive to preserve capital value',
      'Caretakers are paid based on production volume',
      'Private owners are too conservative with equipment'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A private owner maximizes both product value AND resource value because he owns both. A caretaker, unable to sell the means of production, has reduced incentive to preserve capital value and tends to over-utilize equipment.',
  },
];
