import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 's14-e01',
    type: 'multiple-choice',
    question: 'In the Dichotomy paradox, what must you do before walking halfway across a room?',
    difficulty: 'easy',
    options: [
      'Walk the full distance',
      'Walk a quarter of the distance',
      'Stand still',
      'Walk backwards',
    ],
    correctIndex: 1,
    explanation:
      'The Dichotomy says before you can walk half the distance, you must first walk a quarter. Before that, an eighth. And so on infinitely, suggesting you can never even start.',
  },
  {
    id: 's14-e02',
    type: 'multiple-choice',
    question: 'What is the sum of the infinite series $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\cdots$?',
    difficulty: 'easy',
    options: ['1/2', '1', '2', 'Infinity'],
    correctIndex: 1,
    explanation:
      'This is a geometric series with first term $a = 1/2$ and ratio $r = 1/2$. The sum is $\\frac{a}{1-r} = \\frac{1/2}{1/2} = 1$.',
  },
  {
    id: 's14-m01',
    type: 'multiple-choice',
    question:
      'In the Achilles and Tortoise paradox, if Achilles runs 10 m/s and the tortoise walks 1 m/s with a 100m head start, how far does Achilles run before catching the tortoise?',
    difficulty: 'medium',
    options: ['100 m', '110 m', '111.11... m', '1000 m'],
    correctIndex: 2,
    explanation:
      'The distances form a geometric series: $100 + 10 + 1 + 0.1 + \\cdots = \\frac{100}{1-0.1} = \\frac{100}{0.9} = 111.\\overline{1}$ meters.',
  },
  {
    id: 's14-m02',
    type: 'multiple-choice',
    question: 'The Arrow paradox questions whether motion is possible because:',
    difficulty: 'medium',
    options: [
      'Arrows are too heavy to fly',
      'At each instant, the arrow occupies a fixed position and is therefore motionless',
      'Arrows move in discrete jumps',
      'Time moves backwards for arrows',
    ],
    correctIndex: 1,
    explanation:
      'The Arrow paradox argues that at any single instant, the arrow is in one place (motionless). If time consists only of instants, and the arrow is motionless at each instant, then it never moves.',
  },
  {
    id: 's14-h01',
    type: 'multiple-choice',
    question:
      'The key mathematical insight that resolves Zeno\'s paradoxes is:',
    difficulty: 'hard',
    options: [
      'Infinite sums are always infinite',
      'An infinite sum can converge to a finite value',
      'Motion is impossible',
      'Space is not infinitely divisible',
    ],
    correctIndex: 1,
    explanation:
      'Zeno assumed completing infinitely many tasks requires infinite time. The resolution is that infinite series can converge to finite sums, so infinitely many "tasks" of decreasing duration can be completed in finite time.',
  },
  {
    id: 's14-h02',
    type: 'numeric',
    question:
      'If you walk at 1 m/s across a 10m room, and we sum the times for each "Dichotomy step" (half, then quarter, then eighth...), what is the total time in seconds?',
    difficulty: 'hard',
    correctAnswer: 10,
    explanation:
      'The total distance is $10(\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots) = 10 \\times 1 = 10$ meters. At 1 m/s, this takes 10 seconds. The infinite sum converges to the full journey.',
  },
];
