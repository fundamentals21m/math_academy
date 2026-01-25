import type { QuizQuestion } from './types';

export const section108Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f = \\nabla\\varphi$, the function $\\varphi$ is called:',
    options: [
      'A potential function for $f$',
      'The divergence of $f$',
      'The gradient of $f$',
      'The curl of $f$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $f = \\nabla\\varphi$, then $\\varphi$ is called a potential function for $f$. The level sets of $\\varphi$ are called equipotential surfaces.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Newtonian gravitational potential is:',
    options: [
      '$\\varphi = GmMr
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Newtonian potential is $\\varphi(x, y, z) = GmM/r$ where $r = \\sqrt{x^2 + y^2 + z^2}$. Its gradient gives the gravitational force $f = -GmMr^{-3}\\mathbf{r}$.',
  },
      '$\\varphi = -GmMr^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Newtonian potential is $\\varphi(x, y, z) = GmM/r$ where $r = \\sqrt{x^2 + y^2 + z^2}$. Its gradient gives the gravitational force $f = -GmMr^{-3}\\mathbf{r}$.',
  },
      '$\\varphi = GmM/r
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Newtonian potential is $\\varphi(x, y, z) = GmM/r$ where $r = \\sqrt{x^2 + y^2 + z^2}$. Its gradient gives the gravitational force $f = -GmMr^{-3}\\mathbf{r}$.',
  },
      '$\\varphi = GmM/r^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Newtonian potential is $\\varphi(x, y, z) = GmM/r$ where $r = \\sqrt{x^2 + y^2 + z^2}$. Its gradient gives the gravitational force $f = -GmMr^{-3}\\mathbf{r}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Newtonian potential is $\\varphi(x, y, z) = GmM/r$ where $r = \\sqrt{x^2 + y^2 + z^2}$. Its gradient gives the gravitational force $f = -GmMr^{-3}\\mathbf{r}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For the potential $\\varphi = r^n$, we have $\\nabla(r^n) = $:',
    options: [
      '$nr^n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $\\varphi = r^n$ where $r = \\|\\mathbf{r}\\|$, the gradient is $\\nabla(r^n) = nr^{n-2}\\mathbf{r}$ where $\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$.',
  },
      '$nr^{n-1}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $\\varphi = r^n$ where $r = \\|\\mathbf{r}\\|$, the gradient is $\\nabla(r^n) = nr^{n-2}\\mathbf{r}$ where $\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$.',
  },
      '$r^{n-1}\\mathbf{r}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $\\varphi = r^n$ where $r = \\|\\mathbf{r}\\|$, the gradient is $\\nabla(r^n) = nr^{n-2}\\mathbf{r}$ where $\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$.',
  },
      '$nr^{n-2}\\mathbf{r}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $\\varphi = r^n$ where $r = \\|\\mathbf{r}\\|$, the gradient is $\\nabla(r^n) = nr^{n-2}\\mathbf{r}$ where $\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $\\varphi = r^n$ where $r = \\|\\mathbf{r}\\|$, the gradient is $\\nabla(r^n) = nr^{n-2}\\mathbf{r}$ where $\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The principle of conservation of mechanical energy states that for a gradient force field:',
    options: [
      'Kinetic energy is constant',
      'Potential energy is constant',
      'Work done is always zero',
      'Kinetic energy plus potential energy is constant'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For a conservative (gradient) force field, kinetic energy $k$ plus potential energy $-\\varphi$ is constant: $k(\\mathbf{x}) - \\varphi(\\mathbf{x}) = \\text{constant}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A force field will NOT be conservative if:',
    options: [
      'It is continuous',
      'Friction or viscosity exists in the system',
      'It acts in three dimensions',
      'It is bounded',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Force fields with friction or viscosity are not conservative because they convert mechanical energy into heat. Such forces cannot be written as gradients of a potential.',
  },
];
