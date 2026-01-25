import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The statement $\\forall x \\, P(x)$ means:',
    options: [
      '$P(x)$ is never true',
      'There exists an $x$ such that $P(x)$ is true',
      'For all $x$, $P(x)$ is true',
      '$P(x)$ is true for exactly one $x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\forall$ is the universal quantifier meaning "for all".',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\forall$ is the universal quantifier meaning "for all".',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The statement $\\exists x \\, P(x)$ means:',
    options: [
      'There exists an $x$ such that $P(x)$ is true',
      'For all $x$, $P(x)$ is true',
      'There is no $x$ with $P(x)$ true',
      '$P(x)$ is true for exactly one $x$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\exists$ is the existential quantifier meaning "there exists".',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The negation of $\\forall x \\, P(x)$ is:',
    options: [
      '$\\forall x \\, \\neg P(x)$',
      '$\\exists x \\, \\neg P(x)$',
      '$\\neg \\exists x \\, P(x)$',
      '$\\exists x \\, P(x)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'To negate "all", we say "there exists one that is not".',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The negation of $\\exists x \\, P(x)$ is:',
    options: [
      '$\\neg \\forall x \\, P(x)$',
      '$\\exists x \\, \\neg P(x)$',
      '$\\forall x \\, \\neg P(x)$',
      '$\\forall x \\, P(x)$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'To negate "there exists", we say "for all, it is not".',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The statement "All primes greater than 2 are odd" is written as:',
    options: [
      '$\\exists p \\, (\\text{prime}(p) \\Rightarrow \\text{odd}(p))$',
      '$\\exists p \\, (p > 2 \\land \\text{prime}(p) \\land \\text{odd}(p))$',
      '$\\forall p \\, (\\text{prime}(p) \\land \\text{odd}(p))$',
      '$\\forall p \\, ((p > 2 \\land \\text{prime}(p)) \\Rightarrow \\text{odd}(p))$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Universal statements about conditionally-defined properties use implications.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'When do we swap quantifiers in negation?',
    options: [
      'Never',
      'Only when there are nested quantifiers',
      '$\\neg \\forall$ becomes $\\forall \\neg
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Negation swaps quantifiers: $\\neg \\forall \\leftrightarrow \\exists$ and $\\neg \\exists \\leftrightarrow \\forall$.',
  },
      '$\\neg \\forall$ becomes $\\exists$ and $\\neg \\exists$ becomes $\\forall
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Negation swaps quantifiers: $\\neg \\forall \\leftrightarrow \\exists$ and $\\neg \\exists \\leftrightarrow \\forall$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Negation swaps quantifiers: $\\neg \\forall \\leftrightarrow \\exists$ and $\\neg \\exists \\leftrightarrow \\forall$.',
  },
];
