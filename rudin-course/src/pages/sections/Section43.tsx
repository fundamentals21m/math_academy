import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <h2 className="text-2xl font-semibold mb-4">Integration and Differentiation</h2>

      <p className="mb-4">
        We now establish the fundamental connection between differentiation and integration.
        The Fundamental Theorem of Calculus shows that these two operations are, in a sense,
        inverses of each other. This is one of the most important results in all of mathematics.
      </p>

      <Theorem
        title="6.20 - Fundamental Theorem of Calculus (Part I)"
        proof={
          <>
            <p className="mb-3">
              Fix <InlineMath>{'x \\in [a, b]'}</InlineMath> and let <InlineMath>{'s \\neq x'}</InlineMath> with <InlineMath>{'s \\in [a, b]'}</InlineMath>.
              Then
            </p>
            <MathBlock>{'\\frac{F(s) - F(x)}{s - x} = \\frac{1}{s - x} \\int_x^s f(t) \\, dt'}</MathBlock>
            <p className="mb-3">
              Since <InlineMath>{'f'}</InlineMath> is continuous at <InlineMath>{'x'}</InlineMath>, for any <InlineMath>{'\\varepsilon > 0'}</InlineMath> there
              exists <InlineMath>{'\\delta > 0'}</InlineMath> such that <InlineMath>{'|f(t) - f(x)| < \\varepsilon'}</InlineMath> whenever <InlineMath>{'|t - x| < \\delta'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'|s - x| < \\delta'}</InlineMath>, then for <InlineMath>{'t'}</InlineMath> between <InlineMath>{'x'}</InlineMath> and <InlineMath>{'s'}</InlineMath>:
            </p>
            <MathBlock>{'\\left| \\frac{F(s) - F(x)}{s - x} - f(x) \\right| = \\left| \\frac{1}{s-x} \\int_x^s [f(t) - f(x)] \\, dt \\right| < \\varepsilon'}</MathBlock>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'f \\in \\mathscr{R}'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>. For <InlineMath>{'a \\leq x \\leq b'}</InlineMath>, put
        </p>
        <MathBlock>{'F(x) = \\int_a^x f(t) \\, dt'}</MathBlock>
        <p className="mb-3">
          Then <InlineMath>{'F'}</InlineMath> is continuous on <InlineMath>{'[a, b]'}</InlineMath>; furthermore, if <InlineMath>{'f'}</InlineMath> is
          continuous at a point <InlineMath>{'x \\in [a, b]'}</InlineMath>, then <InlineMath>{'F'}</InlineMath> is differentiable
          at <InlineMath>{'x'}</InlineMath>, and
        </p>
        <MathBlock>{'F\'(x) = f(x)'}</MathBlock>
      </Theorem>

      <Callout type="info" title="Interpretation">
        <p className="mb-3">
          This theorem says that differentiation undoes integration: if we integrate <InlineMath>{'f'}</InlineMath> from <InlineMath>{'a'}</InlineMath> to <InlineMath>{'x'}</InlineMath>,
          and then differentiate with respect to <InlineMath>{'x'}</InlineMath>, we get <InlineMath>{'f(x)'}</InlineMath> back.
        </p>
        <p>
          Note that <InlineMath>{'f'}</InlineMath> only needs to be integrable, but <InlineMath>{'F\' = f'}</InlineMath> holds
          wherever <InlineMath>{'f'}</InlineMath> is continuous.
        </p>
      </Callout>

      <Theorem
        title="6.21 - Fundamental Theorem of Calculus (Part II)"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\varepsilon > 0'}</InlineMath>. Since <InlineMath>{'f \\in \\mathscr{R}'}</InlineMath>, there is a
              partition <InlineMath>{'P = \\{x_0, \\ldots, x_n\\}'}</InlineMath> such that
            </p>
            <MathBlock>{'U(P, f) - L(P, f) < \\varepsilon'}</MathBlock>
            <p className="mb-3">
              Apply the Mean Value Theorem to <InlineMath>{'F'}</InlineMath> on each <InlineMath>{'[x_{i-1}, x_i]'}</InlineMath>.
              There exist <InlineMath>{'t_i \\in (x_{i-1}, x_i)'}</InlineMath> such that
            </p>
            <MathBlock>{'F(x_i) - F(x_{i-1}) = f(t_i) \\Delta x_i'}</MathBlock>
            <p className="mb-3">
              Summing over all <InlineMath>{'i'}</InlineMath>:
            </p>
            <MathBlock>{'F(b) - F(a) = \\sum_{i=1}^{n} f(t_i) \\Delta x_i'}</MathBlock>
            <p className="mb-3">
              Since <InlineMath>{'m_i \\leq f(t_i) \\leq M_i'}</InlineMath>, we have
            </p>
            <MathBlock>{'L(P, f) \\leq F(b) - F(a) \\leq U(P, f)'}</MathBlock>
            <p>
              Also <InlineMath>{'L(P, f) \\leq \\int_a^b f \\leq U(P, f)'}</InlineMath>, so
              <InlineMath>{'|F(b) - F(a) - \\int_a^b f| \\leq U(P, f) - L(P, f) < \\varepsilon'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'f \\in \\mathscr{R}'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath> and if there is a differentiable
          function <InlineMath>{'F'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath> such that <InlineMath>{'F\' = f'}</InlineMath>, then
        </p>
        <MathBlock>{'\\int_a^b f(x) \\, dx = F(b) - F(a)'}</MathBlock>
      </Theorem>

      <Definition title="Antiderivative (Primitive)">
        <p>
          A function <InlineMath>{'F'}</InlineMath> is called an <em>antiderivative</em> or <em>primitive</em> of <InlineMath>{'f'}</InlineMath> on
          an interval <InlineMath>{'I'}</InlineMath> if <InlineMath>{'F\'(x) = f(x)'}</InlineMath> for all <InlineMath>{'x \\in I'}</InlineMath>.
          We write
        </p>
        <MathBlock>{'F(x) = \\int f(x) \\, dx'}</MathBlock>
        <p>
          Any two antiderivatives of <InlineMath>{'f'}</InlineMath> differ by a constant.
        </p>
      </Definition>

      <Example title="Evaluating Definite Integrals">
        <p className="mb-3">
          <strong>(a)</strong> Compute <InlineMath>{'\\int_0^1 x^2 \\, dx'}</InlineMath>.
        </p>
        <p className="mb-3">
          Since <InlineMath>{'\\frac{d}{dx}(x^3/3) = x^2'}</InlineMath>, we have <InlineMath>{'F(x) = x^3/3'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_0^1 x^2 \\, dx = \\frac{1^3}{3} - \\frac{0^3}{3} = \\frac{1}{3}'}</MathBlock>
        <p className="mb-3">
          <strong>(b)</strong> Compute <InlineMath>{'\\int_0^{\\pi} \\sin x \\, dx'}</InlineMath>.
        </p>
        <p className="mb-3">
          Since <InlineMath>{'\\frac{d}{dx}(-\\cos x) = \\sin x'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_0^{\\pi} \\sin x \\, dx = [-\\cos x]_0^{\\pi} = -\\cos \\pi + \\cos 0 = -(-1) + 1 = 2'}</MathBlock>
        <p className="mb-3">
          <strong>(c)</strong> Compute <InlineMath>{'\\int_1^e \\frac{1}{x} \\, dx'}</InlineMath>.
        </p>
        <MathBlock>{'\\int_1^e \\frac{1}{x} \\, dx = [\\ln x]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1'}</MathBlock>
      </Example>

      <Callout type="warning" title="Hypothesis Matters">
        <p>
          The Fundamental Theorem requires <InlineMath>{'f'}</InlineMath> to be Riemann integrable.
          Not every function has an antiderivative, and not every derivative is Riemann integrable.
          However, every continuous function has an antiderivative (by Part I), and every
          derivative is integrable if it is bounded.
        </p>
      </Callout>

      <Theorem title="Integration by Substitution (Riemann Form)">
        <p className="mb-3">
          If <InlineMath>{'g'}</InlineMath> has a continuous derivative on <InlineMath>{'[a, b]'}</InlineMath> and <InlineMath>{'f'}</InlineMath> is
          continuous on the range of <InlineMath>{'g'}</InlineMath>, then
        </p>
        <MathBlock>{'\\int_a^b f(g(x)) g\'(x) \\, dx = \\int_{g(a)}^{g(b)} f(u) \\, du'}</MathBlock>
      </Theorem>

      <Example title="Integration by Substitution">
        <p className="mb-3">
          Compute <InlineMath>{'\\int_0^1 2x e^{x^2} \\, dx'}</InlineMath>.
        </p>
        <p className="mb-3">
          Let <InlineMath>{'u = x^2'}</InlineMath>, so <InlineMath>{'du = 2x \\, dx'}</InlineMath>. When <InlineMath>{'x = 0'}</InlineMath>, <InlineMath>{'u = 0'}</InlineMath>;
          when <InlineMath>{'x = 1'}</InlineMath>, <InlineMath>{'u = 1'}</InlineMath>.
        </p>
        <MathBlock>{'\\int_0^1 2x e^{x^2} \\, dx = \\int_0^1 e^u \\, du = [e^u]_0^1 = e - 1'}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>FTC Part I: <InlineMath>{'\\frac{d}{dx} \\int_a^x f(t) \\, dt = f(x)'}</InlineMath> (where <InlineMath>{'f'}</InlineMath> is continuous)</li>
        <li>FTC Part II: <InlineMath>{'\\int_a^b f(x) \\, dx = F(b) - F(a)'}</InlineMath> (where <InlineMath>{'F\' = f'}</InlineMath>)</li>
        <li>Integration and differentiation are inverse operations</li>
        <li>Any continuous function on <InlineMath>{'[a, b]'}</InlineMath> has an antiderivative</li>
        <li>Antiderivatives differ by at most a constant</li>
        <li>Substitution: <InlineMath>{'\\int f(g(x)) g\'(x) \\, dx = \\int f(u) \\, du'}</InlineMath> where <InlineMath>{'u = g(x)'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
