import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section135() {
  return (
    <LessonLayout sectionId={135}>
      <h2>Cylindrical Coordinates</h2>

      <p>
        Cylindrical coordinates provide a powerful tool for evaluating triple
        integrals, especially when the region of integration has cylindrical symmetry.
      </p>

      <h3>The Cylindrical Coordinate System</h3>

      <p>
        In cylindrical coordinates, we write <InlineMath>r</InlineMath>,{' '}
        <InlineMath>\theta</InlineMath>, <InlineMath>z</InlineMath> for{' '}
        <InlineMath>u</InlineMath>, <InlineMath>v</InlineMath>,{' '}
        <InlineMath>w</InlineMath> and define the mapping by the equations:
      </p>
      <MathBlock>
        {`x = r \\cos \\theta, \\quad y = r \\sin \\theta, \\quad z = z`}
      </MathBlock>

      <p>
        In other words, we replace <InlineMath>x</InlineMath> and{' '}
        <InlineMath>y</InlineMath> by their polar coordinates in the xy-plane and
        leave <InlineMath>z</InlineMath> unchanged.
      </p>

      <h3>The Jacobian for Cylindrical Coordinates</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The Jacobian determinant of the cylindrical
        coordinate mapping is:
        <MathBlock>
          {`J(r, \\theta, z) = \\begin{vmatrix} \\cos \\theta & \\sin \\theta & 0 \\\\ -r \\sin \\theta & r \\cos \\theta & 0 \\\\ 0 & 0 & 1 \\end{vmatrix} = r(\\cos^2 \\theta + \\sin^2 \\theta) = r`}
        </MathBlock>
      </Callout>

      <p>
        Therefore the transformation formula becomes:
      </p>
      <MathBlock>
        {`\\iiint_S f(x, y, z) \\, dx \\, dy \\, dz = \\iiint_T f(r \\cos \\theta, r \\sin \\theta, z) \\, r \\, dr \\, d\\theta \\, dz`}
      </MathBlock>

      <h3>Geometric Interpretation</h3>

      <p>
        To get a one-to-one mapping we must keep <InlineMath>{'r > 0'}</InlineMath>{' '}
        and restrict <InlineMath>\theta</InlineMath> to be in an interval of the
        form{' '}
        <InlineMath>{'\\theta_0 \\leq \\theta < \\theta_0 + 2\\pi'}</InlineMath>.
      </p>

      <p>
        The coordinate surfaces are:
      </p>
      <ul>
        <li>
          <InlineMath>{'r = '}</InlineMath> constant: vertical cylinders centered
          on the z-axis
        </li>
        <li>
          <InlineMath>{'\\theta = '}</InlineMath> constant: half-planes through
          the z-axis
        </li>
        <li>
          <InlineMath>{'z = '}</InlineMath> constant: horizontal planes
        </li>
      </ul>

      <p>
        A rectangular parallelepiped in <InlineMath>{'r\\theta z'}</InlineMath>-space
        is carried onto a solid whose boundaries are portions of cylinders, half-planes,
        and horizontal planes.
      </p>

      <h3>Example: Volume Inside a Paraboloid</h3>

      <p>
        Consider computing:
      </p>
      <MathBlock>
        {`\\iiint_S (x^2 + y^2) \\, dx \\, dy \\, dz`}
      </MathBlock>

      <p>
        where <InlineMath>S</InlineMath> is the solid bounded by the surface{' '}
        <InlineMath>{'x^2 + y^2 = 2z'}</InlineMath> and the plane{' '}
        <InlineMath>{'z = 2'}</InlineMath>.
      </p>

      <p>
        In cylindrical coordinates, <InlineMath>{'x^2 + y^2 = r^2'}</InlineMath>,
        so the paraboloid becomes <InlineMath>{'r^2 = 2z'}</InlineMath> or{' '}
        <InlineMath>{'z = r^2/2'}</InlineMath>. The integral becomes:
      </p>
      <MathBlock>
        {`\\iiint_T r^2 \\cdot r \\, dr \\, d\\theta \\, dz = \\int_0^{2\\pi} \\int_0^2 \\int_{r^2/2}^2 r^3 \\, dz \\, dr \\, d\\theta`}
      </MathBlock>

      <p>
        Evaluating the inner integral first:
      </p>
      <MathBlock>
        {`\\int_{r^2/2}^2 r^3 \\, dz = r^3 \\left(2 - \\frac{r^2}{2}\\right)`}
      </MathBlock>

      <p>
        Then:
      </p>
      <MathBlock>
        {`\\int_0^2 r^3 \\left(2 - \\frac{r^2}{2}\\right) dr = \\int_0^2 \\left(2r^3 - \\frac{r^5}{2}\\right) dr = \\left[\\frac{r^4}{2} - \\frac{r^6}{12}\\right]_0^2 = 8 - \\frac{64}{12} = \\frac{16}{3}`}
      </MathBlock>

      <p>
        Finally:
      </p>
      <MathBlock>
        {`\\int_0^{2\\pi} \\frac{16}{3} \\, d\\theta = \\frac{32\\pi}{3}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Cylindrical coordinates are ideal for regions
        bounded by cylinders or surfaces of revolution about the z-axis. The factor{' '}
        <InlineMath>r</InlineMath> in the Jacobian <InlineMath>{'|J| = r'}</InlineMath>{' '}
        is the same as in polar coordinates, reflecting that the xy-projection uses
        polar coordinates.
      </Callout>
    </LessonLayout>
  );
}
