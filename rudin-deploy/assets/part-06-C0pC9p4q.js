const t="The Riemann-Stieltjes Integral",e="Chapter 6",n=[{sectionId:41,sectionTitle:"Definition and Existence of the Integral",textbookSection:"6.1-6.11",examples:[{id:"ex-6-41-1",type:"example",title:"Upper and Lower Sums",statement:"Explain the relationship between upper and lower Riemann-Stieltjes sums and integrability.",solution:{steps:[{title:"Definitions",content:`For a partition $P = \\{x_0, \\ldots, x_n\\}$ of $[a,b]$:

$U(P, f, \\alpha) = \\sum_{i=1}^n M_i \\Delta\\alpha_i$ where $M_i = \\sup_{x_{i-1} \\leq x \\leq x_i} f(x)$

$L(P, f, \\alpha) = \\sum_{i=1}^n m_i \\Delta\\alpha_i$ where $m_i = \\inf_{x_{i-1} \\leq x \\leq x_i} f(x)$`},{title:"Key inequality",content:`For any partitions $P_1, P_2$:
$L(P_1, f, \\alpha) \\leq U(P_2, f, \\alpha)$

This follows because refinement decreases upper sums and increases lower sums.`},{title:"Integrability criterion",content:"$f \\in \\mathscr{R}(\\alpha)$ if and only if for every $\\epsilon > 0$ there exists a partition $P$ with $U(P, f, \\alpha) - L(P, f, \\alpha) < \\epsilon$."}],conclusion:"The integral exists precisely when upper and lower sums can be made arbitrarily close."}}],exercises:[{id:"6-41-1",type:"exercise",number:1,statement:"Suppose $\\alpha$ increases on $[a, b]$, $a \\leq x_0 \\leq b$, $\\alpha$ is continuous at $x_0$, $f(x_0) = 1$, and $f(x) = 0$ if $x \\neq x_0$. Prove that $f \\in \\mathscr{R}(\\alpha)$ and $\\int f \\, d\\alpha = 0$.",solution:{steps:[{title:"Choose partition",content:"Given $\\epsilon > 0$, by continuity of $\\alpha$ at $x_0$, choose $\\delta > 0$ such that $|x - x_0| < \\delta$ implies $|\\alpha(x) - \\alpha(x_0)| < \\epsilon$."},{title:"Construct partition P",content:`Let $P$ include $x_0 - \\delta, x_0, x_0 + \\delta$ (adjusted to stay in $[a,b]$).

On intervals not containing $x_0$: $M_i = m_i = 0$.
On the interval containing $x_0$: $M_i = 1$, $m_i = 0$.`},{title:"Estimate U - L",content:`$U(P, f, \\alpha) - L(P, f, \\alpha) = 1 \\cdot \\Delta\\alpha < \\epsilon$

where $\\Delta\\alpha$ is the $\\alpha$-length of the interval containing $x_0$.`},{title:"Conclude",content:`Since $\\epsilon$ is arbitrary, $f \\in \\mathscr{R}(\\alpha)$.

Also, $0 \\leq \\int f \\, d\\alpha \\leq U(P, f, \\alpha) < \\epsilon$ for all $\\epsilon$, so $\\int f \\, d\\alpha = 0$.`}],conclusion:"A single discontinuity doesn't affect the integral when $\\alpha$ is continuous there."}},{id:"6-41-2",type:"exercise",number:2,statement:"Suppose $f \\geq 0$, $f$ is continuous on $[a, b]$, and $\\int_a^b f(x) \\, dx = 0$. Prove that $f(x) = 0$ for all $x \\in [a, b]$.",solution:{steps:[{title:"Assume f(x_0) > 0",content:"Suppose there exists $x_0 \\in [a, b]$ with $f(x_0) = c > 0$."},{title:"Use continuity",content:"By continuity, there exists $\\delta > 0$ such that $|x - x_0| < \\delta$ implies $f(x) > c/2$."},{title:"Lower bound the integral",content:`Let $I = [x_0 - \\delta, x_0 + \\delta] \\cap [a, b]$ have length $\\ell > 0$.

$\\int_a^b f \\, dx \\geq \\int_I f \\, dx \\geq \\frac{c}{2} \\cdot \\ell > 0$.`},{title:"Contradiction",content:"This contradicts $\\int_a^b f \\, dx = 0$."}],conclusion:"If $f \\geq 0$ is continuous and has zero integral, then $f \\equiv 0$."}},{id:"6-41-3",type:"exercise",number:3,statement:`Define three functions $\\beta_1, \\beta_2, \\beta_3$ as follows: $\\beta_j(x) = 0$ if $x < 0$, $\\beta_j(x) = 1$ if $x > 0$; $\\beta_1(0) = 0$, $\\beta_2(0) = 1$, $\\beta_3(0) = \\frac{1}{2}$. Let $f$ be a bounded function on $[-1, 1]$.

(a) Prove that $f \\in \\mathscr{R}(\\beta_1)$ if and only if $f(0+) = f(0)$.
(b) State and prove analogous results for $\\beta_2$ and $\\beta_3$.`,solution:{steps:[{title:"Part (a)",content:`For $\\beta_1$: The jump is at $0$ from $0$ to $1$. The Stieltjes integral only 'sees' $f$ where $\\beta_1$ jumps.

For partitions with $0$ as a point, the contribution near $0$ depends on $\\lim_{x \\to 0^+} f(x)$ and $f(0)$.

$f \\in \\mathscr{R}(\\beta_1)$ iff $f(0+)$ exists and equals $f(0)$.

In this case, $\\int f \\, d\\beta_1 = f(0)$.`},{title:"Part (b) for β₂",content:`$f \\in \\mathscr{R}(\\beta_2)$ iff $f(0-)$ exists and equals $f(0)$.

In this case, $\\int f \\, d\\beta_2 = f(0)$.`},{title:"Part (b) for β₃",content:`$f \\in \\mathscr{R}(\\beta_3)$ iff both $f(0+)$ and $f(0-)$ exist.

$\\int f \\, d\\beta_3 = \\frac{f(0+) + f(0-)}{2}$.`}],conclusion:"The behavior of Riemann-Stieltjes integrals at jump discontinuities depends on one-sided limits."}}]},{sectionId:42,sectionTitle:"Properties of the Integral",textbookSection:"6.12-6.15",examples:[],exercises:[{id:"6-42-1",type:"exercise",number:4,statement:"If $f(x) = 0$ for all irrational $x$, $f(x) = 1$ for all rational $x$, prove that $f \\notin \\mathscr{R}$ on $[a, b]$ for any $a < b$.",solution:{steps:[{title:"Compute upper sum",content:`For any partition $P$, every subinterval contains rationals, so $M_i = 1$ for all $i$.

Thus $U(P, f) = \\sum M_i \\Delta x_i = b - a$.`},{title:"Compute lower sum",content:`Every subinterval also contains irrationals, so $m_i = 0$ for all $i$.

Thus $L(P, f) = 0$.`},{title:"Show non-integrability",content:`$U(P, f) - L(P, f) = b - a > 0$ for all partitions.

This cannot be made arbitrarily small.`}],conclusion:"The characteristic function of the rationals is not Riemann integrable. This is a key example showing discontinuity can prevent integrability."}},{id:"6-42-2",type:"exercise",number:5,statement:"Suppose $f$ is bounded on $[a, b]$, $f$ has only finitely many points of discontinuity, and $\\alpha$ is continuous at each such point. Prove that $f \\in \\mathscr{R}(\\alpha)$.",solution:{steps:[{title:"Setup",content:"Let $\\{c_1, \\ldots, c_n\\}$ be the discontinuities of $f$, with $|f| \\leq M$."},{title:"Isolate discontinuities",content:"Given $\\epsilon > 0$, use continuity of $\\alpha$ at each $c_j$ to find intervals $I_j$ around $c_j$ with $\\alpha(I_j) < \\epsilon/(2nM)$."},{title:"Handle continuous parts",content:`On $[a, b] \\setminus \\bigcup I_j$, $f$ is continuous on closed intervals, hence uniformly continuous.

Choose partition fine enough that oscillation of $f$ is small.`},{title:"Combine estimates",content:`Contribution to $U - L$ from $I_j$'s: at most $2M \\cdot n \\cdot \\epsilon/(2nM) = \\epsilon$.

Contribution from continuous parts: can be made $< \\epsilon$ by uniform continuity.`}],conclusion:"Functions with finitely many discontinuities are Riemann-Stieltjes integrable when $\\alpha$ is continuous at the discontinuities."}}]},{sectionId:43,sectionTitle:"Integration and Differentiation",textbookSection:"6.20-6.22",examples:[{id:"ex-6-43-1",type:"example",title:"Fundamental Theorem of Calculus",statement:"State and prove both parts of the Fundamental Theorem of Calculus.",solution:{steps:[{title:"FTC Part 1",content:`If $f \\in \\mathscr{R}$ on $[a, b]$ and $F(x) = \\int_a^x f(t) \\, dt$, then $F$ is continuous on $[a, b]$.

If $f$ is continuous at $c \\in [a, b]$, then $F'(c) = f(c)$.`},{title:"Proof of Part 1",content:`$F(x) - F(c) = \\int_c^x f(t) \\, dt$.

If $f$ is continuous at $c$, for $|t - c| < \\delta$: $|f(t) - f(c)| < \\epsilon$.

$\\left|\\frac{F(x) - F(c)}{x - c} - f(c)\\right| = \\left|\\frac{1}{x-c}\\int_c^x [f(t) - f(c)] \\, dt\\right| < \\epsilon$.`},{title:"FTC Part 2",content:"If $f \\in \\mathscr{R}$ on $[a, b]$ and there exists a differentiable function $F$ on $[a, b]$ with $F' = f$, then $\\int_a^b f \\, dx = F(b) - F(a)$."}],conclusion:"The FTC connects differentiation and integration as inverse operations."}}],exercises:[{id:"6-43-1",type:"exercise",number:6,statement:"Let $P$ be the Cantor set. Let $f$ be a bounded real function on $[0, 1]$ which is continuous at every point outside $P$. Prove that $f \\in \\mathscr{R}$.",solution:{steps:[{title:"Key property of Cantor set",content:"The Cantor set has measure zero: for any $\\epsilon > 0$, $P$ can be covered by intervals of total length $< \\epsilon$."},{title:"Cover P",content:"Cover $P$ by intervals $J_1, \\ldots, J_N$ with $\\sum |J_k| < \\epsilon/(2M)$, where $|f| \\leq M$."},{title:"Handle complement",content:"$[0,1] \\setminus \\bigcup J_k$ is a finite union of closed intervals where $f$ is continuous, hence uniformly continuous."},{title:"Estimate U - L",content:`Contribution from $J_k$'s: $\\leq 2M \\cdot \\epsilon/(2M) = \\epsilon$.

Contribution from complement: $< \\epsilon$ by uniform continuity.`}],conclusion:"Functions continuous outside a set of measure zero are Riemann integrable."}},{id:"6-43-2",type:"exercise",number:7,statement:`Suppose $f$ is a real function on $(0, 1]$ and $f \\in \\mathscr{R}$ on $[c, 1]$ for every $c > 0$. Define $\\int_0^1 f(x) \\, dx = \\lim_{c \\to 0} \\int_c^1 f(x) \\, dx$ if this limit exists (and is finite).

(a) If $f \\in \\mathscr{R}$ on $[0, 1]$, show that this definition agrees with the old one.
(b) Give an example where $f$ is bounded and the limit exists but $f \\notin \\mathscr{R}$.`,solution:{steps:[{title:"Part (a)",content:`If $f \\in \\mathscr{R}$ on $[0, 1]$, then $\\int_0^1 f = \\int_0^c f + \\int_c^1 f$.

As $c \\to 0$, $\\int_0^c f \\to 0$ (bounded integrand, vanishing interval).

So $\\lim_{c \\to 0} \\int_c^1 f = \\int_0^1 f$.`},{title:"Part (b) Example",content:`Let $f(x) = \\frac{(-1)^n}{n}$ for $x \\in (\\frac{1}{n+1}, \\frac{1}{n}]$, $n \\geq 1$.

$f$ is bounded by $1$.

$\\int_c^1 f$ converges as $c \\to 0$ (alternating series).

But $f$ has infinitely many discontinuities clustering at $0$, so it's not Riemann integrable on $[0, 1]$ in the standard sense.`}],conclusion:"The improper integral can exist even when the proper integral doesn't."}}]},{sectionId:45,sectionTitle:"Rectifiable Curves",textbookSection:"6.26-6.27",examples:[],exercises:[{id:"6-45-1",type:"exercise",number:8,statement:"Define $\\gamma(t) = (t, t^2 \\sin(1/t))$ for $t \\in (0, 1]$ and $\\gamma(0) = (0, 0)$. Show that $\\gamma$ is rectifiable but has infinite length if we use $|\\gamma'(t)|$ integrated.",solution:{steps:[{title:"Check rectifiability",content:`$\\gamma$ is continuous on $[0, 1]$ (verify at $t = 0$: $t^2 \\sin(1/t) \\to 0$).

For any partition, the inscribed polygon has length at most $\\sqrt{2}$ (bounded by diagonal of unit square).

So $\\gamma$ is rectifiable with length $\\leq \\sqrt{2}$.`},{title:"Compute γ'(t)",content:`For $t > 0$:
$\\gamma'(t) = (1, 2t\\sin(1/t) - \\cos(1/t))$

$|\\gamma'(t)|^2 = 1 + (2t\\sin(1/t) - \\cos(1/t))^2$`},{title:"Show integral diverges",content:`Near $t = 0$, $\\cos(1/t)$ oscillates between $\\pm 1$.

$|\\gamma'(t)| \\geq |\\cos(1/t)| - 2t$ oscillates, and when $\\cos(1/t) = \\pm 1$, we get contributions that don't decay.

$\\int_0^1 |\\gamma'(t)| \\, dt$ diverges.`}],conclusion:"Arc length by integration can give $\\infty$ even for rectifiable curves. The correct length uses partitions."}}]}],i={partId:6,partTitle:t,textbookChapter:e,sections:n};export{i as p};
