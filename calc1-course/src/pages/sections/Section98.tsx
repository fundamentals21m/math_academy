import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section98() {
  return (
    <LessonLayout sectionId={98}>
      <h1>Matrix Algebra</h1>

      <p>
        Matrices form an algebraic system with operations of addition, scalar multiplication, and
        matrix multiplication. These operations correspond to operations on linear transformations,
        making matrix algebra a powerful computational tool.
      </p>

      <h2>Matrix Addition</h2>

      <Callout type="definition" title="Matrix Addition">
        <p>
          For <InlineMath>{`m \\times n`}</InlineMath> matrices <InlineMath>{`A`}</InlineMath> and <InlineMath>{`B`}</InlineMath>,
          their <strong>sum</strong> <InlineMath>{`A + B`}</InlineMath> is the <InlineMath>{`m \\times n`}</InlineMath> matrix with:
        </p>
        <MathBlock>{`(A + B)_{ij} = A_{ij} + B_{ij}`}</MathBlock>
        <p>Addition is performed entry by entry.</p>
      </Callout>

      <Callout type="example" title="Matrix Addition">
        <MathBlock>{`\\begin{pmatrix} 1 & 2 \\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} 6 & 8 \\ 10 & 12 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Addition">
        <p>For <InlineMath>{`m \\times n`}</InlineMath> matrices <InlineMath>{`A, B, C`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Commutative:</strong> <InlineMath>{`A + B = B + A`}</InlineMath></li>
          <li><strong>Associative:</strong> <InlineMath>{`(A + B) + C = A + (B + C)`}</InlineMath></li>
          <li><strong>Zero element:</strong> <InlineMath>{`A + O = A`}</InlineMath> where <InlineMath>{`O`}</InlineMath> is the zero matrix</li>
          <li><strong>Additive inverse:</strong> <InlineMath>{`A + (-A) = O`}</InlineMath></li>
        </ol>
      </Callout>

      <h2>Scalar Multiplication</h2>

      <Callout type="definition" title="Scalar Multiplication">
        <p>
          For a scalar <InlineMath>{`c`}</InlineMath> and matrix <InlineMath>{`A`}</InlineMath>, the <strong>scalar multiple</strong> <InlineMath>{`cA`}</InlineMath> has:
        </p>
        <MathBlock>{`(cA)_{ij} = c \\cdot A_{ij}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Scalar Multiplication">
        <MathBlock>{`3 \\begin{pmatrix} 1 & 2 \\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\ 9 & 12 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Scalar Multiplication">
        <p>For scalars <InlineMath>{`c, d`}</InlineMath> and matrices <InlineMath>{`A, B`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`c(A + B) = cA + cB`}</InlineMath></li>
          <li><InlineMath>{`(c + d)A = cA + dA`}</InlineMath></li>
          <li><InlineMath>{`c(dA) = (cd)A`}</InlineMath></li>
          <li><InlineMath>{`1 \\cdot A = A`}</InlineMath></li>
        </ol>
      </Callout>

      <h2>Matrix Multiplication</h2>

      <Callout type="definition" title="Matrix Multiplication">
        <p>
          For an <InlineMath>{`m \\times n`}</InlineMath> matrix <InlineMath>{`A`}</InlineMath> and an <InlineMath>{`n \\times p`}</InlineMath> matrix <InlineMath>{`B`}</InlineMath>,
          the <strong>product</strong> <InlineMath>{`AB`}</InlineMath> is an <InlineMath>{`m \\times p`}</InlineMath> matrix with:
        </p>
        <MathBlock>{`(AB)_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj} = A_{i1}B_{1j} + A_{i2}B_{2j} + \\cdots + A_{in}B_{nj}`}</MathBlock>
        <p>
          The <InlineMath>{`(i, j)`}</InlineMath> entry is the dot product of row <InlineMath>{`i`}</InlineMath> of <InlineMath>{`A`}</InlineMath> with
          column <InlineMath>{`j`}</InlineMath> of <InlineMath>{`B`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Size Requirement">
        <p>
          <InlineMath>{`AB`}</InlineMath> is defined only when <strong>columns of <InlineMath>{`A`}</InlineMath></strong> = <strong>rows of <InlineMath>{`B`}</InlineMath></strong>.
        </p>
        <MathBlock>{`(m \\times n)(n \\times p) = (m \\times p)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Matrix Multiplication">
        <MathBlock>{`\\begin{pmatrix} 1 & 2 \\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 6 \\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} 1 \\cdot 5 + 2 \\cdot 7 & 1 \\cdot 6 + 2 \\cdot 8 \\ 3 \\cdot 5 + 4 \\cdot 7 & 3 \\cdot 6 + 4 \\cdot 8 \\end{pmatrix} = \\begin{pmatrix} 19 & 22 \\ 43 & 50 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Non-Square Matrices">
        <MathBlock>{`\\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\end{pmatrix} \\begin{pmatrix} 1 \\ 2 \\ 3 \\end{pmatrix} = \\begin{pmatrix} 1 + 4 + 9 \\ 4 + 10 + 18 \\end{pmatrix} = \\begin{pmatrix} 14 \\ 32 \\end{pmatrix}`}</MathBlock>
        <p className="text-sm mt-2">(2×3) × (3×1) = (2×1)</p>
      </Callout>

      <h2>Properties of Matrix Multiplication</h2>

      <Callout type="theorem" title="Algebraic Properties">
        <p>For matrices of compatible sizes:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Associative:</strong> <InlineMath>{`(AB)C = A(BC)`}</InlineMath></li>
          <li><strong>Left distributive:</strong> <InlineMath>{`A(B + C) = AB + AC`}</InlineMath></li>
          <li><strong>Right distributive:</strong> <InlineMath>{`(A + B)C = AC + BC`}</InlineMath></li>
          <li><strong>Scalar:</strong> <InlineMath>{`c(AB) = (cA)B = A(cB)`}</InlineMath></li>
          <li><strong>Identity:</strong> <InlineMath>{`I_m A = A = A I_n`}</InlineMath> for <InlineMath>{`m \\times n`}</InlineMath> matrix <InlineMath>{`A`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="info" title="NOT Commutative!">
        <p>
          Matrix multiplication is <strong>not commutative</strong> in general:
        </p>
        <MathBlock>{`AB \\neq BA`}</MathBlock>
        <p>Even when both products are defined, they may differ (or have different sizes).</p>
      </Callout>

      <Callout type="example" title="Non-Commutativity">
        <MathBlock>{`AB = \\begin{pmatrix} 1 & 0 \\ 0 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\ 0 & 0 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`BA = \\begin{pmatrix} 0 & 1 \\ 0 & 0 \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\ 0 & 0 \\end{pmatrix}`}</MathBlock>
        <p><InlineMath>{`AB \\neq BA`}</InlineMath></p>
      </Callout>

      <h2>Special Matrices</h2>

      <Callout type="definition" title="Identity Matrix">
        <p>
          The <InlineMath>{`n \\times n`}</InlineMath> <strong>identity matrix</strong> <InlineMath>{`I_n`}</InlineMath> has:
        </p>
        <MathBlock>{`(I_n)_{ij} = \\delta_{ij} = \\begin{cases} 1 & i = j \\ 0 & i \\neq j \\end{cases}`}</MathBlock>
        <MathBlock>{`I_3 = \\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Zero Matrix">
        <p>
          The <InlineMath>{`m \\times n`}</InlineMath> <strong>zero matrix</strong> <InlineMath>{`O`}</InlineMath> has all entries equal to 0.
        </p>
        <MathBlock>{`AO = O, \\quad OB = O`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Diagonal Matrix">
        <p>
          A <strong>diagonal matrix</strong> has nonzero entries only on the main diagonal:
        </p>
        <MathBlock>{`D = \\text{diag}(d_1, d_2, \\ldots, d_n) = \\begin{pmatrix} d_1 & 0 & \\cdots & 0 \\ 0 & d_2 & \\cdots & 0 \\ \\vdots & & \\ddots & \\vdots \\ 0 & 0 & \\cdots & d_n \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Diagonal Matrix Properties">
        <ul className="list-disc pl-6 space-y-2">
          <li>Diagonal matrices commute: <InlineMath>{`D_1 D_2 = D_2 D_1`}</InlineMath></li>
          <li><InlineMath>{`\\text{diag}(d_1, \\ldots, d_n) \\cdot \\text{diag}(e_1, \\ldots, e_n) = \\text{diag}(d_1 e_1, \\ldots, d_n e_n)`}</InlineMath></li>
          <li><InlineMath>{`D^k = \\text{diag}(d_1^k, \\ldots, d_n^k)`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Transpose</h2>

      <Callout type="definition" title="Transpose">
        <p>
          The <strong>transpose</strong> of an <InlineMath>{`m \\times n`}</InlineMath> matrix <InlineMath>{`A`}</InlineMath> is the
          <InlineMath>{`n \\times m`}</InlineMath> matrix <InlineMath>{`A^T`}</InlineMath> with:
        </p>
        <MathBlock>{`(A^T)_{ij} = A_{ji}`}</MathBlock>
        <p>Rows become columns and columns become rows.</p>
      </Callout>

      <Callout type="example" title="Transpose">
        <MathBlock>{`\\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\end{pmatrix}^T = \\begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Transpose">
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`(A^T)^T = A`}</InlineMath></li>
          <li><InlineMath>{`(A + B)^T = A^T + B^T`}</InlineMath></li>
          <li><InlineMath>{`(cA)^T = cA^T`}</InlineMath></li>
          <li><InlineMath>{`(AB)^T = B^T A^T`}</InlineMath> (order reverses!)</li>
        </ol>
      </Callout>

      <Callout type="definition" title="Symmetric Matrix">
        <p>
          A matrix <InlineMath>{`A`}</InlineMath> is <strong>symmetric</strong> if <InlineMath>{`A^T = A`}</InlineMath>.
        </p>
        <p>
          It is <strong>skew-symmetric</strong> if <InlineMath>{`A^T = -A`}</InlineMath>.
        </p>
      </Callout>

      <h2>Matrix Powers</h2>

      <Callout type="definition" title="Matrix Powers">
        <p>For a square matrix <InlineMath>{`A`}</InlineMath>:</p>
        <MathBlock>{`A^0 = I, \\quad A^1 = A, \\quad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ times}}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Power Laws">
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`A^m A^n = A^{m+n}`}</InlineMath></li>
          <li><InlineMath>{`(A^m)^n = A^{mn}`}</InlineMath></li>
          <li><InlineMath>{`(A^k)^T = (A^T)^k`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          <strong>Warning:</strong> <InlineMath>{`(AB)^k \\neq A^k B^k`}</InlineMath> in general (unless <InlineMath>{`A`}</InlineMath> and <InlineMath>{`B`}</InlineMath> commute).
        </p>
      </Callout>

      <h2>Block Matrices</h2>

      <Callout type="definition" title="Block Matrix">
        <p>
          A <strong>block matrix</strong> is partitioned into smaller matrices (blocks):
        </p>
        <MathBlock>{`M = \\begin{pmatrix} A & B \\ C & D \\end{pmatrix}`}</MathBlock>
        <p>where <InlineMath>{`A, B, C, D`}</InlineMath> are matrices of compatible sizes.</p>
      </Callout>

      <Callout type="theorem" title="Block Multiplication">
        <p>
          Block matrices multiply like regular matrices, treating blocks as entries
          (when block sizes are compatible):
        </p>
        <MathBlock>{`\\begin{pmatrix} A & B \\ C & D \\end{pmatrix} \\begin{pmatrix} E & F \\ G & H \\end{pmatrix} = \\begin{pmatrix} AE + BG & AF + BH \\ CE + DG & CF + DH \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Trace</h2>

      <Callout type="definition" title="Trace">
        <p>
          The <strong>trace</strong> of a square matrix <InlineMath>{`A`}</InlineMath> is the sum of diagonal entries:
        </p>
        <MathBlock>{`\\text{tr}(A) = \\sum_{i=1}^{n} A_{ii} = A_{11} + A_{22} + \\cdots + A_{nn}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Trace">
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B)`}</InlineMath></li>
          <li><InlineMath>{`\\text{tr}(cA) = c \\cdot \\text{tr}(A)`}</InlineMath></li>
          <li><InlineMath>{`\\text{tr}(A^T) = \\text{tr}(A)`}</InlineMath></li>
          <li><InlineMath>{`\\text{tr}(AB) = \\text{tr}(BA)`}</InlineMath> (cyclic property)</li>
          <li><InlineMath>{`\\text{tr}(ABC) = \\text{tr}(BCA) = \\text{tr}(CAB)`}</InlineMath></li>
        </ol>
      </Callout>

      <h2>Connection to Linear Transformations</h2>

      <Callout type="theorem" title="Operations Correspond">
        <p>Matrix operations correspond to transformation operations:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`[S + T] = [S] + [T]`}</InlineMath></li>
          <li><InlineMath>{`[cT] = c[T]`}</InlineMath></li>
          <li><InlineMath>{`[S \\circ T] = [S][T]`}</InlineMath> (composition ↔ multiplication)</li>
          <li><InlineMath>{`[T^{-1}] = [T]^{-1}`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Operations">
        <p><strong>Addition:</strong> <InlineMath>{`(A + B)_{ij} = A_{ij} + B_{ij}`}</InlineMath> (same size matrices)</p>

        <p className="mt-3"><strong>Scalar multiplication:</strong> <InlineMath>{`(cA)_{ij} = c \\cdot A_{ij}`}</InlineMath></p>

        <p className="mt-3"><strong>Matrix multiplication:</strong></p>
        <MathBlock>{`(AB)_{ij} = \\sum_k A_{ik} B_{kj}`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li>Requires matching inner dimensions</li>
          <li>NOT commutative: <InlineMath>{`AB \\neq BA`}</InlineMath></li>
          <li>Associative: <InlineMath>{`(AB)C = A(BC)`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Transpose:</strong> <InlineMath>{`(A^T)_{ij} = A_{ji}`}</InlineMath></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`(AB)^T = B^T A^T`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Trace:</strong> <InlineMath>{`\\text{tr}(A) = \\sum A_{ii}`}</InlineMath></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\text{tr}(AB) = \\text{tr}(BA)`}</InlineMath></li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
