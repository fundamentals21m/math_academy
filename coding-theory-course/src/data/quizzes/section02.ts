import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $\\mathbf{G} = (\\mathbf{I}_m \\mid \\mathbf{A})$ is a generator matrix in standard form, what is the corresponding parity check matrix?',
    options: [
      '$\\mathbf{H} = (\\mathbf{A}^t \\mid \\mathbf{I}_{n-m})$',
      '$\\mathbf{H} = (\\mathbf{I}_{n-m} \\mid \\mathbf{A}^t)$',
      '$\\mathbf{H} = (\\mathbf{A} \\mid \\mathbf{I}_{n-m})$',
      '$\\mathbf{H} = (\\mathbf{I}_m \\mid \\mathbf{A}^t)$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a generator matrix $\\mathbf{G} = (\\mathbf{I}_m \\mid \\mathbf{A})$, the unique parity check matrix in standard form is $\\mathbf{H} = (\\mathbf{A}^t \\mid \\mathbf{I}_{n-m})$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The syndrome $\\mathbf{s}$ of a received word $\\mathbf{r}$ is defined as:',
    options: [
      '$\\mathbf{s} = \\mathbf{H}\\mathbf{r}^t$',
      '$\\mathbf{s} = \\mathbf{G}\\mathbf{r}^t$',
      '$\\mathbf{s} = \\mathbf{r}\\mathbf{H}$',
      '$\\mathbf{s} = \\mathbf{r}\\mathbf{G}$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The syndrome of a received word $\\mathbf{r}$ is computed as $\\mathbf{s} = \\mathbf{H}\\mathbf{r}^t$, where $\\mathbf{H}$ is the parity check matrix.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If the syndrome of a received word is zero, then:',
    options: [
      'The received word is assumed to be a valid code word',
      'An error has definitely occurred',
      'The error is in position 1',
      'The transmission failed'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A zero syndrome indicates that the received word satisfies all parity check equations, so it is assumed to be the transmitted code word (no detectable error).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For syndrome decoding to correct all single errors, the columns of $\\mathbf{H}$ must be:',
    options: [
      'Non-zero and distinct',
      'Linearly dependent',
      'All equal',
      'Orthogonal to each other'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A parity check matrix $\\mathbf{H}$ can decode all single errors correctly if and only if all columns of $\\mathbf{H}$ are non-zero and distinct. This allows unique identification of the error position from the syndrome.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the dual code $\\mathcal{C}^\\perp$ of an $(m, n)$-code $\\mathcal{C}$?',
    options: [
      'The $(n-m, n)$-code with generator matrix $\\mathbf{H}$',
      'The same code $\\mathcal{C}$',
      'The $(m, n)$-code with generator matrix $\\mathbf{H}$',
      'The complement of $\\mathcal{C}$ in $\\mathbb{B}^n$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The dual code $\\mathcal{C}^\\perp$ is the $(n-m, n)$-code with generator matrix $\\mathbf{H}$ (the parity check matrix of $\\mathcal{C}$). Equivalently, it has parity check matrix $\\mathbf{G}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Two words have the same syndrome if and only if:',
    options: [
      'They are in the same coset of the code',
      'They are both code words',
      'They differ in exactly one position',
      'They have the same weight'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Words $\\mathbf{x}$ and $\\mathbf{y}$ are in the same coset of $\\mathcal{C}$ if and only if they have the same syndrome. This is because $\\mathbf{H}\\mathbf{x}^t = \\mathbf{H}\\mathbf{y}^t$ iff $\\mathbf{x} - \\mathbf{y} \\in \\mathcal{C}$.',
  },
];
