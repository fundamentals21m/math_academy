import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the primary goal of real analysis as a mathematical discipline?',
    options: [
      'To compute numerical answers to calculus problems',
      'To develop faster algorithms for integration',
      'To provide rigorous foundations for calculus and study properties of real numbers',
      'To extend calculus to complex numbers',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Real analysis provides the rigorous logical foundations for calculus, establishing precise definitions and proofs for concepts like limits, continuity, and convergence.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following best describes the relationship between calculus and analysis?',
    options: [
      'Calculus and analysis are completely unrelated fields',
      'Calculus develops techniques; analysis provides rigorous justification for why they work',
      'Analysis is a simplified version of calculus for beginners',
      'Analysis only deals with discrete mathematics',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Calculus focuses on computational techniques (derivatives, integrals), while analysis provides the rigorous proofs and foundations that justify why these techniques are valid.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is rigor important in mathematical analysis?',
    options: [
      'It makes proofs longer and more impressive',
      'It is only important for publication purposes',
      'It slows down mathematical progress intentionally',
      'It prevents false conclusions that can arise from intuitive but flawed reasoning',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Rigorous proofs are essential because intuition can lead to incorrect conclusions. History shows many "obvious" mathematical statements that turned out to be false when examined carefully.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which mathematician is most associated with making calculus rigorous in the 19th century?',
    options: [
      'Isaac Newton',
      'Karl Weierstrass',
      'Gottfried Leibniz',
      'René Descartes',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Karl Weierstrass (along with Cauchy, Bolzano, and others) is credited with establishing the rigorous $\\varepsilon$-$\\delta$ foundations of calculus in the 19th century.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In analysis, what does it mean to "construct" a mathematical object?',
    options: [
      'To define it precisely from simpler, already-established objects',
      'To draw a picture of it',
      'To assume it exists without proof',
      'To write a computer program that computes it',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'In analysis, construction means building complex objects (like real numbers) from simpler, already-defined objects (like rationals or naturals) using precise logical definitions.',
  },
];
