import type { QuizQuestion } from './types';

export const section12Quiz = {
  easy: [
    {
      id: 's12-e01',
      type: 'multiple-choice',
      question: 'Taylor\'s theorem approximates $f(x)$ near $a$ using:',
      options: [
        'A polynomial involving derivatives of $f$ at $a$',
        'The integral of $f$',
        'The limit of $f$',
        'Random coefficients'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Taylor\'s theorem expresses $f(x)$ as a polynomial plus remainder, using derivatives at $a$.'
    },
    {
      id: 's12-e02',
      type: 'multiple-choice',
      question: 'The first-order Taylor polynomial of $f$ at $a$ is:',
      options: [
        '$f(a)$',
        '$f(a) + f\'(a)(x-a)$',
        '$f\'(a)$',
        '$f(a) + f\'(a)$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The linear (first-order) Taylor polynomial is the tangent line approximation.'
    },
    {
      id: 's12-e03',
      type: 'multiple-choice',
      question: 'The second-order Taylor polynomial of $f$ at $a$ is:',
      options: [
        '$f(a) + f\'(a)(x-a)$',
        '$f\'\'(a)(x-a)^2$',
        '$f(a) + f\'(a)(x-a) + \\frac{f\'\'(a)}{2}(x-a)^2$',
        '$f(a) + f\'\'(a)$'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The quadratic Taylor polynomial includes terms up to $(x-a)^2$.'
    },
    {
      id: 's12-e04',
      type: 'multiple-choice',
      question: 'L\'Hôpital\'s rule is used to evaluate limits of the form:',
      options: [
        '$\\infty - \\infty$ directly',
        'Any limit',
        '$1/0$',
        '$0/0$ or $\\infty/\\infty$'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'L\'Hôpital\'s rule applies to indeterminate forms $0/0$ or $\\infty/\\infty$.'
    },
    {
      id: 's12-e05',
      type: 'multiple-choice',
      question: 'L\'Hôpital\'s rule states that $\\lim \\frac{f(x)}{g(x)} = $:',
      options: [
        '$\\lim \\frac{f\'(x)}{g\'(x)}$ (if this limit exists)',
        '$\\frac{f\'(a)}{g\'(a)}$',
        '$\\lim f(x) \\cdot \\lim g(x)$',
        '$0$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Replace the ratio with the ratio of derivatives (under appropriate conditions).'
    },
    {
      id: 's12-e06',
      type: 'numeric',
      question: 'Using L\'Hôpital\'s rule, find $\\lim_{x \\to 0} \\frac{\\sin x}{x}$.',
      correctAnswer: 1,
      difficulty: 'easy',
      explanation: '$\\frac{d}{dx}\\sin x = \\cos x$, $\\frac{d}{dx} x = 1$. Limit is $\\cos 0 / 1 = 1$.'
    },
    {
      id: 's12-e07',
      type: 'multiple-choice',
      question: 'The Taylor series of $e^x$ centered at $0$ is:',
      options: [
        '$\\sum_{n=0}^{\\infty} x^n$',
        '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$',
        '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$',
        '$\\sum_{n=0}^{\\infty} nx^{n-1}$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$.'
    },
    {
      id: 's12-e08',
      type: 'multiple-choice',
      question: 'The Maclaurin series is a Taylor series centered at:',
      options: [
        '$x = 1$',
        '$x = -1$',
        '$x = 0$',
        'Any point'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Maclaurin series is the special case of Taylor series with $a = 0$.'
    },
    {
      id: 's12-e09',
      type: 'multiple-choice',
      question: 'The inverse function theorem requires that at point $a$:',
      options: [
        '$f(a) = 0$',
        '$f\'\'(a) = 0$',
        '$f\'(a) = 0$',
        '$f\'(a) \\neq 0$'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Non-zero derivative ensures local invertibility.'
    },
    {
      id: 's12-e10',
      type: 'multiple-choice',
      question: 'If $f$ is invertible with $f\'(a) \\neq 0$, then $(f^{-1})\'(f(a)) = $:',
      options: [
        '$1/f\'(a)$',
        '$f\'(a)$',
        '$-f\'(a)$',
        '$f\'(f(a))$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The derivative of the inverse is the reciprocal of the derivative.'
    },
    {
      id: 's12-e11',
      type: 'multiple-choice',
      question: 'Newton\'s method for finding roots uses the iteration:',
      options: [
        '$x_{n+1} = x_n - f(x_n)$',
        '$x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$',
        '$x_{n+1} = f(x_n)$',
        '$x_{n+1} = x_n + f\'(x_n)$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Newton\'s method: $x_{n+1} = x_n - f(x_n)/f\'(x_n)$.'
    },
    {
      id: 's12-e12',
      type: 'multiple-choice',
      question: 'The error in Taylor approximation is given by the:',
      options: [
        'First term',
        'Constant term',
        'Remainder term',
        'Leading coefficient'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The remainder $R_n(x)$ measures the error of the $n$th degree approximation.'
    },
    {
      id: 's12-e13',
      type: 'numeric',
      question: 'The first-order Taylor approximation of $e^x$ at $x = 0$ gives $e^{0.1} \\approx$:',
      correctAnswer: 1.1,
      difficulty: 'easy',
      explanation: '$P_1(x) = 1 + x$. At $x = 0.1$: $1 + 0.1 = 1.1$.'
    },
    {
      id: 's12-e14',
      type: 'multiple-choice',
      question: 'L\'Hôpital\'s rule may need to be applied:',
      options: [
        'Exactly once',
        'Only to polynomials',
        'Never more than twice',
        'Multiple times if the result is still indeterminate'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'If $\\lim f\'/g\'$ is still indeterminate, apply the rule again.'
    },
    {
      id: 's12-e15',
      type: 'multiple-choice',
      question: 'The form $0 \\cdot \\infty$ can be converted to $0/0$ or $\\infty/\\infty$ by:',
      options: [
        'Rewriting as $\\frac{f}{1/g}$ or $\\frac{g}{1/f}$',
        'Adding a constant',
        'Multiplying by $1$',
        'It cannot be converted'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Rewrite $f \\cdot g$ as $f/(1/g)$ to get a form suitable for L\'Hôpital.'
    },
    {
      id: 's12-e16',
      type: 'multiple-choice',
      question: 'The $n$th Taylor polynomial has degree:',
      options: [
        '$n - 1$',
        '$n$',
        '$n + 1$',
        '$2n$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The $n$th Taylor polynomial includes terms up to $(x-a)^n$.'
    },
    {
      id: 's12-e17',
      type: 'multiple-choice',
      question: 'For $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$, L\'Hôpital gives:',
      options: [
        '$0$',
        '$1$',
        '$1/2$',
        '$\\infty$'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'First: $\\frac{\\sin x}{2x}$, still $0/0$. Second: $\\frac{\\cos x}{2} \\to 1/2$.'
    },
    {
      id: 's12-e18',
      type: 'multiple-choice',
      question: 'The Taylor polynomial is the unique polynomial of degree $\\leq n$ that:',
      options: [
        'Passes through $(a, f(a))$',
        'Is always positive',
        'Minimizes the error',
        'Has the same derivatives as $f$ at $a$ up to order $n$'
      ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Taylor polynomial matches $f$ and its first $n$ derivatives at $a$.'
    },
    {
      id: 's12-e19',
      type: 'numeric',
      question: 'Using $\\sin x \\approx x$ near $0$, approximate $\\sin(0.1)$ to 1 decimal.',
      correctAnswer: 0.1,
      difficulty: 'easy',
      explanation: 'The first-order approximation gives $\\sin(0.1) \\approx 0.1$.'
    },
    {
      id: 's12-e20',
      type: 'multiple-choice',
      question: 'The coefficient of $(x-a)^n$ in the Taylor series is:',
      options: [
        '$\\frac{f^{(n)}(a)}{n!}$',
        '$f^{(n)}(a)$',
        '$n! f^{(n)}(a)$',
        '$f(a)^n$'
      ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The coefficient is $f^{(n)}(a)/n!$ in the Taylor series.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's12-m01',
      type: 'multiple-choice',
      question: 'The Lagrange remainder for the $n$th Taylor polynomial is:',
      options: [
        '$\\frac{f^{(n)}(a)}{n!}(x-a)^n$',
        '$\\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ for some $c$ between $a$ and $x$',
        '$f(x) - f(a)$',
        '$0$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Lagrange form involves the $(n+1)$st derivative at an intermediate point.'
    },
    {
      id: 's12-m02',
      type: 'multiple-choice',
      question: 'The Cauchy remainder formula for Taylor\'s theorem is:',
      options: [
        '$f^{(n)}(a)(x-a)^n$',
        '$\\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$',
        '$\\frac{f^{(n+1)}(c)}{n!}(x-c)^n(x-a)$',
        'Does not exist'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Cauchy form: $R_n = \\frac{f^{(n+1)}(c)}{n!}(x-c)^n(x-a)$ for some $c$ between $a$ and $x$.'
    },
    {
      id: 's12-m03',
      type: 'numeric',
      question: 'Using L\'Hôpital, find $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$.',
      correctAnswer: 0.5,
      difficulty: 'medium',
      explanation: 'First: $\\frac{e^x - 1}{2x}$, still $0/0$. Second: $\\frac{e^x}{2} \\to 1/2$.'
    },
    {
      id: 's12-m04',
      type: 'multiple-choice',
      question: 'To evaluate $\\lim_{x \\to 0^+} x \\ln x$ using L\'Hôpital:',
      options: [
        'Use squeeze theorem',
        'Apply directly',
        'The limit does not exist',
        'Write as $\\frac{\\ln x}{1/x}$ and apply the rule'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Convert $x \\ln x = \\frac{\\ln x}{1/x}$ (form $-\\infty/\\infty$), then apply L\'Hôpital.'
    },
    {
      id: 's12-m05',
      type: 'multiple-choice',
      question: '$\\lim_{x \\to 0^+} x \\ln x = $:',
      options: [
        '$0$',
        '$-\\infty$',
        '$1$',
        '$\\infty$'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Via L\'Hôpital: $\\frac{\\ln x}{1/x} \\to \\frac{1/x}{-1/x^2} = -x \\to 0$.'
    },
    {
      id: 's12-m06',
      type: 'multiple-choice',
      question: 'For $\\lim_{x \\to \\infty} x^{1/x}$ (form $\\infty^0$):',
      options: [
        'The limit is $\\infty$',
        'Write as $e^{\\ln(x)/x}$ and find $\\lim \\ln(x)/x$',
        'The limit is $0$',
        'L\'Hôpital cannot be used'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$x^{1/x} = e^{\\ln x / x}$. Since $\\ln x / x \\to 0$ (L\'Hôpital), limit is $e^0 = 1$.'
    },
    {
      id: 's12-m07',
      type: 'multiple-choice',
      question: 'The second-order Taylor polynomial of $\\cos x$ at $0$ is:',
      options: [
        '$1$',
        '$1 - x^2$',
        '$1 - x^2/2$',
        '$1 + x^2/2$'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\cos x = 1 - x^2/2! + \\cdots = 1 - x^2/2 + O(x^4)$.'
    },
    {
      id: 's12-m08',
      type: 'multiple-choice',
      question: 'Using Taylor series, $\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3} = $:',
      options: [
        '$0$',
        '$-1$',
        '$1/6$',
        '$-1/6$'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '$\\sin x = x - x^3/6 + O(x^5)$. So $(\\sin x - x)/x^3 \\to -1/6$.'
    },
    {
      id: 's12-m09',
      type: 'multiple-choice',
      question: 'Newton\'s method converges quadratically near a simple root, meaning:',
      options: [
        'Error squares each iteration (roughly)',
        'Error halves each iteration',
        'Error is constant',
        'Convergence is linear'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Quadratic convergence: $|e_{n+1}| \\approx C|e_n|^2$, so errors square (roughly).'
    },
    {
      id: 's12-m10',
      type: 'numeric',
      question: 'One iteration of Newton\'s method for $f(x) = x^2 - 2$ starting at $x_0 = 1$ gives $x_1 = $:',
      correctAnswer: 1.5,
      difficulty: 'medium',
      explanation: '$x_1 = x_0 - f(x_0)/f\'(x_0) = 1 - (1-2)/(2) = 1 - (-1)/2 = 1.5$.'
    },
    {
      id: 's12-m11',
      type: 'multiple-choice',
      question: 'The binomial series $(1+x)^\\alpha$ for general $\\alpha$ is:',
      options: [
        '$\\sum_{n=0}^{\\infty} x^n$',
        '$\\sum_{n=0}^{\\infty} \\binom{\\alpha}{n} x^n$ where $\\binom{\\alpha}{n} = \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-n+1)}{n!}$',
        '$(1+x)^n$ exactly',
        'Only valid for integer $\\alpha$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The generalized binomial series uses generalized binomial coefficients.'
    },
    {
      id: 's12-m12',
      type: 'multiple-choice',
      question: 'Using L\'Hôpital, $\\lim_{x \\to 0} \\frac{\\tan x - x}{x^3} = $:',
      options: [
        '$0$',
        '$1$',
        '$1/3$',
        '$\\infty$'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\tan x = x + x^3/3 + O(x^5)$. So $(\\tan x - x)/x^3 \\to 1/3$.'
    },
    {
      id: 's12-m13',
      type: 'multiple-choice',
      question: 'The error in approximating $e$ by $\\sum_{k=0}^{n} 1/k!$ is bounded by:',
      options: [
        '$1/(n+1)!$',
        '$e/(n+1)!$',
        '$n!$',
        '$3/(n+1)!$'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'By Lagrange remainder with $|e^c| < 3$ for $c \\in (0,1)$: error $< 3/(n+1)!$.'
    },
    {
      id: 's12-m14',
      type: 'multiple-choice',
      question: 'The form $1^\\infty$ is indeterminate. To evaluate $\\lim (1 + 1/n)^n$:',
      options: [
        'Write as $e^{n \\ln(1 + 1/n)}$ and evaluate the exponent',
        'The limit is $1$',
        'The limit is $\\infty$',
        'The limit does not exist'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '$n \\ln(1 + 1/n) \\to 1$ (by L\'Hôpital or series), so limit is $e^1 = e$.'
    },
    {
      id: 's12-m15',
      type: 'multiple-choice',
      question: 'For $\\lim_{x \\to 0} (1 + x)^{1/x}$ (form $1^\\infty$):',
      options: [
        'Limit is $1$',
        'Limit is $e$',
        'Limit is $\\infty$',
        'Limit does not exist'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\frac{1}{x}\\ln(1+x) \\to 1$, so limit is $e^1 = e$.'
    },
    {
      id: 's12-m16',
      type: 'numeric',
      question: 'Using $\\ln(1+x) \\approx x - x^2/2$, approximate $\\ln(1.1)$ to 2 decimals.',
      correctAnswer: 0.095,
      numericRange: { min: 0.09, max: 0.10 },
      difficulty: 'medium',
      explanation: '$\\ln(1.1) \\approx 0.1 - 0.01/2 = 0.1 - 0.005 = 0.095$.'
    },
    {
      id: 's12-m17',
      type: 'multiple-choice',
      question: 'The integral form of the remainder is:',
      options: [
        '$R_n(x) = f^{(n)}(a)$',
        '$R_n(x) = \\int_0^1 f(t) dt$',
        '$R_n(x) = \\int_a^x \\frac{(x-t)^n}{n!} f^{(n+1)}(t) dt$',
        'Does not exist'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The integral remainder formula involves integrating the $(n+1)$st derivative.'
    },
    {
      id: 's12-m18',
      type: 'multiple-choice',
      question: 'If $f^{(n)}(a) = 0$ for all $n$, and $f$ is analytic, then:',
      options: [
        '$f$ is any polynomial',
        'Nothing can be concluded',
        '$f$ is linear',
        '$f \\equiv 0$ in a neighborhood of $a$'
      ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'If all derivatives vanish and $f$ equals its Taylor series, then $f = 0$ near $a$.'
    },
    {
      id: 's12-m19',
      type: 'multiple-choice',
      question: 'L\'Hôpital\'s rule requires that:',
      options: [
        '$f, g$ are differentiable near $a$ (except possibly at $a$) and $g\' \\neq 0$ near $a$',
        'Both $f$ and $g$ are continuous',
        '$f(a) = g(a) = 0$',
        '$f\'(a) = g\'(a)$'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'We need differentiability near $a$ and $g\'$ nonzero (except possibly at $a$).'
    },
    {
      id: 's12-m20',
      type: 'multiple-choice',
      question: 'The radius of convergence of the Taylor series for $1/(1-x)$ at $a = 0$ is:',
      options: [
        '$0$',
        '$1$',
        '$\\infty$',
        '$e$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$1/(1-x) = \\sum x^n$ converges for $|x| < 1$, so $R = 1$.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's12-h01',
      type: 'multiple-choice',
      question: 'Taylor\'s theorem can be viewed as a generalization of:',
      options: [
        'The Fundamental Theorem of Calculus',
        'The Intermediate Value Theorem',
        'The Mean Value Theorem',
        'The Extreme Value Theorem'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Taylor\'s theorem generalizes MVT (which is the $n = 0$ case).'
    },
    {
      id: 's12-h02',
      type: 'multiple-choice',
      question: 'The Peano form of the remainder states that if $f$ is $n$ times differentiable at $a$:',
      options: [
        'The remainder is $f^{(n)}(a)$',
        '$f(x) = P_n(x) + O((x-a)^{n+1})$',
        '$f(x) = P_n(x)$ exactly',
        '$f(x) = P_n(x) + o((x-a)^n)$ as $x \\to a$'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Peano form uses little-o notation: the error is $o((x-a)^n)$.'
    },
    {
      id: 's12-h03',
      type: 'multiple-choice',
      question: 'If $f$ is $C^\\infty$ but not analytic at $a$, then:',
      options: [
        'The Taylor series converges but not to $f$',
        'The Taylor series diverges',
        'All derivatives are zero',
        '$f$ is not differentiable'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The Taylor series may converge to something other than $f$ (e.g., $e^{-1/x^2}$).'
    },
    {
      id: 's12-h04',
      type: 'numeric',
      question: 'Using L\'Hôpital, find $\\lim_{x \\to 0} \\frac{e^x - 1 - x - x^2/2}{x^3}$.',
      correctAnswer: 0.167,
      numericRange: { min: 0.16, max: 0.17 },
      difficulty: 'hard',
      explanation: 'Numerator starts at $x^3/6 + O(x^4)$, so limit is $1/6 \\approx 0.167$.'
    },
    {
      id: 's12-h05',
      type: 'multiple-choice',
      question: 'Newton\'s method may fail if:',
      options: [
        '$f$ is linear',
        '$f\'(r) = 0$ at the root $r$',
        '$f$ is analytic',
        'The initial guess is exact'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'If the derivative is zero at the root (multiple root), convergence slows or fails.'
    },
    {
      id: 's12-h06',
      type: 'multiple-choice',
      question: 'For a root of multiplicity $m > 1$, Newton\'s method converges:',
      options: [
        'Quadratically',
        'Not at all',
        'Linearly',
        'Cubically'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'For multiple roots, Newton\'s method has only linear convergence.'
    },
    {
      id: 's12-h07',
      type: 'multiple-choice',
      question: 'The Halley\'s method has convergence order:',
      options: [
        '$1$',
        '$2$',
        '$4$',
        '$3$'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Halley\'s method uses second derivative information for cubic convergence.'
    },
    {
      id: 's12-h08',
      type: 'multiple-choice',
      question: 'The Borel theorem states that given any sequence $\\{a_n\\}$:',
      options: [
        'There exists a $C^\\infty$ function with $f^{(n)}(0) = a_n$',
        'No such function exists',
        'The function must be analytic',
        '$a_n$ must be bounded'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Borel\'s theorem: any sequence can be the Taylor coefficients (times $n!$) of some $C^\\infty$ function.'
    },
    {
      id: 's12-h09',
      type: 'multiple-choice',
      question: 'The error function $\\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_0^x e^{-t^2} dt$ has Taylor series:',
      options: [
        'With finite radius of convergence',
        'With infinite radius of convergence',
        'That diverges everywhere',
        'That equals $e^{-x^2}$'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Since $e^{-t^2}$ is entire, so is $\\text{erf}(x)$, with $R = \\infty$.'
    },
    {
      id: 's12-h10',
      type: 'multiple-choice',
      question: 'L\'Hôpital\'s rule can fail (give wrong answer) if:',
      options: [
        'Applied to non-indeterminate forms',
        'The limit of derivatives doesn\'t exist',
        'Both (A) and (B)',
        'Never fails'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The rule requires indeterminate form and existence of derivative limit.'
    },
    {
      id: 's12-h11',
      type: 'multiple-choice',
      question: 'For $\\lim_{x \\to \\infty} \\frac{x}{e^x}$, applying L\'Hôpital repeatedly:',
      options: [
        'Never terminates',
        'Is not applicable',
        'Gives $1$',
        'Gives $0$ after one application'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: '$\\frac{d}{dx}x = 1$, $\\frac{d}{dx}e^x = e^x$. So $\\frac{1}{e^x} \\to 0$.'
    },
    {
      id: 's12-h12',
      type: 'numeric',
      question: 'Using Taylor, find $\\lim_{x \\to 0} \\frac{\\cos x - 1 + x^2/2}{x^4}$.',
      correctAnswer: 0.042,
      numericRange: { min: 0.04, max: 0.05 },
      difficulty: 'hard',
      explanation: '$\\cos x = 1 - x^2/2 + x^4/24 - \\cdots$. So numerator $\\approx x^4/24$, limit is $1/24 \\approx 0.042$.'
    },
    {
      id: 's12-h13',
      type: 'multiple-choice',
      question: 'The inverse function theorem in higher dimensions requires:',
      options: [
        'The Jacobian determinant to be nonzero',
        'The function to be continuous',
        'The function to be linear',
        'All partial derivatives to be zero'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The Jacobian being nonzero (non-singular) ensures local invertibility.'
    },
    {
      id: 's12-h14',
      type: 'multiple-choice',
      question: 'The implicit function theorem guarantees local solvability of $F(x, y) = 0$ for $y = g(x)$ if:',
      options: [
        '$F = 0$',
        '$\\partial F/\\partial y \\neq 0$ at the point',
        '$F$ is linear',
        '$\\partial F/\\partial x = 0$'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Non-zero partial derivative with respect to $y$ allows solving for $y$.'
    },
    {
      id: 's12-h15',
      type: 'multiple-choice',
      question: 'Asymptotic expansions differ from Taylor series in that:',
      options: [
        'They always converge',
        'They use only integer powers',
        'They may diverge but still provide good approximations',
        'They are unique'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Asymptotic series may diverge but truncating gives accurate approximations.'
    },
    {
      id: 's12-h16',
      type: 'multiple-choice',
      question: 'The Stirling approximation $n! \\approx \\sqrt{2\\pi n}(n/e)^n$ is:',
      options: [
        'Exact',
        'Valid only for small $n$',
        'A Taylor series',
        'An asymptotic expansion'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Stirling\'s formula is an asymptotic approximation for large $n$.'
    },
    {
      id: 's12-h17',
      type: 'numeric',
      question: 'Using Newton\'s method for $x^3 - 2 = 0$ with $x_0 = 1$, find $x_1$ to 2 decimals.',
      correctAnswer: 1.33,
      numericRange: { min: 1.32, max: 1.34 },
      difficulty: 'hard',
      explanation: '$x_1 = 1 - (1 - 2)/(3) = 1 + 1/3 = 4/3 \\approx 1.33$.'
    },
    {
      id: 's12-h18',
      type: 'multiple-choice',
      question: 'A function is called Gevrey class $s$ if its Taylor coefficients satisfy:',
      options: [
        '$|a_n| \\leq C^n (n!)^{s-1}$',
        '$|a_n| \\leq C^n$',
        '$|a_n| = 0$ for large $n$',
        '$|a_n| = 1/n!$'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Gevrey classes interpolate between analytic ($s = 1$) and $C^\\infty$ ($s = \\infty$).'
    },
    {
      id: 's12-h19',
      type: 'multiple-choice',
      question: 'The Bernstein theorem states that a function $f \\in C^\\infty[a,b]$ is analytic if:',
      options: [
        '$f^{(n)}$ is bounded uniformly in $n$',
        '$|f^{(n)}(x)| \\leq M^n n!$ for some $M$ independent of $n$ and $x$',
        '$f$ is monotonic',
        '$f$ is bounded'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Uniform bounds on derivatives of the form $M^n n!$ characterize analytic functions.'
    },
    {
      id: 's12-h20',
      type: 'multiple-choice',
      question: 'Watson\'s lemma provides asymptotics for integrals of the form:',
      options: [
        '$\\int_0^\\infty f(t) dt$',
        '$\\int_{-\\infty}^{\\infty} f(t) dt$',
        '$\\int_0^\\infty e^{-xt} g(t) dt$ as $x \\to \\infty$',
        'Any integral'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Watson\'s lemma gives asymptotic expansions of Laplace-type integrals.'
    }
  ] as QuizQuestion[],
};
