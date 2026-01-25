import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section146() {
  return (
    <LessonLayout sectionId={146}>
      <h2>Extensions of Stokes' Theorem</h2>

      <p>
        Stokes' theorem can be extended to more general surfaces than simple
        smooth parametric surfaces. We examine several important cases.
      </p>

      <h3>Multiply Connected Regions</h3>

      <p>
        If <InlineMath>T</InlineMath> is a multiply connected region (with
        holes), the one-to-one image{' '}
        <InlineMath>{`S = \\mathbf{r}(T)`}</InlineMath> will contain the same
        number of holes. To extend Stokes' theorem to such surfaces, we use
        Green's theorem for multiply connected regions.
      </p>

      <p>
        For a region with two holes bounded by curves{' '}
        <InlineMath>{`\\Gamma`}</InlineMath>,{' '}
        <InlineMath>{`\\Gamma_1`}</InlineMath>, and{' '}
        <InlineMath>{`\\Gamma_2`}</InlineMath>, the identity becomes:
      </p>
      <MathBlock>
        {`\\iint_S (\\text{curl} \\, \\mathbf{F}) \\cdot \\mathbf{n} \\, dS = \\oint_C \\mathbf{F} \\cdot d\\boldsymbol{\\rho} + \\oint_{C_1} \\mathbf{F} \\cdot d\\boldsymbol{\\rho_1} + \\oint_{C_2} \\mathbf{F} \\cdot d\\boldsymbol{\\rho_2}`}
      </MathBlock>

      <p>
        where <InlineMath>C</InlineMath>, <InlineMath>{`C_1`}</InlineMath>, and{' '}
        <InlineMath>{`C_2`}</InlineMath> are the images of the boundary curves.
      </p>

      <h3>Extension to a Cylinder</h3>

      <p>
        Consider a cylinder as the union of two simple smooth parametric surfaces{' '}
        <InlineMath>{`S_1`}</InlineMath> and <InlineMath>{`S_2`}</InlineMath>.
        Applying Stokes' theorem to each piece and adding:
      </p>
      <MathBlock>
        {`\\iint_{S_1} (\\text{curl} \\, \\mathbf{F}) \\cdot \\mathbf{n_1} \\, dS + \\iint_{S_2} (\\text{curl} \\, \\mathbf{F}) \\cdot \\mathbf{n_2} \\, dS = \\oint_{C_1} \\mathbf{F} \\cdot d\\boldsymbol{\\rho_1} + \\oint_{C_2} \\mathbf{F} \\cdot d\\boldsymbol{\\rho_2}`}
      </MathBlock>

      <p>
        For a cylinder, the mappings can be chosen so that the directions on the
        intersection <InlineMath>{`C_1 \\cap C_2`}</InlineMath> are opposite,
        causing line integrals along those arcs to cancel. This leaves:
      </p>
      <MathBlock>
        {`\\iint_{S_1 \\cup S_2} (\\text{curl} \\, \\mathbf{F}) \\cdot \\mathbf{n} \\, dS = \\oint_{C_1^{\\prime}} \\mathbf{F} \\cdot d\\boldsymbol{\\rho_1} + \\oint_{C_2^{\\prime}} \\mathbf{F} \\cdot d\\boldsymbol{\\rho_2}`}
      </MathBlock>

      <p>
        where <InlineMath>{`C_1^\\prime`}</InlineMath> and{' '}
        <InlineMath>{`C_2^\\prime`}</InlineMath> are the upper and lower edges
        forming the <strong>complete boundary</strong> of{' '}
        <InlineMath>{`S_1 \\cup S_2`}</InlineMath>.
      </p>

      <h3>Orientable vs. Nonorientable Surfaces</h3>

      <Callout type="info">
        <strong>Definition:</strong> A surface is <strong>orientable</strong> if
        a unit normal vector can be defined continuously over the entire surface.
        For a nonorientable surface, no such continuous normal definition is
        possible.
      </Callout>

      <p>
        A paper model of an orientable surface has two sides that can be painted
        with different colors. A <strong>Mobius band</strong> is the classic
        example of a nonorientable surface—it has only one side.
      </p>

      <p>
        <strong>Stokes' theorem cannot be extended to a Mobius band.</strong> On
        such surfaces, it is impossible to choose parametrizations so that the
        line integrals along intersection arcs cancel appropriately.
      </p>

      <h3>Closed Surfaces (Spheres)</h3>

      <p>
        A sphere is orientable and <strong>closed</strong> (has no boundary).
        It can be written as the union of two hemispheres{' '}
        <InlineMath>{`S_1`}</InlineMath> and <InlineMath>{`S_2`}</InlineMath>{' '}
        whose boundaries are completely matched along the equator.
      </p>

      <p>
        Applying Stokes' theorem to each hemisphere and adding, the line
        integrals cancel completely (since they traverse the equator in opposite
        directions), leaving:
      </p>
      <MathBlock>
        {`\\iint_{S_1 \\cup S_2} (\\text{curl} \\, \\mathbf{F}) \\cdot \\mathbf{n} \\, dS = 0`}
      </MathBlock>

      <Callout type="info">
        <strong>Theorem:</strong> For any orientable closed surface{' '}
        <InlineMath>S</InlineMath>:
        <MathBlock>
          {`\\iint_S (\\text{curl} \\, \\mathbf{F}) \\cdot \\mathbf{n} \\, dS = 0`}
        </MathBlock>
      </Callout>

      <p>
        This result is consistent with the divergence theorem (to be discussed
        next), since{' '}
        <InlineMath>{`\\text{div}(\\text{curl } \\mathbf{F}) = 0`}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Stokes' theorem extends naturally to
        orientable surfaces built from simple pieces. The key requirement is
        that the surface be orientable—a continuous normal must exist. For
        closed orientable surfaces, the surface integral of the curl is always
        zero.
      </Callout>
    </LessonLayout>
  );
}
