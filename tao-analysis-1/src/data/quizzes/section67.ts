import type { QuizQuestion } from './types';

export const section67Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The statement $\\forall x \\, \\exists y \\, P(x, y)$ means:',
    options: [
      'There exists a single $y$ that works for all $x$ such that $P(x,y)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In $\\forall x \\, \\exists y \\, P(x,y)$, the choice of $y$ may depend on which $x$ is given. Each $x$ has its own witness $y$, but they need not be the same.',
  },
      'For some $x$ and some $y$, $P(x,y)$ holds',
      'For all $x$ and all $y$, $P(x,y)$ holds',
      'For every $x$, there exists some $y$ (possibly depending on $x$) such that $P(x,y)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In $\\forall x \\, \\exists y \\, P(x,y)$, the choice of $y$ may depend on which $x$ is given. Each $x$ has its own witness $y$, but they need not be the same.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In $\\forall x \\, \\exists y \\, P(x,y)$, the choice of $y$ may depend on which $x$ is given. Each $x$ has its own witness $y$, but they need not be the same.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The statement $\\exists y \\, \\forall x \\, P(x, y)$ means:',
    options: [
      'For some $x$ and all $y$, $P(x,y)$ holds',
      'For every $x$, there exists some $y$ (depending on $x$) such that $P(x,y)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $\\exists y$ comes first, a single $y$ must satisfy $P(x,y)$ for ALL $x$ simultaneously. This is generally a stronger statement than $\\forall x \\, \\exists y \\, P(x,y)$.',
  },
      'These quantifiers have the same meaning as $\\forall x \\, \\exists y
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $\\exists y$ comes first, a single $y$ must satisfy $P(x,y)$ for ALL $x$ simultaneously. This is generally a stronger statement than $\\forall x \\, \\exists y \\, P(x,y)$.',
  },
      'There exists a single $y$ that works for all $x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $\\exists y$ comes first, a single $y$ must satisfy $P(x,y)$ for ALL $x$ simultaneously. This is generally a stronger statement than $\\forall x \\, \\exists y \\, P(x,y)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $\\exists y$ comes first, a single $y$ must satisfy $P(x,y)$ for ALL $x$ simultaneously. This is generally a stronger statement than $\\forall x \\, \\exists y \\, P(x,y)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which is the correct negation of $\\forall x \\, \\exists y \\, P(x, y)$?',
    options: [
      '$\\forall x \\, \\exists y \\, \\neg P(x, y)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'To negate, we push $\\neg$ through each quantifier, flipping $\\forall$ to $\\exists$ and vice versa: $\\neg(\\forall x \\, \\exists y \\, P) \\equiv \\exists x \\, \\neg(\\exists y \\, P) \\equiv \\exists x \\, \\forall y \\, \\neg P$.',
  },
      '$\\exists x \\, \\forall y \\, \\neg P(x, y)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To negate, we push $\\neg$ through each quantifier, flipping $\\forall$ to $\\exists$ and vice versa: $\\neg(\\forall x \\, \\exists y \\, P) \\equiv \\exists x \\, \\neg(\\exists y \\, P) \\equiv \\exists x \\, \\forall y \\, \\neg P$.',
  },
      '$\\forall x \\, \\forall y \\, \\neg P(x, y)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To negate, we push $\\neg$ through each quantifier, flipping $\\forall$ to $\\exists$ and vice versa: $\\neg(\\forall x \\, \\exists y \\, P) \\equiv \\exists x \\, \\neg(\\exists y \\, P) \\equiv \\exists x \\, \\forall y \\, \\neg P$.',
  },
      '$\\exists x \\, \\exists y \\, \\neg P(x, y)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To negate, we push $\\neg$ through each quantifier, flipping $\\forall$ to $\\exists$ and vice versa: $\\neg(\\forall x \\, \\exists y \\, P) \\equiv \\exists x \\, \\neg(\\exists y \\, P) \\equiv \\exists x \\, \\forall y \\, \\neg P$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To negate, we push $\\neg$ through each quantifier, flipping $\\forall$ to $\\exists$ and vice versa: $\\neg(\\forall x \\, \\exists y \\, P) \\equiv \\exists x \\, \\neg(\\exists y \\, P) \\equiv \\exists x \\, \\forall y \\, \\neg P$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Consider the definition of continuity: $f$ is continuous at $a$ if $\\forall \\epsilon > 0 \\, \\exists \\delta > 0 \\, \\forall x \\, (|x-a| < \\delta \\to |f(x)-f(a)| < \\epsilon)$. The negation (f is NOT continuous at $a$) is:',
    options: [
      '$\\forall \\epsilon > 0 \\, \\exists \\delta > 0 \\, \\exists x \\, (|x-a| < \\delta \\land |f(x)-f(a)| \\geq \\epsilon)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Negate by flipping quantifiers and negating the inner implication. Since $\\neg(P \\to Q) \\equiv P \\land \\neg Q$, we get: there exists a "bad" $\\epsilon$ such that no matter how small $\\delta$ is, some $x$ within $\\delta$ of $a$ has $|f(x)-f(a)| \\geq \\epsilon$.',
  },
      '$\\exists \\epsilon > 0 \\, \\exists \\delta > 0 \\, \\forall x \\, (|x-a| < \\delta \\to |f(x)-f(a)| \\geq \\epsilon)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Negate by flipping quantifiers and negating the inner implication. Since $\\neg(P \\to Q) \\equiv P \\land \\neg Q$, we get: there exists a "bad" $\\epsilon$ such that no matter how small $\\delta$ is, some $x$ within $\\delta$ of $a$ has $|f(x)-f(a)| \\geq \\epsilon$.',
  },
      '$\\exists \\epsilon > 0 \\, \\forall \\delta > 0 \\, \\exists x \\, (|x-a| < \\delta \\land |f(x)-f(a)| \\geq \\epsilon)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Negate by flipping quantifiers and negating the inner implication. Since $\\neg(P \\to Q) \\equiv P \\land \\neg Q$, we get: there exists a "bad" $\\epsilon$ such that no matter how small $\\delta$ is, some $x$ within $\\delta$ of $a$ has $|f(x)-f(a)| \\geq \\epsilon$.',
  },
      '$\\forall \\epsilon > 0 \\, \\forall \\delta > 0 \\, \\forall x \\, (|x-a| < \\delta \\land |f(x)-f(a)| \\geq \\epsilon)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Negate by flipping quantifiers and negating the inner implication. Since $\\neg(P \\to Q) \\equiv P \\land \\neg Q$, we get: there exists a "bad" $\\epsilon$ such that no matter how small $\\delta$ is, some $x$ within $\\delta$ of $a$ has $|f(x)-f(a)| \\geq \\epsilon$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Negate by flipping quantifiers and negating the inner implication. Since $\\neg(P \\to Q) \\equiv P \\land \\neg Q$, we get: there exists a "bad" $\\epsilon$ such that no matter how small $\\delta$ is, some $x$ within $\\delta$ of $a$ has $|f(x)-f(a)| \\geq \\epsilon$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the statement "$\\lim_{x \\to a} f(x) = L$" given by $\\forall \\epsilon > 0 \\, \\exists \\delta > 0 \\, \\forall x \\, (0 < |x-a| < \\delta \\to |f(x)-L| < \\epsilon)$, the order of quantifiers indicates that:',
    options: [
      '$\\delta$ may depend on $\\epsilon$, but not on $x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $\\exists \\delta$ comes after $\\forall \\epsilon$, the choice of $\\delta$ can depend on which $\\epsilon$ is given. But $\\delta$ is chosen before the universal $\\forall x$, so the same $\\delta$ must work for all $x$ in its neighborhood.',
  },
      '$\\delta$ must be the same for all $\\epsilon
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $\\exists \\delta$ comes after $\\forall \\epsilon$, the choice of $\\delta$ can depend on which $\\epsilon$ is given. But $\\delta$ is chosen before the universal $\\forall x$, so the same $\\delta$ must work for all $x$ in its neighborhood.',
  },
      '$\\epsilon$ may depend on $\\delta
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $\\exists \\delta$ comes after $\\forall \\epsilon$, the choice of $\\delta$ can depend on which $\\epsilon$ is given. But $\\delta$ is chosen before the universal $\\forall x$, so the same $\\delta$ must work for all $x$ in its neighborhood.',
  },
      '$x$ must be chosen before $\\delta
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $\\exists \\delta$ comes after $\\forall \\epsilon$, the choice of $\\delta$ can depend on which $\\epsilon$ is given. But $\\delta$ is chosen before the universal $\\forall x$, so the same $\\delta$ must work for all $x$ in its neighborhood.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $\\exists \\delta$ comes after $\\forall \\epsilon$, the choice of $\\delta$ can depend on which $\\epsilon$ is given. But $\\delta$ is chosen before the universal $\\forall x$, so the same $\\delta$ must work for all $x$ in its neighborhood.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $\\exists y \\, \\forall x \\, P(x,y)$ is true, then $\\forall x \\, \\exists y \\, P(x,y)$ is:',
    options: [
      'Necessarily true',
      'Possibly true or false',
      'Necessarily false',
      'Logically equivalent to the first statement',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If there exists a single $y_0$ such that $P(x, y_0)$ holds for all $x$, then certainly for each $x$ we can find some $y$ (namely $y_0$) such that $P(x,y)$. So $\\exists y \\forall x \\Rightarrow \\forall x \\exists y$, but not conversely.',
  },
];
