import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section86() {
  return (
    <LessonLayout sectionId={86}>
      <h1>Arc Length</h1>

      <p>
        The <strong>arc length</strong> of a curve is the distance measured along the curve itself.
        This fundamental geometric quantity connects to speed: the arc length traveled equals
        the integral of speed over time.
      </p>

      <h2>Arc Length of Parametric Curves</h2>

      <Callout type="definition" title="Arc Length">
        <p>
          For a smooth curve <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> on <InlineMath>{`[a, b]`}</InlineMath>,
          the <strong>arc length</strong> is:
        </p>
        <MathBlock>{`L = \\int_a^b \\|\\mathbf{r}'(t)\\| \\, dt`}</MathBlock>
        <p>
          Since <InlineMath>{`\\|\\mathbf{r}'(t)\\|`}</InlineMath> is the speed, arc length is the integral
          of speed over time—total distance traveled.
        </p>
      </Callout>

      <Callout type="theorem" title="Arc Length in Components">
        <p>In <InlineMath>{`\\mathbb{R}^3`}</InlineMath> with <InlineMath>{`\\mathbf{r}(t) = (x(t), y(t), z(t))`}</InlineMath>:</p>
        <MathBlock>{`L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2 + \\left(\\frac{dz}{dt}\\right)^2} \\, dt`}</MathBlock>
        <p>In <InlineMath>{`\\mathbb{R}^2`}</InlineMath>:</p>
        <MathBlock>{`L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2} \\, dt`}</MathBlock>
      </Callout>

      <Callout type="example" title="Arc Length of a Helix">
        <p>
          Find the arc length of one turn of the helix <InlineMath>{`\\mathbf{r}(t) = (\\cos t, \\sin t, t)`}</InlineMath> for <InlineMath>{`t \\in [0, 2\\pi]`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-\\sin t, \\cos t, 1)`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{r}'(t)\\| = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt{2}`}</MathBlock>
        <MathBlock>{`L = \\int_0^{2\\pi} \\sqrt{2} \\, dt = 2\\pi\\sqrt{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Arc Length of a Circle">
        <p>
          Find the circumference of a circle of radius <InlineMath>{`R`}</InlineMath> using <InlineMath>{`\\mathbf{r}(t) = (R\\cos t, R\\sin t)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-R\\sin t, R\\cos t)`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{r}'(t)\\| = R\\sqrt{\\sin^2 t + \\cos^2 t} = R`}</MathBlock>
        <MathBlock>{`L = \\int_0^{2\\pi} R \\, dt = 2\\pi R`}</MathBlock>
        <p>As expected!</p>
      </Callout>

      <h2>Arc Length for Graphs</h2>

      <Callout type="theorem" title="Arc Length of y = f(x)">
        <p>
          For the graph of <InlineMath>{`y = f(x)`}</InlineMath> from <InlineMath>{`x = a`}</InlineMath> to <InlineMath>{`x = b`}</InlineMath>:
        </p>
        <MathBlock>{`L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2} \\, dx = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx`}</MathBlock>
      </Callout>

      <Callout type="info" title="Derivation">
        <p>
          Parametrize the graph as <InlineMath>{`\\mathbf{r}(x) = (x, f(x))`}</InlineMath>. Then <InlineMath>{`\\mathbf{r}'(x) = (1, f'(x))`}</InlineMath> and:
        </p>
        <MathBlock>{`\\|\\mathbf{r}'(x)\\| = \\sqrt{1 + [f'(x)]^2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Arc Length of a Parabola">
        <p>
          Find the arc length of <InlineMath>{`y = x^2`}</InlineMath> from <InlineMath>{`x = 0`}</InlineMath> to <InlineMath>{`x = 1`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`f'(x) = 2x`}</MathBlock>
        <MathBlock>{`L = \\int_0^1 \\sqrt{1 + 4x^2} \\, dx`}</MathBlock>
        <p>
          Using the substitution <InlineMath>{`x = \\frac{1}{2}\\tan\\theta`}</InlineMath> (or a table):
        </p>
        <MathBlock>{`L = \\frac{1}{2}\\left[x\\sqrt{1+4x^2} + \\frac{1}{2}\\ln\\left(2x + \\sqrt{1+4x^2}\\right)\\right]_0^1`}</MathBlock>
        <MathBlock>{`= \\frac{1}{2}\\left[\\sqrt{5} + \\frac{1}{2}\\ln(2 + \\sqrt{5})\\right] \\approx 1.479`}</MathBlock>
      </Callout>

      <Callout type="example" title="Arc Length of y = ln(cos x)">
        <p>
          Find the arc length of <InlineMath>{`y = \\ln(\\cos x)`}</InlineMath> from <InlineMath>{`x = 0`}</InlineMath> to <InlineMath>{`x = \\pi/4`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`f'(x) = \\frac{-\\sin x}{\\cos x} = -\\tan x`}</MathBlock>
        <MathBlock>{`1 + [f'(x)]^2 = 1 + \\tan^2 x = \\sec^2 x`}</MathBlock>
        <MathBlock>{`L = \\int_0^{\\pi/4} \\sqrt{\\sec^2 x} \\, dx = \\int_0^{\\pi/4} \\sec x \\, dx`}</MathBlock>
        <MathBlock>{`= [\\ln|\\sec x + \\tan x|]_0^{\\pi/4} = \\ln(\\sqrt{2} + 1) - \\ln(1)`}</MathBlock>
        <MathBlock>{`= \\ln(\\sqrt{2} + 1) \\approx 0.881`}</MathBlock>
      </Callout>

      <h2>The Arc Length Function</h2>

      <Callout type="definition" title="Arc Length Function">
        <p>
          For a curve <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> starting at <InlineMath>{`t = a`}</InlineMath>,
          the <strong>arc length function</strong> is:
        </p>
        <MathBlock>{`s(t) = \\int_a^t \\|\\mathbf{r}'(u)\\| \\, du`}</MathBlock>
        <p>
          This measures the arc length from <InlineMath>{`\\mathbf{r}(a)`}</InlineMath> to <InlineMath>{`\\mathbf{r}(t)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Derivative of Arc Length">
        <p>By the Fundamental Theorem of Calculus:</p>
        <MathBlock>{`\\frac{ds}{dt} = \\|\\mathbf{r}'(t)\\| = \\text{speed}`}</MathBlock>
        <p>
          The rate of change of arc length with respect to time is the speed.
        </p>
      </Callout>

      <Callout type="example" title="Computing the Arc Length Function">
        <p>
          For <InlineMath>{`\\mathbf{r}(t) = (3\\cos t, 3\\sin t)`}</InlineMath> with <InlineMath>{`t \\geq 0`}</InlineMath>,
          find <InlineMath>{`s(t)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\|\\mathbf{r}'(t)\\| = \\|(-3\\sin t, 3\\cos t)\\| = 3`}</MathBlock>
        <MathBlock>{`s(t) = \\int_0^t 3 \\, du = 3t`}</MathBlock>
        <p>
          Arc length equals <InlineMath>{`3t`}</InlineMath>, proportional to angle (as expected for a circle of radius 3).
        </p>
      </Callout>

      <h2>Arc Length Parametrization</h2>

      <Callout type="definition" title="Arc Length Parameter">
        <p>
          A curve is <strong>parametrized by arc length</strong> if <InlineMath>{`\\|\\mathbf{r}'(s)\\| = 1`}</InlineMath> for all <InlineMath>{`s`}</InlineMath>.
          In this case, <InlineMath>{`s`}</InlineMath> measures distance along the curve.
        </p>
      </Callout>

      <Callout type="theorem" title="Reparametrizing by Arc Length">
        <p>
          Given <InlineMath>{`\\mathbf{r}(t)`}</InlineMath>, to reparametrize by arc length:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Compute <InlineMath>{`s = s(t) = \\int_a^t \\|\\mathbf{r}'(u)\\| \\, du`}</InlineMath></li>
          <li>Solve for <InlineMath>{`t`}</InlineMath> in terms of <InlineMath>{`s`}</InlineMath>: <InlineMath>{`t = t(s)`}</InlineMath></li>
          <li>Substitute: <InlineMath>{`\\tilde{\\mathbf{r}}(s) = \\mathbf{r}(t(s))`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="example" title="Arc Length Parametrization of a Helix">
        <p>
          Find the arc length parametrization of <InlineMath>{`\\mathbf{r}(t) = (\\cos t, \\sin t, t)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> We found <InlineMath>{`\\|\\mathbf{r}'(t)\\| = \\sqrt{2}`}</InlineMath>, so:</p>
        <MathBlock>{`s = \\int_0^t \\sqrt{2} \\, du = \\sqrt{2}t`}</MathBlock>
        <p>Solving for <InlineMath>{`t`}</InlineMath>: <InlineMath>{`t = s/\\sqrt{2}`}</InlineMath></p>
        <p>Arc length parametrization:</p>
        <MathBlock>{`\\tilde{\\mathbf{r}}(s) = \\left(\\cos\\frac{s}{\\sqrt{2}}, \\sin\\frac{s}{\\sqrt{2}}, \\frac{s}{\\sqrt{2}}\\right)`}</MathBlock>
        <p>Verify: <InlineMath>{`\\|\\tilde{\\mathbf{r}}'(s)\\| = \\sqrt{\\frac{1}{2} + \\frac{1}{2} + \\frac{1}{2}} = \\ldots`}</InlineMath></p>
        <MathBlock>{`\\tilde{\\mathbf{r}}'(s) = \\left(-\\frac{1}{\\sqrt{2}}\\sin\\frac{s}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\cos\\frac{s}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)`}</MathBlock>
        <MathBlock>{`\\|\\tilde{\\mathbf{r}}'(s)\\| = \\sqrt{\\frac{1}{2}\\sin^2 + \\frac{1}{2}\\cos^2 + \\frac{1}{2}} = \\sqrt{\\frac{1}{2} + \\frac{1}{2}} = 1 \\, \\checkmark`}</MathBlock>
      </Callout>

      <h2>Differential of Arc Length</h2>

      <Callout type="theorem" title="Arc Length Differential">
        <p>The differential of arc length is:</p>
        <MathBlock>{`ds = \\|\\mathbf{r}'(t)\\| \\, dt`}</MathBlock>
        <p>In component form:</p>
        <MathBlock>{`ds = \\sqrt{dx^2 + dy^2 + dz^2}`}</MathBlock>
        <p>For plane curves <InlineMath>{`y = f(x)`}</InlineMath>:</p>
        <MathBlock>{`ds = \\sqrt{1 + (f')^2} \\, dx`}</MathBlock>
      </Callout>

      <h2>Arc Length in Polar Coordinates</h2>

      <Callout type="theorem" title="Arc Length in Polar Coordinates">
        <p>
          For a curve <InlineMath>{`r = f(\\theta)`}</InlineMath> from <InlineMath>{`\\theta = \\alpha`}</InlineMath> to <InlineMath>{`\\theta = \\beta`}</InlineMath>:
        </p>
        <MathBlock>{`L = \\int_\\alpha^\\beta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} \\, d\\theta`}</MathBlock>
      </Callout>

      <Callout type="info" title="Derivation">
        <p>
          Using <InlineMath>{`x = r\\cos\\theta`}</InlineMath> and <InlineMath>{`y = r\\sin\\theta`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{dx}{d\\theta} = \\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta`}</MathBlock>
        <MathBlock>{`\\frac{dy}{d\\theta} = \\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta`}</MathBlock>
        <p>After simplification:</p>
        <MathBlock>{`\\left(\\frac{dx}{d\\theta}\\right)^2 + \\left(\\frac{dy}{d\\theta}\\right)^2 = r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2`}</MathBlock>
      </Callout>

      <Callout type="example" title="Arc Length of a Cardioid">
        <p>
          Find the arc length of the cardioid <InlineMath>{`r = 1 + \\cos\\theta`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{dr}{d\\theta} = -\\sin\\theta`}</MathBlock>
        <MathBlock>{`r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2 = (1+\\cos\\theta)^2 + \\sin^2\\theta`}</MathBlock>
        <MathBlock>{`= 1 + 2\\cos\\theta + \\cos^2\\theta + \\sin^2\\theta = 2 + 2\\cos\\theta = 2(1+\\cos\\theta)`}</MathBlock>
        <p>Using the identity <InlineMath>{`1 + \\cos\\theta = 2\\cos^2(\\theta/2)`}</InlineMath>:</p>
        <MathBlock>{`\\sqrt{2(1+\\cos\\theta)} = \\sqrt{4\\cos^2(\\theta/2)} = 2|\\cos(\\theta/2)|`}</MathBlock>
        <MathBlock>{`L = \\int_0^{2\\pi} 2|\\cos(\\theta/2)| \\, d\\theta = 4\\int_0^{\\pi} \\cos(\\theta/2) \\, d\\theta`}</MathBlock>
        <MathBlock>{`= 4 \\cdot 2[\\sin(\\theta/2)]_0^{\\pi} = 8(1 - 0) = 8`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Parametric curve:</strong></p>
        <MathBlock>{`L = \\int_a^b \\|\\mathbf{r}'(t)\\| \\, dt = \\int_a^b \\sqrt{x'^2 + y'^2 + z'^2} \\, dt`}</MathBlock>

        <p><strong>Graph y = f(x):</strong></p>
        <MathBlock>{`L = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx`}</MathBlock>

        <p><strong>Polar curve r = f(θ):</strong></p>
        <MathBlock>{`L = \\int_\\alpha^\\beta \\sqrt{r^2 + (r')^2} \\, d\\theta`}</MathBlock>

        <p><strong>Arc length function:</strong> <InlineMath>{`s(t) = \\int_a^t \\|\\mathbf{r}'(u)\\| \\, du`}</InlineMath></p>

        <p><strong>Speed:</strong> <InlineMath>{`\\frac{ds}{dt} = \\|\\mathbf{r}'(t)\\|`}</InlineMath></p>

        <p><strong>Arc length parametrization:</strong> <InlineMath>{`\\|\\mathbf{r}'(s)\\| = 1`}</InlineMath></p>
      </Callout>
    </LessonLayout>
  );
}
