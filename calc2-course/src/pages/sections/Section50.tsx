import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <h2>The Algebra of Constant-Coefficient Operators</h2>

      <p>
        For equations with constant coefficients, there is a beautiful
        correspondence between differential operators and polynomials that
        allows us to solve the equations algebraically.
      </p>

      <h3>Constant-Coefficient Operators</h3>

      <Callout type="info">
        <strong>Definition:</strong> A <strong>constant-coefficient operator</strong>{' '}
        <InlineMath>{'A'}</InlineMath> is a linear operator of the form:
        <MathBlock>{`A = a_0 D^n + a_1 D^{n-1} + \\cdots + a_{n-1} D + a_n`}</MathBlock>
        where <InlineMath>{'D'}</InlineMath> is the derivative operator and{' '}
        <InlineMath>{'a_0, a_1, \\ldots, a_n'}</InlineMath> are real constants. If{' '}
        <InlineMath>{'a_0 \\neq 0'}</InlineMath>, the operator has{' '}
        <strong>order n</strong>.
      </Callout>

      <h3>Operations on Operators</h3>

      <p>
        Constant-coefficient operators can be:
      </p>

      <ul>
        <li>
          <strong>Added:</strong>{' '}
          <InlineMath>{'(A + B)(y) = A(y) + B(y)'}</InlineMath>
        </li>
        <li>
          <strong>Multiplied by scalars:</strong>{' '}
          <InlineMath>{'(\\lambda A)(y) = \\lambda A(y)'}</InlineMath>
        </li>
        <li>
          <strong>Composed (multiplied):</strong>{' '}
          <InlineMath>{'(AB)(y) = A(B(y))'}</InlineMath>
        </li>
      </ul>

      <p>
        A key property: constant-coefficient operators <strong>commute</strong>:
      </p>
      <MathBlock>{`AB = BA`}</MathBlock>

      <p>
        This follows from <InlineMath>{'D^r D^s = D^s D^r'}</InlineMath>.
      </p>

      <h3>The Characteristic Polynomial</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>characteristic polynomial</strong>{' '}
        <InlineMath>{'p_A'}</InlineMath> of the operator <InlineMath>{'A'}</InlineMath>{' '}
        is the polynomial with the same coefficients as <InlineMath>{'A'}</InlineMath>:
        <MathBlock>{`p_A(r) = a_0 r^n + a_1 r^{n-1} + \\cdots + a_n`}</MathBlock>
      </Callout>

      <h3>The Operator-Polynomial Correspondence</h3>

      <Callout type="info">
        <strong>Theorem 6.6:</strong> Let <InlineMath>{'A'}</InlineMath> and{' '}
        <InlineMath>{'B'}</InlineMath> be constant-coefficient operators with
        characteristic polynomials <InlineMath>{'p_A'}</InlineMath> and{' '}
        <InlineMath>{'p_B'}</InlineMath>. Then:
        <br /><br />
        (a) <InlineMath>{'A = B'}</InlineMath> if and only if{' '}
        <InlineMath>{'p_A = p_B'}</InlineMath>
        <br />
        (b) <InlineMath>{'p_{A+B} = p_A + p_B'}</InlineMath>
        <br />
        (c) <InlineMath>{'p_{AB} = p_A \\cdot p_B'}</InlineMath>
        <br />
        (d) <InlineMath>{'p_{\\lambda A} = \\lambda \\cdot p_A'}</InlineMath>
      </Callout>

      <h3>Proof of Part (a)</h3>

      <p>
        If <InlineMath>{'p_A = p_B'}</InlineMath>, then <InlineMath>{'A'}</InlineMath>{' '}
        and <InlineMath>{'B'}</InlineMath> have the same coefficients, so{' '}
        <InlineMath>{'A(y) = B(y)'}</InlineMath> for all <InlineMath>{'y'}</InlineMath>.
      </p>

      <p>
        Conversely, if <InlineMath>{'A = B'}</InlineMath>, take{' '}
        <InlineMath>{`y = e^{rx}`}</InlineMath>. Since{' '}
        <InlineMath>{`y^{(k)} = r^k e^{rx}`}</InlineMath>:
      </p>
      <MathBlock>{`A(y) = p_A(r)e^{rx} \\quad \\text{and} \\quad B(y) = p_B(r)e^{rx}`}</MathBlock>

      <p>
        The equation <InlineMath>{'A(y) = B(y)'}</InlineMath> implies{' '}
        <InlineMath>{'p_A(r) = p_B(r)'}</InlineMath> for all{' '}
        <InlineMath>{'r'}</InlineMath>, so <InlineMath>{'p_A = p_B'}</InlineMath>.
      </p>

      <h3>Factorization of Operators</h3>

      <p>
        Since algebraic operations on operators correspond to the same
        operations on polynomials, if we can factor the characteristic
        polynomial:
      </p>
      <MathBlock>{`p_A(r) = p_B(r) p_C(r)`}</MathBlock>

      <p>
        then we can factor the operator:
      </p>
      <MathBlock>{`A = BC`}</MathBlock>

      <h3>Examples</h3>

      <p>
        <strong>Example 1:</strong> Let <InlineMath>{'A = D^2 - 5D + 6'}</InlineMath>.
        Since <InlineMath>{'r^2 - 5r + 6 = (r-2)(r-3)'}</InlineMath>:
      </p>
      <MathBlock>{`D^2 - 5D + 6 = (D - 2)(D - 3)`}</MathBlock>

      <p>
        <strong>Example 2:</strong> Let{' '}
        <InlineMath>{'A = D^4 - 2D^3 + 2D^2 - 2D + 1'}</InlineMath>. The
        characteristic polynomial factors as:
      </p>
      <MathBlock>{`r^4 - 2r^3 + 2r^2 - 2r + 1 = (r-1)^2(r^2+1)`}</MathBlock>

      <p>
        So: <InlineMath>{'A = (D-1)^2(D^2+1)'}</InlineMath>
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The correspondence between operators and
        polynomials reduces differential equations to algebra. Factoring the
        characteristic polynomial factors the operator, and each factor
        corresponds to a simpler equation whose solutions we can find.
      </Callout>
    </LessonLayout>
  );
}
