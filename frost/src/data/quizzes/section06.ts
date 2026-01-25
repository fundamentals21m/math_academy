import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Starting from $z = k + s \\cdot c$, what is the first step in proving $[z]G = R + [c]Y$?',
    options: [
      'Substitute $Y = [s]G$ into the equation',
      'Compute the hash $c = H(R \\| Y \\| m)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The proof starts by substituting the definition $z = k + s \\cdot c$ into $[z]G$, giving us $[k + s \\cdot c]G$ on the left side.',
  },
      'Apply scalar multiplication to get $[k + s \\cdot c]G
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The proof starts by substituting the definition $z = k + s \\cdot c$ into $[z]G$, giving us $[k + s \\cdot c]G$ on the left side.',
  },
      'Factor out $G$ from both sides',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The proof starts by substituting the definition $z = k + s \\cdot c$ into $[z]G$, giving us $[k + s \\cdot c]G$ on the left side.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which algebraic property allows us to write $[k + s \\cdot c]G = [k]G + [s \\cdot c]G$?',
    options: [
      'Commutativity of scalar multiplication',
      'Associativity of the group operation',
      'The discrete logarithm hardness assumption',
      'Distributivity of scalar addition over point multiplication',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Distributivity states that $[a + b]G = [a]G + [b]G$. This allows us to split the scalar sum into a sum of points.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the verification proof, we use $R = [k]G$ and $Y = [s]G$. What relationship completes the proof?',
    options: [
      '$[s \\cdot c]G = [s]G \\cdot [c]G
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The key relationship is $[s \\cdot c]G = [c]([s]G) = [c]Y$, using the associativity of scalar multiplication: multiplying by $c$ then by $G$ equals multiplying $[s]G$ by $c$.',
  },
      '$[s \\cdot c]G = [c]([s]G) = [c]Y
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The key relationship is $[s \\cdot c]G = [c]([s]G) = [c]Y$, using the associativity of scalar multiplication: multiplying by $c$ then by $G$ equals multiplying $[s]G$ by $c$.',
  },
      '$[s \\cdot c]G = [s + c]G
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The key relationship is $[s \\cdot c]G = [c]([s]G) = [c]Y$, using the associativity of scalar multiplication: multiplying by $c$ then by $G$ equals multiplying $[s]G$ by $c$.',
  },
      '$[s \\cdot c]G = [s]G + [c]G
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The key relationship is $[s \\cdot c]G = [c]([s]G) = [c]Y$, using the associativity of scalar multiplication: multiplying by $c$ then by $G$ equals multiplying $[s]G$ by $c$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The key relationship is $[s \\cdot c]G = [c]([s]G) = [c]Y$, using the associativity of scalar multiplication: multiplying by $c$ then by $G$ equals multiplying $[s]G$ by $c$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the verification equation $[z]G = R + [c]Y$ prove about the signer?',
    options: [
      'The signer knows the secret $s$ corresponding to public key $Y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The verification equation proves the signer knows $s$. To produce a valid $z = k + s \\cdot c$ for a commitment $R = [k]G$ and challenge $c$, the signer must know $s$.',
  },
      'The signer knows the message $m
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The verification equation proves the signer knows $s$. To produce a valid $z = k + s \\cdot c$ for a commitment $R = [k]G$ and challenge $c$, the signer must know $s$.',
  },
      'The signer used a hardware wallet',
      'The signer has access to the blockchain',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The verification equation proves the signer knows $s$. To produce a valid $z = k + s \\cdot c$ for a commitment $R = [k]G$ and challenge $c$, the signer must know $s$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is the linearity property $[s_1]G + [s_2]G = [s_1 + s_2]G$ crucial for FROST?',
    options: [
      'It allows faster computation of scalar multiplication',
      'It makes signatures smaller on-chain',
      'It enables combining partial signature shares without revealing individual secrets',
      'It provides quantum resistance',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Linearity allows FROST participants to compute $z_i = k_i + s_i \\lambda_i \\cdot c$ locally, and when summed: $\\sum z_i = k + s \\cdot c$. The final signature is correct without anyone computing $s$ directly.',
  },
];
