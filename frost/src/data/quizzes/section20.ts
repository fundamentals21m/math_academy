import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What mathematical technique does the Drijvers attack exploit to forge signatures?',
    options: [
      'Brute force key search',
      'Hash collision attacks',
      'Factoring large primes',
      'Wagner\\\'s generalized birthday algorithm (k-tree algorithm)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: "The Drijvers attack uses Wagner's k-tree algorithm to solve a k-sum problem, finding linear combinations of challenges across parallel signing sessions that can be used to forge a signature.",
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Approximately how many operations does the Drijvers attack require using Wagner\'s algorithm?',
    options: [
      '$2^{256}$ operations (infeasible)',
      '$2^{128}$ operations',
      '$\\approx 2^{32}$ operations (feasible)',
      '$2^{16}$ operations',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: "Wagner's algorithm reduces the complexity from the naive $2^{256}$ to approximately $2^{32}$ operations, which is feasible with modern hardware in minutes to hours.",
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a prerequisite for the Drijvers attack to succeed?',
    options: [
      'The adversary must have access to multiple parallel signing sessions',
      'The adversary must control all participants',
      'The adversary must know the secret key',
      'The adversary must break the hash function',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Drijvers attack requires multiple parallel signing sessions to be active simultaneously. The adversary opens many sessions with honest participants and combines information across them.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which property of Schnorr signatures does the Drijvers attack exploit?',
    options: [
      'The hash function is collision-resistant',
      'The signature size is fixed',
      'The use of elliptic curves',
      'The linear algebraic structure: $z_j = k_j + s \\cdot c_j
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The attack exploits the linear structure $z_j = k_j + s \\cdot c_j$. By manipulating contributions across sessions, the adversary can construct $\\sum z_j$ that corresponds to a forged challenge $c^*$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The attack exploits the linear structure $z_j = k_j + s \\cdot c_j$. By manipulating contributions across sessions, the adversary can construct $\\sum z_j$ that corresponds to a forged challenge $c^*$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Before FROST, what difficult choice did threshold signature schemes face?',
    options: [
      'Between security and signature size',
      'Between allowing parallelism (fast but vulnerable) and sequential-only (secure but slow)',
      'Between using elliptic curves and RSA',
      'Between public and private verification',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Pre-FROST schemes had to choose: allow parallel sessions (practical for high throughput) and be vulnerable to Drijvers attack, or require sequential signing (secure but extremely slow).',
  },
];
