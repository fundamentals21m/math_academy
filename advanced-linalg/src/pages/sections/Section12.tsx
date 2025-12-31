import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section12Quiz } from '@/data/quizzes';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Jordan Canonical Form: Beyond Diagonalization</h2>

      <p>
        When a matrix is not diagonalizable, we need a more general canonical form. The
        <strong> Jordan canonical form</strong> is the "next best thing" to diagonal form — it's
        as close to diagonal as possible while still being achievable for any matrix (over an
        algebraically closed field).
      </p>

      <Callout type="info">
        <strong>Why Jordan Form Matters:</strong> Every matrix is similar to a Jordan form, which
        consists of "Jordan blocks" along the diagonal. This form reveals the complete structure
        of the linear operator and is essential for solving differential equations, computing
        matrix functions, and understanding nilpotent operators.
      </Callout>

      <h2>Generalized Eigenvectors</h2>

      <p>
        The key insight is that when we don't have enough eigenvectors, we can extend to
        <strong> generalized eigenvectors</strong>.
      </p>

      <Definition title="Generalized Eigenvector">
        <p>
          A vector <Math>v \neq 0</Math> is a <strong>generalized eigenvector</strong> of <Math>T</Math>
          for eigenvalue <Math>\lambda</Math> of <strong>order</strong> <Math>k</Math> if:
        </p>
        <MathBlock>{`(T - \\lambda I)^k v = 0 \\quad \\text{but} \\quad (T - \\lambda I)^{k-1} v \\neq 0`}</MathBlock>
        <p className="mt-2">
          Ordinary eigenvectors are generalized eigenvectors of order 1.
        </p>
      </Definition>

      <Definition title="Generalized Eigenspace">
        <p>
          The <strong>generalized eigenspace</strong> for eigenvalue <Math>\lambda</Math> is:
        </p>
        <MathBlock>{`G_\\lambda = \\ker(T - \\lambda I)^n = \\{v \\in V : (T - \\lambda I)^n v = 0\\}`}</MathBlock>
        <p className="mt-2">
          where <Math>n = \dim(V)</Math>. This always has dimension equal to the algebraic
          multiplicity of <Math>\lambda</Math>.
        </p>
      </Definition>

      <Theorem
        title="Generalized Eigenspace Decomposition"
        proof={
          <>
            <p>
              Since the characteristic polynomial factors as <Math>p(\lambda) = \prod_i (\lambda - \lambda_i)^{'{m_i}'}</Math>,
              we can apply the Primary Decomposition Theorem:
            </p>
            <MathBlock>{`V = \\ker(T - \\lambda_1 I)^{m_1} \\oplus \\cdots \\oplus \\ker(T - \\lambda_k I)^{m_k}`}</MathBlock>
            <p className="mt-2">
              Each summand is <Math>G_{'\\lambda_i'}</Math> with dimension <Math>m_i</Math>.
            </p>
          </>
        }
      >
        <p>
          If <Math>T: V \to V</Math> has eigenvalues <Math>\lambda_1, \ldots, \lambda_k</Math> with
          algebraic multiplicities <Math>m_1, \ldots, m_k</Math>, then:
        </p>
        <MathBlock>{`V = G_{\\lambda_1} \\oplus G_{\\lambda_2} \\oplus \\cdots \\oplus G_{\\lambda_k}`}</MathBlock>
      </Theorem>

      <h2>Jordan Blocks</h2>

      <Definition title="Jordan Block">
        <p>
          A <strong>Jordan block</strong> <Math>J_k(\lambda)</Math> of size <Math>k</Math> for
          eigenvalue <Math>\lambda</Math> is the <Math>k \times k</Math> matrix:
        </p>
        <MathBlock>{`J_k(\\lambda) = \\begin{pmatrix} \\lambda & 1 & 0 & \\cdots & 0 \\\\ 0 & \\lambda & 1 & \\cdots & 0 \\\\ \\vdots & & \\ddots & \\ddots & \\vdots \\\\ 0 & \\cdots & & \\lambda & 1 \\\\ 0 & \\cdots & & 0 & \\lambda \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          It has <Math>\lambda</Math> on the diagonal and 1's on the superdiagonal.
        </p>
      </Definition>

      <Example title="Small Jordan Blocks">
        <MathBlock>{`J_1(\\lambda) = (\\lambda), \\quad J_2(\\lambda) = \\begin{pmatrix} \\lambda & 1 \\\\ 0 & \\lambda \\end{pmatrix}, \\quad J_3(\\lambda) = \\begin{pmatrix} \\lambda & 1 & 0 \\\\ 0 & \\lambda & 1 \\\\ 0 & 0 & \\lambda \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          Note: <Math>J_1(\lambda)</Math> is just <Math>(\lambda)</Math> — a diagonal entry.
          A diagonalizable matrix has all Jordan blocks of size 1.
        </p>
      </Example>

      <h2>The Jordan Canonical Form</h2>

      <Definition title="Jordan Canonical Form">
        <p>
          A matrix is in <strong>Jordan canonical form</strong> (or <strong>Jordan normal form</strong>)
          if it is block diagonal with Jordan blocks:
        </p>
        <MathBlock>{`J = \\begin{pmatrix} J_{k_1}(\\lambda_1) & & & \\\\ & J_{k_2}(\\lambda_2) & & \\\\ & & \\ddots & \\\\ & & & J_{k_r}(\\lambda_r) \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          The same eigenvalue may appear in multiple blocks.
        </p>
      </Definition>

      <Theorem
        title="Jordan Canonical Form Theorem"
        proof={
          <>
            <p><strong>Existence:</strong></p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Decompose <Math>V = G_{'\\lambda_1'} \oplus \cdots \oplus G_{'\\lambda_k'}</Math></li>
              <li>On each <Math>G_{'\\lambda_i'}</Math>, the operator <Math>(T - \lambda_i I)</Math> is nilpotent</li>
              <li>Every nilpotent operator has a Jordan form with all eigenvalues = 0</li>
              <li>Shifting by <Math>\lambda_i</Math> gives Jordan blocks <Math>J_{'{k}'}(\lambda_i)</Math></li>
            </ol>
            <p className="mt-2"><strong>Uniqueness:</strong></p>
            <p>
              The number of Jordan blocks of each size for each eigenvalue is determined by:
            </p>
            <MathBlock>{`\\#\\{\\text{blocks of size } \\geq j\\} = \\text{rank}(T - \\lambda I)^{j-1} - \\text{rank}(T - \\lambda I)^j`}</MathBlock>
          </>
        }
      >
        <p>
          Every linear operator <Math>T</Math> on a finite-dimensional vector space over an
          algebraically closed field <Math>F</Math> has a unique Jordan canonical form (up to
          ordering of blocks).
        </p>
        <p className="mt-2">
          Specifically, there exists a basis such that the matrix of <Math>T</Math> is in Jordan form.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Algebraically Closed Field Required:</strong> Jordan form exists when all eigenvalues
        are in the field. Over <Math>{`\\mathbb{R}`}</Math>, matrices like
        <Math>\begin{'{pmatrix}'} 0 & -1 \\ 1 & 0 \end{'{pmatrix}'}</Math> don't have Jordan form
        (eigenvalues <Math>\pm i</Math> aren't real). The real Jordan form uses 2×2 rotation blocks instead.
      </Callout>

      <h2>Finding Jordan Chains</h2>

      <Definition title="Jordan Chain">
        <p>
          A <strong>Jordan chain</strong> of length <Math>k</Math> for eigenvalue <Math>\lambda</Math> is a
          sequence of vectors <Math>v_1, v_2, \ldots, v_k</Math> such that:
        </p>
        <MathBlock>{`(T - \\lambda I)v_1 = 0, \\quad (T - \\lambda I)v_2 = v_1, \\quad \\ldots, \\quad (T - \\lambda I)v_k = v_{k-1}`}</MathBlock>
        <p className="mt-2">
          The vectors in a Jordan chain form a basis for a Jordan block: <Math>Tv_1 = \lambda v_1</Math>,
          <Math>Tv_2 = v_1 + \lambda v_2</Math>, etc.
        </p>
      </Definition>

      <div className="p-4 bg-dark-800/50 rounded-xl my-6">
        <h3 className="text-lg font-semibold text-emerald-400 mb-3">Algorithm: Finding Jordan Form</h3>
        <ol className="list-decimal list-inside text-dark-300 space-y-2">
          <li>Find all eigenvalues <Math>\lambda_i</Math> and their algebraic multiplicities <Math>m_i</Math></li>
          <li>For each <Math>\lambda_i</Math>, compute ranks: <Math>r_j = {`\\text{rank}`}(A - \lambda_i I)^j</Math> for <Math>j = 0, 1, 2, \ldots</Math> until stable</li>
          <li>Number of Jordan blocks of size <Math>\geq j</Math>: <Math>r_{'j-1'} - r_j</Math></li>
          <li>Build Jordan chains starting from highest order generalized eigenvectors</li>
          <li>Form basis from all Jordan chains; write matrix in this basis</li>
        </ol>
      </div>

      <Example title="Computing Jordan Form">
        <p>Find the Jordan form of <Math>A = \begin{'{pmatrix}'} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{'{pmatrix}'}</Math>:</p>
        <p className="mt-2"><strong>Step 1:</strong> Only eigenvalue is <Math>\lambda = 2</Math> with algebraic multiplicity 3.</p>
        <p className="mt-2"><strong>Step 2:</strong> Compute:</p>
        <MathBlock>{`A - 2I = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}, \\quad (A - 2I)^2 = \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}, \\quad (A - 2I)^3 = O`}</MathBlock>
        <p className="mt-2">Ranks: <Math>r_0 = 3, r_1 = 2, r_2 = 1, r_3 = 0</Math></p>
        <p className="mt-2"><strong>Step 3:</strong> Blocks of size <Math>\geq 1</Math>: <Math>3 - 2 = 1</Math></p>
        <p>Blocks of size <Math>\geq 2</Math>: <Math>2 - 1 = 1</Math></p>
        <p>Blocks of size <Math>\geq 3</Math>: <Math>1 - 0 = 1</Math></p>
        <p className="mt-2">So there's exactly one block of size 3!</p>
        <p className="mt-2"><strong>Jordan form:</strong> <Math>J = J_3(2) = \begin{'{pmatrix}'} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{'{pmatrix}'}</Math></p>
        <p className="mt-2">(In this case, <Math>A</Math> is already in Jordan form!)</p>
      </Example>

      <Example title="Multiple Jordan Blocks">
        <p>Consider <Math>A = \begin{'{pmatrix}'} 2 & 1 & 0 & 0 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 2 \end{'{pmatrix}'}</Math>:</p>
        <p className="mt-2">
          This is in Jordan form with two <Math>J_2(2)</Math> blocks. The eigenvalue <Math>\lambda = 2</Math>
          has algebraic multiplicity 4 but geometric multiplicity 2 (two linearly independent eigenvectors).
        </p>
        <MathBlock>{`J = J_2(2) \\oplus J_2(2) = \\begin{pmatrix} 2 & 1 & & \\\\ 0 & 2 & & \\\\ & & 2 & 1 \\\\ & & 0 & 2 \\end{pmatrix}`}</MathBlock>
      </Example>

      <h2>Properties of Jordan Form</h2>

      <Theorem title="Invariants from Jordan Form">
        <p>The Jordan form reveals important invariants:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Eigenvalues:</strong> The diagonal entries</li>
          <li><strong>Algebraic multiplicity:</strong> Sum of sizes of blocks for that eigenvalue</li>
          <li><strong>Geometric multiplicity:</strong> Number of blocks for that eigenvalue</li>
          <li><strong>Minimal polynomial degree for <Math>\lambda</Math>:</strong> Size of largest block</li>
          <li><strong>Characteristic polynomial:</strong> <Math>\prod (\lambda - \lambda_i)^{'{m_i}'}</Math></li>
        </ul>
      </Theorem>

      <Theorem title="Powers of Jordan Blocks">
        <p>For a Jordan block <Math>J = J_k(\lambda)</Math>:</p>
        <MathBlock>{`J^n = \\begin{pmatrix} \\lambda^n & \\binom{n}{1}\\lambda^{n-1} & \\binom{n}{2}\\lambda^{n-2} & \\cdots \\\\ 0 & \\lambda^n & \\binom{n}{1}\\lambda^{n-1} & \\cdots \\\\ \\vdots & & \\ddots & \\\\ 0 & \\cdots & 0 & \\lambda^n \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          Entry <Math>(i,j)</Math> is <Math>\binom{'{n}'}{'{j-i}'}\lambda^{'{n-(j-i)}'}</Math> if <Math>j \geq i</Math>, else 0.
        </p>
      </Theorem>

      <h2>The Cayley-Hamilton Connection</h2>

      <Theorem
        title="Cayley-Hamilton Theorem"
        proof={
          <>
            <p>
              Using Jordan form, if <Math>A = PJP^{'{-1}'}</Math> with Jordan form <Math>J</Math>, then:
            </p>
            <MathBlock>{`p(A) = Pp(J)P^{-1}`}</MathBlock>
            <p className="mt-2">
              For a Jordan block <Math>J_k(\lambda)</Math>, we have <Math>(J_k(\lambda) - \lambda I)^k = 0</Math>.
            </p>
            <p className="mt-2">
              Since <Math>(\lambda - \lambda_i)^{'{m_i}'}</Math> divides <Math>p(\lambda)</Math> where <Math>m_i</Math> is
              the algebraic multiplicity (= sum of block sizes for <Math>\lambda_i</Math>), we get <Math>p(J) = 0</Math>.
            </p>
          </>
        }
      >
        <p>
          Every matrix satisfies its own characteristic polynomial: if <Math>p(\lambda) = \det(\lambda I - A)</Math>,
          then <Math>p(A) = 0</Math>.
        </p>
      </Theorem>

      <h2>Nilpotent Operators</h2>

      <Definition title="Nilpotent">
        <p>
          A linear operator <Math>T</Math> (or matrix <Math>A</Math>) is <strong>nilpotent</strong> if
          <Math>T^k = 0</Math> for some positive integer <Math>k</Math>. The smallest such <Math>k</Math>
          is the <strong>index of nilpotency</strong>.
        </p>
      </Definition>

      <Theorem title="Jordan Form of Nilpotent Operators">
        <p>
          <Math>T</Math> is nilpotent if and only if its only eigenvalue is 0. The Jordan form
          consists of blocks <Math>J_{'{k_i}'}(0)</Math>:
        </p>
        <MathBlock>{`J = \\begin{pmatrix} J_{k_1}(0) & & \\\\ & \\ddots & \\\\ & & J_{k_r}(0) \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          The index of nilpotency equals the size of the largest Jordan block.
        </p>
      </Theorem>

      <Example title="Nilpotent Jordan Form">
        <p>
          <Math>N = \begin{'{pmatrix}'} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{'{pmatrix}'} = J_3(0)</Math>
        </p>
        <p className="mt-2">
          Check: <Math>N^3 = 0</Math> but <Math>N^2 \neq 0</Math>, so index of nilpotency is 3.
        </p>
      </Example>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Generalized eigenvectors extend ordinary eigenvectors: <Math>(T - \lambda I)^k v = 0</Math></li>
          <li>Jordan block <Math>J_k(\lambda)</Math>: <Math>\lambda</Math> on diagonal, 1's on superdiagonal</li>
          <li>Every matrix has a unique Jordan form (over algebraically closed field)</li>
          <li>Geometric multiplicity = number of Jordan blocks for that eigenvalue</li>
          <li>Jordan chains provide the basis: <Math>(T - \lambda I)v_j = v_{'{j-1}'}</Math></li>
          <li>Nilpotent operators have Jordan form with all zero eigenvalues</li>
          <li>Jordan form is key to Cayley-Hamilton theorem and matrix functions</li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={12}
        questions={section12Quiz}
        title="Jordan Canonical Form Quiz"
      />
    </LessonLayout>
  );
}
