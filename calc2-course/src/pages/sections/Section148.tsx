import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section148() {
  return (
    <LessonLayout sectionId={148}>
      <h2>Applications of the Divergence Theorem</h2>

      <p>
        The divergence theorem provides coordinate-free formulas for the
        divergence and curl, giving physical interpretations of these operators.
      </p>

      <h3>Coordinate-Free Definition of Divergence</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Let <InlineMath>{`V(t)`}</InlineMath> be a solid
        sphere of radius <InlineMath>{`t > 0`}</InlineMath> with center at a
        point <InlineMath>{`\\mathbf{a}`}</InlineMath> in 3-space, and let{' '}
        <InlineMath>{`S(t)`}</InlineMath> denote its boundary. If{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath> is continuously differentiable
        on <InlineMath>{`V(t)`}</InlineMath>, then:
        <MathBlock>
          {`\\text{div} \\, \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\frac{1}{|V(t)|} \\iint_{S(t)} \\mathbf{F} \\cdot \\mathbf{n} \\, dS`}
        </MathBlock>
        where <InlineMath>{`|V(t)|`}</InlineMath> denotes the volume and{' '}
        <InlineMath>{`\\mathbf{n}`}</InlineMath> is the unit outer normal.
      </Callout>

      <h3>Physical Interpretation of Divergence</h3>

      <p>
        If <InlineMath>{`\\mathbf{F}`}</InlineMath> represents the flux density
        vector of a steady flow, the surface integral{' '}
        <InlineMath>{`\\iint_{S(t)} \\mathbf{F} \\cdot \\mathbf{n} \\, dS`}</InlineMath>{' '}
        measures the total mass of fluid flowing through{' '}
        <InlineMath>{`S(t)`}</InlineMath> per unit time in the direction of{' '}
        <InlineMath>{`\\mathbf{n}`}</InlineMath>.
      </p>

      <p>
        The quotient{' '}
        <InlineMath>{`\\iint_{S(t)} \\mathbf{F} \\cdot \\mathbf{n} \\, dS / |V(t)|`}</InlineMath>{' '}
        represents the mass per unit volume flowing through{' '}
        <InlineMath>{`S(t)`}</InlineMath> per unit time. As{' '}
        <InlineMath>{`t \\to 0`}</InlineMath>, this approaches{' '}
        <InlineMath>{`\\text{div } \\mathbf{F}(\\mathbf{a})`}</InlineMath>.
      </p>

      <p>
        Thus, <strong>the divergence at a point represents the rate of mass
        creation (or destruction) per unit volume at that point</strong>.
      </p>

      <h3>Coordinate-Free Definition of Curl</h3>

      <p>
        There is an analogous formula for the curl:
      </p>
      <MathBlock>
        {`\\text{curl} \\, \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\frac{1}{|V(t)|} \\iint_{S(t)} \\mathbf{n} \\times \\mathbf{F} \\, dS`}
      </MathBlock>

      <p>
        There is also a formula involving a disk and line integral:
      </p>
      <MathBlock>
        {`\\mathbf{n} \\cdot \\text{curl} \\, \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\frac{1}{|S(t)|} \\oint_{C(t)} \\mathbf{F} \\cdot d\\boldsymbol{\\alpha}`}
      </MathBlock>

      <p>
        where <InlineMath>{`S(t)`}</InlineMath> is a circular disk of radius{' '}
        <InlineMath>t</InlineMath> centered at{' '}
        <InlineMath>{`\\mathbf{a}`}</InlineMath>,{' '}
        <InlineMath>{`C(t)`}</InlineMath> is its boundary, and{' '}
        <InlineMath>{`|S(t)|`}</InlineMath> is the area.
      </p>

      <h3>Physical Interpretation of Curl</h3>

      <p>
        If <InlineMath>{`\\mathbf{F}`}</InlineMath> is a velocity field, the
        line integral over <InlineMath>{`C(t)`}</InlineMath> is called the{' '}
        <strong>circulation</strong> of <InlineMath>{`\\mathbf{F}`}</InlineMath>{' '}
        along <InlineMath>{`C(t)`}</InlineMath>. The limit represents the
        circulation per unit area at point{' '}
        <InlineMath>{`\\mathbf{a}`}</InlineMath>.
      </p>

      <p>
        Thus,{' '}
        <InlineMath>{`\\mathbf{n} \\cdot \\text{curl } \\mathbf{F}(\\mathbf{a})`}</InlineMath>{' '}
        is a <strong>"circulation density"</strong> at{' '}
        <InlineMath>{`\\mathbf{a}`}</InlineMath> with respect to a plane
        perpendicular to <InlineMath>{`\\mathbf{n}`}</InlineMath>.
      </p>

      <h3>Green's Identities</h3>

      <p>
        Applying the divergence theorem to special vector fields yields
        important identities. Let <InlineMath>f</InlineMath> and{' '}
        <InlineMath>g</InlineMath> be scalar fields with continuous derivatives,
        and let <InlineMath>{`\\partial f/\\partial n`}</InlineMath> denote the
        directional derivative in the direction of the outer normal.
      </p>

      <Callout type="info">
        <strong>Green's First Identity:</strong>
        <MathBlock>
          {`\\iint_S f \\frac{\\partial g}{\\partial n} \\, dS = \\iiint_V (f \\nabla^2 g + \\nabla f \\cdot \\nabla g) \\, dx \\, dy \\, dz`}
        </MathBlock>
      </Callout>

      <Callout type="info">
        <strong>Green's Second Identity:</strong>
        <MathBlock>
          {`\\iint_S \\left( f \\frac{\\partial g}{\\partial n} - g \\frac{\\partial f}{\\partial n} \\right) dS = \\iiint_V (f \\nabla^2 g - g \\nabla^2 f) \\, dx \\, dy \\, dz`}
        </MathBlock>
      </Callout>

      <h3>Harmonic Functions</h3>

      <p>
        If <InlineMath>f</InlineMath> is harmonic in <InlineMath>V</InlineMath>{' '}
        (i.e., <InlineMath>{`\\nabla^2 f = 0`}</InlineMath>), then:
      </p>
      <MathBlock>
        {`\\iint_S \\frac{\\partial f}{\\partial n} \\, dS = 0`}
      </MathBlock>

      <p>
        This says that the net flux of the gradient of a harmonic function
        through any closed surface is zero.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The coordinate-free definitions of
        divergence and curl reveal their intrinsic geometric meanings: divergence
        measures the rate of expansion/contraction of a flow, while the curl
        measures local rotation. These interpretations are independent of the
        choice of coordinate system, making them fundamental in physics and
        differential geometry.
      </Callout>
    </LessonLayout>
  );
}
