import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section84() {
  return (
    <LessonLayout sectionId={84}>
      <h1>Curves and Tangency</h1>

      <p>
        When a vector function <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> traces out a curve in space,
        its derivative <InlineMath>{`\\mathbf{r}'(t)`}</InlineMath> gives us fundamental geometric
        information: the direction of the curve at each point. This <strong>tangent vector</strong> is
        the key to understanding the local behavior of curves.
      </p>

      <h2>Curves in Space</h2>

      <Callout type="definition" title="Parametric Curve">
        <p>
          A <strong>parametric curve</strong> (or <strong>space curve</strong>) is the set of
          points traced out by a vector function:
        </p>
        <MathBlock>{`C = \\{\\mathbf{r}(t) : t \\in I\\}`}</MathBlock>
        <p>
          where <InlineMath>{`I`}</InlineMath> is an interval. The parameter <InlineMath>{`t`}</InlineMath> is
          often thought of as time.
        </p>
      </Callout>

      <Callout type="example" title="Common Curves">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Line:</strong> <InlineMath>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t\\mathbf{d}`}</InlineMath>
          </li>
          <li>
            <strong>Circle:</strong> <InlineMath>{`\\mathbf{r}(t) = (R\\cos t, R\\sin t)`}</InlineMath>
          </li>
          <li>
            <strong>Helix:</strong> <InlineMath>{`\\mathbf{r}(t) = (a\\cos t, a\\sin t, bt)`}</InlineMath>
          </li>
          <li>
            <strong>Parabola:</strong> <InlineMath>{`\\mathbf{r}(t) = (t, t^2)`}</InlineMath>
          </li>
        </ul>
      </Callout>

      <h2>The Tangent Vector</h2>

      <Callout type="definition" title="Tangent Vector">
        <p>
          If <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> is differentiable at <InlineMath>{`t = t_0`}</InlineMath> and <InlineMath>{`\\mathbf{r}'(t_0) \\neq \\mathbf{0}`}</InlineMath>,
          then the <strong>tangent vector</strong> to the curve at <InlineMath>{`\\mathbf{r}(t_0)`}</InlineMath> is:
        </p>
        <MathBlock>{`\\mathbf{r}'(t_0) = \\lim_{h \\to 0} \\frac{\\mathbf{r}(t_0 + h) - \\mathbf{r}(t_0)}{h}`}</MathBlock>
        <p>
          This vector points in the direction of motion along the curve as <InlineMath>{`t`}</InlineMath> increases.
        </p>
      </Callout>

      <Callout type="info" title="Geometric Interpretation">
        <p>
          The vector <InlineMath>{`\\mathbf{r}(t_0 + h) - \\mathbf{r}(t_0)`}</InlineMath> points from the
          current position to a nearby position on the curve. Dividing by <InlineMath>{`h`}</InlineMath> and
          taking the limit gives a vector tangent to the curve.
        </p>
      </Callout>

      <Callout type="example" title="Tangent to a Helix">
        <p>Find the tangent vector to <InlineMath>{`\\mathbf{r}(t) = (\\cos t, \\sin t, t)`}</InlineMath> at <InlineMath>{`t = \\pi/2`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-\\sin t, \\cos t, 1)`}</MathBlock>
        <MathBlock>{`\\mathbf{r}'(\\pi/2) = (-\\sin(\\pi/2), \\cos(\\pi/2), 1) = (-1, 0, 1)`}</MathBlock>
        <p>
          The tangent vector at <InlineMath>{`(0, 1, \\pi/2)`}</InlineMath> is <InlineMath>{`(-1, 0, 1)`}</InlineMath>.
        </p>
      </Callout>

      <h2>The Unit Tangent Vector</h2>

      <Callout type="definition" title="Unit Tangent Vector">
        <p>
          The <strong>unit tangent vector</strong> <InlineMath>{`\\mathbf{T}(t)`}</InlineMath> is the
          tangent vector normalized to unit length:
        </p>
        <MathBlock>{`\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{\\|\\mathbf{r}'(t)\\|}`}</MathBlock>
        <p>
          This gives the direction of the curve without information about speed.
        </p>
      </Callout>

      <Callout type="example" title="Unit Tangent for a Circle">
        <p>Find <InlineMath>{`\\mathbf{T}(t)`}</InlineMath> for <InlineMath>{`\\mathbf{r}(t) = (3\\cos t, 3\\sin t)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-3\\sin t, 3\\cos t)`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{r}'(t)\\| = \\sqrt{9\\sin^2 t + 9\\cos^2 t} = 3`}</MathBlock>
        <MathBlock>{`\\mathbf{T}(t) = \\frac{1}{3}(-3\\sin t, 3\\cos t) = (-\\sin t, \\cos t)`}</MathBlock>
        <p>
          Note: <InlineMath>{`\\mathbf{T}`}</InlineMath> is perpendicular to the position vector (as expected for circular motion).
        </p>
      </Callout>

      <Callout type="example" title="Unit Tangent for a Helix">
        <p>Find <InlineMath>{`\\mathbf{T}(t)`}</InlineMath> for <InlineMath>{`\\mathbf{r}(t) = (\\cos t, \\sin t, t)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-\\sin t, \\cos t, 1)`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{r}'(t)\\| = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt{2}`}</MathBlock>
        <MathBlock>{`\\mathbf{T}(t) = \\frac{1}{\\sqrt{2}}(-\\sin t, \\cos t, 1)`}</MathBlock>
      </Callout>

      <h2>Tangent Lines</h2>

      <Callout type="theorem" title="Equation of Tangent Line">
        <p>
          The <strong>tangent line</strong> to the curve <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> at
          the point where <InlineMath>{`t = t_0`}</InlineMath> has the parametric equation:
        </p>
        <MathBlock>{`\\mathbf{L}(s) = \\mathbf{r}(t_0) + s\\mathbf{r}'(t_0)`}</MathBlock>
        <p>
          The line passes through <InlineMath>{`\\mathbf{r}(t_0)`}</InlineMath> with direction <InlineMath>{`\\mathbf{r}'(t_0)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Finding a Tangent Line">
        <p>
          Find the tangent line to <InlineMath>{`\\mathbf{r}(t) = (t^2, t^3, t)`}</InlineMath> at <InlineMath>{`t = 1`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Point: <InlineMath>{`\\mathbf{r}(1) = (1, 1, 1)`}</InlineMath></p>
        <p>Direction: <InlineMath>{`\\mathbf{r}'(t) = (2t, 3t^2, 1)`}</InlineMath>, so <InlineMath>{`\\mathbf{r}'(1) = (2, 3, 1)`}</InlineMath></p>
        <p>Tangent line:</p>
        <MathBlock>{`\\mathbf{L}(s) = (1, 1, 1) + s(2, 3, 1) = (1 + 2s, 1 + 3s, 1 + s)`}</MathBlock>
        <p>Parametric equations: <InlineMath>{`x = 1 + 2s, \\; y = 1 + 3s, \\; z = 1 + s`}</InlineMath></p>
      </Callout>

      <h2>Smooth Curves</h2>

      <Callout type="definition" title="Smooth Curve">
        <p>
          A curve <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> is <strong>smooth</strong> on an
          interval <InlineMath>{`I`}</InlineMath> if:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`\\mathbf{r}'(t)`}</InlineMath> exists and is continuous on <InlineMath>{`I`}</InlineMath></li>
          <li><InlineMath>{`\\mathbf{r}'(t) \\neq \\mathbf{0}`}</InlineMath> for all <InlineMath>{`t \\in I`}</InlineMath></li>
        </ol>
        <p>
          A curve is <strong>piecewise smooth</strong> if it consists of finitely many smooth pieces.
        </p>
      </Callout>

      <Callout type="info" title="Why Nonzero Derivative?">
        <p>
          When <InlineMath>{`\\mathbf{r}'(t_0) = \\mathbf{0}`}</InlineMath>, the curve may have a cusp
          or corner at that point, and the tangent direction is undefined. Such points
          are called <strong>singular points</strong>.
        </p>
      </Callout>

      <Callout type="example" title="A Curve with a Cusp">
        <p>
          The curve <InlineMath>{`\\mathbf{r}(t) = (t^2, t^3)`}</InlineMath> has <InlineMath>{`\\mathbf{r}'(t) = (2t, 3t^2)`}</InlineMath>.
        </p>
        <p>
          At <InlineMath>{`t = 0`}</InlineMath>: <InlineMath>{`\\mathbf{r}'(0) = (0, 0)`}</InlineMath>. This is a singular
          point—the curve has a cusp at the origin.
        </p>
      </Callout>

      <h2>Reparametrization</h2>

      <p>
        The same geometric curve can be described by different parametrizations.
      </p>

      <Callout type="definition" title="Reparametrization">
        <p>
          If <InlineMath>{`\\mathbf{r}(t)`}</InlineMath> traces a curve <InlineMath>{`C`}</InlineMath> and <InlineMath>{`t = g(u)`}</InlineMath> is
          a smooth function with <InlineMath>{`g'(u) \\neq 0`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\tilde{\\mathbf{r}}(u) = \\mathbf{r}(g(u))`}</MathBlock>
        <p>is a <strong>reparametrization</strong> of the same curve.</p>
      </Callout>

      <Callout type="example" title="Different Parametrizations of a Circle">
        <p>These all trace the unit circle:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`\\mathbf{r}_1(t) = (\\cos t, \\sin t)`}</InlineMath>, <InlineMath>{`t \\in [0, 2\\pi]`}</InlineMath></li>
          <li><InlineMath>{`\\mathbf{r}_2(t) = (\\cos 2t, \\sin 2t)`}</InlineMath>, <InlineMath>{`t \\in [0, \\pi]`}</InlineMath> (twice as fast)</li>
          <li><InlineMath>{`\\mathbf{r}_3(t) = (\\sin t, \\cos t)`}</InlineMath>, <InlineMath>{`t \\in [0, 2\\pi]`}</InlineMath> (different starting point)</li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Tangent Under Reparametrization">
        <p>
          If <InlineMath>{`\\tilde{\\mathbf{r}}(u) = \\mathbf{r}(g(u))`}</InlineMath>, then by the chain rule:
        </p>
        <MathBlock>{`\\tilde{\\mathbf{r}}'(u) = \\mathbf{r}'(g(u)) \\cdot g'(u)`}</MathBlock>
        <p>
          The tangent vectors are parallel (same direction if <InlineMath>{`g' > 0`}</InlineMath>, opposite if <InlineMath>{`g' < 0`}</InlineMath>),
          but the unit tangent vector <InlineMath>{`\\mathbf{T}`}</InlineMath> is unchanged (up to sign).
        </p>
      </Callout>

      <h2>Arc Length Parametrization</h2>

      <Callout type="definition" title="Arc Length Parameter">
        <p>
          A curve is parametrized by <strong>arc length</strong> if <InlineMath>{`\\|\\mathbf{r}'(s)\\| = 1`}</InlineMath> for
          all <InlineMath>{`s`}</InlineMath>. In this case:
        </p>
        <MathBlock>{`\\mathbf{T}(s) = \\mathbf{r}'(s)`}</MathBlock>
        <p>
          The parameter <InlineMath>{`s`}</InlineMath> directly measures distance along the curve.
        </p>
      </Callout>

      <Callout type="info" title="Why Arc Length is Special">
        <p>
          Arc length parametrization is the "natural" parametrization because:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Speed is constant: you move one unit of distance per unit of parameter</li>
          <li>The derivative equals the unit tangent: <InlineMath>{`\\mathbf{r}'(s) = \\mathbf{T}(s)`}</InlineMath></li>
          <li>Geometric quantities (curvature, torsion) take their simplest form</li>
        </ul>
      </Callout>

      <h2>Applications to Plane Curves</h2>

      <Callout type="example" title="Tangent to a Graph">
        <p>
          For a function <InlineMath>{`y = f(x)`}</InlineMath>, we can parametrize the graph as <InlineMath>{`\\mathbf{r}(t) = (t, f(t))`}</InlineMath>.
        </p>
        <MathBlock>{`\\mathbf{r}'(t) = (1, f'(t))`}</MathBlock>
        <p>
          The tangent line at <InlineMath>{`x = a`}</InlineMath> has slope <InlineMath>{`f'(a)`}</InlineMath>, as expected.
        </p>
      </Callout>

      <Callout type="example" title="Cycloid">
        <p>
          A cycloid is traced by a point on a rolling circle:
        </p>
        <MathBlock>{`\\mathbf{r}(t) = (t - \\sin t, 1 - \\cos t)`}</MathBlock>
        <p><strong>Tangent vector:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (1 - \\cos t, \\sin t)`}</MathBlock>
        <p>
          At <InlineMath>{`t = 0, 2\\pi, 4\\pi, \\ldots`}</InlineMath>: <InlineMath>{`\\mathbf{r}'(t) = (0, 0)`}</InlineMath>—cusps occur
          when the point touches the ground.
        </p>
      </Callout>

      <h2>Orientation</h2>

      <Callout type="definition" title="Orientation of a Curve">
        <p>
          The <strong>orientation</strong> of a parametric curve is the direction of travel
          as the parameter increases. The tangent vector <InlineMath>{`\\mathbf{r}'(t)`}</InlineMath> points
          in the direction of increasing <InlineMath>{`t`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Opposite Orientations">
        <p>The parametrizations:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`\\mathbf{r}_1(t) = (\\cos t, \\sin t)`}</InlineMath> — counterclockwise</li>
          <li><InlineMath>{`\\mathbf{r}_2(t) = (\\cos(-t), \\sin(-t)) = (\\cos t, -\\sin t)`}</InlineMath> — clockwise</li>
        </ul>
        <p>trace the same circle with opposite orientations.</p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Tangent vector:</strong> <InlineMath>{`\\mathbf{r}'(t)`}</InlineMath> — direction and speed along curve</p>
        <p><strong>Unit tangent:</strong> <InlineMath>{`\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{\\|\\mathbf{r}'(t)\\|}`}</InlineMath> — direction only</p>
        <p><strong>Tangent line:</strong> <InlineMath>{`\\mathbf{L}(s) = \\mathbf{r}(t_0) + s\\mathbf{r}'(t_0)`}</InlineMath></p>
        <p><strong>Smooth curve:</strong> <InlineMath>{`\\mathbf{r}'(t)`}</InlineMath> continuous and nonzero</p>
        <p><strong>Arc length parametrization:</strong> <InlineMath>{`\\|\\mathbf{r}'(s)\\| = 1`}</InlineMath></p>
        <p><strong>Reparametrization:</strong> <InlineMath>{`\\tilde{\\mathbf{r}}(u) = \\mathbf{r}(g(u))`}</InlineMath> — same curve, different parameter</p>
        <p><strong>Orientation:</strong> Direction of travel as parameter increases</p>
      </Callout>
    </LessonLayout>
  );
}
