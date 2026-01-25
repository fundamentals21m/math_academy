import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section144() {
  return (
    <LessonLayout sectionId={144}>
      <h2>Properties of Curl and Divergence</h2>

      <p>
        The curl and divergence of a vector field are related to its Jacobian
        matrix. This connection reveals important properties and relationships
        between these operators.
      </p>

      <h3>Relation to the Jacobian Matrix</h3>

      <p>
        If <InlineMath>{`\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}`}</InlineMath>,
        the Jacobian matrix of <InlineMath>{`\\mathbf{F}`}</InlineMath> is:
      </p>
      <MathBlock>
        {`D\\mathbf{F}(x, y, z) = \\begin{pmatrix} \\frac{\\partial P}{\\partial x} & \\frac{\\partial P}{\\partial y} & \\frac{\\partial P}{\\partial z} \\\\ \\frac{\\partial Q}{\\partial x} & \\frac{\\partial Q}{\\partial y} & \\frac{\\partial Q}{\\partial z} \\\\ \\frac{\\partial R}{\\partial x} & \\frac{\\partial R}{\\partial y} & \\frac{\\partial R}{\\partial z} \\end{pmatrix}`}
      </MathBlock>

      <p>
        The trace of this matrix (sum of diagonal elements) is the divergence.
        The nonzero elements of the skew-symmetric part of the matrix are the
        components of the curl.
      </p>

      <h3>The Laplacian</h3>

      <Callout type="info">
        <strong>Definition:</strong> If <InlineMath>{`\\varphi`}</InlineMath> is
        a scalar field, the <strong>Laplacian</strong> of{' '}
        <InlineMath>{`\\varphi`}</InlineMath> is:
        <MathBlock>
          {`\\nabla^2 \\varphi = \\frac{\\partial^2 \\varphi}{\\partial x^2} + \\frac{\\partial^2 \\varphi}{\\partial y^2} + \\frac{\\partial^2 \\varphi}{\\partial z^2}`}
        </MathBlock>
        A function with <InlineMath>{`\\nabla^2 \\varphi = 0`}</InlineMath> is
        called <strong>harmonic</strong>.
      </Callout>

      <h3>Fundamental Identities</h3>

      <Callout type="info">
        <strong>Identity 1:</strong> The divergence of a gradient is the Laplacian:
        <MathBlock>
          {`\\text{div} \\, (\\nabla \\varphi) = \\nabla^2 \\varphi`}
        </MathBlock>
      </Callout>

      <Callout type="info">
        <strong>Identity 2:</strong> The curl of a gradient is always zero:
        <MathBlock>
          {`\\text{curl} \\, (\\text{grad} \\, \\varphi) = \\nabla \\times (\\nabla \\varphi) = \\mathbf{0}`}
        </MathBlock>
        for every scalar field <InlineMath>{`\\varphi`}</InlineMath> with continuous
        second-order mixed partial derivatives.
      </Callout>

      <Callout type="info">
        <strong>Identity 3:</strong> The divergence of a curl is always zero:
        <MathBlock>
          {`\\text{div} \\, (\\text{curl} \\, \\mathbf{F}) = \\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0`}
        </MathBlock>
      </Callout>

      <Callout type="info">
        <strong>Identity 4:</strong> The curl of a curl satisfies:
        <MathBlock>
          {`\\text{curl} \\, (\\text{curl} \\, \\mathbf{F}) = \\text{grad} \\, (\\text{div} \\, \\mathbf{F}) - \\nabla^2 \\mathbf{F}`}
        </MathBlock>
        where{' '}
        <InlineMath>{`\\nabla^2 \\mathbf{F} = (\\nabla^2 P)\\mathbf{i} + (\\nabla^2 Q)\\mathbf{j} + (\\nabla^2 R)\\mathbf{k}`}</InlineMath>.
      </Callout>

      <h3>Linearity Properties</h3>

      <p>
        The curl and divergence are <strong>linear operators</strong>. If{' '}
        <InlineMath>a</InlineMath> and <InlineMath>b</InlineMath> are constants:
      </p>
      <MathBlock>
        {`\\text{div} \\, (a\\mathbf{F} + b\\mathbf{G}) = a \\, \\text{div} \\, \\mathbf{F} + b \\, \\text{div} \\, \\mathbf{G}`}
      </MathBlock>
      <MathBlock>
        {`\\text{curl} \\, (a\\mathbf{F} + b\\mathbf{G}) = a \\, \\text{curl} \\, \\mathbf{F} + b \\, \\text{curl} \\, \\mathbf{G}`}
      </MathBlock>

      <h3>Product Rules</h3>

      <p>
        For a scalar field <InlineMath>{`\\varphi`}</InlineMath> and vector field{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath>:
      </p>
      <MathBlock>
        {`\\text{div} \\, (\\varphi \\mathbf{F}) = \\varphi \\, \\text{div} \\, \\mathbf{F} + \\nabla \\varphi \\cdot \\mathbf{F}`}
      </MathBlock>
      <MathBlock>
        {`\\text{curl} \\, (\\varphi \\mathbf{F}) = \\varphi \\, \\text{curl} \\, \\mathbf{F} + \\nabla \\varphi \\times \\mathbf{F}`}
      </MathBlock>

      <h3>Example: Zero Divergence and Zero Curl</h3>

      <p>
        Let <InlineMath>S</InlineMath> be the set of all{' '}
        <InlineMath>{`(x, y) \\neq (0, 0)`}</InlineMath>, and let:
      </p>
      <MathBlock>
        {`\\mathbf{F}(x, y) = \\frac{-y}{x^2 + y^2} \\mathbf{i} + \\frac{x}{x^2 + y^2} \\mathbf{j}`}
      </MathBlock>

      <p>
        This field has both{' '}
        <InlineMath>{`\\text{div } \\mathbf{F} = 0`}</InlineMath> and{' '}
        <InlineMath>{`\\text{curl } \\mathbf{F} = \\mathbf{0}`}</InlineMath> on{' '}
        <InlineMath>S</InlineMath>, yet{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath> is not a gradient on{' '}
        <InlineMath>S</InlineMath> (though it is a gradient on any rectangle
        not containing the origin).
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The identities{' '}
        <InlineMath>{`\\text{curl}(\\text{grad } \\varphi) = \\mathbf{0}`}</InlineMath>{' '}
        and{' '}
        <InlineMath>{`\\text{div}(\\text{curl } \\mathbf{F}) = 0`}</InlineMath>{' '}
        are fundamental in physics. They express conservation laws and
        constraints on electromagnetic fields (Maxwell's equations) and fluid
        flows.
      </Callout>
    </LessonLayout>
  );
}
