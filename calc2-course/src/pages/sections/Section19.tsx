import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2>Inverses of Square Matrices</h2>

      <p>
        A square matrix <InlineMath>A</InlineMath> may have an inverse{' '}
        <InlineMath>{'A^{-1}'}</InlineMath> such that{' '}
        <InlineMath>{'AA^{-1} = A^{-1}A = I'}</InlineMath>. We develop methods for
        determining when inverses exist and computing them.
      </p>

      <h3>Definition and Basic Properties</h3>

      <Callout type="info">
        <strong>Definition:</strong> An <InlineMath>n \times n</InlineMath> matrix{' '}
        <InlineMath>A</InlineMath> is <strong>invertible</strong> (or{' '}
        <strong>nonsingular</strong>) if there exists an <InlineMath>n \times n</InlineMath>{' '}
        matrix <InlineMath>{'A^{-1}'}</InlineMath> such that:
        <MathBlock>{`AA^{-1} = A^{-1}A = I_n`}</MathBlock>
        A matrix that is not invertible is called <strong>singular</strong>.
      </Callout>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>A</InlineMath> is invertible, its inverse is
        unique.
      </Callout>

      <h3>Characterization of Invertibility</h3>

      <Callout type="info">
        <strong>Theorem:</strong> For an <InlineMath>n \times n</InlineMath> matrix{' '}
        <InlineMath>A</InlineMath>, the following are equivalent:
        <br /><br />
        (a) <InlineMath>A</InlineMath> is invertible
        <br />
        (b) The columns of <InlineMath>A</InlineMath> are linearly independent
        <br />
        (c) The rows of <InlineMath>A</InlineMath> are linearly independent
        <br />
        (d) <InlineMath>{'\\text{rank}(A) = n'}</InlineMath>
        <br />
        (e) <InlineMath>AX = 0</InlineMath> has only the trivial solution
        <br />
        (f) <InlineMath>AX = B</InlineMath> has a unique solution for every{' '}
        <InlineMath>B</InlineMath>
        <br />
        (g) The reduced row echelon form of <InlineMath>A</InlineMath> is{' '}
        <InlineMath>I_n</InlineMath>
      </Callout>

      <h3>Computing the Inverse</h3>

      <p>
        To find <InlineMath>{'A^{-1}'}</InlineMath>, we use the augmented matrix{' '}
        <InlineMath>[A | I]</InlineMath> and reduce:
      </p>
      <MathBlock>{`[A | I] \\xrightarrow{\\text{row operations}} [I | A^{-1}]`}</MathBlock>

      <p>If <InlineMath>A</InlineMath> cannot be reduced to <InlineMath>I</InlineMath>, then <InlineMath>A</InlineMath> is singular.</p>

      <h3>Properties of Matrix Inverses</h3>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>{' '}
        are invertible <InlineMath>n \times n</InlineMath> matrices:
        <br /><br />
        (a) <InlineMath>{'(A^{-1})^{-1} = A'}</InlineMath>
        <br />
        (b) <InlineMath>{'(AB)^{-1} = B^{-1}A^{-1}'}</InlineMath>
        <br />
        (c) <InlineMath>{'(A^T)^{-1} = (A^{-1})^T'}</InlineMath>
        <br />
        (d) <InlineMath>{'(cA)^{-1} = c^{-1}A^{-1}'}</InlineMath> for scalar{' '}
        <InlineMath>c \neq 0</InlineMath>
      </Callout>

      <h3>Example: Computing an Inverse</h3>

      <p>Find the inverse of:</p>
      <MathBlock>{`A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}`}</MathBlock>

      <p>Form the augmented matrix and reduce:</p>
      <MathBlock>{`[A | I] = \\left[\\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\\\ 3 & 4 & 0 & 1 \\end{array}\\right] \\to \\left[\\begin{array}{cc|cc} 1 & 0 & -2 & 1 \\\\ 0 & 1 & 3/2 & -1/2 \\end{array}\\right]`}</MathBlock>

      <p>Therefore:</p>
      <MathBlock>{`A^{-1} = \\begin{bmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{bmatrix} = \\frac{1}{-2}\\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}`}</MathBlock>

      <h3>Using Inverses to Solve Systems</h3>

      <p>
        If <InlineMath>A</InlineMath> is invertible, the unique solution to{' '}
        <InlineMath>AX = B</InlineMath> is:
      </p>
      <MathBlock>{`X = A^{-1}B`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Matrix inversion is a powerful tool but should be used
        thoughtfully. While <InlineMath>{'X = A^{-1}B'}</InlineMath> is theoretically elegant,
        computing <InlineMath>{'A^{-1}'}</InlineMath> explicitly and then multiplying is often
        less efficient and less numerically stable than solving the system directly by
        Gaussian elimination. The inverse is most useful when solving multiple systems with
        the same coefficient matrix, or in theoretical arguments.
      </Callout>
    </LessonLayout>
  );
}
