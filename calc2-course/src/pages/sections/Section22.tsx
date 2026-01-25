import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2>Computation of Determinants</h2>

      <p>
        We now develop practical methods for computing determinants using only the
        axioms and their consequences. The key technique is reduction to triangular
        form via row operations.
      </p>

      <h3>Determinant of a 2×2 Matrix</h3>

      <p>
        Writing the rows as linear combinations of unit vectors{' '}
        <InlineMath>{'i = (1, 0)'}</InlineMath> and <InlineMath>{'j = (0, 1)'}</InlineMath>:
      </p>
      <MathBlock>{`A_1 = a_{11}i + a_{12}j, \\quad A_2 = a_{21}i + a_{22}j`}</MathBlock>
      <p>
        By linearity in each row and using <InlineMath>{'d(i, i) = d(j, j) = 0'}</InlineMath>:
      </p>
      <MathBlock>{`d(A_1, A_2) = a_{11}a_{22} \\, d(i, j) - a_{12}a_{21} \\, d(i, j) = (a_{11}a_{22} - a_{12}a_{21}) \\cdot 1`}</MathBlock>

      <h3>Determinant of a Diagonal Matrix</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The determinant of a diagonal matrix equals the
        product of its diagonal elements:
        <MathBlock>{`\\det \\begin{bmatrix} a_{11} & 0 & \\cdots & 0 \\\\ 0 & a_{22} & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & a_{nn} \\end{bmatrix} = a_{11}a_{22} \\cdots a_{nn}`}</MathBlock>
      </Callout>

      <p>
        Since each row <InlineMath>{'A_k = a_{kk}I_k'}</InlineMath>, by repeated
        application of homogeneity:
      </p>
      <MathBlock>{`\\det A = a_{11} \\cdots a_{nn} \\cdot d(I_1, \\ldots, I_n) = a_{11} \\cdots a_{nn}`}</MathBlock>

      <h3>Determinant of an Upper Triangular Matrix</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The determinant of an upper triangular matrix equals
        the product of its diagonal elements:
        <MathBlock>{`\\det \\begin{bmatrix} u_{11} & u_{12} & \\cdots & u_{1n} \\\\ 0 & u_{22} & \\cdots & u_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & u_{nn} \\end{bmatrix} = u_{11}u_{22} \\cdots u_{nn}`}</MathBlock>
      </Callout>

      <p>
        If any diagonal element is zero, the rows are dependent (the rows from that
        point down span a space of dimension less than the number of rows), so the
        determinant is zero. Otherwise, we decompose each row into diagonal and
        off-diagonal parts and use linearity.
      </p>

      <h3>Computation via Gauss-Jordan Process</h3>

      <p>
        The three elementary row operations affect the determinant as follows:
      </p>

      <ol>
        <li><strong>Interchanging two rows:</strong> Multiplies determinant by <InlineMath>{'-1'}</InlineMath></li>
        <li><strong>Multiplying a row by scalar <InlineMath>{'c \\neq 0'}</InlineMath>:</strong> Multiplies determinant by <InlineMath>{'c'}</InlineMath></li>
        <li><strong>Adding a multiple of one row to another:</strong> Leaves determinant unchanged</li>
      </ol>

      <p>
        If we transform matrix <InlineMath>{'A'}</InlineMath> to upper triangular form{' '}
        <InlineMath>{'U'}</InlineMath> using <InlineMath>{'p'}</InlineMath> row interchanges
        and scaling by <InlineMath>{'c_1, \\ldots, c_q'}</InlineMath>, then:
      </p>
      <MathBlock>{`\\det A = (-1)^p (c_1 c_2 \\cdots c_q)^{-1} \\det U`}</MathBlock>

      <h3>Example</h3>

      <p>
        To compute <InlineMath>{'\\det A'}</InlineMath> where:
      </p>
      <MathBlock>{`A = \\begin{bmatrix} 2 & -5 & 4 \\\\ 1 & -2 & 1 \\\\ 1 & -4 & 6 \\end{bmatrix}`}</MathBlock>
      <p>
        Swap rows 1 and 2 (sign change), then eliminate to get upper triangular form
        with diagonal <InlineMath>{'(1, -1, 1)'}</InlineMath>. The determinant equals{' '}
        <InlineMath>{'(-1)^1 \\cdot 1 \\cdot (-1) \\cdot 1 = 1'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The Gauss-Jordan method for computing determinants
        has complexity <InlineMath>{'O(n^3)'}</InlineMath>, making it practical for large
        matrices. This is far better than the naive expansion formula which has{' '}
        <InlineMath>{'O(n!)'}</InlineMath> complexity.
      </Callout>
    </LessonLayout>
  );
}
