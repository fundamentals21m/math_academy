import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          Let <MathInline>{`\\{f_n\\}`}</MathInline> be a sequence of functions defined on a set <MathInline>{`S`}</MathInline>.
          We say that <MathInline>{`\\{f_n\\}`}</MathInline> <strong>converges uniformly</strong> to <MathInline>{`f`}</MathInline>
          on <MathInline>{`S`}</MathInline> if for every <MathInline>{`\\varepsilon > 0`}</MathInline>, there
          exists <MathInline>{`N`}</MathInline> such that:
        </p>
        <MathBlock>{`n \\geq N \\implies |f_n(x) - f(x)| < \\varepsilon \\quad \\text{for all } x \\in S`}</MathBlock>
        <p>We write <MathInline>{`f_n \\rightrightarrows f`}</MathInline> on <MathInline>{`S`}</MathInline>.</p>
      </Callout>

      <p>
        The crucial difference from pointwise convergence is that <MathInline>{`N`}</MathInline> depends
        only on <MathInline>{`\\varepsilon`}</MathInline>, not on <MathInline>{`x`}</MathInline>. The same <MathInline>{`N`}</MathInline> works
        for all points simultaneously.
      </p>

      <Callout type="info" title="Pointwise vs Uniform">
        <p><strong>Pointwise:</strong> For each <MathInline>{`x`}</MathInline> and each <MathInline>{`\\varepsilon > 0`}</MathInline>, there exists <MathInline>{`N(x, \\varepsilon)`}</MathInline> such that...</p>
        <p><strong>Uniform:</strong> For each <MathInline>{`\\varepsilon > 0`}</MathInline>, there exists <MathInline>{`N(\\varepsilon)`}</MathInline> such that for all <MathInline>{`x`}</MathInline>...</p>
        <p>Uniform convergence implies pointwise convergence, but not conversely.</p>
      </Callout>

      <h2>The Supremum Norm Characterization</h2>

      <p>
        Uniform convergence has an elegant characterization in terms of the supremum norm.
      </p>

      <Callout type="definition" title="Supremum Norm">
        <p>For a bounded function <MathInline>{`f`}</MathInline> on <MathInline>{`S`}</MathInline>, define:</p>
        <MathBlock>{`\\|f\\|_\\infty = \\sup_{x \\in S} |f(x)|`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Supremum Norm Criterion">
        <p><MathInline>{`f_n \\rightrightarrows f`}</MathInline> on <MathInline>{`S`}</MathInline> if and only if:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\|f_n - f\\|_\\infty = 0`}</MathBlock>
        <p>That is, <MathInline>{`\\sup_{x \\in S} |f_n(x) - f(x)| \\to 0`}</MathInline> as <MathInline>{`n \\to \\infty`}</MathInline>.</p>
      </Callout>

      <p>
        This criterion is often the most practical way to test for uniform convergence:
        find <MathInline>{`M_n = \\sup_x |f_n(x) - f(x)|`}</MathInline> and check if <MathInline>{`M_n \\to 0`}</MathInline>.
      </p>

      <h2>Examples</h2>

      <Callout type="example" title="Uniform Convergence">
        <p>
          Let <MathInline>{`f_n(x) = \\frac{\\sin(nx)}{n}`}</MathInline> on <MathInline>{`\\mathbb{R}`}</MathInline>.
        </p>
        <p>The pointwise limit is <MathInline>{`f(x) = 0`}</MathInline>. For uniform convergence:</p>
        <MathBlock>{`\\|f_n - f\\|_\\infty = \\sup_{x \\in \\mathbb{R}} \\left|\\frac{\\sin(nx)}{n}\\right| = \\frac{1}{n} \\to 0`}</MathBlock>
        <p>So <MathInline>{`f_n \\rightrightarrows 0`}</MathInline> uniformly on <MathInline>{`\\mathbb{R}`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Non-Uniform Convergence">
        <p>
          Let <MathInline>{`f_n(x) = x^n`}</MathInline> on <MathInline>{`[0, 1]`}</MathInline>.
        </p>
        <p>The pointwise limit is:</p>
        <MathBlock>{`f(x) = \\begin{cases} 0 & \\text{if } 0 \\leq x < 1 \\ 1 & \\text{if } x = 1 \\end{cases}`}</MathBlock>
        <p>For <MathInline>{`0 \\leq x < 1`}</MathInline>:</p>
        <MathBlock>{`|f_n(x) - f(x)| = |x^n - 0| = x^n`}</MathBlock>
        <p>The supremum over <MathInline>{`[0, 1)`}</MathInline> is:</p>
        <MathBlock>{`\\sup_{0 \\leq x < 1} x^n = \\lim_{x \\to 1^-} x^n = 1 \\neq 0`}</MathBlock>
        <p>
          So <MathInline>{`\\|f_n - f\\|_\\infty = 1`}</MathInline> for all <MathInline>{`n`}</MathInline>,
          and convergence is not uniform on <MathInline>{`[0, 1]`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Uniform on Subintervals">
        <p>
          The same <MathInline>{`f_n(x) = x^n`}</MathInline> converges uniformly on <MathInline>{`[0, a]`}</MathInline> for
          any <MathInline>{`0 < a < 1`}</MathInline>.
        </p>
        <p>On <MathInline>{`[0, a]`}</MathInline>:</p>
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
          If <MathInline>{`\\{f_n\\}`}</MathInline> is a sequence of continuous functions on <MathInline>{`S`}</MathInline> and
          <MathInline>{`f_n \\rightrightarrows f`}</MathInline> on <MathInline>{`S`}</MathInline>, then <MathInline>{`f`}</MathInline> is
          continuous on <MathInline>{`S`}</MathInline>.
        </p>
      </Callout>

      <p><strong>Proof:</strong></p>
      <p>
        Fix <MathInline>{`x_0 \\in S`}</MathInline> and <MathInline>{`\\varepsilon > 0`}</MathInline>. We need to
        show <MathInline>{`|f(x) - f(x_0)| < \\varepsilon`}</MathInline> for <MathInline>{`x`}</MathInline> sufficiently
        close to <MathInline>{`x_0`}</MathInline>.
      </p>
      <p>By uniform convergence, choose <MathInline>{`N`}</MathInline> such that <MathInline>{`|f_n(x) - f(x)| < \\varepsilon/3`}</MathInline> for all <MathInline>{`x`}</MathInline> and all <MathInline>{`n \\geq N`}</MathInline>.</p>
      <p>Since <MathInline>{`f_N`}</MathInline> is continuous at <MathInline>{`x_0`}</MathInline>, there exists <MathInline>{`\\delta > 0`}</MathInline> such that:</p>
      <MathBlock>{`|x - x_0| < \\delta \\implies |f_N(x) - f_N(x_0)| < \\varepsilon/3`}</MathBlock>
      <p>Then for <MathInline>{`|x - x_0| < \\delta`}</MathInline>:</p>
      <MathBlock>{`|f(x) - f(x_0)| \\leq |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)|`}</MathBlock>
      <MathBlock>{`< \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} = \\varepsilon`}</MathBlock>
      <p>Thus <MathInline>{`f`}</MathInline> is continuous at <MathInline>{`x_0`}</MathInline>. <span className="float-right">□</span></p>

      <h2>Uniform Convergence and Integration</h2>

      <p>
        Uniform convergence allows us to interchange limits and integrals.
      </p>

      <Callout type="theorem" title="Integration of Uniform Limits">
        <p>
          If <MathInline>{`f_n \\rightrightarrows f`}</MathInline> on <MathInline>{`[a, b]`}</MathInline> and
          each <MathInline>{`f_n`}</MathInline> is integrable on <MathInline>{`[a, b]`}</MathInline>, then <MathInline>{`f`}</MathInline> is
          integrable and:
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\int_a^b f_n(x)\\,dx = \\int_a^b f(x)\\,dx`}</MathBlock>
        <p>That is, <MathInline>{`\\lim_{n \\to \\infty} \\int_a^b f_n = \\int_a^b \\lim_{n \\to \\infty} f_n`}</MathInline>.</p>
      </Callout>

      <p><strong>Proof sketch:</strong></p>
      <MathBlock>{`\\left|\\int_a^b f_n(x)\\,dx - \\int_a^b f(x)\\,dx\\right| \\leq \\int_a^b |f_n(x) - f(x)|\\,dx \\leq (b-a) \\|f_n - f\\|_\\infty \\to 0`}</MathBlock>

      <Callout type="example" title="Applying the Integration Theorem">
        <p>
          Since <MathInline>{`f_n(x) = x^n`}</MathInline> converges uniformly to 0 on <MathInline>{`[0, 1/2]`}</MathInline>:
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\int_0^{1/2} x^n\\,dx = \\int_0^{1/2} 0\\,dx = 0`}</MathBlock>
        <p>We can verify: <MathInline>{`\\int_0^{1/2} x^n\\,dx = \\frac{(1/2)^{n+1}}{n+1} \\to 0`}</MathInline>.</p>
      </Callout>

      <h2>Uniform Convergence and Differentiation</h2>

      <p>
        For differentiation, uniform convergence of <MathInline>{`f_n`}</MathInline> alone is not sufficient—we
        need uniform convergence of the derivatives.
      </p>

      <Callout type="theorem" title="Differentiation of Uniform Limits">
        <p>
          Suppose <MathInline>{`\\{f_n\\}`}</MathInline> is a sequence of differentiable functions on <MathInline>{`[a, b]`}</MathInline> such that:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`\\{f_n(x_0)\\}`}</MathInline> converges for some <MathInline>{`x_0 \\in [a, b]`}</MathInline></li>
          <li><MathInline>{`\\{f_n'\\}`}</MathInline> converges uniformly on <MathInline>{`[a, b]`}</MathInline></li>
        </ol>
        <p>
          Then <MathInline>{`\\{f_n\\}`}</MathInline> converges uniformly to a differentiable function <MathInline>{`f`}</MathInline>, and:
        </p>
        <MathBlock>{`f'(x) = \\lim_{n \\to \\infty} f_n'(x)`}</MathBlock>
      </Callout>

      <Callout type="example" title="When Derivatives Don't Converge Uniformly">
        <p>
          Recall <MathInline>{`f_n(x) = \\frac{\\sin(nx)}{n}`}</MathInline> converges uniformly to 0.
          But <MathInline>{`f_n'(x) = \\cos(nx)`}</MathInline> does not converge at all (let alone uniformly).
        </p>
        <p>
          This explains why <MathInline>{`(\\lim f_n)' = 0' = 0`}</MathInline> differs
          from <MathInline>{`\\lim f_n' = \\lim \\cos(nx)`}</MathInline>, which doesn't exist.
        </p>
      </Callout>

      <h2>The Weierstrass M-Test</h2>

      <p>
        For series of functions, the Weierstrass M-test provides a powerful criterion for uniform convergence.
      </p>

      <Callout type="theorem" title="Weierstrass M-Test">
        <p>
          Let <MathInline>{`\\{u_n\\}`}</MathInline> be a sequence of functions on <MathInline>{`S`}</MathInline>.
          If there exist constants <MathInline>{`M_n \\geq 0`}</MathInline> such that:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`|u_n(x)| \\leq M_n`}</MathInline> for all <MathInline>{`x \\in S`}</MathInline></li>
          <li><MathInline>{`\\sum_{n=1}^\\infty M_n`}</MathInline> converges</li>
        </ol>
        <p>
          Then <MathInline>{`\\sum_{n=1}^\\infty u_n(x)`}</MathInline> converges uniformly (and absolutely) on <MathInline>{`S`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Applying the M-Test">
        <p>Show that <MathInline>{`\\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}`}</MathInline> converges uniformly on <MathInline>{`\\mathbb{R}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\left|\\frac{\\cos(nx)}{n^2}\\right| \\leq \\frac{1}{n^2} = M_n`}</MathBlock>
        <p>
          Since <MathInline>{`\\sum \\frac{1}{n^2}`}</MathInline> converges (p-series with p = 2 &gt; 1),
          the Weierstrass M-test guarantees uniform convergence.
        </p>
      </Callout>

      <Callout type="example" title="Geometric Series">
        <p>
          The geometric series <MathInline>{`\\sum_{n=0}^\\infty x^n`}</MathInline> converges uniformly
          on <MathInline>{`[-r, r]`}</MathInline> for any <MathInline>{`0 < r < 1`}</MathInline>.
        </p>
        <p><strong>Proof:</strong> For <MathInline>{`|x| \\leq r`}</MathInline>:</p>
        <MathBlock>{`|x^n| \\leq r^n = M_n`}</MathBlock>
        <p>
          Since <MathInline>{`\\sum r^n = \\frac{1}{1-r}`}</MathInline> converges, the M-test applies.
        </p>
        <p>
          Note: Convergence is <em>not</em> uniform on <MathInline>{`(-1, 1)`}</MathInline> since
          near <MathInline>{`x = \\pm 1`}</MathInline>, the series converges arbitrarily slowly.
        </p>
      </Callout>

      <h2>Applications</h2>

      <Callout type="example" title="Term-by-Term Integration">
        <p>
          Since <MathInline>{`\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}`}</MathInline> converges uniformly
          on <MathInline>{`[-r, r]`}</MathInline> for <MathInline>{`r < 1`}</MathInline>, we can integrate term by term:
        </p>
        <MathBlock>{`\\int_0^x \\frac{1}{1-t}\\,dt = \\sum_{n=0}^\\infty \\int_0^x t^n\\,dt = \\sum_{n=0}^\\infty \\frac{x^{n+1}}{n+1}`}</MathBlock>
        <p>This gives:</p>
        <MathBlock>{`-\\ln(1-x) = \\sum_{n=1}^\\infty \\frac{x^n}{n} = x + \\frac{x^2}{2} + \\frac{x^3}{3} + \\cdots`}</MathBlock>
        <p>for <MathInline>{`|x| < 1`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Term-by-Term Differentiation">
        <p>
          If the derivatives <MathInline>{`\\sum_{n=1}^\\infty u_n'(x)`}</MathInline> converge uniformly
          and <MathInline>{`\\sum u_n(x_0)`}</MathInline> converges at some point, then:
        </p>
        <MathBlock>{`\\frac{d}{dx}\\left(\\sum_{n=1}^\\infty u_n(x)\\right) = \\sum_{n=1}^\\infty u_n'(x)`}</MathBlock>
        <p>
          For example, differentiating <MathInline>{`\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}`}</MathInline>:
        </p>
        <MathBlock>{`\\sum_{n=1}^\\infty nx^{n-1} = \\frac{1}{(1-x)^2}`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results">
        <p><strong>Uniform convergence</strong> (<MathInline>{`f_n \\rightrightarrows f`}</MathInline>): One <MathInline>{`N`}</MathInline> works for all <MathInline>{`x`}</MathInline>.</p>
        <p><strong>Sup-norm criterion:</strong> <MathInline>{`f_n \\rightrightarrows f`}</MathInline> iff <MathInline>{`\\|f_n - f\\|_\\infty \\to 0`}</MathInline>.</p>
        <p><strong>Preserves continuity:</strong> Uniform limit of continuous functions is continuous.</p>
        <p><strong>Allows integration:</strong> <MathInline>{`\\int \\lim f_n = \\lim \\int f_n`}</MathInline> under uniform convergence.</p>
        <p><strong>Allows differentiation:</strong> If <MathInline>{`f_n' \\rightrightarrows g`}</MathInline> uniformly, then <MathInline>{`(\\lim f_n)' = g`}</MathInline>.</p>
        <p><strong>Weierstrass M-test:</strong> If <MathInline>{`|u_n(x)| \\leq M_n`}</MathInline> and <MathInline>{`\\sum M_n < \\infty`}</MathInline>, then <MathInline>{`\\sum u_n`}</MathInline> converges uniformly.</p>
      </Callout>
    </LessonLayout>
  );
}
