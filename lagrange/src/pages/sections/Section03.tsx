import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Holonomic Constraints</h2>

      <p className="mb-4">
        Real mechanical systems are rarely free to move arbitrarily in space. Constraints restrict
        the possible configurations and motions. The Lagrangian formalism handles constraints
        elegantly by reducing the problem to the essential degrees of freedom. Understanding the
        nature of constraints is fundamental to applying Lagrangian mechanics correctly.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Types of Constraints</h3>

      <Definition title="Holonomic Constraint">
        <p>
          A <strong>holonomic constraint</strong> is a restriction on the configuration of a system
          that can be expressed as an equation involving only the positions and possibly time:
        </p>
        <MathBlock>{`F(M_1, M_2, \\ldots, M_N, t) = 0`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`M_i`}</InlineMath> denotes the position of the <InlineMath>{`i`}</InlineMath>th
          particle. Multiple holonomic constraints can be written as <InlineMath>{`F_1 = 0, F_2 = 0, \\ldots, F_k = 0`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Examples of Holonomic Constraints">
        <ul className="list-disc list-inside mb-3 text-dark-300 space-y-2">
          <li>
            <strong>Rigid rod:</strong> <InlineMath>{`|\\mathbf{r}_1 - \\mathbf{r}_2|^2 = \\ell^2`}</InlineMath> (constant
            distance between two particles)
          </li>
          <li>
            <strong>Particle on a sphere:</strong> <InlineMath>{`x^2 + y^2 + z^2 = R^2`}</InlineMath>
          </li>
          <li>
            <strong>Particle on a plane:</strong> <InlineMath>{`ax + by + cz = d`}</InlineMath>
          </li>
          <li>
            <strong>Rolling without slipping (integrated):</strong> <InlineMath>{`x = R\\theta`}</InlineMath> for a wheel
          </li>
        </ul>
      </Example>

      <Definition title="Non-Holonomic Constraint">
        <p>
          A <strong>non-holonomic constraint</strong> involves velocities in a way that cannot be
          integrated to a constraint on positions alone:
        </p>
        <MathBlock>{`\\sum_i A_i(q, t) \\dot{q}^i + B(t) = 0`}</MathBlock>
        <p className="mt-2">
          that is <em>not</em> integrable. The classic example is a rolling constraint on a rough
          surface where the direction of rolling is not fixed.
        </p>
      </Definition>

      <Example title="Non-Holonomic Rolling">
        <p className="mb-3">
          A sphere rolling without slipping on a plane has constraints:
        </p>
        <MathBlock>{`\\dot{x} = R\\dot{\\phi}\\cos\\theta, \\quad \\dot{y} = R\\dot{\\phi}\\sin\\theta`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\theta`}</InlineMath> is the heading angle. These cannot be integrated
          to give <InlineMath>{`x`}</InlineMath> and <InlineMath>{`y`}</InlineMath> as functions
          of <InlineMath>{`\\phi`}</InlineMath> and <InlineMath>{`\\theta`}</InlineMath> alone.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Configuration Space</h3>

      <p className="mb-4">
        Holonomic constraints define a submanifold of the full configuration space. The dimension
        of this submanifold equals the number of degrees of freedom.
      </p>

      <Theorem title="Degrees of Freedom">
        <p className="mb-2">
          For a system of <InlineMath>{`N`}</InlineMath> particles in 3D with <InlineMath>{`k`}</InlineMath> independent
          holonomic constraints, the number of degrees of freedom is:
        </p>
        <MathBlock>{`n = 3N - k`}</MathBlock>
        <p className="mt-2">
          The configuration space <InlineMath>{`Q`}</InlineMath> is an <InlineMath>{`n`}</InlineMath>-dimensional
          manifold, and we need <InlineMath>{`n`}</InlineMath> generalized coordinates to describe it.
        </p>
      </Theorem>

      <Example title="Double Pendulum">
        <p className="mb-3">
          Two masses connected by rigid rods, swinging in a plane:
        </p>
        <ul className="list-disc list-inside mb-3 text-dark-300 space-y-1">
          <li>2 particles: <InlineMath>{`3 \\times 2 = 6`}</InlineMath> coordinates initially</li>
          <li>Constraint to plane: 2 constraints (<InlineMath>{`z_1 = 0, z_2 = 0`}</InlineMath>)</li>
          <li>Fixed rod lengths: 2 constraints (<InlineMath>{`|\\mathbf{r}_1| = \\ell_1`}</InlineMath>, <InlineMath>{`|\\mathbf{r}_2 - \\mathbf{r}_1| = \\ell_2`}</InlineMath>)</li>
          <li>Degrees of freedom: <InlineMath>{`6 - 4 = 2`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          Natural generalized coordinates are the two angles <InlineMath>{`\\theta_1, \\theta_2`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Eliminating Constraints</h3>

      <p className="mb-4">
        For holonomic constraints, we can use the constraints to express some coordinates in terms
        of others, effectively eliminating the constraints from the problem.
      </p>

      <Definition title="Constraint Surface">
        <p>
          The set of all configurations satisfying the holonomic constraints forms the
          <strong>constraint surface</strong> or <strong>constraint manifold</strong>:
        </p>
        <MathBlock>{`\\Sigma = \\{\\mathbf{r} : F_1(\\mathbf{r}) = 0, \\ldots, F_k(\\mathbf{r}) = 0\\}`}</MathBlock>
        <p className="mt-2">
          The generalized coordinates <InlineMath>{`q^1, \\ldots, q^n`}</InlineMath> parameterize this
          surface.
        </p>
      </Definition>

      <Theorem title="Reduction by Constraints">
        <p className="mb-2">
          For holonomic constraints, the Lagrangian can be written entirely in terms of the
          generalized coordinates without explicit reference to the constraints:
        </p>
        <MathBlock>{`L(q, \\dot{q}, t) = T(q, \\dot{q}, t) - V(q, t)`}</MathBlock>
        <p className="mt-2">
          The constraint forces do no virtual work and need not appear in the Euler-Lagrange equations.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lagrange Multipliers</h3>

      <p className="mb-4">
        Sometimes it is advantageous to keep the original coordinates and handle constraints
        using Lagrange multipliers. This approach also allows us to compute the constraint forces.
      </p>

      <Definition title="Lagrange Multiplier Method">
        <p>
          For a system with Lagrangian <InlineMath>{`L`}</InlineMath> subject to constraints <InlineMath>{`F_\\alpha = 0`}</InlineMath>,
          we form the augmented Lagrangian:
        </p>
        <MathBlock>{`\\bar{L} = L + \\sum_{\\alpha=1}^{k} \\lambda_\\alpha F_\\alpha`}</MathBlock>
        <p className="mt-2">
          The equations of motion become:
        </p>
        <MathBlock>{`\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}^i}\\right) - \\frac{\\partial L}{\\partial q^i} = \\sum_{\\alpha} \\lambda_\\alpha \\frac{\\partial F_\\alpha}{\\partial q^i}`}</MathBlock>
        <p className="mt-2">
          along with the constraint equations <InlineMath>{`F_\\alpha = 0`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Pendulum with Tension">
        <p className="mb-3">
          For a simple pendulum, we can use Cartesian coordinates <InlineMath>{`(x, y)`}</InlineMath>
          with constraint <InlineMath>{`F = x^2 + y^2 - \\ell^2 = 0`}</InlineMath>.
        </p>
        <p className="mb-2">
          The augmented Lagrangian is:
        </p>
        <MathBlock>{`\\bar{L} = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2) - mgy + \\lambda(x^2 + y^2 - \\ell^2)`}</MathBlock>
        <p className="mb-2">
          The Euler-Lagrange equations give:
        </p>
        <MathBlock>{`m\\ddot{x} = 2\\lambda x, \\quad m\\ddot{y} = -mg + 2\\lambda y`}</MathBlock>
        <p className="mt-2">
          Here <InlineMath>{`2\\lambda\\sqrt{x^2 + y^2} = 2\\lambda\\ell`}</InlineMath> is the tension
          in the string.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Time-Dependent Constraints</h3>

      <Definition title="Scleronomic vs. Rheonomic">
        <p>
          Constraints are classified by their time dependence:
        </p>
        <ul className="list-disc list-inside mt-2 text-dark-300 space-y-1">
          <li><strong>Scleronomic</strong> (time-independent): <InlineMath>{`F(q) = 0`}</InlineMath></li>
          <li><strong>Rheonomic</strong> (time-dependent): <InlineMath>{`F(q, t) = 0`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          Rheonomic constraints can do work on the system, potentially adding or removing energy.
        </p>
      </Definition>

      <Example title="Bead on Rotating Hoop">
        <p className="mb-3">
          A bead slides on a circular hoop that rotates with angular velocity <InlineMath>{`\\omega`}</InlineMath>.
          In the lab frame, the constraint is:
        </p>
        <MathBlock>{`(x - R\\cos(\\omega t))^2 + (y - R\\sin(\\omega t))^2 = r^2`}</MathBlock>
        <p className="mt-2">
          This is a rheonomic constraint. The rotating hoop can transfer energy to or from the bead.
        </p>
      </Example>

      <Callout type="info" title="Virtual Work and Constraint Forces">
        <p>
          The key property that makes the Lagrangian formalism work is that constraint forces
          (for ideal constraints) do no virtual work. This means the constraint forces are always
          perpendicular to the constraint surface, and we can ignore them when working with
          generalized coordinates that respect the constraints.
        </p>
      </Callout>

      <Callout type="success" title="Key Insight">
        <p>
          Holonomic constraints reduce the configuration space to a lower-dimensional manifold.
          The Lagrangian formalism automatically accounts for this reduction, allowing us to work
          with only the true degrees of freedom. This is far simpler than the Newtonian approach
          of solving for constraint forces and then eliminating them.
        </p>
      </Callout>
    </LessonLayout>
  );
}
