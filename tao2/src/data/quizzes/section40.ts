import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Outer measure fails to be countably additive because:',
    options: [
      'It is always zero',
      'There exist non-measurable sets',
      'It is only defined for intervals',
      'It equals infinity everywhere'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Some sets (non-measurable) cause outer measure to fail countable additivity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Vitali set is an example of:',
    options: [
      'A measurable set',
      'A set with measure zero',
      'A non-measurable set',
      'An interval'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Vitali set is the classic example of a non-Lebesgue-measurable set.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The existence of non-measurable sets relies on:',
    options: [
      'The completeness axiom',
      'The axiom of choice',
      'The Archimedean property',
      'The triangle inequality'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Constructing non-measurable sets requires the axiom of choice.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If we could assign a measure to ALL subsets of $\\mathbf{R}$ with translation invariance and countable additivity, then:',
    options: [
      'We would get Lebesgue measure',
      'We would get a contradiction',
      'The measure would be zero everywhere',
      'All sets would have measure 1'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'No such measure exists—it leads to contradictions with the axiom of choice.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The solution to the non-additivity problem is to:',
    options: [
      'Abandon measure theory',
      'Restrict to a $\\sigma$-algebra of measurable sets',
      'Only consider finite sets',
      'Use a different metric'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We define Lebesgue measure only on measurable sets, forming a $\\sigma$-algebra.',
  },
];
