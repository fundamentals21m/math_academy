import type { QuizQuestion } from './types';

export const section68Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's68-e01',
    type: 'multiple-choice',
    question: 'Two sets have the same cardinality if:',
    options: [
      'They contain the same elements',
      'There exists a bijection (one-to-one correspondence) between them',
      'They are both infinite',
      'They have the same number of subsets',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Cantor defined two sets to have the same cardinality (size) if there exists a bijection between them—a pairing where each element of one set corresponds to exactly one element of the other.',
  },
  {
    id: 's68-e02',
    type: 'multiple-choice',
    question: 'A set is countably infinite if:',
    options: [
      'It is finite',
      'It contains only natural numbers',
      'Its elements can be put in one-to-one correspondence with the natural numbers',
      'It contains the number zero',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'A countably infinite set can be "listed" (first element, second element, ...), which means there\'s a bijection with N. Examples include the integers and rationals.',
  },
  // Medium questions
  {
    id: 's68-m01',
    type: 'multiple-choice',
    question: 'Cantor\'s diagonal argument proves that:',
    options: [
      'The natural numbers are uncountable',
      'The rational numbers are uncountable',
      'All infinite sets have the same size',
      'The real numbers are uncountable',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Cantor\'s diagonal argument (1891) shows that the real numbers cannot be listed—any supposed list misses at least one real number constructed by the diagonal method. Thus |R| > |N|.',
  },
  {
    id: 's68-m02',
    type: 'multiple-choice',
    question: 'Cantor\'s theorem states that for any set $A$:',
    options: [
      'The power set $\\mathcal{P}(A)$ has strictly greater cardinality than $A$',
      'All infinite sets have the same cardinality',
      '$A$ is always countable',
      'The cardinality of $A$ equals the cardinality of its power set',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Cantor\'s theorem states |A| < |P(A)| for any set A. This implies there\'s no largest infinite cardinal—we can always construct larger infinities by taking power sets.',
  },
  // Hard questions
  {
    id: 's68-h01',
    type: 'multiple-choice',
    question: 'The Continuum Hypothesis states that:',
    options: [
      'All infinite sets are countable',
      'The real numbers are countable',
      'There are exactly two sizes of infinity',
      'There is no cardinality strictly between $\\aleph_0$ and $\\mathfrak{c}
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The Continuum Hypothesis (CH) claims c = ℵ₁, meaning no set has cardinality strictly between the naturals and reals. Gödel and Cohen proved CH is independent of standard set theory axioms—it can neither be proved nor disproved.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The Continuum Hypothesis (CH) claims c = ℵ₁, meaning no set has cardinality strictly between the naturals and reals. Gödel and Cohen proved CH is independent of standard set theory axioms—it can neither be proved nor disproved.',
  },
  {
    id: 's68-h02',
    type: 'multiple-choice',
    question: 'The cardinality of the real numbers equals:',
    options: [
      '$\\aleph_0 + 1
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The cardinality of R equals 2^(ℵ₀), the cardinality of the power set of N. This is because real numbers can be represented as infinite binary sequences (subsets of N). This is strictly greater than ℵ₀.',
  },
      '$\\aleph_0
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The cardinality of R equals 2^(ℵ₀), the cardinality of the power set of N. This is because real numbers can be represented as infinite binary sequences (subsets of N). This is strictly greater than ℵ₀.',
  },
      '$\\aleph_0^2
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The cardinality of R equals 2^(ℵ₀), the cardinality of the power set of N. This is because real numbers can be represented as infinite binary sequences (subsets of N). This is strictly greater than ℵ₀.',
  },
      '$2^{\\aleph_0}
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The cardinality of R equals 2^(ℵ₀), the cardinality of the power set of N. This is because real numbers can be represented as infinite binary sequences (subsets of N). This is strictly greater than ℵ₀.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The cardinality of R equals 2^(ℵ₀), the cardinality of the power set of N. This is because real numbers can be represented as infinite binary sequences (subsets of N). This is strictly greater than ℵ₀.',
  },
];
