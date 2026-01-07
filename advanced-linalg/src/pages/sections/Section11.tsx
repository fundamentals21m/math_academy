import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
        <strong>Why Diagonalization Matters:</strong> If <InlineMath>A = PDP^{'{-1}'}</InlineMath> with <InlineMath>D</InlineMath>
        diagonal, then <InlineMath>A^n = PD^nP^{'{-1}'}</InlineMath>. Computing <InlineMath>D^n</InlineMath> is trivial — just
        raise each diagonal entry to the <InlineMath>n</InlineMath>-th power!
      </Callout>

      <h2>Diagonalizability</h2>

      <Definition title="Diagonalizable">
        <p>
          A linear operator <InlineMath>T: V \to V</InlineMath> is <strong>diagonalizable</strong> if there
          exists a basis of <InlineMath>V</InlineMath> consisting entirely of eigenvectors of <InlineMath>T</InlineMath>.
        </p>
        <p className="mt-2">
          Equivalently, a matrix <InlineMath>A</InlineMath> is diagonalizable if it's similar to a diagonal matrix:
          <InlineMath>A = PDP^{'{-1}'}</InlineMath> for some invertible <InlineMath>P</InlineMath> and diagonal <InlineMath>D</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Diagonalization Criterion"
        proof={
          <>
            <p><InlineMath>T</InlineMath> is diagonalizable <InlineMath>\iff</InlineMath> <InlineMath>V</InlineMath> has an eigenbasis.</p>
            <p className="mt-2">
              Eigenspaces for different eigenvalues have trivial intersection, so:
            </p>
            <MathBlock>{`\\dim(E_{\\lambda_1} \\oplus \\cdots \\oplus E_{\\lambda_k}) = \\sum \\dim(E_{\\lambda_i})`}</MathBlock>
            <p className="mt-2">
              This sum equals <InlineMath>n = \dim(V)</InlineMath> iff each geometric multiplicity equals algebraic multiplicity.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>T</InlineMath> is diagonalizable if and only if for each eigenvalue <InlineMath>\lambda</InlineMath>:
        </p>
        <MathBlock>{`\\text{geometric multiplicity of } \\lambda = \\text{algebraic multiplicity of } \\lambda`}</MathBlock>
        <p className="mt-2">Equivalently: the sum of dimensions of eigenspaces equals <InlineMath>\dim(V)</InlineMath>.</p>
      </Theorem>

      <Theorem
        title="Sufficient Condition for Diagonalizability"
        proof={
          <>
            <p>
              Let <InlineMath>\lambda_1, \ldots, \lambda_n</InlineMath> be the <InlineMath>n</InlineMath> distinct eigenvalues.
            </p>
            <p className="mt-2">
              For each <InlineMath>\lambda_i</InlineMath>, choose an eigenvector <InlineMath>v_i</InlineMath>. By the theorem on eigenvectors for distinct eigenvalues, <InlineMath>{`\\{v_1, \\ldots, v_n\\}`}</InlineMath> is linearly independent.
            </p>
            <p className="mt-2">
              Since we have <InlineMath>n</InlineMath> linearly independent vectors in an <InlineMath>n</InlineMath>-dimensional space, they form a basis.
            </p>
            <p className="mt-2">
              This is a basis of eigenvectors, so <InlineMath>A</InlineMath> is diagonalizable.
            </p>
            <p className="mt-2">
              Explicitly: <InlineMath>P = [v_1 | \cdots | v_n]</InlineMath> satisfies <InlineMath>A = PDP^{'{-1}'}</InlineMath> where <InlineMath>D = {`\\text{diag}`}(\lambda_1, \ldots, \lambda_n)</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If an <InlineMath>n \times n</InlineMath> matrix has <InlineMath>n</InlineMath> distinct eigenvalues, it is diagonalizable.
        </p>
      </Theorem>

      <h2>The Diagonalization Procedure</h2>

      <div className="p-4 bg-dark-800/50 rounded-xl my-6">
        <h3 className="text-lg font-semibold text-emerald-400 mb-3">Algorithm: Diagonalizing a Matrix</h3>
        <ol className="list-decimal list-inside text-dark-300 space-y-2">
          <li>Compute the characteristic polynomial <InlineMath>\det(\lambda I - A)</InlineMath></li>
          <li>Find all eigenvalues (roots of characteristic polynomial)</li>
          <li>For each eigenvalue <InlineMath>\lambda_i</InlineMath>, find a basis for <InlineMath>E_{'\\lambda_i'} = \ker(A - \lambda_i I)</InlineMath></li>
          <li>Check: if the total number of basis vectors = <InlineMath>n</InlineMath>, proceed; otherwise, not diagonalizable</li>
          <li>Form <InlineMath>P</InlineMath> with eigenvectors as columns, <InlineMath>D</InlineMath> with eigenvalues on diagonal</li>
          <li>Then <InlineMath>A = PDP^{'{-1}'}</InlineMath></li>
        </ol>
      </div>

      <Example title="Complete Diagonalization">
        <p>Diagonalize <InlineMath>A = \begin{'{pmatrix}'} 1 & 2 \\ 2 & 1 \end{'{pmatrix}'}</InlineMath>:</p>
        <p className="mt-2"><strong>Step 1:</strong> Characteristic polynomial:</p>
        <MathBlock>{`p(\\lambda) = \\det\\begin{pmatrix} \\lambda - 1 & -2 \\\\ -2 & \\lambda - 1 \\end{pmatrix} = (\\lambda - 1)^2 - 4 = \\lambda^2 - 2\\lambda - 3`}</MathBlock>
        <p className="mt-2"><strong>Step 2:</strong> Eigenvalues: <InlineMath>\lambda = 3, -1</InlineMath></p>
        <p className="mt-2"><strong>Step 3:</strong> Eigenvectors:</p>
        <MathBlock>{`\\lambda = 3: (A - 3I)v = \\begin{pmatrix} -2 & 2 \\\\ 2 & -2 \\end{pmatrix}v = \\mathbf{0} \\Rightarrow v_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`\\lambda = -1: (A + I)v = \\begin{pmatrix} 2 & 2 \\\\ 2 & 2 \\end{pmatrix}v = \\mathbf{0} \\Rightarrow v_2 = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2"><strong>Step 5:</strong> Form matrices:</p>
        <MathBlock>{`P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 3 & 0 \\\\ 0 & -1 \\end{pmatrix}`}</MathBlock>
        <p className="mt-2"><strong>Verification:</strong> <InlineMath>A = PDP^{'{-1}'}</InlineMath></p>
      </Example>

      <h2>Applications of Diagonalization</h2>

      <Example title="Computing Powers">
        <p>For the matrix above, compute <InlineMath>A^{'{10}'}</InlineMath>:</p>
        <MathBlock>{`A^{10} = PD^{10}P^{-1} = P\\begin{pmatrix} 3^{10} & 0 \\\\ 0 & (-1)^{10} \\end{pmatrix}P^{-1} = P\\begin{pmatrix} 59049 & 0 \\\\ 0 & 1 \\end{pmatrix}P^{-1}`}</MathBlock>
      </Example>

      <Example title="Solving Systems of Differential Equations">
        <p>
          The system <InlineMath>{`\\mathbf{x}`}'(t) = A{`\\mathbf{x}`}(t)</InlineMath> has solution <InlineMath>{`\\mathbf{x}`}(t) = e^{'{At}'}{`\\mathbf{x}`}(0)</InlineMath>.
        </p>
        <p className="mt-2">If <InlineMath>A = PDP^{'{-1}'}</InlineMath>:</p>
        <MathBlock>{`e^{At} = Pe^{Dt}P^{-1} = P\\begin{pmatrix} e^{\\lambda_1 t} & & \\\\ & \\ddots & \\\\ & & e^{\\lambda_n t} \\end{pmatrix}P^{-1}`}</MathBlock>
      </Example>

      <h2>The Spectral Theorem</h2>

      <Theorem
        title="Spectral Theorem for Real Symmetric Matrices"
        proof={
          <>
            <p><strong>Step 1: Real eigenvalues.</strong> If <InlineMath>Av = \lambda v</InlineMath>:</p>
            <MathBlock>{`\\bar{\\lambda}\\bar{v}^T v = (\\bar{v}^T \\bar{A} v) = \\bar{v}^T A v = \\bar{v}^T (\\lambda v) = \\lambda \\bar{v}^T v`}</MathBlock>
            <p>Since <InlineMath>{`\\bar{v}^T v = ||v||^2 > 0`}</InlineMath>, we get <InlineMath>{`\\bar{\\lambda} = \\lambda`}</InlineMath>.</p>
            <p className="mt-2"><strong>Step 2: Orthogonal eigenspaces.</strong> If <InlineMath>Av = \lambda v</InlineMath> and <InlineMath>Aw = \mu w</InlineMath> with <InlineMath>\lambda \neq \mu</InlineMath>:</p>
            <MathBlock>{`\\lambda(v \\cdot w) = (Av) \\cdot w = v \\cdot (A^T w) = v \\cdot (Aw) = \\mu(v \\cdot w)`}</MathBlock>
            <p>So <InlineMath>(\lambda - \mu)(v \cdot w) = 0</InlineMath>, giving <InlineMath>v \cdot w = 0</InlineMath>.</p>
            <p className="mt-2"><strong>Step 3:</strong> Induction shows orthonormal eigenbasis exists.</p>
          </>
        }
      >
        <p>
          Every real symmetric matrix is <strong>orthogonally diagonalizable</strong>:
        </p>
        <MathBlock>{`A = QDQ^T`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>Q</InlineMath> is orthogonal (<InlineMath>Q^T = Q^{'{-1}'}</InlineMath>) and <InlineMath>D</InlineMath> is diagonal.
        </p>
      </Theorem>

      <Callout type="success">
        <strong>The Power of Symmetry:</strong> Real symmetric matrices are "nice" in every way:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>All eigenvalues are real</li>
          <li>Eigenvectors can be chosen to be orthonormal</li>
          <li>Always diagonalizable</li>
          <li>The diagonalizing matrix <InlineMath>Q</InlineMath> is orthogonal, so <InlineMath>Q^{'{-1}'} = Q^T</InlineMath> (easy to compute)</li>
        </ul>
      </Callout>

      <Example title="Spectral Decomposition">
        <p>For a symmetric <InlineMath>A = QDQ^T</InlineMath> with eigenvalues <InlineMath>\lambda_i</InlineMath> and orthonormal eigenvectors <InlineMath>q_i</InlineMath>:</p>
        <MathBlock>{`A = \\sum_{i=1}^n \\lambda_i q_i q_i^T`}</MathBlock>
        <p className="mt-2">
          Each <InlineMath>q_i q_i^T</InlineMath> is the projection onto the eigenspace for <InlineMath>\lambda_i</InlineMath>.
        </p>
      </Example>

      <h2>When Diagonalization Fails</h2>

      <Callout type="warning">
        <strong>Not All Matrices Diagonalize!</strong> A matrix fails to be diagonalizable when
        some geometric multiplicity is less than algebraic multiplicity. In this case, we need
        Jordan canonical form (next section).
      </Callout>

      <Example title="Non-Diagonalizable Matrix">
        <p><InlineMath>A = \begin{'{pmatrix}'} 0 & 1 \\ 0 & 0 \end{'{pmatrix}'}</InlineMath> has only eigenvalue <InlineMath>\lambda = 0</InlineMath> with algebraic multiplicity 2.</p>
        <p className="mt-2">But <InlineMath>E_0 = \ker(A) = {`\\text{span}`}{`\\{(1, 0)^T\\}`}</InlineMath> has dimension 1.</p>
        <p className="mt-2">Since we need 2 linearly independent eigenvectors but only have 1, <InlineMath>A</InlineMath> is not diagonalizable.</p>
      </Example>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Diagonalizable = has a basis of eigenvectors</li>
          <li>Criterion: geometric mult = algebraic mult for all eigenvalues</li>
          <li><InlineMath>n</InlineMath> distinct eigenvalues <InlineMath>\Rightarrow</InlineMath> diagonalizable</li>
          <li>If <InlineMath>A = PDP^{'{-1}'}</InlineMath>, then <InlineMath>A^n = PD^nP^{'{-1}'}</InlineMath></li>
          <li>Real symmetric matrices are orthogonally diagonalizable: <InlineMath>A = QDQ^T</InlineMath></li>
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
