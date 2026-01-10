import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>

      <p className="mb-4">
        We now define differentiation for functions of several variables. The key idea
        is that the derivative at a point is not a number but a <em>linear transformation</em>
        that provides the best linear approximation to the function near that point.
        This approach unifies and generalizes the single-variable derivative.
      </p>

      <Definition title="9.11 - Differentiability">
        <p className="mb-3">
          Suppose <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is open, <InlineMath>{'\\mathbf{f}: E \\to \\mathbb{R}^m'}</InlineMath>,
          and <InlineMath>{'\\mathbf{x} \\in E'}</InlineMath>. If there exists a linear transformation
          <InlineMath>{'A \\in L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath> such that
        </p>
        <MathBlock>{'\\lim_{\\mathbf{h} \\to \\mathbf{0}} \\frac{|\\mathbf{f}(\\mathbf{x} + \\mathbf{h}) - \\mathbf{f}(\\mathbf{x}) - A\\mathbf{h}|}{|\\mathbf{h}|} = 0'}</MathBlock>
        <p className="mb-3">
          then we say that <InlineMath>{'\\mathbf{f}'}</InlineMath> is <em>differentiable</em> at <InlineMath>{'\\mathbf{x}'}</InlineMath>,
          and we write
        </p>
        <MathBlock>{'\\mathbf{f}\'(\\mathbf{x}) = A'}</MathBlock>
        <p className="mt-3">
          The linear transformation <InlineMath>{'A'}</InlineMath> is called the <em>derivative</em> (or <em>differential</em>
          or <em>total derivative</em>) of <InlineMath>{'\\mathbf{f}'}</InlineMath> at <InlineMath>{'\\mathbf{x}'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info">
        <p className="mb-3">
          The definition says that near <InlineMath>{'\\mathbf{x}'}</InlineMath>, we have the approximation
        </p>
        <MathBlock>{'\\mathbf{f}(\\mathbf{x} + \\mathbf{h}) \\approx \\mathbf{f}(\\mathbf{x}) + \\mathbf{f}\'(\\mathbf{x})\\mathbf{h}'}</MathBlock>
        <p>
          with an error that is <InlineMath>{'o(|\\mathbf{h}|)'}</InlineMath>, i.e., goes to zero faster than <InlineMath>{'|\\mathbf{h}|'}</InlineMath>.
        </p>
      </Callout>

      <Theorem
        title="9.12 - Uniqueness of Derivative"
        proof={
          <>
            <p className="mb-3">
              Suppose both <InlineMath>{'A_1'}</InlineMath> and <InlineMath>{'A_2'}</InlineMath> satisfy the definition. Then
            </p>
            <MathBlock>{'\\lim_{\\mathbf{h} \\to \\mathbf{0}} \\frac{|(A_1 - A_2)\\mathbf{h}|}{|\\mathbf{h}|} = 0'}</MathBlock>
            <p className="mb-3">
              Fix any unit vector <InlineMath>{'\\mathbf{u}'}</InlineMath> and let <InlineMath>{'\\mathbf{h} = t\\mathbf{u}'}</InlineMath> for <InlineMath>{'t > 0'}</InlineMath>. Then
            </p>
            <MathBlock>{'|(A_1 - A_2)\\mathbf{u}| = \\lim_{t \\to 0^+} \\frac{|(A_1 - A_2)(t\\mathbf{u})|}{|t\\mathbf{u}|} = 0'}</MathBlock>
            <p>
              Since this holds for all unit vectors <InlineMath>{'\\mathbf{u}'}</InlineMath>, we have <InlineMath>{'A_1 = A_2'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{f}'}</InlineMath> is differentiable at <InlineMath>{'\\mathbf{x}'}</InlineMath>, then the derivative
          <InlineMath>{'\\mathbf{f}\'(\\mathbf{x})'}</InlineMath> is unique.
        </p>
      </Theorem>

      <Theorem
        title="9.13 - Differentiability Implies Continuity"
        proof={
          <>
            <p className="mb-3">
              If <InlineMath>{'\\mathbf{f}'}</InlineMath> is differentiable at <InlineMath>{'\\mathbf{x}'}</InlineMath> with derivative <InlineMath>{'A'}</InlineMath>, then
            </p>
            <MathBlock>{'|\\mathbf{f}(\\mathbf{x}+\\mathbf{h}) - \\mathbf{f}(\\mathbf{x})| \\leq |A\\mathbf{h}| + o(|\\mathbf{h}|) \\leq \\|A\\| \\cdot |\\mathbf{h}| + o(|\\mathbf{h}|)'}</MathBlock>
            <p>
              As <InlineMath>{'\\mathbf{h} \\to \\mathbf{0}'}</InlineMath>, the right side goes to <InlineMath>{'0'}</InlineMath>, so <InlineMath>{'\\mathbf{f}(\\mathbf{x}+\\mathbf{h}) \\to \\mathbf{f}(\\mathbf{x})'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{f}'}</InlineMath> is differentiable at <InlineMath>{'\\mathbf{x}'}</InlineMath>, then <InlineMath>{'\\mathbf{f}'}</InlineMath> is continuous at <InlineMath>{'\\mathbf{x}'}</InlineMath>.
        </p>
      </Theorem>

      <Definition title="9.14 - Partial Derivatives">
        <p className="mb-3">
          Let <InlineMath>{'\\{\\mathbf{e}_1, \\ldots, \\mathbf{e}_n\\}'}</InlineMath> be the standard basis of <InlineMath>{'\\mathbb{R}^n'}</InlineMath>.
          Suppose <InlineMath>{'\\mathbf{f}: E \\to \\mathbb{R}^m'}</InlineMath> and <InlineMath>{'\\mathbf{x} \\in E'}</InlineMath>. The <em>partial derivative</em>
          of <InlineMath>{'\\mathbf{f}'}</InlineMath> with respect to <InlineMath>{'x_j'}</InlineMath> at <InlineMath>{'\\mathbf{x}'}</InlineMath> is
        </p>
        <MathBlock>{'(D_j \\mathbf{f})(\\mathbf{x}) = \\lim_{t \\to 0} \\frac{\\mathbf{f}(\\mathbf{x} + t\\mathbf{e}_j) - \\mathbf{f}(\\mathbf{x})}{t}'}</MathBlock>
        <p className="mt-3">
          if this limit exists. We also write <InlineMath>{'\\frac{\\partial \\mathbf{f}}{\\partial x_j}'}</InlineMath> for <InlineMath>{'D_j \\mathbf{f}'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="9.15 - The Jacobian Matrix">
        <p className="mb-3">
          Suppose <InlineMath>{'\\mathbf{f} = (f_1, \\ldots, f_m): E \\to \\mathbb{R}^m'}</InlineMath> where each <InlineMath>{'f_i: E \\to \\mathbb{R}'}</InlineMath>.
          The <em>Jacobian matrix</em> of <InlineMath>{'\\mathbf{f}'}</InlineMath> at <InlineMath>{'\\mathbf{x}'}</InlineMath> is the <InlineMath>{'m \\times n'}</InlineMath> matrix
        </p>
        <MathBlock>{'[\\mathbf{f}\'(\\mathbf{x})] = \\begin{pmatrix} D_1 f_1 & D_2 f_1 & \\cdots & D_n f_1 \\\\ D_1 f_2 & D_2 f_2 & \\cdots & D_n f_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ D_1 f_m & D_2 f_m & \\cdots & D_n f_m \\end{pmatrix}'}</MathBlock>
        <p className="mt-3">
          When <InlineMath>{'m = n'}</InlineMath>, the <em>Jacobian determinant</em> is <InlineMath>{'\\det[\\mathbf{f}\'(\\mathbf{x})]'}</InlineMath>,
          often denoted <InlineMath>{'\\frac{\\partial(f_1, \\ldots, f_n)}{\\partial(x_1, \\ldots, x_n)}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="9.16 - Derivative and Partial Derivatives"
        proof={
          <>
            <p className="mb-3">
              Write <InlineMath>{'\\mathbf{f} = (f_1, \\ldots, f_m)'}</InlineMath> and <InlineMath>{'A = [a_{ij}]'}</InlineMath>.
              For the basis vector <InlineMath>{'\\mathbf{e}_j'}</InlineMath>, the <InlineMath>{'i'}</InlineMath>-th component of
              <InlineMath>{'\\mathbf{f}(\\mathbf{x} + t\\mathbf{e}_j) - \\mathbf{f}(\\mathbf{x}) - A(t\\mathbf{e}_j)'}</InlineMath> is
            </p>
            <MathBlock>{'f_i(\\mathbf{x} + t\\mathbf{e}_j) - f_i(\\mathbf{x}) - t a_{ij}'}</MathBlock>
            <p className="mb-3">
              Dividing by <InlineMath>{'t'}</InlineMath> and taking <InlineMath>{'t \\to 0'}</InlineMath>:
            </p>
            <MathBlock>{'D_j f_i(\\mathbf{x}) = a_{ij}'}</MathBlock>
            <p>
              Thus the matrix of <InlineMath>{'\\mathbf{f}\'(\\mathbf{x})'}</InlineMath> has entries <InlineMath>{'a_{ij} = D_j f_i(\\mathbf{x})'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{f}'}</InlineMath> is differentiable at <InlineMath>{'\\mathbf{x}'}</InlineMath>, then all partial derivatives
          <InlineMath>{'D_j f_i(\\mathbf{x})'}</InlineMath> exist, and the matrix representing <InlineMath>{'\\mathbf{f}\'(\\mathbf{x})'}</InlineMath> is the Jacobian matrix:
        </p>
        <MathBlock>{'[\\mathbf{f}\'(\\mathbf{x})]_{ij} = D_j f_i(\\mathbf{x}) = \\frac{\\partial f_i}{\\partial x_j}(\\mathbf{x})'}</MathBlock>
      </Theorem>

      <Callout type="warning" title="Existence of Partials Does Not Imply Differentiability">
        <p>
          The converse of Theorem 9.16 is false. The existence of all partial derivatives does not
          guarantee differentiability. For example, <InlineMath>{'f(x,y) = xy/\\sqrt{x^2+y^2}'}</InlineMath> for
          <InlineMath>{'(x,y) \\neq (0,0)'}</InlineMath> and <InlineMath>{'f(0,0) = 0'}</InlineMath> has partial derivatives at the origin
          but is not differentiable there.
        </p>
      </Callout>

      <Theorem
        title="9.17 - Sufficient Condition for Differentiability"
        proof={
          <>
            <p className="mb-3">
              It suffices to prove this for <InlineMath>{'m = 1'}</InlineMath> (apply to each component).
              Let <InlineMath>{'\\mathbf{h} = \\sum_{j=1}^n h_j \\mathbf{e}_j'}</InlineMath>. Define
            </p>
            <MathBlock>{'\\mathbf{v}_0 = \\mathbf{x}, \\quad \\mathbf{v}_k = \\mathbf{x} + \\sum_{j=1}^k h_j \\mathbf{e}_j'}</MathBlock>
            <p className="mb-3">
              By the mean value theorem in one variable, for each <InlineMath>{'k'}</InlineMath>:
            </p>
            <MathBlock>{'f(\\mathbf{v}_k) - f(\\mathbf{v}_{k-1}) = h_k (D_k f)(\\mathbf{v}_{k-1} + \\theta_k h_k \\mathbf{e}_k)'}</MathBlock>
            <p className="mb-3">
              for some <InlineMath>{'0 < \\theta_k < 1'}</InlineMath>. Summing:
            </p>
            <MathBlock>{'f(\\mathbf{x}+\\mathbf{h}) - f(\\mathbf{x}) = \\sum_{k=1}^n h_k (D_k f)(\\mathbf{y}_k)'}</MathBlock>
            <p className="mb-3">
              where <InlineMath>{'\\mathbf{y}_k \\to \\mathbf{x}'}</InlineMath> as <InlineMath>{'\\mathbf{h} \\to \\mathbf{0}'}</InlineMath>.
              Since <InlineMath>{'D_k f'}</InlineMath> is continuous at <InlineMath>{'\\mathbf{x}'}</InlineMath>:
            </p>
            <MathBlock>{'(D_k f)(\\mathbf{y}_k) = (D_k f)(\\mathbf{x}) + o(1)'}</MathBlock>
            <p>
              The error term is <InlineMath>{'o(|\\mathbf{h}|)'}</InlineMath>, establishing differentiability.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\mathbf{f}: E \\to \\mathbb{R}^m'}</InlineMath> where <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is open.
          If all partial derivatives <InlineMath>{'D_j f_i'}</InlineMath> exist in <InlineMath>{'E'}</InlineMath> and are continuous at <InlineMath>{'\\mathbf{x} \\in E'}</InlineMath>,
          then <InlineMath>{'\\mathbf{f}'}</InlineMath> is differentiable at <InlineMath>{'\\mathbf{x}'}</InlineMath>.
        </p>
      </Theorem>

      <Definition title="9.18 - Continuously Differentiable">
        <p className="mb-3">
          We say <InlineMath>{'\\mathbf{f}'}</InlineMath> is <em>continuously differentiable</em> in <InlineMath>{'E'}</InlineMath>,
          written <InlineMath>{'\\mathbf{f} \\in \\mathscr{C}\'(E)'}</InlineMath>, if <InlineMath>{'\\mathbf{f}'}</InlineMath> is differentiable
          at every point of <InlineMath>{'E'}</InlineMath> and <InlineMath>{'\\mathbf{f}\': E \\to L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath> is continuous.
        </p>
        <p className="mt-3">
          By Theorem 9.17, <InlineMath>{'\\mathbf{f} \\in \\mathscr{C}\'(E)'}</InlineMath> if and only if all partial derivatives
          exist and are continuous in <InlineMath>{'E'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="9.19 - The Chain Rule"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'A = \\mathbf{f}\'(\\mathbf{x})'}</InlineMath> and <InlineMath>{'B = \\mathbf{g}\'(\\mathbf{y})'}</InlineMath> where <InlineMath>{'\\mathbf{y} = \\mathbf{f}(\\mathbf{x})'}</InlineMath>.
              We need to show
            </p>
            <MathBlock>{'\\lim_{\\mathbf{h} \\to \\mathbf{0}} \\frac{|\\mathbf{g}(\\mathbf{f}(\\mathbf{x}+\\mathbf{h})) - \\mathbf{g}(\\mathbf{y}) - BA\\mathbf{h}|}{|\\mathbf{h}|} = 0'}</MathBlock>
            <p className="mb-3">
              Let <InlineMath>{'\\mathbf{k} = \\mathbf{f}(\\mathbf{x}+\\mathbf{h}) - \\mathbf{f}(\\mathbf{x})'}</InlineMath>. By differentiability of <InlineMath>{'\\mathbf{f}'}</InlineMath>:
            </p>
            <MathBlock>{'\\mathbf{k} = A\\mathbf{h} + \\boldsymbol{\\epsilon}_1(\\mathbf{h})|\\mathbf{h}|'}</MathBlock>
            <p className="mb-3">
              where <InlineMath>{'\\boldsymbol{\\epsilon}_1(\\mathbf{h}) \\to \\mathbf{0}'}</InlineMath> as <InlineMath>{'\\mathbf{h} \\to \\mathbf{0}'}</InlineMath>. By differentiability of <InlineMath>{'\\mathbf{g}'}</InlineMath>:
            </p>
            <MathBlock>{'\\mathbf{g}(\\mathbf{y}+\\mathbf{k}) - \\mathbf{g}(\\mathbf{y}) = B\\mathbf{k} + \\boldsymbol{\\epsilon}_2(\\mathbf{k})|\\mathbf{k}|'}</MathBlock>
            <p className="mb-3">
              Substituting:
            </p>
            <MathBlock>{'\\mathbf{g}(\\mathbf{f}(\\mathbf{x}+\\mathbf{h})) - \\mathbf{g}(\\mathbf{y}) = BA\\mathbf{h} + B\\boldsymbol{\\epsilon}_1|\\mathbf{h}| + \\boldsymbol{\\epsilon}_2|\\mathbf{k}|'}</MathBlock>
            <p className="mb-3">
              Since <InlineMath>{'|\\mathbf{k}| \\leq (\\|A\\| + o(1))|\\mathbf{h}|'}</InlineMath>, we have <InlineMath>{'|\\mathbf{k}|/|\\mathbf{h}|'}</InlineMath> bounded.
              Dividing by <InlineMath>{'|\\mathbf{h}|'}</InlineMath> and taking the limit gives the result.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\mathbf{f}: E \\to \\mathbb{R}^m'}</InlineMath> is differentiable at <InlineMath>{'\\mathbf{x} \\in E'}</InlineMath>,
          where <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is open. Suppose <InlineMath>{'\\mathbf{g}: U \\to \\mathbb{R}^k'}</InlineMath> is
          differentiable at <InlineMath>{'\\mathbf{f}(\\mathbf{x})'}</InlineMath>, where <InlineMath>{'U \\subset \\mathbb{R}^m'}</InlineMath> is open
          and <InlineMath>{'\\mathbf{f}(E) \\subset U'}</InlineMath>. Then <InlineMath>{'\\mathbf{g} \\circ \\mathbf{f}'}</InlineMath> is differentiable at <InlineMath>{'\\mathbf{x}'}</InlineMath>, and
        </p>
        <MathBlock>{'(\\mathbf{g} \\circ \\mathbf{f})\'(\\mathbf{x}) = \\mathbf{g}\'(\\mathbf{f}(\\mathbf{x})) \\circ \\mathbf{f}\'(\\mathbf{x})'}</MathBlock>
      </Theorem>

      <Example title="9.20 - Chain Rule in Matrix Form">
        <p className="mb-3">
          Let <InlineMath>{'\\mathbf{f}: \\mathbb{R}^2 \\to \\mathbb{R}^3'}</InlineMath> and <InlineMath>{'\\mathbf{g}: \\mathbb{R}^3 \\to \\mathbb{R}^2'}</InlineMath>.
          The chain rule says the Jacobian of <InlineMath>{'\\mathbf{g} \\circ \\mathbf{f}'}</InlineMath> is the product of Jacobians:
        </p>
        <MathBlock>{'[(\\mathbf{g} \\circ \\mathbf{f})\'(\\mathbf{x})] = [\\mathbf{g}\'(\\mathbf{f}(\\mathbf{x}))] \\cdot [\\mathbf{f}\'(\\mathbf{x})]'}</MathBlock>
        <p className="mb-3">
          In component form, if <InlineMath>{'\\mathbf{y} = \\mathbf{f}(\\mathbf{x})'}</InlineMath> with <InlineMath>{'y_i = f_i(x_1, x_2)'}</InlineMath>
          and <InlineMath>{'z_j = g_j(y_1, y_2, y_3)'}</InlineMath>, then
        </p>
        <MathBlock>{'\\frac{\\partial z_j}{\\partial x_k} = \\sum_{i=1}^3 \\frac{\\partial g_j}{\\partial y_i} \\frac{\\partial f_i}{\\partial x_k}'}</MathBlock>
        <p>
          This is the multivariable generalization of <InlineMath>{'(g \\circ f)\' = g\'(f) \\cdot f\''}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The derivative <InlineMath>{'\\mathbf{f}\'(\\mathbf{x})'}</InlineMath> is a linear transformation giving the best linear approximation</li>
        <li>Differentiability means <InlineMath>{'\\mathbf{f}(\\mathbf{x}+\\mathbf{h}) = \\mathbf{f}(\\mathbf{x}) + \\mathbf{f}\'(\\mathbf{x})\\mathbf{h} + o(|\\mathbf{h}|)'}</InlineMath></li>
        <li>The Jacobian matrix has entries <InlineMath>{'[\\mathbf{f}\'(\\mathbf{x})]_{ij} = \\partial f_i / \\partial x_j'}</InlineMath></li>
        <li>Differentiability implies continuity, but not conversely</li>
        <li>Continuous partial derivatives imply differentiability</li>
        <li>The chain rule: <InlineMath>{'(\\mathbf{g} \\circ \\mathbf{f})\' = \\mathbf{g}\' \\circ \\mathbf{f}\''}</InlineMath> (composition of linear maps)</li>
      </ul>
    </LessonLayout>
  );
}
