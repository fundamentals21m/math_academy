import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Poisson Brackets</h2>

      <p className="mb-4">
        The Poisson bracket is a fundamental operation in Hamiltonian mechanics that encodes the
        time evolution of dynamical quantities. It provides an algebraic structure on phase space
        functions that is preserved under canonical transformations and serves as the classical
        precursor to the quantum mechanical commutator.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Definition and Basic Properties</h3>

      <Definition title="Poisson Bracket">
        <p>
          For two functions <InlineMath>{`f(q, p, t)`}</InlineMath> and <InlineMath>{`g(q, p, t)`}</InlineMath>
          on phase space, the <strong>Poisson bracket</strong> is defined as:
        </p>
        <MathBlock>{`\\{f, g\\} = \\sum_{i=1}^{n} \\left(\\frac{\\partial f}{\\partial q^i}\\frac{\\partial g}{\\partial p_i} - \\frac{\\partial f}{\\partial p_i}\\frac{\\partial g}{\\partial q^i}\\right)`}</MathBlock>
        <p className="mt-2">
          The result is another function on phase space.
        </p>
      </Definition>

      <Theorem title="Fundamental Poisson Brackets">
        <p className="mb-2">
          The canonical coordinates satisfy:
        </p>
        <MathBlock>{`\\{q^i, q^j\\} = 0, \\quad \\{p_i, p_j\\} = 0, \\quad \\{q^i, p_j\\} = \\delta^i_j`}</MathBlock>
        <p className="mt-2">
          These relations define the canonical structure of phase space. Any set of coordinates
          satisfying these relations are called canonical coordinates.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Algebraic Properties</h3>

      <Theorem title="Properties of Poisson Brackets">
        <p className="mb-2">
          The Poisson bracket satisfies:
        </p>
        <ol className="list-decimal list-inside mb-2 text-dark-300 space-y-1">
          <li><strong>Antisymmetry:</strong> <InlineMath>{`\\{f, g\\} = -\\{g, f\\}`}</InlineMath></li>
          <li><strong>Bilinearity:</strong> <InlineMath>{`\\{af + bg, h\\} = a\\{f, h\\} + b\\{g, h\\}`}</InlineMath></li>
          <li><strong>Leibniz rule:</strong> <InlineMath>{`\\{fg, h\\} = f\\{g, h\\} + \\{f, h\\}g`}</InlineMath></li>
          <li><strong>Jacobi identity:</strong> <InlineMath>{`\\{f, \\{g, h\\}\\} + \\{g, \\{h, f\\}\\} + \\{h, \\{f, g\\}\\} = 0`}</InlineMath></li>
        </ol>
        <p className="mt-2">
          These properties make the space of phase space functions a <strong>Lie algebra</strong>
          under the Poisson bracket.
        </p>
      </Theorem>

      <Example title="Computing a Poisson Bracket">
        <p className="mb-3">
          For a particle in 2D, consider angular momentum <InlineMath>{`L = xp_y - yp_x`}</InlineMath>
          and position <InlineMath>{`x`}</InlineMath>:
        </p>
        <MathBlock>{`\\{L, x\\} = \\frac{\\partial L}{\\partial x}\\frac{\\partial x}{\\partial p_x} - \\frac{\\partial L}{\\partial p_x}\\frac{\\partial x}{\\partial x} + \\frac{\\partial L}{\\partial y}\\frac{\\partial x}{\\partial p_y} - \\frac{\\partial L}{\\partial p_y}\\frac{\\partial x}{\\partial y}`}</MathBlock>
        <MathBlock>{`= p_y \\cdot 0 - (-y) \\cdot 1 + (-p_x) \\cdot 0 - x \\cdot 0 = y`}</MathBlock>
        <p className="mt-2">
          Similarly, <InlineMath>{`\\{L, y\\} = -x`}</InlineMath>. The angular momentum generates rotations.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Time Evolution</h3>

      <Theorem title="Equation of Motion via Poisson Bracket">
        <p className="mb-2">
          The time evolution of any phase space function <InlineMath>{`f(q, p, t)`}</InlineMath> is
          given by:
        </p>
        <MathBlock>{`\\frac{df}{dt} = \\{f, H\\} + \\frac{\\partial f}{\\partial t}`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>{`f`}</InlineMath> has no explicit time dependence, then <InlineMath>{`df/dt = \\{f, H\\}`}</InlineMath>.
          This is a powerful alternative formulation of Hamilton's equations.
        </p>
      </Theorem>

      <Example title="Verification of Hamilton's Equations">
        <p className="mb-3">
          Taking <InlineMath>{`f = q^i`}</InlineMath> (no explicit time dependence):
        </p>
        <MathBlock>{`\\frac{dq^i}{dt} = \\{q^i, H\\} = \\sum_j \\left(\\frac{\\partial q^i}{\\partial q^j}\\frac{\\partial H}{\\partial p_j} - \\frac{\\partial q^i}{\\partial p_j}\\frac{\\partial H}{\\partial q^j}\\right) = \\frac{\\partial H}{\\partial p_i}`}</MathBlock>
        <p className="mb-2">
          Taking <InlineMath>{`f = p_i`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{dp_i}{dt} = \\{p_i, H\\} = \\sum_j \\left(\\frac{\\partial p_i}{\\partial q^j}\\frac{\\partial H}{\\partial p_j} - \\frac{\\partial p_i}{\\partial p_j}\\frac{\\partial H}{\\partial q^j}\\right) = -\\frac{\\partial H}{\\partial q^i}`}</MathBlock>
        <p className="mt-2">
          These are precisely Hamilton's canonical equations.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Constants of Motion</h3>

      <Definition title="Constant of Motion">
        <p>
          A function <InlineMath>{`f(q, p)`}</InlineMath> (with no explicit time dependence) is a
          <strong>constant of motion</strong> (or integral of motion) if it is conserved along
          trajectories:
        </p>
        <MathBlock>{`\\frac{df}{dt} = \\{f, H\\} = 0`}</MathBlock>
        <p className="mt-2">
          Equivalently, <InlineMath>{`f`}</InlineMath> Poisson-commutes with the Hamiltonian.
        </p>
      </Definition>

      <Theorem title="Poisson's Theorem">
        <p className="mb-2">
          If <InlineMath>{`f`}</InlineMath> and <InlineMath>{`g`}</InlineMath> are both constants of
          motion, then their Poisson bracket <InlineMath>{`\\{f, g\\}`}</InlineMath> is also a constant
          of motion:
        </p>
        <MathBlock>{`\\{f, H\\} = 0 \\text{ and } \\{g, H\\} = 0 \\implies \\{\\{f, g\\}, H\\} = 0`}</MathBlock>
        <p className="mt-2">
          This follows from the Jacobi identity. Poisson's theorem can generate new conserved quantities
          from known ones.
        </p>
      </Theorem>

      <Example title="Angular Momentum Components">
        <p className="mb-3">
          The components of angular momentum <InlineMath>{`L_x, L_y, L_z`}</InlineMath> satisfy:
        </p>
        <MathBlock>{`\\{L_x, L_y\\} = L_z, \\quad \\{L_y, L_z\\} = L_x, \\quad \\{L_z, L_x\\} = L_y`}</MathBlock>
        <p className="mt-2">
          These relations define the Lie algebra of <InlineMath>{`SO(3)`}</InlineMath>, the rotation
          group. For a central force problem, <InlineMath>{`\\{L_z, H\\} = 0`}</InlineMath> but
          generally <InlineMath>{`\\{L_x, H\\} \\neq 0`}</InlineMath> unless the force has full
          spherical symmetry.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Connection to Quantum Mechanics</h3>

      <p className="mb-4">
        The Poisson bracket is the classical limit of the quantum commutator. Dirac's quantization
        prescription states:
      </p>

      <Theorem title="Canonical Quantization">
        <p className="mb-2">
          In the transition from classical to quantum mechanics, the Poisson bracket becomes the
          commutator divided by <InlineMath>{`i\\hbar`}</InlineMath>:
        </p>
        <MathBlock>{`\\{f, g\\}_{\\text{classical}} \\to \\frac{1}{i\\hbar}[\\hat{f}, \\hat{g}]_{\\text{quantum}}`}</MathBlock>
        <p className="mt-2">
          In particular, the fundamental brackets <InlineMath>{`\\{q, p\\} = 1`}</InlineMath> become
          the canonical commutation relations <InlineMath>{`[\\hat{q}, \\hat{p}] = i\\hbar`}</InlineMath>.
        </p>
      </Theorem>

      <Definition title="Lie Algebra Structure">
        <p>
          The Poisson bracket gives the space of smooth functions on phase space the structure of a
          <strong>Lie algebra</strong>. The antisymmetry, bilinearity, and Jacobi identity are
          precisely the axioms of a Lie algebra. The classical observables form an infinite-dimensional
          Lie algebra under the Poisson bracket.
        </p>
      </Definition>

      <Callout type="info" title="Symmetries and Conservation Laws">
        <p>
          The Poisson bracket connects symmetries to conservation laws (Noether's theorem in
          Hamiltonian form). If <InlineMath>{`G`}</InlineMath> generates a symmetry transformation
          that leaves <InlineMath>{`H`}</InlineMath> invariant, then <InlineMath>{`\\{G, H\\} = 0`}</InlineMath>
          and <InlineMath>{`G`}</InlineMath> is conserved. For example, angular
          momentum <InlineMath>{`L_z`}</InlineMath> generates rotations about the <InlineMath>{`z`}</InlineMath>-axis
          and is conserved when <InlineMath>{`H`}</InlineMath> is rotationally symmetric about that axis.
        </p>
      </Callout>

      <Callout type="success" title="Key Insight">
        <p>
          The Poisson bracket encapsulates the essential structure of classical mechanics in algebraic
          form. Time evolution, conservation laws, and the relationship between symmetries and conserved
          quantities all find elegant expression through Poisson brackets. This algebraic structure
          carries over to quantum mechanics, making the Poisson bracket the foundation of canonical
          quantization.
        </p>
      </Callout>
    </LessonLayout>
  );
}
