import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          For <MathInline>{`m \\times n`}</MathInline> matrices <MathInline>{`A`}</MathInline> and <MathInline>{`B`}</MathInline>,
          their <strong>sum</strong> <MathInline>{`A + B`}</MathInline> is the <MathInline>{`m \\times n`}</MathInline> matrix with:
        </p>
        <MathBlock>{`(A + B)_{ij} = A_{ij} + B_{ij}`}</MathBlock>
        <p>Addition is performed entry by entry.</p>
      </Callout>

      <Callout type="example" title="Matrix Addition">
        <MathBlock>{`\\begin{pmatrix} 1 & 2 \\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} 6 & 8 \\ 10 & 12 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Addition">
        <p>For <MathInline>{`m \\times n`}</MathInline> matrices <MathInline>{`A, B, C`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Commutative:</strong> <MathInline>{`A + B = B + A`}</MathInline></li>
          <li><strong>Associative:</strong> <MathInline>{`(A + B) + C = A + (B + C)`}</MathInline></li>
          <li><strong>Zero element:</strong> <MathInline>{`A + O = A`}</MathInline> where <MathInline>{`O`}</MathInline> is the zero matrix</li>
          <li><strong>Additive inverse:</strong> <MathInline>{`A + (-A) = O`}</MathInline></li>
        </ol>
      </Callout>

      <h2>Scalar Multiplication</h2>

      <Callout type="definition" title="Scalar Multiplication">
        <p>
          For a scalar <MathInline>{`c`}</MathInline> and matrix <MathInline>{`A`}</MathInline>, the <strong>scalar multiple</strong> <MathInline>{`cA`}</MathInline> has:
        </p>
        <MathBlock>{`(cA)_{ij} = c \\cdot A_{ij}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Scalar Multiplication">
        <MathBlock>{`3 \\begin{pmatrix} 1 & 2 \\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\ 9 & 12 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Scalar Multiplication">
        <p>For scalars <MathInline>{`c, d`}</MathInline> and matrices <MathInline>{`A, B`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`c(A + B) = cA + cB`}</MathInline></li>
          <li><MathInline>{`(c + d)A = cA + dA`}</MathInline></li>
          <li><MathInline>{`c(dA) = (cd)A`}</MathInline></li>
          <li><MathInline>{`1 \\cdot A = A`}</MathInline></li>
        </ol>
      </Callout>

      <h2>Matrix Multiplication</h2>

      <Callout type="definition" title="Matrix Multiplication">
        <p>
          For an <MathInline>{`m \\times n`}</MathInline> matrix <MathInline>{`A`}</MathInline> and an <MathInline>{`n \\times p`}</MathInline> matrix <MathInline>{`B`}</MathInline>,
          the <strong>product</strong> <MathInline>{`AB`}</MathInline> is an <MathInline>{`m \\times p`}</MathInline> matrix with:
        </p>
        <MathBlock>{`(AB)_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj} = A_{i1}B_{1j} + A_{i2}B_{2j} + \\cdots + A_{in}B_{nj}`}</MathBlock>
        <p>
          The <MathInline>{`(i, j)`}</MathInline> entry is the dot product of row <MathInline>{`i`}</MathInline> of <MathInline>{`A`}</MathInline> with
          column <MathInline>{`j`}</MathInline> of <MathInline>{`B`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Size Requirement">
        <p>
          <MathInline>{`AB`}</MathInline> is defined only when <strong>columns of <MathInline>{`A`}</MathInline></strong> = <strong>rows of <MathInline>{`B`}</MathInline></strong>.
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
          <li><strong>Associative:</strong> <MathInline>{`(AB)C = A(BC)`}</MathInline></li>
          <li><strong>Left distributive:</strong> <MathInline>{`A(B + C) = AB + AC`}</MathInline></li>
          <li><strong>Right distributive:</strong> <MathInline>{`(A + B)C = AC + BC`}</MathInline></li>
          <li><strong>Scalar:</strong> <MathInline>{`c(AB) = (cA)B = A(cB)`}</MathInline></li>
          <li><strong>Identity:</strong> <MathInline>{`I_m A = A = A I_n`}</MathInline> for <MathInline>{`m \\times n`}</MathInline> matrix <MathInline>{`A`}</MathInline></li>
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
        <p><MathInline>{`AB \\neq BA`}</MathInline></p>
      </Callout>

      <h2>Special Matrices</h2>

      <Callout type="definition" title="Identity Matrix">
        <p>
          The <MathInline>{`n \\times n`}</MathInline> <strong>identity matrix</strong> <MathInline>{`I_n`}</MathInline> has:
        </p>
        <MathBlock>{`(I_n)_{ij} = \\delta_{ij} = \\begin{cases} 1 & i = j \\ 0 & i \\neq j \\end{cases}`}</MathBlock>
        <MathBlock>{`I_3 = \\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Zero Matrix">
        <p>
          The <MathInline>{`m \\times n`}</MathInline> <strong>zero matrix</strong> <MathInline>{`O`}</MathInline> has all entries equal to 0.
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
          <li>Diagonal matrices commute: <MathInline>{`D_1 D_2 = D_2 D_1`}</MathInline></li>
          <li><MathInline>{`\\text{diag}(d_1, \\ldots, d_n) \\cdot \\text{diag}(e_1, \\ldots, e_n) = \\text{diag}(d_1 e_1, \\ldots, d_n e_n)`}</MathInline></li>
          <li><MathInline>{`D^k = \\text{diag}(d_1^k, \\ldots, d_n^k)`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Transpose</h2>

      <Callout type="definition" title="Transpose">
        <p>
          The <strong>transpose</strong> of an <MathInline>{`m \\times n`}</MathInline> matrix <MathInline>{`A`}</MathInline> is the
          <MathInline>{`n \\times m`}</MathInline> matrix <MathInline>{`A^T`}</MathInline> with:
        </p>
        <MathBlock>{`(A^T)_{ij} = A_{ji}`}</MathBlock>
        <p>Rows become columns and columns become rows.</p>
      </Callout>

      <Callout type="example" title="Transpose">
        <MathBlock>{`\\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\end{pmatrix}^T = \\begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Transpose">
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`(A^T)^T = A`}</MathInline></li>
          <li><MathInline>{`(A + B)^T = A^T + B^T`}</MathInline></li>
          <li><MathInline>{`(cA)^T = cA^T`}</MathInline></li>
          <li><MathInline>{`(AB)^T = B^T A^T`}</MathInline> (order reverses!)</li>
        </ol>
      </Callout>

      <Callout type="definition" title="Symmetric Matrix">
        <p>
          A matrix <MathInline>{`A`}</MathInline> is <strong>symmetric</strong> if <MathInline>{`A^T = A`}</MathInline>.
        </p>
        <p>
          It is <strong>skew-symmetric</strong> if <MathInline>{`A^T = -A`}</MathInline>.
        </p>
      </Callout>

      <h2>Matrix Powers</h2>

      <Callout type="definition" title="Matrix Powers">
        <p>For a square matrix <MathInline>{`A`}</MathInline>:</p>
        <MathBlock>{`A^0 = I, \\quad A^1 = A, \\quad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ times}}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Power Laws">
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`A^m A^n = A^{m+n}`}</MathInline></li>
          <li><MathInline>{`(A^m)^n = A^{mn}`}</MathInline></li>
          <li><MathInline>{`(A^k)^T = (A^T)^k`}</MathInline></li>
        </ul>
        <p className="mt-2">
          <strong>Warning:</strong> <MathInline>{`(AB)^k \\neq A^k B^k`}</MathInline> in general (unless <MathInline>{`A`}</MathInline> and <MathInline>{`B`}</MathInline> commute).
        </p>
      </Callout>

      <h2>Block Matrices</h2>

      <Callout type="definition" title="Block Matrix">
        <p>
          A <strong>block matrix</strong> is partitioned into smaller matrices (blocks):
        </p>
        <MathBlock>{`M = \\begin{pmatrix} A & B \\ C & D \\end{pmatrix}`}</MathBlock>
        <p>where <MathInline>{`A, B, C, D`}</MathInline> are matrices of compatible sizes.</p>
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
          The <strong>trace</strong> of a square matrix <MathInline>{`A`}</MathInline> is the sum of diagonal entries:
        </p>
        <MathBlock>{`\\text{tr}(A) = \\sum_{i=1}^{n} A_{ii} = A_{11} + A_{22} + \\cdots + A_{nn}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Trace">
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B)`}</MathInline></li>
          <li><MathInline>{`\\text{tr}(cA) = c \\cdot \\text{tr}(A)`}</MathInline></li>
          <li><MathInline>{`\\text{tr}(A^T) = \\text{tr}(A)`}</MathInline></li>
          <li><MathInline>{`\\text{tr}(AB) = \\text{tr}(BA)`}</MathInline> (cyclic property)</li>
          <li><MathInline>{`\\text{tr}(ABC) = \\text{tr}(BCA) = \\text{tr}(CAB)`}</MathInline></li>
        </ol>
      </Callout>

      <h2>Connection to Linear Transformations</h2>

      <Callout type="theorem" title="Operations Correspond">
        <p>Matrix operations correspond to transformation operations:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`[S + T] = [S] + [T]`}</MathInline></li>
          <li><MathInline>{`[cT] = c[T]`}</MathInline></li>
          <li><MathInline>{`[S \\circ T] = [S][T]`}</MathInline> (composition ↔ multiplication)</li>
          <li><MathInline>{`[T^{-1}] = [T]^{-1}`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Operations">
        <p><strong>Addition:</strong> <MathInline>{`(A + B)_{ij} = A_{ij} + B_{ij}`}</MathInline> (same size matrices)</p>

        <p className="mt-3"><strong>Scalar multiplication:</strong> <MathInline>{`(cA)_{ij} = c \\cdot A_{ij}`}</MathInline></p>

        <p className="mt-3"><strong>Matrix multiplication:</strong></p>
        <MathBlock>{`(AB)_{ij} = \\sum_k A_{ik} B_{kj}`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li>Requires matching inner dimensions</li>
          <li>NOT commutative: <MathInline>{`AB \\neq BA`}</MathInline></li>
          <li>Associative: <MathInline>{`(AB)C = A(BC)`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Transpose:</strong> <MathInline>{`(A^T)_{ij} = A_{ji}`}</MathInline></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`(AB)^T = B^T A^T`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Trace:</strong> <MathInline>{`\\text{tr}(A) = \\sum A_{ii}`}</MathInline></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\text{tr}(AB) = \\text{tr}(BA)`}</MathInline></li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
