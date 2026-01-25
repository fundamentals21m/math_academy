import type { QuizQuestion } from './types';

export const section66Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The universal quantifier $\\forall x$ in the statement $\\forall x \\, P(x)$ means:',
    options: [
      '$P(x)$ is true for a specific element $x$',
      '$P(x)$ is true for at least one element $x$ in the domain',
      '$P(x)$ is true for no element $x$ in the domain',
      '$P(x)$ is true for every element $x$ in the domain'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The universal quantifier $\\forall$ asserts that the predicate $P(x)$ holds for all elements $x$ in the domain of discourse.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The existential quantifier $\\exists x$ in the statement $\\exists x \\, P(x)$ means:',
    options: [
      '$P(x)$ is true for at least one element $x$ in the domain',
      '$P(x)$ is true for every element $x$ in the domain',
      '$P(x)$ is true for exactly one element $x$ in the domain',
      '$P(x)$ is false for all elements $x$ in the domain'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The existential quantifier $\\exists$ asserts that there is at least one element $x$ in the domain for which the predicate $P(x)$ is true.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The negation of $\\forall x \\, P(x)$ is:',
    options: [
      '$\\forall x \\, \\neg P(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To negate "for all $x$, $P(x)$," we assert "there exists an $x$ for which $P(x)$ is false." Formally, $\\neg(\\forall x \\, P(x)) \\equiv \\exists x \\, \\neg P(x)$.',
  },
      '$\\neg \\exists x \\, P(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'To negate "for all $x$, $P(x)$," we assert "there exists an $x$ for which $P(x)$ is false." Formally, $\\neg(\\forall x \\, P(x)) \\equiv \\exists x \\, \\neg P(x)$.',
  },
      '$\\exists x \\, \\neg P(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'To negate "for all $x$, $P(x)$," we assert "there exists an $x$ for which $P(x)$ is false." Formally, $\\neg(\\forall x \\, P(x)) \\equiv \\exists x \\, \\neg P(x)$.',
  },
      '$\\exists x \\, P(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'To negate "for all $x$, $P(x)$," we assert "there exists an $x$ for which $P(x)$ is false." Formally, $\\neg(\\forall x \\, P(x)) \\equiv \\exists x \\, \\neg P(x)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'To negate "for all $x$, $P(x)$," we assert "there exists an $x$ for which $P(x)$ is false." Formally, $\\neg(\\forall x \\, P(x)) \\equiv \\exists x \\, \\neg P(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The negation of $\\exists x \\, P(x)$ is:',
    options: [
      '$\\neg \\forall x \\, P(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'To negate "there exists an $x$ such that $P(x)$," we assert "for all $x$, $P(x)$ is false." Formally, $\\neg(\\exists x \\, P(x)) \\equiv \\forall x \\, \\neg P(x)$.',
  },
      '$\\forall x \\, \\neg P(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To negate "there exists an $x$ such that $P(x)$," we assert "for all $x$, $P(x)$ is false." Formally, $\\neg(\\exists x \\, P(x)) \\equiv \\forall x \\, \\neg P(x)$.',
  },
      '$\\exists x \\, \\neg P(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To negate "there exists an $x$ such that $P(x)$," we assert "for all $x$, $P(x)$ is false." Formally, $\\neg(\\exists x \\, P(x)) \\equiv \\forall x \\, \\neg P(x)$.',
  },
      '$\\forall x \\, P(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To negate "there exists an $x$ such that $P(x)$," we assert "for all $x$, $P(x)$ is false." Formally, $\\neg(\\exists x \\, P(x)) \\equiv \\forall x \\, \\neg P(x)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To negate "there exists an $x$ such that $P(x)$," we assert "for all $x$, $P(x)$ is false." Formally, $\\neg(\\exists x \\, P(x)) \\equiv \\forall x \\, \\neg P(x)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A variable $x$ in a formula is called a bound variable if:',
    options: [
      'It appears on both sides of an equation',
      'It is not within the scope of any quantifier',
      'It is within the scope of a quantifier that binds it',
      'It takes a fixed numerical value',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A variable is bound when it falls within the scope of a quantifier ($\\forall x$ or $\\exists x$) that "captures" it. A variable not bound by any quantifier is called free.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The unique existential quantifier $\\exists! x \\, P(x)$ means:',
    options: [
      'There exists at least one $x$ such that $P(x)$ is true',
      'For all $x$, $P(x)$ is true',
      'There exist at least two distinct $x$ such that $P(x)$ is true',
      'There exists exactly one $x$ such that $P(x)$ is true',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The unique existential quantifier $\\exists!$ asserts both existence and uniqueness: there is at least one $x$ satisfying $P(x)$, and any two elements satisfying $P$ must be equal.',
  },
];
