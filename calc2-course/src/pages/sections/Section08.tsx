import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>The Gram-Schmidt Process</h2>

      <p>
        Every finite-dimensional linear space has a finite basis. If the space is Euclidean,
        we can always construct an <strong>orthogonal basis</strong>. The construction is
        called the <strong>Gram-Schmidt orthogonalization process</strong>, named after
        J. P. Gram (1850-1916) and E. Schmidt (1845-1921).
      </p>

      <h3>The Orthogonalization Theorem</h3>

      <Callout type="info">
        <strong>Theorem 1.13 (Orthogonalization Theorem):</strong> Let{' '}
        <InlineMath>{'x_1, x_2, \\ldots'}</InlineMath> be a finite or infinite sequence of elements
        in a Euclidean space <InlineMath>V</InlineMath>, and let{' '}
        <InlineMath>{'L(x_1, \\ldots, x_k)'}</InlineMath> denote the subspace spanned by the first{' '}
        <InlineMath>k</InlineMath> elements. Then there is a corresponding sequence{' '}
        <InlineMath>{'y_1, y_2, \\ldots'}</InlineMath> with the following properties for each{' '}
        <InlineMath>k</InlineMath>:
        <br /><br />
        (a) <InlineMath>{'y_k'}</InlineMath> is orthogonal to every element in{' '}
        <InlineMath>{'L(y_1, \\ldots, y_{k-1})'}</InlineMath>.
        <br />
        (b) <InlineMath>{'L(y_1, \\ldots, y_k) = L(x_1, \\ldots, x_k)'}</InlineMath>.
        <br />
        (c) The sequence is unique up to scalar factors.
      </Callout>

      <h3>The Gram-Schmidt Process</h3>

      <p>
        If the elements <InlineMath>{'x_1, \\ldots, x_k'}</InlineMath> are independent, then the
        corresponding <InlineMath>{'y_1, \\ldots, y_k'}</InlineMath> are nonzero, and the
        construction is given by:
      </p>

      <MathBlock>
        {`y_1 = x_1`}
      </MathBlock>
      <MathBlock>
        {`y_{r+1} = x_{r+1} - \\sum_{i=1}^r \\frac{(x_{r+1}, y_i)}{(y_i, y_i)} y_i \\quad \\text{for } r = 1, 2, \\ldots, k-1`}
      </MathBlock>

      <p>
        In words: to construct <InlineMath>{'y_{r+1}'}</InlineMath>, we subtract from{' '}
        <InlineMath>{'x_{r+1}'}</InlineMath> the projection of{' '}
        <InlineMath>{'x_{r+1}'}</InlineMath> along each of the earlier elements{' '}
        <InlineMath>{'y_1, \\ldots, y_r'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> If <InlineMath>x</InlineMath> and{' '}
        <InlineMath>y</InlineMath> are elements in a Euclidean space with{' '}
        <InlineMath>{'y \\neq 0'}</InlineMath>, the element:
        <MathBlock>{`\\frac{(x, y)}{(y, y)} y`}</MathBlock>
        is called the <strong>projection of <InlineMath>x</InlineMath> along{' '}
        <InlineMath>y</InlineMath></strong>.
      </Callout>

      <Callout type="info">
        <strong>Theorem 1.14:</strong> Every finite-dimensional Euclidean space has an
        orthonormal basis.
      </Callout>

      <p>
        To obtain an orthonormal basis, simply normalize each element{' '}
        <InlineMath>{'y_i'}</InlineMath> by dividing it by its norm.
      </p>

      <h3>Example 1: Orthonormal Basis in <InlineMath>{'V_4'}</InlineMath></h3>

      <p>
        Find an orthonormal basis for the subspace of <InlineMath>{'V_4'}</InlineMath> spanned by:
      </p>
      <MathBlock>
        {`x_1 = (1, -1, 1, -1), \\quad x_2 = (5, 1, 1, 1), \\quad x_3 = (-3, -3, 1, -3)`}
      </MathBlock>

      <p><strong>Solution:</strong> Applying the Gram-Schmidt process:</p>
      <MathBlock>{`y_1 = x_1 = (1, -1, 1, -1)`}</MathBlock>
      <MathBlock>
        {`y_2 = x_2 - \\frac{(x_2, y_1)}{(y_1, y_1)} y_1 = (5, 1, 1, 1) - 0 = (4, 2, 0, 2)`}
      </MathBlock>
      <MathBlock>
        {`y_3 = x_3 - \\frac{(x_3, y_1)}{(y_1, y_1)} y_1 - \\frac{(x_3, y_2)}{(y_2, y_2)} y_2 = (0, 0, 0, 0)`}
      </MathBlock>

      <p>
        Since <InlineMath>{'y_3 = 0'}</InlineMath>, the vectors{' '}
        <InlineMath>{'x_1, x_2, x_3'}</InlineMath> are dependent. The subspace has dimension 2,
        and <InlineMath>{'\\{y_1, y_2\\}'}</InlineMath> is an orthogonal basis. Normalizing:
      </p>
      <MathBlock>
        {`\\frac{y_1}{\\|y_1\\|} = \\frac{1}{2}(1, -1, 1, -1), \\quad \\frac{y_2}{\\|y_2\\|} = \\frac{1}{\\sqrt{6}}(2, 1, 0, 1)`}
      </MathBlock>

      <h3>Example 2: The Legendre Polynomials</h3>

      <p>
        In the linear space of all polynomials with inner product{' '}
        <InlineMath>{'(x, y) = \\int_{-1}^1 x(t)y(t)\\, dt'}</InlineMath>, apply the
        Gram-Schmidt process to <InlineMath>{'x_n(t) = t^n'}</InlineMath> for{' '}
        <InlineMath>{'n = 0, 1, 2, \\ldots'}</InlineMath>
      </p>

      <p>The first few polynomials are:</p>
      <MathBlock>{`y_0(t) = 1`}</MathBlock>
      <MathBlock>{`y_1(t) = t`}</MathBlock>
      <MathBlock>{`y_2(t) = t^2 - \\frac{1}{3}`}</MathBlock>
      <MathBlock>{`y_3(t) = t^3 - \\frac{3}{5}t`}</MathBlock>
      <MathBlock>{`y_4(t) = t^4 - \\frac{6}{7}t^2 + \\frac{3}{35}`}</MathBlock>

      <p>
        The polynomials <InlineMath>{'P_n'}</InlineMath> given by normalizing these are known as
        the <strong>Legendre polynomials</strong>:
      </p>
      <MathBlock>
        {`P_n(t) = \\frac{1}{2^n n!} \\frac{d^n}{dt^n} (t^2 - 1)^n`}
      </MathBlock>

      <p>
        The normalized Legendre polynomials <InlineMath>{'\\varphi_n = y_n/\\|y_n\\|'}</InlineMath> are:
      </p>
      <MathBlock>
        {`\\varphi_0(t) = \\sqrt{\\frac{1}{2}}, \\quad \\varphi_1(t) = \\sqrt{\\frac{3}{2}}t, \\quad \\varphi_2(t) = \\frac{1}{2}\\sqrt{\\frac{5}{2}} (3t^2 - 1)`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The Gram-Schmidt process is a fundamental algorithm that
        converts any basis into an orthogonal (or orthonormal) basis. This is essential for
        numerical computations, approximation theory, and the study of Fourier series. The
        process can detect linear dependence: if <InlineMath>{'y_k = 0'}</InlineMath> at some
        step, the original elements <InlineMath>{'x_1, \\ldots, x_k'}</InlineMath> are dependent.
      </Callout>
    </LessonLayout>
  );
}
