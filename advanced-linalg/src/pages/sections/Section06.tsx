import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section06Quiz } from '@/data/quizzes';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Matrix Representation: The Bridge Between Algebra and Computation</h2>

      <p>
        Every linear transformation between finite-dimensional vector spaces can be represented by
        a matrix. This representation depends on the choice of bases, and understanding how the
        matrix changes with different bases is crucial.
      </p>

      <Callout type="info">
        <strong>The Connection:</strong> A linear transformation is an abstract concept; a matrix
        is a concrete array of numbers. The matrix representation bridges these worlds, allowing
        us to compute with abstract maps.
      </Callout>

      <h2>The Matrix of a Linear Transformation</h2>

      <Definition title="Matrix Representation">
        <p>
          Let <Math>T: V \to W</Math> be linear with ordered bases <Math>\beta = {`\\{v_1, \\ldots, v_n\\}`}</Math>
          for <Math>V</Math> and <Math>\gamma = {`\\{w_1, \\ldots, w_m\\}`}</Math> for <Math>W</Math>.
        </p>
        <p className="mt-2">
          The <strong>matrix of <Math>T</Math></strong> with respect to <Math>\beta</Math> and <Math>\gamma</Math>,
          denoted <Math>[T]_\beta^\gamma</Math>, is the <Math>m \times n</Math> matrix whose <Math>j</Math>-th column
          is <Math>[T(v_j)]_\gamma</Math>:
        </p>
        <MathBlock>{`[T]_\\beta^\\gamma = \\begin{pmatrix} | & | & & | \\\\ [T(v_1)]_\\gamma & [T(v_2)]_\\gamma & \\cdots & [T(v_n)]_\\gamma \\\\ | & | & & | \\end{pmatrix}`}</MathBlock>
      </Definition>

      <Example title="Matrix of a Linear Map">
        <p>
          Let <Math>T: {`\\mathbb{R}`}^2 \to {`\\mathbb{R}`}^3</Math> be defined by <Math>T(x, y) = (x + y, 2x, y)</Math>.
        </p>
        <p className="mt-2">Using standard bases <Math>\beta = {`\\{\\mathbf{e}_1, \\mathbf{e}_2\\}`}</Math> and <Math>\gamma = {`\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}`}</Math>:</p>
        <MathBlock>{`T(\\mathbf{e}_1) = T(1, 0) = (1, 2, 0) \\quad \\Rightarrow \\quad [T(\\mathbf{e}_1)]_\\gamma = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`T(\\mathbf{e}_2) = T(0, 1) = (1, 0, 1) \\quad \\Rightarrow \\quad [T(\\mathbf{e}_2)]_\\gamma = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`[T]_\\beta^\\gamma = \\begin{pmatrix} 1 & 1 \\\\ 2 & 0 \\\\ 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Example>

      <Theorem title="Matrix-Vector Multiplication">
        <p>
          For any <Math>v \in V</Math>:
        </p>
        <MathBlock>{`[T(v)]_\\gamma = [T]_\\beta^\\gamma [v]_\\beta`}</MathBlock>
        <p className="mt-2">
          That is, the matrix representation converts the action of <Math>T</Math> into matrix multiplication.
        </p>
      </Theorem>

      <h2>Composition and Matrix Multiplication</h2>

      <Theorem
        title="Composition Corresponds to Matrix Multiplication"
        proof={
          <>
            <p>Let <Math>v_j</Math> be the <Math>j</Math>-th basis vector in <Math>\beta</Math>. Then:</p>
            <MathBlock>{`[(S \\circ T)(v_j)]_\\delta = [S(T(v_j))]_\\delta = [S]_\\gamma^\\delta [T(v_j)]_\\gamma = [S]_\\gamma^\\delta ([T]_\\beta^\\gamma)_j`}</MathBlock>
            <p className="mt-2">
              where <Math>([T]_\beta^\gamma)_j</Math> is the <Math>j</Math>-th column of <Math>[T]_\beta^\gamma</Math>.
            </p>
            <p className="mt-2">
              This equals the <Math>j</Math>-th column of <Math>[S]_\gamma^\delta [T]_\beta^\gamma</Math>.
            </p>
          </>
        }
      >
        <p>
          For linear maps <Math>T: V \to W</Math> and <Math>S: W \to X</Math> with appropriate bases:
        </p>
        <MathBlock>{`[S \\circ T]_\\beta^\\delta = [S]_\\gamma^\\delta [T]_\\beta^\\gamma`}</MathBlock>
      </Theorem>

      <Callout type="success">
        <strong>Key Insight:</strong> Matrix multiplication is not arbitrary — it's designed precisely
        so that the product of matrices represents the composition of the corresponding linear maps.
      </Callout>

      <h2>Change of Basis</h2>

      <Definition title="Change of Basis Matrix">
        <p>
          The <strong>change of basis matrix</strong> from basis <Math>\beta'</Math> to basis <Math>\beta</Math>
          is the matrix <Math>P = [I]_{'{\\beta\'}'}^\beta</Math> where <Math>I</Math> is the identity map.
        </p>
        <p className="mt-2">
          Its columns are the coordinate vectors of the <Math>\beta'</Math> basis vectors expressed in the
          <Math>\beta</Math> basis.
        </p>
      </Definition>

      <Example title="Change of Basis in R^2">
        <p>
          Let <Math>\beta = {`\\{(1, 0), (0, 1)\\}`}</Math> (standard) and <Math>\beta' = {`\\{(1, 1), (1, -1)\\}`}</Math>.
        </p>
        <p className="mt-2">The change of basis matrix from <Math>\beta'</Math> to <Math>\beta</Math> is:</p>
        <MathBlock>{`P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          Column 1 is <Math>(1, 1)</Math> (coordinates of first <Math>\beta'</Math> vector in <Math>\beta</Math>).
        </p>
        <p>
          Column 2 is <Math>(1, -1)</Math> (coordinates of second <Math>\beta'</Math> vector in <Math>\beta</Math>).
        </p>
      </Example>

      <Theorem title="Coordinate Conversion">
        <p>
          If <Math>P</Math> is the change of basis matrix from <Math>\beta'</Math> to <Math>\beta</Math>, then
          for any vector <Math>v</Math>:
        </p>
        <MathBlock>{`[v]_\\beta = P[v]_{\\beta'}`}</MathBlock>
        <p className="mt-2">And:</p>
        <MathBlock>{`[v]_{\\beta'} = P^{-1}[v]_\\beta`}</MathBlock>
      </Theorem>

      <h2>Similar Matrices</h2>

      <Definition title="Similar Matrices">
        <p>
          Matrices <Math>A</Math> and <Math>B</Math> are <strong>similar</strong> if there exists an
          invertible matrix <Math>P</Math> such that:
        </p>
        <MathBlock>{`B = P^{-1}AP`}</MathBlock>
      </Definition>

      <Theorem
        title="Change of Basis for Linear Operators"
        proof={
          <>
            <p>
              Let <Math>T: V \to V</Math> and let <Math>P</Math> be the change of basis matrix from <Math>\beta'</Math> to <Math>\beta</Math>.
            </p>
            <p className="mt-2">We have <Math>T = I \circ T \circ I</Math>, so:</p>
            <MathBlock>{`[T]_{\\beta'} = [I]_\\beta^{\\beta'} [T]_\\beta [I]_{\\beta'}^\\beta = P^{-1} [T]_\\beta P`}</MathBlock>
          </>
        }
      >
        <p>
          If <Math>{`[T]_\\beta`}</Math> and <Math>{`[T]_{\\beta'}`}</Math> are matrices of <Math>T: V \to V</Math>
          with respect to different bases, then:
        </p>
        <MathBlock>{`[T]_{\\beta'} = P^{-1}[T]_\\beta P`}</MathBlock>
        <p className="mt-2">where <Math>P</Math> is the change of basis matrix from <Math>\beta'</Math> to <Math>\beta</Math>.</p>
      </Theorem>

      <Callout type="info">
        <strong>Geometric Interpretation:</strong> Similar matrices represent the same linear transformation
        in different coordinate systems. The conjugation <Math>P^{'{-1}'}AP</Math> translates from one
        coordinate system to another, applies <Math>A</Math>, then translates back.
      </Callout>

      <Example title="Diagonalization Preview">
        <p>
          Let <Math>A = \begin{'{pmatrix}'} 2 & 1 \\ 0 & 3 \end{'{pmatrix}'}</Math>. Consider the basis
          <Math>\beta' = {`\\{(1, 0), (1, 1)\\}`}</Math>.
        </p>
        <p className="mt-2">
          The change of basis matrix is <Math>P = \begin{'{pmatrix}'} 1 & 1 \\ 0 & 1 \end{'{pmatrix}'}</Math>.
        </p>
        <p className="mt-2">Computing:</p>
        <MathBlock>{`P^{-1}AP = \\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          In the new basis, the matrix is diagonal! (The columns of <Math>P</Math> are eigenvectors of <Math>A</Math>.)
        </p>
      </Example>

      <h2>Properties Preserved by Similarity</h2>

      <Theorem title="Invariants of Similar Matrices">
        <p>If <Math>A</Math> and <Math>B</Math> are similar, they have the same:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li>Determinant</li>
          <li>Trace (sum of diagonal entries)</li>
          <li>Eigenvalues (with same multiplicities)</li>
          <li>Characteristic polynomial</li>
          <li>Rank</li>
        </ul>
      </Theorem>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>The matrix of <Math>T</Math> has columns = images of basis vectors in coordinates</li>
          <li>Composition corresponds to matrix multiplication: <Math>[S \circ T] = [S][T]</Math></li>
          <li>Change of basis: <Math>{`[v]_\\beta = P[v]_{\\beta'}`}</Math></li>
          <li>Similar matrices: <Math>{`B = P^{-1}AP`}</Math> represent the same transformation</li>
          <li>Similarity preserves det, trace, eigenvalues, char polynomial, rank</li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={6}
        questions={section06Quiz}
        title="Matrix Representation Quiz"
      />
    </LessonLayout>
  );
}
