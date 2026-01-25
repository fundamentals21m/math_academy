import type { QuizQuestion } from './types';

export const section03Quiz = {
  easy: [
    {
      id: 's03-e01',
      type: 'numeric',
      question: 'What is $17 \\bmod 5$?',
      correctAnswer: 2,
      numericRange: { min: 0, max: 10 },
      difficulty: 'easy',
      explanation: '$17 \\div 5 = 3$ remainder $2$. So $17 \\bmod 5 = 2$.'
    },
    {
      id: 's03-e02',
      type: 'numeric',
      question: 'What is $23 \\bmod 7$?',
      correctAnswer: 2,
      numericRange: { min: 0, max: 10 },
      difficulty: 'easy',
      explanation: '$23 = 7 \\times 3 + 2$, so $23 \\bmod 7 = 2$.'
    },
    {
      id: 's03-e03',
      type: 'numeric',
      question: 'What is $12 \\bmod 4$?',
      correctAnswer: 0,
      numericRange: { min: 0, max: 10 },
      difficulty: 'easy',
      explanation: '$12 = 4 \\times 3 + 0$, so $12 \\bmod 4 = 0$. 12 is divisible by 4.'
    },
    {
      id: 's03-e04',
      type: 'multiple-choice',
      question: 'If a clock shows 10:00 and you add 5 hours, what time does it show?',
      options: [
      '15:00',
      '5:00',
      '2:00',
      '3:00',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Clock arithmetic is mod 12: $10 + 5 = 15 \\equiv 3 \\pmod{12}$.'
    },
    {
      id: 's03-e05',
      type: 'numeric',
      question: 'What is $100 \\bmod 10$?',
      correctAnswer: 0,
      numericRange: { min: 0, max: 15 },
      difficulty: 'easy',
      explanation: '$100 = 10 \\times 10 + 0$, so $100 \\bmod 10 = 0$.'
    },
    {
      id: 's03-e06',
      type: 'numeric',
      question: 'What is $29 \\bmod 6$?',
      correctAnswer: 5,
      numericRange: { min: 0, max: 10 },
      difficulty: 'easy',
      explanation: '$29 = 6 \\times 4 + 5$, so $29 \\bmod 6 = 5$.'
    },
    {
      id: 's03-e07',
      type: 'multiple-choice',
      question: 'What does $a \\equiv b \\pmod{n}$ mean?',
      options: [
      '$a$ and $b$ have the same remainder when divided by $n
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The congruence notation $a \\equiv b \\pmod{n}$ means $a$ and $b$ leave the same remainder when divided by $n$.'
    },
      '$a$ is greater than $b
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The congruence notation $a \\equiv b \\pmod{n}$ means $a$ and $b$ leave the same remainder when divided by $n$.'
    },
      '$a$ equals $b
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The congruence notation $a \\equiv b \\pmod{n}$ means $a$ and $b$ leave the same remainder when divided by $n$.'
    },
      '$n$ divides $a$ but not $b
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The congruence notation $a \\equiv b \\pmod{n}$ means $a$ and $b$ leave the same remainder when divided by $n$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The congruence notation $a \\equiv b \\pmod{n}$ means $a$ and $b$ leave the same remainder when divided by $n$.'
    },
    {
      id: 's03-e08',
      type: 'numeric',
      question: 'What is $50 \\bmod 7$?',
      correctAnswer: 1,
      numericRange: { min: 0, max: 10 },
      difficulty: 'easy',
      explanation: '$50 = 7 \\times 7 + 1$, so $50 \\bmod 7 = 1$.'
    },
    {
      id: 's03-e09',
      type: 'multiple-choice',
      question: 'Which of the following is congruent to $15 \\pmod{4}$?',
      options: [
      '$1
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$15 = 4 \\times 3 + 3$, so $15 \\equiv 3 \\pmod{4}$.'
    },
      '$2
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$15 = 4 \\times 3 + 3$, so $15 \\equiv 3 \\pmod{4}$.'
    },
      '$0
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$15 = 4 \\times 3 + 3$, so $15 \\equiv 3 \\pmod{4}$.'
    },
      '$3
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$15 = 4 \\times 3 + 3$, so $15 \\equiv 3 \\pmod{4}$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$15 = 4 \\times 3 + 3$, so $15 \\equiv 3 \\pmod{4}$.'
    },
    {
      id: 's03-e10',
      type: 'numeric',
      question: 'What is $8 \\bmod 3$?',
      correctAnswer: 2,
      numericRange: { min: 0, max: 5 },
      difficulty: 'easy',
      explanation: '$8 = 3 \\times 2 + 2$, so $8 \\bmod 3 = 2$.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's03-m01',
      type: 'numeric',
      question: 'What is $(-3) \\bmod 7$? (Give the positive remainder)',
      correctAnswer: 4,
      numericRange: { min: 0, max: 10 },
      difficulty: 'medium',
      explanation: 'In modular arithmetic, we use positive remainders: $-3 \\equiv 7 - 3 \\equiv 4 \\pmod{7}$.'
    },
    {
      id: 's03-m02',
      type: 'numeric',
      question: 'What is $(15 + 23) \\bmod 11$?',
      correctAnswer: 5,
      numericRange: { min: 0, max: 15 },
      difficulty: 'medium',
      explanation: '$15 + 23 = 38$. $38 = 11 \\times 3 + 5$, so $38 \\bmod 11 = 5$.'
    },
    {
      id: 's03-m03',
      type: 'numeric',
      question: 'What is $(7 \\times 8) \\bmod 9$?',
      correctAnswer: 2,
      numericRange: { min: 0, max: 10 },
      difficulty: 'medium',
      explanation: '$7 \\times 8 = 56$. $56 = 9 \\times 6 + 2$, so $56 \\bmod 9 = 2$.'
    },
    {
      id: 's03-m04',
      type: 'multiple-choice',
      question: 'Which of these numbers is congruent to $-5 \\pmod{12}$?',
      options: [
      '$5
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$-5 + 12 = 7$, so $-5 \\equiv 7 \\pmod{12}$.'
    },
      '$-5
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$-5 + 12 = 7$, so $-5 \\equiv 7 \\pmod{12}$.'
    },
      '$17
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$-5 + 12 = 7$, so $-5 \\equiv 7 \\pmod{12}$.'
    },
      '$7
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$-5 + 12 = 7$, so $-5 \\equiv 7 \\pmod{12}$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$-5 + 12 = 7$, so $-5 \\equiv 7 \\pmod{12}$.'
    },
    {
      id: 's03-m05',
      type: 'numeric',
      question: 'If today is Wednesday (day 3), what day will it be in 100 days? (Sunday=0, Saturday=6)',
      correctAnswer: 5,
      numericRange: { min: 0, max: 6 },
      difficulty: 'medium',
      explanation: '$(3 + 100) \\bmod 7 = 103 \\bmod 7 = 5$ (Friday).'
    },
    {
      id: 's03-m06',
      type: 'numeric',
      question: 'What is $(-17) \\bmod 5$? (Give the positive remainder)',
      correctAnswer: 3,
      numericRange: { min: 0, max: 5 },
      difficulty: 'medium',
      explanation: '$-17 = -4 \\times 5 + 3$, or $-17 + 20 = 3$. So $(-17) \\bmod 5 = 3$.'
    },
    {
      id: 's03-m07',
      type: 'multiple-choice',
      question: 'If $a \\equiv 3 \\pmod{5}$ and $b \\equiv 4 \\pmod{5}$, what is $a \\times b \\pmod{5}$?',
      options: [
      '$12
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$a \\times b \\equiv 3 \\times 4 \\equiv 12 \\equiv 2 \\pmod{5}$.'
    },
      '$2
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$a \\times b \\equiv 3 \\times 4 \\equiv 12 \\equiv 2 \\pmod{5}$.'
    },
      '$7
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$a \\times b \\equiv 3 \\times 4 \\equiv 12 \\equiv 2 \\pmod{5}$.'
    },
      '$1
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$a \\times b \\equiv 3 \\times 4 \\equiv 12 \\equiv 2 \\pmod{5}$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$a \\times b \\equiv 3 \\times 4 \\equiv 12 \\equiv 2 \\pmod{5}$.'
    },
    {
      id: 's03-m08',
      type: 'numeric',
      question: 'What is $(13^2) \\bmod 10$?',
      correctAnswer: 9,
      numericRange: { min: 0, max: 10 },
      difficulty: 'medium',
      explanation: '$13^2 = 169$. $169 \\bmod 10 = 9$ (the last digit of 169).'
    },
    {
      id: 's03-m09',
      type: 'multiple-choice',
      question: 'For what value of $x$ (where $0 \\le x < 7$) is $25 \\equiv x \\pmod{7}$?',
      options: [
      '$3
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$25 = 7 \\times 3 + 4$, so $25 \\equiv 4 \\pmod{7}$.'
    },
      '$5
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$25 = 7 \\times 3 + 4$, so $25 \\equiv 4 \\pmod{7}$.'
    },
      '$4
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$25 = 7 \\times 3 + 4$, so $25 \\equiv 4 \\pmod{7}$.'
    },
      '$6
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$25 = 7 \\times 3 + 4$, so $25 \\equiv 4 \\pmod{7}$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$25 = 7 \\times 3 + 4$, so $25 \\equiv 4 \\pmod{7}$.'
    },
    {
      id: 's03-m10',
      type: 'numeric',
      question: 'What is $(8 + 9 + 10) \\bmod 6$?',
      correctAnswer: 3,
      numericRange: { min: 0, max: 6 },
      difficulty: 'medium',
      explanation: '$8 + 9 + 10 = 27$. $27 = 6 \\times 4 + 3$, so $27 \\bmod 6 = 3$.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's03-h01',
      type: 'numeric',
      question: 'What is $(7^{10}) \\bmod 11$? (Hint: Use Fermat\'s Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$ for prime $p$)',
      correctAnswer: 1,
      numericRange: { min: 0, max: 15 },
      difficulty: 'hard',
      explanation: 'By Fermat\'s Little Theorem, $7^{10} \\equiv 1 \\pmod{11}$ since 11 is prime.'
    },
    {
      id: 's03-h02',
      type: 'numeric',
      question: 'Solve for $x$ where $0 \\le x < 13$: $3x \\equiv 9 \\pmod{13}$',
      correctAnswer: 3,
      numericRange: { min: 0, max: 13 },
      difficulty: 'hard',
      explanation: '$3x \\equiv 9 \\pmod{13}$ means $x \\equiv 3 \\pmod{13}$ (divide both sides by 3, which is valid since $\\gcd(3, 13) = 1$).'
    },
    {
      id: 's03-h03',
      type: 'multiple-choice',
      question: 'Which statement about modular arithmetic is FALSE?',
      options: [
      'If $a \\equiv b \\pmod{n}$, then $n$ divides $(a - b)
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Division in modular arithmetic requires finding a modular inverse, which only exists when $\\gcd(a, n) = 1$. We cannot always divide.'
    },
      '$(a + b) \\bmod n = ((a \\bmod n) + (b \\bmod n)) \\bmod n
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Division in modular arithmetic requires finding a modular inverse, which only exists when $\\gcd(a, n) = 1$. We cannot always divide.'
    },
      'We can always divide in modular arithmetic',
      '$(a \\times b) \\bmod n = ((a \\bmod n) \\times (b \\bmod n)) \\bmod n
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Division in modular arithmetic requires finding a modular inverse, which only exists when $\\gcd(a, n) = 1$. We cannot always divide.'
    },
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Division in modular arithmetic requires finding a modular inverse, which only exists when $\\gcd(a, n) = 1$. We cannot always divide.'
    },
    {
      id: 's03-h04',
      type: 'numeric',
      question: 'Find $(-23) \\bmod 17$ (give the positive remainder between 0 and 16)',
      correctAnswer: 11,
      numericRange: { min: 0, max: 17 },
      difficulty: 'hard',
      explanation: '$-23 = -2 \\times 17 + 11$, or $-23 + 34 = 11$. So $(-23) \\bmod 17 = 11$.'
    },
    {
      id: 's03-h05',
      type: 'numeric',
      question: 'What is $(2^{20}) \\bmod 15$?',
      correctAnswer: 1,
      numericRange: { min: 0, max: 15 },
      difficulty: 'hard',
      explanation: '$2^4 = 16 \\equiv 1 \\pmod{15}$. So $2^{20} = (2^4)^5 \\equiv 1^5 \\equiv 1 \\pmod{15}$.'
    },
    {
      id: 's03-h06',
      type: 'multiple-choice',
      question: 'If $17 \\equiv x \\pmod{5}$ and $-17 \\equiv y \\pmod{5}$, what is $x + y$?',
      options: [
      '$0
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$17 \\bmod 5 = 2$ and $-17 \\bmod 5 = 3$ (since $-17 + 20 = 3$). So $x + y = 2 + 3 = 5$.'
    },
      '$5
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$17 \\bmod 5 = 2$ and $-17 \\bmod 5 = 3$ (since $-17 + 20 = 3$). So $x + y = 2 + 3 = 5$.'
    },
      '$2
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$17 \\bmod 5 = 2$ and $-17 \\bmod 5 = 3$ (since $-17 + 20 = 3$). So $x + y = 2 + 3 = 5$.'
    },
      '$10
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$17 \\bmod 5 = 2$ and $-17 \\bmod 5 = 3$ (since $-17 + 20 = 3$). So $x + y = 2 + 3 = 5$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$17 \\bmod 5 = 2$ and $-17 \\bmod 5 = 3$ (since $-17 + 20 = 3$). So $x + y = 2 + 3 = 5$.'
    },
    {
      id: 's03-h07',
      type: 'numeric',
      question: 'Find the smallest positive $n$ such that $5^n \\equiv 1 \\pmod{7}$',
      correctAnswer: 6,
      numericRange: { min: 1, max: 10 },
      difficulty: 'hard',
      explanation: '$5^1=5, 5^2=25\\equiv 4, 5^3=125\\equiv 6, 5^4\\equiv 5 \\cdot 6=30\\equiv 2, 5^5\\equiv 10\\equiv 3, 5^6\\equiv 15\\equiv 1 \\pmod{7}$. The order is 6.'
    },
    {
      id: 's03-h08',
      type: 'numeric',
      question: 'What is the last two digits of $7^{100}$? (Compute $7^{100} \\bmod 100$)',
      correctAnswer: 1,
      numericRange: { min: 0, max: 99 },
      difficulty: 'hard',
      explanation: '$7^4 = 2401 \\equiv 1 \\pmod{100}$. Since $100 = 4 \\times 25$, $7^{100} = (7^4)^{25} \\equiv 1^{25} \\equiv 1 \\pmod{100}$.'
    },
    {
      id: 's03-h09',
      type: 'multiple-choice',
      question: 'For which value of $n$ does $a \\equiv b \\pmod{n}$ imply that $a$ and $b$ have the same last digit in decimal?',
      options: [
      '$n = 2
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The last digit of a number is its remainder when divided by 10. So $a \\equiv b \\pmod{10}$ means $a$ and $b$ have the same last digit.'
    },
      '$n = 10
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The last digit of a number is its remainder when divided by 10. So $a \\equiv b \\pmod{10}$ means $a$ and $b$ have the same last digit.'
    },
      '$n = 5
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The last digit of a number is its remainder when divided by 10. So $a \\equiv b \\pmod{10}$ means $a$ and $b$ have the same last digit.'
    },
      '$n = 100
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The last digit of a number is its remainder when divided by 10. So $a \\equiv b \\pmod{10}$ means $a$ and $b$ have the same last digit.'
    },
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The last digit of a number is its remainder when divided by 10. So $a \\equiv b \\pmod{10}$ means $a$ and $b$ have the same last digit.'
    },
    {
      id: 's03-h10',
      type: 'numeric',
      question: 'Solve the system: $x \\equiv 2 \\pmod{3}$ and $x \\equiv 3 \\pmod{5}$. Find $x$ where $0 \\le x < 15$.',
      correctAnswer: 8,
      numericRange: { min: 0, max: 15 },
      difficulty: 'hard',
      explanation: 'By the Chinese Remainder Theorem: $x \\equiv 2 \\pmod{3}$ gives $x \\in \\{2, 5, 8, 11, 14\\}$. Checking which satisfy $x \\equiv 3 \\pmod{5}$: $8 \\bmod 5 = 3$. So $x = 8$.'
    }
  ] as QuizQuestion[],
};
