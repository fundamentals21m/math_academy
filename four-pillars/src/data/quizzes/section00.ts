import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many construction axioms did Euclid use for straightedge and compass constructions?',
    options: ['$2$', '$3$', '$4$', '$5$'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Euclid used three construction axioms: (1) draw a line segment between two points, (2) extend a line segment, and (3) draw a circle with given center and radius.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the key difference between a straightedge and a ruler?',
    options: [
      'A straightedge is longer',
      'A straightedge has no markings for measurement',
      'A ruler can only draw curved lines',
      'There is no difference'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A straightedge has no scale marked on it and can only be used for drawing straight lines—not for measurement. Euclid deliberately separates the function of measurement from drawing straight lines.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Euclidean geometry, which tool is used for measuring and transferring lengths?',
    options: [
      'The straightedge',
      'The protractor',
      'The compass',
      'The ruler'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The compass "stores" the length of a radius and allows this length to be transferred elsewhere. The power of measuring lengths resides in the compass.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of Euclid\'s construction axioms?',
    options: [
      'Draw a straight line segment between any two points',
      'Extend a straight line segment indefinitely',
      'Measure the angle between two lines',
      'Draw a circle with given center and radius'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Euclid\'s three construction axioms are: (1) draw a line segment, (2) extend a line segment, and (3) draw a circle. Measuring angles is not one of the construction axioms.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To add the length $|AB|$ to the length $|CD|$ using a compass, what should you do?',
    options: [
      'Draw a line from A to D',
      'Set the compass to radius $|AB|$ and draw a circle centered at D',
      'Use a ruler to measure both lengths',
      'Draw perpendicular lines from each segment'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'To add lengths, you pick up the compass with radius set to $|AB|$ and describe a circle with center D. Where this circle intersects the extended line CD gives you the sum $|CD| + |AB|$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why did Euclid separate the concepts of "straightness" and "length" into different tools?',
    options: [
      'He didn\'t have access to rulers',
      'It simplifies the axioms and clarifies the foundations of geometry',
      'Compasses were easier to manufacture',
      'Ancient Greek law required separate tools'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Separating "straightness" (straightedge) and "length" (compass) turns out to be important for understanding the foundations of geometry. This same separation reappears in different approaches to geometry.',
  },
];
