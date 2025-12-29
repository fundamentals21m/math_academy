import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          An <MathInline>{`n \\times n`}</MathInline> matrix <MathInline>A</MathInline> is <strong>invertible</strong>
          (or <strong>nonsingular</strong>) if there exists a matrix <MathInline>{`A^{-1}`}</MathInline> such that:
        </p>
        <MathBlock>{`AA^{-1} = A^{-1}A = I_n`}</MathBlock>
        <p>
          The matrix <MathInline>{`A^{-1}`}</MathInline> is called the <strong>inverse</strong> of <MathInline>A</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Uniqueness of Inverse">
        <p>
          If <MathInline>A</MathInline> is invertible, its inverse is unique.
        </p>
        <p className="mt-2"><strong>Proof:</strong> If <MathInline>B</MathInline> and <MathInline>C</MathInline> are both inverses of <MathInline>A</MathInline>:</p>
        <MathBlock>{`B = BI = B(AC) = (BA)C = IC = C`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Inverses">
        <p>If <MathInline>A</MathInline> and <MathInline>B</MathInline> are invertible <MathInline>{`n \\times n`}</MathInline> matrices:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`(A^{-1})^{-1} = A`}</MathInline></li>
          <li><MathInline>{`(AB)^{-1} = B^{-1}A^{-1}`}</MathInline> (order reverses!)</li>
          <li><MathInline>{`(A^T)^{-1} = (A^{-1})^T`}</MathInline></li>
          <li><MathInline>{`(cA)^{-1} = \\frac{1}{c}A^{-1}`}</MathInline> for <MathInline>{`c \\neq 0`}</MathInline></li>
          <li><MathInline>{`(A^k)^{-1} = (A^{-1})^k`}</MathInline> for positive integer <MathInline>k</MathInline></li>
        </ol>
      </Callout>

      <h2>The 2×2 Case</h2>

      <Callout type="theorem" title="Inverse of 2×2 Matrix">
        <p>For <MathInline>{`A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}`}</MathInline>:</p>
        <MathBlock>{`A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}`}</MathBlock>
        <p>
          The inverse exists if and only if <MathInline>{`ad - bc \\neq 0`}</MathInline>.
        </p>
        <p className="mt-2">
          The quantity <MathInline>{`ad - bc`}</MathInline> is the <strong>determinant</strong> of <MathInline>A</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="2×2 Inverse">
        <MathBlock>{`A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}`}</MathBlock>
        <p><MathInline>{`\\det(A) = 3 \\cdot 2 - 1 \\cdot 5 = 1`}</MathInline></p>
        <MathBlock>{`A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}`}</MathBlock>
        <p><strong>Verify:</strong></p>
        <MathBlock>{`AA^{-1} = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\checkmark`}</MathBlock>
      </Callout>

      <h2>Computing Inverses via Row Reduction</h2>

      <Callout type="theorem" title="Gauss-Jordan Method">
        <p>To find <MathInline>{`A^{-1}`}</MathInline> for an <MathInline>{`n \\times n`}</MathInline> matrix:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Form the augmented matrix <MathInline>{`[A | I_n]`}</MathInline></li>
          <li>Row reduce to reduced row echelon form</li>
          <li>If the result is <MathInline>{`[I_n | B]`}</MathInline>, then <MathInline>{`A^{-1} = B`}</MathInline></li>
          <li>If the left side cannot become <MathInline>{`I_n`}</MathInline>, then <MathInline>A</MathInline> is not invertible</li>
        </ol>
      </Callout>

      <Callout type="example" title="Computing Inverse via Row Reduction">
        <p>Find the inverse of:</p>
        <MathBlock>{`A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 3 \\\\ 1 & 3 & 2 \\end{pmatrix}`}</MathBlock>
        <p><strong>Step 1:</strong> Form <MathInline>{`[A | I]`}</MathInline>:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|ccc} 1 & 2 & 1 & 1 & 0 & 0 \\\\ 2 & 5 & 3 & 0 & 1 & 0 \\\\ 1 & 3 & 2 & 0 & 0 & 1 \\end{array}\\right)`}</MathBlock>
        <p><strong>Step 2:</strong> <MathInline>{`R_2 \\to R_2 - 2R_1`}</MathInline>, <MathInline>{`R_3 \\to R_3 - R_1`}</MathInline>:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|ccc} 1 & 2 & 1 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & -2 & 1 & 0 \\\\ 0 & 1 & 1 & -1 & 0 & 1 \\end{array}\\right)`}</MathBlock>
        <p><strong>Step 3:</strong> <MathInline>{`R_3 \\to R_3 - R_2`}</MathInline>:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|ccc} 1 & 2 & 1 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & -2 & 1 & 0 \\\\ 0 & 0 & 0 & 1 & -1 & 1 \\end{array}\\right)`}</MathBlock>
        <p>The left side cannot become <MathInline>I</MathInline> (zero row appeared). Therefore, <MathInline>A</MathInline> is <strong>not invertible</strong>.</p>
      </Callout>

      <Callout type="example" title="Successful Inverse Computation">
        <p>Find the inverse of:</p>
        <MathBlock>{`A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & -1 & 3 \\\\ 4 & 1 & 8 \\end{pmatrix}`}</MathBlock>
        <p>After row reduction of <MathInline>{`[A | I]`}</MathInline>:</p>
        <MathBlock>{`\\left(\\begin{array}{ccc|ccc} 1 & 0 & 0 & -11 & 2 & 2 \\\\ 0 & 1 & 0 & -4 & 0 & 1 \\\\ 0 & 0 & 1 & 6 & -1 & -1 \\end{array}\\right)`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`A^{-1} = \\begin{pmatrix} -11 & 2 & 2 \\\\ -4 & 0 & 1 \\\\ 6 & -1 & -1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Characterizations of Invertibility</h2>

      <Callout type="theorem" title="The Invertible Matrix Theorem">
        <p>For an <MathInline>{`n \\times n`}</MathInline> matrix <MathInline>A</MathInline>, the following are equivalent:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><MathInline>A</MathInline> is invertible</li>
          <li><MathInline>{`A\\mathbf{x} = \\mathbf{0}`}</MathInline> has only the trivial solution</li>
          <li><MathInline>{`A\\mathbf{x} = \\mathbf{b}`}</MathInline> has a unique solution for every <MathInline>{`\\mathbf{b}`}</MathInline></li>
          <li>The RREF of <MathInline>A</MathInline> is <MathInline>{`I_n`}</MathInline></li>
          <li><MathInline>{`\\text{rank}(A) = n`}</MathInline></li>
          <li><MathInline>{`N(A) = \\{\\mathbf{0}\\}`}</MathInline></li>
          <li>The columns of <MathInline>A</MathInline> are linearly independent</li>
          <li>The columns of <MathInline>A</MathInline> span <MathInline>{`\\mathbb{R}^n`}</MathInline></li>
          <li>The rows of <MathInline>A</MathInline> are linearly independent</li>
          <li><MathInline>{`A^T`}</MathInline> is invertible</li>
          <li><MathInline>{`\\det(A) \\neq 0`}</MathInline></li>
          <li>The linear transformation <MathInline>{`\\mathbf{x} \\mapsto A\\mathbf{x}`}</MathInline> is bijective</li>
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
          Left-multiplying <MathInline>A</MathInline> by an elementary matrix <MathInline>E</MathInline> performs
          the corresponding row operation on <MathInline>A</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Invertibility of Elementary Matrices">
        <p>Every elementary matrix is invertible:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`(E_{ij})^{-1} = E_{ij}`}</MathInline> (swap is self-inverse)</li>
          <li><MathInline>{`(E_i(c))^{-1} = E_i(1/c)`}</MathInline></li>
          <li><MathInline>{`(E_{ij}(c))^{-1} = E_{ij}(-c)`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Factorization of Invertible Matrices">
        <p>
          A matrix <MathInline>A</MathInline> is invertible if and only if it is a product of elementary matrices:
        </p>
        <MathBlock>{`A = E_1 E_2 \\cdots E_k`}</MathBlock>
      </Callout>

      <h2>LU Decomposition</h2>

      <Callout type="definition" title="LU Factorization">
        <p>
          An <strong>LU factorization</strong> of <MathInline>A</MathInline> is:
        </p>
        <MathBlock>{`A = LU`}</MathBlock>
        <p>where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>L</MathInline> is lower triangular with 1s on the diagonal</li>
          <li><MathInline>U</MathInline> is upper triangular (row echelon form)</li>
        </ul>
      </Callout>

      <Callout type="theorem" title="When LU Exists">
        <p>
          <MathInline>A</MathInline> has an LU factorization (without row swaps) if and only if
          all leading principal submatrices are nonsingular.
        </p>
        <p className="mt-2">
          With row swaps: <MathInline>PA = LU</MathInline> where <MathInline>P</MathInline> is a permutation matrix.
        </p>
      </Callout>

      <Callout type="info" title="Advantage of LU Factorization">
        <p>
          To solve <MathInline>{`A\\mathbf{x} = \\mathbf{b}`}</MathInline>:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Solve <MathInline>{`L\\mathbf{y} = \\mathbf{b}`}</MathInline> (forward substitution)</li>
          <li>Solve <MathInline>{`U\\mathbf{x} = \\mathbf{y}`}</MathInline> (back substitution)</li>
        </ol>
        <p className="mt-2">
          Once <MathInline>A = LU</MathInline> is computed, solving with new <MathInline>{`\\mathbf{b}`}</MathInline> vectors is fast.
        </p>
      </Callout>

      <h2>Applications of Inverses</h2>

      <Callout type="theorem" title="Solving Systems">
        <p>If <MathInline>A</MathInline> is invertible, the unique solution to <MathInline>{`A\\mathbf{x} = \\mathbf{b}`}</MathInline> is:</p>
        <MathBlock>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Practical Note">
        <p>
          In practice, computing <MathInline>{`A^{-1}`}</MathInline> and then <MathInline>{`A^{-1}\\mathbf{b}`}</MathInline> is less efficient
          and less stable than directly solving <MathInline>{`A\\mathbf{x} = \\mathbf{b}`}</MathInline> via row reduction or LU.
        </p>
        <p className="mt-2">
          Use the inverse formula mainly for theoretical work or when solving many systems with the same <MathInline>A</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Inverse and Linear Transformations">
        <p>
          If <MathInline>T: V → V</MathInline> is represented by matrix <MathInline>A</MathInline>, then:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>T</MathInline> is invertible iff <MathInline>A</MathInline> is invertible</li>
          <li><MathInline>{`T^{-1}`}</MathInline> is represented by <MathInline>{`A^{-1}`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Special Inverse Formulas</h2>

      <Callout type="theorem" title="Inverse of Diagonal Matrix">
        <p>If <MathInline>{`D = \\text{diag}(d_1, \\ldots, d_n)`}</MathInline> with all <MathInline>{`d_i \\neq 0`}</MathInline>:</p>
        <MathBlock>{`D^{-1} = \\text{diag}(1/d_1, \\ldots, 1/d_n)`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Inverse of Block Diagonal Matrix">
        <MathBlock>{`\\begin{pmatrix} A & 0 \\\\ 0 & B \\end{pmatrix}^{-1} = \\begin{pmatrix} A^{-1} & 0 \\\\ 0 & B^{-1} \\end{pmatrix}`}</MathBlock>
        <p>provided both <MathInline>A</MathInline> and <MathInline>B</MathInline> are invertible.</p>
      </Callout>

      <Callout type="theorem" title="Sherman-Morrison Formula">
        <p>
          If <MathInline>A</MathInline> is invertible and <MathInline>{`\\mathbf{u}, \\mathbf{v}`}</MathInline> are column vectors
          with <MathInline>{`1 + \\mathbf{v}^T A^{-1} \\mathbf{u} \\neq 0`}</MathInline>:
        </p>
        <MathBlock>{`(A + \\mathbf{u}\\mathbf{v}^T)^{-1} = A^{-1} - \\frac{A^{-1}\\mathbf{u}\\mathbf{v}^T A^{-1}}{1 + \\mathbf{v}^T A^{-1}\\mathbf{u}}`}</MathBlock>
        <p className="text-sm mt-2">Useful for rank-one updates to a matrix.</p>
      </Callout>

      <h2>Orthogonal Matrices</h2>

      <Callout type="definition" title="Orthogonal Matrix">
        <p>
          A square matrix <MathInline>Q</MathInline> is <strong>orthogonal</strong> if:
        </p>
        <MathBlock>{`Q^T Q = Q Q^T = I`}</MathBlock>
        <p>Equivalently, <MathInline>{`Q^{-1} = Q^T`}</MathInline>.</p>
      </Callout>

      <Callout type="theorem" title="Properties of Orthogonal Matrices">
        <ul className="list-disc pl-6 space-y-2">
          <li>Columns form an orthonormal set</li>
          <li>Rows form an orthonormal set</li>
          <li><MathInline>{`\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|`}</MathInline> (preserves length)</li>
          <li><MathInline>{`|\\det(Q)| = 1`}</MathInline></li>
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
        <p><strong>Definition:</strong> <MathInline>{`AA^{-1} = A^{-1}A = I`}</MathInline></p>

        <p className="mt-3"><strong>2×2 formula:</strong></p>
        <MathBlock>{`\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}`}</MathBlock>

        <p className="mt-3"><strong>Computing via row reduction:</strong></p>
        <MathBlock>{`[A | I] \\xrightarrow{\\text{RREF}} [I | A^{-1}]`}</MathBlock>

        <p className="mt-3"><strong>Key properties:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`(AB)^{-1} = B^{-1}A^{-1}`}</MathInline></li>
          <li><MathInline>{`(A^T)^{-1} = (A^{-1})^T`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Invertibility equivalent to:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\det(A) \\neq 0`}</MathInline></li>
          <li><MathInline>{`\\text{rank}(A) = n`}</MathInline></li>
          <li>Columns/rows linearly independent</li>
          <li><MathInline>{`A\\mathbf{x} = \\mathbf{b}`}</MathInline> has unique solution for all <MathInline>{`\\mathbf{b}`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Orthogonal matrices:</strong> <MathInline>{`Q^{-1} = Q^T`}</MathInline></p>
      </Callout>
    </LessonLayout>
  );
}
