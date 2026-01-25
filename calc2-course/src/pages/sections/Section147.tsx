import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section147() {
  return (
    <LessonLayout sectionId={147}>
      <h2>The Divergence Theorem (Gauss' Theorem)</h2>

      <p>
        While Stokes' theorem relates a surface integral to a line integral,
        the <strong>divergence theorem</strong> relates a triple integral over
        a solid to a surface integral over its boundary.
      </p>

      <h3>Statement of the Theorem</h3>

      <Callout type="info">
        <strong>Theorem (Divergence Theorem):</strong> Let{' '}
        <InlineMath>V</InlineMath> be a solid in 3-space bounded by an orientable
        closed surface <InlineMath>S</InlineMath>, and let{' '}
        <InlineMath>{`\\mathbf{n}`}</InlineMath> be the unit outer normal to{' '}
        <InlineMath>S</InlineMath>. If{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath> is a continuously differentiable
        vector field defined on <InlineMath>V</InlineMath>, we have:
        <MathBlock>
          {`\\iiint_V (\\text{div} \\, \\mathbf{F}) \\, dx \\, dy \\, dz = \\iint_S \\mathbf{F} \\cdot \\mathbf{n} \\, dS`}
        </MathBlock>
      </Callout>

      <h3>Component Form</h3>

      <p>
        If{' '}
        <InlineMath>{`\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}`}</InlineMath>{' '}
        and{' '}
        <InlineMath>{`\\mathbf{n} = \\cos\\alpha \\, \\mathbf{i} + \\cos\\beta \\, \\mathbf{j} + \\cos\\gamma \\, \\mathbf{k}`}</InlineMath>,
        the theorem becomes:
      </p>
      <MathBlock>
        {`\\iiint_V \\left( \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z} \\right) dx \\, dy \\, dz = \\iint_S (P \\cos \\alpha + Q \\cos \\beta + R \\cos \\gamma) \\, dS`}
      </MathBlock>

      <h3>Proof Outline</h3>

      <p>
        The proof proceeds by establishing three separate equations:
      </p>
      <MathBlock>
        {`\\iiint_V \\frac{\\partial P}{\\partial x} \\, dx \\, dy \\, dz = \\iint_S P \\cos \\alpha \\, dS`}
      </MathBlock>
      <MathBlock>
        {`\\iiint_V \\frac{\\partial Q}{\\partial y} \\, dx \\, dy \\, dz = \\iint_S Q \\cos \\beta \\, dS`}
      </MathBlock>
      <MathBlock>
        {`\\iiint_V \\frac{\\partial R}{\\partial z} \\, dx \\, dy \\, dz = \\iint_S R \\cos \\gamma \\, dS`}
      </MathBlock>

      <p>
        Adding these gives the divergence theorem.
      </p>

      <h3>xy-Projectable Solids</h3>

      <p>
        The proof of the third equation works for solids{' '}
        <InlineMath>V</InlineMath> that are <strong>xy-projectable</strong>:
        sets of points <InlineMath>{`(x, y, z)`}</InlineMath> satisfying:
      </p>
      <MathBlock>
        {`g(x, y) \\leq z \\leq f(x, y) \\quad \\text{for} \\quad (x, y) \\in T`}
      </MathBlock>

      <p>
        where <InlineMath>T</InlineMath> is the projection of{' '}
        <InlineMath>V</InlineMath> onto the xy-plane. The boundary consists of
        an upper cap <InlineMath>{`S_1`}</InlineMath> given by{' '}
        <InlineMath>{`z = f(x, y)`}</InlineMath>, a lower part{' '}
        <InlineMath>{`S_2`}</InlineMath> given by{' '}
        <InlineMath>{`z = g(x, y)`}</InlineMath>, and possibly a lateral surface.
      </p>

      <h3>Extension to General Solids</h3>

      <p>
        The divergence theorem holds for all solids projectable onto all three
        coordinate planes, including all convex solids (spheres, ellipsoids,
        cubes).
      </p>

      <p>
        For non-convex solids like a torus, we cut the solid into pieces,
        apply the theorem to each piece, and add. The triple integral over the
        whole solid equals the sum over pieces. Surface integrals over common
        faces cancel (due to opposite outward normals), leaving only the
        integral over the outer boundary.
      </p>

      <h3>Example: Unit Cube</h3>

      <p>
        Let <InlineMath>S</InlineMath> be the surface of the unit cube{' '}
        <InlineMath>{`0 \\leq x, y, z \\leq 1`}</InlineMath>, and let{' '}
        <InlineMath>{`\\mathbf{F}(x, y, z) = x^2\\mathbf{i} + y^2\\mathbf{j} + z^2\\mathbf{k}`}</InlineMath>.
      </p>

      <p>
        The divergence is:
      </p>
      <MathBlock>
        {`\\text{div} \\, \\mathbf{F} = 2x + 2y + 2z`}
      </MathBlock>

      <p>
        The triple integral:
      </p>
      <MathBlock>
        {`\\iiint_V (2x + 2y + 2z) \\, dx \\, dy \\, dz = \\int_0^1 \\int_0^1 \\int_0^1 (2x + 2y + 2z) \\, dz \\, dy \\, dx = 3`}
      </MathBlock>

      <p>
        This equals the surface integral{' '}
        <InlineMath>{`\\iint_S \\mathbf{F} \\cdot \\mathbf{n} \\, dS`}</InlineMath>,
        which can be verified by computing the integral over each of the six faces.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The divergence theorem relates the "flow"
        of a vector field out of a closed surface to the total "source strength"
        (divergence) inside. In physics, it expresses conservation laws:
        the net flux through a closed surface equals the total production rate
        inside.
      </Callout>
    </LessonLayout>
  );
}
