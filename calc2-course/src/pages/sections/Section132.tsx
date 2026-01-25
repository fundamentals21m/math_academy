import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section132() {
  return (
    <LessonLayout sectionId={132}>
      <h2>Polar Coordinates</h2>

      <p>
        Polar coordinates provide one of the most important applications of the
        change of variables formula for double integrals.
      </p>

      <h3>The Polar Coordinate Transformation</h3>

      <p>
        In this case we write <InlineMath>r</InlineMath> and{' '}
        <InlineMath>\theta</InlineMath> instead of <InlineMath>u</InlineMath> and{' '}
        <InlineMath>v</InlineMath> and describe the mapping by the two equations:
      </p>
      <MathBlock>
        {`x = r \\cos \\theta, \\quad y = r \\sin \\theta`}
      </MathBlock>

      <p>
        That is, <InlineMath>{'X(r, \\theta) = r \\cos \\theta'}</InlineMath> and{' '}
        <InlineMath>{'Y(r, \\theta) = r \\sin \\theta'}</InlineMath>. To obtain a
        one-to-one mapping we keep <InlineMath>{'r > 0'}</InlineMath> and restrict{' '}
        <InlineMath>\theta</InlineMath> to lie in an interval of the form{' '}
        <InlineMath>{'\\theta_0 \\leq \\theta < \\theta_0 + 2\\pi'}</InlineMath>.
      </p>

      <h3>The Jacobian for Polar Coordinates</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The Jacobian determinant of the polar coordinate
        mapping is:
        <MathBlock>
          {`J(r, \\theta) = \\begin{vmatrix} \\frac{\\partial x}{\\partial r} & \\frac{\\partial y}{\\partial r} \\\\ \\frac{\\partial x}{\\partial \\theta} & \\frac{\\partial y}{\\partial \\theta} \\end{vmatrix} = \\begin{vmatrix} \\cos \\theta & \\sin \\theta \\\\ -r \\sin \\theta & r \\cos \\theta \\end{vmatrix} = r(\\cos^2 \\theta + \\sin^2 \\theta) = r`}
        </MathBlock>
      </Callout>

      <p>
        Hence the transformation formula becomes:
      </p>
      <MathBlock>
        {`\\iint_S f(x, y) \\, dx \\, dy = \\iint_T f(r \\cos \\theta, r \\sin \\theta) \\, r \\, dr \\, d\\theta`}
      </MathBlock>

      <h3>Geometric Interpretation</h3>

      <p>
        The r-curves are straight lines through the origin and the{' '}
        <InlineMath>\theta</InlineMath>-curves are circles centered at the origin.
        The image of a rectangle in the <InlineMath>{'r\\theta'}</InlineMath>-plane
        is a "parallelogram" in the <InlineMath>xy</InlineMath>-plane bounded by two
        radial lines and two circular arcs.
      </p>

      <p>
        The Jacobian determinant vanishes when <InlineMath>{'r = 0'}</InlineMath>,
        but this does not affect the validity of the transformation formula because
        the set of points with <InlineMath>{'r = 0'}</InlineMath> has content zero.
      </p>

      <h3>Example: Volume of One Octant of a Sphere</h3>

      <p>
        Consider the integral for the volume of one octant of a sphere of radius{' '}
        <InlineMath>a</InlineMath>:
      </p>
      <MathBlock>
        {`\\iint_S \\sqrt{a^2 - x^2 - y^2} \\, dx \\, dy`}
      </MathBlock>

      <p>
        where the region <InlineMath>S</InlineMath> is the first quadrant of the
        circular disk <InlineMath>{'x^2 + y^2 \\leq a^2'}</InlineMath>. In polar
        coordinates the integral becomes:
      </p>
      <MathBlock>
        {`\\iint_T \\sqrt{a^2 - r^2} \\, r \\, dr \\, d\\theta`}
      </MathBlock>

      <p>
        where the region of integration <InlineMath>T</InlineMath> is now a
        rectangle{' '}
        <InlineMath>{'[0, a] \\times [0, \\frac{\\pi}{2}]'}</InlineMath>.
        Integrating first with respect to <InlineMath>\theta</InlineMath> and then
        with respect to <InlineMath>r</InlineMath> we obtain:
      </p>
      <MathBlock>
        {`\\iint_T \\sqrt{a^2 - r^2} \\, r \\, dr \\, d\\theta = \\frac{\\pi}{2} \\int_0^a r\\sqrt{a^2 - r^2} \\, dr = \\frac{\\pi}{2} \\cdot \\frac{(a^2 - r^2)^{3/2}}{-3} \\Big|_0^a = \\frac{\\pi a^3}{6}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Polar coordinates are particularly suitable
        when the region of integration has boundaries along which{' '}
        <InlineMath>r</InlineMath> or <InlineMath>\theta</InlineMath> is constant.
        The same result can be obtained by integrating in rectangular coordinates,
        but the calculation is usually more complicated.
      </Callout>
    </LessonLayout>
  );
}
