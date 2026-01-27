import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Symplectic Structure</h2>

      <p className="mb-4">
        Phase space is not just a <InlineMath>{`2n`}</InlineMath>-dimensional manifold; it carries
        a special geometric structure called <em>symplectic structure</em>. This structure underlies
        everything in Hamiltonian mechanics: the form of Hamilton's equations, the Poisson bracket,
        the preservation of phase space volume, and the theory of canonical transformations. Understanding
        symplectic geometry provides the deepest insight into why mechanics takes the form it does.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Symplectic Form</h3>

      <Definition title="Symplectic Form">
        <p>
          The <strong>canonical symplectic form</strong> on phase space is the 2-form:
        </p>
        <MathBlock>{`\\omega = \\sum_{i=1}^{n} dp_i \\wedge dq^i`}</MathBlock>
        <p className="mt-2">
          In matrix notation, if we write coordinates as <InlineMath>{`z = (q^1, \\ldots, q^n, p_1, \\ldots, p_n)`}</InlineMath>,
          then:
        </p>
        <MathBlock>{`\\omega = \\frac{1}{2} \\sum_{a,b} J_{ab} \\, dz^a \\wedge dz^b`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`J`}</InlineMath> is the <InlineMath>{`2n \\times 2n`}</InlineMath> symplectic matrix.
        </p>
      </Definition>

      <Definition title="Symplectic Matrix">
        <p>
          The <strong>symplectic matrix</strong> is the <InlineMath>{`2n \\times 2n`}</InlineMath> matrix:
        </p>
        <MathBlock>{`J = \\begin{pmatrix} 0 & I_n \\\\ -I_n & 0 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`I_n`}</InlineMath> is the <InlineMath>{`n \\times n`}</InlineMath> identity
          matrix. Note that <InlineMath>{`J^2 = -I_{2n}`}</InlineMath> and <InlineMath>{`J^T = J^{-1} = -J`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Symplectic Form in One Dimension">
        <p className="mb-3">
          For a system with one degree of freedom (<InlineMath>{`n = 1`}</InlineMath>):
        </p>
        <MathBlock>{`\\omega = dp \\wedge dq`}</MathBlock>
        <p className="mb-2">
          This 2-form measures oriented area in the <InlineMath>{`(q, p)`}</InlineMath> phase plane.
          A parallelogram with sides <InlineMath>{`\\mathbf{v} = (\\delta q_1, \\delta p_1)`}</InlineMath>
          and <InlineMath>{`\\mathbf{w} = (\\delta q_2, \\delta p_2)`}</InlineMath> has symplectic area:
        </p>
        <MathBlock>{`\\omega(\\mathbf{v}, \\mathbf{w}) = \\delta p_1 \\delta q_2 - \\delta p_2 \\delta q_1`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Properties of the Symplectic Form</h3>

      <Theorem title="Properties of the Symplectic Form">
        <p className="mb-2">
          The canonical symplectic form satisfies:
        </p>
        <ol className="list-decimal list-inside mb-2 text-dark-300 space-y-1">
          <li><strong>Closed:</strong> <InlineMath>{`d\\omega = 0`}</InlineMath></li>
          <li><strong>Non-degenerate:</strong> If <InlineMath>{`\\omega(\\mathbf{v}, \\mathbf{w}) = 0`}</InlineMath> for
              all <InlineMath>{`\\mathbf{w}`}</InlineMath>, then <InlineMath>{`\\mathbf{v} = 0`}</InlineMath></li>
        </ol>
        <p className="mt-2">
          A 2-form with these properties defines a <strong>symplectic structure</strong>. The pair
          <InlineMath>{`(M, \\omega)`}</InlineMath> of a manifold and symplectic form is called a
          <strong>symplectic manifold</strong>.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hamilton's Equations in Geometric Form</h3>

      <Definition title="Hamiltonian Vector Field">
        <p>
          Given a Hamiltonian <InlineMath>{`H`}</InlineMath>, the <strong>Hamiltonian vector
          field</strong> <InlineMath>{`X_H`}</InlineMath> is defined by:
        </p>
        <MathBlock>{`\\iota_{X_H}\\omega = dH`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\iota`}</InlineMath> denotes interior product (contraction). This equation
          uniquely determines <InlineMath>{`X_H`}</InlineMath> because <InlineMath>{`\\omega`}</InlineMath>
          is non-degenerate.
        </p>
      </Definition>

      <Theorem title="Geometric Form of Hamilton's Equations">
        <p className="mb-2">
          In coordinates, the Hamiltonian vector field is:
        </p>
        <MathBlock>{`X_H = \\sum_i \\left(\\frac{\\partial H}{\\partial p_i}\\frac{\\partial}{\\partial q^i} - \\frac{\\partial H}{\\partial q^i}\\frac{\\partial}{\\partial p_i}\\right)`}</MathBlock>
        <p className="mt-2">
          A trajectory <InlineMath>{`\\gamma(t)`}</InlineMath> satisfies Hamilton's equations if and only
          if <InlineMath>{`\\dot{\\gamma} = X_H(\\gamma)`}</InlineMath>.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Poisson Bracket from Symplectic Structure</h3>

      <Theorem title="Symplectic Definition of Poisson Bracket">
        <p className="mb-2">
          The Poisson bracket can be defined purely in terms of the symplectic form:
        </p>
        <MathBlock>{`\\{f, g\\} = \\omega(X_f, X_g)`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`X_f`}</InlineMath> and <InlineMath>{`X_g`}</InlineMath> are the Hamiltonian
          vector fields of <InlineMath>{`f`}</InlineMath> and <InlineMath>{`g`}</InlineMath>. Equivalently:
        </p>
        <MathBlock>{`\\{f, g\\} = X_g(f) = dg(X_f)`}</MathBlock>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Liouville's Theorem</h3>

      <p className="mb-4">
        One of the most important consequences of symplectic structure is the preservation of
        phase space volume under Hamiltonian evolution.
      </p>

      <Definition title="Liouville Volume">
        <p>
          The <strong>Liouville volume form</strong> is the <InlineMath>{`2n`}</InlineMath>-form:
        </p>
        <MathBlock>{`\\Omega = \\frac{1}{n!}\\omega^n = \\frac{1}{n!}\\underbrace{\\omega \\wedge \\cdots \\wedge \\omega}_{n \\text{ times}}`}</MathBlock>
        <p className="mt-2">
          In canonical coordinates: <InlineMath>{`\\Omega = dq^1 \\wedge \\cdots \\wedge dq^n \\wedge dp_1 \\wedge \\cdots \\wedge dp_n`}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Liouville's Theorem">
        <p className="mb-2">
          The Hamiltonian flow preserves the symplectic form:
        </p>
        <MathBlock>{`\\mathcal{L}_{X_H}\\omega = 0`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\mathcal{L}`}</InlineMath> denotes the Lie derivative. Consequently,
          the Liouville volume is also preserved:
        </p>
        <MathBlock>{`\\mathcal{L}_{X_H}\\Omega = 0`}</MathBlock>
        <p className="mt-2">
          This means phase space volume is conserved under time evolution. An ensemble of initial
          conditions maintains its volume as it evolves.
        </p>
      </Theorem>

      <Example title="Incompressibility of Hamiltonian Flow">
        <p className="mb-3">
          Consider the harmonic oscillator phase space flow:
        </p>
        <MathBlock>{`\\dot{q} = \\frac{p}{m}, \\quad \\dot{p} = -kq`}</MathBlock>
        <p className="mb-2">
          The divergence of this vector field is:
        </p>
        <MathBlock>{`\\frac{\\partial \\dot{q}}{\\partial q} + \\frac{\\partial \\dot{p}}{\\partial p} = 0 + 0 = 0`}</MathBlock>
        <p className="mt-2">
          The flow is incompressible, so phase space volumes are preserved. This holds for all
          Hamiltonian systems.
        </p>
      </Example>

      <Callout type="info" title="Symplectic Manifolds Beyond Phase Space">
        <p>
          While the cotangent bundle <InlineMath>{`T^*Q`}</InlineMath> of any configuration
          space <InlineMath>{`Q`}</InlineMath> is naturally symplectic, there are other important
          symplectic manifolds in physics. Coadjoint orbits of Lie groups are symplectic and appear
          in the study of collective motion. Kahler manifolds (complex manifolds with compatible
          symplectic and Riemannian structures) appear in string theory and geometric quantization.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Symplectic vs. Riemannian Geometry</h3>

      <p className="mb-4">
        Configuration space has a Riemannian structure (the metric from kinetic energy), while
        phase space has a symplectic structure. These are fundamentally different:
      </p>

      <ul className="list-disc list-inside mb-4 text-dark-300 space-y-2">
        <li><strong>Riemannian:</strong> Symmetric bilinear form (metric), measures lengths and angles</li>
        <li><strong>Symplectic:</strong> Antisymmetric bilinear form (2-form), measures oriented areas</li>
      </ul>

      <Callout type="success" title="Key Insight">
        <p>
          The symplectic form <InlineMath>{`\\omega = \\sum dp_i \\wedge dq^i`}</InlineMath> encodes
          the essential structure of Hamiltonian mechanics. It determines the form of Hamilton's
          equations, defines the Poisson bracket, and guarantees conservation of phase space volume.
          This geometric perspective reveals why canonical transformations and integrable systems
          have special properties preserved by the symplectic structure.
        </p>
      </Callout>
    </LessonLayout>
  );
}
