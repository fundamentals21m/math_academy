import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is recursive FROST?',
    options: [
      'FROST that calls itself indefinitely',
      'FROST where threshold groups can themselves be participants in larger threshold groups',
      'FROST with recursive data structures',
      'A faster version of FROST',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Recursive FROST creates hierarchical threshold structures: a $t$-of-$n$ group might include members that are themselves threshold groups, enabling complex organizational structures.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What organizational structure might benefit from recursive FROST?',
    options: [
      'A single user with one key',
      'A simple 2-of-3 wallet',
      'Automated trading bots',
      'A corporation where departments are threshold groups, and the corporation is a threshold of departments',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Large organizations can mirror their structure: each department is a threshold group, and major decisions require threshold agreement across departments.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What challenge does recursive FROST introduce compared to flat FROST?',
    options: [
      'Smaller signatures',
      'Reduced security',
      'Fewer participants can be involved',
      'Increased coordination complexity and latency across nested groups',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Recursive structures require coordination within and between groups, potentially multiplying communication rounds and requiring more sophisticated protocols.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'From the verifier\'s perspective, how does a recursive FROST signature appear?',
    options: [
      'As multiple separate signatures',
      'As a larger, more complex signature',
      'As a single standard Schnorr signature, indistinguishable from non-recursive FROST',
      'The verifier must know the recursion depth',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The final aggregated signature is still a standard Schnorr signature. The recursive structure is internal to the signing process and invisible to verifiers.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is a potential security consideration unique to recursive FROST?',
    options: [
      'Compromise of an inner group\\\\'s threshold affects the outer group\\\\'s security',
      'Quantum vulnerability',
      'Nonce management is simpler',
      'Hash function weaknesses',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'If an inner threshold group is compromised (attacker controls $t$ members), they control that group\'s "vote" in the outer structure, potentially reaching the outer threshold.',
  },
];
