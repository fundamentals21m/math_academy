import type { QuizQuestion } from './types';

export const section09Quiz = {
  easy: [
    {
      id: 's09-e01',
      type: 'multiple-choice',
      question: 'What is the discrete logarithm problem?',
      options: [
        'Compute $g^x \\bmod p$ given $x$',
        'Given $g^x \\bmod p = h$, find $x$',
        'Find the prime factors of $n$',
        'Compute $\\gcd(a, b)$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The discrete log problem is finding the exponent $x$ given $g$, $h$, and $p$ where $g^x \\equiv h \\pmod{p}$.'
    },
    {
      id: 's09-e02',
      type: 'multiple-choice',
      question: 'If $2^x \\equiv 8 \\pmod{13}$, what is $x$?',
      options: ['$3$', '$4$', '$5$', '$2$'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2^3 = 8$, and since $8 < 13$, we have $2^3 \\equiv 8 \\pmod{13}$. Thus $x = 3$.'
    },
    {
      id: 's09-e03',
      type: 'numeric',
      question: 'Find $x$ where $3^x \\equiv 9 \\pmod{11}$. Enter the smallest positive $x$.',
      correctAnswer: 2,
      numericRange: { min: 1, max: 10 },
      difficulty: 'easy',
      explanation: '$3^2 = 9$, and $9 < 11$, so $3^2 \\equiv 9 \\pmod{11}$. Thus $x = 2$.'
    },
    {
      id: 's09-e04',
      type: 'multiple-choice',
      question: 'Why is the discrete log problem important for cryptography?',
      options: [
        'It is easy to solve for all numbers',
        'It only works with small numbers',
        'Exponentiation is easy, but finding the exponent is hard',
        'It is the same as addition'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The discrete log provides a one-way function: computing $g^x \\bmod p$ is easy, but finding $x$ from the result is computationally hard.'
    },
    {
      id: 's09-e05',
      type: 'numeric',
      question: 'If $5^x \\equiv 25 \\pmod{31}$, what is $x$?',
      correctAnswer: 2,
      numericRange: { min: 1, max: 30 },
      difficulty: 'easy',
      explanation: '$5^2 = 25$, and $25 < 31$, so $x = 2$.'
    },
    {
      id: 's09-e06',
      type: 'multiple-choice',
      question: 'In the equation $g^x \\equiv h \\pmod{p}$, what is $g$ called?',
      options: [
        'The discrete log',
        'The exponent',
        'The modulus',
        'The generator (or base)'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$g$ is called the generator or base of the group.'
    },
    {
      id: 's09-e07',
      type: 'numeric',
      question: 'Find $x$ where $2^x \\equiv 4 \\pmod{7}$.',
      correctAnswer: 2,
      numericRange: { min: 1, max: 6 },
      difficulty: 'easy',
      explanation: '$2^2 = 4$, and $4 < 7$, so $x = 2$.'
    },
    {
      id: 's09-e08',
      type: 'multiple-choice',
      question: 'Which of the following is the "easy" direction in discrete log cryptography?',
      options: [
        'Computing $g^x \\bmod p$ given $g$, $x$, and $p$',
        'Finding $x$ given $g^x \\bmod p$',
        'Factoring $p$ into primes',
        'Computing $\\sqrt{x} \\bmod p$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Modular exponentiation can be done efficiently using square-and-multiply, even for large numbers.'
    },
    {
      id: 's09-e09',
      type: 'numeric',
      question: 'If $7^x \\equiv 49 \\pmod{53}$, what is the smallest positive $x$?',
      correctAnswer: 2,
      numericRange: { min: 1, max: 52 },
      difficulty: 'easy',
      explanation: '$7^2 = 49$, and $49 < 53$, so $x = 2$.'
    },
    {
      id: 's09-e10',
      type: 'multiple-choice',
      question: 'The discrete log is analogous to which operation over real numbers?',
      options: [
        'Taking a square root',
        'Taking a logarithm',
        'Finding a derivative',
        'Computing a factorial'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Just as $\\log_g(h)$ finds the exponent $x$ where $g^x = h$ over reals, the discrete log finds $x$ where $g^x \\equiv h \\pmod{p}$.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's09-m01',
      type: 'numeric',
      question: 'Find the discrete log: $3^x \\equiv 5 \\pmod{7}$. What is $x$ (where $0 \\le x < 6$)?',
      correctAnswer: 5,
      numericRange: { min: 0, max: 5 },
      difficulty: 'medium',
      explanation: 'Computing powers of 3 mod 7: $3^1=3$, $3^2=2$, $3^3=6$, $3^4=4$, $3^5=5$. So $x = 5$.'
    },
    {
      id: 's09-m02',
      type: 'multiple-choice',
      question: 'What makes the discrete log hard to compute for large primes?',
      options: [
        'It cannot be computed for odd primes',
        'It requires complex numbers',
        'No polynomial-time algorithm is known',
        'The answer is always infinite'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'For large prime-order groups, the best known algorithms run in sub-exponential time, not polynomial time.'
    },
    {
      id: 's09-m03',
      type: 'numeric',
      question: 'Find $x$ where $2^x \\equiv 5 \\pmod{11}$. (Hint: compute powers of 2 mod 11)',
      correctAnswer: 4,
      numericRange: { min: 1, max: 10 },
      difficulty: 'medium',
      explanation: '$2^1=2$, $2^2=4$, $2^3=8$, $2^4=16\\equiv 5 \\pmod{11}$. So $x = 4$.'
    },
    {
      id: 's09-m04',
      type: 'multiple-choice',
      question: 'The order of an element $g$ modulo $p$ is:',
      options: [
        'Always equal to $p$',
        'The value of $g \\bmod p$',
        'The number of digits in $g$',
        'The smallest positive $k$ such that $g^k \\equiv 1 \\pmod{p}$'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'The order is the smallest positive exponent that returns the identity element (1) under modular exponentiation.'
    },
    {
      id: 's09-m05',
      type: 'numeric',
      question: 'What is the order of $2$ modulo $7$? (Find smallest $k$ where $2^k \\equiv 1 \\pmod{7}$)',
      correctAnswer: 3,
      numericRange: { min: 1, max: 6 },
      difficulty: 'medium',
      explanation: '$2^1=2$, $2^2=4$, $2^3=8\\equiv 1 \\pmod{7}$. The order is 3.'
    },
    {
      id: 's09-m06',
      type: 'multiple-choice',
      question: 'A generator $g$ of $\\mathbb{Z}_p^*$ has order:',
      options: [
        '$p - 1$',
        '$p$',
        '$p + 1$',
        '$1$'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'A generator creates all $p-1$ non-zero elements of $\\mathbb{Z}_p^*$, so its order is $p-1$.'
    },
    {
      id: 's09-m07',
      type: 'numeric',
      question: 'Find $x$ where $5^x \\equiv 4 \\pmod{7}$.',
      correctAnswer: 2,
      numericRange: { min: 1, max: 6 },
      difficulty: 'medium',
      explanation: '$5^1=5$, $5^2=25\\equiv 4 \\pmod{7}$. So $x = 2$.'
    },
    {
      id: 's09-m08',
      type: 'multiple-choice',
      question: 'Baby-step giant-step algorithm solves discrete log in time:',
      options: [
        '$O(n)$',
        '$O(\\sqrt{n})$ where $n$ is the group order',
        '$O(n^2)$',
        '$O(\\log n)$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Baby-step giant-step is a time-memory tradeoff that achieves $O(\\sqrt{n})$ time complexity.'
    },
    {
      id: 's09-m09',
      type: 'numeric',
      question: 'If $g$ has order $6$ mod $p$, and $g^x \\equiv g^{10} \\pmod{p}$, what is the smallest positive $x$?',
      correctAnswer: 4,
      numericRange: { min: 1, max: 5 },
      difficulty: 'medium',
      explanation: 'Since the order is 6, $g^{10} = g^{10 \\bmod 6} = g^4$. So $x = 4$.'
    },
    {
      id: 's09-m10',
      type: 'multiple-choice',
      question: 'Pollard\'s rho algorithm for discrete log uses:',
      options: [
        'Quantum computing',
        'Matrix factorization',
        'Cycle detection to find collisions',
        'Brute force enumeration'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Pollard\'s rho uses a pseudo-random walk and Floyd\'s cycle detection to find collisions that reveal the discrete log.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's09-h01',
      type: 'numeric',
      question: 'Find $x$ where $3^x \\equiv 13 \\pmod{17}$. (Order of 3 mod 17 is 16)',
      correctAnswer: 4,
      numericRange: { min: 1, max: 16 },
      difficulty: 'hard',
      explanation: '$3^1=3$, $3^2=9$, $3^3=27\\equiv 10$, $3^4=30\\equiv 13 \\pmod{17}$. So $x = 4$.'
    },
    {
      id: 's09-h02',
      type: 'multiple-choice',
      question: 'The index calculus method for discrete log works by:',
      options: [
        'Applying the Chinese Remainder Theorem directly',
        'Exhaustive search through all possible exponents',
        'Using quantum Fourier transforms',
        'Finding smooth numbers and solving a system of linear equations'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Index calculus factors numbers over a factor base, builds relations, and solves a linear system to find discrete logs.'
    },
    {
      id: 's09-h03',
      type: 'numeric',
      question: 'If $g$ is a generator of $\\mathbb{Z}_{23}^*$ with $g^5 \\equiv 7 \\pmod{23}$ and $g^{11} \\equiv 13 \\pmod{23}$, find $\\log_g(91 \\bmod 23)$ where $91 \\equiv 7 \\cdot 13 \\pmod{23}$.',
      correctAnswer: 16,
      numericRange: { min: 1, max: 22 },
      difficulty: 'hard',
      explanation: '$91 = 7 \\cdot 13 \\equiv g^5 \\cdot g^{11} = g^{16} \\pmod{23}$. So the discrete log is $16$.'
    },
    {
      id: 's09-h04',
      type: 'multiple-choice',
      question: 'Which assumption is stronger: Discrete Log Problem (DLP) or Computational Diffie-Hellman (CDH)?',
      options: [
        'DLP is stronger (DLP hard implies CDH hard)',
        'CDH is stronger',
        'They are equivalent',
        'Neither implies the other'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'If you can solve DLP, you can solve CDH. But solving CDH doesn\'t necessarily give you discrete logs. So DLP hardness implies CDH hardness.'
    },
    {
      id: 's09-h05',
      type: 'numeric',
      question: 'In $\\mathbb{Z}_{13}^*$, $2$ is a generator. Find $\\log_2(8) \\bmod 12$ (the order).',
      correctAnswer: 3,
      numericRange: { min: 0, max: 11 },
      difficulty: 'hard',
      explanation: '$2^3 = 8 < 13$, so $\\log_2(8) = 3$. We can verify: $2^3 \\equiv 8 \\pmod{13}$.'
    },
    {
      id: 's09-h06',
      type: 'multiple-choice',
      question: 'The Pohlig-Hellman algorithm is most effective when:',
      options: [
        'The group order is prime',
        'The group order has only small prime factors',
        'The generator is 2',
        'The modulus is a safe prime'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Pohlig-Hellman reduces the DLP to subgroups of prime order. If all prime factors are small, each subproblem is easy.'
    },
    {
      id: 's09-h07',
      type: 'numeric',
      question: 'Find $x$ where $2^x \\equiv 3 \\pmod{13}$ using the fact that $\\mathrm{ord}(2) = 12$ in $\\mathbb{Z}_{13}^*$.',
      correctAnswer: 4,
      numericRange: { min: 1, max: 12 },
      difficulty: 'hard',
      explanation: 'Computing: $2^1=2$, $2^2=4$, $2^3=8$, $2^4=16\\equiv 3 \\pmod{13}$. So $x = 4$.'
    },
    {
      id: 's09-h08',
      type: 'multiple-choice',
      question: 'A "safe prime" $p = 2q + 1$ where $q$ is prime is preferred for DLP because:',
      options: [
        'Safe primes are easier to find',
        'It makes the DLP easier to solve',
        'The subgroup of order $q$ resists Pohlig-Hellman attacks',
        'The generator is always 2'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'With $p = 2q+1$, the group $\\mathbb{Z}_p^*$ has a large prime-order subgroup of size $q$, making Pohlig-Hellman ineffective.'
    },
    {
      id: 's09-h09',
      type: 'numeric',
      question: 'If $5^a \\equiv 11 \\pmod{23}$ and $5^b \\equiv 22 \\pmod{23}$, and $11 \\cdot 22 \\equiv 12 \\pmod{23}$, what is $(a+b) \\bmod 22$? Given $5^{16} \\equiv 12 \\pmod{23}$.',
      correctAnswer: 16,
      numericRange: { min: 0, max: 21 },
      difficulty: 'hard',
      explanation: '$5^{a+b} = 5^a \\cdot 5^b \\equiv 11 \\cdot 22 = 242 \\equiv 12 \\pmod{23}$. Since $5^{16} \\equiv 12$, we have $a + b \\equiv 16 \\pmod{22}$.'
    },
    {
      id: 's09-h10',
      type: 'multiple-choice',
      question: 'Shor\'s quantum algorithm can solve discrete log in:',
      options: [
        'Sub-exponential time on a classical computer',
        'Polynomial time on a classical computer',
        'Exponential time on a quantum computer',
        'Polynomial time on a quantum computer'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Shor\'s algorithm uses quantum Fourier transforms to find the period of modular exponentiation, solving DLP in polynomial time.'
    }
  ] as QuizQuestion[]
};
