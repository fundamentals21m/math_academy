import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';
import { SeriesConvergenceTester } from '@/components/visualizations';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed mb-4">
          In this section, we develop two of the most powerful and widely-used convergence
          tests: the <strong>root test</strong> and the <strong>ratio test</strong>. Both
          tests work by comparing a series to a geometric series, which we understand
          completely.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The key insight is that if the terms <Math tex="a_n" /> of a series eventually
          behave like a geometric series <Math tex="r^n" /> with <Math tex="|r| < 1" />,
          then the series converges absolutely. Conversely, if they behave like a geometric
          series with <Math tex="|r| > 1" />, the series diverges.
        </p>
        <Callout type="info">
          <strong>Why these tests matter:</strong> The root and ratio tests are especially
          useful for series involving factorials, exponentials, and powers—situations where
          comparison to known series would be difficult.
        </Callout>

        {/* Interactive Visualization */}
        <div className="my-8">
          <SeriesConvergenceTester />
        </div>
      </section>

      {/* The Root Test */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">The Root Test</h2>

        <p className="text-lg leading-relaxed mb-6">
          The root test examines the <Math tex="n" />-th root of the absolute value of terms:
        </p>

        <Theorem
          id="thm-7.5.1"
          title="Theorem 7.5.1: Root test"
          statement={
            <>
              Let <Math tex="\sum_{n=m}^{\infty} a_n" /> be a series of real numbers, and let
              <MathBlock tex="\alpha := \limsup_{n \to \infty} |a_n|^{1/n}." />
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  <strong>(a)</strong> If <Math tex="\alpha < 1" />, then the series{' '}
                  <Math tex="\sum_{n=m}^{\infty} a_n" /> is absolutely convergent (and hence
                  conditionally convergent).
                </li>
                <li>
                  <strong>(b)</strong> If <Math tex="\alpha > 1" />, then the series{' '}
                  <Math tex="\sum_{n=m}^{\infty} a_n" /> is conditionally divergent (and hence
                  cannot be absolutely convergent).
                </li>
                <li>
                  <strong>(c)</strong> If <Math tex="\alpha = 1" />, we cannot assert any
                  conclusion.
                </li>
              </ul>
            </>
          }
          proof={
            <>
              <p className="mb-3">
                <strong>Case (a):</strong> Suppose <Math tex="\alpha < 1" />. Since{' '}
                <Math tex="|a_n|^{1/n} \geq 0" /> for all <Math tex="n" />, we have{' '}
                <Math tex="\alpha \geq 0" />. Choose <Math tex="\varepsilon > 0" /> such that{' '}
                <Math tex="0 < \alpha + \varepsilon < 1" /> (e.g.,{' '}
                <Math tex="\varepsilon = (1 - \alpha)/2" />).
              </p>
              <p className="mb-3">
                By the definition of limit superior, there exists <Math tex="N \geq m" /> such
                that <Math tex="|a_n|^{1/n} \leq \alpha + \varepsilon" /> for all{' '}
                <Math tex="n \geq N" />. Thus{' '}
                <Math tex="|a_n| \leq (\alpha + \varepsilon)^n" /> for all{' '}
                <Math tex="n \geq N" />.
              </p>
              <p className="mb-3">
                Since <Math tex="0 < \alpha + \varepsilon < 1" />, the geometric series{' '}
                <Math tex="\sum_{n=N}^{\infty} (\alpha + \varepsilon)^n" /> converges. By the
                comparison test, <Math tex="\sum_{n=N}^{\infty} |a_n|" /> converges, hence{' '}
                <Math tex="\sum_{n=m}^{\infty} a_n" /> is absolutely convergent.
              </p>
              <p className="mb-3">
                <strong>Case (b):</strong> Suppose <Math tex="\alpha > 1" />. By properties
                of limit superior, for every <Math tex="N \geq m" /> there exists{' '}
                <Math tex="n \geq N" /> such that <Math tex="|a_n|^{1/n} \geq 1" />, hence{' '}
                <Math tex="|a_n| \geq 1" />.
              </p>
              <p className="mb-3">
                This means <Math tex="(a_n)_{n=m}^{\infty}" /> does not converge to zero
                (it's not eventually close to 0). By the zero test, the series diverges.
              </p>
              <p>
                <strong>Case (c):</strong> See the exercises for examples where{' '}
                <Math tex="\alpha = 1" /> but the series can either converge or diverge.
              </p>
            </>
          }
        />

        <Example id="ex-root-test-1" title="Example: Applying the root test">
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">
                (a) Consider <Math tex="\sum_{n=1}^{\infty} \frac{1}{2^n}" />:
              </p>
              <MathBlock tex="|a_n|^{1/n} = \left(\frac{1}{2^n}\right)^{1/n} = \frac{1}{2}" />
              <p className="mt-2">
                So <Math tex="\alpha = 1/2 < 1" />. The series converges absolutely.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">
                (b) Consider <Math tex="\sum_{n=1}^{\infty} \frac{n^n}{3^n}" />:
              </p>
              <MathBlock tex="|a_n|^{1/n} = \frac{n}{3}" />
              <p className="mt-2">
                As <Math tex="n \to \infty" />, this goes to <Math tex="+\infty > 1" />.
                The series diverges.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">
                (c) Consider <Math tex="\sum_{n=1}^{\infty} \frac{1}{n^2}" />:
              </p>
              <MathBlock tex="|a_n|^{1/n} = \frac{1}{n^{2/n}} \to 1 \text{ as } n \to \infty" />
              <p className="mt-2">
                So <Math tex="\alpha = 1" />. The root test is inconclusive. (We know from
                the p-series test that this series converges.)
              </p>
            </div>
          </div>
        </Example>
      </section>

      {/* Connecting Roots and Ratios */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Connecting Roots and Ratios</h2>

        <p className="text-lg leading-relaxed mb-6">
          The root test involves computing <Math tex="n" />-th roots, which can be difficult.
          The following lemma shows that we can often use ratios instead:
        </p>

        <Theorem
          id="lem-7.5.2"
          title="Lemma 7.5.2: Ratios control roots"
          statement={
            <>
              Let <Math tex="(c_n)_{n=m}^{\infty}" /> be a sequence of positive numbers. Then
              <MathBlock tex="\liminf_{n \to \infty} \frac{c_{n+1}}{c_n} \leq \liminf_{n \to \infty} c_n^{1/n} \leq \limsup_{n \to \infty} c_n^{1/n} \leq \limsup_{n \to \infty} \frac{c_{n+1}}{c_n}." />
            </>
          }
          proof={
            <>
              <p className="mb-3">
                The middle inequality follows from the general fact that{' '}
                <Math tex="\liminf \leq \limsup" />.
              </p>
              <p className="mb-3">
                <strong>Proof of the rightmost inequality:</strong> Let{' '}
                <Math tex="L := \limsup_{n \to \infty} \frac{c_{n+1}}{c_n}" />. If{' '}
                <Math tex="L = +\infty" />, there's nothing to prove, so assume{' '}
                <Math tex="L" /> is finite (and <Math tex="L \geq 0" /> since the ratios are
                positive).
              </p>
              <p className="mb-3">
                For any <Math tex="\varepsilon > 0" />, there exists <Math tex="N \geq m" />{' '}
                such that <Math tex="\frac{c_{n+1}}{c_n} \leq L + \varepsilon" /> for all{' '}
                <Math tex="n \geq N" />. This means{' '}
                <Math tex="c_{n+1} \leq c_n(L + \varepsilon)" /> for <Math tex="n \geq N" />.
              </p>
              <p className="mb-3">
                By induction, <Math tex="c_n \leq c_N (L + \varepsilon)^{n-N}" /> for all{' '}
                <Math tex="n \geq N" />. Writing{' '}
                <Math tex="A = c_N (L + \varepsilon)^{-N}" />, we have{' '}
                <Math tex="c_n \leq A(L + \varepsilon)^n" />.
              </p>
              <p className="mb-3">
                Taking <Math tex="n" />-th roots:{' '}
                <Math tex="c_n^{1/n} \leq A^{1/n}(L + \varepsilon)" />. Since{' '}
                <Math tex="A^{1/n} \to 1" /> as <Math tex="n \to \infty" />:
                <MathBlock tex="\limsup_{n \to \infty} c_n^{1/n} \leq L + \varepsilon." />
              </p>
              <p>
                Since this holds for all <Math tex="\varepsilon > 0" />, we get{' '}
                <Math tex="\limsup c_n^{1/n} \leq L" />. The leftmost inequality is proved
                similarly using the inverse sequence.
              </p>
            </>
          }
        />

        <Callout type="info" className="mt-6">
          <strong>Key consequence:</strong> If the ratio{' '}
          <Math tex="\lim_{n \to \infty} \frac{c_{n+1}}{c_n}" /> exists, then{' '}
          <Math tex="\lim_{n \to \infty} c_n^{1/n}" /> also exists and equals the same value.
          This means the ratio test and root test give the same answer whenever the ratio
          limit exists!
        </Callout>
      </section>

      {/* The Ratio Test */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">The Ratio Test</h2>

        <Theorem
          id="cor-7.5.3"
          title="Corollary 7.5.3: Ratio test"
          statement={
            <>
              Let <Math tex="\sum_{n=m}^{\infty} a_n" /> be a series of <strong>non-zero</strong>{' '}
              numbers. (The non-zero hypothesis is required so that the ratios{' '}
              <Math tex="|a_{n+1}|/|a_n|" /> are well-defined.)
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  If <Math tex="\limsup_{n \to \infty} \frac{|a_{n+1}|}{|a_n|} < 1" />, then
                  the series is absolutely convergent (hence conditionally convergent).
                </li>
                <li>
                  If <Math tex="\liminf_{n \to \infty} \frac{|a_{n+1}|}{|a_n|} > 1" />, then
                  the series is conditionally divergent (and thus cannot be absolutely
                  convergent).
                </li>
                <li>
                  In the remaining cases, we cannot assert any conclusion.
                </li>
              </ul>
            </>
          }
          proof={
            <>
              <p className="mb-3">
                This follows from Theorem 7.5.1 (root test) and Lemma 7.5.2.
              </p>
              <p className="mb-3">
                If <Math tex="\limsup \frac{|a_{n+1}|}{|a_n|} < 1" />, then by Lemma 7.5.2,{' '}
                <Math tex="\limsup |a_n|^{1/n} \leq \limsup \frac{|a_{n+1}|}{|a_n|} < 1" />,
                so the root test gives absolute convergence.
              </p>
              <p>
                If <Math tex="\liminf \frac{|a_{n+1}|}{|a_n|} > 1" />, then by Lemma 7.5.2,{' '}
                <Math tex="\limsup |a_n|^{1/n} \geq \liminf |a_n|^{1/n} \geq \liminf \frac{|a_{n+1}|}{|a_n|} > 1" />,
                so the root test gives divergence.
              </p>
            </>
          }
        />

        <Example id="ex-ratio-test" title="Example: Applying the ratio test">
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">
                (a) Consider <Math tex="\sum_{n=0}^{\infty} \frac{x^n}{n!}" /> for fixed{' '}
                <Math tex="x \in \mathbb{R}" />:
              </p>
              <MathBlock tex="\frac{|a_{n+1}|}{|a_n|} = \frac{|x|^{n+1}/(n+1)!}{|x|^n/n!} = \frac{|x|}{n+1} \to 0 \text{ as } n \to \infty" />
              <p className="mt-2">
                Since <Math tex="0 < 1" />, the series converges absolutely for all{' '}
                <Math tex="x" />. (This is the series for <Math tex="e^x" />!)
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">
                (b) Consider <Math tex="\sum_{n=1}^{\infty} \frac{n!}{n^n}" />:
              </p>
              <MathBlock tex="\frac{|a_{n+1}|}{|a_n|} = \frac{(n+1)!/(n+1)^{n+1}}{n!/n^n} = \frac{(n+1) \cdot n^n}{(n+1)^{n+1}} = \left(\frac{n}{n+1}\right)^n = \frac{1}{(1 + 1/n)^n}" />
              <p className="mt-2">
                As <Math tex="n \to \infty" />, <Math tex="(1 + 1/n)^n \to e" />, so the
                ratio approaches <Math tex="1/e < 1" />. The series converges.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">
                (c) Consider <Math tex="\sum_{n=1}^{\infty} \frac{2^n \cdot n!}{n^n}" />:
              </p>
              <MathBlock tex="\frac{|a_{n+1}|}{|a_n|} = 2 \cdot \frac{1}{(1 + 1/n)^n} \to \frac{2}{e} < 1" />
              <p className="mt-2">
                The series converges absolutely.
              </p>
            </div>
          </div>
        </Example>
      </section>

      {/* Useful limit */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">A Useful Limit</h2>

        <Theorem
          id="prop-7.5.4"
          title="Proposition 7.5.4"
          statement={
            <>
              We have <Math tex="\lim_{n \to \infty} n^{1/n} = 1" />.
            </>
          }
          proof={
            <>
              <p className="mb-3">
                By Lemma 7.5.2 applied to <Math tex="c_n = n" />:
                <MathBlock tex="\limsup_{n \to \infty} n^{1/n} \leq \limsup_{n \to \infty} \frac{n+1}{n} = \limsup_{n \to \infty} \left(1 + \frac{1}{n}\right) = 1." />
              </p>
              <p className="mb-3">
                Similarly:
                <MathBlock tex="\liminf_{n \to \infty} n^{1/n} \geq \liminf_{n \to \infty} \frac{n+1}{n} = 1." />
              </p>
              <p>
                Since <Math tex="\liminf n^{1/n} \geq 1" /> and{' '}
                <Math tex="\limsup n^{1/n} \leq 1" />, and{' '}
                <Math tex="\liminf \leq \limsup" />, we must have both equal to 1. Hence the
                limit exists and equals 1.
              </p>
            </>
          }
        />

        <Callout type="note" className="mt-6">
          This result is useful when applying the root test to series like{' '}
          <Math tex="\sum 1/n^p" />, where{' '}
          <Math tex="|a_n|^{1/n} = (1/n^p)^{1/n} = 1/n^{p/n} \to 1" />. The root test is
          inconclusive for such series—we need the p-series test instead.
        </Callout>
      </section>

      {/* Comparison of tests */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Comparing the Tests</h2>

        <div className="bg-slate-800 p-6 rounded-lg mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left py-2 text-amber-400">Aspect</th>
                <th className="text-left py-2 text-amber-400">Root Test</th>
                <th className="text-left py-2 text-amber-400">Ratio Test</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3">Computation</td>
                <td className="py-3"><Math tex="\limsup |a_n|^{1/n}" /></td>
                <td className="py-3"><Math tex="\limsup |a_{n+1}|/|a_n|" /></td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3">Requirement</td>
                <td className="py-3">None</td>
                <td className="py-3"><Math tex="a_n \neq 0" /> for all <Math tex="n" /></td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3">Power</td>
                <td className="py-3">At least as powerful as ratio test</td>
                <td className="py-3">May fail when root test works</td>
              </tr>
              <tr>
                <td className="py-3">Ease of use</td>
                <td className="py-3">Roots can be tricky</td>
                <td className="py-3">Often easier to compute</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="info">
          <strong>When to use which:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Ratio test:</strong> Series with factorials, products, or ratios of
              consecutive terms (like <Math tex="n!/n^n" /> or <Math tex="x^n/n!" />)
            </li>
            <li>
              <strong>Root test:</strong> Series where terms have the form{' '}
              <Math tex="(f(n))^n" /> or powers of <Math tex="n" />
            </li>
            <li>
              <strong>Neither:</strong> p-series like <Math tex="\sum 1/n^p" /> (use p-series
              test or comparison)
            </li>
          </ul>
        </Callout>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Exercises</h2>

        <div className="space-y-6">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.5.1</h4>
            <p>
              Prove the first inequality in Lemma 7.5.2:{' '}
              <Math tex="\liminf \frac{c_{n+1}}{c_n} \leq \liminf c_n^{1/n}" />.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.5.2</h4>
            <p>
              Let <Math tex="x" /> be a real number with <Math tex="|x| < 1" />, and let{' '}
              <Math tex="q" /> be a real number. Show that the series{' '}
              <Math tex="\sum_{n=1}^{\infty} n^q x^n" /> is absolutely convergent, and that{' '}
              <Math tex="\lim_{n \to \infty} n^q x^n = 0" />.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.5.3</h4>
            <p>
              Give an example of a <em>divergent</em> series{' '}
              <Math tex="\sum_{n=1}^{\infty} a_n" /> of positive numbers such that
              <MathBlock tex="\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} a_n^{1/n} = 1," />
              and give an example of a <em>convergent</em> series{' '}
              <Math tex="\sum_{n=1}^{\infty} b_n" /> of positive numbers such that
              <MathBlock tex="\lim_{n \to \infty} \frac{b_{n+1}}{b_n} = \lim_{n \to \infty} b_n^{1/n} = 1." />
              (Hint: Use Corollary 7.3.7.)
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.5.4</h4>
            <p>
              Determine whether the following series converge or diverge:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><Math tex="\sum_{n=1}^{\infty} \frac{n!}{10^n}" /></li>
              <li><Math tex="\sum_{n=1}^{\infty} \frac{3^n}{n^3}" /></li>
              <li><Math tex="\sum_{n=1}^{\infty} \left(\frac{n}{n+1}\right)^{n^2}" /></li>
              <li><Math tex="\sum_{n=1}^{\infty} \frac{(2n)!}{(n!)^2 4^n}" /></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Key Takeaways</h2>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-lg border border-amber-700/50">
          <ul className="list-disc list-inside space-y-3">
            <li>
              The <strong>root test</strong> uses{' '}
              <Math tex="\alpha = \limsup |a_n|^{1/n}" />: convergence if{' '}
              <Math tex="\alpha < 1" />, divergence if <Math tex="\alpha > 1" />,
              inconclusive if <Math tex="\alpha = 1" />.
            </li>
            <li>
              The <strong>ratio test</strong> uses{' '}
              <Math tex="\limsup |a_{n+1}|/|a_n|" /> (for convergence) and{' '}
              <Math tex="\liminf |a_{n+1}|/|a_n|" /> (for divergence).
            </li>
            <li>
              Lemma 7.5.2 shows that <strong>ratios control roots</strong>: the root test
              is at least as powerful as the ratio test.
            </li>
            <li>
              When the ratio <Math tex="|a_{n+1}|/|a_n|" /> has a limit, the root and ratio
              tests give the same answer.
            </li>
            <li>
              <Math tex="\lim_{n \to \infty} n^{1/n} = 1" />, which explains why the root
              test is inconclusive for p-series.
            </li>
            <li>
              The ratio test is especially useful for series with <strong>factorials</strong>;
              the root test for series with terms like <Math tex="(f(n))^n" />.
            </li>
          </ul>
        </div>
      </section>

      {/* Looking Ahead */}
      <section>
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Looking Ahead</h2>
        <p className="text-lg leading-relaxed">
          Having completed our study of series convergence tests, we now turn to a new topic:{' '}
          <strong>infinite sets</strong>. We will explore the surprising properties of infinite
          sets, including the famous result that the rational numbers are countable (can be
          listed in a sequence) while the real numbers are uncountable (cannot be listed).
          This leads to deep questions about the nature of infinity.
        </p>
      </section>
    </LessonLayout>
  );
}
