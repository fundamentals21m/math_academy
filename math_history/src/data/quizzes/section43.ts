import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's43-e01',
    type: 'multiple-choice',
    question: 'Fermat\'s Last Theorem states that the equation $x^n + y^n = z^n$ has no positive integer solutions for:',
    options: [
      '$n > 2$',
      '$n > 1$',
      '$n = 2$',
      'All $n$',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Fermat\'s Last Theorem applies to exponents greater than 2. For $n = 2$, there are infinitely many solutions called Pythagorean triples (like $3^2 + 4^2 = 5^2$). Fermat claimed there are no solutions for any $n > 2$.',
  },
  {
    id: 's43-e02',
    type: 'multiple-choice',
    question: 'Who finally proved Fermat\'s Last Theorem?',
    options: [
      'Andrew Wiles (1995)',
      'Pierre de Fermat (1637)',
      'Leonhard Euler (1770)',
      'Carl Friedrich Gauss (1801)',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Andrew Wiles announced his proof in 1993 and published the corrected version (with Richard Taylor) in 1995, after 358 years of effort by mathematicians worldwide. The proof was over 100 pages of deep modern mathematics.',
  },
  // Medium questions
  {
    id: 's43-m01',
    type: 'multiple-choice',
    question: 'Fermat himself proved his theorem for which case?',
    options: [
      '$n = 4$ using infinite descent',
      '$n = 3$ using complex numbers',
      'All prime $n$',
      'He proved no cases',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Fermat proved the case $n = 4$ using his method of infinite descent: he showed that if a solution existed, a smaller one would too, leading to an impossible infinite regression. This is the only case Fermat is known to have actually proved.',
  },
  {
    id: 's43-m02',
    type: 'multiple-choice',
    question: 'Ernst Kummer\'s work on FLT led him to invent:',
    options: [
      'Ideal numbers (to restore unique factorization)',
      'Complex numbers',
      'Modular arithmetic',
      'Calculus',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Kummer discovered that unique factorization fails in certain number rings needed for FLT. He invented "ideal numbers" (later formalized as ideals by Dedekind) to restore unique factorization at a higher level, founding algebraic number theory.',
  },
  // Hard questions
  {
    id: 's43-h01',
    type: 'multiple-choice',
    question: 'Wiles\'s proof of FLT relied on proving a special case of:',
    options: [
      'The Taniyama-Shimura-Weil (modularity) conjecture',
      'The Riemann Hypothesis',
      'Goldbach\'s Conjecture',
      'The Four Color Theorem',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Wiles proved that semistable elliptic curves over $\\mathbb{Q}$ are modular. Ken Ribet had shown that a counterexample to FLT would produce a non-modular elliptic curve, so Wiles\'s modularity result implies FLT.',
  },
  {
    id: 's43-h02',
    type: 'multiple-choice',
    question: 'Frey\'s key insight was that a counterexample $a^p + b^p = c^p$ would produce:',
    options: [
      'An elliptic curve that couldn\'t be modular',
      'A new prime number',
      'A contradiction in calculus',
      'An infinite sequence of solutions',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Frey observed that the elliptic curve $y^2 = x(x - a^p)(x + b^p)$ constructed from a hypothetical FLT counterexample would have such unusual properties that it couldn\'t satisfy the modularity conjecture. Ribet proved this observation rigorously.',
  },
];
