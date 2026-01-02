import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section83() {
  return (
    <LessonLayout sectionId={83}>
      <h1>Vector Functions</h1>

      <p>
        A <strong>vector function</strong> (or <strong>vector-valued function</strong>) assigns a
        vector to each value of the parameter. These functions describe curves in space and are
        fundamental to understanding motion, where position, velocity, and acceleration are all vectors.
      </p>

      <h2>Definition</h2>

      <Callout type="definition" title="Vector Function">
        <p>
          A <strong>vector function</strong> <InlineMath>{`\\mathbf{r}: \\mathbb{R} \\to \\mathbb{R}^n`}</InlineMath> assigns
          to each real number <InlineMath>{`t`}</InlineMath> in its domain a vector <InlineMath>{`\\mathbf{r}(t)`}</InlineMath>.
        </p>
        <p>In <InlineMath>{`\\mathbb{R}^3`}</InlineMath>:</p>
        <MathBlock>{`\\mathbf{r}(t) = (x(t), y(t), z(t)) = x(t)\\mathbf{i} + y(t)\\mathbf{j} + z(t)\\mathbf{k}`}</MathBlock>
        <p>
          The functions <InlineMath>{`x(t), y(t), z(t)`}</InlineMath> are called the <strong>component functions</strong>.
        </p>
      </Callout>

      <Callout type="example" title="A Vector Function">
        <p>The function <InlineMath>{`\\mathbf{r}(t) = (\\cos t, \\sin t, t)`}</InlineMath> traces a helix.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`t = 0`}</InlineMath>: <InlineMath>{`\\mathbf{r}(0) = (1, 0, 0)`}</InlineMath></li>
          <li><InlineMath>{`t = \\pi/2`}</InlineMath>: <InlineMath>{`\\mathbf{r}(\\pi/2) = (0, 1, \\pi/2)`}</InlineMath></li>
          <li><InlineMath>{`t = \\pi`}</InlineMath>: <InlineMath>{`\\mathbf{r}(\\pi) = (-1, 0, \\pi)`}</InlineMath></li>
          <li><InlineMath>{`t = 2\\pi`}</InlineMath>: <InlineMath>{`\\mathbf{r}(2\\pi) = (1, 0, 2\\pi)`}</InlineMath></li>
        </ul>
        <p>The curve spirals upward around the <InlineMath>{`z`}</InlineMath>-axis.</p>
      </Callout>

      <h2>Limits of Vector Functions</h2>

      <Callout type="definition" title="Limit of a Vector Function">
        <p>
          The limit of <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> as <InlineMath>{`t \\to a`}</InlineMath> is defined
          componentwise:
        </p>
        <MathBlock>{`\\lim_{t \\to a} \\mathbf{r}(t) = \\left(\\lim_{t \\to a} x(t), \\lim_{t \\to a} y(t), \\lim_{t \\to a} z(t)\\right)`}</MathBlock>
        <p>provided all component limits exist.</p>
      </Callout>

      <Callout type="example" title="Computing a Limit">
        <p>Find <InlineMath>{`\\lim_{t \\to 0} \\left(\\frac{\\sin t}{t}, e^t, \\frac{1-\\cos t}{t}\\right)`}</InlineMath>.</p>
        <p><strong>Solution:</strong> Compute each component limit:</p>
        <MathBlock>{`\\lim_{t \\to 0} \\frac{\\sin t}{t} = 1`}</MathBlock>
        <MathBlock>{`\\lim_{t \\to 0} e^t = 1`}</MathBlock>
        <MathBlock>{`\\lim_{t \\to 0} \\frac{1-\\cos t}{t} = 0`}</MathBlock>
        <p>Therefore: <InlineMath>{`\\lim_{t \\to 0} \\mathbf{r}(t) = (1, 1, 0)`}</InlineMath></p>
      </Callout>

      <h2>Continuity</h2>

      <Callout type="definition" title="Continuity">
        <p>
          A vector function <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> is <strong>continuous</strong> at <InlineMath>{`t = a`}</InlineMath> if:
        </p>
        <MathBlock>{`\\lim_{t \\to a} \\mathbf{r}(t) = \\mathbf{r}(a)`}</MathBlock>
        <p>
          Equivalently, <InlineMath>{`\\mathbf{r}`}</InlineMath> is continuous iff all component functions are continuous.
        </p>
      </Callout>

      <h2>Derivatives of Vector Functions</h2>

      <Callout type="definition" title="Derivative of a Vector Function">
        <p>
          The derivative of <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> is defined as:
        </p>
        <MathBlock>{`\\mathbf{r}'(t) = \\lim_{h \\to 0} \\frac{\\mathbf{r}(t+h) - \\mathbf{r}(t)}{h}`}</MathBlock>
        <p>Computed componentwise:</p>
        <MathBlock>{`\\mathbf{r}'(t) = (x'(t), y'(t), z'(t))`}</MathBlock>
        <p>
          Notation: <InlineMath>{`\\mathbf{r}'(t)`}</InlineMath>, <InlineMath>{`\\frac{d\\mathbf{r}}{dt}`}</InlineMath>,
          or <InlineMath>{`\\dot{\\mathbf{r}}(t)`}</InlineMath> (dot notation common in physics).
        </p>
      </Callout>

      <Callout type="example" title="Differentiating a Vector Function">
        <p>Find <InlineMath>{`\\mathbf{r}'(t)`}</InlineMath> for <InlineMath>{`\\mathbf{r}(t) = (\\cos t, \\sin t, t)`}</InlineMath>.</p>
        <p><strong>Solution:</strong> Differentiate each component:</p>
        <MathBlock>{`\\mathbf{r}'(t) = (-\\sin t, \\cos t, 1)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Higher Derivatives">
        <p>For <InlineMath>{`\\mathbf{r}(t) = (t^3, e^{2t}, \\ln t)`}</InlineMath>, find <InlineMath>{`\\mathbf{r}'(t)`}</InlineMath> and <InlineMath>{`\\mathbf{r}''(t)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (3t^2, 2e^{2t}, 1/t)`}</MathBlock>
        <MathBlock>{`\\mathbf{r}''(t) = (6t, 4e^{2t}, -1/t^2)`}</MathBlock>
      </Callout>

      <h2>Differentiation Rules</h2>

      <Callout type="theorem" title="Rules for Vector Derivatives">
        <p>
          Let <InlineMath>{`\\mathbf{u}(t)`}</InlineMath> and <InlineMath>{`\\mathbf{v}(t)`}</InlineMath> be differentiable
          vector functions, <InlineMath>{`f(t)`}</InlineMath> a differentiable scalar function, and <InlineMath>{`c`}</InlineMath> a constant:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`\\frac{d}{dt}[c\\mathbf{u}] = c\\mathbf{u}'`}</InlineMath></li>
          <li><InlineMath>{`\\frac{d}{dt}[\\mathbf{u} + \\mathbf{v}] = \\mathbf{u}' + \\mathbf{v}'`}</InlineMath></li>
          <li><InlineMath>{`\\frac{d}{dt}[f(t)\\mathbf{u}] = f'(t)\\mathbf{u} + f(t)\\mathbf{u}'`}</InlineMath> (scalar times vector)</li>
          <li><InlineMath>{`\\frac{d}{dt}[\\mathbf{u} \\cdot \\mathbf{v}] = \\mathbf{u}' \\cdot \\mathbf{v} + \\mathbf{u} \\cdot \\mathbf{v}'`}</InlineMath> (dot product)</li>
          <li><InlineMath>{`\\frac{d}{dt}[\\mathbf{u} \\times \\mathbf{v}] = \\mathbf{u}' \\times \\mathbf{v} + \\mathbf{u} \\times \\mathbf{v}'`}</InlineMath> (cross product, order matters!)</li>
          <li><InlineMath>{`\\frac{d}{dt}[\\mathbf{u}(f(t))] = \\mathbf{u}'(f(t)) \\cdot f'(t)`}</InlineMath> (chain rule)</li>
        </ol>
      </Callout>

      <Callout type="example" title="Derivative of a Dot Product">
        <p>
          For <InlineMath>{`\\mathbf{u}(t) = (t, t^2, t^3)`}</InlineMath> and <InlineMath>{`\\mathbf{v}(t) = (1, 2t, 3t^2)`}</InlineMath>,
          find <InlineMath>{`\\frac{d}{dt}[\\mathbf{u} \\cdot \\mathbf{v}]`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{u}' = (1, 2t, 3t^2), \\quad \\mathbf{v}' = (0, 2, 6t)`}</MathBlock>
        <MathBlock>{`\\mathbf{u}' \\cdot \\mathbf{v} = 1 \\cdot 1 + 2t \\cdot 2t + 3t^2 \\cdot 3t^2 = 1 + 4t^2 + 9t^4`}</MathBlock>
        <MathBlock>{`\\mathbf{u} \\cdot \\mathbf{v}' = t \\cdot 0 + t^2 \\cdot 2 + t^3 \\cdot 6t = 2t^2 + 6t^4`}</MathBlock>
        <MathBlock>{`\\frac{d}{dt}[\\mathbf{u} \\cdot \\mathbf{v}] = 1 + 4t^2 + 9t^4 + 2t^2 + 6t^4 = 1 + 6t^2 + 15t^4`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Constant Magnitude">
        <p>
          If <InlineMath>{`\\|\\mathbf{r}(t)\\|`}</InlineMath> is constant (i.e., <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> stays
          on a sphere centered at the origin), then:
        </p>
        <MathBlock>{`\\mathbf{r}(t) \\cdot \\mathbf{r}'(t) = 0`}</MathBlock>
        <p>
          That is, <InlineMath>{`\\mathbf{r}'(t)`}</InlineMath> is perpendicular to <InlineMath>{`\\mathbf{r}(t)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Verifying Perpendicularity">
        <p>
          For <InlineMath>{`\\mathbf{r}(t) = (\\cos t, \\sin t)`}</InlineMath> (unit circle), verify <InlineMath>{`\\mathbf{r} \\perp \\mathbf{r}'`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}(t) = (\\cos t, \\sin t), \\quad \\mathbf{r}'(t) = (-\\sin t, \\cos t)`}</MathBlock>
        <MathBlock>{`\\mathbf{r} \\cdot \\mathbf{r}' = \\cos t(-\\sin t) + \\sin t(\\cos t) = 0 \\, \\checkmark`}</MathBlock>
      </Callout>

      <h2>Integrals of Vector Functions</h2>

      <Callout type="definition" title="Integral of a Vector Function">
        <p>
          The integral of <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> is computed componentwise:
        </p>
        <MathBlock>{`\\int \\mathbf{r}(t) \\, dt = \\left(\\int x(t) \\, dt, \\int y(t) \\, dt, \\int z(t) \\, dt\\right)`}</MathBlock>
        <p>For definite integrals:</p>
        <MathBlock>{`\\int_a^b \\mathbf{r}(t) \\, dt = \\left(\\int_a^b x(t) \\, dt, \\int_a^b y(t) \\, dt, \\int_a^b z(t) \\, dt\\right)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Indefinite Integral">
        <p>Find <InlineMath>{`\\int (t^2, e^t, \\cos t) \\, dt`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int (t^2, e^t, \\cos t) \\, dt = \\left(\\frac{t^3}{3} + C_1, e^t + C_2, \\sin t + C_3\\right)`}</MathBlock>
        <p>Or with a constant vector: <InlineMath>{`= \\left(\\frac{t^3}{3}, e^t, \\sin t\\right) + \\mathbf{C}`}</InlineMath></p>
      </Callout>

      <Callout type="example" title="Definite Integral">
        <p>Evaluate <InlineMath>{`\\int_0^{\\pi} (\\sin t, \\cos t, 1) \\, dt`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^{\\pi} \\sin t \\, dt = [-\\cos t]_0^{\\pi} = -(-1) - (-1) = 2`}</MathBlock>
        <MathBlock>{`\\int_0^{\\pi} \\cos t \\, dt = [\\sin t]_0^{\\pi} = 0 - 0 = 0`}</MathBlock>
        <MathBlock>{`\\int_0^{\\pi} 1 \\, dt = \\pi`}</MathBlock>
        <p>Therefore: <InlineMath>{`\\int_0^{\\pi} \\mathbf{r}(t) \\, dt = (2, 0, \\pi)`}</InlineMath></p>
      </Callout>

      <h2>Initial Value Problems</h2>

      <Callout type="example" title="Finding Position from Velocity">
        <p>
          A particle has velocity <InlineMath>{`\\mathbf{v}(t) = (2t, 3, -\\sin t)`}</InlineMath> and
          initial position <InlineMath>{`\\mathbf{r}(0) = (1, 0, 2)`}</InlineMath>. Find <InlineMath>{`\\mathbf{r}(t)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Integrate the velocity:</p>
        <MathBlock>{`\\mathbf{r}(t) = \\int (2t, 3, -\\sin t) \\, dt = (t^2, 3t, \\cos t) + \\mathbf{C}`}</MathBlock>
        <p>Apply initial condition <InlineMath>{`\\mathbf{r}(0) = (1, 0, 2)`}</InlineMath>:</p>
        <MathBlock>{`(0, 0, 1) + \\mathbf{C} = (1, 0, 2)`}</MathBlock>
        <MathBlock>{`\\mathbf{C} = (1, 0, 1)`}</MathBlock>
        <p>Therefore: <InlineMath>{`\\mathbf{r}(t) = (t^2 + 1, 3t, \\cos t + 1)`}</InlineMath></p>
      </Callout>

      <h2>The Fundamental Theorem for Vector Functions</h2>

      <Callout type="theorem" title="Fundamental Theorem">
        <p>
          If <InlineMath>{`\\mathbf{r}'(t)`}</InlineMath> is continuous on <InlineMath>{`[a, b]`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\int_a^b \\mathbf{r}'(t) \\, dt = \\mathbf{r}(b) - \\mathbf{r}(a)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Applying the Fundamental Theorem">
        <p>
          For <InlineMath>{`\\mathbf{r}(t) = (t^2, t^3, e^t)`}</InlineMath>, verify that <InlineMath>{`\\int_0^1 \\mathbf{r}'(t) \\, dt = \\mathbf{r}(1) - \\mathbf{r}(0)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (2t, 3t^2, e^t)`}</MathBlock>
        <MathBlock>{`\\int_0^1 (2t, 3t^2, e^t) \\, dt = (1, 1, e-1)`}</MathBlock>
        <MathBlock>{`\\mathbf{r}(1) - \\mathbf{r}(0) = (1, 1, e) - (0, 0, 1) = (1, 1, e-1) \\, \\checkmark`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Vector function:</strong> <InlineMath>{`\\mathbf{r}(t) = (x(t), y(t), z(t))`}</InlineMath></p>
        <p><strong>Limit:</strong> <InlineMath>{`\\lim_{t \\to a} \\mathbf{r}(t) = (\\lim x(t), \\lim y(t), \\lim z(t))`}</InlineMath></p>
        <p><strong>Derivative:</strong> <InlineMath>{`\\mathbf{r}'(t) = (x'(t), y'(t), z'(t))`}</InlineMath></p>
        <p><strong>Integral:</strong> <InlineMath>{`\\int \\mathbf{r}(t) \\, dt = (\\int x \\, dt, \\int y \\, dt, \\int z \\, dt)`}</InlineMath></p>
        <p><strong>Product rules:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`(f\\mathbf{u})' = f'\\mathbf{u} + f\\mathbf{u}'`}</InlineMath></li>
          <li><InlineMath>{`(\\mathbf{u} \\cdot \\mathbf{v})' = \\mathbf{u}' \\cdot \\mathbf{v} + \\mathbf{u} \\cdot \\mathbf{v}'`}</InlineMath></li>
          <li><InlineMath>{`(\\mathbf{u} \\times \\mathbf{v})' = \\mathbf{u}' \\times \\mathbf{v} + \\mathbf{u} \\times \\mathbf{v}'`}</InlineMath></li>
        </ul>
        <p><strong>Constant magnitude:</strong> <InlineMath>{`\\|\\mathbf{r}\\| = \\text{const} \\implies \\mathbf{r} \\perp \\mathbf{r}'`}</InlineMath></p>
      </Callout>
    </LessonLayout>
  );
}
