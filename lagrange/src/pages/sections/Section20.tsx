import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Lagrange Top</h2>

      <p className="mb-4">
        The heavy symmetric top, often called the Lagrange top, is one of the crown jewels of classical
        mechanics. This problem combines the abstract machinery of Lagrangian mechanics with rich physical
        phenomena: precession, nutation, and spin. The solution demonstrates the power of exploiting
        symmetries through cyclic coordinates and conservation laws.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Setup of the Problem</h3>

      <p className="mb-4">
        Consider a symmetric top (axially symmetric rigid body) with one point fixed at the origin. The
        center of mass is located at distance <InlineMath>{'R'}</InlineMath> along the symmetry axis from
        the fixed point. The top spins in a uniform gravitational field <InlineMath>{'\\mathbf{g} = -g\\mathbf{e}_z'}</InlineMath>.
      </p>

      <Definition title="Lagrange Top Configuration">
        <p className="mb-2">
          The configuration is specified by Euler angles <InlineMath>{'(\\psi, \\theta, \\varphi)'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside">
          <li><InlineMath>{'\\theta'}</InlineMath>: Angle between the symmetry axis and the vertical (nutation)</li>
          <li><InlineMath>{'\\psi'}</InlineMath>: Azimuthal angle of the symmetry axis (precession)</li>
          <li><InlineMath>{'\\varphi'}</InlineMath>: Rotation angle about the symmetry axis (spin)</li>
        </ul>
        <p className="mt-2">
          Principal moments of inertia about the fixed point: <InlineMath>{'I_1 = I_2'}</InlineMath> (transverse),
          <InlineMath>{'I_3'}</InlineMath> (about symmetry axis).
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Lagrangian</h3>

      <Theorem
        title="Lagrangian of the Heavy Top"
        proof={
          <>
            <p className="mb-2">
              <strong>Kinetic energy:</strong> Using the angular velocity formulas from Section 19:
            </p>
            <MathBlock>{'T = \\frac{1}{2}I_1(\\dot{\\theta}^2 + \\dot{\\psi}^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot{\\psi}\\cos\\theta + \\dot{\\varphi})^2'}</MathBlock>
            <p className="mb-2">
              <strong>Potential energy:</strong> The center of mass is at height <InlineMath>{'z = R\\cos\\theta'}</InlineMath>:
            </p>
            <MathBlock>{'V = MgR\\cos\\theta'}</MathBlock>
            <p>
              The Lagrangian is <InlineMath>{'L = T - V'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The Lagrangian for a heavy symmetric top is:
        </p>
        <MathBlock>{'L = \\frac{1}{2}I_1(\\dot{\\theta}^2 + \\dot{\\psi}^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot{\\psi}\\cos\\theta + \\dot{\\varphi})^2 - MgR\\cos\\theta'}</MathBlock>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Conserved Quantities</h3>

      <p className="mb-4">
        The angles <InlineMath>{'\\psi'}</InlineMath> and <InlineMath>{'\\varphi'}</InlineMath> are cyclic
        (do not appear in <InlineMath>{'L'}</InlineMath>), leading to two conserved momenta:
      </p>

      <Definition title="Conserved Momenta">
        <MathBlock>{'p_\\psi = \\frac{\\partial L}{\\partial \\dot{\\psi}} = I_1\\dot{\\psi}\\sin^2\\theta + I_3(\\dot{\\psi}\\cos\\theta + \\dot{\\varphi})\\cos\\theta = L_z'}</MathBlock>
        <MathBlock>{'p_\\varphi = \\frac{\\partial L}{\\partial \\dot{\\varphi}} = I_3(\\dot{\\psi}\\cos\\theta + \\dot{\\varphi}) = L_3'}</MathBlock>
        <p className="mt-2">
          <InlineMath>{'L_z'}</InlineMath> is the vertical component of angular momentum (conserved due to
          rotational symmetry about the vertical). <InlineMath>{'L_3'}</InlineMath> is the component along
          the symmetry axis (conserved due to axial symmetry of the body).
        </p>
      </Definition>

      <p className="mb-4">
        Since energy is also conserved (time-independent Lagrangian):
      </p>

      <MathBlock>{'E = \\frac{1}{2}I_1(\\dot{\\theta}^2 + \\dot{\\psi}^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot{\\psi}\\cos\\theta + \\dot{\\varphi})^2 + MgR\\cos\\theta'}</MathBlock>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Reduction to One Degree of Freedom</h3>

      <Theorem
        title="Effective Potential"
        proof={
          <>
            <p className="mb-2">
              From the conserved momenta, solve for <InlineMath>{'\\dot{\\psi}'}</InlineMath> and <InlineMath>{'\\dot{\\varphi}'}</InlineMath>:
            </p>
            <MathBlock>{'\\dot{\\psi} = \\frac{L_z - L_3\\cos\\theta}{I_1\\sin^2\\theta}'}</MathBlock>
            <MathBlock>{'\\dot{\\varphi} = \\frac{L_3}{I_3} - \\dot{\\psi}\\cos\\theta'}</MathBlock>
            <p className="mb-2">
              Substitute into the energy:
            </p>
            <MathBlock>{'E = \\frac{1}{2}I_1\\dot{\\theta}^2 + \\frac{(L_z - L_3\\cos\\theta)^2}{2I_1\\sin^2\\theta} + \\frac{L_3^2}{2I_3} + MgR\\cos\\theta'}</MathBlock>
            <p>
              The last term is constant, so we define <InlineMath>{'E\' = E - L_3^2/(2I_3)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The motion in <InlineMath>{'\\theta'}</InlineMath> is governed by:
        </p>
        <MathBlock>{'E\' = \\frac{1}{2}I_1\\dot{\\theta}^2 + V_{\\text{eff}}(\\theta)'}</MathBlock>
        <p className="mt-2">
          with effective potential:
        </p>
        <MathBlock>{'V_{\\text{eff}}(\\theta) = \\frac{(L_z - L_3\\cos\\theta)^2}{2I_1\\sin^2\\theta} + MgR\\cos\\theta'}</MathBlock>
      </Theorem>

      <p className="mb-4">
        The problem reduces to one-dimensional motion in the effective potential. The nutation angle
        <InlineMath>{'\\theta'}</InlineMath> oscillates between turning points where
        <InlineMath>{'E\' = V_{\\text{eff}}(\\theta)'}</InlineMath>.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of Motion</h3>

      <Definition title="Precession, Nutation, and Spin">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Precession:</strong> The symmetry axis traces a cone about the vertical with
            rate <InlineMath>{'\\dot{\\psi}'}</InlineMath>
          </li>
          <li>
            <strong>Nutation:</strong> The inclination angle <InlineMath>{'\\theta'}</InlineMath> oscillates
            between <InlineMath>{'\\theta_{\\min}'}</InlineMath> and <InlineMath>{'\\theta_{\\max}'}</InlineMath>
          </li>
          <li>
            <strong>Spin:</strong> The body rotates about its symmetry axis with rate <InlineMath>{'\\dot{\\varphi}'}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Example title="Steady Precession">
        <p className="mb-2">
          Steady precession occurs when <InlineMath>{'\\theta = \\theta_0 = \\text{const}'}</InlineMath>.
          This requires <InlineMath>{'\\dot{\\theta} = 0'}</InlineMath> and <InlineMath>{'V_{\\text{eff}}\'(\\theta_0) = 0'}</InlineMath>.
        </p>
        <p className="mb-2">
          For a fast-spinning top (<InlineMath>{'L_3'}</InlineMath> large), the precession rate is approximately:
        </p>
        <MathBlock>{'\\dot{\\psi} \\approx \\frac{MgR}{L_3\\cos\\theta_0}'}</MathBlock>
        <p className="mb-2">
          This is the gyroscopic approximation: the precession rate is inversely proportional to the spin.
        </p>
        <p>
          A faster-spinning top precesses more slowly!
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Analysis of the Effective Potential</h3>

      <p className="mb-4">
        The shape of <InlineMath>{'V_{\\text{eff}}(\\theta)'}</InlineMath> determines the qualitative behavior:
      </p>

      <Theorem
        title="Nutation Bounds"
        proof={
          <>
            <p className="mb-2">
              The effective potential has the form:
            </p>
            <MathBlock>{'V_{\\text{eff}} = \\frac{(a - b\\cos\\theta)^2}{2I_1\\sin^2\\theta} + c\\cos\\theta'}</MathBlock>
            <p className="mb-2">
              where <InlineMath>{'a = L_z'}</InlineMath>, <InlineMath>{'b = L_3'}</InlineMath>, <InlineMath>{'c = MgR'}</InlineMath>.
            </p>
            <p className="mb-2">
              The centrifugal barrier <InlineMath>{'\\propto 1/\\sin^2\\theta'}</InlineMath> ensures
              <InlineMath>{'V_{\\text{eff}} \\to \\infty'}</InlineMath> as <InlineMath>{'\\theta \\to 0'}</InlineMath> or <InlineMath>{'\\pi'}</InlineMath>
              (unless <InlineMath>{'L_z = \\pm L_3'}</InlineMath>).
            </p>
            <p>
              The minimum of <InlineMath>{'V_{\\text{eff}}'}</InlineMath> gives the steady precession angle.
              Energy above this minimum allows oscillation (nutation) between two angles.
            </p>
          </>
        }
      >
        <p>
          For given <InlineMath>{'L_z'}</InlineMath> and <InlineMath>{'L_3'}</InlineMath>, the nutation angle
          is bounded: <InlineMath>{'\\theta_{\\min} \\leq \\theta \\leq \\theta_{\\max}'}</InlineMath>.
        </p>
        <p className="mt-2">
          The bounds are determined by the roots of <InlineMath>{'E\' = V_{\\text{eff}}(\\theta)'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Sleeping Top">
        <p className="mb-2">
          A top spinning vertically (<InlineMath>{'\\theta = 0'}</InlineMath>) with <InlineMath>{'L_z = L_3'}</InlineMath>
          is called a "sleeping top."
        </p>
        <p className="mb-2">
          This is an equilibrium of the effective potential. It is stable if:
        </p>
        <MathBlock>{'L_3^2 > 4I_1MgR'}</MathBlock>
        <p className="mb-2">
          which requires the spin to exceed a critical value:
        </p>
        <MathBlock>{'\\Omega_3 > \\sqrt{\\frac{4I_1MgR}{I_3^2}}'}</MathBlock>
        <p>
          Below this critical spin, the vertical position is unstable and the top will fall and begin to
          nutate and precess.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Nutation Patterns</h3>

      <p className="mb-4">
        The path traced by the tip of the symmetry axis (on a sphere centered at the fixed point) shows
        characteristic patterns depending on the sign of <InlineMath>{'\\dot{\\psi}'}</InlineMath> at the
        turning points:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Unidirectional precession:</strong> <InlineMath>{'\\dot{\\psi} > 0'}</InlineMath> always.
          The tip traces a wavy path, always moving in the same azimuthal direction.
        </li>
        <li>
          <strong>Looping:</strong> <InlineMath>{'\\dot{\\psi}'}</InlineMath> changes sign at turning points.
          The tip traces loops, momentarily moving backward.
        </li>
        <li>
          <strong>Cuspidal:</strong> <InlineMath>{'\\dot{\\psi} = 0'}</InlineMath> at <InlineMath>{'\\theta = \\theta_{\\max}'}</InlineMath>.
          The tip traces a path with cusps pointing upward.
        </li>
      </ul>

      <Callout type="info" title="Historical Note">
        <p>
          The complete analytical solution of the heavy symmetric top was given by Lagrange in his
          "Mecanique Analytique" (1788). The solution involves elliptic integrals and elliptic functions,
          similar to the solution of the simple pendulum. This problem showcases the power of Lagrangian
          mechanics: exploiting symmetries reduces a 6-degree-of-freedom problem to quadrature.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Gyroscopic Limit</h3>

      <Theorem
        title="Fast Top Approximation"
        proof={
          <>
            <p className="mb-2">
              When <InlineMath>{'L_3 \\gg \\sqrt{I_1MgR}'}</InlineMath>, the spin dominates gravity.
            </p>
            <p className="mb-2">
              The precession rate becomes:
            </p>
            <MathBlock>{'\\dot{\\psi} \\approx \\frac{MgR}{L_3}'}</MathBlock>
            <p className="mb-2">
              independent of <InlineMath>{'\\theta'}</InlineMath> (to leading order).
            </p>
            <p>
              Nutation becomes rapid small-amplitude oscillation about a mean inclination.
            </p>
          </>
        }
      >
        <p>
          For a rapidly spinning top, the motion simplifies:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Precession rate: <InlineMath>{'\\dot{\\psi} \\approx MgR/L_3'}</InlineMath></li>
          <li>Nutation: Small, fast oscillations with frequency <InlineMath>{'\\omega_n \\approx L_3/I_1'}</InlineMath></li>
          <li>The spin axis approximately follows the "torque precession" direction</li>
        </ul>
      </Theorem>

      <Example title="Gyroscope Applications">
        <p className="mb-2">
          The gyroscopic effect of spinning tops has numerous applications:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Navigation:</strong> Gyrocompasses maintain orientation without magnetic fields</li>
          <li><strong>Stabilization:</strong> Spacecraft use reaction wheels (spinning tops)</li>
          <li><strong>Sensing:</strong> Ring laser gyroscopes detect rotation via the Sagnac effect</li>
          <li><strong>Toys:</strong> Tops, yo-yos, and Euler's disk demonstrate gyroscopic stability</li>
        </ul>
      </Example>

      <Callout type="success" title="Summary">
        <p>
          The Lagrange top exemplifies the analytical power of Lagrangian mechanics. By identifying cyclic
          coordinates and conserved quantities, a seemingly complex 3-degree-of-freedom problem reduces to
          one-dimensional motion in an effective potential. The interplay of spin, precession, and nutation
          demonstrates fundamental principles that apply throughout physics, from atomic nuclei to galaxies.
        </p>
      </Callout>
    </LessonLayout>
  );
}
