import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <h2 className="text-2xl font-semibold mb-4">Uniform Convergence and Integration</h2>

      <p className="mb-4">
        We now address the second main problem from Section 46: when can we interchange
        limits and integrals? Under uniform convergence, we can integrate term by term.
      </p>

      <Theorem
        title="7.16 - Term-by-Term Integration"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\varepsilon > 0'}</InlineMath> be given.
              Since <InlineMath>{'\\alpha'}</InlineMath> is bounded, there
              exists <InlineMath>{'M > 0'}</InlineMath> such
              that <InlineMath>{'\\alpha(b) - \\alpha(a) \\leq M'}</InlineMath>.
            </p>
            <p className="mb-3">
              Since <InlineMath>{'f_n \\to f'}</InlineMath> uniformly
              on <InlineMath>{'[a, b]'}</InlineMath>, there exists <InlineMath>{'N'}</InlineMath> such
              that <InlineMath>{'n \\geq N'}</InlineMath> implies
            </p>
            <MathBlock>{'|f_n(x) - f(x)| < \\frac{\\varepsilon}{M}'}</MathBlock>
            <p className="mb-3">
              for all <InlineMath>{'x \\in [a, b]'}</InlineMath>. Hence, for <InlineMath>{'n \\geq N'}</InlineMath>:
            </p>
            <MathBlock>{'\\left| \\int_a^b f_n \\, d\\alpha - \\int_a^b f \\, d\\alpha \\right| = \\left| \\int_a^b (f_n - f) \\, d\\alpha \\right|'}</MathBlock>
            <MathBlock>{'\\leq \\int_a^b |f_n - f| \\, d\\alpha < \\frac{\\varepsilon}{M} \\cdot M = \\varepsilon'}</MathBlock>
            <p>
              This proves that <InlineMath>{'\\int_a^b f_n \\, d\\alpha \\to \\int_a^b f \\, d\\alpha'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'\\alpha'}</InlineMath> be monotonically increasing
          on <InlineMath>{'[a, b]'}</InlineMath>. Suppose <InlineMath>{'f_n \\in \\mathscr{R}(\\alpha)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>,
          for <InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>, and suppose <InlineMath>{'f_n \\to f'}</InlineMath> uniformly
          on <InlineMath>{'[a, b]'}</InlineMath>. Then <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>, and
        </p>
        <MathBlock>{'\\int_a^b f \\, d\\alpha = \\lim_{n \\to \\infty} \\int_a^b f_n \\, d\\alpha'}</MathBlock>
      </Theorem>

      <Callout type="info" title="Special Case: Riemann Integration">
        <p>
          Taking <InlineMath>{'\\alpha(x) = x'}</InlineMath> (Riemann integral), we have: if <InlineMath>{'f_n'}</InlineMath> are
          Riemann integrable and <InlineMath>{'f_n \\to f'}</InlineMath> uniformly, then
        </p>
        <MathBlock>{'\\int_a^b f(x) \\, dx = \\lim_{n \\to \\infty} \\int_a^b f_n(x) \\, dx'}</MathBlock>
      </Callout>

      <Theorem
        title="Corollary - Integration of Uniformly Convergent Series"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'s_n = \\sum_{k=1}^{n} g_k'}</InlineMath>. The
              sequence <InlineMath>{'\\{s_n\\}'}</InlineMath> converges uniformly
              to <InlineMath>{'f'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>.
              By Theorem 7.16:
            </p>
            <MathBlock>{'\\int_a^b f \\, d\\alpha = \\lim_{n \\to \\infty} \\int_a^b s_n \\, d\\alpha = \\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\int_a^b g_k \\, d\\alpha = \\sum_{k=1}^{\\infty} \\int_a^b g_k \\, d\\alpha'}</MathBlock>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'\\sum_{n=1}^{\\infty} g_n(x)'}</InlineMath> converges uniformly
          to <InlineMath>{'f(x)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath>,
          and each <InlineMath>{'g_n \\in \\mathscr{R}(\\alpha)'}</InlineMath>, then
        </p>
        <MathBlock>{'\\int_a^b f \\, d\\alpha = \\sum_{n=1}^{\\infty} \\int_a^b g_n \\, d\\alpha'}</MathBlock>
        <p>
          That is, we may integrate the series term by term.
        </p>
      </Theorem>

      <Example title="7.17 - Example: Integrating a Power Series">
        <p className="mb-3">
          Consider the geometric series for <InlineMath>{'|x| < 1'}</InlineMath>:
        </p>
        <MathBlock>{'\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n'}</MathBlock>
        <p className="mb-3">
          On any interval <InlineMath>{'[-r, r]'}</InlineMath> with <InlineMath>{'0 < r < 1'}</InlineMath>,
          this converges uniformly (by the M-test with <InlineMath>{'M_n = r^n'}</InlineMath>).
          Integrating from <InlineMath>{'0'}</InlineMath> to <InlineMath>{'x'}</InlineMath> where <InlineMath>{'|x| < 1'}</InlineMath>:
        </p>
        <MathBlock>{'-\\ln(1-x) = \\int_0^x \\frac{1}{1-t} \\, dt = \\sum_{n=0}^{\\infty} \\int_0^x t^n \\, dt = \\sum_{n=0}^{\\infty} \\frac{x^{n+1}}{n+1}'}</MathBlock>
        <p className="mb-3">
          Reindexing:
        </p>
        <MathBlock>{'\\ln\\left(\\frac{1}{1-x}\\right) = \\sum_{n=1}^{\\infty} \\frac{x^n}{n}'}</MathBlock>
        <p>
          This gives us the power series for <InlineMath>{'-\\ln(1-x)'}</InlineMath>.
        </p>
      </Example>

      <Example title="Computing a Classic Integral">
        <p className="mb-3">
          We can use term-by-term integration to evaluate:
        </p>
        <MathBlock>{'\\int_0^1 \\frac{\\ln x}{x - 1} \\, dx'}</MathBlock>
        <p className="mb-3">
          For <InlineMath>{'0 < x < 1'}</InlineMath>, write:
        </p>
        <MathBlock>{'\\frac{1}{x-1} = -\\frac{1}{1-x} = -\\sum_{n=0}^{\\infty} x^n'}</MathBlock>
        <p className="mb-3">
          So
        </p>
        <MathBlock>{'\\frac{\\ln x}{x-1} = -\\ln x \\cdot \\sum_{n=0}^{\\infty} x^n = -\\sum_{n=0}^{\\infty} x^n \\ln x'}</MathBlock>
        <p className="mb-3">
          Using <InlineMath>{'\\int_0^1 x^n \\ln x \\, dx = -\\frac{1}{(n+1)^2}'}</InlineMath> (integration by parts):
        </p>
        <MathBlock>{'\\int_0^1 \\frac{\\ln x}{x-1} \\, dx = \\sum_{n=0}^{\\infty} \\frac{1}{(n+1)^2} = \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}'}</MathBlock>
      </Example>

      <Theorem
        title="7.18 - Antiderivatives via Uniform Convergence"
        proof={
          <>
            <p className="mb-3">
              Define <InlineMath>{'F(x) = \\int_a^x f(t) \\, dt'}</InlineMath>
              and <InlineMath>{'F_n(x) = \\int_a^x f_n(t) \\, dt'}</InlineMath>.
            </p>
            <p className="mb-3">
              By Theorem 7.16, <InlineMath>{'F_n(x) \\to F(x)'}</InlineMath> for each <InlineMath>{'x'}</InlineMath>.
              In fact, the convergence is uniform: for <InlineMath>{'n \\geq N'}</InlineMath>,
            </p>
            <MathBlock>{'|F_n(x) - F(x)| \\leq \\int_a^x |f_n - f| \\, dt \\leq (b-a) \\cdot \\|f_n - f\\|_{[a,b]}'}</MathBlock>
            <p className="mb-3">
              which goes to zero uniformly in <InlineMath>{'x'}</InlineMath>.
            </p>
            <p>
              Since each <InlineMath>{'F_n'}</InlineMath> is differentiable
              with <InlineMath>{'F_n\'(x) = f_n(x)'}</InlineMath> (by the Fundamental Theorem of Calculus),
              we have a sequence of differentiable functions converging uniformly,
              with derivatives converging uniformly. By Theorem 7.17 (next section),
              <InlineMath>{'F\'(x) = f(x)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'f_n \\to f'}</InlineMath> uniformly on <InlineMath>{'[a, b]'}</InlineMath>,
          and each <InlineMath>{'f_n'}</InlineMath> is continuous. Then
        </p>
        <MathBlock>{'F(x) = \\int_a^x f(t) \\, dt'}</MathBlock>
        <p>
          is an antiderivative of <InlineMath>{'f'}</InlineMath>, i.e., <InlineMath>{'F\'(x) = f(x)'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning" title="Why Uniform Convergence Matters">
        <p className="mb-3">
          Recall from Section 46 that <InlineMath>{'f_n(x) = n^2 x(1-x)^n'}</InlineMath> converged
          pointwise to <InlineMath>{'0'}</InlineMath>, but
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} \\int_0^1 f_n(x) \\, dx = 1 \\neq 0 = \\int_0^1 0 \\, dx'}</MathBlock>
        <p>
          The convergence was not uniform! Near <InlineMath>{'x = 0'}</InlineMath>,
          the functions <InlineMath>{'f_n'}</InlineMath> have a "spike" of height approximately <InlineMath>{'n/e'}</InlineMath>,
          which does not go to zero uniformly.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Under uniform convergence, <InlineMath>{'\\int f_n \\to \\int f'}</InlineMath></li>
        <li>Uniformly convergent series can be integrated term by term</li>
        <li>This justifies many formal manipulations with power series</li>
        <li>The uniform bound on the difference <InlineMath>{'|f_n - f|'}</InlineMath> is what makes the proof work</li>
        <li>Pointwise convergence alone is not enough to interchange limits and integrals</li>
      </ul>
    </LessonLayout>
  );
}
