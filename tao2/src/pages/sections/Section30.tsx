import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Linear Transformations</h2>

      <p className="mb-4">
        We now begin our study of differentiation in several variable calculus, dealing with
        maps <InlineMath>{`f : \\mathbf{R}^n \\to \\mathbf{R}^m`}</InlineMath> from one Euclidean
        space to another. First, we review some essential linear algebra.
      </p>

      <Definition title="Row and Column Vectors">
        <p>
          Let <InlineMath>{`n \\geq 1`}</InlineMath> be an integer. We refer to elements of{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath> as <strong>n-dimensional row vectors</strong>.
          A typical row vector takes the form{' '}
          <InlineMath>{`x = (x_1, x_2, \\ldots, x_n)`}</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>transpose</strong> of a row vector is the corresponding column vector:
        </p>
        <MathBlock>{`(x_1, x_2, \\ldots, x_n)^T = \\begin{pmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end{pmatrix}`}</MathBlock>
      </Definition>

      <Definition title="Vector Space Operations">
        <p>
          If <InlineMath>{`(x_i)_{1 \\leq i \\leq n}`}</InlineMath> and{' '}
          <InlineMath>{`(y_i)_{1 \\leq i \\leq n}`}</InlineMath> are n-dimensional row vectors:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Vector sum:</strong>{' '}
            <InlineMath>{`(x_i) + (y_i) = (x_i + y_i)`}</InlineMath>
          </li>
          <li>
            <strong>Scalar product:</strong>{' '}
            <InlineMath>{`c(x_i) = (cx_i)`}</InlineMath> for any <InlineMath>{`c \\in \\mathbf{R}`}</InlineMath>
          </li>
          <li>
            <strong>Zero vector:</strong> <InlineMath>{`0 = (0, \\ldots, 0)`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Definition title="Standard Basis Vectors">
        <p>
          For each <InlineMath>{`1 \\leq j \\leq n`}</InlineMath>, the standard basis vector{' '}
          <InlineMath>{`e_j`}</InlineMath> is the vector with 0 in all entries except the{' '}
          <InlineMath>{`j^{th}`}</InlineMath> entry, which equals 1.
        </p>
        <p className="mt-2">
          Every vector <InlineMath>{`x = (x_1, \\ldots, x_n)`}</InlineMath> can be written as:
        </p>
        <MathBlock>{`x = x_1 e_1 + x_2 e_2 + \\cdots + x_n e_n = \\sum_{j=1}^{n} x_j e_j`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Linear Transformations</h3>

      <Definition title="Linear Transformation">
        <p>
          A <strong>linear transformation</strong>{' '}
          <InlineMath>{`T : \\mathbf{R}^n \\to \\mathbf{R}^m`}</InlineMath> is any function that
          obeys:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Additivity:</strong> <InlineMath>{`T(x + x') = Tx + Tx'`}</InlineMath> for all{' '}
            <InlineMath>{`x, x' \\in \\mathbf{R}^n`}</InlineMath>
          </li>
          <li>
            <strong>Homogeneity:</strong> <InlineMath>{`T(cx) = cTx`}</InlineMath> for all{' '}
            <InlineMath>{`x \\in \\mathbf{R}^n`}</InlineMath> and{' '}
            <InlineMath>{`c \\in \\mathbf{R}`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Example title="Examples of Linear Transformations">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Dilation:</strong>{' '}
            <InlineMath>{`T_1 : \\mathbf{R}^3 \\to \\mathbf{R}^3`}</InlineMath> defined by{' '}
            <InlineMath>{`T_1 x := 5x`}</InlineMath>
          </li>
          <li>
            <strong>Rotation:</strong>{' '}
            <InlineMath>{`T_2 : \\mathbf{R}^2 \\to \\mathbf{R}^2`}</InlineMath> defined by
            clockwise rotation by <InlineMath>{`\\pi/2`}</InlineMath> around the origin
          </li>
          <li>
            <strong>Projection:</strong>{' '}
            <InlineMath>{`T_3 : \\mathbf{R}^3 \\to \\mathbf{R}^2`}</InlineMath> defined by{' '}
            <InlineMath>{`T_3(x, y, z) := (x, y)`}</InlineMath>
          </li>
          <li>
            <strong>Identity:</strong>{' '}
            <InlineMath>{`I_n : \\mathbf{R}^n \\to \\mathbf{R}^n`}</InlineMath> defined by{' '}
            <InlineMath>{`I_n x := x`}</InlineMath>
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Matrices</h3>

      <Definition title="Matrix and Matrix Product">
        <p>
          An <InlineMath>{`m \\times n`}</InlineMath> <strong>matrix</strong> is an array{' '}
          <InlineMath>{`A = (a_{ij})_{1 \\leq i \\leq m; 1 \\leq j \\leq n}`}</InlineMath>.
        </p>
        <p className="mt-2">
          Given an <InlineMath>{`m \\times n`}</InlineMath> matrix <InlineMath>A</InlineMath> and
          an <InlineMath>{`n \\times p`}</InlineMath> matrix <InlineMath>B</InlineMath>, the{' '}
          <strong>matrix product</strong> <InlineMath>AB</InlineMath> is the{' '}
          <InlineMath>{`m \\times p`}</InlineMath> matrix:
        </p>
        <MathBlock>{`(AB)_{ik} = \\sum_{j=1}^{n} a_{ij} b_{jk}`}</MathBlock>
      </Definition>

      <Definition title="Matrix-Vector Multiplication">
        <p>
          If <InlineMath>{`A = (a_{ij})`}</InlineMath> is an{' '}
          <InlineMath>{`m \\times n`}</InlineMath> matrix and{' '}
          <InlineMath>{`x = (x_j)_{1 \\leq j \\leq n}`}</InlineMath> is an n-dimensional row
          vector, we define the linear transformation{' '}
          <InlineMath>{`L_A : \\mathbf{R}^n \\to \\mathbf{R}^m`}</InlineMath> by:
        </p>
        <MathBlock>{`L_A(x_j)_{1 \\leq j \\leq n} = \\left( \\sum_{j=1}^{n} a_{ij} x_j \\right)_{1 \\leq i \\leq m}`}</MathBlock>
      </Definition>

      <Callout type="success" title="Matrix-Transformation Correspondence">
        <p>
          Every linear transformation <InlineMath>{`T : \\mathbf{R}^n \\to \\mathbf{R}^m`}</InlineMath>{' '}
          can be represented by exactly one <InlineMath>{`m \\times n`}</InlineMath> matrix{' '}
          <InlineMath>A</InlineMath> such that <InlineMath>{`T = L_A`}</InlineMath>. The entries
          of <InlineMath>A</InlineMath> are given by{' '}
          <InlineMath>{`a_{ij} = (Te_j)_i`}</InlineMath>, i.e., the columns of{' '}
          <InlineMath>A</InlineMath> are the images of the standard basis vectors.
        </p>
      </Callout>

      <Definition title="Composition and Matrix Multiplication">
        <p>
          If <InlineMath>A</InlineMath> is an <InlineMath>{`m \\times n`}</InlineMath> matrix and{' '}
          <InlineMath>B</InlineMath> is an <InlineMath>{`n \\times p`}</InlineMath> matrix, then:
        </p>
        <MathBlock>{`L_A L_B = L_{AB}`}</MathBlock>
        <p className="mt-2">
          That is, composition of linear transformations corresponds to matrix multiplication.
        </p>
      </Definition>
    </LessonLayout>
  );
}
