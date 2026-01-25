import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A group action of $G$ on a set $X$ is a function $G \\times X \\to X$ satisfying $e \\cdot x = x$ and:',
    options: [
      '$(gh) \\cdot x = g \\cdot (h \\cdot x)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A (left) group action satisfies $(gh) \\cdot x = g \\cdot (h \\cdot x)$ and $e \\cdot x = x$.',
  },
      '$g \\cdot (h \\cdot x) = h \\cdot (g \\cdot x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A (left) group action satisfies $(gh) \\cdot x = g \\cdot (h \\cdot x)$ and $e \\cdot x = x$.',
  },
      '$(gh) \\cdot x = h \\cdot (g \\cdot x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A (left) group action satisfies $(gh) \\cdot x = g \\cdot (h \\cdot x)$ and $e \\cdot x = x$.',
  },
      '$g \\cdot x = x \\cdot g
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A (left) group action satisfies $(gh) \\cdot x = g \\cdot (h \\cdot x)$ and $e \\cdot x = x$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A (left) group action satisfies $(gh) \\cdot x = g \\cdot (h \\cdot x)$ and $e \\cdot x = x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The orbit of $x \\in X$ under a group action of $G$ is:',
    options: [
      '$\\{g \\in G : g \\cdot x = x\\}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The orbit of $x$ is $G \\cdot x = \\{g \\cdot x : g \\in G\\}$, the set of all elements that $x$ can be moved to.',
  },
      '$\\{y \\in X : y \\cdot x = x\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The orbit of $x$ is $G \\cdot x = \\{g \\cdot x : g \\in G\\}$, the set of all elements that $x$ can be moved to.',
  },
      '$\\{g \\cdot x : g \\in G\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The orbit of $x$ is $G \\cdot x = \\{g \\cdot x : g \\in G\\}$, the set of all elements that $x$ can be moved to.',
  },
      '$\\{x \\in X : g \\cdot x = x \\text{ for all } g\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The orbit of $x$ is $G \\cdot x = \\{g \\cdot x : g \\in G\\}$, the set of all elements that $x$ can be moved to.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The orbit of $x$ is $G \\cdot x = \\{g \\cdot x : g \\in G\\}$, the set of all elements that $x$ can be moved to.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The stabilizer of $x \\in X$ under a group action of $G$ is:',
    options: [
      '$\\{g \\cdot x : g \\in G\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The stabilizer is $G_x = \\text{Stab}_G(x) = \\{g \\in G : g \\cdot x = x\\}$, the set of group elements that fix $x$.',
  },
      '$\\{y \\in X : g \\cdot y = y\\}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The stabilizer is $G_x = \\text{Stab}_G(x) = \\{g \\in G : g \\cdot x = x\\}$, the set of group elements that fix $x$.',
  },
      '$\\{x \\in X : g \\cdot x = e\\}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The stabilizer is $G_x = \\text{Stab}_G(x) = \\{g \\in G : g \\cdot x = x\\}$, the set of group elements that fix $x$.',
  },
      '$\\{g \\in G : g \\cdot x = x\\}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The stabilizer is $G_x = \\text{Stab}_G(x) = \\{g \\in G : g \\cdot x = x\\}$, the set of group elements that fix $x$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The stabilizer is $G_x = \\text{Stab}_G(x) = \\{g \\in G : g \\cdot x = x\\}$, the set of group elements that fix $x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A group action is called faithful (effective) if:',
    options: [
      'Every orbit has more than one element',
      'The only element acting trivially on all of $X$ is $e$',
      'Every stabilizer is trivial',
      'The action is transitive'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An action is faithful if whenever $g \\cdot x = x$ for all $x \\in X$, we have $g = e$. Equivalently, the homomorphism $G \\to \\text{Sym}(X)$ is injective.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'An action of $G$ on $X$ is transitive if:',
    options: [
      'There is only one orbit',
      'The action is faithful',
      'All stabilizers are equal',
      '$|G| = |X|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An action is transitive if there is exactly one orbit, meaning for any $x, y \\in X$, there exists $g \\in G$ with $g \\cdot x = y$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An action is transitive if there is exactly one orbit, meaning for any $x, y \\in X$, there exists $g \\in G$ with $g \\cdot x = y$.',
  },
];
