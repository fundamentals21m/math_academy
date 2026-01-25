import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The derivative $f\'(x)$ is defined as:',
    options: [
      '$\\lim_{h \\to 0} \\frac{f(x+h) + f(x)}{h}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The derivative is defined as $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$, representing the instantaneous rate of change of $f$ at $x$, or equivalently the slope of the tangent line.',
  },
      '$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The derivative is defined as $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$, representing the instantaneous rate of change of $f$ at $x$, or equivalently the slope of the tangent line.',
  },
      '$\\lim_{h \\to 0} \\frac{f(x) - f(x-h)}{2h}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The derivative is defined as $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$, representing the instantaneous rate of change of $f$ at $x$, or equivalently the slope of the tangent line.',
  },
      '$\\frac{f(b) - f(a)}{b - a}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The derivative is defined as $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$, representing the instantaneous rate of change of $f$ at $x$, or equivalently the slope of the tangent line.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The derivative is defined as $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$, representing the instantaneous rate of change of $f$ at $x$, or equivalently the slope of the tangent line.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ is differentiable at $x$, then $f$ is:',
    options: [
      'Monotonic near $x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 5.2 in Rudin: If $f$ is differentiable at $x$, then $f$ is continuous at $x$. Proof: $f(x+h) - f(x) = h \\cdot \\frac{f(x+h) - f(x)}{h} \\to 0 \\cdot f\'(x) = 0$ as $h \\to 0$.',
  },
      'Differentiable in a neighborhood of $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Theorem 5.2 in Rudin: If $f$ is differentiable at $x$, then $f$ is continuous at $x$. Proof: $f(x+h) - f(x) = h \\cdot \\frac{f(x+h) - f(x)}{h} \\to 0 \\cdot f\'(x) = 0$ as $h \\to 0$.',
  },
      'Continuous at $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Theorem 5.2 in Rudin: If $f$ is differentiable at $x$, then $f$ is continuous at $x$. Proof: $f(x+h) - f(x) = h \\cdot \\frac{f(x+h) - f(x)}{h} \\to 0 \\cdot f\'(x) = 0$ as $h \\to 0$.',
  },
      'Bounded near $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Theorem 5.2 in Rudin: If $f$ is differentiable at $x$, then $f$ is continuous at $x$. Proof: $f(x+h) - f(x) = h \\cdot \\frac{f(x+h) - f(x)}{h} \\to 0 \\cdot f\'(x) = 0$ as $h \\to 0$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Theorem 5.2 in Rudin: If $f$ is differentiable at $x$, then $f$ is continuous at $x$. Proof: $f(x+h) - f(x) = h \\cdot \\frac{f(x+h) - f(x)}{h} \\to 0 \\cdot f\'(x) = 0$ as $h \\to 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The function $f(x) = |x|$ at $x = 0$:',
    options: [
      'Is differentiable with $f\\'(0) = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The left derivative is $\\lim_{h \\to 0^-} \\frac{|h|}{h} = -1$ and the right derivative is $\\lim_{h \\to 0^+} \\frac{|h|}{h} = 1$. Since these differ, $f$ is not differentiable at $0$, but $f$ is clearly continuous there.',
  },
      'Is continuous but not differentiable',
      'Is differentiable with $f\\'(0) = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The left derivative is $\\lim_{h \\to 0^-} \\frac{|h|}{h} = -1$ and the right derivative is $\\lim_{h \\to 0^+} \\frac{|h|}{h} = 1$. Since these differ, $f$ is not differentiable at $0$, but $f$ is clearly continuous there.',
  },
      'Is neither continuous nor differentiable',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The left derivative is $\\lim_{h \\to 0^-} \\frac{|h|}{h} = -1$ and the right derivative is $\\lim_{h \\to 0^+} \\frac{|h|}{h} = 1$. Since these differ, $f$ is not differentiable at $0$, but $f$ is clearly continuous there.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ and $g$ are differentiable at $x$ and $g(x) \\neq 0$, then $(f/g)\'(x) = $',
    options: [
      '$\\frac{f\\'(x)}{g\\'(x)}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The quotient rule states $(f/g)\'(x) = \\frac{f\'(x)g(x) - f(x)g\'(x)}{g(x)^2}$. This follows from the product rule applied to $f \\cdot (1/g)$ along with the chain rule for $1/g$.',
  },
      '$\\frac{f\\'(x)g(x) + f(x)g\\'(x)}{g(x)^2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The quotient rule states $(f/g)\'(x) = \\frac{f\'(x)g(x) - f(x)g\'(x)}{g(x)^2}$. This follows from the product rule applied to $f \\cdot (1/g)$ along with the chain rule for $1/g$.',
  },
      '$\\frac{f(x)g\\'(x) - f\\'(x)g(x)}{g(x)^2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The quotient rule states $(f/g)\'(x) = \\frac{f\'(x)g(x) - f(x)g\'(x)}{g(x)^2}$. This follows from the product rule applied to $f \\cdot (1/g)$ along with the chain rule for $1/g$.',
  },
      '$\\frac{f\\'(x)g(x) - f(x)g\\'(x)}{g(x)^2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The quotient rule states $(f/g)\'(x) = \\frac{f\'(x)g(x) - f(x)g\'(x)}{g(x)^2}$. This follows from the product rule applied to $f \\cdot (1/g)$ along with the chain rule for $1/g$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The quotient rule states $(f/g)\'(x) = \\frac{f\'(x)g(x) - f(x)g\'(x)}{g(x)^2}$. This follows from the product rule applied to $f \\cdot (1/g)$ along with the chain rule for $1/g$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The function $f(x) = x^2 \\sin(1/x)$ for $x \\neq 0$ and $f(0) = 0$ is:',
    options: [
      'Differentiable at $0$ with $f\\'(0) = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$f\'(0) = \\lim_{h \\to 0} \\frac{h^2 \\sin(1/h)}{h} = \\lim_{h \\to 0} h \\sin(1/h) = 0$ by the squeeze theorem (since $|h \\sin(1/h)| \\leq |h| \\to 0$). Note: $f\'$ exists at $0$ but is not continuous there.',
  },
      'Not continuous at $0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$f\'(0) = \\lim_{h \\to 0} \\frac{h^2 \\sin(1/h)}{h} = \\lim_{h \\to 0} h \\sin(1/h) = 0$ by the squeeze theorem (since $|h \\sin(1/h)| \\leq |h| \\to 0$). Note: $f\'$ exists at $0$ but is not continuous there.',
  },
      'Continuous but not differentiable at $0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$f\'(0) = \\lim_{h \\to 0} \\frac{h^2 \\sin(1/h)}{h} = \\lim_{h \\to 0} h \\sin(1/h) = 0$ by the squeeze theorem (since $|h \\sin(1/h)| \\leq |h| \\to 0$). Note: $f\'$ exists at $0$ but is not continuous there.',
  },
      'Differentiable at $0$ with $f\\'(0) = 1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$f\'(0) = \\lim_{h \\to 0} \\frac{h^2 \\sin(1/h)}{h} = \\lim_{h \\to 0} h \\sin(1/h) = 0$ by the squeeze theorem (since $|h \\sin(1/h)| \\leq |h| \\to 0$). Note: $f\'$ exists at $0$ but is not continuous there.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$f\'(0) = \\lim_{h \\to 0} \\frac{h^2 \\sin(1/h)}{h} = \\lim_{h \\to 0} h \\sin(1/h) = 0$ by the squeeze theorem (since $|h \\sin(1/h)| \\leq |h| \\to 0$). Note: $f\'$ exists at $0$ but is not continuous there.',
  },
];
