import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A DFA (Deterministic Finite Automaton) consists of:',
    options: [
      'States, alphabet, transition function, start state, accepting states',
      'A regular expression',
      'Only states and transitions',
      'Only an alphabet and accepting states',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A DFA is defined by the 5-tuple $(Q, \\Sigma, \\delta, q_0, F)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a DFA, from any state on any input symbol, there is:',
    options: [
      'Exactly one transition',
      'Zero or more transitions',
      'At least two transitions',
      'No transitions'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Deterministic means exactly one transition for each state-symbol pair.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does an NFA differ from a DFA?',
    options: [
      'An NFA has no accepting states',
      'An NFA cannot have epsilon transitions',
      'An NFA can have multiple transitions on the same input',
      'An NFA recognizes different languages',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'NFAs allow multiple (or zero) transitions on the same input, plus $\\varepsilon$-transitions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A string is accepted by a DFA if:',
    options: [
      'Processing it visits every state',
      'It contains only alphabet symbols',
      'It is the shortest path through the automaton',
      'Processing it ends in an accepting state',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A DFA accepts a string if reading it leads from the start to an accepting state.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The languages recognized by DFAs and NFAs are:',
    options: [
      'Incomparable',
      'Different (DFAs are more powerful)',
      'The same (both recognize regular languages)',
      'Different (NFAs are more powerful)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Every NFA can be converted to an equivalent DFA (subset construction).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The subset construction converts an NFA with $n$ states to a DFA with at most:',
    options: [
      '$n$ states',
      '$2^n$ states',
      '$n^2$ states',
      '$n!$ states',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'DFA states correspond to subsets of NFA states; there are $2^n$ possible subsets.',
  },
];
