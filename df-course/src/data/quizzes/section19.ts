import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The alternating group $A_n$ is defined as:',
    options: [
      'All permutations in $S_n$',
      'All even permutations in $S_n$',
      'All odd permutations in $S_n$',
      'All cyclic permutations in $S_n$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$A_n$ consists of all even permutations (those that can be written as a product of an even number of transpositions).',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is $|A_5|$?',
    correctAnswer: 60,
    numericRange: { min: 1, max: 200, precision: 0 },
    difficulty: 'easy',
    explanation: '$|A_n| = n!/2$. So $|A_5| = 5!/2 = 120/2 = 60$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The sign (signature) homomorphism $\\text{sgn}: S_n \\to \\{\\pm 1\\}$ maps even permutations to:',
    options: [
      '$-1$',
      '$1$',
      '$0$',
      'Depends on $n$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\text{sgn}(\\sigma) = 1$ if $\\sigma$ is even, and $\\text{sgn}(\\sigma) = -1$ if $\\sigma$ is odd.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The kernel of the sign homomorphism $\\text{sgn}: S_n \\to \\{\\pm 1\\}$ is:',
    options: [
      '$S_n$',
      '$A_n$',
      '$\\{e\\}$',
      'The set of transpositions'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\ker(\\text{sgn}) = \\{\\sigma : \\text{sgn}(\\sigma) = 1\\} = A_n$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Is $A_n$ a normal subgroup of $S_n$?',
    options: [
      'Yes, because it has index 2',
      'No, because $S_n$ is not abelian',
      'Only for $n \\geq 5$',
      'Only for $n \\leq 4$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Any subgroup of index 2 is normal. Since $[S_n : A_n] = 2$, $A_n$ is normal in $S_n$.',
  },
];
