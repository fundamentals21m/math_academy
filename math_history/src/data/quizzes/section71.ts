import type { QuizQuestion } from './types';

export const section71Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's71-e01',
    type: 'multiple-choice',
    question: 'A Turing machine consists of:',
    options: [
      'An infinite tape, a read/write head, states, and a transition table',
      'A finite memory only',
      'A calculator with buttons',
      'A mechanical gear system',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'A Turing machine has an infinite tape divided into cells, a head that reads/writes and moves, a finite set of states, and a transition table that determines actions based on current state and symbol. This simple model captures all of computation.',
  },
  {
    id: 's71-e02',
    type: 'multiple-choice',
    question: 'The Church-Turing thesis states that:',
    options: [
      'Any computable function can be computed by a Turing machine',
      'All problems are solvable',
      'Turing machines are the fastest computers',
      'Only finite problems can be solved',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Church-Turing thesis asserts that Turing machines capture the intuitive notion of "algorithm"—any function computable by any reasonable method can be computed by a Turing machine. All proposed alternatives have been proven equivalent.',
  },
  // Medium questions
  {
    id: 's71-m01',
    type: 'multiple-choice',
    question: 'The Halting Problem asks whether:',
    options: [
      'Given a program and input, we can determine if it will eventually stop',
      'A computer can run forever',
      'All programs halt',
      'Computers can solve all problems',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Halting Problem: given a description of a Turing machine M and input x, determine if M eventually halts on x. Turing proved this is undecidable—no algorithm can correctly answer this for all M and x.',
  },
  {
    id: 's71-m02',
    type: 'multiple-choice',
    question: 'A Universal Turing Machine is significant because:',
    options: [
      'It can simulate any other Turing machine given its description',
      'It runs faster than all other machines',
      'It uses no memory',
      'It can only solve simple problems',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A Universal Turing Machine takes as input a description of any machine M and input x, and simulates M on x. This is the theoretical foundation of stored-program computers—one machine running different programs rather than separate hardware for each task.',
  },
  // Hard questions
  {
    id: 's71-h01',
    type: 'multiple-choice',
    question: 'Turing\'s negative solution to the Entscheidungsproblem showed that:',
    options: [
      'There is no algorithm to decide if arbitrary statements are provable',
      'All mathematical statements can be decided',
      'The Entscheidungsproblem was poorly posed',
      'Only arithmetic statements are undecidable',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Entscheidungsproblem asked for an algorithm to decide provability of any statement. Turing showed no such algorithm exists, connecting to Gödel\'s incompleteness. This was a major blow to Hilbert\'s foundational program.',
  },
  {
    id: 's71-h02',
    type: 'multiple-choice',
    question: 'Hilbert\'s 10th problem (deciding if Diophantine equations have integer solutions) was proven:',
    options: [
      'Undecidable by Matiyasevich in 1970',
      'Decidable by Turing in 1936',
      'Equivalent to P = NP',
      'Solvable in polynomial time',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Hilbert\'s 10th problem asked for an algorithm to determine if a given Diophantine equation has integer solutions. Building on work by Davis, Putnam, and Robinson, Matiyasevich proved in 1970 that no such algorithm exists—the problem is undecidable.',
  },
];
