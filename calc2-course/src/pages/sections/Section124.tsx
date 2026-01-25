import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section124() {
  return (
    <LessonLayout sectionId={124}>
      <h2>Further Applications: Mass, Center of Mass, and Moment of Inertia</h2>

      <p>
        Double integrals can be used to compute many physical quantities beyond
        area and volume. This section discusses mass, center of mass, and moment
        of inertia.
      </p>

      <h3>Mass of a Thin Plate</h3>

      <p>
        Consider a thin plate having the shape of a plane region{' '}
        <InlineMath>S</InlineMath>. Assume that matter is distributed over this plate
        with a known <strong>density</strong> (mass per unit area). By this we mean
        that there is a nonnegative function <InlineMath>f</InlineMath> defined on{' '}
        <InlineMath>S</InlineMath>, where <InlineMath>{'f(x, y)'}</InlineMath>{' '}
        represents the mass per unit area at the point <InlineMath>(x, y)</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> If the density function <InlineMath>f</InlineMath>{' '}
        is integrable over <InlineMath>S</InlineMath>, we define the{' '}
        <strong>total mass</strong> <InlineMath>{'m(S)'}</InlineMath> of the plate by:
        <MathBlock>
          {`m(S) = \\iint_S f(x, y) \\, dx \\, dy`}
        </MathBlock>
      </Callout>

      <h3>Average Density</h3>

      <p>
        The quotient:
      </p>
      <MathBlock>
        {`\\frac{\\text{mass}}{\\text{area}} = \\frac{\\iint_S f(x, y) \\, dx \\, dy}{\\iint_S dx \\, dy}`}
      </MathBlock>

      <p>
        is called the <strong>average density</strong> of the plate. If{' '}
        <InlineMath>S</InlineMath> is thought of as a geometric configuration rather
        than a thin plate, this quotient is called the <strong>average</strong> or{' '}
        <strong>mean value</strong> of the function <InlineMath>f</InlineMath> over
        the region <InlineMath>S</InlineMath>.
      </p>

      <h3>Center of Mass</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>center of mass</strong> of the plate
        is the point <InlineMath>{'(\\bar{x}, \\bar{y})'}</InlineMath> determined by:
        <MathBlock>
          {`\\bar{x} \\cdot m(S) = \\iint_S x f(x, y) \\, dx \\, dy`}
        </MathBlock>
        <MathBlock>
          {`\\bar{y} \\cdot m(S) = \\iint_S y f(x, y) \\, dx \\, dy`}
        </MathBlock>
        The integrals on the right are called the <strong>moments</strong> of the
        plate about the y-axis and x-axis, respectively.
      </Callout>

      <h3>Centroid</h3>

      <p>
        When the density is constant, say <InlineMath>{'f(x, y) = c'}</InlineMath>,
        a factor <InlineMath>c</InlineMath> cancels and we obtain:
      </p>
      <MathBlock>
        {`\\bar{x} \\cdot a(S) = \\iint_S x \\, dx \\, dy, \\quad \\bar{y} \\cdot a(S) = \\iint_S y \\, dx \\, dy`}
      </MathBlock>

      <p>
        where <InlineMath>{'a(S)'}</InlineMath> is the area of{' '}
        <InlineMath>S</InlineMath>. In this case, the point{' '}
        <InlineMath>{'(\\bar{x}, \\bar{y})'}</InlineMath> is called the{' '}
        <strong>centroid</strong> of the plate (or of the region{' '}
        <InlineMath>S</InlineMath>).
      </p>

      <h3>Moment of Inertia</h3>

      <Callout type="info">
        <strong>Definition:</strong> If <InlineMath>L</InlineMath> is a line in the
        plane of the plate, let <InlineMath>{'\\delta(x, y)'}</InlineMath> denote the
        perpendicular distance from a point <InlineMath>(x, y)</InlineMath> in{' '}
        <InlineMath>S</InlineMath> to the line <InlineMath>L</InlineMath>. The{' '}
        <strong>moment of inertia</strong> of the plate about{' '}
        <InlineMath>L</InlineMath> is:
        <MathBlock>
          {`I_L = \\iint_S \\delta^2(x, y) f(x, y) \\, dx \\, dy`}
        </MathBlock>
      </Callout>

      <p>
        The moments of inertia about the x- and y-axes are denoted{' '}
        <InlineMath>I_x</InlineMath> and <InlineMath>I_y</InlineMath>:
      </p>
      <MathBlock>
        {`I_x = \\iint_S y^2 f(x, y) \\, dx \\, dy, \\quad I_y = \\iint_S x^2 f(x, y) \\, dx \\, dy`}
      </MathBlock>

      <p>
        The sum is called the <strong>polar moment of inertia</strong>{' '}
        <InlineMath>I_0</InlineMath> about the origin:
      </p>
      <MathBlock>
        {`I_0 = I_x + I_y = \\iint_S (x^2 + y^2) f(x, y) \\, dx \\, dy`}
      </MathBlock>

      <h3>Example</h3>

      <p>
        Determine the centroid of the plane region bounded by one arch of a sine
        curve: <InlineMath>S</InlineMath> bounded by <InlineMath>{'y = \\sin x'}</InlineMath>{' '}
        and the interval <InlineMath>{'0 \\leq x \\leq \\pi'}</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> By symmetry, <InlineMath>{'\\bar{x} = \\pi/2'}</InlineMath>.
        The y-coordinate <InlineMath>{'\\bar{y}'}</InlineMath> is given by:
      </p>
      <MathBlock>
        {`\\bar{y} = \\frac{\\iint_S y \\, dx \\, dy}{\\iint_S dx \\, dy} = \\frac{\\int_0^\\pi [\\int_0^{\\sin x} y \\, dy] dx}{\\int_0^\\pi \\sin x \\, dx} = \\frac{\\int_0^\\pi \\frac{1}{2} \\sin^2 x \\, dx}{2} = \\frac{\\pi}{8}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Double integrals compute physical properties
        of planar objects: total mass (integral of density), center of mass (weighted
        average position), and moment of inertia (integral of squared distance times
        density). These concepts are fundamental in mechanics and engineering. The
        mass and center of mass are independent of the coordinate system; moments
        of inertia depend on the axis chosen.
      </Callout>
    </LessonLayout>
  );
}
