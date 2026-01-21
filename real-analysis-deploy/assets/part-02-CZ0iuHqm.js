const n="Sequences and Series",e="Part 2",t=[{sectionId:5,sectionTitle:"Sequences and Their Limits",textbookSection:"Section 5",examples:[{id:"ex-2-5-1",type:"example",title:"Proving Convergence with Epsilon-N Definition",statement:"Prove that $\\lim_{n \\to \\infty} \\frac{1}{n} = 0$ using the $\\varepsilon$-$N$ definition.",solution:{steps:[{title:"State what we need to show",content:"For every $\\varepsilon > 0$, we need to find $N \\in \\mathbb{N}$ such that for all $n > N$, $|\\frac{1}{n} - 0| < \\varepsilon$."},{title:"Simplify the condition",content:"$|\\frac{1}{n} - 0| = \\frac{1}{n} < \\varepsilon$ is equivalent to $n > \\frac{1}{\\varepsilon}$."},{title:"Choose N",content:`By the Archimedean property, there exists $N \\in \\mathbb{N}$ with $N > \\frac{1}{\\varepsilon}$.

For all $n > N$: $n > N > \\frac{1}{\\varepsilon}$, so $\\frac{1}{n} < \\varepsilon$.`}],conclusion:"Therefore $\\lim_{n \\to \\infty} \\frac{1}{n} = 0$."}},{id:"ex-2-5-2",type:"example",title:"Monotone Convergence Theorem Application",statement:"Let $a_1 = \\sqrt{2}$ and $a_{n+1} = \\sqrt{2 + a_n}$ for $n \\geq 1$. Prove that $(a_n)$ converges and find its limit.",solution:{steps:[{title:"Show boundedness",content:`Claim: $a_n < 2$ for all $n$.
Base: $a_1 = \\sqrt{2} < 2$.
Inductive: If $a_n < 2$, then $a_{n+1} = \\sqrt{2 + a_n} < \\sqrt{2 + 2} = 2$.`},{title:"Show monotonicity",content:`We show $a_{n+1} > a_n$.
$a_{n+1}^2 - a_n^2 = (2 + a_n) - a_n^2 = 2 + a_n - a_n^2$
$= -(a_n - 2)(a_n + 1)$

Since $a_n < 2$ and $a_n > 0$, we have $(a_n - 2) < 0$ and $(a_n + 1) > 0$.
Thus $a_{n+1}^2 - a_n^2 > 0$, so $a_{n+1} > a_n$.`},{title:"Find the limit",content:`By MCT, $L = \\lim a_n$ exists.
Taking limits in $a_{n+1} = \\sqrt{2 + a_n}$:
$L = \\sqrt{2 + L}$
$L^2 = 2 + L$
$L^2 - L - 2 = 0$
$(L-2)(L+1) = 0$

Since $L > 0$, we have $L = 2$.`}],conclusion:"The sequence converges to $L = 2$."}}],exercises:[{id:"2-5-1",type:"exercise",number:1,statement:"Prove that $\\lim_{n \\to \\infty} \\frac{n}{n+1} = 1$ using the $\\varepsilon$-$N$ definition.",solution:{steps:[{title:"Simplify the difference",content:"$|\\frac{n}{n+1} - 1| = |\\frac{n - (n+1)}{n+1}| = |\\frac{-1}{n+1}| = \\frac{1}{n+1}$"},{title:"Find condition on n",content:"We need $\\frac{1}{n+1} < \\varepsilon$, which is equivalent to $n+1 > \\frac{1}{\\varepsilon}$, or $n > \\frac{1}{\\varepsilon} - 1$."},{title:"Choose N",content:`Let $N$ be any natural number with $N > \\frac{1}{\\varepsilon} - 1$.

For $n > N$: $n > \\frac{1}{\\varepsilon} - 1$, so $n + 1 > \\frac{1}{\\varepsilon}$, thus $\\frac{1}{n+1} < \\varepsilon$.`}],conclusion:"Therefore $\\lim_{n \\to \\infty} \\frac{n}{n+1} = 1$."}},{id:"2-5-2",type:"exercise",number:2,statement:"Prove that if $\\lim_{n \\to \\infty} a_n = L$ and $\\lim_{n \\to \\infty} b_n = M$, then $\\lim_{n \\to \\infty} (a_n + b_n) = L + M$.",solution:{steps:[{title:"Use triangle inequality",content:`$|(a_n + b_n) - (L + M)| = |(a_n - L) + (b_n - M)|$
$\\leq |a_n - L| + |b_n - M|$`},{title:"Apply definitions",content:`Given $\\varepsilon > 0$:
- There exists $N_1$ such that $n > N_1 \\Rightarrow |a_n - L| < \\varepsilon/2$
- There exists $N_2$ such that $n > N_2 \\Rightarrow |b_n - M| < \\varepsilon/2$`},{title:"Combine",content:`Let $N = \\max(N_1, N_2)$. For $n > N$:
$|(a_n + b_n) - (L + M)| \\leq |a_n - L| + |b_n - M| < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon$`}],conclusion:"Therefore $\\lim_{n \\to \\infty} (a_n + b_n) = L + M$."}},{id:"2-5-3",type:"exercise",number:3,statement:"Prove the Bolzano-Weierstrass theorem: every bounded sequence has a convergent subsequence.",solution:{steps:[{title:"Apply nested intervals",content:`Let $(a_n)$ be bounded by $[a, b]$. Bisect $[a, b]$ into $[a, \\frac{a+b}{2}]$ and $[\\frac{a+b}{2}, b]$.

At least one half contains infinitely many terms of $(a_n)$. Call it $I_1$.`},{title:"Iterate the process",content:"Continuing, we get nested intervals $I_1 \\supseteq I_2 \\supseteq ...$ with $|I_k| = \\frac{b-a}{2^k}$, each containing infinitely many terms."},{title:"Extract subsequence",content:`Choose $n_1 < n_2 < ...$ such that $a_{n_k} \\in I_k$.

By the nested interval property, $\\bigcap I_k = \\{L\\}$ for some $L$.

Since $a_{n_k} \\in I_k$ and $|I_k| \\to 0$, we have $a_{n_k} \\to L$.`}],conclusion:"Every bounded sequence has a convergent subsequence."}}]},{sectionId:6,sectionTitle:"Infinite Series",textbookSection:"Section 6",examples:[{id:"ex-2-6-1",type:"example",title:"Geometric Series",statement:"Prove that $\\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r}$ for $|r| < 1$.",solution:{steps:[{title:"Compute partial sums",content:`$S_N = \\sum_{n=0}^{N} r^n = 1 + r + r^2 + ... + r^N$

$rS_N = r + r^2 + ... + r^{N+1}$

$S_N - rS_N = 1 - r^{N+1}$

$S_N = \\frac{1 - r^{N+1}}{1 - r}$`},{title:"Take limit",content:`For $|r| < 1$: $\\lim_{N \\to \\infty} r^{N+1} = 0$

$\\lim_{N \\to \\infty} S_N = \\frac{1 - 0}{1 - r} = \\frac{1}{1-r}$`}],conclusion:"$\\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r}$ for $|r| < 1$."}}],exercises:[{id:"2-6-1",type:"exercise",number:1,statement:"Prove that the harmonic series $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ diverges.",solution:{steps:[{title:"Group terms",content:"$1 + \\frac{1}{2} + (\\frac{1}{3} + \\frac{1}{4}) + (\\frac{1}{5} + ... + \\frac{1}{8}) + ...$"},{title:"Estimate each group",content:`$\\frac{1}{3} + \\frac{1}{4} > \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$

$\\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8} > 4 \\cdot \\frac{1}{8} = \\frac{1}{2}$

In general, terms from $\\frac{1}{2^k+1}$ to $\\frac{1}{2^{k+1}}$ sum to more than $\\frac{1}{2}$.`},{title:"Conclude divergence",content:`The partial sums exceed $1 + \\frac{1}{2} + \\frac{1}{2} + \\frac{1}{2} + ... = 1 + \\frac{k}{2}$

As $k \\to \\infty$, this diverges to $\\infty$.`}],conclusion:"The harmonic series diverges."}},{id:"2-6-2",type:"exercise",number:2,statement:"Prove that if $\\sum a_n$ converges, then $\\lim_{n \\to \\infty} a_n = 0$.",solution:{steps:[{title:"Use partial sums",content:"Let $S_n = \\sum_{k=1}^{n} a_k$. Since $\\sum a_n$ converges, $\\lim_{n \\to \\infty} S_n = S$ exists."},{title:"Express $a_n$ in terms of partial sums",content:"For $n \\geq 2$: $a_n = S_n - S_{n-1}$"},{title:"Take limit",content:"$\\lim_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} (S_n - S_{n-1}) = S - S = 0$"}],conclusion:"If a series converges, its terms must approach zero. (The converse is false: harmonic series.)"}}]},{sectionId:7,sectionTitle:"Convergence Tests",textbookSection:"Section 7",examples:[{id:"ex-2-7-1",type:"example",title:"Ratio Test Application",statement:"Determine whether $\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$ converges using the ratio test.",solution:{steps:[{title:"Compute the ratio",content:`$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!}$
$= \\frac{(n+1) \\cdot n!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!}$
$= \\frac{n^n}{(n+1)^n}$
$= \\left(\\frac{n}{n+1}\\right)^n$
$= \\frac{1}{(1 + \\frac{1}{n})^n}$`},{title:"Take limit",content:"$\\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = \\lim_{n \\to \\infty} \\frac{1}{(1 + \\frac{1}{n})^n} = \\frac{1}{e}$"},{title:"Apply ratio test",content:"Since $\\frac{1}{e} < 1$, the series converges by the ratio test."}],conclusion:"$\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$ converges."}}],exercises:[{id:"2-7-1",type:"exercise",number:1,statement:"Use the comparison test to determine whether $\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1}$ converges.",solution:{steps:[{title:"Find a comparison series",content:"For all $n \\geq 1$: $n^2 + 1 > n^2$, so $\\frac{1}{n^2 + 1} < \\frac{1}{n^2}$."},{title:"Verify comparison series converges",content:"$\\sum \\frac{1}{n^2}$ is a p-series with $p = 2 > 1$, so it converges."},{title:"Apply comparison test",content:"Since $0 < \\frac{1}{n^2+1} < \\frac{1}{n^2}$ and $\\sum \\frac{1}{n^2}$ converges, by the comparison test, $\\sum \\frac{1}{n^2+1}$ converges."}],conclusion:"$\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1}$ converges."}},{id:"2-7-2",type:"exercise",number:2,statement:"Prove the alternating series test: if $(a_n)$ is decreasing with $a_n \\to 0$, then $\\sum (-1)^n a_n$ converges.",solution:{steps:[{title:"Consider even partial sums",content:`$S_{2n} = (a_1 - a_2) + (a_3 - a_4) + ... + (a_{2n-1} - a_{2n})$

Each parenthesis is $\\geq 0$, so $(S_{2n})$ is increasing.`},{title:"Show boundedness",content:`$S_{2n} = a_1 - (a_2 - a_3) - (a_4 - a_5) - ... - a_{2n}$

Each parenthesis is $\\geq 0$, so $S_{2n} \\leq a_1$.

Thus $(S_{2n})$ is bounded above.`},{title:"Complete the proof",content:`By MCT, $S_{2n} \\to L$ for some $L$.

$S_{2n+1} = S_{2n} + a_{2n+1} \\to L + 0 = L$.

So $S_n \\to L$.`}],conclusion:"The alternating series converges."}}]},{sectionId:8,sectionTitle:"Power Series",textbookSection:"Section 8",examples:[{id:"ex-2-8-1",type:"example",title:"Finding Radius of Convergence",statement:"Find the radius of convergence of $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$.",solution:{steps:[{title:"Apply ratio test",content:`$\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = \\lim_{n \\to \\infty} |\\frac{x^{n+1}}{(n+1)!} \\cdot \\frac{n!}{x^n}|$
$= \\lim_{n \\to \\infty} \\frac{|x|}{n+1} = 0$`},{title:"Interpret the result",content:`The limit is 0 for all $x$, which is less than 1.

Therefore the series converges for all $x \\in \\mathbb{R}$.`}],conclusion:"The radius of convergence is $R = \\infty$. This is the Taylor series for $e^x$."}}],exercises:[{id:"2-8-1",type:"exercise",number:1,statement:"Find the radius of convergence of $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$.",solution:{steps:[{title:"Apply ratio test",content:`$\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = \\lim_{n \\to \\infty} |\\frac{x^{n+1}}{n+1} \\cdot \\frac{n}{x^n}|$
$= \\lim_{n \\to \\infty} |x| \\cdot \\frac{n}{n+1} = |x|$`},{title:"Find radius",content:`Convergence when $|x| < 1$, divergence when $|x| > 1$.

Radius of convergence: $R = 1$.`},{title:"Check endpoints",content:`$x = 1$: $\\sum \\frac{1}{n}$ (harmonic, diverges)
$x = -1$: $\\sum \\frac{(-1)^n}{n}$ (alternating harmonic, converges)

Interval: $[-1, 1)$`}],conclusion:"$R = 1$, with interval of convergence $[-1, 1)$. This is the Taylor series for $-\\ln(1-x)$."}}]}],i={partId:2,partTitle:n,textbookChapter:e,sections:t};export{i as p};
