import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section138() {
  return (
    <LessonLayout sectionId={138}>
      <h2>The Fundamental Vector Product</h2>

      <p>
        For a parametric surface described by the vector equation{' '}
        <InlineMath>{`\\mathbf{r}(u, v)`}</InlineMath>, the{' '}
        <strong>fundamental vector product</strong> plays a role analogous to the
        derivative in the theory of curves.
      </p>

      <h3>Definition</h3>

      <p>
        Consider a surface described by the vector equation:
      </p>
      <MathBlock>
        {`\\mathbf{r}(u, v) = X(u, v)\\mathbf{i} + Y(u, v)\\mathbf{j} + Z(u, v)\\mathbf{k}, \\quad (u, v) \\in T`}
      </MathBlock>

      <p>
        If <InlineMath>X</InlineMath>, <InlineMath>Y</InlineMath>, and{' '}
        <InlineMath>Z</InlineMath> are differentiable on{' '}
        <InlineMath>T</InlineMath>, we consider the two partial derivative vectors:
      </p>
      <MathBlock>
        {`\\frac{\\partial \\mathbf{r}}{\\partial u} = \\frac{\\partial X}{\\partial u} \\mathbf{i} + \\frac{\\partial Y}{\\partial u} \\mathbf{j} + \\frac{\\partial Z}{\\partial u} \\mathbf{k}`}
      </MathBlock>
      <MathBlock>
        {`\\frac{\\partial \\mathbf{r}}{\\partial v} = \\frac{\\partial X}{\\partial v} \\mathbf{i} + \\frac{\\partial Y}{\\partial v} \\mathbf{j} + \\frac{\\partial Z}{\\partial v} \\mathbf{k}`}
      </MathBlock>

      <Callout type="info">
        <strong>Definition:</strong> The{' '}
        <strong>fundamental vector product</strong> of the representation{' '}
        <InlineMath>{`\\mathbf{r}`}</InlineMath> is the cross product:
        <MathBlock>
          {`\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} = \\frac{\\partial(Y, Z)}{\\partial(u, v)} \\mathbf{i} + \\frac{\\partial(Z, X)}{\\partial(u, v)} \\mathbf{j} + \\frac{\\partial(X, Y)}{\\partial(u, v)} \\mathbf{k}`}
        </MathBlock>
        where the components are Jacobian determinants.
      </Callout>

      <h3>Regular and Singular Points</h3>

      <Callout type="info">
        <strong>Definition:</strong> If <InlineMath>(u, v)</InlineMath> is a point
        in <InlineMath>T</InlineMath> at which{' '}
        <InlineMath>{`\\partial \\mathbf{r}/\\partial u`}</InlineMath> and{' '}
        <InlineMath>{`\\partial \\mathbf{r}/\\partial v`}</InlineMath> are
        continuous and the fundamental vector product is nonzero, then the image
        point <InlineMath>{`\\mathbf{r}(u, v)`}</InlineMath> is called a{' '}
        <strong>regular point</strong> of <InlineMath>{`\\mathbf{r}`}</InlineMath>.
        <br /><br />
        Points at which the fundamental vector product vanishes or fails to be
        continuous are called <strong>singular points</strong>.
      </Callout>

      <Callout type="info">
        <strong>Definition:</strong> A surface{' '}
        <InlineMath>{`\\mathbf{r}(T)`}</InlineMath> is called{' '}
        <strong>smooth</strong> if all its points are regular points.
      </Callout>

      <h3>Geometric Interpretation</h3>

      <p>
        Consider a horizontal line segment in <InlineMath>T</InlineMath>. Its
        image under <InlineMath>{`\\mathbf{r}`}</InlineMath> is a curve (called a
        u-curve) lying on the surface. For fixed <InlineMath>v</InlineMath>, if
        we think of <InlineMath>u</InlineMath> as representing time, the vector{' '}
        <InlineMath>{`\\partial \\mathbf{r}/\\partial u`}</InlineMath> is the
        velocity vector of this curve.
      </p>

      <p>
        A rectangle in <InlineMath>T</InlineMath> having area{' '}
        <InlineMath>{`\\Delta u \\, \\Delta v`}</InlineMath> is mapped by{' '}
        <InlineMath>{`\\mathbf{r}`}</InlineMath> onto a curvilinear parallelogram.
        The area of this parallelogram is approximately:
      </p>
      <MathBlock>
        {`\\left\\| \\frac{\\partial \\mathbf{r}}{\\partial u} \\Delta u \\times \\frac{\\partial \\mathbf{r}}{\\partial v} \\Delta v \\right\\| = \\left\\| \\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} \\right\\| \\Delta u \\, \\Delta v`}
      </MathBlock>

      <p>
        The length of the fundamental vector product may be thought of as a
        <strong> local magnification factor for areas</strong>.
      </p>

      <h3>The Tangent Plane</h3>

      <p>
        At each regular point, the vectors{' '}
        <InlineMath>{`\\partial \\mathbf{r}/\\partial u`}</InlineMath> and{' '}
        <InlineMath>{`\\partial \\mathbf{r}/\\partial v`}</InlineMath> determine
        a plane having the fundamental vector product as a normal. This plane is
        called the <strong>tangent plane</strong> of the surface at that point.
      </p>

      <h3>Example: Explicit Representation</h3>

      <p>
        For a surface with explicit representation{' '}
        <InlineMath>{`z = f(x, y)`}</InlineMath>, we can use{' '}
        <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath> as parameters:
      </p>
      <MathBlock>
        {`\\mathbf{r}(x, y) = x\\mathbf{i} + y\\mathbf{j} + f(x, y)\\mathbf{k}`}
      </MathBlock>

      <p>
        The fundamental vector product is:
      </p>
      <MathBlock>
        {`\\frac{\\partial \\mathbf{r}}{\\partial x} \\times \\frac{\\partial \\mathbf{r}}{\\partial y} = -\\frac{\\partial f}{\\partial x} \\mathbf{i} - \\frac{\\partial f}{\\partial y} \\mathbf{j} + \\mathbf{k}`}
      </MathBlock>

      <p>
        Since the z-component is 1, the fundamental vector product is never zero.
        Therefore the only singular points for this representation are points at
        which at least one of the partial derivatives fails to be continuous.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The fundamental vector product serves as a
        normal vector to the surface at each regular point. Its magnitude gives the
        local area magnification factor, and it is used to define surface integrals
        and compute surface areas.
      </Callout>
    </LessonLayout>
  );
}
