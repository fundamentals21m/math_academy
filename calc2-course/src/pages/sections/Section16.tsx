import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2>Matrix Multiplication</h2>

      <p>
        The composition of linear transformations corresponds to a product operation on
        matrices. This matrix multiplication is the key operation that makes matrices so
        useful in applications.
      </p>

      <h3>Definition of Matrix Product</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>{'A = (a_{ij})'}</InlineMath> be an{' '}
        <InlineMath>m \times n</InlineMath> matrix and{' '}
        <InlineMath>{'B = (b_{jk})'}</InlineMath> be an{' '}
        <InlineMath>n \times p</InlineMath> matrix. Their <strong>product</strong>{' '}
        <InlineMath>AB</InlineMath> is the <InlineMath>m \times p</InlineMath> matrix{' '}
        <InlineMath>{'C = (c_{ik})'}</InlineMath> where:
        <MathBlock>{`c_{ik} = \\sum_{j=1}^n a_{ij}b_{jk}`}</MathBlock>
      </Callout>

      <p>
        Note: The product <InlineMath>AB</InlineMath> is defined only when the number of
        columns in <InlineMath>A</InlineMath> equals the number of rows in{' '}
        <InlineMath>B</InlineMath>.
      </p>

      <h3>Connection to Composition</h3>

      <p>
        If <InlineMath>A</InlineMath> represents transformation <InlineMath>S</InlineMath>{' '}
        and <InlineMath>B</InlineMath> represents transformation <InlineMath>T</InlineMath>,
        then <InlineMath>AB</InlineMath> represents the composition{' '}
        <InlineMath>ST</InlineMath>.
      </p>

      <h3>Properties of Matrix Multiplication</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Matrix multiplication has the following properties:
        <br /><br />
        (a) <strong>Associativity:</strong> <InlineMath>(AB)C = A(BC)</InlineMath>
        <br />
        (b) <strong>Left distributivity:</strong> <InlineMath>A(B + C) = AB + AC</InlineMath>
        <br />
        (c) <strong>Right distributivity:</strong> <InlineMath>(A + B)C = AC + BC</InlineMath>
        <br />
        (d) <strong>Scalar compatibility:</strong> <InlineMath>c(AB) = (cA)B = A(cB)</InlineMath>
        <br />
        (e) <strong>Identity:</strong> <InlineMath>I_m A = A = AI_n</InlineMath> where{' '}
        <InlineMath>I</InlineMath> is the identity matrix
      </Callout>

      <p>
        <strong>Important:</strong> Matrix multiplication is generally{' '}
        <strong>not commutative</strong>. Even when both <InlineMath>AB</InlineMath> and{' '}
        <InlineMath>BA</InlineMath> are defined, they may not be equal.
      </p>

      <h3>The Identity Matrix</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <InlineMath>n \times n</InlineMath>{' '}
        <strong>identity matrix</strong> <InlineMath>I_n</InlineMath> has 1s on the main
        diagonal and 0s elsewhere:
        <MathBlock>{`I_n = \\begin{bmatrix} 1 & 0 & \\cdots & 0 \\\\ 0 & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 1 \\end{bmatrix}`}</MathBlock>
      </Callout>

      <h3>Matrix-Vector Product</h3>

      <p>
        The product of an <InlineMath>m \times n</InlineMath> matrix{' '}
        <InlineMath>A</InlineMath> and a column vector{' '}
        <InlineMath>{'X \\in \\mathbb{R}^n'}</InlineMath> gives a column vector{' '}
        <InlineMath>{'Y = AX \\in \\mathbb{R}^m'}</InlineMath>:
      </p>
      <MathBlock>{`y_i = \\sum_{k=1}^n a_{ik}x_k`}</MathBlock>

      <p>
        This is precisely the formula for computing{' '}
        <InlineMath>T(x)</InlineMath> from Section 14.
      </p>

      <h3>Transpose of a Product</h3>

      <Callout type="info">
        <strong>Theorem:</strong> <InlineMath>(AB)^T = B^T A^T</InlineMath>
      </Callout>

      <p>
        Note the reversal of order. This mirrors the formula{' '}
        <InlineMath>{'(ST)^{-1} = T^{-1}S^{-1}'}</InlineMath> for inverses.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Matrix multiplication encodes the composition of
        linear transformations. The formula{' '}
        <InlineMath>{'c_{ik} = \\sum_j a_{ij}b_{jk}'}</InlineMath> (row{' '}
        <InlineMath>i</InlineMath> of <InlineMath>A</InlineMath> dotted with column{' '}
        <InlineMath>k</InlineMath> of <InlineMath>B</InlineMath>) is one of the most
        important computational formulas in mathematics, with applications in every field
        that uses linear algebra.
      </Callout>
    </LessonLayout>
  );
}
