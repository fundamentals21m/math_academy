const t="Introduction to Differential Equations",e="Chapter 8",n=[{sectionId:52,sectionTitle:"Introduction to Differential Equations",textbookSection:"I 8.1-8.3",examples:[{id:"ex-9-52-1",type:"example",title:"What is a Differential Equation?",statement:"Define a differential equation and classify $\\frac{dy}{dx} = 2xy$ by order and linearity.",solution:{steps:[{title:"Definition",content:`A **differential equation** is an equation involving an unknown function and one or more of its derivatives.

The **order** is the highest derivative that appears.
An equation is **linear** if the unknown function and its derivatives appear only to the first power and are not multiplied together.`},{title:"Classify the Given Equation",content:`$\\frac{dy}{dx} = 2xy$

**Order:** 1 (only first derivative appears)

**Linearity:** This is linear in $y$ because $y$ appears to the first power only. We can rewrite it as:
$\\frac{dy}{dx} - 2xy = 0$`}],conclusion:"This is a first-order linear differential equation."}},{id:"ex-9-52-2",type:"example",title:"Verifying Solutions",statement:"Verify that $y = Ce^{x^2}$ is the general solution of $\\frac{dy}{dx} = 2xy$.",solution:{steps:[{title:"Differentiate the Proposed Solution",content:`If $y = Ce^{x^2}$, then:
$$\\frac{dy}{dx} = C \\cdot e^{x^2} \\cdot 2x = 2xCe^{x^2} = 2xy$$`},{title:"Verify",content:`The equation $\\frac{dy}{dx} = 2xy$ is satisfied for any constant $C$.

Since this solution contains one arbitrary constant and the equation is first-order, this is the general solution.`}],conclusion:"$y = Ce^{x^2}$ is indeed the general solution of $\\frac{dy}{dx} = 2xy$."}}],exercises:[{id:"9-52-1",type:"exercise",number:1,statement:"Classify the differential equation $y'' + 3y' - 2y = \\sin x$ by order and linearity.",solution:{steps:[{title:"Determine Order",content:"The highest derivative is $y''$ (second derivative), so this is a **second-order** equation."},{title:"Check Linearity",content:`$y$, $y'$, and $y''$ all appear to the first power and are not multiplied together. The equation can be written as:
$y'' + 3y' - 2y = \\sin x$

This is **linear** (with constant coefficients).`}],conclusion:"Second-order linear differential equation with constant coefficients."}},{id:"9-52-2",type:"exercise",number:2,statement:"Verify that $y = \\sin x + \\cos x$ is a solution of $y'' + y = 0$.",solution:{steps:[{title:"Compute Derivatives",content:`$y = \\sin x + \\cos x$
$y' = \\cos x - \\sin x$
$y'' = -\\sin x - \\cos x$`},{title:"Substitute",content:"$y'' + y = (-\\sin x - \\cos x) + (\\sin x + \\cos x) = 0$ ✓"}],conclusion:"$y = \\sin x + \\cos x$ is a solution of $y'' + y = 0$."}},{id:"9-52-3",type:"exercise",number:3,statement:"Is $(y')^2 + y = x$ linear? Explain.",solution:{steps:[{title:"Check Linearity Condition",content:`The term $(y')^2$ means the first derivative is squared.

For linearity, $y$ and all its derivatives must appear to the first power only.`},{title:"Conclusion",content:"Since $y'$ is squared, this equation is **nonlinear**."}],conclusion:"No, this is a nonlinear first-order equation because of the $(y')^2$ term."}}]},{sectionId:53,sectionTitle:"First-Order Linear Equations",textbookSection:"I 8.4-8.7",examples:[{id:"ex-9-53-1",type:"example",title:"The Integrating Factor Method",statement:"Solve the first-order linear equation $\\frac{dy}{dx} + P(x)y = Q(x)$ using integrating factors.",solution:{steps:[{title:"The Standard Form",content:`A first-order linear equation has the form:
$$\\frac{dy}{dx} + P(x)y = Q(x)$$`},{title:"Find the Integrating Factor",content:`Multiply both sides by $\\mu(x) = e^{\\int P(x)\\,dx}$:
$$e^{\\int P\\,dx}\\frac{dy}{dx} + P(x)e^{\\int P\\,dx}y = Q(x)e^{\\int P\\,dx}$$

The left side is $\\frac{d}{dx}\\left[ye^{\\int P\\,dx}\\right]$.`},{title:"Integrate",content:`$$ye^{\\int P\\,dx} = \\int Q(x)e^{\\int P\\,dx}\\,dx + C$$

$$y = e^{-\\int P\\,dx}\\left[\\int Q(x)e^{\\int P\\,dx}\\,dx + C\\right]$$`}],conclusion:"The general solution is $y = e^{-\\int P\\,dx}\\left[\\int Qe^{\\int P\\,dx}\\,dx + C\\right]$."}},{id:"ex-9-53-2",type:"example",title:"Solving a First-Order Linear Equation",statement:"Solve $\\frac{dy}{dx} + \\frac{2}{x}y = x^3$ for $x > 0$.",solution:{steps:[{title:"Identify P(x) and Q(x)",content:"$P(x) = \\frac{2}{x}$, $Q(x) = x^3$"},{title:"Find the Integrating Factor",content:"$\\mu(x) = e^{\\int \\frac{2}{x}\\,dx} = e^{2\\ln x} = e^{\\ln x^2} = x^2$"},{title:"Multiply and Recognize the Derivative",content:`$x^2\\frac{dy}{dx} + 2xy = x^5$

Left side is $\\frac{d}{dx}[x^2 y]$.`},{title:"Integrate",content:`$x^2 y = \\int x^5\\,dx = \\frac{x^6}{6} + C$

$y = \\frac{x^4}{6} + \\frac{C}{x^2}$`}],conclusion:"$y = \\frac{x^4}{6} + \\frac{C}{x^2}$"}}],exercises:[{id:"9-53-1",type:"exercise",number:1,statement:"Solve $\\frac{dy}{dx} + y = e^x$.",solution:{steps:[{title:"Integrating Factor",content:"$P(x) = 1$, so $\\mu(x) = e^{\\int 1\\,dx} = e^x$"},{title:"Multiply and Integrate",content:`$e^x\\frac{dy}{dx} + e^x y = e^{2x}$

$\\frac{d}{dx}[e^x y] = e^{2x}$

$e^x y = \\frac{e^{2x}}{2} + C$

$y = \\frac{e^x}{2} + Ce^{-x}$`}],conclusion:"$y = \\frac{e^x}{2} + Ce^{-x}$"}},{id:"9-53-2",type:"exercise",number:2,statement:"Solve $\\frac{dy}{dx} - 3y = 0$ with $y(0) = 2$.",solution:{steps:[{title:"General Solution",content:`$\\mu(x) = e^{-3x}$

$\\frac{d}{dx}[e^{-3x}y] = 0$

$e^{-3x}y = C$

$y = Ce^{3x}$`},{title:"Apply Initial Condition",content:"$y(0) = C \\cdot 1 = 2$, so $C = 2$."}],conclusion:"$y = 2e^{3x}$"}},{id:"9-53-3",type:"exercise",number:3,statement:"Solve $x\\frac{dy}{dx} - y = x^2$ for $x > 0$.",solution:{steps:[{title:"Put in Standard Form",content:`$\\frac{dy}{dx} - \\frac{1}{x}y = x$

$P(x) = -\\frac{1}{x}$`},{title:"Integrating Factor",content:"$\\mu(x) = e^{-\\int \\frac{1}{x}\\,dx} = e^{-\\ln x} = \\frac{1}{x}$"},{title:"Solve",content:`$\\frac{1}{x}\\frac{dy}{dx} - \\frac{y}{x^2} = 1$

$\\frac{d}{dx}\\left[\\frac{y}{x}\\right] = 1$

$\\frac{y}{x} = x + C$

$y = x^2 + Cx$`}],conclusion:"$y = x^2 + Cx$"}}]},{sectionId:54,sectionTitle:"Separable Equations",textbookSection:"I 8.8-8.10",examples:[{id:"ex-9-54-1",type:"example",title:"Separable Equations",statement:"Define a separable equation and solve $\\frac{dy}{dx} = \\frac{x}{y}$.",solution:{steps:[{title:"Definition",content:`A first-order equation is **separable** if it can be written as:
$$\\frac{dy}{dx} = f(x)g(y)$$
or equivalently, $M(x)\\,dx + N(y)\\,dy = 0$.`},{title:"Separate Variables",content:`$\\frac{dy}{dx} = \\frac{x}{y}$

$y\\,dy = x\\,dx$`},{title:"Integrate Both Sides",content:`$\\int y\\,dy = \\int x\\,dx$

$\\frac{y^2}{2} = \\frac{x^2}{2} + C_1$

$y^2 - x^2 = C$ (where $C = 2C_1$)`}],conclusion:"The solution is $y^2 - x^2 = C$, a family of hyperbolas."}},{id:"ex-9-54-2",type:"example",title:"Separable Equation with Initial Condition",statement:"Solve $\\frac{dy}{dx} = y^2$ with $y(0) = 1$.",solution:{steps:[{title:"Separate and Integrate",content:`$\\frac{dy}{y^2} = dx$

$\\int y^{-2}\\,dy = \\int dx$

$-\\frac{1}{y} = x + C$`},{title:"Solve for y",content:"$y = -\\frac{1}{x + C} = \\frac{1}{-(x+C)}$"},{title:"Apply Initial Condition",content:"$y(0) = 1$: $1 = -\\frac{1}{C}$, so $C = -1$."}],conclusion:"$y = \\frac{1}{1-x}$ (valid for $x < 1$)"}}],exercises:[{id:"9-54-1",type:"exercise",number:1,statement:"Solve $\\frac{dy}{dx} = xy$.",solution:{steps:[{title:"Separate Variables",content:"$\\frac{dy}{y} = x\\,dx$"},{title:"Integrate",content:`$\\ln|y| = \\frac{x^2}{2} + C_1$

$|y| = e^{x^2/2 + C_1} = Ae^{x^2/2}$ where $A = e^{C_1} > 0$`},{title:"General Solution",content:"$y = Ce^{x^2/2}$ where $C$ can be any constant."}],conclusion:"$y = Ce^{x^2/2}$"}},{id:"9-54-2",type:"exercise",number:2,statement:"Solve $\\frac{dy}{dx} = \\frac{1+y^2}{1+x^2}$.",solution:{steps:[{title:"Separate Variables",content:"$\\frac{dy}{1+y^2} = \\frac{dx}{1+x^2}$"},{title:"Integrate",content:"$\\arctan y = \\arctan x + C$"},{title:"Solve for y",content:"$y = \\tan(\\arctan x + C)$"}],conclusion:"$y = \\tan(\\arctan x + C)$ or $\\arctan y - \\arctan x = C$"}},{id:"9-54-3",type:"exercise",number:3,statement:"Solve $\\frac{dy}{dx} = e^{x+y}$ with $y(0) = 0$.",solution:{steps:[{title:"Rewrite and Separate",content:`$\\frac{dy}{dx} = e^x \\cdot e^y$

$e^{-y}\\,dy = e^x\\,dx$`},{title:"Integrate",content:"$-e^{-y} = e^x + C$"},{title:"Apply Initial Condition",content:"$y(0) = 0$: $-e^0 = e^0 + C$, so $-1 = 1 + C$, $C = -2$."},{title:"Solve for y",content:`$-e^{-y} = e^x - 2$
$e^{-y} = 2 - e^x$
$y = -\\ln(2 - e^x)$`}],conclusion:"$y = -\\ln(2 - e^x)$ (valid for $x < \\ln 2$)"}}]},{sectionId:55,sectionTitle:"Homogeneous First-Order Equations",textbookSection:"I 8.11-8.13",examples:[{id:"ex-9-55-1",type:"example",title:"Homogeneous Equations",statement:"Define a homogeneous first-order equation and explain the substitution method.",solution:{steps:[{title:"Definition",content:`A first-order equation $\\frac{dy}{dx} = F(x,y)$ is **homogeneous** if $F(tx, ty) = F(x, y)$ for all $t \\neq 0$.

Equivalently, it can be written as $\\frac{dy}{dx} = g\\left(\\frac{y}{x}\\right)$.`},{title:"The Substitution",content:`Let $v = \\frac{y}{x}$, so $y = vx$.

Then $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$.`},{title:"Transform the Equation",content:`The equation $\\frac{dy}{dx} = g(v)$ becomes:
$$v + x\\frac{dv}{dx} = g(v)$$
$$x\\frac{dv}{dx} = g(v) - v$$

This is separable in $v$ and $x$.`}],conclusion:"The substitution $v = y/x$ converts a homogeneous equation to a separable equation."}},{id:"ex-9-55-2",type:"example",title:"Solving a Homogeneous Equation",statement:"Solve $\\frac{dy}{dx} = \\frac{x^2 + y^2}{xy}$.",solution:{steps:[{title:"Check Homogeneity",content:"$F(tx, ty) = \\frac{t^2x^2 + t^2y^2}{tx \\cdot ty} = \\frac{t^2(x^2 + y^2)}{t^2xy} = \\frac{x^2 + y^2}{xy} = F(x,y)$ ✓"},{title:"Substitute v = y/x",content:`$\\frac{dy}{dx} = \\frac{x^2 + y^2}{xy} = \\frac{1 + (y/x)^2}{y/x} = \\frac{1 + v^2}{v}$

$v + x\\frac{dv}{dx} = \\frac{1 + v^2}{v} = \\frac{1}{v} + v$`},{title:"Simplify and Separate",content:`$x\\frac{dv}{dx} = \\frac{1}{v}$

$v\\,dv = \\frac{dx}{x}$`},{title:"Integrate",content:`$\\frac{v^2}{2} = \\ln|x| + C$

$\\frac{y^2}{2x^2} = \\ln|x| + C$

$y^2 = 2x^2\\ln|x| + Cx^2$`}],conclusion:"$y^2 = x^2(2\\ln|x| + C)$"}}],exercises:[{id:"9-55-1",type:"exercise",number:1,statement:"Solve $\\frac{dy}{dx} = \\frac{y}{x} + 1$.",solution:{steps:[{title:"Substitute v = y/x",content:`$v + x\\frac{dv}{dx} = v + 1$

$x\\frac{dv}{dx} = 1$`},{title:"Separate and Integrate",content:`$dv = \\frac{dx}{x}$

$v = \\ln|x| + C$`},{title:"Back-Substitute",content:`$\\frac{y}{x} = \\ln|x| + C$

$y = x\\ln|x| + Cx$`}],conclusion:"$y = x(\\ln|x| + C)$"}},{id:"9-55-2",type:"exercise",number:2,statement:"Solve $\\frac{dy}{dx} = \\frac{x + y}{x - y}$.",solution:{steps:[{title:"Substitute v = y/x",content:`$\\frac{dy}{dx} = \\frac{1 + y/x}{1 - y/x} = \\frac{1+v}{1-v}$

$v + x\\frac{dv}{dx} = \\frac{1+v}{1-v}$`},{title:"Simplify",content:"$x\\frac{dv}{dx} = \\frac{1+v}{1-v} - v = \\frac{1+v - v(1-v)}{1-v} = \\frac{1 + v^2}{1-v}$"},{title:"Separate",content:"$\\frac{1-v}{1+v^2}\\,dv = \\frac{dx}{x}$"},{title:"Integrate",content:"$\\arctan v - \\frac{1}{2}\\ln(1+v^2) = \\ln|x| + C$"}],conclusion:"$\\arctan\\frac{y}{x} - \\frac{1}{2}\\ln\\left(1 + \\frac{y^2}{x^2}\\right) = \\ln|x| + C$"}},{id:"9-55-3",type:"exercise",number:3,statement:"Solve $(x^2 + y^2)\\,dx - xy\\,dy = 0$.",solution:{steps:[{title:"Rewrite",content:`$\\frac{dy}{dx} = \\frac{x^2 + y^2}{xy}$

This is the same as Example 2.`},{title:"Solution",content:`Following the same steps as Example 2:
$y^2 = x^2(2\\ln|x| + C)$`}],conclusion:"$y^2 = x^2(2\\ln|x| + C)$"}}]},{sectionId:56,sectionTitle:"Second-Order Linear Equations: Homogeneous",textbookSection:"I 8.14-8.17",examples:[{id:"ex-9-56-1",type:"example",title:"Constant Coefficient Equations",statement:"Solve $y'' - 5y' + 6y = 0$.",solution:{steps:[{title:"The Characteristic Equation",content:`For $ay'' + by' + cy = 0$, try $y = e^{rx}$.

This gives the characteristic equation $ar^2 + br + c = 0$.`},{title:"Find the Roots",content:`$r^2 - 5r + 6 = 0$
$(r-2)(r-3) = 0$
$r = 2$ or $r = 3$`},{title:"Write the General Solution",content:`With distinct real roots $r_1 \\neq r_2$:
$$y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$$`}],conclusion:"$y = C_1 e^{2x} + C_2 e^{3x}$"}},{id:"ex-9-56-2",type:"example",title:"Repeated Roots",statement:"Solve $y'' - 4y' + 4y = 0$.",solution:{steps:[{title:"Characteristic Equation",content:`$r^2 - 4r + 4 = 0$
$(r-2)^2 = 0$
$r = 2$ (repeated root)`},{title:"General Solution for Repeated Roots",content:`When $r_1 = r_2 = r$, the general solution is:
$$y = (C_1 + C_2 x)e^{rx}$$`}],conclusion:"$y = (C_1 + C_2 x)e^{2x}$"}},{id:"ex-9-56-3",type:"example",title:"Complex Roots",statement:"Solve $y'' + y = 0$.",solution:{steps:[{title:"Characteristic Equation",content:`$r^2 + 1 = 0$
$r = \\pm i$ (complex roots $\\alpha \\pm \\beta i$ with $\\alpha = 0$, $\\beta = 1$)`},{title:"General Solution for Complex Roots",content:`When roots are $\\alpha \\pm \\beta i$:
$$y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)$$`},{title:"Apply to This Problem",content:`With $\\alpha = 0$, $\\beta = 1$:
$$y = C_1 \\cos x + C_2 \\sin x$$`}],conclusion:"$y = C_1 \\cos x + C_2 \\sin x$"}}],exercises:[{id:"9-56-1",type:"exercise",number:1,statement:"Solve $y'' + 2y' - 3y = 0$.",solution:{steps:[{title:"Characteristic Equation",content:`$r^2 + 2r - 3 = 0$
$(r+3)(r-1) = 0$
$r = -3$ or $r = 1$`}],conclusion:"$y = C_1 e^{-3x} + C_2 e^x$"}},{id:"9-56-2",type:"exercise",number:2,statement:"Solve $y'' + 4y' + 4y = 0$.",solution:{steps:[{title:"Characteristic Equation",content:`$r^2 + 4r + 4 = 0$
$(r+2)^2 = 0$
$r = -2$ (repeated)`}],conclusion:"$y = (C_1 + C_2 x)e^{-2x}$"}},{id:"9-56-3",type:"exercise",number:3,statement:"Solve $y'' + 2y' + 5y = 0$.",solution:{steps:[{title:"Characteristic Equation",content:`$r^2 + 2r + 5 = 0$
$r = \\frac{-2 \\pm \\sqrt{4-20}}{2} = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i$`},{title:"Complex Roots Formula",content:"$\\alpha = -1$, $\\beta = 2$"}],conclusion:"$y = e^{-x}(C_1 \\cos 2x + C_2 \\sin 2x)$"}},{id:"9-56-4",type:"exercise",number:4,statement:"Solve $y'' - y = 0$ with $y(0) = 1$ and $y'(0) = 0$.",solution:{steps:[{title:"General Solution",content:`$r^2 - 1 = 0 \\Rightarrow r = \\pm 1$
$y = C_1 e^x + C_2 e^{-x}$`},{title:"Apply Initial Conditions",content:`$y(0) = C_1 + C_2 = 1$
$y' = C_1 e^x - C_2 e^{-x}$
$y'(0) = C_1 - C_2 = 0$

Solving: $C_1 = C_2 = \\frac{1}{2}$`}],conclusion:"$y = \\frac{1}{2}(e^x + e^{-x}) = \\cosh x$"}}]},{sectionId:57,sectionTitle:"Second-Order Linear Equations: Nonhomogeneous",textbookSection:"I 8.18-8.21",examples:[{id:"ex-9-57-1",type:"example",title:"Structure of the General Solution",statement:"Explain how to find the general solution of $y'' + ay' + by = f(x)$.",solution:{steps:[{title:"The Principle",content:`The general solution of the nonhomogeneous equation is:
$$y = y_h + y_p$$
where:
- $y_h$ is the general solution of the homogeneous equation $y'' + ay' + by = 0$
- $y_p$ is any particular solution of the nonhomogeneous equation`},{title:"Finding y_h",content:"Use the characteristic equation method (as in Section 56)."},{title:"Finding y_p",content:`Methods include:
1. **Undetermined coefficients** (for polynomial, exponential, trig $f(x)$)
2. **Variation of parameters** (for any $f(x)$)`}],conclusion:"General solution = Homogeneous solution + Particular solution."}},{id:"ex-9-57-2",type:"example",title:"Method of Undetermined Coefficients",statement:"Solve $y'' - 3y' + 2y = e^{3x}$.",solution:{steps:[{title:"Find y_h",content:`$r^2 - 3r + 2 = 0 \\Rightarrow (r-1)(r-2) = 0$
$y_h = C_1 e^x + C_2 e^{2x}$`},{title:"Guess y_p",content:`Since $f(x) = e^{3x}$ and 3 is not a root of the characteristic equation, try:
$y_p = Ae^{3x}$`},{title:"Substitute and Solve for A",content:`$y_p' = 3Ae^{3x}$, $y_p'' = 9Ae^{3x}$

$9Ae^{3x} - 9Ae^{3x} + 2Ae^{3x} = e^{3x}$
$2A = 1 \\Rightarrow A = \\frac{1}{2}$`}],conclusion:"$y = C_1 e^x + C_2 e^{2x} + \\frac{1}{2}e^{3x}$"}}],exercises:[{id:"9-57-1",type:"exercise",number:1,statement:"Solve $y'' + y = \\sin x$.",solution:{steps:[{title:"Find y_h",content:`$r^2 + 1 = 0 \\Rightarrow r = \\pm i$
$y_h = C_1 \\cos x + C_2 \\sin x$`},{title:"Guess y_p (Resonance Case)",content:`Since $\\sin x$ is part of $y_h$, we need:
$y_p = x(A\\cos x + B\\sin x)$`},{title:"Substitute",content:`After differentiation and substitution:
$-2A\\sin x + 2B\\cos x = \\sin x$

$A = -\\frac{1}{2}$, $B = 0$`}],conclusion:"$y = C_1 \\cos x + C_2 \\sin x - \\frac{x}{2}\\cos x$"}},{id:"9-57-2",type:"exercise",number:2,statement:"Solve $y'' - 4y = x^2$.",solution:{steps:[{title:"Find y_h",content:`$r^2 - 4 = 0 \\Rightarrow r = \\pm 2$
$y_h = C_1 e^{2x} + C_2 e^{-2x}$`},{title:"Guess y_p",content:`Try $y_p = Ax^2 + Bx + C$
$y_p'' = 2A$`},{title:"Substitute",content:`$2A - 4(Ax^2 + Bx + C) = x^2$
$-4Ax^2 - 4Bx + (2A - 4C) = x^2$

$-4A = 1 \\Rightarrow A = -\\frac{1}{4}$
$-4B = 0 \\Rightarrow B = 0$
$2A - 4C = 0 \\Rightarrow C = -\\frac{1}{8}$`}],conclusion:"$y = C_1 e^{2x} + C_2 e^{-2x} - \\frac{x^2}{4} - \\frac{1}{8}$"}},{id:"9-57-3",type:"exercise",number:3,statement:"Solve $y'' + 4y' + 4y = e^{-2x}$.",solution:{steps:[{title:"Find y_h",content:`$r^2 + 4r + 4 = 0 \\Rightarrow (r+2)^2 = 0$
$y_h = (C_1 + C_2 x)e^{-2x}$`},{title:"Guess y_p (Double Resonance)",content:`Since $e^{-2x}$ corresponds to repeated root, try:
$y_p = Ax^2 e^{-2x}$`},{title:"Substitute",content:`After calculation:
$y_p'' + 4y_p' + 4y_p = 2Ae^{-2x} = e^{-2x}$
$A = \\frac{1}{2}$`}],conclusion:"$y = (C_1 + C_2 x)e^{-2x} + \\frac{x^2}{2}e^{-2x}$"}}]},{sectionId:58,sectionTitle:"Variation of Parameters",textbookSection:"I 8.22-8.24",examples:[{id:"ex-9-58-1",type:"example",title:"The Method of Variation of Parameters",statement:"Describe the variation of parameters method for $y'' + p(x)y' + q(x)y = f(x)$.",solution:{steps:[{title:"Setup",content:`Given homogeneous solutions $y_1$ and $y_2$, seek a particular solution:
$$y_p = u_1(x)y_1 + u_2(x)y_2$$`},{title:"The Wronskian",content:"$$W = W(y_1, y_2) = y_1 y_2' - y_1' y_2 = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix}$$"},{title:"Formulas for u₁' and u₂'",content:`$$u_1' = -\\frac{y_2 f}{W}, \\quad u_2' = \\frac{y_1 f}{W}$$

Then integrate to find $u_1$ and $u_2$.`}],conclusion:"$y_p = u_1 y_1 + u_2 y_2$ where $u_1 = \\int -\\frac{y_2 f}{W}\\,dx$ and $u_2 = \\int \\frac{y_1 f}{W}\\,dx$"}},{id:"ex-9-58-2",type:"example",title:"Applying Variation of Parameters",statement:"Use variation of parameters to solve $y'' + y = \\sec x$.",solution:{steps:[{title:"Find y_h",content:`$y_h = C_1 \\cos x + C_2 \\sin x$

So $y_1 = \\cos x$, $y_2 = \\sin x$.`},{title:"Compute Wronskian",content:"$W = \\cos x \\cdot \\cos x - (-\\sin x) \\cdot \\sin x = \\cos^2 x + \\sin^2 x = 1$"},{title:"Find u₁' and u₂'",content:`$u_1' = -\\frac{\\sin x \\cdot \\sec x}{1} = -\\tan x$

$u_2' = \\frac{\\cos x \\cdot \\sec x}{1} = 1$`},{title:"Integrate",content:`$u_1 = \\int -\\tan x\\,dx = \\ln|\\cos x|$

$u_2 = \\int 1\\,dx = x$`},{title:"Form y_p",content:"$y_p = \\cos x \\cdot \\ln|\\cos x| + x\\sin x$"}],conclusion:"$y = C_1 \\cos x + C_2 \\sin x + \\cos x \\ln|\\cos x| + x\\sin x$"}}],exercises:[{id:"9-58-1",type:"exercise",number:1,statement:"Use variation of parameters to solve $y'' + y = \\tan x$.",solution:{steps:[{title:"Setup",content:"$y_1 = \\cos x$, $y_2 = \\sin x$, $W = 1$"},{title:"Find u₁' and u₂'",content:`$u_1' = -\\sin x \\tan x = -\\frac{\\sin^2 x}{\\cos x}$

$u_2' = \\cos x \\tan x = \\sin x$`},{title:"Integrate",content:`$u_1 = \\int -\\frac{1 - \\cos^2 x}{\\cos x}\\,dx = \\int (-\\sec x + \\cos x)\\,dx = -\\ln|\\sec x + \\tan x| + \\sin x$

$u_2 = -\\cos x$`}],conclusion:"$y = C_1 \\cos x + C_2 \\sin x + \\sin x - \\cos x \\ln|\\sec x + \\tan x| - \\sin x \\cos x$"}},{id:"9-58-2",type:"exercise",number:2,statement:"Use variation of parameters to solve $y'' - y = e^x$.",solution:{steps:[{title:"Setup",content:`$y_1 = e^x$, $y_2 = e^{-x}$
$W = e^x \\cdot (-e^{-x}) - e^x \\cdot e^{-x} = -1 - 1 = -2$`},{title:"Find u₁' and u₂'",content:`$u_1' = -\\frac{e^{-x} \\cdot e^x}{-2} = \\frac{1}{2}$

$u_2' = \\frac{e^x \\cdot e^x}{-2} = -\\frac{e^{2x}}{2}$`},{title:"Integrate",content:"$u_1 = \\frac{x}{2}$, $u_2 = -\\frac{e^{2x}}{4}$"},{title:"Form y_p",content:"$y_p = \\frac{x}{2}e^x - \\frac{e^{2x}}{4}e^{-x} = \\frac{x}{2}e^x - \\frac{e^x}{4}$"}],conclusion:"$y = C_1 e^x + C_2 e^{-x} + \\frac{x}{2}e^x$ (absorbing $-\\frac{e^x}{4}$ into $C_1$)"}},{id:"9-58-3",type:"exercise",number:3,statement:"Use variation of parameters to find a particular solution of $y'' + 4y = \\csc 2x$.",solution:{steps:[{title:"Setup",content:`$y_1 = \\cos 2x$, $y_2 = \\sin 2x$
$W = 2\\cos^2 2x + 2\\sin^2 2x = 2$`},{title:"Find u₁' and u₂'",content:`$u_1' = -\\frac{\\sin 2x \\cdot \\csc 2x}{2} = -\\frac{1}{2}$

$u_2' = \\frac{\\cos 2x \\cdot \\csc 2x}{2} = \\frac{\\cot 2x}{2}$`},{title:"Integrate",content:`$u_1 = -\\frac{x}{2}$

$u_2 = \\frac{1}{4}\\ln|\\sin 2x|$`}],conclusion:"$y_p = -\\frac{x}{2}\\cos 2x + \\frac{1}{4}\\sin 2x \\ln|\\sin 2x|$"}}]},{sectionId:59,sectionTitle:"Applications of Differential Equations",textbookSection:"I 8.25-8.28",examples:[{id:"ex-9-59-1",type:"example",title:"Simple Harmonic Motion",statement:"A mass on a spring satisfies $m\\frac{d^2x}{dt^2} = -kx$. Find the motion if $x(0) = x_0$ and $x'(0) = 0$.",solution:{steps:[{title:"Rewrite the Equation",content:`$\\frac{d^2x}{dt^2} + \\frac{k}{m}x = 0$

Let $\\omega^2 = \\frac{k}{m}$, so $x'' + \\omega^2 x = 0$.`},{title:"Solve",content:`Characteristic equation: $r^2 + \\omega^2 = 0 \\Rightarrow r = \\pm i\\omega$

$x = C_1 \\cos \\omega t + C_2 \\sin \\omega t$`},{title:"Apply Initial Conditions",content:`$x(0) = C_1 = x_0$
$x'(0) = \\omega C_2 = 0 \\Rightarrow C_2 = 0$`}],conclusion:"$x = x_0 \\cos \\omega t$ where $\\omega = \\sqrt{k/m}$ is the angular frequency."}},{id:"ex-9-59-2",type:"example",title:"Damped Oscillation",statement:"Solve $x'' + 2x' + 5x = 0$ with $x(0) = 1$, $x'(0) = 0$ (damped spring).",solution:{steps:[{title:"Characteristic Equation",content:`$r^2 + 2r + 5 = 0$
$r = \\frac{-2 \\pm \\sqrt{4-20}}{2} = -1 \\pm 2i$`},{title:"General Solution",content:"$x = e^{-t}(C_1 \\cos 2t + C_2 \\sin 2t)$"},{title:"Apply Initial Conditions",content:`$x(0) = C_1 = 1$

$x' = -e^{-t}(C_1 \\cos 2t + C_2 \\sin 2t) + e^{-t}(-2C_1 \\sin 2t + 2C_2 \\cos 2t)$

$x'(0) = -C_1 + 2C_2 = -1 + 2C_2 = 0 \\Rightarrow C_2 = \\frac{1}{2}$`}],conclusion:"$x = e^{-t}\\left(\\cos 2t + \\frac{1}{2}\\sin 2t\\right)$"}}],exercises:[{id:"9-59-1",type:"exercise",number:1,statement:"A circuit with inductance $L$ and capacitance $C$ satisfies $L\\frac{d^2q}{dt^2} + \\frac{q}{C} = 0$. Find the charge $q(t)$ if $q(0) = Q_0$ and $\\frac{dq}{dt}(0) = 0$.",solution:{steps:[{title:"Rewrite",content:`$\\frac{d^2q}{dt^2} + \\frac{1}{LC}q = 0$

Let $\\omega_0 = \\frac{1}{\\sqrt{LC}}$.`},{title:"Solve",content:`$q = C_1 \\cos \\omega_0 t + C_2 \\sin \\omega_0 t$

$q(0) = C_1 = Q_0$
$q'(0) = \\omega_0 C_2 = 0 \\Rightarrow C_2 = 0$`}],conclusion:"$q = Q_0 \\cos\\left(\\frac{t}{\\sqrt{LC}}\\right)$"}},{id:"9-59-2",type:"exercise",number:2,statement:"A pendulum of length $L$ satisfies $\\frac{d^2\\theta}{dt^2} + \\frac{g}{L}\\theta = 0$ for small oscillations. Find the period.",solution:{steps:[{title:"Identify Angular Frequency",content:"The equation $\\theta'' + \\omega^2 \\theta = 0$ has $\\omega = \\sqrt{g/L}$."},{title:"Find Period",content:"Period $T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L}{g}}$"}],conclusion:"$T = 2\\pi\\sqrt{\\frac{L}{g}}$"}},{id:"9-59-3",type:"exercise",number:3,statement:"Solve the forced oscillation equation $x'' + 4x = \\cos 2t$.",solution:{steps:[{title:"Homogeneous Solution",content:"$x_h = C_1 \\cos 2t + C_2 \\sin 2t$"},{title:"Particular Solution (Resonance)",content:`Since $\\cos 2t$ is part of $x_h$, try $x_p = t(A\\cos 2t + B\\sin 2t)$.

Substituting: $4B\\cos 2t - 4A\\sin 2t = \\cos 2t$

$B = \\frac{1}{4}$, $A = 0$`}],conclusion:"$x = C_1 \\cos 2t + C_2 \\sin 2t + \\frac{t}{4}\\sin 2t$"}},{id:"9-59-4",type:"exercise",number:4,statement:"A tank initially contains 100 gallons of pure water. Brine with 2 lb/gal of salt enters at 3 gal/min and the well-mixed solution leaves at 3 gal/min. Find the amount of salt $S(t)$ at time $t$.",solution:{steps:[{title:"Set Up the Differential Equation",content:`Rate in: $2 \\times 3 = 6$ lb/min
Rate out: $\\frac{S}{100} \\times 3 = \\frac{3S}{100}$ lb/min

$\\frac{dS}{dt} = 6 - \\frac{3S}{100}$`},{title:"Solve",content:`$\\frac{dS}{dt} + \\frac{3S}{100} = 6$

Integrating factor: $\\mu = e^{3t/100}$

$S = 200 + Ce^{-3t/100}$`},{title:"Apply Initial Condition",content:"$S(0) = 0$: $0 = 200 + C \\Rightarrow C = -200$"}],conclusion:"$S(t) = 200(1 - e^{-3t/100})$ pounds"}}]}],i={partId:9,partTitle:t,textbookChapter:e,sections:n};export{i as p};
