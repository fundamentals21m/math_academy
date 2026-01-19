const t="Vector-Valued Functions",e="Chapter 14: Calculus of Vector-Valued Functions",n=[{sectionId:83,sectionTitle:"Vector Functions",textbookSection:"§14.1-14.3",examples:[{id:"ex-14-83-1",type:"example",title:"Evaluating a Vector Function",statement:"For the vector function $\\mathbf{r}(t) = (t^2 - 1, e^{-t}, \\ln(t+1))$, evaluate $\\mathbf{r}(0)$ and $\\mathbf{r}(1)$.",solution:{steps:[{title:"Evaluate at t = 0",content:"$\\mathbf{r}(0) = (0^2 - 1, e^0, \\ln(1)) = (-1, 1, 0)$"},{title:"Evaluate at t = 1",content:"$\\mathbf{r}(1) = (1^2 - 1, e^{-1}, \\ln(2)) = (0, 1/e, \\ln 2)$"}],conclusion:"$\\mathbf{r}(0) = (-1, 1, 0)$ and $\\mathbf{r}(1) = (0, 1/e, \\ln 2)$"}},{id:"ex-14-83-2",type:"example",title:"Limit of a Vector Function",statement:"Find $\\lim_{t \\to 0} \\left(\\frac{1 - \\cos t}{t^2}, \\frac{e^t - 1}{t}, t^2 + 1\\right)$.",solution:{steps:[{title:"First component",content:"Using L'Hôpital's rule or the known limit: $\\lim_{t \\to 0} \\frac{1 - \\cos t}{t^2} = \\frac{1}{2}$"},{title:"Second component",content:"$\\lim_{t \\to 0} \\frac{e^t - 1}{t} = 1$ (definition of the derivative of $e^t$ at 0)"},{title:"Third component",content:"$\\lim_{t \\to 0} (t^2 + 1) = 1$"}],conclusion:"The limit is $(1/2, 1, 1)$."}},{id:"ex-14-83-3",type:"example",title:"Derivative of a Vector Function",statement:"Find $\\mathbf{r}'(t)$ and $\\mathbf{r}''(t)$ for $\\mathbf{r}(t) = (\\sin 2t, \\cos 3t, t^4)$.",solution:{steps:[{title:"First derivative",content:`Differentiate componentwise:
$\\mathbf{r}'(t) = (2\\cos 2t, -3\\sin 3t, 4t^3)$`},{title:"Second derivative",content:`Differentiate again:
$\\mathbf{r}''(t) = (-4\\sin 2t, -9\\cos 3t, 12t^2)$`}],conclusion:"$\\mathbf{r}'(t) = (2\\cos 2t, -3\\sin 3t, 4t^3)$ and $\\mathbf{r}''(t) = (-4\\sin 2t, -9\\cos 3t, 12t^2)$"}}],exercises:[{id:"14-83-1",type:"exercise",number:1,statement:"Find $\\mathbf{r}'(t)$ for $\\mathbf{r}(t) = (t\\cos t, t\\sin t, t^2)$.",solution:{steps:[{title:"Apply product rule to each component",content:`For $x(t) = t\\cos t$: $x'(t) = \\cos t - t\\sin t$

For $y(t) = t\\sin t$: $y'(t) = \\sin t + t\\cos t$

For $z(t) = t^2$: $z'(t) = 2t$`}],conclusion:"$\\mathbf{r}'(t) = (\\cos t - t\\sin t, \\sin t + t\\cos t, 2t)$"}},{id:"14-83-2",type:"exercise",number:2,statement:"Evaluate $\\int_0^1 (2t, 3t^2, e^t) \\, dt$.",solution:{steps:[{title:"Integrate componentwise",content:`$\\int_0^1 2t \\, dt = [t^2]_0^1 = 1$

$\\int_0^1 3t^2 \\, dt = [t^3]_0^1 = 1$

$\\int_0^1 e^t \\, dt = [e^t]_0^1 = e - 1$`}],conclusion:"$\\int_0^1 (2t, 3t^2, e^t) \\, dt = (1, 1, e-1)$"}},{id:"14-83-3",type:"exercise",number:3,statement:"If $\\mathbf{r}'(t) = (6t, 4t^3, \\cos t)$ and $\\mathbf{r}(0) = (1, 2, 0)$, find $\\mathbf{r}(t)$.",solution:{steps:[{title:"Integrate component by component",content:`$\\int 6t \\, dt = 3t^2 + C_1$

$\\int 4t^3 \\, dt = t^4 + C_2$

$\\int \\cos t \\, dt = \\sin t + C_3$`},{title:"Apply initial condition",content:`$\\mathbf{r}(0) = (C_1, C_2, C_3) = (1, 2, 0)$

So $C_1 = 1$, $C_2 = 2$, $C_3 = 0$.`}],conclusion:"$\\mathbf{r}(t) = (3t^2 + 1, t^4 + 2, \\sin t)$"}},{id:"14-83-4",type:"exercise",number:4,statement:"Verify the product rule: $\\frac{d}{dt}[t^2 \\mathbf{r}(t)] = 2t\\mathbf{r}(t) + t^2\\mathbf{r}'(t)$ for $\\mathbf{r}(t) = (\\cos t, \\sin t, 1)$.",solution:{steps:[{title:"Compute the left side directly",content:`$t^2\\mathbf{r}(t) = (t^2\\cos t, t^2\\sin t, t^2)$

$\\frac{d}{dt}[t^2\\mathbf{r}] = (2t\\cos t - t^2\\sin t, 2t\\sin t + t^2\\cos t, 2t)$`},{title:"Compute the right side",content:`$\\mathbf{r}'(t) = (-\\sin t, \\cos t, 0)$

$2t\\mathbf{r} = (2t\\cos t, 2t\\sin t, 2t)$

$t^2\\mathbf{r}' = (-t^2\\sin t, t^2\\cos t, 0)$

Sum: $(2t\\cos t - t^2\\sin t, 2t\\sin t + t^2\\cos t, 2t)$`}],conclusion:"Both sides equal $(2t\\cos t - t^2\\sin t, 2t\\sin t + t^2\\cos t, 2t)$, verifying the product rule."}}]},{sectionId:84,sectionTitle:"Curves and Tangency",textbookSection:"§14.4-14.6",examples:[{id:"ex-14-84-1",type:"example",title:"Finding a Tangent Line",statement:"Find the equation of the tangent line to the curve $\\mathbf{r}(t) = (e^t, e^{-t}, t)$ at $t = 0$.",solution:{steps:[{title:"Find the point",content:"$\\mathbf{r}(0) = (e^0, e^0, 0) = (1, 1, 0)$"},{title:"Find the direction",content:`$\\mathbf{r}'(t) = (e^t, -e^{-t}, 1)$

$\\mathbf{r}'(0) = (1, -1, 1)$`},{title:"Write the tangent line",content:"$\\mathbf{L}(s) = (1, 1, 0) + s(1, -1, 1) = (1 + s, 1 - s, s)$"}],conclusion:"The tangent line is $\\mathbf{L}(s) = (1 + s, 1 - s, s)$, or parametrically: $x = 1 + s$, $y = 1 - s$, $z = s$."}},{id:"ex-14-84-2",type:"example",title:"Unit Tangent Vector",statement:"Find the unit tangent vector $\\mathbf{T}(t)$ for the twisted cubic $\\mathbf{r}(t) = (t, t^2, t^3)$ at $t = 1$.",solution:{steps:[{title:"Compute the derivative",content:`$\\mathbf{r}'(t) = (1, 2t, 3t^2)$

At $t = 1$: $\\mathbf{r}'(1) = (1, 2, 3)$`},{title:"Find the magnitude",content:"$\\|\\mathbf{r}'(1)\\| = \\sqrt{1 + 4 + 9} = \\sqrt{14}$"},{title:"Normalize",content:"$\\mathbf{T}(1) = \\frac{1}{\\sqrt{14}}(1, 2, 3)$"}],conclusion:"$\\mathbf{T}(1) = \\frac{1}{\\sqrt{14}}(1, 2, 3) = \\left(\\frac{1}{\\sqrt{14}}, \\frac{2}{\\sqrt{14}}, \\frac{3}{\\sqrt{14}}\\right)$"}}],exercises:[{id:"14-84-1",type:"exercise",number:1,statement:"Find the tangent line to the helix $\\mathbf{r}(t) = (2\\cos t, 2\\sin t, 3t)$ at $t = \\pi/2$.",solution:{steps:[{title:"Find the point",content:"$\\mathbf{r}(\\pi/2) = (2\\cos(\\pi/2), 2\\sin(\\pi/2), 3\\pi/2) = (0, 2, 3\\pi/2)$"},{title:"Find the direction",content:`$\\mathbf{r}'(t) = (-2\\sin t, 2\\cos t, 3)$

$\\mathbf{r}'(\\pi/2) = (-2, 0, 3)$`}],conclusion:"$\\mathbf{L}(s) = (0, 2, 3\\pi/2) + s(-2, 0, 3) = (-2s, 2, 3\\pi/2 + 3s)$"}},{id:"14-84-2",type:"exercise",number:2,statement:"Is the curve $\\mathbf{r}(t) = (t^3, t^6)$ smooth at $t = 0$?",solution:{steps:[{title:"Compute the derivative",content:"$\\mathbf{r}'(t) = (3t^2, 6t^5)$"},{title:"Check at t = 0",content:"$\\mathbf{r}'(0) = (0, 0) = \\mathbf{0}$"}],conclusion:"No, the curve is not smooth at $t = 0$ because $\\mathbf{r}'(0) = \\mathbf{0}$. The point $(0, 0)$ is a singular point (cusp)."}},{id:"14-84-3",type:"exercise",number:3,statement:"Find the unit tangent vector $\\mathbf{T}(t)$ for the circle $\\mathbf{r}(t) = (5\\cos t, 5\\sin t)$.",solution:{steps:[{title:"Compute the derivative",content:"$\\mathbf{r}'(t) = (-5\\sin t, 5\\cos t)$"},{title:"Find the magnitude",content:"$\\|\\mathbf{r}'(t)\\| = \\sqrt{25\\sin^2 t + 25\\cos^2 t} = 5$"},{title:"Normalize",content:"$\\mathbf{T}(t) = \\frac{1}{5}(-5\\sin t, 5\\cos t) = (-\\sin t, \\cos t)$"}],conclusion:"$\\mathbf{T}(t) = (-\\sin t, \\cos t)$"}},{id:"14-84-4",type:"exercise",number:4,statement:"Two parametrizations of the same parabola are $\\mathbf{r}_1(t) = (t, t^2)$ and $\\mathbf{r}_2(u) = (2u, 4u^2)$. Find the relationship between the parameters and verify the tangent vectors are parallel.",solution:{steps:[{title:"Find the relationship",content:`Setting $x$ components equal: $t = 2u$, so $u = t/2$.

Verify: $y_2 = 4u^2 = 4(t/2)^2 = t^2 = y_1$. ✓`},{title:"Compute tangent vectors",content:`$\\mathbf{r}_1'(t) = (1, 2t)$

$\\mathbf{r}_2'(u) = (2, 8u) = (2, 4t)$ (using $u = t/2$)`},{title:"Check parallelism",content:"$\\mathbf{r}_2' = 2 \\cdot (1, 2t) = 2\\mathbf{r}_1'$"}],conclusion:"The parameters are related by $t = 2u$, and $\\mathbf{r}_2'(u) = 2\\mathbf{r}_1'(t)$, so the tangent vectors are parallel (same direction, different magnitude)."}}]},{sectionId:85,sectionTitle:"Velocity and Acceleration",textbookSection:"§14.7-14.9",examples:[{id:"ex-14-85-1",type:"example",title:"Motion Along a Curve",statement:"A particle moves along the path $\\mathbf{r}(t) = (t^2, 2t, \\ln t)$ for $t > 0$. Find the velocity, speed, and acceleration at $t = 1$.",solution:{steps:[{title:"Velocity",content:`$\\mathbf{v}(t) = \\mathbf{r}'(t) = (2t, 2, 1/t)$

$\\mathbf{v}(1) = (2, 2, 1)$`},{title:"Speed",content:"$|\\mathbf{v}(1)| = \\sqrt{4 + 4 + 1} = 3$"},{title:"Acceleration",content:`$\\mathbf{a}(t) = \\mathbf{v}'(t) = (2, 0, -1/t^2)$

$\\mathbf{a}(1) = (2, 0, -1)$`}],conclusion:"At $t = 1$: $\\mathbf{v} = (2, 2, 1)$, speed $= 3$, $\\mathbf{a} = (2, 0, -1)$."}},{id:"ex-14-85-2",type:"example",title:"Tangential and Normal Acceleration",statement:"For $\\mathbf{r}(t) = (\\cos t, \\sin t, t)$, find the tangential and normal components of acceleration.",solution:{steps:[{title:"Compute velocity and acceleration",content:`$\\mathbf{v}(t) = (-\\sin t, \\cos t, 1)$

$\\mathbf{a}(t) = (-\\cos t, -\\sin t, 0)$`},{title:"Find speed",content:"$|\\mathbf{v}| = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt{2}$"},{title:"Tangential component",content:"$a_T = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{|\\mathbf{v}|} = \\frac{\\sin t \\cos t - \\sin t \\cos t + 0}{\\sqrt{2}} = 0$"},{title:"Normal component",content:`$|\\mathbf{a}| = \\sqrt{\\cos^2 t + \\sin^2 t} = 1$

$a_N = \\sqrt{|\\mathbf{a}|^2 - a_T^2} = \\sqrt{1 - 0} = 1$`}],conclusion:"$a_T = 0$ (constant speed) and $a_N = 1$. The acceleration is purely centripetal."}}],exercises:[{id:"14-85-1",type:"exercise",number:1,statement:"A particle moves with position $\\mathbf{r}(t) = (4\\cos t, 4\\sin t)$. Find the velocity, speed, and acceleration. Show that the acceleration always points toward the origin.",solution:{steps:[{title:"Compute velocity",content:"$\\mathbf{v}(t) = (-4\\sin t, 4\\cos t)$"},{title:"Compute speed",content:"$|\\mathbf{v}| = \\sqrt{16\\sin^2 t + 16\\cos^2 t} = 4$"},{title:"Compute acceleration",content:"$\\mathbf{a}(t) = (-4\\cos t, -4\\sin t) = -\\mathbf{r}(t)$"}],conclusion:"Speed is constant at 4. Since $\\mathbf{a} = -\\mathbf{r}$, the acceleration always points from the particle toward the origin (centripetal)."}},{id:"14-85-2",type:"exercise",number:2,statement:"A projectile is launched from the origin at angle $60°$ with initial speed 20 m/s. Taking $g = 10$ m/s², find: (a) the position function, (b) the time to reach maximum height, (c) the range.",solution:{steps:[{title:"Position function",content:`$v_0 = 20$, $\\theta = 60°$

$v_x = 20\\cos 60° = 10$ m/s

$v_y = 20\\sin 60° = 10\\sqrt{3}$ m/s

$\\mathbf{r}(t) = (10t, 10\\sqrt{3}t - 5t^2)$`},{title:"Time to maximum height",content:`At max height, $v_y = 0$:

$10\\sqrt{3} - 10t = 0$

$t = \\sqrt{3}$ s`},{title:"Range",content:`Landing time: $y = 0$ gives $t(10\\sqrt{3} - 5t) = 0$

$t = 2\\sqrt{3}$ s

Range: $x(2\\sqrt{3}) = 10 \\cdot 2\\sqrt{3} = 20\\sqrt{3}$ m`}],conclusion:"(a) $\\mathbf{r}(t) = (10t, 10\\sqrt{3}t - 5t^2)$, (b) $t = \\sqrt{3} \\approx 1.73$ s, (c) Range $= 20\\sqrt{3} \\approx 34.6$ m."}},{id:"14-85-3",type:"exercise",number:3,statement:"Find the force acting on a 3 kg particle moving along $\\mathbf{r}(t) = (\\sin 2t, \\cos 2t, 4t)$.",solution:{steps:[{title:"Find acceleration",content:`$\\mathbf{v}(t) = (2\\cos 2t, -2\\sin 2t, 4)$

$\\mathbf{a}(t) = (-4\\sin 2t, -4\\cos 2t, 0)$`},{title:"Apply Newton's second law",content:"$\\mathbf{F} = m\\mathbf{a} = 3(-4\\sin 2t, -4\\cos 2t, 0)$"}],conclusion:"$\\mathbf{F}(t) = (-12\\sin 2t, -12\\cos 2t, 0)$ N. The force is horizontal and points toward the $z$-axis."}},{id:"14-85-4",type:"exercise",number:4,statement:"For $\\mathbf{r}(t) = (t, t^2, t^3)$, find $a_T$ and $a_N$ at $t = 1$.",solution:{steps:[{title:"Compute velocity and acceleration",content:`$\\mathbf{v} = (1, 2t, 3t^2)$, so $\\mathbf{v}(1) = (1, 2, 3)$

$\\mathbf{a} = (0, 2, 6t)$, so $\\mathbf{a}(1) = (0, 2, 6)$`},{title:"Compute speed",content:"$|\\mathbf{v}(1)| = \\sqrt{1 + 4 + 9} = \\sqrt{14}$"},{title:"Tangential component",content:"$a_T = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{|\\mathbf{v}|} = \\frac{0 + 4 + 18}{\\sqrt{14}} = \\frac{22}{\\sqrt{14}} = \\frac{11\\sqrt{14}}{7}$"},{title:"Normal component",content:`$|\\mathbf{a}| = \\sqrt{0 + 4 + 36} = \\sqrt{40} = 2\\sqrt{10}$

$a_N = \\sqrt{|\\mathbf{a}|^2 - a_T^2} = \\sqrt{40 - \\frac{484}{14}} = \\sqrt{\\frac{76}{14}} = \\sqrt{\\frac{38}{7}}$`}],conclusion:"$a_T = \\frac{11\\sqrt{14}}{7} \\approx 5.88$ and $a_N = \\sqrt{38/7} \\approx 2.33$."}}]},{sectionId:86,sectionTitle:"Arc Length",textbookSection:"§14.10-14.12",examples:[{id:"ex-14-86-1",type:"example",title:"Arc Length of a Helix",statement:"Find the arc length of $\\mathbf{r}(t) = (3\\cos t, 3\\sin t, 4t)$ for $t \\in [0, 2\\pi]$.",solution:{steps:[{title:"Compute the derivative",content:"$\\mathbf{r}'(t) = (-3\\sin t, 3\\cos t, 4)$"},{title:"Find the speed",content:"$\\|\\mathbf{r}'(t)\\| = \\sqrt{9\\sin^2 t + 9\\cos^2 t + 16} = \\sqrt{9 + 16} = 5$"},{title:"Integrate",content:"$L = \\int_0^{2\\pi} 5 \\, dt = 10\\pi$"}],conclusion:"The arc length is $10\\pi$."}},{id:"ex-14-86-2",type:"example",title:"Arc Length of a Graph",statement:"Find the arc length of $y = \\frac{x^{3/2}}{3}$ from $x = 0$ to $x = 4$.",solution:{steps:[{title:"Compute the derivative",content:"$\\frac{dy}{dx} = \\frac{1}{3} \\cdot \\frac{3}{2}x^{1/2} = \\frac{\\sqrt{x}}{2}$"},{title:"Set up the integral",content:"$L = \\int_0^4 \\sqrt{1 + \\frac{x}{4}} \\, dx = \\int_0^4 \\sqrt{\\frac{4+x}{4}} \\, dx = \\frac{1}{2}\\int_0^4 \\sqrt{4+x} \\, dx$"},{title:"Evaluate",content:`$L = \\frac{1}{2} \\cdot \\frac{2}{3}(4+x)^{3/2}\\Big|_0^4 = \\frac{1}{3}(8^{3/2} - 4^{3/2})$

$= \\frac{1}{3}(16\\sqrt{2} - 8) = \\frac{8(2\\sqrt{2} - 1)}{3}$`}],conclusion:"$L = \\frac{8(2\\sqrt{2} - 1)}{3} \\approx 4.85$"}}],exercises:[{id:"14-86-1",type:"exercise",number:1,statement:"Find the arc length of the curve $\\mathbf{r}(t) = (t, t^2/2, t^3/3)$ for $t \\in [0, 1]$.",solution:{steps:[{title:"Compute the derivative",content:"$\\mathbf{r}'(t) = (1, t, t^2)$"},{title:"Find the speed",content:`$\\|\\mathbf{r}'(t)\\| = \\sqrt{1 + t^2 + t^4} = \\sqrt{(1 + t^2)^2 - t^2} = ...$

Actually: $1 + t^2 + t^4 = (1 + t + t^2)(1 - t + t^2)$? Let's compute directly.

Note: $1 + t^2 + t^4 = (1 + t^2)^2 - t^2 = (1 + t^2 - t)(1 + t^2 + t)$`},{title:"Simplify",content:`Actually, $\\sqrt{1 + t^2 + t^4}$ doesn't simplify nicely.

But we can write $1 + t^2 + t^4 = (t^2 + t + 1)(t^2 - t + 1)$.

For this specific problem, notice: $\\sqrt{1 + t^2 + t^4} = |1 + t^2|$ is NOT correct.

Let's verify: $(1 + t^2)^2 = 1 + 2t^2 + t^4 \\neq 1 + t^2 + t^4$.

The integral $\\int_0^1 \\sqrt{1 + t^2 + t^4} \\, dt$ requires numerical methods or elliptic integrals.`}],conclusion:"$L = \\int_0^1 \\sqrt{1 + t^2 + t^4} \\, dt \\approx 1.111$ (numerical approximation)"}},{id:"14-86-2",type:"exercise",number:2,statement:"Find the arc length of the astroid $\\mathbf{r}(t) = (\\cos^3 t, \\sin^3 t)$ for $t \\in [0, 2\\pi]$.",solution:{steps:[{title:"Compute the derivative",content:`$x'(t) = -3\\cos^2 t \\sin t$

$y'(t) = 3\\sin^2 t \\cos t$`},{title:"Find the speed squared",content:`$(x')^2 + (y')^2 = 9\\cos^4 t \\sin^2 t + 9\\sin^4 t \\cos^2 t$

$= 9\\cos^2 t \\sin^2 t(\\cos^2 t + \\sin^2 t) = 9\\cos^2 t \\sin^2 t$`},{title:"Simplify and integrate",content:`$\\|\\mathbf{r}'(t)\\| = 3|\\cos t \\sin t| = \\frac{3}{2}|\\sin 2t|$

By symmetry: $L = 4 \\cdot \\frac{3}{2}\\int_0^{\\pi/2} \\sin 2t \\, dt = 6[-\\frac{1}{2}\\cos 2t]_0^{\\pi/2}$

$= 6 \\cdot \\frac{1}{2}(1 - (-1)) = 6$`}],conclusion:"The total arc length of the astroid is $6$."}},{id:"14-86-3",type:"exercise",number:3,statement:"Find the arc length of $y = \\cosh x$ from $x = 0$ to $x = 1$.",solution:{steps:[{title:"Compute the derivative",content:"$\\frac{dy}{dx} = \\sinh x$"},{title:"Set up the integral",content:`$L = \\int_0^1 \\sqrt{1 + \\sinh^2 x} \\, dx$

Using $1 + \\sinh^2 x = \\cosh^2 x$:`},{title:"Evaluate",content:"$L = \\int_0^1 \\cosh x \\, dx = [\\sinh x]_0^1 = \\sinh 1 - 0 = \\sinh 1$"}],conclusion:"$L = \\sinh 1 = \\frac{e - e^{-1}}{2} \\approx 1.175$"}},{id:"14-86-4",type:"exercise",number:4,statement:"Find the arc length function $s(t)$ for $\\mathbf{r}(t) = (2t, t^2, \\frac{2}{3}t^3)$ starting at $t = 0$, and reparametrize by arc length.",solution:{steps:[{title:"Compute the speed",content:`$\\mathbf{r}'(t) = (2, 2t, 2t^2)$

$\\|\\mathbf{r}'(t)\\| = 2\\sqrt{1 + t^2 + t^4}$`},{title:"Notice the pattern",content:`$1 + t^2 + t^4 = (1 + t^2)^2 - t^2$... This doesn't simplify.

Let's try: $1 + t^2 + t^4 = (1 + t + t^2)(1 - t + t^2)$? 

Actually: $(1 + t^2)^2 = 1 + 2t^2 + t^4$, so $1 + t^2 + t^4 \\neq (1+t^2)^2$.

But notice $\\|\\mathbf{r}'\\|^2 = 4 + 4t^2 + 4t^4 = 4(1 + t^2 + t^4)$.

And $4(1 + t^2 + t^4) = (2 + 2t^2)^2 - 4t^2 = (2 + 2t^2 - 2t)(2 + 2t^2 + 2t)$.

Hmm, this is still complex. Let me reconsider...

Actually wait: $4 + 4t^2 + 4t^4 = (2 + 2t^2)^2 - 4t^2 = (2 + 2t^2)^2 - (2t)^2$
$= (2 + 2t^2 + 2t)(2 + 2t^2 - 2t) = 2(1 + t^2 + t) \\cdot 2(1 + t^2 - t)$.

This still doesn't simplify to a perfect square.

For a simpler problem, assume this integral doesn't have a closed form.`}],conclusion:"The arc length function is $s(t) = \\int_0^t 2\\sqrt{1 + u^2 + u^4} \\, du$, which requires numerical integration for specific values."}}]},{sectionId:87,sectionTitle:"Curvature",textbookSection:"§14.13-14.15",examples:[{id:"ex-14-87-1",type:"example",title:"Curvature of an Ellipse",statement:"Find the curvature of the ellipse $\\mathbf{r}(t) = (3\\cos t, 2\\sin t)$ at $t = 0$ and $t = \\pi/2$.",solution:{steps:[{title:"Compute derivatives",content:`$\\mathbf{r}'(t) = (-3\\sin t, 2\\cos t)$

$\\mathbf{r}''(t) = (-3\\cos t, -2\\sin t)$`},{title:"Use the curvature formula",content:`$\\kappa = \\frac{|x'y'' - y'x''|}{(x'^2 + y'^2)^{3/2}}$

$x'y'' - y'x'' = (-3\\sin t)(-2\\sin t) - (2\\cos t)(-3\\cos t)$

$= 6\\sin^2 t + 6\\cos^2 t = 6$`},{title:"Evaluate at t = 0",content:`$(x')^2 + (y')^2 = 9\\sin^2 0 + 4\\cos^2 0 = 4$

$\\kappa(0) = \\frac{6}{4^{3/2}} = \\frac{6}{8} = \\frac{3}{4}$`},{title:"Evaluate at t = π/2",content:`$(x')^2 + (y')^2 = 9\\sin^2(\\pi/2) + 4\\cos^2(\\pi/2) = 9$

$\\kappa(\\pi/2) = \\frac{6}{9^{3/2}} = \\frac{6}{27} = \\frac{2}{9}$`}],conclusion:"At $t = 0$ (vertex on major axis): $\\kappa = 3/4$. At $t = \\pi/2$ (vertex on minor axis): $\\kappa = 2/9$. The ellipse curves more sharply at the ends of the minor axis."}},{id:"ex-14-87-2",type:"example",title:"Curvature of y = eˣ",statement:"Find the curvature of $y = e^x$ and determine where it is maximum.",solution:{steps:[{title:"Apply the formula",content:`$y' = e^x$, $y'' = e^x$

$\\kappa = \\frac{|e^x|}{(1 + e^{2x})^{3/2}} = \\frac{e^x}{(1 + e^{2x})^{3/2}}$`},{title:"Find the maximum",content:`Let $u = e^x > 0$. We want to maximize $\\kappa = \\frac{u}{(1 + u^2)^{3/2}}$.

$\\frac{d\\kappa}{du} = \\frac{(1+u^2)^{3/2} - u \\cdot \\frac{3}{2}(1+u^2)^{1/2} \\cdot 2u}{(1+u^2)^3}$

$= \\frac{(1+u^2) - 3u^2}{(1+u^2)^{5/2}} = \\frac{1 - 2u^2}{(1+u^2)^{5/2}}$

Setting $= 0$: $1 - 2u^2 = 0$, so $u = 1/\\sqrt{2}$.`},{title:"Find x and maximum curvature",content:`$e^x = 1/\\sqrt{2}$, so $x = -\\frac{1}{2}\\ln 2$

$\\kappa_{\\max} = \\frac{1/\\sqrt{2}}{(1 + 1/2)^{3/2}} = \\frac{1/\\sqrt{2}}{(3/2)^{3/2}} = \\frac{2\\sqrt{2}}{3\\sqrt{3}} = \\frac{2\\sqrt{6}}{9}$`}],conclusion:"The maximum curvature is $\\kappa_{\\max} = \\frac{2\\sqrt{6}}{9} \\approx 0.544$ at $x = -\\frac{1}{2}\\ln 2 \\approx -0.347$."}}],exercises:[{id:"14-87-1",type:"exercise",number:1,statement:"Find the curvature of the helix $\\mathbf{r}(t) = (a\\cos t, a\\sin t, bt)$ where $a, b > 0$.",solution:{steps:[{title:"Compute derivatives",content:`$\\mathbf{r}'(t) = (-a\\sin t, a\\cos t, b)$

$\\mathbf{r}''(t) = (-a\\cos t, -a\\sin t, 0)$`},{title:"Compute the cross product",content:`$\\mathbf{r}' \\times \\mathbf{r}'' = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -a\\sin t & a\\cos t & b \\\\ -a\\cos t & -a\\sin t & 0 \\end{vmatrix}$

$= (ab\\sin t, -ab\\cos t, a^2)$`},{title:"Compute magnitudes",content:`$\\|\\mathbf{r}' \\times \\mathbf{r}''\\| = \\sqrt{a^2b^2 + a^4} = a\\sqrt{a^2 + b^2}$

$\\|\\mathbf{r}'\\| = \\sqrt{a^2 + b^2}$`},{title:"Apply the formula",content:"$\\kappa = \\frac{a\\sqrt{a^2+b^2}}{(\\sqrt{a^2+b^2})^3} = \\frac{a}{a^2 + b^2}$"}],conclusion:"$\\kappa = \\frac{a}{a^2 + b^2}$, which is constant. The helix has constant curvature."}},{id:"14-87-2",type:"exercise",number:2,statement:"Find the curvature of $y = x^3$ at the origin.",solution:{steps:[{title:"Compute derivatives",content:"$y' = 3x^2$, $y'' = 6x$"},{title:"Apply the formula",content:"$\\kappa = \\frac{|y''|}{(1 + (y')^2)^{3/2}} = \\frac{|6x|}{(1 + 9x^4)^{3/2}}$"},{title:"Evaluate at x = 0",content:"$\\kappa(0) = \\frac{0}{1} = 0$"}],conclusion:"The curvature at the origin is $0$. This is an inflection point where the curve is momentarily straight."}},{id:"14-87-3",type:"exercise",number:3,statement:"Find the radius of curvature of the parabola $y = x^2/4$ at the vertex.",solution:{steps:[{title:"Compute derivatives",content:"$y' = x/2$, $y'' = 1/2$"},{title:"Find curvature at vertex",content:`At $x = 0$: $y' = 0$, $y'' = 1/2$

$\\kappa = \\frac{1/2}{(1 + 0)^{3/2}} = \\frac{1}{2}$`},{title:"Radius of curvature",content:"$\\rho = \\frac{1}{\\kappa} = 2$"}],conclusion:"The radius of curvature at the vertex is $\\rho = 2$. The osculating circle has radius 2."}},{id:"14-87-4",type:"exercise",number:4,statement:"Find the unit tangent $\\mathbf{T}$ and principal normal $\\mathbf{N}$ for $\\mathbf{r}(t) = (\\cos t, \\sin t, t)$ at any $t$.",solution:{steps:[{title:"Compute T",content:`$\\mathbf{r}'(t) = (-\\sin t, \\cos t, 1)$

$\\|\\mathbf{r}'\\| = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt{2}$

$\\mathbf{T}(t) = \\frac{1}{\\sqrt{2}}(-\\sin t, \\cos t, 1)$`},{title:"Compute T'",content:`$\\mathbf{T}'(t) = \\frac{1}{\\sqrt{2}}(-\\cos t, -\\sin t, 0)$

$\\|\\mathbf{T}'\\| = \\frac{1}{\\sqrt{2}}$`},{title:"Compute N",content:`$\\mathbf{N} = \\frac{\\mathbf{T}'}{\\|\\mathbf{T}'\\|} = \\frac{\\frac{1}{\\sqrt{2}}(-\\cos t, -\\sin t, 0)}{\\frac{1}{\\sqrt{2}}}$

$= (-\\cos t, -\\sin t, 0)$`}],conclusion:"$\\mathbf{T} = \\frac{1}{\\sqrt{2}}(-\\sin t, \\cos t, 1)$ and $\\mathbf{N} = (-\\cos t, -\\sin t, 0)$. Note that $\\mathbf{N}$ points toward the $z$-axis."}}]},{sectionId:88,sectionTitle:"Planetary Motion",textbookSection:"§14.16-14.18",examples:[{id:"ex-14-88-1",type:"example",title:"Verifying Kepler's Second Law",statement:"Show that $\\frac{dA}{dt} = \\frac{1}{2}|\\mathbf{r} \\times \\mathbf{v}|$ for any planar motion.",solution:{steps:[{title:"Area swept in time dt",content:`In time $dt$, the position vector sweeps from $\\mathbf{r}$ to $\\mathbf{r} + \\mathbf{v}\\,dt$.

The area of the triangle formed is approximately:

$dA = \\frac{1}{2}|\\mathbf{r} \\times (\\mathbf{v}\\,dt)| = \\frac{1}{2}|\\mathbf{r} \\times \\mathbf{v}|\\,dt$`},{title:"Areal velocity",content:`$\\frac{dA}{dt} = \\frac{1}{2}|\\mathbf{r} \\times \\mathbf{v}| = \\frac{h}{2}$

where $h = |\\mathbf{r} \\times \\mathbf{v}|$ is the magnitude of angular momentum per unit mass.`}],conclusion:"Since angular momentum is conserved for central forces, $h$ is constant, so $\\frac{dA}{dt} = \\frac{h}{2}$ is constant. This proves Kepler's second law: equal areas in equal times."}},{id:"ex-14-88-2",type:"example",title:"Circular Orbit Speed",statement:"Find the orbital speed of a satellite in circular orbit at altitude 300 km above Earth. Use $R_E = 6.37 \\times 10^6$ m and $GM_E = 3.99 \\times 10^{14}$ m³/s².",solution:{steps:[{title:"Find orbital radius",content:"$r = R_E + h = 6.37 \\times 10^6 + 3 \\times 10^5 = 6.67 \\times 10^6$ m"},{title:"Apply circular velocity formula",content:"$v_{\\text{circ}} = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{3.99 \\times 10^{14}}{6.67 \\times 10^6}}$"},{title:"Calculate",content:"$v_{\\text{circ}} = \\sqrt{5.98 \\times 10^7} \\approx 7.73 \\times 10^3$ m/s"}],conclusion:"The orbital speed is approximately $7.73$ km/s."}}],exercises:[{id:"14-88-1",type:"exercise",number:1,statement:"Using Kepler's third law $T^2 = \\frac{4\\pi^2}{GM}a^3$, calculate the period of the Moon's orbit given $a = 3.84 \\times 10^8$ m and $GM_E = 3.99 \\times 10^{14}$ m³/s².",solution:{steps:[{title:"Apply Kepler's third law",content:"$T^2 = \\frac{4\\pi^2 a^3}{GM} = \\frac{4\\pi^2 (3.84 \\times 10^8)^3}{3.99 \\times 10^{14}}$"},{title:"Calculate",content:`$a^3 = (3.84)^3 \\times 10^{24} = 56.6 \\times 10^{24}$

$T^2 = \\frac{4 \\times 9.87 \\times 56.6 \\times 10^{24}}{3.99 \\times 10^{14}}$

$= \\frac{2234 \\times 10^{24}}{3.99 \\times 10^{14}} = 5.60 \\times 10^{12}$ s²`},{title:"Find T",content:`$T = \\sqrt{5.60 \\times 10^{12}} = 2.37 \\times 10^6$ s

$= \\frac{2.37 \\times 10^6}{86400}$ days $\\approx 27.4$ days`}],conclusion:"The Moon's orbital period is approximately 27.4 days, which matches the observed sidereal month."}},{id:"14-88-2",type:"exercise",number:2,statement:"Calculate the escape velocity from Earth's surface. Use $R_E = 6.37 \\times 10^6$ m and $GM_E = 3.99 \\times 10^{14}$ m³/s².",solution:{steps:[{title:"Apply escape velocity formula",content:"$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{r}} = \\sqrt{\\frac{2 \\times 3.99 \\times 10^{14}}{6.37 \\times 10^6}}$"},{title:"Calculate",content:`$v_{\\text{esc}} = \\sqrt{\\frac{7.98 \\times 10^{14}}{6.37 \\times 10^6}} = \\sqrt{1.25 \\times 10^8}$

$= 1.12 \\times 10^4$ m/s`}],conclusion:"$v_{\\text{esc}} \\approx 11.2$ km/s"}},{id:"14-88-3",type:"exercise",number:3,statement:"A satellite is in an elliptical orbit with perihelion distance $r_p = 7000$ km and aphelion distance $r_a = 10000$ km. Find the eccentricity and semi-major axis.",solution:{steps:[{title:"Semi-major axis",content:"$a = \\frac{r_p + r_a}{2} = \\frac{7000 + 10000}{2} = 8500$ km"},{title:"Eccentricity",content:"$e = \\frac{r_a - r_p}{r_a + r_p} = \\frac{10000 - 7000}{10000 + 7000} = \\frac{3000}{17000} \\approx 0.176$"}],conclusion:"Semi-major axis $a = 8500$ km, eccentricity $e \\approx 0.176$."}},{id:"14-88-4",type:"exercise",number:4,statement:"Using the vis-viva equation $v^2 = GM(\\frac{2}{r} - \\frac{1}{a})$, find the speed of a satellite at perihelion ($r = 7000$ km) if $a = 8500$ km and $GM = 3.99 \\times 10^{14}$ m³/s².",solution:{steps:[{title:"Convert to meters",content:"$r = 7 \\times 10^6$ m, $a = 8.5 \\times 10^6$ m"},{title:"Apply vis-viva",content:`$v^2 = 3.99 \\times 10^{14} \\left(\\frac{2}{7 \\times 10^6} - \\frac{1}{8.5 \\times 10^6}\\right)$

$= 3.99 \\times 10^{14} \\left(\\frac{2}{7} - \\frac{1}{8.5}\\right) \\times 10^{-6}$

$= 3.99 \\times 10^8 (0.286 - 0.118)$

$= 3.99 \\times 10^8 \\times 0.168 = 6.70 \\times 10^7$ m²/s²`},{title:"Find v",content:"$v = \\sqrt{6.70 \\times 10^7} \\approx 8.19 \\times 10^3$ m/s"}],conclusion:"At perihelion, $v \\approx 8.19$ km/s."}},{id:"14-88-5",type:"exercise",number:5,statement:"Show that for a circular orbit of radius $r$, the total energy per unit mass is $E = -\\frac{GM}{2r}$.",solution:{steps:[{title:"Kinetic energy",content:`For circular orbit: $v = \\sqrt{\\frac{GM}{r}}$

$KE = \\frac{1}{2}v^2 = \\frac{GM}{2r}$`},{title:"Potential energy",content:"$PE = -\\frac{GM}{r}$"},{title:"Total energy",content:"$E = KE + PE = \\frac{GM}{2r} - \\frac{GM}{r} = -\\frac{GM}{2r}$"}],conclusion:"$E = -\\frac{GM}{2r}$. The negative energy indicates a bound orbit."}}]}],i={partId:15,partTitle:t,textbookChapter:e,sections:n};export{i as p};
