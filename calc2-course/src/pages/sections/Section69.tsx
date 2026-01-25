import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <h2>Computing the Matrix Exponential</h2>

      <p>
        Although Theorem 7.7 gives an explicit formula for solving homogeneous
        systems, there remains the practical problem of computing{' '}
        <InlineMath>{`e^{tA}`}</InlineMath>. Computing directly from the series
        definition requires calculating all powers{' '}
        <InlineMath>A^k</InlineMath> and summing infinite series—generally a
        hopeless task. We present more practical methods.
      </p>

      <h3>Diagonal Matrices</h3>

      <p>
        The simplest case is when <InlineMath>A</InlineMath> is diagonal:
      </p>
      <MathBlock>
        {`A = \\text{diag}(\\lambda_1, \\ldots, \\lambda_n)`}
      </MathBlock>

      <p>
        Then every power of <InlineMath>A</InlineMath> is also diagonal:
      </p>
      <MathBlock>
        {`A^k = \\text{diag}(\\lambda_1^k, \\ldots, \\lambda_n^k)`}
      </MathBlock>

      <p>
        Therefore:
      </p>
      <MathBlock>
        {`e^{tA} = \\text{diag}\\left(e^{t\\lambda_1}, \\ldots, e^{t\\lambda_n}\\right)`}
      </MathBlock>

      <h3>Diagonalizable Matrices</h3>

      <Callout type="info">
        <strong>Method:</strong> If <InlineMath>A</InlineMath> can be diagonalized,
        i.e., there exists a nonsingular matrix <InlineMath>C</InlineMath> such
        that <InlineMath>{`C^{-1}AC = D`}</InlineMath> is diagonal, then:
        <MathBlock>
          {`e^{tA} = C e^{tD} C^{-1}`}
        </MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> Since <InlineMath>{`A = CDC^{-1}`}</InlineMath>,
        we have:
      </p>
      <MathBlock>
        {`A^2 = (CDC^{-1})(CDC^{-1}) = CD^2C^{-1}`}
      </MathBlock>

      <p>
        By induction, <InlineMath>{`A^k = CD^kC^{-1}`}</InlineMath>. Therefore:
      </p>
      <MathBlock>
        {`e^{tA} = \\sum_{k=0}^\\infty \\frac{t^k A^k}{k!} = \\sum_{k=0}^\\infty \\frac{t^k}{k!} CD^k C^{-1} = C \\left(\\sum_{k=0}^\\infty \\frac{t^k D^k}{k!}\\right) C^{-1} = Ce^{tD}C^{-1}`}
      </MathBlock>

      <h3>Example: 2x2 Matrix with Distinct Eigenvalues</h3>

      <p>
        Calculate <InlineMath>{`e^{tA}`}</InlineMath> for{' '}
        <InlineMath>{`A = \\begin{bmatrix} 5 & 4 \\\\ 1 & 2 \\end{bmatrix}`}</InlineMath>.
      </p>

      <p>
        The eigenvalues are <InlineMath>\lambda_1 = 6</InlineMath> and{' '}
        <InlineMath>\lambda_2 = 1</InlineMath>. To find <InlineMath>C</InlineMath>,
        we solve <InlineMath>AC = CD</InlineMath> where{' '}
        <InlineMath>{`D = \\begin{bmatrix} 6 & 0 \\\\ 0 & 1 \\end{bmatrix}`}</InlineMath>.
      </p>

      <p>
        This gives <InlineMath>a = 4c</InlineMath> and{' '}
        <InlineMath>b = -d</InlineMath>. Taking <InlineMath>c = d = 1</InlineMath>:
      </p>
      <MathBlock>
        {`C = \\begin{bmatrix} 4 & -1 \\\\ 1 & 1 \\end{bmatrix}, \\quad
        C^{-1} = \\frac{1}{5} \\begin{bmatrix} 1 & 1 \\\\ -1 & 4 \\end{bmatrix}`}
      </MathBlock>

      <p>
        Therefore:
      </p>
      <MathBlock>
        {`e^{tA} = Ce^{tD}C^{-1} = \\frac{1}{5} \\begin{bmatrix} 4 & -1 \\\\ 1 & 1 \\end{bmatrix} \\begin{bmatrix} e^{6t} & 0 \\\\ 0 & e^t \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ -1 & 4 \\end{bmatrix}`}
      </MathBlock>

      <MathBlock>
        {`= \\frac{1}{5} \\begin{bmatrix} 4e^{6t} + e^t & 4e^{6t} - 4e^t \\\\ e^{6t} - e^t & e^{6t} + 4e^t \\end{bmatrix}`}
      </MathBlock>

      <h3>Limitations of Diagonalization</h3>

      <Callout type="warning">
        <strong>Important:</strong> Not every matrix can be diagonalized. A matrix
        is diagonalizable if and only if it has <InlineMath>n</InlineMath>{' '}
        linearly independent eigenvectors. Matrices with repeated eigenvalues may
        fail this condition.
      </Callout>

      <p>
        For matrices that cannot be diagonalized, we need more sophisticated
        methods. In the following sections, we present Putzer's method, which
        works for <em>all</em> matrices regardless of diagonalizability.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The diagonalization method reduces computing{' '}
        <InlineMath>{`e^{tA}`}</InlineMath> to computing exponentials of eigenvalues.
        The columns of <InlineMath>C</InlineMath> are eigenvectors of{' '}
        <InlineMath>A</InlineMath>. This method is elegant when applicable but
        fails for defective matrices (those with insufficient eigenvectors).
      </Callout>
    </LessonLayout>
  );
}
