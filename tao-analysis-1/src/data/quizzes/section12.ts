import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the construction of the rationals from the integers, a rational number is formally defined as:',
    options: [
      'An equivalence class of ordered pairs $(a, b)$ where $a, b \\in \\mathbb{Z}$ and $b \\neq 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Rationals are constructed as equivalence classes of pairs $(a, b)$ under the relation $(a, b) \\sim (c, d)$ iff $ad = bc$. This ensures that $\\frac{1}{2}$ and $\\frac{2}{4}$ represent the same rational.',
  },
      'An ordered pair $(a, b)$ where $a, b \\in \\mathbb{Z}$ and $b \\neq 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rationals are constructed as equivalence classes of pairs $(a, b)$ under the relation $(a, b) \\sim (c, d)$ iff $ad = bc$. This ensures that $\\frac{1}{2}$ and $\\frac{2}{4}$ represent the same rational.',
  },
      'A decimal expansion that eventually terminates or repeats',
      'Any number that can be written as a fraction',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rationals are constructed as equivalence classes of pairs $(a, b)$ under the relation $(a, b) \\sim (c, d)$ iff $ad = bc$. This ensures that $\\frac{1}{2}$ and $\\frac{2}{4}$ represent the same rational.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two formal rational pairs $(a, b)$ and $(c, d)$ are equivalent (i.e., represent the same rational) if and only if:',
    options: [
      '$a = c$ and $b = d
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The equivalence relation is defined by $(a, b) \\sim (c, d) \\Leftrightarrow ad = bc$. This captures the intuition that $\\frac{a}{b} = \\frac{c}{d}$ means $ad = bc$.',
  },
      '$ad = bc
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The equivalence relation is defined by $(a, b) \\sim (c, d) \\Leftrightarrow ad = bc$. This captures the intuition that $\\frac{a}{b} = \\frac{c}{d}$ means $ad = bc$.',
  },
      '$a + d = b + c
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The equivalence relation is defined by $(a, b) \\sim (c, d) \\Leftrightarrow ad = bc$. This captures the intuition that $\\frac{a}{b} = \\frac{c}{d}$ means $ad = bc$.',
  },
      '$ab = cd
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The equivalence relation is defined by $(a, b) \\sim (c, d) \\Leftrightarrow ad = bc$. This captures the intuition that $\\frac{a}{b} = \\frac{c}{d}$ means $ad = bc$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The equivalence relation is defined by $(a, b) \\sim (c, d) \\Leftrightarrow ad = bc$. This captures the intuition that $\\frac{a}{b} = \\frac{c}{d}$ means $ad = bc$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Under the formal construction of $\\mathbb{Q}$, multiplication of rationals $[(a,b)] \\cdot [(c,d)]$ is defined as:',
    options: [
      '$[(a+c, b+d)]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Multiplication is defined by $[(a,b)] \\cdot [(c,d)] = [(ac, bd)]$, corresponding to $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$. One must verify this is well-defined on equivalence classes.',
  },
      '$[(ad, bc)]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Multiplication is defined by $[(a,b)] \\cdot [(c,d)] = [(ac, bd)]$, corresponding to $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$. One must verify this is well-defined on equivalence classes.',
  },
      '$[(ac + bd, ad + bc)]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Multiplication is defined by $[(a,b)] \\cdot [(c,d)] = [(ac, bd)]$, corresponding to $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$. One must verify this is well-defined on equivalence classes.',
  },
      '$[(ac, bd)]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Multiplication is defined by $[(a,b)] \\cdot [(c,d)] = [(ac, bd)]$, corresponding to $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$. One must verify this is well-defined on equivalence classes.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Multiplication is defined by $[(a,b)] \\cdot [(c,d)] = [(ac, bd)]$, corresponding to $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$. One must verify this is well-defined on equivalence classes.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why must we verify that operations on $\\mathbb{Q}$ are "well-defined" when constructing rationals as equivalence classes?',
    options: [
      'To ensure the operations produce rational numbers',
      'To ensure the operations are commutative',
      'To ensure division by zero is undefined',
      'To ensure the result is independent of which representative pairs are chosen',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Since each rational is an equivalence class with infinitely many representatives, we must show that the operations give the same result regardless of which representative pair we use to compute.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $(3, 4)$ and $(6, n)$ represent the same rational number in the formal construction, what is $n$?',
    correctAnswer: 8,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Using the equivalence relation $ad = bc$: $3 \\cdot n = 4 \\cdot 6 = 24$, so $n = 8$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The integers $\\mathbb{Z}$ are embedded into the rationals $\\mathbb{Q}$ via the map:',
    options: [
      '$n \\mapsto [(n, 1)]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The embedding $n \\mapsto [(n, 1)]$ maps each integer $n$ to the equivalence class containing $(n, 1)$, representing $\\frac{n}{1} = n$.',
  },
      '$n \\mapsto [(n, n)]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The embedding $n \\mapsto [(n, 1)]$ maps each integer $n$ to the equivalence class containing $(n, 1)$, representing $\\frac{n}{1} = n$.',
  },
      '$n \\mapsto [(1, n)]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The embedding $n \\mapsto [(n, 1)]$ maps each integer $n$ to the equivalence class containing $(n, 1)$, representing $\\frac{n}{1} = n$.',
  },
      '$n \\mapsto [(n, 0)]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The embedding $n \\mapsto [(n, 1)]$ maps each integer $n$ to the equivalence class containing $(n, 1)$, representing $\\frac{n}{1} = n$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The embedding $n \\mapsto [(n, 1)]$ maps each integer $n$ to the equivalence class containing $(n, 1)$, representing $\\frac{n}{1} = n$.',
  },
];
