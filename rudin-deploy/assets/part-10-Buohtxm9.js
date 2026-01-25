const e="Integration of Differential Forms",t="Chapter 10",n=[{sectionId:71,sectionTitle:"Change of Variables",textbookSection:"10.9",examples:[{id:"ex-10-71-1",type:"example",title:"Change of Variables Formula",statement:"State and illustrate the change of variables formula for multiple integrals.",solution:{steps:[{title:"Statement",content:`If $T: E \\to \\mathbb{R}^n$ is a $C^1$ diffeomorphism and $f$ is integrable on $T(E)$, then:

$\\int_{T(E)} f(y) \\, dy = \\int_E f(T(x)) |\\det T'(x)| \\, dx$`},{title:"Example: Polar coordinates",content:`$T(r, \\theta) = (r\\cos\\theta, r\\sin\\theta)$

$T'(r, \\theta) = \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix}$

$|\\det T'| = r$`},{title:"Application",content:`To integrate $f(x, y)$ over a disk of radius $R$:

$\\iint_{x^2+y^2 \\leq R^2} f(x, y) \\, dx\\, dy = \\int_0^{2\\pi} \\int_0^R f(r\\cos\\theta, r\\sin\\theta) \\cdot r \\, dr \\, d\\theta$`}],conclusion:"The Jacobian determinant accounts for how $T$ stretches/shrinks volume elements."}}],exercises:[{id:"10-71-1",type:"exercise",number:1,statement:"Use the change of variables formula to compute $\\int_0^{\\infty} e^{-x^2} \\, dx$.",solution:{steps:[{title:"Square the integral",content:`Let $I = \\int_0^{\\infty} e^{-x^2} \\, dx$.

$I^2 = \\int_0^{\\infty} e^{-x^2} \\, dx \\cdot \\int_0^{\\infty} e^{-y^2} \\, dy = \\int_0^{\\infty}\\int_0^{\\infty} e^{-(x^2+y^2)} \\, dx \\, dy$`},{title:"Convert to polar",content:"$I^2 = \\int_0^{\\pi/2} \\int_0^{\\infty} e^{-r^2} \\cdot r \\, dr \\, d\\theta$"},{title:"Compute radial integral",content:"$\\int_0^{\\infty} r e^{-r^2} \\, dr = \\left[-\\frac{1}{2}e^{-r^2}\\right]_0^{\\infty} = \\frac{1}{2}$"},{title:"Compute angular integral",content:`$I^2 = \\frac{\\pi}{2} \\cdot \\frac{1}{2} = \\frac{\\pi}{4}$

$I = \\frac{\\sqrt{\\pi}}{2}$`}],conclusion:"$\\int_0^{\\infty} e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}$. This is the Gaussian integral."}},{id:"10-71-2",type:"exercise",number:2,statement:"Compute the volume of the region bounded by $x^2/a^2 + y^2/b^2 + z^2/c^2 \\leq 1$ (an ellipsoid).",solution:{steps:[{title:"Change of variables",content:`Let $x = au$, $y = bv$, $z = cw$.

The ellipsoid becomes the unit sphere $u^2 + v^2 + w^2 \\leq 1$.

Jacobian: $\\frac{\\partial(x,y,z)}{\\partial(u,v,w)} = abc$.`},{title:"Volume of unit sphere",content:"$\\text{Vol}(\\text{unit sphere}) = \\frac{4\\pi}{3}$"},{title:"Transform",content:"$\\text{Vol}(\\text{ellipsoid}) = \\iiint_{u^2+v^2+w^2 \\leq 1} abc \\, du\\, dv\\, dw = abc \\cdot \\frac{4\\pi}{3}$"}],conclusion:"Volume $= \\frac{4\\pi abc}{3}$. When $a = b = c = r$, this gives $\\frac{4\\pi r^3}{3}$."}}]},{sectionId:72,sectionTitle:"Differential Forms",textbookSection:"10.10-10.21",examples:[{id:"ex-10-72-1",type:"example",title:"Differential Forms and Wedge Product",statement:"Define differential forms and the wedge product.",solution:{steps:[{title:"0-forms",content:"A 0-form is a smooth function $f: U \\to \\mathbb{R}$."},{title:"1-forms",content:`A 1-form is $\\omega = \\sum_{i=1}^n f_i \\, dx_i$ where $f_i$ are smooth functions.

It acts on vectors: $\\omega(v) = \\sum f_i v_i$.`},{title:"2-forms",content:`A 2-form is $\\omega = \\sum_{i<j} f_{ij} \\, dx_i \\wedge dx_j$.

In $\\mathbb{R}^3$: $\\omega = f_{12} \\, dx \\wedge dy + f_{13} \\, dx \\wedge dz + f_{23} \\, dy \\wedge dz$.`},{title:"Wedge product",content:`$dx_i \\wedge dx_j = -dx_j \\wedge dx_i$ (antisymmetric).

$dx_i \\wedge dx_i = 0$.

Example: $(dx + dy) \\wedge (dx - dz) = dx \\wedge dx - dx \\wedge dz + dy \\wedge dx - dy \\wedge dz$
$= 0 - dx \\wedge dz - dx \\wedge dy - dy \\wedge dz$.`}],conclusion:"Differential forms generalize functions and provide the natural objects for integration."}}],exercises:[{id:"10-72-1",type:"exercise",number:3,statement:"Compute the exterior derivative of $\\omega = xy \\, dx + yz \\, dy + zx \\, dz$ in $\\mathbb{R}^3$.",solution:{steps:[{title:"Definition of d",content:`For a 1-form $\\omega = \\sum f_i \\, dx_i$:
$d\\omega = \\sum df_i \\wedge dx_i = \\sum_j \\frac{\\partial f_i}{\\partial x_j} dx_j \\wedge dx_i$`},{title:"Compute d(xy dx)",content:`$d(xy) = y \\, dx + x \\, dy$

$d(xy \\, dx) = (y \\, dx + x \\, dy) \\wedge dx = y \\, dx \\wedge dx + x \\, dy \\wedge dx = -x \\, dx \\wedge dy$`},{title:"Compute d(yz dy)",content:`$d(yz) = z \\, dy + y \\, dz$

$d(yz \\, dy) = z \\, dy \\wedge dy + y \\, dz \\wedge dy = -y \\, dy \\wedge dz$`},{title:"Compute d(zx dz)",content:`$d(zx) = x \\, dz + z \\, dx$

$d(zx \\, dz) = x \\, dz \\wedge dz + z \\, dx \\wedge dz = -z \\, dx \\wedge dz$`},{title:"Combine",content:`$d\\omega = -x \\, dx \\wedge dy - y \\, dy \\wedge dz - z \\, dx \\wedge dz$

Or in standard order: $d\\omega = -x \\, dx \\wedge dy + z \\, dz \\wedge dx - y \\, dy \\wedge dz$`}],conclusion:"The exterior derivative of a 1-form is a 2-form. This generalizes the curl in vector calculus."}}]},{sectionId:74,sectionTitle:"Stokes' Theorem",textbookSection:"10.33",examples:[{id:"ex-10-74-1",type:"example",title:"Stokes' Theorem",statement:"State the general Stokes' theorem for differential forms.",solution:{steps:[{title:"Statement",content:`Let $\\Omega$ be a smooth oriented $k$-chain in $\\mathbb{R}^n$, and let $\\omega$ be a $(k-1)$-form of class $C^1$. Then:

$\\int_{\\partial\\Omega} \\omega = \\int_{\\Omega} d\\omega$`},{title:"Special cases",content:`When $k = 1$ (curve): $\\int_a^b df = f(b) - f(a)$ (FTC)

When $k = 2$ (surface): $\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$ (Classical Stokes)

When $k = 3$ (solid): $\\oiint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F}) \\, dV$ (Divergence theorem)`}],conclusion:"The general Stokes' theorem unifies all classical integral theorems of vector calculus."}}],exercises:[{id:"10-74-1",type:"exercise",number:4,statement:"Use Stokes' theorem to evaluate $\\oint_C y \\, dx + z \\, dy + x \\, dz$ where $C$ is the circle $x^2 + y^2 = 1$, $z = 0$, oriented counterclockwise.",solution:{steps:[{title:"Setup",content:`Let $\\omega = y \\, dx + z \\, dy + x \\, dz$.

By Stokes: $\\oint_C \\omega = \\iint_S d\\omega$ where $S$ is any surface with $\\partial S = C$.`},{title:"Compute dω",content:`$d\\omega = dy \\wedge dx + dz \\wedge dy + dx \\wedge dz$
$= -dx \\wedge dy - dy \\wedge dz + dx \\wedge dz$`},{title:"Choose surface",content:`Take $S$ to be the unit disk $x^2 + y^2 \\leq 1$, $z = 0$.

On this surface, $dz = 0$, so the only surviving term is $-dx \\wedge dy$.`},{title:"Integrate",content:"$\\iint_S d\\omega = \\iint_S (-1) \\, dx \\wedge dy = -\\iint_S dx \\, dy = -\\pi$"}],conclusion:"$\\oint_C y \\, dx + z \\, dy + x \\, dz = -\\pi$."}},{id:"10-74-2",type:"exercise",number:5,statement:"Prove Green's theorem as a special case of Stokes' theorem.",solution:{steps:[{title:"Setup",content:"Green's theorem: $\\oint_C P \\, dx + Q \\, dy = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dx \\, dy$"},{title:"Define 1-form",content:"Let $\\omega = P \\, dx + Q \\, dy$ (a 1-form in $\\mathbb{R}^2$)."},{title:"Compute exterior derivative",content:`$d\\omega = dP \\wedge dx + dQ \\wedge dy$
$= (P_x \\, dx + P_y \\, dy) \\wedge dx + (Q_x \\, dx + Q_y \\, dy) \\wedge dy$
$= P_y \\, dy \\wedge dx + Q_x \\, dx \\wedge dy$
$= (Q_x - P_y) \\, dx \\wedge dy$`},{title:"Apply Stokes",content:`$\\oint_{\\partial D} \\omega = \\iint_D d\\omega$

$\\oint_C P \\, dx + Q \\, dy = \\iint_D (Q_x - P_y) \\, dx \\, dy$`}],conclusion:"Green's theorem is exactly Stokes' theorem for 1-forms on 2-chains in $\\mathbb{R}^2$."}}]},{sectionId:76,sectionTitle:"Vector Analysis",textbookSection:"10.42-10.52",examples:[],exercises:[{id:"10-76-1",type:"exercise",number:6,statement:"Show that $\\nabla \\times (\\nabla f) = 0$ for any $C^2$ function $f$.",solution:{steps:[{title:"Compute gradient",content:"$\\nabla f = (f_x, f_y, f_z)$"},{title:"Compute curl",content:`$\\nabla \\times (\\nabla f) = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ f_x & f_y & f_z \\end{vmatrix}$

$= (f_{zy} - f_{yz}, f_{xz} - f_{zx}, f_{yx} - f_{xy})$`},{title:"Apply equality of mixed partials",content:`For $f \\in C^2$: $f_{xy} = f_{yx}$, $f_{xz} = f_{zx}$, $f_{yz} = f_{zy}$.

Therefore $\\nabla \\times (\\nabla f) = (0, 0, 0) = \\mathbf{0}$.`}],conclusion:"The curl of a gradient is zero. In differential forms: $d(df) = d^2 f = 0$."}},{id:"10-76-2",type:"exercise",number:7,statement:"Show that $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ for any $C^2$ vector field $\\mathbf{F}$.",solution:{steps:[{title:"Let F = (P, Q, R)",content:"$\\nabla \\times \\mathbf{F} = (R_y - Q_z, P_z - R_x, Q_x - P_y)$"},{title:"Compute divergence",content:`$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = (R_y - Q_z)_x + (P_z - R_x)_y + (Q_x - P_y)_z$

$= R_{yx} - Q_{zx} + P_{zy} - R_{xy} + Q_{xz} - P_{yz}$`},{title:"Apply mixed partials",content:`$= R_{xy} - Q_{xz} + P_{yz} - R_{xy} + Q_{xz} - P_{yz} = 0$

(Using $R_{yx} = R_{xy}$, etc.)`}],conclusion:"The divergence of a curl is zero. In differential forms: $d^2 = 0$."}}]}],i={partId:10,partTitle:e,textbookChapter:t,sections:n};export{i as p};
