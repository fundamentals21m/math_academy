import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's61-e01',
    type: 'multiple-choice',
    question: 'Galois theory connects the solvability of polynomial equations to:',
    options: [
      'The structure of their Galois groups',
      'The degree of the polynomial only',
      'The size of the coefficients',
      'The number of real roots',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Galois\'s key insight was that a polynomial is solvable by radicals if and only if its Galois group (the group of symmetries of its roots) is a "solvable group." This connects algebra to group theory.',
  },
  {
    id: 's61-e02',
    type: 'multiple-choice',
    question: 'Évariste Galois died at what age?',
    options: [
      '30',
      '20',
      '40',
      '50'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Galois was killed in a duel in 1832 at age 20. Despite his short life, he developed one of the most profound theories in mathematics, though it took decades for others to fully understand his work.',
  },
  // Medium questions
  {
    id: 's61-m01',
    type: 'multiple-choice',
    question: 'A group is "solvable" if it has a chain of subgroups with:',
    options: [
      'Infinite order',
      'Only one element in each',
      'Abelian quotients',
      'No normal subgroups'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A group G is solvable if there exists a chain {e} = G₀ ⊲ G₁ ⊲ ... ⊲ Gₙ = G where each quotient Gᵢ₊₁/Gᵢ is abelian (commutative). This property determines whether the corresponding polynomial can be solved by radicals.',
  },
  {
    id: 's61-m02',
    type: 'multiple-choice',
    question: 'The symmetric group $S_4$ is solvable, which explains why:',
    options: [
      'Quartic equations require transcendental functions',
      'Quartic equations have no solutions',
      'Quartic equations have exactly 4 solutions',
      'Quartic equations can be solved by radicals'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Since S₄ is solvable (it has a chain {e} ⊲ V₄ ⊲ A₄ ⊲ S₄ with abelian quotients), Galois theory tells us that the general quartic equation can be solved by radicals, which Ferrari showed in the 16th century.',
  },
  // Hard questions
  {
    id: 's61-h01',
    type: 'multiple-choice',
    question: 'The alternating group $A_5$ prevents quintic solvability because it is:',
    options: [
      'Simple (has no nontrivial normal subgroups) and non-abelian',
      'Too large to analyze',
      'Infinite',
      'Abelian',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'A₅ is simple (its only normal subgroups are {e} and itself) and non-abelian. This means it cannot have a chain with abelian quotients, so it\'s not solvable. Since S₅ contains A₅ as a subgroup, S₅ is also not solvable, explaining why the general quintic cannot be solved by radicals.',
  },
  {
    id: 's61-h02',
    type: 'multiple-choice',
    question: 'The Fundamental Theorem of Galois Theory establishes a correspondence between:',
    options: [
      'Roots of polynomials and prime numbers',
      'Subgroups of the Galois group and intermediate field extensions',
      'Even and odd permutations',
      'Real and complex numbers'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The Fundamental Theorem establishes a bijection between subgroups of the Galois group and intermediate fields between the base field and the splitting field. Normal subgroups correspond to normal (Galois) extensions. This "Galois correspondence" is the heart of the theory.',
  },
];
