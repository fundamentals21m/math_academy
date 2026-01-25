import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <h2>Review: Linear Equations of First Order</h2>

      <p>
        We begin our study of linear differential equations by reviewing
        first-order equations, for which a complete solution theory exists.
      </p>

      <h3>The General Form</h3>

      <p>
        A <strong>linear differential equation of first order</strong> has the
        form:
      </p>
      <MathBlock>{`y' + P(x)y = Q(x)`}</MathBlock>

      <p>
        where <InlineMath>{'P'}</InlineMath> and <InlineMath>{'Q'}</InlineMath> are given
        functions.
      </p>

      <h3>Existence and Uniqueness</h3>

      <Callout type="info">
        <strong>Theorem 6.1:</strong> Assume <InlineMath>{'P'}</InlineMath> and{' '}
        <InlineMath>{'Q'}</InlineMath> are continuous on an open interval{' '}
        <InlineMath>{'J'}</InlineMath>. Choose any point <InlineMath>{'a'}</InlineMath>{' '}
        in <InlineMath>{'J'}</InlineMath> and let <InlineMath>{'b'}</InlineMath> be any
        real number. Then there is <strong>one and only one</strong> function{' '}
        <InlineMath>{'y = f(x)'}</InlineMath> which satisfies the differential
        equation and the initial condition <InlineMath>{'f(a) = b'}</InlineMath>.
      </Callout>

      <h3>The Explicit Solution Formula</h3>

      <p>
        The unique solution is given by the explicit formula:
      </p>
      <MathBlock>{`f(x) = be^{-A(x)} + e^{-A(x)}\\int_a^x Q(t)e^{A(t)} \\, dt`}</MathBlock>

      <p>
        where:
      </p>
      <MathBlock>{`A(x) = \\int_a^x P(t) \\, dt`}</MathBlock>

      <h3>Understanding the Solution</h3>

      <p>
        The solution formula has two parts:
      </p>

      <ul>
        <li>
          <InlineMath>{`be^{-A(x)}`}</InlineMath>: The solution of the{' '}
          <strong>homogeneous equation</strong>{' '}
          <InlineMath>{`y' + P(x)y = 0`}</InlineMath> with initial value{' '}
          <InlineMath>{'b'}</InlineMath>
        </li>
        <li>
          The integral term: A <strong>particular solution</strong> of the
          nonhomogeneous equation
        </li>
      </ul>

      <h3>The Integrating Factor Method</h3>

      <p>
        The function <InlineMath>{`e^{A(x)}`}</InlineMath> is called an{' '}
        <strong>integrating factor</strong>. Multiplying both sides of the
        equation by this factor transforms the left side into an exact
        derivative:
      </p>
      <MathBlock>{`\\frac{d}{dx}[e^{A(x)}y] = e^{A(x)}Q(x)`}</MathBlock>

      <p>
        Integration then yields the solution directly.
      </p>

      <h3>Example</h3>

      <p>
        Consider <InlineMath>{`y' - 3y = e^{2x}`}</InlineMath> with{' '}
        <InlineMath>{'y(0) = 0'}</InlineMath>.
      </p>

      <p>
        Here <InlineMath>{'P(x) = -3'}</InlineMath> and{' '}
        <InlineMath>{`Q(x) = e^{2x}`}</InlineMath>. The integrating factor is{' '}
        <InlineMath>{`e^{-3x}`}</InlineMath>.
      </p>

      <p>
        Multiplying by <InlineMath>{`e^{-3x}`}</InlineMath>:
      </p>
      <MathBlock>{`\\frac{d}{dx}[e^{-3x}y] = e^{-x}`}</MathBlock>

      <p>
        Integrating: <InlineMath>{`e^{-3x}y = -e^{-x} + C`}</InlineMath>
      </p>

      <p>
        Using <InlineMath>{'y(0) = 0'}</InlineMath>: <InlineMath>{'C = 1'}</InlineMath>
      </p>

      <p>
        Solution: <InlineMath>{`y = e^{3x} - e^{2x}`}</InlineMath>
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> First-order linear equations are completely
        solvable: given any initial condition, there is exactly one solution,
        and we have an explicit formula for it. This complete solution theory
        serves as a model for what we seek in higher-order equations—though the
        theory becomes more complex as the order increases.
      </Callout>
    </LessonLayout>
  );
}
