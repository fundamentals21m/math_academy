const e="The Lebesgue Theory",n="Chapter 11",t=[{sectionId:77,sectionTitle:"Set Functions",textbookSection:"11.1-11.6",examples:[{id:"ex-11-77-1",type:"example",title:"Outer Measure",statement:"Define outer measure and prove its basic properties.",solution:{steps:[{title:"Definition",content:`For $E \\subset \\mathbb{R}$, define the outer measure:

$m^*(E) = \\inf\\left\\{\\sum_{n=1}^{\\infty} |I_n| : E \\subset \\bigcup_{n=1}^{\\infty} I_n\\right\\}$

where the infimum is over all countable covers by intervals.`},{title:"Property 1: Non-negativity",content:`$m^*(E) \\geq 0$ for all $E$.
$m^*(\\emptyset) = 0$ (empty cover has sum 0).`},{title:"Property 2: Monotonicity",content:`If $A \\subset B$, then $m^*(A) \\leq m^*(B)$.

Any cover of $B$ is also a cover of $A$.`},{title:"Property 3: Countable subadditivity",content:`$m^*\\left(\\bigcup_{n=1}^{\\infty} E_n\\right) \\leq \\sum_{n=1}^{\\infty} m^*(E_n)$

Proof: Given $\\epsilon > 0$, cover each $E_n$ with intervals of total length $< m^*(E_n) + \\epsilon/2^n$. The union covers $\\bigcup E_n$.`}],conclusion:"Outer measure is defined for all sets but is only countably subadditive, not additive."}}],exercises:[{id:"11-77-1",type:"exercise",number:1,statement:"Prove that $m^*(E) = 0$ if $E$ is countable.",solution:{steps:[{title:"Enumerate E",content:"Let $E = \\{x_1, x_2, x_3, \\ldots\\}$ (finite or countably infinite)."},{title:"Cover each point",content:"Given $\\epsilon > 0$, cover $x_n$ with an interval $I_n$ of length $\\epsilon/2^n$."},{title:"Compute total length",content:"$\\sum_{n=1}^{\\infty} |I_n| = \\sum_{n=1}^{\\infty} \\frac{\\epsilon}{2^n} = \\epsilon$"},{title:"Conclude",content:"$m^*(E) \\leq \\epsilon$ for all $\\epsilon > 0$, so $m^*(E) = 0$."}],conclusion:"Countable sets have measure zero. In particular, $m^*(\\mathbb{Q}) = 0$."}},{id:"11-77-2",type:"exercise",number:2,statement:"Prove that the Cantor set has measure zero.",solution:{steps:[{title:"Construction",content:`Start with $[0, 1]$. Remove middle third $(1/3, 2/3)$.
From remaining, remove middle thirds. Continue.`},{title:"After n steps",content:`We have $2^n$ intervals, each of length $1/3^n$.

Total length = $2^n \\cdot (1/3)^n = (2/3)^n$.`},{title:"Take limit",content:`The Cantor set $C$ is contained in the union of these $2^n$ intervals.

$m^*(C) \\leq (2/3)^n$ for all $n$.`},{title:"Conclude",content:`As $n \\to \\infty$, $(2/3)^n \\to 0$.

Therefore $m^*(C) = 0$.`}],conclusion:"The Cantor set is uncountable but has measure zero. Measure and cardinality are different."}}]},{sectionId:78,sectionTitle:"Construction of the Lebesgue Measure",textbookSection:"11.7-11.16",examples:[],exercises:[{id:"11-78-1",type:"exercise",number:3,statement:"State the Carathéodory criterion for measurability and verify that intervals are measurable.",solution:{steps:[{title:"Carathéodory criterion",content:`$E$ is measurable if for all $A \\subset \\mathbb{R}$:

$m^*(A) = m^*(A \\cap E) + m^*(A \\cap E^c)$`},{title:"Check for interval [a, b]",content:`Need: $m^*(A) = m^*(A \\cap [a,b]) + m^*(A \\cap [a,b]^c)$ for all $A$.

The inequality $\\geq$ follows from subadditivity.

For $\\leq$: Given a cover of $A$ by intervals, split each at $a$ and $b$...`},{title:"Splitting argument",content:`Any interval $I$ covering part of $A$ can be split at $a$ and $b$:
$|I| = |I \\cap [a,b]| + |I \\cap [a,b]^c|$

Summing gives $\\leq$ direction.`}],conclusion:"All intervals are Lebesgue measurable. The collection of measurable sets forms a $\\sigma$-algebra."}},{id:"11-78-2",type:"exercise",number:4,statement:"Prove that every Borel set is Lebesgue measurable.",solution:{steps:[{title:"Borel σ-algebra",content:"The Borel sets are the smallest $\\sigma$-algebra containing all open sets."},{title:"Measurable sets form σ-algebra",content:`The Lebesgue measurable sets $\\mathcal{M}$ form a $\\sigma$-algebra:
- $\\mathbb{R} \\in \\mathcal{M}$
- Closed under complements
- Closed under countable unions`},{title:"Open sets are measurable",content:`Every open set is a countable union of open intervals.
Open intervals are measurable (as intervals).
$\\sigma$-algebra closed under countable unions implies open sets are measurable.`},{title:"Conclude",content:"Since $\\mathcal{M}$ is a $\\sigma$-algebra containing all open sets, it contains the Borel $\\sigma$-algebra."}],conclusion:"Borel sets $\\subset$ Lebesgue measurable sets. The inclusion is strict (there exist non-Borel Lebesgue measurable sets)."}}]},{sectionId:80,sectionTitle:"Measurable Functions",textbookSection:"11.17-11.20",examples:[],exercises:[{id:"11-80-1",type:"exercise",number:5,statement:"Prove that if $f$ and $g$ are measurable functions, then $f + g$, $fg$, and $\\max(f, g)$ are measurable.",solution:{steps:[{title:"Definition",content:"$f$ is measurable if $\\{x : f(x) > a\\}$ is measurable for all $a \\in \\mathbb{R}$."},{title:"Sum f + g",content:`$\\{f + g > a\\} = \\bigcup_{r \\in \\mathbb{Q}} (\\{f > r\\} \\cap \\{g > a - r\\})$

Countable union of measurable sets is measurable.`},{title:"Product fg",content:`First show $f^2$ is measurable: $\\{f^2 > a\\} = \\{f > \\sqrt{a}\\} \\cup \\{f < -\\sqrt{a}\\}$ for $a > 0$.

Then $fg = \\frac{1}{4}[(f+g)^2 - (f-g)^2]$.`},{title:"Maximum",content:`$\\{\\max(f, g) > a\\} = \\{f > a\\} \\cup \\{g > a\\}$

Union of measurable sets is measurable.`}],conclusion:"The measurable functions form an algebra closed under all reasonable operations."}}]},{sectionId:82,sectionTitle:"Integration",textbookSection:"11.23-11.32",examples:[{id:"ex-11-82-1",type:"example",title:"Lebesgue Integral Construction",statement:"Outline the construction of the Lebesgue integral.",solution:{steps:[{title:"Step 1: Simple functions",content:`For simple $\\phi = \\sum_{i=1}^n a_i \\chi_{E_i}$ with $a_i \\geq 0$ and $E_i$ measurable:

$\\int \\phi \\, dm = \\sum_{i=1}^n a_i \\cdot m(E_i)$`},{title:"Step 2: Non-negative functions",content:`For $f \\geq 0$ measurable:

$\\int f \\, dm = \\sup\\left\\{\\int \\phi \\, dm : 0 \\leq \\phi \\leq f, \\phi \\text{ simple}\\right\\}$`},{title:"Step 3: General functions",content:`Write $f = f^+ - f^-$ where $f^+ = \\max(f, 0)$, $f^- = \\max(-f, 0)$.

$\\int f \\, dm = \\int f^+ \\, dm - \\int f^- \\, dm$

(defined when at least one is finite)`}],conclusion:"The Lebesgue integral extends the Riemann integral and has better limit properties."}}],exercises:[{id:"11-82-1",type:"exercise",number:6,statement:"State and prove the Monotone Convergence Theorem.",solution:{steps:[{title:"Statement",content:`Let $\\{f_n\\}$ be measurable with $0 \\leq f_1 \\leq f_2 \\leq \\cdots$ and $f_n \\to f$ pointwise.

Then $\\int f \\, dm = \\lim_{n \\to \\infty} \\int f_n \\, dm$.`},{title:"One direction",content:`Since $f_n \\leq f$ for all $n$: $\\int f_n \\leq \\int f$.

Thus $\\lim \\int f_n \\leq \\int f$.`},{title:"Other direction",content:`For any simple $\\phi \\leq f$ and $0 < c < 1$:
$E_n = \\{x : f_n(x) \\geq c\\phi(x)\\}$ increases to $E = \\{\\phi > 0\\}$.

$\\int f_n \\geq \\int_{E_n} f_n \\geq c \\int_{E_n} \\phi$.

As $n \\to \\infty$: $\\lim \\int f_n \\geq c \\int \\phi$.`},{title:"Take suprema",content:`Let $c \\to 1$: $\\lim \\int f_n \\geq \\int \\phi$ for all simple $\\phi \\leq f$.

Taking sup over $\\phi$: $\\lim \\int f_n \\geq \\int f$.`}],conclusion:"MCT: For increasing sequences of non-negative functions, limit and integral commute."}},{id:"11-82-2",type:"exercise",number:7,statement:"State Fatou's Lemma and derive it from the Monotone Convergence Theorem.",solution:{steps:[{title:"Statement",content:`If $f_n \\geq 0$ are measurable, then:

$\\int \\liminf_{n \\to \\infty} f_n \\, dm \\leq \\liminf_{n \\to \\infty} \\int f_n \\, dm$`},{title:"Define g_n",content:`Let $g_n = \\inf_{k \\geq n} f_k$.

Then $g_n$ increases to $\\liminf f_n$, and $g_n \\leq f_n$.`},{title:"Apply MCT",content:"By MCT: $\\int \\liminf f_n = \\lim_{n \\to \\infty} \\int g_n$."},{title:"Use g_n ≤ f_n",content:`$\\int g_n \\leq \\int f_n$.

So $\\int g_n \\leq \\inf_{k \\geq n} \\int f_k$.

Taking limit: $\\lim \\int g_n \\leq \\liminf \\int f_n$.`}],conclusion:"Fatou's lemma: The integral of the liminf $\\leq$ the liminf of the integrals. Strict inequality is possible."}},{id:"11-82-3",type:"exercise",number:8,statement:"State and prove the Dominated Convergence Theorem.",solution:{steps:[{title:"Statement",content:`Let $f_n \\to f$ pointwise, and suppose $|f_n| \\leq g$ where $g$ is integrable.

Then $\\int |f_n - f| \\, dm \\to 0$, and hence $\\int f_n \\to \\int f$.`},{title:"Apply Fatou",content:`$|f_n - f| \\leq 2g$, so $2g - |f_n - f| \\geq 0$.

By Fatou: $\\int \\liminf(2g - |f_n - f|) \\leq \\liminf \\int (2g - |f_n - f|)$.`},{title:"Simplify",content:`LHS: $\\int 2g$ (since $|f_n - f| \\to 0$).

RHS: $\\int 2g - \\limsup \\int |f_n - f|$.`},{title:"Conclude",content:`$\\int 2g \\leq \\int 2g - \\limsup \\int |f_n - f|$.

Thus $\\limsup \\int |f_n - f| \\leq 0$, so $\\int |f_n - f| \\to 0$.`}],conclusion:"DCT allows passing limits through integrals when dominated by an integrable function."}}]},{sectionId:85,sectionTitle:"Functions of Class L²",textbookSection:"11.40-11.44",examples:[],exercises:[{id:"11-85-1",type:"exercise",number:9,statement:"Prove that $L^2$ is a Hilbert space with inner product $\\langle f, g \\rangle = \\int f \\bar{g} \\, dm$.",solution:{steps:[{title:"Inner product axioms",content:`1. $\\langle f, f \\rangle = \\int |f|^2 \\geq 0$, with equality iff $f = 0$ a.e.
2. $\\langle f, g \\rangle = \\overline{\\langle g, f \\rangle}$
3. $\\langle \\alpha f + \\beta g, h \\rangle = \\alpha \\langle f, h \\rangle + \\beta \\langle g, h \\rangle$`},{title:"Norm",content:"$\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle} = \\left(\\int |f|^2\\right)^{1/2}$"},{title:"Completeness",content:`Let $\\{f_n\\}$ be Cauchy in $L^2$.

Extract subsequence with $\\|f_{n_k} - f_{n_{k+1}}\\|_2 < 2^{-k}$.

Then $g = \\sum |f_{n_{k+1}} - f_{n_k}| \\in L^2$ by comparison.

So $f_{n_k} \\to f$ pointwise a.e. for some $f$.`},{title:"Show convergence",content:`By DCT (dominated by $|f_{n_1}| + g$), $\\|f_{n_k} - f\\|_2 \\to 0$.

Since $\\{f_n\\}$ is Cauchy, the whole sequence converges to $f$ in $L^2$.`}],conclusion:"$L^2$ is complete, hence a Hilbert space. This is the Riesz-Fischer theorem."}},{id:"11-85-2",type:"exercise",number:10,statement:"State Parseval's identity for Fourier series in $L^2([0, 2\\pi])$.",solution:{steps:[{title:"Orthonormal basis",content:"The functions $e_n(x) = \\frac{1}{\\sqrt{2\\pi}} e^{inx}$ for $n \\in \\mathbb{Z}$ form an orthonormal basis of $L^2([0, 2\\pi])$."},{title:"Fourier coefficients",content:"$\\hat{f}(n) = \\langle f, e_n \\rangle = \\frac{1}{\\sqrt{2\\pi}} \\int_0^{2\\pi} f(x) e^{-inx} \\, dx$"},{title:"Parseval's identity",content:`$\\|f\\|_2^2 = \\sum_{n=-\\infty}^{\\infty} |\\hat{f}(n)|^2$

Or equivalently:
$\\frac{1}{2\\pi} \\int_0^{2\\pi} |f(x)|^2 \\, dx = \\sum_{n=-\\infty}^{\\infty} |c_n|^2$

where $c_n$ are the standard Fourier coefficients.`}],conclusion:"Parseval: The $L^2$ norm equals the $\\ell^2$ norm of Fourier coefficients. Energy is preserved."}}]}],i={partId:11,partTitle:e,textbookChapter:n,sections:t};export{i as p};
