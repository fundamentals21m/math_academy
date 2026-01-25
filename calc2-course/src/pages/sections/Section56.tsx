import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      <h2>The Wronskian</h2>

      <p>
        The Wronskian matrix and its determinant are fundamental tools for
        understanding linear independence of solutions. Named after J. M. H.
        Wronski (1778-1853), the Wronskian provides a computational test for
        independence and satisfies a remarkable differential equation.
      </p>

      <h3>The Wronskian Determinant</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>Wronskian determinant</strong>{' '}
        of <InlineMath>n</InlineMath> functions{' '}
        <InlineMath>{`u_1, \\ldots, u_n`}</InlineMath> is:
        <MathBlock>
          {`w(x) = \\det W(x) = \\det \\begin{bmatrix} u_1 & u_2 & \\cdots & u_n \\\\ u_1' & u_2' & \\cdots & u_n' \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ u_1^{(n-1)} & u_2^{(n-1)} & \\cdots & u_n^{(n-1)} \\end{bmatrix}`}
        </MathBlock>
      </Callout>

      <h3>Abel's Formula</h3>

      <p>
        Assume the differential equation satisfied by{' '}
        <InlineMath>{`u_1, \\ldots, u_n`}</InlineMath> has the form:
      </p>
      <MathBlock>
        {`y^{(n)} + P_1(x) y^{(n-1)} + \\cdots + P_n(x) y = 0`}
      </MathBlock>

      <Callout type="info">
        <strong>Theorem 6.12:</strong> The Wronskian determinant satisfies the
        first-order differential equation:
        <MathBlock>{`w' + P_1(x) w = 0`}</MathBlock>
        Therefore, if <InlineMath>{`c \\in J`}</InlineMath>, we have{' '}
        <strong>Abel's formula</strong>:
        <MathBlock>
          {`w(x) = w(c) \\exp\\left[-\\int_c^x P_1(t)\\, dt\\right]`}
        </MathBlock>
        Moreover, <InlineMath>{`w(x) \\neq 0`}</InlineMath> for all{' '}
        <InlineMath>x</InlineMath> in <InlineMath>J</InlineMath>.
      </Callout>

      <h3>Proof Outline</h3>

      <p>
        Let <InlineMath>{`u = (u_1, \\ldots, u_n)`}</InlineMath>. The rows of{' '}
        <InlineMath>W</InlineMath> are{' '}
        <InlineMath>{`u, u', \\ldots, u^{(n-1)}`}</InlineMath>. We can write:
      </p>
      <MathBlock>
        {`w = \\det(u, u', \\ldots, u^{(n-1)})`}
      </MathBlock>

      <p>
        The derivative of <InlineMath>w</InlineMath> is the determinant obtained
        by differentiating only the last row:
      </p>
      <MathBlock>
        {`w' = \\det(u, u', \\ldots, u^{(n-2)}, u^{(n)})`}
      </MathBlock>

      <p>
        Multiplying the last row of <InlineMath>w</InlineMath> by{' '}
        <InlineMath>{`P_1(x)`}</InlineMath>:
      </p>
      <MathBlock>
        {`P_1(x) w = \\det(u, u', \\ldots, u^{(n-2)}, P_1(x) u^{(n-1)})`}
      </MathBlock>

      <p>
        Adding these:
      </p>
      <MathBlock>
        {`w' + P_1(x) w = \\det(u, u', \\ldots, u^{(n-2)}, u^{(n)} + P_1(x) u^{(n-1)})`}
      </MathBlock>

      <p>
        But the rows are dependent since <InlineMath>u</InlineMath> satisfies
        the differential equation. Therefore the determinant is zero.
      </p>

      <h3>Nonsingularity</h3>

      <p>
        We prove <InlineMath>{`w(c) \\neq 0`}</InlineMath> for some{' '}
        <InlineMath>{`c \\in J`}</InlineMath> by contradiction. If{' '}
        <InlineMath>{`w(t) = 0`}</InlineMath> for all <InlineMath>t</InlineMath>,
        then <InlineMath>{`W(t_0)`}</InlineMath> would be singular for some{' '}
        <InlineMath>{`t_0`}</InlineMath>.
      </p>

      <p>
        This means the system <InlineMath>{`W(t_0) X = 0`}</InlineMath> has a
        nonzero solution <InlineMath>{`X = (c_1, \\ldots, c_n)`}</InlineMath>. The
        function:
      </p>
      <MathBlock>
        {`f(t) = c_1 u_1(t) + \\cdots + c_n u_n(t)`}
      </MathBlock>

      <p>
        would satisfy <InlineMath>{`L(f) = 0`}</InlineMath> with initial conditions:
      </p>
      <MathBlock>
        {`f(t_0) = f'(t_0) = \\cdots = f^{(n-1)}(t_0) = 0`}
      </MathBlock>

      <p>
        By uniqueness, <InlineMath>{`f \\equiv 0`}</InlineMath>, implying{' '}
        <InlineMath>{`c_1 = \\cdots = c_n = 0`}</InlineMath>—a contradiction.
      </p>

      <h3>Consequences</h3>

      <ul>
        <li>
          If <InlineMath>{`w(x_0) \\neq 0`}</InlineMath> at any point, then{' '}
          <InlineMath>{`w(x) \\neq 0`}</InlineMath> everywhere (by Abel's formula)
        </li>
        <li>
          The Wronskian matrix of independent solutions is always nonsingular
        </li>
        <li>
          Variation of parameters always succeeds because{' '}
          <InlineMath>{`W^{-1}`}</InlineMath> exists
        </li>
        <li>
          The Wronskian either vanishes identically or never vanishes
        </li>
      </ul>

      <h3>Example: Second-Order Case</h3>

      <p>
        For <InlineMath>{`y'' + P_1(x) y' + P_2(x) y = 0`}</InlineMath> with
        solutions <InlineMath>{`u_1, u_2`}</InlineMath>:
      </p>
      <MathBlock>
        {`w(x) = u_1 u_2' - u_1' u_2 = w(c) \\exp\\left[-\\int_c^x P_1(t)\\, dt\\right]`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Abel's formula reveals that the Wronskian
        of solutions of a linear ODE is an exponential function—it's either
        identically zero or never zero. This "all-or-nothing" behavior is a
        remarkable consequence of linearity. The formula also shows how the
        Wronskian depends only on <InlineMath>{`P_1`}</InlineMath>, the coefficient
        of <InlineMath>{`y^{(n-1)}`}</InlineMath>, not on the other coefficients.
      </Callout>
    </LessonLayout>
  );
}
