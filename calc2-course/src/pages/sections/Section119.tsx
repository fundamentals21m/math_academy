import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section119() {
  return (
    <LessonLayout sectionId={119}>
      <h2>Geometric Interpretation as Volume</h2>

      <p>
        Theorem 11.5 has a simple geometric interpretation that connects double
        integrals to volume.
      </p>

      <h3>The Ordinate Set</h3>

      <p>
        If <InlineMath>f</InlineMath> is nonnegative, the set <InlineMath>S</InlineMath>{' '}
        of points <InlineMath>(x, y, z)</InlineMath> in 3-space with{' '}
        <InlineMath>(x, y) \in Q</InlineMath> and{' '}
        <InlineMath>{'0 \\leq z \\leq f(x, y)'}</InlineMath> is called the{' '}
        <strong>ordinate set</strong> of <InlineMath>f</InlineMath> over{' '}
        <InlineMath>Q</InlineMath>.
      </p>

      <p>
        This set consists of those points between the rectangle{' '}
        <InlineMath>Q</InlineMath> (in the xy-plane) and the surface{' '}
        <InlineMath>{'z = f(x, y)'}</InlineMath>.
      </p>

      <h3>Cross-Sectional Area</h3>

      <p>
        For each <InlineMath>y</InlineMath> in the interval{' '}
        <InlineMath>[c, d]</InlineMath>, the integral:
      </p>
      <MathBlock>
        {`A(y) = \\int_a^b f(x, y) \\, dx`}
      </MathBlock>

      <p>
        is the area of the cross section of <InlineMath>S</InlineMath> cut by a plane
        parallel to the xz-plane (a vertical slice at height <InlineMath>y</InlineMath>).
      </p>

      <h3>Volume as a Double Integral</h3>

      <p>
        Since the cross-sectional area <InlineMath>{'A(y)'}</InlineMath> is integrable
        on <InlineMath>[c, d]</InlineMath>, a theorem from Volume I tells us that the
        integral <InlineMath>{'\\int_c^d A(y) \\, dy'}</InlineMath> equals{' '}
        <InlineMath>{'v(S)'}</InlineMath>, the volume of <InlineMath>S</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Volume Interpretation:</strong> For nonnegative integrands, Theorem
        11.5 shows that the volume of the ordinate set of <InlineMath>f</InlineMath>{' '}
        over <InlineMath>Q</InlineMath> is equal to the double integral:
        <MathBlock>
          {`v(S) = \\iint_Q f(x, y) \\, dx \\, dy`}
        </MathBlock>
      </Callout>

      <h3>Alternative Cross Sections</h3>

      <p>
        The formula with the order of integration reversed:
      </p>
      <MathBlock>
        {`\\iint_Q f(x, y) \\, dx \\, dy = \\int_a^b \\left[ \\int_c^d f(x, y) \\, dy \\right] dx`}
      </MathBlock>

      <p>
        gives another way of computing the volume of the ordinate set. This time we
        integrate the area of the cross sections cut by planes parallel to the yz-plane.
      </p>

      <h3>Example</h3>

      <p>
        If <InlineMath>{'Q = [-1, 1] \\times [0, \\pi/2]'}</InlineMath>, evaluate{' '}
        <InlineMath>{'\\iint_Q (x \\sin y - ye^x) \\, dx \\, dy'}</InlineMath>, given
        that the integral exists.
      </p>

      <p>
        <strong>Solution:</strong> Integrating first with respect to{' '}
        <InlineMath>x</InlineMath> and calling the result{' '}
        <InlineMath>{'A(y)'}</InlineMath>:
      </p>
      <MathBlock>
        {`A(y) = \\int_{-1}^1 (x \\sin y - ye^x) \\, dx = \\left[ \\frac{x^2}{2} \\sin y - ye^x \\right]_{x=-1}^{x=1} = -ey + y/e`}
      </MathBlock>

      <p>
        Applying Theorem 11.5:
      </p>
      <MathBlock>
        {`\\iint_Q (x \\sin y - ye^x) \\, dx \\, dy = \\int_0^{\\pi/2} A(y) \\, dy = \\int_0^{\\pi/2} (-ey + y/e) \\, dy`}
      </MathBlock>
      <MathBlock>
        {`= (1/e - e) \\int_0^{\\pi/2} y \\, dy = (1/e - e) \\cdot \\frac{\\pi^2}{8}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The geometric interpretation of the double
        integral as volume provides both intuition and a computational method. When{' '}
        <InlineMath>f</InlineMath> is nonnegative, the double integral computes the
        volume under the surface <InlineMath>{'z = f(x, y)'}</InlineMath> and above
        the region <InlineMath>Q</InlineMath>. Each order of integration corresponds
        to slicing the solid in a different direction.
      </Callout>
    </LessonLayout>
  );
}
