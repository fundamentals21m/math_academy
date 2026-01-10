import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section72() {
  return (
    <LessonLayout sectionId={72}>
      <h2 className="text-2xl font-semibold mb-4">Differential Forms</h2>

      <p className="mb-4">
        Differential forms provide a coordinate-free approach to integration and differentiation
        on manifolds. They unify many concepts from vector calculus and are essential for stating
        Stokes' theorem in its most general form.
      </p>

      <Definition title="10.13 - Basic Forms">
        <p className="mb-3">
          In <InlineMath>{'\\mathbb{R}^n'}</InlineMath>, the <em>basic 1-forms</em> are <InlineMath>{'dx_1, \\ldots, dx_n'}</InlineMath>.
          A <em>0-form</em> is simply a function <InlineMath>{'f: \\mathbb{R}^n \\to \\mathbb{R}'}</InlineMath>.
        </p>
        <p className="mb-3">
          A <em>k-form</em> is an expression of the form
        </p>
        <MathBlock>{'\\omega = \\sum_{i_1 < \\cdots < i_k} a_{i_1 \\cdots i_k}(x) \\, dx_{i_1} \\wedge \\cdots \\wedge dx_{i_k}'}</MathBlock>
        <p>
          where the coefficients <InlineMath>{'a_{i_1 \\cdots i_k}'}</InlineMath> are smooth functions.
        </p>
      </Definition>

      <Definition title="10.14 - Wedge Product">
        <p className="mb-3">
          The <em>wedge product</em> (or exterior product) <InlineMath>{'\\wedge'}</InlineMath> satisfies:
        </p>
        <p className="mb-2">
          (a) <InlineMath>{'dx_i \\wedge dx_j = -dx_j \\wedge dx_i'}</InlineMath> (anticommutativity)
        </p>
        <p className="mb-2">
          (b) <InlineMath>{'dx_i \\wedge dx_i = 0'}</InlineMath>
        </p>
        <p className="mb-3">
          (c) <InlineMath>{'\\wedge'}</InlineMath> is associative and bilinear over functions
        </p>
        <p>
          If <InlineMath>{'\\omega'}</InlineMath> is a <InlineMath>{'k'}</InlineMath>-form and <InlineMath>{'\\eta'}</InlineMath> is
          an <InlineMath>{'\\ell'}</InlineMath>-form, then <InlineMath>{'\\omega \\wedge \\eta'}</InlineMath> is
          a <InlineMath>{'(k+\\ell)'}</InlineMath>-form.
        </p>
      </Definition>

      <Example title="Wedge Products in 3D">
        <p className="mb-3">
          In <InlineMath>{'\\mathbb{R}^3'}</InlineMath>:
        </p>
        <MathBlock>{'dx \\wedge dy = -dy \\wedge dx'}</MathBlock>
        <MathBlock>{'dx \\wedge dx = dy \\wedge dy = dz \\wedge dz = 0'}</MathBlock>
        <p className="mb-3">
          For 1-forms <InlineMath>{'\\alpha = P\\,dx + Q\\,dy + R\\,dz'}</InlineMath> and <InlineMath>{'\\beta = A\\,dx + B\\,dy + C\\,dz'}</InlineMath>:
        </p>
        <MathBlock>{'\\alpha \\wedge \\beta = (PB - QA)\\,dx \\wedge dy + (PC - RA)\\,dx \\wedge dz + (QC - RB)\\,dy \\wedge dz'}</MathBlock>
      </Example>

      <Definition title="10.15 - Exterior Derivative">
        <p className="mb-3">
          The <em>exterior derivative</em> <InlineMath>{'d'}</InlineMath> maps <InlineMath>{'k'}</InlineMath>-forms
          to <InlineMath>{'(k+1)'}</InlineMath>-forms. For a 0-form <InlineMath>{'f'}</InlineMath>:
        </p>
        <MathBlock>{'df = \\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i} \\, dx_i'}</MathBlock>
        <p className="mb-3">
          For a <InlineMath>{'k'}</InlineMath>-form <InlineMath>{'\\omega = \\sum a_I \\, dx_I'}</InlineMath>:
        </p>
        <MathBlock>{'d\\omega = \\sum da_I \\wedge dx_I'}</MathBlock>
        <p>
          where <InlineMath>{'I = (i_1, \\ldots, i_k)'}</InlineMath> and <InlineMath>{'dx_I = dx_{i_1} \\wedge \\cdots \\wedge dx_{i_k}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="10.16 - Properties of Exterior Derivative"
        proof={
          <>
            <p className="mb-3">
              For (a): If <InlineMath>{'f'}</InlineMath> is a 0-form, <InlineMath>{'df = \\sum \\partial_i f \\, dx_i'}</InlineMath>, so
            </p>
            <MathBlock>{'d(df) = \\sum_{i,j} \\frac{\\partial^2 f}{\\partial x_j \\partial x_i} dx_j \\wedge dx_i'}</MathBlock>
            <p className="mb-3">
              Since <InlineMath>{'\\partial_j \\partial_i f = \\partial_i \\partial_j f'}</InlineMath> and
              <InlineMath>{'dx_j \\wedge dx_i = -dx_i \\wedge dx_j'}</InlineMath>, the terms cancel pairwise.
              The general case follows by induction.
            </p>
            <p>
              For (b): This follows from the product rule for partial derivatives and the anticommutativity of <InlineMath>{'\\wedge'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          The exterior derivative satisfies:
        </p>
        <p className="mb-2">
          (a) <InlineMath>{'d^2 = 0'}</InlineMath>, i.e., <InlineMath>{'d(d\\omega) = 0'}</InlineMath> for any form <InlineMath>{'\\omega'}</InlineMath>
        </p>
        <p className="mb-2">
          (b) <InlineMath>{'d(\\omega \\wedge \\eta) = d\\omega \\wedge \\eta + (-1)^k \\omega \\wedge d\\eta'}</InlineMath> for a <InlineMath>{'k'}</InlineMath>-form <InlineMath>{'\\omega'}</InlineMath>
        </p>
        <p>
          (c) <InlineMath>{'d'}</InlineMath> is linear
        </p>
      </Theorem>

      <Example title="Exterior Derivative in 3D">
        <p className="mb-3">
          For a 1-form <InlineMath>{'\\omega = P\\,dx + Q\\,dy + R\\,dz'}</InlineMath>:
        </p>
        <MathBlock>{'d\\omega = \\left(\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z}\\right) dy \\wedge dz + \\left(\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x}\\right) dz \\wedge dx + \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dx \\wedge dy'}</MathBlock>
        <p>
          This corresponds to the curl of the vector field <InlineMath>{'(P, Q, R)'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="Connection to Vector Calculus">
        <p>
          In <InlineMath>{'\\mathbb{R}^3'}</InlineMath>: <InlineMath>{'d'}</InlineMath> on 0-forms gives gradient,
          <InlineMath>{'d'}</InlineMath> on 1-forms gives curl, and <InlineMath>{'d'}</InlineMath> on 2-forms gives divergence.
          The identity <InlineMath>{'d^2 = 0'}</InlineMath> encodes <InlineMath>{'\\text{curl}(\\nabla f) = 0'}</InlineMath> and
          <InlineMath>{'\\text{div}(\\text{curl } F) = 0'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>A <InlineMath>{'k'}</InlineMath>-form is a sum of terms involving <InlineMath>{'k'}</InlineMath> differentials wedged together</li>
        <li>The wedge product is anticommutative: <InlineMath>{'dx \\wedge dy = -dy \\wedge dx'}</InlineMath></li>
        <li>The exterior derivative <InlineMath>{'d'}</InlineMath> maps <InlineMath>{'k'}</InlineMath>-forms to <InlineMath>{'(k+1)'}</InlineMath>-forms</li>
        <li>The key property <InlineMath>{'d^2 = 0'}</InlineMath> follows from symmetry of mixed partials</li>
        <li>Forms unify gradient, curl, and divergence into a single operator <InlineMath>{'d'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
