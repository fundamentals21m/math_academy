import type { QuizQuestion } from './types';

export const section139Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The surface area of a parametric surface $S = \\mathbf{r}(T)$ is given by:',
    options: [
      '$\\iint_T du\\,dv
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The surface area is $a(S) = \\iint_T \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv$, integrating the magnitude of the fundamental vector product.',
  },
      '$\\iint_T \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The surface area is $a(S) = \\iint_T \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv$, integrating the magnitude of the fundamental vector product.',
  },
      '$\\iint_T \\frac{\\partial \\mathbf{r}}{\\partial u} \\cdot \\frac{\\partial \\mathbf{r}}{\\partial v}\\,du\\,dv
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The surface area is $a(S) = \\iint_T \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv$, integrating the magnitude of the fundamental vector product.',
  },
      '$\\iint_T (\\frac{\\partial \\mathbf{r}}{\\partial u} + \\frac{\\partial \\mathbf{r}}{\\partial v})\\,du\\,dv
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The surface area is $a(S) = \\iint_T \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv$, integrating the magnitude of the fundamental vector product.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The surface area is $a(S) = \\iint_T \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv$, integrating the magnitude of the fundamental vector product.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a surface given explicitly as $z = f(x, y)$ over region $T$, the surface area formula is:',
    options: [
      '$\\iint_T \\sqrt{1 + f_x^2 + f_y^2}\\,dx\\,dy
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For $z = f(x, y)$, the magnitude of the fundamental vector product is $\\sqrt{1 + f_x^2 + f_y^2}$, giving $a(S) = \\iint_T \\sqrt{1 + f_x^2 + f_y^2}\\,dx\\,dy$.',
  },
      '$\\iint_T dx\\,dy
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $z = f(x, y)$, the magnitude of the fundamental vector product is $\\sqrt{1 + f_x^2 + f_y^2}$, giving $a(S) = \\iint_T \\sqrt{1 + f_x^2 + f_y^2}\\,dx\\,dy$.',
  },
      '$\\iint_T |f(x, y)|\\,dx\\,dy
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $z = f(x, y)$, the magnitude of the fundamental vector product is $\\sqrt{1 + f_x^2 + f_y^2}$, giving $a(S) = \\iint_T \\sqrt{1 + f_x^2 + f_y^2}\\,dx\\,dy$.',
  },
      '$\\iint_T (f_x + f_y)\\,dx\\,dy
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $z = f(x, y)$, the magnitude of the fundamental vector product is $\\sqrt{1 + f_x^2 + f_y^2}$, giving $a(S) = \\iint_T \\sqrt{1 + f_x^2 + f_y^2}\\,dx\\,dy$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $z = f(x, y)$, the magnitude of the fundamental vector product is $\\sqrt{1 + f_x^2 + f_y^2}$, giving $a(S) = \\iint_T \\sqrt{1 + f_x^2 + f_y^2}\\,dx\\,dy$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Area Cosine Principle states that if region $S$ is projected onto region $T$ in a plane at angle $\\gamma$, then:',
    options: [
      '$a(T) = a(S) \\sin\\gamma
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The projection shrinks areas by a factor of $\\cos\\gamma$, where $\\gamma$ is the angle between the planes: $a(T) = a(S)\\cos\\gamma$.',
  },
      '$a(T) = a(S) \\tan\\gamma
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The projection shrinks areas by a factor of $\\cos\\gamma$, where $\\gamma$ is the angle between the planes: $a(T) = a(S)\\cos\\gamma$.',
  },
      '$a(T) = a(S) \\cos\\gamma
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The projection shrinks areas by a factor of $\\cos\\gamma$, where $\\gamma$ is the angle between the planes: $a(T) = a(S)\\cos\\gamma$.',
  },
      '$a(T) = a(S)/\\cos\\gamma
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The projection shrinks areas by a factor of $\\cos\\gamma$, where $\\gamma$ is the angle between the planes: $a(T) = a(S)\\cos\\gamma$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The projection shrinks areas by a factor of $\\cos\\gamma$, where $\\gamma$ is the angle between the planes: $a(T) = a(S)\\cos\\gamma$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'The surface area of a hemisphere of radius $a = 4$ is $2\\pi a^2$. Calculate this area.',
    correctAnswer: 100.53,
    numericRange: { min: 95, max: 110, precision: 2 },
    difficulty: 'easy',
    explanation: 'Surface area = $2\\pi(4)^2 = 2\\pi \\cdot 16 = 32\\pi \\approx 100.53$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Pappus\'s theorem for surface area states that a surface of revolution generated by rotating a curve of length $L$ about an axis has area:',
    options: [
      '$\\pi L^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The surface area equals the length of the curve times the circumference traced by its centroid: $A = L \\cdot 2\\pi\\bar{h} = 2\\pi L \\bar{h}$.',
  },
      '$\\pi L \\bar{h}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The surface area equals the length of the curve times the circumference traced by its centroid: $A = L \\cdot 2\\pi\\bar{h} = 2\\pi L \\bar{h}$.',
  },
      '$4\\pi L \\bar{h}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The surface area equals the length of the curve times the circumference traced by its centroid: $A = L \\cdot 2\\pi\\bar{h} = 2\\pi L \\bar{h}$.',
  },
      '$2\\pi L \\bar{h}$ where $\\bar{h}$ is the distance from the centroid of the curve to the axis',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The surface area equals the length of the curve times the circumference traced by its centroid: $A = L \\cdot 2\\pi\\bar{h} = 2\\pi L \\bar{h}$.',
  },
];
