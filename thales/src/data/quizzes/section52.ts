import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 52: Lambda Calculus
 */
export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who invented the Lambda Calculus?',
    options: [
      'Alan Turing',
      'Alonzo Church',
      'Kurt Gödel',
      'David Hilbert',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Alonzo Church invented the Lambda Calculus as a formal system to understand mathematical entities as functions. In 1937, Church and Turing independently showed that every calculable function can be expressed in lambda calculus.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the abstraction operator λx do?',
    options: [
      'Multiplies x by a constant',
      'Deletes the variable x',
      'Creates a function that sends x to some expression',
      'Finds the derivative with respect to x',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The abstraction operator λx creates a function from an expression. For example, λx(x² + 1) is the function that sends x to x² + 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the lambda calculus, how is the number 2 defined?',
    options: [
      '2 = λx(x + x)',
      '2 = 1 + 1',
      '2 = λx λy(x + y)',
      '2 = λf(f²) — the function that assigns f composed with f to f',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Church defined numbers as processes of iteration. The number n is the function λf(fⁿ) that assigns the n-th iterate of f to f. So 2 = λf(f²) = λfλx(f·(f·x)).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which rule in lambda calculus allows (λxφ(x))·a = φ(a)?',
    options: [
      'Beta reduction (R1)',
      'Eta conversion (R2)',
      'Alpha conversion (R3)',
      'Gamma elimination',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Beta reduction (R1) is the rule that allows substituting a value for a bound variable: (λxφ(x))·a = φ(a). This is the fundamental computation rule of lambda calculus.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does the Fixpoint Theorem state?',
    options: [
      'Every function has exactly one fixpoint',
      'For any term φ, there exists α such that φ·α = α',
      'Lambda calculus has no fixpoints',
      'Fixpoints only exist for recursive functions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Fixpoint Theorem states that for any term φ, there is a term α such that φ·α = α. This is proved by constructing β = λx(φ·(x·x)) and α = β·β.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What are the three basic combinators that can replace lambda abstraction?',
    options: [
      'A, B, C',
      'X, Y, Z',
      'I, K, S',
      'α, β, γ',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Schönfinkel (1924) showed that the combinators I (identity), K (constant), and S (Schönfinkel operator) can eliminate the need for lambda abstraction. Every lambda term is provably equal to a combinator.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How is exponentiation mⁿ expressed in Church numerals?',
    options: [
      'm·n',
      'n·m',
      'm × n',
      'm + n',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Since n·f = fⁿ (the n-th iterate of f), substituting m for f gives n·m = mⁿ. So exponentiation is simply function application: mⁿ = n·m.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the Church-Turing thesis regarding lambda calculus?',
    options: [
      'Recursive = calculable = λ-definable',
      'Lambda calculus is more powerful than Turing machines',
      'Lambda calculus cannot compute all functions',
      'Church and Turing were rivals',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Church-Turing thesis states that recursive functions, calculable functions, and λ-definable functions are all the same class. This equivalence is strong evidence that these concepts capture what it means to be "computable."',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Why can\'t logical negation be incorporated into lambda calculus?',
    options: [
      'Negation is too complex',
      'Lambda calculus only handles numbers',
      'Church forbade it',
      'The fixpoint theorem implies every term has a fixpoint, but negation has none',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The Fixpoint Theorem guarantees that every term φ has a fixpoint α with φ·α = α. But logical negation has no fixpoint (no proposition equals its own negation). Therefore, negation cannot be represented in the untyped lambda calculus.',
  },
];
