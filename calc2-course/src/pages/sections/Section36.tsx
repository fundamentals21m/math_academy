import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2>Existence of Orthonormal Eigenvectors</h2>

      <p>
        We have seen that eigenvectors corresponding to distinct eigenvalues of
        a Hermitian or skew-Hermitian operator are orthogonal. But eigenvalues
        need not exist in general. However, on <strong>finite-dimensional
        complex spaces</strong>, eigenvalues always exist, leading to a
        powerful existence theorem.
      </p>

      <h3>The Spectral Theorem</h3>

      <Callout type="info">
        <strong>Theorem 5.4 (Spectral Theorem):</strong> Assume{' '}
        <InlineMath>{'\\dim V = n'}</InlineMath> and let{' '}
        <InlineMath>{'T: V \\to V'}</InlineMath> be Hermitian or skew-Hermitian. Then
        there exist <InlineMath>{'n'}</InlineMath> eigenvectors{' '}
        <InlineMath>{'u_1, \\ldots, u_n'}</InlineMath> of <InlineMath>{'T'}</InlineMath>{' '}
        which form an <strong>orthonormal basis</strong> for{' '}
        <InlineMath>{'V'}</InlineMath>.
        <br /><br />
        Hence the matrix of <InlineMath>{'T'}</InlineMath> relative to this basis is
        the diagonal matrix:
        <MathBlock>{`\\Lambda = \\text{diag}(\\lambda_1, \\ldots, \\lambda_n)`}</MathBlock>
        where <InlineMath>{'\\lambda_k'}</InlineMath> is the eigenvalue belonging to{' '}
        <InlineMath>{'u_k'}</InlineMath>.
      </Callout>

      <h3>Proof Sketch</h3>

      <p>
        The proof uses induction on the dimension <InlineMath>{'n'}</InlineMath>.
      </p>

      <p>
        <strong>Base case (n = 1):</strong> <InlineMath>{'T'}</InlineMath> has
        exactly one eigenvalue, and any eigenvector of norm 1 is an orthonormal
        basis.
      </p>

      <p>
        <strong>Inductive step:</strong> Assume the theorem holds for dimension{' '}
        <InlineMath>{'n - 1'}</InlineMath>. For <InlineMath>{'V'}</InlineMath> of
        dimension <InlineMath>{'n'}</InlineMath>:
      </p>

      <ol>
        <li>
          Choose an eigenvalue <InlineMath>{'\\lambda_1'}</InlineMath> and a
          corresponding eigenvector <InlineMath>{'u_1'}</InlineMath> with{' '}
          <InlineMath>{'\\|u_1\\| = 1'}</InlineMath>.
        </li>
        <li>
          Consider the <strong>orthogonal complement</strong>:
          <MathBlock>{`S^\\perp = \\{x \\in V : (x, u_1) = 0\\}`}</MathBlock>
        </li>
        <li>
          Show that <InlineMath>{'\\dim S^\\perp = n - 1'}</InlineMath>.
        </li>
        <li>
          <strong>Key step:</strong> Show that <InlineMath>{'T'}</InlineMath> maps{' '}
          <InlineMath>{'S^\\perp'}</InlineMath> into itself. For{' '}
          <InlineMath>{'x \\in S^\\perp'}</InlineMath>:
          <MathBlock>{`(T(x), u_1) = (x, T(u_1)) = (x, \\lambda_1 u_1) = \\bar{\\lambda_1}(x, u_1) = 0`}</MathBlock>
          so <InlineMath>{'T(x) \\in S^\\perp'}</InlineMath>.
        </li>
        <li>
          Apply the induction hypothesis to get{' '}
          <InlineMath>{'u_2, \\ldots, u_n'}</InlineMath> forming an orthonormal basis
          for <InlineMath>{'S^\\perp'}</InlineMath>.
        </li>
        <li>
          Then <InlineMath>{'u_1, u_2, \\ldots, u_n'}</InlineMath> is an orthonormal
          basis for <InlineMath>{'V'}</InlineMath>.
        </li>
      </ol>

      <h3>Why Eigenvalues Exist</h3>

      <p>
        On a finite-dimensional complex space, eigenvalues always exist because
        they are roots of the characteristic polynomial. By the fundamental
        theorem of algebra, every polynomial with complex coefficients has a
        complex root.
      </p>

      <ul>
        <li>
          If <InlineMath>{'T'}</InlineMath> is Hermitian, all eigenvalues are real.
        </li>
        <li>
          If <InlineMath>{'T'}</InlineMath> is skew-Hermitian, all eigenvalues are
          pure imaginary.
        </li>
      </ul>

      <h3>Significance</h3>

      <p>
        The Spectral Theorem is one of the most important results in linear
        algebra. It says:
      </p>

      <ul>
        <li>
          Every Hermitian operator on a finite-dimensional space can be
          <strong>diagonalized</strong>.
        </li>
        <li>
          The diagonalizing basis can be chosen to be{' '}
          <strong>orthonormal</strong>.
        </li>
        <li>
          This basis consists entirely of eigenvectors.
        </li>
      </ul>

      <p>
        In applications, this means:
      </p>

      <ul>
        <li>
          <strong>Quantum mechanics:</strong> Any observable has a complete set
          of orthonormal eigenstates.
        </li>
        <li>
          <strong>Data science:</strong> Symmetric covariance matrices can
          always be diagonalized by an orthogonal change of coordinates
          (principal component analysis).
        </li>
        <li>
          <strong>Differential equations:</strong> Symmetric differential
          operators have complete orthonormal systems of eigenfunctions.
        </li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The Spectral Theorem guarantees that
        Hermitian and skew-Hermitian operators have the nicest possible
        structure: they can always be represented as diagonal matrices with
        respect to an orthonormal basis. This is a much stronger statement than
        mere diagonalizability—it says the diagonalizing transformation
        preserves angles and lengths.
      </Callout>
    </LessonLayout>
  );
}
