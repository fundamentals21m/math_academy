const n="Integration and Advanced Topics",t="Part 4",e=[{sectionId:13,sectionTitle:"The Riemann Integral",textbookSection:"Section 13",examples:[{id:"ex-4-13-1",type:"example",title:"Computing a Riemann Integral from Definition",statement:"Use the definition of the Riemann integral to show that $\\int_0^1 x^2 \\, dx = \\frac{1}{3}$.",solution:{steps:[{title:"Set up Riemann sums",content:`Use partition $P_n = \\{0, \\frac{1}{n}, \\frac{2}{n}, ..., 1\\}$ with $\\Delta x_k = \\frac{1}{n}$.

Right Riemann sum: $R_n = \\sum_{k=1}^{n} f(\\frac{k}{n}) \\cdot \\frac{1}{n} = \\sum_{k=1}^{n} \\frac{k^2}{n^2} \\cdot \\frac{1}{n}$`},{title:"Simplify using sum formula",content:`$R_n = \\frac{1}{n^3} \\sum_{k=1}^{n} k^2 = \\frac{1}{n^3} \\cdot \\frac{n(n+1)(2n+1)}{6}$
$= \\frac{(n+1)(2n+1)}{6n^2}$
$= \\frac{2n^2 + 3n + 1}{6n^2}$`},{title:"Take limit",content:"$\\lim_{n \\to \\infty} R_n = \\lim_{n \\to \\infty} \\frac{2n^2 + 3n + 1}{6n^2} = \\frac{2}{6} = \\frac{1}{3}$"}],conclusion:"$\\int_0^1 x^2 \\, dx = \\frac{1}{3}$"}},{id:"ex-4-13-2",type:"example",title:"Non-Integrable Function",statement:"Show that the Dirichlet function $f(x) = \\begin{cases} 1 & x \\in \\mathbb{Q} \\\\ 0 & x \\notin \\mathbb{Q} \\end{cases}$ is not Riemann integrable on $[0, 1]$.",solution:{steps:[{title:"Compute upper sums",content:`For any partition $P$, each subinterval $[x_{k-1}, x_k]$ contains rationals.
So $M_k = \\sup\\{f(x) : x \\in [x_{k-1}, x_k]\\} = 1$.
$U(P, f) = \\sum_k M_k \\Delta x_k = \\sum_k \\Delta x_k = 1$`},{title:"Compute lower sums",content:`Each subinterval also contains irrationals.
$m_k = \\inf\\{f(x) : x \\in [x_{k-1}, x_k]\\} = 0$.
$L(P, f) = \\sum_k m_k \\Delta x_k = 0$`},{title:"Conclude non-integrability",content:`For all partitions: $L(P, f) = 0$ and $U(P, f) = 1$.

$\\sup_P L(P, f) = 0 \\neq 1 = \\inf_P U(P, f)$`}],conclusion:"Since the upper and lower integrals differ, $f$ is not Riemann integrable."}}],exercises:[{id:"4-13-1",type:"exercise",number:1,statement:"Prove that every continuous function on $[a, b]$ is Riemann integrable.",solution:{steps:[{title:"Use uniform continuity",content:`By Heine-Cantor theorem, $f$ is uniformly continuous on $[a, b]$.

Given $\\varepsilon > 0$, there exists $\\delta > 0$ such that $|x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\frac{\\varepsilon}{b-a}$.`},{title:"Choose fine partition",content:`Take partition $P$ with $\\|P\\| < \\delta$ (all subintervals have width $< \\delta$).

On each subinterval $[x_{k-1}, x_k]$:
$M_k - m_k = \\sup f - \\inf f \\leq \\frac{\\varepsilon}{b-a}$`},{title:"Bound upper - lower",content:`$U(P, f) - L(P, f) = \\sum_k (M_k - m_k)\\Delta x_k$
$\\leq \\frac{\\varepsilon}{b-a} \\sum_k \\Delta x_k = \\frac{\\varepsilon}{b-a}(b-a) = \\varepsilon$`}],conclusion:"Since $U(P, f) - L(P, f)$ can be made arbitrarily small, $f$ is integrable."}},{id:"4-13-2",type:"exercise",number:2,statement:"Prove that if $f$ is Riemann integrable on $[a, b]$, then $|f|$ is also integrable and $|\\int_a^b f| \\leq \\int_a^b |f|$.",solution:{steps:[{title:"Show |f| is integrable",content:`For any $x, y$: $||f(x)| - |f(y)|| \\leq |f(x) - f(y)|$.

Thus if $M_k, m_k$ are sup/inf of $f$ on $[x_{k-1}, x_k]$:
$\\sup|f| - \\inf|f| \\leq M_k - m_k$

So $U(P, |f|) - L(P, |f|) \\leq U(P, f) - L(P, f)$.

Since $f$ is integrable, so is $|f|$.`},{title:"Prove the inequality",content:`For any partition and any choice of sample points:
$|\\sum f(x_k^*) \\Delta x_k| \\leq \\sum |f(x_k^*)| \\Delta x_k$

Taking limits:
$|\\int_a^b f| \\leq \\int_a^b |f|$`}],conclusion:"The triangle inequality extends to integrals."}}]},{sectionId:14,sectionTitle:"Fundamental Theorem of Calculus",textbookSection:"Section 14",examples:[{id:"ex-4-14-1",type:"example",title:"FTC Part 1",statement:"Let $f$ be continuous on $[a, b]$ and define $F(x) = \\int_a^x f(t) \\, dt$. Prove that $F'(x) = f(x)$.",solution:{steps:[{title:"Form difference quotient",content:`$\\frac{F(x+h) - F(x)}{h} = \\frac{1}{h}\\left[\\int_a^{x+h} f(t)\\,dt - \\int_a^x f(t)\\,dt\\right]$
$= \\frac{1}{h} \\int_x^{x+h} f(t)\\,dt$`},{title:"Apply Mean Value Theorem for Integrals",content:`Since $f$ is continuous, there exists $c_h$ between $x$ and $x+h$ such that:
$\\int_x^{x+h} f(t)\\,dt = f(c_h) \\cdot h$

So $\\frac{F(x+h) - F(x)}{h} = f(c_h)$`},{title:"Take limit",content:`As $h \\to 0$, $c_h \\to x$ (since $c_h$ is between $x$ and $x+h$).

By continuity of $f$: $f(c_h) \\to f(x)$.`}],conclusion:"$F'(x) = f(x)$. The integral function is an antiderivative of $f$."}}],exercises:[{id:"4-14-1",type:"exercise",number:1,statement:"Prove FTC Part 2: If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$, then $\\int_a^b f(x)\\,dx = F(b) - F(a)$.",solution:{steps:[{title:"Define integral function",content:"Let $G(x) = \\int_a^x f(t)\\,dt$. By FTC Part 1, $G'(x) = f(x)$."},{title:"Compare antiderivatives",content:`Since $F'(x) = f(x) = G'(x)$, we have $(F - G)'(x) = 0$ on $(a, b)$.

By a corollary of MVT, $F - G = C$ for some constant $C$.`},{title:"Evaluate the constant",content:`$G(a) = \\int_a^a f(t)\\,dt = 0$
$G(b) = \\int_a^b f(t)\\,dt$

$F(b) - F(a) = (G(b) + C) - (G(a) + C) = G(b) - G(a) = G(b) = \\int_a^b f(t)\\,dt$`}],conclusion:"$\\int_a^b f(x)\\,dx = F(b) - F(a)$"}},{id:"4-14-2",type:"exercise",number:2,statement:"Find $\\frac{d}{dx} \\int_0^{x^2} e^{-t^2} dt$.",solution:{steps:[{title:"Let $F(u) = \\int_0^u e^{-t^2} dt$",content:"By FTC Part 1: $F'(u) = e^{-u^2}$"},{title:"Apply chain rule",content:`We want $\\frac{d}{dx} F(x^2) = F'(x^2) \\cdot \\frac{d}{dx}(x^2)$
$= e^{-(x^2)^2} \\cdot 2x$
$= 2x e^{-x^4}$`}],conclusion:"$\\frac{d}{dx} \\int_0^{x^2} e^{-t^2} dt = 2x e^{-x^4}$"}}]},{sectionId:15,sectionTitle:"Sequences of Functions",textbookSection:"Section 15",examples:[{id:"ex-4-15-1",type:"example",title:"Pointwise vs Uniform Convergence",statement:"Let $f_n(x) = x^n$ on $[0, 1]$. Find the pointwise limit and determine whether convergence is uniform.",solution:{steps:[{title:"Find pointwise limit",content:`For $x \\in [0, 1)$: $\\lim_{n \\to \\infty} x^n = 0$
For $x = 1$: $\\lim_{n \\to \\infty} 1^n = 1$

So $f(x) = \\begin{cases} 0 & 0 \\leq x < 1 \\\\ 1 & x = 1 \\end{cases}$`},{title:"Check uniform convergence",content:`$\\|f_n - f\\|_\\infty = \\sup_{x \\in [0,1]} |f_n(x) - f(x)| = \\sup_{x \\in [0,1)} x^n$

For any $n$, this supremum approaches 1 as $x \\to 1^-$.

So $\\|f_n - f\\|_\\infty = 1$ for all $n$.`},{title:"Conclude",content:"Since $\\|f_n - f\\|_\\infty = 1 \\not\\to 0$, convergence is not uniform."}],conclusion:"$(f_n)$ converges pointwise but not uniformly. Note that each $f_n$ is continuous, but $f$ is not."}},{id:"ex-4-15-2",type:"example",title:"Weierstrass M-test",statement:"Prove that $\\sum_{n=1}^{\\infty} \\frac{\\sin(nx)}{n^2}$ converges uniformly on $\\mathbb{R}$.",solution:{steps:[{title:"Find bounds",content:"$|\\frac{\\sin(nx)}{n^2}| \\leq \\frac{1}{n^2}$ for all $x \\in \\mathbb{R}$."},{title:"Check convergence of bound series",content:"$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ converges (p-series with $p = 2 > 1$)."},{title:"Apply Weierstrass M-test",content:"Since $|f_n(x)| \\leq M_n = \\frac{1}{n^2}$ and $\\sum M_n$ converges, by the Weierstrass M-test, $\\sum \\frac{\\sin(nx)}{n^2}$ converges uniformly."}],conclusion:"The series converges uniformly, and since each term is continuous, the sum is continuous."}}],exercises:[{id:"4-15-1",type:"exercise",number:1,statement:"Prove that if $(f_n)$ converges uniformly to $f$ on $[a, b]$ and each $f_n$ is continuous, then $f$ is continuous.",solution:{steps:[{title:"Set up",content:"Let $x_0 \\in [a, b]$ and $\\varepsilon > 0$. We want to show $|f(x) - f(x_0)| < \\varepsilon$ for $x$ near $x_0$."},{title:"Use uniform convergence",content:`Choose $N$ such that $\\|f_N - f\\|_\\infty < \\frac{\\varepsilon}{3}$.

Then for all $x$: $|f_N(x) - f(x)| < \\frac{\\varepsilon}{3}$.`},{title:"Use continuity of $f_N$",content:`Since $f_N$ is continuous at $x_0$, there exists $\\delta > 0$ such that:
$|x - x_0| < \\delta \\Rightarrow |f_N(x) - f_N(x_0)| < \\frac{\\varepsilon}{3}$`},{title:"Combine with triangle inequality",content:`For $|x - x_0| < \\delta$:
$|f(x) - f(x_0)| \\leq |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)|$
$< \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} = \\varepsilon$`}],conclusion:"The uniform limit of continuous functions is continuous."}},{id:"4-15-2",type:"exercise",number:2,statement:"Prove that if $(f_n)$ converges uniformly to $f$ on $[a, b]$ and each $f_n$ is integrable, then $\\lim_{n \\to \\infty} \\int_a^b f_n = \\int_a^b f$.",solution:{steps:[{title:"Bound the difference of integrals",content:`$|\\int_a^b f_n - \\int_a^b f| = |\\int_a^b (f_n - f)|$
$\\leq \\int_a^b |f_n - f|$
$\\leq \\int_a^b \\|f_n - f\\|_\\infty$
$= \\|f_n - f\\|_\\infty \\cdot (b - a)$`},{title:"Apply uniform convergence",content:`Given $\\varepsilon > 0$, choose $N$ such that $\\|f_n - f\\|_\\infty < \\frac{\\varepsilon}{b-a}$ for $n > N$.

Then $|\\int_a^b f_n - \\int_a^b f| < \\varepsilon$.`}],conclusion:"Uniform convergence allows interchange of limit and integral."}},{id:"4-15-3",type:"exercise",number:3,statement:"State and prove the theorem on term-by-term differentiation of uniformly convergent series.",solution:{steps:[{title:"State the theorem",content:`Let $f_n$ be differentiable on $[a, b]$ with $f_n'$ continuous. If:
1. $(f_n)$ converges pointwise at some $x_0 \\in [a, b]$
2. $(f_n')$ converges uniformly on $[a, b]$

Then $(f_n)$ converges uniformly on $[a, b]$ to a differentiable function $f$, and $f' = \\lim f_n'$.`},{title:"Proof sketch",content:`Let $g = \\lim f_n'$ (uniform). Define $F(x) = \\lim_{n \\to \\infty} f_n(x_0) + \\int_{x_0}^x g(t)\\,dt$.

By FTC, $F' = g$.

By the integration theorem, $f_n(x) = f_n(x_0) + \\int_{x_0}^x f_n'(t)\\,dt \\to f_n(x_0) + \\int_{x_0}^x g(t)\\,dt = F(x)$.

Convergence is uniform by careful estimation.`}],conclusion:"Under these conditions, $(\\sum f_n)' = \\sum f_n'$."}}]}],i={partId:4,partTitle:n,textbookChapter:t,sections:e};export{i as p};
