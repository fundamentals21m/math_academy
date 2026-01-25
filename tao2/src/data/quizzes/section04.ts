import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A metric space is compact if:',
    options: [
      'It is closed and bounded',
      'Every open cover has a finite subcover',
      'Both B and C are equivalent definitions',
      'Every sequence has a convergent subsequence',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In a metric space, compactness can be characterized either by the finite subcover property or by sequential compactness (every sequence has a convergent subsequence).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Heine-Borel theorem states that a subset of $\\mathbf{R}^n$ is compact if and only if it is:',
    options: [
      'Closed and bounded',
      'Open and bounded',
      'Complete and totally bounded',
      'Connected and bounded',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Heine-Borel theorem characterizes compact subsets of $\\mathbf{R}^n$ as precisely those that are closed and bounded.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following sets is NOT compact in $\\mathbf{R}$ with the standard metric?',
    options: [
      '$[0, 1]$',
      '$\\{0\\}$',
      '$\\{1/n : n \\in \\mathbf{N}\\} \\cup \\{0\\}$',
      '$(0, 1)$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The open interval $(0, 1)$ is not closed (it doesn\'t contain its limit points 0 and 1), so by Heine-Borel it is not compact.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A compact metric space is always:',
    options: [
      'Bounded but not necessarily complete',
      'Both complete and bounded',
      'Complete but not necessarily bounded',
      'Neither complete nor bounded necessarily',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Every compact metric space is both complete and totally bounded (hence bounded). Cauchy sequences in compact spaces have convergent subsequences, and the Cauchy property forces the whole sequence to converge.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f: X \\to Y$ is continuous and $K \\subseteq X$ is compact, then $f(K)$ is:',
    options: [
      'Open',
      'Closed',
      'Bounded but not necessarily compact',
      'Compact',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Continuous images of compact sets are compact. This is a fundamental result linking continuity and compactness.',
  },
];
