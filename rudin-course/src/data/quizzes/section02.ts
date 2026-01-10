import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 'sec02-q1',
    type: 'multiple-choice',
    question: 'Which of the following is NOT a field axiom?',
    options: [
      '$x + y = y + x$ for all $x, y$ (commutativity of addition)',
      '$x \\cdot (y + z) = x \\cdot y + x \\cdot z$ (distributive law)',
      'Every element has a multiplicative inverse',
      'There exists an element $0$ such that $x + 0 = x$ for all $x$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Not every element has a multiplicative inverse—specifically, $0$ has no multiplicative inverse. The correct axiom states that every nonzero element has a multiplicative inverse.',
  },
  {
    id: 'sec02-q2',
    type: 'multiple-choice',
    question: 'In a field $F$, why is $0 \\cdot x = 0$ for all $x \\in F$?',
    options: [
      'It is an axiom of fields',
      'Because $0 \\cdot x = (0 + 0) \\cdot x = 0 \\cdot x + 0 \\cdot x$, so $0 \\cdot x = 0$',
      'Because $0$ has no multiplicative inverse',
      'Because multiplication is commutative'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Using distributivity: $0 \\cdot x = (0 + 0) \\cdot x = 0 \\cdot x + 0 \\cdot x$. Adding the additive inverse of $0 \\cdot x$ to both sides gives $0 = 0 \\cdot x$.',
  },
  {
    id: 'sec02-q3',
    type: 'multiple-choice',
    question: 'An ordered field is a field $F$ with an order relation $<$ such that:',
    options: [
      '$x < y$ implies $x + z < y + z$, and $x > 0, y > 0$ implies $xy > 0$',
      'Every element is either positive or negative',
      '$x < y$ if and only if $x - y < 0$',
      'The field is finite'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An ordered field requires the order to be compatible with field operations: translation preserves order ($x < y \\Rightarrow x+z < y+z$) and the product of positive elements is positive.',
  },
  {
    id: 'sec02-q4',
    type: 'multiple-choice',
    question: 'In an ordered field, if $x \\neq 0$, what can we conclude about $x^2$?',
    options: [
      '$x^2$ could be positive, negative, or zero',
      '$x^2 > 0$',
      '$x^2 < 0$',
      '$x^2 = 1$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $x > 0$, then $x \\cdot x > 0$ (product of positives). If $x < 0$, then $-x > 0$, so $(-x)(-x) = x^2 > 0$. Either way, $x^2 > 0$ for $x \\neq 0$.',
  },
  {
    id: 'sec02-q5',
    type: 'multiple-choice',
    question: 'Why can the complex numbers $\\mathbb{C}$ not be made into an ordered field?',
    options: [
      'Because $\\mathbb{C}$ is not a field',
      'Because $i^2 = -1 < 0$, but $i^2$ should be positive if $i \\neq 0$',
      'Because complex numbers cannot be compared',
      'Because $\\mathbb{C}$ is uncountable'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In any ordered field, $x^2 > 0$ for $x \\neq 0$. But in $\\mathbb{C}$, $i \\neq 0$ and $i^2 = -1$. If $\\mathbb{C}$ were ordered, we would need $i^2 > 0$, meaning $-1 > 0$, a contradiction.',
  },
];
