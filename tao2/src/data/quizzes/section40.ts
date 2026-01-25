import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Outer measure fails to be countably additive because:',
    options: [
      'It is always zero',
      'It is only defined for intervals',
      'There exist non-measurable sets',
      'It equals infinity everywhere',
    ],
    correctIndex: 2,
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
      'An interval',
      'A non-measurable set',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Vitali set is the classic example of a non-Lebesgue-measurable set.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The existence of non-measurable sets relies on:',
    options: [
      'The axiom of choice',
      'The completeness axiom',
      'The triangle inequality',
      'The Archimedean property',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Constructing non-measurable sets requires the axiom of choice.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If we could assign a measure to ALL subsets of $\\mathbf{R}$ with translation invariance and countable additivity, then:',
    options: [
      'We would get Lebesgue measure',
      'The measure would be zero everywhere',
      'All sets would have measure 1',
      'We would get a contradiction',
    ],
    correctIndex: 3,
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
      'Use a different metric',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We define Lebesgue measure only on measurable sets, forming a $\\sigma$-algebra.',
  },
];
