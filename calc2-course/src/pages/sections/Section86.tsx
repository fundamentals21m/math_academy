import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section86() {
  return (
    <LessonLayout sectionId={86}>
      <h2>The Chain Rule for Scalar Fields</h2>

      <p>
        The one-dimensional chain rule computes the derivative of a composite
        function <InlineMath>{'g(t) = f[r(t)]'}</InlineMath> by:
      </p>
      <MathBlock>{`g'(t) = f'[r(t)] \\cdot r'(t)`}</MathBlock>

      <p>
        We now extend this to the case where <InlineMath>{'f'}</InlineMath> is a
        scalar field defined on <InlineMath>{'\\mathbb{R}^n'}</InlineMath> and{' '}
        <InlineMath>{'r'}</InlineMath> is a vector-valued function of a real variable
        with values in the domain of <InlineMath>{'f'}</InlineMath>.
      </p>

      <h3>Physical Motivation</h3>

      <p>
        Suppose <InlineMath>{'f(x)'}</InlineMath> measures temperature at point{' '}
        <InlineMath>{'x'}</InlineMath> in a solid. If a point moves along a curve{' '}
        <InlineMath>{'C'}</InlineMath> described by <InlineMath>{'r(t)'}</InlineMath>,
        we can define:
      </p>
      <MathBlock>{`g(t) = f[r(t)]`}</MathBlock>
      <p>
        This expresses temperature as a function of time along the curve.
        The derivative <InlineMath>{`g'(t)`}</InlineMath> measures the rate of
        change of temperature along the curve.
      </p>

      <h3>The Chain Rule</h3>

      <Callout type="info">
        <strong>Theorem 8.8 (Chain Rule):</strong> Let <InlineMath>{'f'}</InlineMath>{' '}
        be a scalar field defined on an open set <InlineMath>{'S'}</InlineMath> in{' '}
        <InlineMath>{'\\mathbb{R}^n'}</InlineMath>, and let{' '}
        <InlineMath>{'r'}</InlineMath> be a vector-valued function mapping an
        interval <InlineMath>{'J'}</InlineMath> into <InlineMath>{'S'}</InlineMath>.
        Define <InlineMath>{'g = f \\circ r'}</InlineMath> by:
        <MathBlock>{`g(t) = f[r(t)] \\quad \\text{for } t \\in J`}</MathBlock>
        Let <InlineMath>{'t'}</InlineMath> be a point where{' '}
        <InlineMath>{`r'(t)`}</InlineMath> exists, and assume{' '}
        <InlineMath>{'f'}</InlineMath> is differentiable at{' '}
        <InlineMath>{'r(t)'}</InlineMath>. Then <InlineMath>{`g'(t)`}</InlineMath>{' '}
        exists and equals:
        <MathBlock>{`g'(t) = \\nabla f(a) \\cdot r'(t), \\quad \\text{where } a = r(t)`}</MathBlock>
      </Callout>

      <h3>Proof</h3>

      <p>
        Let <InlineMath>{'a = r(t)'}</InlineMath>. Take{' '}
        <InlineMath>{'h \\neq 0'}</InlineMath> small enough so{' '}
        <InlineMath>{'r(t + h)'}</InlineMath> lies in <InlineMath>{'B(a)'}</InlineMath>,
        and let <InlineMath>{'y = r(t + h) - r(t)'}</InlineMath>. Then:
      </p>
      <MathBlock>{`g(t + h) - g(t) = f[r(t + h)] - f[r(t)] = f(a + y) - f(a)`}</MathBlock>

      <p>
        By the Taylor formula:
      </p>
      <MathBlock>{`f(a + y) - f(a) = \\nabla f(a) \\cdot y + \\|y\\| E(a, y)`}</MathBlock>

      <p>
        Since <InlineMath>{'y = r(t + h) - r(t)'}</InlineMath>:
      </p>
      <MathBlock>{`\\frac{g(t+h) - g(t)}{h} = \\nabla f(a) \\cdot \\frac{r(t+h) - r(t)}{h} + \\frac{\\|r(t+h) - r(t)\\|}{h} E(a, y)`}</MathBlock>

      <p>
        Letting <InlineMath>{'h \\to 0'}</InlineMath> gives{' '}
        <InlineMath>{`g'(t) = \\nabla f(a) \\cdot r'(t)`}</InlineMath>.
      </p>

      <h3>Directional Derivative Along a Curve</h3>

      <p>
        When <InlineMath>{'r'}</InlineMath> describes a curve <InlineMath>{'C'}</InlineMath>,
        the derivative <InlineMath>{`r'`}</InlineMath> is the velocity (tangent)
        vector. If <InlineMath>{'T(t)'}</InlineMath> is a unit tangent vector, the
        dot product <InlineMath>{'\\nabla f[r(t)] \\cdot T(t)'}</InlineMath> is
        called the <strong>directional derivative of f along C</strong>.
      </p>

      <p>
        For a plane curve with <InlineMath>{'T = \\cos\\alpha \\, \\mathbf{i} + \\cos\\beta \\, \\mathbf{j}'}</InlineMath>:
      </p>
      <MathBlock>{`\\nabla f \\cdot T = \\frac{\\partial f}{\\partial x} \\cos \\alpha + \\frac{\\partial f}{\\partial y} \\cos \\beta`}</MathBlock>

      <h3>Example</h3>

      <p>
        Find the directional derivative of{' '}
        <InlineMath>{'f(x, y) = x^2 - 3xy'}</InlineMath> along the parabola{' '}
        <InlineMath>{'y = x^2 - x + 2'}</InlineMath> at <InlineMath>{'(1, 2)'}</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> The gradient at <InlineMath>{'(x, y)'}</InlineMath>:
      </p>
      <MathBlock>{`\\nabla f(x, y) = (2x - 3y)\\mathbf{i} - 3x\\mathbf{j}`}</MathBlock>
      <p>
        At <InlineMath>{'(1, 2)'}</InlineMath>:{' '}
        <InlineMath>{'\\nabla f(1, 2) = -4\\mathbf{i} - 3\\mathbf{j}'}</InlineMath>.
      </p>

      <p>
        Parametrize the parabola by{' '}
        <InlineMath>{'r(t) = t\\mathbf{i} + (t^2 - t + 2)\\mathbf{j}'}</InlineMath>.
        Then <InlineMath>{'r(1) = \\mathbf{i} + 2\\mathbf{j}'}</InlineMath> and{' '}
        <InlineMath>{`r'(t) = \\mathbf{i} + (2t-1)\\mathbf{j}`}</InlineMath>,
        so <InlineMath>{`r'(1) = \\mathbf{i} + \\mathbf{j}`}</InlineMath>.
      </p>

      <p>
        The unit tangent is{' '}
        <InlineMath>{'T(1) = (\\mathbf{i} + \\mathbf{j})/\\sqrt{2}'}</InlineMath>,
        giving:
      </p>
      <MathBlock>{`\\nabla f(1, 2) \\cdot T(1) = \\frac{-4 - 3}{\\sqrt{2}} = \\frac{-7}{\\sqrt{2}}`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The chain rule expresses the rate of
        change of a scalar field along a curve as the dot product of the
        gradient with the velocity vector. This connects the geometric picture
        (gradient points in direction of steepest increase) with dynamics
        (how fast the field value changes as you move along a path).
      </Callout>
    </LessonLayout>
  );
}
