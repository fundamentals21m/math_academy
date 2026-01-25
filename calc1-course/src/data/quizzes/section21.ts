import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f$ and $g$ are continuous, then $f \\circ g$ (the composition) is:',
    options: [
      'Always discontinuous',
      'Continuous wherever it is defined',
      'Only continuous at integers',
      'Never defined',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composition of continuous functions is continuous.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The composition $(f \\circ g)(x)$ means:',
    options: [
      '$f(x) \\cdot g(x)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$(f \\circ g)(x) = f(g(x))$: apply $g$ first, then $f$.',
  },
      '$f(x) + g(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(f \\circ g)(x) = f(g(x))$: apply $g$ first, then $f$.',
  },
      '$g(f(x))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(f \\circ g)(x) = f(g(x))$: apply $g$ first, then $f$.',
  },
      '$f(g(x))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(f \\circ g)(x) = f(g(x))$: apply $g$ first, then $f$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(f \\circ g)(x) = f(g(x))$: apply $g$ first, then $f$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If $f(x) = x^2$ and $g(x) = x + 1$, what is $(f \\circ g)(2)$?',
    correctAnswer: 9,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$(f \\circ g)(2) = f(g(2)) = f(3) = 9$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $\\lim_{x \\to a} f(g(x))$, if $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, the limit is:',
    options: [
      '$f(a)$',
      '$g(a)$',
      '$f(g(a))$',
      'Does not exist'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By continuity of composition: $\\lim f(g(x)) = f(g(a))$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $h(x) = \\sin(x^2)$ and we want $h(\\sqrt{\\pi})$, what is $h(\\sqrt{\\pi})$?',
    correctAnswer: 0,
    numericRange: { min: -1, max: 1, precision: 0 },
    difficulty: 'medium',
    explanation: '$h(\\sqrt{\\pi}) = \\sin((\\sqrt{\\pi})^2) = \\sin(\\pi) = 0$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The domain of $f \\circ g$ consists of all $x$ such that:',
    options: [
      '$x$ is in the domain of $g$ and $g(x)$ is in the domain of $f
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'We need $g(x)$ to be defined, and then $f$ must be defined at that value.',
  },
      '$x$ is in the domain of $f
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We need $g(x)$ to be defined, and then $f$ must be defined at that value.',
  },
      '$g(x) = f(x)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We need $g(x)$ to be defined, and then $f$ must be defined at that value.',
  },
      '$x$ is any real number',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We need $g(x)$ to be defined, and then $f$ must be defined at that value.',
  },
];
