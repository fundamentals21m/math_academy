import type { QuizQuestion } from './types';

export const section69Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The reflexive property of equality states:',
    options: [
      'If $x = y$, then $y = x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Reflexivity means every element is equal to itself. This is one of the fundamental axioms of equality.',
  },
      'If $x = y$ and $y = z$, then $x = z
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Reflexivity means every element is equal to itself. This is one of the fundamental axioms of equality.',
  },
      'For all $x$, $x = x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Reflexivity means every element is equal to itself. This is one of the fundamental axioms of equality.',
  },
      'If $x = y$, then $f(x) = f(y)$ for any function $f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Reflexivity means every element is equal to itself. This is one of the fundamental axioms of equality.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Reflexivity means every element is equal to itself. This is one of the fundamental axioms of equality.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The symmetric property of equality states:',
    options: [
      'If $x = y$, then $y = x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Symmetry means equality is a two-way relation: if $x$ equals $y$, then $y$ equals $x$.',
  },
      'If $x = y$ and $y = z$, then $x = z
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Symmetry means equality is a two-way relation: if $x$ equals $y$, then $y$ equals $x$.',
  },
      'For all $x$, $x = x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Symmetry means equality is a two-way relation: if $x$ equals $y$, then $y$ equals $x$.',
  },
      'If $x \\neq y$, then $y \\neq x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Symmetry means equality is a two-way relation: if $x$ equals $y$, then $y$ equals $x$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Symmetry means equality is a two-way relation: if $x$ equals $y$, then $y$ equals $x$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The transitive property of equality states:',
    options: [
      'If $x = y$, then $x + z = y + z
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Transitivity allows us to chain equalities: if $x = y$ and $y = z$, then $x = z$. This is essential for multi-step calculations.',
  },
      'If $x = y$ and $y = z$, then $x = z
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Transitivity allows us to chain equalities: if $x = y$ and $y = z$, then $x = z$. This is essential for multi-step calculations.',
  },
      'If $x = y$, then $y = x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Transitivity allows us to chain equalities: if $x = y$ and $y = z$, then $x = z$. This is essential for multi-step calculations.',
  },
      'For all $x$, $x = x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Transitivity allows us to chain equalities: if $x = y$ and $y = z$, then $x = z$. This is essential for multi-step calculations.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Transitivity allows us to chain equalities: if $x = y$ and $y = z$, then $x = z$. This is essential for multi-step calculations.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The substitution property of equality states:',
    options: [
      'If $x = y$, then $x < y$ or $x > y
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Substitution (also called Leibniz\'s law) says that equal objects are indistinguishable: if $x = y$, then for any property $P$, we have $P(x) \\Leftrightarrow P(y)$.',
  },
      'If $x = y$ and $y = z$, then $x = z
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Substitution (also called Leibniz\'s law) says that equal objects are indistinguishable: if $x = y$, then for any property $P$, we have $P(x) \\Leftrightarrow P(y)$.',
  },
      'For all $x$, $x = x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Substitution (also called Leibniz\'s law) says that equal objects are indistinguishable: if $x = y$, then for any property $P$, we have $P(x) \\Leftrightarrow P(y)$.',
  },
      'If $x = y$, then $x$ can be replaced by $y$ in any expression without changing its truth value',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Substitution (also called Leibniz\'s law) says that equal objects are indistinguishable: if $x = y$, then for any property $P$, we have $P(x) \\Leftrightarrow P(y)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is a consequence of the properties of equality?',
    options: [
      'If $a < b$ and $b < c$, then $a < c
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Using substitution: from $a = b$, we get $a + c = b + c$. Then from $c = d$, we substitute to get $a + c = b + d$. This is sometimes called the "congruence" property for addition.',
  },
      'If $a \\neq b$, then $a < b$ or $a > b
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Using substitution: from $a = b$, we get $a + c = b + c$. Then from $c = d$, we substitute to get $a + c = b + d$. This is sometimes called the "congruence" property for addition.',
  },
      '$a = b$ or $a \\neq b$ for all $a, b
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Using substitution: from $a = b$, we get $a + c = b + c$. Then from $c = d$, we substitute to get $a + c = b + d$. This is sometimes called the "congruence" property for addition.',
  },
      'If $a = b$ and $c = d$, then $a + c = b + d
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Using substitution: from $a = b$, we get $a + c = b + c$. Then from $c = d$, we substitute to get $a + c = b + d$. This is sometimes called the "congruence" property for addition.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Using substitution: from $a = b$, we get $a + c = b + c$. Then from $c = d$, we substitute to get $a + c = b + d$. This is sometimes called the "congruence" property for addition.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In the Peano axioms for natural numbers, the axiom "$n = m$ if and only if $S(n) = S(m)$" (where $S$ is the successor function) implies that $S$ is:',
    options: [
      'Bijective',
      'Surjective (onto)',
      'Constant',
      'Injective (one-to-one)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'This axiom says $S(n) = S(m) \\Rightarrow n = m$, which is exactly the definition of injectivity. $S$ is not surjective since $0$ is not in the range of $S$ (another Peano axiom).',
  },
];
