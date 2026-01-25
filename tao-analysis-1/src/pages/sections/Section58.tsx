import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <p>
        In addition to piecewise continuous functions, another wide class of functions
        is Riemann integrable, namely the <em>monotone functions</em>. This provides
        yet another important family of integrable functions.
      </p>

      <h2>Monotone Functions on Closed Intervals</h2>

      <Theorem id="11.6.1" title="Proposition: Monotone functions are Riemann integrable">
        <p>
          Let <Math>[a, b]</Math> be a closed and bounded interval and let{' '}
          <Math>{String.raw`f: [a, b] \to \mathbb{R}`}</Math> be a monotone function.
          Then <Math>f</Math> is Riemann integrable on <Math>[a, b]</Math>.
        </p>
        <div className="proof">
          <p>
            Without loss of generality we may take <Math>f</Math> to be monotone increasing
            (instead of monotone decreasing). From Exercise 9.8.1 we know that <Math>f</Math>{' '}
            is bounded.
          </p>
          <p className="mt-2">
            Now let <Math>{String.raw`N > 0`}</Math> be an integer, and partition{' '}
            <Math>[a, b]</Math> into <Math>N</Math> half-open intervals:
          </p>
          <MathBlock>{String.raw`\left\{\left[a + \frac{b-a}{N}j, a + \frac{b-a}{N}(j+1)\right) : 0 \leq j \leq N-1\right\}`}</MathBlock>
          <p className="mt-2">
            each of length <Math>(b-a)/N</Math>, together with the point{' '}
            <Math>{String.raw`\{b\}`}</Math>.
          </p>
          <p className="mt-2">
            By Proposition 11.3.12, since <Math>f</Math> is monotone increasing:
          </p>
          <MathBlock>{String.raw`\overline{\int}_I f \leq \sum_{j=0}^{N-1} f\left(a + \frac{b-a}{N}(j+1)\right) \frac{b-a}{N}`}</MathBlock>
          <p className="mt-2">and similarly:</p>
          <MathBlock>{String.raw`\underline{\int}_I f \geq \sum_{j=0}^{N-1} f\left(a + \frac{b-a}{N}j\right) \frac{b-a}{N}`}</MathBlock>
          <p className="mt-2">Thus:</p>
          <MathBlock>{String.raw`\overline{\int}_I f - \underline{\int}_I f \leq \sum_{j=0}^{N-1} \left(f\left(a + \frac{b-a}{N}(j+1)\right) - f\left(a + \frac{b-a}{N}j\right)\right) \frac{b-a}{N}`}</MathBlock>
          <p className="mt-2">
            Using telescoping series (Lemma 7.2.15):
          </p>
          <MathBlock>{String.raw`\overline{\int}_I f - \underline{\int}_I f \leq \left(f(b) - f(a)\right) \frac{b-a}{N}`}</MathBlock>
          <p className="mt-2">
            But <Math>N</Math> was arbitrary, so we can conclude as in the proof of
            Theorem 11.5.1 that <Math>f</Math> is Riemann integrable.
          </p>
        </div>
      </Theorem>

      <Callout type="note">
        <p>
          <strong>Remark 11.6.2:</strong> From Exercise 9.8.5 we know that there exist
          monotone functions which are <em>not</em> piecewise continuous, so this
          proposition is not subsumed by Proposition 11.5.6. The class of Riemann
          integrable functions is strictly larger than the class of bounded piecewise
          continuous functions.
        </p>
      </Callout>

      <h2>Monotone Functions on General Bounded Intervals</h2>

      <Theorem id="11.6.3" title="Corollary: Bounded monotone functions">
        <p>
          Let <Math>I</Math> be a bounded interval, and let{' '}
          <Math>{String.raw`f: I \to \mathbb{R}`}</Math> be both monotone and bounded.
          Then <Math>f</Math> is Riemann integrable on <Math>I</Math>.
        </p>
        <div className="proof">
          <p>
            The proof is similar to that of Proposition 11.5.3. If <Math>I</Math> is a
            point or empty set, the claim is trivial. If <Math>I</Math> is a closed
            interval, the claim follows from Proposition 11.6.1.
          </p>
          <p className="mt-2">
            For other interval types (e.g., <Math>(a, b]</Math>, <Math>(a, b)</Math>,{' '}
            <Math>[a, b)</Math>), we use the same "shrinking" argument: restrict{' '}
            <Math>f</Math> to a closed subinterval{' '}
            <Math>{String.raw`[a + \varepsilon, b - \varepsilon]`}</Math>, use the
            integrability there, and bound the contribution from the endpoints using
            the boundedness of <Math>f</Math>.
          </p>
        </div>
      </Theorem>

      <h2>The Integral Test</h2>

      <p>
        We now give the famous <em>integral test</em> for determining convergence of
        monotone decreasing series. This is a powerful connection between integration
        and series convergence.
      </p>

      <Theorem id="11.6.4" title="Proposition: Integral test">
        <p>
          Let <Math>{String.raw`f: [0, \infty) \to \mathbb{R}`}</Math> be a monotone
          decreasing function which is non-negative (i.e.,{' '}
          <Math>{String.raw`f(x) \geq 0`}</Math> for all{' '}
          <Math>{String.raw`x \geq 0`}</Math>). Then the sum{' '}
          <Math>{String.raw`\sum_{n=0}^{\infty} f(n)`}</Math> is convergent if and only if{' '}
          <Math>{String.raw`\sup_{N > 0} \int_{[0,N]} f`}</Math> is finite.
        </p>
        <div className="proof">
          <p>
            Since <Math>f</Math> is monotone decreasing and non-negative, for each
            integer <Math>{String.raw`n \geq 0`}</Math> we have:
          </p>
          <MathBlock>{String.raw`f(n+1) \leq \int_{[n, n+1]} f \leq f(n)`}</MathBlock>
          <p className="mt-2">
            The left inequality holds because <Math>f(n+1)</Math> minorizes <Math>f</Math>{' '}
            on <Math>[n, n+1]</Math>, and the right holds because <Math>f(n)</Math>{' '}
            majorizes <Math>f</Math> on <Math>[n, n+1]</Math>.
          </p>
          <p className="mt-2">
            Summing from <Math>n = 0</Math> to <Math>N - 1</Math>:
          </p>
          <MathBlock>{String.raw`\sum_{n=1}^{N} f(n) \leq \int_{[0,N]} f \leq \sum_{n=0}^{N-1} f(n)`}</MathBlock>
          <p className="mt-2">
            Thus <Math>{String.raw`\sum_{n=0}^{\infty} f(n)`}</Math> converges if and only
            if the partial sums are bounded, which happens if and only if{' '}
            <Math>{String.raw`\int_{[0,N]} f`}</Math> remains bounded as{' '}
            <Math>{String.raw`N \to \infty`}</Math>.
          </p>
        </div>
      </Theorem>

      <Example id="11.6.4a" title="Applying the integral test">
        <p>
          To determine whether <Math>{String.raw`\sum_{n=1}^{\infty} \frac{1}{n^2}`}</Math>{' '}
          converges, we consider <Math>f(x) = 1/x^2</Math> for <Math>{String.raw`x \geq 1`}</Math>.
        </p>
        <p className="mt-2">
          Since <Math>f</Math> is monotone decreasing and non-negative, we compute:
        </p>
        <MathBlock>{String.raw`\int_{[1,N]} \frac{1}{x^2}\,dx = \left[-\frac{1}{x}\right]_1^N = 1 - \frac{1}{N} < 1`}</MathBlock>
        <p className="mt-2">
          The integral is bounded by 1 for all <Math>N</Math>, so by the integral test,{' '}
          <Math>{String.raw`\sum_{n=1}^{\infty} \frac{1}{n^2}`}</Math> converges.
        </p>
      </Example>

      <h2>Convergence of p-Series</h2>

      <Theorem id="11.6.5" title="Corollary: Convergence of p-series">
        <p>
          Let <Math>p</Math> be a real number. Then{' '}
          <Math>{String.raw`\sum_{n=1}^{\infty} \frac{1}{n^p}`}</Math> converges
          absolutely when <Math>{String.raw`p > 1`}</Math> and diverges when{' '}
          <Math>{String.raw`p \leq 1`}</Math>.
        </p>
        <div className="proof">
          <p>
            Apply the integral test to <Math>f(x) = 1/x^p</Math> for{' '}
            <Math>{String.raw`x \geq 1`}</Math>.
          </p>
          <p className="mt-2">
            <strong>Case <Math>{String.raw`p \neq 1`}</Math>:</strong>
          </p>
          <MathBlock>{String.raw`\int_{[1,N]} \frac{1}{x^p}\,dx = \left[\frac{x^{1-p}}{1-p}\right]_1^N = \frac{N^{1-p} - 1}{1-p}`}</MathBlock>
          <p className="mt-2">
            If <Math>{String.raw`p > 1`}</Math>, then <Math>{String.raw`1 - p < 0`}</Math>,
            so <Math>{String.raw`N^{1-p} \to 0`}</Math> as{' '}
            <Math>{String.raw`N \to \infty`}</Math>. The integral converges to{' '}
            <Math>{String.raw`\frac{1}{p-1}`}</Math>, which is finite.
          </p>
          <p className="mt-2">
            If <Math>{String.raw`p < 1`}</Math>, then <Math>{String.raw`1 - p > 0`}</Math>,
            so <Math>{String.raw`N^{1-p} \to \infty`}</Math> as{' '}
            <Math>{String.raw`N \to \infty`}</Math>. The integral diverges.
          </p>
          <p className="mt-2">
            <strong>Case <Math>p = 1</Math>:</strong>
          </p>
          <MathBlock>{String.raw`\int_{[1,N]} \frac{1}{x}\,dx = \ln N \to \infty`}</MathBlock>
          <p className="mt-2">
            So the series diverges when <Math>p = 1</Math> (the harmonic series).
          </p>
          <p className="mt-2">
            <strong>Case <Math>{String.raw`p \leq 0`}</Math>:</strong> The terms{' '}
            <Math>{String.raw`1/n^p`}</Math> do not approach zero, so the series diverges
            by the zero test.
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <p>
          <strong>Summary:</strong> We have shown that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Monotone functions on closed bounded intervals are Riemann integrable</li>
          <li>Bounded monotone functions on any bounded interval are Riemann integrable</li>
          <li>
            The integral test connects series convergence to the boundedness of integrals
          </li>
          <li>
            The p-series <Math>{String.raw`\sum 1/n^p`}</Math> converges iff{' '}
            <Math>{String.raw`p > 1`}</Math>
          </li>
        </ul>
        <p className="mt-2">
          Note that monotone functions need not be piecewise continuous (they can have
          infinitely many jump discontinuities), so the class of Riemann integrable
          functions is quite broad.
        </p>
      </Callout>
    </LessonLayout>
  );
}
