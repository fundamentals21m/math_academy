import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is unique about how the Appendix on Newspeak is written?',
    options: ['It is in the past tense, suggesting Oceania eventually fell', 'It is in Newspeak only', 'It is written by Goldstein', 'It is incomplete'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Appendix is written entirely in the past tense—"Newspeak WAS the official language"—suggesting the regime eventually ended.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the primary purpose of Newspeak?',
    options: ['To make communication more efficient', 'To make thoughtcrime literally impossible by eliminating words', 'To create a universal language', 'To help proles communicate'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Newspeak is designed to make thoughtcrime impossible by eliminating the words—and thus the concepts—needed to express unorthodox ideas.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What would happen to the Declaration of Independence under Newspeak?',
    options: ['It would be preserved', 'It would be simplified', 'It would be impossible to render—concepts like "liberty" cannot be expressed', 'It would be translated exactly'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Passages like "all men are created equal...endowed with inalienable rights" would be impossible to render in Newspeak—the concepts simply would not exist.'
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the term for speaking orthodoxy without thought, like a duck quacking?',
    correctAnswer: 'duckspeak',
    difficulty: 'medium',
    explanation: 'Duckspeak is a Newspeak term for speaking orthodox slogans without engaging thought—literally quacking like a duck.'
  }
];
