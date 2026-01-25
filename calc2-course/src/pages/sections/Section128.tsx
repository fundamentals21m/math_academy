import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section128() {
  return (
    <LessonLayout sectionId={128}>
      <h2>Simply Connected Sets and the Gradient Condition</h2>

      <p>
        Let <InlineMath>{'f(x, y) = P(x, y)\\mathbf{i} + Q(x, y)\\mathbf{j}'}</InlineMath>{' '}
        be a vector field that is continuously differentiable on an open set{' '}
        <InlineMath>{'S'}</InlineMath> in the plane. If <InlineMath>{'f'}</InlineMath> is a
        gradient on <InlineMath>{'S'}</InlineMath>, we have:
      </p>
      <MathBlock>{`\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}`}</MathBlock>

      <p>
        everywhere on <InlineMath>{'S'}</InlineMath>. In other words, this condition is{' '}
        <strong>necessary</strong> for <InlineMath>{'f'}</InlineMath> to be a gradient.
      </p>

      <h3>The Condition Is Not Always Sufficient</h3>

      <p>
        As we have already noted, this condition is not sufficient in general. For
        example, the vector field:
      </p>
      <MathBlock>{`f(x, y) = \\frac{-y}{x^2 + y^2} \\mathbf{i} + \\frac{x}{x^2 + y^2} \\mathbf{j}`}</MathBlock>

      <p>
        satisfies <InlineMath>{'\\partial P/\\partial y = \\partial Q/\\partial x'}</InlineMath>{' '}
        everywhere on the set <InlineMath>{'S = \\mathbb{R}^2 - \\{(0, 0)\\}'}</InlineMath>,
        but <InlineMath>{'f'}</InlineMath> is <strong>not</strong> a gradient on{' '}
        <InlineMath>{'S'}</InlineMath>.
      </p>

      <h3>Simply Connected Sets</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>{'S'}</InlineMath> be an open connected
        set in the plane. Then <InlineMath>{'S'}</InlineMath> is called{' '}
        <strong>simply connected</strong> if, for every Jordan curve{' '}
        <InlineMath>{'C'}</InlineMath> which lies in <InlineMath>{'S'}</InlineMath>, the
        inner region of <InlineMath>{'C'}</InlineMath> is also a subset of{' '}
        <InlineMath>{'S'}</InlineMath>.
      </Callout>

      <p>
        An <strong>annulus</strong> (the set of points lying between two concentric
        circles) is not simply connected because the inner region of a circle
        concentric with the bounding circles and of radius between theirs is not a
        subset of the annulus.
      </p>

      <p>
        Intuitively, we say that <InlineMath>{'S'}</InlineMath> is simply connected when
        it has no "holes." Another way to describe simple connectedness is to say
        that a curve <InlineMath>{'C_1'}</InlineMath> in <InlineMath>{'S'}</InlineMath>{' '}
        connecting any two points may be continuously deformed into any other curve{' '}
        <InlineMath>{'C_2'}</InlineMath> in <InlineMath>{'S'}</InlineMath> joining these two
        points, with all intermediate curves during the deformation lying completely
        in <InlineMath>{'S'}</InlineMath>.
      </p>

      <p>
        An open connected set that is not simply connected is called{' '}
        <strong>multiply connected</strong>.
      </p>

      <h3>The Main Theorem</h3>

      <Callout type="info">
        <strong>Theorem 11.11:</strong> Let{' '}
        <InlineMath>{'f(x, y) = P(x, y)\\mathbf{i} + Q(x, y)\\mathbf{j}'}</InlineMath>{' '}
        be a vector field that is continuously differentiable on an open{' '}
        <strong>simply connected</strong> set <InlineMath>{'S'}</InlineMath> in the plane.
        Then <InlineMath>{'f'}</InlineMath> is a gradient on <InlineMath>{'S'}</InlineMath>{' '}
        if and only if:
        <MathBlock>{`\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x} \\quad \\text{everywhere on} \\quad S`}</MathBlock>
      </Callout>

      <h3>Proof Sketch</h3>

      <p>
        The condition is necessary for <InlineMath>{'f'}</InlineMath> to be a gradient.
        To prove sufficiency, we need to show that line integrals are
        path-independent.
      </p>

      <p>
        In any open connected plane set <InlineMath>{'S'}</InlineMath>, every pair of
        points <InlineMath>{'a'}</InlineMath> and <InlineMath>{'x'}</InlineMath> can be joined
        by a simple step-polygon (a polygon whose edges are parallel to the coordinate
        axes and which has no self-intersections).
      </p>

      <p>
        Let <InlineMath>{'C_1'}</InlineMath> and <InlineMath>{'C_2'}</InlineMath> be two
        simple step-polygons in <InlineMath>{'S'}</InlineMath> joining{' '}
        <InlineMath>{'a'}</InlineMath> to <InlineMath>{'x'}</InlineMath>. These polygons
        will form the boundaries of a finite number of polygonal regions{' '}
        <InlineMath>{'R_1, \\ldots, R_m'}</InlineMath>. Since <InlineMath>{'S'}</InlineMath>{' '}
        is simply connected, each region <InlineMath>{'R_k'}</InlineMath> is a subset of{' '}
        <InlineMath>{'S'}</InlineMath>.
      </p>

      <p>
        The integral over the boundary <InlineMath>{'\\Gamma_k'}</InlineMath> of each
        region <InlineMath>{'R_k'}</InlineMath> is zero by Green's theorem:
      </p>
      <MathBlock>{`\\oint_{\\Gamma_k} P \\, dx + Q \\, dy = \\pm \\iint_{R_k} \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx \\, dy = 0`}</MathBlock>

      <p>
        since <InlineMath>{'\\partial Q/\\partial x = \\partial P/\\partial y'}</InlineMath>{' '}
        by hypothesis. This implies that the integral from{' '}
        <InlineMath>{'a'}</InlineMath> to <InlineMath>{'x'}</InlineMath> along{' '}
        <InlineMath>{'C_1'}</InlineMath> equals that along <InlineMath>{'C_2'}</InlineMath>,
        so <InlineMath>{'f'}</InlineMath> is a gradient in <InlineMath>{'S'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The condition{' '}
        <InlineMath>{'\\partial P/\\partial y = \\partial Q/\\partial x'}</InlineMath>{' '}
        is necessary for a vector field to be a gradient, but it is sufficient only
        on simply connected domains. The topology of the domain matters! On domains
        with holes (like an annulus), the condition can hold without the field being
        a gradient—there can be nonzero circulation around the holes.
      </Callout>
    </LessonLayout>
  );
}
