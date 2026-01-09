import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Orbit-Stabilizer Theorem states that for a group $G$ acting on a set $X$ and $x \\in X$:',
    options: [
      '$|G| = |\\text{Orb}(x)| + |\\text{Stab}(x)|$',
      '$|G| = |\\text{Orb}(x)| \\cdot |\\text{Stab}(x)|$',
      '$|\\text{Orb}(x)| = |\\text{Stab}(x)|$',
      '$|G| = |\\text{Orb}(x)|^{|\\text{Stab}(x)|}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Orbit-Stabilizer: $|G| = |\\text{Orb}_G(x)| \\cdot |\\text{Stab}_G(x)|$, or equivalently $|\\text{Orb}(x)| = [G : \\text{Stab}(x)]$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'If $G$ acts on a set $X$ with $|G| = 24$ and some orbit has size 6, what is the order of the stabilizer of a point in that orbit?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: 'By Orbit-Stabilizer: $|\\text{Stab}(x)| = |G|/|\\text{Orb}(x)| = 24/6 = 4$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The action of $G$ on itself by left multiplication is called:',
    options: [
      'The conjugation action',
      'The regular action (Cayley action)',
      'The trivial action',
      'The adjoint action'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The regular (or Cayley) action is $g \\cdot h = gh$. It is transitive and faithful.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The action of $G$ on itself by conjugation is defined by:',
    options: [
      '$g \\cdot h = gh$',
      '$g \\cdot h = hg$',
      '$g \\cdot h = ghg^{-1}$',
      '$g \\cdot h = g^{-1}hg$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The conjugation action is $g \\cdot h = ghg^{-1}$. The orbits are conjugacy classes.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "Burnside's Counting Theorem (Cauchy-Frobenius Lemma) states that the number of orbits equals:",
    options: [
      '$|G|/|X|$',
      'The average number of fixed points: $\\frac{1}{|G|} \\sum_{g \\in G} |X^g|$',
      '$|X|/|G|$',
      'The number of stabilizers'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Burnside: $|X/G| = \\frac{1}{|G|} \\sum_{g \\in G} |X^g|$, where $X^g = \\{x : g \\cdot x = x\\}$.',
  },
];
