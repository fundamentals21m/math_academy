import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2>Orthogonality of Eigenvectors</h2>

      <p>
        We already know that eigenvectors corresponding to distinct eigenvalues
        are linearly independent. For Hermitian and skew-Hermitian operators,
        something stronger is true: eigenvectors corresponding to distinct
        eigenvalues are <strong>orthogonal</strong>.
      </p>

      <h3>The Orthogonality Theorem</h3>

      <Callout type="info">
        <strong>Theorem 5.3:</strong> Let <InlineMath>{'T'}</InlineMath> be a
        Hermitian or skew-Hermitian transformation, and let{' '}
        <InlineMath>{'\\lambda'}</InlineMath> and <InlineMath>{'\\mu'}</InlineMath> be
        distinct eigenvalues of <InlineMath>{'T'}</InlineMath> with corresponding
        eigenvectors <InlineMath>{'x'}</InlineMath> and <InlineMath>{'y'}</InlineMath>.
        Then <InlineMath>{'x'}</InlineMath> and <InlineMath>{'y'}</InlineMath> are
        orthogonal:
        <MathBlock>{`(x, y) = 0`}</MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> We have{' '}
        <InlineMath>{'T(x) = \\lambda x'}</InlineMath> and{' '}
        <InlineMath>{'T(y) = \\mu y'}</InlineMath>. Compare the two inner products{' '}
        <InlineMath>{'(T(x), y)'}</InlineMath> and <InlineMath>{'(x, T(y))'}</InlineMath>:
      </p>
      <MathBlock>{`(T(x), y) = (\\lambda x, y) = \\lambda(x, y)`}</MathBlock>
      <MathBlock>{`(x, T(y)) = (x, \\mu y) = \\bar{\\mu}(x, y)`}</MathBlock>

      <p>
        <strong>Case 1 (Hermitian):</strong> We have{' '}
        <InlineMath>{'(T(x), y) = (x, T(y))'}</InlineMath>, so:
      </p>
      <MathBlock>{`\\lambda(x, y) = \\bar{\\mu}(x, y) = \\mu(x, y)`}</MathBlock>
      <p>
        since <InlineMath>{'\\mu = \\bar{\\mu}'}</InlineMath> for Hermitian
        operators. Since <InlineMath>{'\\lambda \\neq \\mu'}</InlineMath>, we must have{' '}
        <InlineMath>{'(x, y) = 0'}</InlineMath>.
      </p>

      <p>
        <strong>Case 2 (Skew-Hermitian):</strong> We have{' '}
        <InlineMath>{'(T(x), y) = -(x, T(y))'}</InlineMath>, so:
      </p>
      <MathBlock>{`\\lambda(x, y) = -\\bar{\\mu}(x, y) = \\mu(x, y)`}</MathBlock>
      <p>
        since <InlineMath>{'\\mu = -\\bar{\\mu}'}</InlineMath> for skew-Hermitian
        operators. Again, <InlineMath>{'\\lambda \\neq \\mu'}</InlineMath> implies{' '}
        <InlineMath>{'(x, y) = 0'}</InlineMath>.
      </p>

      <h3>Application: Fourier Orthogonality</h3>

      <p>
        Consider functions satisfying the differential equation of simple
        harmonic motion:
      </p>
      <MathBlock>{`f'' + k^2 f = 0`}</MathBlock>

      <p>
        on the interval <InlineMath>{'[0, \\pi]'}</InlineMath> with boundary
        conditions <InlineMath>{'f(0) = f(\\pi) = 0'}</InlineMath>. This has the
        Sturm-Liouville form with <InlineMath>{'p = 1'}</InlineMath>,{' '}
        <InlineMath>{'q = 0'}</InlineMath>, and{' '}
        <InlineMath>{'\\lambda = -k^2'}</InlineMath>.
      </p>

      <p>
        The general solution is{' '}
        <InlineMath>{'f(t) = c_1 \\cos kt + c_2 \\sin kt'}</InlineMath>.
      </p>

      <ul>
        <li>
          Boundary condition <InlineMath>{'f(0) = 0'}</InlineMath> implies{' '}
          <InlineMath>{'c_1 = 0'}</InlineMath>.
        </li>
        <li>
          Boundary condition <InlineMath>{'f(\\pi) = 0'}</InlineMath> implies{' '}
          <InlineMath>{'c_2 \\sin k\\pi = 0'}</InlineMath>.
        </li>
      </ul>

      <p>
        For nonzero solutions, <InlineMath>{'k'}</InlineMath> must be an integer.
        The eigenfunctions are:
      </p>
      <MathBlock>{`f_n(t) = \\sin nt, \\quad n = 1, 2, 3, \\ldots`}</MathBlock>

      <p>
        By Theorem 5.3, these eigenfunctions corresponding to distinct
        eigenvalues <InlineMath>{'-n^2'}</InlineMath> are orthogonal:
      </p>
      <MathBlock>{`\\int_0^\\pi \\sin nt \\cdot \\sin mt \\, dt = 0 \\quad \\text{if } m \\neq n`}</MathBlock>

      <p>
        This is the familiar orthogonality relation for sine functions that
        underlies Fourier series!
      </p>

      <h3>Geometric Interpretation</h3>

      <p>
        The orthogonality of eigenvectors means that in a Euclidean space, a
        Hermitian or symmetric operator stretches space along mutually
        perpendicular axes. Each eigenvector defines one of these principal
        axes, and the corresponding eigenvalue gives the stretch factor along
        that axis.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Orthogonality of eigenvectors is a
        powerful structural result. It means that eigenvectors of Hermitian
        operators not only span the space (linear independence) but do so in a
        geometrically nice way (orthogonality). This leads to orthonormal bases
        of eigenvectors, which simplify computations enormously.
      </Callout>
    </LessonLayout>
  );
}
