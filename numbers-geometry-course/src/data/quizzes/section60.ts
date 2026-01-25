import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 60: Unique Gaussian Prime Factorization
 */
export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Is 2 a Gaussian prime?',
    options: [
      'No, 2 = (1 + i)(1 - i)',
      'Yes, all ordinary primes are Gaussian primes',
      'Yes, because 2 is even',
      'No, 2 = i · (−2i)'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      '2 = (1 + i)(1 - i), a product of non-units, so 2 is not a Gaussian prime.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which ordinary prime remains prime in Z[i]?',
    options: [
      '3',
      '2',
      '5',
      '13',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      '3 ≡ 3 (mod 4), so it remains prime in Z[i]. The others split: 5 = (2+i)(2-i), etc.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the Gaussian factorization of 5?',
    options: [
      '5 is a Gaussian prime',
      '5 = (1 + 2i)(1 - 2i)',
      '5 = (1 + i)²',
      '5 = (2 + i)(2 - i)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      '5 = (2 + i)(2 - i). Note that N(2 + i) = 5.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If N(α) is an ordinary prime, what can we conclude?',
    options: [
      'α is a unit',
      'α is a Gaussian prime',
      'α = 1 + i',
      'Nothing',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'If N(α) is prime and α = βγ, then N(β)N(γ) is prime, so one factor is a unit.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does an ordinary prime p ≡ 1 (mod 4) factor in Z[i]?',
    options: [
      'Stays prime',
      'Has no factorization',
      'Splits as p = ππ̄',
      'Equals (1 + i)²',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Primes p ≡ 1 (mod 4) split into conjugate Gaussian primes: p = ππ̄ where N(π) = p.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What are associates of 3 in Z[i]?',
    options: [
      '3 and -3',
      '3 only',
      '3 and 3i',
      '3, -3, 3i, -3i',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Associates differ by unit factors. The units are 1, -1, i, -i, giving 3, -3, 3i, -3i.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Is 7 a Gaussian prime?',
    options: [
      'No, 7 = (2 + i)(2 - i) + 2',
      'No, 7 = (1 + i)(1 - i)²',
      'Yes, 7 ≡ 3 (mod 4)',
      'Yes, 7 is odd',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      '7 ≡ 3 (mod 4), so 7 remains prime in Z[i]. Primes ≡ 3 (mod 4) don\'t split.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What does unique factorization in Z[i] mean?',
    options: [
      'Every element has exactly one factorization',
      'Factorization is unique up to order and associates',
      'Only primes can be factored',
      'The factorization never uses i',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Like integers, factorization is unique up to reordering and multiplying by units.',
  },
];
