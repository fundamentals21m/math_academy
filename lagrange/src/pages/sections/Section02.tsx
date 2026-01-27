import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Intrinsic Formalism</h2>

      <p className="mb-4">
        One of the deepest insights of Lagrangian mechanics is that the equations of motion do not
        depend on the choice of coordinate system. This coordinate independence, or <em>intrinsic</em>
        nature, means we can describe a mechanical system using whatever coordinates are most natural
        for the problem at hand. The Lagrangian formalism automatically handles the geometric
        complexity of curved coordinate systems.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Generalized Coordinates</h3>

      <p className="mb-4">
        A mechanical system with <InlineMath>{`N`}</InlineMath> particles in 3D space nominally
        requires <InlineMath>{`3N`}</InlineMath> coordinates. However, constraints typically reduce
        the number of independent coordinates needed to describe the configuration.
      </p>

      <Definition title="Generalized Coordinates">
        <p>
          <strong>Generalized coordinates</strong> <InlineMath>{`q^1, q^2, \\ldots, q^n`}</InlineMath> are
          any set of <InlineMath>{`n`}</InlineMath> independent parameters that completely specify the
          configuration of a mechanical system. The number <InlineMath>{`n`}</InlineMath> is called
          the <strong>number of degrees of freedom</strong>.
        </p>
        <p className="mt-2">
          The positions of all particles can be expressed as functions of the generalized coordinates:
        </p>
        <MathBlock>{`\\mathbf{r}_i = \\mathbf{r}_i(q^1, \\ldots, q^n, t)`}</MathBlock>
      </Definition>

      <Example title="Spherical Coordinates">
        <p className="mb-3">
          For a single particle moving in 3D space, we can use spherical
          coordinates <InlineMath>{`(r, \\theta, \\phi)`}</InlineMath> as generalized coordinates:
        </p>
        <MathBlock>{`\\begin{aligned}
x &= r\\sin\\theta\\cos\\phi \\\\
y &= r\\sin\\theta\\sin\\phi \\\\
z &= r\\cos\\theta
\\end{aligned}`}</MathBlock>
        <p className="mt-2">
          For a particle constrained to move on a sphere of fixed radius <InlineMath>{`R`}</InlineMath>,
          only <InlineMath>{`(\\theta, \\phi)`}</InlineMath> are needed, reducing the degrees of freedom
          from 3 to 2.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Kinetic Energy in Generalized Coordinates</h3>

      <p className="mb-4">
        When we express particle positions in terms of generalized coordinates, the kinetic energy
        takes a quadratic form in the generalized velocities.
      </p>

      <Theorem title="Kinetic Energy as Quadratic Form">
        <p className="mb-2">
          The kinetic energy of a mechanical system can be written as:
        </p>
        <MathBlock>{`T = \\frac{1}{2} \\sum_{i,j=1}^{n} g_{ij}(q) \\, \\dot{q}^i \\dot{q}^j`}</MathBlock>
        <p className="mt-2">
          where the coefficients <InlineMath>{`g_{ij}(q)`}</InlineMath> form a symmetric, positive-definite
          matrix called the <strong>mass matrix</strong> or <strong>metric tensor</strong>. It is computed as:
        </p>
        <MathBlock>{`g_{ij} = \\sum_{k=1}^{N} m_k \\frac{\\partial \\mathbf{r}_k}{\\partial q^i} \\cdot \\frac{\\partial \\mathbf{r}_k}{\\partial q^j}`}</MathBlock>
      </Theorem>

      <Definition title="Configuration Space">
        <p>
          The <strong>configuration space</strong> (or <strong>configuration manifold</strong>)
          <InlineMath>{`Q`}</InlineMath> is the space of all possible configurations of the mechanical
          system. Each point in <InlineMath>{`Q`}</InlineMath> corresponds to a specific arrangement
          of the system, and the dimension of <InlineMath>{`Q`}</InlineMath> equals the number of
          degrees of freedom.
        </p>
        <p className="mt-2">
          The metric tensor <InlineMath>{`g_{ij}`}</InlineMath> endows the configuration space with
          a Riemannian geometry, where the kinetic energy plays the role of the squared speed.
        </p>
      </Definition>

      <Example title="Spherical Pendulum">
        <p className="mb-3">
          A mass <InlineMath>{`m`}</InlineMath> swings from a string of length <InlineMath>{`\\ell`}</InlineMath>,
          free to move in any direction. Using spherical angles <InlineMath>{`(\\theta, \\phi)`}</InlineMath>:
        </p>
        <MathBlock>{`\\mathbf{r} = \\ell(\\sin\\theta\\cos\\phi, \\sin\\theta\\sin\\phi, -\\cos\\theta)`}</MathBlock>
        <p className="mb-2">
          The velocity is:
        </p>
        <MathBlock>{`\\dot{\\mathbf{r}} = \\ell(\\dot{\\theta}\\cos\\theta\\cos\\phi - \\dot{\\phi}\\sin\\theta\\sin\\phi, \\ldots, \\dot{\\theta}\\sin\\theta)`}</MathBlock>
        <p className="mb-2">
          The kinetic energy becomes:
        </p>
        <MathBlock>{`T = \\frac{1}{2}m\\ell^2(\\dot{\\theta}^2 + \\sin^2\\theta \\, \\dot{\\phi}^2)`}</MathBlock>
        <p className="mt-2">
          The metric tensor is <InlineMath>{`g_{\\theta\\theta} = m\\ell^2`}</InlineMath>,
          <InlineMath>{`g_{\\phi\\phi} = m\\ell^2\\sin^2\\theta`}</InlineMath>,
          <InlineMath>{`g_{\\theta\\phi} = 0`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Coordinate-Free Formulation</h3>

      <p className="mb-4">
        The Euler-Lagrange equations can be written in a form that makes their coordinate independence
        manifest. This intrinsic formulation uses the language of differential geometry.
      </p>

      <Definition title="Tangent Bundle">
        <p>
          The <strong>tangent bundle</strong> <InlineMath>{`TQ`}</InlineMath> is the space of all
          position-velocity pairs <InlineMath>{`(q, \\dot{q})`}</InlineMath>. A point
          in <InlineMath>{`TQ`}</InlineMath> specifies both where the system is (a point
          in <InlineMath>{`Q`}</InlineMath>) and how fast it is moving (a tangent vector
          at that point).
        </p>
        <MathBlock>{`TQ = \\{(q, v) : q \\in Q, \\, v \\in T_q Q\\}`}</MathBlock>
        <p className="mt-2">
          The Lagrangian is a function on the tangent bundle: <InlineMath>{`L: TQ \\to \\mathbb{R}`}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Intrinsic Euler-Lagrange Equations">
        <p className="mb-2">
          The Euler-Lagrange equations can be written intrinsically using the exterior derivative
          and the Lagrangian 1-form. For a curve <InlineMath>{`\\gamma(t)`}</InlineMath> on the
          configuration space, the equations of motion are:
        </p>
        <MathBlock>{`\\iota_{\\ddot{\\gamma}} \\omega_L = dE_L`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\omega_L`}</InlineMath> is the Lagrangian 2-form
          and <InlineMath>{`E_L`}</InlineMath> is the energy function. This formulation makes no
          reference to coordinates.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Geodesics and Free Motion</h3>

      <p className="mb-4">
        For a free particle (no potential energy), the Lagrangian is purely kinetic. The resulting
        equations of motion describe geodesics on the configuration space.
      </p>

      <Theorem title="Geodesic Equation">
        <p className="mb-2">
          When <InlineMath>{`L = T = \\frac{1}{2}g_{ij}\\dot{q}^i\\dot{q}^j`}</InlineMath>, the
          Euler-Lagrange equations reduce to the geodesic equation:
        </p>
        <MathBlock>{`\\ddot{q}^k + \\Gamma^k_{ij} \\dot{q}^i \\dot{q}^j = 0`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\Gamma^k_{ij}`}</InlineMath> are the Christoffel symbols:
        </p>
        <MathBlock>{`\\Gamma^k_{ij} = \\frac{1}{2}g^{kl}\\left(\\frac{\\partial g_{il}}{\\partial q^j} + \\frac{\\partial g_{jl}}{\\partial q^i} - \\frac{\\partial g_{ij}}{\\partial q^l}\\right)`}</MathBlock>
      </Theorem>

      <Example title="Free Particle on a Sphere">
        <p className="mb-3">
          A particle constrained to move on a sphere of radius <InlineMath>{`R`}</InlineMath> with
          no potential has <InlineMath>{`L = \\frac{1}{2}mR^2(\\dot{\\theta}^2 + \\sin^2\\theta\\,\\dot{\\phi}^2)`}</InlineMath>.
        </p>
        <p className="mb-2">
          The geodesic equations are:
        </p>
        <MathBlock>{`\\ddot{\\theta} - \\sin\\theta\\cos\\theta\\,\\dot{\\phi}^2 = 0`}</MathBlock>
        <MathBlock>{`\\ddot{\\phi} + 2\\cot\\theta\\,\\dot{\\theta}\\dot{\\phi} = 0`}</MathBlock>
        <p className="mt-2">
          The solutions are great circles, the shortest paths on a sphere.
        </p>
      </Example>

      <Callout type="info" title="Connection to General Relativity">
        <p>
          In general relativity, free particles follow geodesics in spacetime. The metric tensor
          encodes the gravitational field, and the geodesic equation describes how matter moves
          in curved spacetime. Lagrange's formalism thus provides a direct bridge from classical
          mechanics to Einstein's theory of gravity.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Covariance of the Lagrangian</h3>

      <Definition title="Scalar Lagrangian">
        <p>
          The Lagrangian <InlineMath>{`L`}</InlineMath> is a <strong>scalar</strong> under coordinate
          transformations. If we change from coordinates <InlineMath>{`q^i`}</InlineMath> to new
          coordinates <InlineMath>{`Q^i(q)`}</InlineMath>, the Lagrangian transforms as:
        </p>
        <MathBlock>{`L(q, \\dot{q}, t) = \\bar{L}(Q, \\dot{Q}, t)`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\bar{L}`}</InlineMath> has the same functional form when expressed in
          the new coordinates. This ensures that the physics is independent of coordinate choice.
        </p>
      </Definition>

      <Callout type="success" title="Key Insight">
        <p>
          The intrinsic formulation reveals that Lagrangian mechanics is fundamentally geometric.
          The configuration space is a manifold, kinetic energy defines a metric, and trajectories
          are curves whose properties depend only on the geometry, not on how we label points.
          This perspective is essential for understanding advanced topics like gauge theories and
          symplectic geometry.
        </p>
      </Callout>
    </LessonLayout>
  );
}
