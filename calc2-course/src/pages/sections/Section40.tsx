import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2>Diagonalization of Hermitian Matrices</h2>

      <p>
        We now translate the Spectral Theorem (Theorem 5.4) into matrix
        language, obtaining a powerful result about diagonalizing Hermitian and
        skew-Hermitian matrices.
      </p>

      <h3>The Diagonalization Theorem</h3>

      <Callout type="info">
        <strong>Theorem 5.7:</strong> Every{' '}
        <InlineMath>{'n \\times n'}</InlineMath> Hermitian or skew-Hermitian matrix{' '}
        <InlineMath>{'A'}</InlineMath> is similar to the diagonal matrix of its
        eigenvalues:
        <MathBlock>{`\\Lambda = \\text{diag}(\\lambda_1, \\ldots, \\lambda_n)`}</MathBlock>
        Moreover, we have:
        <MathBlock>{`\\Lambda = C^{-1}AC`}</MathBlock>
        where <InlineMath>{'C'}</InlineMath> is a nonsingular matrix whose inverse
        is its adjoint: <InlineMath>{'C^{-1} = C^*'}</InlineMath>.
      </Callout>

      <h3>Proof Outline</h3>

      <p>
        Let <InlineMath>{'V'}</InlineMath> be the space of{' '}
        <InlineMath>{'n'}</InlineMath>-tuples with the standard inner product{' '}
        <InlineMath>{'(x, y) = \\sum x_i \\bar{y_i}'}</InlineMath>. The matrix{' '}
        <InlineMath>{'A'}</InlineMath> defines a transformation{' '}
        <InlineMath>{'T'}</InlineMath>.
      </p>

      <p>
        By Theorem 5.4, there exists an orthonormal basis of eigenvectors{' '}
        <InlineMath>{'(u_1, \\ldots, u_n)'}</InlineMath>. The matrix{' '}
        <InlineMath>{'C'}</InlineMath> is constructed with the{' '}
        <InlineMath>{'j'}</InlineMath>th column being the components of{' '}
        <InlineMath>{'u_j'}</InlineMath>.
      </p>

      <p>
        The orthonormality condition{' '}
        <InlineMath>{'(u_j, u_i) = \\delta_{ij}'}</InlineMath> translates to:
      </p>
      <MathBlock>{`\\sum_{k=1}^n c_{kj}\\bar{c_{ki}} = \\delta_{ij}`}</MathBlock>

      <p>
        This is exactly the condition <InlineMath>{'CC^* = I'}</InlineMath>, which
        means <InlineMath>{'C^{-1} = C^*'}</InlineMath>.
      </p>

      <h3>The Diagonalizing Matrix</h3>

      <p>
        To find the diagonalizing matrix <InlineMath>{'C'}</InlineMath>:
      </p>
      <ol>
        <li>
          Find an orthonormal set of eigenvectors{' '}
          <InlineMath>{'u_1, \\ldots, u_n'}</InlineMath>
        </li>
        <li>
          Use the components of <InlineMath>{'u_j'}</InlineMath> as the entries of
          the <InlineMath>{'j'}</InlineMath>th column of <InlineMath>{'C'}</InlineMath>
        </li>
      </ol>

      <h3>Example 1</h3>

      <p>
        Consider the real Hermitian (symmetric) matrix:
      </p>
      <MathBlock>{`A = \\begin{bmatrix} 2 & 2 \\\\ 2 & 5 \\end{bmatrix}`}</MathBlock>

      <p>
        The eigenvalues are <InlineMath>{'\\lambda_1 = 1'}</InlineMath> and{' '}
        <InlineMath>{'\\lambda_2 = 6'}</InlineMath>.
      </p>

      <ul>
        <li>
          Eigenvectors for <InlineMath>{'\\lambda = 1'}</InlineMath>:{' '}
          <InlineMath>{'t(2, -1)'}</InlineMath>, <InlineMath>{'t \\neq 0'}</InlineMath>
        </li>
        <li>
          Eigenvectors for <InlineMath>{'\\lambda = 6'}</InlineMath>:{' '}
          <InlineMath>{'t(1, 2)'}</InlineMath>, <InlineMath>{'t \\neq 0'}</InlineMath>
        </li>
      </ul>

      <p>
        Normalizing with <InlineMath>{'t = 1/\\sqrt{5}'}</InlineMath>, the
        orthonormal eigenvectors are:
      </p>
      <MathBlock>{`u_1 = \\frac{1}{\\sqrt{5}}\\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix}, \\quad u_2 = \\frac{1}{\\sqrt{5}}\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}`}</MathBlock>

      <p>
        The diagonalizing matrix is:
      </p>
      <MathBlock>{`C = \\frac{1}{\\sqrt{5}}\\begin{bmatrix} 2 & 1 \\\\ -1 & 2 \\end{bmatrix}`}</MathBlock>

      <p>
        Since <InlineMath>{'C'}</InlineMath> is real, <InlineMath>{'C^* = C^t'}</InlineMath>.
        One can verify:
      </p>
      <MathBlock>{`C^t A C = \\begin{bmatrix} 1 & 0 \\\\ 0 & 6 \\end{bmatrix}`}</MathBlock>

      <h3>Example 2</h3>

      <p>
        If <InlineMath>{'A'}</InlineMath> is already a diagonal matrix, then the
        diagonalizing matrix <InlineMath>{'C'}</InlineMath> either leaves{' '}
        <InlineMath>{'A'}</InlineMath> unchanged or merely rearranges the diagonal
        entries.
      </p>

      <h3>Real Symmetric Matrices</h3>

      <p>
        A real Hermitian matrix is the same as a real symmetric matrix. Since
        the eigenvalues are real and the eigenvectors can be taken to be real,
        a real symmetric matrix can be diagonalized by a <strong>real
        orthogonal</strong> matrix.
      </p>

      <Callout type="info">
        <strong>Corollary:</strong> Every real symmetric matrix can be
        diagonalized by a real orthogonal matrix.
      </Callout>

      <p>
        This is not true for real skew-symmetric matrices, which may require
        complex entries in the diagonalizing matrix.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The diagonalizing matrix{' '}
        <InlineMath>{'C'}</InlineMath> for a Hermitian matrix satisfies{' '}
        <InlineMath>{'C^{-1} = C^*'}</InlineMath>. Such matrices preserve inner
        products and are called <em>unitary</em>. This means diagonalizing a
        Hermitian matrix is not just a similarity transformation—it's a
        transformation that preserves geometric structure.
      </Callout>
    </LessonLayout>
  );
}
