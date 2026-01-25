import type { QuizQuestion } from './types';

export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Darboux\'s Theorem states that if $f$ is differentiable on $[a, b]$, then $f\'$:',
    options: [
      'Is bounded on $[a, b]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Darboux\'s Theorem: If $f$ is differentiable on $[a,b]$, then $f\'$ takes every value between $f\'(a)$ and $f\'(b)$, even though $f\'$ need not be continuous. This is a remarkable property that derivatives share with continuous functions.',
  },
      'Has the intermediate value property on $[a, b]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Darboux\'s Theorem: If $f$ is differentiable on $[a,b]$, then $f\'$ takes every value between $f\'(a)$ and $f\'(b)$, even though $f\'$ need not be continuous. This is a remarkable property that derivatives share with continuous functions.',
  },
      'Is continuous on $[a, b]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Darboux\'s Theorem: If $f$ is differentiable on $[a,b]$, then $f\'$ takes every value between $f\'(a)$ and $f\'(b)$, even though $f\'$ need not be continuous. This is a remarkable property that derivatives share with continuous functions.',
  },
      'Is Riemann integrable on $[a, b]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Darboux\'s Theorem: If $f$ is differentiable on $[a,b]$, then $f\'$ takes every value between $f\'(a)$ and $f\'(b)$, even though $f\'$ need not be continuous. This is a remarkable property that derivatives share with continuous functions.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Darboux\'s Theorem: If $f$ is differentiable on $[a,b]$, then $f\'$ takes every value between $f\'(a)$ and $f\'(b)$, even though $f\'$ need not be continuous. This is a remarkable property that derivatives share with continuous functions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which function can be a derivative on an interval?',
    options: [
      '$g(x) = \\begin{cases} 1 & x \\geq 0 \\\\ -1 & x < 0 \\end{cases}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Darboux\'s Theorem, derivatives have the IVP. The sign function (A) jumps from $-1$ to $1$ without passing through $0$, so it cannot be a derivative. The Dirichlet-like function (B) also violates the IVP. Option (D), $g(x) = x$, is the derivative of $x^2/2$.',
  },
      '$g(x) = \\begin{cases} \\sin(1/x) & x \\neq 0 \\\\ 0 & x = 0 \\end{cases}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By Darboux\'s Theorem, derivatives have the IVP. The sign function (A) jumps from $-1$ to $1$ without passing through $0$, so it cannot be a derivative. The Dirichlet-like function (B) also violates the IVP. Option (D), $g(x) = x$, is the derivative of $x^2/2$.',
  },
      '$g(x) = \\begin{cases} 1 & x \\in \\mathbb{Q} \\\\ 0 & x \\notin \\mathbb{Q} \\end{cases}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By Darboux\'s Theorem, derivatives have the IVP. The sign function (A) jumps from $-1$ to $1$ without passing through $0$, so it cannot be a derivative. The Dirichlet-like function (B) also violates the IVP. Option (D), $g(x) = x$, is the derivative of $x^2/2$.',
  },
      '$g(x) = x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By Darboux\'s Theorem, derivatives have the IVP. The sign function (A) jumps from $-1$ to $1$ without passing through $0$, so it cannot be a derivative. The Dirichlet-like function (B) also violates the IVP. Option (D), $g(x) = x$, is the derivative of $x^2/2$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By Darboux\'s Theorem, derivatives have the IVP. The sign function (A) jumps from $-1$ to $1$ without passing through $0$, so it cannot be a derivative. The Dirichlet-like function (B) also violates the IVP. Option (D), $g(x) = x$, is the derivative of $x^2/2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Let $f(x) = x^2\\sin(1/x)$ for $x \\neq 0$ and $f(0) = 0$. Then $f\'$:',
    options: [
      'Does not exist at $x = 0
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'We have $f\'(0) = 0$ (shown by the limit definition). For $x \\neq 0$: $f\'(x) = 2x\\sin(1/x) - \\cos(1/x)$. As $x \\to 0$, $\\cos(1/x)$ oscillates, so $\\lim_{x \\to 0} f\'(x)$ does not exist. Thus $f\'$ exists everywhere but is discontinuous at $0$.',
  },
      'Exists everywhere and is continuous everywhere',
      'Exists only at $x = 0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'We have $f\'(0) = 0$ (shown by the limit definition). For $x \\neq 0$: $f\'(x) = 2x\\sin(1/x) - \\cos(1/x)$. As $x \\to 0$, $\\cos(1/x)$ oscillates, so $\\lim_{x \\to 0} f\'(x)$ does not exist. Thus $f\'$ exists everywhere but is discontinuous at $0$.',
  },
      'Exists everywhere but is discontinuous at $x = 0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'We have $f\'(0) = 0$ (shown by the limit definition). For $x \\neq 0$: $f\'(x) = 2x\\sin(1/x) - \\cos(1/x)$. As $x \\to 0$, $\\cos(1/x)$ oscillates, so $\\lim_{x \\to 0} f\'(x)$ does not exist. Thus $f\'$ exists everywhere but is discontinuous at $0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'We have $f\'(0) = 0$ (shown by the limit definition). For $x \\neq 0$: $f\'(x) = 2x\\sin(1/x) - \\cos(1/x)$. As $x \\to 0$, $\\cos(1/x)$ oscillates, so $\\lim_{x \\to 0} f\'(x)$ does not exist. Thus $f\'$ exists everywhere but is discontinuous at $0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is differentiable on $(a, b)$ and $f\'$ has a discontinuity at $c \\in (a, b)$, then the discontinuity:',
    options: [
      'Must be a jump discontinuity',
      'Must be a removable discontinuity',
      'Must be an essential discontinuity where $f\\\\'$ is unbounded',
      'Cannot be a jump discontinuity (by Darboux\\\\'s Theorem)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'By Darboux\'s Theorem, $f\'$ has the IVP, so $f\'$ cannot have a jump discontinuity (which would skip intermediate values). Discontinuities of derivatives must be of the "oscillatory" type, like in $x^2\\sin(1/x)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f\'$ exists on $(a, b)$ and $f\'$ is continuous on $(a, b)$, then:',
    options: [
      '$f\\'\\'$ exists on $(a, b)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $f\'$ is continuous on $[c, d]$, then $|f\'|$ attains a maximum $M$ on $[c, d]$. By MVT, $|f(x) - f(y)| = |f\'(\\xi)||x - y| \\leq M|x - y|$, so $f$ is Lipschitz with constant $M$ on $[c, d]$.',
  },
      '$f$ is Lipschitz on every compact subinterval $[c, d] \\subset (a, b)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $f\'$ is continuous on $[c, d]$, then $|f\'|$ attains a maximum $M$ on $[c, d]$. By MVT, $|f(x) - f(y)| = |f\'(\\xi)||x - y| \\leq M|x - y|$, so $f$ is Lipschitz with constant $M$ on $[c, d]$.',
  },
      '$f\\'$ is bounded on $(a, b)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $f\'$ is continuous on $[c, d]$, then $|f\'|$ attains a maximum $M$ on $[c, d]$. By MVT, $|f(x) - f(y)| = |f\'(\\xi)||x - y| \\leq M|x - y|$, so $f$ is Lipschitz with constant $M$ on $[c, d]$.',
  },
      '$f$ is uniformly continuous on $(a, b)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $f\'$ is continuous on $[c, d]$, then $|f\'|$ attains a maximum $M$ on $[c, d]$. By MVT, $|f(x) - f(y)| = |f\'(\\xi)||x - y| \\leq M|x - y|$, so $f$ is Lipschitz with constant $M$ on $[c, d]$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $f\'$ is continuous on $[c, d]$, then $|f\'|$ attains a maximum $M$ on $[c, d]$. By MVT, $|f(x) - f(y)| = |f\'(\\xi)||x - y| \\leq M|x - y|$, so $f$ is Lipschitz with constant $M$ on $[c, d]$.',
  },
];
