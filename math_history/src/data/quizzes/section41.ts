import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's41-e01',
    type: 'multiple-choice',
    question: 'According to Fermat\'s Little Theorem, if $p$ is prime and $\\gcd(a, p) = 1$, then:',
    options: [
      '$a^{p-1} \\equiv 1 \\pmod{p}$',
      '$a^p \\equiv 0 \\pmod{p}$',
      '$a^{p-1} \\equiv p \\pmod{a}$',
      '$a + p \\equiv 1 \\pmod{p}$',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Fermat\'s Little Theorem states that if $p$ is prime and $a$ is not divisible by $p$, then $a^{p-1} \\equiv 1 \\pmod{p}$. This means $a^{p-1}$ leaves remainder 1 when divided by $p$.',
  },
  {
    id: 's41-e02',
    type: 'multiple-choice',
    question: 'What is $\\phi(7)$, the count of integers from 1 to 7 that are relatively prime to 7?',
    options: [
      '6',
      '7',
      '5',
      '4',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Since 7 is prime, all integers from 1 to 6 are relatively prime to 7. Therefore $\\phi(7) = 6$. In general, for a prime $p$, $\\phi(p) = p - 1$.',
  },
  // Medium questions
  {
    id: 's41-m01',
    type: 'multiple-choice',
    question: 'What is $2^{10} \\pmod{11}$?',
    options: [
      '1',
      '2',
      '10',
      '0',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'By Fermat\'s Little Theorem, since 11 is prime and $\\gcd(2, 11) = 1$, we have $2^{10} \\equiv 1 \\pmod{11}$. The exponent is $p - 1 = 11 - 1 = 10$.',
  },
  {
    id: 's41-m02',
    type: 'multiple-choice',
    question: 'What is $\\phi(12)$?',
    options: [
      '4',
      '6',
      '11',
      '5',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The integers from 1 to 12 that are relatively prime to 12 are: 1, 5, 7, 11. These are exactly the numbers coprime to both 3 and 4 (the prime factors of 12 are 2 and 3). So $\\phi(12) = 4$.',
  },
  // Hard questions
  {
    id: 's41-h01',
    type: 'multiple-choice',
    question: 'In RSA encryption, why does decryption work (i.e., why does $(m^e)^d \\equiv m \\pmod{n}$)?',
    options: [
      'Because $ed \\equiv 1 \\pmod{\\phi(n)}$ and Euler\'s theorem applies',
      'Because $e$ and $d$ are prime numbers',
      'Because $n = pq$ is always odd',
      'Because modular arithmetic is reversible',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'RSA chooses $e$ and $d$ such that $ed \\equiv 1 \\pmod{\\phi(n)}$, meaning $ed = k\\phi(n) + 1$ for some integer $k$. By Euler\'s theorem, $m^{\\phi(n)} \\equiv 1 \\pmod{n}$, so $m^{ed} = m^{k\\phi(n)+1} = (m^{\\phi(n)})^k \\cdot m \\equiv 1^k \\cdot m = m$.',
  },
  {
    id: 's41-h02',
    type: 'multiple-choice',
    question: 'Carmichael numbers are problematic for the Fermat primality test because:',
    options: [
      'They are composite but pass the test for all bases coprime to them',
      'They are prime but fail the test',
      'They have no prime factors',
      'The test takes too long to compute for them',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Carmichael numbers are composite numbers $n$ for which $a^{n-1} \\equiv 1 \\pmod{n}$ for ALL $a$ coprime to $n$. This means the Fermat test incorrectly suggests they might be prime. The smallest Carmichael number is 561 = 3 × 11 × 17.',
  },
];
