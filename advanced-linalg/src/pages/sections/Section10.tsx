import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
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
          Let <Math>T: V \to V</Math> be a linear operator. A scalar <Math>\lambda \in F</Math> is an
          <strong>eigenvalue</strong> of <Math>T</Math> if there exists a nonzero vector <Math>v \in V</Math>
          such that:
        </p>
        <MathBlock>{`T(v) = \\lambda v`}</MathBlock>
        <p className="mt-2">
          Such a nonzero <Math>v</Math> is called an <strong>eigenvector</strong> corresponding to <Math>\lambda</Math>.
        </p>
      </Definition>

      <Example title="Geometric Examples">
        <p><strong>Projection onto x-axis:</strong> <Math>P(x, y) = (x, 0)</Math></p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><Math>\lambda = 1</Math>: eigenvectors on x-axis (unchanged)</li>
          <li><Math>\lambda = 0</Math>: eigenvectors on y-axis (collapsed to origin)</li>
        </ul>
        <p className="mt-4"><strong>Rotation by 90°:</strong> No real eigenvalues!</p>
        <p className="text-dark-300">Every vector changes direction (except <Math>{`\\mathbf{0}`}</Math>, which doesn't count).</p>
      </Example>

      <Definition title="Eigenspace">
        <p>
          The <strong>eigenspace</strong> for eigenvalue <Math>\lambda</Math> is:
        </p>
        <MathBlock>{`E_\\lambda = \\ker(T - \\lambda I) = \\{v \\in V : T(v) = \\lambda v\\}`}</MathBlock>
        <p className="mt-2">
          This includes the zero vector, so <Math>E_\lambda</Math> is a subspace.
          The eigenvectors for <Math>\lambda</Math> are the nonzero elements of <Math>E_\lambda</Math>.
        </p>
      </Definition>

      <h2>Finding Eigenvalues: The Characteristic Polynomial</h2>

      <Theorem
        title="Eigenvalue Criterion"
        proof={
          <>
            <p><Math>\lambda</Math> is an eigenvalue</p>
            <p><Math>\iff</Math> there exists nonzero <Math>v</Math> with <Math>T(v) = \lambda v</Math></p>
            <p><Math>\iff</Math> there exists nonzero <Math>v</Math> with <Math>(T - \lambda I)(v) = {`\\mathbf{0}`}</Math></p>
            <p><Math>\iff</Math> <Math>\ker(T - \lambda I) \neq {`\\{\\mathbf{0}\\}`}</Math></p>
            <p><Math>\iff</Math> <Math>T - \lambda I</Math> is not invertible</p>
            <p><Math>\iff</Math> <Math>\det(T - \lambda I) = 0</Math></p>
          </>
        }
      >
        <p>
          <Math>\lambda</Math> is an eigenvalue of <Math>T</Math> (or <Math>A</Math>) if and only if
          <Math>\det(\lambda I - A) = 0</Math>.
        </p>
      </Theorem>

      <Definition title="Characteristic Polynomial">
        <p>
          The <strong>characteristic polynomial</strong> of <Math>A</Math> is:
        </p>
        <MathBlock>{`p(\\lambda) = \\det(\\lambda I - A)`}</MathBlock>
        <p className="mt-2">
          For an <Math>n \times n</Math> matrix, this is a monic polynomial of degree <Math>n</Math>.
        </p>
      </Definition>

      <Example title="Computing Eigenvalues">
        <p>Find eigenvalues of <Math>A = \begin{'{pmatrix}'} 4 & 1 \\ 2 & 3 \end{'{pmatrix}'}</Math>:</p>
        <MathBlock>{`p(\\lambda) = \\det\\begin{pmatrix} \\lambda - 4 & -1 \\\\ -2 & \\lambda - 3 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`= (\\lambda - 4)(\\lambda - 3) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 5)(\\lambda - 2)`}</MathBlock>
        <p className="mt-2">Eigenvalues: <Math>\lambda_1 = 5, \lambda_2 = 2</Math></p>
        <p className="mt-4"><strong>Finding eigenvectors for <Math>\lambda = 5</Math>:</strong></p>
        <MathBlock>{`(A - 5I)v = \\begin{pmatrix} -1 & 1 \\\\ 2 & -2 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\mathbf{0}`}</MathBlock>
        <p>This gives <Math>x = y</Math>, so <Math>E_5 = {`\\text{span}`}{`\\{(1, 1)^T\\}`}</Math>.</p>
        <p className="mt-2"><strong>For <Math>\lambda = 2</Math>:</strong></p>
        <MathBlock>{`(A - 2I)v = \\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\mathbf{0}`}</MathBlock>
        <p>This gives <Math>2x + y = 0</Math>, so <Math>E_2 = {`\\text{span}`}{`\\{(1, -2)^T\\}`}</Math>.</p>
      </Example>

      <h2>Properties of Eigenvalues</h2>

      <Theorem
        title="Eigenvectors for Distinct Eigenvalues are Independent"
        proof={
          <>
            <p>By induction on <Math>k</Math>. Base case <Math>k = 1</Math> is trivial.</p>
            <p className="mt-2">Suppose <Math>c_1 v_1 + \cdots + c_k v_k = {`\\mathbf{0}`}</Math>. Apply <Math>T</Math>:</p>
            <MathBlock>{`c_1 \\lambda_1 v_1 + \\cdots + c_k \\lambda_k v_k = \\mathbf{0}`}</MathBlock>
            <p className="mt-2">Subtract <Math>\lambda_k</Math> times the original:</p>
            <MathBlock>{`c_1(\\lambda_1 - \\lambda_k)v_1 + \\cdots + c_{k-1}(\\lambda_{k-1} - \\lambda_k)v_{k-1} = \\mathbf{0}`}</MathBlock>
            <p className="mt-2">By induction, each <Math>c_i(\lambda_i - \lambda_k) = 0</Math>. Since <Math>\lambda_i \neq \lambda_k</Math>, we get <Math>c_i = 0</Math>.</p>
            <p className="mt-2">Then <Math>c_k v_k = {`\\mathbf{0}`}</Math>, so <Math>c_k = 0</Math>.</p>
          </>
        }
      >
        <p>
          Eigenvectors corresponding to distinct eigenvalues are linearly independent.
        </p>
      </Theorem>

      <Theorem title="Properties from Characteristic Polynomial">
        <p>For an <Math>n \times n</Math> matrix <Math>A</Math>:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
          <li>Trace = sum of eigenvalues (with multiplicities)</li>
          <li>Determinant = product of eigenvalues</li>
          <li>The characteristic polynomial has degree <Math>n</Math></li>
          <li>Over <Math>{`\\mathbb{C}`}</Math>, there are exactly <Math>n</Math> eigenvalues (counting multiplicity)</li>
        </ul>
      </Theorem>

      <h2>Algebraic vs. Geometric Multiplicity</h2>

      <Definition title="Multiplicities">
        <p>For an eigenvalue <Math>\lambda</Math>:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><strong>Algebraic multiplicity:</strong> multiplicity as a root of the characteristic polynomial</li>
          <li><strong>Geometric multiplicity:</strong> <Math>\dim(E_\lambda) = \dim(\ker(A - \lambda I))</Math></li>
        </ul>
      </Definition>

      <Theorem title="Multiplicity Inequality">
        <p>
          For any eigenvalue: <Math>1 \leq </Math> geometric multiplicity <Math>\leq</Math> algebraic multiplicity.
        </p>
      </Theorem>

      <Example title="Multiplicities Can Differ">
        <p>Consider <Math>A = \begin{'{pmatrix}'} 2 & 1 \\ 0 & 2 \end{'{pmatrix}'}</Math>:</p>
        <MathBlock>{`p(\\lambda) = (\\lambda - 2)^2`}</MathBlock>
        <p className="mt-2">
          <Math>\lambda = 2</Math> has algebraic multiplicity 2.
        </p>
        <MathBlock>{`A - 2I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          <Math>E_2 = \ker(A - 2I) = {`\\text{span}`}{`\\{(1, 0)^T\\}`}</Math>, so geometric multiplicity = 1.
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
          <li><strong>Orthogonal matrix:</strong> Eigenvalues have <Math>|\lambda| = 1</Math></li>
          <li><strong>Idempotent (<Math>A^2 = A</Math>):</strong> Eigenvalues are 0 or 1</li>
          <li><strong>Nilpotent (<Math>A^k = 0</Math>):</strong> Only eigenvalue is 0</li>
        </ul>
      </Theorem>

      <Callout type="success">
        <strong>Key Insight:</strong> The eigenvalue problem <Math>Av = \lambda v</Math> asks:
        "For which scalars <Math>\lambda</Math> does <Math>A - \lambda I</Math> have a nontrivial kernel?"
        This connects eigenvalues to invertibility, determinants, and the structure of linear maps.
      </Callout>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Eigenvalue <Math>\lambda</Math>: <Math>T(v) = \lambda v</Math> for some nonzero <Math>v</Math></li>
          <li>Eigenspace: <Math>E_\lambda = \ker(T - \lambda I)</Math> (a subspace)</li>
          <li>Characteristic polynomial: <Math>p(\lambda) = \det(\lambda I - A)</Math></li>
          <li>Eigenvalues = roots of characteristic polynomial</li>
          <li>Eigenvectors for distinct eigenvalues are independent</li>
          <li>Geometric multiplicity <Math>\leq</Math> algebraic multiplicity</li>
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
