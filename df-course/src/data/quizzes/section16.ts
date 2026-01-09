import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "Lagrange's Theorem states that for a finite group $G$ and subgroup $H$:",
    options: [
      '$|H|$ divides $|G|$',
      '$|G|$ divides $|H|$',
      '$|H| = |G|$',
      '$|H| + [G:H] = |G|$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: "Lagrange's Theorem: If $H$ is a subgroup of finite group $G$, then $|H|$ divides $|G|$, and $|G| = |H| \\cdot [G:H]$.",
  },
  {
    id: 2,
    type: 'numeric',
    question: 'If $|G| = 24$ and $H$ is a subgroup of order 6, what is the index $[G:H]$?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: '$[G:H] = |G|/|H| = 24/6 = 4$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $|G| = 15$ and $g \\in G$, what are the possible orders of $g$?',
    options: [
      'Any positive integer up to 15',
      '$1, 3, 5,$ or $15$',
      '$1, 2, 3, 5,$ or $15$',
      '$1$ or $15$ only'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By Lagrange, $|g|$ divides $|G| = 15$. The divisors of 15 are 1, 3, 5, 15.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $G$ is a group of prime order $p$, then:',
    options: [
      '$G$ has many proper subgroups',
      '$G$ is cyclic and has no proper subgroups other than $\\{e\\}$',
      '$G$ is necessarily non-abelian',
      '$G$ has exactly $p$ subgroups'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By Lagrange, subgroups have order dividing $p$, so only 1 or $p$. Any $g \\neq e$ generates $G$, so $G$ is cyclic.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "A corollary of Lagrange's Theorem is that for any $g$ in a finite group $G$:",
    options: [
      '$g^{|G|} = g$',
      '$g^{|G|} = e$',
      '$g^{|G|-1} = e$',
      '$g^{|G|+1} = e$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $|g|$ divides $|G|$, we have $|G| = |g| \\cdot k$ for some $k$. Thus $g^{|G|} = (g^{|g|})^k = e^k = e$.',
  },
];
