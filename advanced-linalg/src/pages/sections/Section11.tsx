import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section11Quiz } from '@/data/quizzes';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Diagonalization: The Nicest Matrix Form</h2>

      <p>
        A <strong>diagonalizable</strong> operator is one that has a basis of eigenvectors. In this
        basis, the matrix representation is diagonal — the simplest possible form. Diagonal matrices
        are easy to work with: powers, exponentials, and many other computations become trivial.
      </p>

      <Callout type="info">
        <strong>Why Diagonalization Matters:</strong> If <Math>A = PDP^{'{-1}'}</Math> with <Math>D</Math>
        diagonal, then <Math>A^n = PD^nP^{'{-1}'}</Math>. Computing <Math>D^n</Math> is trivial — just
        raise each diagonal entry to the <Math>n</Math>-th power!
      </Callout>

      <h2>Diagonalizability</h2>

      <Definition title="Diagonalizable">
        <p>
          A linear operator <Math>T: V \to V</Math> is <strong>diagonalizable</strong> if there
          exists a basis of <Math>V</Math> consisting entirely of eigenvectors of <Math>T</Math>.
        </p>
        <p className="mt-2">
          Equivalently, a matrix <Math>A</Math> is diagonalizable if it's similar to a diagonal matrix:
          <Math>A = PDP^{'{-1}'}</Math> for some invertible <Math>P</Math> and diagonal <Math>D</Math>.
        </p>
      </Definition>

      <Theorem
        title="Diagonalization Criterion"
        proof={
          <>
            <p><Math>T</Math> is diagonalizable <Math>\iff</Math> <Math>V</Math> has an eigenbasis.</p>
            <p className="mt-2">
              Eigenspaces for different eigenvalues have trivial intersection, so:
            </p>
            <MathBlock>{`\\dim(E_{\\lambda_1} \\oplus \\cdots \\oplus E_{\\lambda_k}) = \\sum \\dim(E_{\\lambda_i})`}</MathBlock>
            <p className="mt-2">
              This sum equals <Math>n = \dim(V)</Math> iff each geometric multiplicity equals algebraic multiplicity.
            </p>
          </>
        }
      >
        <p>
          <Math>T</Math> is diagonalizable if and only if for each eigenvalue <Math>\lambda</Math>:
        </p>
        <MathBlock>{`\\text{geometric multiplicity of } \\lambda = \\text{algebraic multiplicity of } \\lambda`}</MathBlock>
        <p className="mt-2">Equivalently: the sum of dimensions of eigenspaces equals <Math>\dim(V)</Math>.</p>
      </Theorem>

      <Theorem title="Sufficient Condition for Diagonalizability">
        <p>
          If an <Math>n \times n</Math> matrix has <Math>n</Math> distinct eigenvalues, it is diagonalizable.
        </p>
      </Theorem>

      <h2>The Diagonalization Procedure</h2>

      <div className="p-4 bg-dark-800/50 rounded-xl my-6">
        <h3 className="text-lg font-semibold text-emerald-400 mb-3">Algorithm: Diagonalizing a Matrix</h3>
        <ol className="list-decimal list-inside text-dark-300 space-y-2">
          <li>Compute the characteristic polynomial <Math>\det(\lambda I - A)</Math></li>
          <li>Find all eigenvalues (roots of characteristic polynomial)</li>
          <li>For each eigenvalue <Math>\lambda_i</Math>, find a basis for <Math>E_{'\\lambda_i'} = \ker(A - \lambda_i I)</Math></li>
          <li>Check: if the total number of basis vectors = <Math>n</Math>, proceed; otherwise, not diagonalizable</li>
          <li>Form <Math>P</Math> with eigenvectors as columns, <Math>D</Math> with eigenvalues on diagonal</li>
          <li>Then <Math>A = PDP^{'{-1}'}</Math></li>
        </ol>
      </div>

      <Example title="Complete Diagonalization">
        <p>Diagonalize <Math>A = \begin{'{pmatrix}'} 1 & 2 \\ 2 & 1 \end{'{pmatrix}'}</Math>:</p>
        <p className="mt-2"><strong>Step 1:</strong> Characteristic polynomial:</p>
        <MathBlock>{`p(\\lambda) = \\det\\begin{pmatrix} \\lambda - 1 & -2 \\\\ -2 & \\lambda - 1 \\end{pmatrix} = (\\lambda - 1)^2 - 4 = \\lambda^2 - 2\\lambda - 3`}</MathBlock>
        <p className="mt-2"><strong>Step 2:</strong> Eigenvalues: <Math>\lambda = 3, -1</Math></p>
        <p className="mt-2"><strong>Step 3:</strong> Eigenvectors:</p>
        <MathBlock>{`\\lambda = 3: (A - 3I)v = \\begin{pmatrix} -2 & 2 \\\\ 2 & -2 \\end{pmatrix}v = \\mathbf{0} \\Rightarrow v_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`\\lambda = -1: (A + I)v = \\begin{pmatrix} 2 & 2 \\\\ 2 & 2 \\end{pmatrix}v = \\mathbf{0} \\Rightarrow v_2 = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2"><strong>Step 5:</strong> Form matrices:</p>
        <MathBlock>{`P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 3 & 0 \\\\ 0 & -1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2"><strong>Verification:</strong> <Math>A = PDP^{'{-1}'}</Math></p>
      </Example>

      <h2>Applications of Diagonalization</h2>

      <Example title="Computing Powers">
        <p>For the matrix above, compute <Math>A^{'{10}'}</Math>:</p>
        <MathBlock>{`A^{10} = PD^{10}P^{-1} = P\\begin{pmatrix} 3^{10} & 0 \\\\ 0 & (-1)^{10} \\end{pmatrix}P^{-1} = P\\begin{pmatrix} 59049 & 0 \\\\ 0 & 1 \\end{pmatrix}P^{-1}`}</MathBlock>
      </Example>

      <Example title="Solving Systems of Differential Equations">
        <p>
          The system <Math>{`\\mathbf{x}`}'(t) = A{`\\mathbf{x}`}(t)</Math> has solution <Math>{`\\mathbf{x}`}(t) = e^{'{At}'}{`\\mathbf{x}`}(0)</Math>.
        </p>
        <p className="mt-2">If <Math>A = PDP^{'{-1}'}</Math>:</p>
        <MathBlock>{`e^{At} = Pe^{Dt}P^{-1} = P\\begin{pmatrix} e^{\\lambda_1 t} & & \\\\ & \\ddots & \\\\ & & e^{\\lambda_n t} \\end{pmatrix}P^{-1}`}</MathBlock>
      </Example>

      <h2>The Spectral Theorem</h2>

      <Theorem
        title="Spectral Theorem for Real Symmetric Matrices"
        proof={
          <>
            <p><strong>Step 1: Real eigenvalues.</strong> If <Math>Av = \lambda v</Math>:</p>
            <MathBlock>{`\\bar{\\lambda}\\bar{v}^T v = (\\bar{v}^T \\bar{A} v) = \\bar{v}^T A v = \\bar{v}^T (\\lambda v) = \\lambda \\bar{v}^T v`}</MathBlock>
            <p>Since <Math>\bar{'{v}'}^T v = \|v\|^2 {'>'} 0</Math>, we get <Math>\bar{'\lambda'} = \lambda</Math>.</p>
            <p className="mt-2"><strong>Step 2: Orthogonal eigenspaces.</strong> If <Math>Av = \lambda v</Math> and <Math>Aw = \mu w</Math> with <Math>\lambda \neq \mu</Math>:</p>
            <MathBlock>{`\\lambda(v \\cdot w) = (Av) \\cdot w = v \\cdot (A^T w) = v \\cdot (Aw) = \\mu(v \\cdot w)`}</MathBlock>
            <p>So <Math>(\lambda - \mu)(v \cdot w) = 0</Math>, giving <Math>v \cdot w = 0</Math>.</p>
            <p className="mt-2"><strong>Step 3:</strong> Induction shows orthonormal eigenbasis exists.</p>
          </>
        }
      >
        <p>
          Every real symmetric matrix is <strong>orthogonally diagonalizable</strong>:
        </p>
        <MathBlock>{`A = QDQ^T`}</MathBlock>
        <p className="mt-2">
          where <Math>Q</Math> is orthogonal (<Math>Q^T = Q^{'{-1}'}</Math>) and <Math>D</Math> is diagonal.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>The Power of Symmetry:</strong> Real symmetric matrices are "nice" in every way:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>All eigenvalues are real</li>
          <li>Eigenvectors can be chosen to be orthonormal</li>
          <li>Always diagonalizable</li>
          <li>The diagonalizing matrix <Math>Q</Math> is orthogonal, so <Math>Q^{'{-1}'} = Q^T</Math> (easy to compute)</li>
        </ul>
      </Callout>

      <Example title="Spectral Decomposition">
        <p>For a symmetric <Math>A = QDQ^T</Math> with eigenvalues <Math>\lambda_i</Math> and orthonormal eigenvectors <Math>q_i</Math>:</p>
        <MathBlock>{`A = \\sum_{i=1}^n \\lambda_i q_i q_i^T`}</MathBlock>
        <p className="mt-2">
          Each <Math>q_i q_i^T</Math> is the projection onto the eigenspace for <Math>\lambda_i</Math>.
        </p>
      </Example>

      <h2>When Diagonalization Fails</h2>

      <Callout type="warning">
        <strong>Not All Matrices Diagonalize!</strong> A matrix fails to be diagonalizable when
        some geometric multiplicity is less than algebraic multiplicity. In this case, we need
        Jordan canonical form (next section).
      </Callout>

      <Example title="Non-Diagonalizable Matrix">
        <p><Math>A = \begin{'{pmatrix}'} 0 & 1 \\ 0 & 0 \end{'{pmatrix}'}</Math> has only eigenvalue <Math>\lambda = 0</Math> with algebraic multiplicity 2.</p>
        <p className="mt-2">But <Math>E_0 = \ker(A) = {`\\text{span}`}{`\\{(1, 0)^T\\}`}</Math> has dimension 1.</p>
        <p className="mt-2">Since we need 2 linearly independent eigenvectors but only have 1, <Math>A</Math> is not diagonalizable.</p>
      </Example>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Diagonalizable = has a basis of eigenvectors</li>
          <li>Criterion: geometric mult = algebraic mult for all eigenvalues</li>
          <li><Math>n</Math> distinct eigenvalues <Math>\Rightarrow</Math> diagonalizable</li>
          <li>If <Math>A = PDP^{'{-1}'}</Math>, then <Math>A^n = PD^nP^{'{-1}'}</Math></li>
          <li>Real symmetric matrices are orthogonally diagonalizable: <Math>A = QDQ^T</Math></li>
          <li>Spectral theorem: symmetric matrices have real eigenvalues and orthogonal eigenvectors</li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={11}
        questions={section11Quiz}
        title="Diagonalization Quiz"
      />
    </LessonLayout>
  );
}
