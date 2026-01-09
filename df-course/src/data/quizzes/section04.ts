import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'How many elements are in the dihedral group $D_8$ (symmetries of a square)?',
    correctAnswer: 8,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$D_{2n}$ has $2n$ elements. For a square ($n=4$), $D_8$ has 8 elements: 4 rotations and 4 reflections.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In $D_{2n}$, if $r$ is a rotation by $2\\pi/n$ and $s$ is a reflection, what is $rs$?',
    options: [
      'A rotation',
      'A reflection',
      'The identity',
      'Cannot be determined'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The product of a rotation and a reflection is always a reflection. In $D_{2n}$, reflections have the form $sr^k$ for some $k$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In $D_{2n}$, which relation holds between the generators $r$ (rotation) and $s$ (reflection)?',
    options: [
      '$rs = sr$',
      '$srs = r$',
      '$sr = rs^{-1}$',
      '$sr = r^{-1}s$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The key relation in $D_{2n}$ is $sr = r^{-1}s$ (equivalently $srs = r^{-1}$). This captures how reflection "reverses" the direction of rotation.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the order of the rotation $r$ in $D_{12}$ (symmetries of a regular hexagon)?',
    correctAnswer: 6,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: 'In $D_{2n}$, the rotation $r$ has order $n$. For $D_{12}$ (hexagon), $n = 6$, so $r$ has order 6.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How many reflections are there in $D_{10}$ (symmetries of a regular pentagon)?',
    options: ['$2$', '$4$', '$5$', '$10$'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$D_{2n}$ has exactly $n$ reflections. For $D_{10}$ with $n = 5$, there are 5 reflections.',
  },
];
