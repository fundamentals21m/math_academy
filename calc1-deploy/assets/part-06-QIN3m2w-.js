const t="Transcendental Functions",e="Chapter 6",n=[{sectionId:39,sectionTitle:"The Natural Logarithm",textbookSection:"I 6.1-6.4",examples:[{id:"ex-7-39-1",type:"example",title:"Definition of the Natural Logarithm",statement:"Explain how the natural logarithm is defined as an integral and compute $\\ln 2$ using this definition (express as an integral).",solution:{steps:[{title:"The Integral Definition",content:`The natural logarithm is defined for $x > 0$ as:
$$\\ln x = \\int_1^x \\frac{1}{t}\\,dt$$

This is a remarkable definition because it defines $\\ln x$ as the area under the hyperbola $y = 1/t$ from $t = 1$ to $t = x$.`},{title:"Computing ln 2",content:`Using the definition:
$$\\ln 2 = \\int_1^2 \\frac{1}{t}\\,dt$$

This integral represents the area under $y = 1/t$ from $t = 1$ to $t = 2$.`},{title:"Understanding the Sign",content:`For $x > 1$: $\\ln x > 0$ (area is positive)
For $0 < x < 1$: $\\ln x < 0$ (integral from 1 to $x$ is negative)
For $x = 1$: $\\ln 1 = 0$ (integral from 1 to 1)`}],conclusion:"The natural logarithm $\\ln x = \\int_1^x \\frac{1}{t}\\,dt$, so $\\ln 2 = \\int_1^2 \\frac{1}{t}\\,dt \\approx 0.693$"}},{id:"ex-7-39-2",type:"example",title:"Derivative of ln x",statement:"Using the First Fundamental Theorem of Calculus, find $\\frac{d}{dx}[\\ln x]$.",solution:{steps:[{title:"Apply the First Fundamental Theorem",content:"Since $\\ln x = \\int_1^x \\frac{1}{t}\\,dt$, the First Fundamental Theorem tells us that if $F(x) = \\int_a^x f(t)\\,dt$, then $F'(x) = f(x)$."},{title:"Compute the Derivative",content:`Here $f(t) = \\frac{1}{t}$, so:
$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$

for $x > 0$.`},{title:"Significance",content:`This means $\\ln x$ is an antiderivative of $\\frac{1}{x}$. We finally have:
$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$$

(The absolute value handles negative $x$.)`}],conclusion:"$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$ for $x > 0$"}}],exercises:[{id:"7-39-1",type:"exercise",number:1,statement:"Compute $\\frac{d}{dx}[\\ln(x^2 + 1)]$.",solution:{steps:[{title:"Apply the Chain Rule",content:"Let $u = x^2 + 1$. Then $\\frac{d}{dx}[\\ln u] = \\frac{1}{u} \\cdot \\frac{du}{dx}$."},{title:"Compute",content:"$\\frac{d}{dx}[\\ln(x^2 + 1)] = \\frac{1}{x^2 + 1} \\cdot 2x = \\frac{2x}{x^2 + 1}$"}],conclusion:"$\\frac{d}{dx}[\\ln(x^2 + 1)] = \\frac{2x}{x^2 + 1}$"}},{id:"7-39-2",type:"exercise",number:2,statement:"Evaluate $\\int_1^e \\frac{1}{x}\\,dx$.",solution:{steps:[{title:"Use the Antiderivative",content:`Since $\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$, we have:
$$\\int_1^e \\frac{1}{x}\\,dx = \\ln x \\Big|_1^e$$`},{title:"Evaluate",content:"$= \\ln e - \\ln 1 = 1 - 0 = 1$"}],conclusion:"$\\int_1^e \\frac{1}{x}\\,dx = 1$"}},{id:"7-39-3",type:"exercise",number:3,statement:"Find $\\frac{d}{dx}[x \\ln x - x]$.",solution:{steps:[{title:"Differentiate Term by Term",content:`For $x \\ln x$, use the product rule:
$\\frac{d}{dx}[x \\ln x] = 1 \\cdot \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$`},{title:"Complete the Calculation",content:"$\\frac{d}{dx}[x \\ln x - x] = (\\ln x + 1) - 1 = \\ln x$"}],conclusion:"$\\frac{d}{dx}[x \\ln x - x] = \\ln x$, so $\\int \\ln x\\,dx = x\\ln x - x + C$"}}]},{sectionId:40,sectionTitle:"Properties of Logarithms",textbookSection:"I 6.5-6.8",examples:[{id:"ex-7-40-1",type:"example",title:"Fundamental Logarithm Properties",statement:"Prove that $\\ln(ab) = \\ln a + \\ln b$ for positive $a$ and $b$ using the integral definition.",solution:{steps:[{title:"Start with the Definition",content:`We have $\\ln(ab) = \\int_1^{ab} \\frac{1}{t}\\,dt$.

Split this integral at $t = a$:
$$\\ln(ab) = \\int_1^a \\frac{1}{t}\\,dt + \\int_a^{ab} \\frac{1}{t}\\,dt$$`},{title:"Substitute in the Second Integral",content:`In $\\int_a^{ab} \\frac{1}{t}\\,dt$, let $u = t/a$, so $t = au$ and $dt = a\\,du$.

When $t = a$, $u = 1$. When $t = ab$, $u = b$.

$$\\int_a^{ab} \\frac{1}{t}\\,dt = \\int_1^b \\frac{1}{au} \\cdot a\\,du = \\int_1^b \\frac{1}{u}\\,du = \\ln b$$`},{title:"Combine",content:`Therefore:
$$\\ln(ab) = \\ln a + \\ln b$$`}],conclusion:"$\\ln(ab) = \\ln a + \\ln b$ for all $a, b > 0$"}},{id:"ex-7-40-2",type:"example",title:"Logarithmic Differentiation",statement:"Find $\\frac{dy}{dx}$ if $y = x^x$ for $x > 0$.",solution:{steps:[{title:"Take the Natural Log of Both Sides",content:"$\\ln y = \\ln(x^x) = x \\ln x$"},{title:"Differentiate Implicitly",content:`$\\frac{1}{y} \\cdot \\frac{dy}{dx} = \\frac{d}{dx}[x \\ln x]$

Using the product rule:
$\\frac{d}{dx}[x \\ln x] = 1 \\cdot \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$`},{title:"Solve for dy/dx",content:"$\\frac{dy}{dx} = y(\\ln x + 1) = x^x(\\ln x + 1)$"}],conclusion:"$\\frac{d}{dx}[x^x] = x^x(\\ln x + 1)$"}}],exercises:[{id:"7-40-1",type:"exercise",number:1,statement:"Simplify $\\ln(e^3 \\cdot e^5)$ using properties of logarithms.",solution:{steps:[{title:"Apply the Product Rule",content:"$\\ln(e^3 \\cdot e^5) = \\ln(e^3) + \\ln(e^5)$"},{title:"Apply the Power Rule",content:`$= 3\\ln e + 5\\ln e = 3(1) + 5(1) = 8$

Alternatively: $\\ln(e^3 \\cdot e^5) = \\ln(e^8) = 8$`}],conclusion:"$\\ln(e^3 \\cdot e^5) = 8$"}},{id:"7-40-2",type:"exercise",number:2,statement:"Find $\\frac{d}{dx}[\\ln(\\sin x)]$ for $0 < x < \\pi$.",solution:{steps:[{title:"Apply the Chain Rule",content:"$\\frac{d}{dx}[\\ln(\\sin x)] = \\frac{1}{\\sin x} \\cdot \\cos x$"},{title:"Simplify",content:"$= \\frac{\\cos x}{\\sin x} = \\cot x$"}],conclusion:"$\\frac{d}{dx}[\\ln(\\sin x)] = \\cot x$"}},{id:"7-40-3",type:"exercise",number:3,statement:"Use logarithmic differentiation to find $\\frac{dy}{dx}$ if $y = \\frac{x^2\\sqrt{x+1}}{(x-1)^3}$ for $x > 1$.",solution:{steps:[{title:"Take the Natural Log",content:`$\\ln y = \\ln\\left(\\frac{x^2\\sqrt{x+1}}{(x-1)^3}\\right)$

$= \\ln(x^2) + \\ln(\\sqrt{x+1}) - \\ln((x-1)^3)$

$= 2\\ln x + \\frac{1}{2}\\ln(x+1) - 3\\ln(x-1)$`},{title:"Differentiate Both Sides",content:"$\\frac{1}{y}\\frac{dy}{dx} = \\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{3}{x-1}$"},{title:"Solve for dy/dx",content:`$\\frac{dy}{dx} = y\\left(\\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{3}{x-1}\\right)$

$= \\frac{x^2\\sqrt{x+1}}{(x-1)^3}\\left(\\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{3}{x-1}\\right)$`}],conclusion:"$\\frac{dy}{dx} = \\frac{x^2\\sqrt{x+1}}{(x-1)^3}\\left(\\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{3}{x-1}\\right)$"}}]},{sectionId:41,sectionTitle:"The Exponential Function",textbookSection:"I 6.9-6.13",examples:[{id:"ex-7-41-1",type:"example",title:"The Exponential as the Inverse of ln",statement:"Define the exponential function $e^x$ as the inverse of $\\ln x$ and verify that $\\frac{d}{dx}[e^x] = e^x$.",solution:{steps:[{title:"Define the Exponential",content:`Since $\\ln x$ is strictly increasing on $(0, \\infty)$ with range $(-\\infty, \\infty)$, it has an inverse function.

We define $e^x$ (also written $\\exp(x)$) as this inverse:
$$y = e^x \\iff x = \\ln y$$`},{title:"Find the Derivative Using Implicit Differentiation",content:`If $y = e^x$, then $\\ln y = x$.

Differentiate both sides with respect to $x$:
$$\\frac{1}{y}\\frac{dy}{dx} = 1$$`},{title:"Solve for dy/dx",content:`$$\\frac{dy}{dx} = y = e^x$$

Thus $\\frac{d}{dx}[e^x] = e^x$.`},{title:"The Remarkable Property",content:"The exponential function is its own derivative! This is the unique function (up to constant multiples) with this property."}],conclusion:"$\\frac{d}{dx}[e^x] = e^x$"}},{id:"ex-7-41-2",type:"example",title:"General Exponential Functions",statement:"For $a > 0$, define $a^x$ and find $\\frac{d}{dx}[a^x]$.",solution:{steps:[{title:"Define a^x Using e",content:`For any $a > 0$, we define:
$$a^x = e^{x \\ln a}$$

This is consistent with integer and rational exponents.`},{title:"Differentiate Using the Chain Rule",content:`$\\frac{d}{dx}[a^x] = \\frac{d}{dx}[e^{x \\ln a}]$

Let $u = x \\ln a$, so $\\frac{du}{dx} = \\ln a$.

$= e^{x \\ln a} \\cdot \\ln a = a^x \\ln a$`}],conclusion:"$\\frac{d}{dx}[a^x] = a^x \\ln a$"}}],exercises:[{id:"7-41-1",type:"exercise",number:1,statement:"Find $\\frac{d}{dx}[e^{x^2}]$.",solution:{steps:[{title:"Apply the Chain Rule",content:`Let $u = x^2$. Then:
$\\frac{d}{dx}[e^{x^2}] = e^{x^2} \\cdot \\frac{d}{dx}[x^2] = e^{x^2} \\cdot 2x$`}],conclusion:"$\\frac{d}{dx}[e^{x^2}] = 2xe^{x^2}$"}},{id:"7-41-2",type:"exercise",number:2,statement:"Evaluate $\\int e^{3x}\\,dx$.",solution:{steps:[{title:"Use Substitution",content:`Let $u = 3x$, so $du = 3\\,dx$ and $dx = \\frac{1}{3}du$.

$\\int e^{3x}\\,dx = \\int e^u \\cdot \\frac{1}{3}\\,du = \\frac{1}{3}e^u + C$`},{title:"Substitute Back",content:"$= \\frac{1}{3}e^{3x} + C$"}],conclusion:"$\\int e^{3x}\\,dx = \\frac{1}{3}e^{3x} + C$"}},{id:"7-41-3",type:"exercise",number:3,statement:"Find $\\frac{d}{dx}[2^x]$.",solution:{steps:[{title:"Use the General Formula",content:`Since $\\frac{d}{dx}[a^x] = a^x \\ln a$, with $a = 2$:
$$\\frac{d}{dx}[2^x] = 2^x \\ln 2$$`}],conclusion:"$\\frac{d}{dx}[2^x] = 2^x \\ln 2$"}},{id:"7-41-4",type:"exercise",number:4,statement:"Compute $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$.",solution:{steps:[{title:"Recognize as a Derivative",content:`This limit has the form $\\lim_{x \\to 0} \\frac{f(x) - f(0)}{x - 0}$ where $f(x) = e^x$.

This is $f'(0)$.`},{title:"Compute",content:"Since $\\frac{d}{dx}[e^x] = e^x$, we have $f'(0) = e^0 = 1$."}],conclusion:"$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$"}}]},{sectionId:42,sectionTitle:"Exponential Growth and Decay",textbookSection:"I 6.14-6.17",examples:[{id:"ex-7-42-1",type:"example",title:"The Differential Equation of Exponential Growth",statement:"Find all functions $y = f(x)$ satisfying $\\frac{dy}{dx} = ky$ where $k$ is a constant.",solution:{steps:[{title:"Separate Variables",content:`If $y \\neq 0$:
$$\\frac{dy}{y} = k\\,dx$$`},{title:"Integrate Both Sides",content:`$$\\int \\frac{dy}{y} = \\int k\\,dx$$
$$\\ln|y| = kx + C_1$$`},{title:"Solve for y",content:`$$|y| = e^{kx + C_1} = e^{C_1} \\cdot e^{kx}$$

Let $A = \\pm e^{C_1}$:
$$y = Ae^{kx}$$`},{title:"Verify",content:"Check: $\\frac{d}{dx}[Ae^{kx}] = Ake^{kx} = k(Ae^{kx}) = ky$ ✓"}],conclusion:"The general solution is $y = Ae^{kx}$ where $A$ is an arbitrary constant."}},{id:"ex-7-42-2",type:"example",title:"Radioactive Decay",statement:"A radioactive substance decays at a rate proportional to the amount present. If 100 grams decay to 80 grams in 10 years, find the half-life.",solution:{steps:[{title:"Set Up the Model",content:`Let $y(t)$ = amount at time $t$.
$\\frac{dy}{dt} = -ky$ (negative because decaying)

Solution: $y = y_0 e^{-kt}$ where $y_0 = y(0) = 100$`},{title:"Find k Using Given Data",content:`At $t = 10$: $y = 80$
$80 = 100e^{-10k}$
$0.8 = e^{-10k}$
$\\ln(0.8) = -10k$
$k = -\\frac{\\ln(0.8)}{10} = \\frac{\\ln(1.25)}{10} \\approx 0.0223$`},{title:"Find Half-Life",content:`Half-life $T$ satisfies $y_0/2 = y_0 e^{-kT}$:
$\\frac{1}{2} = e^{-kT}$
$\\ln(1/2) = -kT$
$T = \\frac{\\ln 2}{k} = \\frac{\\ln 2}{\\ln(1.25)/10} = \\frac{10\\ln 2}{\\ln(1.25)}$`},{title:"Calculate",content:"$T = \\frac{10 \\cdot 0.693}{0.223} \\approx 31.1$ years"}],conclusion:"The half-life is approximately 31.1 years."}}],exercises:[{id:"7-42-1",type:"exercise",number:1,statement:"A population doubles every 5 years. If the initial population is 1000, find a formula for the population $P(t)$ after $t$ years.",solution:{steps:[{title:"Set Up the Growth Equation",content:"Since the population grows exponentially: $P(t) = P_0 e^{kt}$ where $P_0 = 1000$."},{title:"Find k",content:`Doubling every 5 years means $P(5) = 2000$:
$2000 = 1000e^{5k}$
$2 = e^{5k}$
$\\ln 2 = 5k$
$k = \\frac{\\ln 2}{5}$`},{title:"Write the Formula",content:"$P(t) = 1000e^{(\\ln 2/5)t} = 1000 \\cdot 2^{t/5}$"}],conclusion:"$P(t) = 1000 \\cdot 2^{t/5}$ or equivalently $P(t) = 1000e^{t\\ln 2/5}$"}},{id:"7-42-2",type:"exercise",number:2,statement:"Newton's Law of Cooling states that $\\frac{dT}{dt} = k(T - T_s)$ where $T_s$ is the surrounding temperature. If a cup of coffee cools from 95°C to 70°C in 10 minutes in a room at 20°C, find its temperature after 20 minutes.",solution:{steps:[{title:"Solve the Differential Equation",content:`Let $u = T - T_s = T - 20$. Then $\\frac{du}{dt} = \\frac{dT}{dt} = ku$.

Solution: $u = u_0 e^{kt}$, so $T - 20 = (T_0 - 20)e^{kt}$`},{title:"Apply Initial Conditions",content:`At $t = 0$: $T = 95$, so $T_0 - 20 = 75$.

At $t = 10$: $T = 70$:
$70 - 20 = 75e^{10k}$
$50 = 75e^{10k}$
$e^{10k} = \\frac{2}{3}$`},{title:"Find Temperature at t = 20",content:"$T - 20 = 75e^{20k} = 75(e^{10k})^2 = 75 \\cdot \\left(\\frac{2}{3}\\right)^2 = 75 \\cdot \\frac{4}{9} = \\frac{100}{3}$"},{title:"Calculate",content:"$T = 20 + \\frac{100}{3} = \\frac{160}{3} \\approx 53.3°C$"}],conclusion:"After 20 minutes, the coffee is approximately 53.3°C."}},{id:"7-42-3",type:"exercise",number:3,statement:"If $\\$1000$ is invested at 6% annual interest compounded continuously, how long until the investment doubles?",solution:{steps:[{title:"Continuous Compound Interest Formula",content:`With continuous compounding: $A = Pe^{rt}$

Here $P = 1000$, $r = 0.06$, and we want $A = 2000$.`},{title:"Solve for t",content:`$2000 = 1000e^{0.06t}$
$2 = e^{0.06t}$
$\\ln 2 = 0.06t$
$t = \\frac{\\ln 2}{0.06}$`},{title:"Calculate",content:"$t = \\frac{0.693}{0.06} \\approx 11.55$ years"}],conclusion:'The investment doubles in approximately 11.55 years (the "Rule of 72" gives 72/6 = 12 years as an approximation).'}}]},{sectionId:43,sectionTitle:"Hyperbolic Functions",textbookSection:"I 6.18-6.20",examples:[{id:"ex-7-43-1",type:"example",title:"Definition and Basic Properties",statement:"Define the hyperbolic sine and cosine functions and verify that $\\cosh^2 x - \\sinh^2 x = 1$.",solution:{steps:[{title:"Definitions",content:`The hyperbolic functions are defined in terms of exponentials:
$$\\sinh x = \\frac{e^x - e^{-x}}{2}$$
$$\\cosh x = \\frac{e^x + e^{-x}}{2}$$`},{title:"Compute cosh²x",content:"$\\cosh^2 x = \\left(\\frac{e^x + e^{-x}}{2}\\right)^2 = \\frac{e^{2x} + 2 + e^{-2x}}{4}$"},{title:"Compute sinh²x",content:"$\\sinh^2 x = \\left(\\frac{e^x - e^{-x}}{2}\\right)^2 = \\frac{e^{2x} - 2 + e^{-2x}}{4}$"},{title:"Subtract",content:"$\\cosh^2 x - \\sinh^2 x = \\frac{(e^{2x} + 2 + e^{-2x}) - (e^{2x} - 2 + e^{-2x})}{4} = \\frac{4}{4} = 1$"}],conclusion:"$\\cosh^2 x - \\sinh^2 x = 1$ (compare with $\\cos^2 x + \\sin^2 x = 1$)"}},{id:"ex-7-43-2",type:"example",title:"Derivatives of Hyperbolic Functions",statement:"Find $\\frac{d}{dx}[\\sinh x]$ and $\\frac{d}{dx}[\\cosh x]$.",solution:{steps:[{title:"Differentiate sinh x",content:"$\\frac{d}{dx}[\\sinh x] = \\frac{d}{dx}\\left[\\frac{e^x - e^{-x}}{2}\\right] = \\frac{e^x + e^{-x}}{2} = \\cosh x$"},{title:"Differentiate cosh x",content:"$\\frac{d}{dx}[\\cosh x] = \\frac{d}{dx}\\left[\\frac{e^x + e^{-x}}{2}\\right] = \\frac{e^x - e^{-x}}{2} = \\sinh x$"},{title:"Compare with Circular Functions",content:`Note the pattern:
$\\frac{d}{dx}[\\sin x] = \\cos x$ vs $\\frac{d}{dx}[\\sinh x] = \\cosh x$
$\\frac{d}{dx}[\\cos x] = -\\sin x$ vs $\\frac{d}{dx}[\\cosh x] = \\sinh x$ (no negative!)`}],conclusion:"$\\frac{d}{dx}[\\sinh x] = \\cosh x$ and $\\frac{d}{dx}[\\cosh x] = \\sinh x$"}}],exercises:[{id:"7-43-1",type:"exercise",number:1,statement:"Find $\\frac{d}{dx}[\\tanh x]$ where $\\tanh x = \\frac{\\sinh x}{\\cosh x}$.",solution:{steps:[{title:"Apply the Quotient Rule",content:"$\\frac{d}{dx}[\\tanh x] = \\frac{\\cosh x \\cdot \\cosh x - \\sinh x \\cdot \\sinh x}{\\cosh^2 x}$"},{title:"Simplify Using the Identity",content:"$= \\frac{\\cosh^2 x - \\sinh^2 x}{\\cosh^2 x} = \\frac{1}{\\cosh^2 x} = \\text{sech}^2 x$"}],conclusion:"$\\frac{d}{dx}[\\tanh x] = \\text{sech}^2 x$"}},{id:"7-43-2",type:"exercise",number:2,statement:"Show that $\\sinh(2x) = 2\\sinh x \\cosh x$.",solution:{steps:[{title:"Compute the Right Side",content:`$2\\sinh x \\cosh x = 2 \\cdot \\frac{e^x - e^{-x}}{2} \\cdot \\frac{e^x + e^{-x}}{2}$

$= \\frac{(e^x - e^{-x})(e^x + e^{-x})}{2}$`},{title:"Expand",content:"$= \\frac{e^{2x} - e^{-2x}}{2}$"},{title:"Recognize",content:"This is exactly $\\sinh(2x) = \\frac{e^{2x} - e^{-2x}}{2}$ ✓"}],conclusion:"$\\sinh(2x) = 2\\sinh x \\cosh x$ (compare with $\\sin(2x) = 2\\sin x \\cos x$)"}},{id:"7-43-3",type:"exercise",number:3,statement:"Evaluate $\\int \\sinh x\\,dx$.",solution:{steps:[{title:"Use the Derivative Relationship",content:`Since $\\frac{d}{dx}[\\cosh x] = \\sinh x$, we have:
$$\\int \\sinh x\\,dx = \\cosh x + C$$`}],conclusion:"$\\int \\sinh x\\,dx = \\cosh x + C$"}}]},{sectionId:44,sectionTitle:"Inverse Trigonometric Functions",textbookSection:"I 6.21-6.24",examples:[{id:"ex-7-44-1",type:"example",title:"Derivative of arcsin",statement:"Find $\\frac{d}{dx}[\\arcsin x]$ for $-1 < x < 1$.",solution:{steps:[{title:"Use the Inverse Function Relationship",content:"Let $y = \\arcsin x$, so $x = \\sin y$ where $-\\pi/2 \\leq y \\leq \\pi/2$."},{title:"Differentiate Implicitly",content:`Differentiating $x = \\sin y$ with respect to $x$:
$$1 = \\cos y \\cdot \\frac{dy}{dx}$$
$$\\frac{dy}{dx} = \\frac{1}{\\cos y}$$`},{title:"Express cos y in Terms of x",content:`Since $\\sin^2 y + \\cos^2 y = 1$:
$\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$

(Positive since $-\\pi/2 \\leq y \\leq \\pi/2$)`},{title:"Final Answer",content:"$$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1 - x^2}}$$"}],conclusion:"$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1 - x^2}}$ for $|x| < 1$"}},{id:"ex-7-44-2",type:"example",title:"Derivative of arctan",statement:"Find $\\frac{d}{dx}[\\arctan x]$.",solution:{steps:[{title:"Use Implicit Differentiation",content:"Let $y = \\arctan x$, so $x = \\tan y$."},{title:"Differentiate",content:`$1 = \\sec^2 y \\cdot \\frac{dy}{dx}$
$\\frac{dy}{dx} = \\frac{1}{\\sec^2 y} = \\cos^2 y$`},{title:"Express in Terms of x",content:`Using $\\tan y = x$ and $\\sec^2 y = 1 + \\tan^2 y$:
$\\sec^2 y = 1 + x^2$

So $\\frac{dy}{dx} = \\frac{1}{1 + x^2}$`}],conclusion:"$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1 + x^2}$"}}],exercises:[{id:"7-44-1",type:"exercise",number:1,statement:"Find $\\frac{d}{dx}[\\arctan(2x)]$.",solution:{steps:[{title:"Apply the Chain Rule",content:"$\\frac{d}{dx}[\\arctan(2x)] = \\frac{1}{1 + (2x)^2} \\cdot 2 = \\frac{2}{1 + 4x^2}$"}],conclusion:"$\\frac{d}{dx}[\\arctan(2x)] = \\frac{2}{1 + 4x^2}$"}},{id:"7-44-2",type:"exercise",number:2,statement:"Evaluate $\\int_0^1 \\frac{1}{1 + x^2}\\,dx$.",solution:{steps:[{title:"Use the Antiderivative",content:`Since $\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}$:
$$\\int_0^1 \\frac{1}{1 + x^2}\\,dx = \\arctan x \\Big|_0^1$$`},{title:"Evaluate",content:"$= \\arctan(1) - \\arctan(0) = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$"}],conclusion:"$\\int_0^1 \\frac{1}{1 + x^2}\\,dx = \\frac{\\pi}{4}$"}},{id:"7-44-3",type:"exercise",number:3,statement:"Find $\\frac{d}{dx}[\\text{arcsec}\\, x]$ for $|x| > 1$.",solution:{steps:[{title:"Let y = arcsec x",content:"Then $x = \\sec y$, where $y \\in [0, \\pi/2) \\cup (\\pi/2, \\pi]$."},{title:"Differentiate Implicitly",content:`$1 = \\sec y \\tan y \\cdot \\frac{dy}{dx}$
$\\frac{dy}{dx} = \\frac{1}{\\sec y \\tan y}$`},{title:"Express in Terms of x",content:`$\\sec y = x$
$\\tan y = \\pm\\sqrt{\\sec^2 y - 1} = \\pm\\sqrt{x^2 - 1}$

For the principal branch:
$\\frac{d}{dx}[\\text{arcsec}\\, x] = \\frac{1}{|x|\\sqrt{x^2 - 1}}$`}],conclusion:"$\\frac{d}{dx}[\\text{arcsec}\\, x] = \\frac{1}{|x|\\sqrt{x^2 - 1}}$ for $|x| > 1$"}},{id:"7-44-4",type:"exercise",number:4,statement:"Evaluate $\\int \\frac{1}{\\sqrt{1 - x^2}}\\,dx$.",solution:{steps:[{title:"Recognize the Derivative Pattern",content:`Since $\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1-x^2}}$:
$$\\int \\frac{1}{\\sqrt{1 - x^2}}\\,dx = \\arcsin x + C$$`}],conclusion:"$\\int \\frac{1}{\\sqrt{1 - x^2}}\\,dx = \\arcsin x + C$"}}]},{sectionId:45,sectionTitle:"Integration by Partial Fractions",textbookSection:"I 6.25",examples:[{id:"ex-7-45-1",type:"example",title:"Distinct Linear Factors",statement:"Evaluate $\\int \\frac{1}{x^2 - 1}\\,dx$.",solution:{steps:[{title:"Factor the Denominator",content:"$x^2 - 1 = (x-1)(x+1)$"},{title:"Set Up Partial Fractions",content:`$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$

Multiply both sides by $(x-1)(x+1)$:
$1 = A(x+1) + B(x-1)$`},{title:"Find A and B",content:`Set $x = 1$: $1 = A(2) + B(0) \\Rightarrow A = \\frac{1}{2}$
Set $x = -1$: $1 = A(0) + B(-2) \\Rightarrow B = -\\frac{1}{2}$`},{title:"Integrate",content:`$\\int \\frac{1}{x^2 - 1}\\,dx = \\int \\left(\\frac{1/2}{x-1} - \\frac{1/2}{x+1}\\right)dx$

$= \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$

$= \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$`}],conclusion:"$\\int \\frac{1}{x^2 - 1}\\,dx = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$"}},{id:"ex-7-45-2",type:"example",title:"Repeated Linear Factors",statement:"Evaluate $\\int \\frac{x+1}{(x-2)^2}\\,dx$.",solution:{steps:[{title:"Set Up Partial Fractions",content:`For repeated factors:
$\\frac{x+1}{(x-2)^2} = \\frac{A}{x-2} + \\frac{B}{(x-2)^2}$

Multiply by $(x-2)^2$:
$x+1 = A(x-2) + B$`},{title:"Find A and B",content:`Set $x = 2$: $3 = A(0) + B \\Rightarrow B = 3$

Compare coefficients of $x$:
$1 = A \\Rightarrow A = 1$`},{title:"Verify",content:"$1(x-2) + 3 = x - 2 + 3 = x + 1$ ✓"},{title:"Integrate",content:`$\\int \\frac{x+1}{(x-2)^2}\\,dx = \\int \\frac{1}{x-2}\\,dx + \\int \\frac{3}{(x-2)^2}\\,dx$

$= \\ln|x-2| + 3 \\cdot \\frac{(x-2)^{-1}}{-1} + C$

$= \\ln|x-2| - \\frac{3}{x-2} + C$`}],conclusion:"$\\int \\frac{x+1}{(x-2)^2}\\,dx = \\ln|x-2| - \\frac{3}{x-2} + C$"}}],exercises:[{id:"7-45-1",type:"exercise",number:1,statement:"Evaluate $\\int \\frac{1}{x(x+1)}\\,dx$.",solution:{steps:[{title:"Partial Fraction Decomposition",content:`$\\frac{1}{x(x+1)} = \\frac{A}{x} + \\frac{B}{x+1}$

$1 = A(x+1) + Bx$

$x = 0$: $1 = A$ → $A = 1$
$x = -1$: $1 = -B$ → $B = -1$`},{title:"Integrate",content:`$\\int \\frac{1}{x(x+1)}\\,dx = \\int \\frac{1}{x}\\,dx - \\int \\frac{1}{x+1}\\,dx$

$= \\ln|x| - \\ln|x+1| + C = \\ln\\left|\\frac{x}{x+1}\\right| + C$`}],conclusion:"$\\int \\frac{1}{x(x+1)}\\,dx = \\ln\\left|\\frac{x}{x+1}\\right| + C$"}},{id:"7-45-2",type:"exercise",number:2,statement:"Evaluate $\\int \\frac{2x+3}{x^2+3x+2}\\,dx$.",solution:{steps:[{title:"Factor the Denominator",content:"$x^2 + 3x + 2 = (x+1)(x+2)$"},{title:"Partial Fractions",content:`$\\frac{2x+3}{(x+1)(x+2)} = \\frac{A}{x+1} + \\frac{B}{x+2}$

$2x+3 = A(x+2) + B(x+1)$

$x = -1$: $1 = A(1) \\Rightarrow A = 1$
$x = -2$: $-1 = B(-1) \\Rightarrow B = 1$`},{title:"Integrate",content:`$\\int \\frac{2x+3}{x^2+3x+2}\\,dx = \\int \\frac{1}{x+1}\\,dx + \\int \\frac{1}{x+2}\\,dx$

$= \\ln|x+1| + \\ln|x+2| + C = \\ln|(x+1)(x+2)| + C$`}],conclusion:"$\\int \\frac{2x+3}{x^2+3x+2}\\,dx = \\ln|x^2+3x+2| + C$"}},{id:"7-45-3",type:"exercise",number:3,statement:"Evaluate $\\int \\frac{x^2}{x^2-1}\\,dx$.",solution:{steps:[{title:"Long Division First",content:`Since degree of numerator = degree of denominator, divide:
$\\frac{x^2}{x^2-1} = 1 + \\frac{1}{x^2-1}$`},{title:"Decompose the Remainder",content:"$\\frac{1}{x^2-1} = \\frac{1}{(x-1)(x+1)} = \\frac{1/2}{x-1} - \\frac{1/2}{x+1}$ (from earlier)"},{title:"Integrate",content:`$\\int \\frac{x^2}{x^2-1}\\,dx = \\int 1\\,dx + \\frac{1}{2}\\int \\frac{1}{x-1}\\,dx - \\frac{1}{2}\\int \\frac{1}{x+1}\\,dx$

$= x + \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$`}],conclusion:"$\\int \\frac{x^2}{x^2-1}\\,dx = x + \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$"}},{id:"7-45-4",type:"exercise",number:4,statement:"Evaluate $\\int \\frac{1}{x^2(x+1)}\\,dx$.",solution:{steps:[{title:"Set Up Partial Fractions",content:`$\\frac{1}{x^2(x+1)} = \\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x+1}$

$1 = Ax(x+1) + B(x+1) + Cx^2$`},{title:"Find Constants",content:`$x = 0$: $1 = B(1) \\Rightarrow B = 1$
$x = -1$: $1 = C(1) \\Rightarrow C = 1$

Compare $x^2$ coefficients: $0 = A + C$, so $A = -1$`},{title:"Integrate",content:`$\\int \\frac{1}{x^2(x+1)}\\,dx = \\int \\left(-\\frac{1}{x} + \\frac{1}{x^2} + \\frac{1}{x+1}\\right)dx$

$= -\\ln|x| - \\frac{1}{x} + \\ln|x+1| + C$`}],conclusion:"$\\int \\frac{1}{x^2(x+1)}\\,dx = \\ln\\left|\\frac{x+1}{x}\\right| - \\frac{1}{x} + C$"}}]}],i={partId:7,partTitle:t,textbookChapter:e,sections:n};export{i as p};
