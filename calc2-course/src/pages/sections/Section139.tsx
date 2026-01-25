import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section139() {
  return (
    <LessonLayout sectionId={139}>
      <h2>Area of a Parametric Surface</h2>

      <p>
        The length of the fundamental vector product can be interpreted as a local
        magnification factor for areas. This observation leads to the definition
        of surface area.
      </p>

      <h3>Definition of Surface Area</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>{`S = \\mathbf{r}(T)`}</InlineMath>{' '}
        be a parametric surface. The <strong>area of S</strong>, denoted by{' '}
        <InlineMath>{`a(S)`}</InlineMath>, is defined by the double integral:
        <MathBlock>
          {`a(S) = \\iint_T \\left\\| \\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} \\right\\| du \\, dv`}
        </MathBlock>
      </Callout>

      <p>
        When the fundamental vector product is expressed in terms of its
        components, we have:
      </p>
      <MathBlock>
        {`a(S) = \\iint_T \\sqrt{\\left(\\frac{\\partial(Y, Z)}{\\partial(u, v)}\\right)^2 + \\left(\\frac{\\partial(Z, X)}{\\partial(u, v)}\\right)^2 + \\left(\\frac{\\partial(X, Y)}{\\partial(u, v)}\\right)^2} \\, du \\, dv`}
      </MathBlock>

      <h3>Surface Area for Explicit Representation</h3>

      <p>
        If <InlineMath>S</InlineMath> is given explicitly by an equation{' '}
        <InlineMath>{`z = f(x, y)`}</InlineMath>, we may use{' '}
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> as parameters.
        In this case:
      </p>
      <MathBlock>
        {`\\left\\| \\frac{\\partial \\mathbf{r}}{\\partial x} \\times \\frac{\\partial \\mathbf{r}}{\\partial y} \\right\\| = \\sqrt{1 + \\left(\\frac{\\partial f}{\\partial x}\\right)^2 + \\left(\\frac{\\partial f}{\\partial y}\\right)^2}`}
      </MathBlock>

      <p>
        The integral for surface area becomes:
      </p>
      <MathBlock>
        {`a(S) = \\iint_T \\sqrt{1 + \\left(\\frac{\\partial f}{\\partial x}\\right)^2 + \\left(\\frac{\\partial f}{\\partial y}\\right)^2} \\, dx \\, dy`}
      </MathBlock>

      <p>
        where <InlineMath>T</InlineMath> is the projection of{' '}
        <InlineMath>S</InlineMath> on the xy-plane.
      </p>

      <h3>The Area Cosine Principle</h3>

      <p>
        At each point of <InlineMath>S</InlineMath>, let{' '}
        <InlineMath>\gamma</InlineMath> denote the angle between the normal
        vector <InlineMath>{`\\mathbf{N}`}</InlineMath> and the unit vector{' '}
        <InlineMath>{`\\mathbf{k}`}</InlineMath>. Since the z-component of{' '}
        <InlineMath>{`\\mathbf{N}`}</InlineMath> is 1, we have{' '}
        <InlineMath>{`\\cos \\gamma = 1/\\|\\mathbf{N}\\|`}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Area Cosine Principle:</strong> If a region{' '}
        <InlineMath>S</InlineMath> in one plane is projected onto a region{' '}
        <InlineMath>T</InlineMath> in another plane making an angle{' '}
        <InlineMath>\gamma</InlineMath> with the first plane, then:
        <MathBlock>
          {`a(T) = a(S) \\cos \\gamma`}
        </MathBlock>
      </Callout>

      <h3>Example: Area of a Hemisphere</h3>

      <p>
        Consider a hemisphere <InlineMath>S</InlineMath> of radius{' '}
        <InlineMath>a</InlineMath> and center at the origin. Using the parametric
        representation:
      </p>
      <MathBlock>
        {`\\mathbf{r}(u, v) = a \\cos u \\cos v \\, \\mathbf{i} + a \\sin u \\cos v \\, \\mathbf{j} + a \\sin v \\, \\mathbf{k}`}
      </MathBlock>

      <p>
        where <InlineMath>{`(u, v) \\in [0, 2\\pi] \\times [0, \\frac{\\pi}{2}]`}</InlineMath>,
        we have:
      </p>
      <MathBlock>
        {`\\left\\| \\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} \\right\\| = a^2 |\\cos v|`}
      </MathBlock>

      <p>
        Therefore:
      </p>
      <MathBlock>
        {`a(S) = a^2 \\iint_T |\\cos v| \\, du \\, dv = a^2 \\int_0^{2\\pi} \\left[ \\int_0^{\\pi/2} \\cos v \\, dv \\right] du = 2\\pi a^2`}
      </MathBlock>

      <h3>Pappus' Theorem for Surface Area</h3>

      <Callout type="info">
        <strong>Theorem (Pappus):</strong> A surface of revolution, obtained by
        rotating a plane curve of length <InlineMath>L</InlineMath> about an axis
        in the plane of the curve, has area{' '}
        <InlineMath>{`2\\pi L \\bar{h}`}</InlineMath>, where{' '}
        <InlineMath>{`\\bar{h}`}</InlineMath> is the distance from the centroid
        of the curve to the axis of rotation.
      </Callout>

      <p>
        This theorem can be proved using the parametric representation of surfaces
        of revolution and the definition of surface area.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Surface area is computed by integrating the
        magnitude of the fundamental vector product over the parameter domain. For
        surfaces given explicitly as <InlineMath>{`z = f(x, y)`}</InlineMath>, the
        formula reduces to integrating{' '}
        <InlineMath>{`\\sqrt{1 + f_x^2 + f_y^2}`}</InlineMath> over the projection
        in the xy-plane.
      </Callout>
    </LessonLayout>
  );
}
