import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <h1>Improper Integrals</h1>

      <p>
        Up to now, we have defined the definite integral <MathInline>{`\\int_a^b f(x)\\,dx`}</MathInline> only
        when <MathInline>{`[a, b]`}</MathInline> is a finite interval and <MathInline>{`f`}</MathInline> is bounded
        on that interval. However, many important applications require us to integrate over infinite
        intervals or to integrate functions with discontinuities. Such integrals are called{' '}
        <strong>improper integrals</strong>.
      </p>

      <h2>Type I: Infinite Limits of Integration</h2>

      <p>
        The first type of improper integral involves integration over an unbounded interval. We define
        these integrals as limits of ordinary definite integrals.
      </p>

      <Callout type="definition" title="Improper Integrals of Type I">
        <p>Let <MathInline>{`f`}</MathInline> be continuous on <MathInline>{`[a, \\infty)`}</MathInline>. We define:</p>
        <MathBlock>{`\\int_a^\\infty f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx`}</MathBlock>
        <p>
          If this limit exists and is finite, we say the integral <strong>converges</strong>. Otherwise,
          we say it <strong>diverges</strong>.
        </p>
        <p>Similarly, for <MathInline>{`f`}</MathInline> continuous on <MathInline>{`(-\\infty, b]`}</MathInline>:</p>
        <MathBlock>{`\\int_{-\\infty}^b f(x)\\,dx = \\lim_{t \\to -\\infty} \\int_t^b f(x)\\,dx`}</MathBlock>
        <p>For <MathInline>{`f`}</MathInline> continuous on <MathInline>{`(-\\infty, \\infty)`}</MathInline>:</p>
        <MathBlock>{`\\int_{-\\infty}^\\infty f(x)\\,dx = \\int_{-\\infty}^c f(x)\\,dx + \\int_c^\\infty f(x)\\,dx`}</MathBlock>
        <p>where <MathInline>{`c`}</MathInline> is any real number, provided both integrals on the right converge.</p>
      </Callout>

      <Callout type="example" title="The Exponential Integral">
        <p>Evaluate <MathInline>{`\\int_0^\\infty e^{-x}\\,dx`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^\\infty e^{-x}\\,dx = \\lim_{t \\to \\infty} \\int_0^t e^{-x}\\,dx = \\lim_{t \\to \\infty} \\left[-e^{-x}\\right]_0^t`}</MathBlock>
        <MathBlock>{`= \\lim_{t \\to \\infty} \\left(-e^{-t} + e^0\\right) = \\lim_{t \\to \\infty} \\left(1 - e^{-t}\\right) = 1 - 0 = 1`}</MathBlock>
        <p>The integral converges to 1.</p>
      </Callout>

      <h2>The p-Integral</h2>

      <p>
        One of the most important improper integrals is the <MathInline>{`p`}</MathInline>-integral, which
        provides a benchmark for comparison tests.
      </p>

      <Callout type="theorem" title="The p-Integral Test">
        <p>The improper integral</p>
        <MathBlock>{`\\int_1^\\infty \\frac{1}{x^p}\\,dx`}</MathBlock>
        <p>converges if <MathInline>{`p > 1`}</MathInline> and diverges if <MathInline>{`p \\leq 1`}</MathInline>.</p>
      </Callout>

      <p><strong>Proof:</strong></p>
      <p>For <MathInline>{`p \\neq 1`}</MathInline>:</p>
      <MathBlock>{`\\int_1^t \\frac{1}{x^p}\\,dx = \\left[\\frac{x^{1-p}}{1-p}\\right]_1^t = \\frac{t^{1-p} - 1}{1-p}`}</MathBlock>

      <p>
        If <MathInline>{`p > 1`}</MathInline>, then <MathInline>{`1 - p < 0`}</MathInline>,
        so <MathInline>{`t^{1-p} \\to 0`}</MathInline> as <MathInline>{`t \\to \\infty`}</MathInline>:
      </p>
      <MathBlock>{`\\int_1^\\infty \\frac{1}{x^p}\\,dx = \\frac{0 - 1}{1-p} = \\frac{1}{p-1}`}</MathBlock>

      <p>
        If <MathInline>{`p < 1`}</MathInline>, then <MathInline>{`1 - p > 0`}</MathInline>,
        so <MathInline>{`t^{1-p} \\to \\infty`}</MathInline> as <MathInline>{`t \\to \\infty`}</MathInline>, and the integral diverges.
      </p>

      <p>For <MathInline>{`p = 1`}</MathInline>:</p>
      <MathBlock>{`\\int_1^t \\frac{1}{x}\\,dx = \\ln t \\to \\infty \\text{ as } t \\to \\infty`}</MathBlock>
      <p>So the integral diverges when <MathInline>{`p = 1`}</MathInline>. <span className="float-right">□</span></p>

      <Callout type="example" title="Applying the p-Integral">
        <p>Determine convergence:</p>
        <p>(a) <MathInline>{`\\int_1^\\infty \\frac{1}{x^2}\\,dx`}</MathInline> converges since <MathInline>{`p = 2 > 1`}</MathInline>. Its value is <MathInline>{`\\frac{1}{2-1} = 1`}</MathInline>.</p>
        <p>(b) <MathInline>{`\\int_1^\\infty \\frac{1}{\\sqrt{x}}\\,dx`}</MathInline> diverges since <MathInline>{`p = \\frac{1}{2} < 1`}</MathInline>.</p>
        <p>(c) <MathInline>{`\\int_1^\\infty \\frac{1}{x}\\,dx`}</MathInline> diverges since <MathInline>{`p = 1`}</MathInline>.</p>
      </Callout>

      <h2>Type II: Discontinuous Integrands</h2>

      <p>
        The second type of improper integral deals with integrands that have discontinuities
        (typically vertical asymptotes) within or at the endpoints of the interval of integration.
      </p>

      <Callout type="definition" title="Improper Integrals of Type II">
        <p>If <MathInline>{`f`}</MathInline> is continuous on <MathInline>{`[a, b)`}</MathInline> but discontinuous at <MathInline>{`b`}</MathInline>:</p>
        <MathBlock>{`\\int_a^b f(x)\\,dx = \\lim_{t \\to b^-} \\int_a^t f(x)\\,dx`}</MathBlock>
        <p>If <MathInline>{`f`}</MathInline> is continuous on <MathInline>{`(a, b]`}</MathInline> but discontinuous at <MathInline>{`a`}</MathInline>:</p>
        <MathBlock>{`\\int_a^b f(x)\\,dx = \\lim_{t \\to a^+} \\int_t^b f(x)\\,dx`}</MathBlock>
        <p>
          If <MathInline>{`f`}</MathInline> has a discontinuity at an interior point <MathInline>{`c \\in (a, b)`}</MathInline>,
          then we split the integral:
        </p>
        <MathBlock>{`\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx`}</MathBlock>
        <p>provided both improper integrals on the right converge.</p>
      </Callout>

      <Callout type="example" title="Discontinuity at an Endpoint">
        <p>Evaluate <MathInline>{`\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx`}</MathInline>.</p>
        <p><strong>Solution:</strong> The integrand is discontinuous at <MathInline>{`x = 0`}</MathInline>.</p>
        <MathBlock>{`\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx = \\lim_{t \\to 0^+} \\int_t^1 x^{-1/2}\\,dx = \\lim_{t \\to 0^+} \\left[2\\sqrt{x}\\right]_t^1`}</MathBlock>
        <MathBlock>{`= \\lim_{t \\to 0^+} \\left(2 - 2\\sqrt{t}\\right) = 2 - 0 = 2`}</MathBlock>
        <p>The integral converges to 2.</p>
      </Callout>

      <Callout type="example" title="A Divergent Type II Integral">
        <p>Evaluate <MathInline>{`\\int_0^1 \\frac{1}{x}\\,dx`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^1 \\frac{1}{x}\\,dx = \\lim_{t \\to 0^+} \\int_t^1 \\frac{1}{x}\\,dx = \\lim_{t \\to 0^+} \\left[\\ln x\\right]_t^1`}</MathBlock>
        <MathBlock>{`= \\lim_{t \\to 0^+} \\left(\\ln 1 - \\ln t\\right) = \\lim_{t \\to 0^+} (-\\ln t) = +\\infty`}</MathBlock>
        <p>The integral diverges.</p>
      </Callout>

      <h2>The p-Integral Near Zero</h2>

      <p>
        Just as we analyzed <MathInline>{`\\int_1^\\infty x^{-p}\\,dx`}</MathInline>, we can analyze
        the behavior near <MathInline>{`x = 0`}</MathInline>:
      </p>

      <Callout type="theorem" title="The p-Integral Near Zero">
        <p>The improper integral</p>
        <MathBlock>{`\\int_0^1 \\frac{1}{x^p}\\,dx`}</MathBlock>
        <p>converges if <MathInline>{`p < 1`}</MathInline> and diverges if <MathInline>{`p \\geq 1`}</MathInline>.</p>
      </Callout>

      <p>
        Note the contrast: for integrals to infinity, convergence requires <MathInline>{`p > 1`}</MathInline>,
        while for integrals near zero, convergence requires <MathInline>{`p < 1`}</MathInline>. This is because
        near zero, larger powers of <MathInline>{`x`}</MathInline> in the denominator create stronger singularities.
      </p>

      <h2>Comparison Tests</h2>

      <p>
        When we cannot evaluate an improper integral directly, we can often determine convergence
        by comparing it to a simpler integral whose behavior we know.
      </p>

      <Callout type="theorem" title="Direct Comparison Test">
        <p>
          Suppose <MathInline>{`0 \\leq f(x) \\leq g(x)`}</MathInline> for all <MathInline>{`x \\geq a`}</MathInline>.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>If <MathInline>{`\\int_a^\\infty g(x)\\,dx`}</MathInline> converges, then <MathInline>{`\\int_a^\\infty f(x)\\,dx`}</MathInline> converges.</li>
          <li>If <MathInline>{`\\int_a^\\infty f(x)\\,dx`}</MathInline> diverges, then <MathInline>{`\\int_a^\\infty g(x)\\,dx`}</MathInline> diverges.</li>
        </ol>
      </Callout>

      <p>
        The intuition is clear: if a larger function has a finite integral, so does a smaller one;
        if a smaller function has an infinite integral, so does a larger one.
      </p>

      <Callout type="example" title="Using Direct Comparison">
        <p>Show that <MathInline>{`\\int_1^\\infty \\frac{1}{x^2 + 1}\\,dx`}</MathInline> converges.</p>
        <p><strong>Solution:</strong> For <MathInline>{`x \\geq 1`}</MathInline>:</p>
        <MathBlock>{`0 < \\frac{1}{x^2 + 1} < \\frac{1}{x^2}`}</MathBlock>
        <p>
          Since <MathInline>{`\\int_1^\\infty \\frac{1}{x^2}\\,dx`}</MathInline> converges (p-integral
          with <MathInline>{`p = 2 > 1`}</MathInline>), the given integral also converges by the comparison test.
        </p>
      </Callout>

      <Callout type="theorem" title="Limit Comparison Test">
        <p>
          Suppose <MathInline>{`f(x) > 0`}</MathInline> and <MathInline>{`g(x) > 0`}</MathInline> for <MathInline>{`x \\geq a`}</MathInline>,
          and suppose:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = L`}</MathBlock>
        <p>where <MathInline>{`0 < L < \\infty`}</MathInline>. Then:</p>
        <MathBlock>{`\\int_a^\\infty f(x)\\,dx \\text{ and } \\int_a^\\infty g(x)\\,dx \\text{ both converge or both diverge.}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Using Limit Comparison">
        <p>Determine whether <MathInline>{`\\int_1^\\infty \\frac{x}{x^3 + 5}\\,dx`}</MathInline> converges.</p>
        <p><strong>Solution:</strong> For large <MathInline>{`x`}</MathInline>, <MathInline>{`\\frac{x}{x^3 + 5} \\approx \\frac{x}{x^3} = \\frac{1}{x^2}`}</MathInline>.</p>
        <p>Let <MathInline>{`f(x) = \\frac{x}{x^3 + 5}`}</MathInline> and <MathInline>{`g(x) = \\frac{1}{x^2}`}</MathInline>:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = \\lim_{x \\to \\infty} \\frac{x}{x^3 + 5} \\cdot x^2 = \\lim_{x \\to \\infty} \\frac{x^3}{x^3 + 5} = 1`}</MathBlock>
        <p>
          Since <MathInline>{`L = 1`}</MathInline> (finite and positive) and <MathInline>{`\\int_1^\\infty \\frac{1}{x^2}\\,dx`}</MathInline> converges,
          the given integral also converges.
        </p>
      </Callout>

      <h2>Important Examples</h2>

      <Callout type="example" title="The Gaussian Integral">
        <p>The integral <MathInline>{`\\int_{-\\infty}^\\infty e^{-x^2}\\,dx`}</MathInline> is fundamental in probability and statistics.</p>
        <p>
          While we cannot find an antiderivative in elementary terms, we can show convergence
          using comparison: for <MathInline>{`|x| \\geq 1`}</MathInline>,
          we have <MathInline>{`x^2 \\geq |x|`}</MathInline>, so:
        </p>
        <MathBlock>{`e^{-x^2} \\leq e^{-|x|}`}</MathBlock>
        <p>
          Since <MathInline>{`\\int_1^\\infty e^{-x}\\,dx = e^{-1}`}</MathInline> converges, so
          does <MathInline>{`\\int_1^\\infty e^{-x^2}\\,dx`}</MathInline>.
        </p>
        <p>
          It can be shown (using techniques from multivariable calculus) that:
        </p>
        <MathBlock>{`\\int_{-\\infty}^\\infty e^{-x^2}\\,dx = \\sqrt{\\pi}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Mixed Type">
        <p>Evaluate <MathInline>{`\\int_0^\\infty \\frac{1}{\\sqrt{x}(1+x)}\\,dx`}</MathInline>.</p>
        <p><strong>Solution:</strong> This integral has both types of impropriety:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Type II at <MathInline>{`x = 0`}</MathInline> (discontinuity)</li>
          <li>Type I as <MathInline>{`x \\to \\infty`}</MathInline></li>
        </ul>
        <p>Split at <MathInline>{`x = 1`}</MathInline>:</p>
        <MathBlock>{`\\int_0^\\infty \\frac{1}{\\sqrt{x}(1+x)}\\,dx = \\int_0^1 \\frac{1}{\\sqrt{x}(1+x)}\\,dx + \\int_1^\\infty \\frac{1}{\\sqrt{x}(1+x)}\\,dx`}</MathBlock>
        <p>
          Near 0: <MathInline>{`\\frac{1}{\\sqrt{x}(1+x)} \\approx \\frac{1}{\\sqrt{x}}`}</MathInline> which
          converges (p = 1/2 &lt; 1 near 0).
        </p>
        <p>
          Near <MathInline>{`\\infty`}</MathInline>: <MathInline>{`\\frac{1}{\\sqrt{x}(1+x)} \\approx \\frac{1}{x^{3/2}}`}</MathInline> which
          converges (p = 3/2 &gt; 1 at infinity).
        </p>
        <p>Using the substitution <MathInline>{`u = \\sqrt{x}`}</MathInline>, the integral evaluates to <MathInline>{`\\pi`}</MathInline>.</p>
      </Callout>

      <h2>Absolute Convergence</h2>

      <p>
        For integrals of functions that change sign, we have a concept analogous to absolute
        convergence of series.
      </p>

      <Callout type="definition" title="Absolute Convergence of Integrals">
        <p>
          We say <MathInline>{`\\int_a^\\infty f(x)\\,dx`}</MathInline> <strong>converges absolutely</strong> if
          <MathInline>{`\\int_a^\\infty |f(x)|\\,dx`}</MathInline> converges.
        </p>
      </Callout>

      <Callout type="theorem" title="Absolute Convergence Implies Convergence">
        <p>
          If <MathInline>{`\\int_a^\\infty f(x)\\,dx`}</MathInline> converges absolutely, then it converges.
        </p>
      </Callout>

      <p>
        The converse is false: an integral may converge conditionally (converge but not absolutely).
        For example, <MathInline>{`\\int_1^\\infty \\frac{\\sin x}{x}\\,dx`}</MathInline> converges conditionally.
      </p>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results for Improper Integrals">
        <p><strong>Type I</strong> (infinite limits): Define as <MathInline>{`\\lim_{t \\to \\infty}`}</MathInline> of ordinary integrals.</p>
        <p><strong>Type II</strong> (discontinuities): Define as one-sided limits avoiding the discontinuity.</p>
        <p><strong>p-integrals:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\int_1^\\infty x^{-p}\\,dx`}</MathInline> converges iff <MathInline>{`p > 1`}</MathInline></li>
          <li><MathInline>{`\\int_0^1 x^{-p}\\,dx`}</MathInline> converges iff <MathInline>{`p < 1`}</MathInline></li>
        </ul>
        <p><strong>Comparison:</strong> Use direct or limit comparison with p-integrals or known convergent/divergent integrals.</p>
      </Callout>
    </LessonLayout>
  );
}
