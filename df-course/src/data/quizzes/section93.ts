import type { QuizQuestion } from './types';

export const section93Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Burnside\'s $p^a q^b$ theorem states that a group of order $p^a q^b$ (for primes $p, q$) is:',
    options: [
      'Simple',
      'Solvable',
      'Abelian',
      'Cyclic',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Burnside proved using character theory that every group of order $p^a q^b$ is solvable. This was the first major application of character theory to pure group theory.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The proof of Burnside\'s theorem uses the fact that $\\chi(g)/\\chi(e)$ is:',
    options: [
      'An algebraic integer',
      'Always an integer',
      'Always rational',
      'Always real',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The key lemma is that if $|C|$ (conjugacy class size) is coprime to $\\chi(e)$, then $\\chi(g) = 0$ or $|\\chi(g)| = \\chi(e)$. This uses that $\\chi(g)/\\chi(e)$ is an algebraic integer.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Philip Hall\'s theorem characterizes solvable groups $G$ by:',
    options: [
      'The existence of Sylow subgroups',
      'Having a normal Sylow subgroup',
      'Being a $p$-group',
      'The existence of Hall $\\pi$-subgroups for all sets of primes $\\pi
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Hall\'s theorem: A finite group is solvable if and only if it has a Hall $\\pi$-subgroup for every set of primes $\\pi$. Hall subgroups generalize Sylow subgroups.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Hall\'s theorem: A finite group is solvable if and only if it has a Hall $\\pi$-subgroup for every set of primes $\\pi$. Hall subgroups generalize Sylow subgroups.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A Hall subgroup of $G$ is a subgroup $H$ such that:',
    options: [
      '$|H| = p^a$ for some prime $p
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A Hall subgroup $H \\leq G$ satisfies $\\gcd(|H|, |G|/|H|) = 1$. Its order and index are coprime. Sylow $p$-subgroups are special cases.',
  },
      '$H$ is normal in $G
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Hall subgroup $H \\leq G$ satisfies $\\gcd(|H|, |G|/|H|) = 1$. Its order and index are coprime. Sylow $p$-subgroups are special cases.',
  },
      '$\\gcd(|H|, [G:H]) = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Hall subgroup $H \\leq G$ satisfies $\\gcd(|H|, |G|/|H|) = 1$. Its order and index are coprime. Sylow $p$-subgroups are special cases.',
  },
      '$H$ is the center of $G
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Hall subgroup $H \\leq G$ satisfies $\\gcd(|H|, |G|/|H|) = 1$. Its order and index are coprime. Sylow $p$-subgroups are special cases.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Hall subgroup $H \\leq G$ satisfies $\\gcd(|H|, |G|/|H|) = 1$. Its order and index are coprime. Sylow $p$-subgroups are special cases.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Burnside\'s lemma (the counting lemma) states that the number of orbits of $G$ acting on $X$ equals:',
    options: [
      '$\\frac{1}{|G|}\\sum_{g \\in G} |X^g|$ where $X^g$ is the fixed point set',
      '$|X|/|G|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Burnside\'s lemma: The number of orbits is $\\frac{1}{|G|}\\sum_{g \\in G} |\\{x \\in X : gx = x\\}|$, the average number of fixed points.',
  },
      '$|G|/|X|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Burnside\'s lemma: The number of orbits is $\\frac{1}{|G|}\\sum_{g \\in G} |\\{x \\in X : gx = x\\}|$, the average number of fixed points.',
  },
      'The number of conjugacy classes',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Burnside\'s lemma: The number of orbits is $\\frac{1}{|G|}\\sum_{g \\in G} |\\{x \\in X : gx = x\\}|$, the average number of fixed points.',
  },
];
