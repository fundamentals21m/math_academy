import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What problem does Feldman Verifiable Secret Sharing (VSS) solve that plain Shamir SSS cannot?',
    options: [
      'Reducing the number of shares needed for reconstruction',
      'Making reconstruction faster with parallel computation',
      'Enabling shares to be updated without changing the secret',
      'Allowing participants to verify their shares are correct without trusting the dealer',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Feldman VSS allows participants to verify their shares are valid. A malicious dealer giving incorrect shares would be detected, whereas plain Shamir requires trusting the dealer.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Feldman VSS, what are the commitments $C_j = [a_j]G$?',
    options: [
      'Curve points computed by scalar-multiplying the generator by each coefficient',
      'Hashes of the polynomial coefficients',
      'Random values chosen by participants',
      'Encrypted versions of the shares',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Commitments are $C_j = [a_j]G$ - each polynomial coefficient $a_j$ multiplied by the generator $G$. These hide the coefficients (discrete log hard) but allow verification.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What equation does participant $i$ check to verify their share $s_i$ in Feldman VSS?',
    options: [
      '$[s_i]G = C_0 \\cdot C_1 \\cdot \\ldots \\cdot C_{t-1}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The verification equation is $[s_i]G = C_0 + [i]C_1 + [i^2]C_2 + \\ldots + [i^{t-1}]C_{t-1}$. This is the polynomial evaluated "in the exponent" - it equals $[f(i)]G$ if the share is correct.',
  },
      '$s_i = C_0 + i \\cdot C_1 + i^2 \\cdot C_2 + \\ldots
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The verification equation is $[s_i]G = C_0 + [i]C_1 + [i^2]C_2 + \\ldots + [i^{t-1}]C_{t-1}$. This is the polynomial evaluated "in the exponent" - it equals $[f(i)]G$ if the share is correct.',
  },
      '$[s_i]G = C_0 + [i]C_1 + [i^2]C_2 + \\ldots + [i^{t-1}]C_{t-1}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The verification equation is $[s_i]G = C_0 + [i]C_1 + [i^2]C_2 + \\ldots + [i^{t-1}]C_{t-1}$. This is the polynomial evaluated "in the exponent" - it equals $[f(i)]G$ if the share is correct.',
  },
      '$[s_i]G = H(C_0, C_1, \\ldots, C_{t-1})
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The verification equation is $[s_i]G = C_0 + [i]C_1 + [i^2]C_2 + \\ldots + [i^{t-1}]C_{t-1}$. This is the polynomial evaluated "in the exponent" - it equals $[f(i)]G$ if the share is correct.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The verification equation is $[s_i]G = C_0 + [i]C_1 + [i^2]C_2 + \\ldots + [i^{t-1}]C_{t-1}$. This is the polynomial evaluated "in the exponent" - it equals $[f(i)]G$ if the share is correct.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a "verification share" $Y_j$ in Feldman VSS?',
    options: [
      'A backup copy of participant $j$\\'s share',
      'A hash that participant $j$ uses to prove they participated',
      'The dealer\\'s signature on participant $j$\\'s share',
      'The public key $[s_j]G$ corresponding to participant $j$\\'s secret share',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A verification share $Y_j = [s_j]G$ is the public key for participant $j$\'s secret share. Anyone can compute it from the commitments, enabling signature share verification in FROST.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If a dealer sends participant 2 an incorrect share $s_2\' = 200$ instead of the correct $s_2 = 108$, what happens during verification?',
    options: [
      'Verification passes because the dealer controls the commitments',
      'Verification fails: $[200]G \\neq C_0 + [2]C_1 + [4]C_2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The verification equation $[s_2\']G = [200]G$ will not equal $C_0 + [2]C_1 + [4]C_2 = [108]G$ because the commitments were published for the correct polynomial. Participant 2 detects the cheating.',
  },
      'The other participants cannot detect the cheating',
      'The incorrect share is automatically corrected',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The verification equation $[s_2\']G = [200]G$ will not equal $C_0 + [2]C_1 + [4]C_2 = [108]G$ because the commitments were published for the correct polynomial. Participant 2 detects the cheating.',
  },
];
