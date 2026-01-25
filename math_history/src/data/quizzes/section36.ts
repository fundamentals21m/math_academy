import type { QuizQuestion } from './types';

export const section36Questions: QuizQuestion[] = [
  {
    id: 's36-e01',
    type: 'multiple-choice',
    question: 'What was the main problem with Newton and Leibniz\'s original calculus?',
    difficulty: 'easy',
    options: [
      'It gave wrong answers',
      'It only worked for polynomials',
      'It relied on "infinitesimals" that were logically problematic',
      'It required geometric diagrams'
    ],
    correctIndex: 2,
    explanation:
      'Newton and Leibniz used "infinitely small" quantities that were paradoxical: sometimes treated as nonzero (to divide by them), sometimes as zero (to simplify). Bishop Berkeley famously called them "ghosts of departed quantities."',
  },
  {
    id: 's36-e02',
    type: 'multiple-choice',
    question: 'What concept replaced infinitesimals in rigorous calculus?',
    difficulty: 'easy',
    options: [
      'Infinities',
      'Series',
      'Approximations',
      'Limits'
    ],
    correctIndex: 3,
    explanation:
      'The epsilon-delta definition of limits, developed by Cauchy and perfected by Weierstrass, replaced vague infinitesimals with precise statements about "arbitrarily small" quantities.',
  },
  {
    id: 's36-m01',
    type: 'multiple-choice',
    question:
      'In the epsilon-delta definition, $\\lim_{x \\to a} f(x) = L$ means:',
    difficulty: 'medium',
    options: [
      'For every $\\varepsilon > 0$, there exists $\\delta > 0$ such that $|x-a| < \\delta$ implies $|f(x)-L| < \\varepsilon$',
      '$f(a) = L$',
      '$f(x)$ gets infinitely close to $L$',
      '$f(x) = L$ for all $x$ near $a$'
    ],
    correctIndex: 0,
    explanation:
      'The epsilon-delta definition says: we can make $f(x)$ as close to $L$ as we want (within $\\varepsilon$) by taking $x$ sufficiently close to $a$ (within $\\delta$). This avoids any reference to "infinitely small."',
  },
  {
    id: 's36-m02',
    type: 'multiple-choice',
    question: 'What surprising function did Weierstrass construct in 1872?',
    difficulty: 'medium',
    options: [
      'A function with infinitely many roots',
      'A function continuous everywhere but differentiable nowhere',
      'A function equal to its own derivative',
      'A function with no maximum value',
    ],
    correctIndex: 1,
    explanation:
      'Weierstrass constructed a function that is continuous at every point but has no derivative at any point. This shocked mathematicians who assumed continuous functions must be "smooth" except at isolated points.',
  },
  {
    id: 's36-h01',
    type: 'multiple-choice',
    question:
      'Who wrote the 1734 critique of calculus calling infinitesimals "ghosts of departed quantities"?',
    difficulty: 'hard',
    options: [
      'Euler',
      'D\'Alembert',
      'Bishop Berkeley',
      'Lagrange',
    ],
    correctIndex: 2,
    explanation:
      'Bishop George Berkeley wrote "The Analyst" (1734), a devastating critique of calculus foundations. He pointed out that dividing by $h$ (treating it as nonzero) then setting $h = 0$ was logically inconsistent.',
  },
  {
    id: 's36-h02',
    type: 'multiple-choice',
    question:
      'What did Abraham Robinson\'s nonstandard analysis (1960s) show about infinitesimals?',
    difficulty: 'hard',
    options: [
      'They don\'t exist in any sense',
      'They contradict the epsilon-delta definition',
      'They are equivalent to zero',
      'They can be made rigorous using advanced logic'
    ],
    correctIndex: 3,
    explanation:
      'Robinson showed that using model theory, one can construct a rigorous number system containing genuine infinitesimals. This vindicated Newton and Leibniz\'s intuition: infinitesimals can be made meaningful, just not with 17th-century logic.',
  },
];
