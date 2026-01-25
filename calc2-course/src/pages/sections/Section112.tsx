import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section112() {
  return (
    <LessonLayout sectionId={112}>
      <h2>Applications to Exact Differential Equations</h2>

      <p>
        Some differential equations of the first order can be solved with the aid
        of potential functions.
      </p>

      <h3>Standard Form</h3>

      <p>
        Suppose we have a first-order differential equation of the form{' '}
        <InlineMath>{`y' = f(x, y)`}</InlineMath>. If we multiply both sides by a
        nonvanishing factor <InlineMath>{'Q(x, y)'}</InlineMath> and rearrange, we
        can write the differential equation in the form:
      </p>
      <MathBlock>{`P(x, y) \\, dx + Q(x, y) \\, dy = 0`}</MathBlock>

      <p>
        We assume that <InlineMath>{'P'}</InlineMath> and <InlineMath>{'Q'}</InlineMath> are
        continuous on some open connected set <InlineMath>{'S'}</InlineMath> in the plane.
      </p>

      <h3>Exact Equations</h3>

      <p>
        With each such differential equation we can associate a vector field{' '}
        <InlineMath>{'V'}</InlineMath>, where:
      </p>
      <MathBlock>{`V(x, y) = P(x, y)\\mathbf{i} + Q(x, y)\\mathbf{j}`}</MathBlock>

      <Callout type="info">
        <strong>Definition:</strong> The differential equation{' '}
        <InlineMath>{'P(x, y) \\, dx + Q(x, y) \\, dy = 0'}</InlineMath> is said to
        be <strong>exact</strong> in <InlineMath>{'S'}</InlineMath> if the vector field{' '}
        <InlineMath>{'V'}</InlineMath> is the gradient of a potential; that is, if{' '}
        <InlineMath>{'V(x, y) = \\nabla\\varphi(x, y)'}</InlineMath> for each point{' '}
        <InlineMath>{'(x, y)'}</InlineMath> in <InlineMath>{'S'}</InlineMath>, where{' '}
        <InlineMath>{'\\varphi'}</InlineMath> is some scalar field.
      </Callout>

      <p>
        When such a <InlineMath>{'\\varphi'}</InlineMath> exists, we have{' '}
        <InlineMath>{'\\partial\\varphi/\\partial x = P'}</InlineMath> and{' '}
        <InlineMath>{'\\partial\\varphi/\\partial y = Q'}</InlineMath>, and the
        differential equation becomes:
      </p>
      <MathBlock>{`\\frac{\\partial\\varphi}{\\partial x} \\, dx + \\frac{\\partial\\varphi}{\\partial y} \\, dy = 0`}</MathBlock>

      <h3>The Solution Method</h3>

      <Callout type="info">
        <strong>Theorem 10.7:</strong> Assume that the differential equation
        <MathBlock>{`P(x, y) \\, dx + Q(x, y) \\, dy = 0`}</MathBlock>
        is exact in an open connected set <InlineMath>{'S'}</InlineMath>, and let{' '}
        <InlineMath>{'\\varphi'}</InlineMath> be a scalar field satisfying
        <MathBlock>{`\\frac{\\partial\\varphi}{\\partial x} = P \\quad \\text{and} \\quad \\frac{\\partial\\varphi}{\\partial y} = Q`}</MathBlock>
        everywhere in <InlineMath>{'S'}</InlineMath>. Then every solution{' '}
        <InlineMath>{'y = Y(x)'}</InlineMath> whose graph lies in{' '}
        <InlineMath>{'S'}</InlineMath> satisfies the equation{' '}
        <InlineMath>{'\\varphi[x, Y(x)] = C'}</InlineMath> for some constant{' '}
        <InlineMath>{'C'}</InlineMath>.
        <br /><br />
        Conversely, if the equation <InlineMath>{'\\varphi(x, y) = C'}</InlineMath>{' '}
        defines <InlineMath>{'y'}</InlineMath> implicitly as a differentiable function
        of <InlineMath>{'x'}</InlineMath>, then this function is a solution of the
        differential equation.
      </Callout>

      <h3>Proof Sketch</h3>

      <p>
        Suppose <InlineMath>{'y = Y(x)'}</InlineMath> is a solution on{' '}
        <InlineMath>{'(a, b)'}</InlineMath>. Define{' '}
        <InlineMath>{'g(x) = \\varphi[x, Y(x)]'}</InlineMath>. By the chain rule:
      </p>
      <MathBlock>{`g'(x) = \\frac{\\partial\\varphi}{\\partial x} + \\frac{\\partial\\varphi}{\\partial y} Y'(x) = P(x, y) + Q(x, y)y'`}</MathBlock>
      <p>
        where <InlineMath>{'y = Y(x)'}</InlineMath> and{' '}
        <InlineMath>{`y' = Y'(x)`}</InlineMath>. If <InlineMath>{'y'}</InlineMath>{' '}
        satisfies the differential equation, then{' '}
        <InlineMath>{`P(x, y) + Q(x, y)y' = 0`}</InlineMath>, so{' '}
        <InlineMath>{`g'(x) = 0`}</InlineMath> and <InlineMath>{'g'}</InlineMath> is
        constant.
      </p>

      <h3>Example 1: An Exact Equation</h3>

      <p>
        Consider the differential equation:
      </p>
      <MathBlock>{`\\frac{dy}{dx} = -\\frac{3x^2 + 6xy^2}{6x^2y + 4y^3}`}</MathBlock>

      <p>
        Clearing fractions:
      </p>
      <MathBlock>{`(3x^2 + 6xy^2) \\, dx + (6x^2y + 4y^3) \\, dy = 0`}</MathBlock>

      <p>
        Here <InlineMath>{'P(x, y) = 3x^2 + 6xy^2'}</InlineMath> and{' '}
        <InlineMath>{'Q(x, y) = 6x^2y + 4y^3'}</InlineMath>. Check:{' '}
        <InlineMath>{'\\partial P/\\partial y = 12xy = \\partial Q/\\partial x'}</InlineMath>,
        so the equation is exact.
      </p>

      <p>
        Integrating <InlineMath>{'P'}</InlineMath> with respect to <InlineMath>{'x'}</InlineMath>{' '}
        and <InlineMath>{'Q'}</InlineMath> with respect to <InlineMath>{'y'}</InlineMath>
        and comparing:
      </p>
      <MathBlock>{`\\varphi(x, y) = x^3 + 3x^2y^2 + y^4`}</MathBlock>

      <p>
        By Theorem 10.7, each solution satisfies:
      </p>
      <MathBlock>{`x^3 + 3x^2y^2 + y^4 = C`}</MathBlock>

      <h3>Integrating Factors</h3>

      <p>
        Consider the equation <InlineMath>{'y \\, dx + 2x \\, dy = 0'}</InlineMath>.
        Here <InlineMath>{'P = y'}</InlineMath> and <InlineMath>{'Q = 2x'}</InlineMath>.
        Since <InlineMath>{'\\partial P/\\partial y = 1 \\neq 2 = \\partial Q/\\partial x'}</InlineMath>,
        this is <strong>not</strong> exact.
      </p>

      <p>
        However, if we multiply both sides by <InlineMath>{'y'}</InlineMath>:
      </p>
      <MathBlock>{`y^2 \\, dx + 2xy \\, dy = 0`}</MathBlock>
      <p>
        Now <InlineMath>{'\\partial(y^2)/\\partial y = 2y = \\partial(2xy)/\\partial x'}</InlineMath>,
        so the new equation <strong>is</strong> exact. A potential is{' '}
        <InlineMath>{'\\varphi(x, y) = xy^2'}</InlineMath>, and every solution
        satisfies <InlineMath>{'xy^2 = C'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> If multiplication of a first-order equation by
        a nonzero factor <InlineMath>{'\\mu(x, y)'}</InlineMath> results in an exact
        equation, the multiplier <InlineMath>{'\\mu'}</InlineMath> is called an{' '}
        <strong>integrating factor</strong>.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> Exact differential equations are solved by
        finding a potential function—the solution is{' '}
        <InlineMath>{'\\varphi(x, y) = C'}</InlineMath>. Non-exact equations can
        sometimes be made exact by multiplying by an integrating factor. This connects
        the theory of line integrals directly to solving first-order ODEs.
      </Callout>
    </LessonLayout>
  );
}
