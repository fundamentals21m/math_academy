import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed mb-4">
          One feature of finite sums is that no matter how one rearranges the terms in a
          sequence, the total sum remains the same. For instance:
        </p>
        <MathBlock tex="a_1 + a_2 + a_3 + a_4 + a_5 = a_4 + a_3 + a_5 + a_1 + a_2." />
        <p className="text-lg leading-relaxed mb-4">
          A natural question arises: does the same hold true for infinite series? The answer
          depends critically on whether the series is <strong>absolutely convergent</strong>.
          For absolutely convergent series, rearrangements are safe. But for series that are
          only conditionally convergent, rearrangements can dramatically change the sum—or
          even cause the series to diverge!
        </p>
        <Callout type="warning">
          <strong>The key distinction:</strong> Absolutely convergent series can be freely
          rearranged. Conditionally convergent series cannot—rearranging them can produce
          any sum whatsoever.
        </Callout>
      </section>

      {/* Definition of rearrangement */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">What is a Rearrangement?</h2>

        <Definition
          id="def-rearrangement"
          term="Rearrangement of a series"
          definition={
            <>
              Let <Math tex="\sum_{n=0}^{\infty} a_n" /> be a series. A{' '}
              <strong>rearrangement</strong> of this series is a series of the form{' '}
              <Math tex="\sum_{m=0}^{\infty} a_{f(m)}" />, where{' '}
              <Math tex="f : \mathbb{N} \to \mathbb{N}" /> is a bijection. In other words,
              we sum the same terms but in a different order determined by <Math tex="f" />.
            </>
          }
        />

        <p className="mt-4">
          Since <Math tex="f" /> is a bijection, every term <Math tex="a_n" /> of the original
          series appears exactly once in the rearranged series, just potentially at a different
          position.
        </p>
      </section>

      {/* Proposition 7.4.1: Non-negative series */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">
          Rearrangement of Non-negative Series
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          When all terms are non-negative, rearrangements preserve the sum:
        </p>

        <Theorem
          id="prop-7.4.1"
          title="Proposition 7.4.1: Rearrangement of non-negative series"
          statement={
            <>
              Let <Math tex="\sum_{n=0}^{\infty} a_n" /> be a convergent series of non-negative
              real numbers, and let <Math tex="f : \mathbb{N} \to \mathbb{N}" /> be a bijection.
              Then <Math tex="\sum_{m=0}^{\infty} a_{f(m)}" /> is also convergent, and has the
              same sum:
              <MathBlock tex="\sum_{n=0}^{\infty} a_n = \sum_{m=0}^{\infty} a_{f(m)}." />
            </>
          }
          proof={
            <>
              <p className="mb-3">
                Let <Math tex="S_N := \sum_{n=0}^{N} a_n" /> and{' '}
                <Math tex="T_M := \sum_{m=0}^{M} a_{f(m)}" /> be the partial sums. Since all
                terms are non-negative, both sequences are increasing.
              </p>
              <p className="mb-3">
                Write <Math tex="L := \sup(S_N)_{N=0}^{\infty}" /> and{' '}
                <Math tex="L' := \sup(T_M)_{M=0}^{\infty}" />. By the monotone convergence
                theorem, <Math tex="L = \sum_{n=0}^{\infty} a_n" /> is finite. We need to show
                that <Math tex="L' = L" />.
              </p>
              <p className="mb-3">
                <strong>Step 1:</strong> Show <Math tex="L' \leq L" />.
              </p>
              <p className="mb-3">
                Fix <Math tex="M" /> and let <Math tex="Y = \{m \in \mathbb{N} : m \leq M\}" />.
                Since <Math tex="f" /> is a bijection, <Math tex="f(Y)" /> has the same number
                of elements as <Math tex="Y" />. The sequence{' '}
                <Math tex="(f(m))_{m=0}^{M}" /> is finite and bounded, so there exists{' '}
                <Math tex="N" /> such that <Math tex="f(m) \leq N" /> for all{' '}
                <Math tex="m \leq M" />. Thus <Math tex="f(Y) \subseteq \{n : n \leq N\}" />,
                and by non-negativity:
                <MathBlock tex="T_M = \sum_{n \in f(Y)} a_n \leq \sum_{n=0}^{N} a_n = S_N \leq L." />
              </p>
              <p className="mb-3">
                Since this holds for all <Math tex="M" />, we have <Math tex="L' \leq L" />.
              </p>
              <p className="mb-3">
                <strong>Step 2:</strong> Show <Math tex="L \leq L'" />.
              </p>
              <p>
                By the same argument applied to <Math tex="f^{-1}" /> (which is also a bijection),
                we get <Math tex="L \leq L'" />. Combining, <Math tex="L = L'" />.
              </p>
            </>
          }
        />

        <Example id="ex-7.4.2" title="Example 7.4.2: Rearranging the series of 1/n²">
          <p className="mb-3">
            From Corollary 7.3.7, we know that the series
          </p>
          <MathBlock tex="\sum_{n=1}^{\infty} \frac{1}{n^2} = 1 + \frac{1}{4} + \frac{1}{9} + \frac{1}{16} + \frac{1}{25} + \frac{1}{36} + \cdots" />
          <p className="mb-3">
            is convergent. By Proposition 7.4.1, if we interchange every pair of terms to obtain
          </p>
          <MathBlock tex="\frac{1}{4} + 1 + \frac{1}{16} + \frac{1}{9} + \frac{1}{36} + \frac{1}{25} + \cdots" />
          <p>
            then this rearranged series is also convergent and has the same sum. (The sum turns
            out to be <Math tex="\pi^2/6" />, a famous result we will prove later.)
          </p>
        </Example>
      </section>

      {/* Proposition 7.4.3: Absolutely convergent series */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">
          Rearrangement of Absolutely Convergent Series
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          The result extends to series with mixed signs, provided the series is{' '}
          <strong>absolutely</strong> convergent:
        </p>

        <Theorem
          id="prop-7.4.3"
          title="Proposition 7.4.3: Rearrangement of absolutely convergent series"
          statement={
            <>
              Let <Math tex="\sum_{n=0}^{\infty} a_n" /> be an absolutely convergent series of
              real numbers, and let <Math tex="f : \mathbb{N} \to \mathbb{N}" /> be a bijection.
              Then <Math tex="\sum_{m=0}^{\infty} a_{f(m)}" /> is also absolutely convergent,
              and has the same sum:
              <MathBlock tex="\sum_{n=0}^{\infty} a_n = \sum_{m=0}^{\infty} a_{f(m)}." />
            </>
          }
          proof={
            <>
              <p className="mb-3">
                <em>(Sketch)</em> Apply Proposition 7.4.1 to the series{' '}
                <Math tex="\sum_{n=0}^{\infty} |a_n|" />, which is a convergent series of
                non-negative numbers by hypothesis. If <Math tex="L := \sum_{n=0}^{\infty} |a_n|" />,
                then by Proposition 7.4.1, <Math tex="\sum_{m=0}^{\infty} |a_{f(m)}|" /> also
                converges to <Math tex="L" />. This establishes absolute convergence of the
                rearranged series.
              </p>
              <p className="mb-3">
                For the equality of sums, write <Math tex="L' := \sum_{n=0}^{\infty} a_n" />.
                We show that <Math tex="\sum_{m=0}^{\infty} a_{f(m)}" /> also converges to{' '}
                <Math tex="L'" />.
              </p>
              <p className="mb-3">
                Given <Math tex="\varepsilon > 0" />, since <Math tex="\sum |a_n|" /> converges,
                there exists <Math tex="N" /> such that{' '}
                <Math tex="\sum_{n=p}^{q} |a_n| \leq \varepsilon/2" /> for all{' '}
                <Math tex="p, q \geq N" />, and <Math tex="\sum_{n=0}^{N} a_n" /> is{' '}
                <Math tex="\varepsilon/2" />-close to <Math tex="L'" />.
              </p>
              <p className="mb-3">
                Choose <Math tex="M" /> large enough that{' '}
                <Math tex="\{0, 1, \ldots, N\} \subseteq \{f(0), f(1), \ldots, f(M)\}" />.
                Then for any <Math tex="M' \geq M" />:
                <MathBlock tex="\sum_{m=0}^{M'} a_{f(m)} = \sum_{n=0}^{N} a_n + \sum_{n \in X} a_n" />
                where <Math tex="X" /> consists of indices beyond <Math tex="N" />.
              </p>
              <p>
                Since <Math tex="|\sum_{n \in X} a_n| \leq \sum_{n \in X} |a_n| \leq \varepsilon/2" />,
                the partial sum is <Math tex="\varepsilon" />-close to <Math tex="L'" />.
              </p>
            </>
          }
        />

        <Callout type="info" className="mt-6">
          <strong>Key insight:</strong> Absolute convergence means we have "room to spare"—the
          series <Math tex="\sum |a_n|" /> converges, which gives us control over any finite
          rearrangement of terms. The tails become arbitrarily small regardless of order.
        </Callout>
      </section>

      {/* Conditionally convergent series - the danger */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">
          The Danger of Rearranging Conditionally Convergent Series
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          When a series is only <strong>conditionally</strong> convergent (convergent but not
          absolutely convergent), rearrangements can behave very badly:
        </p>

        <Example id="ex-7.4.4" title="Example 7.4.4: Rearrangement changes the sum">
          <p className="mb-3">
            Consider the alternating harmonic-like series starting from <Math tex="1/3" />:
          </p>
          <MathBlock tex="\frac{1}{3} - \frac{1}{4} + \frac{1}{5} - \frac{1}{6} + \frac{1}{7} - \frac{1}{8} + \cdots" />
          <p className="mb-3">
            This series is <strong>conditionally convergent</strong> by the alternating series
            test (since <Math tex="1/n \to 0" /> and decreases), but not absolutely convergent
            (since <Math tex="\sum 1/n" /> diverges).
          </p>
          <p className="mb-3">
            <strong>Original sum:</strong> The series converges to a <em>positive</em> number
            (in fact, <Math tex="\ln(2) - 1/2 \approx 0.193" />). This is because the grouped
            terms <Math tex="(1/3 - 1/4), (1/5 - 1/6), (1/7 - 1/8), \ldots" /> are all positive.
          </p>
          <p className="mb-3">
            <strong>Rearranged series:</strong> Now consider putting two negative terms for each
            positive term:
          </p>
          <MathBlock tex="\frac{1}{3} - \frac{1}{4} - \frac{1}{6} + \frac{1}{5} - \frac{1}{8} - \frac{1}{10} + \frac{1}{7} - \frac{1}{12} - \frac{1}{14} + \cdots" />
          <p className="mb-3">
            The partial sums quickly become <em>negative</em>! The grouped terms{' '}
            <Math tex="(1/3 - 1/4 - 1/6), (1/5 - 1/8 - 1/10), \ldots" /> are all negative.
            This rearranged series converges to:
          </p>
          <MathBlock tex="\frac{\ln(2) - 1}{2} \approx -0.153" />
          <p>
            By simply reordering the terms, the sum changed from positive to negative!
          </p>
        </Example>

        <Callout type="warning" className="mt-6">
          <strong>Riemann's Rearrangement Theorem:</strong> There is a remarkable result
          (Theorem 8.2.8) stating that if a series is conditionally convergent but not
          absolutely convergent, then it can be rearranged to converge to <em>any</em> real
          number whatsoever, or even rearranged to diverge! This is why working with
          conditionally convergent series requires extreme care.
        </Callout>
      </section>

      {/* Why this happens */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">
          Why Does This Happen?
        </h2>

        <p className="text-lg leading-relaxed mb-4">
          The intuition behind why conditionally convergent series misbehave under
          rearrangement comes from the delicate balance between positive and negative terms:
        </p>

        <div className="bg-slate-800 p-6 rounded-lg mb-6">
          <ul className="list-disc list-inside space-y-3">
            <li>
              In an absolutely convergent series, both <Math tex="\sum a_n^+" /> (positive parts)
              and <Math tex="\sum |a_n^-|" /> (absolute values of negative parts) converge.
              Rearranging can't change finite quantities.
            </li>
            <li>
              In a conditionally convergent series, both <Math tex="\sum a_n^+ = +\infty" /> and{' '}
              <Math tex="\sum |a_n^-| = +\infty" />. The series converges only because positive
              and negative terms cancel in a precise way.
            </li>
            <li>
              By taking more positive terms before negative ones (or vice versa), we can make
              the partial sums drift to any desired value before the cancellation "catches up."
            </li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed">
          Think of it like this: with infinitely many positive terms summing to{' '}
          <Math tex="+\infty" /> and infinitely many negative terms summing to{' '}
          <Math tex="-\infty" />, we can "steer" the partial sums wherever we want by
          choosing which terms to include next.
        </p>
      </section>

      {/* Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Summary: When is Rearrangement Safe?</h2>

        <div className="bg-slate-800 p-6 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left py-2 text-amber-400">Type of Series</th>
                <th className="text-left py-2 text-amber-400">Rearrangement Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3">Non-negative convergent</td>
                <td className="py-3 text-green-400">Safe: sum unchanged</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3">Absolutely convergent</td>
                <td className="py-3 text-green-400">Safe: sum unchanged</td>
              </tr>
              <tr>
                <td className="py-3">Conditionally convergent</td>
                <td className="py-3 text-red-400">Dangerous: sum can change to anything</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Exercises</h2>

        <div className="space-y-6">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.4.1</h4>
            <p>
              Let <Math tex="\sum_{n=0}^{\infty} a_n" /> be an absolutely convergent series of
              real numbers. Let <Math tex="f : \mathbb{N} \to \mathbb{N}" /> be an{' '}
              <em>increasing</em> function (i.e., <Math tex="f(n+1) > f(n)" /> for all{' '}
              <Math tex="n \in \mathbb{N}" />). Show that{' '}
              <Math tex="\sum_{n=0}^{\infty} a_{f(n)}" /> is also an absolutely convergent
              series. (Note: <Math tex="f" /> need not be a bijection here—it could skip
              some terms.)
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.4.2</h4>
            <p>
              Let <Math tex="\sum_{n=1}^{\infty} (-1)^{n+1}/n" /> be the alternating harmonic
              series. Find a rearrangement that converges to 0. (Hint: Alternate between taking
              positive terms until the sum exceeds 0, then negative terms until it goes below 0.)
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.4.3</h4>
            <p>
              Give an example of a convergent series <Math tex="\sum a_n" /> and a bijection{' '}
              <Math tex="f : \mathbb{N} \to \mathbb{N}" /> such that{' '}
              <Math tex="\sum a_{f(n)}" /> diverges.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.4.4</h4>
            <p>
              Suppose <Math tex="\sum_{n=0}^{\infty} a_n" /> is absolutely convergent and{' '}
              <Math tex="f, g : \mathbb{N} \to \mathbb{N}" /> are two different bijections.
              Show that <Math tex="\sum a_{f(n)} = \sum a_{g(n)}" />.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Key Takeaways</h2>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-lg border border-amber-700/50">
          <ul className="list-disc list-inside space-y-3">
            <li>
              A <strong>rearrangement</strong> of a series <Math tex="\sum a_n" /> is a series{' '}
              <Math tex="\sum a_{f(n)}" /> where <Math tex="f" /> is a bijection on{' '}
              <Math tex="\mathbb{N}" />.
            </li>
            <li>
              For <strong>non-negative</strong> convergent series, any rearrangement converges
              to the same sum.
            </li>
            <li>
              For <strong>absolutely convergent</strong> series, any rearrangement converges
              absolutely to the same sum.
            </li>
            <li>
              For <strong>conditionally convergent</strong> series, rearrangements can change
              the sum to any value or cause divergence (Riemann's theorem).
            </li>
            <li>
              The key difference: in absolutely convergent series, positive and negative parts
              both converge; in conditionally convergent series, both diverge to infinity.
            </li>
            <li>
              <strong>Practical lesson:</strong> Only manipulate series freely (changing order,
              grouping) when absolute convergence is guaranteed.
            </li>
          </ul>
        </div>
      </section>

      {/* Looking Ahead */}
      <section>
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Looking Ahead</h2>
        <p className="text-lg leading-relaxed">
          Having established when rearrangements are safe, we will next develop the{' '}
          <strong>root test</strong> and <strong>ratio test</strong>—powerful tools for
          determining whether a series converges absolutely. These tests work by comparing
          the series to geometric series, and are particularly useful for series involving
          factorials, powers, and exponentials.
        </p>
      </section>
    </LessonLayout>
  );
}
