import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Electromagnetic Coupling</h2>

      <p className="mb-4">
        The Lagrangian formalism extends beautifully to charged particles in electromagnetic fields.
        This extension is non-trivial because the magnetic force depends on velocity and cannot be
        derived from an ordinary potential. The solution involves introducing the electromagnetic
        potentials and a velocity-dependent potential, leading to one of the most important
        applications of Lagrangian mechanics.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Lorentz Force</h3>

      <p className="mb-4">
        A particle with charge <InlineMath>{`q`}</InlineMath> moving through electric
        field <InlineMath>{`\\mathbf{E}`}</InlineMath> and magnetic field <InlineMath>{`\\mathbf{B}`}</InlineMath>
        experiences the Lorentz force:
      </p>

      <MathBlock>{`\\mathbf{F} = q(\\mathbf{E} + \\dot{\\mathbf{r}} \\times \\mathbf{B})`}</MathBlock>

      <p className="mb-4">
        The magnetic part of this force is perpendicular to the velocity and does no work, but it
        still affects the trajectory. The challenge is to incorporate this velocity-dependent force
        into the Lagrangian framework.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Electromagnetic Potentials</h3>

      <Definition title="Scalar and Vector Potentials">
        <p>
          The electromagnetic fields can be expressed in terms of a scalar potential <InlineMath>{`\\phi`}</InlineMath>
          and a vector potential <InlineMath>{`\\mathbf{A}`}</InlineMath>:
        </p>
        <MathBlock>{`\\mathbf{E} = -\\nabla\\phi - \\frac{\\partial \\mathbf{A}}{\\partial t}`}</MathBlock>
        <MathBlock>{`\\mathbf{B} = \\nabla \\times \\mathbf{A}`}</MathBlock>
        <p className="mt-2">
          These relations automatically satisfy two of Maxwell's equations: <InlineMath>{`\\nabla \\cdot \\mathbf{B} = 0`}</InlineMath>
          and <InlineMath>{`\\nabla \\times \\mathbf{E} = -\\partial\\mathbf{B}/\\partial t`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Gauge Freedom">
        <p>
          The potentials are not unique. A <strong>gauge transformation</strong>:
        </p>
        <MathBlock>{`\\mathbf{A} \\to \\mathbf{A} + \\nabla\\chi, \\quad \\phi \\to \\phi - \\frac{\\partial\\chi}{\\partial t}`}</MathBlock>
        <p className="mt-2">
          leaves the physical fields <InlineMath>{`\\mathbf{E}`}</InlineMath> and <InlineMath>{`\\mathbf{B}`}</InlineMath>
          unchanged for any scalar function <InlineMath>{`\\chi(\\mathbf{r}, t)`}</InlineMath>. The equations
          of motion must be gauge-invariant.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Electromagnetic Lagrangian</h3>

      <Theorem title="Lagrangian for Charged Particle">
        <p className="mb-2">
          The Lagrangian for a particle of mass <InlineMath>{`m`}</InlineMath> and
          charge <InlineMath>{`q`}</InlineMath> in an electromagnetic field is:
        </p>
        <MathBlock>{`L = \\frac{1}{2}m\\|\\dot{\\mathbf{r}}\\|^2 + q\\langle\\mathbf{A}, \\dot{\\mathbf{r}}\\rangle - q\\phi`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\langle\\mathbf{A}, \\dot{\\mathbf{r}}\\rangle = \\mathbf{A} \\cdot \\dot{\\mathbf{r}}`}</InlineMath>
          is the inner product. This can be written as:
        </p>
        <MathBlock>{`L = T + q(\\mathbf{A} \\cdot \\dot{\\mathbf{r}} - \\phi)`}</MathBlock>
      </Theorem>

      <p className="mb-4">
        The term <InlineMath>{`q\\mathbf{A} \\cdot \\dot{\\mathbf{r}}`}</InlineMath> is a
        velocity-dependent potential. This is the key innovation that allows the magnetic force
        to be included in the Lagrangian formalism.
      </p>

      <Theorem title="Derivation of Lorentz Force">
        <p className="mb-2">
          Applying the Euler-Lagrange equations to the electromagnetic Lagrangian:
        </p>
        <MathBlock>{`\\frac{\\partial L}{\\partial \\dot{x}} = m\\dot{x} + qA_x`}</MathBlock>
        <MathBlock>{`\\frac{\\partial L}{\\partial x} = q\\left(\\frac{\\partial A_x}{\\partial x}\\dot{x} + \\frac{\\partial A_y}{\\partial x}\\dot{y} + \\frac{\\partial A_z}{\\partial x}\\dot{z} - \\frac{\\partial\\phi}{\\partial x}\\right)`}</MathBlock>
        <p className="mt-2">
          After careful computation, using <InlineMath>{`dA_x/dt = \\partial A_x/\\partial t + (\\dot{\\mathbf{r}} \\cdot \\nabla)A_x`}</InlineMath>,
          the Euler-Lagrange equation becomes:
        </p>
        <MathBlock>{`m\\ddot{\\mathbf{r}} = q(\\mathbf{E} + \\dot{\\mathbf{r}} \\times \\mathbf{B})`}</MathBlock>
        <p className="mt-2">
          which is precisely the Lorentz force law.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Canonical Momentum</h3>

      <Definition title="Canonical Momentum">
        <p>
          The canonical (or generalized) momentum conjugate to position is:
        </p>
        <MathBlock>{`\\mathbf{p} = \\frac{\\partial L}{\\partial \\dot{\\mathbf{r}}} = m\\dot{\\mathbf{r}} + q\\mathbf{A}`}</MathBlock>
        <p className="mt-2">
          Note that the canonical momentum <InlineMath>{`\\mathbf{p}`}</InlineMath> differs from the
          mechanical momentum <InlineMath>{`m\\dot{\\mathbf{r}}`}</InlineMath> by <InlineMath>{`q\\mathbf{A}`}</InlineMath>.
          This has profound consequences in quantum mechanics.
        </p>
      </Definition>

      <Example title="Particle in Uniform Magnetic Field">
        <p className="mb-3">
          For a uniform field <InlineMath>{`\\mathbf{B} = B\\hat{\\mathbf{z}}`}</InlineMath>, we can
          choose the symmetric gauge:
        </p>
        <MathBlock>{`\\mathbf{A} = \\frac{1}{2}\\mathbf{B} \\times \\mathbf{r} = \\frac{B}{2}(-y, x, 0)`}</MathBlock>
        <p className="mb-2">
          The Lagrangian becomes:
        </p>
        <MathBlock>{`L = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2 + \\dot{z}^2) + \\frac{qB}{2}(x\\dot{y} - y\\dot{x})`}</MathBlock>
        <p className="mt-2">
          The equations of motion yield circular orbits (cyclotron motion) in the <InlineMath>{`xy`}</InlineMath>-plane
          with frequency <InlineMath>{`\\omega_c = qB/m`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Minimal Coupling</h3>

      <Definition title="Minimal Coupling Prescription">
        <p>
          The electromagnetic Lagrangian can be obtained from the free particle Lagrangian by the
          <strong>minimal coupling</strong> prescription:
        </p>
        <MathBlock>{`m\\dot{\\mathbf{r}} \\to m\\dot{\\mathbf{r}} - q\\mathbf{A}`}</MathBlock>
        <p className="mt-2">
          or equivalently, replacing the canonical momentum by:
        </p>
        <MathBlock>{`\\mathbf{p} \\to \\mathbf{p} - q\\mathbf{A}`}</MathBlock>
        <p className="mt-2">
          and adding <InlineMath>{`-q\\phi`}</InlineMath> to the potential. This prescription
          generalizes to quantum mechanics and gauge field theories.
        </p>
      </Definition>

      <Example title="Relativistic Charged Particle">
        <p className="mb-3">
          The relativistic Lagrangian for a charged particle is:
        </p>
        <MathBlock>{`L = -mc^2\\sqrt{1 - \\frac{v^2}{c^2}} + q\\mathbf{A} \\cdot \\dot{\\mathbf{r}} - q\\phi`}</MathBlock>
        <p className="mt-2">
          This can be written covariantly in terms of the 4-potential <InlineMath>{`A^\\mu = (\\phi/c, \\mathbf{A})`}</InlineMath>
          and 4-velocity <InlineMath>{`u^\\mu`}</InlineMath>:
        </p>
        <MathBlock>{`L = -mc^2\\sqrt{1 - v^2/c^2} - qA_\\mu u^\\mu`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Energy Conservation</h3>

      <Theorem title="Energy for Electromagnetic System">
        <p className="mb-2">
          The energy (Hamiltonian) of a charged particle is:
        </p>
        <MathBlock>{`E = \\dot{\\mathbf{r}} \\cdot \\mathbf{p} - L = \\frac{1}{2}m\\|\\dot{\\mathbf{r}}\\|^2 + q\\phi`}</MathBlock>
        <p className="mt-2">
          If the potentials are time-independent, this energy is conserved. The magnetic field does
          no work, so it does not contribute directly to the energy.
        </p>
      </Theorem>

      <Callout type="info" title="Gauge Invariance in Quantum Mechanics">
        <p>
          The minimal coupling prescription <InlineMath>{`\\mathbf{p} \\to \\mathbf{p} - q\\mathbf{A}`}</InlineMath>
          becomes essential in quantum mechanics. The Schrodinger equation with electromagnetic
          fields uses <InlineMath>{`(-i\\hbar\\nabla - q\\mathbf{A})^2`}</InlineMath> in place
          of <InlineMath>{`-\\hbar^2\\nabla^2`}</InlineMath>. Gauge invariance of the physics requires
          the wavefunction to transform as <InlineMath>{`\\psi \\to \\psi e^{iq\\chi/\\hbar}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="success" title="Key Insight">
        <p>
          The electromagnetic Lagrangian demonstrates the power and flexibility of the Lagrangian
          formalism. By introducing velocity-dependent potentials, we can handle forces that do
          not derive from ordinary potentials. This framework is the foundation for gauge field
          theories that describe all fundamental interactions except gravity.
        </p>
      </Callout>
    </LessonLayout>
  );
}
