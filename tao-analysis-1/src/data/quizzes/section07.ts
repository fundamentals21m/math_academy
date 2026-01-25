import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: A \\to B$ consists of:',
    options: [
      'Any subset of $A \\times B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A function from $A$ to $B$ assigns to EACH element of the domain $A$ EXACTLY ONE element of the codomain $B$.',
  },
      'A rule assigning to each element of $B$ at least one element of $A
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A function from $A$ to $B$ assigns to EACH element of the domain $A$ EXACTLY ONE element of the codomain $B$.',
  },
      'A rule assigning to each element of $A$ exactly one element of $B
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A function from $A$ to $B$ assigns to EACH element of the domain $A$ EXACTLY ONE element of the codomain $B$.',
  },
      'A bijection between $A$ and $B
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A function from $A$ to $B$ assigns to EACH element of the domain $A$ EXACTLY ONE element of the codomain $B$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A function from $A$ to $B$ assigns to EACH element of the domain $A$ EXACTLY ONE element of the codomain $B$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a function $f: A \\to B$, the set $A$ is called the:',
    options: [
      'Codomain',
      'Domain',
      'Range',
      'Image'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The domain is the set of inputs. The codomain $B$ is the set of potential outputs, while the range (or image) is the set of actual outputs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A function $f: A \\to B$ is called injective (one-to-one) if:',
    options: [
      '$f(x) = f(y)$ implies $x = y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Injectivity means distinct inputs give distinct outputs: $f(x) = f(y) \\implies x = y$, or equivalently, $x \\neq y \\implies f(x) \\neq f(y)$.',
  },
      'Every element of $B$ is hit by some element of $A
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Injectivity means distinct inputs give distinct outputs: $f(x) = f(y) \\implies x = y$, or equivalently, $x \\neq y \\implies f(x) \\neq f(y)$.',
  },
      '$f$ has an inverse function',
      'The domain equals the codomain',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Injectivity means distinct inputs give distinct outputs: $f(x) = f(y) \\implies x = y$, or equivalently, $x \\neq y \\implies f(x) \\neq f(y)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A function $f: A \\to B$ is called surjective (onto) if:',
    options: [
      'It is injective',
      'It has finite domain',
      'It is a bijection',
      'For every $b \\in B$, there exists $a \\in A$ with $f(a) = b$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Surjectivity means every element of the codomain is hit: the range equals the codomain.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f: A \\to B$ and $g: B \\to C$, the composition $g \\circ f: A \\to C$ is defined by:',
    options: [
      '$(g \\circ f)(x) = f(g(x))
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Composition applies functions right-to-left: $(g \\circ f)(x) = g(f(x))$. First apply $f$, then apply $g$ to the result.',
  },
      '$(g \\circ f)(x) = f(x) + g(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Composition applies functions right-to-left: $(g \\circ f)(x) = g(f(x))$. First apply $f$, then apply $g$ to the result.',
  },
      '$(g \\circ f)(x) = g(f(x))
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Composition applies functions right-to-left: $(g \\circ f)(x) = g(f(x))$. First apply $f$, then apply $g$ to the result.',
  },
      '$(g \\circ f)(x) = f(x) \\cdot g(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Composition applies functions right-to-left: $(g \\circ f)(x) = g(f(x))$. First apply $f$, then apply $g$ to the result.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Composition applies functions right-to-left: $(g \\circ f)(x) = g(f(x))$. First apply $f$, then apply $g$ to the result.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A function $f: A \\to B$ is a bijection if and only if:',
    options: [
      'It is both injective and surjective',
      'It is injective only',
      'It is surjective only',
      'It maps $A$ to a proper subset of $B
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A bijection is a function that is both one-to-one (injective) and onto (surjective). Bijections have inverse functions.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A bijection is a function that is both one-to-one (injective) and onto (surjective). Bijections have inverse functions.',
  },
];
