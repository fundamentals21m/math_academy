import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section133() {
  return (
    <LessonLayout sectionId={133}>
      <h2>Linear Transformations and Double Integrals</h2>

      <p>
        Linear transformations provide another important application of the change
        of variables formula for double integrals.
      </p>

      <h3>Linear Transformation Equations</h3>

      <p>
        Consider a linear transformation defined by a pair of equations of the form:
      </p>
      <MathBlock>
        {`x = Au + Bv, \\quad y = Cu + Dv`}
      </MathBlock>

      <p>
        where <InlineMath>A</InlineMath>, <InlineMath>B</InlineMath>,{' '}
        <InlineMath>C</InlineMath>, <InlineMath>D</InlineMath> are given constants.
      </p>

      <h3>The Jacobian for Linear Transformations</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The Jacobian determinant of a linear
        transformation is the constant:
        <MathBlock>
          {`J(u, v) = AD - BC`}
        </MathBlock>
        In order to have an inverse we assume that{' '}
        <InlineMath>{'AD - BC \\neq 0'}</InlineMath>. This assures us that the two
        linear equations can be solved for <InlineMath>u</InlineMath> and{' '}
        <InlineMath>v</InlineMath> in terms of <InlineMath>x</InlineMath> and{' '}
        <InlineMath>y</InlineMath>.
      </Callout>

      <p>
        Linear transformations carry parallel lines into parallel lines. Therefore
        the image of a rectangle in the <InlineMath>uv</InlineMath>-plane is a
        parallelogram in the <InlineMath>xy</InlineMath>-plane, and its area is
        that of the rectangle multiplied by the factor{' '}
        <InlineMath>{'|J(u, v)| = |AD - BC|'}</InlineMath>.
      </p>

      <h3>Transformation Formula</h3>

      <p>
        The transformation formula becomes:
      </p>
      <MathBlock>
        {`\\iint_S f(x, y) \\, dx \\, dy = |AD - BC| \\iint_T f(Au + Bv, Cu + Dv) \\, du \\, dv`}
      </MathBlock>

      <h3>Example</h3>

      <p>
        Consider the integral:
      </p>
      <MathBlock>
        {`\\iint_S e^{(y-x)/(y+x)} \\, dx \\, dy`}
      </MathBlock>

      <p>
        where <InlineMath>S</InlineMath> is the triangle bounded by the line{' '}
        <InlineMath>{'x + y = 2'}</InlineMath> and the two coordinate axes.
      </p>

      <p>
        The presence of <InlineMath>{'y - x'}</InlineMath> and{' '}
        <InlineMath>{'y + x'}</InlineMath> in the integrand suggests the change of
        variables:
      </p>
      <MathBlock>
        {`u = y - x, \\quad v = y + x`}
      </MathBlock>

      <p>
        Solving for <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> we
        find:
      </p>
      <MathBlock>
        {`x = \\frac{v - u}{2}, \\quad y = \\frac{v + u}{2}`}
      </MathBlock>

      <p>
        The Jacobian determinant is{' '}
        <InlineMath>{'J(u, v) = -\\frac{1}{2}'}</InlineMath>. To find the image{' '}
        <InlineMath>T</InlineMath> of <InlineMath>S</InlineMath> in the{' '}
        <InlineMath>uv</InlineMath>-plane we note that the lines{' '}
        <InlineMath>{'x = 0'}</InlineMath> and <InlineMath>{'y = 0'}</InlineMath>{' '}
        map onto the lines <InlineMath>{'u = v'}</InlineMath> and{' '}
        <InlineMath>{'u = -v'}</InlineMath>, respectively; the line{' '}
        <InlineMath>{'x + y = 2'}</InlineMath> maps onto the line{' '}
        <InlineMath>{'v = 2'}</InlineMath>.
      </p>

      <p>
        Points inside <InlineMath>S</InlineMath> satisfy{' '}
        <InlineMath>{'0 < x + y < 2'}</InlineMath> and these are carried into
        points of <InlineMath>T</InlineMath> satisfying{' '}
        <InlineMath>{'0 < v < 2'}</InlineMath>. Therefore the new region of
        integration <InlineMath>T</InlineMath> is a triangular region. The double
        integral becomes:
      </p>
      <MathBlock>
        {`\\iint_S e^{(y-x)/(y+x)} \\, dx \\, dy = \\frac{1}{2} \\iint_T e^{u/v} \\, du \\, dv`}
      </MathBlock>

      <p>
        Integrating first with respect to <InlineMath>u</InlineMath> we find:
      </p>
      <MathBlock>
        {`\\frac{1}{2} \\iint_T e^{u/v} \\, du \\, dv = \\frac{1}{2} \\int_0^2 \\left[ \\int_{-v}^v e^{u/v} \\, du \\right] dv = \\frac{1}{2} \\int_0^2 v\\left(e - \\frac{1}{e}\\right) dv = e - \\frac{1}{e}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Linear transformations are useful when the
        region of integration is bounded by lines that are not parallel to the
        coordinate axes, or when the integrand can be simplified by a linear change
        of variables.
      </Callout>
    </LessonLayout>
  );
}
