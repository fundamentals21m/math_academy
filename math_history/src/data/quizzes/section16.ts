import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 's16-e01',
    type: 'multiple-choice',
    question: 'Archimedes proved that the volume of a sphere is what fraction of its circumscribing cylinder?',
    difficulty: 'easy',
    options: ['1/2', '2/3', '3/4', '4/5'],
    correctIndex: 1,
    explanation:
      'Archimedes proved $V_{\\text{sphere}} = \\frac{2}{3} V_{\\text{cylinder}}$. This result was so important to him that he requested it be inscribed on his tombstone.',
  },
  {
    id: 's16-e02',
    type: 'multiple-choice',
    question: 'Archimedes approximated $\\pi$ by using:',
    difficulty: 'easy',
    options: [
      'A protractor',
      'Inscribed and circumscribed regular polygons',
      'Algebraic equations',
      'Random sampling',
    ],
    correctIndex: 1,
    explanation:
      'Archimedes inscribed and circumscribed regular polygons in a circle, starting with hexagons and doubling the sides up to 96-gons, to bound $\\pi$ between $3\\frac{10}{71}$ and $3\\frac{1}{7}$.',
  },
  {
    id: 's16-m01',
    type: 'multiple-choice',
    question: 'What is the surface area of a sphere with radius $r$?',
    difficulty: 'medium',
    options: ['$2\\pi r^2$', '$3\\pi r^2$', '$4\\pi r^2$', '$\\pi r^2$'],
    correctIndex: 2,
    explanation:
      'Archimedes proved the surface area of a sphere is $4\\pi r^2$, which equals four times the area of its great circle and also equals the lateral surface area of the circumscribing cylinder.',
  },
  {
    id: 's16-m02',
    type: 'numeric',
    question:
      'Archimedes showed $3\\frac{10}{71} < \\pi < 3\\frac{1}{7}$. The upper bound $3\\frac{1}{7}$ as a decimal is approximately (round to 2 decimal places):',
    difficulty: 'medium',
    correctAnswer: 3.14,
    explanation:
      '$3\\frac{1}{7} = \\frac{22}{7} \\approx 3.142857...$, which rounds to 3.14.',
  },
  {
    id: 's16-h01',
    type: 'multiple-choice',
    question:
      'In Archimedes\' "Mechanical Method," how did he discover (before rigorously proving) his results?',
    difficulty: 'hard',
    options: [
      'By trial and error with physical models',
      'By imagining figures as thin slices and "weighing" them using the lever law',
      'By divine inspiration',
      'By computing numerical approximations',
    ],
    correctIndex: 1,
    explanation:
      'Archimedes imagined figures composed of infinitely thin slices, then used the principle of the lever to balance unknown areas/volumes against known ones. This heuristic method let him discover results before proving them rigorously by exhaustion.',
  },
  {
    id: 's16-h02',
    type: 'multiple-choice',
    question:
      'How many sides did Archimedes\' final polygons have in his approximation of $\\pi$?',
    difficulty: 'hard',
    options: ['24', '48', '64', '96'],
    correctIndex: 3,
    explanation:
      'Archimedes doubled the sides starting from hexagons: 6 → 12 → 24 → 48 → 96. With 96-gons inscribed and circumscribed, he obtained his famous bounds on $\\pi$.',
  },
];
