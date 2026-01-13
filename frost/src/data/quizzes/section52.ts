import type { QuizQuestion } from './types';

export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does CSPRNG stand for in cryptographic implementations?',
    options: [
      'Cryptographic Secure Prime Number Generator',
      'Cryptographically Secure Pseudo-Random Number Generator',
      'Certified Standard Protocol for Random Number Generation',
      'Computational System for Polynomial Random Number Generation',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'CSPRNG stands for Cryptographically Secure Pseudo-Random Number Generator, which produces random values that are computationally indistinguishable from true randomness.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why must FROST nonces be generated using a CSPRNG rather than a standard PRNG?',
    options: [
      'Standard PRNGs are faster but less accurate',
      'Predictable nonces allow attackers to recover the secret key',
      'CSPRNGs produce larger numbers',
      'Standard PRNGs cannot generate numbers in the correct range',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If an attacker can predict the nonces used in FROST, they can compute the secret key. CSPRNGs ensure nonces are unpredictable even to an adversary who knows previous outputs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In FROST, what mathematical property must random nonces $d_i$ and $e_i$ satisfy?',
    options: [
      'They must be prime numbers',
      'They must be non-zero elements of $\\mathbb{Z}_q$',
      'They must sum to zero',
      'They must be powers of 2',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Nonces must be uniformly random non-zero elements of the scalar field $\\mathbb{Z}_q$ to ensure the security properties of the signature scheme.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a critical security concern when generating randomness in a virtual machine or container?',
    options: [
      'VMs cannot generate random numbers',
      'Entropy sources may be limited or predictable after VM snapshots',
      'Containers always share random numbers',
      'Virtual machines use floating point randomness',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VM snapshots can capture the RNG state, leading to nonce reuse if the VM is restored. Containers may also have limited entropy sources, requiring careful attention to randomness quality.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which system call provides cryptographic randomness on Linux systems?',
    options: [
      '$\\texttt{rand()}$',
      '$\\texttt{getrandom()}$ or reading from $\\texttt{/dev/urandom}$',
      '$\\texttt{malloc()}$',
      '$\\texttt{time()}$',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Linux provides $\\texttt{getrandom()}$ syscall and $\\texttt{/dev/urandom}$ for cryptographic randomness, backed by the kernel entropy pool.',
  },
];
