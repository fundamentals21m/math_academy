import type { QuizQuestion } from './types';

export const section11Quiz = {
  easy: [
    {
      id: 's11-e01',
      type: 'multiple-choice',
      question: 'The derivative of $f$ at $a$ is defined as:',
      options: [
      '$f(a)
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.'
    },
      '$\\lim_{x \\to \\infty} f(x)
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.'
    },
      '$f(a+1) - f(a)
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.'
    },
      '$\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.'
    },
    {
      id: 's11-e02',
      type: 'multiple-choice',
      question: 'If $f$ is differentiable at $a$, then $f$ is:',
      options: [
      'Discontinuous at $a
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Differentiability implies continuity (but not conversely).'
    },
      'Constant near $a
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Differentiability implies continuity (but not conversely).'
    },
      'Continuous at $a
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Differentiability implies continuity (but not conversely).'
    },
      'Unbounded near $a
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Differentiability implies continuity (but not conversely).'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Differentiability implies continuity (but not conversely).'
    },
    {
      id: 's11-e03',
      type: 'multiple-choice',
      question: 'The derivative of $f(x) = x^n$ is:',
      options: [
      '$nx^{n-1}
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The power rule: $(x^n)\' = nx^{n-1}$.'
    },
      '$x^{n-1}
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The power rule: $(x^n)\' = nx^{n-1}$.'
    },
      '$nx^n
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The power rule: $(x^n)\' = nx^{n-1}$.'
    },
      '$x^{n+1}/(n+1)
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The power rule: $(x^n)\' = nx^{n-1}$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The power rule: $(x^n)\' = nx^{n-1}$.'
    },
    {
      id: 's11-e04',
      type: 'multiple-choice',
      question: 'If $f\'(a) > 0$, then near $a$:',
      options: [
      '$f$ is decreasing',
      '$f$ has a maximum',
      '$f$ is constant',
      '$f$ is increasing',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Positive derivative means the function is increasing (at least locally).'
    },
    {
      id: 's11-e05',
      type: 'multiple-choice',
      question: 'The derivative of a constant function is:',
      options: [
      '$1
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Constants have zero rate of change: $(c)\' = 0$.'
    },
      '$0
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Constants have zero rate of change: $(c)\' = 0$.'
    },
      'The constant',
      'Undefined',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Constants have zero rate of change: $(c)\' = 0$.'
    },
    {
      id: 's11-e06',
      type: 'numeric',
      question: 'What is the derivative of $f(x) = 3x^2$ at $x = 2$?',
      correctAnswer: 12,
      difficulty: 'easy',
      explanation: '$f\'(x) = 6x$, so $f\'(2) = 12$.'
    },
    {
      id: 's11-e07',
      type: 'multiple-choice',
      question: 'The sum rule states that $(f + g)\' = $:',
      options: [
      '$f\\' + g\\'
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The derivative of a sum is the sum of derivatives.'
    },
      '$f\\' \\cdot g\\'
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The derivative of a sum is the sum of derivatives.'
    },
      '$f\\' - g\\'
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The derivative of a sum is the sum of derivatives.'
    },
      '$f\\'/g\\'
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The derivative of a sum is the sum of derivatives.'
    },
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The derivative of a sum is the sum of derivatives.'
    },
    {
      id: 's11-e08',
      type: 'multiple-choice',
      question: 'The product rule states that $(fg)\' = $:',
      options: [
      '$f\\'g\\'
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.'
    },
      '$f\\'g + fg\\'
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.'
    },
      '$f\\' + g\\'
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.'
    },
      '$f\\'g - fg\\'
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Product rule: $(fg)\' = f\'g + fg\'$.'
    },
    {
      id: 's11-e09',
      type: 'multiple-choice',
      question: 'The quotient rule states that $(f/g)\' = $:',
      options: [
      '$f\\'/g\\'
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Quotient rule: $(f/g)\' = (f\'g - fg\')/g^2$.'
    },
      '$f\\'g\\'/g^2
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Quotient rule: $(f/g)\' = (f\'g - fg\')/g^2$.'
    },
      '$(f\\'g - fg\\')/g^2
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Quotient rule: $(f/g)\' = (f\'g - fg\')/g^2$.'
    },
      '$(f\\'g + fg\\')/g^2
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Quotient rule: $(f/g)\' = (f\'g - fg\')/g^2$.'
    },
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Quotient rule: $(f/g)\' = (f\'g - fg\')/g^2$.'
    },
    {
      id: 's11-e10',
      type: 'multiple-choice',
      question: 'The chain rule states that $(f \\circ g)\' = $:',
      options: [
      '$f\\' \\circ g\\'
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Chain rule: $(f(g(x)))\' = f\'(g(x)) \\cdot g\'(x)$.'
    },
      '$f\\' + g\\'
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Chain rule: $(f(g(x)))\' = f\'(g(x)) \\cdot g\'(x)$.'
    },
      '$(f\\' \\circ g) \\cdot g\\'
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Chain rule: $(f(g(x)))\' = f\'(g(x)) \\cdot g\'(x)$.'
    },
      '$f\\'g\\'
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Chain rule: $(f(g(x)))\' = f\'(g(x)) \\cdot g\'(x)$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Chain rule: $(f(g(x)))\' = f\'(g(x)) \\cdot g\'(x)$.'
    },
    {
      id: 's11-e11',
      type: 'multiple-choice',
      question: 'The derivative of $e^x$ is:',
      options: [
        '$xe^{x-1}$',
        '$e^x$',
        '$e^{x-1}$',
        '$1$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$e^x$ is its own derivative: $(e^x)\' = e^x$.'
    },
    {
      id: 's11-e12',
      type: 'multiple-choice',
      question: 'The derivative of $\\ln x$ is:',
      options: [
      '$\\ln x
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$(\\ln x)\' = 1/x$ for $x > 0$.'
    },
      '$x
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$(\\ln x)\' = 1/x$ for $x > 0$.'
    },
      '$e^x
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$(\\ln x)\' = 1/x$ for $x > 0$.'
    },
      '$1/x
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$(\\ln x)\' = 1/x$ for $x > 0$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$(\\ln x)\' = 1/x$ for $x > 0$.'
    },
    {
      id: 's11-e13',
      type: 'multiple-choice',
      question: 'The derivative of $\\sin x$ is:',
      options: [
      '$\\cos x
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$(\\sin x)\' = \\cos x$.'
    },
      '$-\\sin x
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$(\\sin x)\' = \\cos x$.'
    },
      '$\\tan x
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$(\\sin x)\' = \\cos x$.'
    },
      '$-\\cos x
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$(\\sin x)\' = \\cos x$.'
    },
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$(\\sin x)\' = \\cos x$.'
    },
    {
      id: 's11-e14',
      type: 'multiple-choice',
      question: 'The derivative of $\\cos x$ is:',
      options: [
      '$\\sin x
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$(\\cos x)\' = -\\sin x$.'
    },
      '$\\cos x
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$(\\cos x)\' = -\\sin x$.'
    },
      '$-\\cos x
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$(\\cos x)\' = -\\sin x$.'
    },
      '$-\\sin x
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$(\\cos x)\' = -\\sin x$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$(\\cos x)\' = -\\sin x$.'
    },
    {
      id: 's11-e15',
      type: 'numeric',
      question: 'What is the derivative of $f(x) = x^3$ at $x = 1$?',
      correctAnswer: 3,
      difficulty: 'easy',
      explanation: '$f\'(x) = 3x^2$, so $f\'(1) = 3$.'
    },
    {
      id: 's11-e16',
      type: 'multiple-choice',
      question: 'A function is differentiable on an open interval $(a,b)$ if:',
      options: [
      'It is continuous at one point',
      'It is bounded',
      'It is differentiable at every point in $(a,b)
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Differentiability on an interval means differentiable at each point in the interval.'
    },
      'It has a maximum',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Differentiability on an interval means differentiable at each point in the interval.'
    },
    {
      id: 's11-e17',
      type: 'multiple-choice',
      question: 'The function $f(x) = |x|$ at $x = 0$:',
      options: [
      'Is differentiable with $f\\'(0) = 0
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The left and right derivatives at $0$ are $-1$ and $1$, which don\'t match.'
    },
      'Is differentiable with $f\\'(0) = 1
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The left and right derivatives at $0$ are $-1$ and $1$, which don\'t match.'
    },
      'Is not continuous',
      'Is not differentiable',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The left and right derivatives at $0$ are $-1$ and $1$, which don\'t match.'
    },
    {
      id: 's11-e18',
      type: 'multiple-choice',
      question: 'If $f$ is differentiable and $f\'(x) = 0$ for all $x$ in an interval, then:',
      options: [
      '$f$ is constant',
      '$f$ is increasing',
      '$f$ is decreasing',
      '$f$ is unbounded',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Zero derivative everywhere means the function is constant.'
    },
    {
      id: 's11-e19',
      type: 'multiple-choice',
      question: 'The notation $\\frac{df}{dx}$ represents:',
      options: [
      'A fraction',
      'The integral of $f
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Leibniz notation $df/dx$ denotes the derivative of $f$ with respect to $x$.'
    },
      'The limit of $f
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Leibniz notation $df/dx$ denotes the derivative of $f$ with respect to $x$.'
    },
      'The derivative of $f$ with respect to $x
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Leibniz notation $df/dx$ denotes the derivative of $f$ with respect to $x$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Leibniz notation $df/dx$ denotes the derivative of $f$ with respect to $x$.'
    },
    {
      id: 's11-e20',
      type: 'numeric',
      question: 'What is $(5x^4)\'$ at $x = 1$?',
      correctAnswer: 20,
      difficulty: 'easy',
      explanation: '$(5x^4)\' = 20x^3$, so at $x = 1$: $20(1)^3 = 20$.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's11-m01',
      type: 'multiple-choice',
      question: 'The Mean Value Theorem states that if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then:',
      options: [
      '$f\\'(c) = 0$ for some $c
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'MVT: the average rate of change equals the instantaneous rate at some interior point.'
    },
      '$f(c) = \\frac{f(a) + f(b)}{2}$ for some $c
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'MVT: the average rate of change equals the instantaneous rate at some interior point.'
    },
      '$f\\'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a,b)
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'MVT: the average rate of change equals the instantaneous rate at some interior point.'
    },
      '$f$ is constant',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'MVT: the average rate of change equals the instantaneous rate at some interior point.'
    },
    {
      id: 's11-m02',
      type: 'multiple-choice',
      question: 'Rolle\'s Theorem is a special case of MVT when:',
      options: [
      '$f(a) = f(b)
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'When $f(a) = f(b)$, MVT gives $f\'(c) = 0$ for some $c \\in (a,b)$.'
    },
      '$f(a) = 0
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'When $f(a) = f(b)$, MVT gives $f\'(c) = 0$ for some $c \\in (a,b)$.'
    },
      '$f(b) = 0
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'When $f(a) = f(b)$, MVT gives $f\'(c) = 0$ for some $c \\in (a,b)$.'
    },
      '$f\\'(a) = f\\'(b)
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'When $f(a) = f(b)$, MVT gives $f\'(c) = 0$ for some $c \\in (a,b)$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'When $f(a) = f(b)$, MVT gives $f\'(c) = 0$ for some $c \\in (a,b)$.'
    },
    {
      id: 's11-m03',
      type: 'multiple-choice',
      question: 'If $f\'(x) > 0$ for all $x \\in (a,b)$, then $f$ is:',
      options: [
      'Decreasing on $(a,b)
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Positive derivative implies strictly increasing (by MVT).'
    },
      'Bounded on $(a,b)
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Positive derivative implies strictly increasing (by MVT).'
    },
      'Strictly increasing on $(a,b)
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Positive derivative implies strictly increasing (by MVT).'
    },
      'Constant on $(a,b)
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Positive derivative implies strictly increasing (by MVT).'
    },
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Positive derivative implies strictly increasing (by MVT).'
    },
    {
      id: 's11-m04',
      type: 'multiple-choice',
      question: 'A critical point of $f$ is a point where:',
      options: [
      '$f(x) = 0
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Critical points are where the derivative is zero or undefined.'
    },
      '$f\\'(x) = 0$ or $f\\'(x)$ does not exist',
      '$f$ is discontinuous',
      '$f$ is unbounded',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Critical points are where the derivative is zero or undefined.'
    },
    {
      id: 's11-m05',
      type: 'multiple-choice',
      question: 'The second derivative test: if $f\'(c) = 0$ and $f\'\'(c) > 0$, then:',
      options: [
      '$f$ has a local minimum at $c
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Positive second derivative at a critical point indicates a local minimum (concave up).'
    },
      '$f$ has a local maximum at $c
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Positive second derivative at a critical point indicates a local minimum (concave up).'
    },
      '$f$ has an inflection point at $c
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Positive second derivative at a critical point indicates a local minimum (concave up).'
    },
      'The test is inconclusive',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Positive second derivative at a critical point indicates a local minimum (concave up).'
    },
    {
      id: 's11-m06',
      type: 'numeric',
      question: 'Find $c$ in $(0, 2)$ such that $f\'(c) = \\frac{f(2) - f(0)}{2}$ for $f(x) = x^2$.',
      correctAnswer: 1,
      difficulty: 'medium',
      explanation: '$f\'(x) = 2x$. $(f(2) - f(0))/2 = (4 - 0)/2 = 2$. So $2c = 2$, giving $c = 1$.'
    },
    {
      id: 's11-m07',
      type: 'multiple-choice',
      question: 'L\'Hôpital\'s rule applies to limits of the form:',
      options: [
      '$0/0$ or $\\infty/\\infty
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'L\'Hôpital\'s rule handles indeterminate forms $0/0$ and $\\infty/\\infty$.'
    },
      '$0 \\cdot \\infty$ directly',
      '$1/0
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'L\'Hôpital\'s rule handles indeterminate forms $0/0$ and $\\infty/\\infty$.'
    },
      'Any limit',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'L\'Hôpital\'s rule handles indeterminate forms $0/0$ and $\\infty/\\infty$.'
    },
    {
      id: 's11-m08',
      type: 'multiple-choice',
      question: 'Using L\'Hôpital\'s rule, $\\lim_{x \\to 0} \\frac{\\sin x}{x} = $:',
      options: [
      '$0
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\frac{d}{dx}\\sin x = \\cos x$, $\\frac{d}{dx} x = 1$. So limit is $\\cos 0 / 1 = 1$.'
    },
      'Does not exist',
      '$1
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\frac{d}{dx}\\sin x = \\cos x$, $\\frac{d}{dx} x = 1$. So limit is $\\cos 0 / 1 = 1$.'
    },
      '$\\infty
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\frac{d}{dx}\\sin x = \\cos x$, $\\frac{d}{dx} x = 1$. So limit is $\\cos 0 / 1 = 1$.'
    },
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\frac{d}{dx}\\sin x = \\cos x$, $\\frac{d}{dx} x = 1$. So limit is $\\cos 0 / 1 = 1$.'
    },
    {
      id: 's11-m09',
      type: 'multiple-choice',
      question: 'If $f\'(x) = g\'(x)$ for all $x$, then:',
      options: [
      '$f = g
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Functions with equal derivatives differ by a constant.'
    },
      '$f$ and $g$ are unrelated',
      '$f\\' = g\\' = 0
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Functions with equal derivatives differ by a constant.'
    },
      '$f = g + C$ for some constant $C
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Functions with equal derivatives differ by a constant.'
    },
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Functions with equal derivatives differ by a constant.'
    },
    {
      id: 's11-m10',
      type: 'multiple-choice',
      question: 'The derivative of $f(x) = e^{2x}$ is:',
      options: [
      '$2e^{2x}
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'By chain rule: $(e^{2x})\' = e^{2x} \\cdot 2 = 2e^{2x}$.'
    },
      '$e^{2x}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By chain rule: $(e^{2x})\' = e^{2x} \\cdot 2 = 2e^{2x}$.'
    },
      '$2xe^{2x-1}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By chain rule: $(e^{2x})\' = e^{2x} \\cdot 2 = 2e^{2x}$.'
    },
      '$e^{2x}/2
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By chain rule: $(e^{2x})\' = e^{2x} \\cdot 2 = 2e^{2x}$.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By chain rule: $(e^{2x})\' = e^{2x} \\cdot 2 = 2e^{2x}$.'
    },
    {
      id: 's11-m11',
      type: 'multiple-choice',
      question: 'The derivative of $f(x) = \\ln(x^2)$ for $x > 0$ is:',
      options: [
        '$2x$',
        '$1/x^2$',
        '$2/x$',
        '$1/(2x)$'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\ln(x^2) = 2\\ln x$, so derivative is $2/x$. Or by chain rule: $\\frac{1}{x^2} \\cdot 2x = 2/x$.'
    },
    {
      id: 's11-m12',
      type: 'multiple-choice',
      question: 'If $f$ is twice differentiable and $f\'\'(x) > 0$ on $(a,b)$, then $f$ is:',
      options: [
      'Linear',
      'Constant',
      'Concave down',
      'Concave up (convex)',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Positive second derivative means concave up (graph lies above tangent lines).'
    },
    {
      id: 's11-m13',
      type: 'numeric',
      question: 'What is $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$ using L\'Hôpital\'s rule?',
      correctAnswer: 1,
      difficulty: 'medium',
      explanation: 'Derivatives: $e^x \\to 1$, $1 \\to 1$. Limit is $1/1 = 1$.'
    },
    {
      id: 's11-m14',
      type: 'multiple-choice',
      question: 'The function $f(x) = x^3$ has at $x = 0$:',
      options: [
        'An inflection point',
        'A local minimum',
        'A local maximum',
        'No special feature'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$f\'(0) = 0$ but $f\'\'(0) = 0$ too. Checking: $f\'\'\'(0) = 6 \\neq 0$, so inflection point.'
    },
    {
      id: 's11-m15',
      type: 'multiple-choice',
      question: 'Cauchy\'s Mean Value Theorem states that for suitable $f, g$:',
      options: [
      '$f\\'(c) = g\\'(c)
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Cauchy MVT generalizes MVT to ratios of functions.'
    },
      '$f(c) = g(c)
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Cauchy MVT generalizes MVT to ratios of functions.'
    },
      '$\\frac{f\\'(c)}{g\\'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$ for some $c
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Cauchy MVT generalizes MVT to ratios of functions.'
    },
      '$f\\'(c)g\\'(c) = 1
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Cauchy MVT generalizes MVT to ratios of functions.'
    },
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Cauchy MVT generalizes MVT to ratios of functions.'
    },
    {
      id: 's11-m16',
      type: 'multiple-choice',
      question: 'The derivative of $\\arctan x$ is:',
      options: [
      '$1/\\sqrt{1-x^2}
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$(\\arctan x)\' = 1/(1+x^2)$.'
    },
      '$1/(1+x^2)
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$(\\arctan x)\' = 1/(1+x^2)$.'
    },
      '$-1/\\sqrt{1-x^2}
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$(\\arctan x)\' = 1/(1+x^2)$.'
    },
      '$\\sec^2 x
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$(\\arctan x)\' = 1/(1+x^2)$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$(\\arctan x)\' = 1/(1+x^2)$.'
    },
    {
      id: 's11-m17',
      type: 'multiple-choice',
      question: 'If $f\'(a)$ exists, then $\\lim_{h \\to 0} \\frac{f(a+h) - f(a-h)}{2h} = $:',
      options: [
        '$0$',
        '$2f\'(a)$',
        '$f\'(a)/2$',
        '$f\'(a)$'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'This symmetric difference quotient also converges to $f\'(a)$ when the derivative exists.'
    },
    {
      id: 's11-m18',
      type: 'multiple-choice',
      question: 'The inverse function theorem (1D) states that if $f\'(a) \\neq 0$:',
      options: [
      '$f$ has no inverse',
      '$f^{-1}$ exists locally and $(f^{-1})\\'(f(a)) = 1/f\\'(a)
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Non-zero derivative allows local inversion with derivative $1/f\'(a)$.'
    },
      '$f$ is constant',
      '$f^{-1}$ is not differentiable',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Non-zero derivative allows local inversion with derivative $1/f\'(a)$.'
    },
    {
      id: 's11-m19',
      type: 'numeric',
      question: 'For $f(x) = \\sin x$, find $f\'(\\pi/4)$. Give answer to 2 decimal places.',
      correctAnswer: 0.71,
      numericRange: { min: 0.70, max: 0.72 },
      difficulty: 'medium',
      explanation: '$f\'(x) = \\cos x$, so $f\'(\\pi/4) = \\cos(\\pi/4) = \\sqrt{2}/2 \\approx 0.71$.'
    },
    {
      id: 's11-m20',
      type: 'multiple-choice',
      question: 'A function with bounded derivative on $(a,b)$ is:',
      options: [
      'Constant',
      'Lipschitz continuous',
      'Not continuous',
      'Unbounded',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By MVT, $|f(x) - f(y)| \\leq M|x-y|$ where $|f\'| \\leq M$.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's11-h01',
      type: 'multiple-choice',
      question: 'A function differentiable on $(a,b)$ with $|f\'(x)| \\leq 1$:',
      options: [
      'Has a fixed point',
      'Is a contraction mapping',
      'Is constant',
      'Satisfies $|f(x) - f(y)| \\leq |x - y|
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'By MVT, $|f(x) - f(y)| = |f\'(c)||x - y| \\leq |x - y|$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'By MVT, $|f(x) - f(y)| = |f\'(c)||x - y| \\leq |x - y|$.'
    },
    {
      id: 's11-h02',
      type: 'multiple-choice',
      question: 'Darboux\'s theorem states that:',
      options: [
      'Every derivative is continuous',
      'Derivatives are bounded',
      'All functions are differentiable',
      'Derivatives satisfy the intermediate value property',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Darboux: $f\'$ has the IVP even if $f\'$ is discontinuous.'
    },
    {
      id: 's11-h03',
      type: 'multiple-choice',
      question: 'The function $f(x) = x^2 \\sin(1/x)$ for $x \\neq 0$, $f(0) = 0$:',
      options: [
      'Is not differentiable at $0
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$\\frac{f(h) - 0}{h} = h\\sin(1/h) \\to 0$, so $f\'(0) = 0$.'
    },
      'Is differentiable at $0$ with $f\\'(0) = 1
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$\\frac{f(h) - 0}{h} = h\\sin(1/h) \\to 0$, so $f\'(0) = 0$.'
    },
      'Is differentiable at $0$ with $f\\'(0) = 0
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$\\frac{f(h) - 0}{h} = h\\sin(1/h) \\to 0$, so $f\'(0) = 0$.'
    },
      'Is not continuous at $0
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$\\frac{f(h) - 0}{h} = h\\sin(1/h) \\to 0$, so $f\'(0) = 0$.'
    },
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$\\frac{f(h) - 0}{h} = h\\sin(1/h) \\to 0$, so $f\'(0) = 0$.'
    },
    {
      id: 's11-h04',
      type: 'multiple-choice',
      question: 'If $f$ is differentiable on $\\mathbb{R}$ and $f\'$ is bounded:',
      options: [
      '$f$ is bounded',
      '$f$ is uniformly continuous',
      '$f$ is constant',
      '$f\\\'$ is continuous',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Bounded derivative implies Lipschitz, which implies uniform continuity.'
    },
    {
      id: 's11-h05',
      type: 'multiple-choice',
      question: 'There exists a function differentiable everywhere with derivative:',
      options: [
      'The Dirichlet function',
      'A bounded discontinuous function',
      'An unbounded function',
      'A function discontinuous at every point',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Derivatives can be discontinuous (Darboux), but not everywhere discontinuous. Bounded discontinuous examples exist.'
    },
    {
      id: 's11-h06',
      type: 'multiple-choice',
      question: 'The Weierstrass function is:',
      options: [
      'Differentiable everywhere',
      'Differentiable almost everywhere',
      'Continuous everywhere but differentiable nowhere',
      'Discontinuous everywhere',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Weierstrass constructed a continuous function that is nowhere differentiable.'
    },
    {
      id: 's11-h07',
      type: 'multiple-choice',
      question: 'If $f\'\'(x) = 0$ for all $x$, then $f$ is:',
      options: [
      'Constant',
      'Quadratic',
      'Exponential',
      'Linear (of the form $ax + b$)',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: '$f\'\' = 0$ implies $f\' = c_1$, which implies $f = c_1 x + c_2$.'
    },
    {
      id: 's11-h08',
      type: 'numeric',
      question: 'Using L\'Hôpital\'s rule, find $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$. Give answer as a fraction in decimal.',
      correctAnswer: 0.167,
      numericRange: { min: 0.16, max: 0.17 },
      difficulty: 'hard',
      explanation: 'Apply L\'Hôpital 3 times: $\\frac{1 - \\cos x}{3x^2} \\to \\frac{\\sin x}{6x} \\to \\frac{\\cos x}{6} \\to 1/6 \\approx 0.167$.'
    },
    {
      id: 's11-h09',
      type: 'multiple-choice',
      question: 'Taylor\'s theorem with Lagrange remainder states $f(x) = P_n(x) + R_n(x)$ where:',
      options: [
        '$R_n(x) = 0$',
        '$R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ for some $c$ between $a$ and $x$',
        '$R_n(x) = f^{(n)}(a)$',
        '$R_n(x) = \\infty$'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The Lagrange form of the remainder involves the $(n+1)$st derivative at an intermediate point.'
    },
    {
      id: 's11-h10',
      type: 'multiple-choice',
      question: 'A function is real analytic at $a$ if:',
      options: [
      'It equals its Taylor series in a neighborhood of $a
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Analytic means the Taylor series converges to $f$ near $a$. Being $C^\\infty$ is necessary but not sufficient.'
    },
      'It is infinitely differentiable at $a
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Analytic means the Taylor series converges to $f$ near $a$. Being $C^\\infty$ is necessary but not sufficient.'
    },
      'It is continuous at $a
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Analytic means the Taylor series converges to $f$ near $a$. Being $C^\\infty$ is necessary but not sufficient.'
    },
      'It has a finite Taylor polynomial',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Analytic means the Taylor series converges to $f$ near $a$. Being $C^\\infty$ is necessary but not sufficient.'
    },
    {
      id: 's11-h11',
      type: 'multiple-choice',
      question: 'The function $f(x) = e^{-1/x^2}$ for $x \\neq 0$, $f(0) = 0$ is:',
      options: [
      '$C^\\infty$ but not analytic at $0
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'All derivatives at $0$ are $0$, so Taylor series is $0$, but $f \\neq 0$ for $x \\neq 0$. Hence $C^\\infty$ but not analytic.'
    },
      'Not differentiable at $0
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'All derivatives at $0$ are $0$, so Taylor series is $0$, but $f \\neq 0$ for $x \\neq 0$. Hence $C^\\infty$ but not analytic.'
    },
      'Discontinuous at $0
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'All derivatives at $0$ are $0$, so Taylor series is $0$, but $f \\neq 0$ for $x \\neq 0$. Hence $C^\\infty$ but not analytic.'
    },
      'Analytic everywhere',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'All derivatives at $0$ are $0$, so Taylor series is $0$, but $f \\neq 0$ for $x \\neq 0$. Hence $C^\\infty$ but not analytic.'
    },
    {
      id: 's11-h12',
      type: 'multiple-choice',
      question: 'If $f$ is differentiable on $(a,b)$ and $\\lim_{x \\to a^+} f\'(x) = L$:',
      options: [
      '$f$ extends to $[a,b)$ with $f\\'$ continuous at $a
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The limit of $f\'$ existing doesn\'t automatically mean $f$ is differentiable at the endpoint.'
    },
      '$f\\'(a)$ exists and equals $L
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The limit of $f\'$ existing doesn\'t automatically mean $f$ is differentiable at the endpoint.'
    },
      'We cannot conclude $f\\'(a)$ exists without more information',
      '$f$ must be discontinuous at $a
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The limit of $f\'$ existing doesn\'t automatically mean $f$ is differentiable at the endpoint.'
    },
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The limit of $f\'$ existing doesn\'t automatically mean $f$ is differentiable at the endpoint.'
    },
    {
      id: 's11-h13',
      type: 'multiple-choice',
      question: 'The number of real roots of $f(x) = x^5 - 5x + 1$ is:',
      options: [
      '$1
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$f\'(x) = 5x^4 - 5 = 0$ at $x = \\pm 1$. Check signs: $f(-2) < 0$, $f(-1) > 0$, $f(0) > 0$, $f(1) < 0$, $f(2) > 0$. Three sign changes, three roots.'
    },
      '$5
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$f\'(x) = 5x^4 - 5 = 0$ at $x = \\pm 1$. Check signs: $f(-2) < 0$, $f(-1) > 0$, $f(0) > 0$, $f(1) < 0$, $f(2) > 0$. Three sign changes, three roots.'
    },
      '$3
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$f\'(x) = 5x^4 - 5 = 0$ at $x = \\pm 1$. Check signs: $f(-2) < 0$, $f(-1) > 0$, $f(0) > 0$, $f(1) < 0$, $f(2) > 0$. Three sign changes, three roots.'
    },
      'Cannot be determined',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '$f\'(x) = 5x^4 - 5 = 0$ at $x = \\pm 1$. Check signs: $f(-2) < 0$, $f(-1) > 0$, $f(0) > 0$, $f(1) < 0$, $f(2) > 0$. Three sign changes, three roots.'
    },
    {
      id: 's11-h14',
      type: 'multiple-choice',
      question: 'If $f$ is $n$ times differentiable and $f(a) = f\'(a) = \\cdots = f^{(n-1)}(a) = 0$ but $f^{(n)}(a) \\neq 0$:',
      options: [
      '$f$ has a local max at $a
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'When the first $n-1$ derivatives vanish but the $n$th doesn\'t, $a$ is a zero of order $n$.'
    },
      '$a$ is a zero of order $n
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'When the first $n-1$ derivatives vanish but the $n$th doesn\'t, $a$ is a zero of order $n$.'
    },
      '$a$ is a simple zero',
      '$f$ is constant',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'When the first $n-1$ derivatives vanish but the $n$th doesn\'t, $a$ is a zero of order $n$.'
    },
    {
      id: 's11-h15',
      type: 'multiple-choice',
      question: 'Faa di Bruno\'s formula gives:',
      options: [
      'The derivative of a product',
      'The Taylor series',
      'The integral of a composition',
      'The $n$th derivative of a composition',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Faa di Bruno\'s formula generalizes the chain rule to higher derivatives.'
    },
    {
      id: 's11-h16',
      type: 'multiple-choice',
      question: 'If $f$ is convex on $(a,b)$, then $f$ is:',
      options: [
      'Both (B) and (C)',
      'Differentiable except at countably many points',
      'Continuous and has left and right derivatives everywhere',
      'Differentiable everywhere',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Convex functions are continuous, have one-sided derivatives everywhere, and are differentiable except at countably many points.'
    },
    {
      id: 's11-h17',
      type: 'numeric',
      question: 'For $f(x) = x^x$ ($x > 0$), find $f\'(1)$.',
      correctAnswer: 1,
      difficulty: 'hard',
      explanation: '$f(x) = e^{x\\ln x}$. $f\'(x) = x^x(\\ln x + 1)$. At $x = 1$: $f\'(1) = 1^1(0 + 1) = 1$.'
    },
    {
      id: 's11-h18',
      type: 'multiple-choice',
      question: 'The set of points where a convex function is not differentiable:',
      options: [
      'Is empty',
      'Can be uncountable',
      'Is at most countable',
      'Is the whole domain',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Convex functions have at most countably many non-differentiability points (corners).'
    },
    {
      id: 's11-h19',
      type: 'multiple-choice',
      question: 'If $\\lim_{x \\to a} \\frac{f(x) - f(a)}{(x-a)^2} = L \\neq 0$:',
      options: [
      '$f\\'(a) = L
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'This limit being finite and nonzero implies $f(x) - f(a) \\sim L(x-a)^2$, so $f\'(a) = 0$ and by Taylor, $f\'\'(a) = 2L$.'
    },
      '$f\\'(a) = 0$ and $a$ is an inflection point',
      '$f$ is not differentiable at $a
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'This limit being finite and nonzero implies $f(x) - f(a) \\sim L(x-a)^2$, so $f\'(a) = 0$ and by Taylor, $f\'\'(a) = 2L$.'
    },
      '$f\\'(a) = 0$ and $f\\'\\'(a) = 2L
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'This limit being finite and nonzero implies $f(x) - f(a) \\sim L(x-a)^2$, so $f\'(a) = 0$ and by Taylor, $f\'\'(a) = 2L$.'
    },
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'This limit being finite and nonzero implies $f(x) - f(a) \\sim L(x-a)^2$, so $f\'(a) = 0$ and by Taylor, $f\'\'(a) = 2L$.'
    },
    {
      id: 's11-h20',
      type: 'multiple-choice',
      question: 'A function where $f\'$ exists everywhere but is discontinuous at every point:',
      options: [
      'Exists',
      'Must be constant',
      'Cannot exist (by Darboux)',
      'Is the Weierstrass function',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'By Darboux\'s theorem, derivatives have the IVP, so they cannot be discontinuous at every point (they\'re Baire class 1).'
    }
  ] as QuizQuestion[],
};
