const n="Sequences and Series of Functions",e="Chapter 7",t=[{sectionId:47,sectionTitle:"Uniform Convergence",textbookSection:"7.7-7.15",examples:[{id:"ex-7-47-1",type:"example",title:"Pointwise vs Uniform Convergence",statement:"Explain the difference between pointwise and uniform convergence with examples.",solution:{steps:[{title:"Pointwise convergence",content:`$f_n \\to f$ pointwise on $E$ if for each $x \\in E$ and $\\epsilon > 0$, there exists $N(x, \\epsilon)$ such that $n \\geq N$ implies $|f_n(x) - f(x)| < \\epsilon$.

The $N$ can depend on $x$.`},{title:"Uniform convergence",content:`$f_n \\to f$ uniformly on $E$ if for each $\\epsilon > 0$, there exists $N(\\epsilon)$ such that $n \\geq N$ implies $|f_n(x) - f(x)| < \\epsilon$ for all $x \\in E$.

The $N$ works for all $x$ simultaneously.`},{title:"Classic example",content:`$f_n(x) = x^n$ on $[0, 1]$.

Pointwise limit: $f(x) = 0$ for $x \\in [0, 1)$ and $f(1) = 1$.

Not uniform: $\\sup_{x \\in [0,1]} |x^n - f(x)| = 1$ for all $n$ (take $x$ near $1$).`}],conclusion:"Uniform convergence is strictly stronger than pointwise convergence and preserves continuity."}}],exercises:[{id:"7-47-1",type:"exercise",number:1,statement:"Prove that every uniformly convergent sequence of bounded functions is uniformly bounded.",solution:{steps:[{title:"Setup",content:"Let $f_n \\to f$ uniformly on $E$, with each $f_n$ bounded: $|f_n(x)| \\leq M_n$ for all $x \\in E$."},{title:"Use uniform convergence",content:`Choose $N$ such that $n \\geq N$ implies $|f_n(x) - f(x)| < 1$ for all $x$.

Then $|f(x)| \\leq |f_N(x)| + 1 \\leq M_N + 1$ for all $x$.`},{title:"Bound all f_n",content:`For $n \\geq N$: $|f_n(x)| \\leq |f(x)| + 1 \\leq M_N + 2$.

For $n < N$: $|f_n(x)| \\leq M_n$.

Let $M = \\max(M_1, \\ldots, M_{N-1}, M_N + 2)$.`}],conclusion:"$|f_n(x)| \\leq M$ for all $n$ and all $x \\in E$. The sequence is uniformly bounded."}},{id:"7-47-2",type:"exercise",number:2,statement:"If $\\{f_n\\}$ and $\\{g_n\\}$ converge uniformly on a set $E$, prove that $\\{f_n + g_n\\}$ converges uniformly on $E$. If, in addition, $\\{f_n\\}$ and $\\{g_n\\}$ are sequences of bounded functions, prove that $\\{f_n g_n\\}$ converges uniformly on $E$.",solution:{steps:[{title:"Sum converges uniformly",content:`Let $f_n \\to f$ and $g_n \\to g$ uniformly.

Given $\\epsilon > 0$, choose $N$ so $n \\geq N$ implies both $|f_n - f| < \\epsilon/2$ and $|g_n - g| < \\epsilon/2$ everywhere.

Then $|(f_n + g_n) - (f + g)| \\leq |f_n - f| + |g_n - g| < \\epsilon$.`},{title:"Product: setup",content:`Assume also $|f_n| \\leq M$ and $|g_n| \\leq M$ for all $n$.

By Exercise 1, $f$ and $g$ are bounded; say $|f|, |g| \\leq M$.`},{title:"Product estimate",content:`$|f_n g_n - fg| = |f_n g_n - f_n g + f_n g - fg|$
$\\leq |f_n||g_n - g| + |g||f_n - f|$
$\\leq M|g_n - g| + M|f_n - f|$`},{title:"Conclude",content:`For $n \\geq N$ with $|f_n - f| < \\epsilon/(2M)$ and $|g_n - g| < \\epsilon/(2M)$:
$|f_n g_n - fg| < \\epsilon$.`}],conclusion:"Sums and products (when bounded) of uniformly convergent sequences converge uniformly."}},{id:"7-47-3",type:"exercise",number:3,statement:"Construct sequences $\\{f_n\\}$, $\\{g_n\\}$ which converge uniformly on some set $E$, but such that $\\{f_n g_n\\}$ does not converge uniformly on $E$ (of course, $\\{f_n g_n\\}$ must converge on $E$).",solution:{steps:[{title:"Example",content:`Let $E = (0, \\infty)$, $f_n(x) = g_n(x) = x + \\frac{1}{n}$.

Then $f_n \\to f(x) = x$ and $g_n \\to g(x) = x$ uniformly (sup difference is $1/n$).`},{title:"Compute product",content:`$f_n(x) g_n(x) = (x + \\frac{1}{n})^2 = x^2 + \\frac{2x}{n} + \\frac{1}{n^2}$

$f(x)g(x) = x^2$

$|f_n g_n - fg| = \\frac{2x}{n} + \\frac{1}{n^2}$`},{title:"Show non-uniform convergence",content:`$\\sup_{x > 0} |f_n g_n - fg| = \\sup_{x > 0} \\frac{2x}{n} + \\frac{1}{n^2} = +\\infty$

The convergence is pointwise but not uniform.`}],conclusion:"Unbounded functions can converge uniformly individually but not as a product."}},{id:"7-47-4",type:"exercise",number:4,statement:`Consider $f(x) = \\sum_{n=1}^{\\infty} \\frac{1}{1 + n^2 x}$ for $x > 0$. 

(a) Prove that the series converges uniformly on $[\\delta, \\infty)$ for any $\\delta > 0$.
(b) Prove that $\\lim_{x \\to 0} f(x) = +\\infty$.`,solution:{steps:[{title:"Part (a): Uniform convergence",content:`For $x \\geq \\delta > 0$:
$\\frac{1}{1 + n^2 x} \\leq \\frac{1}{n^2 \\delta}$

Since $\\sum \\frac{1}{n^2}$ converges, by Weierstrass M-test, the series converges uniformly on $[\\delta, \\infty)$.`},{title:"Part (b): Behavior at 0",content:`For small $x > 0$, consider partial sum:
$\\sum_{n=1}^{N} \\frac{1}{1 + n^2 x}$

When $n^2 x \\leq 1$ (i.e., $n \\leq 1/\\sqrt{x}$), we have $\\frac{1}{1 + n^2 x} \\geq \\frac{1}{2}$.`},{title:"Lower bound",content:`$f(x) \\geq \\sum_{n=1}^{\\lfloor 1/\\sqrt{x} \\rfloor} \\frac{1}{2} \\geq \\frac{1}{2\\sqrt{x}} - 1$

As $x \\to 0^+$, this goes to $+\\infty$.`}],conclusion:"The series converges uniformly away from $0$ but diverges as $x \\to 0$."}}]},{sectionId:48,sectionTitle:"Uniform Convergence and Continuity",textbookSection:"7.11-7.12",examples:[],exercises:[{id:"7-48-1",type:"exercise",number:5,statement:"For $n = 1, 2, 3, \\ldots$, $x$ real, put $f_n(x) = \\frac{x}{1 + nx^2}$. Show that $\\{f_n\\}$ converges uniformly to a function $f$, and that $f'(x) = \\lim_{n \\to \\infty} f_n'(x)$, but only for $x \\neq 0$.",solution:{steps:[{title:"Find pointwise limit",content:`For $x \\neq 0$: $f_n(x) = \\frac{x}{1 + nx^2} \\to 0$ as $n \\to \\infty$.

For $x = 0$: $f_n(0) = 0$ for all $n$.

So $f(x) = 0$ for all $x$.`},{title:"Show uniform convergence",content:`$|f_n(x)| = \\frac{|x|}{1 + nx^2}$

Maximize: set derivative $= 0$, get $x = \\pm 1/\\sqrt{n}$.

$\\max |f_n(x)| = \\frac{1/\\sqrt{n}}{1 + 1} = \\frac{1}{2\\sqrt{n}} \\to 0$.

So $f_n \\to 0$ uniformly.`},{title:"Compute derivatives",content:`$f_n'(x) = \\frac{1 + nx^2 - x \\cdot 2nx}{(1 + nx^2)^2} = \\frac{1 - nx^2}{(1 + nx^2)^2}$

$f_n'(0) = 1$ for all $n$.

But $f'(0) = 0$ since $f \\equiv 0$.`},{title:"Check x ≠ 0",content:`For $x \\neq 0$: $f_n'(x) = \\frac{1 - nx^2}{(1 + nx^2)^2} \\to 0$ as $n \\to \\infty$.

So $\\lim f_n'(x) = 0 = f'(x)$ for $x \\neq 0$.`}],conclusion:"Uniform convergence of $f_n$ does not imply $f_n' \\to f'$ at all points. Additional hypotheses are needed."}}]},{sectionId:51,sectionTitle:"Equicontinuous Families of Functions",textbookSection:"7.23-7.25",examples:[{id:"ex-7-51-1",type:"example",title:"Arzelà-Ascoli Theorem",statement:"State and prove the Arzelà-Ascoli theorem.",solution:{steps:[{title:"Statement",content:`Let $K$ be compact, $\\{f_n\\}$ a pointwise bounded, equicontinuous sequence in $C(K)$. Then:

(a) $\\{f_n\\}$ is uniformly bounded on $K$.
(b) $\\{f_n\\}$ contains a uniformly convergent subsequence.`},{title:"Equicontinuity definition",content:"For every $\\epsilon > 0$, there exists $\\delta > 0$ such that $d(x, y) < \\delta$ implies $|f_n(x) - f_n(y)| < \\epsilon$ for all $n$ and all $x, y \\in K$."},{title:"Proof sketch for (a)",content:`Cover $K$ by finitely many balls of radius $\\delta$ (where $\\delta$ corresponds to $\\epsilon = 1$).

Pointwise boundedness at centers, plus equicontinuity, gives uniform bound.`},{title:"Proof sketch for (b)",content:`Use diagonal argument: enumerate a dense subset $\\{r_k\\}$ of $K$.

By pointwise boundedness, extract subsequence converging at $r_1$, then sub-subsequence at $r_2$, etc.

Diagonal subsequence converges on all $r_k$, hence uniformly by equicontinuity.`}],conclusion:"The Arzelà-Ascoli theorem characterizes compact sets in $C(K)$: closed, bounded, and equicontinuous."}}],exercises:[{id:"7-51-1",type:"exercise",number:6,statement:"Let $\\{f_n\\}$ be an equicontinuous sequence of functions on a compact set $K$, and suppose $f_n(x) \\to f(x)$ for every $x \\in K$. Prove that $f_n \\to f$ uniformly.",solution:{steps:[{title:"Equicontinuity of limit",content:`First note that $f$ is continuous: For any $x, y$ with $d(x,y) < \\delta$ (the equicontinuity modulus for $\\epsilon/3$):

$|f(x) - f(y)| \\leq |f(x) - f_n(x)| + |f_n(x) - f_n(y)| + |f_n(y) - f(y)|$

Letting $n \\to \\infty$: $|f(x) - f(y)| \\leq \\epsilon/3$.`},{title:"Uniform convergence",content:`Given $\\epsilon > 0$, let $\\delta$ be the equicontinuity modulus for $\\epsilon/3$.

Cover $K$ by balls $B(x_i, \\delta)$, $i = 1, \\ldots, N$.

By pointwise convergence, choose $M$ so $n \\geq M$ implies $|f_n(x_i) - f(x_i)| < \\epsilon/3$ for all $i$.`},{title:"Conclude",content:`For any $x \\in K$, pick $x_i$ with $d(x, x_i) < \\delta$.

$|f_n(x) - f(x)| \\leq |f_n(x) - f_n(x_i)| + |f_n(x_i) - f(x_i)| + |f(x_i) - f(x)|$
$< \\epsilon/3 + \\epsilon/3 + \\epsilon/3 = \\epsilon$.`}],conclusion:"Equicontinuity promotes pointwise convergence to uniform convergence on compact sets."}}]},{sectionId:52,sectionTitle:"The Stone-Weierstrass Theorem",textbookSection:"7.26-7.33",examples:[],exercises:[{id:"7-52-1",type:"exercise",number:7,statement:"Prove that there exist continuous functions on $[0, 1]$ which are not the pointwise limit of any sequence of polynomials.",solution:{steps:[{title:"Key observation",content:`The set of polynomials is countable (countably many coefficients from $\\mathbb{Q}$ approximate any polynomial).

Actually, we work with sequences of polynomials, which form a Polish space.`},{title:"Cardinality argument",content:`The set of sequences of polynomials that converge pointwise everywhere has cardinality at most $\\mathfrak{c}$ (continuum).

The set of all continuous functions on $[0,1]$ has cardinality $\\mathfrak{c}$.

But more carefully: not every continuous function is such a limit.`},{title:"Baire category approach",content:`Consider $f(x) = e^{ix}$ viewed as two real functions (cos and sin).

Alternatively: functions analytic on $[0,1]$ with singularity just outside.

A concrete example: $f(x) = \\sum_{n=0}^\\infty x^{n!}$ converges on $[0,1)$ but has essential singularity at $1$.`}],conclusion:"Not all continuous functions arise as pointwise limits of polynomials, though Weierstrass says uniform limits work."}},{id:"7-52-2",type:"exercise",number:8,statement:"Let $f$ be a continuous complex function on $[0, 2\\pi]$ with $f(0) = f(2\\pi)$. Show that $f$ can be uniformly approximated by trigonometric polynomials.",solution:{steps:[{title:"Transfer to circle",content:`Define $g: T \\to \\mathbb{C}$ by $g(e^{i\\theta}) = f(\\theta)$ where $T = \\{z : |z| = 1\\}$.

Since $f(0) = f(2\\pi)$, $g$ is well-defined and continuous on $T$.`},{title:"Apply Stone-Weierstrass",content:`The algebra generated by $z$ and $\\bar{z}$ separates points on $T$ and contains constants.

By Stone-Weierstrass, this algebra is dense in $C(T)$.`},{title:"Translate back",content:`Elements of this algebra: $\\sum a_{mn} z^m \\bar{z}^n = \\sum a_{mn} e^{im\\theta} e^{-in\\theta}$.

These are trigonometric polynomials: $\\sum c_k e^{ik\\theta}$.`}],conclusion:"Continuous periodic functions are uniformly approximable by trigonometric polynomials."}}]}],o={partId:7,partTitle:n,textbookChapter:e,sections:t};export{o as p};
