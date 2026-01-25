import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2>Cofactor Matrix and Cramer's Rule</h2>

      <p>
        The cofactor matrix provides an explicit formula for the inverse of a
        nonsingular matrix. This leads to Cramer's rule for solving systems of
        linear equations.
      </p>

      <h3>The Cofactor Matrix</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>cofactor matrix</strong> of an{' '}
        <InlineMath>{'n \\times n'}</InlineMath> matrix <InlineMath>{'A'}</InlineMath> is
        the matrix whose <InlineMath>{'(i, j)'}</InlineMath> entry is{' '}
        <InlineMath>{'\\text{cof} \\, a_{ij}'}</InlineMath>:
        <MathBlock>{`\\text{cof} \\, A = \\left( (-1)^{i+j} \\det A_{ij} \\right)_{i,j=1}^n`}</MathBlock>
      </Callout>

      <h3>Key Identity for the Cofactor Matrix</h3>

      <Callout type="info">
        <strong>Theorem:</strong> For any <InlineMath>{'n \\times n'}</InlineMath> matrix{' '}
        <InlineMath>{'A'}</InlineMath> with <InlineMath>{'n \\geq 2'}</InlineMath>:
        <MathBlock>{`A(\\text{cof} \\, A)^T = (\\det A) \\cdot I`}</MathBlock>
      </Callout>

      <p>
        The proof uses the cofactor expansion. For the <InlineMath>{'(k, i)'}</InlineMath>{' '}
        entry of <InlineMath>{'A(\\text{cof} \\, A)^T'}</InlineMath>:
      </p>
      <MathBlock>{`\\sum_{j=1}^n a_{kj} \\cdot \\text{cof} \\, a_{ij} = \\begin{cases} \\det A & \\text{if } i = k \\\\ 0 & \\text{if } i \\neq k \\end{cases}`}</MathBlock>
      <p>
        When <InlineMath>{'i = k'}</InlineMath>, this is the cofactor expansion of{' '}
        <InlineMath>{'\\det A'}</InlineMath>. When <InlineMath>{'i \\neq k'}</InlineMath>,
        this is the expansion of a matrix with two equal rows (row{' '}
        <InlineMath>{'k'}</InlineMath> of <InlineMath>{'A'}</InlineMath> replacing row{' '}
        <InlineMath>{'i'}</InlineMath>), which has determinant 0.
      </p>

      <h3>Formula for the Inverse</h3>

      <Callout type="info">
        <strong>Theorem:</strong> A square matrix <InlineMath>{'A'}</InlineMath> is
        nonsingular if and only if <InlineMath>{'\\det A \\neq 0'}</InlineMath>. When{' '}
        <InlineMath>{'\\det A \\neq 0'}</InlineMath>:
        <MathBlock>{`A^{-1} = \\frac{1}{\\det A} (\\text{cof} \\, A)^T`}</MathBlock>
      </Callout>

      <p>
        The matrix <InlineMath>{'(\\text{cof} \\, A)^T'}</InlineMath> is sometimes
        called the <strong>adjugate</strong> (or classical adjoint) of{' '}
        <InlineMath>{'A'}</InlineMath>.
      </p>

      <h3>Cramer's Rule</h3>

      <Callout type="info">
        <strong>Theorem (Cramer's Rule):</strong> If the system{' '}
        <InlineMath>{'AX = B'}</InlineMath> of <InlineMath>{'n'}</InlineMath> linear
        equations in <InlineMath>{'n'}</InlineMath> unknowns has a nonsingular
        coefficient matrix <InlineMath>{'A'}</InlineMath>, then there is a unique
        solution given by:
        <MathBlock>{`x_j = \\frac{\\det C_j}{\\det A}`}</MathBlock>
        where <InlineMath>{'C_j'}</InlineMath> is the matrix obtained by replacing the{' '}
        <InlineMath>{'j'}</InlineMath>th column of <InlineMath>{'A'}</InlineMath> with{' '}
        <InlineMath>{'B'}</InlineMath>.
      </Callout>

      <h3>Example: Solving a 2×2 System</h3>

      <p>
        For the system{' '}
        <InlineMath>{'ax + by = e'}</InlineMath>,{' '}
        <InlineMath>{'cx + dy = f'}</InlineMath>:
      </p>
      <MathBlock>{`x = \\frac{\\begin{vmatrix} e & b \\\\ f & d \\end{vmatrix}}{\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}} = \\frac{ed - bf}{ad - bc}, \\quad y = \\frac{\\begin{vmatrix} a & e \\\\ c & f \\end{vmatrix}}{\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}} = \\frac{af - ce}{ad - bc}`}</MathBlock>

      <h3>Practical Considerations</h3>

      <p>
        While Cramer's rule gives an elegant explicit formula, it is computationally
        expensive for large systems—computing <InlineMath>{'n + 1'}</InlineMath>{' '}
        determinants of order <InlineMath>{'n'}</InlineMath> is far slower than
        Gaussian elimination.
      </p>

      <p>Cramer's rule is most useful for:</p>
      <ul>
        <li>Small systems (2×2 or 3×3)</li>
        <li>Theoretical analysis and proofs</li>
        <li>Finding a single unknown without solving the entire system</li>
        <li>Symbolic computation where entries are expressions, not numbers</li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The formula{' '}
        <InlineMath>{'A^{-1} = \\frac{1}{\\det A}(\\text{cof} \\, A)^T'}</InlineMath>{' '}
        shows that matrix inversion is intimately connected to determinants. The
        entries of <InlineMath>{'A^{-1}'}</InlineMath> are rational functions of
        the entries of <InlineMath>{'A'}</InlineMath>, with <InlineMath>{'\\det A'}</InlineMath>{' '}
        in the denominator. This explains why singular matrices (with{' '}
        <InlineMath>{'\\det A = 0'}</InlineMath>) cannot be inverted.
      </Callout>
    </LessonLayout>
  );
}
