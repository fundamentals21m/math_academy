import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Introduction to Lagrangian Mechanics</h2>

      <p className="mb-4">
        Lagrangian mechanics represents one of the most profound reformulations of classical mechanics,
        providing a framework that transcends Newtonian force-based analysis. Rather than tracking forces
        and accelerations, we describe a mechanical system through a single scalar function called the
        Lagrangian, from which all equations of motion follow automatically.
      </p>

      <p className="mb-4">
        The power of this approach lies in its coordinate independence: whether we use Cartesian coordinates,
        polar coordinates, or any other generalized coordinate system, the Lagrangian formalism yields the
        correct equations of motion through a unified variational principle.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Principle of Virtual Work</h3>

      <p className="mb-4">
        Before introducing the Lagrangian, we consider the principle of virtual work, which provides
        a foundation for variational mechanics. A virtual displacement is an infinitesimal change in
        configuration that respects all constraints at a fixed instant of time.
      </p>

      <Definition title="Virtual Displacement">
        <p>
          A <strong>virtual displacement</strong> <InlineMath>{`\\delta \\mathbf{r}`}</InlineMath> is an
          infinitesimal change in the position coordinates of a system that is consistent with all
          constraints at a given instant. Unlike actual displacements, virtual displacements occur
          at fixed time: <InlineMath>{`\\delta t = 0`}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Principle of Virtual Work">
        <p className="mb-2">
          A mechanical system is in equilibrium if and only if the total virtual work done by all
          applied forces vanishes for every virtual displacement compatible with the constraints:
        </p>
        <MathBlock>{`\\sum_{i=1}^{N} \\mathbf{F}_i \\cdot \\delta \\mathbf{r}_i = 0`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\mathbf{F}_i`}</InlineMath> are the applied forces
          and <InlineMath>{`\\delta \\mathbf{r}_i`}</InlineMath> are the virtual displacements of
          each particle.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Kinetic and Potential Energy</h3>

      <p className="mb-4">
        The Lagrangian formalism centers on two fundamental quantities: kinetic energy <InlineMath>{`T`}</InlineMath> and
        potential energy <InlineMath>{`V`}</InlineMath>. For a system of <InlineMath>{`N`}</InlineMath> particles
        with masses <InlineMath>{`m_i`}</InlineMath> and velocities <InlineMath>{`\\dot{\\mathbf{r}}_i`}</InlineMath>,
        the kinetic energy is:
      </p>

      <MathBlock>{`T = \\sum_{i=1}^{N} \\frac{1}{2} m_i \\|\\dot{\\mathbf{r}}_i\\|^2`}</MathBlock>

      <Definition title="Potential Energy">
        <p>
          A force field <InlineMath>{`\\mathbf{F}`}</InlineMath> is called <strong>conservative</strong> if
          there exists a scalar function <InlineMath>{`V(\\mathbf{r})`}</InlineMath>, the <strong>potential
          energy</strong>, such that:
        </p>
        <MathBlock>{`\\mathbf{F} = -\\nabla V`}</MathBlock>
        <p className="mt-2">
          The potential energy represents stored energy that can be converted to kinetic energy. Common
          examples include gravitational potential <InlineMath>{`V = mgh`}</InlineMath> and elastic
          potential <InlineMath>{`V = \\frac{1}{2}kx^2`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Lagrangian</h3>

      <Definition title="Lagrangian Function">
        <p>
          The <strong>Lagrangian</strong> of a mechanical system is defined as the difference between
          kinetic and potential energy:
        </p>
        <MathBlock>{`L = T - V`}</MathBlock>
        <p className="mt-2">
          In terms of generalized coordinates <InlineMath>{`q^i`}</InlineMath> and their time
          derivatives <InlineMath>{`\\dot{q}^i`}</InlineMath>, the Lagrangian is written as:
        </p>
        <MathBlock>{`L(q^1, \\ldots, q^n, \\dot{q}^1, \\ldots, \\dot{q}^n, t)`}</MathBlock>
      </Definition>

      <Theorem title="Euler-Lagrange Equations">
        <p className="mb-2">
          The equations of motion for a mechanical system are obtained by requiring that the
          action <InlineMath>{`S = \\int_{t_1}^{t_2} L \\, dt`}</InlineMath> be stationary. This
          yields the <strong>Euler-Lagrange equations</strong>:
        </p>
        <MathBlock>{`\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}^i}\\right) - \\frac{\\partial L}{\\partial q^i} = 0`}</MathBlock>
        <p className="mt-2">
          for each generalized coordinate <InlineMath>{`q^i`}</InlineMath>, where <InlineMath>{`i = 1, \\ldots, n`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Simple Harmonic Oscillator">
        <p className="mb-3">
          Consider a mass <InlineMath>{`m`}</InlineMath> attached to a spring with spring
          constant <InlineMath>{`k`}</InlineMath>. Using position <InlineMath>{`x`}</InlineMath> as
          the generalized coordinate:
        </p>
        <ul className="list-disc list-inside mb-3 text-dark-300 space-y-1">
          <li>Kinetic energy: <InlineMath>{`T = \\frac{1}{2}m\\dot{x}^2`}</InlineMath></li>
          <li>Potential energy: <InlineMath>{`V = \\frac{1}{2}kx^2`}</InlineMath></li>
          <li>Lagrangian: <InlineMath>{`L = \\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}kx^2`}</InlineMath></li>
        </ul>
        <p className="mb-2">
          Applying the Euler-Lagrange equation:
        </p>
        <MathBlock>{`\\frac{\\partial L}{\\partial \\dot{x}} = m\\dot{x}, \\quad \\frac{\\partial L}{\\partial x} = -kx`}</MathBlock>
        <MathBlock>{`\\frac{d}{dt}(m\\dot{x}) - (-kx) = 0 \\implies m\\ddot{x} + kx = 0`}</MathBlock>
        <p className="mt-2">
          This is the familiar equation of simple harmonic motion with angular
          frequency <InlineMath>{`\\omega = \\sqrt{k/m}`}</InlineMath>.
        </p>
      </Example>

      <Example title="Planar Pendulum">
        <p className="mb-3">
          For a pendulum of length <InlineMath>{`\\ell`}</InlineMath> and mass <InlineMath>{`m`}</InlineMath>,
          using the angle <InlineMath>{`\\theta`}</InlineMath> from vertical as the generalized coordinate:
        </p>
        <ul className="list-disc list-inside mb-3 text-dark-300 space-y-1">
          <li>Position: <InlineMath>{`x = \\ell\\sin\\theta`}</InlineMath>, <InlineMath>{`y = -\\ell\\cos\\theta`}</InlineMath></li>
          <li>Velocity: <InlineMath>{`\\dot{x}^2 + \\dot{y}^2 = \\ell^2\\dot{\\theta}^2`}</InlineMath></li>
          <li>Kinetic energy: <InlineMath>{`T = \\frac{1}{2}m\\ell^2\\dot{\\theta}^2`}</InlineMath></li>
          <li>Potential energy: <InlineMath>{`V = -mg\\ell\\cos\\theta`}</InlineMath></li>
        </ul>
        <p className="mb-2">
          The Lagrangian is:
        </p>
        <MathBlock>{`L = \\frac{1}{2}m\\ell^2\\dot{\\theta}^2 + mg\\ell\\cos\\theta`}</MathBlock>
        <p className="mb-2">
          The Euler-Lagrange equation gives:
        </p>
        <MathBlock>{`m\\ell^2\\ddot{\\theta} + mg\\ell\\sin\\theta = 0 \\implies \\ddot{\\theta} + \\frac{g}{\\ell}\\sin\\theta = 0`}</MathBlock>
      </Example>

      <Callout type="info" title="Why L = T - V?">
        <p>
          The specific form <InlineMath>{`L = T - V`}</InlineMath> is not arbitrary. It arises naturally
          from d'Alembert's principle and the requirement that the Euler-Lagrange equations reproduce
          Newton's second law <InlineMath>{`F = ma`}</InlineMath> in Cartesian coordinates. The minus
          sign ensures that minimizing the action corresponds to the physical trajectory.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advantages of the Lagrangian Approach</h3>

      <p className="mb-4">
        The Lagrangian formulation offers several key advantages over Newtonian mechanics:
      </p>

      <ul className="list-disc list-inside mb-4 text-dark-300 space-y-2">
        <li><strong>Coordinate freedom:</strong> Any set of generalized coordinates can be used without
            deriving constraint forces.</li>
        <li><strong>Systematic procedure:</strong> Write down <InlineMath>{`T`}</InlineMath> and <InlineMath>{`V`}</InlineMath>,
            form <InlineMath>{`L`}</InlineMath>, and differentiate.</li>
        <li><strong>Symmetry and conservation:</strong> Noether's theorem connects symmetries of
            the Lagrangian to conserved quantities.</li>
        <li><strong>Generalization:</strong> The formalism extends naturally to fields, relativity,
            and quantum mechanics.</li>
      </ul>

      <Callout type="success" title="Key Insight">
        <p>
          The Lagrangian formulation transforms mechanics from a problem of forces and accelerations
          into a problem of energy and geometry. This perspective is essential for modern physics,
          from particle physics to general relativity.
        </p>
      </Callout>
    </LessonLayout>
  );
}
