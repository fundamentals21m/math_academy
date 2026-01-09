import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <h2>Linear Transformations and Matrices</h2>

      <p>
        Linear transformations are functions between vector spaces that preserve the vector space
        structure. Matrices provide a concrete representation of linear transformations between
        finite-dimensional spaces, connecting abstract algebra with computation.
      </p>

      <h3>Linear Transformations</h3>

      <Definition title="Linear Transformation">
        <p>
          A function <InlineMath>{'T: V \\to W'}</InlineMath> between vector spaces over <InlineMath>F</InlineMath>
          is a <strong>linear transformation</strong> (or linear map) if:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><InlineMath>{'T(u + v) = T(u) + T(v)'}</InlineMath> for all <InlineMath>{'u, v \\in V'}</InlineMath></li>
          <li><InlineMath>{'T(cv) = cT(v)'}</InlineMath> for all <InlineMath>{'c \\in F'}</InlineMath>, <InlineMath>{'v \\in V'}</InlineMath></li>
        </ol>
        <p className="mt-2">
          Equivalently: <InlineMath>{'T(au + bv) = aT(u) + bT(v)'}</InlineMath>.
        </p>
      </Definition>

      <Example title="Standard Linear Transformations">
        <p>
          <strong>Zero map:</strong> <InlineMath>{'T(v) = 0'}</InlineMath> for all <InlineMath>v</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Identity:</strong> <InlineMath>{'I(v) = v'}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Projection:</strong> <InlineMath>{'\\pi: \\mathbb{R}^3 \\to \\mathbb{R}^2'}</InlineMath> via <InlineMath>{'\\pi(x, y, z) = (x, y)'}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Differentiation:</strong> <InlineMath>{'D: F[x] \\to F[x]'}</InlineMath> via <InlineMath>{'D(f) = f\''}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Rotation:</strong> <InlineMath>{'R_\\theta: \\mathbb{R}^2 \\to \\mathbb{R}^2'}</InlineMath> rotating by angle <InlineMath>{'\\theta'}</InlineMath>.
        </p>
      </Example>

      <Definition title="Kernel and Image">
        <p>
          For a linear transformation <InlineMath>{'T: V \\to W'}</InlineMath>:
        </p>
        <MathBlock>
          {'\\ker(T) = \\{v \\in V : T(v) = 0\\}'}
        </MathBlock>
        <MathBlock>
          {'\\text{Im}(T) = \\{T(v) : v \\in V\\}'}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{'\\ker(T)'}</InlineMath> is a subspace of <InlineMath>V</InlineMath>;
          <InlineMath>{'\\text{Im}(T)'}</InlineMath> is a subspace of <InlineMath>W</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Rank-Nullity Theorem"
        proof={
          <>
            <p>
              Let <InlineMath>{'\\{u_1, \\ldots, u_k\\}'}</InlineMath> be a basis for <InlineMath>{'\\ker(T)'}</InlineMath>.
              Extend to a basis <InlineMath>{'\\{u_1, \\ldots, u_k, v_1, \\ldots, v_r\\}'}</InlineMath> for <InlineMath>V</InlineMath>.
            </p>
            <p className="mt-2">
              Claim: <InlineMath>{'\\{T(v_1), \\ldots, T(v_r)\\}'}</InlineMath> is a basis for <InlineMath>{'\\text{Im}(T)'}</InlineMath>.
            </p>
            <p className="mt-2">
              Spanning: Any <InlineMath>{'T(v) = T(\\sum a_i u_i + \\sum b_j v_j) = \\sum b_j T(v_j)'}</InlineMath>.
            </p>
            <p className="mt-2">
              Independence: If <InlineMath>{'\\sum c_j T(v_j) = 0'}</InlineMath>, then <InlineMath>{'T(\\sum c_j v_j) = 0'}</InlineMath>,
              so <InlineMath>{'\\sum c_j v_j \\in \\ker(T) = \\text{span}(u_i)'}</InlineMath>. By independence of the
              full basis, all <InlineMath>{'c_j = 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For a linear transformation <InlineMath>{'T: V \\to W'}</InlineMath> with <InlineMath>V</InlineMath> finite-dimensional:
        </p>
        <MathBlock>
          {'\\dim V = \\dim(\\ker T) + \\dim(\\text{Im} T) = \\text{nullity}(T) + \\text{rank}(T)'}
        </MathBlock>
      </Theorem>

      <h3>Matrix Representation</h3>

      <Definition title="Matrix of a Linear Transformation">
        <p>
          Let <InlineMath>{'T: V \\to W'}</InlineMath> be linear with ordered bases
          <InlineMath>{'\\mathcal{B} = (v_1, \\ldots, v_n)'}</InlineMath> for <InlineMath>V</InlineMath> and
          <InlineMath>{'\\mathcal{C} = (w_1, \\ldots, w_m)'}</InlineMath> for <InlineMath>W</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>matrix of <InlineMath>T</InlineMath></strong> with respect to these bases is the
          <InlineMath>{'m \\times n'}</InlineMath> matrix <InlineMath>{'[T]_{\\mathcal{B}}^{\\mathcal{C}}'}</InlineMath>
          whose <InlineMath>j</InlineMath>-th column is <InlineMath>{'[T(v_j)]_{\\mathcal{C}}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Matrix-Vector Multiplication"
        proof={
          <>
            <p>
              Write <InlineMath>{'v = \\sum a_j v_j'}</InlineMath>. Then <InlineMath>{'T(v) = \\sum a_j T(v_j)'}</InlineMath>.
              In coordinates:
            </p>
            <MathBlock>
              {'[T(v)]_{\\mathcal{C}} = \\sum a_j [T(v_j)]_{\\mathcal{C}} = [T]_{\\mathcal{B}}^{\\mathcal{C}} \\cdot [v]_{\\mathcal{B}}'}
            </MathBlock>
          </>
        }
      >
        <p>
          For any <InlineMath>{'v \\in V'}</InlineMath>:
        </p>
        <MathBlock>
          {'[T(v)]_{\\mathcal{C}} = [T]_{\\mathcal{B}}^{\\mathcal{C}} \\cdot [v]_{\\mathcal{B}}'}
        </MathBlock>
        <p className="mt-2">
          Linear transformations correspond to matrix multiplication.
        </p>
      </Theorem>

      <Example title="Matrix of Rotation">
        <p>
          The rotation <InlineMath>{'R_\\theta: \\mathbb{R}^2 \\to \\mathbb{R}^2'}</InlineMath> has matrix
          (with standard basis):
        </p>
        <MathBlock>
          {'[R_\\theta] = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2">
          Indeed: <InlineMath>{'R_\\theta(e_1) = (\\cos\\theta, \\sin\\theta)'}</InlineMath> and
          <InlineMath>{'R_\\theta(e_2) = (-\\sin\\theta, \\cos\\theta)'}</InlineMath>.
        </p>
      </Example>

      <h3>Composition and Matrix Multiplication</h3>

      <Theorem title="Composition Corresponds to Matrix Product"
        proof={
          <>
            <p>
              For <InlineMath>{'v \\in U'}</InlineMath>:
            </p>
            <MathBlock>
              {'[(ST)(v)]_{\\mathcal{D}} = [S(T(v))]_{\\mathcal{D}} = [S]_{\\mathcal{C}}^{\\mathcal{D}} [T(v)]_{\\mathcal{C}}'}
            </MathBlock>
            <MathBlock>
              {'= [S]_{\\mathcal{C}}^{\\mathcal{D}} [T]_{\\mathcal{B}}^{\\mathcal{C}} [v]_{\\mathcal{B}}'}
            </MathBlock>
            <p className="mt-2">
              So <InlineMath>{'[ST] = [S][T]'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'T: U \\to V'}</InlineMath> and <InlineMath>{'S: V \\to W'}</InlineMath> are linear, then
        </p>
        <MathBlock>
          {'[ST]_{\\mathcal{B}}^{\\mathcal{D}} = [S]_{\\mathcal{C}}^{\\mathcal{D}} \\cdot [T]_{\\mathcal{B}}^{\\mathcal{C}}'}
        </MathBlock>
      </Theorem>

      <h3>Change of Basis</h3>

      <Definition title="Change of Basis Matrix">
        <p>
          If <InlineMath>{'\\mathcal{B}'}</InlineMath> and <InlineMath>{'\\mathcal{B}\''}</InlineMath> are bases for <InlineMath>V</InlineMath>,
          the <strong>change of basis matrix</strong> from <InlineMath>{'\\mathcal{B}'}</InlineMath> to <InlineMath>{'\\mathcal{B}\''}</InlineMath> is:
        </p>
        <MathBlock>
          {'P = [I]_{\\mathcal{B}}^{\\mathcal{B}\'}'}
        </MathBlock>
        <p className="mt-2">
          This satisfies <InlineMath>{'[v]_{\\mathcal{B}\'} = P[v]_{\\mathcal{B}}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Similar Matrices"
        proof={
          <>
            <p>
              Let <InlineMath>{'P = [I]_{\\mathcal{B}}^{\\mathcal{B}\'}'}</InlineMath>. Then:
            </p>
            <MathBlock>
              {'[T]_{\\mathcal{B}\'} = [I \\circ T \\circ I]_{\\mathcal{B}\'}^{\\mathcal{B}\'}'}
            </MathBlock>
            <MathBlock>
              {'= [I]_{\\mathcal{B}}^{\\mathcal{B}\'} [T]_{\\mathcal{B}} [I]_{\\mathcal{B}\'}^{\\mathcal{B}} = P [T]_{\\mathcal{B}} P^{-1}'}
            </MathBlock>
          </>
        }
      >
        <p>
          For <InlineMath>{'T: V \\to V'}</InlineMath>, if <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are matrices
          of <InlineMath>T</InlineMath> with respect to different bases, then <InlineMath>{'B = PAP^{-1}'}</InlineMath>
          for some invertible <InlineMath>P</InlineMath>.
        </p>
        <p className="mt-2">
          Matrices related by <InlineMath>{'B = PAP^{-1}'}</InlineMath> are called <strong>similar</strong>.
        </p>
      </Theorem>

      <h3>The Space of Linear Maps</h3>

      <Theorem title="Hom as a Vector Space"
        proof={
          <>
            <p>
              Define <InlineMath>{'(T + S)(v) = T(v) + S(v)'}</InlineMath> and <InlineMath>{'(cT)(v) = cT(v)'}</InlineMath>.
              Verification of vector space axioms is routine.
            </p>
            <p className="mt-2">
              The isomorphism to <InlineMath>{'F^{m \\times n}'}</InlineMath> is given by <InlineMath>{'T \\mapsto [T]'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The set <InlineMath>{'\\mathcal{L}(V, W) = \\text{Hom}_F(V, W)'}</InlineMath> of all linear maps
          from <InlineMath>V</InlineMath> to <InlineMath>W</InlineMath> is a vector space.
        </p>
        <p className="mt-2">
          If <InlineMath>{'\\dim V = n'}</InlineMath> and <InlineMath>{'\\dim W = m'}</InlineMath>, then
          <InlineMath>{'\\dim \\mathcal{L}(V, W) = mn'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Invariants:</strong> Similar matrices represent the same linear transformation in different
        bases. Properties that depend only on the transformation (not the basis) are invariants of the
        similarity class: trace, determinant, eigenvalues, characteristic polynomial, minimal polynomial.
      </Callout>

      <Callout type="success">
        <strong>Summary:</strong> Linear transformations preserve vector space structure. They are
        represented by matrices once bases are chosen. Composition corresponds to matrix multiplication.
        Change of basis corresponds to similarity: <InlineMath>{'B = PAP^{-1}'}</InlineMath>. The rank-nullity
        theorem relates domain dimension to kernel and image dimensions.
      </Callout>
    </LessonLayout>
  );
}
