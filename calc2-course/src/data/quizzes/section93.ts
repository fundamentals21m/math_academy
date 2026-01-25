import type { QuizQuestion } from './types';

export const section93Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The one-dimensional wave equation is:',
    options: [
      '$\\frac{\\partial^2 f}{\\partial t^2} = c^2 \\frac{\\partial^2 f}{\\partial x^2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The one-dimensional wave equation is $\\frac{\\partial^2 f}{\\partial t^2} = c^2 \\frac{\\partial^2 f}{\\partial x^2}$, where $c$ is a positive constant representing the wave speed.',
  },
      '$\\frac{\\partial f}{\\partial t} = c^2 \\frac{\\partial f}{\\partial x}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The one-dimensional wave equation is $\\frac{\\partial^2 f}{\\partial t^2} = c^2 \\frac{\\partial^2 f}{\\partial x^2}$, where $c$ is a positive constant representing the wave speed.',
  },
      '$\\frac{\\partial^2 f}{\\partial t^2} + c^2 \\frac{\\partial^2 f}{\\partial x^2} = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The one-dimensional wave equation is $\\frac{\\partial^2 f}{\\partial t^2} = c^2 \\frac{\\partial^2 f}{\\partial x^2}$, where $c$ is a positive constant representing the wave speed.',
  },
      '$\\frac{\\partial f}{\\partial t} + c\\frac{\\partial f}{\\partial x} = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The one-dimensional wave equation is $\\frac{\\partial^2 f}{\\partial t^2} = c^2 \\frac{\\partial^2 f}{\\partial x^2}$, where $c$ is a positive constant representing the wave speed.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The one-dimensional wave equation is $\\frac{\\partial^2 f}{\\partial t^2} = c^2 \\frac{\\partial^2 f}{\\partial x^2}$, where $c$ is a positive constant representing the wave speed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'D\'Alembert\'s solution to the wave equation with initial conditions $f(x, 0) = F(x)$ and $\\frac{\\partial f}{\\partial t}(x, 0) = G(x)$ is:',
    options: [
      '$f(x, t) = F(x + ct) + F(x - ct)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'D\'Alembert\'s solution combines traveling waves: $f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2} + \\frac{1}{2c}\\int_{x-ct}^{x+ct} G(s) \\, ds$, satisfying both the wave equation and the initial conditions.',
  },
      '$f(x, t) = F(x)\\cos(ct) + G(x)\\sin(ct)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'D\'Alembert\'s solution combines traveling waves: $f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2} + \\frac{1}{2c}\\int_{x-ct}^{x+ct} G(s) \\, ds$, satisfying both the wave equation and the initial conditions.',
  },
      '$f(x, t) = e^{ct}F(x)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'D\'Alembert\'s solution combines traveling waves: $f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2} + \\frac{1}{2c}\\int_{x-ct}^{x+ct} G(s) \\, ds$, satisfying both the wave equation and the initial conditions.',
  },
      '$f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2} + \\frac{1}{2c}\\int_{x-ct}^{x+ct} G(s) \\, ds
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'D\'Alembert\'s solution combines traveling waves: $f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2} + \\frac{1}{2c}\\int_{x-ct}^{x+ct} G(s) \\, ds$, satisfying both the wave equation and the initial conditions.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'D\'Alembert\'s solution combines traveling waves: $f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2} + \\frac{1}{2c}\\int_{x-ct}^{x+ct} G(s) \\, ds$, satisfying both the wave equation and the initial conditions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The wave equation can be factored as $L_1(L_2 f) = 0$ where:',
    options: [
      '$L_1 = \\frac{\\partial}{\\partial t}$ and $L_2 = \\frac{\\partial}{\\partial x}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The wave equation factors as $\\left(\\frac{\\partial}{\\partial t} - c\\frac{\\partial}{\\partial x}\\right)\\left(\\frac{\\partial}{\\partial t} + c\\frac{\\partial}{\\partial x}\\right)f = 0$. This factorization reduces the second-order equation to first-order equations.',
  },
      '$L_1 = \\frac{\\partial}{\\partial t} - c\\frac{\\partial}{\\partial x}$ and $L_2 = \\frac{\\partial}{\\partial t} + c\\frac{\\partial}{\\partial x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The wave equation factors as $\\left(\\frac{\\partial}{\\partial t} - c\\frac{\\partial}{\\partial x}\\right)\\left(\\frac{\\partial}{\\partial t} + c\\frac{\\partial}{\\partial x}\\right)f = 0$. This factorization reduces the second-order equation to first-order equations.',
  },
      '$L_1 = \\frac{\\partial}{\\partial t} + \\frac{\\partial}{\\partial x}$ and $L_2 = \\frac{\\partial}{\\partial t} - \\frac{\\partial}{\\partial x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The wave equation factors as $\\left(\\frac{\\partial}{\\partial t} - c\\frac{\\partial}{\\partial x}\\right)\\left(\\frac{\\partial}{\\partial t} + c\\frac{\\partial}{\\partial x}\\right)f = 0$. This factorization reduces the second-order equation to first-order equations.',
  },
      '$L_1 = \\frac{\\partial^2}{\\partial t^2}$ and $L_2 = \\frac{\\partial^2}{\\partial x^2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The wave equation factors as $\\left(\\frac{\\partial}{\\partial t} - c\\frac{\\partial}{\\partial x}\\right)\\left(\\frac{\\partial}{\\partial t} + c\\frac{\\partial}{\\partial x}\\right)f = 0$. This factorization reduces the second-order equation to first-order equations.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The wave equation factors as $\\left(\\frac{\\partial}{\\partial t} - c\\frac{\\partial}{\\partial x}\\right)\\left(\\frac{\\partial}{\\partial t} + c\\frac{\\partial}{\\partial x}\\right)f = 0$. This factorization reduces the second-order equation to first-order equations.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The general solution to the wave equation has the form $f(x, t) = \\varphi_1(x + ct) + \\varphi_2(x - ct)$. This represents:',
    options: [
      'Two waves traveling in the same direction',
      'Two waves traveling in opposite directions with speed $c
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The solution consists of two traveling waves: $\\varphi_1(x + ct)$ travels to the left and $\\varphi_2(x - ct)$ travels to the right, both with speed $c$.',
  },
      'One standing wave',
      'A wave that decays exponentially',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The solution consists of two traveling waves: $\\varphi_1(x + ct)$ travels to the left and $\\varphi_2(x - ct)$ travels to the right, both with speed $c$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When the initial velocity $G(x) = 0$, D\'Alembert\'s solution simplifies to:',
    options: [
      '$f(x, t) = F(x)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When $G(x) = 0$, the integral term vanishes and $f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2}$. This represents the initial profile splitting into two half-amplitude waves traveling in opposite directions.',
  },
      '$f(x, t) = F(x + ct)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $G(x) = 0$, the integral term vanishes and $f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2}$. This represents the initial profile splitting into two half-amplitude waves traveling in opposite directions.',
  },
      '$f(x, t) = F(x - ct)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $G(x) = 0$, the integral term vanishes and $f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2}$. This represents the initial profile splitting into two half-amplitude waves traveling in opposite directions.',
  },
      '$f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $G(x) = 0$, the integral term vanishes and $f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2}$. This represents the initial profile splitting into two half-amplitude waves traveling in opposite directions.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When $G(x) = 0$, the integral term vanishes and $f(x, t) = \\frac{F(x + ct) + F(x - ct)}{2}$. This represents the initial profile splitting into two half-amplitude waves traveling in opposite directions.',
  },
];
