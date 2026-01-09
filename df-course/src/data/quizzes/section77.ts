import type { QuizQuestion } from './types';

export const section77Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A ring $R$ is Noetherian if and only if:',
    options: [
      'Every ideal is finitely generated',
      'Every ideal is principal',
      'Every ideal is maximal',
      '$R$ is a field'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A ring is Noetherian if it satisfies the ascending chain condition (ACC) on ideals, which is equivalent to every ideal being finitely generated.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Hilbert Basis Theorem states that:',
    options: [
      'Every ideal in $\\mathbb{Z}$ is principal',
      'If $R$ is Noetherian, then $R[x]$ is Noetherian',
      'Every Noetherian ring is a PID',
      'Every finitely generated ideal is principal'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Hilbert Basis Theorem says that if $R$ is Noetherian, then the polynomial ring $R[x]$ is also Noetherian. By induction, $R[x_1, \\ldots, x_n]$ is Noetherian if $R$ is.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following is NOT Noetherian?',
    options: [
      '$\\mathbb{Z}$',
      '$\\mathbb{Q}[x, y]$',
      'The ring of all algebraic integers',
      '$\\mathbb{C}[x]$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The ring of all algebraic integers is not Noetherian. For example, $(\\sqrt{2}) \\subset (\\sqrt[4]{2}) \\subset (\\sqrt[8]{2}) \\subset \\cdots$ is a strictly ascending chain.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In a Noetherian ring, every ideal:',
    options: [
      'Is maximal',
      'Contains a maximal ideal',
      'Is contained in only finitely many maximal ideals',
      'Has a primary decomposition'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'In a Noetherian ring, every ideal has a primary decomposition (the Lasker-Noether theorem). This generalizes the prime factorization of ideals in Dedekind domains.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $R$ is Noetherian and $I$ is an ideal, then $R/I$ is:',
    options: [
      'Not necessarily Noetherian',
      'Noetherian',
      'Noetherian only if $I$ is prime',
      'Noetherian only if $I$ is maximal'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Quotients of Noetherian rings are Noetherian. If $R$ is Noetherian and $I \\triangleleft R$, then ideals in $R/I$ correspond to ideals in $R$ containing $I$, so ACC holds.',
  },
];
