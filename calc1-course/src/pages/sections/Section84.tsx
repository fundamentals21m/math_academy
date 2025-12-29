import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section84() {
  return (
    <LessonLayout sectionId={84}>
      <h1>Curves and Tangency</h1>

      <p>
        When a vector function <MathInline>{`\\mathbf{r}(t)`}</MathInline> traces out a curve in space,
        its derivative <MathInline>{`\\mathbf{r}'(t)`}</MathInline> gives us fundamental geometric
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
          where <MathInline>{`I`}</MathInline> is an interval. The parameter <MathInline>{`t`}</MathInline> is
          often thought of as time.
        </p>
      </Callout>

      <Callout type="example" title="Common Curves">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Line:</strong> <MathInline>{`\\mathbf{r}(t) = \\mathbf{p}_0 + t\\mathbf{d}`}</MathInline>
          </li>
          <li>
            <strong>Circle:</strong> <MathInline>{`\\mathbf{r}(t) = (R\\cos t, R\\sin t)`}</MathInline>
          </li>
          <li>
            <strong>Helix:</strong> <MathInline>{`\\mathbf{r}(t) = (a\\cos t, a\\sin t, bt)`}</MathInline>
          </li>
          <li>
            <strong>Parabola:</strong> <MathInline>{`\\mathbf{r}(t) = (t, t^2)`}</MathInline>
          </li>
        </ul>
      </Callout>

      <h2>The Tangent Vector</h2>

      <Callout type="definition" title="Tangent Vector">
        <p>
          If <MathInline>{`\\mathbf{r}(t)`}</MathInline> is differentiable at <MathInline>{`t = t_0`}</MathInline> and <MathInline>{`\\mathbf{r}'(t_0) \\neq \\mathbf{0}`}</MathInline>,
          then the <strong>tangent vector</strong> to the curve at <MathInline>{`\\mathbf{r}(t_0)`}</MathInline> is:
        </p>
        <MathBlock>{`\\mathbf{r}'(t_0) = \\lim_{h \\to 0} \\frac{\\mathbf{r}(t_0 + h) - \\mathbf{r}(t_0)}{h}`}</MathBlock>
        <p>
          This vector points in the direction of motion along the curve as <MathInline>{`t`}</MathInline> increases.
        </p>
      </Callout>

      <Callout type="info" title="Geometric Interpretation">
        <p>
          The vector <MathInline>{`\\mathbf{r}(t_0 + h) - \\mathbf{r}(t_0)`}</MathInline> points from the
          current position to a nearby position on the curve. Dividing by <MathInline>{`h`}</MathInline> and
          taking the limit gives a vector tangent to the curve.
        </p>
      </Callout>

      <Callout type="example" title="Tangent to a Helix">
        <p>Find the tangent vector to <MathInline>{`\\mathbf{r}(t) = (\\cos t, \\sin t, t)`}</MathInline> at <MathInline>{`t = \\pi/2`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-\\sin t, \\cos t, 1)`}</MathBlock>
        <MathBlock>{`\\mathbf{r}'(\\pi/2) = (-\\sin(\\pi/2), \\cos(\\pi/2), 1) = (-1, 0, 1)`}</MathBlock>
        <p>
          The tangent vector at <MathInline>{`(0, 1, \\pi/2)`}</MathInline> is <MathInline>{`(-1, 0, 1)`}</MathInline>.
        </p>
      </Callout>

      <h2>The Unit Tangent Vector</h2>

      <Callout type="definition" title="Unit Tangent Vector">
        <p>
          The <strong>unit tangent vector</strong> <MathInline>{`\\mathbf{T}(t)`}</MathInline> is the
          tangent vector normalized to unit length:
        </p>
        <MathBlock>{`\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{\\|\\mathbf{r}'(t)\\|}`}</MathBlock>
        <p>
          This gives the direction of the curve without information about speed.
        </p>
      </Callout>

      <Callout type="example" title="Unit Tangent for a Circle">
        <p>Find <MathInline>{`\\mathbf{T}(t)`}</MathInline> for <MathInline>{`\\mathbf{r}(t) = (3\\cos t, 3\\sin t)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-3\\sin t, 3\\cos t)`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{r}'(t)\\| = \\sqrt{9\\sin^2 t + 9\\cos^2 t} = 3`}</MathBlock>
        <MathBlock>{`\\mathbf{T}(t) = \\frac{1}{3}(-3\\sin t, 3\\cos t) = (-\\sin t, \\cos t)`}</MathBlock>
        <p>
          Note: <MathInline>{`\\mathbf{T}`}</MathInline> is perpendicular to the position vector (as expected for circular motion).
        </p>
      </Callout>

      <Callout type="example" title="Unit Tangent for a Helix">
        <p>Find <MathInline>{`\\mathbf{T}(t)`}</MathInline> for <MathInline>{`\\mathbf{r}(t) = (\\cos t, \\sin t, t)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-\\sin t, \\cos t, 1)`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{r}'(t)\\| = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt{2}`}</MathBlock>
        <MathBlock>{`\\mathbf{T}(t) = \\frac{1}{\\sqrt{2}}(-\\sin t, \\cos t, 1)`}</MathBlock>
      </Callout>

      <h2>Tangent Lines</h2>

      <Callout type="theorem" title="Equation of Tangent Line">
        <p>
          The <strong>tangent line</strong> to the curve <MathInline>{`\\mathbf{r}(t)`}</MathInline> at
          the point where <MathInline>{`t = t_0`}</MathInline> has the parametric equation:
        </p>
        <MathBlock>{`\\mathbf{L}(s) = \\mathbf{r}(t_0) + s\\mathbf{r}'(t_0)`}</MathBlock>
        <p>
          The line passes through <MathInline>{`\\mathbf{r}(t_0)`}</MathInline> with direction <MathInline>{`\\mathbf{r}'(t_0)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Finding a Tangent Line">
        <p>
          Find the tangent line to <MathInline>{`\\mathbf{r}(t) = (t^2, t^3, t)`}</MathInline> at <MathInline>{`t = 1`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Point: <MathInline>{`\\mathbf{r}(1) = (1, 1, 1)`}</MathInline></p>
        <p>Direction: <MathInline>{`\\mathbf{r}'(t) = (2t, 3t^2, 1)`}</MathInline>, so <MathInline>{`\\mathbf{r}'(1) = (2, 3, 1)`}</MathInline></p>
        <p>Tangent line:</p>
        <MathBlock>{`\\mathbf{L}(s) = (1, 1, 1) + s(2, 3, 1) = (1 + 2s, 1 + 3s, 1 + s)`}</MathBlock>
        <p>Parametric equations: <MathInline>{`x = 1 + 2s, \\; y = 1 + 3s, \\; z = 1 + s`}</MathInline></p>
      </Callout>

      <h2>Smooth Curves</h2>

      <Callout type="definition" title="Smooth Curve">
        <p>
          A curve <MathInline>{`\\mathbf{r}(t)`}</MathInline> is <strong>smooth</strong> on an
          interval <MathInline>{`I`}</MathInline> if:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`\\mathbf{r}'(t)`}</MathInline> exists and is continuous on <MathInline>{`I`}</MathInline></li>
          <li><MathInline>{`\\mathbf{r}'(t) \\neq \\mathbf{0}`}</MathInline> for all <MathInline>{`t \\in I`}</MathInline></li>
        </ol>
        <p>
          A curve is <strong>piecewise smooth</strong> if it consists of finitely many smooth pieces.
        </p>
      </Callout>

      <Callout type="info" title="Why Nonzero Derivative?">
        <p>
          When <MathInline>{`\\mathbf{r}'(t_0) = \\mathbf{0}`}</MathInline>, the curve may have a cusp
          or corner at that point, and the tangent direction is undefined. Such points
          are called <strong>singular points</strong>.
        </p>
      </Callout>

      <Callout type="example" title="A Curve with a Cusp">
        <p>
          The curve <MathInline>{`\\mathbf{r}(t) = (t^2, t^3)`}</MathInline> has <MathInline>{`\\mathbf{r}'(t) = (2t, 3t^2)`}</MathInline>.
        </p>
        <p>
          At <MathInline>{`t = 0`}</MathInline>: <MathInline>{`\\mathbf{r}'(0) = (0, 0)`}</MathInline>. This is a singular
          point—the curve has a cusp at the origin.
        </p>
      </Callout>

      <h2>Reparametrization</h2>

      <p>
        The same geometric curve can be described by different parametrizations.
      </p>

      <Callout type="definition" title="Reparametrization">
        <p>
          If <MathInline>{`\\mathbf{r}(t)`}</MathInline> traces a curve <MathInline>{`C`}</MathInline> and <MathInline>{`t = g(u)`}</MathInline> is
          a smooth function with <MathInline>{`g'(u) \\neq 0`}</MathInline>, then:
        </p>
        <MathBlock>{`\\tilde{\\mathbf{r}}(u) = \\mathbf{r}(g(u))`}</MathBlock>
        <p>is a <strong>reparametrization</strong> of the same curve.</p>
      </Callout>

      <Callout type="example" title="Different Parametrizations of a Circle">
        <p>These all trace the unit circle:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`\\mathbf{r}_1(t) = (\\cos t, \\sin t)`}</MathInline>, <MathInline>{`t \\in [0, 2\\pi]`}</MathInline></li>
          <li><MathInline>{`\\mathbf{r}_2(t) = (\\cos 2t, \\sin 2t)`}</MathInline>, <MathInline>{`t \\in [0, \\pi]`}</MathInline> (twice as fast)</li>
          <li><MathInline>{`\\mathbf{r}_3(t) = (\\sin t, \\cos t)`}</MathInline>, <MathInline>{`t \\in [0, 2\\pi]`}</MathInline> (different starting point)</li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Tangent Under Reparametrization">
        <p>
          If <MathInline>{`\\tilde{\\mathbf{r}}(u) = \\mathbf{r}(g(u))`}</MathInline>, then by the chain rule:
        </p>
        <MathBlock>{`\\tilde{\\mathbf{r}}'(u) = \\mathbf{r}'(g(u)) \\cdot g'(u)`}</MathBlock>
        <p>
          The tangent vectors are parallel (same direction if <MathInline>{`g' > 0`}</MathInline>, opposite if <MathInline>{`g' < 0`}</MathInline>),
          but the unit tangent vector <MathInline>{`\\mathbf{T}`}</MathInline> is unchanged (up to sign).
        </p>
      </Callout>

      <h2>Arc Length Parametrization</h2>

      <Callout type="definition" title="Arc Length Parameter">
        <p>
          A curve is parametrized by <strong>arc length</strong> if <MathInline>{`\\|\\mathbf{r}'(s)\\| = 1`}</MathInline> for
          all <MathInline>{`s`}</MathInline>. In this case:
        </p>
        <MathBlock>{`\\mathbf{T}(s) = \\mathbf{r}'(s)`}</MathBlock>
        <p>
          The parameter <MathInline>{`s`}</MathInline> directly measures distance along the curve.
        </p>
      </Callout>

      <Callout type="info" title="Why Arc Length is Special">
        <p>
          Arc length parametrization is the "natural" parametrization because:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Speed is constant: you move one unit of distance per unit of parameter</li>
          <li>The derivative equals the unit tangent: <MathInline>{`\\mathbf{r}'(s) = \\mathbf{T}(s)`}</MathInline></li>
          <li>Geometric quantities (curvature, torsion) take their simplest form</li>
        </ul>
      </Callout>

      <h2>Applications to Plane Curves</h2>

      <Callout type="example" title="Tangent to a Graph">
        <p>
          For a function <MathInline>{`y = f(x)`}</MathInline>, we can parametrize the graph as <MathInline>{`\\mathbf{r}(t) = (t, f(t))`}</MathInline>.
        </p>
        <MathBlock>{`\\mathbf{r}'(t) = (1, f'(t))`}</MathBlock>
        <p>
          The tangent line at <MathInline>{`x = a`}</MathInline> has slope <MathInline>{`f'(a)`}</MathInline>, as expected.
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
          At <MathInline>{`t = 0, 2\\pi, 4\\pi, \\ldots`}</MathInline>: <MathInline>{`\\mathbf{r}'(t) = (0, 0)`}</MathInline>—cusps occur
          when the point touches the ground.
        </p>
      </Callout>

      <h2>Orientation</h2>

      <Callout type="definition" title="Orientation of a Curve">
        <p>
          The <strong>orientation</strong> of a parametric curve is the direction of travel
          as the parameter increases. The tangent vector <MathInline>{`\\mathbf{r}'(t)`}</MathInline> points
          in the direction of increasing <MathInline>{`t`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Opposite Orientations">
        <p>The parametrizations:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`\\mathbf{r}_1(t) = (\\cos t, \\sin t)`}</MathInline> — counterclockwise</li>
          <li><MathInline>{`\\mathbf{r}_2(t) = (\\cos(-t), \\sin(-t)) = (\\cos t, -\\sin t)`}</MathInline> — clockwise</li>
        </ul>
        <p>trace the same circle with opposite orientations.</p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Tangent vector:</strong> <MathInline>{`\\mathbf{r}'(t)`}</MathInline> — direction and speed along curve</p>
        <p><strong>Unit tangent:</strong> <MathInline>{`\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{\\|\\mathbf{r}'(t)\\|}`}</MathInline> — direction only</p>
        <p><strong>Tangent line:</strong> <MathInline>{`\\mathbf{L}(s) = \\mathbf{r}(t_0) + s\\mathbf{r}'(t_0)`}</MathInline></p>
        <p><strong>Smooth curve:</strong> <MathInline>{`\\mathbf{r}'(t)`}</MathInline> continuous and nonzero</p>
        <p><strong>Arc length parametrization:</strong> <MathInline>{`\\|\\mathbf{r}'(s)\\| = 1`}</MathInline></p>
        <p><strong>Reparametrization:</strong> <MathInline>{`\\tilde{\\mathbf{r}}(u) = \\mathbf{r}(g(u))`}</MathInline> — same curve, different parameter</p>
        <p><strong>Orientation:</strong> Direction of travel as parameter increases</p>
      </Callout>
    </LessonLayout>
  );
}
