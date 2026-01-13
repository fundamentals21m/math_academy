import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why does limiting parallelism (sequential signing only) fail as a solution to the Drijvers attack?',
    options: [
      'It makes signatures larger',
      'It defeats the purpose of threshold signatures for high-throughput applications',
      'It breaks the mathematical security',
      'It requires more participants',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Sequential-only signing would reduce throughput from thousands of signatures per second to about 10 (network latency dominated), making it impractical for institutional custody, exchanges, and Lightning nodes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is wrong with requiring message pre-commitment as a defense against Drijvers attack?',
    options: [
      'It doubles the signature size',
      'It reduces flexibility (message must be known early) and doesn\'t fully prevent the attack',
      'It requires more computational power',
      'It breaks Schnorr verification',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Message pre-commitment reduces flexibility (e.g., Bitcoin transactions may need last-minute fee adjustments) and only shifts the attack window rather than eliminating it entirely.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does an "all-or-nothing abort" protocol fail as a solution?',
    options: [
      'It makes signatures invalid',
      'It creates DoS vulnerability and cannot identify the misbehaving party',
      'It requires too much storage',
      'It breaks the threshold property',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'All-or-nothing abort allows one malicious party to stop all signing (denial of service), provides no accountability to identify the bad actor, and the attack may succeed before detection.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the common thread in why all naive solutions fail?',
    options: [
      'They all require too much computation',
      'They try to restrict the adversary without binding responses to session state',
      'They all break the signature format',
      'They all require more participants',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: "All naive solutions try to limit what the adversary can do. The key insight is that rather than restricting capabilities, we should make it impossible to benefit from parallel sessions by cryptographically binding each response to its context.",
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What are the four requirements for a real solution to the Drijvers attack?',
    options: [
      'Speed, size, simplicity, security',
      'Parallel sessions, no message pre-commitment, graceful degradation, mathematical security reduction',
      'More participants, larger keys, longer signatures, faster hashing',
      'Sequential only, pre-commitment, abort protocol, larger threshold',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A real solution must: support parallel sessions for throughput, allow late message selection, detect misbehavior without global abort, and have provable security reduction to discrete log.',
  },
];
