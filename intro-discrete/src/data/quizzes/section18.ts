import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The left coset $gH$ is defined as:',
    options: [
      '$\\{hg : h \\in H\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A left coset is $gH = \\{gh : h \\in H\\}$, multiplying $g$ on the left of each element of $H$.',
  },
      '$\\{g^h : h \\in H\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A left coset is $gH = \\{gh : h \\in H\\}$, multiplying $g$ on the left of each element of $H$.',
  },
      '$\\{h \\in H : gh = e\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A left coset is $gH = \\{gh : h \\in H\\}$, multiplying $g$ on the left of each element of $H$.',
  },
      '$\\{gh : h \\in H\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A left coset is $gH = \\{gh : h \\in H\\}$, multiplying $g$ on the left of each element of $H$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A left coset is $gH = \\{gh : h \\in H\\}$, multiplying $g$ on the left of each element of $H$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $H \\leq G$, then $|gH| = $',
    options: [
      '$|G|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Every coset has the same size as $H$: $|gH| = |H|$.',
  },
      '$|H|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every coset has the same size as $H$: $|gH| = |H|$.',
  },
      '$|G|/|H|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every coset has the same size as $H$: $|gH| = |H|$.',
  },
      '$|g|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every coset has the same size as $H$: $|gH| = |H|$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Every coset has the same size as $H$: $|gH| = |H|$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Lagrange\'s theorem states that $|H|$:',
    options: [
      'Equals $|G|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Lagrange\'s theorem: If $H \\leq G$ and $G$ is finite, then $|H|$ divides $|G|$.',
  },
      'Is greater than $|G|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Lagrange\'s theorem: If $H \\leq G$ and $G$ is finite, then $|H|$ divides $|G|$.',
  },
      'Divides $|G|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Lagrange\'s theorem: If $H \\leq G$ and $G$ is finite, then $|H|$ divides $|G|$.',
  },
      'Is coprime to $|G|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Lagrange\'s theorem: If $H \\leq G$ and $G$ is finite, then $|H|$ divides $|G|$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Lagrange\'s theorem: If $H \\leq G$ and $G$ is finite, then $|H|$ divides $|G|$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $|G| = 12$, which cannot be the order of a subgroup?',
    options: [
      '5',
      '3',
      '4',
      '6',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By Lagrange, subgroup orders must divide 12. Since 5 does not divide 12, there is no subgroup of order 5.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $|G| = p$ (prime), then $G$ is:',
    options: [
      'Non-abelian',
      'Not cyclic',
      'Cyclic',
      'Trivial',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A group of prime order is cyclic (any non-identity element generates the whole group).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Lagrange\'s theorem implies which classical result?',
    options: [
      'Fundamental theorem of arithmetic',
      'Fermat\\\\\'s Little Theorem',
      'Pythagorean theorem',
      'Quadratic formula',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Applying Lagrange to $(\\mathbb{Z}/p\\mathbb{Z})^*$ (order $p-1$) gives $a^{p-1} \\equiv 1 \\mod p$, which is Fermat\'s Little Theorem.',
  },
];
