import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Drijvers attack that FROST specifically prevents?',
    options: [
      'An attack exploiting weak random number generation',
      'A parallel session attack using Wagner\'s algorithm to forge signatures',
      'A timing side-channel attack on scalar multiplication',
      'A man-in-the-middle attack on the communication channel',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Drijvers attack exploits parallel signing sessions using Wagner\'s generalized birthday algorithm. An adversary running many concurrent sessions can manipulate nonce commitments to create forgeries. FROST\'s binding mechanism prevents this by making each participant\'s contribution depend on all commitments.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does FROST prevent key extraction attacks where corrupted parties try to learn the secret key?',
    options: [
      'By encrypting all communication between parties',
      'By requiring physical security for all key storage',
      'By using Shamir secret sharing where $t-1$ shares reveal nothing about $s$',
      'By rotating keys after every signature'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'FROST uses Shamir\'s $(t, n)$ secret sharing, which has information-theoretic security: any $t-1$ or fewer shares reveal absolutely nothing about the secret $s$. Even with unbounded computational power, corrupted parties cannot extract the key from their shares alone.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the ROS (Random inhomogeneities in a Overdetermined Solvable system) attack?',
    options: [
      'An algebraic attack that solves systems of linear equations to forge signatures',
      'An attack on the random number generator',
      'A denial-of-service attack on the coordinator',
      'An attack exploiting network latency variations',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The ROS attack exploits schemes where an adversary can collect enough linear equations relating secret values. By solving this overdetermined system, they can forge signatures. FROST\'s binding coefficients $\\rho_i$ make the system non-linear and unsolvable.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why can\'t a malicious participant forge a signature share for another honest participant?',
    options: [
      'Because all communication is encrypted end-to-end',
      'Because the coordinator checks IP addresses of all participants',
      'Because shares expire after a fixed time period',
      'Because signature shares can be verified against public verification keys $Y_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each participant $i$ has a public verification key $Y_i = [s_i]G$. Any signature share $z_i$ can be verified using the equation $[z_i]G = R_i + [\\lambda_i \\cdot c]Y_i$. A forged share would fail this verification check.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Each participant $i$ has a public verification key $Y_i = [s_i]G$. Any signature share $z_i$ can be verified using the equation $[z_i]G = R_i + [\\lambda_i \\cdot c]Y_i$. A forged share would fail this verification check.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does FROST handle a participant who submits an invalid signature share?',
    options: [
      'The protocol automatically corrects the invalid share',
      'Other participants vote on whether to accept the share',
      'The coordinator identifies and excludes the misbehaving party, aborting the session',
      'The invalid share is averaged with valid shares',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'FROST uses an "abort on misbehavior" model. When share verification fails, the coordinator identifies the misbehaving party and aborts the signing session. The identified party can be excluded from future sessions, providing accountability.',
  },
];
