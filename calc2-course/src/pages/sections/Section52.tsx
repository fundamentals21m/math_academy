import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <h2>Repeated Roots</h2>

      <p>
        When a root of the characteristic equation is repeated, the simple
        exponential functions no longer provide enough independent solutions.
        We need additional solutions involving polynomial factors.
      </p>

      <h3>The Problem</h3>

      <p>
        If root <InlineMath>r</InlineMath> has multiplicity{' '}
        <InlineMath>m</InlineMath>, then <InlineMath>{`(D-r)^m`}</InlineMath> is a
        factor of <InlineMath>L</InlineMath>. The function{' '}
        <InlineMath>{`e^{rx}`}</InlineMath> is in the null space, but we need{' '}
        <InlineMath>m</InlineMath> independent solutions from this factor alone.
      </p>

      <h3>The Solution</h3>

      <Callout type="info">
        <strong>Theorem 6.9:</strong> The <InlineMath>m</InlineMath> functions:
        <MathBlock>
          {`u_1(x) = e^{rx}, \\quad u_2(x) = xe^{rx}, \\quad \\ldots, \\quad u_m(x) = x^{m-1}e^{rx}`}
        </MathBlock>
        are <InlineMath>m</InlineMath> independent elements annihilated by{' '}
        <InlineMath>{`(D-r)^m`}</InlineMath>.
      </Callout>

      <h3>Proof by Induction</h3>

      <p>
        <strong>Base case (m = 1):</strong> The function{' '}
        <InlineMath>{`u_1(x) = e^{rx}`}</InlineMath> is clearly annihilated by{' '}
        <InlineMath>{`(D-r)`}</InlineMath>.
      </p>

      <p>
        <strong>Inductive step:</strong> Assume{' '}
        <InlineMath>{`u_1, \\ldots, u_{m-1}`}</InlineMath> are annihilated by{' '}
        <InlineMath>{`(D-r)^{m-1}`}</InlineMath>. Since:
      </p>
      <MathBlock>{`(D-r)^m = (D-r)(D-r)^{m-1}`}</MathBlock>

      <p>
        these functions are also annihilated by <InlineMath>{`(D-r)^m`}</InlineMath>.
        We must show that <InlineMath>{`u_m = x^{m-1}e^{rx}`}</InlineMath> is
        also annihilated.
      </p>

      <p>
        Compute:
      </p>
      <MathBlock>
        {`(D-r)(x^{m-1}e^{rx}) = D(x^{m-1}e^{rx}) - rx^{m-1}e^{rx}`}
      </MathBlock>
      <MathBlock>
        {`= (m-1)x^{m-2}e^{rx} + x^{m-1}re^{rx} - rx^{m-1}e^{rx}`}
      </MathBlock>
      <MathBlock>{`= (m-1)x^{m-2}e^{rx} = (m-1)u_{m-1}(x)`}</MathBlock>

      <p>
        Applying <InlineMath>{`(D-r)^{m-1}`}</InlineMath> to both sides gives 0
        (since it annihilates <InlineMath>{`u_{m-1}`}</InlineMath>). Therefore{' '}
        <InlineMath>{`(D-r)^m`}</InlineMath> annihilates <InlineMath>{`u_m`}</InlineMath>.
      </p>

      <h3>Example 1</h3>

      <p>
        Solve <InlineMath>{`(D^3 - D^2 - 8D + 12)y = 0`}</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> The operator factors as:
      </p>
      <MathBlock>{`L = (D-2)^2(D+3)`}</MathBlock>

      <p>
        By Theorem 6.9, the null space of <InlineMath>{`(D-2)^2`}</InlineMath>{' '}
        contains:
      </p>
      <MathBlock>{`u_1(x) = e^{2x}, \\quad u_2(x) = xe^{2x}`}</MathBlock>

      <p>
        The null space of <InlineMath>{`(D+3)`}</InlineMath> contains{' '}
        <InlineMath>{`u_3(x) = e^{-3x}`}</InlineMath>.
      </p>

      <p>
        General solution:
      </p>
      <MathBlock>{`y = c_1 e^{2x} + c_2 xe^{2x} + c_3 e^{-3x}`}</MathBlock>

      <h3>Example 2</h3>

      <p>
        Solve <InlineMath>{`(D^6 + 2D^5 - 2D^3 - D^2)y = 0`}</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> Factor:
      </p>
      <MathBlock>{`D^6 + 2D^5 - 2D^3 - D^2 = D^2(D-1)(D+1)^3`}</MathBlock>

      <p>
        The parts of the basis:
      </p>
      <ul>
        <li>
          From <InlineMath>{`D^2`}</InlineMath>:{' '}
          <InlineMath>{`u_1(x) = 1`}</InlineMath>,{' '}
          <InlineMath>{`u_2(x) = x`}</InlineMath>
        </li>
        <li>
          From <InlineMath>{`(D-1)`}</InlineMath>:{' '}
          <InlineMath>{`u_3(x) = e^x`}</InlineMath>
        </li>
        <li>
          From <InlineMath>{`(D+1)^3`}</InlineMath>:{' '}
          <InlineMath>{`u_4(x) = e^{-x}`}</InlineMath>,{' '}
          <InlineMath>{`u_5(x) = xe^{-x}`}</InlineMath>,{' '}
          <InlineMath>{`u_6(x) = x^2 e^{-x}`}</InlineMath>
        </li>
      </ul>

      <p>
        General solution:
      </p>
      <MathBlock>{`y = c_1 + c_2 x + c_3 e^x + (c_4 + c_5 x + c_6 x^2)e^{-x}`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> A root of multiplicity{' '}
        <InlineMath>m</InlineMath> contributes <InlineMath>m</InlineMath>{' '}
        solutions: <InlineMath>{`e^{rx}, xe^{rx}, \\ldots, x^{m-1}e^{rx}`}</InlineMath>.
        The polynomial factors <InlineMath>{`1, x, x^2, \\ldots, x^{m-1}`}</InlineMath>{' '}
        are independent, ensuring that multiplying them by{' '}
        <InlineMath>{`e^{rx}`}</InlineMath> gives independent solutions.
      </Callout>
    </LessonLayout>
  );
}
