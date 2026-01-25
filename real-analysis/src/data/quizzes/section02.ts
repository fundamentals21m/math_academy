import type { QuizQuestion } from './types';

export const section02Quiz = {
  easy: [
    {
      id: 's02-e01',
      type: 'multiple-choice',
      question: 'In mathematical induction, the first step is to:',
      options: [
        'Assume the statement is true for some $k$',
        'Prove the base case (usually $n = 1$)',
        'Show the statement holds for $k + 1$',
        'Prove the statement for all $n$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Mathematical induction always begins with proving the base case, typically showing the statement is true for $n = 1$ (or sometimes $n = 0$).'
    },
    {
      id: 's02-e02',
      type: 'multiple-choice',
      question: 'The inductive hypothesis assumes that:',
      options: [
        'The statement is true for all natural numbers',
        'The statement is true for $n = 1$',
        'The statement is true for some arbitrary $k$',
        'The statement is false for some $n$'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The inductive hypothesis assumes the statement $P(k)$ is true for some arbitrary but fixed natural number $k$. We then use this to prove $P(k+1)$.'
    },
    {
      id: 's02-e03',
      type: 'multiple-choice',
      question: 'What is the base case for proving $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$?',
      options: [
        '$n = 0$: $0 = \\frac{0 \\cdot 1}{2}$',
        '$n = k$: assume it works',
        '$n = 2$: $3 = \\frac{2 \\cdot 3}{2}$',
        '$n = 1$: $1 = \\frac{1 \\cdot 2}{2}$'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'For this sum, the natural base case is $n = 1$: the left side is $1$, and the right side is $\\frac{1 \\cdot 2}{2} = 1$. Both sides are equal, so the base case holds.'
    },
    {
      id: 's02-e04',
      type: 'multiple-choice',
      question: 'Mathematical induction is used to prove statements about:',
      options: [
        'Natural numbers (or integers $\\geq$ some starting value)',
        'Rational numbers only',
        'Real numbers only',
        'Complex numbers only'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Mathematical induction is a proof technique for statements indexed by natural numbers or integers starting from some fixed value.'
    },
    {
      id: 's02-e05',
      type: 'multiple-choice',
      question: 'After proving the base case and inductive step, what can we conclude?',
      options: [
        'The statement is true for $n = 1$ only',
        'The statement is true for all natural numbers $n$',
        'The statement might be true',
        'The statement needs more verification'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The principle of mathematical induction states: if $P(1)$ is true and $P(k) \\Rightarrow P(k+1)$ for all $k$, then $P(n)$ is true for all natural numbers $n$.'
    },
    {
      id: 's02-e06',
      type: 'numeric',
      question: 'Using the formula $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$, calculate $1 + 2 + 3 + 4 + 5$.',
      correctAnswer: 15,
      numericRange: { min: 0, max: 100, precision: 0 },
      difficulty: 'easy',
      explanation: 'Using the formula with $n = 5$: $\\frac{5 \\cdot 6}{2} = \\frac{30}{2} = 15$.'
    },
    {
      id: 's02-e07',
      type: 'multiple-choice',
      question: 'Which of the following correctly states the principle of mathematical induction?',
      options: [
        'If $P(k+1) \\Rightarrow P(k)$, then $P(n)$ for all $n$',
        'If $P(n)$ is true for some $n$, it is true for all $n$',
        'If $P(1)$ and $P(k) \\Rightarrow P(k+1)$, then $P(n)$ for all $n \\in \\mathbb{N}$',
        'If $P(1)$ is false, the statement is false for all $n$'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The principle of mathematical induction requires: (1) base case $P(1)$ is true, and (2) for all $k$, $P(k) \\Rightarrow P(k+1)$. Then $P(n)$ holds for all natural numbers.'
    },
    {
      id: 's02-e08',
      type: 'multiple-choice',
      question: 'In proving $1 + 3 + 5 + \\cdots + (2n-1) = n^2$, what is the $(k+1)$-th odd number?',
      options: [
        '$2k - 1$',
        '$2k + 1$',
        '$2(k+1) - 1$',
        'Both B and C are correct'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The $(k+1)$-th odd number is $2(k+1) - 1 = 2k + 2 - 1 = 2k + 1$. So both expressions represent the same value.'
    },
    {
      id: 's02-e09',
      type: 'multiple-choice',
      question: 'What is the purpose of the inductive step?',
      options: [
        'To show $P(k)$ implies $P(k+1)$',
        'To verify the formula for $n = 1$',
        'To prove the statement is sometimes true',
        'To find a counterexample'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The inductive step shows that if the statement holds for an arbitrary $k$, then it must also hold for $k+1$. This creates a "chain" of implications from the base case.'
    },
    {
      id: 's02-e10',
      type: 'numeric',
      question: 'If $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$, what is $1^2 + 2^2 + 3^2$?',
      correctAnswer: 14,
      numericRange: { min: 0, max: 100, precision: 0 },
      difficulty: 'easy',
      explanation: 'Using the formula with $n = 3$: $\\frac{3 \\cdot 4 \\cdot 7}{6} = \\frac{84}{6} = 14$. Alternatively, $1 + 4 + 9 = 14$.'
    },
    {
      id: 's02-e11',
      type: 'multiple-choice',
      question: 'When proving $2^n > n$ for all $n \\geq 1$, what is the base case verification?',
      options: [
        '$2^0 = 1 > 0$',
        '$2^1 = 2 > 1$',
        '$2^2 = 4 > 2$',
        'All of the above work as base cases'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'For $n \\geq 1$, the base case is $n = 1$: we verify $2^1 = 2 > 1$, which is true.'
    },
    {
      id: 's02-e12',
      type: 'multiple-choice',
      question: 'Which step comes immediately after stating the inductive hypothesis?',
      options: [
        'Verify the base case',
        'Conclude the proof',
        'Prove the statement for $k + 1$',
        'Check for counterexamples'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'After assuming $P(k)$ (the inductive hypothesis), we must prove $P(k+1)$ using this assumption.'
    },
    {
      id: 's02-e13',
      type: 'multiple-choice',
      question: 'The well-ordering principle states that:',
      options: [
        'Every set of real numbers has a minimum',
        'Every sequence is bounded',
        'The natural numbers can be ordered in many ways',
        'Every non-empty subset of natural numbers has a least element'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The well-ordering principle states that every non-empty subset of natural numbers contains a smallest element. This is equivalent to the principle of mathematical induction.'
    },
    {
      id: 's02-e14',
      type: 'numeric',
      question: 'Using induction, we can prove $\\sum_{i=1}^{n} 2i = n(n+1)$. Calculate this sum for $n = 4$.',
      correctAnswer: 20,
      numericRange: { min: 0, max: 100, precision: 0 },
      difficulty: 'easy',
      explanation: 'Using the formula: $n(n+1) = 4 \\cdot 5 = 20$. Alternatively, $2 + 4 + 6 + 8 = 20$.'
    },
    {
      id: 's02-e15',
      type: 'multiple-choice',
      question: 'A recursive definition of a sequence requires:',
      options: [
        'Initial value(s) and a recurrence relation',
        'Only a formula for the $n$-th term',
        'A proof by induction',
        'An explicit closed form'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'A recursive definition needs base case(s) (initial values) and a rule that defines each term using previous terms (recurrence relation).'
    },
    {
      id: 's02-e16',
      type: 'multiple-choice',
      question: 'If $a_1 = 2$ and $a_{n+1} = a_n + 3$, what is $a_3$?',
      options: [
        '$5$',
        '$8$',
        '$11$',
        '$6$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$a_1 = 2$, $a_2 = a_1 + 3 = 2 + 3 = 5$, $a_3 = a_2 + 3 = 5 + 3 = 8$.'
    },
    {
      id: 's02-e17',
      type: 'multiple-choice',
      question: 'In proving a statement for all $n \\geq 5$, what should be the base case?',
      options: [
        '$n = 0$',
        '$n = 1$',
        '$n = 5$',
        'Any value of $n$'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'When proving a statement for $n \\geq 5$, the base case should be $n = 5$, the smallest value in the domain.'
    },
    {
      id: 's02-e18',
      type: 'numeric',
      question: 'The Fibonacci sequence is defined by $F_1 = 1$, $F_2 = 1$, $F_{n} = F_{n-1} + F_{n-2}$. What is $F_6$?',
      correctAnswer: 8,
      numericRange: { min: 0, max: 100, precision: 0 },
      difficulty: 'easy',
      explanation: '$F_1 = 1$, $F_2 = 1$, $F_3 = 2$, $F_4 = 3$, $F_5 = 5$, $F_6 = F_5 + F_4 = 5 + 3 = 8$.'
    },
    {
      id: 's02-e19',
      type: 'multiple-choice',
      question: 'Why is the base case necessary in mathematical induction?',
      options: [
        'To make the proof longer',
        'It is optional and can be skipped',
        'To verify the formula is correct for large $n$',
        'To establish a starting point for the chain of implications'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Without a base case, the inductive step only shows implications between consecutive values but never establishes that any case is actually true. The base case starts the chain.'
    },
    {
      id: 's02-e20',
      type: 'multiple-choice',
      question: 'The notation $P(n)$ in induction proofs represents:',
      options: [
        'A statement or proposition about $n$',
        'A prime number',
        'A polynomial function',
        'The $n$-th power of $P$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$P(n)$ represents a statement or proposition that depends on the natural number $n$. We prove $P(n)$ is true for all $n$ in the given domain.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's02-m01',
      type: 'multiple-choice',
      question: 'To prove $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$ by induction, after assuming it holds for $k$, we need to show that $\\sum_{i=1}^{k+1} i = $',
      options: [
        '$\\frac{k(k+1)}{2}$',
        '$\\frac{(k+1)(k+2)}{2}$',
        '$\\frac{k(k+2)}{2}$',
        '$\\frac{(k+1)^2}{2}$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Substituting $n = k+1$ into the formula gives $\\frac{(k+1)(k+2)}{2}$. We must prove this equals $\\sum_{i=1}^{k} i + (k+1) = \\frac{k(k+1)}{2} + (k+1)$.'
    },
    {
      id: 's02-m02',
      type: 'multiple-choice',
      question: 'In proving $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$, the inductive step uses: $\\frac{k(k+1)}{2} + (k+1) = $',
      options: [
        '$\\frac{k(k+1) + k + 1}{2}$',
        '$\\frac{(k+1)(k+2)}{2}$',
        'All of the above are equivalent',
        '$\\frac{k^2 + 3k + 2}{2}$'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\frac{k(k+1)}{2} + (k+1) = \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}$. Also, $(k+1)(k+2) = k^2 + 3k + 2$.'
    },
    {
      id: 's02-m03',
      type: 'multiple-choice',
      question: 'Prove: $\\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$. In the inductive step, we add $2^{k+1}$ to both sides. The right side becomes:',
      options: [
        '$2^{k+2} - 1$',
        '$2 \\cdot 2^{k+1} - 1$',
        '$2^{k+1} + 2^{k+1} - 1$',
        'All of the above'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$(2^{k+1} - 1) + 2^{k+1} = 2 \\cdot 2^{k+1} - 1 = 2^{k+2} - 1$. All expressions are equivalent.'
    },
    {
      id: 's02-m04',
      type: 'numeric',
      question: 'Using the formula $\\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$, calculate $1 + 2 + 4 + 8 + 16 + 32$.',
      correctAnswer: 63,
      numericRange: { min: 0, max: 200, precision: 0 },
      difficulty: 'medium',
      explanation: 'This is $\\sum_{i=0}^{5} 2^i = 2^6 - 1 = 64 - 1 = 63$.'
    },
    {
      id: 's02-m05',
      type: 'multiple-choice',
      question: 'Strong induction differs from ordinary induction because:',
      options: [
        'It assumes $P(j)$ for all $j \\leq k$ to prove $P(k+1)$',
        'It does not require a base case',
        'It only works for inequalities',
        'It proves the statement for even numbers only'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'In strong induction, the inductive hypothesis assumes $P(j)$ is true for all $j$ from the base case up to $k$, not just for $k$ alone.'
    },
    {
      id: 's02-m06',
      type: 'multiple-choice',
      question: 'To prove $n! > 2^n$ for $n \\geq 4$, the base case at $n = 4$ shows:',
      options: [
        '$6 > 8$',
        '$24 > 16$',
        '$120 > 32$',
        '$2 > 4$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'For $n = 4$: $4! = 24$ and $2^4 = 16$. Since $24 > 16$, the base case holds.'
    },
    {
      id: 's02-m07',
      type: 'multiple-choice',
      question: 'In proving $n! > 2^n$ for $n \\geq 4$, the inductive step uses:',
      options: [
        '$(k+1)! = 2 \\cdot k!$',
        '$(k+1)! = k! + (k+1)$',
        '$(k+1)! = (k+1) \\cdot k! > (k+1) \\cdot 2^k$',
        '$(k+1)! = k!^2$'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'By definition $(k+1)! = (k+1) \\cdot k!$. Using the inductive hypothesis $k! > 2^k$, we get $(k+1)! > (k+1) \\cdot 2^k > 2 \\cdot 2^k = 2^{k+1}$ for $k \\geq 4$.'
    },
    {
      id: 's02-m08',
      type: 'multiple-choice',
      question: 'For the statement $P(n): 7^n - 1$ is divisible by $6$, verify the base case $n = 1$:',
      options: [
        '$7^1 - 1 = 8$, which is not divisible by $6$',
        '$7^1 - 1 = 7$, which is not divisible by $6$',
        '$7^0 - 1 = 0$, which is divisible by $6$',
        '$7^1 - 1 = 6$, which is divisible by $6$'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$7^1 - 1 = 7 - 1 = 6 = 6 \\cdot 1$, so $6 | (7^1 - 1)$ and the base case holds.'
    },
    {
      id: 's02-m09',
      type: 'multiple-choice',
      question: 'To prove $6 | (7^n - 1)$ by induction, write $7^{k+1} - 1$ in terms of $7^k - 1$:',
      options: [
        '$7 \\cdot 7^k - 1 = 7(7^k - 1) + 6$',
        '$7^{k+1} - 1 = 7^k + 6$',
        '$7^{k+1} - 1 = (7-1)^{k+1}$',
        '$7^{k+1} - 1 = 7^k - 7$'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$7^{k+1} - 1 = 7 \\cdot 7^k - 1 = 7 \\cdot 7^k - 7 + 6 = 7(7^k - 1) + 6$. Both $7(7^k - 1)$ and $6$ are divisible by $6$.'
    },
    {
      id: 's02-m10',
      type: 'numeric',
      question: 'Using $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$, find $1^2 + 2^2 + 3^2 + 4^2 + 5^2$.',
      correctAnswer: 55,
      numericRange: { min: 0, max: 200, precision: 0 },
      difficulty: 'medium',
      explanation: '$\\frac{5 \\cdot 6 \\cdot 11}{6} = \\frac{330}{6} = 55$. Verify: $1 + 4 + 9 + 16 + 25 = 55$.'
    },
    {
      id: 's02-m11',
      type: 'multiple-choice',
      question: 'The formula for $\\sum_{i=1}^{n} i^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ says the sum of cubes equals:',
      options: [
        'The cube of $n$',
        'The square of the sum of the first $n$ integers',
        'Twice the sum of squares',
        'The $n$-th triangular number'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Since $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$, the formula states that $\\sum_{i=1}^{n} i^3 = \\left(\\sum_{i=1}^{n} i\\right)^2$.'
    },
    {
      id: 's02-m12',
      type: 'numeric',
      question: 'Calculate $1^3 + 2^3 + 3^3 + 4^3$ using the formula $\\sum_{i=1}^{n} i^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$.',
      correctAnswer: 100,
      numericRange: { min: 0, max: 500, precision: 0 },
      difficulty: 'medium',
      explanation: '$\\left(\\frac{4 \\cdot 5}{2}\\right)^2 = 10^2 = 100$. Verify: $1 + 8 + 27 + 64 = 100$.'
    },
    {
      id: 's02-m13',
      type: 'multiple-choice',
      question: 'When is strong induction necessary instead of ordinary induction?',
      options: [
        'When proving statements about prime numbers',
        'When the base case is $n = 0$',
        'When $P(k+1)$ depends on multiple previous cases, not just $P(k)$',
        'When the statement involves inequalities'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Strong induction is useful when proving $P(k+1)$ requires knowing $P(j)$ for several values $j \\leq k$, such as in proofs about the Fibonacci sequence or prime factorization.'
    },
    {
      id: 's02-m14',
      type: 'multiple-choice',
      question: 'To prove every integer $n \\geq 2$ has a prime factorization using strong induction:',
      options: [
        'We only need to check $n = 2$',
        'Strong induction cannot be used for this',
        'We need to list all primes less than $n$',
        'If $n$ is prime, we are done; if composite, use factorization of smaller integers'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Base case: $2$ is prime. Inductive step: if $k+1$ is prime, done. If $k+1 = ab$ with $2 \\leq a, b < k+1$, by strong induction hypothesis both $a$ and $b$ have prime factorizations.'
    },
    {
      id: 's02-m15',
      type: 'multiple-choice',
      question: 'The well-ordering principle can be used to prove induction because:',
      options: [
        'If induction fails, the set of counterexamples has a least element, leading to contradiction',
        'Both are about natural numbers',
        'They are completely unrelated',
        'Well-ordering only applies to real numbers'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'If $P(n)$ fails for some $n$, let $S$ be the set of counterexamples. By well-ordering, $S$ has a least element $m$. But $P(1)$ holds (base case) and $P(m-1) \\Rightarrow P(m)$ (inductive step), contradiction.'
    },
    {
      id: 's02-m16',
      type: 'multiple-choice',
      question: 'In the recursive definition $a_1 = 1$, $a_n = 2a_{n-1} + 1$, find $a_4$:',
      options: [
        '$7$',
        '$15$',
        '$31$',
        '$9$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$a_1 = 1$, $a_2 = 2(1) + 1 = 3$, $a_3 = 2(3) + 1 = 7$, $a_4 = 2(7) + 1 = 15$.'
    },
    {
      id: 's02-m17',
      type: 'numeric',
      question: 'The sequence $a_n = 2^n - 1$ satisfies $a_1 = 1$ and $a_n = 2a_{n-1} + 1$. Verify: what is $a_5$?',
      correctAnswer: 31,
      numericRange: { min: 0, max: 100, precision: 0 },
      difficulty: 'medium',
      explanation: '$a_5 = 2^5 - 1 = 32 - 1 = 31$. Alternatively, $a_4 = 15$, so $a_5 = 2(15) + 1 = 31$.'
    },
    {
      id: 's02-m18',
      type: 'multiple-choice',
      question: 'To prove $(1 + x)^n \\geq 1 + nx$ for $x > -1$ and $n \\geq 1$ (Bernoulli\'s inequality), the inductive step multiplies both sides by:',
      options: [
        '$x$',
        '$n$',
        '$(1 + x)$',
        '$(1 - x)$'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'From $(1+x)^k \\geq 1 + kx$, multiply both sides by $(1+x) > 0$ to get $(1+x)^{k+1} \\geq (1+kx)(1+x) = 1 + (k+1)x + kx^2 \\geq 1 + (k+1)x$.'
    },
    {
      id: 's02-m19',
      type: 'multiple-choice',
      question: 'For proving $3^n > n^2$ for $n \\geq 1$, which step is part of the inductive argument?',
      options: [
        'Use the formula for geometric series',
        'Show $3^k = k^2$ for all $k$',
        'Show $3^n < n^2$ and reach a contradiction',
        'Show $3 \\cdot 3^k > 3k^2 > (k+1)^2$ for large enough $k$'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Using $3^k > k^2$, we get $3^{k+1} = 3 \\cdot 3^k > 3k^2$. We need $3k^2 \\geq (k+1)^2 = k^2 + 2k + 1$, i.e., $2k^2 \\geq 2k + 1$, true for $k \\geq 2$.'
    },
    {
      id: 's02-m20',
      type: 'multiple-choice',
      question: 'A proof by induction of $\\sum_{i=1}^{n} \\frac{1}{i(i+1)} = \\frac{n}{n+1}$ uses the fact that $\\frac{1}{(k+1)(k+2)} = $',
      options: [
        '$\\frac{1}{k+1} - \\frac{1}{k+2}$',
        '$\\frac{1}{k+1} + \\frac{1}{k+2}$',
        '$\\frac{1}{(k+1)^2}$',
        '$\\frac{2}{k+2}$'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'By partial fractions: $\\frac{1}{(k+1)(k+2)} = \\frac{1}{k+1} - \\frac{1}{k+2}$. Then $\\frac{k}{k+1} + \\frac{1}{k+1} - \\frac{1}{k+2} = 1 - \\frac{1}{k+2} = \\frac{k+1}{k+2}$.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's02-h01',
      type: 'multiple-choice',
      question: 'Using strong induction to prove every integer $n \\geq 2$ can be written as a product of primes, when $n = k+1$ is composite:',
      options: [
        'We check if $k+1$ is divisible by $2$',
        'We write $k+1 = ab$ with $2 \\leq a, b < k+1$ and apply the hypothesis to $a$ and $b$',
        'We factor $k$ first, then add $1$',
        'We use ordinary induction on the prime factors'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'If $k+1$ is composite, write $k+1 = ab$ where $2 \\leq a, b < k+1$. By strong induction, both $a$ and $b$ have prime factorizations, so $k+1$ does too.'
    },
    {
      id: 's02-h02',
      type: 'multiple-choice',
      question: 'To prove $F_n < 2^n$ for all Fibonacci numbers ($F_1 = F_2 = 1$), the strong induction hypothesis assumes:',
      options: [
        '$F_k < 2^k$ only',
        '$F_{k-1} + F_{k-2} < 2^{k+1}$',
        '$F_j < 2^j$ for all $j \\leq k$',
        '$F_k = 2^k$'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Strong induction assumes $F_j < 2^j$ for all $j \\leq k$. Then $F_{k+1} = F_k + F_{k-1} < 2^k + 2^{k-1} < 2^k + 2^k = 2^{k+1}$.'
    },
    {
      id: 's02-h03',
      type: 'multiple-choice',
      question: 'In proving $F_{n+m} = F_{n+1}F_m + F_n F_{m-1}$ by induction on $m$, which base cases are needed?',
      options: [
        '$m = 1$ only',
        '$m = 0$ and $m = 1$',
        'No base case is needed',
        '$m = 1$ and $m = 2$'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Since the recurrence uses $F_{m-1}$, we need $m \\geq 1$. Base cases $m = 1$: $F_{n+1} = F_{n+1} \\cdot 1 + F_n \\cdot 0$ and $m = 2$: $F_{n+2} = F_{n+1} \\cdot 1 + F_n \\cdot 1$ establish the pattern.'
    },
    {
      id: 's02-h04',
      type: 'multiple-choice',
      question: 'The second principle of mathematical induction (strong induction) is equivalent to:',
      options: [
        'The well-ordering principle',
        'Ordinary induction with a different base case',
        'Proof by contradiction only',
        'The Archimedean property'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Strong induction, ordinary induction, and the well-ordering principle are all logically equivalent. Each can be derived from the others.'
    },
    {
      id: 's02-h05',
      type: 'numeric',
      question: 'The sequence $a_n$ satisfies $a_1 = 2$, $a_2 = 5$, and $a_n = 3a_{n-1} - 2a_{n-2}$ for $n \\geq 3$. Find $a_5$.',
      correctAnswer: 47,
      numericRange: { min: 0, max: 100, precision: 0 },
      difficulty: 'hard',
      explanation: '$a_3 = 3(5) - 2(2) = 15 - 4 = 11$, $a_4 = 3(11) - 2(5) = 33 - 10 = 23$, $a_5 = 3(23) - 2(11) = 69 - 22 = 47$. The closed form is $a_n = 2^n + 1$: verify $a_1 = 3 \\neq 2$, so actually $a_n = 2^n + 1$ does not fit. The correct closed form satisfying the recurrence is $a_n = 2^n + 1$ for the homogeneous part, but given initial conditions, we compute directly.'
    },
    {
      id: 's02-h06',
      type: 'multiple-choice',
      question: 'To prove $\\sum_{i=1}^{n} i \\cdot i! = (n+1)! - 1$ by induction, the inductive step adds $(k+1)(k+1)!$ to get:',
      options: [
        '$(k+1)! - 1 + (k+1)(k+1)! = (k+2)(k+1)! - 1 = (k+2)! - 1$',
        'Both A and C are correct',
        '$(k+1)! \\cdot (k+2) - 1$',
        '$(k+2)! + (k+1)! - 1$'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$(k+1)! - 1 + (k+1)(k+1)! = (k+1)!(1 + k + 1) - 1 = (k+1)!(k+2) - 1 = (k+2)! - 1$.'
    },
    {
      id: 's02-h07',
      type: 'multiple-choice',
      question: 'Prove: $\\sum_{i=0}^{n} \\binom{n}{i} = 2^n$. The induction uses the identity:',
      options: [
        '$\\binom{n}{0} = 1$',
        '$\\binom{n}{k} = \\binom{n}{n-k}$',
        '$\\binom{n+1}{k} = \\binom{n}{k} + \\binom{n}{k-1}$ (Pascal\'s identity)',
        'The factorial definition of $\\binom{n}{k}$'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Pascal\'s identity $\\binom{n+1}{k} = \\binom{n}{k} + \\binom{n}{k-1}$ allows us to express $\\sum_{k=0}^{n+1} \\binom{n+1}{k}$ in terms of $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$.'
    },
    {
      id: 's02-h08',
      type: 'multiple-choice',
      question: 'The formula $\\sum_{i=1}^{n} i^3 = \\left(\\sum_{i=1}^{n} i\\right)^2$ can be proved by induction. The key algebraic step is:',
      options: [
        'Showing $\\left(\\frac{k(k+1)}{2}\\right)^2 + (k+1)^3 = \\left(\\frac{(k+1)(k+2)}{2}\\right)^2$',
        'Using the binomial theorem',
        'Factoring $(k+1)^3$ as $k^3 + 3k^2 + 3k + 1$',
        'Both A and C are used'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'We expand $(k+1)^3$ and show that $\\frac{k^2(k+1)^2}{4} + (k+1)^3 = \\frac{(k+1)^2(k+2)^2}{4}$. This requires factoring and algebraic manipulation.'
    },
    {
      id: 's02-h09',
      type: 'numeric',
      question: 'If $a_1 = 1$ and $a_{n+1} = \\frac{a_n}{1 + a_n}$, find $a_4$ as a fraction $\\frac{p}{q}$ in lowest terms. Enter $p + q$.',
      correctAnswer: 5,
      numericRange: { min: 0, max: 20, precision: 0 },
      difficulty: 'hard',
      explanation: '$a_1 = 1$, $a_2 = \\frac{1}{2}$, $a_3 = \\frac{1/2}{3/2} = \\frac{1}{3}$, $a_4 = \\frac{1/3}{4/3} = \\frac{1}{4}$. So $p = 1$, $q = 4$, and $p + q = 5$.'
    },
    {
      id: 's02-h10',
      type: 'multiple-choice',
      question: 'To prove $\\sqrt{2}$ is irrational using well-ordering, we assume $\\sqrt{2} = \\frac{p}{q}$ in lowest terms and derive:',
      options: [
        'Both A and B',
        'That $p$ and $q$ are both even',
        'A smaller positive integer representation, contradicting minimality of $q$',
        'That $\\sqrt{2}$ is rational'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'If $\\sqrt{2} = p/q$ with $\\gcd(p,q) = 1$, then $p^2 = 2q^2$, so $p$ is even, say $p = 2m$. Then $4m^2 = 2q^2$, so $q^2 = 2m^2$, making $q$ even. This contradicts $\\gcd(p,q) = 1$.'
    },
    {
      id: 's02-h11',
      type: 'multiple-choice',
      question: 'For the AM-GM inequality $\\frac{a_1 + \\cdots + a_n}{n} \\geq \\sqrt[n]{a_1 \\cdots a_n}$, Cauchy\'s forward-backward induction proves it for:',
      options: [
        'All $n$ directly',
        '$n = 2^k$ first, then fills in other values',
        'Prime $n$ only',
        'Odd $n$ first, then even'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Cauchy\'s ingenious proof first establishes AM-GM for $n = 2^k$ by ordinary induction, then shows that if it holds for $n$, it holds for $n-1$, filling in all values.'
    },
    {
      id: 's02-h12',
      type: 'multiple-choice',
      question: 'Prove: $(1 + x)^n \\geq 1 + nx + \\frac{n(n-1)}{2}x^2$ for $x \\geq 0$, $n \\geq 2$. This extends Bernoulli by:',
      options: [
        'Including the second-order term from the binomial expansion',
        'Restricting to $x \\geq 0$ to ensure positivity of the quadratic term',
        'All of the above',
        'Using the binomial coefficient $\\binom{n}{2}$'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The inequality includes $\\binom{n}{2}x^2 = \\frac{n(n-1)}{2}x^2$, the second term in the binomial expansion. For $x \\geq 0$, all neglected terms are non-negative.'
    },
    {
      id: 's02-h13',
      type: 'numeric',
      question: 'Using induction, one can prove $\\sum_{i=1}^{n} i^4 = \\frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}$. Calculate this sum for $n = 3$.',
      correctAnswer: 98,
      numericRange: { min: 0, max: 200, precision: 0 },
      difficulty: 'hard',
      explanation: '$\\frac{3 \\cdot 4 \\cdot 7 \\cdot (27 + 9 - 1)}{30} = \\frac{84 \\cdot 35}{30} = \\frac{2940}{30} = 98$. Verify: $1 + 16 + 81 = 98$.'
    },
    {
      id: 's02-h14',
      type: 'multiple-choice',
      question: 'To prove the division algorithm ($a = qb + r$, $0 \\leq r < b$) using well-ordering:',
      options: [
        'Factor $a$ into primes',
        'Divide $a$ by $b$ and check the remainder',
        'Use induction on $a$',
        'Consider the set $S = \\{a - kb : k \\in \\mathbb{Z}, a - kb \\geq 0\\}$ and take its minimum'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Let $S = \\{a - kb : k \\in \\mathbb{Z}, a - kb \\geq 0\\}$. $S$ is non-empty and by well-ordering has a minimum $r$. If $r \\geq b$, then $r - b \\in S$ contradicts minimality. So $0 \\leq r < b$.'
    },
    {
      id: 's02-h15',
      type: 'multiple-choice',
      question: 'A flawed induction proof that all horses are the same color fails because:',
      options: [
        'The inductive step fails when going from $n = 1$ to $n = 2$',
        'The base case $n = 1$ is wrong',
        'Horses cannot be compared mathematically',
        'The well-ordering principle does not apply'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The "proof" assumes overlapping subsets when removing one horse. For $n = 2$ horses, removing one leaves singleton sets that don\'t overlap, so the color cannot be transferred.'
    },
    {
      id: 's02-h16',
      type: 'multiple-choice',
      question: 'To prove $\\gcd(F_n, F_{n+1}) = 1$ (consecutive Fibonacci numbers are coprime) by induction:',
      options: [
        'Factor both Fibonacci numbers',
        'Use $\\gcd(F_{k+1}, F_{k+2}) = \\gcd(F_{k+1}, F_k)$ since $F_{k+2} = F_{k+1} + F_k$',
        'Use the explicit Binet formula',
        'Check divisibility by all primes'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'By the Euclidean algorithm, $\\gcd(F_{k+1}, F_{k+2}) = \\gcd(F_{k+1}, F_{k+2} - F_{k+1}) = \\gcd(F_{k+1}, F_k)$. By induction hypothesis, this equals $1$.'
    },
    {
      id: 's02-h17',
      type: 'numeric',
      question: 'Let $a_n = F_1^2 + F_2^2 + \\cdots + F_n^2$ where $F_i$ is the $i$-th Fibonacci number. Using $F_1 = F_2 = 1$, find $a_6$.',
      correctAnswer: 104,
      numericRange: { min: 0, max: 200, precision: 0 },
      difficulty: 'hard',
      explanation: '$F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3, F_5 = 5, F_6 = 8$. So $a_6 = 1 + 1 + 4 + 9 + 25 + 64 = 104$. (Note: One can prove $\\sum_{i=1}^n F_i^2 = F_n F_{n+1}$: $8 \\cdot 13 = 104$.)'
    },
    {
      id: 's02-h18',
      type: 'multiple-choice',
      question: 'To prove $\\sum_{i=1}^{n} F_i^2 = F_n F_{n+1}$ by induction, the inductive step uses:',
      options: [
        'The generating function for Fibonacci numbers',
        '$F_{k+1}^2 = F_k F_{k+2} + (-1)^k$ (Cassini\'s identity)',
        '$F_k F_{k+1} + F_{k+1}^2 = F_{k+1}(F_k + F_{k+1}) = F_{k+1} F_{k+2}$',
        'Strong induction on both $F_k$ and $F_{k+1}$'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Adding $F_{k+1}^2$ to $F_k F_{k+1}$ gives $F_{k+1}(F_k + F_{k+1}) = F_{k+1} \\cdot F_{k+2}$, using the Fibonacci recurrence.'
    },
    {
      id: 's02-h19',
      type: 'multiple-choice',
      question: 'The Peano axioms define natural numbers using:',
      options: [
        'Decimal representation',
        'Addition and multiplication',
        'The least upper bound property',
        'The successor function and induction axiom'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Peano\'s axioms include: existence of $0$, every $n$ has a successor $S(n)$, $0$ is not a successor, $S$ is injective, and the induction axiom. Addition and multiplication are then defined recursively.'
    },
    {
      id: 's02-h20',
      type: 'multiple-choice',
      question: 'Transfinite induction extends mathematical induction to:',
      options: [
        'Ordinal numbers (including infinite ordinals)',
        'Real numbers',
        'Negative integers',
        'Complex numbers'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Transfinite induction works for all ordinal numbers. For limit ordinals $\\lambda$, one must prove $P(\\lambda)$ assuming $P(\\alpha)$ for all $\\alpha < \\lambda$, not just predecessors.'
    }
  ] as QuizQuestion[],
};
