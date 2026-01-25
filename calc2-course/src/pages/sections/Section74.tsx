import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section74() {
  return (
    <LessonLayout sectionId={74}>
      <h2>The General Linear System with Variable Coefficients</h2>

      <p>
        We now consider the most general first-order linear system:
      </p>
      <MathBlock>
        Y'(t) = P(t)Y(t) + Q(t), \quad Y(a) = B
      </MathBlock>

      <p>
        where the <InlineMath>n \times n</InlineMath> coefficient matrix{' '}
        <InlineMath>P(t)</InlineMath> is <strong>not</strong> necessarily constant.
      </p>

      <h3>The Difficulty with Variable Coefficients</h3>

      <Callout type="warning">
        <strong>Important:</strong> The formula{' '}
        <InlineMath>{`\\frac{d}{dt}e^{A(t)} = A'(t)e^{A(t)}`}</InlineMath>{' '}
        is <strong>not</strong> always true when <InlineMath>A(t)</InlineMath>{' '}
        is a matrix function. This is why the constant-coefficient approach
        cannot be directly generalized.
      </Callout>

      <p>
        In the scalar case (<InlineMath>n = 1</InlineMath>), setting{' '}
        <InlineMath>{`A(x) = \\int_a^x P(t)\\, dt`}</InlineMath> and multiplying by{' '}
        <InlineMath>{`e^{-A(t)}`}</InlineMath> gives the integrating factor
        method. But for matrices, this approach fails because{' '}
        <InlineMath>P(t)</InlineMath> may not commute with its integral.
      </p>

      <h3>The Correct Approach</h3>

      <p>
        Instead, we seek a matrix function <InlineMath>F(t)</InlineMath>{' '}
        satisfying:
      </p>
      <MathBlock>
        F'(t) = -F(t)P(t), \quad F(a) = I
      </MathBlock>

      <p>
        If such an <InlineMath>F</InlineMath> exists and is nonsingular, then
        multiplying <InlineMath>Y' = PY + Q</InlineMath> by{' '}
        <InlineMath>F</InlineMath> and adding <InlineMath>F'Y</InlineMath>:
      </p>
      <MathBlock>
        (FY)' = F'Y + FY' = -FPY + FPY + FQ = FQ
      </MathBlock>

      <p>
        Integrating from <InlineMath>a</InlineMath> to <InlineMath>x</InlineMath>:
      </p>
      <MathBlock>
        {`F(x)Y(x) - F(a)Y(a) = \\int_a^x F(t)Q(t)\\, dt`}
      </MathBlock>

      <h3>The General Solution Formula</h3>

      <Callout type="info">
        <strong>Theorem 7.16:</strong> Given an{' '}
        <InlineMath>n \times n</InlineMath> matrix function{' '}
        <InlineMath>P</InlineMath> and vector function{' '}
        <InlineMath>Q</InlineMath>, both continuous on interval{' '}
        <InlineMath>J</InlineMath>, the solution of:
        <MathBlock>
          Y'(x) = P(x)Y(x) + Q(x), \quad Y(a) = B
        </MathBlock>
        is:
        <MathBlock>
          {`Y(x) = F(x)^{-1}B + F(x)^{-1} \\int_a^x F(t)Q(t)\\, dt`}
        </MathBlock>
        where <InlineMath>F(x)</InlineMath> is the transpose of the matrix whose
        kth column solves <InlineMath>{`Y' = -P(x)^t Y`}</InlineMath> with{' '}
        <InlineMath>Y(a) = I_k</InlineMath>.
      </Callout>

      <h3>Existence of the Integrating Factor</h3>

      <Callout type="info">
        <strong>Theorem 7.15:</strong> Given <InlineMath>P(t)</InlineMath>{' '}
        continuous on interval <InlineMath>J</InlineMath> and{' '}
        <InlineMath>a \in J</InlineMath>, there exists an{' '}
        <InlineMath>n \times n</InlineMath> matrix function{' '}
        <InlineMath>F</InlineMath> satisfying:
        <MathBlock>
          F'(x) = -F(x)P(x), \quad F(a) = I
        </MathBlock>
        Moreover, <InlineMath>F(x)</InlineMath> is nonsingular for all{' '}
        <InlineMath>x \in J</InlineMath>.
      </Callout>

      <p>
        The proof constructs <InlineMath>F</InlineMath> by solving{' '}
        <InlineMath>n</InlineMath> separate vector differential equations.
        The nonsingularity is proven by showing that{' '}
        <InlineMath>F(x)H(x) = I</InlineMath> where{' '}
        <InlineMath>H</InlineMath> solves <InlineMath>H' = PH</InlineMath>{' '}
        with <InlineMath>H(a) = I</InlineMath>.
      </p>

      <h3>Practical Considerations</h3>

      <p>
        While Theorem 7.16 provides an explicit formula, computing{' '}
        <InlineMath>F(x)</InlineMath> requires solving{' '}
        <InlineMath>n</InlineMath> homogeneous systems—which may be just as
        difficult as the original problem. In practice, other methods
        (power series, numerical methods) are often more practical.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The general solution formula for
        variable-coefficient systems has the same structure as for constant
        coefficients: a homogeneous solution plus a particular integral.
        The matrix <InlineMath>F(x)</InlineMath> plays the role of the
        "fundamental matrix" for the adjoint system, generalizing the
        scalar integrating factor <InlineMath>{`e^{-\\int P}`}</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
