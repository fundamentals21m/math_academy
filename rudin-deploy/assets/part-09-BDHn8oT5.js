const e="Functions of Several Variables",t="Chapter 9",n=[{sectionId:59,sectionTitle:"Linear Transformations",textbookSection:"9.1-9.8",examples:[{id:"ex-9-59-1",type:"example",title:"Operator Norm",statement:"Define and compute the operator norm of a linear transformation.",solution:{steps:[{title:"Definition",content:`For $A: \\mathbb{R}^n \\to \\mathbb{R}^m$ linear, the operator norm is:

$\\|A\\| = \\sup\\{|Ax| : x \\in \\mathbb{R}^n, |x| \\leq 1\\}$

Equivalently: $\\|A\\| = \\sup_{x \\neq 0} \\frac{|Ax|}{|x|}$`},{title:"Properties",content:`1. $|Ax| \\leq \\|A\\| \\cdot |x|$ for all $x$
2. $\\|AB\\| \\leq \\|A\\| \\cdot \\|B\\|$
3. $\\|A + B\\| \\leq \\|A\\| + \\|B\\|$`},{title:"Example calculation",content:`For $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$:

$|A(x, y)|^2 = 4x^2 + 9y^2$

Maximize subject to $x^2 + y^2 = 1$: max at $(0, \\pm 1)$, giving $|Ax| = 3$.

So $\\|A\\| = 3$ (the largest singular value).`}],conclusion:"The operator norm measures the maximum stretching factor of a linear map."}}],exercises:[{id:"9-59-1",type:"exercise",number:1,statement:"If $A$ is a real $m \\times n$ matrix, prove that $\\|A\\|^2$ equals the largest eigenvalue of $A^T A$.",solution:{steps:[{title:"Setup",content:"$\\|A\\|^2 = \\sup_{|x|=1} |Ax|^2 = \\sup_{|x|=1} (Ax)^T(Ax) = \\sup_{|x|=1} x^T A^T A x$."},{title:"Properties of A^T A",content:`$A^T A$ is symmetric and positive semi-definite.

Its eigenvalues $\\lambda_1 \\geq \\lambda_2 \\geq \\cdots \\geq \\lambda_n \\geq 0$ are real and non-negative.`},{title:"Diagonalization",content:`There's an orthonormal basis of eigenvectors $v_1, \\ldots, v_n$ with $A^T A v_i = \\lambda_i v_i$.

For $x = \\sum c_i v_i$ with $\\sum c_i^2 = 1$:
$x^T A^T A x = \\sum c_i^2 \\lambda_i \\leq \\lambda_1 \\sum c_i^2 = \\lambda_1$.`},{title:"Maximum achieved",content:`Equality when $x = v_1$: $v_1^T A^T A v_1 = \\lambda_1$.

Thus $\\|A\\|^2 = \\lambda_1$.`}],conclusion:"$\\|A\\| = \\sqrt{\\lambda_{\\max}(A^T A)}$. The $\\sqrt{\\lambda_i}$ are the singular values of $A$."}},{id:"9-59-2",type:"exercise",number:2,statement:"If $A \\in L(\\mathbb{R}^n, \\mathbb{R}^m)$ and $B \\in L(\\mathbb{R}^m, \\mathbb{R}^k)$, prove that $\\|BA\\| \\leq \\|B\\| \\cdot \\|A\\|$.",solution:{steps:[{title:"Start with definition",content:"$\\|BA\\| = \\sup_{|x|=1} |BAx|$"},{title:"Apply B's norm",content:`For any $x$ with $|x| = 1$:
$|BAx| \\leq \\|B\\| \\cdot |Ax|$`},{title:"Apply A's norm",content:"$|Ax| \\leq \\|A\\| \\cdot |x| = \\|A\\|$"},{title:"Combine",content:`$|BAx| \\leq \\|B\\| \\cdot \\|A\\|$ for all $|x| = 1$.

Taking sup: $\\|BA\\| \\leq \\|B\\| \\cdot \\|A\\|$.`}],conclusion:"The operator norm is submultiplicative. This makes $L(\\mathbb{R}^n)$ a normed algebra."}}]},{sectionId:60,sectionTitle:"Differentiation",textbookSection:"9.11-9.19",examples:[],exercises:[{id:"9-60-1",type:"exercise",number:3,statement:"Define $f(0, 0) = 0$ and $f(x, y) = \\frac{xy}{x^2 + y^2}$ if $(x, y) \\neq (0, 0)$. Show that the partial derivatives exist at the origin but $f$ is not differentiable there.",solution:{steps:[{title:"Partial derivatives at origin",content:`$\\frac{\\partial f}{\\partial x}(0, 0) = \\lim_{h \\to 0} \\frac{f(h, 0) - f(0, 0)}{h} = \\lim_{h \\to 0} \\frac{0}{h} = 0$

Similarly, $\\frac{\\partial f}{\\partial y}(0, 0) = 0$.`},{title:"Check differentiability",content:`If $f$ were differentiable at $(0,0)$, then $f(x,y) = f(0,0) + f_x(0,0)x + f_y(0,0)y + o(|(x,y)|)$.

That is, $\\frac{xy}{x^2+y^2} = o(\\sqrt{x^2+y^2})$ as $(x,y) \\to (0,0)$.`},{title:"Test along y = x",content:`Along $y = x$: $f(x, x) = \\frac{x^2}{2x^2} = \\frac{1}{2}$.

$\\frac{f(x,x)}{|(x,x)|} = \\frac{1/2}{\\sqrt{2}|x|} \\to \\infty$ as $x \\to 0$.

This is not $o(1)$.`},{title:"Conclude",content:"The limit in the differentiability definition doesn't exist, so $f$ is not differentiable at the origin."}],conclusion:"Existence of partial derivatives does not imply differentiability. The total derivative requires a stronger condition."}},{id:"9-60-2",type:"exercise",number:4,statement:"Suppose $f$ is a real function defined in an open set $E \\subset \\mathbb{R}^n$, and the partial derivatives $D_1 f, \\ldots, D_n f$ exist and are bounded in $E$. Prove that $f$ is continuous in $E$.",solution:{steps:[{title:"Mean Value Theorem approach",content:`Fix $a \\in E$ and let $h = (h_1, \\ldots, h_n)$ be small enough that $a + h \\in E$.

Write $f(a + h) - f(a)$ as a telescoping sum.`},{title:"Telescoping",content:`Let $a^{(0)} = a$ and $a^{(k)} = a + \\sum_{i=1}^k h_i e_i$.

$f(a + h) - f(a) = \\sum_{k=1}^n [f(a^{(k)}) - f(a^{(k-1)})]$`},{title:"Apply MVT",content:`Each difference is $D_k f(\\xi_k) \\cdot h_k$ for some $\\xi_k$ on the segment.

If $|D_k f| \\leq M$ everywhere, then:
$|f(a+h) - f(a)| \\leq \\sum_{k=1}^n M|h_k| \\leq Mn|h|$.`},{title:"Conclude continuity",content:"As $h \\to 0$, $|f(a+h) - f(a)| \\to 0$, so $f$ is continuous at $a$."}],conclusion:"Bounded partial derivatives imply continuity (and in fact Lipschitz continuity)."}}]},{sectionId:62,sectionTitle:"The Inverse Function Theorem",textbookSection:"9.24-9.26",examples:[{id:"ex-9-62-1",type:"example",title:"Inverse Function Theorem",statement:"State and explain the Inverse Function Theorem.",solution:{steps:[{title:"Statement",content:`Let $f: E \\to \\mathbb{R}^n$ where $E \\subset \\mathbb{R}^n$ is open. Suppose $f \\in C^1(E)$ and $f'(a)$ is invertible for some $a \\in E$.

Then there exist open sets $U \\ni a$ and $V \\ni f(a)$ such that $f: U \\to V$ is a bijection with $C^1$ inverse $g: V \\to U$.

Moreover, $g'(f(x)) = [f'(x)]^{-1}$ for $x \\in U$.`},{title:"Key point",content:`The condition $\\det f'(a) \\neq 0$ ensures local invertibility.

The theorem is local: we only get an inverse near $a$.`},{title:"Example",content:`$f(x, y) = (e^x \\cos y, e^x \\sin y)$ (polar to Cartesian).

$f'(x,y) = \\begin{pmatrix} e^x \\cos y & -e^x \\sin y \\\\ e^x \\sin y & e^x \\cos y \\end{pmatrix}$

$\\det f' = e^{2x} \\neq 0$ everywhere.

So $f$ is locally invertible at every point.`}],conclusion:"The IFT guarantees smooth local inverses when the derivative is invertible."}}],exercises:[{id:"9-62-1",type:"exercise",number:5,statement:"Let $f(x, y) = (e^x \\cos y - 1, e^x \\sin y)$. Compute $f'$ and verify that $f$ is locally invertible near the origin. Find the derivative of the inverse at $f(0, 0)$.",solution:{steps:[{title:"Compute f(0,0)",content:"$f(0, 0) = (e^0 \\cos 0 - 1, e^0 \\sin 0) = (0, 0)$."},{title:"Compute Jacobian",content:`$f'(x, y) = \\begin{pmatrix} e^x \\cos y & -e^x \\sin y \\\\ e^x \\sin y & e^x \\cos y \\end{pmatrix}$

At $(0, 0)$: $f'(0, 0) = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I$.`},{title:"Check invertibility",content:`$\\det f'(0, 0) = 1 \\neq 0$.

By IFT, $f$ is locally invertible near the origin.`},{title:"Inverse derivative",content:"$g'(f(0,0)) = g'(0, 0) = [f'(0, 0)]^{-1} = I^{-1} = I$."}],conclusion:"Near the origin, $f$ and its inverse both have derivative $I$, as expected for a near-identity map."}}]},{sectionId:63,sectionTitle:"The Implicit Function Theorem",textbookSection:"9.27-9.28",examples:[],exercises:[{id:"9-63-1",type:"exercise",number:6,statement:"Consider $F(x, y) = x^2 + y^2 - 1$. Use the Implicit Function Theorem to find $\\frac{dy}{dx}$ near points where $y \\neq 0$.",solution:{steps:[{title:"Setup",content:`$F(x, y) = x^2 + y^2 - 1 = 0$ defines the unit circle.

$\\frac{\\partial F}{\\partial x} = 2x$, $\\frac{\\partial F}{\\partial y} = 2y$.`},{title:"Apply IFT",content:`At $(a, b)$ with $F(a, b) = 0$ and $\\frac{\\partial F}{\\partial y}(a, b) = 2b \\neq 0$:

By IFT, near $(a, b)$, $y$ can be expressed as a function of $x$: $y = g(x)$.`},{title:"Implicit differentiation",content:"$\\frac{dy}{dx} = -\\frac{\\partial F/\\partial x}{\\partial F/\\partial y} = -\\frac{2x}{2y} = -\\frac{x}{y}$"},{title:"Verify",content:`From $y = \\pm\\sqrt{1 - x^2}$:
$\\frac{dy}{dx} = \\frac{\\mp x}{\\sqrt{1-x^2}} = -\\frac{x}{y}$. ✓`}],conclusion:"The IFT gives us $dy/dx$ without explicitly solving for $y$."}},{id:"9-63-2",type:"exercise",number:7,statement:"Let $F(x, y, z) = x^3 + y^3 + z^3 - 3xyz$. Near which points can we solve $F = 0$ for $z$ as a function of $(x, y)$?",solution:{steps:[{title:"Compute partial derivative",content:"$\\frac{\\partial F}{\\partial z} = 3z^2 - 3xy$"},{title:"IFT condition",content:`The IFT allows us to solve for $z = g(x, y)$ near $(a, b, c)$ if:
1. $F(a, b, c) = 0$
2. $\\frac{\\partial F}{\\partial z}(a, b, c) = 3c^2 - 3ab \\neq 0$`},{title:"Failure locus",content:`IFT fails when $z^2 = xy$ together with $x^3 + y^3 + z^3 = 3xyz$.

Substituting $z^2 = xy$: $x^3 + y^3 + z^3 = 3z \\cdot z^2 = 3z^3$, so $x^3 + y^3 = 2z^3$.`},{title:"Identify singular points",content:`The surface $F = 0$ is singular where all partials vanish:
$3x^2 - 3yz = 0$, $3y^2 - 3xz = 0$, $3z^2 - 3xy = 0$.

This gives $x^2 = yz$, $y^2 = xz$, $z^2 = xy$.

Solutions: $(t, t, t)$ for any $t$, lying on the line $x = y = z$.`}],conclusion:"We can solve for $z$ except along the diagonal $x = y = z$ where the surface is singular."}}]},{sectionId:67,sectionTitle:"Differentiation of Integrals",textbookSection:"9.42",examples:[],exercises:[{id:"9-67-1",type:"exercise",number:8,statement:"Let $F(x) = \\int_0^x e^{-t^2} \\, dt$. Compute $F'(x)$ and show that $F$ is bounded.",solution:{steps:[{title:"Apply FTC",content:`By the Fundamental Theorem of Calculus:
$F'(x) = e^{-x^2}$`},{title:"Bound F",content:`For $x \\geq 0$: $F(x) = \\int_0^x e^{-t^2} \\, dt \\leq \\int_0^{\\infty} e^{-t^2} \\, dt = \\frac{\\sqrt{\\pi}}{2}$

For $x < 0$: $F(x) = -\\int_0^{|x|} e^{-t^2} \\, dt \\geq -\\frac{\\sqrt{\\pi}}{2}$`},{title:"Limits",content:`$\\lim_{x \\to +\\infty} F(x) = \\frac{\\sqrt{\\pi}}{2}$

$\\lim_{x \\to -\\infty} F(x) = -\\frac{\\sqrt{\\pi}}{2}$`}],conclusion:"$F(x) = \\frac{\\sqrt{\\pi}}{2} \\text{erf}(x)$ where erf is the error function. It's bounded: $|F(x)| \\leq \\frac{\\sqrt{\\pi}}{2}$."}}]}],i={partId:9,partTitle:e,textbookChapter:t,sections:n};export{i as p};
