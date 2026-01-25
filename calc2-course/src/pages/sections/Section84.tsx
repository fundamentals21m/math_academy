import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section84() {
  return (
    <LessonLayout sectionId={84}>
      <h2>The Gradient of a Scalar Field</h2>

      <p>
        The formula from Theorem 8.5, which expresses{' '}
        <InlineMath>{`f'(a; y)`}</InlineMath> as a linear combination of the
        components of <InlineMath>{'y'}</InlineMath>, can be written as a dot product.
      </p>

      <h3>Definition of the Gradient</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>gradient</strong> of a scalar
        field <InlineMath>{'f'}</InlineMath> at a point <InlineMath>{'a'}</InlineMath>{' '}
        is the vector whose components are the partial derivatives:
        <MathBlock>{`\\nabla f(a) = (D_1 f(a), \\ldots, D_n f(a))`}</MathBlock>
        The gradient is also written as{' '}
        <InlineMath>{'\\text{grad } f'}</InlineMath>. The symbol{' '}
        <InlineMath>{'\\nabla'}</InlineMath> is pronounced "del" or "nabla".
      </Callout>

      <p>
        With this notation, the derivative becomes:
      </p>
      <MathBlock>{`f'(a; y) = \\sum_{k=1}^n D_k f(a) y_k = \\nabla f(a) \\cdot y`}</MathBlock>

      <h3>Taylor Formula with Gradient</h3>

      <p>
        The first-order Taylor formula can now be written:
      </p>
      <MathBlock>{`f(a + v) = f(a) + \\nabla f(a) \\cdot v + \\|v\\| E(a, v)`}</MathBlock>
      <p>
        where <InlineMath>{'E(a, v) \\to 0'}</InlineMath> as{' '}
        <InlineMath>{'\\|v\\| \\to 0'}</InlineMath>. This resembles the
        one-dimensional Taylor formula, with the gradient vector{' '}
        <InlineMath>{'\\nabla f(a)'}</InlineMath> playing the role of the derivative{' '}
        <InlineMath>{`f'(a)`}</InlineMath>.
      </p>

      <h3>Differentiability Implies Continuity</h3>

      <Callout type="info">
        <strong>Theorem 8.6:</strong> If a scalar field <InlineMath>{'f'}</InlineMath>{' '}
        is differentiable at <InlineMath>{'a'}</InlineMath>, then{' '}
        <InlineMath>{'f'}</InlineMath> is continuous at <InlineMath>{'a'}</InlineMath>.
      </Callout>

      <p>
        <strong>Proof:</strong> From the Taylor formula:
      </p>
      <MathBlock>{`|f(a + v) - f(a)| = |\\nabla f(a) \\cdot v + \\|v\\| E(a, v)|`}</MathBlock>
      <p>
        By the triangle and Cauchy-Schwarz inequalities:
      </p>
      <MathBlock>{`|f(a + v) - f(a)| \\leq \\|\\nabla f(a)\\| \\|v\\| + \\|v\\| |E(a, v)|`}</MathBlock>
      <p>
        As <InlineMath>{'\\|v\\| \\to 0'}</InlineMath>, both terms tend to 0,
        so <InlineMath>{'f(a + v) \\to f(a)'}</InlineMath>.
      </p>

      <h3>Geometric Interpretation</h3>

      <p>
        When <InlineMath>{'y'}</InlineMath> is a unit vector and{' '}
        <InlineMath>{'\\nabla f(a) \\neq 0'}</InlineMath>, let{' '}
        <InlineMath>{'\\theta'}</InlineMath> be the angle between{' '}
        <InlineMath>{'y'}</InlineMath> and <InlineMath>{'\\nabla f(a)'}</InlineMath>. Then:
      </p>
      <MathBlock>{`f'(a; y) = \\nabla f(a) \\cdot y = \\|\\nabla f(a)\\| \\cos \\theta`}</MathBlock>

      <p>
        This shows that the directional derivative is the{' '}
        <strong>component of the gradient vector in direction y</strong>.
      </p>

      <Callout type="info">
        <strong>Geometric Properties:</strong>
        <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <li>
            The directional derivative is <strong>largest</strong> when{' '}
            <InlineMath>{'\\cos \\theta = 1'}</InlineMath>, i.e., when{' '}
            <InlineMath>{'y'}</InlineMath> has the same direction as{' '}
            <InlineMath>{'\\nabla f(a)'}</InlineMath>. The maximum value equals{' '}
            <InlineMath>{'\\|\\nabla f(a)\\|'}</InlineMath>.
          </li>
          <li>
            The directional derivative is <strong>zero</strong> when{' '}
            <InlineMath>{'\\nabla f(a)'}</InlineMath> is orthogonal to{' '}
            <InlineMath>{'y'}</InlineMath>.
          </li>
          <li>
            The directional derivative is <strong>most negative</strong> when{' '}
            <InlineMath>{'y'}</InlineMath> points opposite to{' '}
            <InlineMath>{'\\nabla f(a)'}</InlineMath>.
          </li>
        </ul>
      </Callout>

      <h3>Gradient Formulas in Low Dimensions</h3>

      <p>
        In <InlineMath>{'\\mathbb{R}^2'}</InlineMath>:
      </p>
      <MathBlock>{`\\nabla f(x, y) = \\frac{\\partial f}{\\partial x} \\mathbf{i} + \\frac{\\partial f}{\\partial y} \\mathbf{j}`}</MathBlock>

      <p>
        In <InlineMath>{'\\mathbb{R}^3'}</InlineMath>:
      </p>
      <MathBlock>{`\\nabla f(x, y, z) = \\frac{\\partial f}{\\partial x} \\mathbf{i} + \\frac{\\partial f}{\\partial y} \\mathbf{j} + \\frac{\\partial f}{\\partial z} \\mathbf{k}`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The gradient vector points in the
        direction of maximum increase of the scalar field, and its magnitude
        equals the rate of that increase. Moving perpendicular to the gradient
        keeps the field value constant (these are the level sets). This makes
        the gradient a fundamental tool for optimization and understanding
        field behavior.
      </Callout>
    </LessonLayout>
  );
}
