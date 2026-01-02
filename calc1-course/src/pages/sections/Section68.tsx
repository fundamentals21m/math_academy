import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section68() {
  return (
    <LessonLayout sectionId={68}>
      <h1>Improper Integrals</h1>

      <p>
        Up to now, we have defined the definite integral <InlineMath>{`\\int_a^b f(x)\\,dx`}</InlineMath> only
        when <InlineMath>{`[a, b]`}</InlineMath> is a finite interval and <InlineMath>{`f`}</InlineMath> is bounded
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
        <p>Let <InlineMath>{`f`}</InlineMath> be continuous on <InlineMath>{`[a, \\infty)`}</InlineMath>. We define:</p>
        <MathBlock>{`\\int_a^\\infty f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx`}</MathBlock>
        <p>
          If this limit exists and is finite, we say the integral <strong>converges</strong>. Otherwise,
          we say it <strong>diverges</strong>.
        </p>
        <p>Similarly, for <InlineMath>{`f`}</InlineMath> continuous on <InlineMath>{`(-\\infty, b]`}</InlineMath>:</p>
        <MathBlock>{`\\int_{-\\infty}^b f(x)\\,dx = \\lim_{t \\to -\\infty} \\int_t^b f(x)\\,dx`}</MathBlock>
        <p>For <InlineMath>{`f`}</InlineMath> continuous on <InlineMath>{`(-\\infty, \\infty)`}</InlineMath>:</p>
        <MathBlock>{`\\int_{-\\infty}^\\infty f(x)\\,dx = \\int_{-\\infty}^c f(x)\\,dx + \\int_c^\\infty f(x)\\,dx`}</MathBlock>
        <p>where <InlineMath>{`c`}</InlineMath> is any real number, provided both integrals on the right converge.</p>
      </Callout>

      <Callout type="example" title="The Exponential Integral">
        <p>Evaluate <InlineMath>{`\\int_0^\\infty e^{-x}\\,dx`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^\\infty e^{-x}\\,dx = \\lim_{t \\to \\infty} \\int_0^t e^{-x}\\,dx = \\lim_{t \\to \\infty} \\left[-e^{-x}\\right]_0^t`}</MathBlock>
        <MathBlock>{`= \\lim_{t \\to \\infty} \\left(-e^{-t} + e^0\\right) = \\lim_{t \\to \\infty} \\left(1 - e^{-t}\\right) = 1 - 0 = 1`}</MathBlock>
        <p>The integral converges to 1.</p>
      </Callout>

      <h2>The p-Integral</h2>

      <p>
        One of the most important improper integrals is the <InlineMath>{`p`}</InlineMath>-integral, which
        provides a benchmark for comparison tests.
      </p>

      <Callout type="theorem" title="The p-Integral Test">
        <p>The improper integral</p>
        <MathBlock>{`\\int_1^\\infty \\frac{1}{x^p}\\,dx`}</MathBlock>
        <p>converges if <InlineMath>{`p > 1`}</InlineMath> and diverges if <InlineMath>{`p \\leq 1`}</InlineMath>.</p>
      </Callout>

      <p><strong>Proof:</strong></p>
      <p>For <InlineMath>{`p \\neq 1`}</InlineMath>:</p>
      <MathBlock>{`\\int_1^t \\frac{1}{x^p}\\,dx = \\left[\\frac{x^{1-p}}{1-p}\\right]_1^t = \\frac{t^{1-p} - 1}{1-p}`}</MathBlock>

      <p>
        If <InlineMath>{`p > 1`}</InlineMath>, then <InlineMath>{`1 - p < 0`}</InlineMath>,
        so <InlineMath>{`t^{1-p} \\to 0`}</InlineMath> as <InlineMath>{`t \\to \\infty`}</InlineMath>:
      </p>
      <MathBlock>{`\\int_1^\\infty \\frac{1}{x^p}\\,dx = \\frac{0 - 1}{1-p} = \\frac{1}{p-1}`}</MathBlock>

      <p>
        If <InlineMath>{`p < 1`}</InlineMath>, then <InlineMath>{`1 - p > 0`}</InlineMath>,
        so <InlineMath>{`t^{1-p} \\to \\infty`}</InlineMath> as <InlineMath>{`t \\to \\infty`}</InlineMath>, and the integral diverges.
      </p>

      <p>For <InlineMath>{`p = 1`}</InlineMath>:</p>
      <MathBlock>{`\\int_1^t \\frac{1}{x}\\,dx = \\ln t \\to \\infty \\text{ as } t \\to \\infty`}</MathBlock>
      <p>So the integral diverges when <InlineMath>{`p = 1`}</InlineMath>. <span className="float-right">□</span></p>

      <Callout type="example" title="Applying the p-Integral">
        <p>Determine convergence:</p>
        <p>(a) <InlineMath>{`\\int_1^\\infty \\frac{1}{x^2}\\,dx`}</InlineMath> converges since <InlineMath>{`p = 2 > 1`}</InlineMath>. Its value is <InlineMath>{`\\frac{1}{2-1} = 1`}</InlineMath>.</p>
        <p>(b) <InlineMath>{`\\int_1^\\infty \\frac{1}{\\sqrt{x}}\\,dx`}</InlineMath> diverges since <InlineMath>{`p = \\frac{1}{2} < 1`}</InlineMath>.</p>
        <p>(c) <InlineMath>{`\\int_1^\\infty \\frac{1}{x}\\,dx`}</InlineMath> diverges since <InlineMath>{`p = 1`}</InlineMath>.</p>
      </Callout>

      <h2>Type II: Discontinuous Integrands</h2>

      <p>
        The second type of improper integral deals with integrands that have discontinuities
        (typically vertical asymptotes) within or at the endpoints of the interval of integration.
      </p>

      <Callout type="definition" title="Improper Integrals of Type II">
        <p>If <InlineMath>{`f`}</InlineMath> is continuous on <InlineMath>{`[a, b)`}</InlineMath> but discontinuous at <InlineMath>{`b`}</InlineMath>:</p>
        <MathBlock>{`\\int_a^b f(x)\\,dx = \\lim_{t \\to b^-} \\int_a^t f(x)\\,dx`}</MathBlock>
        <p>If <InlineMath>{`f`}</InlineMath> is continuous on <InlineMath>{`(a, b]`}</InlineMath> but discontinuous at <InlineMath>{`a`}</InlineMath>:</p>
        <MathBlock>{`\\int_a^b f(x)\\,dx = \\lim_{t \\to a^+} \\int_t^b f(x)\\,dx`}</MathBlock>
        <p>
          If <InlineMath>{`f`}</InlineMath> has a discontinuity at an interior point <InlineMath>{`c \\in (a, b)`}</InlineMath>,
          then we split the integral:
        </p>
        <MathBlock>{`\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx`}</MathBlock>
        <p>provided both improper integrals on the right converge.</p>
      </Callout>

      <Callout type="example" title="Discontinuity at an Endpoint">
        <p>Evaluate <InlineMath>{`\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx`}</InlineMath>.</p>
        <p><strong>Solution:</strong> The integrand is discontinuous at <InlineMath>{`x = 0`}</InlineMath>.</p>
        <MathBlock>{`\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx = \\lim_{t \\to 0^+} \\int_t^1 x^{-1/2}\\,dx = \\lim_{t \\to 0^+} \\left[2\\sqrt{x}\\right]_t^1`}</MathBlock>
        <MathBlock>{`= \\lim_{t \\to 0^+} \\left(2 - 2\\sqrt{t}\\right) = 2 - 0 = 2`}</MathBlock>
        <p>The integral converges to 2.</p>
      </Callout>

      <Callout type="example" title="A Divergent Type II Integral">
        <p>Evaluate <InlineMath>{`\\int_0^1 \\frac{1}{x}\\,dx`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^1 \\frac{1}{x}\\,dx = \\lim_{t \\to 0^+} \\int_t^1 \\frac{1}{x}\\,dx = \\lim_{t \\to 0^+} \\left[\\ln x\\right]_t^1`}</MathBlock>
        <MathBlock>{`= \\lim_{t \\to 0^+} \\left(\\ln 1 - \\ln t\\right) = \\lim_{t \\to 0^+} (-\\ln t) = +\\infty`}</MathBlock>
        <p>The integral diverges.</p>
      </Callout>

      <h2>The p-Integral Near Zero</h2>

      <p>
        Just as we analyzed <InlineMath>{`\\int_1^\\infty x^{-p}\\,dx`}</InlineMath>, we can analyze
        the behavior near <InlineMath>{`x = 0`}</InlineMath>:
      </p>

      <Callout type="theorem" title="The p-Integral Near Zero">
        <p>The improper integral</p>
        <MathBlock>{`\\int_0^1 \\frac{1}{x^p}\\,dx`}</MathBlock>
        <p>converges if <InlineMath>{`p < 1`}</InlineMath> and diverges if <InlineMath>{`p \\geq 1`}</InlineMath>.</p>
      </Callout>

      <p>
        Note the contrast: for integrals to infinity, convergence requires <InlineMath>{`p > 1`}</InlineMath>,
        while for integrals near zero, convergence requires <InlineMath>{`p < 1`}</InlineMath>. This is because
        near zero, larger powers of <InlineMath>{`x`}</InlineMath> in the denominator create stronger singularities.
      </p>

      <h2>Comparison Tests</h2>

      <p>
        When we cannot evaluate an improper integral directly, we can often determine convergence
        by comparing it to a simpler integral whose behavior we know.
      </p>

      <Callout type="theorem" title="Direct Comparison Test">
        <p>
          Suppose <InlineMath>{`0 \\leq f(x) \\leq g(x)`}</InlineMath> for all <InlineMath>{`x \\geq a`}</InlineMath>.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>If <InlineMath>{`\\int_a^\\infty g(x)\\,dx`}</InlineMath> converges, then <InlineMath>{`\\int_a^\\infty f(x)\\,dx`}</InlineMath> converges.</li>
          <li>If <InlineMath>{`\\int_a^\\infty f(x)\\,dx`}</InlineMath> diverges, then <InlineMath>{`\\int_a^\\infty g(x)\\,dx`}</InlineMath> diverges.</li>
        </ol>
      </Callout>

      <p>
        The intuition is clear: if a larger function has a finite integral, so does a smaller one;
        if a smaller function has an infinite integral, so does a larger one.
      </p>

      <Callout type="example" title="Using Direct Comparison">
        <p>Show that <InlineMath>{`\\int_1^\\infty \\frac{1}{x^2 + 1}\\,dx`}</InlineMath> converges.</p>
        <p><strong>Solution:</strong> For <InlineMath>{`x \\geq 1`}</InlineMath>:</p>
        <MathBlock>{`0 < \\frac{1}{x^2 + 1} < \\frac{1}{x^2}`}</MathBlock>
        <p>
          Since <InlineMath>{`\\int_1^\\infty \\frac{1}{x^2}\\,dx`}</InlineMath> converges (p-integral
          with <InlineMath>{`p = 2 > 1`}</InlineMath>), the given integral also converges by the comparison test.
        </p>
      </Callout>

      <Callout type="theorem" title="Limit Comparison Test">
        <p>
          Suppose <InlineMath>{`f(x) > 0`}</InlineMath> and <InlineMath>{`g(x) > 0`}</InlineMath> for <InlineMath>{`x \\geq a`}</InlineMath>,
          and suppose:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = L`}</MathBlock>
        <p>where <InlineMath>{`0 < L < \\infty`}</InlineMath>. Then:</p>
        <MathBlock>{`\\int_a^\\infty f(x)\\,dx \\text{ and } \\int_a^\\infty g(x)\\,dx \\text{ both converge or both diverge.}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Using Limit Comparison">
        <p>Determine whether <InlineMath>{`\\int_1^\\infty \\frac{x}{x^3 + 5}\\,dx`}</InlineMath> converges.</p>
        <p><strong>Solution:</strong> For large <InlineMath>{`x`}</InlineMath>, <InlineMath>{`\\frac{x}{x^3 + 5} \\approx \\frac{x}{x^3} = \\frac{1}{x^2}`}</InlineMath>.</p>
        <p>Let <InlineMath>{`f(x) = \\frac{x}{x^3 + 5}`}</InlineMath> and <InlineMath>{`g(x) = \\frac{1}{x^2}`}</InlineMath>:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = \\lim_{x \\to \\infty} \\frac{x}{x^3 + 5} \\cdot x^2 = \\lim_{x \\to \\infty} \\frac{x^3}{x^3 + 5} = 1`}</MathBlock>
        <p>
          Since <InlineMath>{`L = 1`}</InlineMath> (finite and positive) and <InlineMath>{`\\int_1^\\infty \\frac{1}{x^2}\\,dx`}</InlineMath> converges,
          the given integral also converges.
        </p>
      </Callout>

      <h2>Important Examples</h2>

      <Callout type="example" title="The Gaussian Integral">
        <p>The integral <InlineMath>{`\\int_{-\\infty}^\\infty e^{-x^2}\\,dx`}</InlineMath> is fundamental in probability and statistics.</p>
        <p>
          While we cannot find an antiderivative in elementary terms, we can show convergence
          using comparison: for <InlineMath>{`|x| \\geq 1`}</InlineMath>,
          we have <InlineMath>{`x^2 \\geq |x|`}</InlineMath>, so:
        </p>
        <MathBlock>{`e^{-x^2} \\leq e^{-|x|}`}</MathBlock>
        <p>
          Since <InlineMath>{`\\int_1^\\infty e^{-x}\\,dx = e^{-1}`}</InlineMath> converges, so
          does <InlineMath>{`\\int_1^\\infty e^{-x^2}\\,dx`}</InlineMath>.
        </p>
        <p>
          It can be shown (using techniques from multivariable calculus) that:
        </p>
        <MathBlock>{`\\int_{-\\infty}^\\infty e^{-x^2}\\,dx = \\sqrt{\\pi}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Mixed Type">
        <p>Evaluate <InlineMath>{`\\int_0^\\infty \\frac{1}{\\sqrt{x}(1+x)}\\,dx`}</InlineMath>.</p>
        <p><strong>Solution:</strong> This integral has both types of impropriety:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Type II at <InlineMath>{`x = 0`}</InlineMath> (discontinuity)</li>
          <li>Type I as <InlineMath>{`x \\to \\infty`}</InlineMath></li>
        </ul>
        <p>Split at <InlineMath>{`x = 1`}</InlineMath>:</p>
        <MathBlock>{`\\int_0^\\infty \\frac{1}{\\sqrt{x}(1+x)}\\,dx = \\int_0^1 \\frac{1}{\\sqrt{x}(1+x)}\\,dx + \\int_1^\\infty \\frac{1}{\\sqrt{x}(1+x)}\\,dx`}</MathBlock>
        <p>
          Near 0: <InlineMath>{`\\frac{1}{\\sqrt{x}(1+x)} \\approx \\frac{1}{\\sqrt{x}}`}</InlineMath> which
          converges (p = 1/2 &lt; 1 near 0).
        </p>
        <p>
          Near <InlineMath>{`\\infty`}</InlineMath>: <InlineMath>{`\\frac{1}{\\sqrt{x}(1+x)} \\approx \\frac{1}{x^{3/2}}`}</InlineMath> which
          converges (p = 3/2 &gt; 1 at infinity).
        </p>
        <p>Using the substitution <InlineMath>{`u = \\sqrt{x}`}</InlineMath>, the integral evaluates to <InlineMath>{`\\pi`}</InlineMath>.</p>
      </Callout>

      <h2>Absolute Convergence</h2>

      <p>
        For integrals of functions that change sign, we have a concept analogous to absolute
        convergence of series.
      </p>

      <Callout type="definition" title="Absolute Convergence of Integrals">
        <p>
          We say <InlineMath>{`\\int_a^\\infty f(x)\\,dx`}</InlineMath> <strong>converges absolutely</strong> if
          <InlineMath>{`\\int_a^\\infty |f(x)|\\,dx`}</InlineMath> converges.
        </p>
      </Callout>

      <Callout type="theorem" title="Absolute Convergence Implies Convergence">
        <p>
          If <InlineMath>{`\\int_a^\\infty f(x)\\,dx`}</InlineMath> converges absolutely, then it converges.
        </p>
      </Callout>

      <p>
        The converse is false: an integral may converge conditionally (converge but not absolutely).
        For example, <InlineMath>{`\\int_1^\\infty \\frac{\\sin x}{x}\\,dx`}</InlineMath> converges conditionally.
      </p>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results for Improper Integrals">
        <p><strong>Type I</strong> (infinite limits): Define as <InlineMath>{`\\lim_{t \\to \\infty}`}</InlineMath> of ordinary integrals.</p>
        <p><strong>Type II</strong> (discontinuities): Define as one-sided limits avoiding the discontinuity.</p>
        <p><strong>p-integrals:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\int_1^\\infty x^{-p}\\,dx`}</InlineMath> converges iff <InlineMath>{`p > 1`}</InlineMath></li>
          <li><InlineMath>{`\\int_0^1 x^{-p}\\,dx`}</InlineMath> converges iff <InlineMath>{`p < 1`}</InlineMath></li>
        </ul>
        <p><strong>Comparison:</strong> Use direct or limit comparison with p-integrals or known convergent/divergent integrals.</p>
      </Callout>
    </LessonLayout>
  );
}
