import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 'sec00-q1',
    type: 'multiple-choice',
    question: 'Why does the equation $p^2 = 2$ have no solution in the rational numbers $\\mathbb{Q}$?',
    options: [
      'Because assuming $p = m/n$ in lowest terms leads to both $m$ and $n$ being even, a contradiction',
      'Because $2$ is a prime number',
      'Because the square root function is not defined for rationals',
      'Because $2$ is larger than $1$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $p = m/n$ with $\\gcd(m,n) = 1$, then $p^2 = 2$ implies $m^2 = 2n^2$. This means $m^2$ is even, so $m$ is even. Writing $m = 2k$, we get $4k^2 = 2n^2$, so $n^2 = 2k^2$, making $n$ even. But then $\\gcd(m,n) \\geq 2$, contradicting our assumption.',
  },
  {
    id: 'sec00-q2',
    type: 'multiple-choice',
    question: 'Consider the set $A = \\{p \\in \\mathbb{Q} : p^2 < 2\\}$. Which statement is true?',
    options: [
      '$A$ has a largest element in $\\mathbb{Q}$',
      '$A$ has upper bounds in $\\mathbb{Q}$ but no least upper bound in $\\mathbb{Q}$',
      '$A$ has no upper bound in $\\mathbb{Q}$',
      '$A$ is empty'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Any rational $q > \\sqrt{2}$ is an upper bound for $A$. However, since $\\sqrt{2} \\notin \\mathbb{Q}$, there is no least upper bound in $\\mathbb{Q}$. For any rational upper bound $q$, we can find a smaller rational still greater than $\\sqrt{2}$.',
  },
  {
    id: 'sec00-q3',
    type: 'multiple-choice',
    question: 'The gap in $\\mathbb{Q}$ demonstrated by $\\sqrt{2}$ shows that the rationals lack which property?',
    options: [
      'Closure under addition',
      'The Archimedean property',
      'The least upper bound property (completeness)',
      'Density'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rationals are dense and satisfy the Archimedean property. However, the set $\\{q \\in \\mathbb{Q} : q^2 < 2\\}$ is bounded above but has no least upper bound in $\\mathbb{Q}$. This is the least upper bound (or completeness) property that $\\mathbb{Q}$ lacks.',
  },
  {
    id: 'sec00-q4',
    type: 'multiple-choice',
    question: 'If $p$ is a positive rational with $p^2 < 2$, which expression gives a larger rational $q$ with $q^2 < 2$?',
    options: [
      '$q = p + 1$',
      '$q = 2p$',
      '$q = p^2$',
      '$q = \\frac{2p + 2}{p + 2}$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Rudin shows that $q = \\frac{2p + 2}{p + 2} = \\frac{2(p+1)}{p+2}$ satisfies $q > p$ and $q^2 < 2$ when $p^2 < 2$. This is derived from examining $q^2 - 2 = \\frac{2(p^2 - 2)}{(p+2)^2}$, which is negative when $p^2 < 2$.',
  },
  {
    id: 'sec00-q5',
    type: 'multiple-choice',
    question: 'What is the fundamental inadequacy of $\\mathbb{Q}$ that motivates the construction of $\\mathbb{R}$?',
    options: [
      'Bounded sets in $\\mathbb{Q}$ may lack suprema in $\\mathbb{Q}$',
      '$\\mathbb{Q}$ contains too many elements',
      '$\\mathbb{Q}$ is not closed under division',
      '$\\mathbb{Q}$ does not contain zero'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The rationals are an ordered field, but they have "gaps"—bounded sets without least upper bounds. The real numbers $\\mathbb{R}$ are constructed precisely to fill these gaps and satisfy the least upper bound property.',
  },
];
