import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <h2>The Existence-Uniqueness Theorem</h2>

      <p>
        The fundamental theorem for linear differential equations guarantees
        that initial-value problems always have exactly one solution.
      </p>

      <h3>Statement of the Theorem</h3>

      <Callout type="info">
        <strong>Theorem 6.3 (Existence-Uniqueness):</strong> Let{' '}
        <InlineMath>{`P_1, P_2, \\ldots, P_n`}</InlineMath> be continuous functions
        on an open interval <InlineMath>J</InlineMath>, and let{' '}
        <InlineMath>L</InlineMath> be the linear differential operator:
        <MathBlock>{`L = D^n + P_1 D^{n-1} + \\cdots + P_n`}</MathBlock>
        If <InlineMath>{`x_0 \\in J`}</InlineMath> and if{' '}
        <InlineMath>{`k_0, k_1, \\ldots, k_{n-1}`}</InlineMath> are{' '}
        <InlineMath>n</InlineMath> given real numbers, then there exists{' '}
        <strong>one and only one</strong> function <InlineMath>{`y = f(x)`}</InlineMath>{' '}
        which satisfies:
        <br /><br />
        (1) The homogeneous equation <InlineMath>{`L(y) = 0`}</InlineMath> on{' '}
        <InlineMath>J</InlineMath>
        <br />
        (2) The initial conditions:
        <MathBlock>
          {`f(x_0) = k_0, \\quad f'(x_0) = k_1, \\quad \\ldots, \\quad f^{(n-1)}(x_0) = k_{n-1}`}
        </MathBlock>
      </Callout>

      <h3>The Initial-Value Vector</h3>

      <Callout type="info">
        <strong>Definition:</strong> The vector{' '}
        <InlineMath>{`(f(x_0), f'(x_0), \\ldots, f^{(n-1)}(x_0))`}</InlineMath> in{' '}
        <InlineMath>n</InlineMath>-space is called the{' '}
        <strong>initial-value vector</strong> of <InlineMath>f</InlineMath> at{' '}
        <InlineMath>{`x_0`}</InlineMath>.
      </Callout>

      <h3>Interpretation</h3>

      <p>
        Theorem 6.3 says: if we choose a point <InlineMath>{`x_0`}</InlineMath> in{' '}
        <InlineMath>J</InlineMath> and choose a vector in{' '}
        <InlineMath>n</InlineMath>-space, then the homogeneous equation{' '}
        <InlineMath>{`L(y) = 0`}</InlineMath> has exactly one solution on{' '}
        <InlineMath>J</InlineMath> with this vector as its initial-value vector.
      </p>

      <h3>Special Case: n = 2</h3>

      <p>
        For second-order equations, there is exactly one solution with:
      </p>
      <ul>
        <li>Prescribed value <InlineMath>{`f(x_0)`}</InlineMath></li>
        <li>Prescribed derivative <InlineMath>{`f'(x_0)`}</InlineMath></li>
      </ul>

      <p>
        at a prescribed point <InlineMath>{`x_0`}</InlineMath>.
      </p>

      <h3>Why This Matters</h3>

      <p>
        The existence-uniqueness theorem is fundamental because:
      </p>

      <ul>
        <li>
          <strong>Existence:</strong> We are guaranteed that solutions exist
          whenever the coefficients are continuous.
        </li>
        <li>
          <strong>Uniqueness:</strong> Initial conditions completely determine
          the solution—there are no "hidden" solutions.
        </li>
        <li>
          <strong>Global solutions:</strong> The solution exists on the entire
          interval <InlineMath>J</InlineMath>, not just near{' '}
          <InlineMath>{`x_0`}</InlineMath>.
        </li>
      </ul>

      <h3>Contrast with Nonlinear Equations</h3>

      <p>
        For nonlinear equations, solutions may:
      </p>
      <ul>
        <li>Fail to exist</li>
        <li>Exist only on small intervals (blow-up in finite time)</li>
        <li>Fail to be unique</li>
      </ul>

      <p>
        The linear theory avoids all these pathologies.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The existence-uniqueness theorem provides
        the theoretical foundation for working with linear differential
        equations. It tells us that specifying <InlineMath>n</InlineMath> initial
        conditions (the value and first <InlineMath>{`n-1`}</InlineMath> derivatives
        at a point) uniquely determines the solution of an{' '}
        <InlineMath>n</InlineMath>th-order equation. This matches our intuition
        that an <InlineMath>n</InlineMath>th-order equation should need{' '}
        <InlineMath>n</InlineMath> pieces of information to pin down a solution.
      </Callout>
    </LessonLayout>
  );
}
