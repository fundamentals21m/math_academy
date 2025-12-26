import type { QuizQuestion } from './types';

export const section10Quiz = {
  easy: [
    {
      id: 's10-e01',
      type: 'multiple-choice',
      question: 'In RSA, what is $n$ computed from?',
      options: [
        '$n = p \\times q$ (product of two primes)',
        '$n = p + q$ (sum of two primes)',
        '$n = p^q$ (exponentiation)',
        '$n = \\gcd(p, q)$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'In RSA, $n$ is the product of two large distinct primes $p$ and $q$.'
    },
    {
      id: 's10-e02',
      type: 'multiple-choice',
      question: 'What mathematical problem is RSA security based on?',
      options: [
        'The difficulty of factoring large numbers',
        'The difficulty of computing square roots',
        'The difficulty of adding large numbers',
        'The difficulty of finding primes'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'RSA security relies on the computational difficulty of factoring the product of two large primes.'
    },
    {
      id: 's10-e03',
      type: 'numeric',
      question: 'If $p = 5$ and $q = 7$, what is $n$ for RSA?',
      correctAnswer: 35,
      numericRange: { min: 1, max: 100 },
      difficulty: 'easy',
      explanation: '$n = p \\times q = 5 \\times 7 = 35$.'
    },
    {
      id: 's10-e04',
      type: 'multiple-choice',
      question: 'In RSA, which key is used for encryption?',
      options: [
        'The public key $(e, n)$',
        'The private key $(d, n)$',
        'Both keys together',
        'Neither key'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'RSA encryption uses the recipient\'s public key $(e, n)$.'
    },
    {
      id: 's10-e05',
      type: 'numeric',
      question: 'If $p = 3$ and $q = 11$, what is $\\varphi(n) = (p-1)(q-1)$?',
      correctAnswer: 20,
      numericRange: { min: 1, max: 50 },
      difficulty: 'easy',
      explanation: '$\\varphi(n) = (3-1)(11-1) = 2 \\times 10 = 20$.'
    },
    {
      id: 's10-e06',
      type: 'multiple-choice',
      question: 'To decrypt RSA ciphertext $c$, we compute:',
      options: [
        '$c^d \\bmod n$',
        '$c^e \\bmod n$',
        '$c \\times d \\bmod n$',
        '$c + d \\bmod n$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'RSA decryption: $m = c^d \\bmod n$, where $d$ is the private exponent.'
    },
    {
      id: 's10-e07',
      type: 'multiple-choice',
      question: 'Why is $e = 65537$ commonly used in RSA?',
      options: [
        'It is prime and has few 1-bits in binary, making encryption fast',
        'It is the largest prime less than $2^{16}$',
        'It makes $d$ always equal to 1',
        'It is required by the RSA standard'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$65537 = 2^{16} + 1$ is prime with only two 1-bits (10000000000000001 in binary), making encryption via square-and-multiply very fast.'
    },
    {
      id: 's10-e08',
      type: 'numeric',
      question: 'If $p = 5$ and $q = 11$, what is $\\varphi(n)$?',
      correctAnswer: 40,
      numericRange: { min: 1, max: 100 },
      difficulty: 'easy',
      explanation: '$\\varphi(n) = (p-1)(q-1) = 4 \\times 10 = 40$.'
    },
    {
      id: 's10-e09',
      type: 'multiple-choice',
      question: 'In RSA, the public key consists of:',
      options: [
        '$(e, n)$',
        '$(d, n)$',
        '$(p, q)$',
        '$(e, d)$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The public key is $(e, n)$ where $e$ is the public exponent and $n$ is the modulus.'
    },
    {
      id: 's10-e10',
      type: 'multiple-choice',
      question: 'What must be true for $e$ to be valid in RSA?',
      options: [
        '$\\gcd(e, \\varphi(n)) = 1$',
        '$e > n$',
        '$e$ must be even',
        '$e = p + q$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$e$ must be coprime with $\\varphi(n)$ so that $d = e^{-1} \\bmod \\varphi(n)$ exists.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's10-m01',
      type: 'multiple-choice',
      question: 'In RSA, what is the relationship between $e$ and $d$?',
      options: [
        '$e \\times d \\equiv 1 \\pmod{\\varphi(n)}$',
        '$e + d = n$',
        '$e = d$',
        '$e \\times d = n$'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$d$ is the modular inverse of $e$ modulo $\\varphi(n)$: $e \\cdot d \\equiv 1 \\pmod{\\varphi(n)}$.'
    },
    {
      id: 's10-m02',
      type: 'numeric',
      question: 'If $p = 3$, $q = 11$, and $e = 7$, find $d$ where $e \\cdot d \\equiv 1 \\pmod{\\varphi(n)}$.',
      correctAnswer: 3,
      numericRange: { min: 1, max: 20 },
      difficulty: 'medium',
      explanation: '$\\varphi(n) = 2 \\times 10 = 20$. We need $7d \\equiv 1 \\pmod{20}$. Since $7 \\times 3 = 21 \\equiv 1 \\pmod{20}$, $d = 3$.'
    },
    {
      id: 's10-m03',
      type: 'numeric',
      question: 'Using RSA with $n = 33$, $e = 7$, encrypt $m = 2$. What is $c = m^e \\bmod n$?',
      correctAnswer: 29,
      numericRange: { min: 0, max: 32 },
      difficulty: 'medium',
      explanation: '$2^7 = 128$. $128 = 3 \\times 33 + 29 = 99 + 29$. So $c = 128 \\bmod 33 = 29$.'
    },
    {
      id: 's10-m04',
      type: 'multiple-choice',
      question: 'If an attacker factors $n$ into $p$ and $q$, they can:',
      options: [
        'Compute $\\varphi(n)$ and then find $d$',
        'Only decrypt messages shorter than $p$',
        'Only encrypt, not decrypt',
        'Nothing useful'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'With $p$ and $q$, the attacker computes $\\varphi(n) = (p-1)(q-1)$ and then $d = e^{-1} \\bmod \\varphi(n)$.'
    },
    {
      id: 's10-m05',
      type: 'numeric',
      question: 'With $p = 5$, $q = 7$, $e = 5$, find $d$ such that $ed \\equiv 1 \\pmod{24}$.',
      correctAnswer: 5,
      numericRange: { min: 1, max: 23 },
      difficulty: 'medium',
      explanation: '$\\varphi(35) = 4 \\times 6 = 24$. $5 \\times 5 = 25 \\equiv 1 \\pmod{24}$. So $d = 5$.'
    },
    {
      id: 's10-m06',
      type: 'multiple-choice',
      question: 'Why must $p$ and $q$ be kept secret in RSA?',
      options: [
        'They allow computation of $\\varphi(n)$ and thus $d$',
        'They are the encryption keys',
        'They are used directly for decryption',
        'Revealing them has no security impact'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'If $p$ and $q$ are known, an attacker can compute $\\varphi(n)$ and derive the private key $d$.'
    },
    {
      id: 's10-m07',
      type: 'numeric',
      question: 'If $n = 15$ and you know $\\varphi(n) = 8$, and $n = p \\cdot q$ where $p < q$, what is $p$?',
      correctAnswer: 3,
      numericRange: { min: 2, max: 7 },
      difficulty: 'medium',
      explanation: 'From $pq = 15$ and $(p-1)(q-1) = 8$: $pq - p - q + 1 = 8$, so $p + q = 15 - 8 + 1 = 8$. Solving $p + q = 8$ and $pq = 15$: $p = 3$, $q = 5$.'
    },
    {
      id: 's10-m08',
      type: 'multiple-choice',
      question: 'The RSA assumption states that:',
      options: [
        'Computing $e$-th roots mod $n$ is hard without knowing $d$',
        'Factoring is always polynomial time',
        'All primes are equally secure',
        'Encryption and decryption take the same time'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The RSA problem is: given $c = m^e \\bmod n$, find $m$. This is believed hard without the private key.'
    },
    {
      id: 's10-m09',
      type: 'numeric',
      question: 'RSA with $n = 55$ ($p=5$, $q=11$), $e = 3$. Encrypt $m = 7$. What is $c$?',
      correctAnswer: 13,
      numericRange: { min: 0, max: 54 },
      difficulty: 'medium',
      explanation: '$7^3 = 343 = 6 \\times 55 + 13 = 330 + 13$. So $c = 343 \\bmod 55 = 13$.'
    },
    {
      id: 's10-m10',
      type: 'multiple-choice',
      question: 'Why shouldn\'t $p$ and $q$ be close to each other in RSA?',
      options: [
        'Fermat\'s factorization can efficiently factor $n$ if $p \\approx q$',
        'It makes encryption slower',
        'It makes the key size larger',
        'Close primes are not coprime'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'If $p \\approx q$, then $\\sqrt{n} \\approx p \\approx q$, and Fermat\'s method finds factors quickly.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's10-h01',
      type: 'numeric',
      question: 'RSA: $p=7$, $q=11$, $e=13$. Find $d$ where $ed \\equiv 1 \\pmod{60}$.',
      correctAnswer: 37,
      numericRange: { min: 1, max: 59 },
      difficulty: 'hard',
      explanation: '$\\varphi(77) = 6 \\times 10 = 60$. Using extended Euclidean: $13 \\times 37 = 481 = 8 \\times 60 + 1$. So $d = 37$.'
    },
    {
      id: 's10-h02',
      type: 'multiple-choice',
      question: 'A Chosen Ciphertext Attack (CCA) on RSA exploits:',
      options: [
        'The malleability of RSA: $(c \\cdot r^e)^d = m \\cdot r$',
        'Weak random number generation',
        'Small public exponents only',
        'The prime factorization of $e$'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'RSA is multiplicatively homomorphic. An attacker can modify ciphertexts and learn about plaintexts from the decryption oracle.'
    },
    {
      id: 's10-h03',
      type: 'numeric',
      question: 'Using CRT optimization: if $m^d \\bmod p = 3$ and $m^d \\bmod q = 5$, with $p=7$, $q=11$, find $m^d \\bmod 77$.',
      correctAnswer: 38,
      numericRange: { min: 0, max: 76 },
      difficulty: 'hard',
      explanation: 'Using CRT: find $x$ where $x \\equiv 3 \\pmod 7$ and $x \\equiv 5 \\pmod{11}$. $x = 3 + 7k$ where $3 + 7k \\equiv 5 \\pmod{11}$, so $7k \\equiv 2 \\pmod{11}$. $7^{-1} \\equiv 8 \\pmod{11}$, so $k \\equiv 16 \\equiv 5 \\pmod{11}$. Thus $x = 3 + 35 = 38$.'
    },
    {
      id: 's10-h04',
      type: 'multiple-choice',
      question: 'Bleichenbacher\'s attack on PKCS#1 v1.5 padding exploits:',
      options: [
        'An oracle that reveals whether decrypted data has valid padding',
        'Weak random number generation',
        'Small prime factors of $n$',
        'The use of $e = 3$'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The attack uses padding validation errors as an oracle to gradually recover the plaintext through millions of queries.'
    },
    {
      id: 's10-h05',
      type: 'numeric',
      question: 'If $n = 323$ and $e = 5$, and an oracle reveals $\\varphi(n) = 288$, find $d$.',
      correctAnswer: 173,
      numericRange: { min: 1, max: 287 },
      difficulty: 'hard',
      explanation: 'We need $5d \\equiv 1 \\pmod{288}$. Using extended Euclidean: $5 \\times 173 = 865 = 3 \\times 288 + 1$. So $d = 173$.'
    },
    {
      id: 's10-h06',
      type: 'multiple-choice',
      question: 'Coppersmith\'s attack can break RSA when:',
      options: [
        'The message is small and $e$ is small (e.g., $m < n^{1/e}$)',
        'The primes $p$ and $q$ are safe primes',
        '$n$ has more than 2 prime factors',
        'The same message is encrypted with different keys'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'If $m^e < n$, then $c = m^e$ (no mod reduction), and $m = \\sqrt[e]{c}$ over the integers.'
    },
    {
      id: 's10-h07',
      type: 'numeric',
      question: 'Multi-prime RSA: $n = 3 \\times 5 \\times 7 = 105$. Find $\\varphi(n)$.',
      correctAnswer: 48,
      numericRange: { min: 1, max: 104 },
      difficulty: 'hard',
      explanation: '$\\varphi(105) = (3-1)(5-1)(7-1) = 2 \\times 4 \\times 6 = 48$.'
    },
    {
      id: 's10-h08',
      type: 'multiple-choice',
      question: 'RSA-OAEP (Optimal Asymmetric Encryption Padding) provides:',
      options: [
        'CCA2 security under the RSA assumption in the random oracle model',
        'Only CPA security',
        'Information-theoretic security',
        'Faster encryption than textbook RSA'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'OAEP adds randomness and structure to achieve chosen-ciphertext security, proven in the random oracle model.'
    },
    {
      id: 's10-h09',
      type: 'numeric',
      question: 'Wiener\'s attack works when $d < \\frac{1}{3}n^{1/4}$. If $n \\approx 10^{12}$, approximately what is the maximum vulnerable $d$?',
      correctAnswer: 333,
      numericRange: { min: 300, max: 400 },
      difficulty: 'hard',
      explanation: '$n^{1/4} = (10^{12})^{1/4} = 10^3 = 1000$. So $d < \\frac{1000}{3} \\approx 333$.'
    },
    {
      id: 's10-h10',
      type: 'multiple-choice',
      question: 'The Hastad broadcast attack applies when:',
      options: [
        'The same message is sent to $e$ recipients using $e = 3$ and distinct $n_i$',
        'A single recipient uses weak random padding',
        'The primes share common factors',
        'The decryption key is leaked'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'With $e$ ciphertexts $c_i = m^e \\bmod n_i$, use CRT to find $m^e$ and then take the $e$-th root over integers.'
    }
  ] as QuizQuestion[]
};
