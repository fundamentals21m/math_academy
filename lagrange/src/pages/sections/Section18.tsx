import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Poinsot's Construction: Torque-Free Rotation</h2>

      <p className="mb-4">
        Louis Poinsot developed a beautiful geometric interpretation of torque-free rigid body motion in 1834.
        His construction provides deep insight into the dynamics by visualizing the motion as an ellipsoid
        rolling on a fixed plane. This section explores Poinsot's method and introduces the concepts of
        polhode and herpolhode.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Inertia Ellipsoid</h3>

      <Definition title="Inertia Ellipsoid">
        <p className="mb-2">
          The inertia ellipsoid is defined by the surface in angular velocity space:
        </p>
        <MathBlock>{'\\boldsymbol{\\Omega} \\cdot \\mathbf{I} \\boldsymbol{\\Omega} = 2T = \\text{const}'}</MathBlock>
        <p className="mt-2">
          In principal axes, this becomes:
        </p>
        <MathBlock>{'I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2 = 2T'}</MathBlock>
        <p className="mt-2">
          This is an ellipsoid with semi-axes <InlineMath>{'\\sqrt{2T/I_i}'}</InlineMath> along the principal directions.
        </p>
      </Definition>

      <p className="mb-4">
        Since kinetic energy is conserved in torque-free motion, the angular velocity
        <InlineMath>{'\\boldsymbol{\\Omega}'}</InlineMath> must lie on this ellipsoid at all times.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Invariable Plane</h3>

      <p className="mb-4">
        Angular momentum <InlineMath>{'\\mathbf{L}'}</InlineMath> is conserved in the space frame. Consider
        the projection of <InlineMath>{'\\boldsymbol{\\Omega}'}</InlineMath> onto <InlineMath>{'\\mathbf{L}'}</InlineMath>:
      </p>

      <MathBlock>{'\\boldsymbol{\\Omega} \\cdot \\mathbf{L} = \\boldsymbol{\\Omega} \\cdot \\mathbf{I}\\boldsymbol{\\Omega} = 2T'}</MathBlock>

      <Definition title="Invariable Plane">
        <p className="mb-2">
          The invariable plane is the plane perpendicular to the angular momentum vector at distance:
        </p>
        <MathBlock>{'d = \\frac{2T}{|\\mathbf{L}|}'}</MathBlock>
        <p className="mt-2">
          from the origin. Since both <InlineMath>{'T'}</InlineMath> and <InlineMath>{'|\\mathbf{L}|'}</InlineMath> are
          conserved, this plane is fixed in space.
        </p>
      </Definition>

      <Theorem
        title="Poinsot's Construction"
        proof={
          <>
            <p className="mb-2">
              The gradient of <InlineMath>{'\\boldsymbol{\\Omega} \\cdot \\mathbf{I}\\boldsymbol{\\Omega}'}</InlineMath> is
              <InlineMath>{'2\\mathbf{I}\\boldsymbol{\\Omega} = 2\\mathbf{L}'}</InlineMath>.
            </p>
            <p className="mb-2">
              Thus the normal to the inertia ellipsoid at point <InlineMath>{'\\boldsymbol{\\Omega}'}</InlineMath> is
              parallel to <InlineMath>{'\\mathbf{L}'}</InlineMath>.
            </p>
            <p className="mb-2">
              Since <InlineMath>{'\\boldsymbol{\\Omega} \\cdot \\mathbf{L} = 2T'}</InlineMath>, the ellipsoid
              touches the invariable plane (distance <InlineMath>{'2T/|\\mathbf{L}|'}</InlineMath> from origin).
            </p>
            <p>
              The contact point is precisely where <InlineMath>{'\\boldsymbol{\\Omega}'}</InlineMath> intersects
              the ellipsoid surface.
            </p>
          </>
        }
      >
        <p>
          In torque-free motion, the inertia ellipsoid rolls without slipping on the invariable plane.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>The ellipsoid is centered at the origin and rotates with the body</li>
          <li>The invariable plane is fixed in space, perpendicular to <InlineMath>{'\\mathbf{L}'}</InlineMath></li>
          <li>The contact point traces out the polhode (on the ellipsoid) and herpolhode (on the plane)</li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Polhode and Herpolhode</h3>

      <Definition title="Polhode">
        <p className="mb-2">
          The polhode is the curve traced by the angular velocity vector on the inertia ellipsoid
          (equivalently, in the body frame). It is the intersection of:
        </p>
        <MathBlock>{'I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2 = 2T'}</MathBlock>
        <MathBlock>{'I_1^2\\Omega_1^2 + I_2^2\\Omega_2^2 + I_3^2\\Omega_3^2 = L^2'}</MathBlock>
        <p className="mt-2">
          These are two ellipsoids; their intersection is generally a closed curve.
        </p>
      </Definition>

      <Definition title="Herpolhode">
        <p className="mb-2">
          The herpolhode is the curve traced by the contact point on the invariable plane
          (in the space frame). It is the path of the instantaneous angular velocity in space.
        </p>
        <p>
          Poinsot proved that the herpolhode lies between two concentric circles and is a smooth,
          non-self-intersecting curve.
        </p>
      </Definition>

      <Example title="Symmetric Top">
        <p className="mb-2">
          For a symmetric top (<InlineMath>{'I_1 = I_2'}</InlineMath>), both ellipsoids become surfaces of revolution.
          Their intersection is a circle:
        </p>
        <p className="mb-2">
          <strong>Polhode:</strong> A circle around the symmetry axis at fixed <InlineMath>{'|\\Omega_1^2 + \\Omega_2^2|'}</InlineMath>
        </p>
        <p className="mb-2">
          <strong>Herpolhode:</strong> A circle around <InlineMath>{'\\mathbf{L}'}</InlineMath>
        </p>
        <p>
          The motion is uniform precession of the symmetry axis about the fixed angular momentum direction.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Asymmetric Body</h3>

      <p className="mb-4">
        For a body with three distinct principal moments <InlineMath>{'I_1 < I_2 < I_3'}</InlineMath>,
        the polhode structure depends on the ratio <InlineMath>{'T/L^2'}</InlineMath>:
      </p>

      <Theorem
        title="Polhode Classification"
        proof={
          <>
            <p className="mb-2">
              The two conserved quantities define the polhode as the intersection of ellipsoids.
              Define <InlineMath>{'k = 2IT/L^2'}</InlineMath> where <InlineMath>{'I'}</InlineMath> is some reference moment.
            </p>
            <p className="mb-2">
              The nature of the intersection depends on <InlineMath>{'k'}</InlineMath>:
            </p>
            <ul className="list-disc list-inside">
              <li>When <InlineMath>{'k \\approx 1/I_3'}</InlineMath>: polhode encircles the <InlineMath>{'\\Omega_3'}</InlineMath> axis</li>
              <li>When <InlineMath>{'k \\approx 1/I_1'}</InlineMath>: polhode encircles the <InlineMath>{'\\Omega_1'}</InlineMath> axis</li>
              <li>When <InlineMath>{'k \\approx 1/I_2'}</InlineMath>: polhode passes near the <InlineMath>{'\\Omega_2'}</InlineMath> axis (separatrix)</li>
            </ul>
          </>
        }
      >
        <p>
          The polhodes for an asymmetric body fall into three families:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Type 1:</strong> Small closed curves around the <InlineMath>{'\\Omega_3'}</InlineMath> axis (maximum moment)</li>
          <li><strong>Type 2:</strong> Small closed curves around the <InlineMath>{'\\Omega_1'}</InlineMath> axis (minimum moment)</li>
          <li><strong>Separatrix:</strong> Figure-eight curves passing through the <InlineMath>{'\\pm\\Omega_2'}</InlineMath> directions</li>
        </ul>
      </Theorem>

      <p className="mb-4">
        The separatrix corresponds to rotation about the intermediate axis. Trajectories starting near the
        separatrix spend a long time near the unstable equilibrium before departing, explaining the apparent
        stability followed by sudden flipping in the tennis racket effect.
      </p>

      <Callout type="info" title="Phase Portrait">
        <p>
          The family of polhodes forms a phase portrait on the inertia ellipsoid. This is one of the
          earliest examples of qualitative dynamics and phase space analysis, preceding Poincare's work
          by several decades.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Analytic Solution</h3>

      <p className="mb-4">
        For the general asymmetric case, Euler's equations can be integrated exactly in terms of Jacobi
        elliptic functions. The solution involves:
      </p>

      <MathBlock>{'\\Omega_1(t) = \\Omega_{1,\\max} \\operatorname{cn}(\\Omega_f t, m)'}</MathBlock>
      <MathBlock>{'\\Omega_2(t) = \\Omega_{2,\\max} \\operatorname{sn}(\\Omega_f t, m)'}</MathBlock>
      <MathBlock>{'\\Omega_3(t) = \\Omega_{3,\\max} \\operatorname{dn}(\\Omega_f t, m)'}</MathBlock>

      <p className="mb-4">
        where <InlineMath>{'\\operatorname{sn}, \\operatorname{cn}, \\operatorname{dn}'}</InlineMath> are
        Jacobi elliptic functions and <InlineMath>{'m'}</InlineMath> is the elliptic modulus determined
        by the initial conditions and principal moments.
      </p>

      <Example title="Period of Polhode Oscillation">
        <p className="mb-2">
          The angular velocity oscillates with period:
        </p>
        <MathBlock>{'T_{\\text{polhode}} = \\frac{4K(m)}{\\Omega_f}'}</MathBlock>
        <p className="mb-2">
          where <InlineMath>{'K(m)'}</InlineMath> is the complete elliptic integral of the first kind.
        </p>
        <p className="mb-2">
          Near a stable axis: <InlineMath>{'m \\to 0'}</InlineMath>, <InlineMath>{'K(m) \\to \\pi/2'}</InlineMath>, simple harmonic oscillation
        </p>
        <p>
          Near the separatrix: <InlineMath>{'m \\to 1'}</InlineMath>, <InlineMath>{'K(m) \\to \\infty'}</InlineMath>, infinite period
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Geometric Interpretation</h3>

      <p className="mb-4">
        Poinsot's construction reveals several geometric facts:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          The instantaneous axis of rotation lies along <InlineMath>{'\\boldsymbol{\\Omega}'}</InlineMath>,
          which is the contact point between the ellipsoid and plane.
        </li>
        <li>
          The angular momentum <InlineMath>{'\\mathbf{L}'}</InlineMath> is the normal to the ellipsoid at
          the contact point.
        </li>
        <li>
          As the body rotates, the ellipsoid rolls on the plane, and the contact point traces the polhode
          on the ellipsoid and the herpolhode on the plane.
        </li>
        <li>
          The rolling is without slipping because the contact point is the instantaneous center of rotation.
        </li>
      </ul>

      <Callout type="success" title="Physical Insight">
        <p>
          Poinsot's construction shows that torque-free rotation can be visualized as an ellipsoid
          rolling on a plane. The stability of rotation about principal axes corresponds to the
          ellipsoid rolling around "hills" (stable) or "saddle points" (unstable) on its surface.
        </p>
      </Callout>

      <Example title="Spacecraft Attitude Dynamics">
        <p className="mb-2">
          A tumbling spacecraft in orbit experiences torque-free motion. Understanding the polhode
          helps predict:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>How the spacecraft orientation changes over time</li>
          <li>Which rotation modes are stable for attitude control</li>
          <li>When spin-stabilization is possible</li>
        </ul>
        <p>
          Spacecraft are often designed with <InlineMath>{'I_3 > I_1 \\approx I_2'}</InlineMath> so that
          rotation about the symmetry axis is stable, enabling spin-stabilization.
        </p>
      </Example>
    </LessonLayout>
  );
}
