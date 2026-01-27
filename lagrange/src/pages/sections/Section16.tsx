import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Rigid Body Kinetics: Inertia Tensor and Kinetic Energy</h2>

      <p className="mb-4">
        Having established the kinematics of rigid bodies, we now turn to kinetics: the relationship
        between forces, torques, and motion. The central object in rigid body dynamics is the inertia
        tensor, which encodes how mass is distributed within the body and determines its rotational response.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mass Distribution</h3>

      <p className="mb-4">
        For a rigid body consisting of discrete particles with masses <InlineMath>{'m_i'}</InlineMath> at
        positions <InlineMath>{'\\mathbf{\\rho}_i'}</InlineMath> relative to the center of mass (in the body
        frame), the total mass is:
      </p>

      <MathBlock>{'M = \\sum_i m_i'}</MathBlock>

      <p className="mb-4">
        For a continuous mass distribution with density <InlineMath>{'\\rho(\\mathbf{\\rho})'}</InlineMath>:
      </p>

      <MathBlock>{'M = \\int_\\mathcal{B} \\rho(\\mathbf{\\rho}) \\, d^3\\rho'}</MathBlock>

      <Definition title="Center of Mass">
        <p className="mb-2">
          The center of mass is defined such that:
        </p>
        <MathBlock>{'\\sum_i m_i \\mathbf{\\rho}_i = 0 \\quad \\text{or} \\quad \\int_\\mathcal{B} \\rho(\\mathbf{\\rho}) \\mathbf{\\rho} \\, d^3\\rho = 0'}</MathBlock>
        <p className="mt-2">
          This is the mass-weighted average position; by placing the origin there, the first moment of mass vanishes.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Inertia Tensor</h3>

      <Definition title="Inertia Tensor">
        <p className="mb-2">
          The inertia tensor <InlineMath>{'\\mathbf{I}'}</InlineMath> about the center of mass is a
          symmetric <InlineMath>{'3 \\times 3'}</InlineMath> matrix defined by:
        </p>
        <MathBlock>{'I_{jk} = \\sum_i m_i (|\\mathbf{\\rho}_i|^2 \\delta_{jk} - \\rho_{i,j}\\rho_{i,k})'}</MathBlock>
        <p className="mt-2">
          or equivalently, using the notation <InlineMath>{'\\mathbf{J}(\\mathbf{\\rho})'}</InlineMath> for
          the skew-symmetric matrix such that <InlineMath>{'\\mathbf{J}(\\mathbf{\\rho})\\mathbf{v} = \\mathbf{\\rho} \\times \\mathbf{v}'}</InlineMath>:
        </p>
        <MathBlock>{'\\mathbf{I} = -\\sum_i m_i \\mathbf{J}(\\mathbf{\\rho}_i)^2'}</MathBlock>
      </Definition>

      <p className="mb-4">
        The inertia tensor can also be written in the elegant form:
      </p>

      <MathBlock>{'\\mathbf{I} = \\sum_i m_i (|\\mathbf{\\rho}_i|^2 \\mathbf{1} - \\mathbf{\\rho}_i \\otimes \\mathbf{\\rho}_i)'}</MathBlock>

      <p className="mb-4">
        where <InlineMath>{'\\mathbf{1}'}</InlineMath> is the identity matrix and
        <InlineMath>{'\\mathbf{\\rho} \\otimes \\mathbf{\\rho}'}</InlineMath> is the outer product.
      </p>

      <Theorem
        title="Properties of the Inertia Tensor"
        proof={
          <>
            <p className="mb-2">
              <strong>Symmetry:</strong> <InlineMath>{'I_{jk} = I_{kj}'}</InlineMath> follows directly from
              the definition since products <InlineMath>{'\\rho_j \\rho_k'}</InlineMath> are symmetric.
            </p>
            <p className="mb-2">
              <strong>Positive definiteness:</strong> For any <InlineMath>{'\\boldsymbol{\\Omega} \\neq 0'}</InlineMath>:
            </p>
            <MathBlock>{'\\boldsymbol{\\Omega} \\cdot \\mathbf{I} \\boldsymbol{\\Omega} = \\sum_i m_i |\\boldsymbol{\\Omega} \\times \\mathbf{\\rho}_i|^2 \\geq 0'}</MathBlock>
            <p>
              with equality only if all particles lie on the axis defined by <InlineMath>{'\\boldsymbol{\\Omega}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The inertia tensor <InlineMath>{'\\mathbf{I}'}</InlineMath> is:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Symmetric: <InlineMath>{'\\mathbf{I} = \\mathbf{I}^T'}</InlineMath></li>
          <li>Positive semi-definite: <InlineMath>{'\\boldsymbol{\\Omega} \\cdot \\mathbf{I} \\boldsymbol{\\Omega} \\geq 0'}</InlineMath></li>
          <li>Has real, non-negative eigenvalues (principal moments of inertia)</li>
          <li>Has orthogonal eigenvectors (principal axes)</li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Principal Axes and Moments</h3>

      <Definition title="Principal Axes">
        <p className="mb-2">
          The principal axes are the eigenvectors of the inertia tensor. In a coordinate system aligned
          with the principal axes, the inertia tensor is diagonal:
        </p>
        <MathBlock>{'\\mathbf{I} = \\begin{pmatrix} I_1 & 0 & 0 \\\\ 0 & I_2 & 0 \\\\ 0 & 0 & I_3 \\end{pmatrix}'}</MathBlock>
        <p className="mt-2">
          The diagonal entries <InlineMath>{'I_1, I_2, I_3'}</InlineMath> are the principal moments of inertia.
        </p>
      </Definition>

      <Callout type="info" title="Symmetry and Principal Axes">
        <p>
          For bodies with geometric symmetry, the principal axes often align with symmetry axes. A
          symmetric top (like a disk) has two equal principal moments, <InlineMath>{'I_1 = I_2'}</InlineMath>,
          and any two perpendicular axes in the equatorial plane can serve as principal axes.
        </p>
      </Callout>

      <Example title="Uniform Solid Sphere">
        <p className="mb-2">
          For a uniform sphere of mass <InlineMath>{'M'}</InlineMath> and radius <InlineMath>{'R'}</InlineMath>:
        </p>
        <MathBlock>{'I_1 = I_2 = I_3 = \\frac{2}{5}MR^2'}</MathBlock>
        <p className="mb-2">
          All three principal moments are equal (spherical symmetry), and any orthogonal set of axes through
          the center can be taken as principal axes.
        </p>
      </Example>

      <Example title="Uniform Cylinder">
        <p className="mb-2">
          For a uniform solid cylinder of mass <InlineMath>{'M'}</InlineMath>, radius <InlineMath>{'R'}</InlineMath>,
          and height <InlineMath>{'h'}</InlineMath>, with the symmetry axis along <InlineMath>{'\\mathbf{e}_3'}</InlineMath>:
        </p>
        <MathBlock>{'I_1 = I_2 = \\frac{M}{12}(3R^2 + h^2)'}</MathBlock>
        <MathBlock>{'I_3 = \\frac{1}{2}MR^2'}</MathBlock>
        <p className="mt-2">
          The cylinder is a symmetric top: <InlineMath>{'I_1 = I_2 \\neq I_3'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Angular Momentum of a Rigid Body</h3>

      <Theorem
        title="Angular Momentum Formula"
        proof={
          <>
            <p className="mb-2">
              The angular momentum about the center of mass is:
            </p>
            <MathBlock>{'\\mathbf{L} = \\sum_i \\mathbf{\\rho}_i \\times (m_i \\dot{\\mathbf{r}}_i\')'}</MathBlock>
            <p className="mb-2">
              where <InlineMath>{'\\dot{\\mathbf{r}}_i\' = \\boldsymbol{\\omega} \\times \\mathbf{r}_i\' = \\boldsymbol{\\omega} \\times (A\\mathbf{\\rho}_i)'}</InlineMath>
              is the velocity relative to the center of mass.
            </p>
            <p className="mb-2">
              In terms of the body angular velocity <InlineMath>{'\\boldsymbol{\\Omega} = A^T\\boldsymbol{\\omega}'}</InlineMath>:
            </p>
            <MathBlock>{'\\mathbf{L} = A \\sum_i m_i \\mathbf{\\rho}_i \\times (\\boldsymbol{\\Omega} \\times \\mathbf{\\rho}_i)'}</MathBlock>
            <p>
              Using the vector identity <InlineMath>{'\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{a}) = |\\mathbf{a}|^2\\mathbf{b} - (\\mathbf{a} \\cdot \\mathbf{b})\\mathbf{a}'}</InlineMath>:
            </p>
            <MathBlock>{'\\mathbf{L} = A \\mathbf{I} \\boldsymbol{\\Omega} = \\mathbf{I}_s \\boldsymbol{\\omega}'}</MathBlock>
          </>
        }
      >
        <p>
          The angular momentum of a rigid body about its center of mass is:
        </p>
        <MathBlock>{'\\mathbf{L} = \\mathbf{I} \\boldsymbol{\\Omega} \\quad \\text{(body frame)}'}</MathBlock>
        <MathBlock>{'\\mathbf{L} = \\mathbf{I}_s \\boldsymbol{\\omega} \\quad \\text{(space frame)}'}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{'\\mathbf{I}_s = A \\mathbf{I} A^T'}</InlineMath> is the inertia tensor expressed
          in space-frame coordinates (time-dependent).
        </p>
      </Theorem>

      <Callout type="warning" title="Angular Momentum Direction">
        <p>
          Unlike a point particle where <InlineMath>{'\\mathbf{L} \\parallel \\boldsymbol{\\omega}'}</InlineMath>,
          for a rigid body <InlineMath>{'\\mathbf{L}'}</InlineMath> and <InlineMath>{'\\boldsymbol{\\omega}'}</InlineMath> are
          generally not parallel unless <InlineMath>{'\\boldsymbol{\\omega}'}</InlineMath> is along a principal
          axis. This misalignment leads to precession and nutation.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Kinetic Energy of Rotation</h3>

      <Theorem
        title="Rotational Kinetic Energy"
        proof={
          <>
            <p className="mb-2">
              The kinetic energy of motion relative to the center of mass is:
            </p>
            <MathBlock>{'T_{\\text{rot}} = \\frac{1}{2}\\sum_i m_i |\\dot{\\mathbf{r}}_i\'|^2 = \\frac{1}{2}\\sum_i m_i |\\boldsymbol{\\omega} \\times \\mathbf{r}_i\'|^2'}</MathBlock>
            <p className="mb-2">
              Using <InlineMath>{'|\\mathbf{a} \\times \\mathbf{b}|^2 = |\\mathbf{a}|^2|\\mathbf{b}|^2 - (\\mathbf{a} \\cdot \\mathbf{b})^2'}</InlineMath>:
            </p>
            <MathBlock>{'T_{\\text{rot}} = \\frac{1}{2}\\sum_i m_i (|\\boldsymbol{\\Omega}|^2|\\mathbf{\\rho}_i|^2 - (\\boldsymbol{\\Omega} \\cdot \\mathbf{\\rho}_i)^2)'}</MathBlock>
            <p>
              This is exactly <InlineMath>{'\\frac{1}{2}\\boldsymbol{\\Omega} \\cdot \\mathbf{I} \\boldsymbol{\\Omega}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The rotational kinetic energy is given by the quadratic form:
        </p>
        <MathBlock>{'T_{\\text{rot}} = \\frac{1}{2}\\langle\\boldsymbol{\\Omega}, \\mathbf{I}\\boldsymbol{\\Omega}\\rangle = \\frac{1}{2}\\boldsymbol{\\Omega} \\cdot \\mathbf{I} \\boldsymbol{\\Omega}'}</MathBlock>
        <p className="mt-2">
          In principal axes: <InlineMath>{'T_{\\text{rot}} = \\frac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2)'}</InlineMath>
        </p>
      </Theorem>

      <p className="mb-4">
        Combined with Koenig's theorem, the total kinetic energy of a rigid body is:
      </p>

      <MathBlock>{'T = \\frac{1}{2}M|\\dot{\\mathbf{R}}|^2 + \\frac{1}{2}\\boldsymbol{\\Omega} \\cdot \\mathbf{I} \\boldsymbol{\\Omega}'}</MathBlock>

      <Example title="Spinning Top">
        <p className="mb-2">
          A symmetric top spins about its symmetry axis with angular velocity <InlineMath>{'\\omega_3'}</InlineMath> while
          precessing about the vertical with angular velocity <InlineMath>{'\\omega_p'}</InlineMath>.
        </p>
        <p className="mb-2">
          The kinetic energy (for fixed center of mass) is:
        </p>
        <MathBlock>{'T = \\frac{1}{2}I_1(\\omega_1^2 + \\omega_2^2) + \\frac{1}{2}I_3\\omega_3^2'}</MathBlock>
        <p className="mb-2">
          The precession and nutation contribute to <InlineMath>{'\\omega_1^2 + \\omega_2^2'}</InlineMath>, while
          the spin contributes to <InlineMath>{'\\omega_3'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Parallel Axis Theorem</h3>

      <Theorem
        title="Parallel Axis (Steiner) Theorem"
        proof={
          <>
            <p className="mb-2">
              Let <InlineMath>{'\\mathbf{I}_G'}</InlineMath> be the inertia tensor about the center of mass G,
              and let <InlineMath>{'\\mathbf{I}_P'}</InlineMath> be the inertia tensor about a parallel axis
              through point P at position <InlineMath>{'\\mathbf{d}'}</InlineMath> from G.
            </p>
            <p className="mb-2">
              For a particle at <InlineMath>{'\\mathbf{\\rho}'}</InlineMath> from G, its position from P is
              <InlineMath>{'\\mathbf{\\rho} - \\mathbf{d}'}</InlineMath>.
            </p>
            <MathBlock>{'(\\mathbf{I}_P)_{jk} = \\sum_i m_i(|\\mathbf{\\rho}_i - \\mathbf{d}|^2\\delta_{jk} - (\\rho_{i,j} - d_j)(\\rho_{i,k} - d_k))'}</MathBlock>
            <p>
              Expanding and using <InlineMath>{'\\sum_i m_i \\mathbf{\\rho}_i = 0'}</InlineMath> (G is the center
              of mass), the cross terms vanish, leaving:
            </p>
            <MathBlock>{'\\mathbf{I}_P = \\mathbf{I}_G + M(|\\mathbf{d}|^2\\mathbf{1} - \\mathbf{d} \\otimes \\mathbf{d})'}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\mathbf{I}_G'}</InlineMath> is the inertia tensor about the center of mass and
          <InlineMath>{'\\mathbf{d}'}</InlineMath> is the displacement from the center of mass to a new
          reference point, then:
        </p>
        <MathBlock>{'\\mathbf{I}_P = \\mathbf{I}_G + M(|\\mathbf{d}|^2\\mathbf{1} - \\mathbf{d} \\otimes \\mathbf{d})'}</MathBlock>
        <p className="mt-2">
          For rotation about an axis at distance <InlineMath>{'d'}</InlineMath> from a parallel axis through
          the center of mass: <InlineMath>{'I_P = I_G + Md^2'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Compound Pendulum">
        <p className="mb-2">
          A uniform rod of length <InlineMath>{'L'}</InlineMath> and mass <InlineMath>{'M'}</InlineMath> swings
          about one end. The moment of inertia about the center is <InlineMath>{'I_G = \\frac{1}{12}ML^2'}</InlineMath>.
        </p>
        <p className="mb-2">
          The pivot is at distance <InlineMath>{'d = L/2'}</InlineMath> from the center, so:
        </p>
        <MathBlock>{'I_P = I_G + Md^2 = \\frac{1}{12}ML^2 + M\\left(\\frac{L}{2}\\right)^2 = \\frac{1}{3}ML^2'}</MathBlock>
        <p>
          The period of small oscillations is <InlineMath>{'T = 2\\pi\\sqrt{I_P/(MgL/2)} = 2\\pi\\sqrt{2L/3g}'}</InlineMath>.
        </p>
      </Example>
    </LessonLayout>
  );
}
