import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Introduction */}
      <p>
        The <strong>transpose</strong> of a matrix flips it across its main diagonal. <strong>Permutations</strong> exchange
        rows—and they become essential when elimination needs row exchanges.
      </p>

      <h2>The Transpose <InlineMath>A^T</InlineMath></h2>

      <Definition title="Transpose" className="my-6">
        <p>
          The <strong>transpose</strong> <InlineMath>A^T</InlineMath> is obtained by exchanging rows and columns:
        </p>
        <MathBlock>
          {`(A^T)_{ij} = A_{ji}`}
        </MathBlock>
        <p className="mt-2">
          Row <InlineMath>i</InlineMath> of <InlineMath>A^T</InlineMath> = Column <InlineMath>i</InlineMath> of <InlineMath>A</InlineMath>.
        </p>
      </Definition>

      <Example title="Computing a Transpose" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 4 \\end{bmatrix} \\quad \\Rightarrow \\quad A^T = \\begin{bmatrix} 1 & 0 \\\\ 2 & 0 \\\\ 3 & 4 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>A</InlineMath> is <InlineMath>2 \times 3</InlineMath>, so <InlineMath>A^T</InlineMath> is <InlineMath>3 \times 2</InlineMath>.
        </p>
      </Example>

      <h2>Properties of Transpose</h2>

      <Theorem
        title="Transpose Rules"
        className="my-6"
        proof={
          <>
            <p><strong>Property 1:</strong> <InlineMath>(A + B)^T = A^T + B^T</InlineMath></p>
            <p>Entry <InlineMath>(i,j)</InlineMath> of <InlineMath>(A+B)^T</InlineMath> is entry <InlineMath>(j,i)</InlineMath> of <InlineMath>A+B</InlineMath>, which equals <InlineMath>{`a_{ji} + b_{ji} = (A^T)_{ij} + (B^T)_{ij}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Property 2:</strong> <InlineMath>(AB)^T = B^T A^T</InlineMath></p>
            <p>Entry <InlineMath>(i,j)</InlineMath> of <InlineMath>(AB)^T</InlineMath> is entry <InlineMath>(j,i)</InlineMath> of <InlineMath>AB</InlineMath>:</p>
            <MathBlock>{`(AB)_{ji} = \\sum_k a_{jk}b_{ki} = \\sum_k (A^T)_{kj}(B^T)_{ik} = \\sum_k (B^T)_{ik}(A^T)_{kj} = (B^TA^T)_{ij}`}</MathBlock>
            <p className="mt-2"><strong>Property 3:</strong> <InlineMath>(A^T)^T = A</InlineMath></p>
            <p>Entry <InlineMath>(i,j)</InlineMath> of <InlineMath>(A^T)^T</InlineMath> is <InlineMath>{`(A^T)_{ji} = a_{ij}`}</InlineMath>, which is entry <InlineMath>(i,j)</InlineMath> of <InlineMath>A</InlineMath>.</p>
            <p className="mt-2"><strong>Property 4:</strong> <InlineMath>{`(A^{-1})^T = (A^T)^{-1}`}</InlineMath></p>
            <p>Taking transposes of <InlineMath>{`A^{-1}A = I`}</InlineMath>: <InlineMath>{`(A^{-1}A)^T = I^T`}</InlineMath>, so <InlineMath>{`A^T(A^{-1})^T = I`}</InlineMath>. This shows <InlineMath>{`(A^{-1})^T`}</InlineMath> is the inverse of <InlineMath>A^T</InlineMath>.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>(A + B)^T = A^T + B^T</InlineMath></li>
          <li><InlineMath>(AB)^T = B^T A^T</InlineMath> — the order reverses!</li>
          <li><InlineMath>(A^T)^T = A</InlineMath></li>
          <li><InlineMath>{`(A^{-1})^T = (A^T)^{-1}`}</InlineMath></li>
        </ul>
      </Theorem>

      <h2>Symmetric Matrices</h2>

      <Definition title="Symmetric Matrix" className="my-6">
        <p>
          A matrix <InlineMath>S</InlineMath> is <strong>symmetric</strong> if <InlineMath>S^T = S</InlineMath>.
        </p>
        <MathBlock>
          {`S = \\begin{bmatrix} 1 & 2 & 7 \\\\ 2 & 0 & 3 \\\\ 7 & 3 & 5 \\end{bmatrix} \\quad S^T = S`}
        </MathBlock>
        <p className="mt-2">
          A symmetric matrix equals its transpose. It is symmetric about the main diagonal.
        </p>
      </Definition>

      <Theorem
        title="Creating Symmetric Matrices"
        className="my-6"
        proof={
          <>
            <p>A matrix <InlineMath>S</InlineMath> is symmetric if <InlineMath>S^T = S</InlineMath>. We verify this for <InlineMath>A^TA</InlineMath>:</p>
            <MathBlock>{`(A^TA)^T = A^T(A^T)^T = A^TA`}</MathBlock>
            <p>The second equality uses <InlineMath>(A^T)^T = A</InlineMath>. Since <InlineMath>(A^TA)^T = A^TA</InlineMath>, the matrix is symmetric.</p>
            <p className="mt-2">Similarly for <InlineMath>AA^T</InlineMath>:</p>
            <MathBlock>{`(AA^T)^T = (A^T)^TA^T = AA^T`}</MathBlock>
            <p>Both products are also square: if <InlineMath>A</InlineMath> is <InlineMath>m \times n</InlineMath>, then <InlineMath>A^TA</InlineMath> is <InlineMath>n \times n</InlineMath> and <InlineMath>AA^T</InlineMath> is <InlineMath>m \times m</InlineMath>.</p>
          </>
        }
      >
        <p>
          For any matrix <InlineMath>A</InlineMath> (not necessarily square):
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>A^TA</InlineMath> is always symmetric (and square)</li>
          <li><InlineMath>AA^T</InlineMath> is always symmetric (and square)</li>
        </ul>
      </Theorem>

      <h2>Permutation Matrices</h2>

      <Definition title="Permutation Matrix" className="my-6">
        <p>
          A <strong>permutation matrix</strong> <InlineMath>P</InlineMath> has exactly one 1 in each row and column, with zeros elsewhere.
          It reorders the rows of a matrix.
        </p>
        <MathBlock>
          {`P = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix} \\quad \\text{exchanges rows 1 and 2}`}
        </MathBlock>
      </Definition>

      <Example title="Row Exchange with Permutation" className="my-6">
        <MathBlock>
          {`PA = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = \\begin{bmatrix} c & d \\\\ a & b \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Multiplying on the <em>left</em> by <InlineMath>P</InlineMath> exchanges rows.
        </p>
      </Example>

      <h2>Properties of Permutations</h2>

      <Theorem
        title="Permutation Properties"
        className="my-6"
        proof={
          <>
            <p><strong>Property 1:</strong> <InlineMath>{`P^{-1} = P^T`}</InlineMath></p>
            <p>Let <InlineMath>P</InlineMath> have a 1 in position <InlineMath>(i, j)</InlineMath>. Then <InlineMath>P^T</InlineMath> has a 1 in position <InlineMath>(j, i)</InlineMath>.</p>
            <p className="mt-2">The <InlineMath>(i, i)</InlineMath> entry of <InlineMath>P^TP</InlineMath> equals (row <InlineMath>i</InlineMath> of <InlineMath>P^T</InlineMath>) · (column <InlineMath>i</InlineMath> of <InlineMath>P</InlineMath>). Row <InlineMath>i</InlineMath> of <InlineMath>P^T</InlineMath> is column <InlineMath>i</InlineMath> of <InlineMath>P</InlineMath>, so this dot product counts how many 1's are in column <InlineMath>i</InlineMath> of <InlineMath>P</InlineMath> — exactly one. Thus diagonal entries of <InlineMath>P^TP</InlineMath> are 1.</p>
            <p className="mt-2">For <InlineMath>{`i \\neq k`}</InlineMath>, the <InlineMath>{`(i, k)`}</InlineMath> entry of <InlineMath>{`P^TP`}</InlineMath> counts 1's shared between columns <InlineMath>i</InlineMath> and <InlineMath>k</InlineMath> of <InlineMath>P</InlineMath>. Since each row of <InlineMath>P</InlineMath> has exactly one 1, columns <InlineMath>i</InlineMath> and <InlineMath>k</InlineMath> have their 1's in different rows, giving 0.</p>
            <p className="mt-2">Therefore <InlineMath>{`P^TP = I`}</InlineMath>, proving <InlineMath>{`P^{-1} = P^T`}</InlineMath>.</p>
            <p className="mt-2"><strong>Property 3:</strong> Each permutation matrix corresponds to a permutation of <InlineMath>{`\\{1, 2, \\ldots, n\\}`}</InlineMath>. There are <InlineMath>{`n!`}</InlineMath> such permutations.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>{`P^{-1} = P^T`}</InlineMath> for any permutation matrix</li>
          <li><InlineMath>P^TP = I</InlineMath> (permutations are <strong>orthogonal</strong>)</li>
          <li>There are <InlineMath>n!</InlineMath> permutation matrices of size <InlineMath>n \times n</InlineMath></li>
        </ul>
      </Theorem>

      <h2><InlineMath>PA = LU</InlineMath> with Row Exchanges</h2>

      <p>
        When elimination needs row exchanges, we factor <InlineMath>PA = LU</InlineMath> instead of <InlineMath>A = LU</InlineMath>.
        The permutation <InlineMath>P</InlineMath> records all the row exchanges.
      </p>

      <Example title="Factorization with Permutation" className="my-6">
        <p>If <InlineMath>A</InlineMath> requires a row exchange:</p>
        <MathBlock>
          {`PA = LU \\quad \\text{where } P \\text{ is the permutation matrix}`}
        </MathBlock>
        <p className="mt-2">
          MATLAB's <code>lu(A)</code> returns <InlineMath>L, U, P</InlineMath> satisfying <InlineMath>PA = LU</InlineMath>.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The transpose <InlineMath>A^T</InlineMath> exchanges rows and columns: <InlineMath>{`(A^T)_{ij} = A_{ji}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The transpose of a product reverses order: <InlineMath>(AB)^T = B^TA^T</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>A symmetric matrix has <InlineMath>S^T = S</InlineMath>. Products <InlineMath>A^TA</InlineMath> and <InlineMath>AA^T</InlineMath> are always symmetric.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>A permutation matrix <InlineMath>P</InlineMath> has one 1 in each row/column. <InlineMath>{`P^{-1} = P^T`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>With row exchanges: <InlineMath>PA = LU</InlineMath> (the permutation records the exchanges).</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
