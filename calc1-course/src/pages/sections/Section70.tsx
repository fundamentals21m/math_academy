import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section70() {
  return (
    <LessonLayout sectionId={70}>
      <h1>Uniform Convergence</h1>

      <p>
        In the previous section, we saw that pointwise convergence of functions has serious
        limitations: the limit of continuous functions may be discontinuous, and we cannot
        freely interchange limits with integrals or derivatives. The remedy is a stronger
        notion of convergence called <strong>uniform convergence</strong>.
      </p>

      <h2>Definition of Uniform Convergence</h2>

      <Callout type="definition" title="Uniform Convergence">
        <p>
          Let <InlineMath>{`\\{f_n\\}`}</InlineMath> be a sequence of functions defined on a set <InlineMath>{`S`}</InlineMath>.
          We say that <InlineMath>{`\\{f_n\\}`}</InlineMath> <strong>converges uniformly</strong> to <InlineMath>{`f`}</InlineMath>
          on <InlineMath>{`S`}</InlineMath> if for every <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there
          exists <InlineMath>{`N`}</InlineMath> such that:
        </p>
        <MathBlock>{`n \\geq N \\implies |f_n(x) - f(x)| < \\varepsilon \\quad \\text{for all } x \\in S`}</MathBlock>
        <p>We write <InlineMath>{`f_n \\rightrightarrows f`}</InlineMath> on <InlineMath>{`S`}</InlineMath>.</p>
      </Callout>

      <p>
        The crucial difference from pointwise convergence is that <InlineMath>{`N`}</InlineMath> depends
        only on <InlineMath>{`\\varepsilon`}</InlineMath>, not on <InlineMath>{`x`}</InlineMath>. The same <InlineMath>{`N`}</InlineMath> works
        for all points simultaneously.
      </p>

      <Callout type="info" title="Pointwise vs Uniform">
        <p><strong>Pointwise:</strong> For each <InlineMath>{`x`}</InlineMath> and each <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists <InlineMath>{`N(x, \\varepsilon)`}</InlineMath> such that...</p>
        <p><strong>Uniform:</strong> For each <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there exists <InlineMath>{`N(\\varepsilon)`}</InlineMath> such that for all <InlineMath>{`x`}</InlineMath>...</p>
        <p>Uniform convergence implies pointwise convergence, but not conversely.</p>
      </Callout>

      <h2>The Supremum Norm Characterization</h2>

      <p>
        Uniform convergence has an elegant characterization in terms of the supremum norm.
      </p>

      <Callout type="definition" title="Supremum Norm">
        <p>For a bounded function <InlineMath>{`f`}</InlineMath> on <InlineMath>{`S`}</InlineMath>, define:</p>
        <MathBlock>{`\\|f\\|_\\infty = \\sup_{x \\in S} |f(x)|`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Supremum Norm Criterion">
        <p><InlineMath>{`f_n \\rightrightarrows f`}</InlineMath> on <InlineMath>{`S`}</InlineMath> if and only if:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\|f_n - f\\|_\\infty = 0`}</MathBlock>
        <p>That is, <InlineMath>{`\\sup_{x \\in S} |f_n(x) - f(x)| \\to 0`}</InlineMath> as <InlineMath>{`n \\to \\infty`}</InlineMath>.</p>
      </Callout>

      <p>
        This criterion is often the most practical way to test for uniform convergence:
        find <InlineMath>{`M_n = \\sup_x |f_n(x) - f(x)|`}</InlineMath> and check if <InlineMath>{`M_n \\to 0`}</InlineMath>.
      </p>

      <h2>Examples</h2>

      <Callout type="example" title="Uniform Convergence">
        <p>
          Let <InlineMath>{`f_n(x) = \\frac{\\sin(nx)}{n}`}</InlineMath> on <InlineMath>{`\\mathbb{R}`}</InlineMath>.
        </p>
        <p>The pointwise limit is <InlineMath>{`f(x) = 0`}</InlineMath>. For uniform convergence:</p>
        <MathBlock>{`\\|f_n - f\\|_\\infty = \\sup_{x \\in \\mathbb{R}} \\left|\\frac{\\sin(nx)}{n}\\right| = \\frac{1}{n} \\to 0`}</MathBlock>
        <p>So <InlineMath>{`f_n \\rightrightarrows 0`}</InlineMath> uniformly on <InlineMath>{`\\mathbb{R}`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Non-Uniform Convergence">
        <p>
          Let <InlineMath>{`f_n(x) = x^n`}</InlineMath> on <InlineMath>{`[0, 1]`}</InlineMath>.
        </p>
        <p>The pointwise limit is:</p>
        <MathBlock>{`f(x) = \\begin{cases} 0 & \\text{if } 0 \\leq x < 1 \\ 1 & \\text{if } x = 1 \\end{cases}`}</MathBlock>
        <p>For <InlineMath>{`0 \\leq x < 1`}</InlineMath>:</p>
        <MathBlock>{`|f_n(x) - f(x)| = |x^n - 0| = x^n`}</MathBlock>
        <p>The supremum over <InlineMath>{`[0, 1)`}</InlineMath> is:</p>
        <MathBlock>{`\\sup_{0 \\leq x < 1} x^n = \\lim_{x \\to 1^-} x^n = 1 \\neq 0`}</MathBlock>
        <p>
          So <InlineMath>{`\\|f_n - f\\|_\\infty = 1`}</InlineMath> for all <InlineMath>{`n`}</InlineMath>,
          and convergence is not uniform on <InlineMath>{`[0, 1]`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Uniform on Subintervals">
        <p>
          The same <InlineMath>{`f_n(x) = x^n`}</InlineMath> converges uniformly on <InlineMath>{`[0, a]`}</InlineMath> for
          any <InlineMath>{`0 < a < 1`}</InlineMath>.
        </p>
        <p>On <InlineMath>{`[0, a]`}</InlineMath>:</p>
        <MathBlock>{`\\|f_n - 0\\|_\\infty = \\sup_{0 \\leq x \\leq a} x^n = a^n \\to 0`}</MathBlock>
        <p>
          Uniform convergence can hold on compact subsets even when it fails on the full domain.
        </p>
      </Callout>

      <h2>Uniform Convergence Preserves Continuity</h2>

      <p>
        The most important property of uniform convergence is that it preserves continuity.
      </p>

      <Callout type="theorem" title="Uniform Limit of Continuous Functions">
        <p>
          If <InlineMath>{`\\{f_n\\}`}</InlineMath> is a sequence of continuous functions on <InlineMath>{`S`}</InlineMath> and
          <InlineMath>{`f_n \\rightrightarrows f`}</InlineMath> on <InlineMath>{`S`}</InlineMath>, then <InlineMath>{`f`}</InlineMath> is
          continuous on <InlineMath>{`S`}</InlineMath>.
        </p>
      </Callout>

      <p><strong>Proof:</strong></p>
      <p>
        Fix <InlineMath>{`x_0 \\in S`}</InlineMath> and <InlineMath>{`\\varepsilon > 0`}</InlineMath>. We need to
        show <InlineMath>{`|f(x) - f(x_0)| < \\varepsilon`}</InlineMath> for <InlineMath>{`x`}</InlineMath> sufficiently
        close to <InlineMath>{`x_0`}</InlineMath>.
      </p>
      <p>By uniform convergence, choose <InlineMath>{`N`}</InlineMath> such that <InlineMath>{`|f_n(x) - f(x)| < \\varepsilon/3`}</InlineMath> for all <InlineMath>{`x`}</InlineMath> and all <InlineMath>{`n \\geq N`}</InlineMath>.</p>
      <p>Since <InlineMath>{`f_N`}</InlineMath> is continuous at <InlineMath>{`x_0`}</InlineMath>, there exists <InlineMath>{`\\delta > 0`}</InlineMath> such that:</p>
      <MathBlock>{`|x - x_0| < \\delta \\implies |f_N(x) - f_N(x_0)| < \\varepsilon/3`}</MathBlock>
      <p>Then for <InlineMath>{`|x - x_0| < \\delta`}</InlineMath>:</p>
      <MathBlock>{`|f(x) - f(x_0)| \\leq |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)|`}</MathBlock>
      <MathBlock>{`< \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} = \\varepsilon`}</MathBlock>
      <p>Thus <InlineMath>{`f`}</InlineMath> is continuous at <InlineMath>{`x_0`}</InlineMath>. <span className="float-right">□</span></p>

      <h2>Uniform Convergence and Integration</h2>

      <p>
        Uniform convergence allows us to interchange limits and integrals.
      </p>

      <Callout type="theorem" title="Integration of Uniform Limits">
        <p>
          If <InlineMath>{`f_n \\rightrightarrows f`}</InlineMath> on <InlineMath>{`[a, b]`}</InlineMath> and
          each <InlineMath>{`f_n`}</InlineMath> is integrable on <InlineMath>{`[a, b]`}</InlineMath>, then <InlineMath>{`f`}</InlineMath> is
          integrable and:
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\int_a^b f_n(x)\\,dx = \\int_a^b f(x)\\,dx`}</MathBlock>
        <p>That is, <InlineMath>{`\\lim_{n \\to \\infty} \\int_a^b f_n = \\int_a^b \\lim_{n \\to \\infty} f_n`}</InlineMath>.</p>
      </Callout>

      <p><strong>Proof sketch:</strong></p>
      <MathBlock>{`\\left|\\int_a^b f_n(x)\\,dx - \\int_a^b f(x)\\,dx\\right| \\leq \\int_a^b |f_n(x) - f(x)|\\,dx \\leq (b-a) \\|f_n - f\\|_\\infty \\to 0`}</MathBlock>

      <Callout type="example" title="Applying the Integration Theorem">
        <p>
          Since <InlineMath>{`f_n(x) = x^n`}</InlineMath> converges uniformly to 0 on <InlineMath>{`[0, 1/2]`}</InlineMath>:
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\int_0^{1/2} x^n\\,dx = \\int_0^{1/2} 0\\,dx = 0`}</MathBlock>
        <p>We can verify: <InlineMath>{`\\int_0^{1/2} x^n\\,dx = \\frac{(1/2)^{n+1}}{n+1} \\to 0`}</InlineMath>.</p>
      </Callout>

      <h2>Uniform Convergence and Differentiation</h2>

      <p>
        For differentiation, uniform convergence of <InlineMath>{`f_n`}</InlineMath> alone is not sufficient—we
        need uniform convergence of the derivatives.
      </p>

      <Callout type="theorem" title="Differentiation of Uniform Limits">
        <p>
          Suppose <InlineMath>{`\\{f_n\\}`}</InlineMath> is a sequence of differentiable functions on <InlineMath>{`[a, b]`}</InlineMath> such that:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`\\{f_n(x_0)\\}`}</InlineMath> converges for some <InlineMath>{`x_0 \\in [a, b]`}</InlineMath></li>
          <li><InlineMath>{`\\{f_n'\\}`}</InlineMath> converges uniformly on <InlineMath>{`[a, b]`}</InlineMath></li>
        </ol>
        <p>
          Then <InlineMath>{`\\{f_n\\}`}</InlineMath> converges uniformly to a differentiable function <InlineMath>{`f`}</InlineMath>, and:
        </p>
        <MathBlock>{`f'(x) = \\lim_{n \\to \\infty} f_n'(x)`}</MathBlock>
      </Callout>

      <Callout type="example" title="When Derivatives Don't Converge Uniformly">
        <p>
          Recall <InlineMath>{`f_n(x) = \\frac{\\sin(nx)}{n}`}</InlineMath> converges uniformly to 0.
          But <InlineMath>{`f_n'(x) = \\cos(nx)`}</InlineMath> does not converge at all (let alone uniformly).
        </p>
        <p>
          This explains why <InlineMath>{`(\\lim f_n)' = 0' = 0`}</InlineMath> differs
          from <InlineMath>{`\\lim f_n' = \\lim \\cos(nx)`}</InlineMath>, which doesn't exist.
        </p>
      </Callout>

      <h2>The Weierstrass M-Test</h2>

      <p>
        For series of functions, the Weierstrass M-test provides a powerful criterion for uniform convergence.
      </p>

      <Callout type="theorem" title="Weierstrass M-Test">
        <p>
          Let <InlineMath>{`\\{u_n\\}`}</InlineMath> be a sequence of functions on <InlineMath>{`S`}</InlineMath>.
          If there exist constants <InlineMath>{`M_n \\geq 0`}</InlineMath> such that:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`|u_n(x)| \\leq M_n`}</InlineMath> for all <InlineMath>{`x \\in S`}</InlineMath></li>
          <li><InlineMath>{`\\sum_{n=1}^\\infty M_n`}</InlineMath> converges</li>
        </ol>
        <p>
          Then <InlineMath>{`\\sum_{n=1}^\\infty u_n(x)`}</InlineMath> converges uniformly (and absolutely) on <InlineMath>{`S`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Applying the M-Test">
        <p>Show that <InlineMath>{`\\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}`}</InlineMath> converges uniformly on <InlineMath>{`\\mathbb{R}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\left|\\frac{\\cos(nx)}{n^2}\\right| \\leq \\frac{1}{n^2} = M_n`}</MathBlock>
        <p>
          Since <InlineMath>{`\\sum \\frac{1}{n^2}`}</InlineMath> converges (p-series with p = 2 &gt; 1),
          the Weierstrass M-test guarantees uniform convergence.
        </p>
      </Callout>

      <Callout type="example" title="Geometric Series">
        <p>
          The geometric series <InlineMath>{`\\sum_{n=0}^\\infty x^n`}</InlineMath> converges uniformly
          on <InlineMath>{`[-r, r]`}</InlineMath> for any <InlineMath>{`0 < r < 1`}</InlineMath>.
        </p>
        <p><strong>Proof:</strong> For <InlineMath>{`|x| \\leq r`}</InlineMath>:</p>
        <MathBlock>{`|x^n| \\leq r^n = M_n`}</MathBlock>
        <p>
          Since <InlineMath>{`\\sum r^n = \\frac{1}{1-r}`}</InlineMath> converges, the M-test applies.
        </p>
        <p>
          Note: Convergence is <em>not</em> uniform on <InlineMath>{`(-1, 1)`}</InlineMath> since
          near <InlineMath>{`x = \\pm 1`}</InlineMath>, the series converges arbitrarily slowly.
        </p>
      </Callout>

      <h2>Applications</h2>

      <Callout type="example" title="Term-by-Term Integration">
        <p>
          Since <InlineMath>{`\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}`}</InlineMath> converges uniformly
          on <InlineMath>{`[-r, r]`}</InlineMath> for <InlineMath>{`r < 1`}</InlineMath>, we can integrate term by term:
        </p>
        <MathBlock>{`\\int_0^x \\frac{1}{1-t}\\,dt = \\sum_{n=0}^\\infty \\int_0^x t^n\\,dt = \\sum_{n=0}^\\infty \\frac{x^{n+1}}{n+1}`}</MathBlock>
        <p>This gives:</p>
        <MathBlock>{`-\\ln(1-x) = \\sum_{n=1}^\\infty \\frac{x^n}{n} = x + \\frac{x^2}{2} + \\frac{x^3}{3} + \\cdots`}</MathBlock>
        <p>for <InlineMath>{`|x| < 1`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Term-by-Term Differentiation">
        <p>
          If the derivatives <InlineMath>{`\\sum_{n=1}^\\infty u_n'(x)`}</InlineMath> converge uniformly
          and <InlineMath>{`\\sum u_n(x_0)`}</InlineMath> converges at some point, then:
        </p>
        <MathBlock>{`\\frac{d}{dx}\\left(\\sum_{n=1}^\\infty u_n(x)\\right) = \\sum_{n=1}^\\infty u_n'(x)`}</MathBlock>
        <p>
          For example, differentiating <InlineMath>{`\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}`}</InlineMath>:
        </p>
        <MathBlock>{`\\sum_{n=1}^\\infty nx^{n-1} = \\frac{1}{(1-x)^2}`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results">
        <p><strong>Uniform convergence</strong> (<InlineMath>{`f_n \\rightrightarrows f`}</InlineMath>): One <InlineMath>{`N`}</InlineMath> works for all <InlineMath>{`x`}</InlineMath>.</p>
        <p><strong>Sup-norm criterion:</strong> <InlineMath>{`f_n \\rightrightarrows f`}</InlineMath> iff <InlineMath>{`\\|f_n - f\\|_\\infty \\to 0`}</InlineMath>.</p>
        <p><strong>Preserves continuity:</strong> Uniform limit of continuous functions is continuous.</p>
        <p><strong>Allows integration:</strong> <InlineMath>{`\\int \\lim f_n = \\lim \\int f_n`}</InlineMath> under uniform convergence.</p>
        <p><strong>Allows differentiation:</strong> If <InlineMath>{`f_n' \\rightrightarrows g`}</InlineMath> uniformly, then <InlineMath>{`(\\lim f_n)' = g`}</InlineMath>.</p>
        <p><strong>Weierstrass M-test:</strong> If <InlineMath>{`|u_n(x)| \\leq M_n`}</InlineMath> and <InlineMath>{`\\sum M_n < \\infty`}</InlineMath>, then <InlineMath>{`\\sum u_n`}</InlineMath> converges uniformly.</p>
      </Callout>
    </LessonLayout>
  );
}
