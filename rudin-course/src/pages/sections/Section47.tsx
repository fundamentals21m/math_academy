import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <h2 className="text-2xl font-semibold mb-4">Uniform Convergence</h2>

      <p className="mb-4">
        We now introduce the concept of uniform convergence, which is stronger than pointwise
        convergence and ensures that many important properties of functions are preserved
        under limits.
      </p>

      <Definition title="7.7 - Uniform Convergence">
        <p className="mb-3">
          We say that a sequence of functions <InlineMath>{'\\{f_n\\}'}</InlineMath> <em>converges uniformly</em> on
          a set <InlineMath>{'E'}</InlineMath> to a function <InlineMath>{'f'}</InlineMath> if for
          every <InlineMath>{'\\varepsilon > 0'}</InlineMath> there is an
          integer <InlineMath>{'N'}</InlineMath> such that <InlineMath>{'n \\geq N'}</InlineMath> implies
        </p>
        <MathBlock>{'|f_n(x) - f(x)| < \\varepsilon'}</MathBlock>
        <p>
          for all <InlineMath>{'x \\in E'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="warning" title="Key Distinction">
        <p className="mb-3">
          In <strong>pointwise convergence</strong>, the integer <InlineMath>{'N'}</InlineMath> may depend
          on both <InlineMath>{'\\varepsilon'}</InlineMath> and the
          point <InlineMath>{'x'}</InlineMath>: <InlineMath>{'N = N(\\varepsilon, x)'}</InlineMath>.
        </p>
        <p>
          In <strong>uniform convergence</strong>, a single <InlineMath>{'N'}</InlineMath> works for
          all <InlineMath>{'x \\in E'}</InlineMath> simultaneously: <InlineMath>{'N = N(\\varepsilon)'}</InlineMath>.
        </p>
      </Callout>

      <Definition title="7.8 - Supremum Norm">
        <p className="mb-3">
          For a bounded function <InlineMath>{'f: E \\to \\mathbb{R}'}</InlineMath> (or <InlineMath>{'\\mathbb{C}'}</InlineMath>),
          we define the <em>supremum norm</em> (or <em>uniform norm</em>) by
        </p>
        <MathBlock>{'\\|f\\|_E = \\sup_{x \\in E} |f(x)|'}</MathBlock>
        <p className="mb-3">
          When the domain <InlineMath>{'E'}</InlineMath> is clear from context, we simply
          write <InlineMath>{'\\|f\\|'}</InlineMath> or <InlineMath>{'\\|f\\|_\\infty'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="7.9 - Characterization via Supremum Norm"
        proof={
          <>
            <p className="mb-3">
              Suppose <InlineMath>{'f_n \\to f'}</InlineMath> uniformly on <InlineMath>{'E'}</InlineMath>.
              Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there exists <InlineMath>{'N'}</InlineMath> such
              that <InlineMath>{'n \\geq N'}</InlineMath> implies <InlineMath>{'|f_n(x) - f(x)| < \\varepsilon'}</InlineMath> for
              all <InlineMath>{'x \\in E'}</InlineMath>. Taking the supremum over <InlineMath>{'x'}</InlineMath>,
              we get <InlineMath>{'\\|f_n - f\\|_E \\leq \\varepsilon < 2\\varepsilon'}</InlineMath>
              for <InlineMath>{'n \\geq N'}</InlineMath>.
            </p>
            <p>
              Conversely, if <InlineMath>{'\\|f_n - f\\|_E \\to 0'}</InlineMath>,
              then given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, choose <InlineMath>{'N'}</InlineMath> so
              that <InlineMath>{'\\|f_n - f\\|_E < \\varepsilon'}</InlineMath> for <InlineMath>{'n \\geq N'}</InlineMath>.
              Then <InlineMath>{'|f_n(x) - f(x)| \\leq \\|f_n - f\\|_E < \\varepsilon'}</InlineMath> for
              all <InlineMath>{'x \\in E'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'f_n \\to f'}</InlineMath> uniformly on <InlineMath>{'E'}</InlineMath> if and only
          if <InlineMath>{'\\|f_n - f\\|_E \\to 0'}</InlineMath> as <InlineMath>{'n \\to \\infty'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="7.10 - Example: Uniform vs. Pointwise Convergence">
        <p className="mb-3">
          Consider <InlineMath>{'f_n(x) = x^n'}</InlineMath> on <InlineMath>{'[0, 1]'}</InlineMath>.
        </p>
        <p className="mb-3">
          We showed in Section 46 that <InlineMath>{'f_n'}</InlineMath> converges pointwise
          to <InlineMath>{'f'}</InlineMath> where <InlineMath>{'f(x) = 0'}</InlineMath> for <InlineMath>{'x \\in [0, 1)'}</InlineMath> and <InlineMath>{'f(1) = 1'}</InlineMath>.
        </p>
        <p className="mb-3">
          The convergence is <em>not</em> uniform. To see this, note that
          for any <InlineMath>{'n'}</InlineMath>:
        </p>
        <MathBlock>{'\\|f_n - f\\|_{[0,1)} = \\sup_{x \\in [0,1)} |x^n - 0| = \\sup_{x \\in [0,1)} x^n = 1'}</MathBlock>
        <p className="mb-3">
          since <InlineMath>{'x^n'}</InlineMath> can be made arbitrarily close
          to <InlineMath>{'1'}</InlineMath> by taking <InlineMath>{'x'}</InlineMath> close
          to <InlineMath>{'1'}</InlineMath>.
        </p>
        <p>
          However, on <InlineMath>{'[0, a]'}</InlineMath> for any <InlineMath>{'a < 1'}</InlineMath>,
          we have <InlineMath>{'\\|f_n\\|_{[0,a]} = a^n \\to 0'}</InlineMath>,
          so <InlineMath>{'f_n \\to 0'}</InlineMath> uniformly on <InlineMath>{'[0, a]'}</InlineMath>.
        </p>
      </Example>

      <Theorem
        title="7.10 - Cauchy Criterion for Uniform Convergence"
        proof={
          <>
            <p className="mb-3">
              The necessity is immediate: if <InlineMath>{'f_n \\to f'}</InlineMath> uniformly,
              then for <InlineMath>{'n, m \\geq N'}</InlineMath>,
            </p>
            <MathBlock>{'|f_n(x) - f_m(x)| \\leq |f_n(x) - f(x)| + |f(x) - f_m(x)| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon'}</MathBlock>
            <p className="mb-3">
              For sufficiency, the Cauchy condition at each <InlineMath>{'x'}</InlineMath> implies
              that <InlineMath>{'\\{f_n(x)\\}'}</InlineMath> converges to some
              limit <InlineMath>{'f(x)'}</InlineMath>. Fix <InlineMath>{'n \\geq N'}</InlineMath>. For
              any <InlineMath>{'x'}</InlineMath>, we have <InlineMath>{'|f_n(x) - f_m(x)| < \\varepsilon'}</InlineMath> for
              all <InlineMath>{'m \\geq N'}</InlineMath>. Letting <InlineMath>{'m \\to \\infty'}</InlineMath>:
            </p>
            <MathBlock>{'|f_n(x) - f(x)| \\leq \\varepsilon'}</MathBlock>
            <p>
              for all <InlineMath>{'x \\in E'}</InlineMath>, which proves uniform convergence.
            </p>
          </>
        }
      >
        <p className="mb-3">
          A sequence of functions <InlineMath>{'\\{f_n\\}'}</InlineMath> converges uniformly
          on <InlineMath>{'E'}</InlineMath> if and only if for
          every <InlineMath>{'\\varepsilon > 0'}</InlineMath> there exists an
          integer <InlineMath>{'N'}</InlineMath> such that <InlineMath>{'m, n \\geq N'}</InlineMath> implies
        </p>
        <MathBlock>{'|f_n(x) - f_m(x)| < \\varepsilon'}</MathBlock>
        <p>
          for all <InlineMath>{'x \\in E'}</InlineMath>.
        </p>
      </Theorem>

      <Definition title="7.11 - Uniform Convergence of Series">
        <p className="mb-3">
          A series <InlineMath>{'\\sum_{n=1}^{\\infty} f_n(x)'}</InlineMath> <em>converges uniformly</em> on <InlineMath>{'E'}</InlineMath> if
          the sequence of partial sums
        </p>
        <MathBlock>{'s_n(x) = \\sum_{k=1}^{n} f_k(x)'}</MathBlock>
        <p>
          converges uniformly on <InlineMath>{'E'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="7.10 - Weierstrass M-Test"
        proof={
          <>
            <p className="mb-3">
              For <InlineMath>{'n > m'}</InlineMath> and any <InlineMath>{'x \\in E'}</InlineMath>:
            </p>
            <MathBlock>{'|s_n(x) - s_m(x)| = \\left| \\sum_{k=m+1}^{n} f_k(x) \\right| \\leq \\sum_{k=m+1}^{n} |f_k(x)| \\leq \\sum_{k=m+1}^{n} M_k'}</MathBlock>
            <p className="mb-3">
              Since <InlineMath>{'\\sum M_n'}</InlineMath> converges, given <InlineMath>{'\\varepsilon > 0'}</InlineMath>,
              there exists <InlineMath>{'N'}</InlineMath> such that <InlineMath>{'\\sum_{k=m+1}^{n} M_k < \\varepsilon'}</InlineMath> for <InlineMath>{'n > m \\geq N'}</InlineMath>.
            </p>
            <p>
              By the Cauchy criterion, <InlineMath>{'\\sum f_n'}</InlineMath> converges uniformly on <InlineMath>{'E'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\{f_n\\}'}</InlineMath> is a sequence of functions defined on <InlineMath>{'E'}</InlineMath>,
          and suppose
        </p>
        <MathBlock>{'|f_n(x)| \\leq M_n \\quad (x \\in E, \\, n = 1, 2, 3, \\ldots)'}</MathBlock>
        <p>
          If <InlineMath>{'\\sum_{n=1}^{\\infty} M_n'}</InlineMath> converges,
          then <InlineMath>{'\\sum_{n=1}^{\\infty} f_n'}</InlineMath> converges uniformly on <InlineMath>{'E'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Application of the Weierstrass M-Test">
        <p className="mb-3">
          Show that <InlineMath>{'\\sum_{n=1}^{\\infty} \\frac{\\cos(nx)}{n^2}'}</InlineMath> converges
          uniformly on <InlineMath>{'\\mathbb{R}'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>Solution:</strong> Let <InlineMath>{'f_n(x) = \\frac{\\cos(nx)}{n^2}'}</InlineMath>.
          For all <InlineMath>{'x \\in \\mathbb{R}'}</InlineMath>:
        </p>
        <MathBlock>{'|f_n(x)| = \\frac{|\\cos(nx)|}{n^2} \\leq \\frac{1}{n^2} = M_n'}</MathBlock>
        <p className="mb-3">
          Since <InlineMath>{'\\sum_{n=1}^{\\infty} \\frac{1}{n^2}'}</InlineMath> converges
          (it equals <InlineMath>{'\\pi^2/6'}</InlineMath>), the Weierstrass M-test implies
          that <InlineMath>{'\\sum \\frac{\\cos(nx)}{n^2}'}</InlineMath> converges uniformly
          on <InlineMath>{'\\mathbb{R}'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Uniform convergence requires a single <InlineMath>{'N'}</InlineMath> to work for all points simultaneously</li>
        <li>The supremum norm characterizes uniform convergence: <InlineMath>{'f_n \\to f'}</InlineMath> uniformly iff <InlineMath>{'\\|f_n - f\\|_\\infty \\to 0'}</InlineMath></li>
        <li>The Cauchy criterion provides a way to verify uniform convergence without knowing the limit</li>
        <li>The Weierstrass M-test is a powerful tool for proving uniform convergence of series</li>
        <li>Uniform convergence is strictly stronger than pointwise convergence</li>
      </ul>
    </LessonLayout>
  );
}
