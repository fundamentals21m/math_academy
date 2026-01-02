import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
          Let <InlineMath>T: V \to W</InlineMath> be linear with ordered bases <InlineMath>\beta = {`\\{v_1, \\ldots, v_n\\}`}</InlineMath>
          for <InlineMath>V</InlineMath> and <InlineMath>\gamma = {`\\{w_1, \\ldots, w_m\\}`}</InlineMath> for <InlineMath>W</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>matrix of <InlineMath>T</InlineMath></strong> with respect to <InlineMath>\beta</InlineMath> and <InlineMath>\gamma</InlineMath>,
          denoted <InlineMath>[T]_\beta^\gamma</InlineMath>, is the <InlineMath>m \times n</InlineMath> matrix whose <InlineMath>j</InlineMath>-th column
          is <InlineMath>[T(v_j)]_\gamma</InlineMath>:
        </p>
        <MathBlock>{`[T]_\\beta^\\gamma = \\begin{pmatrix} | & | & & | \\\\ [T(v_1)]_\\gamma & [T(v_2)]_\\gamma & \\cdots & [T(v_n)]_\\gamma \\\\ | & | & & | \\end{pmatrix}`}</MathBlock>
      </Definition>

      <Example title="Matrix of a Linear Map">
        <p>
          Let <InlineMath>T: {`\\mathbb{R}`}^2 \to {`\\mathbb{R}`}^3</InlineMath> be defined by <InlineMath>T(x, y) = (x + y, 2x, y)</InlineMath>.
        </p>
        <p className="mt-2">Using standard bases <InlineMath>\beta = {`\\{\\mathbf{e}_1, \\mathbf{e}_2\\}`}</InlineMath> and <InlineMath>\gamma = {`\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}`}</InlineMath>:</p>
        <MathBlock>{`T(\\mathbf{e}_1) = T(1, 0) = (1, 2, 0) \\quad \\Rightarrow \\quad [T(\\mathbf{e}_1)]_\\gamma = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`T(\\mathbf{e}_2) = T(0, 1) = (1, 0, 1) \\quad \\Rightarrow \\quad [T(\\mathbf{e}_2)]_\\gamma = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`[T]_\\beta^\\gamma = \\begin{pmatrix} 1 & 1 \\\\ 2 & 0 \\\\ 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Example>

      <Theorem title="Matrix-Vector Multiplication">
        <p>
          For any <InlineMath>v \in V</InlineMath>:
        </p>
        <MathBlock>{`[T(v)]_\\gamma = [T]_\\beta^\\gamma [v]_\\beta`}</MathBlock>
        <p className="mt-2">
          That is, the matrix representation converts the action of <InlineMath>T</InlineMath> into matrix multiplication.
        </p>
      </Theorem>

      <h2>Composition and Matrix Multiplication</h2>

      <Theorem
        title="Composition Corresponds to Matrix Multiplication"
        proof={
          <>
            <p>Let <InlineMath>v_j</InlineMath> be the <InlineMath>j</InlineMath>-th basis vector in <InlineMath>\beta</InlineMath>. Then:</p>
            <MathBlock>{`[(S \\circ T)(v_j)]_\\delta = [S(T(v_j))]_\\delta = [S]_\\gamma^\\delta [T(v_j)]_\\gamma = [S]_\\gamma^\\delta ([T]_\\beta^\\gamma)_j`}</MathBlock>
            <p className="mt-2">
              where <InlineMath>([T]_\beta^\gamma)_j</InlineMath> is the <InlineMath>j</InlineMath>-th column of <InlineMath>[T]_\beta^\gamma</InlineMath>.
            </p>
            <p className="mt-2">
              This equals the <InlineMath>j</InlineMath>-th column of <InlineMath>[S]_\gamma^\delta [T]_\beta^\gamma</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          For linear maps <InlineMath>T: V \to W</InlineMath> and <InlineMath>S: W \to X</InlineMath> with appropriate bases:
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
          The <strong>change of basis matrix</strong> from basis <InlineMath>\beta'</InlineMath> to basis <InlineMath>\beta</InlineMath>
          is the matrix <InlineMath>P = [I]_{'{\\beta\'}'}^\beta</InlineMath> where <InlineMath>I</InlineMath> is the identity map.
        </p>
        <p className="mt-2">
          Its columns are the coordinate vectors of the <InlineMath>\beta'</InlineMath> basis vectors expressed in the
          <InlineMath>\beta</InlineMath> basis.
        </p>
      </Definition>

      <Example title="Change of Basis in R^2">
        <p>
          Let <InlineMath>\beta = {`\\{(1, 0), (0, 1)\\}`}</InlineMath> (standard) and <InlineMath>\beta' = {`\\{(1, 1), (1, -1)\\}`}</InlineMath>.
        </p>
        <p className="mt-2">The change of basis matrix from <InlineMath>\beta'</InlineMath> to <InlineMath>\beta</InlineMath> is:</p>
        <MathBlock>{`P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          Column 1 is <InlineMath>(1, 1)</InlineMath> (coordinates of first <InlineMath>\beta'</InlineMath> vector in <InlineMath>\beta</InlineMath>).
        </p>
        <p>
          Column 2 is <InlineMath>(1, -1)</InlineMath> (coordinates of second <InlineMath>\beta'</InlineMath> vector in <InlineMath>\beta</InlineMath>).
        </p>
      </Example>

      <Theorem title="Coordinate Conversion">
        <p>
          If <InlineMath>P</InlineMath> is the change of basis matrix from <InlineMath>\beta'</InlineMath> to <InlineMath>\beta</InlineMath>, then
          for any vector <InlineMath>v</InlineMath>:
        </p>
        <MathBlock>{`[v]_\\beta = P[v]_{\\beta'}`}</MathBlock>
        <p className="mt-2">And:</p>
        <MathBlock>{`[v]_{\\beta'} = P^{-1}[v]_\\beta`}</MathBlock>
      </Theorem>

      <h2>Similar Matrices</h2>

      <Definition title="Similar Matrices">
        <p>
          Matrices <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are <strong>similar</strong> if there exists an
          invertible matrix <InlineMath>P</InlineMath> such that:
        </p>
        <MathBlock>{`B = P^{-1}AP`}</MathBlock>
      </Definition>

      <Theorem
        title="Change of Basis for Linear Operators"
        proof={
          <>
            <p>
              Let <InlineMath>T: V \to V</InlineMath> and let <InlineMath>P</InlineMath> be the change of basis matrix from <InlineMath>\beta'</InlineMath> to <InlineMath>\beta</InlineMath>.
            </p>
            <p className="mt-2">We have <InlineMath>T = I \circ T \circ I</InlineMath>, so:</p>
            <MathBlock>{`[T]_{\\beta'} = [I]_\\beta^{\\beta'} [T]_\\beta [I]_{\\beta'}^\\beta = P^{-1} [T]_\\beta P`}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>{`[T]_\\beta`}</InlineMath> and <InlineMath>{`[T]_{\\beta'}`}</InlineMath> are matrices of <InlineMath>T: V \to V</InlineMath>
          with respect to different bases, then:
        </p>
        <MathBlock>{`[T]_{\\beta'} = P^{-1}[T]_\\beta P`}</MathBlock>
        <p className="mt-2">where <InlineMath>P</InlineMath> is the change of basis matrix from <InlineMath>\beta'</InlineMath> to <InlineMath>\beta</InlineMath>.</p>
      </Theorem>

      <Callout type="info">
        <strong>Geometric Interpretation:</strong> Similar matrices represent the same linear transformation
        in different coordinate systems. The conjugation <InlineMath>P^{'{-1}'}AP</InlineMath> translates from one
        coordinate system to another, applies <InlineMath>A</InlineMath>, then translates back.
      </Callout>

      <Example title="Diagonalization Preview">
        <p>
          Let <InlineMath>A = \begin{'{pmatrix}'} 2 & 1 \\ 0 & 3 \end{'{pmatrix}'}</InlineMath>. Consider the basis
          <InlineMath>\beta' = {`\\{(1, 0), (1, 1)\\}`}</InlineMath>.
        </p>
        <p className="mt-2">
          The change of basis matrix is <InlineMath>P = \begin{'{pmatrix}'} 1 & 1 \\ 0 & 1 \end{'{pmatrix}'}</InlineMath>.
        </p>
        <p className="mt-2">Computing:</p>
        <MathBlock>{`P^{-1}AP = \\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          In the new basis, the matrix is diagonal! (The columns of <InlineMath>P</InlineMath> are eigenvectors of <InlineMath>A</InlineMath>.)
        </p>
      </Example>

      <h2>Properties Preserved by Similarity</h2>

      <Theorem title="Invariants of Similar Matrices">
        <p>If <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are similar, they have the same:</p>
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
          <li>The matrix of <InlineMath>T</InlineMath> has columns = images of basis vectors in coordinates</li>
          <li>Composition corresponds to matrix multiplication: <InlineMath>[S \circ T] = [S][T]</InlineMath></li>
          <li>Change of basis: <InlineMath>{`[v]_\\beta = P[v]_{\\beta'}`}</InlineMath></li>
          <li>Similar matrices: <InlineMath>{`B = P^{-1}AP`}</InlineMath> represent the same transformation</li>
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
