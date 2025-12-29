import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section87() {
  return (
    <LessonLayout sectionId={87}>
      <h1>Curvature</h1>

      <p>
        <strong>Curvature</strong> measures how sharply a curve bends at each point. A straight
        line has zero curvature, while a tight circle has high curvature. This concept is
        fundamental in differential geometry and has applications in physics, engineering, and
        computer graphics.
      </p>

      <h2>The Unit Tangent Vector</h2>

      <Callout type="definition" title="Unit Tangent Vector">
        <p>
          For a smooth curve <MathInline>{`\\mathbf{r}(t)`}</MathInline> with <MathInline>{`\\mathbf{r}'(t) \\neq \\mathbf{0}`}</MathInline>,
          the <strong>unit tangent vector</strong> is:
        </p>
        <MathBlock>{`\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{\\|\\mathbf{r}'(t)\\|}`}</MathBlock>
        <p>
          This gives the direction of the curve without information about speed.
        </p>
      </Callout>

      <h2>Definition of Curvature</h2>

      <Callout type="definition" title="Curvature">
        <p>
          The <strong>curvature</strong> <MathInline>{`\\kappa`}</MathInline> measures how fast the unit
          tangent vector changes direction with respect to arc length:
        </p>
        <MathBlock>{`\\kappa = \\left\\|\\frac{d\\mathbf{T}}{ds}\\right\\|`}</MathBlock>
        <p>
          where <MathInline>{`s`}</MathInline> is the arc length parameter.
        </p>
      </Callout>

      <Callout type="info" title="Intuition">
        <p>
          Curvature measures "turning per unit distance traveled." A curve that turns
          sharply has high curvature; a nearly straight curve has low curvature.
        </p>
      </Callout>

      <h2>Computing Curvature</h2>

      <Callout type="theorem" title="Curvature Formula (Any Parameter)">
        <p>
          For a curve <MathInline>{`\\mathbf{r}(t)`}</MathInline> parametrized by any parameter <MathInline>{`t`}</MathInline>:
        </p>
        <MathBlock>{`\\kappa = \\frac{\\|\\mathbf{T}'(t)\\|}{\\|\\mathbf{r}'(t)\\|}`}</MathBlock>
        <p>Or equivalently:</p>
        <MathBlock>{`\\kappa = \\frac{\\|\\mathbf{r}'(t) \\times \\mathbf{r}''(t)\\|}{\\|\\mathbf{r}'(t)\\|^3}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Curvature for Plane Curves">
        <p>For a plane curve <MathInline>{`\\mathbf{r}(t) = (x(t), y(t))`}</MathInline>:</p>
        <MathBlock>{`\\kappa = \\frac{|x'y'' - y'x''|}{(x'^2 + y'^2)^{3/2}}`}</MathBlock>
        <p>For a graph <MathInline>{`y = f(x)`}</MathInline>:</p>
        <MathBlock>{`\\kappa = \\frac{|f''(x)|}{(1 + [f'(x)]^2)^{3/2}}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Curvature of a Circle">
        <p>
          Find the curvature of a circle of radius <MathInline>{`R`}</MathInline>: <MathInline>{`\\mathbf{r}(t) = (R\\cos t, R\\sin t)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-R\\sin t, R\\cos t), \\quad \\mathbf{r}''(t) = (-R\\cos t, -R\\sin t)`}</MathBlock>
        <MathBlock>{`x'y'' - y'x'' = (-R\\sin t)(-R\\sin t) - (R\\cos t)(-R\\cos t)`}</MathBlock>
        <MathBlock>{`= R^2\\sin^2 t + R^2\\cos^2 t = R^2`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{r}'(t)\\| = R`}</MathBlock>
        <MathBlock>{`\\kappa = \\frac{|R^2|}{R^3} = \\frac{1}{R}`}</MathBlock>
        <p>
          The curvature of a circle is constant and equals <MathInline>{`1/R`}</MathInline>. Smaller
          circles have larger curvature.
        </p>
      </Callout>

      <Callout type="example" title="Curvature of a Parabola">
        <p>Find the curvature of <MathInline>{`y = x^2`}</MathInline> at the origin.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`f'(x) = 2x, \\quad f''(x) = 2`}</MathBlock>
        <MathBlock>{`\\kappa = \\frac{|2|}{(1 + 4x^2)^{3/2}}`}</MathBlock>
        <p>At <MathInline>{`x = 0`}</MathInline>:</p>
        <MathBlock>{`\\kappa(0) = \\frac{2}{1} = 2`}</MathBlock>
        <p>
          The parabola curves most sharply at the vertex. As <MathInline>{`|x| \\to \\infty`}</MathInline>,
          <MathInline>{`\\kappa \\to 0`}</MathInline> (the parabola flattens out).
        </p>
      </Callout>

      <h2>Radius of Curvature</h2>

      <Callout type="definition" title="Radius of Curvature">
        <p>
          The <strong>radius of curvature</strong> is the reciprocal of curvature:
        </p>
        <MathBlock>{`\\rho = \\frac{1}{\\kappa}`}</MathBlock>
        <p>
          This is the radius of the <strong>osculating circle</strong>—the circle that best
          approximates the curve at that point.
        </p>
      </Callout>

      <Callout type="example" title="Radius of Curvature">
        <p>
          For the parabola <MathInline>{`y = x^2`}</MathInline> at the origin, the radius of curvature is:
        </p>
        <MathBlock>{`\\rho = \\frac{1}{\\kappa} = \\frac{1}{2}`}</MathBlock>
        <p>
          The osculating circle at the vertex has radius <MathInline>{`1/2`}</MathInline>.
        </p>
      </Callout>

      <h2>The Principal Normal Vector</h2>

      <Callout type="definition" title="Principal Normal Vector">
        <p>
          The <strong>principal unit normal vector</strong> <MathInline>{`\\mathbf{N}`}</MathInline> points
          in the direction that <MathInline>{`\\mathbf{T}`}</MathInline> is turning:
        </p>
        <MathBlock>{`\\mathbf{N} = \\frac{\\mathbf{T}'}{\\|\\mathbf{T}'\\|} = \\frac{d\\mathbf{T}/ds}{\\|d\\mathbf{T}/ds\\|}`}</MathBlock>
        <p>
          Since <MathInline>{`\\mathbf{T}`}</MathInline> has constant length 1, we have <MathInline>{`\\mathbf{T}' \\perp \\mathbf{T}`}</MathInline>,
          so <MathInline>{`\\mathbf{N} \\perp \\mathbf{T}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Direction of N">
        <p>
          The principal normal <MathInline>{`\\mathbf{N}`}</MathInline> always points toward the center
          of curvature (the center of the osculating circle). For a particle moving along
          the curve, <MathInline>{`\\mathbf{N}`}</MathInline> points in the direction of the
          centripetal acceleration.
        </p>
      </Callout>

      <Callout type="example" title="T and N for a Circle">
        <p>Find <MathInline>{`\\mathbf{T}`}</MathInline> and <MathInline>{`\\mathbf{N}`}</MathInline> for <MathInline>{`\\mathbf{r}(t) = (R\\cos t, R\\sin t)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-R\\sin t, R\\cos t), \\quad \\|\\mathbf{r}'(t)\\| = R`}</MathBlock>
        <MathBlock>{`\\mathbf{T}(t) = (-\\sin t, \\cos t)`}</MathBlock>
        <MathBlock>{`\\mathbf{T}'(t) = (-\\cos t, -\\sin t), \\quad \\|\\mathbf{T}'(t)\\| = 1`}</MathBlock>
        <MathBlock>{`\\mathbf{N}(t) = (-\\cos t, -\\sin t)`}</MathBlock>
        <p>
          Note that <MathInline>{`\\mathbf{N} = -\\mathbf{r}/R`}</MathInline> points toward the center (the origin).
        </p>
      </Callout>

      <Callout type="example" title="T and N for a Helix">
        <p>Find <MathInline>{`\\mathbf{T}`}</MathInline> and <MathInline>{`\\mathbf{N}`}</MathInline> for <MathInline>{`\\mathbf{r}(t) = (\\cos t, \\sin t, t)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{r}'(t) = (-\\sin t, \\cos t, 1), \\quad \\|\\mathbf{r}'(t)\\| = \\sqrt{2}`}</MathBlock>
        <MathBlock>{`\\mathbf{T}(t) = \\frac{1}{\\sqrt{2}}(-\\sin t, \\cos t, 1)`}</MathBlock>
        <MathBlock>{`\\mathbf{T}'(t) = \\frac{1}{\\sqrt{2}}(-\\cos t, -\\sin t, 0), \\quad \\|\\mathbf{T}'(t)\\| = \\frac{1}{\\sqrt{2}}`}</MathBlock>
        <MathBlock>{`\\mathbf{N}(t) = (-\\cos t, -\\sin t, 0)`}</MathBlock>
        <p>
          The principal normal is horizontal and points toward the <MathInline>{`z`}</MathInline>-axis.
        </p>
      </Callout>

      <h2>The Binormal Vector</h2>

      <Callout type="definition" title="Binormal Vector">
        <p>
          For a space curve, the <strong>binormal vector</strong> completes an orthonormal
          frame:
        </p>
        <MathBlock>{`\\mathbf{B} = \\mathbf{T} \\times \\mathbf{N}`}</MathBlock>
        <p>
          The triple <MathInline>{`\\{\\mathbf{T}, \\mathbf{N}, \\mathbf{B}\\}`}</MathInline> is called
          the <strong>Frenet-Serret frame</strong> (or TNB frame).
        </p>
      </Callout>

      <Callout type="example" title="Binormal for a Helix">
        <p>For the helix above:</p>
        <MathBlock>{`\\mathbf{B} = \\mathbf{T} \\times \\mathbf{N} = \\frac{1}{\\sqrt{2}}(-\\sin t, \\cos t, 1) \\times (-\\cos t, -\\sin t, 0)`}</MathBlock>
        <MathBlock>{`= \\frac{1}{\\sqrt{2}}(\\sin t, -\\cos t, 1)`}</MathBlock>
      </Callout>

      <h2>The Frenet-Serret Formulas</h2>

      <Callout type="theorem" title="Frenet-Serret Formulas">
        <p>
          For a curve parametrized by arc length <MathInline>{`s`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{d\\mathbf{T}}{ds} = \\kappa\\mathbf{N}`}</MathBlock>
        <MathBlock>{`\\frac{d\\mathbf{N}}{ds} = -\\kappa\\mathbf{T} + \\tau\\mathbf{B}`}</MathBlock>
        <MathBlock>{`\\frac{d\\mathbf{B}}{ds} = -\\tau\\mathbf{N}`}</MathBlock>
        <p>
          where <MathInline>{`\\tau`}</MathInline> is the <strong>torsion</strong>, measuring how
          the curve twists out of its osculating plane.
        </p>
      </Callout>

      <Callout type="info" title="Torsion">
        <p>
          Torsion <MathInline>{`\\tau`}</MathInline> measures the rate at which the curve deviates
          from being planar:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`\\tau = 0`}</MathInline>: The curve lies in a plane</li>
          <li><MathInline>{`\\tau > 0`}</MathInline>: The curve twists like a right-handed helix</li>
          <li><MathInline>{`\\tau < 0`}</MathInline>: The curve twists like a left-handed helix</li>
        </ul>
      </Callout>

      <h2>The Osculating Plane and Circle</h2>

      <Callout type="definition" title="Osculating Plane">
        <p>
          The <strong>osculating plane</strong> at a point on a curve is the plane spanned
          by <MathInline>{`\\mathbf{T}`}</MathInline> and <MathInline>{`\\mathbf{N}`}</MathInline>. It is
          perpendicular to <MathInline>{`\\mathbf{B}`}</MathInline>.
        </p>
        <p>
          This is the plane that best approximates the curve near that point.
        </p>
      </Callout>

      <Callout type="definition" title="Osculating Circle">
        <p>
          The <strong>osculating circle</strong> (or circle of curvature) is the circle in
          the osculating plane that:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Passes through the point on the curve</li>
          <li>Has the same tangent as the curve</li>
          <li>Has radius <MathInline>{`\\rho = 1/\\kappa`}</MathInline></li>
        </ul>
        <p>Its center (the <strong>center of curvature</strong>) is at:</p>
        <MathBlock>{`\\mathbf{r} + \\rho\\mathbf{N} = \\mathbf{r} + \\frac{1}{\\kappa}\\mathbf{N}`}</MathBlock>
      </Callout>

      <h2>Curvature and Acceleration</h2>

      <Callout type="theorem" title="Acceleration Components">
        <p>Recall the tangential-normal decomposition of acceleration:</p>
        <MathBlock>{`\\mathbf{a} = a_T\\mathbf{T} + a_N\\mathbf{N}`}</MathBlock>
        <p>The normal component is related to curvature by:</p>
        <MathBlock>{`a_N = \\kappa v^2 = \\frac{v^2}{\\rho}`}</MathBlock>
        <p>
          where <MathInline>{`v = \\|\\mathbf{v}\\|`}</MathInline> is the speed.
        </p>
      </Callout>

      <Callout type="example" title="Centripetal Acceleration">
        <p>
          A car travels at 20 m/s around a curve with radius of curvature 50 m.
          What is its centripetal acceleration?
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`a_N = \\frac{v^2}{\\rho} = \\frac{(20)^2}{50} = \\frac{400}{50} = 8 \\text{ m/s}^2`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Unit tangent:</strong> <MathInline>{`\\mathbf{T} = \\mathbf{r}'/\\|\\mathbf{r}'\\|`}</MathInline></p>

        <p><strong>Curvature:</strong> <MathInline>{`\\kappa = \\|d\\mathbf{T}/ds\\| = \\|\\mathbf{T}'\\|/\\|\\mathbf{r}'\\|`}</MathInline></p>

        <p><strong>Curvature (3D):</strong> <MathInline>{`\\kappa = \\|\\mathbf{r}' \\times \\mathbf{r}''\\|/\\|\\mathbf{r}'\\|^3`}</MathInline></p>

        <p><strong>Curvature (plane curve):</strong> <MathInline>{`\\kappa = |x'y'' - y'x''|/(x'^2 + y'^2)^{3/2}`}</MathInline></p>

        <p><strong>Curvature (graph):</strong> <MathInline>{`\\kappa = |f''|/(1 + f'^2)^{3/2}`}</MathInline></p>

        <p><strong>Radius of curvature:</strong> <MathInline>{`\\rho = 1/\\kappa`}</MathInline></p>

        <p><strong>Principal normal:</strong> <MathInline>{`\\mathbf{N} = \\mathbf{T}'/\\|\\mathbf{T}'\\|`}</MathInline></p>

        <p><strong>Binormal:</strong> <MathInline>{`\\mathbf{B} = \\mathbf{T} \\times \\mathbf{N}`}</MathInline></p>

        <p><strong>Circle curvature:</strong> <MathInline>{`\\kappa = 1/R`}</MathInline></p>

        <p><strong>Normal acceleration:</strong> <MathInline>{`a_N = \\kappa v^2`}</MathInline></p>
      </Callout>
    </LessonLayout>
  );
}
