import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why is "abort on misbehavior" an acceptable security model for FROST?',
    options: [
      'Because aborts never happen in practice',
      'Because misbehaving parties can be identified and excluded from future sessions',
      'Because aborted signatures are still valid',
      'Because the protocol automatically retries until success',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When share verification fails, FROST identifies the misbehaving party. This party can be excluded from future signing sessions or have their reputation damaged. The ability to attribute misbehavior provides accountability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the verification equation used to detect invalid signature shares?',
    options: [
      '$[z_i]G = R_i$',
      '$[z_i]G = R_i + [\\lambda_i \\cdot c]Y_i$',
      '$[z_i]G = [c]Y_i$',
      '$z_i = \\lambda_i \\cdot c$',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each share $z_i$ is verified using $[z_i]G = R_i + [\\lambda_i \\cdot c]Y_i$ where $R_i$ is participant $i$\'s nonce commitment, $\\lambda_i$ is their Lagrange coefficient, $c$ is the challenge, and $Y_i$ is their public key share.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In a $(3, 5)$ FROST setup, what happens if one of the three signing participants submits an invalid share?',
    options: [
      'The signature is computed with only two valid shares',
      'The protocol aborts, the misbehaver is identified, and signing restarts with a different set',
      'The other two participants correct the invalid share',
      'The signature is invalid but still accepted',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'With an invalid share, aggregation would produce an invalid signature. The coordinator detects this via share verification, identifies the misbehaver, aborts, and can restart with a different set of 3 participants from the 5 available.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the computational cost of verifying a single signature share?',
    options: [
      'One hash computation',
      'Two elliptic curve point multiplications and one addition',
      'One modular exponentiation',
      'One polynomial evaluation',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Verifying $[z_i]G = R_i + [\\lambda_i \\cdot c]Y_i$ requires computing $[z_i]G$ (one scalar multiplication), $[\\lambda_i \\cdot c]Y_i$ (one scalar multiplication), and adding to $R_i$ (one point addition).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why might a rational (economically-motivated) adversary choose not to submit invalid shares?',
    options: [
      'Invalid shares are automatically corrected',
      'Misbehavior is detectable, attributable, and leads to exclusion from profitable signing sessions',
      'Invalid shares require more computation to generate',
      'The protocol financially penalizes invalid shares',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since misbehavior is detectable and attributable, a rational adversary gains nothing from submitting invalid shares except being excluded from future participation. The denial-of-service is temporary and the attacker loses their position.',
  },
];
