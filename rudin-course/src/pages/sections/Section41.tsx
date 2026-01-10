import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <h2 className="text-2xl font-semibold mb-4">Definition and Existence of the Riemann-Stieltjes Integral</h2>

      <p className="mb-4">
        We now develop the theory of integration. The Riemann-Stieltjes integral generalizes
        the ordinary Riemann integral by introducing a "weighting function" <InlineMath>{'\\alpha'}</InlineMath>.
        This more general approach includes the Riemann integral as a special case and has
        important applications in probability theory and analysis.
      </p>

      <Definition title="6.1 - Partition">
        <p className="mb-3">
          Let <InlineMath>{'[a, b]'}</InlineMath> be a given interval. By a <em>partition</em> <InlineMath>{'P'}</InlineMath> of <InlineMath>{'[a, b]'}</InlineMath> we
          mean a finite set of points <InlineMath>{'x_0, x_1, \\ldots, x_n'}</InlineMath> where
        </p>
        <MathBlock>{'a = x_0 \\leq x_1 \\leq \\cdots \\leq x_n = b'}</MathBlock>
        <p className="mb-3">
          We write
        </p>
        <MathBlock>{'\\Delta x_i = x_i - x_{i-1} \\quad (i = 1, \\ldots, n)'}</MathBlock>
        <p>
          The <em>mesh</em> or <em>norm</em> of <InlineMath>{'P'}</InlineMath> is <InlineMath>{'\\|P\\| = \\max_i \\Delta x_i'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="6.2 - Upper and Lower Sums">
        <p className="mb-3">
          Suppose <InlineMath>{'f'}</InlineMath> is a bounded real function defined on <InlineMath>{'[a, b]'}</InlineMath>.
          Corresponding to each partition <InlineMath>{'P'}</InlineMath> of <InlineMath>{'[a, b]'}</InlineMath> we put
        </p>
        <MathBlock>{'M_i = \\sup_{x_{i-1} \\leq x \\leq x_i} f(x), \\quad m_i = \\inf_{x_{i-1} \\leq x \\leq x_i} f(x)'}</MathBlock>
        <p className="mb-3">
          The <em>upper sum</em> and <em>lower sum</em> of <InlineMath>{'f'}</InlineMath> with respect
          to <InlineMath>{'P'}</InlineMath> and a monotonically increasing function <InlineMath>{'\\alpha'}</InlineMath> are:
        </p>
        <MathBlock>{'U(P, f, \\alpha) = \\sum_{i=1}^{n} M_i \\Delta \\alpha_i'}</MathBlock>
        <MathBlock>{'L(P, f, \\alpha) = \\sum_{i=1}^{n} m_i \\Delta \\alpha_i'}</MathBlock>
        <p>
          where <InlineMath>{'\\Delta \\alpha_i = \\alpha(x_i) - \\alpha(x_{i-1})'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="6.3 - Upper and Lower Integrals">
        <p className="mb-3">
          Define
        </p>
        <MathBlock>{'\\overline{\\int_a^b} f \\, d\\alpha = \\inf_P U(P, f, \\alpha)'}</MathBlock>
        <MathBlock>{'\\underline{\\int_a^b} f \\, d\\alpha = \\sup_P L(P, f, \\alpha)'}</MathBlock>
        <p>
          where the infimum and supremum are taken over all partitions <InlineMath>{'P'}</InlineMath> of <InlineMath>{'[a, b]'}</InlineMath>.
          These are called the <em>upper</em> and <em>lower Riemann-Stieltjes integrals</em>.
        </p>
      </Definition>

      <Definition title="6.4 - Riemann-Stieltjes Integrability">
        <p className="mb-3">
          If the upper and lower integrals are equal, we say that <InlineMath>{'f'}</InlineMath> is <em>Riemann-Stieltjes integrable</em> with
          respect to <InlineMath>{'\\alpha'}</InlineMath>, written <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath>,
          and we write the common value as
        </p>
        <MathBlock>{'\\int_a^b f \\, d\\alpha = \\int_a^b f(x) \\, d\\alpha(x)'}</MathBlock>
        <p>
          When <InlineMath>{'\\alpha(x) = x'}</InlineMath>, this reduces to the ordinary <em>Riemann integral</em>,
          written <InlineMath>{'\\int_a^b f(x) \\, dx'}</InlineMath> or <InlineMath>{'\\int_a^b f'}</InlineMath>.
        </p>
      </Definition>

      <Theorem title="6.5 - Refinement Inequality">
        <p className="mb-3">
          If <InlineMath>{'P^*'}</InlineMath> is a refinement of <InlineMath>{'P'}</InlineMath> (that is, <InlineMath>{'P^* \\supset P'}</InlineMath>), then
        </p>
        <MathBlock>{'L(P, f, \\alpha) \\leq L(P^*, f, \\alpha) \\leq U(P^*, f, \\alpha) \\leq U(P, f, \\alpha)'}</MathBlock>
      </Theorem>

      <Theorem
        title="6.6 - Riemann's Condition"
        proof={
          <>
            <p className="mb-3">
              If <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath>, let <InlineMath>{'\\varepsilon > 0'}</InlineMath>.
              Choose <InlineMath>{'P_1'}</InlineMath> so that <InlineMath>{'U(P_1, f, \\alpha) < \\int_a^b f \\, d\\alpha + \\varepsilon/2'}</InlineMath>,
              and <InlineMath>{'P_2'}</InlineMath> so that <InlineMath>{'L(P_2, f, \\alpha) > \\int_a^b f \\, d\\alpha - \\varepsilon/2'}</InlineMath>.
              Let <InlineMath>{'P = P_1 \\cup P_2'}</InlineMath>. Then
            </p>
            <MathBlock>{'U(P, f, \\alpha) - L(P, f, \\alpha) \\leq U(P_1, f, \\alpha) - L(P_2, f, \\alpha) < \\varepsilon'}</MathBlock>
            <p>
              The converse follows from <InlineMath>{'L(P, f, \\alpha) \\leq \\underline{\\int} f \\, d\\alpha \\leq \\overline{\\int} f \\, d\\alpha \\leq U(P, f, \\alpha)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath> on <InlineMath>{'[a, b]'}</InlineMath> if and only if for
          every <InlineMath>{'\\varepsilon > 0'}</InlineMath> there exists a partition <InlineMath>{'P'}</InlineMath> such that
        </p>
        <MathBlock>{'U(P, f, \\alpha) - L(P, f, \\alpha) < \\varepsilon'}</MathBlock>
      </Theorem>

      <Example title="Continuous Functions are Integrable">
        <p className="mb-3">
          If <InlineMath>{'f'}</InlineMath> is continuous on <InlineMath>{'[a, b]'}</InlineMath>, then <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath> for
          any monotonically increasing <InlineMath>{'\\alpha'}</InlineMath>.
        </p>
        <p className="mb-3">
          By uniform continuity, given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there
          exists <InlineMath>{'\\delta > 0'}</InlineMath> such that <InlineMath>{'|f(x) - f(t)| < \\varepsilon'}</InlineMath> whenever <InlineMath>{'|x - t| < \\delta'}</InlineMath>.
        </p>
        <p>
          Choose any partition <InlineMath>{'P'}</InlineMath> with <InlineMath>{'\\|P\\| < \\delta'}</InlineMath>. Then <InlineMath>{'M_i - m_i \\leq \\varepsilon'}</InlineMath> for all <InlineMath>{'i'}</InlineMath>, so
        </p>
        <MathBlock>{'U(P, f, \\alpha) - L(P, f, \\alpha) \\leq \\varepsilon [\\alpha(b) - \\alpha(a)]'}</MathBlock>
      </Example>

      <Callout type="info" title="Monotonic Functions are Integrable">
        <p>
          If <InlineMath>{'f'}</InlineMath> is monotonic on <InlineMath>{'[a, b]'}</InlineMath> and <InlineMath>{'\\alpha'}</InlineMath> is continuous
          on <InlineMath>{'[a, b]'}</InlineMath>, then <InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath>. The key is that
          monotonic functions have at most countably many discontinuities, and these form a
          set of measure zero.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>A partition divides <InlineMath>{'[a, b]'}</InlineMath> into subintervals</li>
        <li>Upper and lower sums approximate the integral from above and below</li>
        <li><InlineMath>{'f \\in \\mathscr{R}(\\alpha)'}</InlineMath> means the upper and lower integrals are equal</li>
        <li>The Riemann integral is the special case where <InlineMath>{'\\alpha(x) = x'}</InlineMath></li>
        <li>Riemann's condition: <InlineMath>{'U(P, f, \\alpha) - L(P, f, \\alpha) < \\varepsilon'}</InlineMath> for some partition</li>
        <li>Continuous functions are always Riemann integrable</li>
        <li>Monotonic functions are integrable when <InlineMath>{'\\alpha'}</InlineMath> is continuous</li>
      </ul>
    </LessonLayout>
  );
}
