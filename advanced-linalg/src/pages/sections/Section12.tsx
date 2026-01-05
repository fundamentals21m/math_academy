import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
          A vector <InlineMath>v \neq 0</InlineMath> is a <strong>generalized eigenvector</strong> of <InlineMath>T</InlineMath>
          for eigenvalue <InlineMath>\lambda</InlineMath> of <strong>order</strong> <InlineMath>k</InlineMath> if:
        </p>
        <MathBlock>{`(T - \\lambda I)^k v = 0 \\quad \\text{but} \\quad (T - \\lambda I)^{k-1} v \\neq 0`}</MathBlock>
        <p className="mt-2">
          Ordinary eigenvectors are generalized eigenvectors of order 1.
        </p>
      </Definition>

      <Definition title="Generalized Eigenspace">
        <p>
          The <strong>generalized eigenspace</strong> for eigenvalue <InlineMath>\lambda</InlineMath> is:
        </p>
        <MathBlock>{`G_\\lambda = \\ker(T - \\lambda I)^n = \\{v \\in V : (T - \\lambda I)^n v = 0\\}`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>n = \dim(V)</InlineMath>. This always has dimension equal to the algebraic
          multiplicity of <InlineMath>\lambda</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Generalized Eigenspace Decomposition"
        proof={
          <>
            <p>
              Since the characteristic polynomial factors as <InlineMath>p(\lambda) = \prod_i (\lambda - \lambda_i)^{'{m_i}'}</InlineMath>,
              we can apply the Primary Decomposition Theorem:
            </p>
            <MathBlock>{`V = \\ker(T - \\lambda_1 I)^{m_1} \\oplus \\cdots \\oplus \\ker(T - \\lambda_k I)^{m_k}`}</MathBlock>
            <p className="mt-2">
              Each summand is <InlineMath>G_{'\\lambda_i'}</InlineMath> with dimension <InlineMath>m_i</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>T: V \to V</InlineMath> has eigenvalues <InlineMath>\lambda_1, \ldots, \lambda_k</InlineMath> with
          algebraic multiplicities <InlineMath>m_1, \ldots, m_k</InlineMath>, then:
        </p>
        <MathBlock>{`V = G_{\\lambda_1} \\oplus G_{\\lambda_2} \\oplus \\cdots \\oplus G_{\\lambda_k}`}</MathBlock>
      </Theorem>

      <h2>Jordan Blocks</h2>

      <Definition title="Jordan Block">
        <p>
          A <strong>Jordan block</strong> <InlineMath>J_k(\lambda)</InlineMath> of size <InlineMath>k</InlineMath> for
          eigenvalue <InlineMath>\lambda</InlineMath> is the <InlineMath>k \times k</InlineMath> matrix:
        </p>
        <MathBlock>{`J_k(\\lambda) = \\begin{pmatrix} \\lambda & 1 & 0 & \\cdots & 0 \\\\ 0 & \\lambda & 1 & \\cdots & 0 \\\\ \\vdots & & \\ddots & \\ddots & \\vdots \\\\ 0 & \\cdots & & \\lambda & 1 \\\\ 0 & \\cdots & & 0 & \\lambda \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          It has <InlineMath>\lambda</InlineMath> on the diagonal and 1's on the superdiagonal.
        </p>
      </Definition>

      <Example title="Small Jordan Blocks">
        <MathBlock>{`J_1(\\lambda) = (\\lambda), \\quad J_2(\\lambda) = \\begin{pmatrix} \\lambda & 1 \\\\ 0 & \\lambda \\end{pmatrix}, \\quad J_3(\\lambda) = \\begin{pmatrix} \\lambda & 1 & 0 \\\\ 0 & \\lambda & 1 \\\\ 0 & 0 & \\lambda \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          Note: <InlineMath>J_1(\lambda)</InlineMath> is just <InlineMath>(\lambda)</InlineMath> — a diagonal entry.
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
              <li>Decompose <InlineMath>V = G_{'\\lambda_1'} \oplus \cdots \oplus G_{'\\lambda_k'}</InlineMath></li>
              <li>On each <InlineMath>G_{'\\lambda_i'}</InlineMath>, the operator <InlineMath>(T - \lambda_i I)</InlineMath> is nilpotent</li>
              <li>Every nilpotent operator has a Jordan form with all eigenvalues = 0</li>
              <li>Shifting by <InlineMath>\lambda_i</InlineMath> gives Jordan blocks <InlineMath>J_{'{k}'}(\lambda_i)</InlineMath></li>
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
          Every linear operator <InlineMath>T</InlineMath> on a finite-dimensional vector space over an
          algebraically closed field <InlineMath>F</InlineMath> has a unique Jordan canonical form (up to
          ordering of blocks).
        </p>
        <p className="mt-2">
          Specifically, there exists a basis such that the matrix of <InlineMath>T</InlineMath> is in Jordan form.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Algebraically Closed Field Required:</strong> Jordan form exists when all eigenvalues
        are in the field. Over <InlineMath>{`\\mathbb{R}`}</InlineMath>, matrices like
        <InlineMath>\begin{'{pmatrix}'} 0 & -1 \\ 1 & 0 \end{'{pmatrix}'}</InlineMath> don't have Jordan form
        (eigenvalues <InlineMath>\pm i</InlineMath> aren't real). The real Jordan form uses 2×2 rotation blocks instead.
      </Callout>

      <h2>Finding Jordan Chains</h2>

      <Definition title="Jordan Chain">
        <p>
          A <strong>Jordan chain</strong> of length <InlineMath>k</InlineMath> for eigenvalue <InlineMath>\lambda</InlineMath> is a
          sequence of vectors <InlineMath>v_1, v_2, \ldots, v_k</InlineMath> such that:
        </p>
        <MathBlock>{`(T - \\lambda I)v_1 = 0, \\quad (T - \\lambda I)v_2 = v_1, \\quad \\ldots, \\quad (T - \\lambda I)v_k = v_{k-1}`}</MathBlock>
        <p className="mt-2">
          The vectors in a Jordan chain form a basis for a Jordan block: <InlineMath>Tv_1 = \lambda v_1</InlineMath>,
          <InlineMath>Tv_2 = v_1 + \lambda v_2</InlineMath>, etc.
        </p>
      </Definition>

      <div className="p-4 bg-dark-800/50 rounded-xl my-6">
        <h3 className="text-lg font-semibold text-emerald-400 mb-3">Algorithm: Finding Jordan Form</h3>
        <ol className="list-decimal list-inside text-dark-300 space-y-2">
          <li>Find all eigenvalues <InlineMath>\lambda_i</InlineMath> and their algebraic multiplicities <InlineMath>m_i</InlineMath></li>
          <li>For each <InlineMath>\lambda_i</InlineMath>, compute ranks: <InlineMath>r_j = {`\\text{rank}`}(A - \lambda_i I)^j</InlineMath> for <InlineMath>j = 0, 1, 2, \ldots</InlineMath> until stable</li>
          <li>Number of Jordan blocks of size <InlineMath>\geq j</InlineMath>: <InlineMath>r_{'j-1'} - r_j</InlineMath></li>
          <li>Build Jordan chains starting from highest order generalized eigenvectors</li>
          <li>Form basis from all Jordan chains; write matrix in this basis</li>
        </ol>
      </div>

      <Example title="Computing Jordan Form">
        <p>Find the Jordan form of <InlineMath>A = \begin{'{pmatrix}'} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{'{pmatrix}'}</InlineMath>:</p>
        <p className="mt-2"><strong>Step 1:</strong> Only eigenvalue is <InlineMath>\lambda = 2</InlineMath> with algebraic multiplicity 3.</p>
        <p className="mt-2"><strong>Step 2:</strong> Compute:</p>
        <MathBlock>{`A - 2I = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}, \\quad (A - 2I)^2 = \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}, \\quad (A - 2I)^3 = O`}</MathBlock>
        <p className="mt-2">Ranks: <InlineMath>r_0 = 3, r_1 = 2, r_2 = 1, r_3 = 0</InlineMath></p>
        <p className="mt-2"><strong>Step 3:</strong> Blocks of size <InlineMath>\geq 1</InlineMath>: <InlineMath>3 - 2 = 1</InlineMath></p>
        <p>Blocks of size <InlineMath>\geq 2</InlineMath>: <InlineMath>2 - 1 = 1</InlineMath></p>
        <p>Blocks of size <InlineMath>\geq 3</InlineMath>: <InlineMath>1 - 0 = 1</InlineMath></p>
        <p className="mt-2">So there's exactly one block of size 3!</p>
        <p className="mt-2"><strong>Jordan form:</strong> <InlineMath>J = J_3(2) = \begin{'{pmatrix}'} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{'{pmatrix}'}</InlineMath></p>
        <p className="mt-2">(In this case, <InlineMath>A</InlineMath> is already in Jordan form!)</p>
      </Example>

      <Example title="Multiple Jordan Blocks">
        <p>Consider <InlineMath>A = \begin{'{pmatrix}'} 2 & 1 & 0 & 0 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 2 \end{'{pmatrix}'}</InlineMath>:</p>
        <p className="mt-2">
          This is in Jordan form with two <InlineMath>J_2(2)</InlineMath> blocks. The eigenvalue <InlineMath>\lambda = 2</InlineMath>
          has algebraic multiplicity 4 but geometric multiplicity 2 (two linearly independent eigenvectors).
        </p>
        <MathBlock>{`J = J_2(2) \\oplus J_2(2) = \\begin{pmatrix} 2 & 1 & & \\\\ 0 & 2 & & \\\\ & & 2 & 1 \\\\ & & 0 & 2 \\end{pmatrix}`}</MathBlock>
      </Example>

      <h2>Properties of Jordan Form</h2>

      <Theorem
        title="Invariants from Jordan Form"
        proof={
          <>
            <p><strong>Eigenvalues:</strong> Jordan blocks <InlineMath>J_k(\lambda)</InlineMath> have <InlineMath>\lambda</InlineMath> on the diagonal. Since similar matrices have the same eigenvalues, these are the eigenvalues of <InlineMath>A</InlineMath>.</p>
            <p className="mt-2"><strong>Algebraic multiplicity:</strong> The characteristic polynomial of <InlineMath>J_k(\lambda)</InlineMath> is <InlineMath>(\mu - \lambda)^k</InlineMath>. Summing over all blocks for <InlineMath>\lambda</InlineMath> gives the total power, which is the algebraic multiplicity.</p>
            <p className="mt-2"><strong>Geometric multiplicity:</strong> Each Jordan block <InlineMath>J_k(\lambda)</InlineMath> contributes exactly one eigenvector (the first standard basis vector in that block). So geometric multiplicity = number of blocks.</p>
            <p className="mt-2"><strong>Minimal polynomial:</strong> For a single block <InlineMath>J_k(\lambda)</InlineMath>, <InlineMath>(J_k(\lambda) - \lambda I)^k = 0</InlineMath> but <InlineMath>(J_k(\lambda) - \lambda I)^{'{k-1}'} \neq 0</InlineMath>. The minimal polynomial for <InlineMath>\lambda</InlineMath> is <InlineMath>(\mu - \lambda)^m</InlineMath> where <InlineMath>m</InlineMath> is the largest block size.</p>
            <p className="mt-2"><strong>Characteristic polynomial:</strong> Block diagonal structure gives <InlineMath>p(\mu) = \prod_i (\mu - \lambda_i)^{'{m_i}'}</InlineMath> where <InlineMath>m_i</InlineMath> is the algebraic multiplicity.</p>
          </>
        }
      >
        <p>The Jordan form reveals important invariants:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Eigenvalues:</strong> The diagonal entries</li>
          <li><strong>Algebraic multiplicity:</strong> Sum of sizes of blocks for that eigenvalue</li>
          <li><strong>Geometric multiplicity:</strong> Number of blocks for that eigenvalue</li>
          <li><strong>Minimal polynomial degree for <InlineMath>\lambda</InlineMath>:</strong> Size of largest block</li>
          <li><strong>Characteristic polynomial:</strong> <InlineMath>\prod (\lambda - \lambda_i)^{'{m_i}'}</InlineMath></li>
        </ul>
      </Theorem>

      <Theorem
        title="Powers of Jordan Blocks"
        proof={
          <>
            <p>
              Write <InlineMath>J_k(\lambda) = \lambda I + N</InlineMath> where <InlineMath>N</InlineMath> is the nilpotent matrix with 1's on the superdiagonal.
            </p>
            <p className="mt-2">Since <InlineMath>\lambda I</InlineMath> and <InlineMath>N</InlineMath> commute, use the binomial theorem:</p>
            <MathBlock>{`J^n = (\\lambda I + N)^n = \\sum_{r=0}^{n} \\binom{n}{r} \\lambda^{n-r} N^r`}</MathBlock>
            <p className="mt-2">
              Note <InlineMath>N^r</InlineMath> has 1's on the <InlineMath>r</InlineMath>-th superdiagonal and zeros elsewhere. Also <InlineMath>N^k = 0</InlineMath> for the <InlineMath>k \times k</InlineMath> block.
            </p>
            <p className="mt-2">
              The <InlineMath>(i,j)</InlineMath> entry (for <InlineMath>j \geq i</InlineMath>) comes from <InlineMath>N^{'{j-i}'}</InlineMath>, giving coefficient <InlineMath>\binom{'{n}'}{'{j-i}'}\lambda^{'{n-(j-i)}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>For a Jordan block <InlineMath>J = J_k(\lambda)</InlineMath>:</p>
        <MathBlock>{`J^n = \\begin{pmatrix} \\lambda^n & \\binom{n}{1}\\lambda^{n-1} & \\binom{n}{2}\\lambda^{n-2} & \\cdots \\\\ 0 & \\lambda^n & \\binom{n}{1}\\lambda^{n-1} & \\cdots \\\\ \\vdots & & \\ddots & \\\\ 0 & \\cdots & 0 & \\lambda^n \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          Entry <InlineMath>(i,j)</InlineMath> is <InlineMath>\binom{'{n}'}{'{j-i}'}\lambda^{'{n-(j-i)}'}</InlineMath> if <InlineMath>j \geq i</InlineMath>, else 0.
        </p>
      </Theorem>

      <h2>The Cayley-Hamilton Connection</h2>

      <Theorem
        title="Cayley-Hamilton Theorem"
        proof={
          <>
            <p>
              Using Jordan form, if <InlineMath>A = PJP^{'{-1}'}</InlineMath> with Jordan form <InlineMath>J</InlineMath>, then:
            </p>
            <MathBlock>{`p(A) = Pp(J)P^{-1}`}</MathBlock>
            <p className="mt-2">
              For a Jordan block <InlineMath>J_k(\lambda)</InlineMath>, we have <InlineMath>(J_k(\lambda) - \lambda I)^k = 0</InlineMath>.
            </p>
            <p className="mt-2">
              Since <InlineMath>(\lambda - \lambda_i)^{'{m_i}'}</InlineMath> divides <InlineMath>p(\lambda)</InlineMath> where <InlineMath>m_i</InlineMath> is
              the algebraic multiplicity (= sum of block sizes for <InlineMath>\lambda_i</InlineMath>), we get <InlineMath>p(J) = 0</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Every matrix satisfies its own characteristic polynomial: if <InlineMath>p(\lambda) = \det(\lambda I - A)</InlineMath>,
          then <InlineMath>p(A) = 0</InlineMath>.
        </p>
      </Theorem>

      <h2>Nilpotent Operators</h2>

      <Definition title="Nilpotent">
        <p>
          A linear operator <InlineMath>T</InlineMath> (or matrix <InlineMath>A</InlineMath>) is <strong>nilpotent</strong> if
          <InlineMath>T^k = 0</InlineMath> for some positive integer <InlineMath>k</InlineMath>. The smallest such <InlineMath>k</InlineMath>
          is the <strong>index of nilpotency</strong>.
        </p>
      </Definition>

      <Theorem
        title="Jordan Form of Nilpotent Operators"
        proof={
          <>
            <p><strong>(⇒)</strong> If <InlineMath>T</InlineMath> is nilpotent with <InlineMath>T^k = 0</InlineMath>, and <InlineMath>Tv = \lambda v</InlineMath> for <InlineMath>v \neq 0</InlineMath>, then:</p>
            <MathBlock>{`0 = T^k v = \\lambda^k v`}</MathBlock>
            <p className="mt-2">Since <InlineMath>v \neq 0</InlineMath>, we have <InlineMath>\lambda^k = 0</InlineMath>, so <InlineMath>\lambda = 0</InlineMath>. Thus 0 is the only eigenvalue.</p>
            <p className="mt-2"><strong>(⇐)</strong> If 0 is the only eigenvalue, the characteristic polynomial is <InlineMath>p(\lambda) = \lambda^n</InlineMath>. By Cayley-Hamilton, <InlineMath>T^n = 0</InlineMath>, so <InlineMath>T</InlineMath> is nilpotent.</p>
            <p className="mt-4"><strong>Jordan form structure:</strong></p>
            <p className="mt-2">Since all eigenvalues are 0, every Jordan block is <InlineMath>J_{'{k_i}'}(0)</InlineMath>, which is strictly upper triangular.</p>
            <p className="mt-2"><strong>Index of nilpotency:</strong> <InlineMath>J_{'{k}'}(0)^m = 0</InlineMath> iff <InlineMath>m \geq k</InlineMath>. For block diagonal <InlineMath>J</InlineMath>, <InlineMath>J^m = 0</InlineMath> iff <InlineMath>m \geq \max_i k_i</InlineMath>. So the index equals the largest block size.</p>
          </>
        }
      >
        <p>
          <InlineMath>T</InlineMath> is nilpotent if and only if its only eigenvalue is 0. The Jordan form
          consists of blocks <InlineMath>J_{'{k_i}'}(0)</InlineMath>:
        </p>
        <MathBlock>{`J = \\begin{pmatrix} J_{k_1}(0) & & \\\\ & \\ddots & \\\\ & & J_{k_r}(0) \\end{pmatrix}`}</MathBlock>
        <p className="mt-2">
          The index of nilpotency equals the size of the largest Jordan block.
        </p>
      </Theorem>

      <Example title="Nilpotent Jordan Form">
        <p>
          <InlineMath>N = \begin{'{pmatrix}'} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{'{pmatrix}'} = J_3(0)</InlineMath>
        </p>
        <p className="mt-2">
          Check: <InlineMath>N^3 = 0</InlineMath> but <InlineMath>N^2 \neq 0</InlineMath>, so index of nilpotency is 3.
        </p>
      </Example>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>Generalized eigenvectors extend ordinary eigenvectors: <InlineMath>(T - \lambda I)^k v = 0</InlineMath></li>
          <li>Jordan block <InlineMath>J_k(\lambda)</InlineMath>: <InlineMath>\lambda</InlineMath> on diagonal, 1's on superdiagonal</li>
          <li>Every matrix has a unique Jordan form (over algebraically closed field)</li>
          <li>Geometric multiplicity = number of Jordan blocks for that eigenvalue</li>
          <li>Jordan chains provide the basis: <InlineMath>(T - \lambda I)v_j = v_{'{j-1}'}</InlineMath></li>
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
