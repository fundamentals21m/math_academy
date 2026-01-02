import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <p>
        A <strong>separable equation</strong> is a first-order differential equation
        that can be written so that all <InlineMath>{`y`}</InlineMath> terms are on one side
        and all <InlineMath>{`x`}</InlineMath> terms are on the other. This structure allows
        us to solve by direct integration.
      </p>

      <h2>Separable Equations</h2>

      <Callout type="definition" title="Separable Equation">
        <p>
          A first-order equation is <strong>separable</strong> if it can be written as:
        </p>
        <MathBlock>{`\\frac{dy}{dx} = g(x) h(y)`}</MathBlock>
        <p>
          or equivalently, after separating variables:
        </p>
        <MathBlock>{`\\frac{1}{h(y)}\\,dy = g(x)\\,dx`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Solution Method">
        <p>To solve a separable equation:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Write the equation in the form <InlineMath>{`y' = g(x)h(y)`}</InlineMath></li>
          <li>Separate: <InlineMath>{`\\frac{dy}{h(y)} = g(x)\\,dx`}</InlineMath></li>
          <li>Integrate both sides: <InlineMath>{`\\int \\frac{dy}{h(y)} = \\int g(x)\\,dx`}</InlineMath></li>
          <li>Solve for <InlineMath>{`y`}</InlineMath> if possible</li>
        </ol>
      </Callout>

      <Callout type="info" title="Technical Note">
        <p>
          The separation process treats <InlineMath>{`dy/dx`}</InlineMath> as a ratio of differentials.
          While this is informal, it can be justified rigorously using the chain rule and
          the inverse function theorem.
        </p>
      </Callout>

      <h2>Basic Examples</h2>

      <Callout type="example" title="Example 1: Exponential Growth">
        <p>Solve <InlineMath>{`y' = ky`}</InlineMath> where <InlineMath>{`k`}</InlineMath> is a constant.</p>
        <p><strong>Solution:</strong></p>
        <p>Separate variables:</p>
        <MathBlock>{`\\frac{dy}{y} = k\\,dx`}</MathBlock>
        <p>Integrate both sides:</p>
        <MathBlock>{`\\int \\frac{dy}{y} = \\int k\\,dx`}</MathBlock>
        <MathBlock>{`\\ln|y| = kx + C_1`}</MathBlock>
        <p>Solve for <InlineMath>{`y`}</InlineMath>:</p>
        <MathBlock>{`|y| = e^{kx + C_1} = e^{C_1} e^{kx}`}</MathBlock>
        <MathBlock>{`y = \\pm e^{C_1} e^{kx} = Ce^{kx}`}</MathBlock>
        <p>
          where <InlineMath>{`C = \\pm e^{C_1}`}</InlineMath> is an arbitrary constant
          (including <InlineMath>{`C = 0`}</InlineMath> for the equilibrium <InlineMath>{`y = 0`}</InlineMath>).
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Simple Separation">
        <p>Solve <InlineMath>{`y' = xy`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Separate:</p>
        <MathBlock>{`\\frac{dy}{y} = x\\,dx`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`\\ln|y| = \\frac{x^2}{2} + C`}</MathBlock>
        <p>Solve for <InlineMath>{`y`}</InlineMath>:</p>
        <MathBlock>{`y = Ae^{x^2/2}`}</MathBlock>
        <p>where <InlineMath>{`A`}</InlineMath> is an arbitrary constant.</p>
      </Callout>

      <Callout type="example" title="Example 3: Rational Right Side">
        <p>Solve <InlineMath>{`y' = \\frac{x}{y}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Separate:</p>
        <MathBlock>{`y\\,dy = x\\,dx`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`\\frac{y^2}{2} = \\frac{x^2}{2} + C`}</MathBlock>
        <MathBlock>{`y^2 = x^2 + K`}</MathBlock>
        <p>
          where <InlineMath>{`K = 2C`}</InlineMath>. The solutions are hyperbolas (for <InlineMath>{`K \\neq 0`}</InlineMath>)
          or lines <InlineMath>{`y = \\pm x`}</InlineMath> (for <InlineMath>{`K = 0`}</InlineMath>).
        </p>
      </Callout>

      <h2>Initial Value Problems</h2>

      <Callout type="example" title="Example 4: IVP with Exponential">
        <p>Solve <InlineMath>{`y' = y^2`}</InlineMath>, <InlineMath>{`y(0) = 1`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Separate:</p>
        <MathBlock>{`\\frac{dy}{y^2} = dx`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`-\\frac{1}{y} = x + C`}</MathBlock>
        <p>Apply initial condition <InlineMath>{`y(0) = 1`}</InlineMath>:</p>
        <MathBlock>{`-\\frac{1}{1} = 0 + C \\quad \\Rightarrow \\quad C = -1`}</MathBlock>
        <p>Solve for <InlineMath>{`y`}</InlineMath>:</p>
        <MathBlock>{`-\\frac{1}{y} = x - 1 \\quad \\Rightarrow \\quad y = \\frac{1}{1-x}`}</MathBlock>
        <p>
          Note: This solution has a vertical asymptote at <InlineMath>{`x = 1`}</InlineMath>.
          The solution only exists for <InlineMath>{`x < 1`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Trigonometric">
        <p>Solve <InlineMath>{`y' = \\frac{\\cos x}{y}`}</InlineMath>, <InlineMath>{`y(0) = 2`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Separate:</p>
        <MathBlock>{`y\\,dy = \\cos x\\,dx`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`\\frac{y^2}{2} = \\sin x + C`}</MathBlock>
        <p>Apply <InlineMath>{`y(0) = 2`}</InlineMath>:</p>
        <MathBlock>{`\\frac{4}{2} = \\sin 0 + C \\quad \\Rightarrow \\quad C = 2`}</MathBlock>
        <p>Solution:</p>
        <MathBlock>{`y^2 = 2\\sin x + 4`}</MathBlock>
        <MathBlock>{`y = \\sqrt{2\\sin x + 4}`}</MathBlock>
        <p>(taking positive root since <InlineMath>{`y(0) = 2 > 0`}</InlineMath>)</p>
      </Callout>

      <h2>More Complex Examples</h2>

      <Callout type="example" title="Example 6: Logistic Equation">
        <p>Solve <InlineMath>{`y' = y(1-y)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Separate:</p>
        <MathBlock>{`\\frac{dy}{y(1-y)} = dx`}</MathBlock>
        <p>Use partial fractions on the left side:</p>
        <MathBlock>{`\\frac{1}{y(1-y)} = \\frac{1}{y} + \\frac{1}{1-y}`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`\\int \\left(\\frac{1}{y} + \\frac{1}{1-y}\\right)dy = \\int dx`}</MathBlock>
        <MathBlock>{`\\ln|y| - \\ln|1-y| = x + C`}</MathBlock>
        <MathBlock>{`\\ln\\left|\\frac{y}{1-y}\\right| = x + C`}</MathBlock>
        <p>Exponentiate:</p>
        <MathBlock>{`\\frac{y}{1-y} = Ae^x`}</MathBlock>
        <p>Solve for <InlineMath>{`y`}</InlineMath>:</p>
        <MathBlock>{`y = Ae^x(1-y) = Ae^x - Ae^x y`}</MathBlock>
        <MathBlock>{`y + Ae^x y = Ae^x`}</MathBlock>
        <MathBlock>{`y(1 + Ae^x) = Ae^x`}</MathBlock>
        <MathBlock>{`y = \\frac{Ae^x}{1 + Ae^x} = \\frac{1}{1 + A^{-1}e^{-x}}`}</MathBlock>
        <p>
          This can be written as <InlineMath>{`y = \\frac{1}{1 + Be^{-x}}`}</InlineMath> where <InlineMath>{`B = A^{-1}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 7: Requiring Substitution">
        <p>Solve <InlineMath>{`y' = \\sqrt{1 - y^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Separate:</p>
        <MathBlock>{`\\frac{dy}{\\sqrt{1-y^2}} = dx`}</MathBlock>
        <p>Integrate (recognizing the arcsine derivative):</p>
        <MathBlock>{`\\arcsin y = x + C`}</MathBlock>
        <p>Solve for <InlineMath>{`y`}</InlineMath>:</p>
        <MathBlock>{`y = \\sin(x + C)`}</MathBlock>
        <p>
          Note: We also have equilibrium solutions <InlineMath>{`y = 1`}</InlineMath> and <InlineMath>{`y = -1`}</InlineMath>,
          where <InlineMath>{`\\sqrt{1-y^2} = 0`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Product Form">
        <p>Solve <InlineMath>{`y' = e^{x+y}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Rewrite using <InlineMath>{`e^{x+y} = e^x \\cdot e^y`}</InlineMath>:
        </p>
        <MathBlock>{`y' = e^x e^y`}</MathBlock>
        <p>Separate:</p>
        <MathBlock>{`e^{-y}\\,dy = e^x\\,dx`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`-e^{-y} = e^x + C`}</MathBlock>
        <MathBlock>{`e^{-y} = -e^x - C = -(e^x + C)`}</MathBlock>
        <p>
          For this to be valid, we need <InlineMath>{`e^x + C < 0`}</InlineMath>, so <InlineMath>{`C < 0`}</InlineMath>.
          Writing <InlineMath>{`C = -A`}</InlineMath> with <InlineMath>{`A > 0`}</InlineMath>:
        </p>
        <MathBlock>{`e^{-y} = A - e^x`}</MathBlock>
        <MathBlock>{`y = -\\ln(A - e^x)`}</MathBlock>
        <p>valid for <InlineMath>{`e^x < A`}</InlineMath>, i.e., <InlineMath>{`x < \\ln A`}</InlineMath>.</p>
      </Callout>

      <h2>Implicit Solutions</h2>

      <Callout type="info" title="Implicit Solutions">
        <p>
          Sometimes we cannot solve explicitly for <InlineMath>{`y`}</InlineMath>. In such cases,
          an implicit equation <InlineMath>{`F(x, y) = C`}</InlineMath> defines the solution.
        </p>
      </Callout>

      <Callout type="example" title="Example 9: Implicit Solution">
        <p>Solve <InlineMath>{`y' = \\frac{x + 1}{y + 1}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Separate:</p>
        <MathBlock>{`(y + 1)\\,dy = (x + 1)\\,dx`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`\\frac{y^2}{2} + y = \\frac{x^2}{2} + x + C`}</MathBlock>
        <p>Or equivalently:</p>
        <MathBlock>{`y^2 + 2y = x^2 + 2x + K`}</MathBlock>
        <p>
          This implicit equation defines <InlineMath>{`y`}</InlineMath> as a function of <InlineMath>{`x`}</InlineMath>.
          We could complete the square to get:
        </p>
        <MathBlock>{`(y + 1)^2 - 1 = (x + 1)^2 - 1 + K`}</MathBlock>
        <MathBlock>{`(y + 1)^2 = (x + 1)^2 + K`}</MathBlock>
        <p>
          which represents hyperbolas (or lines) centered at <InlineMath>{`(-1, -1)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 10: Transcendental Implicit">
        <p>Solve <InlineMath>{`y' = \\frac{e^y}{x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Separate:</p>
        <MathBlock>{`e^{-y}\\,dy = \\frac{dx}{x}`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`-e^{-y} = \\ln|x| + C`}</MathBlock>
        <p>
          This gives the implicit solution. We can write:
        </p>
        <MathBlock>{`e^{-y} = -\\ln|x| - C`}</MathBlock>
        <p>
          For this to have a solution, we need <InlineMath>{`-\\ln|x| - C > 0`}</InlineMath>.
        </p>
      </Callout>

      <h2>Singular Solutions</h2>

      <Callout type="definition" title="Singular Solution">
        <p>
          A <strong>singular solution</strong> is a solution that cannot be obtained from
          the general solution by any choice of the constant. Singular solutions often
          arise from division by zero during separation.
        </p>
      </Callout>

      <Callout type="example" title="Example 11: Finding Singular Solutions">
        <p>Find all solutions of <InlineMath>{`y' = y^{2/3}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Separate (assuming <InlineMath>{`y \\neq 0`}</InlineMath>):</p>
        <MathBlock>{`y^{-2/3}\\,dy = dx`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`3y^{1/3} = x + C`}</MathBlock>
        <MathBlock>{`y^{1/3} = \\frac{x + C}{3}`}</MathBlock>
        <MathBlock>{`y = \\frac{(x + C)^3}{27}`}</MathBlock>
        <p><strong>But wait!</strong> We divided by <InlineMath>{`y^{2/3}`}</InlineMath>, which is zero when <InlineMath>{`y = 0`}</InlineMath>.</p>
        <p>
          Check: Is <InlineMath>{`y = 0`}</InlineMath> a solution? If <InlineMath>{`y = 0`}</InlineMath>, then
          <InlineMath>{`y' = 0`}</InlineMath> and <InlineMath>{`y^{2/3} = 0`}</InlineMath>, so <InlineMath>{`0 = 0`}</InlineMath>. ✓
        </p>
        <p>
          The solution <InlineMath>{`y = 0`}</InlineMath> is a <strong>singular solution</strong>—it
          cannot be obtained from <InlineMath>{`y = (x+C)^3/27`}</InlineMath> for any finite <InlineMath>{`C`}</InlineMath>.
        </p>
      </Callout>

      <h2>Applications</h2>

      <Callout type="example" title="Example 12: Cooling (Newton's Law)">
        <p>
          A cup of coffee at 90°C is placed in a room at 20°C. After 5 minutes,
          it cools to 70°C. Find the temperature at time <InlineMath>{`t`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Newton's law of cooling: <InlineMath>{`T' = -k(T - 20)`}</InlineMath></p>
        <p>Let <InlineMath>{`u = T - 20`}</InlineMath>, so <InlineMath>{`u' = T'`}</InlineMath>:</p>
        <MathBlock>{`u' = -ku`}</MathBlock>
        <p>Solve by separation:</p>
        <MathBlock>{`u = Ce^{-kt}`}</MathBlock>
        <MathBlock>{`T - 20 = Ce^{-kt}`}</MathBlock>
        <MathBlock>{`T = 20 + Ce^{-kt}`}</MathBlock>
        <p>Initial condition <InlineMath>{`T(0) = 90`}</InlineMath>:</p>
        <MathBlock>{`90 = 20 + C \\quad \\Rightarrow \\quad C = 70`}</MathBlock>
        <p>Condition <InlineMath>{`T(5) = 70`}</InlineMath>:</p>
        <MathBlock>{`70 = 20 + 70e^{-5k}`}</MathBlock>
        <MathBlock>{`50 = 70e^{-5k}`}</MathBlock>
        <MathBlock>{`e^{-5k} = \\frac{5}{7}`}</MathBlock>
        <MathBlock>{`k = -\\frac{1}{5}\\ln\\frac{5}{7} = \\frac{1}{5}\\ln\\frac{7}{5}`}</MathBlock>
        <p>Solution:</p>
        <MathBlock>{`T(t) = 20 + 70e^{-kt} = 20 + 70\\left(\\frac{5}{7}\\right)^{t/5}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 13: Velocity with Air Resistance">
        <p>
          A falling object experiences air resistance proportional to velocity:
          <InlineMath>{`v' = g - kv`}</InlineMath>. Find <InlineMath>{`v(t)`}</InlineMath> if <InlineMath>{`v(0) = 0`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Separate:</p>
        <MathBlock>{`\\frac{dv}{g - kv} = dt`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`-\\frac{1}{k}\\ln|g - kv| = t + C`}</MathBlock>
        <p>Initial condition <InlineMath>{`v(0) = 0`}</InlineMath>:</p>
        <MathBlock>{`-\\frac{1}{k}\\ln g = C`}</MathBlock>
        <p>So:</p>
        <MathBlock>{`-\\frac{1}{k}\\ln|g - kv| = t - \\frac{1}{k}\\ln g`}</MathBlock>
        <MathBlock>{`\\ln|g - kv| = -kt + \\ln g = \\ln(ge^{-kt})`}</MathBlock>
        <MathBlock>{`g - kv = ge^{-kt}`}</MathBlock>
        <MathBlock>{`v = \\frac{g}{k}(1 - e^{-kt})`}</MathBlock>
        <p>
          As <InlineMath>{`t \\to \\infty`}</InlineMath>, <InlineMath>{`v \\to g/k`}</InlineMath> (terminal velocity).
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Separable equation:</strong> <InlineMath>{`y' = g(x)h(y)`}</InlineMath>
        </li>
        <li>
          <strong>Method:</strong> Separate to <InlineMath>{`\\frac{dy}{h(y)} = g(x)\\,dx`}</InlineMath>, then integrate
        </li>
        <li>
          <strong>Implicit solutions:</strong> Sometimes <InlineMath>{`F(x,y) = C`}</InlineMath> is the best we can do
        </li>
        <li>
          <strong>Singular solutions:</strong> Arise from division by zero; check separately
        </li>
        <li>
          <strong>Domain restrictions:</strong> Watch for where solutions blow up or become undefined
        </li>
        <li>
          <strong>Applications:</strong> Exponential growth/decay, Newton's cooling, falling objects
        </li>
      </ul>
    </LessonLayout>
  );
}
