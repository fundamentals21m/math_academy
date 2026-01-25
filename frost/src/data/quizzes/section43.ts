import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is hierarchical threshold signing (nested FROST)?',
    options: [
      'Using FROST with increasing threshold values over time',
      'A priority ordering of participants for signing',
      'FROST where each "participant" is itself a threshold group',
      'FROST with multiple rounds of communication',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In nested FROST, each logical participant in the outer FROST group is itself an inner FROST threshold group. For example, a 2-of-3 outer threshold where each of the 3 "participants" is a 3-of-5 inner group.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What organizational structure does hierarchical FROST naturally model?',
    options: [
      'Flat peer-to-peer networks',
      'Blockchain consensus mechanisms',
      'Single-user wallet applications',
      'Corporate hierarchies with departments that have their own signing authority',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Hierarchical FROST models organizations where departments (inner groups) have internal approval processes, and company-wide decisions require approval from multiple departments (outer threshold).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In a 2-of-3 outer FROST where each participant is a 2-of-3 inner FROST, what is the minimum number of individual signers needed?',
    options: [
      '4 signers',
      '2 signers',
      '3 signers',
      '6 signers',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'To activate 2 outer participants, each inner group needs 2 signers. So minimum is $2 \\times 2 = 4$ individual signers. These 4 signers must come from 2 different inner groups.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How is the inner group\'s contribution to the outer signature computed?',
    options: [
      'The inner group produces a full signature that the outer group verifies',
      'The inner group runs FROST to produce a signature share for the outer protocol',
      'Each inner participant sends their share directly to the outer coordinator',
      'The inner group votes on whether to approve the outer signature',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each inner FROST group runs its own threshold protocol to produce what appears as a single signature share to the outer FROST protocol. The inner group\'s aggregated share $z_{\\text{inner}} = \\sum_{j} z_j$ serves as one participant\'s contribution to the outer scheme.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is a key benefit of hierarchical FROST over flat threshold schemes?',
    options: [
      'Smaller signature size',
      'Faster verification',
      'Reduced computation for participants',
      'Flexible organizational policies with different thresholds at different levels',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Hierarchical FROST allows different thresholds at each level. A company might require 2-of-3 departments, but each department can set its own policy (e.g., engineering: 3-of-5, finance: 2-of-3). This flexibility matches real organizational needs.',
  },
];
