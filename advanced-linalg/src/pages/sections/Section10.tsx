import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section10Quiz } from '@/data/quizzes';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>Eigenvalues and Eigenvectors: Invariant Directions</h2>

      <p>
        An <strong>eigenvector</strong> is a nonzero vector whose direction is preserved by a
        linear transformation — it may be scaled, but it's not rotated. The scaling factor is
        the <strong>eigenvalue</strong>. These concepts are central to understanding the behavior
        of linear operators.
      </p>

      <Callout type="info">
        <strong>Etymology:</strong> "Eigen" is German for "own" or "characteristic." Eigenvalues
        are the characteristic values of a transformation — the special scalings that occur along
        invariant directions.
      </Callout>

      <h2>Definitions</h2>

      <Definition title="Eigenvalue and Eigenvector">
        <p>
          Let <InlineMath>T: V \to V</InlineMath> be a linear operator. A scalar <InlineMath>\lambda \in F</InlineMath> is an
          <strong>eigenvalue</strong> of <InlineMath>T</InlineMath> if there exists a nonzero vector <InlineMath>v \in V</InlineMath>
          such that:
        </p>
        <MathBlock>{`T(v) = \\lambda v`}</MathBlock>
        <p className="mt-2">
          Such a nonzero <InlineMath>v</InlineMath> is called an <strong>eigenvector</strong> corresponding to <InlineMath>\lambda</InlineMath>.
        </p>
      </Definition>

      <Example title="Geometric Examples">
        <p><strong>Projection onto x-axis:</strong> <InlineMath>P(x, y) = (x, 0)</InlineMath></p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><InlineMath>\lambda = 1</InlineMath>: eigenvectors on x-axis (unchanged)</li>
          <li><InlineMath>\lambda = 0</InlineMath>: eigenvectors on y-axis (collapsed to origin)</li>
        </ul>
        <p className="mt-4"><strong>Rotation by 90°:</strong> No real eigenvalues!</p>
        <p className="text-dark-300">Every vector changes direction (except <InlineMath>{`\\mathbf{0}`}</InlineMath>, which doesn't count).</p>
      </Example>

      <Definition title="Eigenspace">
        <p>
          The <strong>eigenspace</strong> for eigenvalue <InlineMath>\lambda</InlineMath> is:
        </p>
        <MathBlock>{`E_\\lambda = \\ker(T - \\lambda I) = \\{v \\in V : T(v) = \\lambda v\\}`}</MathBlock>
        <p className="mt-2">
          This includes the zero vector, so <InlineMath>E_\lambda</InlineMath> is a subspace.
          The eigenvectors for <InlineMath>\lambda</InlineMath> are the nonzero elements of <InlineMath>E_\lambda</InlineMath>.
        </p>
      </Definition>

      <h2>Finding Eigenvalues: The Characteristic Polynomial</h2>

      <Theorem
        title="Eigenvalue Criterion"
        proof={
          <>
            <p><InlineMath>\lambda</InlineMath> is an eigenvalue</p>
            <p><InlineMath>\iff</InlineMath> there exists nonzero <InlineMath>v</InlineMath> with <InlineMath>T(v) = \lambda v</InlineMath></p>
            <p><InlineMath>\iff</InlineMath> there exists nonzero <InlineMath>v</InlineMath> with <InlineMath>(T - \lambda I)(v) = {`\\mathbf{0}`}</InlineMath></p>
            <p><InlineMath>\iff</InlineMath> <InlineMath>\ker(T - \lambda I) \neq {`\\{\\mathbf{0}\\}`}</InlineMath></p>
            <p><InlineMath>\iff</InlineMath> <InlineMath>T - \lambda I</InlineMath> is not invertible</p>
            <p><InlineMath>\iff</InlineMath> <InlineMath>\det(T - \lambda I) = 0</InlineMath></p>
          </>
        }
      >
        <p>
          <InlineMath>\lambda</InlineMath> is an eigenvalue of <InlineMath>T</InlineMath> (or <InlineMath>A</InlineMath>) if and only if
          <InlineMath>\det(\lambda I - A) = 0</InlineMath>.
        </p>
      </Theorem>

      <Definition title="Characteristic Polynomial">
        <p>
          The <strong>characteristic polynomial</strong> of <InlineMath>A</InlineMath> is:
        </p>
        <MathBlock>{`p(\\lambda) = \\det(\\lambda I - A)`}</MathBlock>
        <p className="mt-2">
          For an <InlineMath>n \times n</InlineMath> matrix, this is a monic polynomial of degree <InlineMath>n</InlineMath>.
        </p>
      </Definition>

      <Example title="Computing Eigenvalues">
        <p>Find eigenvalues of <InlineMath>A = \begin{'{pmatrix}'} 4 & 1 \\ 2 & 3 \end{'{pmatrix}'}</InlineMath>:</p>
        <MathBlock>{`p(\\lambda) = \\det\\begin{pmatrix} \\lambda - 4 & -1 \\\\ -2 & \\lambda - 3 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`= (\\lambda - 4)(\\lambda - 3) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 5)(\\lambda - 2)`}</MathBlock>
        <p className="mt-2">Eigenvalues: <InlineMath>\lambda_1 = 5, \lambda_2 = 2</InlineMath></p>
        <p className="mt-4"><strong>Finding eigenvectors for <InlineMath>\lambda = 5</InlineMath>:</strong></p>
        <MathBlock>{`(A - 5I)v = \\begin{pmatrix} -1 & 1 \\\\ 2 & -2 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\mathbf{0}`}</MathBlock>
        <p>This gives <InlineMath>x = y</InlineMath>, so <InlineMath>E_5 = {`\\text{span}`}{`\\{(1, 1)^T\\}`}</InlineMath>.</p>
        <p className="mt-2"><strong>For <InlineMath>\lambda = 2</InlineMath>:</strong></p>
        <MathBlock>{`(A - 2I)v = \\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\mathbf{0}`}</MathBlock>
        <p>This gives <InlineMath>2x + y = 0</InlineMath>, so <InlineMath>E_2 = {`\\text{span}`}{`\\{(1, -2)^T\\}`}</InlineMath>.</p>
      </Example>

      <h2>Properties of Eigenvalues</h2>

      <Theorem
        title="Eigenvectors for Distinct Eigenvalues are Independent"
        proof={
          <>
            <p>By induction on <InlineMath>k</InlineMath>. Base case <InlineMath>k = 1</InlineMath> is trivial.</p>
            <p className="mt-2">Suppose <InlineMath>c_1 v_1 + \cdots + c_k v_k = {`\\mathbf{0}`}</InlineMath>. Apply <InlineMath>T</InlineMath>:</p>
            <MathBlock>{`c_1 \\lambda_1 v_1 + \\cdots + c_k \\lambda_k v_k = \\mathbf{0}`}</MathBlock>
            <p className="mt-2">Subtract <InlineMath>\lambda_k</InlineMath> times the original:</p>
            <MathBlock>{`c_1(\\lambda_1 - \\lambda_k)v_1 + \\cdots + c_{k-1}(\\lambda_{k-1} - \\lambda_k)v_{k-1} = \\mathbf{0}`}</MathBlock>
            <p className="mt-2">By induction, each <InlineMath>c_i(\lambda_i - \lambda_k) = 0</InlineMath>. Since <InlineMath>\lambda_i \neq \lambda_k</InlineMath>, we get <InlineMath>c_i = 0</InlineMath>.</p>
            <p className="mt-2">Then <InlineMath>c_k v_k = {`\\mathbf{0}`}</InlineMath>, so <InlineMath>c_k = 0</InlineMath>.</p>
          </>
        }
      >
        <p>
          Eigenvectors corresponding to distinct eigenvalues are linearly independent.
        </p>
      </Theorem>

      <Theorem title="Properties from Characteristic Polynomial">
        <p>For an <InlineMath>n \times n</InlineMath> matrix <InlineMath>A</InlineMath>:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li>Trace = sum of eigenvalues (with multiplicities)</li>
          <li>Determinant = product of eigenvalues</li>
          <li>The characteristic polynomial has degree <InlineMath>n</InlineMath></li>
          <li>Over <InlineMath>{`\\mathbb{C}`}</InlineMath>, there are exactly <InlineMath>n</InlineMath> eigenvalues (counting multiplicity)</li>
        </ul>
      </Theorem>

      <h2>Algebraic vs. Geometric Multiplicity</h2>

      <Definition title="Multiplicities">
        <p>For an eigenvalue <InlineMath>\lambda</InlineMath>:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><strong>Algebraic multiplicity:</strong> multiplicity as a root of the characteristic polynomial</li>
          <li><strong>Geometric multiplicity:</strong> <InlineMath>\dim(E_\lambda) = \dim(\ker(A - \lambda I))</InlineMath></li>
        </ul>
      </Definition>

      <Theorem title="Multiplicity Inequality">
        <p>
          For any eigenvalue: <InlineMath>1 \leq </InlineMath> geometric multiplicity <InlineMath>\leq</InlineMath> algebraic multiplicity.
        </p>
      </Theorem>

      <Example title="Multiplicities Can Differ">
        <p>Consider <InlineMath>A = \begin{'{pmatrix}'} 2 & 1 \\ 0 & 2 \end{'{pmatrix}'}</InlineMath>:</p>
        <MathBlock>{`p(\\lambda) = (\\lambda - 2)^2`}</MathBlock>
        <p className="mt-2">
          <InlineMath>\lambda = 2</InlineMath> has algebraic multiplicity 2.
        </p>
        <MathBlock>{`A - 2I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          <InlineMath>E_2 = \ker(A - 2I) = {`\\text{span}`}{`\\{(1, 0)^T\\}`}</InlineMath>, so geometric multiplicity = 1.
        </p>
        <p className="mt-2 text-amber-400">
          This matrix is NOT diagonalizable!
        </p>
      </Example>

      <h2>Eigenvalues of Special Matrices</h2>

      <Theorem title="Eigenvalues of Special Matrices">
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-2">
          <li><strong>Triangular matrix:</strong> Eigenvalues = diagonal entries</li>
          <li><strong>Similar matrices:</strong> Have the same eigenvalues</li>
          <li><strong>Real symmetric matrix:</strong> All eigenvalues are real</li>
          <li><strong>Orthogonal matrix:</strong> Eigenvalues have <InlineMath>|\lambda| = 1</InlineMath></li>
          <li><strong>Idempotent (<InlineMath>A^2 = A</InlineMath>):</strong> Eigenvalues are 0 or 1</li>
          <li><strong>Nilpotent (<InlineMath>A^k = 0</InlineMath>):</strong> Only eigenvalue is 0</li>
        </ul>
      </Theorem>

      <Callout type="success">
        <strong>Key Insight:</strong> The eigenvalue problem <InlineMath>Av = \lambda v</InlineMath> asks:
        "For which scalars <InlineMath>\lambda</InlineMath> does <InlineMath>A - \lambda I</InlineMath> have a nontrivial kernel?"
        This connects eigenvalues to invertibility, determinants, and the structure of linear maps.
      </Callout>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Eigenvalue <InlineMath>\lambda</InlineMath>: <InlineMath>T(v) = \lambda v</InlineMath> for some nonzero <InlineMath>v</InlineMath></li>
          <li>Eigenspace: <InlineMath>E_\lambda = \ker(T - \lambda I)</InlineMath> (a subspace)</li>
          <li>Characteristic polynomial: <InlineMath>p(\lambda) = \det(\lambda I - A)</InlineMath></li>
          <li>Eigenvalues = roots of characteristic polynomial</li>
          <li>Eigenvectors for distinct eigenvalues are independent</li>
          <li>Geometric multiplicity <InlineMath>\leq</InlineMath> algebraic multiplicity</li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={10}
        questions={section10Quiz}
        title="Eigenvalues and Eigenvectors Quiz"
      />
    </LessonLayout>
  );
}
