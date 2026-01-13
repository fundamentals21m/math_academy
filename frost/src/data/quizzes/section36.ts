import type { QuizQuestion } from './types';

export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What type of proof technique does FROST use to establish its security?',
    options: [
      'Direct proof showing no adversary can forge',
      'Reduction to the hardness of the Discrete Logarithm Problem',
      'Information-theoretic proof with no computational assumptions',
      'Experimental verification through extensive testing',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'FROST uses a reduction proof: if an adversary $\\mathcal{A}$ can forge FROST signatures, we construct an algorithm $\\mathcal{B}$ that uses $\\mathcal{A}$ to solve the Discrete Logarithm Problem. Since DLP is hard, no efficient forger can exist.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the security reduction, what role does the "simulator" play?',
    options: [
      'It generates random test cases for the adversary',
      'It emulates honest parties and oracles for the adversary while using adversary\'s forgery to solve DLP',
      'It measures the running time of the adversary',
      'It encrypts communication between parties',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The simulator $\\mathcal{B}$ receives a DLP challenge $Y = [x]G$ (find $x$). It embeds this challenge into a simulated FROST instance, answers all adversary queries consistently, and if the adversary produces a forgery, extracts the discrete log $x$ from it.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does "tight security reduction" mean?',
    options: [
      'The reduction uses minimal memory',
      'The adversary\'s success probability is preserved (nearly) exactly in the reduction',
      'The proof applies to all possible parameter choices',
      'The reduction completes in constant time',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A tight reduction means $\\varepsilon_{\\text{FROST}} \\approx \\varepsilon_{\\text{DLP}}$ with minimal loss. If the reduction is loose, even a weak forger might not help solve DLP efficiently. Tight reductions provide stronger concrete security guarantees.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is the Random Oracle Model (ROM) necessary for FROST\'s security proof?',
    options: [
      'Real hash functions are too slow for threshold signatures',
      'It allows the simulator to program hash outputs to embed the DLP challenge',
      'It makes the protocol more efficient',
      'It eliminates the need for secure communication channels',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In the ROM, the simulator controls the random oracle (hash function). This allows it to "program" specific outputs when needed to embed the DLP challenge consistently. Without this control, the simulator couldn\'t set up the reduction properly.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the main proof obligation for establishing FROST\'s EUF-CMA security?',
    options: [
      'Showing the protocol completes in polynomial time',
      'Showing any PPT adversary has negligible probability of outputting a valid forgery',
      'Showing all participants receive the same signature',
      'Showing the coordinator cannot learn the secret key',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'EUF-CMA security requires proving that any probabilistic polynomial-time (PPT) adversary $\\mathcal{A}$ has at most negligible probability of producing a valid signature $(R^*, z^*)$ on any message $m^*$ not previously signed, even after adaptive queries.',
  },
];
