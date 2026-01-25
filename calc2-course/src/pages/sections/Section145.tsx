import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section145() {
  return (
    <LessonLayout sectionId={145}>
      <h2>Reconstruction of a Vector Field from Its Curl</h2>

      <p>
        Given a vector field <InlineMath>{`\\mathbf{F}`}</InlineMath>, we ask:
        is there a <InlineMath>{`\\mathbf{G}`}</InlineMath> such that{' '}
        <InlineMath>{`\\text{curl } \\mathbf{G} = \\mathbf{F}`}</InlineMath>?
        This is analogous to asking when a vector field is a gradient.
      </p>

      <h3>The System of Equations</h3>

      <p>
        Writing{' '}
        <InlineMath>{`\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}`}</InlineMath>{' '}
        and{' '}
        <InlineMath>{`\\mathbf{G} = L\\mathbf{i} + M\\mathbf{j} + N\\mathbf{k}`}</InlineMath>,
        the equation{' '}
        <InlineMath>{`\\text{curl } \\mathbf{G} = \\mathbf{F}`}</InlineMath>{' '}
        requires:
      </p>
      <MathBlock>
        {`\\frac{\\partial N}{\\partial y} - \\frac{\\partial M}{\\partial z} = P, \\quad \\frac{\\partial L}{\\partial z} - \\frac{\\partial N}{\\partial x} = Q, \\quad \\frac{\\partial M}{\\partial x} - \\frac{\\partial L}{\\partial y} = R`}
      </MathBlock>

      <h3>Necessary Condition</h3>

      <p>
        Since the divergence of a curl is always zero, for this system to have
        a solution it is <em>necessary</em> that:
      </p>
      <MathBlock>
        {`\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z} = 0`}
      </MathBlock>

      <p>
        That is, <InlineMath>{`\\text{div } \\mathbf{F} = 0`}</InlineMath>. A
        vector field with zero divergence is called <strong>solenoidal</strong>.
      </p>

      <h3>Sufficiency on Intervals</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Let{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath> be continuously differentiable
        on an open interval <InlineMath>S</InlineMath> in 3-space. Then there
        exists a vector field <InlineMath>{`\\mathbf{G}`}</InlineMath> such that{' '}
        <InlineMath>{`\\text{curl } \\mathbf{G} = \\mathbf{F}`}</InlineMath> if
        and only if{' '}
        <InlineMath>{`\\text{div } \\mathbf{F} = 0`}</InlineMath> everywhere in{' '}
        <InlineMath>S</InlineMath>.
      </Callout>

      <h3>Explicit Construction</h3>

      <p>
        When <InlineMath>{`\\text{div } \\mathbf{F} = 0`}</InlineMath>, we can
        construct <InlineMath>{`\\mathbf{G}`}</InlineMath> explicitly. Setting{' '}
        <InlineMath>{`L = 0`}</InlineMath> and choosing a point{' '}
        <InlineMath>{`(x_0, y, z_0)`}</InlineMath> in the interval:
      </p>
      <MathBlock>
        {`M(x, y, z) = \\int_{x_0}^{x} R(t, y, z) \\, dt - \\int_{z_0}^{z} P(x_0, y, u) \\, du`}
      </MathBlock>
      <MathBlock>
        {`N(x, y, z) = -\\int_{x_0}^{x} Q(t, y, z) \\, dt`}
      </MathBlock>

      <p>
        With <InlineMath>{`L = 0`}</InlineMath>,{' '}
        <InlineMath>M</InlineMath>, and <InlineMath>N</InlineMath> defined as
        above, we have{' '}
        <InlineMath>{`\\text{curl } \\mathbf{G} = \\mathbf{F}`}</InlineMath>.
      </p>

      <h3>Non-Uniqueness</h3>

      <p>
        The solution <InlineMath>{`\\mathbf{G}`}</InlineMath> is not unique. If{' '}
        <InlineMath>{`\\text{curl } \\mathbf{G} = \\mathbf{F}`}</InlineMath>,
        then for any continuously differentiable scalar field{' '}
        <InlineMath>{`\\varphi`}</InlineMath>:
      </p>
      <MathBlock>
        {`\\text{curl} \\, (\\mathbf{G} + \\nabla \\varphi) = \\text{curl} \\, \\mathbf{G} + \\text{curl} \\, (\\nabla \\varphi) = \\text{curl} \\, \\mathbf{G} = \\mathbf{F}`}
      </MathBlock>

      <p>
        So <InlineMath>{`\\mathbf{G} + \\nabla \\varphi`}</InlineMath> is also
        a solution. Moreover, <em>all</em> solutions have this form.
      </p>

      <h3>Solenoidal Fields That Are Not Curls</h3>

      <p>
        The theorem requires <InlineMath>S</InlineMath> to be an interval.
        On more general regions, a solenoidal field may not be a curl.
      </p>

      <p>
        <strong>Example:</strong> Let <InlineMath>D</InlineMath> be the region
        between two concentric spheres centered at the origin. Let:
      </p>
      <MathBlock>
        {`\\mathbf{V} = \\frac{\\mathbf{r}}{r^3}, \\quad \\text{where} \\quad \\mathbf{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}, \\quad r = \\|\\mathbf{r}\\|`}
      </MathBlock>

      <p>
        One can verify that{' '}
        <InlineMath>{`\\text{div } \\mathbf{V} = 0`}</InlineMath> in{' '}
        <InlineMath>D</InlineMath>. However,{' '}
        <InlineMath>{`\\mathbf{V}`}</InlineMath> is <em>not</em> a curl in{' '}
        <InlineMath>D</InlineMath>, although it is a curl on every open interval
        not containing the origin.
      </p>

      <p>
        This can be shown using Stokes' theorem: if{' '}
        <InlineMath>{`\\mathbf{V} = \\text{curl } \\mathbf{U}`}</InlineMath>,
        then{' '}
        <InlineMath>{`\\iint_S \\mathbf{V} \\cdot \\mathbf{n} \\, dS`}</InlineMath>{' '}
        should equal zero for any closed surface in <InlineMath>D</InlineMath>.
        But this integral over a sphere centered at the origin equals{' '}
        <InlineMath>{`4\\pi`}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> A vector field is solenoidal (div = 0) on
        an open interval if and only if it is the curl of another vector field.
        The topology of the region matters: on regions with "holes" (like the
        region between two spheres), a solenoidal field may not be expressible
        as a curl.
      </Callout>
    </LessonLayout>
  );
}
