import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section85() {
  return (
    <LessonLayout sectionId={85}>
      <h1>Velocity and Acceleration</h1>

      <p>
        When a particle moves along a curve described by <MathInline>{`\\mathbf{r}(t)`}</MathInline>, the
        derivatives of this position function give us the <strong>velocity</strong> and <strong>acceleration</strong>—vector
        quantities that describe both the speed and direction of motion.
      </p>

      <h2>Velocity</h2>

      <Callout type="definition" title="Velocity Vector">
        <p>
          If <MathInline>{`\\mathbf{r}(t)`}</MathInline> is the position of a particle at time <MathInline>{`t`}</MathInline>,
          the <strong>velocity</strong> is:
        </p>
        <MathBlock>{`\\mathbf{v}(t) = \\mathbf{r}'(t) = \\frac{d\\mathbf{r}}{dt}`}</MathBlock>
        <p>
          The velocity vector is tangent to the path and points in the direction of motion.
        </p>
      </Callout>

      <Callout type="definition" title="Speed">
        <p>
          The <strong>speed</strong> is the magnitude of velocity:
        </p>
        <MathBlock>{`v(t) = \\|\\mathbf{v}(t)\\| = \\|\\mathbf{r}'(t)\\|`}</MathBlock>
        <p>
          Speed is a scalar—it tells how fast, but not in what direction.
        </p>
      </Callout>

      <Callout type="example" title="Circular Motion">
        <p>
          A particle moves on a circle of radius <MathInline>{`R`}</MathInline> with constant angular
          speed <MathInline>{`\\omega`}</MathInline>:
        </p>
        <MathBlock>{`\\mathbf{r}(t) = (R\\cos(\\omega t), R\\sin(\\omega t))`}</MathBlock>
        <p><strong>Velocity:</strong></p>
        <MathBlock>{`\\mathbf{v}(t) = (-R\\omega\\sin(\\omega t), R\\omega\\cos(\\omega t))`}</MathBlock>
        <p><strong>Speed:</strong></p>
        <MathBlock>{`v = \\sqrt{R^2\\omega^2\\sin^2(\\omega t) + R^2\\omega^2\\cos^2(\\omega t)} = R\\omega`}</MathBlock>
        <p>The speed is constant, equal to <MathInline>{`R\\omega`}</MathInline>.</p>
      </Callout>

      <h2>Acceleration</h2>

      <Callout type="definition" title="Acceleration Vector">
        <p>
          The <strong>acceleration</strong> is the derivative of velocity:
        </p>
        <MathBlock>{`\\mathbf{a}(t) = \\mathbf{v}'(t) = \\mathbf{r}''(t)`}</MathBlock>
        <p>
          Acceleration measures how the velocity (both speed and direction) is changing.
        </p>
      </Callout>

      <Callout type="example" title="Circular Motion (continued)">
        <p>For the circular motion above:</p>
        <MathBlock>{`\\mathbf{a}(t) = (-R\\omega^2\\cos(\\omega t), -R\\omega^2\\sin(\\omega t)) = -\\omega^2\\mathbf{r}(t)`}</MathBlock>
        <p>
          The acceleration points toward the center (centripetal acceleration) with
          magnitude <MathInline>{`|\\mathbf{a}| = R\\omega^2 = v^2/R`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Projectile Motion">
        <p>
          A projectile launched with initial velocity <MathInline>{`\\mathbf{v}_0 = (v_0\\cos\\theta, v_0\\sin\\theta)`}</MathInline> under
          gravity <MathInline>{`g`}</MathInline>:
        </p>
        <MathBlock>{`\\mathbf{a}(t) = (0, -g)`}</MathBlock>
        <MathBlock>{`\\mathbf{v}(t) = (v_0\\cos\\theta, v_0\\sin\\theta - gt)`}</MathBlock>
        <MathBlock>{`\\mathbf{r}(t) = (v_0 t\\cos\\theta, v_0 t\\sin\\theta - \\frac{1}{2}gt^2)`}</MathBlock>
        <p>
          The path is a parabola. Maximum height occurs when <MathInline>{`v_y = 0`}</MathInline>,
          i.e., at <MathInline>{`t = v_0\\sin\\theta/g`}</MathInline>.
        </p>
      </Callout>

      <h2>Tangential and Normal Components</h2>

      <p>
        Acceleration can be decomposed into components along and perpendicular to the velocity.
      </p>

      <Callout type="theorem" title="Tangential and Normal Acceleration">
        <p>
          The acceleration can be written as:
        </p>
        <MathBlock>{`\\mathbf{a} = a_T\\mathbf{T} + a_N\\mathbf{N}`}</MathBlock>
        <p>where:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <MathInline>{`\\mathbf{T}`}</MathInline> is the unit tangent vector
          </li>
          <li>
            <MathInline>{`\\mathbf{N}`}</MathInline> is the unit normal vector (perpendicular to <MathInline>{`\\mathbf{T}`}</MathInline>, pointing toward the center of curvature)
          </li>
          <li>
            <MathInline>{`a_T`}</MathInline> is the <strong>tangential acceleration</strong>
          </li>
          <li>
            <MathInline>{`a_N`}</MathInline> is the <strong>normal acceleration</strong>
          </li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Formulas for Components">
        <p><strong>Tangential acceleration</strong> (rate of change of speed):</p>
        <MathBlock>{`a_T = \\frac{d|\\mathbf{v}|}{dt} = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{|\\mathbf{v}|}`}</MathBlock>
        <p><strong>Normal acceleration</strong> (centripetal):</p>
        <MathBlock>{`a_N = \\sqrt{|\\mathbf{a}|^2 - a_T^2} = \\frac{|\\mathbf{v} \\times \\mathbf{a}|}{|\\mathbf{v}|}`}</MathBlock>
        <p>Or in terms of curvature <MathInline>{`\\kappa`}</MathInline> and speed <MathInline>{`v`}</MathInline>:</p>
        <MathBlock>{`a_N = \\kappa v^2`}</MathBlock>
      </Callout>

      <Callout type="info" title="Physical Interpretation">
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`a_T`}</MathInline> changes the <strong>speed</strong>: speeding up (<MathInline>{`a_T > 0`}</MathInline>) or slowing down (<MathInline>{`a_T < 0`}</MathInline>)</li>
          <li><MathInline>{`a_N`}</MathInline> changes the <strong>direction</strong>: it's always perpendicular to velocity and causes turning</li>
        </ul>
      </Callout>

      <Callout type="example" title="Computing Components">
        <p>
          For <MathInline>{`\\mathbf{r}(t) = (t, t^2, t^3)`}</MathInline>, find <MathInline>{`a_T`}</MathInline> and <MathInline>{`a_N`}</MathInline> at <MathInline>{`t = 1`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{v}(t) = (1, 2t, 3t^2), \\quad \\mathbf{a}(t) = (0, 2, 6t)`}</MathBlock>
        <p>At <MathInline>{`t = 1`}</MathInline>:</p>
        <MathBlock>{`\\mathbf{v}(1) = (1, 2, 3), \\quad \\mathbf{a}(1) = (0, 2, 6)`}</MathBlock>
        <MathBlock>{`|\\mathbf{v}| = \\sqrt{1 + 4 + 9} = \\sqrt{14}`}</MathBlock>
        <MathBlock>{`\\mathbf{v} \\cdot \\mathbf{a} = 0 + 4 + 18 = 22`}</MathBlock>
        <MathBlock>{`a_T = \\frac{22}{\\sqrt{14}} = \\frac{22\\sqrt{14}}{14} = \\frac{11\\sqrt{14}}{7}`}</MathBlock>
        <MathBlock>{`|\\mathbf{a}| = \\sqrt{0 + 4 + 36} = \\sqrt{40} = 2\\sqrt{10}`}</MathBlock>
        <MathBlock>{`a_N = \\sqrt{40 - \\frac{484}{14}} = \\sqrt{\\frac{560 - 484}{14}} = \\sqrt{\\frac{76}{14}} = \\sqrt{\\frac{38}{7}}`}</MathBlock>
      </Callout>

      <h2>Motion with Constant Speed</h2>

      <Callout type="theorem" title="Constant Speed Motion">
        <p>
          If a particle moves with constant speed (<MathInline>{`|\\mathbf{v}| = c`}</MathInline>), then:
        </p>
        <MathBlock>{`a_T = 0, \\quad \\mathbf{a} = a_N\\mathbf{N}`}</MathBlock>
        <p>
          The acceleration is purely normal (perpendicular to velocity).
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>If <MathInline>{`|\\mathbf{v}|^2 = \\mathbf{v} \\cdot \\mathbf{v} = c^2`}</MathInline>, differentiate:</p>
        <MathBlock>{`\\frac{d}{dt}(\\mathbf{v} \\cdot \\mathbf{v}) = 2\\mathbf{v} \\cdot \\mathbf{a} = 0`}</MathBlock>
        <p>
          So <MathInline>{`\\mathbf{v} \\cdot \\mathbf{a} = 0`}</MathInline>, meaning <MathInline>{`\\mathbf{a} \\perp \\mathbf{v}`}</MathInline>.
        </p>
      </Callout>

      <h2>Newton's Second Law</h2>

      <Callout type="theorem" title="Newton's Second Law (Vector Form)">
        <p>
          The net force on a particle equals mass times acceleration:
        </p>
        <MathBlock>{`\\mathbf{F} = m\\mathbf{a}`}</MathBlock>
        <p>
          This is a vector equation—force and acceleration point in the same direction.
        </p>
      </Callout>

      <Callout type="example" title="Force on a Particle">
        <p>
          A 2 kg particle moves along <MathInline>{`\\mathbf{r}(t) = (\\cos t, \\sin t, t)`}</MathInline>.
          Find the force at <MathInline>{`t = 0`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\mathbf{v}(t) = (-\\sin t, \\cos t, 1)`}</MathBlock>
        <MathBlock>{`\\mathbf{a}(t) = (-\\cos t, -\\sin t, 0)`}</MathBlock>
        <MathBlock>{`\\mathbf{a}(0) = (-1, 0, 0)`}</MathBlock>
        <MathBlock>{`\\mathbf{F} = m\\mathbf{a} = 2(-1, 0, 0) = (-2, 0, 0) \\text{ N}`}</MathBlock>
      </Callout>

      <h2>Applications</h2>

      <Callout type="example" title="Range of a Projectile">
        <p>
          Find the range of a projectile launched at angle <MathInline>{`\\theta`}</MathInline> with
          initial speed <MathInline>{`v_0`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> The projectile lands when <MathInline>{`y = 0`}</MathInline>:</p>
        <MathBlock>{`v_0 t\\sin\\theta - \\frac{1}{2}gt^2 = 0`}</MathBlock>
        <MathBlock>{`t(v_0\\sin\\theta - \\frac{1}{2}gt) = 0`}</MathBlock>
        <p>Landing time: <MathInline>{`t = \\frac{2v_0\\sin\\theta}{g}`}</MathInline></p>
        <p>Range:</p>
        <MathBlock>{`R = v_0\\cos\\theta \\cdot \\frac{2v_0\\sin\\theta}{g} = \\frac{v_0^2 \\sin(2\\theta)}{g}`}</MathBlock>
        <p>
          Maximum range occurs at <MathInline>{`\\theta = 45°`}</MathInline>, giving <MathInline>{`R_{\\max} = v_0^2/g`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Centripetal Force">
        <p>
          A car of mass <MathInline>{`m`}</MathInline> rounds a curve of radius <MathInline>{`R`}</MathInline> at
          speed <MathInline>{`v`}</MathInline>. What friction force is required?
        </p>
        <p><strong>Solution:</strong></p>
        <p>The normal acceleration is <MathInline>{`a_N = v^2/R`}</MathInline>.</p>
        <p>The required centripetal force is:</p>
        <MathBlock>{`F = ma_N = \\frac{mv^2}{R}`}</MathBlock>
        <p>This force must be provided by friction between the tires and road.</p>
      </Callout>

      <h2>Kepler's Second Law</h2>

      <Callout type="theorem" title="Equal Areas in Equal Times">
        <p>
          For a particle moving under a central force (force directed toward a fixed point),
          the position vector sweeps out equal areas in equal times.
        </p>
        <p>Mathematically, the <strong>areal velocity</strong> is constant:</p>
        <MathBlock>{`\\frac{dA}{dt} = \\frac{1}{2}|\\mathbf{r} \\times \\mathbf{v}| = \\text{constant}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Conservation of Angular Momentum">
        <p>
          This is equivalent to conservation of angular momentum <MathInline>{`\\mathbf{L} = m\\mathbf{r} \\times \\mathbf{v}`}</MathInline>.
          For a central force, <MathInline>{`\\mathbf{F} \\parallel \\mathbf{r}`}</MathInline>, so:
        </p>
        <MathBlock>{`\\frac{d\\mathbf{L}}{dt} = \\mathbf{r} \\times \\mathbf{F} = \\mathbf{0}`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Formulas">
        <p><strong>Position:</strong> <MathInline>{`\\mathbf{r}(t)`}</MathInline></p>
        <p><strong>Velocity:</strong> <MathInline>{`\\mathbf{v}(t) = \\mathbf{r}'(t)`}</MathInline></p>
        <p><strong>Speed:</strong> <MathInline>{`v = |\\mathbf{v}|`}</MathInline></p>
        <p><strong>Acceleration:</strong> <MathInline>{`\\mathbf{a}(t) = \\mathbf{v}'(t) = \\mathbf{r}''(t)`}</MathInline></p>
        <p><strong>Decomposition:</strong> <MathInline>{`\\mathbf{a} = a_T\\mathbf{T} + a_N\\mathbf{N}`}</MathInline></p>
        <p><strong>Tangential:</strong> <MathInline>{`a_T = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{|\\mathbf{v}|} = \\frac{dv}{dt}`}</MathInline></p>
        <p><strong>Normal:</strong> <MathInline>{`a_N = \\kappa v^2 = \\frac{v^2}{R}`}</MathInline> (for circular arc of radius <MathInline>{`R`}</MathInline>)</p>
        <p><strong>Newton's law:</strong> <MathInline>{`\\mathbf{F} = m\\mathbf{a}`}</MathInline></p>
        <p><strong>Projectile range:</strong> <MathInline>{`R = \\frac{v_0^2\\sin(2\\theta)}{g}`}</MathInline></p>
      </Callout>
    </LessonLayout>
  );
}
