import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section127() {
  return (
    <LessonLayout sectionId={127}>
      <h2>Applications of Green's Theorem</h2>

      <p>
        Green's theorem has many important applications. This section illustrates
        several of them.
      </p>

      <h3>Example 1: Computing Work</h3>

      <p>
        Use Green's theorem to compute the work done by the force field{' '}
        <InlineMath>{'f(x, y) = (y + 3x)\\mathbf{i} + (2y - x)\\mathbf{j}'}</InlineMath>{' '}
        in moving a particle once around the ellipse{' '}
        <InlineMath>{'4x^2 + y^2 = 4'}</InlineMath> in the counterclockwise direction.
      </p>

      <p>
        <strong>Solution:</strong> The work is equal to{' '}
        <InlineMath>{'\\oint_C P \\, dx + Q \\, dy'}</InlineMath>, where{' '}
        <InlineMath>{'P = y + 3x'}</InlineMath>, <InlineMath>{'Q = 2y - x'}</InlineMath>,
        and <InlineMath>C</InlineMath> is the ellipse.
      </p>

      <p>
        Since <InlineMath>{'\\partial Q/\\partial x - \\partial P/\\partial y = -1 - 1 = -2'}</InlineMath>,
        Green's theorem gives:
      </p>
      <MathBlock>
        {`\\oint_C P \\, dx + Q \\, dy = \\iint_R (-2) \\, dx \\, dy = -2 \\cdot a(R)`}
      </MathBlock>

      <p>
        where <InlineMath>{'a(R)'}</InlineMath> is the area of the region enclosed by
        the ellipse. Since this ellipse has semiaxes <InlineMath>{'a = 1'}</InlineMath>{' '}
        and <InlineMath>{'b = 2'}</InlineMath>, its area is{' '}
        <InlineMath>{'\\pi ab = 2\\pi'}</InlineMath> and the value of the line integral
        is <InlineMath>{'-4\\pi'}</InlineMath>.
      </p>

      <h3>Example 2: Evaluating Line Integrals</h3>

      <p>
        Evaluate the line integral{' '}
        <InlineMath>{'\\oint_C (5 - xy - y^2) \\, dx - (2xy - x^2) \\, dy'}</InlineMath>,
        where <InlineMath>C</InlineMath> is the square with vertices{' '}
        <InlineMath>(0, 0)</InlineMath>, <InlineMath>(1, 0)</InlineMath>,{' '}
        <InlineMath>(1, 1)</InlineMath>, <InlineMath>(0, 1)</InlineMath>, traversed
        counterclockwise.
      </p>

      <p>
        <strong>Solution:</strong> Here <InlineMath>{'P = 5 - xy - y^2'}</InlineMath>,{' '}
        <InlineMath>{'Q = x^2 - 2xy'}</InlineMath>, and{' '}
        <InlineMath>{'\\partial Q/\\partial x - \\partial P/\\partial y = 2x - (-x - 2y) = 3x + 2y'}</InlineMath>.
      </p>

      <p>
        Wait, let me recalculate: <InlineMath>{'\\partial Q/\\partial x = 2x - 2y'}</InlineMath>{' '}
        and <InlineMath>{'\\partial P/\\partial y = -x - 2y'}</InlineMath>, so{' '}
        <InlineMath>{'\\partial Q/\\partial x - \\partial P/\\partial y = 2x - 2y - (-x - 2y) = 3x'}</InlineMath>.
      </p>

      <p>
        Hence by Green's theorem:
      </p>
      <MathBlock>
        {`\\oint_C P \\, dx + Q \\, dy = 3 \\iint_R x \\, dx \\, dy = 3\\bar{x}`}
      </MathBlock>

      <p>
        where <InlineMath>{'\\bar{x}'}</InlineMath> is the x-coordinate of the centroid
        of the square. Since <InlineMath>{'\\bar{x} = 1/2'}</InlineMath>, the value of
        the line integral is <InlineMath>{'3/2'}</InlineMath>.
      </p>

      <h3>Example 3: Area Expressed as a Line Integral</h3>

      <p>
        The double integral for the area <InlineMath>{'a(R)'}</InlineMath> of a region{' '}
        <InlineMath>R</InlineMath> can be written as:
      </p>
      <MathBlock>
        {`a(R) = \\iint_R dx \\, dy = \\iint_R \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx \\, dy`}
      </MathBlock>

      <p>
        where <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> are chosen so
        that <InlineMath>{'\\partial Q/\\partial x - \\partial P/\\partial y = 1'}</InlineMath>.
        For example, take <InlineMath>{'Q(x, y) = x/2'}</InlineMath> and{' '}
        <InlineMath>{'P(x, y) = -y/2'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Area Formula:</strong> If <InlineMath>R</InlineMath> is the region
        enclosed by a Jordan curve <InlineMath>C</InlineMath>, then:
        <MathBlock>
          {`a(R) = \\frac{1}{2} \\oint_C -y \\, dx + x \\, dy`}
        </MathBlock>
      </Callout>

      <p>
        If the boundary curve <InlineMath>C</InlineMath> is described by parametric
        equations <InlineMath>{'x = X(t)'}</InlineMath>,{' '}
        <InlineMath>{'y = Y(t)'}</InlineMath> for{' '}
        <InlineMath>{'a \\leq t \\leq b'}</InlineMath>, the line integral for area
        becomes:
      </p>
      <MathBlock>
        {`a(R) = \\frac{1}{2} \\int_a^b [-Y(t)X'(t) + X(t)Y'(t)] \\, dt = \\frac{1}{2} \\int_a^b \\begin{vmatrix} X(t) & Y(t) \\\\ X'(t) & Y'(t) \\end{vmatrix} dt`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Green's theorem transforms difficult line
        integrals into potentially simpler double integrals (or vice versa). The
        area formula shows that the area of a region can be computed as a line
        integral around its boundary—this is the basis for planimeters, mechanical
        devices that measure area by tracing boundaries.
      </Callout>
    </LessonLayout>
  );
}
