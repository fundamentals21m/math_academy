import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          where <MathInline>{`P(x)`}</MathInline> and <MathInline>{`Q(x)`}</MathInline> are given functions.
          The equation is "linear" because <MathInline>{`y`}</MathInline> and <MathInline>{`y'`}</MathInline>
          appear only to the first power and are not multiplied together.
        </p>
      </Callout>

      <Callout type="info" title="Putting in Standard Form">
        <p>Sometimes the equation is given as <MathInline>{`a(x)y' + b(x)y = c(x)`}</MathInline>. Divide by <MathInline>{`a(x)`}</MathInline> to get standard form:</p>
        <MathBlock>{`y' + \\frac{b(x)}{a(x)}y = \\frac{c(x)}{a(x)}`}</MathBlock>
        <p>So <MathInline>{`P(x) = b(x)/a(x)`}</MathInline> and <MathInline>{`Q(x) = c(x)/a(x)`}</MathInline>.</p>
      </Callout>

      <h2>The Integrating Factor Method</h2>

      <p>
        The idea is to multiply both sides of the equation by a carefully chosen
        function <MathInline>{`\\mu(x)`}</MathInline>, called an <strong>integrating factor</strong>,
        that makes the left side a perfect derivative.
      </p>

      <Callout type="theorem" title="Integrating Factor">
        <p>
          For the equation <MathInline>{`y' + P(x)y = Q(x)`}</MathInline>, the integrating factor is:
        </p>
        <MathBlock>{`\\mu(x) = e^{\\int P(x)\\,dx}`}</MathBlock>
        <p>
          Multiplying through by <MathInline>{`\\mu(x)`}</MathInline> transforms the left side into
          <MathInline>{`(\\mu y)'`}</MathInline>, the derivative of <MathInline>{`\\mu y`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Why It Works">
        <p>
          Multiply <MathInline>{`y' + Py = Q`}</MathInline> by <MathInline>{`\\mu = e^{\\int P\\,dx}`}</MathInline>:
        </p>
        <MathBlock>{`\\mu y' + \\mu P y = \\mu Q`}</MathBlock>
        <p>
          Notice that <MathInline>{`\\mu' = \\mu \\cdot P`}</MathInline> (by the chain rule, since <MathInline>{`\\mu = e^{\\int P\\,dx}`}</MathInline>).
        </p>
        <p>
          So the left side is <MathInline>{`\\mu y' + \\mu' y = (\\mu y)'`}</MathInline> by the product rule!
        </p>
        <MathBlock>{`(\\mu y)' = \\mu Q`}</MathBlock>
        <p>Now integrate both sides to find <MathInline>{`y`}</MathInline>.</p>
      </Callout>

      <Callout type="theorem" title="Solution Formula">
        <p>
          The general solution of <MathInline>{`y' + P(x)y = Q(x)`}</MathInline> is:
        </p>
        <MathBlock>{`y = \\frac{1}{\\mu(x)}\\left[\\int \\mu(x)Q(x)\\,dx + C\\right]`}</MathBlock>
        <p>where <MathInline>{`\\mu(x) = e^{\\int P(x)\\,dx}`}</MathInline>.</p>
      </Callout>

      <h2>Step-by-Step Procedure</h2>

      <Callout type="info" title="Method">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Write the equation in standard form: <MathInline>{`y' + P(x)y = Q(x)`}</MathInline></li>
          <li>Identify <MathInline>{`P(x)`}</MathInline></li>
          <li>Compute <MathInline>{`\\mu(x) = e^{\\int P(x)\\,dx}`}</MathInline></li>
          <li>Multiply both sides by <MathInline>{`\\mu(x)`}</MathInline></li>
          <li>Recognize the left side as <MathInline>{`(\\mu y)'`}</MathInline></li>
          <li>Integrate: <MathInline>{`\\mu y = \\int \\mu Q\\,dx + C`}</MathInline></li>
          <li>Solve for <MathInline>{`y`}</MathInline></li>
        </ol>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Constant Coefficient">
        <p>Solve <MathInline>{`y' + 2y = e^x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Here <MathInline>{`P(x) = 2`}</MathInline> and <MathInline>{`Q(x) = e^x`}</MathInline>.
        </p>
        <p>
          Integrating factor: <MathInline>{`\\mu = e^{\\int 2\\,dx} = e^{2x}`}</MathInline>.
        </p>
        <p>Multiply through:</p>
        <MathBlock>{`e^{2x}y' + 2e^{2x}y = e^{2x} \\cdot e^x = e^{3x}`}</MathBlock>
        <p>The left side is <MathInline>{`(e^{2x}y)'`}</MathInline>:</p>
        <MathBlock>{`(e^{2x}y)' = e^{3x}`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`e^{2x}y = \\int e^{3x}\\,dx = \\frac{1}{3}e^{3x} + C`}</MathBlock>
        <p>Solve for <MathInline>{`y`}</MathInline>:</p>
        <MathBlock>{`y = \\frac{1}{3}e^x + Ce^{-2x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Variable Coefficient">
        <p>Solve <MathInline>{`y' + \\frac{1}{x}y = x^2`}</MathInline> for <MathInline>{`x > 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Here <MathInline>{`P(x) = 1/x`}</MathInline> and <MathInline>{`Q(x) = x^2`}</MathInline>.
        </p>
        <p>
          Integrating factor: <MathInline>{`\\mu = e^{\\int \\frac{1}{x}\\,dx} = e^{\\ln x} = x`}</MathInline>.
        </p>
        <p>Multiply through:</p>
        <MathBlock>{`xy' + y = x^3`}</MathBlock>
        <p>The left side is <MathInline>{`(xy)'`}</MathInline>:</p>
        <MathBlock>{`(xy)' = x^3`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`xy = \\int x^3\\,dx = \\frac{x^4}{4} + C`}</MathBlock>
        <p>Solve for <MathInline>{`y`}</MathInline>:</p>
        <MathBlock>{`y = \\frac{x^3}{4} + \\frac{C}{x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: With Initial Condition">
        <p>Solve <MathInline>{`y' - 3y = e^{2x}`}</MathInline>, <MathInline>{`y(0) = 1`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Here <MathInline>{`P(x) = -3`}</MathInline>, <MathInline>{`Q(x) = e^{2x}`}</MathInline>.
        </p>
        <p>
          Integrating factor: <MathInline>{`\\mu = e^{-3x}`}</MathInline>.
        </p>
        <p>Multiply:</p>
        <MathBlock>{`e^{-3x}y' - 3e^{-3x}y = e^{-3x} \\cdot e^{2x} = e^{-x}`}</MathBlock>
        <MathBlock>{`(e^{-3x}y)' = e^{-x}`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`e^{-3x}y = -e^{-x} + C`}</MathBlock>
        <MathBlock>{`y = -e^{2x} + Ce^{3x}`}</MathBlock>
        <p>Apply initial condition <MathInline>{`y(0) = 1`}</MathInline>:</p>
        <MathBlock>{`1 = -1 + C \\quad \\Rightarrow \\quad C = 2`}</MathBlock>
        <p>Solution: <MathInline>{`y = -e^{2x} + 2e^{3x}`}</MathInline></p>
      </Callout>

      <Callout type="example" title="Example 4: Trigonometric Coefficients">
        <p>Solve <MathInline>{`y' + (\\tan x)y = \\cos x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          <MathInline>{`P(x) = \\tan x`}</MathInline>, so:
        </p>
        <MathBlock>{`\\int \\tan x\\,dx = \\int \\frac{\\sin x}{\\cos x}\\,dx = -\\ln|\\cos x| = \\ln|\\sec x|`}</MathBlock>
        <p>
          Integrating factor: <MathInline>{`\\mu = e^{\\ln|\\sec x|} = \\sec x`}</MathInline>.
        </p>
        <p>Multiply:</p>
        <MathBlock>{`(\\sec x)y' + (\\sec x \\tan x)y = \\sec x \\cos x = 1`}</MathBlock>
        <MathBlock>{`(\\sec x \\cdot y)' = 1`}</MathBlock>
        <p>Integrate:</p>
        <MathBlock>{`\\sec x \\cdot y = x + C`}</MathBlock>
        <MathBlock>{`y = (x + C)\\cos x`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: Putting in Standard Form">
        <p>Solve <MathInline>{`xy' - 2y = x^3`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Divide by <MathInline>{`x`}</MathInline> to get standard form:</p>
        <MathBlock>{`y' - \\frac{2}{x}y = x^2`}</MathBlock>
        <p>
          <MathInline>{`P(x) = -2/x`}</MathInline>, so <MathInline>{`\\int P\\,dx = -2\\ln|x| = \\ln x^{-2}`}</MathInline>.
        </p>
        <p>
          Integrating factor: <MathInline>{`\\mu = e^{\\ln x^{-2}} = x^{-2} = \\frac{1}{x^2}`}</MathInline>.
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
          When <MathInline>{`Q(x) = 0`}</MathInline>, the equation <MathInline>{`y' + P(x)y = 0`}</MathInline>
          is called <strong>homogeneous</strong>. Its solution is:
        </p>
        <MathBlock>{`y = Ce^{-\\int P(x)\\,dx}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Homogeneous Case">
        <p>Solve <MathInline>{`y' + 3y = 0`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`y = Ce^{-\\int 3\\,dx} = Ce^{-3x}`}</MathBlock>
        <p>
          This can also be solved by separation of variables (covered later).
        </p>
      </Callout>

      <h2>Structure of Solutions</h2>

      <Callout type="theorem" title="General Solution Structure">
        <p>
          The general solution of <MathInline>{`y' + P(x)y = Q(x)`}</MathInline> has the form:
        </p>
        <MathBlock>{`y = y_h + y_p`}</MathBlock>
        <p>where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`y_h = Ce^{-\\int P\\,dx}`}</MathInline> is the <strong>homogeneous solution</strong> (solution when <MathInline>{`Q = 0`}</MathInline>)</li>
          <li><MathInline>{`y_p`}</MathInline> is a <strong>particular solution</strong> (any one solution of the full equation)</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 7: Identifying Components">
        <p>
          For Example 1, <MathInline>{`y' + 2y = e^x`}</MathInline>, the solution was <MathInline>{`y = \\frac{1}{3}e^x + Ce^{-2x}`}</MathInline>.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Homogeneous solution: <MathInline>{`y_h = Ce^{-2x}`}</MathInline></li>
          <li>Particular solution: <MathInline>{`y_p = \\frac{1}{3}e^x`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Bernoulli Equations</h2>

      <Callout type="definition" title="Bernoulli Equation">
        <p>
          A <strong>Bernoulli equation</strong> has the form:
        </p>
        <MathBlock>{`y' + P(x)y = Q(x)y^n`}</MathBlock>
        <p>
          where <MathInline>{`n \\neq 0, 1`}</MathInline>. This is nonlinear, but can be reduced
          to a linear equation by the substitution <MathInline>{`v = y^{1-n}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Bernoulli Equation">
        <p>Solve <MathInline>{`y' + y = xy^2`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is Bernoulli with <MathInline>{`n = 2`}</MathInline>. Let <MathInline>{`v = y^{-1}`}</MathInline>,
          so <MathInline>{`y = v^{-1}`}</MathInline> and <MathInline>{`y' = -v^{-2}v'`}</MathInline>.
        </p>
        <p>Substitute:</p>
        <MathBlock>{`-v^{-2}v' + v^{-1} = x \\cdot v^{-2}`}</MathBlock>
        <p>Multiply by <MathInline>{`-v^2`}</MathInline>:</p>
        <MathBlock>{`v' - v = -x`}</MathBlock>
        <p>
          This is linear! Integrating factor: <MathInline>{`\\mu = e^{-x}`}</MathInline>.
        </p>
        <MathBlock>{`(e^{-x}v)' = -xe^{-x}`}</MathBlock>
        <p>Integrate by parts:</p>
        <MathBlock>{`e^{-x}v = -\\int xe^{-x}\\,dx = xe^{-x} + e^{-x} + C`}</MathBlock>
        <MathBlock>{`v = x + 1 + Ce^x`}</MathBlock>
        <p>Since <MathInline>{`y = 1/v`}</MathInline>:</p>
        <MathBlock>{`y = \\frac{1}{x + 1 + Ce^x}`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Standard form:</strong> <MathInline>{`y' + P(x)y = Q(x)`}</MathInline>
        </li>
        <li>
          <strong>Integrating factor:</strong> <MathInline>{`\\mu(x) = e^{\\int P(x)\\,dx}`}</MathInline>
        </li>
        <li>
          <strong>Method:</strong> Multiply by <MathInline>{`\\mu`}</MathInline>, recognize <MathInline>{`(\\mu y)'`}</MathInline>, integrate
        </li>
        <li>
          <strong>Solution formula:</strong> <MathInline>{`y = \\frac{1}{\\mu}\\left[\\int \\mu Q\\,dx + C\\right]`}</MathInline>
        </li>
        <li>
          <strong>Homogeneous case:</strong> When <MathInline>{`Q = 0`}</MathInline>, <MathInline>{`y = Ce^{-\\int P\\,dx}`}</MathInline>
        </li>
        <li>
          <strong>Structure:</strong> General solution = homogeneous + particular
        </li>
        <li>
          <strong>Bernoulli:</strong> <MathInline>{`y' + Py = Qy^n`}</MathInline> reduces to linear via <MathInline>{`v = y^{1-n}`}</MathInline>
        </li>
      </ul>
    </LessonLayout>
  );
}
