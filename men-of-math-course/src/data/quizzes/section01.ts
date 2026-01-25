import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Zeno of Elea most famous for?',
    options: [
      'Discovering the Pythagorean theorem',
      'His paradoxes about motion and infinity',
      'Inventing geometry',
      'Calculating the value of pi'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Zeno is famous for his paradoxes, including Achilles and the Tortoise, which challenge our understanding of motion, space, and infinity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the Achilles and the Tortoise paradox, why can Achilles supposedly never catch the tortoise?',
    options: [
      'The tortoise is faster',
      'The race is infinitely long',
      'Achilles must first reach where the tortoise was, but it has moved',
      'Time stops when Achilles runs'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each time Achilles reaches where the tortoise was, it has moved ahead, creating an infinite sequence of points to traverse.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Arrow Paradox argues that at any instant, a flying arrow is:',
    options: [
      'Motionless (occupying a space equal to itself)',
      'Moving at maximum speed',
      'Accelerating',
      'In two places at once',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'At any single instant, the arrow occupies a space exactly its size and is not moving, so motion is an illusion.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What mathematical concept eventually resolved Zeno\'s paradoxes?',
    options: [
      'Euclidean geometry',
      'Complex numbers',
      'Set theory',
      'The concept of limits and infinite series',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The concept of limits shows that an infinite sum can have a finite value, resolving the paradoxes about infinite divisibility.',
  },
  {
    id: 5,
    type: 'text',
    question: 'Zeno was a student of which philosopher, known for arguing that change is an illusion?',
    correctAnswer: 'Parmenides',
    difficulty: 'hard',
    explanation: 'Zeno was a student of Parmenides of Elea, and his paradoxes were designed to defend Parmenides\' view that reality is unchanging.',
  },
];
