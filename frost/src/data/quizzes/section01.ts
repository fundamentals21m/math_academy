import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a $(t, n)$-threshold scheme, what does the parameter $t$ represent?',
    options: [
      'The total number of shares created',
      'The minimum number of shares needed to reconstruct the secret',
      'The maximum number of participants who can be compromised',
      'The degree of the polynomial used for sharing',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In a $(t, n)$-threshold scheme, $t$ represents the threshold - the minimum number of shares required to reconstruct the secret. Any $t$ shares can recover $s$, while $t-1$ shares reveal nothing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a 2-of-3 threshold scheme, what happens if an attacker steals exactly 1 share?',
    options: [
      'They can reconstruct half of the secret',
      'They can reconstruct the secret with enough computation',
      'They learn zero information about the secret',
      'They can forge signatures but not recover the key',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A key property of threshold schemes is that $t-1$ shares reveal nothing about the secret. In a 2-of-3 scheme, having only 1 share provides zero information about $s$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the "single point of failure problem" that threshold schemes aim to solve?',
    options: [
      'The risk that one compromised device or lost key means total loss of funds',
      'The problem of slow transaction verification on blockchain',
      'The high cost of on-chain multisig transactions',
      'The difficulty of generating truly random numbers',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The single point of failure problem is that a single private key, if stolen or lost, results in complete loss of control over the associated funds. Threshold schemes distribute this risk across multiple parties.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'In a 3-of-5 threshold scheme, how many shares can an attacker possess while still learning nothing about the secret?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 5, precision: 0 },
    difficulty: 'easy',
    explanation: 'In a $t$-of-$n$ threshold scheme, an attacker can possess up to $t-1$ shares without learning anything about the secret. For a 3-of-5 scheme, this means $3-1=2$ shares.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a challenge mentioned for building threshold signature schemes?',
    options: [
      '$t-1$ shares must reveal zero information',
      'Must be compatible with signature operations, not just reconstruction',
      'Exactly $t$ shares needed, no more, no less',
      'The polynomial coefficients must all be prime numbers',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The three main challenges are: the threshold property (exactly $t$ shares needed), information-theoretic security ($t-1$ shares reveal nothing), and usability with signatures (being able to sign without reconstructing). There is no requirement for polynomial coefficients to be prime.',
  },
];
