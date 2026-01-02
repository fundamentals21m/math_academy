import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section100() {
  return (
    <LessonLayout sectionId={100}>
      <h1>Matrix Inverses</h1>

      <p>
        The inverse of a matrix, when it exists, allows us to "undo" matrix multiplication.
        This concept is fundamental for solving systems of equations and understanding
        when linear transformations can be reversed.
      </p>

      <h2>Definition and Basic Properties</h2>

      <Callout type="definition" title="Inverse Matrix">
        <p>
          An <InlineMath>{`n \\times n`}</InlineMath> matrix <InlineMath>A</InlineMath> is <strong>invertible</strong>
          (or <strong>nonsingular</strong>) if there exists a matrix <InlineMath>{`A^{-1}`}</InlineMath> such that:
        </p>
        <MathBlock>{`AA^{-1} = A^{-1}A = I_n`}</MathBlock>
        <p>
          The matrix <InlineMath>{`A^{-1}`}</InlineMath> is called the <strong>inverse</strong> of <InlineMath>A</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Uniqueness of Inverse">
        <p>
          If <InlineMath>A</InlineMath> is invertible, its inverse is unique.
        </p>
        <p className="mt-2"><strong>Proof:</strong> If <InlineMath>B</InlineMath> and <InlineMath>C</InlineMath> are both inverses of <InlineMath>A</InlineMath>:</p>
        <MathBlock>{`B = BI = B(AC) = (BA)C = IC = C`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Inverses">
        <p>If <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are invertible <InlineMath>{`n \\times n`}</InlineMath> matrices:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`(A^{-1})^{-1} = A`}</InlineMath></li>
          <li><InlineMath>{`(AB)^{-1} = B^{-1}A^{-1}`}</InlineMath> (order reverses!)</li>
          <li><InlineMath>{`(A^T)^{-1} = (A^{-1})^T`}</InlineMath></li>
          <li><InlineMath>{`(cA)^{-1} = \\frac{1}{c}A^{-1}`}</InlineMath> for <InlineMath>{`c \\neq 0`}</InlineMath></li>
          <li><InlineMath>{`(A^k)^{-1} = (A^{-1})^k`}</InlineMath> for positive integer <InlineMath>k</InlineMath></li>
        </ol>
      </Callout>

      <h2>The 2×2 Case</h2>

      <Callout type="theorem" title="Inverse of 2×2 Matrix">
        <p>For <InlineMath>{`A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}`}</InlineMath>:</p>
        <MathBlock>{`A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}`}</MathBlock>
        <p>
          The inverse exists if and only if <InlineMath>{`ad - bc \\neq 0`}</InlineMath>.
        </p>
        <p className="mt-2">
          The quantity <InlineMath>{`ad - bc`}</InlineMath> is the <strong>determinant</strong> of <InlineMath>A</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="2×2 Inverse">
        <MathBlock>{`A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}`}</MathBlock>
        <p><InlineMath>{`\\det(A) = 3 \\cdot 2 - 1 \\cdot 5 = 1`}</InlineMath></p>
        <MathBlock>{`A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}`}</MathBlock>
        <p><strong>Verify:</strong></p>
        <MathBlock>{`AA^{-1} = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\checkmark`}</MathBlock>
      </Callout>

      <h2>Computing Inverses via Row Reduction</h2>

      <Callout type="theorem" title="Gauss-Jordan Method">
        <p>To find <InlineMath>{`A^{-1}`}</InlineMath> for an <InlineMath>{`n \\times n`}</InlineMath> matrix:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Form the augmented matrix <InlineMath>{`[A | I_n]`}</InlineMath></li>
          <li>Row reduce to reduced row echelon form</li>
          <li>If the result is <InlineMath>{`[I_n | B]`}</InlineMath>, then <InlineMath>{`A^{-1} = B`}</InlineMath></li>
          <li>If the left side cannot become <InlineMath>{`I_n`}</InlineMath>, then <InlineMath>A</InlineMath> is not invertible</li>
        </ol>
      </Callout>

      <Callout type="example" title="Computing Inverse via Row Reduction">
        <p>Find the inverse of:</p>
        <MathBlock>{`A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 3 \\\\ 1 & 3 & 2 \\end{pmatrix}`}</MathBlock>
        <p><strong>Step 1:</strong> Form <InlineMath>{`[A | I]`}</InlineMath>:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|ccc} 1 & 2 & 1 & 1 & 0 & 0 \\\\ 2 & 5 & 3 & 0 & 1 & 0 \\\\ 1 & 3 & 2 & 0 & 0 & 1 \\end{array}\\right)`}</MathBlock>
        <p><strong>Step 2:</strong> <InlineMath>{`R_2 \\to R_2 - 2R_1`}</InlineMath>, <InlineMath>{`R_3 \\to R_3 - R_1`}</InlineMath>:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|ccc} 1 & 2 & 1 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & -2 & 1 & 0 \\\\ 0 & 1 & 1 & -1 & 0 & 1 \\end{array}\\right)`}</MathBlock>
        <p><strong>Step 3:</strong> <InlineMath>{`R_3 \\to R_3 - R_2`}</InlineMath>:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|ccc} 1 & 2 & 1 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & -2 & 1 & 0 \\\\ 0 & 0 & 0 & 1 & -1 & 1 \\end{array}\\right)`}</MathBlock>
        <p>The left side cannot become <InlineMath>I</InlineMath> (zero row appeared). Therefore, <InlineMath>A</InlineMath> is <strong>not invertible</strong>.</p>
      </Callout>

      <Callout type="example" title="Successful Inverse Computation">
        <p>Find the inverse of:</p>
        <MathBlock>{`A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & -1 & 3 \\\\ 4 & 1 & 8 \\end{pmatrix}`}</MathBlock>
        <p>After row reduction of <InlineMath>{`[A | I]`}</InlineMath>:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|ccc} 1 & 0 & 0 & -11 & 2 & 2 \\\\ 0 & 1 & 0 & -4 & 0 & 1 \\\\ 0 & 0 & 1 & 6 & -1 & -1 \\end{array}\\right)`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`A^{-1} = \\begin{pmatrix} -11 & 2 & 2 \\\\ -4 & 0 & 1 \\\\ 6 & -1 & -1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Characterizations of Invertibility</h2>

      <Callout type="theorem" title="The Invertible Matrix Theorem">
        <p>For an <InlineMath>{`n \\times n`}</InlineMath> matrix <InlineMath>A</InlineMath>, the following are equivalent:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><InlineMath>A</InlineMath> is invertible</li>
          <li><InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath> has only the trivial solution</li>
          <li><InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> has a unique solution for every <InlineMath>{`\\mathbf{b}`}</InlineMath></li>
          <li>The RREF of <InlineMath>A</InlineMath> is <InlineMath>{`I_n`}</InlineMath></li>
          <li><InlineMath>{`\\text{rank}(A) = n`}</InlineMath></li>
          <li><InlineMath>{`N(A) = \\{\\mathbf{0}\\}`}</InlineMath></li>
          <li>The columns of <InlineMath>A</InlineMath> are linearly independent</li>
          <li>The columns of <InlineMath>A</InlineMath> span <InlineMath>{`\\mathbb{R}^n`}</InlineMath></li>
          <li>The rows of <InlineMath>A</InlineMath> are linearly independent</li>
          <li><InlineMath>{`A^T`}</InlineMath> is invertible</li>
          <li><InlineMath>{`\\det(A) \\neq 0`}</InlineMath></li>
          <li>The linear transformation <InlineMath>{`\\mathbf{x} \\mapsto A\\mathbf{x}`}</InlineMath> is bijective</li>
        </ol>
      </Callout>

      <Callout type="info" title="Significance">
        <p>
          The Invertible Matrix Theorem connects many fundamental concepts: solutions of systems,
          rank, null space, linear independence, spanning, determinants, and linear transformations.
        </p>
      </Callout>

      <h2>Elementary Matrices</h2>

      <Callout type="definition" title="Elementary Matrix">
        <p>
          An <strong>elementary matrix</strong> is obtained by performing one elementary row operation
          on the identity matrix.
        </p>
        <p className="mt-2">Three types:</p>
        <MathBlock>{`E_{ij} = \\text{swap rows } i, j \\text{ of } I`}</MathBlock>
        <MathBlock>{`E_i(c) = \\text{multiply row } i \\text{ of } I \\text{ by } c \\neq 0`}</MathBlock>
        <MathBlock>{`E_{ij}(c) = \\text{add } c \\times \\text{row } j \\text{ to row } i \\text{ of } I`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Elementary Matrices and Row Operations">
        <p>
          Left-multiplying <InlineMath>A</InlineMath> by an elementary matrix <InlineMath>E</InlineMath> performs
          the corresponding row operation on <InlineMath>A</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Invertibility of Elementary Matrices">
        <p>Every elementary matrix is invertible:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`(E_{ij})^{-1} = E_{ij}`}</InlineMath> (swap is self-inverse)</li>
          <li><InlineMath>{`(E_i(c))^{-1} = E_i(1/c)`}</InlineMath></li>
          <li><InlineMath>{`(E_{ij}(c))^{-1} = E_{ij}(-c)`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Factorization of Invertible Matrices">
        <p>
          A matrix <InlineMath>A</InlineMath> is invertible if and only if it is a product of elementary matrices:
        </p>
        <MathBlock>{`A = E_1 E_2 \\cdots E_k`}</MathBlock>
      </Callout>

      <h2>LU Decomposition</h2>

      <Callout type="definition" title="LU Factorization">
        <p>
          An <strong>LU factorization</strong> of <InlineMath>A</InlineMath> is:
        </p>
        <MathBlock>{`A = LU`}</MathBlock>
        <p>where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>L</InlineMath> is lower triangular with 1s on the diagonal</li>
          <li><InlineMath>U</InlineMath> is upper triangular (row echelon form)</li>
        </ul>
      </Callout>

      <Callout type="theorem" title="When LU Exists">
        <p>
          <InlineMath>A</InlineMath> has an LU factorization (without row swaps) if and only if
          all leading principal submatrices are nonsingular.
        </p>
        <p className="mt-2">
          With row swaps: <InlineMath>PA = LU</InlineMath> where <InlineMath>P</InlineMath> is a permutation matrix.
        </p>
      </Callout>

      <Callout type="info" title="Advantage of LU Factorization">
        <p>
          To solve <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Solve <InlineMath>{`L\\mathbf{y} = \\mathbf{b}`}</InlineMath> (forward substitution)</li>
          <li>Solve <InlineMath>{`U\\mathbf{x} = \\mathbf{y}`}</InlineMath> (back substitution)</li>
        </ol>
        <p className="mt-2">
          Once <InlineMath>A = LU</InlineMath> is computed, solving with new <InlineMath>{`\\mathbf{b}`}</InlineMath> vectors is fast.
        </p>
      </Callout>

      <h2>Applications of Inverses</h2>

      <Callout type="theorem" title="Solving Systems">
        <p>If <InlineMath>A</InlineMath> is invertible, the unique solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> is:</p>
        <MathBlock>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Practical Note">
        <p>
          In practice, computing <InlineMath>{`A^{-1}`}</InlineMath> and then <InlineMath>{`A^{-1}\\mathbf{b}`}</InlineMath> is less efficient
          and less stable than directly solving <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> via row reduction or LU.
        </p>
        <p className="mt-2">
          Use the inverse formula mainly for theoretical work or when solving many systems with the same <InlineMath>A</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Inverse and Linear Transformations">
        <p>
          If <InlineMath>T: V → V</InlineMath> is represented by matrix <InlineMath>A</InlineMath>, then:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>T</InlineMath> is invertible iff <InlineMath>A</InlineMath> is invertible</li>
          <li><InlineMath>{`T^{-1}`}</InlineMath> is represented by <InlineMath>{`A^{-1}`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Special Inverse Formulas</h2>

      <Callout type="theorem" title="Inverse of Diagonal Matrix">
        <p>If <InlineMath>{`D = \\text{diag}(d_1, \\ldots, d_n)`}</InlineMath> with all <InlineMath>{`d_i \\neq 0`}</InlineMath>:</p>
        <MathBlock>{`D^{-1} = \\text{diag}(1/d_1, \\ldots, 1/d_n)`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Inverse of Block Diagonal Matrix">
        <MathBlock>{`\\begin{pmatrix} A & 0 \\\\ 0 & B \\end{pmatrix}^{-1} = \\begin{pmatrix} A^{-1} & 0 \\\\ 0 & B^{-1} \\end{pmatrix}`}</MathBlock>
        <p>provided both <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are invertible.</p>
      </Callout>

      <Callout type="theorem" title="Sherman-Morrison Formula">
        <p>
          If <InlineMath>A</InlineMath> is invertible and <InlineMath>{`\\mathbf{u}, \\mathbf{v}`}</InlineMath> are column vectors
          with <InlineMath>{`1 + \\mathbf{v}^T A^{-1} \\mathbf{u} \\neq 0`}</InlineMath>:
        </p>
        <MathBlock>{`(A + \\mathbf{u}\\mathbf{v}^T)^{-1} = A^{-1} - \\frac{A^{-1}\\mathbf{u}\\mathbf{v}^T A^{-1}}{1 + \\mathbf{v}^T A^{-1}\\mathbf{u}}`}</MathBlock>
        <p className="text-sm mt-2">Useful for rank-one updates to a matrix.</p>
      </Callout>

      <h2>Orthogonal Matrices</h2>

      <Callout type="definition" title="Orthogonal Matrix">
        <p>
          A square matrix <InlineMath>Q</InlineMath> is <strong>orthogonal</strong> if:
        </p>
        <MathBlock>{`Q^T Q = Q Q^T = I`}</MathBlock>
        <p>Equivalently, <InlineMath>{`Q^{-1} = Q^T`}</InlineMath>.</p>
      </Callout>

      <Callout type="theorem" title="Properties of Orthogonal Matrices">
        <ul className="list-disc pl-6 space-y-2">
          <li>Columns form an orthonormal set</li>
          <li>Rows form an orthonormal set</li>
          <li><InlineMath>{`\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|`}</InlineMath> (preserves length)</li>
          <li><InlineMath>{`|\\det(Q)| = 1`}</InlineMath></li>
          <li>Product of orthogonal matrices is orthogonal</li>
        </ul>
      </Callout>

      <Callout type="example" title="Rotation Matrix">
        <p>The 2D rotation matrix is orthogonal:</p>
        <MathBlock>{`R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`R_\\theta^{-1} = R_\\theta^T = R_{-\\theta} = \\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Definition:</strong> <InlineMath>{`AA^{-1} = A^{-1}A = I`}</InlineMath></p>

        <p className="mt-3"><strong>2×2 formula:</strong></p>
        <MathBlock>{`\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}`}</MathBlock>

        <p className="mt-3"><strong>Computing via row reduction:</strong></p>
        <MathBlock>{`[A | I] \\xrightarrow{\\text{RREF}} [I | A^{-1}]`}</MathBlock>

        <p className="mt-3"><strong>Key properties:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`(AB)^{-1} = B^{-1}A^{-1}`}</InlineMath></li>
          <li><InlineMath>{`(A^T)^{-1} = (A^{-1})^T`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Invertibility equivalent to:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\det(A) \\neq 0`}</InlineMath></li>
          <li><InlineMath>{`\\text{rank}(A) = n`}</InlineMath></li>
          <li>Columns/rows linearly independent</li>
          <li><InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> has unique solution for all <InlineMath>{`\\mathbf{b}`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Orthogonal matrices:</strong> <InlineMath>{`Q^{-1} = Q^T`}</InlineMath></p>
      </Callout>
    </LessonLayout>
  );
}
