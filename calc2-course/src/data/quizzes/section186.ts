import type { QuizQuestion } from './types';

export const section186Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The falling factorial $x^{(n)}$ is defined as:',
    options: [
      '$x(x+1)(x+2)\\cdots(x+n-1)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The falling factorial $x^{(n)} = x(x-1)(x-2)\\cdots(x-n+1)$ is a product of $n$ consecutive descending integers starting from $x$.',
  },
      '$x^n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The falling factorial $x^{(n)} = x(x-1)(x-2)\\cdots(x-n+1)$ is a product of $n$ consecutive descending integers starting from $x$.',
  },
      '$\\frac{x!}{(x-n)!}$ only',
      '$x(x-1)(x-2)\\cdots(x-n+1)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The falling factorial $x^{(n)} = x(x-1)(x-2)\\cdots(x-n+1)$ is a product of $n$ consecutive descending integers starting from $x$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The falling factorial $x^{(n)} = x(x-1)(x-2)\\cdots(x-n+1)$ is a product of $n$ consecutive descending integers starting from $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The key property of factorial polynomials is that $\\Delta x^{(n)} = $',
    options: [
      '$x^{(n-1)}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Just as $\\frac{d}{dx}x^n = nx^{n-1}$, we have $\\Delta x^{(n)} = n \\cdot x^{(n-1)}$. This makes factorial polynomials natural for discrete calculus.',
  },
      '$n! \\cdot x^{(n-1)}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Just as $\\frac{d}{dx}x^n = nx^{n-1}$, we have $\\Delta x^{(n)} = n \\cdot x^{(n-1)}$. This makes factorial polynomials natural for discrete calculus.',
  },
      '$n \\cdot x^{(n-1)}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Just as $\\frac{d}{dx}x^n = nx^{n-1}$, we have $\\Delta x^{(n)} = n \\cdot x^{(n-1)}$. This makes factorial polynomials natural for discrete calculus.',
  },
      '$(n-1) \\cdot x^{(n)}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Just as $\\frac{d}{dx}x^n = nx^{n-1}$, we have $\\Delta x^{(n)} = n \\cdot x^{(n-1)}$. This makes factorial polynomials natural for discrete calculus.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Just as $\\frac{d}{dx}x^n = nx^{n-1}$, we have $\\Delta x^{(n)} = n \\cdot x^{(n-1)}$. This makes factorial polynomials natural for discrete calculus.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is $x^{(2)}$ when $x = 5$?',
    options: [
      '$25
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$x^{(2)} = x(x-1)$, so $5^{(2)} = 5 \\cdot 4 = 20$.',
  },
      '$10
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$x^{(2)} = x(x-1)$, so $5^{(2)} = 5 \\cdot 4 = 20$.',
  },
      '$30
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$x^{(2)} = x(x-1)$, so $5^{(2)} = 5 \\cdot 4 = 20$.',
  },
      '$20
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$x^{(2)} = x(x-1)$, so $5^{(2)} = 5 \\cdot 4 = 20$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$x^{(2)} = x(x-1)$, so $5^{(2)} = 5 \\cdot 4 = 20$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Stirling numbers connect ordinary powers and factorial polynomials. If $x^{(n)} = \\sum_{k=0}^{n} s(n, k) x^k$, what are the $s(n,k)$ called?',
    options: [
      'Stirling numbers of the second kind',
      'Euler numbers',
      'Stirling numbers of the first kind',
      'Bernoulli numbers',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Stirling numbers of the first kind $s(n,k)$ expand falling factorials in terms of ordinary powers. Stirling numbers of the second kind do the reverse.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To find $\\sum_{k=0}^{n-1} k^2$ using factorial polynomials, we first express $k^2$ as:',
    options: [
      '$k^{(2)}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $k^{(2)} = k(k-1) = k^2 - k$, we have $k^2 = k^{(2)} + k = k^{(2)} + k^{(1)}$. This allows summation using the anti-difference formula.',
  },
      '$k^{(2)} + k^{(1)}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $k^{(2)} = k(k-1) = k^2 - k$, we have $k^2 = k^{(2)} + k = k^{(2)} + k^{(1)}$. This allows summation using the anti-difference formula.',
  },
      '$k^{(2)} - k^{(1)}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $k^{(2)} = k(k-1) = k^2 - k$, we have $k^2 = k^{(2)} + k = k^{(2)} + k^{(1)}$. This allows summation using the anti-difference formula.',
  },
      '$2k^{(2)}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $k^{(2)} = k(k-1) = k^2 - k$, we have $k^2 = k^{(2)} + k = k^{(2)} + k^{(1)}$. This allows summation using the anti-difference formula.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $k^{(2)} = k(k-1) = k^2 - k$, we have $k^2 = k^{(2)} + k = k^{(2)} + k^{(1)}$. This allows summation using the anti-difference formula.',
  },
];
