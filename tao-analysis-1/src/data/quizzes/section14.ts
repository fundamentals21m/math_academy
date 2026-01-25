import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The classic proof that $\\sqrt{2}$ is irrational proceeds by:',
    options: [
      'Showing $\\sqrt{2}$ has a non-terminating decimal expansion',
      'Constructing a Cauchy sequence that does not converge in $\\mathbb{Q}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The proof assumes $\\sqrt{2} = \\frac{p}{q}$ with $\\gcd(p,q) = 1$, then shows $p^2 = 2q^2$ implies $p$ is even, and then $q$ must also be even, contradicting $\\gcd(p,q) = 1$.',
  },
      'Assuming $\\sqrt{2} = \\frac{p}{q}$ in lowest terms and deriving that both $p$ and $q$ must be even',
      'Using the intermediate value theorem',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The proof assumes $\\sqrt{2} = \\frac{p}{q}$ with $\\gcd(p,q) = 1$, then shows $p^2 = 2q^2$ implies $p$ is even, and then $q$ must also be even, contradicting $\\gcd(p,q) = 1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does it mean to say there is a "gap" in the rationals at $\\sqrt{2}$?',
    options: [
      'There is no rational between $1$ and $2$',
      'The set $\\{x \\in \\mathbb{Q} : x^2 < 2\\}$ has no greatest element and $\\{x \\in \\mathbb{Q} : x^2 > 2\\}$ has no least element',
      'Every rational is either less than or greater than $\\sqrt{2}$',
      '$\\sqrt{2}$ cannot be approximated by rationals'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The "gap" means the rationals are partitioned into two non-empty sets with no maximum in the lower set and no minimum in the upper set. This gap is filled when we construct $\\mathbb{R}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $p$ is prime and $\\sqrt{p} = \\frac{a}{b}$ with $\\gcd(a,b) = 1$, then $a^2 = pb^2$ implies:',
    options: [
      '$p$ divides $a$ but not $b
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since $p \\mid a^2$ and $p$ is prime, $p \\mid a$. Writing $a = pk$ gives $p^2k^2 = pb^2$, so $pk^2 = b^2$, meaning $p \\mid b^2$ hence $p \\mid b$. This contradicts $\\gcd(a,b) = 1$.',
  },
      '$a = p$ and $b = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $p \\mid a^2$ and $p$ is prime, $p \\mid a$. Writing $a = pk$ gives $p^2k^2 = pb^2$, so $pk^2 = b^2$, meaning $p \\mid b^2$ hence $p \\mid b$. This contradicts $\\gcd(a,b) = 1$.',
  },
      'The equation has infinitely many solutions',
      '$p$ divides $a$, and then $p$ divides $b$, giving a contradiction',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $p \\mid a^2$ and $p$ is prime, $p \\mid a$. Writing $a = pk$ gives $p^2k^2 = pb^2$, so $pk^2 = b^2$, meaning $p \\mid b^2$ hence $p \\mid b$. This contradicts $\\gcd(a,b) = 1$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Find the smallest positive integer $n$ such that $n^2 > 200$ (demonstrating that rationals can approximate but never equal $\\sqrt{200}$).',
    correctAnswer: 15,
    numericRange: { min: 1, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: '$14^2 = 196 < 200$ and $15^2 = 225 > 200$. So $n = 15$ is the smallest positive integer with $n^2 > 200$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The set $\\{x \\in \\mathbb{Q} : x > 0 \\text{ and } x^2 < 2\\}$ is:',
    options: [
      'Bounded above with no supremum in $\\mathbb{Q}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The set is non-empty (contains $1$) and bounded above (by $2$), but its supremum would be $\\sqrt{2}$, which is not rational. This illustrates that $\\mathbb{Q}$ lacks the least upper bound property.',
  },
      'Empty',
      'Bounded above with a rational supremum',
      'Unbounded above',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The set is non-empty (contains $1$) and bounded above (by $2$), but its supremum would be $\\sqrt{2}$, which is not rational. This illustrates that $\\mathbb{Q}$ lacks the least upper bound property.',
  },
];
