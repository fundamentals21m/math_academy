import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section143() {
  return (
    <LessonLayout sectionId={143}>
      <h2>The Curl and Divergence of a Vector Field</h2>

      <p>
        The surface integral in Stokes' theorem can be expressed more simply in
        terms of two important differential operators: the <strong>curl</strong>{' '}
        and the <strong>divergence</strong> of a vector field.
      </p>

      <h3>Definition of the Curl</h3>

      <p>
        Let <InlineMath>{`\\mathbf{F}`}</InlineMath> be a differentiable vector
        field given by:
      </p>
      <MathBlock>
        {`\\mathbf{F}(x, y, z) = P(x, y, z)\\mathbf{i} + Q(x, y, z)\\mathbf{j} + R(x, y, z)\\mathbf{k}`}
      </MathBlock>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>curl</strong> of{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath> is the vector field defined by:
        <MathBlock>
          {`\\text{curl} \\, \\mathbf{F} = \\left( \\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z} \\right) \\mathbf{i} + \\left( \\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x} \\right) \\mathbf{j} + \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) \\mathbf{k}`}
        </MathBlock>
      </Callout>

      <p>
        The curl can be remembered by writing it as the expansion of a{' '}
        <InlineMath>{`3 \\times 3`}</InlineMath> determinant:
      </p>
      <MathBlock>
        {`\\text{curl} \\, \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}`}
      </MathBlock>

      <p>
        This can also be written as a cross product using the symbolic vector{' '}
        <InlineMath>{`\\nabla`}</InlineMath>:
      </p>
      <MathBlock>
        {`\\text{curl} \\, \\mathbf{F} = \\nabla \\times \\mathbf{F}, \\quad \\text{where} \\quad \\nabla = \\frac{\\partial}{\\partial x} \\mathbf{i} + \\frac{\\partial}{\\partial y} \\mathbf{j} + \\frac{\\partial}{\\partial z} \\mathbf{k}`}
      </MathBlock>

      <h3>Definition of the Divergence</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>divergence</strong> of{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath> is the scalar field defined by:
        <MathBlock>
          {`\\text{div} \\, \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}`}
        </MathBlock>
      </Callout>

      <p>
        The divergence can be written symbolically as the "dot product"{' '}
        <InlineMath>{`\\nabla \\cdot \\mathbf{F}`}</InlineMath>.
      </p>

      <h3>Stokes' Theorem in Vector Form</h3>

      <p>
        Using the curl, Stokes' theorem takes the simpler form:
      </p>
      <MathBlock>
        {`\\iint_S (\\text{curl} \\, \\mathbf{F}) \\cdot \\mathbf{n} \\, dS = \\oint_C \\mathbf{F} \\cdot d\\boldsymbol{\\alpha}`}
      </MathBlock>

      <p>
        where <InlineMath>{`\\mathbf{n}`}</InlineMath> is the unit normal having
        the same direction as the fundamental vector product of the surface.
      </p>

      <h3>Connection to Gradients</h3>

      <p>
        A vector field <InlineMath>{`\\mathbf{F}`}</InlineMath> is a gradient on
        an open convex set <InlineMath>S</InlineMath> if and only if{' '}
        <InlineMath>{`\\text{curl } \\mathbf{F} = \\mathbf{0}`}</InlineMath> on{' '}
        <InlineMath>S</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Theorem:</strong> Let{' '}
        <InlineMath>{`\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}`}</InlineMath>{' '}
        be a continuously differentiable vector field on an open convex set{' '}
        <InlineMath>S</InlineMath> in 3-space. Then{' '}
        <InlineMath>{`\\mathbf{F}`}</InlineMath> is a gradient on{' '}
        <InlineMath>S</InlineMath> if and only if{' '}
        <InlineMath>{`\\text{curl } \\mathbf{F} = \\mathbf{0}`}</InlineMath> on{' '}
        <InlineMath>S</InlineMath>.
      </Callout>

      <p>
        A field with zero curl is called <strong>irrotational</strong>.
      </p>

      <h3>Example</h3>

      <p>
        Let <InlineMath>{`\\mathbf{F}(x, y, z) = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}`}</InlineMath>.
        Then:
      </p>
      <MathBlock>
        {`P = x, \\quad Q = y, \\quad R = z`}
      </MathBlock>

      <p>
        The Jacobian matrix is the <InlineMath>{`3 \\times 3`}</InlineMath>{' '}
        identity matrix. Therefore:
      </p>
      <MathBlock>
        {`\\text{div} \\, \\mathbf{F} = 1 + 1 + 1 = 3 \\quad \\text{and} \\quad \\text{curl} \\, \\mathbf{F} = \\mathbf{0}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The curl and divergence are fundamental
        differential operators in vector calculus. The curl measures local
        rotation of a vector field, while the divergence measures local
        expansion or contraction. These operators appear throughout physics,
        especially in electromagnetism and fluid dynamics.
      </Callout>
    </LessonLayout>
  );
}
