import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Given additive nonce shares $k_1 = 100$, $k_2 = 200$, $k_3 = 150$ and Lagrange coefficients $\\lambda_1 = 3$, $\\lambda_2 = -3$, $\\lambda_3 = 1$, what is $\\tilde{k}_2$ (the polynomial share for participant 2)?',
    options: ['$100/3$', '$-200/3$', '$150$', '$600$'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Using the transformation $\\tilde{k}_i = k_i / \\lambda_i$, we get $\\tilde{k}_2 = 200 / (-3) = -200/3$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When verifying the polynomial share reconstruction $k = \\sum \\tilde{k}_i \\cdot \\lambda_i$ with converted shares, what happens to the Lagrange coefficients?',
    options: [
      'They are doubled',
      'They cancel out, leaving the original additive sum',
      'They become negative',
      'They are squared',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'When reconstructing: $\\sum \\tilde{k}_i \\cdot \\lambda_i = \\sum (k_i / \\lambda_i) \\cdot \\lambda_i = \\sum k_i$. The Lagrange coefficients cancel, giving back the original additive sum.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In modular arithmetic (used in practice), how is division by $\\lambda_i$ computed?',
    options: [
      'Using floating point division',
      'Using multiplication by the modular inverse of $\\lambda_i$',
      'Using subtraction',
      'Using the square root',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In modular arithmetic mod $q$, division by $\\lambda_i$ is computed as multiplication by its modular inverse: $k_i / \\lambda_i = k_i \\cdot \\lambda_i^{-1} \\mod q$. There are no fractions in the actual computation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If polynomial shares of the secret $s$ are $s_1 = 42$, $s_2 = 67$, $s_3 = 31$ with $\\lambda_1 = 3$, $\\lambda_2 = -3$, $\\lambda_3 = 1$, what is the additive share $\\tilde{s}_1$?',
    options: ['$42$', '$126$', '$14$', '$-126$'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Converting polynomial to additive: $\\tilde{s}_1 = s_1 \\cdot \\lambda_1 = 42 \\cdot 3 = 126$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the main purpose of share conversion in FROST?',
    options: [
      'To make shares smaller for storage',
      'To enable combining additively-shared nonces with polynomially-shared secret keys',
      'To encrypt the shares',
      'To verify the shares are correct',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Share conversion allows FROST to combine the additively-shared nonce $k$ with the polynomially-shared secret key $s$ in the Schnorr response formula $z = k + s \\cdot c$, enabling distributed computation without reconstruction.',
  },
];
