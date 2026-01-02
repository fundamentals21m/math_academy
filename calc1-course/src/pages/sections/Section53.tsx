import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <p>
        A first-order linear differential equation has a special structure that allows
        us to find an explicit solution formula. The key technique is the
        <strong> integrating factor method</strong>.
      </p>

      <h2>Standard Form</h2>

      <Callout type="definition" title="First-Order Linear Equation">
        <p>
          A <strong>first-order linear equation</strong> has the form:
        </p>
        <MathBlock>{`y' + P(x)y = Q(x)`}</MathBlock>
        <p>
          where <InlineMath>{`P(x)`}</InlineMath> and <InlineMath>{`Q(x)`}</InlineMath> are given functions.
          The equation is "linear" because <InlineMath>{`y`}</InlineMath> and <InlineMath>{`y'`}</InlineMath>
          appear only to the first power and are not multiplied together.
        </p>
      </Callout>

      <Callout type="info" title="Putting in Standard Form">
        <p>Sometimes the equation is given as <InlineMath>{`a(x)y' + b(x)y = c(x)`}</InlineMath>. Divide by <InlineMath>{`a(x)`}</InlineMath> to get standard form:</p>
        <MathBlock>{`y' + \\frac{b(x)}{a(x)}y = \\frac{c(x)}{a(x)}`}</MathBlock>
        <p>So <InlineMath>{`P(x) = b(x)/a(x)`}</InlineMath> and <InlineMath>{`Q(x) = c(x)/a(x)`}</InlineMath>.</p>
      </Callout>

      <h2>The Integrating Factor Method</h2>

      <p>
        The idea is to multiply both sides of the equation by a carefully chosen
        function <InlineMath>{`\\mu(x)`}</InlineMath>, called an <strong>integrating factor</strong>,
        that makes the left side a perfect derivative.
      </p>

      <Callout type="theorem" title="Integrating Factor">
        <p>
          For the equation <InlineMath>{`y' + P(x)y = Q(x)`}</InlineMath>, the integrating factor is:
        </p>
        <MathBlock>{`\\mu(x) = e^{\\int P(x)\\,dx}`}</MathBlock>
        <p>
          Multiplying through by <InlineMath>{`\\mu(x)`}</InlineMath> transforms the left side into
          <InlineMath>{`(\\mu y)'`}</InlineMath>, the derivative of <InlineMath>{`\\mu y`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Why It Works">
        <p>
          Multiply <InlineMath>{`y' + Py = Q`}</InlineMath> by <InlineMath>{`\\mu = e^{\\int P\\,dx}`}</InlineMath>:
        </p>
        <MathBlock>{`\\mu y' + \\mu P y = \\mu Q`}</MathBlock>
        <p>
          Notice that <InlineMath>{`\\mu' = \\mu \\cdot P`}</InlineMath> (by the chain rule, since <InlineMath>{`\\mu = e^{\\int P\\,dx}`}</InlineMath>).
        </p>
        <p>
          So the left side is <InlineMath>{`\\mu y' + \\mu' y = (\\mu y)'`}</InlineMath> by the product rule!
        </p>
        <MathBlock>{`(\\mu y)' = \\mu Q`}</MathBlock>
        <p>Now integrate both sides to find <InlineMath>{`y`}</InlineMath>.</p>
      </Callout>

      <Callout type="theorem" title="Solution Formula">
        <p>
          The general solution of <InlineMath>{`y' + P(x)y = Q(x)`}</InlineMath> is:
        </p>
        <MathBlock>{`y = \\frac{1}{\\mu(x)}\\left[\\int \\mu(x)Q(x)\\,dx + C\\right]`}</MathBlock>
        <p>where <InlineMath>{`\\mu(x) = e^{\\int P(x)\\,dx}`}</InlineMath>.</p>
      </Callout>

      <h2>Step-by-Step Procedure</h2>

      <Callout type="info" title="Method">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Write the equation in standard form: <InlineMath>{`y' + P(x)y = Q(x)`}</InlineMath></li>
          <li>Identify <InlineMath>{`P(x)`}</InlineMath></li>
          <li>Compute <InlineMath>{`\\mu(x) = e^{\\int P(x)\\,dx}`}</InlineMath></li>
          <li>Multiply both sides by <InlineMath>{`\\mu(x)`}</InlineMath></li>
          <li>Recognize the left side as <InlineMath>{`(\\mu y)'`}</InlineMath></li>
          <li>Integrate: <InlineMath>{`\\mu y = \\int \\mu Q\\,dx + C`}</InlineMath></li>
          <li>Solve for <InlineMath>{`y`}</InlineMath></li>
        </ol>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Constant Coefficient">
        <p>Solve <InlineMath>{`y' + 2y = e^x`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Here <InlineMath>{`P(x) = 2`}</InlineMath> and <InlineMath>{`Q(x) = e^x`}</InlineMath>.
        </p>
        <p>
          Integrating factor: <InlineMath>{`\\mu = e^{\\int 2\\,dx} = e^{2x}`}</InlineMath>.
        </p>
        <p>Multiply through:</p>
        <MathBlock>{`e^{2x}y' + 2e^{2x}y = e^{2x} \\cdot e^x = e^{3x}`}</MathBlock>
        <p>The left side is <InlineMath>{`(e^{2x}y)'`}</InlineMath>:</p>
        <MathBlock>{`(e^{2x}y)' = e^{3x}`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`e^{2x}y = \\int e^{3x}\\,dx = \\frac{1}{3}e^{3x} + C`}</MathBlock>
        <p>Solve for <InlineMath>{`y`}</InlineMath>:</p>
        <MathBlock>{`y = \\frac{1}{3}e^x + Ce^{-2x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Variable Coefficient">
        <p>Solve <InlineMath>{`y' + \\frac{1}{x}y = x^2`}</InlineMath> for <InlineMath>{`x > 0`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Here <InlineMath>{`P(x) = 1/x`}</InlineMath> and <InlineMath>{`Q(x) = x^2`}</InlineMath>.
        </p>
        <p>
          Integrating factor: <InlineMath>{`\\mu = e^{\\int \\frac{1}{x}\\,dx} = e^{\\ln x} = x`}</InlineMath>.
        </p>
        <p>Multiply through:</p>
        <MathBlock>{`xy' + y = x^3`}</MathBlock>
        <p>The left side is <InlineMath>{`(xy)'`}</InlineMath>:</p>
        <MathBlock>{`(xy)' = x^3`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`xy = \\int x^3\\,dx = \\frac{x^4}{4} + C`}</MathBlock>
        <p>Solve for <InlineMath>{`y`}</InlineMath>:</p>
        <MathBlock>{`y = \\frac{x^3}{4} + \\frac{C}{x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: With Initial Condition">
        <p>Solve <InlineMath>{`y' - 3y = e^{2x}`}</InlineMath>, <InlineMath>{`y(0) = 1`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Here <InlineMath>{`P(x) = -3`}</InlineMath>, <InlineMath>{`Q(x) = e^{2x}`}</InlineMath>.
        </p>
        <p>
          Integrating factor: <InlineMath>{`\\mu = e^{-3x}`}</InlineMath>.
        </p>
        <p>Multiply:</p>
        <MathBlock>{`e^{-3x}y' - 3e^{-3x}y = e^{-3x} \\cdot e^{2x} = e^{-x}`}</MathBlock>
        <MathBlock>{`(e^{-3x}y)' = e^{-x}`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`e^{-3x}y = -e^{-x} + C`}</MathBlock>
        <MathBlock>{`y = -e^{2x} + Ce^{3x}`}</MathBlock>
        <p>Apply initial condition <InlineMath>{`y(0) = 1`}</InlineMath>:</p>
        <MathBlock>{`1 = -1 + C \\quad \\Rightarrow \\quad C = 2`}</MathBlock>
        <p>Solution: <InlineMath>{`y = -e^{2x} + 2e^{3x}`}</InlineMath></p>
      </Callout>

      <Callout type="example" title="Example 4: Trigonometric Coefficients">
        <p>Solve <InlineMath>{`y' + (\\tan x)y = \\cos x`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          <InlineMath>{`P(x) = \\tan x`}</InlineMath>, so:
        </p>
        <MathBlock>{`\\int \\tan x\\,dx = \\int \\frac{\\sin x}{\\cos x}\\,dx = -\\ln|\\cos x| = \\ln|\\sec x|`}</MathBlock>
        <p>
          Integrating factor: <InlineMath>{`\\mu = e^{\\ln|\\sec x|} = \\sec x`}</InlineMath>.
        </p>
        <p>Multiply:</p>
        <MathBlock>{`(\\sec x)y' + (\\sec x \\tan x)y = \\sec x \\cos x = 1`}</MathBlock>
        <MathBlock>{`(\\sec x \\cdot y)' = 1`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`\\sec x \\cdot y = x + C`}</MathBlock>
        <MathBlock>{`y = (x + C)\\cos x`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Putting in Standard Form">
        <p>Solve <InlineMath>{`xy' - 2y = x^3`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Divide by <InlineMath>{`x`}</InlineMath> to get standard form:</p>
        <MathBlock>{`y' - \\frac{2}{x}y = x^2`}</MathBlock>
        <p>
          <InlineMath>{`P(x) = -2/x`}</InlineMath>, so <InlineMath>{`\\int P\\,dx = -2\\ln|x| = \\ln x^{-2}`}</InlineMath>.
        </p>
        <p>
          Integrating factor: <InlineMath>{`\\mu = e^{\\ln x^{-2}} = x^{-2} = \\frac{1}{x^2}`}</InlineMath>.
        </p>
        <p>Multiply:</p>
        <MathBlock>{`\\frac{1}{x^2}y' - \\frac{2}{x^3}y = 1`}</MathBlock>
        <MathBlock>{`\\left(\\frac{y}{x^2}\\right)' = 1`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`\\frac{y}{x^2} = x + C`}</MathBlock>
        <MathBlock>{`y = x^3 + Cx^2`}</MathBlock>
      </Callout>

      <h2>Special Case: Homogeneous Equation</h2>

      <Callout type="definition" title="Homogeneous First-Order Linear">
        <p>
          When <InlineMath>{`Q(x) = 0`}</InlineMath>, the equation <InlineMath>{`y' + P(x)y = 0`}</InlineMath>
          is called <strong>homogeneous</strong>. Its solution is:
        </p>
        <MathBlock>{`y = Ce^{-\\int P(x)\\,dx}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Homogeneous Case">
        <p>Solve <InlineMath>{`y' + 3y = 0`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`y = Ce^{-\\int 3\\,dx} = Ce^{-3x}`}</MathBlock>
        <p>
          This can also be solved by separation of variables (covered later).
        </p>
      </Callout>

      <h2>Structure of Solutions</h2>

      <Callout type="theorem" title="General Solution Structure">
        <p>
          The general solution of <InlineMath>{`y' + P(x)y = Q(x)`}</InlineMath> has the form:
        </p>
        <MathBlock>{`y = y_h + y_p`}</MathBlock>
        <p>where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`y_h = Ce^{-\\int P\\,dx}`}</InlineMath> is the <strong>homogeneous solution</strong> (solution when <InlineMath>{`Q = 0`}</InlineMath>)</li>
          <li><InlineMath>{`y_p`}</InlineMath> is a <strong>particular solution</strong> (any one solution of the full equation)</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 7: Identifying Components">
        <p>
          For Example 1, <InlineMath>{`y' + 2y = e^x`}</InlineMath>, the solution was <InlineMath>{`y = \\frac{1}{3}e^x + Ce^{-2x}`}</InlineMath>.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Homogeneous solution: <InlineMath>{`y_h = Ce^{-2x}`}</InlineMath></li>
          <li>Particular solution: <InlineMath>{`y_p = \\frac{1}{3}e^x`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Bernoulli Equations</h2>

      <Callout type="definition" title="Bernoulli Equation">
        <p>
          A <strong>Bernoulli equation</strong> has the form:
        </p>
        <MathBlock>{`y' + P(x)y = Q(x)y^n`}</MathBlock>
        <p>
          where <InlineMath>{`n \\neq 0, 1`}</InlineMath>. This is nonlinear, but can be reduced
          to a linear equation by the substitution <InlineMath>{`v = y^{1-n}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Bernoulli Equation">
        <p>Solve <InlineMath>{`y' + y = xy^2`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is Bernoulli with <InlineMath>{`n = 2`}</InlineMath>. Let <InlineMath>{`v = y^{-1}`}</InlineMath>,
          so <InlineMath>{`y = v^{-1}`}</InlineMath> and <InlineMath>{`y' = -v^{-2}v'`}</InlineMath>.
        </p>
        <p>Substitute:</p>
        <MathBlock>{`-v^{-2}v' + v^{-1} = x \\cdot v^{-2}`}</MathBlock>
        <p>Multiply by <InlineMath>{`-v^2`}</InlineMath>:</p>
        <MathBlock>{`v' - v = -x`}</MathBlock>
        <p>
          This is linear! Integrating factor: <InlineMath>{`\\mu = e^{-x}`}</InlineMath>.
        </p>
        <MathBlock>{`(e^{-x}v)' = -xe^{-x}`}</MathBlock>
        <p>Integrate by parts:</p>
        <MathBlock>{`e^{-x}v = -\\int xe^{-x}\\,dx = xe^{-x} + e^{-x} + C`}</MathBlock>
        <MathBlock>{`v = x + 1 + Ce^x`}</MathBlock>
        <p>Since <InlineMath>{`y = 1/v`}</InlineMath>:</p>
        <MathBlock>{`y = \\frac{1}{x + 1 + Ce^x}`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Standard form:</strong> <InlineMath>{`y' + P(x)y = Q(x)`}</InlineMath>
        </li>
        <li>
          <strong>Integrating factor:</strong> <InlineMath>{`\\mu(x) = e^{\\int P(x)\\,dx}`}</InlineMath>
        </li>
        <li>
          <strong>Method:</strong> Multiply by <InlineMath>{`\\mu`}</InlineMath>, recognize <InlineMath>{`(\\mu y)'`}</InlineMath>, integrate
        </li>
        <li>
          <strong>Solution formula:</strong> <InlineMath>{`y = \\frac{1}{\\mu}\\left[\\int \\mu Q\\,dx + C\\right]`}</InlineMath>
        </li>
        <li>
          <strong>Homogeneous case:</strong> When <InlineMath>{`Q = 0`}</InlineMath>, <InlineMath>{`y = Ce^{-\\int P\\,dx}`}</InlineMath>
        </li>
        <li>
          <strong>Structure:</strong> General solution = homogeneous + particular
        </li>
        <li>
          <strong>Bernoulli:</strong> <InlineMath>{`y' + Py = Qy^n`}</InlineMath> reduces to linear via <InlineMath>{`v = y^{1-n}`}</InlineMath>
        </li>
      </ul>
    </LessonLayout>
  );
}
