import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A topological space is defined by specifying:',
    options: [
      'A distance function',
      'A collection of open sets satisfying certain axioms',
      'A norm',
      'An inner product'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A topological space is a set $X$ together with a collection of "open sets" satisfying: (1) $\\emptyset$ and $X$ are open, (2) arbitrary unions of open sets are open, (3) finite intersections of open sets are open.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every metric space is a topological space with the topology induced by:',
    options: [
      'Declaring all sets open',
      'Declaring only $\\emptyset$ and $X$ open',
      'Declaring sets open if they are unions of open balls',
      'Declaring sets open if they are closed under the metric'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The metric topology has open sets that are unions of open balls. This makes every metric space a topological space.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A topological space that can be given a metric inducing its topology is called:',
    options: [
      'Complete',
      'Metrizable',
      'Normal',
      'Hausdorff'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A metrizable space is one whose topology comes from some metric.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which property do all metric spaces have that some topological spaces lack?',
    options: [
      'Compactness',
      'Connectedness',
      'The Hausdorff property (distinct points have disjoint neighborhoods)',
      'Completeness'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'All metric spaces are Hausdorff: if $x \\neq y$, balls of radius $d(x,y)/2$ around each are disjoint. Not all topological spaces are Hausdorff.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In a general topological space, a function $f: X \\to Y$ is continuous if:',
    options: [
      'The preimage of every open set is open',
      'The image of every open set is open',
      'It satisfies the $\\varepsilon$-$\\delta$ definition',
      '$f$ is bounded'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In topology, continuity is defined as: preimages of open sets are open. This generalizes the metric space definition.',
  },
];
