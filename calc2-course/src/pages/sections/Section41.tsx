import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <h2>Unitary Matrices</h2>

      <p>
        The matrices <InlineMath>{'C'}</InlineMath> that diagonalize Hermitian
        matrices have a special property:{' '}
        <InlineMath>{'C^{-1} = C^*'}</InlineMath>. Such matrices form an
        important class.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> A square matrix <InlineMath>{'A'}</InlineMath>{' '}
        is called <strong>unitary</strong> if:
        <MathBlock>{`AA^* = I`}</MathBlock>
        It is called <strong>orthogonal</strong> if:
        <MathBlock>{`AA^t = I`}</MathBlock>
      </Callout>

      <p>
        <strong>Note:</strong> Every real unitary matrix is orthogonal since{' '}
        <InlineMath>{'A^* = A^t'}</InlineMath> for real matrices.
      </p>

      <h3>Key Properties</h3>

      <ul>
        <li>
          <InlineMath>{'AA^* = I'}</InlineMath> implies{' '}
          <InlineMath>{'A^{-1} = A^*'}</InlineMath>
        </li>
        <li>
          Unitary matrices are always invertible
        </li>
        <li>
          If <InlineMath>{'A'}</InlineMath> is unitary, so is{' '}
          <InlineMath>{'A^*'}</InlineMath>
        </li>
        <li>
          If <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> are
          unitary, so is <InlineMath>{'AB'}</InlineMath>
        </li>
      </ul>

      <h3>Geometric Interpretation</h3>

      <p>
        Unitary matrices preserve the inner product:
      </p>
      <MathBlock>{`(Ax, Ay) = (x, A^*Ay) = (x, y)`}</MathBlock>

      <p>
        This means unitary transformations preserve:
      </p>
      <ul>
        <li>Lengths: <InlineMath>{'\\|Ax\\| = \\|x\\|'}</InlineMath></li>
        <li>Angles between vectors</li>
        <li>Orthogonality relationships</li>
      </ul>

      <h3>Column Characterization</h3>

      <p>
        Let <InlineMath>{'c_1, \\ldots, c_n'}</InlineMath> be the columns of{' '}
        <InlineMath>{'A'}</InlineMath>. Then <InlineMath>{'AA^* = I'}</InlineMath> if
        and only if:
      </p>
      <MathBlock>{`(c_i, c_j) = \\sum_{k=1}^n a_{ki}\\bar{a_{kj}} = \\delta_{ij}`}</MathBlock>

      <p>
        That is, <InlineMath>{'A'}</InlineMath> is unitary if and only if its
        columns form an <strong>orthonormal set</strong>.
      </p>

      <h3>Examples</h3>

      <p>
        <strong>Example 1:</strong> The <InlineMath>{'2 \\times 2'}</InlineMath>{' '}
        rotation matrix:
      </p>
      <MathBlock>{`A = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}`}</MathBlock>
      <p>
        is orthogonal. The columns{' '}
        <InlineMath>{'(\\cos\\theta, \\sin\\theta)'}</InlineMath> and{' '}
        <InlineMath>{'(-\\sin\\theta, \\cos\\theta)'}</InlineMath> form an orthonormal
        set.
      </p>

      <p>
        <strong>Example 2:</strong> The matrix:
      </p>
      <MathBlock>{`A = \\begin{bmatrix} e^{ia} & 0 \\\\ 0 & e^{ib} \\end{bmatrix}`}</MathBlock>
      <p>
        is unitary for any real <InlineMath>{'a, b'}</InlineMath> since{' '}
        <InlineMath>{'|e^{ia}| = |e^{ib}| = 1'}</InlineMath>.
      </p>

      <p>
        <strong>Example 3:</strong> The Fourier matrix (normalized DFT matrix):
      </p>
      <MathBlock>{`F_n = \\frac{1}{\\sqrt{n}}\\begin{bmatrix} 1 & 1 & 1 & \\cdots & 1 \\\\ 1 & \\omega & \\omega^2 & \\cdots & \\omega^{n-1} \\\\ 1 & \\omega^2 & \\omega^4 & \\cdots & \\omega^{2(n-1)} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 1 & \\omega^{n-1} & \\omega^{2(n-1)} & \\cdots & \\omega^{(n-1)^2} \\end{bmatrix}`}</MathBlock>
      <p>
        where <InlineMath>{'\\omega = e^{2\\pi i/n}'}</InlineMath>, is unitary.
      </p>

      <h3>Determinant</h3>

      <p>
        If <InlineMath>{'A'}</InlineMath> is unitary:
      </p>
      <MathBlock>{`1 = \\det(AA^*) = \\det(A)\\det(A^*) = \\det(A)\\overline{\\det(A)} = |\\det A|^2`}</MathBlock>
      <p>
        Therefore <InlineMath>{'|\\det A| = 1'}</InlineMath>, meaning{' '}
        <InlineMath>{'\\det A'}</InlineMath> lies on the unit circle in{' '}
        <InlineMath>{'\\mathbb{C}'}</InlineMath>.
      </p>

      <p>
        For orthogonal matrices: <InlineMath>{'\\det A = \\pm 1'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Unitary matrices are the "rigid motions"
        of complex Euclidean space—they preserve all metric structure. Theorem
        5.7 tells us that Hermitian matrices can always be diagonalized by
        unitary transformations, meaning we can find orthonormal eigenvectors.
        This makes Hermitian matrices particularly well-behaved for computation
        and theory.
      </Callout>
    </LessonLayout>
  );
}
