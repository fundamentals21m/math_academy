import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section142() {
  return (
    <LessonLayout sectionId={142}>
      <h2>Stokes' Theorem</h2>

      <p>
        Stokes' theorem is a higher-dimensional generalization of Green's theorem.
        It relates a surface integral to a line integral around the boundary of
        the surface.
      </p>

      <h3>Statement of Stokes' Theorem</h3>

      <Callout type="info">
        <strong>Theorem (Stokes):</strong> Let <InlineMath>S</InlineMath> be a
        smooth, orientable surface in <InlineMath>{`\\mathbb{R}^3`}</InlineMath>{' '}
        bounded by a piecewise smooth, simple closed curve{' '}
        <InlineMath>C</InlineMath>. Let{' '}
        <InlineMath>{`\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}`}</InlineMath>{' '}
        be a continuously differentiable vector field on an open set containing{' '}
        <InlineMath>S</InlineMath>. Then:
        <MathBlock>
          {`\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}`}
        </MathBlock>
        where the orientation of <InlineMath>C</InlineMath> and the normal to{' '}
        <InlineMath>S</InlineMath> are related by the right-hand rule.
      </Callout>

      <h3>The Curl</h3>

      <p>
        The curl of <InlineMath>{`\\mathbf{F}`}</InlineMath> is the vector field:
      </p>
      <MathBlock>
        {`\\nabla \\times \\mathbf{F} = \\left( \\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z} \\right) \\mathbf{i} + \\left( \\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x} \\right) \\mathbf{j} + \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) \\mathbf{k}`}
      </MathBlock>

      <p>
        This can be written symbolically as:
      </p>
      <MathBlock>
        {`\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}`}
      </MathBlock>

      <h3>Relationship to Green's Theorem</h3>

      <p>
        When <InlineMath>S</InlineMath> is a region in the xy-plane and{' '}
        <InlineMath>{`\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j}`}</InlineMath>{' '}
        (with <InlineMath>{`R = 0`}</InlineMath> and <InlineMath>P</InlineMath>,{' '}
        <InlineMath>Q</InlineMath> independent of <InlineMath>z</InlineMath>),
        Stokes' theorem reduces to Green's theorem:
      </p>
      <MathBlock>
        {`\\oint_C P \\, dx + Q \\, dy = \\iint_S \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx \\, dy`}
      </MathBlock>

      <h3>Physical Interpretation</h3>

      <p>
        The circulation of <InlineMath>{`\\mathbf{F}`}</InlineMath> around{' '}
        <InlineMath>C</InlineMath> equals the flux of the curl of{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath> through any surface{' '}
        <InlineMath>S</InlineMath> bounded by <InlineMath>C</InlineMath>.
      </p>

      <p>
        In fluid mechanics, if <InlineMath>{`\\mathbf{F}`}</InlineMath> is the
        velocity field, then <InlineMath>{`\\nabla \\times \\mathbf{F}`}</InlineMath>{' '}
        measures the local rotation of the fluid, and Stokes' theorem says that
        the total circulation around a closed curve equals the integral of this
        local rotation over any surface bounded by the curve.
      </p>

      <h3>Example</h3>

      <p>
        Verify Stokes' theorem for{' '}
        <InlineMath>{`\\mathbf{F} = y\\mathbf{i} + z\\mathbf{j} + x\\mathbf{k}`}</InlineMath>{' '}
        and the hemisphere <InlineMath>{`x^2 + y^2 + z^2 = 1`}</InlineMath>,{' '}
        <InlineMath>{`z \\geq 0`}</InlineMath>.
      </p>

      <p>
        <strong>Line integral:</strong> The boundary is the unit circle{' '}
        <InlineMath>{`x^2 + y^2 = 1`}</InlineMath> in the xy-plane. With{' '}
        <InlineMath>{`x = \\cos t`}</InlineMath>,{' '}
        <InlineMath>{`y = \\sin t`}</InlineMath>,{' '}
        <InlineMath>{`z = 0`}</InlineMath>, <InlineMath>{`0 \\leq t \\leq 2\\pi`}</InlineMath>:
      </p>
      <MathBlock>
        {`\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_0^{2\\pi} (\\sin t)(-\\sin t) + (0)(\\cos t) + (\\cos t)(0) \\, dt = -\\int_0^{2\\pi} \\sin^2 t \\, dt = -\\pi`}
      </MathBlock>

      <p>
        <strong>Surface integral:</strong> The curl is:
      </p>
      <MathBlock>
        {`\\nabla \\times \\mathbf{F} = (-1)\\mathbf{i} + (-1)\\mathbf{j} + (-1)\\mathbf{k} = -\\mathbf{i} - \\mathbf{j} - \\mathbf{k}`}
      </MathBlock>

      <p>
        Using <InlineMath>{`\\mathbf{n} = \\mathbf{r}/|\\mathbf{r}|`}</InlineMath>{' '}
        and <InlineMath>{`dS = d\\theta \\, d\\phi`}</InlineMath> (details omitted),
        the surface integral also equals <InlineMath>{`-\\pi`}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Stokes' theorem connects circulation (line
        integral) to curl flux (surface integral). It generalizes Green's theorem
        to arbitrary surfaces in 3D and is fundamental in electromagnetism
        (relating electric field circulation to changing magnetic flux).
      </Callout>
    </LessonLayout>
  );
}
