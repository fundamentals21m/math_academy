import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section66() {
  return (
    <LessonLayout sectionId={66}>
      <h2 className="text-2xl font-semibold mb-4">Derivatives of Higher Order</h2>

      <p className="mb-4">
        Having defined the derivative of a function as a linear transformation, we now study
        higher-order derivatives. The second derivative is a bilinear map, the third derivative
        a trilinear map, and so on. A fundamental result is the symmetry of mixed partial
        derivatives for sufficiently smooth functions.
      </p>

      <Definition title="9.39 - Second Derivative">
        <p className="mb-3">
          Let <InlineMath>{'\\mathbf{f}: E \\to \\mathbb{R}^m'}</InlineMath> be differentiable on an open set <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath>.
          Then <InlineMath>{'\\mathbf{f}\': E \\to L(\\mathbb{R}^n, \\mathbb{R}^m)'}</InlineMath>.
        </p>
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{f}\''}</InlineMath> is differentiable at <InlineMath>{'\\mathbf{x} \\in E'}</InlineMath>, we define the <em>second derivative</em>
        </p>
        <MathBlock>{'\\mathbf{f}\'\'(\\mathbf{x}) = (\\mathbf{f}\')\'(\\mathbf{x}) \\in L(\\mathbb{R}^n, L(\\mathbb{R}^n, \\mathbb{R}^m))'}</MathBlock>
        <p className="mt-3">
          This can be identified with a bilinear map <InlineMath>{'\\mathbb{R}^n \\times \\mathbb{R}^n \\to \\mathbb{R}^m'}</InlineMath>:
        </p>
        <MathBlock>{'(\\mathbf{h}, \\mathbf{k}) \\mapsto (\\mathbf{f}\'\'(\\mathbf{x})\\mathbf{h})\\mathbf{k}'}</MathBlock>
      </Definition>

      <Definition title="9.40 - Second Partial Derivatives">
        <p className="mb-3">
          If <InlineMath>{'f: E \\to \\mathbb{R}'}</InlineMath> (scalar-valued), the <em>second partial derivatives</em> are
        </p>
        <MathBlock>{'D_{ij}f = D_j(D_i f) = \\frac{\\partial^2 f}{\\partial x_j \\partial x_i}'}</MathBlock>
        <p className="mb-3">
          These form the entries of the <em>Hessian matrix</em>:
        </p>
        <MathBlock>{'H_f(\\mathbf{x}) = \\begin{pmatrix} D_{11}f & D_{12}f & \\cdots & D_{1n}f \\\\ D_{21}f & D_{22}f & \\cdots & D_{2n}f \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ D_{n1}f & D_{n2}f & \\cdots & D_{nn}f \\end{pmatrix}'}</MathBlock>
        <p className="mt-3">
          Note: <InlineMath>{'D_{ij}f'}</InlineMath> means first differentiate with respect to <InlineMath>{'x_i'}</InlineMath>,
          then with respect to <InlineMath>{'x_j'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="9.41 - Symmetry of Mixed Partials (Schwarz/Clairaut)"
        proof={
          <>
            <p className="mb-3">
              Consider the second-order difference:
            </p>
            <MathBlock>{'\\Delta = f(\\mathbf{a} + s\\mathbf{e}_i + t\\mathbf{e}_j) - f(\\mathbf{a} + s\\mathbf{e}_i) - f(\\mathbf{a} + t\\mathbf{e}_j) + f(\\mathbf{a})'}</MathBlock>
            <p className="mb-3">
              Define <InlineMath>{'g(s) = f(\\mathbf{a} + s\\mathbf{e}_i + t\\mathbf{e}_j) - f(\\mathbf{a} + s\\mathbf{e}_i)'}</InlineMath>.
              Then <InlineMath>{'\\Delta = g(s) - g(0)'}</InlineMath>.
            </p>
            <p className="mb-3">
              By the mean value theorem: <InlineMath>{'\\Delta = s \\cdot g\'(\\sigma)'}</InlineMath> for some <InlineMath>{'\\sigma'}</InlineMath> between <InlineMath>{'0'}</InlineMath> and <InlineMath>{'s'}</InlineMath>.
            </p>
            <MathBlock>{'g\'(\\sigma) = D_i f(\\mathbf{a} + \\sigma\\mathbf{e}_i + t\\mathbf{e}_j) - D_i f(\\mathbf{a} + \\sigma\\mathbf{e}_i)'}</MathBlock>
            <p className="mb-3">
              Applying the mean value theorem again:
            </p>
            <MathBlock>{'g\'(\\sigma) = t \\cdot D_{ij}f(\\mathbf{a} + \\sigma\\mathbf{e}_i + \\tau\\mathbf{e}_j)'}</MathBlock>
            <p className="mb-3">
              for some <InlineMath>{'\\tau'}</InlineMath> between <InlineMath>{'0'}</InlineMath> and <InlineMath>{'t'}</InlineMath>. Thus <InlineMath>{'\\Delta = st \\cdot D_{ij}f(\\mathbf{p})'}</InlineMath> for some <InlineMath>{'\\mathbf{p}'}</InlineMath> near <InlineMath>{'\\mathbf{a}'}</InlineMath>.
            </p>
            <p className="mb-3">
              Similarly, interchanging the roles of <InlineMath>{'i'}</InlineMath> and <InlineMath>{'j'}</InlineMath>:
              <InlineMath>{'\\Delta = st \\cdot D_{ji}f(\\mathbf{q})'}</InlineMath> for some <InlineMath>{'\\mathbf{q}'}</InlineMath> near <InlineMath>{'\\mathbf{a}'}</InlineMath>.
            </p>
            <p>
              Dividing by <InlineMath>{'st'}</InlineMath> and taking <InlineMath>{'s, t \\to 0'}</InlineMath>,
              using continuity of <InlineMath>{'D_{ij}f'}</InlineMath> and <InlineMath>{'D_{ji}f'}</InlineMath>:
              <InlineMath>{'D_{ij}f(\\mathbf{a}) = D_{ji}f(\\mathbf{a})'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'f: E \\to \\mathbb{R}'}</InlineMath> where <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is open.
          If the partial derivatives <InlineMath>{'D_i f'}</InlineMath>, <InlineMath>{'D_j f'}</InlineMath>, and <InlineMath>{'D_{ij}f'}</InlineMath> exist in <InlineMath>{'E'}</InlineMath>,
          and <InlineMath>{'D_{ij}f'}</InlineMath> is continuous at <InlineMath>{'\\mathbf{a} \\in E'}</InlineMath>, then <InlineMath>{'D_{ji}f(\\mathbf{a})'}</InlineMath> exists and
        </p>
        <MathBlock>{'D_{ij}f(\\mathbf{a}) = D_{ji}f(\\mathbf{a})'}</MathBlock>
        <p className="mt-3">
          Equivalently: <InlineMath>{'\\frac{\\partial^2 f}{\\partial x_j \\partial x_i} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}'}</InlineMath>
        </p>
      </Theorem>

      <Callout type="info" title="The Class C^k">
        <p className="mb-3">
          We say <InlineMath>{'f \\in \\mathscr{C}^k(E)'}</InlineMath> if all partial derivatives of order <InlineMath>{'\\leq k'}</InlineMath>
          exist and are continuous on <InlineMath>{'E'}</InlineMath>.
        </p>
        <p>
          For <InlineMath>{'\\mathscr{C}^2'}</InlineMath> functions, the Hessian is always symmetric.
          More generally, for <InlineMath>{'\\mathscr{C}^k'}</InlineMath> functions, the order of differentiation in
          any partial derivative of order <InlineMath>{'\\leq k'}</InlineMath> does not matter.
        </p>
      </Callout>

      <Example title="9.42 - When Symmetry Fails">
        <p className="mb-3">
          Consider
        </p>
        <MathBlock>{'f(x, y) = \\begin{cases} \\frac{xy(x^2 - y^2)}{x^2 + y^2} & (x, y) \\neq (0, 0) \\\\ 0 & (x, y) = (0, 0) \\end{cases}'}</MathBlock>
        <p className="mb-3">
          One can compute:
        </p>
        <MathBlock>{'D_1 f(0, y) = -y, \\quad D_2 f(x, 0) = x'}</MathBlock>
        <p className="mb-3">
          Therefore:
        </p>
        <MathBlock>{'D_{12}f(0, 0) = \\lim_{y \\to 0} \\frac{D_1 f(0, y) - D_1 f(0, 0)}{y} = \\lim_{y \\to 0} \\frac{-y}{y} = -1'}</MathBlock>
        <MathBlock>{'D_{21}f(0, 0) = \\lim_{x \\to 0} \\frac{D_2 f(x, 0) - D_2 f(0, 0)}{x} = \\lim_{x \\to 0} \\frac{x}{x} = 1'}</MathBlock>
        <p>
          Here <InlineMath>{'D_{12}f(0,0) \\neq D_{21}f(0,0)'}</InlineMath> because
          <InlineMath>{'D_{12}f'}</InlineMath> and <InlineMath>{'D_{21}f'}</InlineMath> are not continuous at the origin.
        </p>
      </Example>

      <Definition title="9.43 - Higher-Order Derivatives">
        <p className="mb-3">
          For <InlineMath>{'k \\geq 1'}</InlineMath>, the <InlineMath>{'k'}</InlineMath>-th derivative <InlineMath>{'\\mathbf{f}^{(k)}(\\mathbf{x})'}</InlineMath>
          is a <InlineMath>{'k'}</InlineMath>-linear map from <InlineMath>{'(\\mathbb{R}^n)^k'}</InlineMath> to <InlineMath>{'\\mathbb{R}^m'}</InlineMath>.
        </p>
        <p className="mb-3">
          The partial derivatives of order <InlineMath>{'k'}</InlineMath> are denoted:
        </p>
        <MathBlock>{'D_{i_1 i_2 \\cdots i_k} f = \\frac{\\partial^k f}{\\partial x_{i_k} \\cdots \\partial x_{i_2} \\partial x_{i_1}}'}</MathBlock>
        <p className="mt-3">
          For <InlineMath>{'f \\in \\mathscr{C}^k'}</InlineMath>, these are symmetric in the indices: the value
          depends only on how many times each variable appears, not on the order of differentiation.
        </p>
      </Definition>

      <Theorem
        title="9.44 - Taylor's Theorem in Several Variables"
        proof={
          <>
            <p className="mb-3">
              Consider the function of one variable <InlineMath>{'g(t) = f(\\mathbf{a} + t\\mathbf{h})'}</InlineMath>.
              Then <InlineMath>{'g(1) = f(\\mathbf{a} + \\mathbf{h})'}</InlineMath> and <InlineMath>{'g(0) = f(\\mathbf{a})'}</InlineMath>.
            </p>
            <p className="mb-3">
              By the chain rule:
            </p>
            <MathBlock>{'g\'(t) = \\sum_{i=1}^n h_i (D_i f)(\\mathbf{a} + t\\mathbf{h})'}</MathBlock>
            <MathBlock>{'g\'\'(t) = \\sum_{i,j=1}^n h_i h_j (D_{ij} f)(\\mathbf{a} + t\\mathbf{h})'}</MathBlock>
            <p className="mb-3">
              Applying one-variable Taylor's theorem to <InlineMath>{'g'}</InlineMath>:
            </p>
            <MathBlock>{'g(1) = g(0) + g\'(0) + \\frac{1}{2}g\'\'(0) + \\cdots + \\frac{1}{k!}g^{(k)}(0) + R_k'}</MathBlock>
            <p>
              Substituting back gives the multivariable formula.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'f \\in \\mathscr{C}^{k+1}(E)'}</InlineMath> where <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is convex.
          For <InlineMath>{'\\mathbf{a}, \\mathbf{a} + \\mathbf{h} \\in E'}</InlineMath>:
        </p>
        <MathBlock>{'f(\\mathbf{a} + \\mathbf{h}) = \\sum_{|\\alpha| \\leq k} \\frac{D^\\alpha f(\\mathbf{a})}{\\alpha!} \\mathbf{h}^\\alpha + R_k(\\mathbf{h})'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'\\alpha = (\\alpha_1, \\ldots, \\alpha_n)'}</InlineMath> is a multi-index, <InlineMath>{'|\\alpha| = \\sum \\alpha_i'}</InlineMath>,
          <InlineMath>{'\\alpha! = \\prod \\alpha_i!'}</InlineMath>, <InlineMath>{'\\mathbf{h}^\\alpha = \\prod h_i^{\\alpha_i}'}</InlineMath>, and
        </p>
        <MathBlock>{'D^\\alpha = D_1^{\\alpha_1} \\cdots D_n^{\\alpha_n}'}</MathBlock>
        <p className="mt-3">
          The remainder satisfies <InlineMath>{'R_k(\\mathbf{h}) = o(|\\mathbf{h}|^k)'}</InlineMath> as <InlineMath>{'\\mathbf{h} \\to \\mathbf{0}'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="9.45 - Second-Order Taylor Expansion">
        <p className="mb-3">
          For a <InlineMath>{'\\mathscr{C}^3'}</InlineMath> function <InlineMath>{'f: \\mathbb{R}^n \\to \\mathbb{R}'}</InlineMath>:
        </p>
        <MathBlock>{'f(\\mathbf{a} + \\mathbf{h}) = f(\\mathbf{a}) + \\nabla f(\\mathbf{a}) \\cdot \\mathbf{h} + \\frac{1}{2} \\mathbf{h}^T H_f(\\mathbf{a}) \\mathbf{h} + O(|\\mathbf{h}|^3)'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'\\nabla f = (D_1 f, \\ldots, D_n f)'}</InlineMath> is the gradient and <InlineMath>{'H_f'}</InlineMath> is the Hessian.
        </p>
        <p>
          The quadratic term <InlineMath>{'\\frac{1}{2} \\mathbf{h}^T H_f \\mathbf{h} = \\frac{1}{2} \\sum_{i,j} D_{ij}f(\\mathbf{a}) h_i h_j'}</InlineMath>
          is a quadratic form that determines the local curvature of <InlineMath>{'f'}</InlineMath>.
        </p>
      </Example>

      <Callout type="warning" title="Second Derivative Test">
        <p className="mb-3">
          At a critical point <InlineMath>{'\\mathbf{a}'}</InlineMath> where <InlineMath>{'\\nabla f(\\mathbf{a}) = \\mathbf{0}'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside">
          <li>If <InlineMath>{'H_f(\\mathbf{a})'}</InlineMath> is positive definite: local minimum</li>
          <li>If <InlineMath>{'H_f(\\mathbf{a})'}</InlineMath> is negative definite: local maximum</li>
          <li>If <InlineMath>{'H_f(\\mathbf{a})'}</InlineMath> is indefinite: saddle point</li>
          <li>If <InlineMath>{'H_f(\\mathbf{a})'}</InlineMath> is semidefinite: test inconclusive</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The <InlineMath>{'k'}</InlineMath>-th derivative is a symmetric <InlineMath>{'k'}</InlineMath>-linear map (for <InlineMath>{'\\mathscr{C}^k'}</InlineMath> functions)</li>
        <li>Schwarz theorem: if <InlineMath>{'D_{ij}f'}</InlineMath> is continuous, then <InlineMath>{'D_{ij}f = D_{ji}f'}</InlineMath></li>
        <li>For <InlineMath>{'\\mathscr{C}^k'}</InlineMath> functions, the order of partial differentiation does not matter</li>
        <li>The Hessian matrix <InlineMath>{'H_f'}</InlineMath> contains all second partial derivatives</li>
        <li>Taylor's theorem extends to several variables using multi-index notation</li>
        <li>The second derivative test uses eigenvalues of the Hessian to classify critical points</li>
      </ul>
    </LessonLayout>
  );
}
