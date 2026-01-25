import type { QuizQuestion } from './types';

export const section04Quiz = {
  easy: [
    {
      id: 's04-e01',
      type: 'multiple-choice',
      question: 'What is the smallest prime number?',
      options: [
      '$1
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$2$ is the smallest prime and the only even prime number.'
    },
      '$3
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ is the smallest prime and the only even prime number.'
    },
      '$2
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ is the smallest prime and the only even prime number.'
    },
      '$0
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ is the smallest prime and the only even prime number.'
    },
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ is the smallest prime and the only even prime number.'
    },
    {
      id: 's04-e02',
      type: 'multiple-choice',
      question: 'Why is $1$ not considered a prime number?',
      options: [
      'By definition, primes have exactly two distinct divisors',
      '$1$ is too small',
      '$1$ is an even number',
      '$1$ cannot be factored',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'A prime has exactly two distinct divisors: $1$ and itself. The number $1$ has only one divisor (itself).'
    },
    {
      id: 's04-e03',
      type: 'multiple-choice',
      question: 'Which of the following is a prime number?',
      options: [
      '$15
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$17$ is prime. $15 = 3 \\times 5$, $21 = 3 \\times 7$, $25 = 5 \\times 5$.'
    },
      '$21
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$17$ is prime. $15 = 3 \\times 5$, $21 = 3 \\times 7$, $25 = 5 \\times 5$.'
    },
      '$17
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$17$ is prime. $15 = 3 \\times 5$, $21 = 3 \\times 7$, $25 = 5 \\times 5$.'
    },
      '$25
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$17$ is prime. $15 = 3 \\times 5$, $21 = 3 \\times 7$, $25 = 5 \\times 5$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$17$ is prime. $15 = 3 \\times 5$, $21 = 3 \\times 7$, $25 = 5 \\times 5$.'
    },
    {
      id: 's04-e04',
      type: 'numeric',
      question: 'How many prime numbers are there between 1 and 10?',
      correctAnswer: 4,
      numericRange: { min: 1, max: 10 },
      difficulty: 'easy',
      explanation: 'The primes between 1 and 10 are: 2, 3, 5, 7. That\'s 4 primes.'
    },
    {
      id: 's04-e05',
      type: 'multiple-choice',
      question: 'What is a composite number?',
      options: [
        'A prime number',
        'A number greater than 1 that is not prime',
        'A negative number',
        'A number less than 1'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A composite number is a positive integer greater than 1 that has at least one positive divisor other than 1 and itself.'
    },
    {
      id: 's04-e06',
      type: 'multiple-choice',
      question: 'Which of these is the only even prime number?',
      options: [
      '$4
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$2$ is the only even prime. All other even numbers are divisible by 2, so they\'re composite.'
    },
      '$6
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ is the only even prime. All other even numbers are divisible by 2, so they\'re composite.'
    },
      '$2
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ is the only even prime. All other even numbers are divisible by 2, so they\'re composite.'
    },
      '$8
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ is the only even prime. All other even numbers are divisible by 2, so they\'re composite.'
    },
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ is the only even prime. All other even numbers are divisible by 2, so they\'re composite.'
    },
    {
      id: 's04-e07',
      type: 'numeric',
      question: 'What is the smallest prime factor of $15$?',
      correctAnswer: 3,
      numericRange: { min: 1, max: 10 },
      difficulty: 'easy',
      explanation: '$15 = 3 \\times 5$. The smallest prime factor is $3$.'
    },
    {
      id: 's04-e08',
      type: 'multiple-choice',
      question: 'Is $2$ divisible by any number other than $1$ and itself?',
      options: [
      'Yes, by $0
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$2$ has exactly two divisors: $1$ and $2$. Therefore, it is prime.'
    },
      'Yes, by $-1
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ has exactly two divisors: $1$ and $2$. Therefore, it is prime.'
    },
      'Yes, by $2
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ has exactly two divisors: $1$ and $2$. Therefore, it is prime.'
    },
      'No, so it is prime',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$2$ has exactly two divisors: $1$ and $2$. Therefore, it is prime.'
    },
    {
      id: 's04-e09',
      type: 'numeric',
      question: 'What is $6$ expressed as a product of primes? Give the smaller prime factor.',
      correctAnswer: 2,
      numericRange: { min: 1, max: 10 },
      difficulty: 'easy',
      explanation: '$6 = 2 \\times 3$. The prime factorization uses primes $2$ and $3$. The smaller one is $2$.'
    },
    {
      id: 's04-e10',
      type: 'multiple-choice',
      question: 'Which statement about prime numbers is TRUE?',
      options: [
      'The largest prime is less than 1 billion',
      'All primes are odd',
      'Prime numbers can be negative',
      'There are infinitely many primes',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Euclid proved that there are infinitely many prime numbers. Not all primes are odd (2 is even), and there is no largest prime.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's04-m01',
      type: 'multiple-choice',
      question: 'Which of these is NOT a prime number?',
      options: [
      '$89
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$91 = 7 \\times 13$. The numbers $89$, $97$, and $83$ are all prime.'
    },
      '$97
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$91 = 7 \\times 13$. The numbers $89$, $97$, and $83$ are all prime.'
    },
      '$91
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$91 = 7 \\times 13$. The numbers $89$, $97$, and $83$ are all prime.'
    },
      '$83
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$91 = 7 \\times 13$. The numbers $89$, $97$, and $83$ are all prime.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$91 = 7 \\times 13$. The numbers $89$, $97$, and $83$ are all prime.'
    },
    {
      id: 's04-m02',
      type: 'numeric',
      question: 'What is the prime factorization of $60$? How many times does $2$ appear?',
      correctAnswer: 2,
      numericRange: { min: 0, max: 5 },
      difficulty: 'medium',
      explanation: '$60 = 2^2 \\times 3 \\times 5$. The prime $2$ appears twice.'
    },
    {
      id: 's04-m03',
      type: 'multiple-choice',
      question: 'The Fundamental Theorem of Arithmetic states that:',
      options: [
      'The sum of two primes is always composite',
      'There are infinitely many primes',
      'Every integer greater than 1 has a unique prime factorization',
      'All primes are odd except 2',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The Fundamental Theorem of Arithmetic states that every integer greater than 1 can be represented uniquely as a product of prime numbers (up to ordering).'
    },
    {
      id: 's04-m04',
      type: 'numeric',
      question: 'What is the sum of all prime factors of $30$?',
      correctAnswer: 10,
      numericRange: { min: 1, max: 20 },
      difficulty: 'medium',
      explanation: '$30 = 2 \\times 3 \\times 5$. Sum of prime factors: $2 + 3 + 5 = 10$.'
    },
    {
      id: 's04-m05',
      type: 'multiple-choice',
      question: 'To check if $n$ is prime, we only need to check for divisors up to:',
      options: [
      '$n/2
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'If $n$ has a factor greater than $\\sqrt{n}$, then it must also have a factor less than $\\sqrt{n}$. So checking up to $\\sqrt{n}$ is sufficient.'
    },
      '$\\sqrt{n}
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'If $n$ has a factor greater than $\\sqrt{n}$, then it must also have a factor less than $\\sqrt{n}$. So checking up to $\\sqrt{n}$ is sufficient.'
    },
      '$n-1
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'If $n$ has a factor greater than $\\sqrt{n}$, then it must also have a factor less than $\\sqrt{n}$. So checking up to $\\sqrt{n}$ is sufficient.'
    },
      '$n
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'If $n$ has a factor greater than $\\sqrt{n}$, then it must also have a factor less than $\\sqrt{n}$. So checking up to $\\sqrt{n}$ is sufficient.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'If $n$ has a factor greater than $\\sqrt{n}$, then it must also have a factor less than $\\sqrt{n}$. So checking up to $\\sqrt{n}$ is sufficient.'
    },
    {
      id: 's04-m06',
      type: 'numeric',
      question: 'How many primes are there between 10 and 30?',
      correctAnswer: 6,
      numericRange: { min: 1, max: 10 },
      difficulty: 'medium',
      explanation: 'Primes between 10 and 30: 11, 13, 17, 19, 23, 29. That\'s 6 primes.'
    },
    {
      id: 's04-m07',
      type: 'multiple-choice',
      question: 'What is the prime factorization of $100$?',
      options: [
      '$2 \\times 50
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$100 = 4 \\times 25 = 2^2 \\times 5^2$. Only the first option shows the complete prime factorization.'
    },
      '$4 \\times 25
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$100 = 4 \\times 25 = 2^2 \\times 5^2$. Only the first option shows the complete prime factorization.'
    },
      '$2^2 \\times 5^2
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$100 = 4 \\times 25 = 2^2 \\times 5^2$. Only the first option shows the complete prime factorization.'
    },
      '$10^2
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$100 = 4 \\times 25 = 2^2 \\times 5^2$. Only the first option shows the complete prime factorization.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$100 = 4 \\times 25 = 2^2 \\times 5^2$. Only the first option shows the complete prime factorization.'
    },
    {
      id: 's04-m08',
      type: 'numeric',
      question: 'What is the largest prime factor of $84$?',
      correctAnswer: 7,
      numericRange: { min: 1, max: 20 },
      difficulty: 'medium',
      explanation: '$84 = 2^2 \\times 3 \\times 7$. The largest prime factor is $7$.'
    },
    {
      id: 's04-m09',
      type: 'multiple-choice',
      question: 'Twin primes are pairs of primes that differ by 2. Which is a twin prime pair?',
      options: [
      '$(7, 11)
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$(11, 13)$ are twin primes since both are prime and differ by 2. Note: 21 = 3 × 7 is not prime.'
    },
      '$(11, 13)
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$(11, 13)$ are twin primes since both are prime and differ by 2. Note: 21 = 3 × 7 is not prime.'
    },
      '$(13, 17)
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$(11, 13)$ are twin primes since both are prime and differ by 2. Note: 21 = 3 × 7 is not prime.'
    },
      '$(19, 21)
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$(11, 13)$ are twin primes since both are prime and differ by 2. Note: 21 = 3 × 7 is not prime.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$(11, 13)$ are twin primes since both are prime and differ by 2. Note: 21 = 3 × 7 is not prime.'
    },
    {
      id: 's04-m10',
      type: 'numeric',
      question: 'What is $2 \\times 3 \\times 5 \\times 7$? (Product of first four primes)',
      correctAnswer: 210,
      numericRange: { min: 100, max: 300 },
      difficulty: 'medium',
      explanation: '$2 \\times 3 = 6$, $6 \\times 5 = 30$, $30 \\times 7 = 210$.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's04-h01',
      type: 'numeric',
      question: 'How many divisors does $p^3$ have, where $p$ is prime?',
      correctAnswer: 4,
      numericRange: { min: 1, max: 10 },
      difficulty: 'hard',
      explanation: 'For $p^3$, the divisors are $1, p, p^2, p^3$. In general, $p^n$ has $n+1$ divisors. So $p^3$ has $3+1=4$ divisors.'
    },
    {
      id: 's04-h02',
      type: 'multiple-choice',
      question: 'In Euclid\'s proof that there are infinitely many primes, what key insight is used?',
      options: [
        'The product of all known primes plus 1 is either prime or has a new prime factor',
        'Every even number greater than 2 can be expressed as the sum of two primes',
        'Prime gaps are bounded',
        'The prime counting function grows linearly'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Euclid showed that if $P = p_1 \\times p_2 \\times \\ldots \\times p_n + 1$, then $P$ is either prime or divisible by a prime not in the list, proving infinitely many primes exist.'
    },
    {
      id: 's04-h03',
      type: 'numeric',
      question: 'What is the number of divisors of $180$? (First find: $180 = 2^2 \\times 3^2 \\times 5$)',
      correctAnswer: 18,
      numericRange: { min: 10, max: 25 },
      difficulty: 'hard',
      explanation: '$180 = 2^2 \\times 3^2 \\times 5^1$. Number of divisors $= (2+1)(2+1)(1+1) = 3 \\times 3 \\times 2 = 18$.'
    },
    {
      id: 's04-h04',
      type: 'multiple-choice',
      question: 'A Mersenne prime has the form $2^p - 1$. Which statement is TRUE?',
      options: [
      'All numbers of the form $2^p - 1$ are prime',
      '$2^p - 1$ is always composite',
      '$p$ must be prime for $2^p - 1$ to possibly be prime',
      '$p$ can be any positive integer',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'If $p$ is composite, then $2^p - 1$ is also composite. So $p$ being prime is necessary (but not sufficient) for $2^p - 1$ to be prime.'
    },
    {
      id: 's04-h05',
      type: 'numeric',
      question: 'What is the smallest prime $p > 100$?',
      correctAnswer: 101,
      numericRange: { min: 100, max: 110 },
      difficulty: 'hard',
      explanation: '$101$ is prime: it\'s not divisible by 2, 3, 5, or 7 (we only need to check primes up to $\\sqrt{101} \\approx 10$).'
    },
    {
      id: 's04-h06',
      type: 'multiple-choice',
      question: 'The Prime Number Theorem states that the number of primes up to $n$ is approximately:',
      options: [
      '$\\sqrt{n}
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The Prime Number Theorem states that $\\pi(n) \\sim \\frac{n}{\\ln n}$, where $\\pi(n)$ is the number of primes up to $n$.'
    },
      '$\\frac{n}{2}
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The Prime Number Theorem states that $\\pi(n) \\sim \\frac{n}{\\ln n}$, where $\\pi(n)$ is the number of primes up to $n$.'
    },
      '$\\ln n
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The Prime Number Theorem states that $\\pi(n) \\sim \\frac{n}{\\ln n}$, where $\\pi(n)$ is the number of primes up to $n$.'
    },
      '$\\frac{n}{\\ln n}
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The Prime Number Theorem states that $\\pi(n) \\sim \\frac{n}{\\ln n}$, where $\\pi(n)$ is the number of primes up to $n$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The Prime Number Theorem states that $\\pi(n) \\sim \\frac{n}{\\ln n}$, where $\\pi(n)$ is the number of primes up to $n$.'
    },
    {
      id: 's04-h07',
      type: 'numeric',
      question: 'If $n = p \\times q$ where $p$ and $q$ are distinct primes, how many divisors does $n$ have?',
      correctAnswer: 4,
      numericRange: { min: 1, max: 10 },
      difficulty: 'hard',
      explanation: 'For $n = p^1 \\times q^1$, the number of divisors is $(1+1)(1+1) = 4$. They are: $1, p, q, pq$.'
    },
    {
      id: 's04-h08',
      type: 'multiple-choice',
      question: 'Which of the following is a counterexample to "$2^p - 1$ is prime for all primes $p$"?',
      options: [
      '$p = 2
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$2^{11} - 1 = 2047 = 23 \\times 89$, which is composite. But $2^2 - 1 = 3$, $2^3 - 1 = 7$, $2^5 - 1 = 31$ are all prime.'
    },
      '$p = 11
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$2^{11} - 1 = 2047 = 23 \\times 89$, which is composite. But $2^2 - 1 = 3$, $2^3 - 1 = 7$, $2^5 - 1 = 31$ are all prime.'
    },
      '$p = 3
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$2^{11} - 1 = 2047 = 23 \\times 89$, which is composite. But $2^2 - 1 = 3$, $2^3 - 1 = 7$, $2^5 - 1 = 31$ are all prime.'
    },
      '$p = 5
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$2^{11} - 1 = 2047 = 23 \\times 89$, which is composite. But $2^2 - 1 = 3$, $2^3 - 1 = 7$, $2^5 - 1 = 31$ are all prime.'
    },
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$2^{11} - 1 = 2047 = 23 \\times 89$, which is composite. But $2^2 - 1 = 3$, $2^3 - 1 = 7$, $2^5 - 1 = 31$ are all prime.'
    },
    {
      id: 's04-h09',
      type: 'numeric',
      question: 'Find the smallest number with exactly 6 divisors.',
      correctAnswer: 12,
      numericRange: { min: 1, max: 20 },
      difficulty: 'hard',
      explanation: 'We need $(a+1)(b+1)\\cdots = 6 = 6 \\times 1$ or $3 \\times 2$. Options: $p^5$ (smallest is $2^5 = 32$) or $p^2 \\times q$ (smallest is $2^2 \\times 3 = 12$). So $12$ is smallest.'
    },
    {
      id: 's04-h10',
      type: 'multiple-choice',
      question: 'Goldbach\'s Conjecture states that:',
      options: [
      'Every odd integer is the sum of three primes',
      'There are infinitely many twin primes',
      'Every prime greater than 3 has the form $6k \\pm 1
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Goldbach\'s Conjecture (still unproven) states that every even integer greater than 2 can be written as the sum of two prime numbers.'
    },
      'Every even integer greater than 2 can be expressed as the sum of two primes',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Goldbach\'s Conjecture (still unproven) states that every even integer greater than 2 can be written as the sum of two prime numbers.'
    }
  ] as QuizQuestion[],
};
