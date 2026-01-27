import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Canonical Equations</h2>

      <p className="mb-4">
        While the Lagrangian formulation uses positions and velocities as variables, an alternative
        formulation uses positions and momenta. This Hamiltonian formulation, developed by William
        Rowan Hamilton, provides deep insights into the structure of mechanics and forms the bridge
        to quantum mechanics. The transformation from Lagrangian to Hamiltonian mechanics uses the
        powerful mathematical tool of the Legendre transform.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Legendre Transform</h3>

      <p className="mb-4">
        The Legendre transform converts a function of one variable into a function of its derivative,
        trading convexity for useful properties.
      </p>

      <Definition title="Legendre Transform">
        <p>
          Given a convex function <InlineMath>{`f(x)`}</InlineMath>, its <strong>Legendre transform</strong>
          is the function <InlineMath>{`g(p)`}</InlineMath> defined by:
        </p>
        <MathBlock>{`g(p) = \\sup_x \\{px - f(x)\\} = p x^*(p) - f(x^*(p))`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`x^*(p)`}</InlineMath> is the value of <InlineMath>{`x`}</InlineMath> that
          maximizes <InlineMath>{`px - f(x)`}</InlineMath>, determined by <InlineMath>{`p = f'(x)`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Legendre Transform of Quadratic">
        <p className="mb-3">
          For <InlineMath>{`f(x) = \\frac{1}{2}ax^2`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mb-3 text-dark-300 space-y-1">
          <li>The condition <InlineMath>{`p = f'(x) = ax`}</InlineMath> gives <InlineMath>{`x = p/a`}</InlineMath></li>
          <li>The transform is <InlineMath>{`g(p) = p \\cdot \\frac{p}{a} - \\frac{1}{2}a\\left(\\frac{p}{a}\\right)^2 = \\frac{p^2}{2a}`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          The Legendre transform of a quadratic is also a quadratic, with the coefficient inverted.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Generalized Momentum</h3>

      <Definition title="Canonical Momentum">
        <p>
          The <strong>canonical momentum</strong> (or generalized momentum) conjugate to the
          coordinate <InlineMath>{`q^i`}</InlineMath> is defined as:
        </p>
        <MathBlock>{`p_i = \\frac{\\partial L}{\\partial \\dot{q}^i}`}</MathBlock>
        <p className="mt-2">
          The subscript on <InlineMath>{`p_i`}</InlineMath> indicates it is a covariant quantity
          (transforms oppositely to <InlineMath>{`q^i`}</InlineMath>). The pair <InlineMath>{`(q^i, p_i)`}</InlineMath>
          are called <strong>canonical variables</strong> or <strong>conjugate variables</strong>.
        </p>
      </Definition>

      <Example title="Momenta for Standard Systems">
        <p className="mb-3">
          For a particle in Cartesian coordinates with <InlineMath>{`L = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2 + \\dot{z}^2) - V`}</InlineMath>:
        </p>
        <MathBlock>{`p_x = m\\dot{x}, \\quad p_y = m\\dot{y}, \\quad p_z = m\\dot{z}`}</MathBlock>
        <p className="mb-2">
          For a pendulum with <InlineMath>{`L = \\frac{1}{2}m\\ell^2\\dot{\\theta}^2 + mg\\ell\\cos\\theta`}</InlineMath>:
        </p>
        <MathBlock>{`p_\\theta = m\\ell^2\\dot{\\theta}`}</MathBlock>
        <p className="mt-2">
          which is the angular momentum about the pivot.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Hamiltonian</h3>

      <Definition title="Hamiltonian Function">
        <p>
          The <strong>Hamiltonian</strong> is the Legendre transform of the Lagrangian with respect
          to the velocities:
        </p>
        <MathBlock>{`H(q, p, t) = \\sum_{i=1}^{n} p_i \\dot{q}^i - L(q, \\dot{q}, t)`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\dot{q}^i`}</InlineMath> on the right must be expressed in terms
          of <InlineMath>{`q`}</InlineMath> and <InlineMath>{`p`}</InlineMath> by inverting the
          relations <InlineMath>{`p_i = \\partial L/\\partial \\dot{q}^i`}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Hamiltonian Equals Total Energy">
        <p className="mb-2">
          For systems where:
        </p>
        <ol className="list-decimal list-inside mb-2 text-dark-300 space-y-1">
          <li>The constraints are scleronomic (time-independent)</li>
          <li>The potential is velocity-independent</li>
        </ol>
        <p className="mb-2">
          the Hamiltonian equals the total mechanical energy:
        </p>
        <MathBlock>{`H = T + V = E`}</MathBlock>
      </Theorem>

      <Example title="Hamiltonian for Simple Systems">
        <p className="mb-3">
          For a harmonic oscillator, <InlineMath>{`L = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2`}</InlineMath>:
        </p>
        <MathBlock>{`p = m\\dot{x} \\implies \\dot{x} = \\frac{p}{m}`}</MathBlock>
        <MathBlock>{`H = p\\dot{x} - L = \\frac{p^2}{m} - \\frac{p^2}{2m} + \\frac{kx^2}{2} = \\frac{p^2}{2m} + \\frac{kx^2}{2}`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hamilton's Equations</h3>

      <Theorem title="Hamilton's Canonical Equations">
        <p className="mb-2">
          The equations of motion in Hamiltonian form are:
        </p>
        <MathBlock>{`\\dot{q}^i = \\frac{\\partial H}{\\partial p_i}, \\quad \\dot{p}_i = -\\frac{\\partial H}{\\partial q^i}`}</MathBlock>
        <p className="mt-2">
          These are <InlineMath>{`2n`}</InlineMath> first-order differential equations, equivalent to
          the <InlineMath>{`n`}</InlineMath> second-order Euler-Lagrange equations. The symmetric form
          reveals the deep structure of mechanics.
        </p>
      </Theorem>

      <Example title="Hamilton's Equations for Harmonic Oscillator">
        <p className="mb-3">
          With <InlineMath>{`H = \\frac{p^2}{2m} + \\frac{kx^2}{2}`}</InlineMath>:
        </p>
        <MathBlock>{`\\dot{x} = \\frac{\\partial H}{\\partial p} = \\frac{p}{m}`}</MathBlock>
        <MathBlock>{`\\dot{p} = -\\frac{\\partial H}{\\partial x} = -kx`}</MathBlock>
        <p className="mt-2">
          Combining: <InlineMath>{`m\\ddot{x} = \\dot{p} = -kx`}</InlineMath>, which is the familiar
          equation of motion.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Conservation of the Hamiltonian</h3>

      <Theorem title="Time Evolution of H">
        <p className="mb-2">
          The total time derivative of the Hamiltonian is:
        </p>
        <MathBlock>{`\\frac{dH}{dt} = \\frac{\\partial H}{\\partial t}`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>{`H`}</InlineMath> has no explicit time dependence (<InlineMath>{`\\partial H/\\partial t = 0`}</InlineMath>),
          then <InlineMath>{`H`}</InlineMath> is conserved along trajectories. This typically corresponds
          to conservation of energy.
        </p>
      </Theorem>

      <Definition title="Phase Space">
        <p>
          The <strong>phase space</strong> is the <InlineMath>{`2n`}</InlineMath>-dimensional space
          with coordinates <InlineMath>{`(q^1, \\ldots, q^n, p_1, \\ldots, p_n)`}</InlineMath>. Each point
          in phase space completely specifies the instantaneous state of the system. Hamilton's equations
          define a flow on phase space.
        </p>
      </Definition>

      <Callout type="info" title="Phase Space vs. Configuration Space">
        <p>
          The Lagrangian formulation works on the tangent bundle <InlineMath>{`TQ`}</InlineMath> (positions
          and velocities), while the Hamiltonian formulation works on the cotangent
          bundle <InlineMath>{`T^*Q`}</InlineMath> (positions and momenta). The cotangent bundle has
          natural geometric structure (symplectic) that makes it preferred for advanced applications.
        </p>
      </Callout>

      <Example title="Two-Dimensional Motion">
        <p className="mb-3">
          For a particle in a central potential <InlineMath>{`V(r)`}</InlineMath>, using polar
          coordinates <InlineMath>{`(r, \\theta)`}</InlineMath>:
        </p>
        <MathBlock>{`H = \\frac{p_r^2}{2m} + \\frac{p_\\theta^2}{2mr^2} + V(r)`}</MathBlock>
        <p className="mb-2">
          Hamilton's equations are:
        </p>
        <MathBlock>{`\\dot{r} = \\frac{p_r}{m}, \\quad \\dot{\\theta} = \\frac{p_\\theta}{mr^2}`}</MathBlock>
        <MathBlock>{`\\dot{p}_r = \\frac{p_\\theta^2}{mr^3} - V'(r), \\quad \\dot{p}_\\theta = 0`}</MathBlock>
        <p className="mt-2">
          Since <InlineMath>{`\\dot{p}_\\theta = 0`}</InlineMath>, angular momentum <InlineMath>{`p_\\theta`}</InlineMath>
          is conserved (as expected for a central force).
        </p>
      </Example>

      <Callout type="success" title="Key Insight">
        <p>
          Hamilton's canonical equations reveal mechanics as a flow in phase space. The symmetric
          form <InlineMath>{`\\dot{q} = \\partial H/\\partial p`}</InlineMath>, <InlineMath>{`\\dot{p} = -\\partial H/\\partial q`}</InlineMath>
          suggests a deep mathematical structure. This structure, the symplectic geometry of phase space,
          is the foundation for modern analytical mechanics and the path to quantum mechanics through
          Poisson brackets.
        </p>
      </Callout>
    </LessonLayout>
  );
}
