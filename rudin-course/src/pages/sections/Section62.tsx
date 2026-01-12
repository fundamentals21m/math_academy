import { LessonLayout } from '../../components/layout/LessonLayout';
import { Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <h2 className="text-2xl font-semibold mb-4">The Inverse Function Theorem</h2>

      <p className="mb-4">
        The inverse function theorem is one of the central results in multivariable calculus.
        It states that a continuously differentiable function with an invertible derivative
        at a point is locally invertible near that point. The proof uses the contraction
        principle in a clever way.
      </p>

      <Theorem
        title="9.24 - The Inverse Function Theorem"
        proof={
          <>
            <p className="mb-3">
              <strong>Step 1: Reduction.</strong> By composing with linear maps, we may assume
              <InlineMath>{'\\mathbf{a} = \\mathbf{0}'}</InlineMath>, <InlineMath>{'\\mathbf{f}(\\mathbf{0}) = \\mathbf{0}'}</InlineMath>,
              and <InlineMath>{'\\mathbf{f}\'(\\mathbf{0}) = I'}</InlineMath> (the identity).
            </p>
            <p className="mb-3">
              <strong>Step 2: Setting up the contraction.</strong> Define <InlineMath>{'\\varphi(\\mathbf{x}) = \\mathbf{x} - \\mathbf{f}(\\mathbf{x}) + \\mathbf{y}'}</InlineMath>
              for a fixed <InlineMath>{'\\mathbf{y}'}</InlineMath>. Then <InlineMath>{'\\mathbf{f}(\\mathbf{x}) = \\mathbf{y}'}</InlineMath>
              if and only if <InlineMath>{'\\varphi(\\mathbf{x}) = \\mathbf{x}'}</InlineMath>.
            </p>
            <p className="mb-3">
              We have <InlineMath>{'\\varphi\'(\\mathbf{x}) = I - \\mathbf{f}\'(\\mathbf{x})'}</InlineMath>.
              Since <InlineMath>{'\\mathbf{f}\'(\\mathbf{0}) = I'}</InlineMath> and <InlineMath>{'\\mathbf{f}\''}</InlineMath> is continuous,
              there exists <InlineMath>{'r > 0'}</InlineMath> such that <InlineMath>{'\\|\\varphi\'(\\mathbf{x})\\| < 1/2'}</InlineMath>
              for <InlineMath>{'|\\mathbf{x}| < r'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 3: Contraction estimate.</strong> For <InlineMath>{'|\\mathbf{x}|, |\\mathbf{x}\'| < r'}</InlineMath>,
              by the mean value inequality:
            </p>
            <MathBlock>{'|\\varphi(\\mathbf{x}) - \\varphi(\\mathbf{x}\')| \\leq \\frac{1}{2}|\\mathbf{x} - \\mathbf{x}\'|'}</MathBlock>
            <p className="mb-3">
              <strong>Step 4: Existence.</strong> Let <InlineMath>{'U = B(\\mathbf{0}, r)'}</InlineMath>.
              For <InlineMath>{'\\mathbf{y}'}</InlineMath> sufficiently small, <InlineMath>{'\\varphi'}</InlineMath> maps
              the closed ball <InlineMath>{'\\overline{B}(\\mathbf{0}, r)'}</InlineMath> into itself.
              By the contraction principle, there exists a unique <InlineMath>{'\\mathbf{x} \\in \\overline{B}(\\mathbf{0}, r)'}</InlineMath>
              with <InlineMath>{'\\mathbf{f}(\\mathbf{x}) = \\mathbf{y}'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Step 5: Openness of f(U).</strong> Since <InlineMath>{'\\mathbf{f}\'(\\mathbf{x})'}</InlineMath> is
              invertible for <InlineMath>{'\\mathbf{x}'}</InlineMath> near <InlineMath>{'\\mathbf{0}'}</InlineMath>, we can repeat
              the argument centered at any such <InlineMath>{'\\mathbf{x}'}</InlineMath>, showing <InlineMath>{'\\mathbf{f}(U)'}</InlineMath> is open.
            </p>
            <p className="mb-3">
              <strong>Step 6: Continuity of inverse.</strong> From <InlineMath>{'|\\mathbf{x} - \\mathbf{x}\'| \\leq 2|\\varphi(\\mathbf{x}) - \\varphi(\\mathbf{x}\')|'}</InlineMath>
              and <InlineMath>{'\\varphi(\\mathbf{x}) - \\varphi(\\mathbf{x}\') = (\\mathbf{x} - \\mathbf{x}\') - (\\mathbf{f}(\\mathbf{x}) - \\mathbf{f}(\\mathbf{x}\'))'}</InlineMath>:
            </p>
            <MathBlock>{'|\\mathbf{g}(\\mathbf{y}) - \\mathbf{g}(\\mathbf{y}\')| = |\\mathbf{x} - \\mathbf{x}\'| \\leq 2|\\mathbf{y} - \\mathbf{y}\'|'}</MathBlock>
            <p className="mb-3">
              <strong>Step 7: Differentiability of inverse.</strong>
              Let <InlineMath>{'T = [\\mathbf{f}\'(\\mathbf{x})]^{-1}'}</InlineMath>. We show <InlineMath>{'\\mathbf{g}\'(\\mathbf{y}) = T'}</InlineMath>:
            </p>
            <MathBlock>{'\\mathbf{g}(\\mathbf{y} + \\mathbf{k}) - \\mathbf{g}(\\mathbf{y}) - T\\mathbf{k} = T(\\mathbf{f}(\\mathbf{x}) - \\mathbf{f}(\\mathbf{x} + \\mathbf{h}) + \\mathbf{f}\'(\\mathbf{x})\\mathbf{h})'}</MathBlock>
            <p className="mb-3">
              where <InlineMath>{'\\mathbf{h} = \\mathbf{g}(\\mathbf{y}+\\mathbf{k}) - \\mathbf{g}(\\mathbf{y})'}</InlineMath>.
              Since <InlineMath>{'|\\mathbf{h}| \\leq 2|\\mathbf{k}|'}</InlineMath> and
              <InlineMath>{'|\\mathbf{f}(\\mathbf{x}+\\mathbf{h}) - \\mathbf{f}(\\mathbf{x}) - \\mathbf{f}\'(\\mathbf{x})\\mathbf{h}| = o(|\\mathbf{h}|)'}</InlineMath>:
            </p>
            <MathBlock>{'|\\mathbf{g}(\\mathbf{y}+\\mathbf{k}) - \\mathbf{g}(\\mathbf{y}) - T\\mathbf{k}| = o(|\\mathbf{k}|)'}</MathBlock>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\mathbf{f} \\in \\mathscr{C}\'(E)'}</InlineMath> where <InlineMath>{'E \\subset \\mathbb{R}^n'}</InlineMath> is open,
          <InlineMath>{'\\mathbf{f}: E \\to \\mathbb{R}^n'}</InlineMath>, and <InlineMath>{'\\mathbf{f}\'(\\mathbf{a})'}</InlineMath> is invertible for some <InlineMath>{'\\mathbf{a} \\in E'}</InlineMath>.
        </p>
        <p className="mb-3">
          Then there exist open sets <InlineMath>{'U'}</InlineMath> and <InlineMath>{'V'}</InlineMath> in <InlineMath>{'\\mathbb{R}^n'}</InlineMath> with
          <InlineMath>{'\\mathbf{a} \\in U \\subset E'}</InlineMath> such that <InlineMath>{'\\mathbf{f}'}</InlineMath> is a bijection from <InlineMath>{'U'}</InlineMath> to <InlineMath>{'V'}</InlineMath>.
        </p>
        <p className="mb-3">
          The inverse <InlineMath>{'\\mathbf{g} = \\mathbf{f}^{-1}: V \\to U'}</InlineMath> belongs to <InlineMath>{'\\mathscr{C}\'(V)'}</InlineMath>, and
        </p>
        <MathBlock>{'\\mathbf{g}\'(\\mathbf{f}(\\mathbf{x})) = [\\mathbf{f}\'(\\mathbf{x})]^{-1}'}</MathBlock>
        <p>
          for all <InlineMath>{'\\mathbf{x} \\in U'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="The Derivative of the Inverse">
        <p className="mb-3">
          The formula for the derivative of the inverse follows from the chain rule.
          Since <InlineMath>{'\\mathbf{g}(\\mathbf{f}(\\mathbf{x})) = \\mathbf{x}'}</InlineMath>:
        </p>
        <MathBlock>{'\\mathbf{g}\'(\\mathbf{f}(\\mathbf{x})) \\cdot \\mathbf{f}\'(\\mathbf{x}) = I'}</MathBlock>
        <p>
          Therefore <InlineMath>{'\\mathbf{g}\'(\\mathbf{f}(\\mathbf{x})) = [\\mathbf{f}\'(\\mathbf{x})]^{-1}'}</InlineMath>.
          In matrix terms, the Jacobian of <InlineMath>{'\\mathbf{g}'}</InlineMath> is the inverse of the Jacobian of <InlineMath>{'\\mathbf{f}'}</InlineMath>.
        </p>
      </Callout>

      <Example title="9.25 - Polar Coordinates">
        <p className="mb-3">
          Consider the map <InlineMath>{'\\mathbf{f}: \\mathbb{R}^+ \\times (0, 2\\pi) \\to \\mathbb{R}^2'}</InlineMath> defined by
        </p>
        <MathBlock>{'\\mathbf{f}(r, \\theta) = (r\\cos\\theta, r\\sin\\theta)'}</MathBlock>
        <p className="mb-3">
          The Jacobian matrix is
        </p>
        <MathBlock>{'\\mathbf{f}\'(r, \\theta) = \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix}'}</MathBlock>
        <p className="mb-3">
          The Jacobian determinant is
        </p>
        <MathBlock>{'\\det \\mathbf{f}\'(r, \\theta) = r\\cos^2\\theta + r\\sin^2\\theta = r'}</MathBlock>
        <p className="mb-3">
          Since <InlineMath>{'r > 0'}</InlineMath>, the derivative is invertible everywhere.
          By the inverse function theorem, <InlineMath>{'\\mathbf{f}'}</InlineMath> is locally invertible.
          The inverse gives <InlineMath>{'(r, \\theta)'}</InlineMath> as functions of <InlineMath>{'(x, y)'}</InlineMath>:
        </p>
        <MathBlock>{'r = \\sqrt{x^2 + y^2}, \\quad \\theta = \\arctan(y/x)'}</MathBlock>
        <p>
          (with appropriate modifications for different quadrants).
        </p>
      </Example>

      <Example title="9.26 - When the Theorem Fails">
        <p className="mb-3">
          <strong>(a)</strong> If <InlineMath>{'\\mathbf{f}\'(\\mathbf{a})'}</InlineMath> is not invertible, the conclusion fails.
          Consider <InlineMath>{'f(x) = x^2'}</InlineMath> at <InlineMath>{'x = 0'}</InlineMath>. We have <InlineMath>{'f\'(0) = 0'}</InlineMath>,
          and <InlineMath>{'f'}</InlineMath> is not locally invertible near <InlineMath>{'0'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>(b)</strong> Consider <InlineMath>{'\\mathbf{f}(x, y) = (e^x \\cos y, e^x \\sin y)'}</InlineMath>.
          The Jacobian is <InlineMath>{'e^{2x}'}</InlineMath>, never zero. By the theorem, <InlineMath>{'\\mathbf{f}'}</InlineMath>
          is locally invertible everywhere. But <InlineMath>{'\\mathbf{f}'}</InlineMath> is not globally one-to-one:
          <InlineMath>{'\\mathbf{f}(x, y) = \\mathbf{f}(x, y + 2\\pi)'}</InlineMath>.
        </p>
        <p>
          The inverse function theorem is a <em>local</em> result. Global invertibility requires additional conditions.
        </p>
      </Example>

      <Theorem
        title="9.27 - Higher Regularity of Inverse"
        proof={
          <>
            <p className="mb-3">
              Since <InlineMath>{'\\mathbf{g}\'(\\mathbf{y}) = [\\mathbf{f}\'(\\mathbf{g}(\\mathbf{y}))]^{-1}'}</InlineMath>,
              the map <InlineMath>{'\\mathbf{g}\''}</InlineMath> is a composition of:
            </p>
            <ul className="list-disc list-inside mb-3">
              <li><InlineMath>{'\\mathbf{y} \\mapsto \\mathbf{g}(\\mathbf{y})'}</InlineMath> (continuous by hypothesis)</li>
              <li><InlineMath>{'\\mathbf{x} \\mapsto \\mathbf{f}\'(\\mathbf{x})'}</InlineMath> (<InlineMath>{'\\mathscr{C}^{k-1}'}</InlineMath> since <InlineMath>{'\\mathbf{f} \\in \\mathscr{C}^k'}</InlineMath>)</li>
              <li><InlineMath>{'A \\mapsto A^{-1}'}</InlineMath> (smooth on invertible matrices)</li>
            </ul>
            <p className="mb-3">
              By induction: if <InlineMath>{'\\mathbf{g} \\in \\mathscr{C}^{j-1}'}</InlineMath>, then <InlineMath>{'\\mathbf{g}\' \\in \\mathscr{C}^{\\min(j-1, k-1)}'}</InlineMath>,
              so <InlineMath>{'\\mathbf{g} \\in \\mathscr{C}^{\\min(j, k)}'}</InlineMath>. Starting from <InlineMath>{'\\mathbf{g} \\in \\mathscr{C}^1'}</InlineMath>, we get <InlineMath>{'\\mathbf{g} \\in \\mathscr{C}^k'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'\\mathbf{f} \\in \\mathscr{C}^k(E)'}</InlineMath> for some <InlineMath>{'k \\geq 1'}</InlineMath> (meaning <InlineMath>{'\\mathbf{f}'}</InlineMath> has continuous
          partial derivatives up to order <InlineMath>{'k'}</InlineMath>), then the local inverse <InlineMath>{'\\mathbf{g}'}</InlineMath> also belongs to <InlineMath>{'\\mathscr{C}^k(V)'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning" title="Necessity of Invertible Derivative">
        <p>
          The condition that <InlineMath>{'\\mathbf{f}\'(\\mathbf{a})'}</InlineMath> be invertible is not just sufficient but also
          <em>necessary</em> for local invertibility with a differentiable inverse. If <InlineMath>{'\\mathbf{f}'}</InlineMath> is locally
          invertible with differentiable inverse <InlineMath>{'\\mathbf{g}'}</InlineMath>, then <InlineMath>{'\\mathbf{g}\'(\\mathbf{f}(\\mathbf{a})) \\cdot \\mathbf{f}\'(\\mathbf{a}) = I'}</InlineMath>,
          so <InlineMath>{'\\mathbf{f}\'(\\mathbf{a})'}</InlineMath> must be invertible.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>If <InlineMath>{'\\mathbf{f} \\in \\mathscr{C}\'(E)'}</InlineMath> and <InlineMath>{'\\mathbf{f}\'(\\mathbf{a})'}</InlineMath> is invertible, then <InlineMath>{'\\mathbf{f}'}</InlineMath> is locally invertible near <InlineMath>{'\\mathbf{a}'}</InlineMath></li>
        <li>The local inverse <InlineMath>{'\\mathbf{g}'}</InlineMath> is also continuously differentiable</li>
        <li><InlineMath>{'\\mathbf{g}\'(\\mathbf{f}(\\mathbf{x})) = [\\mathbf{f}\'(\\mathbf{x})]^{-1}'}</InlineMath> (Jacobians are inverses)</li>
        <li>The proof uses the contraction principle</li>
        <li>The theorem is local: global invertibility is not guaranteed even if all Jacobians are invertible</li>
        <li>Higher smoothness of <InlineMath>{'\\mathbf{f}'}</InlineMath> implies higher smoothness of the inverse</li>
      </ul>
    </LessonLayout>
  );
}
