import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is finite field arithmetic in the context of FROST?',
    options: [
      'Arithmetic with very small numbers',
      'Arithmetic with floating-point numbers',
      'Arithmetic limited to a finite number of operations',
      'Arithmetic modulo a prime $p$, where all operations stay within $\\{0, 1, \\ldots, p-1\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'FROST performs all scalar arithmetic in the finite field $\\mathbb{F}_p$ where $p$ is the curve order. Addition, subtraction, and multiplication are done modulo $p$, and division uses modular inverses.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'FROST performs all scalar arithmetic in the finite field $\\mathbb{F}_p$ where $p$ is the curve order. Addition, subtraction, and multiplication are done modulo $p$, and division uses modular inverses.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is division $a/b$ computed in a finite field $\\mathbb{F}_p$?',
    options: [
      'Standard floating-point division rounded to nearest integer',
      'Multiplication by the modular inverse: $a \\cdot b^{-1} \\mod p$',
      'Repeated subtraction until zero',
      'Division is not possible in finite fields',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In $\\mathbb{F}_p$, division by $b$ means multiplying by $b^{-1}$ where $b \\cdot b^{-1} \\equiv 1 \\pmod{p}$. The inverse is computed using the extended Euclidean algorithm or Fermat\'s little theorem: $b^{-1} = b^{p-2} \\mod p$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is constant-time implementation critical for FROST field arithmetic?',
    options: [
      'To prevent timing side-channel attacks that leak secret information',
      'To ensure consistent transaction confirmation times',
      'To meet regulatory requirements',
      'To reduce power consumption',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If computation time depends on secret values (like private key bits), attackers can measure timing variations to extract secrets. Constant-time code ensures operations take the same time regardless of input values, preventing timing attacks.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the order of the secp256k1 curve used in Bitcoin?',
    options: [
      '$2^{128}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'secp256k1 has order $n \\approx 2^{256}$ (slightly less). This is the number of points on the curve and the modulus for scalar arithmetic. The field prime $p$ is different and governs coordinate arithmetic.',
  },
      '$p = 2^{256} - 2^{32} - 977$ (the field prime)',
      '$n = $ FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141 (hex)',
      '$2^{256}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'secp256k1 has order $n \\approx 2^{256}$ (slightly less). This is the number of points on the curve and the modulus for scalar arithmetic. The field prime $p$ is different and governs coordinate arithmetic.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'secp256k1 has order $n \\approx 2^{256}$ (slightly less). This is the number of points on the curve and the modulus for scalar arithmetic. The field prime $p$ is different and governs coordinate arithmetic.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What technique is commonly used for efficient modular multiplication of large integers?',
    options: [
      'Standard grade-school multiplication',
      'Montgomery multiplication, which avoids expensive division',
      'Repeated addition',
      'Lookup tables for all possible products',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Montgomery multiplication transforms numbers into "Montgomery form" where modular reduction uses only shifts and additions instead of division. This significantly speeds up sequences of multiplications, crucial for scalar multiplication.',
  },
];
