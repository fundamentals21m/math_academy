import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: X \\to \\mathbb{R}$ is continuous at $a \\in X$ if:',
    options: [
      '$\\lim_{x \\to a} f(x) = f(a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Continuity at $a$ requires three things: $f(a)$ exists, $\\lim_{x \\to a} f(x)$ exists, and they are equal.',
  },
      '$f$ is defined at $a
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Continuity at $a$ requires three things: $f(a)$ exists, $\\lim_{x \\to a} f(x)$ exists, and they are equal.',
  },
      '$\\lim_{x \\to a} f(x)$ exists',
      '$f$ is differentiable at $a
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Continuity at $a$ requires three things: $f(a)$ exists, $\\lim_{x \\to a} f(x)$ exists, and they are equal.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Continuity at $a$ requires three things: $f(a)$ exists, $\\lim_{x \\to a} f(x)$ exists, and they are equal.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the $\\epsilon$-$\\delta$ definition, $f$ is continuous at $a$ if for every $\\epsilon > 0$, there exists $\\delta > 0$ such that:',
    options: [
      '$0 < |x - a| < \\delta$ implies $|f(x) - f(a)| < \\epsilon
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For continuity, we use $|x - a| < \\delta$ (not $0 < |x - a|$) because we include the point $a$ itself and require $f(a)$ to match the limit.',
  },
      '$|x - a| < \\delta$ implies $|f(x) - f(a)| < \\epsilon
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For continuity, we use $|x - a| < \\delta$ (not $0 < |x - a|$) because we include the point $a$ itself and require $f(a)$ to match the limit.',
  },
      '$|x - a| < \\epsilon$ implies $|f(x) - f(a)| < \\delta
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For continuity, we use $|x - a| < \\delta$ (not $0 < |x - a|$) because we include the point $a$ itself and require $f(a)$ to match the limit.',
  },
      '$|f(x) - f(a)| < \\delta$ implies $|x - a| < \\epsilon
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For continuity, we use $|x - a| < \\delta$ (not $0 < |x - a|$) because we include the point $a$ itself and require $f(a)$ to match the limit.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For continuity, we use $|x - a| < \\delta$ (not $0 < |x - a|$) because we include the point $a$ itself and require $f(a)$ to match the limit.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ and $g$ are continuous at $a$, which of the following is NOT necessarily continuous at $a$?',
    options: [
      '$f \\cdot g
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$f/g$ is continuous at $a$ only if $g(a) \\neq 0$. If $g(a) = 0$, then $f/g$ is not defined at $a$.',
  },
      '$f / g
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f/g$ is continuous at $a$ only if $g(a) \\neq 0$. If $g(a) = 0$, then $f/g$ is not defined at $a$.',
  },
      '$f + g
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f/g$ is continuous at $a$ only if $g(a) \\neq 0$. If $g(a) = 0$, then $f/g$ is not defined at $a$.',
  },
      '$c \\cdot f$ for constant $c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f/g$ is continuous at $a$ only if $g(a) \\neq 0$. If $g(a) = 0$, then $f/g$ is not defined at $a$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f/g$ is continuous at $a$ only if $g(a) \\neq 0$. If $g(a) = 0$, then $f/g$ is not defined at $a$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is continuous at $a$ and $g$ is continuous at $f(a)$, then the composition $g \\circ f$ is:',
    options: [
      'Not necessarily continuous at $a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The composition of continuous functions is continuous: if $f$ is continuous at $a$ and $g$ is continuous at $f(a)$, then $g \\circ f$ is continuous at $a$.',
  },
      'Continuous only if $f$ is injective',
      'Continuous at $a
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composition of continuous functions is continuous: if $f$ is continuous at $a$ and $g$ is continuous at $f(a)$, then $g \\circ f$ is continuous at $a$.',
  },
      'Continuous only if $g$ is surjective',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composition of continuous functions is continuous: if $f$ is continuous at $a$ and $g$ is continuous at $f(a)$, then $g \\circ f$ is continuous at $a$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The function $f(x) = \\begin{cases} 1 & x \\geq 0 \\\\ -1 & x < 0 \\end{cases}$ is:',
    options: [
      'Discontinuous at $x = 0$ with a jump discontinuity',
      'Continuous everywhere',
      'Continuous at $x = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The left limit is $-1$ and the right limit is $1$ at $x = 0$. Since they differ, there is a jump discontinuity at $0$.',
  },
      'Discontinuous at $x = 0$ with a removable discontinuity',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The left limit is $-1$ and the right limit is $1$ at $x = 0$. Since they differ, there is a jump discontinuity at $0$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A function $f: X \\to \\mathbb{R}$ is continuous on $X$ if and only if:',
    options: [
      '$f$ is bounded on $X
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The topological definition of continuity: $f$ is continuous iff for every open set $U \\subseteq \\mathbb{R}$, the preimage $f^{-1}(U)$ is open in $X$.',
  },
      'The preimage of every closed set is open',
      'The preimage of every open set is open',
      'The image of every open set is open',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The topological definition of continuity: $f$ is continuous iff for every open set $U \\subseteq \\mathbb{R}$, the preimage $f^{-1}(U)$ is open in $X$.',
  },
];
