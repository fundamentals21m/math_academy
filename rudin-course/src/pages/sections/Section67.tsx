import { LessonLayout } from '../../components/layout/LessonLayout';
import { Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section67() {
  return (
    <LessonLayout sectionId={67}>
      <h2 className="text-2xl font-semibold mb-4">Differentiation of Integrals</h2>

      <p className="mb-4">
        A common situation in analysis is having an integral that depends on a parameter.
        When can we differentiate under the integral sign? The answer is given by the
        Leibniz integral rule, which provides conditions for interchanging differentiation
        and integration.
      </p>

      <Theorem
        title="9.42 - Leibniz Integral Rule"
        proof={
          <>
            <p className="mb-3">
              We need to show that
            </p>
            <MathBlock>{'\\lim_{h \\to 0} \\frac{\\varphi(x + h) - \\varphi(x)}{h} = \\int_a^b D_1 f(x, t) \\, dt'}</MathBlock>
            <p className="mb-3">
              By the mean value theorem, for each <InlineMath>{'t'}</InlineMath>:
            </p>
            <MathBlock>{'\\frac{f(x+h, t) - f(x, t)}{h} = D_1 f(\\xi_h(t), t)'}</MathBlock>
            <p className="mb-3">
              for some <InlineMath>{'\\xi_h(t)'}</InlineMath> between <InlineMath>{'x'}</InlineMath> and <InlineMath>{'x + h'}</InlineMath>. Thus
            </p>
            <MathBlock>{'\\frac{\\varphi(x+h) - \\varphi(x)}{h} = \\int_a^b D_1 f(\\xi_h(t), t) \\, dt'}</MathBlock>
            <p className="mb-3">
              We want to take <InlineMath>{'h \\to 0'}</InlineMath> inside the integral. By the uniform bound:
            </p>
            <MathBlock>{'|D_1 f(\\xi_h(t), t)| \\leq g(t)'}</MathBlock>
            <p className="mb-3">
              and <InlineMath>{'D_1 f(\\xi_h(t), t) \\to D_1 f(x, t)'}</InlineMath> as <InlineMath>{'h \\to 0'}</InlineMath> (by continuity of <InlineMath>{'D_1 f'}</InlineMath>).
            </p>
            <p>
              By the dominated convergence theorem (or the bounded convergence theorem for Riemann integrals),
              we can pass the limit inside the integral.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'f: [c, d] \\times [a, b] \\to \\mathbb{R}'}</InlineMath> be continuous.
          Suppose the partial derivative <InlineMath>{'D_1 f(x, t) = \\frac{\\partial f}{\\partial x}(x, t)'}</InlineMath>
          exists and is continuous on <InlineMath>{'[c, d] \\times [a, b]'}</InlineMath>.
        </p>
        <p className="mb-3">
          Define
        </p>
        <MathBlock>{'\\varphi(x) = \\int_a^b f(x, t) \\, dt'}</MathBlock>
        <p className="mb-3">
          Then <InlineMath>{'\\varphi'}</InlineMath> is differentiable on <InlineMath>{'(c, d)'}</InlineMath> and
        </p>
        <MathBlock>{'\\varphi\'(x) = \\int_a^b D_1 f(x, t) \\, dt = \\int_a^b \\frac{\\partial f}{\\partial x}(x, t) \\, dt'}</MathBlock>
      </Theorem>

      <Callout type="info" title="Interchanging Limit and Integral">
        <p>
          The Leibniz rule is a special case of interchanging a limit with an integral.
          The key requirement is uniform control: either uniform continuity of the partial derivative
          or domination by an integrable function. Without such conditions, the interchange may fail.
        </p>
      </Callout>

      <Example title="9.43 - Computing an Integral Using Leibniz Rule">
        <p className="mb-3">
          Consider <InlineMath>{'I(a) = \\int_0^\\infty e^{-ax} \\frac{\\sin x}{x} \\, dx'}</InlineMath> for <InlineMath>{'a > 0'}</InlineMath>.
        </p>
        <p className="mb-3">
          Differentiating under the integral sign:
        </p>
        <MathBlock>{'I\'(a) = \\int_0^\\infty \\frac{\\partial}{\\partial a}\\left(e^{-ax} \\frac{\\sin x}{x}\\right) dx = -\\int_0^\\infty e^{-ax} \\sin x \\, dx'}</MathBlock>
        <p className="mb-3">
          The right side can be evaluated by integration by parts or the formula for Laplace transforms:
        </p>
        <MathBlock>{'\\int_0^\\infty e^{-ax} \\sin x \\, dx = \\frac{1}{1 + a^2}'}</MathBlock>
        <p className="mb-3">
          Thus <InlineMath>{'I\'(a) = -\\frac{1}{1+a^2}'}</InlineMath>, so
        </p>
        <MathBlock>{'I(a) = -\\arctan(a) + C'}</MathBlock>
        <p className="mb-3">
          As <InlineMath>{'a \\to \\infty'}</InlineMath>, <InlineMath>{'I(a) \\to 0'}</InlineMath>, so <InlineMath>{'C = \\frac{\\pi}{2}'}</InlineMath>. Therefore:
        </p>
        <MathBlock>{'I(a) = \\frac{\\pi}{2} - \\arctan(a)'}</MathBlock>
        <p>
          In particular, <InlineMath>{'I(0^+) = \\int_0^\\infty \\frac{\\sin x}{x} \\, dx = \\frac{\\pi}{2}'}</InlineMath> (the Dirichlet integral).
        </p>
      </Example>

      <Theorem
        title="9.44 - Leibniz Rule with Variable Limits"
        proof={
          <>
            <p className="mb-3">
              Write <InlineMath>{'\\Phi(x) = F(x, \\alpha(x), \\beta(x))'}</InlineMath> where <InlineMath>{'F(x, u, v) = \\int_u^v f(x, t) \\, dt'}</InlineMath>.
              By the chain rule:
            </p>
            <MathBlock>{'\\Phi\'(x) = D_1 F + D_2 F \\cdot \\alpha\'(x) + D_3 F \\cdot \\beta\'(x)'}</MathBlock>
            <p className="mb-3">
              We have:
            </p>
            <ul className="list-disc list-inside mb-3">
              <li><InlineMath>{'D_1 F = \\int_{\\alpha(x)}^{\\beta(x)} D_1 f(x, t) \\, dt'}</InlineMath> (by the basic Leibniz rule)</li>
              <li><InlineMath>{'D_2 F = -f(x, \\alpha(x))'}</InlineMath> (fundamental theorem of calculus)</li>
              <li><InlineMath>{'D_3 F = f(x, \\beta(x))'}</InlineMath> (fundamental theorem of calculus)</li>
            </ul>
            <p>
              Combining these gives the result.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Under the same hypotheses as the basic Leibniz rule, if additionally
          <InlineMath>{'\\alpha, \\beta: (c, d) \\to [a, b]'}</InlineMath> are differentiable, then
        </p>
        <MathBlock>{'\\Phi(x) = \\int_{\\alpha(x)}^{\\beta(x)} f(x, t) \\, dt'}</MathBlock>
        <p className="mb-3">is differentiable with</p>
        <MathBlock>{'\\Phi\'(x) = \\int_{\\alpha(x)}^{\\beta(x)} \\frac{\\partial f}{\\partial x}(x, t) \\, dt + f(x, \\beta(x)) \\beta\'(x) - f(x, \\alpha(x)) \\alpha\'(x)'}</MathBlock>
      </Theorem>

      <Example title="9.45 - Variable Limits Example">
        <p className="mb-3">
          Let <InlineMath>{'\\Phi(x) = \\int_0^{x^2} e^{-t^2} \\, dt'}</InlineMath>.
        </p>
        <p className="mb-3">
          Here <InlineMath>{'f(x, t) = e^{-t^2}'}</InlineMath> (independent of <InlineMath>{'x'}</InlineMath>), <InlineMath>{'\\alpha(x) = 0'}</InlineMath>, <InlineMath>{'\\beta(x) = x^2'}</InlineMath>.
        </p>
        <MathBlock>{'\\Phi\'(x) = 0 + e^{-(x^2)^2} \\cdot 2x - 0 = 2x e^{-x^4}'}</MathBlock>
      </Example>

      <Theorem
        title="9.46 - Continuity of Parameter-Dependent Integrals"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\{x_n\\} \\to x_0'}</InlineMath>. We need <InlineMath>{'\\varphi(x_n) \\to \\varphi(x_0)'}</InlineMath>, i.e.,
            </p>
            <MathBlock>{'\\int_a^b f(x_n, t) \\, dt \\to \\int_a^b f(x_0, t) \\, dt'}</MathBlock>
            <p className="mb-3">
              Since <InlineMath>{'f'}</InlineMath> is continuous and <InlineMath>{'[c, d] \\times [a, b]'}</InlineMath> is compact,
              <InlineMath>{'f'}</InlineMath> is uniformly continuous. Given <InlineMath>{'\\epsilon > 0'}</InlineMath>, for <InlineMath>{'n'}</InlineMath> large:
            </p>
            <MathBlock>{'|f(x_n, t) - f(x_0, t)| < \\frac{\\epsilon}{b-a}'}</MathBlock>
            <p className="mb-3">
              uniformly in <InlineMath>{'t'}</InlineMath>. Therefore:
            </p>
            <MathBlock>{'|\\varphi(x_n) - \\varphi(x_0)| \\leq \\int_a^b |f(x_n, t) - f(x_0, t)| \\, dt < \\epsilon'}</MathBlock>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'f: [c, d] \\times [a, b] \\to \\mathbb{R}'}</InlineMath> is continuous, then
        </p>
        <MathBlock>{'\\varphi(x) = \\int_a^b f(x, t) \\, dt'}</MathBlock>
        <p>is continuous on <InlineMath>{'[c, d]'}</InlineMath>.</p>
      </Theorem>

      <Example title="9.47 - The Gamma Function Revisited">
        <p className="mb-3">
          Recall <InlineMath>{'\\Gamma(x) = \\int_0^\\infty t^{x-1} e^{-t} \\, dt'}</InlineMath> for <InlineMath>{'x > 0'}</InlineMath>.
        </p>
        <p className="mb-3">
          To differentiate, we need to verify the hypotheses of the Leibniz rule for improper integrals.
          The partial derivative is:
        </p>
        <MathBlock>{'\\frac{\\partial}{\\partial x}(t^{x-1} e^{-t}) = t^{x-1} (\\ln t) e^{-t}'}</MathBlock>
        <p className="mb-3">
          For <InlineMath>{'x'}</InlineMath> in a compact interval <InlineMath>{'[a, b] \\subset (0, \\infty)'}</InlineMath>, this is dominated by
          an integrable function (the exponential decay dominates the polynomial growth of <InlineMath>{'|\\ln t|'}</InlineMath>).
        </p>
        <p className="mb-3">
          Therefore:
        </p>
        <MathBlock>{'\\Gamma\'(x) = \\int_0^\\infty t^{x-1} (\\ln t) e^{-t} \\, dt'}</MathBlock>
        <p>
          Iterating, <InlineMath>{'\\Gamma^{(n)}(x) = \\int_0^\\infty t^{x-1} (\\ln t)^n e^{-t} \\, dt'}</InlineMath>,
          proving that <InlineMath>{'\\Gamma'}</InlineMath> is infinitely differentiable on <InlineMath>{'(0, \\infty)'}</InlineMath>.
        </p>
      </Example>

      <Callout type="warning" title="Improper Integrals">
        <p className="mb-3">
          For improper integrals, the Leibniz rule requires additional care:
        </p>
        <ul className="list-disc list-inside">
          <li>The integral must converge uniformly in the parameter</li>
          <li>The derivative must be dominated by an integrable function</li>
          <li>Interchange of limit and integral requires justification (e.g., dominated convergence)</li>
        </ul>
      </Callout>

      <Example title="9.48 - Failure of Differentiation Under the Integral">
        <p className="mb-3">
          Consider <InlineMath>{'\\varphi(x) = \\int_0^1 \\frac{x}{(x^2 + t^2)} \\, dt'}</InlineMath> for <InlineMath>{'x > 0'}</InlineMath>.
        </p>
        <p className="mb-3">
          Computing directly: <InlineMath>{'\\varphi(x) = \\arctan(1/x)'}</InlineMath>, so <InlineMath>{'\\varphi(0^+) = \\pi/2'}</InlineMath>.
        </p>
        <p className="mb-3">
          But <InlineMath>{'\\lim_{x \\to 0^+} \\frac{x}{x^2 + t^2} = 0'}</InlineMath> for each <InlineMath>{'t > 0'}</InlineMath>,
          and <InlineMath>{'\\int_0^1 0 \\, dt = 0 \\neq \\pi/2'}</InlineMath>.
        </p>
        <p>
          The interchange fails because the convergence is not uniform (the integrand is not dominated uniformly near <InlineMath>{'t = 0'}</InlineMath>).
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Leibniz rule: <InlineMath>{'\\frac{d}{dx}\\int_a^b f(x,t)\\,dt = \\int_a^b \\frac{\\partial f}{\\partial x}(x,t)\\,dt'}</InlineMath> under suitable conditions</li>
        <li>Key hypothesis: continuity of the partial derivative on the domain</li>
        <li>For variable limits, add boundary terms: <InlineMath>{'f(x,\\beta)\\beta\' - f(x,\\alpha)\\alpha\''}</InlineMath></li>
        <li>Continuity of <InlineMath>{'f'}</InlineMath> implies continuity of the integral in the parameter</li>
        <li>For improper integrals, uniform convergence and domination are needed</li>
        <li>The Leibniz rule is a powerful computational tool for evaluating integrals</li>
      </ul>
    </LessonLayout>
  );
}
