import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2 className="text-2xl font-semibold mb-4">Differentiation of Vector-valued Functions</h2>

      <p className="mb-4">
        The definition of the derivative extends naturally to functions whose values are
        vectors rather than scalars. This extension is important for studying curves in
        space, mechanics, and serves as preparation for multivariable calculus.
      </p>

      <Definition title="5.16 - Derivatives of Vector-valued Functions">
        <p className="mb-3">
          Let <InlineMath>{'\\mathbf{f}'}</InlineMath> be a function that maps <InlineMath>{'[a, b]'}</InlineMath> into <InlineMath>{'\\mathbb{R}^k'}</InlineMath>.
          If <InlineMath>{'\\mathbf{f}(t) = (f_1(t), f_2(t), \\ldots, f_k(t))'}</InlineMath>,
          where <InlineMath>{'f_1, \\ldots, f_k'}</InlineMath> are real functions on <InlineMath>{'[a, b]'}</InlineMath>,
          we say that <InlineMath>{'\\mathbf{f}'}</InlineMath> is <em>differentiable</em> at <InlineMath>{'t \\in [a, b]'}</InlineMath> if
        </p>
        <MathBlock>{'\\mathbf{f}\'(t) = \\lim_{h \\to 0} \\frac{\\mathbf{f}(t + h) - \\mathbf{f}(t)}{h}'}</MathBlock>
        <p className="mb-3">
          exists. The limit is computed in <InlineMath>{'\\mathbb{R}^k'}</InlineMath>, which means each
          component converges. Therefore:
        </p>
        <MathBlock>{'\\mathbf{f}\'(t) = (f_1\'(t), f_2\'(t), \\ldots, f_k\'(t))'}</MathBlock>
        <p>
          <InlineMath>{'\\mathbf{f}'}</InlineMath> is differentiable at <InlineMath>{'t'}</InlineMath> if and only if each
          component function <InlineMath>{'f_j'}</InlineMath> is differentiable at <InlineMath>{'t'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="5.17 - Differentiation Rules for Vector Functions">
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{f}'}</InlineMath> and <InlineMath>{'\\mathbf{g}'}</InlineMath> map <InlineMath>{'[a, b]'}</InlineMath> into <InlineMath>{'\\mathbb{R}^k'}</InlineMath> and
          are differentiable at <InlineMath>{'t \\in [a, b]'}</InlineMath>, then:
        </p>
        <p className="mb-2">
          <strong>(a)</strong> <InlineMath>{'(\\mathbf{f} + \\mathbf{g})\'(t) = \\mathbf{f}\'(t) + \\mathbf{g}\'(t)'}</InlineMath>
        </p>
        <p className="mb-2">
          <strong>(b)</strong> If <InlineMath>{'c'}</InlineMath> is a scalar: <InlineMath>{'(c\\mathbf{f})\'(t) = c\\mathbf{f}\'(t)'}</InlineMath>
        </p>
        <p className="mb-2">
          <strong>(c)</strong> <InlineMath>{'(\\mathbf{f} \\cdot \\mathbf{g})\'(t) = \\mathbf{f}\'(t) \\cdot \\mathbf{g}(t) + \\mathbf{f}(t) \\cdot \\mathbf{g}\'(t)'}</InlineMath>
        </p>
        <p>
          where <InlineMath>{'\\mathbf{f} \\cdot \\mathbf{g}'}</InlineMath> denotes the inner product (dot product).
        </p>
      </Theorem>

      <Example title="Velocity and Acceleration">
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{r}(t) = (x(t), y(t), z(t))'}</InlineMath> describes the position of
          a particle in 3D space at time <InlineMath>{'t'}</InlineMath>, then:
        </p>
        <p className="mb-2">
          <strong>Velocity:</strong> <InlineMath>{'\\mathbf{v}(t) = \\mathbf{r}\'(t) = (x\'(t), y\'(t), z\'(t))'}</InlineMath>
        </p>
        <p className="mb-2">
          <strong>Speed:</strong> <InlineMath>{'|\\mathbf{v}(t)| = \\sqrt{x\'(t)^2 + y\'(t)^2 + z\'(t)^2}'}</InlineMath>
        </p>
        <p className="mb-3">
          <strong>Acceleration:</strong> <InlineMath>{'\\mathbf{a}(t) = \\mathbf{v}\'(t) = \\mathbf{r}\'\'(t) = (x\'\'(t), y\'\'(t), z\'\'(t))'}</InlineMath>
        </p>
        <p>
          For circular motion <InlineMath>{'\\mathbf{r}(t) = (\\cos t, \\sin t)'}</InlineMath>:
        </p>
        <MathBlock>{'\\mathbf{v}(t) = (-\\sin t, \\cos t), \\quad \\mathbf{a}(t) = (-\\cos t, -\\sin t) = -\\mathbf{r}(t)'}</MathBlock>
      </Example>

      <Theorem
        title="5.18 - Chain Rule for Vector Functions"
        proof={
          <p>
            Apply the chain rule componentwise. If <InlineMath>{'\\mathbf{f}(t) = (f_1(t), \\ldots, f_k(t))'}</InlineMath>,
            then <InlineMath>{'(\\mathbf{f} \\circ g)\'(s) = ((f_1 \\circ g)\'(s), \\ldots, (f_k \\circ g)\'(s))'}</InlineMath>.
            By the chain rule for real functions, <InlineMath>{'(f_j \\circ g)\'(s) = f_j\'(g(s)) \\cdot g\'(s)'}</InlineMath>.
          </p>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{f}'}</InlineMath> maps <InlineMath>{'[a, b]'}</InlineMath> into <InlineMath>{'\\mathbb{R}^k'}</InlineMath> and
          is differentiable at <InlineMath>{'t'}</InlineMath>, and <InlineMath>{'g'}</InlineMath> is a real function
          on <InlineMath>{'[c, d]'}</InlineMath> with range in <InlineMath>{'[a, b]'}</InlineMath>, differentiable at <InlineMath>{'s'}</InlineMath>,
          with <InlineMath>{'g(s) = t'}</InlineMath>, then
        </p>
        <MathBlock>{'(\\mathbf{f} \\circ g)\'(s) = \\mathbf{f}\'(g(s)) \\cdot g\'(s)'}</MathBlock>
      </Theorem>

      <Theorem title="Constant Length Implies Orthogonality">
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{f}: [a, b] \\to \\mathbb{R}^k'}</InlineMath> is differentiable
          and <InlineMath>{'|\\mathbf{f}(t)|'}</InlineMath> is constant, then
        </p>
        <MathBlock>{'\\mathbf{f}(t) \\cdot \\mathbf{f}\'(t) = 0'}</MathBlock>
        <p>
          for all <InlineMath>{'t \\in [a, b]'}</InlineMath>. That is, <InlineMath>{'\\mathbf{f}\'(t)'}</InlineMath> is
          orthogonal to <InlineMath>{'\\mathbf{f}(t)'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Proof">
        <p className="mb-3">
          Let <InlineMath>{'\\mathbf{f}(t) \\cdot \\mathbf{f}(t) = |\\mathbf{f}(t)|^2 = c^2'}</InlineMath> (constant).
          Differentiating both sides:
        </p>
        <MathBlock>{'\\frac{d}{dt}(\\mathbf{f} \\cdot \\mathbf{f}) = 2\\mathbf{f}(t) \\cdot \\mathbf{f}\'(t) = 0'}</MathBlock>
      </Callout>

      <Example title="Motion on a Sphere">
        <p className="mb-3">
          If a particle moves on the surface of a sphere centered at the origin
          (i.e., <InlineMath>{'|\\mathbf{r}(t)| = R'}</InlineMath> constant), then
          the velocity vector <InlineMath>{'\\mathbf{r}\'(t)'}</InlineMath> is always tangent to the sphere
          (perpendicular to the position vector <InlineMath>{'\\mathbf{r}(t)'}</InlineMath>).
        </p>
        <p>
          This is because <InlineMath>{'\\mathbf{r}(t) \\cdot \\mathbf{r}\'(t) = 0'}</InlineMath>.
        </p>
      </Example>

      <Theorem title="5.19 - Mean Value Theorem for Vector Functions">
        <p className="mb-3">
          Let <InlineMath>{'\\mathbf{f}'}</InlineMath> be a continuous mapping of <InlineMath>{'[a, b]'}</InlineMath> into <InlineMath>{'\\mathbb{R}^k'}</InlineMath>,
          differentiable on <InlineMath>{'(a, b)'}</InlineMath>. Then there exists <InlineMath>{'t \\in (a, b)'}</InlineMath> such that
        </p>
        <MathBlock>{'|\\mathbf{f}(b) - \\mathbf{f}(a)| \\leq (b - a)|\\mathbf{f}\'(t)|'}</MathBlock>
      </Theorem>

      <Callout type="warning" title="Note on Vector MVT">
        <p>
          The exact analog of the scalar MVT (<InlineMath>{'\\mathbf{f}(b) - \\mathbf{f}(a) = (b-a)\\mathbf{f}\'(t)'}</InlineMath>)
          is false for vector functions. Consider <InlineMath>{'\\mathbf{f}(t) = (\\cos t, \\sin t)'}</InlineMath> on <InlineMath>{'[0, 2\\pi]'}</InlineMath>:
          <InlineMath>{'\\mathbf{f}(2\\pi) - \\mathbf{f}(0) = \\mathbf{0}'}</InlineMath>, but <InlineMath>{'\\mathbf{f}\'(t) \\neq \\mathbf{0}'}</InlineMath> for all <InlineMath>{'t'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Vector-valued functions are differentiated componentwise</li>
        <li><InlineMath>{'\\mathbf{f}\'(t) = (f_1\'(t), \\ldots, f_k\'(t))'}</InlineMath></li>
        <li>Sum and scalar multiplication rules hold as expected</li>
        <li>Product rule for dot product: <InlineMath>{'(\\mathbf{f} \\cdot \\mathbf{g})\' = \\mathbf{f}\' \\cdot \\mathbf{g} + \\mathbf{f} \\cdot \\mathbf{g}\''}</InlineMath></li>
        <li>Chain rule: <InlineMath>{'(\\mathbf{f} \\circ g)\'(s) = \\mathbf{f}\'(g(s)) \\cdot g\'(s)'}</InlineMath></li>
        <li>If <InlineMath>{'|\\mathbf{f}|'}</InlineMath> is constant, then <InlineMath>{'\\mathbf{f} \\perp \\mathbf{f}\''}</InlineMath></li>
        <li>The scalar MVT does not hold exactly for vector functions, only an inequality version</li>
      </ul>
    </LessonLayout>
  );
}
