import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of the Peano axioms for the natural numbers?',
    options: [
      'Every natural number has a predecessor',
      '$0$ is a natural number',
      'Every natural number $n$ has a successor $S(n)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Peano axioms state that $0$ is a natural number, every $n$ has a successor, $0$ is not a successor, successors are injective, and the induction axiom holds. Not every natural number has a predecessor (specifically, $0$ does not).',
  },
      '$0$ is not the successor of any natural number',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Peano axioms state that $0$ is a natural number, every $n$ has a successor, $0$ is not a successor, successors are injective, and the induction axiom holds. Not every natural number has a predecessor (specifically, $0$ does not).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the Peano axioms, the successor function $S$ satisfies $S(n) = S(m) \\implies n = m$. This property is called:',
    options: [
      'Injectivity (one-to-one)',
      'Surjectivity',
      'Associativity',
      'Commutativity',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This property states that distinct natural numbers have distinct successors. A function with this property is called injective or one-to-one.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The principle of mathematical induction states that if $P(0)$ is true and $P(n) \\implies P(S(n))$ for all $n$, then:',
    options: [
      '$P(n)$ is true for some natural number $n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Induction allows us to prove that a property $P$ holds for ALL natural numbers by establishing the base case $P(0)$ and the inductive step $P(n) \\implies P(S(n))$.',
  },
      '$P(n)$ is true for all real numbers',
      '$P(n)$ is true for all natural numbers $n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Induction allows us to prove that a property $P$ holds for ALL natural numbers by establishing the base case $P(0)$ and the inductive step $P(n) \\implies P(S(n))$.',
  },
      '$P(n)$ is false for all $n > 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Induction allows us to prove that a property $P$ holds for ALL natural numbers by establishing the base case $P(0)$ and the inductive step $P(n) \\implies P(S(n))$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Induction allows us to prove that a property $P$ holds for ALL natural numbers by establishing the base case $P(0)$ and the inductive step $P(n) \\implies P(S(n))$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Using the successor notation where $1 = S(0)$, $2 = S(S(0))$, etc., how many applications of $S$ are needed to express the number $5$ starting from $0$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: 'We have $5 = S(S(S(S(S(0)))))$, which requires $5$ applications of the successor function.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is the induction axiom essential for characterizing the natural numbers?',
    options: [
      'It ensures there are no "extra" elements beyond $0, S(0), S(S(0)), \\ldots
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Without induction, we could have models with additional elements not reachable from $0$ by successive applications of $S$. Induction ensures that $\\mathbb{N} = \\{0, S(0), S(S(0)), \\ldots\\}$.',
  },
      'It defines addition on natural numbers',
      'It proves that $0 \\neq 1
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Without induction, we could have models with additional elements not reachable from $0$ by successive applications of $S$. Induction ensures that $\\mathbb{N} = \\{0, S(0), S(S(0)), \\ldots\\}$.',
  },
      'It defines the ordering of natural numbers',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Without induction, we could have models with additional elements not reachable from $0$ by successive applications of $S$. Induction ensures that $\\mathbb{N} = \\{0, S(0), S(S(0)), \\ldots\\}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'To prove a statement $P(n)$ for all $n \\geq 5$ using strong induction, the inductive hypothesis assumes:',
    options: [
      '$P(5)$ is true',
      '$P(k)$ is true for all $k$ with $5 \\leq k \\leq n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Strong induction assumes the property holds for ALL values from the base case up to $n$, then proves it for $n+1$. This is often more powerful than ordinary induction.',
  },
      '$P(n)$ is true for a single value of $n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Strong induction assumes the property holds for ALL values from the base case up to $n$, then proves it for $n+1$. This is often more powerful than ordinary induction.',
  },
      '$P(n+1)$ is true',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Strong induction assumes the property holds for ALL values from the base case up to $n$, then proves it for $n+1$. This is often more powerful than ordinary induction.',
  },
];
