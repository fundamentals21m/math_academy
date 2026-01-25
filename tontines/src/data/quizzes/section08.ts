import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the basic tontine setup, if $N$ members each contribute $C$, the total pool $P$ is:',
    options: [
      '$P = C - N
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The total pool value P = N × C, the number of members times the contribution per member.',
  },
      '$P = N \\cdot C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The total pool value P = N × C, the number of members times the contribution per member.',
  },
      '$P = N + C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The total pool value P = N × C, the number of members times the contribution per member.',
  },
      '$P = N / C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The total pool value P = N × C, the number of members times the contribution per member.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The total pool value P = N × C, the number of members times the contribution per member.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a classic tontine, what happens to a deceased member\'s capital?',
    options: [
      'It is returned to their heirs',
      'It stays in the pool for surviving members',
      'It is paid to the government',
      'It is destroyed',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When you die, your capital stays in the pool for others—this is the core tontine mechanism that creates mortality credits.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The key variable $n_t$ in tontine tracking represents:',
    options: [
      'Number of survivors at time $t
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'n_t tracks the number of survivors at time t, which determines how the pool is divided.',
  },
      'Net investment returns at time $t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'n_t tracks the number of survivors at time t, which determines how the pool is divided.',
  },
      'Nominal contribution amount',
      'Next payout date',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'n_t tracks the number of survivors at time t, which determines how the pool is divided.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the classic tontine model, investment income is distributed while:',
    options: [
      'Principal is consumed gradually',
      'Principal is returned annually',
      'Principal grows at the inflation rate',
      'Principal stays intact',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In the classic tontine, only investment income is distributed—principal stays intact. Modern designs may consume principal gradually.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the standard example with 100 members contributing $100,000 each at 4% return, the total annual investment income is:',
    options: [
      '$400,000',
      '$4,000,000',
      '$100,000',
      '$1,000,000',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Pool = 100 × $100,000 = $10,000,000. Annual income = 4% × $10,000,000 = $400,000.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The payout per survivor $D_t$ depends on:',
    options: [
      'Only the initial contribution amount',
      'Government regulations only',
      'The pool value and number of survivors',
      'The age of the youngest member',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The payout per survivor D_t depends on the pool value P_t (and its returns) divided by the number of survivors n_t.',
  },
];
