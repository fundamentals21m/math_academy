import type { QuizQuestion } from './types';

export const section120Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition V.1 establish about equimultiples?',
    options: [
      'Equimultiples can be divided',
      'If A₁ = mB₁ and A₂ = mB₂, then (A₁+A₂) = m(B₁+B₂)',
      'Equimultiples are always equal',
      'Equimultiples have different ratios'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.1 shows that equimultiples distribute over addition: the sum of equimultiples is the same multiple of the sum.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In modern algebra, which property does V.1 correspond to?',
    options: [
      'Commutativity',
      'Associativity',
      'Distributivity: m(a+b) = ma + mb',
      'Identity property'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'V.1 is the geometric version of the distributive property: m·b₁ + m·b₂ = m(b₁ + b₂).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is V.1 stated for "any number of magnitudes" rather than just two?',
    options: [
      'To make it more complicated',
      'Because the proof only works for many magnitudes',
      'To establish the general principle that applies to sums of any length',
      'Because two magnitudes cannot be equimultiples'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'V.1 is stated generally so it can be applied to sums of any number of terms, making it more useful in later propositions.',
  },
];
