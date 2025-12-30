import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If each dimension of a region is multiplied by $m$, the area is multiplied by:',
    options: [
      '$m$',
      '$m^2$',
      '$m^3$',
      '$2m$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Area scales by $m^2$ when linear dimensions scale by $m$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If each dimension of a solid is multiplied by $m$, the volume is multiplied by:',
    options: [
      '$m$',
      '$m^2$',
      '$m^3$',
      '$3m$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Volume scales by $m^3$ when linear dimensions scale by $m$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A 10-inch pizza costs $3. What should a 15-inch pizza cost (assuming price proportional to area)?',
    options: [
      '$4.50',
      '$5.25',
      '$6.75',
      '$9.00'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$m = 15/10 = 3/2$. Area multiplies by $(3/2)^2 = 9/4$. Price = $3 \\times 9/4 = \\$6.75$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'A 1-foot deep pot holds 5 gallons. How many gallons does a similar 2-foot deep pot hold?',
    correctAnswer: 40,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$m = 2$. Volume multiplies by $m^3 = 8$. Capacity = $5 \\times 8 = 40$ gallons.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A ball of string 2 inches in diameter contains 400 ft of string. How much is in a 3-inch diameter ball?',
    options: [
      '600 ft',
      '900 ft',
      '1350 ft',
      '1800 ft'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$m = 3/2$. Volume multiplies by $(3/2)^3 = 27/8$. String = $400 \\times 27/8 = 1350$ ft.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The ratio of volume to surface area:',
    options: [
      'Stays constant as objects get larger',
      'Decreases as objects get larger',
      'Increases as objects get larger',
      'Has no relationship to size'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Volume scales by $m^3$ while surface area scales by $m^2$. Their ratio increases with size.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Large animals cool more slowly than small animals because:',
    options: [
      'They have more insulation',
      'They have relatively less surface area per unit volume',
      'They are warmer to begin with',
      'Their skin is thicker'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Heat is stored in volume but escapes through surface. Larger animals have less surface per volume.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why can ants survive falls from any height?',
    options: [
      'They are very strong',
      'They weigh very little',
      'They have large surface area relative to volume (high air resistance)',
      'They have shock absorbers'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Small creatures have high surface-area-to-volume ratio, so air resistance slows them more.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Archimedes discovered that the volume of an irregular object equals:',
    options: [
      'Its weight divided by density',
      'The water it displaces when submerged',
      'Its surface area times depth',
      'Half its bounding box volume'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Archimedes found that the volume of a submerged object equals the volume of water displaced.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'How many dimes can fit flat on a half-dollar (historically, coins scaled by value, not diameter)?',
    options: [
      'About 5',
      'About 3',
      'About 2',
      'Only 1'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Volume scales by $m^3 = 5$, so $m = \\sqrt[3]{5} \\approx 1.71 < 2$. The half-dollar\'s diameter is less than twice a dime\'s—only 1 dime fits!',
  },
];
