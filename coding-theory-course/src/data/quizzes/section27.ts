import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An integer $a$ is a quadratic residue modulo a prime $p$ if:',
    options: [
      '$a \\equiv b^2 \\pmod{p}$ for some integer $b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A quadratic residue modulo $p$ is an integer $a$ that is congruent to a perfect square modulo $p$: there exists $b$ with $a \\equiv b^2 \\pmod{p}$.',
  },
      '$a$ divides $p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A quadratic residue modulo $p$ is an integer $a$ that is congruent to a perfect square modulo $p$: there exists $b$ with $a \\equiv b^2 \\pmod{p}$.',
  },
      '$\\gcd(a, p) > 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A quadratic residue modulo $p$ is an integer $a$ that is congruent to a perfect square modulo $p$: there exists $b$ with $a \\equiv b^2 \\pmod{p}$.',
  },
      '$a$ is even',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A quadratic residue modulo $p$ is an integer $a$ that is congruent to a perfect square modulo $p$: there exists $b$ with $a \\equiv b^2 \\pmod{p}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The quadratic residue (QR) code of length $p$ (prime) over $\\mathbb{F}_q$ is defined using:',
    options: [
      'The set of all elements in $\\mathbb{Z}_p
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'QR codes are cyclic codes whose generator polynomial has roots at $\\alpha^r$ where $r$ runs over quadratic residues (or non-residues) modulo $p$.',
  },
      'The set of prime elements less than $p
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'QR codes are cyclic codes whose generator polynomial has roots at $\\alpha^r$ where $r$ runs over quadratic residues (or non-residues) modulo $p$.',
  },
      'The Frobenius automorphism',
      'The set of quadratic residues in $\\mathbb{Z}_p^*
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'QR codes are cyclic codes whose generator polynomial has roots at $\\alpha^r$ where $r$ runs over quadratic residues (or non-residues) modulo $p$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'QR codes are cyclic codes whose generator polynomial has roots at $\\alpha^r$ where $r$ runs over quadratic residues (or non-residues) modulo $p$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'For the prime $p = 7$, the quadratic residues modulo 7 are $\\{1, 2, 4\\}$. How many quadratic residues are there in $\\mathbb{Z}_7^*$?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 6, precision: 0 },
    difficulty: 'easy',
    explanation: 'For an odd prime $p$, exactly half of the non-zero elements are quadratic residues. For $p = 7$: $(p-1)/2 = 3$ quadratic residues.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The binary QR code of length $23$ is related to which famous code?',
    options: [
      'The Hamming $[7, 4, 3]$ code',
      'The binary Golay $[23, 12, 7]$ code',
      'The Reed-Solomon code',
      'The repetition code',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The binary $[23, 12, 7]$ Golay code is a quadratic residue code. It is one of the most remarkable codes in coding theory, with connections to sporadic simple groups.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a QR code to exist over $\\mathbb{F}_q$ with length $p$ (prime), a necessary condition is:',
    options: [
      '$p = q
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'QR codes of length $p$ over $\\mathbb{F}_q$ exist when $q$ is a quadratic residue modulo $p$. This ensures the cyclotomic cosets have the right structure.',
  },
      '$q$ is a quadratic residue modulo $p
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'QR codes of length $p$ over $\\mathbb{F}_q$ exist when $q$ is a quadratic residue modulo $p$. This ensures the cyclotomic cosets have the right structure.',
  },
      '$p$ is a quadratic residue modulo $q
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'QR codes of length $p$ over $\\mathbb{F}_q$ exist when $q$ is a quadratic residue modulo $p$. This ensures the cyclotomic cosets have the right structure.',
  },
      '$q$ divides $p - 1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'QR codes of length $p$ over $\\mathbb{F}_q$ exist when $q$ is a quadratic residue modulo $p$. This ensures the cyclotomic cosets have the right structure.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'QR codes of length $p$ over $\\mathbb{F}_q$ exist when $q$ is a quadratic residue modulo $p$. This ensures the cyclotomic cosets have the right structure.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The idempotents of quadratic residue codes can be expressed using:',
    options: [
      'Quadratic Gauss sums',
      'Lagrange interpolation',
      'Matrix determinants',
      'The Euclidean algorithm',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The idempotents of QR codes involve quadratic Gauss sums $\\sum_{a \\in QR} \\zeta^a$ where $\\zeta$ is a primitive $p$-th root of unity. These have beautiful number-theoretic properties.',
  },
];
