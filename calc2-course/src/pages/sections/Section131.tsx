import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section131() {
  return (
    <LessonLayout sectionId={131}>
      <h2>Change of Variables in a Double Integral</h2>

      <p>
        The substitution formula for double integrals is more elaborate than in the
        one-dimensional case because there are two formal substitutions to be made,
        one for <InlineMath>{'x'}</InlineMath> and another for <InlineMath>{'y'}</InlineMath>.
      </p>

      <h3>The Transformation Equations</h3>

      <p>
        Instead of the one function <InlineMath>{'g'}</InlineMath> which appears in the
        one-dimensional formula, we now have two functions, say{' '}
        <InlineMath>{'X'}</InlineMath> and <InlineMath>{'Y'}</InlineMath>, which connect{' '}
        <InlineMath>{'x'}</InlineMath>, <InlineMath>{'y'}</InlineMath> with{' '}
        <InlineMath>{'u'}</InlineMath>, <InlineMath>{'v'}</InlineMath> as follows:
      </p>
      <MathBlock>{`x = X(u, v), \\quad y = Y(u, v)`}</MathBlock>

      <p>
        The two equations define a mapping which carries a point{' '}
        <InlineMath>{'(u, v)'}</InlineMath> in the <InlineMath>{'uv'}</InlineMath>-plane
        into an image point <InlineMath>{'(x, y)'}</InlineMath> in the{' '}
        <InlineMath>{'xy'}</InlineMath>-plane.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> This equation is called a{' '}
        <strong>vector equation</strong> of the mapping. As{' '}
        <InlineMath>{'(u, v)'}</InlineMath> runs through the points of{' '}
        <InlineMath>{'T'}</InlineMath>, the endpoint of{' '}
        <InlineMath>{'\\mathbf{r}(u, v)'}</InlineMath> traces out the points of{' '}
        <InlineMath>{'S'}</InlineMath>:
        <MathBlock>{`\\mathbf{r}(u, v) = X(u, v)\\mathbf{i} + Y(u, v)\\mathbf{j}`}</MathBlock>
      </Callout>

      <h3>The Transformation Formula</h3>

      <p>
        The formula for transforming double integrals may be written as:
      </p>
      <MathBlock>{`\\iint_S f(x, y) \\, dx \\, dy = \\iint_T f[X(u, v), Y(u, v)] \\, |J(u, v)| \\, du \\, dv`}</MathBlock>

      <p>
        The factor <InlineMath>{'J(u, v)'}</InlineMath> which appears in the
        integrand on the right plays the role of the factor{' '}
        <InlineMath>{`g'(t)`}</InlineMath> which appears in the one-dimensional
        formula. This factor is called the <strong>Jacobian determinant</strong>{' '}
        of the mapping.
      </p>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>Jacobian determinant</strong> of
        the mapping defined by the equations <InlineMath>{'x = X(u, v)'}</InlineMath>{' '}
        and <InlineMath>{'y = Y(u, v)'}</InlineMath> is:
        <MathBlock>{`J(u, v) = \\begin{vmatrix} \\frac{\\partial X}{\\partial u} & \\frac{\\partial Y}{\\partial u} \\\\ \\frac{\\partial X}{\\partial v} & \\frac{\\partial Y}{\\partial v} \\end{vmatrix} = \\frac{\\partial X}{\\partial u} \\frac{\\partial Y}{\\partial v} - \\frac{\\partial X}{\\partial v} \\frac{\\partial Y}{\\partial u}`}</MathBlock>
      </Callout>

      <p>
        Sometimes the symbol{' '}
        <InlineMath>{'\\partial(X, Y)/\\partial(u, v)'}</InlineMath> is used
        instead of <InlineMath>{'J(u, v)'}</InlineMath> to represent the Jacobian
        determinant.
      </p>

      <h3>Geometric Interpretation</h3>

      <p>
        A u-curve is obtained by setting <InlineMath>{'v'}</InlineMath> constant on a
        horizontal line segment in the <InlineMath>{'uv'}</InlineMath>-plane. The vector
        function <InlineMath>{'\\mathbf{r}'}</InlineMath> maps this segment onto a
        curve in the <InlineMath>{'xy'}</InlineMath>-plane. If we think of{' '}
        <InlineMath>{'u'}</InlineMath> as a parameter representing time, the vector:
      </p>
      <MathBlock>{`\\mathbf{V}_1 = \\frac{\\partial \\mathbf{r}}{\\partial u} = \\frac{\\partial X}{\\partial u} \\mathbf{i} + \\frac{\\partial Y}{\\partial u} \\mathbf{j}`}</MathBlock>

      <p>
        represents the velocity of the position{' '}
        <InlineMath>{'\\mathbf{r}'}</InlineMath> and is therefore tangent to the
        curve traced out by the tip of{' '}
        <InlineMath>{'\\mathbf{r}'}</InlineMath>. Similarly, each vector{' '}
        <InlineMath>{'\\mathbf{V}_2 = \\partial \\mathbf{r}/\\partial v'}</InlineMath>{' '}
        represents the velocity vector of a v-curve obtained by setting{' '}
        <InlineMath>{'u = '}</InlineMath> constant.
      </p>

      <p>
        A small rectangle with dimensions <InlineMath>{'\\Delta u'}</InlineMath>{' '}
        and <InlineMath>{'\\Delta v'}</InlineMath> in the{' '}
        <InlineMath>{'uv'}</InlineMath>-plane is mapped onto a portion of the{' '}
        <InlineMath>{'xy'}</InlineMath>-plane that is nearly a parallelogram. The area
        of this parallelogram is the magnitude of the cross product of the two
        vectors:
      </p>
      <MathBlock>{`\\|\\mathbf{V}_1 \\Delta u \\times \\mathbf{V}_2 \\Delta v\\| = \\|\\mathbf{V}_1 \\times \\mathbf{V}_2\\| \\Delta u \\, \\Delta v = |J(u, v)| \\Delta u \\, \\Delta v`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The Jacobian determinant may be thought of as
        a "magnification factor" for areas. If{' '}
        <InlineMath>{'J(u, v) = 1'}</InlineMath> for all points in{' '}
        <InlineMath>{'T'}</InlineMath>, then the mapping preserves areas. Otherwise,
        to obtain the area of the image parallelogram we must multiply the area of
        the rectangle by <InlineMath>{'|J(u, v)|'}</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
