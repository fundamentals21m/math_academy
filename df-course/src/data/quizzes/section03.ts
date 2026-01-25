import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of the group axioms?',
    options: [
      'Closure: $a \\cdot b \\in G$ for all $a, b \\in G$',
      'Associativity: $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$',
      'Existence of identity: there exists $e \\in G$ such that $e \\cdot a = a \\cdot e = a$',
      'Commutativity: $a \\cdot b = b \\cdot a$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Commutativity is not a group axiom. Groups that satisfy commutativity are called abelian groups. The group axioms are closure, associativity, identity, and inverses.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a group $G$, the identity element $e$ is:',
    options: [
      'Not necessarily unique',
      'Unique',
      'Only unique if $G$ is abelian',
      'Only unique if $G$ is finite',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The identity element is unique. If $e$ and $e\'$ are both identities, then $e = e \\cdot e\' = e\'$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following sets with the given operation forms a group?',
    options: [
      '$(\\mathbb{Q}^*, \\cdot)$ nonzero rationals under multiplication',
      '$(\\mathbb{Z}, -)$ subtraction',
      '$(\\mathbb{N}, +)$ natural numbers under addition',
      '$(\\mathbb{Z}, \\cdot)$ integers under multiplication',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$(\\mathbb{Q}^*, \\cdot)$ is a group: closed, associative, identity is 1, and every nonzero rational $a/b$ has inverse $b/a$. The others fail various axioms.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $a$ and $b$ are elements of a group $G$, what is $(ab)^{-1}$?',
    options: [
      '$a^{-1}b^{-1}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(ab)^{-1} = b^{-1}a^{-1}$. We can verify: $(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = aea^{-1} = aa^{-1} = e$.',
  },
      '$ab^{-1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(ab)^{-1} = b^{-1}a^{-1}$. We can verify: $(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = aea^{-1} = aa^{-1} = e$.',
  },
      '$b^{-1}a^{-1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(ab)^{-1} = b^{-1}a^{-1}$. We can verify: $(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = aea^{-1} = aa^{-1} = e$.',
  },
      '$a^{-1}b
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(ab)^{-1} = b^{-1}a^{-1}$. We can verify: $(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = aea^{-1} = aa^{-1} = e$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(ab)^{-1} = b^{-1}a^{-1}$. We can verify: $(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = aea^{-1} = aa^{-1} = e$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In a group, the equation $ax = b$ has:',
    options: [
      'No solution in general',
      'Infinitely many solutions',
      'Exactly one solution: $x = ba^{-1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Multiplying both sides on the left by $a^{-1}$: $a^{-1}(ax) = a^{-1}b$, so $x = a^{-1}b$. This is the unique solution.',
  },
      'Exactly one solution: $x = a^{-1}b
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Multiplying both sides on the left by $a^{-1}$: $a^{-1}(ax) = a^{-1}b$, so $x = a^{-1}b$. This is the unique solution.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Multiplying both sides on the left by $a^{-1}$: $a^{-1}(ax) = a^{-1}b$, so $x = a^{-1}b$. This is the unique solution.',
  },
];
