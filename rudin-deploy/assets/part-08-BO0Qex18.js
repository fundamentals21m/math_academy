const n="Some Special Functions",t="Chapter 8",e=[{sectionId:53,sectionTitle:"Power Series",textbookSection:"8.1-8.5",examples:[{id:"ex-8-53-1",type:"example",title:"Differentiation of Power Series",statement:"Show that a power series can be differentiated term by term within its radius of convergence.",solution:{steps:[{title:"Setup",content:"Let $f(x) = \\sum_{n=0}^{\\infty} c_n x^n$ with radius of convergence $R > 0$."},{title:"Claim",content:`$f'(x) = \\sum_{n=1}^{\\infty} n c_n x^{n-1}$ for $|x| < R$.

Moreover, the differentiated series has the same radius of convergence.`},{title:"Proof sketch",content:`For $|x| < r < R$, the series $\\sum n c_n x^{n-1}$ converges uniformly on $[-r, r]$ by the Weierstrass M-test.

By the theorem on term-by-term differentiation of uniformly convergent series, $f'$ equals the term-by-term derivative.`},{title:"Same radius",content:`If $\\limsup |c_n|^{1/n} = 1/R$, then $\\limsup |nc_n|^{1/n} = \\limsup n^{1/n} |c_n|^{1/n} = 1 \\cdot 1/R = 1/R$.

So the radius of convergence is preserved.`}],conclusion:"Power series are infinitely differentiable within their radius of convergence."}}],exercises:[{id:"8-53-1",type:"exercise",number:1,statement:"Define $f(x) = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$. Prove that $f(x) = e^x$ by showing $f$ satisfies $f' = f$ and $f(0) = 1$.",solution:{steps:[{title:"Verify f(0) = 1",content:"$f(0) = \\sum_{n=0}^{\\infty} \\frac{0^n}{n!} = \\frac{0^0}{0!} = 1$."},{title:"Differentiate",content:`$f'(x) = \\sum_{n=1}^{\\infty} \\frac{n x^{n-1}}{n!} = \\sum_{n=1}^{\\infty} \\frac{x^{n-1}}{(n-1)!}$

Let $m = n - 1$: $f'(x) = \\sum_{m=0}^{\\infty} \\frac{x^m}{m!} = f(x)$.`},{title:"Uniqueness",content:`The ODE $y' = y$ with $y(0) = 1$ has unique solution $y = e^x$.

Since $f$ satisfies this ODE, $f(x) = e^x$.`}],conclusion:"$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ for all $x \\in \\mathbb{R}$."}},{id:"8-53-2",type:"exercise",number:2,statement:"Prove that the series $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ converges for $-1 \\leq x < 1$ and that $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} = \\ln 2$.",solution:{steps:[{title:"Radius of convergence",content:`By the ratio test: $\\lim \\frac{|x|^{n+1}/(n+1)}{|x|^n/n} = |x| \\cdot \\frac{n}{n+1} = |x|$.

So $R = 1$.`},{title:"At x = 1",content:"$\\sum \\frac{1}{n}$ is the harmonic series, which diverges."},{title:"At x = -1",content:"$\\sum \\frac{(-1)^n}{n}$ converges by the alternating series test."},{title:"Relate to ln(1+x)",content:`For $|x| < 1$: $\\ln(1 + x) = \\int_0^x \\frac{dt}{1+t} = \\int_0^x \\sum_{n=0}^{\\infty} (-t)^n \\, dt$

$= \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{n+1}}{n+1} = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}$`},{title:"Abel's theorem at x = 1",content:`By Abel's theorem (continuity of power series at boundary where series converges):

$\\lim_{x \\to 1^-} \\ln(1+x) = \\ln 2$

And $\\lim_{x \\to 1^-} \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n} = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$.`}],conclusion:"$\\ln 2 = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$"}}]},{sectionId:54,sectionTitle:"The Exponential and Logarithmic Functions",textbookSection:"8.6",examples:[],exercises:[{id:"8-54-1",type:"exercise",number:3,statement:"Prove that $e$ is irrational.",solution:{steps:[{title:"Assume e = p/q",content:"Suppose $e = p/q$ where $p, q$ are positive integers."},{title:"Consider q! e",content:`$q! e = q! \\sum_{n=0}^{\\infty} \\frac{1}{n!} = \\sum_{n=0}^{q} \\frac{q!}{n!} + \\sum_{n=q+1}^{\\infty} \\frac{q!}{n!}$

The first sum is an integer.

If $e = p/q$, then $q! e = (q-1)! p$ is an integer, so the second sum must be an integer.`},{title:"Bound the tail",content:`$\\sum_{n=q+1}^{\\infty} \\frac{q!}{n!} = \\frac{1}{q+1} + \\frac{1}{(q+1)(q+2)} + \\cdots$

$< \\frac{1}{q+1} + \\frac{1}{(q+1)^2} + \\cdots = \\frac{1}{q} < 1$`},{title:"Contradiction",content:`The tail is positive and less than 1, so it cannot be an integer.

This contradicts our assumption that $e = p/q$.`}],conclusion:"$e$ is irrational. (In fact, $e$ is transcendental, proved by Hermite in 1873.)"}},{id:"8-54-2",type:"exercise",number:4,statement:"If $\\alpha$ is real and $-1 < x \\leq 1$, prove that $(1 + x)^\\alpha = \\sum_{n=0}^{\\infty} \\binom{\\alpha}{n} x^n$ where $\\binom{\\alpha}{n} = \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-n+1)}{n!}$.",solution:{steps:[{title:"Define f(x)",content:`Let $f(x) = \\sum_{n=0}^{\\infty} \\binom{\\alpha}{n} x^n$.

Verify: $\\binom{\\alpha}{0} = 1$ (empty product), so $f(0) = 1$.`},{title:"Compute f'(x)",content:`$f'(x) = \\sum_{n=1}^{\\infty} n \\binom{\\alpha}{n} x^{n-1}$

Note: $n \\binom{\\alpha}{n} = \\alpha \\binom{\\alpha-1}{n-1}$.

So $f'(x) = \\alpha \\sum_{n=1}^{\\infty} \\binom{\\alpha-1}{n-1} x^{n-1} = \\alpha \\sum_{m=0}^{\\infty} \\binom{\\alpha-1}{m} x^m$.`},{title:"Show (1+x)f'(x) = αf(x)",content:`Using the identity $\\binom{\\alpha}{n} + \\binom{\\alpha}{n-1} = \\binom{\\alpha+1}{n}$:

$(1 + x)f'(x) = \\alpha f(x)$.`},{title:"Solve the ODE",content:`Let $g(x) = \\frac{f(x)}{(1+x)^\\alpha}$.

$g'(x) = \\frac{f'(x)(1+x)^\\alpha - f(x)\\alpha(1+x)^{\\alpha-1}}{(1+x)^{2\\alpha}}$

$= \\frac{f'(x)(1+x) - \\alpha f(x)}{(1+x)^{\\alpha+1}} = 0$.

So $g$ is constant: $g(x) = g(0) = 1$.`}],conclusion:"$f(x) = (1+x)^\\alpha$ for $|x| < 1$. Abel's theorem extends to $x = 1$ when the series converges."}}]},{sectionId:55,sectionTitle:"The Trigonometric Functions",textbookSection:"8.7-8.8",examples:[],exercises:[{id:"8-55-1",type:"exercise",number:5,statement:"Prove that $\\cos x = \\prod_{n=0}^{\\infty} \\left(1 - \\frac{4x^2}{(2n+1)^2 \\pi^2}\\right)$ for all $x$.",solution:{steps:[{title:"Zeros of cosine",content:`$\\cos x = 0$ when $x = \\pm\\frac{\\pi}{2}, \\pm\\frac{3\\pi}{2}, \\pm\\frac{5\\pi}{2}, \\ldots$

That is, $x = \\pm\\frac{(2n+1)\\pi}{2}$ for $n = 0, 1, 2, \\ldots$`},{title:"Product form",content:`By Weierstrass factorization theory, entire functions can be written as products over their zeros.

For $\\cos$: $\\cos x = \\prod_{n=0}^{\\infty} \\left(1 - \\frac{x^2}{((2n+1)\\pi/2)^2}\\right)$

$= \\prod_{n=0}^{\\infty} \\left(1 - \\frac{4x^2}{(2n+1)^2\\pi^2}\\right)$`},{title:"Convergence",content:"The product converges absolutely since $\\sum \\frac{1}{(2n+1)^2}$ converges."},{title:"Verify at x = 0",content:"At $x = 0$: product equals $1 = \\cos 0$. ✓"}],conclusion:"This infinite product representation is useful for deriving $\\zeta(2) = \\pi^2/6$."}},{id:"8-55-2",type:"exercise",number:6,statement:"Prove that $\\sin x$ and $\\cos x$ are the only functions that satisfy $f'' + f = 0$ with $f(0) = 0, f'(0) = 1$ and $f(0) = 1, f'(0) = 0$ respectively.",solution:{steps:[{title:"Existence",content:`Verify: $(\\sin x)'' + \\sin x = -\\sin x + \\sin x = 0$. ✓
$(\\cos x)'' + \\cos x = -\\cos x + \\cos x = 0$. ✓

Initial conditions are satisfied.`},{title:"Uniqueness",content:`The ODE $f'' + f = 0$ is linear, second order, with constant coefficients.

General solution: $f(x) = A\\cos x + B\\sin x$.`},{title:"Apply initial conditions",content:`For $f(0) = 0, f'(0) = 1$:
$A = 0$, $B = 1$, so $f = \\sin x$.

For $f(0) = 1, f'(0) = 0$:
$A = 1$, $B = 0$, so $f = \\cos x$.`}],conclusion:"The trigonometric functions are uniquely determined by their differential equation and initial conditions."}}]},{sectionId:57,sectionTitle:"Fourier Series",textbookSection:"8.11-8.16",examples:[],exercises:[{id:"8-57-1",type:"exercise",number:7,statement:"If $f(x) = x$ for $-\\pi < x \\leq \\pi$, compute the Fourier series of $f$ and use it to find $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$.",solution:{steps:[{title:"Fourier coefficients",content:`$a_0 = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} x \\, dx = 0$ (odd function).

$a_n = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} x \\cos(nx) \\, dx = 0$ (odd $\\times$ even = odd).

$b_n = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} x \\sin(nx) \\, dx = \\frac{2}{\\pi} \\int_0^{\\pi} x \\sin(nx) \\, dx$.`},{title:"Compute b_n",content:`Integration by parts:
$b_n = \\frac{2}{\\pi} \\left[-\\frac{x \\cos(nx)}{n}\\Big|_0^\\pi + \\frac{1}{n}\\int_0^\\pi \\cos(nx) \\, dx\\right]$

$= \\frac{2}{\\pi} \\left[-\\frac{\\pi(-1)^n}{n} + 0\\right] = \\frac{2(-1)^{n+1}}{n}$`},{title:"Fourier series",content:"$x = \\sum_{n=1}^{\\infty} \\frac{2(-1)^{n+1}}{n} \\sin(nx) = 2\\left(\\sin x - \\frac{\\sin 2x}{2} + \\frac{\\sin 3x}{3} - \\cdots\\right)$"},{title:"Apply Parseval",content:`Parseval's identity: $\\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} |f(x)|^2 \\, dx = \\frac{a_0^2}{2} + \\sum_{n=1}^{\\infty} (a_n^2 + b_n^2)$

LHS: $\\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} x^2 \\, dx = \\frac{2\\pi^2}{3}$

RHS: $\\sum_{n=1}^{\\infty} \\frac{4}{n^2}$`},{title:"Solve for sum",content:`$\\frac{2\\pi^2}{3} = 4 \\sum_{n=1}^{\\infty} \\frac{1}{n^2}$

$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$`}],conclusion:"This is Euler's famous result: $\\zeta(2) = 1 + \\frac{1}{4} + \\frac{1}{9} + \\cdots = \\frac{\\pi^2}{6}$."}}]},{sectionId:58,sectionTitle:"The Gamma Function",textbookSection:"8.17-8.21",examples:[],exercises:[{id:"8-58-1",type:"exercise",number:8,statement:"Prove that $\\Gamma(x+1) = x\\Gamma(x)$ for $x > 0$, and that $\\Gamma(n+1) = n!$ for non-negative integers $n$.",solution:{steps:[{title:"Definition",content:"$\\Gamma(x) = \\int_0^{\\infty} t^{x-1} e^{-t} \\, dt$ for $x > 0$."},{title:"Integration by parts",content:`$\\Gamma(x+1) = \\int_0^{\\infty} t^x e^{-t} \\, dt$

Let $u = t^x$, $dv = e^{-t} dt$. Then $du = xt^{x-1} dt$, $v = -e^{-t}$.

$= [-t^x e^{-t}]_0^{\\infty} + x\\int_0^{\\infty} t^{x-1} e^{-t} \\, dt$

$= 0 + x\\Gamma(x) = x\\Gamma(x)$.`},{title:"Base case",content:"$\\Gamma(1) = \\int_0^{\\infty} e^{-t} \\, dt = [-e^{-t}]_0^{\\infty} = 1 = 0!$"},{title:"Induction",content:`$\\Gamma(2) = 1 \\cdot \\Gamma(1) = 1 = 1!$
$\\Gamma(3) = 2 \\cdot \\Gamma(2) = 2 = 2!$
$\\Gamma(n+1) = n \\cdot \\Gamma(n) = n \\cdot (n-1)! = n!$`}],conclusion:"The Gamma function extends the factorial to non-integers: $\\Gamma(x+1) = x!$ in a sense."}},{id:"8-58-2",type:"exercise",number:9,statement:"Show that $\\Gamma(1/2) = \\sqrt{\\pi}$.",solution:{steps:[{title:"Write the integral",content:"$\\Gamma(1/2) = \\int_0^{\\infty} t^{-1/2} e^{-t} \\, dt$"},{title:"Substitute u = √t",content:`Let $t = u^2$, so $dt = 2u \\, du$.

$\\Gamma(1/2) = \\int_0^{\\infty} \\frac{1}{u} e^{-u^2} \\cdot 2u \\, du = 2\\int_0^{\\infty} e^{-u^2} \\, du$`},{title:"Gaussian integral",content:`The Gaussian integral: $\\int_{-\\infty}^{\\infty} e^{-u^2} \\, du = \\sqrt{\\pi}$.

By symmetry: $\\int_0^{\\infty} e^{-u^2} \\, du = \\frac{\\sqrt{\\pi}}{2}$.`},{title:"Conclude",content:"$\\Gamma(1/2) = 2 \\cdot \\frac{\\sqrt{\\pi}}{2} = \\sqrt{\\pi}$."}],conclusion:"$\\Gamma(1/2) = \\sqrt{\\pi}$, so $(-1/2)! = \\sqrt{\\pi}$ in the extended sense."}}]}],i={partId:8,partTitle:n,textbookChapter:t,sections:e};export{i as p};
