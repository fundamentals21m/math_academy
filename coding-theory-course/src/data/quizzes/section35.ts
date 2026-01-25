import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A Reed-Solomon code over $\\mathbb{F}_q$ with designed distance $\\delta$ has parameters:',
    options: [
      '$[q-1, q-\\delta, \\delta]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Reed-Solomon codes have length $n = q - 1$, dimension $k = n - \\delta + 1 = q - \\delta$, and minimum distance $d = \\delta$, giving parameters $[q-1, q-\\delta, \\delta]$.',
  },
      '$[q, q-\\delta, \\delta]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reed-Solomon codes have length $n = q - 1$, dimension $k = n - \\delta + 1 = q - \\delta$, and minimum distance $d = \\delta$, giving parameters $[q-1, q-\\delta, \\delta]$.',
  },
      '$[q-1, q-\\delta-1, \\delta]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reed-Solomon codes have length $n = q - 1$, dimension $k = n - \\delta + 1 = q - \\delta$, and minimum distance $d = \\delta$, giving parameters $[q-1, q-\\delta, \\delta]$.',
  },
      '$[2q, q-\\delta, \\delta]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reed-Solomon codes have length $n = q - 1$, dimension $k = n - \\delta + 1 = q - \\delta$, and minimum distance $d = \\delta$, giving parameters $[q-1, q-\\delta, \\delta]$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Reed-Solomon codes have length $n = q - 1$, dimension $k = n - \\delta + 1 = q - \\delta$, and minimum distance $d = \\delta$, giving parameters $[q-1, q-\\delta, \\delta]$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Reed-Solomon codes are constructed using:',
    options: [
      'Evaluation of polynomials at all non-zero field elements',
      'Cyclic shifts of a generator codeword',
      'Random matrix generation',
      'Tensor products of smaller codes',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Reed-Solomon codewords are formed by evaluating polynomials of degree $< k$ at all non-zero elements of $\\mathbb{F}_q$: $(f(\\alpha), f(\\alpha^2), \\ldots, f(\\alpha^{q-1}))$ where $\\alpha$ is primitive.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'A Reed-Solomon code over $\\mathbb{F}_{256}$ (used in QR codes and CDs) has length:',
    correctAnswer: 255,
    numericRange: { min: 0, max: 300, precision: 0 },
    difficulty: 'easy',
    explanation: 'Reed-Solomon codes over $\\mathbb{F}_q$ have length $n = q - 1$. For $\\mathbb{F}_{256}$, this gives $n = 256 - 1 = 255$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Reed-Solomon codes are particularly useful for correcting:',
    options: [
      'No errors at all',
      'Only single bit errors',
      'Burst errors',
      'Only random errors',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Reed-Solomon codes work with symbols (field elements) rather than bits, making them excellent for correcting burst errors where consecutive bits are corrupted.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'A Reed-Solomon code with $n = 255$ and $k = 223$ can correct up to how many symbol errors?',
    correctAnswer: 16,
    numericRange: { min: 0, max: 50, precision: 0 },
    difficulty: 'medium',
    explanation: 'For RS codes, $d = n - k + 1 = 255 - 223 + 1 = 33$. Error correction capability is $t = \\lfloor (d-1)/2 \\rfloor = \\lfloor 32/2 \\rfloor = 16$ symbols.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The generator polynomial of a Reed-Solomon code with designed distance $\\delta$ is:',
    options: [
      '$g(x) = x^{\\delta} - 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The generator polynomial is $g(x) = \\prod_{i=1}^{\\delta-1}(x - \\alpha^i)$ where $\\alpha$ is a primitive element. This has $\\delta - 1$ consecutive roots.',
  },
      '$g(x) = (x - 1)^{\\delta}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The generator polynomial is $g(x) = \\prod_{i=1}^{\\delta-1}(x - \\alpha^i)$ where $\\alpha$ is a primitive element. This has $\\delta - 1$ consecutive roots.',
  },
      '$g(x) = \\prod_{i=1}^{\\delta-1}(x - \\alpha^i)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The generator polynomial is $g(x) = \\prod_{i=1}^{\\delta-1}(x - \\alpha^i)$ where $\\alpha$ is a primitive element. This has $\\delta - 1$ consecutive roots.',
  },
      '$g(x) = x^n - 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The generator polynomial is $g(x) = \\prod_{i=1}^{\\delta-1}(x - \\alpha^i)$ where $\\alpha$ is a primitive element. This has $\\delta - 1$ consecutive roots.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The generator polynomial is $g(x) = \\prod_{i=1}^{\\delta-1}(x - \\alpha^i)$ where $\\alpha$ is a primitive element. This has $\\delta - 1$ consecutive roots.',
  },
];
