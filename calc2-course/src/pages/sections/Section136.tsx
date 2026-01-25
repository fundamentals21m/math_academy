import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section136() {
  return (
    <LessonLayout sectionId={136}>
      <h2>Spherical Coordinates</h2>

      <p>
        Spherical coordinates are particularly useful for triple integrals over
        spherical regions or regions with spherical symmetry.
      </p>

      <h3>The Spherical Coordinate System</h3>

      <p>
        In spherical coordinates, we use the symbols{' '}
        <InlineMath>\rho</InlineMath>, <InlineMath>\theta</InlineMath>,{' '}
        <InlineMath>\varphi</InlineMath> and define the mapping by the equations:
      </p>
      <MathBlock>
        {`x = \\rho \\cos \\theta \\sin \\varphi, \\quad y = \\rho \\sin \\theta \\sin \\varphi, \\quad z = \\rho \\cos \\varphi`}
      </MathBlock>

      <h3>Geometric Meaning of the Coordinates</h3>

      <p>
        The coordinate surfaces are:
      </p>
      <ul>
        <li>
          <InlineMath>{'\\rho = '}</InlineMath> constant: spheres centered at the
          origin
        </li>
        <li>
          <InlineMath>{'\\theta = '}</InlineMath> constant: half-planes passing
          through the z-axis
        </li>
        <li>
          <InlineMath>{'\\varphi = '}</InlineMath> constant: circular cones with
          their axes along the z-axis
        </li>
      </ul>

      <p>
        To get a one-to-one mapping we keep <InlineMath>{'\\rho > 0'}</InlineMath>,{' '}
        <InlineMath>{'0 \\leq \\theta < 2\\pi'}</InlineMath>, and{' '}
        <InlineMath>{'0 \\leq \\varphi < \\pi'}</InlineMath>.
      </p>

      <h3>The Jacobian for Spherical Coordinates</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The Jacobian determinant of the spherical
        coordinate mapping is:
        <MathBlock>
          {`J(\\rho, \\theta, \\varphi) = \\begin{vmatrix} \\cos \\theta \\sin \\varphi & \\sin \\theta \\sin \\varphi & \\cos \\varphi \\\\ -\\rho \\sin \\theta \\sin \\varphi & \\rho \\cos \\theta \\sin \\varphi & 0 \\\\ \\rho \\cos \\theta \\cos \\varphi & \\rho \\sin \\theta \\cos \\varphi & -\\rho \\sin \\varphi \\end{vmatrix} = -\\rho^2 \\sin \\varphi`}
        </MathBlock>
      </Callout>

      <p>
        Since <InlineMath>{'\\sin \\varphi \\geq 0'}</InlineMath> if{' '}
        <InlineMath>{'0 \\leq \\varphi < \\pi'}</InlineMath>, we have{' '}
        <InlineMath>{'|J(\\rho, \\theta, \\varphi)| = \\rho^2 \\sin \\varphi'}</InlineMath>.
      </p>

      <h3>Transformation Formula</h3>

      <p>
        The formula for transforming triple integrals becomes:
      </p>
      <MathBlock>
        {`\\iiint_S f(x, y, z) \\, dx \\, dy \\, dz = \\iiint_T F(\\rho, \\theta, \\varphi) \\rho^2 \\sin \\varphi \\, d\\rho \\, d\\theta \\, d\\varphi`}
      </MathBlock>

      <p>
        where{' '}
        <InlineMath>{'F(\\rho, \\theta, \\varphi) = f(\\rho \\cos \\theta \\sin \\varphi, \\rho \\sin \\theta \\sin \\varphi, \\rho \\cos \\varphi)'}</InlineMath>.
      </p>

      <h3>Example: Volume of a Solid Sphere</h3>

      <p>
        To compute the volume of a solid sphere of radius <InlineMath>a</InlineMath>{' '}
        centered at the origin:
      </p>
      <MathBlock>
        {`V = \\iiint_S dx \\, dy \\, dz`}
      </MathBlock>

      <p>
        where <InlineMath>{'S = \\{(x, y, z) \\mid x^2 + y^2 + z^2 \\leq a^2\\}'}</InlineMath>.
        In spherical coordinates:
      </p>
      <MathBlock>
        {`V = \\int_0^{2\\pi} \\int_0^{\\pi} \\int_0^a \\rho^2 \\sin \\varphi \\, d\\rho \\, d\\varphi \\, d\\theta`}
      </MathBlock>

      <p>
        Evaluating:
      </p>
      <MathBlock>
        {`V = \\int_0^{2\\pi} d\\theta \\int_0^{\\pi} \\sin \\varphi \\, d\\varphi \\int_0^a \\rho^2 \\, d\\rho = 2\\pi \\cdot 2 \\cdot \\frac{a^3}{3} = \\frac{4\\pi a^3}{3}`}
      </MathBlock>

      <h3>Example: Mass of a Sphere with Variable Density</h3>

      <p>
        Suppose a solid sphere of radius <InlineMath>a</InlineMath> has density
        at each point proportional to the distance from the center, say{' '}
        <InlineMath>{'\\rho(x, y, z) = k\\sqrt{x^2 + y^2 + z^2}'}</InlineMath>.
        In spherical coordinates the density is simply{' '}
        <InlineMath>{'k\\rho'}</InlineMath>. The mass is:
      </p>
      <MathBlock>
        {`M = \\iiint_S k\\rho \\cdot \\rho^2 \\sin \\varphi \\, d\\rho \\, d\\varphi \\, d\\theta = k \\int_0^{2\\pi} d\\theta \\int_0^{\\pi} \\sin \\varphi \\, d\\varphi \\int_0^a \\rho^3 \\, d\\rho = k \\cdot 2\\pi \\cdot 2 \\cdot \\frac{a^4}{4} = \\pi k a^4`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Spherical coordinates are ideal for regions
        bounded by spheres or cones. The factor{' '}
        <InlineMath>{'\\rho^2 \\sin \\varphi'}</InlineMath> in the Jacobian has a
        geometric interpretation: <InlineMath>{'\\rho^2'}</InlineMath> accounts for
        radial scaling and <InlineMath>{'\\sin \\varphi'}</InlineMath> accounts
        for the varying circumference of latitude circles.
      </Callout>
    </LessonLayout>
  );
}
