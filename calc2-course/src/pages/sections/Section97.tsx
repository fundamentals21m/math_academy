import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section97() {
  return (
    <LessonLayout sectionId={97}>
      <h2>Classifying Stationary Points Using Eigenvalues</h2>

      <p>
        The nature of a stationary point is determined by the algebraic sign of
        the quadratic form <InlineMath>yH(a)y^t</InlineMath>. This section
        connects the sign of the quadratic form to the eigenvalues of the
        Hessian matrix.
      </p>

      <h3>Positive and Negative Definite Quadratic Forms</h3>

      <Callout type="info">
        <strong>Theorem 9.5:</strong> Let <InlineMath>{`A = [a_{ij}]`}</InlineMath>{' '}
        be an <InlineMath>n \times n</InlineMath> real symmetric matrix, and let:
        <MathBlock>{`Q(y) = yAy^t = \\sum_{i=1}^n \\sum_{j=1}^n a_{ij} y_i y_j`}</MathBlock>
        Then:
        <br /><br />
        (a) <InlineMath>{`Q(y) > 0`}</InlineMath> for all{' '}
        <InlineMath>{`y \\neq 0`}</InlineMath> if and only if all eigenvalues of{' '}
        <InlineMath>A</InlineMath> are positive (<strong>positive definite</strong>).
        <br /><br />
        (b) <InlineMath>{`Q(y) < 0`}</InlineMath> for all{' '}
        <InlineMath>{`y \\neq 0`}</InlineMath> if and only if all eigenvalues of{' '}
        <InlineMath>A</InlineMath> are negative (<strong>negative definite</strong>).
      </Callout>

      <h3>Proof of Theorem 9.5</h3>

      <p>
        According to Theorem 5.11, there is an orthogonal matrix{' '}
        <InlineMath>C</InlineMath> that diagonalizes the quadratic form. That is:
      </p>
      <MathBlock>{`Q(y) = yAy^t = \\sum_{i=1}^n \\lambda_i x_i^2`}</MathBlock>
      <p>
        where <InlineMath>x = yC</InlineMath> and{' '}
        <InlineMath>{`\\lambda_1, \\ldots, \\lambda_n`}</InlineMath> are the
        eigenvalues of <InlineMath>A</InlineMath>.
      </p>

      <p>
        If all eigenvalues are positive, then{' '}
        <InlineMath>{`Q(y) > 0`}</InlineMath> whenever{' '}
        <InlineMath>{`x \\neq 0`}</InlineMath>. Since{' '}
        <InlineMath>x = yC</InlineMath> and <InlineMath>C</InlineMath> is
        invertible, <InlineMath>{`x \\neq 0`}</InlineMath> if and only if{' '}
        <InlineMath>{`y \\neq 0`}</InlineMath>.
      </p>

      <p>
        Conversely, if <InlineMath>{`Q(y) > 0`}</InlineMath> for all{' '}
        <InlineMath>{`y \\neq 0`}</InlineMath>, choose{' '}
        <InlineMath>y</InlineMath> so that <InlineMath>x = yC</InlineMath> is
        the <InlineMath>k</InlineMath>th coordinate vector{' '}
        <InlineMath>e_k</InlineMath>. Then{' '}
        <InlineMath>{`Q(y) = \\lambda_k`}</InlineMath>, so each{' '}
        <InlineMath>{`\\lambda_k > 0`}</InlineMath>.
      </p>

      <h3>Classification of Stationary Points</h3>

      <Callout type="info">
        <strong>Theorem 9.6:</strong> Let <InlineMath>f</InlineMath> be a scalar
        field with continuous second-order partial derivatives{' '}
        <InlineMath>{`D_{ij}f`}</InlineMath> in an <InlineMath>n</InlineMath>-ball{' '}
        <InlineMath>B(a)</InlineMath>, and let <InlineMath>H(a)</InlineMath>{' '}
        denote the Hessian matrix at a stationary point <InlineMath>a</InlineMath>.
        Then:
        <br /><br />
        (a) If all eigenvalues of <InlineMath>H(a)</InlineMath> are{' '}
        <strong>positive</strong>, <InlineMath>f</InlineMath> has a{' '}
        <strong>relative minimum</strong> at <InlineMath>a</InlineMath>.
        <br /><br />
        (b) If all eigenvalues of <InlineMath>H(a)</InlineMath> are{' '}
        <strong>negative</strong>, <InlineMath>f</InlineMath> has a{' '}
        <strong>relative maximum</strong> at <InlineMath>a</InlineMath>.
        <br /><br />
        (c) If <InlineMath>H(a)</InlineMath> has both positive and negative
        eigenvalues, then <InlineMath>f</InlineMath> has a{' '}
        <strong>saddle point</strong> at <InlineMath>a</InlineMath>.
      </Callout>

      <h3>Proof of Theorem 9.6</h3>

      <p>
        Let <InlineMath>Q(y) = yH(a)y^t</InlineMath>. The Taylor formula gives:
      </p>
      <MathBlock>{`f(a + y) - f(a) = \\frac{1}{2}Q(y) + \\|y\\|^2 E_2(a, y)`}</MathBlock>

      <p>
        <strong>Part (a):</strong> Assume all eigenvalues{' '}
        <InlineMath>{`\\lambda_1, \\ldots, \\lambda_n`}</InlineMath> are positive.
        Let <InlineMath>h</InlineMath> be the smallest eigenvalue. Then for all{' '}
        <InlineMath>{`y \\neq 0`}</InlineMath>:
      </p>
      <MathBlock>{`Q(y) > \\frac{h}{2} \\|y\\|^2`}</MathBlock>

      <p>
        Since <InlineMath>{`E_2(a, y) \\to 0`}</InlineMath> as{' '}
        <InlineMath>{`y \\to 0`}</InlineMath>, there exists{' '}
        <InlineMath>{`r > 0`}</InlineMath> such that{' '}
        <InlineMath>{`|E_2(a, y)| < h/4`}</InlineMath> whenever{' '}
        <InlineMath>{`0 < \\|y\\| < r`}</InlineMath>. For such{' '}
        <InlineMath>y</InlineMath>:
      </p>
      <MathBlock>{`f(a + y) - f(a) > \\frac{1}{2} Q(y) - \\|y\\|^2 |E_2(a, y)| > 0`}</MathBlock>

      <p>
        Therefore <InlineMath>f</InlineMath> has a relative minimum at{' '}
        <InlineMath>a</InlineMath>.
      </p>

      <p>
        <strong>Part (b):</strong> Apply part (a) to <InlineMath>-f</InlineMath>.
      </p>

      <p>
        <strong>Part (c):</strong> If <InlineMath>H(a)</InlineMath> has
        eigenvalues of opposite signs, then the quadratic form{' '}
        <InlineMath>Q(y)</InlineMath> takes both positive and negative values in
        every neighborhood of <InlineMath>y = 0</InlineMath>. An argument similar
        to part (a) shows that the sign of{' '}
        <InlineMath>f(a + y) - f(a)</InlineMath> matches the sign of{' '}
        <InlineMath>Q(y)</InlineMath> for small <InlineMath>y</InlineMath>.
      </p>

      <Callout type="warning">
        <strong>Note:</strong> If all eigenvalues of <InlineMath>H(a)</InlineMath>{' '}
        are zero, Theorem 9.6 gives no information about the stationary point.
        Higher-order derivative tests are needed in such cases.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The eigenvalues of the Hessian completely
        determine the nature of a stationary point (when nonzero). Positive
        definite Hessians produce minima, negative definite produce maxima, and
        indefinite Hessians produce saddles. This connects optimization to
        linear algebra through spectral theory.
      </Callout>
    </LessonLayout>
  );
}
