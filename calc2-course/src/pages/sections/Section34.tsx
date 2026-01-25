import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      <h2>Eigenvalues of Hermitian and Skew-Hermitian Operators</h2>

      <p>
        The Hermitian and skew-Hermitian conditions place strong constraints on
        what eigenvalues can occur. This section proves that Hermitian operators
        have only real eigenvalues, while skew-Hermitian operators have only
        pure imaginary eigenvalues.
      </p>

      <h3>The Main Theorem</h3>

      <Callout type="info">
        <strong>Theorem 5.2:</strong> Assume <InlineMath>{'T'}</InlineMath> has an
        eigenvalue <InlineMath>{'\\lambda'}</InlineMath>. Then:
        <br /><br />
        (a) If <InlineMath>{'T'}</InlineMath> is Hermitian,{' '}
        <InlineMath>{'\\lambda'}</InlineMath> is real:{' '}
        <InlineMath>{'\\lambda = \\bar{\\lambda}'}</InlineMath>.
        <br />
        (b) If <InlineMath>{'T'}</InlineMath> is skew-Hermitian,{' '}
        <InlineMath>{'\\lambda'}</InlineMath> is pure imaginary:{' '}
        <InlineMath>{'\\lambda = -\\bar{\\lambda}'}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> Let <InlineMath>{'x'}</InlineMath> be an eigenvector
        corresponding to <InlineMath>{'\\lambda'}</InlineMath>. From our earlier
        formulas:
      </p>
      <MathBlock>{`\\lambda = \\frac{(T(x), x)}{(x, x)} \\quad \\text{and} \\quad \\bar{\\lambda} = \\frac{(x, T(x))}{(x, x)}`}</MathBlock>

      <p>
        If <InlineMath>{'T'}</InlineMath> is Hermitian, we have{' '}
        <InlineMath>{'(T(x), x) = (x, T(x))'}</InlineMath>, so{' '}
        <InlineMath>{'\\lambda = \\bar{\\lambda}'}</InlineMath>.
      </p>

      <p>
        If <InlineMath>{'T'}</InlineMath> is skew-Hermitian, we have{' '}
        <InlineMath>{'(T(x), x) = -(x, T(x))'}</InlineMath>, so{' '}
        <InlineMath>{'\\lambda = -\\bar{\\lambda}'}</InlineMath>.
      </p>

      <h3>Special Cases</h3>

      <Callout type="info">
        <strong>Note on Symmetric Operators:</strong> If <InlineMath>{'T'}</InlineMath>{' '}
        is symmetric (real Euclidean space), Theorem 5.2 tells us nothing new
        since all eigenvalues are automatically real when the inner product is
        real.
      </Callout>

      <Callout type="info">
        <strong>Note on Skew-Symmetric Operators:</strong> If{' '}
        <InlineMath>{'T'}</InlineMath> is skew-symmetric, the eigenvalues must be
        both real (since the space is real) and pure imaginary. Therefore,{' '}
        <strong>all eigenvalues of a skew-symmetric operator must be zero</strong>{' '}
        (if any exist).
      </Callout>

      <h3>Implications</h3>

      <p>
        This theorem has profound consequences:
      </p>

      <ul>
        <li>
          <strong>Physical observables:</strong> In quantum mechanics, physical
          observables (energy, momentum, position) are represented by Hermitian
          operators. Since measurements yield real values, this explains why
          Hermitian operators are used—their eigenvalues (the possible
          measurement outcomes) are guaranteed to be real.
        </li>
        <li>
          <strong>Stability analysis:</strong> For dynamical systems, pure
          imaginary eigenvalues correspond to oscillatory behavior without
          growth or decay, which is characteristic of conservative systems.
        </li>
        <li>
          <strong>Matrix analysis:</strong> Real symmetric matrices always have
          real eigenvalues, which simplifies many computational problems in
          engineering and data science.
        </li>
      </ul>

      <h3>Example: Pauli Matrices Revisited</h3>

      <p>
        The Pauli matrices from quantum mechanics:
      </p>
      <MathBlock>{`\\sigma_1 = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}, \\quad \\sigma_2 = \\begin{bmatrix} 0 & -i \\\\ i & 0 \\end{bmatrix}, \\quad \\sigma_3 = \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}`}</MathBlock>

      <p>
        Each is Hermitian (verify that{' '}
        <InlineMath>{'\\sigma_k = \\sigma_k^*'}</InlineMath>), so by Theorem 5.2, all
        eigenvalues must be real. Indeed, each has eigenvalues{' '}
        <InlineMath>{'+1'}</InlineMath> and <InlineMath>{'-1'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The constraint that Hermitian operators
        have real eigenvalues is not just a mathematical curiosity—it's the
        foundation for using these operators to model physical quantities that
        must have real-valued measurements. The inner product structure of
        Euclidean spaces makes this constraint automatic.
      </Callout>
    </LessonLayout>
  );
}
