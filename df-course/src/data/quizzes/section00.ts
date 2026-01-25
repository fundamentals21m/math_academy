import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: A \\to B$ is called a bijection if it is:',
    options: [
      'Both injective and surjective',
      'Only surjective (onto)',
      'Only injective (one-to-one)',
      'Neither injective nor surjective'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A bijection is a function that is both injective (one-to-one) and surjective (onto). This means every element in $B$ is mapped to by exactly one element in $A$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a requirement for a relation $\\sim$ on a set $A$ to be an equivalence relation?',
    options: [
      'Reflexivity: $a \\sim a$ for all $a \\in A$',
      'Antisymmetry: if $a \\sim b$ and $b \\sim a$, then $a = b$',
      'Transitivity: if $a \\sim b$ and $b \\sim c$, then $a \\sim c$',
      'Symmetry: if $a \\sim b$, then $b \\sim a$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Antisymmetry is a property of partial orders, not equivalence relations. An equivalence relation requires reflexivity, symmetry, and transitivity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $|A| = 3$ and $|B| = 2$, how many functions are there from $A$ to $B$?',
    options: [
      '$6
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each of the 3 elements in $A$ can be mapped to any of the 2 elements in $B$. So the total number of functions is $2^3 = 8$.',
  },
      '$9
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each of the 3 elements in $A$ can be mapped to any of the 2 elements in $B$. So the total number of functions is $2^3 = 8$.',
  },
      '$5
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each of the 3 elements in $A$ can be mapped to any of the 2 elements in $B$. So the total number of functions is $2^3 = 8$.',
  },
      '$8
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each of the 3 elements in $A$ can be mapped to any of the 2 elements in $B$. So the total number of functions is $2^3 = 8$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each of the 3 elements in $A$ can be mapped to any of the 2 elements in $B$. So the total number of functions is $2^3 = 8$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $A = \\{1, 2, 3, 4\\}$ and $\\sim$ is the equivalence relation where $a \\sim b$ if $a \\equiv b \\pmod{2}$, how many equivalence classes are there?',
    correctAnswer: 2,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'The equivalence classes are $\\{1, 3\\}$ (odd numbers) and $\\{2, 4\\}$ (even numbers), so there are 2 equivalence classes.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The composition of two bijections $f: A \\to B$ and $g: B \\to C$ is:',
    options: [
      'Only surjective but not injective',
      'Only injective but not surjective',
      'Always a bijection from $A$ to $C$',
      'Not necessarily a bijection'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The composition of two bijections is always a bijection. If $f$ and $g$ are both injective and surjective, then $g \\circ f$ is also injective and surjective.',
  },
];
