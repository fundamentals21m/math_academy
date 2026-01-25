import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f$ has $n$ continuous derivatives on $[a, b]$, we write $f \\in$:',
    options: [
      '$C[a, b]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The notation $C^n[a,b]$ (or $C^n(a,b)$) denotes the class of functions with $n$ continuous derivatives. $C^0$ is just continuous functions, $C^1$ has a continuous first derivative, etc.',
  },
      '$C^n[a, b]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The notation $C^n[a,b]$ (or $C^n(a,b)$) denotes the class of functions with $n$ continuous derivatives. $C^0$ is just continuous functions, $C^1$ has a continuous first derivative, etc.',
  },
      '$L^n[a, b]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The notation $C^n[a,b]$ (or $C^n(a,b)$) denotes the class of functions with $n$ continuous derivatives. $C^0$ is just continuous functions, $C^1$ has a continuous first derivative, etc.',
  },
      '$D^n[a, b]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The notation $C^n[a,b]$ (or $C^n(a,b)$) denotes the class of functions with $n$ continuous derivatives. $C^0$ is just continuous functions, $C^1$ has a continuous first derivative, etc.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The notation $C^n[a,b]$ (or $C^n(a,b)$) denotes the class of functions with $n$ continuous derivatives. $C^0$ is just continuous functions, $C^1$ has a continuous first derivative, etc.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f^{(n)}(x)$ exists for all $x$ in an interval, which statement is TRUE?',
    options: [
      '$f \\in C^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $f^{(n)}$ exists, then $f^{(n-1)}$ must be differentiable, and differentiability implies continuity. However, $f^{(n)}$ itself need not be continuous (as in the $x^2\\sin(1/x)$ example).',
  },
      '$f^{(n)}$ is continuous',
      '$f^{(n-1)}$ is continuous',
      '$f^{(n+1)}$ exists',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $f^{(n)}$ exists, then $f^{(n-1)}$ must be differentiable, and differentiability implies continuity. However, $f^{(n)}$ itself need not be continuous (as in the $x^2\\sin(1/x)$ example).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The $n$-th derivative of $e^{ax}$ is:',
    options: [
      '$e^{ax}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By induction: $(e^{ax})\' = ae^{ax}$, $(e^{ax})\'\' = a^2 e^{ax}$, and in general $\\frac{d^n}{dx^n}(e^{ax}) = a^n e^{ax}$.',
  },
      '$n! e^{ax}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By induction: $(e^{ax})\' = ae^{ax}$, $(e^{ax})\'\' = a^2 e^{ax}$, and in general $\\frac{d^n}{dx^n}(e^{ax}) = a^n e^{ax}$.',
  },
      '$a^n e^{ax}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By induction: $(e^{ax})\' = ae^{ax}$, $(e^{ax})\'\' = a^2 e^{ax}$, and in general $\\frac{d^n}{dx^n}(e^{ax}) = a^n e^{ax}$.',
  },
      '$a^n e^{anx}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By induction: $(e^{ax})\' = ae^{ax}$, $(e^{ax})\'\' = a^2 e^{ax}$, and in general $\\frac{d^n}{dx^n}(e^{ax}) = a^n e^{ax}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By induction: $(e^{ax})\' = ae^{ax}$, $(e^{ax})\'\' = a^2 e^{ax}$, and in general $\\frac{d^n}{dx^n}(e^{ax}) = a^n e^{ax}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f(x) = x^n$ where $n$ is a positive integer, then $f^{(n+1)}(x) = $',
    options: [
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The $n$-th derivative of $x^n$ is $n!$ (a constant). The $(n+1)$-th derivative of a constant is $0$.',
  },
      '$n!
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The $n$-th derivative of $x^n$ is $n!$ (a constant). The $(n+1)$-th derivative of a constant is $0$.',
  },
      '$x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The $n$-th derivative of $x^n$ is $n!$ (a constant). The $(n+1)$-th derivative of a constant is $0$.',
  },
      '$1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The $n$-th derivative of $x^n$ is $n!$ (a constant). The $(n+1)$-th derivative of a constant is $0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The $n$-th derivative of $x^n$ is $n!$ (a constant). The $(n+1)$-th derivative of a constant is $0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Leibniz\'s formula for the $n$-th derivative of a product $fg$ involves:',
    options: [
      'Only $f^{(n)}$ and $g^{(n)}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Leibniz\'s formula: $(fg)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}$. This generalizes the product rule and mirrors the binomial theorem structure.',
  },
      'The product $f^{(n)} \\cdot g^{(n)}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Leibniz\'s formula: $(fg)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}$. This generalizes the product rule and mirrors the binomial theorem structure.',
  },
      'An integral of $f$ and $g
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Leibniz\'s formula: $(fg)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}$. This generalizes the product rule and mirrors the binomial theorem structure.',
  },
      'A sum over binomial coefficients: $\\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Leibniz\'s formula: $(fg)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}$. This generalizes the product rule and mirrors the binomial theorem structure.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Leibniz\'s formula: $(fg)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} f^{(k)} g^{(n-k)}$. This generalizes the product rule and mirrors the binomial theorem structure.',
  },
];
