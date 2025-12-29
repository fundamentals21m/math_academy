import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <p>
        We now extend the calculus of real-valued functions to complex-valued functions
        of a real variable. This extension is essential for solving differential equations
        and understanding oscillatory phenomena.
      </p>

      <h2>Complex-Valued Functions</h2>

      <Callout type="definition" title="Complex-Valued Function">
        <p>
          A <strong>complex-valued function</strong> of a real variable <MathInline>{`t`}</MathInline>
          has the form:
        </p>
        <MathBlock>{`f(t) = u(t) + iv(t)`}</MathBlock>
        <p>
          where <MathInline>{`u(t)`}</MathInline> and <MathInline>{`v(t)`}</MathInline> are real-valued functions,
          called the <strong>real</strong> and <strong>imaginary parts</strong> of <MathInline>{`f`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Complex-Valued Functions">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <MathInline>{`f(t) = e^{it} = \\cos t + i\\sin t`}</MathInline>
            <br />Real part: <MathInline>{`\\cos t`}</MathInline>, Imaginary part: <MathInline>{`\\sin t`}</MathInline>
          </li>
          <li>
            <MathInline>{`f(t) = t^2 + it^3`}</MathInline>
            <br />Real part: <MathInline>{`t^2`}</MathInline>, Imaginary part: <MathInline>{`t^3`}</MathInline>
          </li>
          <li>
            <MathInline>{`f(t) = e^{(2+3i)t}`}</MathInline>
            <br />This requires expansion using Euler's formula
          </li>
        </ul>
      </Callout>

      <h2>Differentiation</h2>

      <Callout type="definition" title="Derivative of Complex-Valued Function">
        <p>
          The derivative of <MathInline>{`f(t) = u(t) + iv(t)`}</MathInline> is defined component-wise:
        </p>
        <MathBlock>{`f'(t) = u'(t) + iv'(t)`}</MathBlock>
        <p>
          All the usual differentiation rules apply.
        </p>
      </Callout>

      <Callout type="theorem" title="Differentiation Rules">
        <p>For complex-valued functions <MathInline>{`f`}</MathInline> and <MathInline>{`g`}</MathInline>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`(f + g)' = f' + g'`}</MathInline></li>
          <li><MathInline>{`(cf)' = cf'`}</MathInline> for any complex constant <MathInline>{`c`}</MathInline></li>
          <li><MathInline>{`(fg)' = f'g + fg'`}</MathInline></li>
          <li><MathInline>{`(f/g)' = (f'g - fg')/g^2`}</MathInline></li>
          <li><MathInline>{`(f \\circ g)' = (f' \\circ g) \\cdot g'`}</MathInline> (chain rule)</li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Exponential Rule">
        <p>
          For any complex constant <MathInline>{`\\lambda = a + bi`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{d}{dt}e^{\\lambda t} = \\lambda e^{\\lambda t}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Differentiating e^(it)">
        <p>Verify that <MathInline>{`\\frac{d}{dt}e^{it} = ie^{it}`}</MathInline>.</p>
        <p><strong>Method 1 (Direct):</strong></p>
        <MathBlock>{`\\frac{d}{dt}e^{it} = ie^{it}`}</MathBlock>
        <p><strong>Method 2 (Component-wise):</strong></p>
        <MathBlock>{`e^{it} = \\cos t + i\\sin t`}</MathBlock>
        <MathBlock>{`\\frac{d}{dt}(\\cos t + i\\sin t) = -\\sin t + i\\cos t`}</MathBlock>
        <MathBlock>{`= i(\\cos t + i\\sin t) = ie^{it} \\quad \\checkmark`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Complex Exponential">
        <p>Differentiate <MathInline>{`f(t) = e^{(2+3i)t}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`f'(t) = (2 + 3i)e^{(2+3i)t}`}</MathBlock>
        <p>To express in terms of real and imaginary parts:</p>
        <MathBlock>{`e^{(2+3i)t} = e^{2t}e^{3it} = e^{2t}(\\cos 3t + i\\sin 3t)`}</MathBlock>
        <MathBlock>{`f'(t) = (2+3i)e^{2t}(\\cos 3t + i\\sin 3t)`}</MathBlock>
        <MathBlock>{`= e^{2t}[(2\\cos 3t - 3\\sin 3t) + i(2\\sin 3t + 3\\cos 3t)]`}</MathBlock>
      </Callout>

      <h2>Integration</h2>

      <Callout type="definition" title="Integral of Complex-Valued Function">
        <p>
          The integral of <MathInline>{`f(t) = u(t) + iv(t)`}</MathInline> is defined component-wise:
        </p>
        <MathBlock>{`\\int f(t)\\,dt = \\int u(t)\\,dt + i\\int v(t)\\,dt`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Exponential Integral">
        <p>
          For any complex constant <MathInline>{`\\lambda \\neq 0`}</MathInline>:
        </p>
        <MathBlock>{`\\int e^{\\lambda t}\\,dt = \\frac{1}{\\lambda}e^{\\lambda t} + C`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Integrating e^(it)">
        <MathBlock>{`\\int e^{it}\\,dt = \\frac{1}{i}e^{it} + C = \\frac{e^{it}}{i} \\cdot \\frac{-i}{-i} = \\frac{-ie^{it}}{1} = -ie^{it} + C`}</MathBlock>
        <p><strong>Verify:</strong></p>
        <MathBlock>{`\\frac{d}{dt}(-ie^{it}) = -i \\cdot ie^{it} = -i^2 e^{it} = e^{it} \\quad \\checkmark`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Definite Integral">
        <p>Evaluate <MathInline>{`\\int_0^\\pi e^{it}\\,dt`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^\\pi e^{it}\\,dt = \\left[-ie^{it}\\right]_0^\\pi = -ie^{i\\pi} - (-ie^0)`}</MathBlock>
        <MathBlock>{`= -i(-1) + i(1) = i + i = 2i`}</MathBlock>
        <p><strong>Verify using components:</strong></p>
        <MathBlock>{`\\int_0^\\pi (\\cos t + i\\sin t)\\,dt = [\\sin t]_0^\\pi + i[-\\cos t]_0^\\pi`}</MathBlock>
        <MathBlock>{`= (0 - 0) + i(-(-1) - (-1)) = 0 + i(2) = 2i \\quad \\checkmark`}</MathBlock>
      </Callout>

      <h2>Application: Deriving Real Integrals</h2>

      <Callout type="info" title="Strategy">
        <p>
          Complex exponentials can simplify the integration of products involving
          sines and cosines with exponentials.
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Using Complex Methods">
        <p>Find <MathInline>{`\\int e^{2t}\\cos 3t\\,dt`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Note that <MathInline>{`e^{2t}\\cos 3t = \\text{Re}(e^{2t}e^{3it}) = \\text{Re}(e^{(2+3i)t})`}</MathInline>.
        </p>
        <p>Compute the complex integral:</p>
        <MathBlock>{`\\int e^{(2+3i)t}\\,dt = \\frac{1}{2+3i}e^{(2+3i)t}`}</MathBlock>
        <p>Simplify <MathInline>{`\\frac{1}{2+3i}`}</MathInline>:</p>
        <MathBlock>{`\\frac{1}{2+3i} = \\frac{2-3i}{(2+3i)(2-3i)} = \\frac{2-3i}{13}`}</MathBlock>
        <p>So:</p>
        <MathBlock>{`\\int e^{(2+3i)t}\\,dt = \\frac{2-3i}{13}e^{(2+3i)t}`}</MathBlock>
        <MathBlock>{`= \\frac{2-3i}{13}e^{2t}(\\cos 3t + i\\sin 3t)`}</MathBlock>
        <MathBlock>{`= \\frac{e^{2t}}{13}[(2\\cos 3t + 3\\sin 3t) + i(2\\sin 3t - 3\\cos 3t)]`}</MathBlock>
        <p>Taking the real part:</p>
        <MathBlock>{`\\int e^{2t}\\cos 3t\\,dt = \\frac{e^{2t}}{13}(2\\cos 3t + 3\\sin 3t) + C`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 7: Sine Version">
        <p>From Example 6, the imaginary part gives:</p>
        <MathBlock>{`\\int e^{2t}\\sin 3t\\,dt = \\frac{e^{2t}}{13}(2\\sin 3t - 3\\cos 3t) + C`}</MathBlock>
      </Callout>

      <h2>Application: Differential Equations</h2>

      <Callout type="theorem" title="Complex Solutions of Real ODEs">
        <p>
          If <MathInline>{`y = f(t)`}</MathInline> is a complex-valued solution of a linear ODE
          with real coefficients, then both <MathInline>{`\\text{Re}(f)`}</MathInline> and
          <MathInline>{`\\text{Im}(f)`}</MathInline> are real solutions.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Second-Order ODE">
        <p>
          Solve <MathInline>{`y'' + 4y = 0`}</MathInline> using complex exponentials.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Try <MathInline>{`y = e^{rt}`}</MathInline>:</p>
        <MathBlock>{`r^2 e^{rt} + 4e^{rt} = 0 \\quad \\Rightarrow \\quad r^2 + 4 = 0`}</MathBlock>
        <MathBlock>{`r = \\pm 2i`}</MathBlock>
        <p>Complex solutions: <MathInline>{`e^{2it}`}</MathInline> and <MathInline>{`e^{-2it}`}</MathInline></p>
        <p>Real solutions from <MathInline>{`e^{2it} = \\cos 2t + i\\sin 2t`}</MathInline>:</p>
        <MathBlock>{`y_1 = \\cos 2t, \\quad y_2 = \\sin 2t`}</MathBlock>
        <p>General solution:</p>
        <MathBlock>{`y = c_1\\cos 2t + c_2\\sin 2t`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 9: Damped Oscillation">
        <p>Solve <MathInline>{`y'' + 2y' + 5y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Characteristic equation:</p>
        <MathBlock>{`r^2 + 2r + 5 = 0 \\quad \\Rightarrow \\quad r = \\frac{-2 \\pm \\sqrt{4-20}}{2} = -1 \\pm 2i`}</MathBlock>
        <p>Complex solution:</p>
        <MathBlock>{`e^{(-1+2i)t} = e^{-t}e^{2it} = e^{-t}(\\cos 2t + i\\sin 2t)`}</MathBlock>
        <p>Real solutions:</p>
        <MathBlock>{`y_1 = e^{-t}\\cos 2t, \\quad y_2 = e^{-t}\\sin 2t`}</MathBlock>
        <p>General solution:</p>
        <MathBlock>{`y = e^{-t}(c_1\\cos 2t + c_2\\sin 2t)`}</MathBlock>
      </Callout>

      <h2>Forced Oscillations</h2>

      <Callout type="example" title="Example 10: Nonhomogeneous Equation">
        <p>Find a particular solution of <MathInline>{`y'' + 4y = \\cos 3t`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Since <MathInline>{`\\cos 3t = \\text{Re}(e^{3it})`}</MathInline>, solve the complex equation:
        </p>
        <MathBlock>{`y'' + 4y = e^{3it}`}</MathBlock>
        <p>Try <MathInline>{`y_p = Ae^{3it}`}</MathInline>:</p>
        <MathBlock>{`(3i)^2 Ae^{3it} + 4Ae^{3it} = e^{3it}`}</MathBlock>
        <MathBlock>{`-9A + 4A = 1 \\quad \\Rightarrow \\quad A = -\\frac{1}{5}`}</MathBlock>
        <p>Complex particular solution:</p>
        <MathBlock>{`y_p = -\\frac{1}{5}e^{3it} = -\\frac{1}{5}(\\cos 3t + i\\sin 3t)`}</MathBlock>
        <p>Real particular solution (take real part):</p>
        <MathBlock>{`y_p = -\\frac{1}{5}\\cos 3t`}</MathBlock>
      </Callout>

      <h2>The Real and Imaginary Part Functions</h2>

      <Callout type="theorem" title="Linearity of Re and Im">
        <p>
          The operations <MathInline>{`\\text{Re}`}</MathInline> and <MathInline>{`\\text{Im}`}</MathInline>
          are linear:
        </p>
        <MathBlock>{`\\text{Re}(f + g) = \\text{Re}(f) + \\text{Re}(g)`}</MathBlock>
        <MathBlock>{`\\text{Re}(cf) = c \\cdot \\text{Re}(f) \\quad \\text{for real } c`}</MathBlock>
        <p>Similarly for <MathInline>{`\\text{Im}`}</MathInline>.</p>
      </Callout>

      <Callout type="theorem" title="Derivatives and Integrals Commute with Re/Im">
        <MathBlock>{`\\text{Re}(f') = (\\text{Re}\\,f)'`}</MathBlock>
        <MathBlock>{`\\text{Re}\\left(\\int f\\,dt\\right) = \\int \\text{Re}(f)\\,dt`}</MathBlock>
        <p>Similarly for <MathInline>{`\\text{Im}`}</MathInline>.</p>
      </Callout>

      <h2>Euler's Formula Applications</h2>

      <Callout type="example" title="Example 11: Expressing Trig as Exponentials">
        <p>From Euler's formula and its conjugate:</p>
        <MathBlock>{`e^{i\\theta} = \\cos\\theta + i\\sin\\theta`}</MathBlock>
        <MathBlock>{`e^{-i\\theta} = \\cos\\theta - i\\sin\\theta`}</MathBlock>
        <p>Adding and subtracting:</p>
        <MathBlock>{`\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}`}</MathBlock>
        <MathBlock>{`\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 12: Product of Sines">
        <p>Find <MathInline>{`\\int \\sin^2 t\\,dt`}</MathInline> using exponentials.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\sin^2 t = \\left(\\frac{e^{it} - e^{-it}}{2i}\\right)^2 = \\frac{e^{2it} - 2 + e^{-2it}}{-4}`}</MathBlock>
        <MathBlock>{`= \\frac{-e^{2it} + 2 - e^{-2it}}{4} = \\frac{1}{2} - \\frac{e^{2it} + e^{-2it}}{4}`}</MathBlock>
        <MathBlock>{`= \\frac{1}{2} - \\frac{\\cos 2t}{2} = \\frac{1 - \\cos 2t}{2}`}</MathBlock>
        <p>Now integrate:</p>
        <MathBlock>{`\\int \\sin^2 t\\,dt = \\int \\frac{1 - \\cos 2t}{2}\\,dt = \\frac{t}{2} - \\frac{\\sin 2t}{4} + C`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Complex-valued function:</strong> <MathInline>{`f(t) = u(t) + iv(t)`}</MathInline>
        </li>
        <li>
          <strong>Differentiation:</strong> <MathInline>{`f' = u' + iv'`}</MathInline> (component-wise)
        </li>
        <li>
          <strong>Integration:</strong> <MathInline>{`\\int f = \\int u + i\\int v`}</MathInline> (component-wise)
        </li>
        <li>
          <strong>Exponential rule:</strong> <MathInline>{`\\frac{d}{dt}e^{\\lambda t} = \\lambda e^{\\lambda t}`}</MathInline>
        </li>
        <li>
          <strong>Strategy:</strong> Use <MathInline>{`e^{(a+bi)t}`}</MathInline> to find integrals involving <MathInline>{`e^{at}\\cos bt`}</MathInline> and <MathInline>{`e^{at}\\sin bt`}</MathInline>
        </li>
        <li>
          <strong>ODEs:</strong> Complex roots <MathInline>{`\\alpha \\pm \\beta i`}</MathInline> give solutions <MathInline>{`e^{\\alpha t}\\cos\\beta t`}</MathInline> and <MathInline>{`e^{\\alpha t}\\sin\\beta t`}</MathInline>
        </li>
        <li>
          <strong>Trig identities:</strong> <MathInline>{`\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}`}</MathInline>, <MathInline>{`\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}`}</MathInline>
        </li>
      </ul>
    </LessonLayout>
  );
}
