import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <h2 className="text-2xl font-semibold mb-4">The Implicit Function Theorem</h2>

      <p className="mb-4">
        The implicit function theorem addresses the question: when can an equation <InlineMath>{'F(\\mathbf{x}, \\mathbf{y}) = \\mathbf{0}'}</InlineMath>
        be solved for <InlineMath>{'\\mathbf{y}'}</InlineMath> as a function of <InlineMath>{'\\mathbf{x}'}</InlineMath>?
        This fundamental result has applications throughout analysis, differential equations,
        and geometry. It is closely related to the inverse function theorem.
      </p>

      <Theorem
        title="9.28 - The Implicit Function Theorem"
        proof={
          <>
            <p className="mb-3">
              <strong>Setup:</strong> Write <InlineMath>{'\\mathbf{F}(\\mathbf{x}, \\mathbf{y})'}</InlineMath> where <InlineMath>{'\\mathbf{x} \\in \\mathbb{R}^n'}</InlineMath>
              and <InlineMath>{'\\mathbf{y} \\in \\mathbb{R}^m'}</InlineMath>. The derivative <InlineMath>{'\\mathbf{F}\'(\\mathbf{a}, \\mathbf{b})'}</InlineMath>
              is an <InlineMath>{'m \\times (n+m)'}</InlineMath> matrix which we partition as
            </p>
            <MathBlock>{'\\mathbf{F}\'(\\mathbf{a}, \\mathbf{b}) = [A_x \\,|\\, A_y]'}</MathBlock>
            <p className="mb-3">
              where <InlineMath>{'A_x'}</InlineMath> is <InlineMath>{'m \\times n'}</InlineMath> (partials with respect to <InlineMath>{'x_j'}</InlineMath>)
              and <InlineMath>{'A_y'}</InlineMath> is <InlineMath>{'m \\times m'}</InlineMath> (partials with respect to <InlineMath>{'y_k'}</InlineMath>).
              We assume <InlineMath>{'A_y'}</InlineMath> is invertible.
            </p>
            <p className="mb-3">
              <strong>Application of Inverse Function Theorem:</strong> Define <InlineMath>{'\\mathbf{G}: \\mathbb{R}^{n+m} \\to \\mathbb{R}^{n+m}'}</InlineMath> by
            </p>
            <MathBlock>{'\\mathbf{G}(\\mathbf{x}, \\mathbf{y}) = (\\mathbf{x}, \\mathbf{F}(\\mathbf{x}, \\mathbf{y}))'}</MathBlock>
            <p className="mb-3">
              The Jacobian of <InlineMath>{'\\mathbf{G}'}</InlineMath> at <InlineMath>{'(\\mathbf{a}, \\mathbf{b})'}</InlineMath> is
            </p>
            <MathBlock>{'\\mathbf{G}\'(\\mathbf{a}, \\mathbf{b}) = \\begin{pmatrix} I_n & 0 \\\\ A_x & A_y \\end{pmatrix}'}</MathBlock>
            <p className="mb-3">
              This is invertible (determinant = <InlineMath>{'\\det A_y \\neq 0'}</InlineMath>).
              By the inverse function theorem, <InlineMath>{'\\mathbf{G}'}</InlineMath> has a local inverse <InlineMath>{'\\mathbf{H}'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Construction of g:</strong> Write <InlineMath>{'\\mathbf{H}(\\mathbf{x}, \\mathbf{z}) = (\\mathbf{h}_1(\\mathbf{x}, \\mathbf{z}), \\mathbf{h}_2(\\mathbf{x}, \\mathbf{z}))'}</InlineMath>.
              Since <InlineMath>{'\\mathbf{G}(\\mathbf{H}(\\mathbf{x}, \\mathbf{z})) = (\\mathbf{x}, \\mathbf{z})'}</InlineMath>, we have <InlineMath>{'\\mathbf{h}_1(\\mathbf{x}, \\mathbf{z}) = \\mathbf{x}'}</InlineMath>.
            </p>
            <p className="mb-3">
              Define <InlineMath>{'\\mathbf{g}(\\mathbf{x}) = \\mathbf{h}_2(\\mathbf{x}, \\mathbf{0})'}</InlineMath>. Then:
            </p>
            <MathBlock>{'\\mathbf{G}(\\mathbf{x}, \\mathbf{g}(\\mathbf{x})) = \\mathbf{G}(\\mathbf{H}(\\mathbf{x}, \\mathbf{0})) = (\\mathbf{x}, \\mathbf{0})'}</MathBlock>
            <p className="mb-3">
              The second component says <InlineMath>{'\\mathbf{F}(\\mathbf{x}, \\mathbf{g}(\\mathbf{x})) = \\mathbf{0}'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Derivative formula:</strong> Differentiate <InlineMath>{'\\mathbf{F}(\\mathbf{x}, \\mathbf{g}(\\mathbf{x})) = \\mathbf{0}'}</InlineMath>:
            </p>
            <MathBlock>{'A_x + A_y \\mathbf{g}\'(\\mathbf{x}) = 0'}</MathBlock>
            <p>
              Therefore <InlineMath>{'\\mathbf{g}\'(\\mathbf{x}) = -A_y^{-1} A_x'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'\\mathbf{F}: \\mathbb{R}^{n+m} \\to \\mathbb{R}^m'}</InlineMath> be a <InlineMath>{'\\mathscr{C}^1'}</InlineMath> mapping.
          Suppose <InlineMath>{'\\mathbf{F}(\\mathbf{a}, \\mathbf{b}) = \\mathbf{0}'}</InlineMath> where <InlineMath>{'(\\mathbf{a}, \\mathbf{b}) \\in \\mathbb{R}^{n+m}'}</InlineMath>,
          and the <InlineMath>{'m \\times m'}</InlineMath> matrix of partial derivatives
        </p>
        <MathBlock>{'A_y = \\left[\\frac{\\partial F_i}{\\partial y_j}(\\mathbf{a}, \\mathbf{b})\\right]_{i,j=1}^m'}</MathBlock>
        <p className="mb-3">is invertible.</p>
        <p className="mb-3">
          Then there exist open neighborhoods <InlineMath>{'U \\subset \\mathbb{R}^n'}</InlineMath> of <InlineMath>{'\\mathbf{a}'}</InlineMath>
          and <InlineMath>{'W \\subset \\mathbb{R}^m'}</InlineMath> of <InlineMath>{'\\mathbf{b}'}</InlineMath>, and a unique <InlineMath>{'\\mathscr{C}^1'}</InlineMath> mapping
          <InlineMath>{'\\mathbf{g}: U \\to W'}</InlineMath> such that <InlineMath>{'\\mathbf{g}(\\mathbf{a}) = \\mathbf{b}'}</InlineMath> and
        </p>
        <MathBlock>{'\\mathbf{F}(\\mathbf{x}, \\mathbf{g}(\\mathbf{x})) = \\mathbf{0} \\quad \\text{for all } \\mathbf{x} \\in U'}</MathBlock>
        <p className="mb-3">Moreover, the derivative of <InlineMath>{'\\mathbf{g}'}</InlineMath> is given by</p>
        <MathBlock>{'\\mathbf{g}\'(\\mathbf{x}) = -\\left[\\frac{\\partial \\mathbf{F}}{\\partial \\mathbf{y}}\\right]^{-1} \\frac{\\partial \\mathbf{F}}{\\partial \\mathbf{x}}'}</MathBlock>
      </Theorem>

      <Callout type="info" title="Geometric Interpretation">
        <p className="mb-3">
          The equation <InlineMath>{'\\mathbf{F}(\\mathbf{x}, \\mathbf{y}) = \\mathbf{0}'}</InlineMath> defines a level set in <InlineMath>{'\\mathbb{R}^{n+m}'}</InlineMath>.
          The implicit function theorem says that near a point where the "vertical" derivatives
          (with respect to <InlineMath>{'\\mathbf{y}'}</InlineMath>) are non-degenerate, this level set is locally the graph
          of a function <InlineMath>{'\\mathbf{y} = \\mathbf{g}(\\mathbf{x})'}</InlineMath>.
        </p>
      </Callout>

      <Example title="9.29 - Circle as Implicit Function">
        <p className="mb-3">
          Consider <InlineMath>{'F(x, y) = x^2 + y^2 - 1'}</InlineMath>. The level set <InlineMath>{'F = 0'}</InlineMath> is the unit circle.
          We have:
        </p>
        <MathBlock>{'\\frac{\\partial F}{\\partial x} = 2x, \\quad \\frac{\\partial F}{\\partial y} = 2y'}</MathBlock>
        <p className="mb-3">
          At any point <InlineMath>{'(a, b)'}</InlineMath> on the circle with <InlineMath>{'b \\neq 0'}</InlineMath>,
          we have <InlineMath>{'\\partial F / \\partial y = 2b \\neq 0'}</InlineMath>. By the implicit function theorem,
          near such a point we can solve for <InlineMath>{'y = g(x)'}</InlineMath>:
        </p>
        <MathBlock>{'g\'(x) = -\\frac{\\partial F / \\partial x}{\\partial F / \\partial y} = -\\frac{2x}{2y} = -\\frac{x}{y}'}</MathBlock>
        <p className="mb-3">
          Explicitly, for <InlineMath>{'b > 0'}</InlineMath>: <InlineMath>{'g(x) = \\sqrt{1 - x^2}'}</InlineMath> (upper semicircle).
          For <InlineMath>{'b < 0'}</InlineMath>: <InlineMath>{'g(x) = -\\sqrt{1 - x^2}'}</InlineMath> (lower semicircle).
        </p>
        <p>
          At the points <InlineMath>{'(\\pm 1, 0)'}</InlineMath>, we have <InlineMath>{'\\partial F / \\partial y = 0'}</InlineMath>,
          and indeed <InlineMath>{'y'}</InlineMath> cannot be written as a function of <InlineMath>{'x'}</InlineMath> near these points.
        </p>
      </Example>

      <Example title="9.30 - System of Equations">
        <p className="mb-3">
          Consider the system
        </p>
        <MathBlock>{'F_1(x, y, z) = x + y + z = 0'}</MathBlock>
        <MathBlock>{'F_2(x, y, z) = x^2 + y^2 + z^2 - 1 = 0'}</MathBlock>
        <p className="mb-3">
          Here <InlineMath>{'n = 1'}</InlineMath> (one free variable <InlineMath>{'x'}</InlineMath>) and <InlineMath>{'m = 2'}</InlineMath> (two dependent variables <InlineMath>{'y, z'}</InlineMath>).
          The matrix <InlineMath>{'A_y'}</InlineMath> is:
        </p>
        <MathBlock>{'A_y = \\begin{pmatrix} \\partial F_1/\\partial y & \\partial F_1/\\partial z \\\\ \\partial F_2/\\partial y & \\partial F_2/\\partial z \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ 2y & 2z \\end{pmatrix}'}</MathBlock>
        <p className="mb-3">
          This is invertible when <InlineMath>{'\\det A_y = 2z - 2y = 2(z - y) \\neq 0'}</InlineMath>.
        </p>
        <p>
          So at points where <InlineMath>{'y \\neq z'}</InlineMath>, we can locally solve for <InlineMath>{'(y, z)'}</InlineMath> as functions of <InlineMath>{'x'}</InlineMath>.
          The intersection of the plane and sphere (a circle) is locally a curve parameterized by <InlineMath>{'x'}</InlineMath>.
        </p>
      </Example>

      <Theorem
        title="9.31 - Higher Regularity"
        proof={
          <>
            <p className="mb-3">
              The proof proceeds by induction on <InlineMath>{'k'}</InlineMath>, using the derivative formula
              <InlineMath>{'\\mathbf{g}\'(\\mathbf{x}) = -A_y^{-1} A_x'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'\\mathbf{F} \\in \\mathscr{C}^k'}</InlineMath>, then <InlineMath>{'A_x'}</InlineMath> and <InlineMath>{'A_y'}</InlineMath> are <InlineMath>{'\\mathscr{C}^{k-1}'}</InlineMath>.
              The map <InlineMath>{'A \\mapsto A^{-1}'}</InlineMath> is smooth on invertible matrices.
            </p>
            <p>
              By induction, if <InlineMath>{'\\mathbf{g} \\in \\mathscr{C}^{j}'}</InlineMath>, then the right side is <InlineMath>{'\\mathscr{C}^{\\min(j, k-1)}'}</InlineMath>,
              so <InlineMath>{'\\mathbf{g} \\in \\mathscr{C}^{\\min(j+1, k)}'}</InlineMath>. Starting from <InlineMath>{'\\mathbf{g} \\in \\mathscr{C}^1'}</InlineMath>, we reach <InlineMath>{'\\mathbf{g} \\in \\mathscr{C}^k'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{F} \\in \\mathscr{C}^k'}</InlineMath> for <InlineMath>{'k \\geq 1'}</InlineMath>, then the implicit function
          <InlineMath>{'\\mathbf{g}'}</InlineMath> also belongs to <InlineMath>{'\\mathscr{C}^k'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning" title="Which Variables to Solve For">
        <p className="mb-3">
          The choice of which variables to treat as "dependent" depends on which partial derivative
          matrix is invertible. For <InlineMath>{'F(x, y) = 0'}</InlineMath>:
        </p>
        <ul className="list-disc list-inside">
          <li>If <InlineMath>{'\\partial F / \\partial y \\neq 0'}</InlineMath>, solve for <InlineMath>{'y = g(x)'}</InlineMath></li>
          <li>If <InlineMath>{'\\partial F / \\partial x \\neq 0'}</InlineMath>, solve for <InlineMath>{'x = h(y)'}</InlineMath></li>
          <li>If both are zero at a point, neither works locally (singular point)</li>
        </ul>
      </Callout>

      <Example title="9.32 - Folium of Descartes">
        <p className="mb-3">
          Consider <InlineMath>{'F(x, y) = x^3 + y^3 - 3xy = 0'}</InlineMath>. We compute:
        </p>
        <MathBlock>{'\\frac{\\partial F}{\\partial x} = 3x^2 - 3y, \\quad \\frac{\\partial F}{\\partial y} = 3y^2 - 3x'}</MathBlock>
        <p className="mb-3">
          Both partials vanish when <InlineMath>{'x^2 = y'}</InlineMath> and <InlineMath>{'y^2 = x'}</InlineMath>.
          Substituting: <InlineMath>{'x^4 = x'}</InlineMath>, so <InlineMath>{'x = 0'}</InlineMath> or <InlineMath>{'x = 1'}</InlineMath>.
          The singular points are <InlineMath>{'(0, 0)'}</InlineMath> (node) and <InlineMath>{'(1, 1)'}</InlineMath>.
        </p>
        <p>
          At <InlineMath>{'(0, 0)'}</InlineMath>, the curve has a self-intersection (double point).
          Away from singular points, the implicit function theorem applies.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The implicit function theorem solves <InlineMath>{'\\mathbf{F}(\\mathbf{x}, \\mathbf{y}) = \\mathbf{0}'}</InlineMath> for <InlineMath>{'\\mathbf{y} = \\mathbf{g}(\\mathbf{x})'}</InlineMath> locally</li>
        <li>The key condition is invertibility of <InlineMath>{'\\partial \\mathbf{F} / \\partial \\mathbf{y}'}</InlineMath></li>
        <li>The implicit function is as smooth as <InlineMath>{'\\mathbf{F}'}</InlineMath></li>
        <li>The derivative formula: <InlineMath>{'\\mathbf{g}\' = -(\\partial \\mathbf{F}/\\partial \\mathbf{y})^{-1}(\\partial \\mathbf{F}/\\partial \\mathbf{x})'}</InlineMath></li>
        <li>Geometrically, level sets are locally graphs when the "vertical" derivative is non-degenerate</li>
        <li>The theorem is proved using the inverse function theorem</li>
      </ul>
    </LessonLayout>
  );
}
