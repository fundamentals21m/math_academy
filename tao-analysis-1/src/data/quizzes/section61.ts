import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The First Fundamental Theorem of Calculus states that if $f$ is Riemann integrable on $[a,b]$ and $F(x) = \\int_a^x f(t) \\, dt$, then:',
    options: [
      '$F$ is differentiable everywhere and $F\\'(x) = f(x)$ for all $x \\in [a,b]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The First FTC guarantees that $F$ is continuous on $[a,b]$. Furthermore, at any point $x_0$ where $f$ is continuous, $F$ is differentiable and $F\'(x_0) = f(x_0)$.',
  },
      '$F$ must equal $f$ on $[a,b]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The First FTC guarantees that $F$ is continuous on $[a,b]$. Furthermore, at any point $x_0$ where $f$ is continuous, $F$ is differentiable and $F\'(x_0) = f(x_0)$.',
  },
      '$F$ is integrable but not necessarily continuous',
      '$F$ is continuous on $[a,b]$, and $F\\'(x) = f(x)$ at points where $f$ is continuous',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The First FTC guarantees that $F$ is continuous on $[a,b]$. Furthermore, at any point $x_0$ where $f$ is continuous, $F$ is differentiable and $F\'(x_0) = f(x_0)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Second Fundamental Theorem of Calculus states that if $f$ is Riemann integrable on $[a,b]$ and $F$ is an antiderivative of $f$ on $[a,b]$ (i.e., $F\' = f$), then:',
    options: [
      '$\\int_a^b f(x) \\, dx = F(b) - F(a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Second FTC provides the evaluation formula: if $F\' = f$ and $f$ is integrable, then the definite integral equals $F(b) - F(a)$.',
  },
      '$\\int_a^b f(x) \\, dx = F(a) - F(b)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Second FTC provides the evaluation formula: if $F\' = f$ and $f$ is integrable, then the definite integral equals $F(b) - F(a)$.',
  },
      '$\\int_a^b F(x) \\, dx = f(b) - f(a)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Second FTC provides the evaluation formula: if $F\' = f$ and $f$ is integrable, then the definite integral equals $F(b) - F(a)$.',
  },
      '$F(x) = \\int_a^x f(t) \\, dt + C$ for some constant $C
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Second FTC provides the evaluation formula: if $F\' = f$ and $f$ is integrable, then the definite integral equals $F(b) - F(a)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Second FTC provides the evaluation formula: if $F\' = f$ and $f$ is integrable, then the definite integral equals $F(b) - F(a)$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Let $F(x) = \\int_0^x t^2 \\, dt$. What is $F\'(3)$?',
    correctAnswer: 9,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'By the First Fundamental Theorem of Calculus, $F\'(x) = x^2$ at all points (since $t^2$ is continuous). Thus $F\'(3) = 3^2 = 9$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $G(x) = \\int_x^{x^2} e^{-t^2} \\, dt$, then $G\'(x)$ equals:',
    options: [
      '$e^{-x^2} - 2x \\cdot e^{-x^4}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Using the Leibniz rule: $G\'(x) = e^{-(x^2)^2} \\cdot \\frac{d}{dx}(x^2) - e^{-x^2} \\cdot \\frac{d}{dx}(x) = 2x \\cdot e^{-x^4} - e^{-x^2}$.',
  },
      '$2x \\cdot e^{-x^4} - e^{-x^2}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Using the Leibniz rule: $G\'(x) = e^{-(x^2)^2} \\cdot \\frac{d}{dx}(x^2) - e^{-x^2} \\cdot \\frac{d}{dx}(x) = 2x \\cdot e^{-x^4} - e^{-x^2}$.',
  },
      '$e^{-x^4} - e^{-x^2}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Using the Leibniz rule: $G\'(x) = e^{-(x^2)^2} \\cdot \\frac{d}{dx}(x^2) - e^{-x^2} \\cdot \\frac{d}{dx}(x) = 2x \\cdot e^{-x^4} - e^{-x^2}$.',
  },
      '$2x \\cdot e^{-x^4} + e^{-x^2}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Using the Leibniz rule: $G\'(x) = e^{-(x^2)^2} \\cdot \\frac{d}{dx}(x^2) - e^{-x^2} \\cdot \\frac{d}{dx}(x) = 2x \\cdot e^{-x^4} - e^{-x^2}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Using the Leibniz rule: $G\'(x) = e^{-(x^2)^2} \\cdot \\frac{d}{dx}(x^2) - e^{-x^2} \\cdot \\frac{d}{dx}(x) = 2x \\cdot e^{-x^4} - e^{-x^2}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which hypothesis is NOT required for the Second Fundamental Theorem of Calculus?',
    options: [
      '$f$ must be Riemann integrable on $[a,b]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Second FTC only requires that $f$ be Riemann integrable and that $F\' = f$ on $[a,b]$. Continuity of $f$ is sufficient but not necessary for integrability.',
  },
      '$F$ must be an antiderivative of $f$ on $[a,b]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Second FTC only requires that $f$ be Riemann integrable and that $F\' = f$ on $[a,b]$. Continuity of $f$ is sufficient but not necessary for integrability.',
  },
      '$f$ must be continuous on $[a,b]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Second FTC only requires that $f$ be Riemann integrable and that $F\' = f$ on $[a,b]$. Continuity of $f$ is sufficient but not necessary for integrability.',
  },
      '$F$ must be continuous on $[a,b]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Second FTC only requires that $f$ be Riemann integrable and that $F\' = f$ on $[a,b]$. Continuity of $f$ is sufficient but not necessary for integrability.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Second FTC only requires that $f$ be Riemann integrable and that $F\' = f$ on $[a,b]$. Continuity of $f$ is sufficient but not necessary for integrability.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Using the Second Fundamental Theorem, evaluate $\\int_1^4 \\frac{1}{2\\sqrt{x}} \\, dx$.',
    correctAnswer: 1,
    numericRange: { min: 0, max: 100, precision: 2 },
    difficulty: 'medium',
    explanation: 'An antiderivative of $\\frac{1}{2\\sqrt{x}}$ is $\\sqrt{x}$. By the Second FTC, $\\int_1^4 \\frac{1}{2\\sqrt{x}} \\, dx = \\sqrt{4} - \\sqrt{1} = 2 - 1 = 1$.',
  },
];
