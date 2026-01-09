import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The statement $\\forall x \\, P(x)$ means:',
    options: [
      'For all $x$, $P(x)$ is true',
      'There exists an $x$ such that $P(x)$ is true',
      '$P(x)$ is true for exactly one $x$',
      '$P(x)$ is never true'
    ],
    correctIndex: 0,
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
      '$\\exists x \\, \\neg P(x)$',
      '$\\forall x \\, \\neg P(x)$',
      '$\\neg \\exists x \\, P(x)$',
      '$\\exists x \\, P(x)$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'To negate "all", we say "there exists one that is not".',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The negation of $\\exists x \\, P(x)$ is:',
    options: [
      '$\\forall x \\, \\neg P(x)$',
      '$\\exists x \\, \\neg P(x)$',
      '$\\neg \\forall x \\, P(x)$',
      '$\\forall x \\, P(x)$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'To negate "there exists", we say "for all, it is not".',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The statement "All primes greater than 2 are odd" is written as:',
    options: [
      '$\\forall p \\, ((p > 2 \\land \\text{prime}(p)) \\Rightarrow \\text{odd}(p))$',
      '$\\exists p \\, (p > 2 \\land \\text{prime}(p) \\land \\text{odd}(p))$',
      '$\\forall p \\, (\\text{prime}(p) \\land \\text{odd}(p))$',
      '$\\exists p \\, (\\text{prime}(p) \\Rightarrow \\text{odd}(p))$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Universal statements about conditionally-defined properties use implications.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'When do we swap quantifiers in negation?',
    options: [
      '$\\neg \\forall$ becomes $\\exists$ and $\\neg \\exists$ becomes $\\forall$',
      'Never',
      'Only when there are nested quantifiers',
      '$\\neg \\forall$ becomes $\\forall \\neg$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Negation swaps quantifiers: $\\neg \\forall \\leftrightarrow \\exists$ and $\\neg \\exists \\leftrightarrow \\forall$.',
  },
];
