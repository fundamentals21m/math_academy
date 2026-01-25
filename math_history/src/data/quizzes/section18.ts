import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 's18-e01',
    type: 'multiple-choice',
    question: 'What does $17 \\equiv 2 \\pmod{5}$ mean?',
    difficulty: 'easy',
    options: [
      '17 divided by 2 equals 5',
      '17 and 2 have the same remainder when divided by 5',
      '17 equals 2 times 5',
      '17 minus 2 equals 5',
    ],
    correctIndex: 1,
    explanation:
      '$a \\equiv b \\pmod{m}$ means $a$ and $b$ have the same remainder when divided by $m$. Here, $17 = 3 \\times 5 + 2$ and $2 = 0 \\times 5 + 2$, so both have remainder 2.',
  },
  {
    id: 's18-e02',
    type: 'multiple-choice',
    question: 'In which ancient text did the Chinese Remainder Theorem first appear?',
    difficulty: 'easy',
    options: [
      'Euclid\\'s Elements',
      'Ptolemy\\'s Almagest',
      'The Sunzi Suanjing (Master Sun\\'s Mathematical Manual)',
      'The Rhind Papyrus',
    ],
    correctIndex: 2,
    explanation:
      'The Chinese Remainder Theorem first appears in the Sunzi Suanjing, a Chinese mathematical text from the 3rd-5th century CE.',
  },
  {
    id: 's18-m01',
    type: 'numeric',
    question:
      'Find the smallest positive integer $n$ such that $n \\equiv 1 \\pmod{2}$ and $n \\equiv 1 \\pmod{3}$.',
    difficulty: 'medium',
    correctAnswer: 1,
    explanation:
      'We need $n$ to leave remainder 1 when divided by both 2 and 3. The smallest such number is 1 itself (1 = 0×2 + 1 and 1 = 0×3 + 1). The next would be 7, then 13, etc.',
  },
  {
    id: 's18-m02',
    type: 'multiple-choice',
    question:
      'For the Chinese Remainder Theorem to guarantee a unique solution modulo $M = m_1 m_2 \\cdots m_k$, what condition must the moduli satisfy?',
    difficulty: 'medium',
    options: [
      'They must be pairwise coprime (any two share no common factor > 1)',
      'They must all be prime',
      'They must be consecutive integers',
      'They must all be powers of 2',
    ],
    correctIndex: 0,
    explanation:
      'The Chinese Remainder Theorem requires the moduli to be pairwise coprime, meaning $\\gcd(m_i, m_j) = 1$ for all $i \\neq j$. They don\'t need to be prime—just mutually coprime.',
  },
  {
    id: 's18-h01',
    type: 'numeric',
    question:
      'Find the smallest positive $n$ with $n \\equiv 2 \\pmod{3}$ and $n \\equiv 3 \\pmod{5}$.',
    difficulty: 'hard',
    correctAnswer: 8,
    explanation:
      'We need $n = 3k + 2$ for some $k$, and $n \\equiv 3 \\pmod{5}$. Testing: $k=0$: $n=2$, $2 \\mod 5 = 2$ ✗. $k=1$: $n=5$, $5 \\mod 5 = 0$ ✗. $k=2$: $n=8$, $8 \\mod 5 = 3$ ✓. So $n = 8$.',
  },
  {
    id: 's18-h02',
    type: 'multiple-choice',
    question:
      'Which modern application does NOT typically use the Chinese Remainder Theorem?',
    difficulty: 'hard',
    options: [
      'RSA cryptographic decryption speedup',
      'Parallel computation on large integers',
      'Error-correcting codes',
      'Sorting algorithms',
    ],
    correctIndex: 3,
    explanation:
      'Sorting algorithms don\'t typically use CRT. However, RSA uses CRT to speed up decryption by a factor of 4, large-integer arithmetic uses CRT for parallelization, and Reed-Solomon error-correcting codes are based on CRT principles.',
  },
];
