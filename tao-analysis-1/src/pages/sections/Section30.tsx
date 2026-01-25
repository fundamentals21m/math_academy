import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed mb-4">
          In this section, we specialize our study of infinite series to consider sums{' '}
          <Math tex="\sum_{n=m}^{\infty} a_n" /> where all the terms <Math tex="a_n" /> are{' '}
          <strong>non-negative</strong>. This situation arises naturally from the absolute
          convergence test, since the absolute value <Math tex="|a_n|" /> is always non-negative.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          When all terms in a series are non-negative, there is no distinction between conditional
          convergence and absolute convergence—the series either converges or it doesn't. This
          simplification allows us to develop powerful convergence tests including the comparison
          test and the Cauchy condensation test.
        </p>
        <Callout type="info">
          <strong>Key insight:</strong> For non-negative series, the partial sums{' '}
          <Math tex="S_N = \sum_{n=m}^{N} a_n" /> are <em>increasing</em>. This means convergence
          is equivalent to the partial sums being bounded above.
        </Callout>
      </section>

      {/* Proposition 7.3.1: Convergence criterion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Convergence of Non-negative Series</h2>

        <Theorem
          id="prop-7.3.1"
          title="Proposition 7.3.1: Convergence criterion for non-negative series"
          statement={
            <>
              Let <Math tex="\sum_{n=m}^{\infty} a_n" /> be a formal series of non-negative real
              numbers. Then this series is convergent if and only if there is a real number{' '}
              <Math tex="M" /> such that
              <MathBlock tex="\sum_{n=m}^{N} a_n \leq M \quad \text{for all integers } N \geq m." />
            </>
          }
          proof={
            <>
              <p className="mb-3">
                Suppose <Math tex="\sum_{n=m}^{\infty} a_n" /> is a series of non-negative numbers.
                Let <Math tex="S_N := \sum_{n=m}^{N} a_n" /> denote the partial sums.
              </p>
              <p className="mb-3">
                Since all terms are non-negative (<Math tex="a_n \geq 0" />), we have
                <MathBlock tex="S_{N+1} = S_N + a_{N+1} \geq S_N" />
                for all <Math tex="N \geq m" />. Thus the sequence <Math tex="(S_N)_{N=m}^{\infty}" />{' '}
                is <em>increasing</em>.
              </p>
              <p className="mb-3">
                By the monotone convergence theorem (Proposition 6.3.8), an increasing sequence
                converges if and only if it is bounded above. Therefore:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>
                  If there exists <Math tex="M" /> such that <Math tex="S_N \leq M" /> for all{' '}
                  <Math tex="N \geq m" />, then <Math tex="(S_N)" /> converges, so the series converges.
                </li>
                <li>
                  Conversely, if the series converges to some limit <Math tex="L" />, then{' '}
                  <Math tex="S_N \to L" />, and since the sequence is increasing, we have{' '}
                  <Math tex="S_N \leq L" /> for all <Math tex="N" />.
                </li>
              </ul>
            </>
          }
        />

        <Callout type="note" className="mt-6">
          This proposition gives us a practical way to prove convergence: find any upper bound for
          the partial sums. Conversely, to prove divergence, we can show the partial sums grow
          without bound.
        </Callout>
      </section>

      {/* Corollary 7.3.2: Comparison test */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">The Comparison Test</h2>

        <Theorem
          id="cor-7.3.2"
          title="Corollary 7.3.2: Comparison test"
          statement={
            <>
              Let <Math tex="\sum_{n=m}^{\infty} a_n" /> and <Math tex="\sum_{n=m}^{\infty} b_n" />{' '}
              be two formal series of real numbers, and suppose that{' '}
              <Math tex="|a_n| \leq b_n" /> for all <Math tex="n \geq m" />. Then if{' '}
              <Math tex="\sum_{n=m}^{\infty} b_n" /> is convergent, then{' '}
              <Math tex="\sum_{n=m}^{\infty} a_n" /> is absolutely convergent, and in fact
              <MathBlock tex="\left| \sum_{n=m}^{\infty} a_n \right| \leq \sum_{n=m}^{\infty} |a_n| \leq \sum_{n=m}^{\infty} b_n." />
            </>
          }
          proof={
            <>
              <p className="mb-3">
                Since <Math tex="|a_n| \leq b_n" /> for all <Math tex="n \geq m" />, and{' '}
                <Math tex="b_n \geq 0" /> (as it dominates <Math tex="|a_n| \geq 0" />), we have
                <MathBlock tex="\sum_{n=m}^{N} |a_n| \leq \sum_{n=m}^{N} b_n" />
                for all <Math tex="N \geq m" />.
              </p>
              <p className="mb-3">
                Since <Math tex="\sum_{n=m}^{\infty} b_n" /> converges to some value{' '}
                <Math tex="B" />, the partial sums <Math tex="\sum_{n=m}^{N} b_n \leq B" />.
                Therefore
                <MathBlock tex="\sum_{n=m}^{N} |a_n| \leq B" />
                for all <Math tex="N \geq m" />.
              </p>
              <p className="mb-3">
                By Proposition 7.3.1, the series <Math tex="\sum_{n=m}^{\infty} |a_n|" /> converges,
                so <Math tex="\sum_{n=m}^{\infty} a_n" /> is absolutely convergent.
              </p>
              <p>
                The triangle inequality for infinite series (Proposition 7.2.9) gives
                <MathBlock tex="\left| \sum_{n=m}^{\infty} a_n \right| \leq \sum_{n=m}^{\infty} |a_n|" />
                and passing to the limit in <Math tex="\sum_{n=m}^{N} |a_n| \leq \sum_{n=m}^{N} b_n" />{' '}
                gives the remaining inequality.
              </p>
            </>
          }
        />

        <Callout type="info" className="mt-6">
          <strong>Contrapositive form:</strong> If <Math tex="|a_n| \leq b_n" /> for all{' '}
          <Math tex="n \geq m" />, and <Math tex="\sum_{n=m}^{\infty} a_n" /> is not absolutely
          convergent, then <Math tex="\sum_{n=m}^{\infty} b_n" /> diverges.
        </Callout>
      </section>

      {/* Lemma 7.3.3: Geometric series */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">The Geometric Series</h2>

        <p className="text-lg leading-relaxed mb-6">
          A particularly useful series for comparison tests is the <strong>geometric series</strong>{' '}
          <Math tex="\sum_{n=0}^{\infty} x^n" />, where <Math tex="x" /> is a real number.
        </p>

        <Theorem
          id="lem-7.3.3"
          title="Lemma 7.3.3: Geometric series"
          statement={
            <>
              Let <Math tex="x" /> be a real number. If <Math tex="|x| \geq 1" />, then the series{' '}
              <Math tex="\sum_{n=0}^{\infty} x^n" /> is divergent. If however{' '}
              <Math tex="|x| < 1" />, then the series is absolutely convergent and
              <MathBlock tex="\sum_{n=0}^{\infty} x^n = \frac{1}{1-x}." />
            </>
          }
          proof={
            <>
              <p className="mb-3">
                <strong>Case 1:</strong> <Math tex="|x| \geq 1" />.
              </p>
              <p className="mb-3">
                If <Math tex="|x| \geq 1" />, then <Math tex="|x^n| = |x|^n \geq 1" /> for all{' '}
                <Math tex="n \geq 0" />. In particular, <Math tex="x^n" /> does not converge to 0
                as <Math tex="n \to \infty" />. By the zero test (Corollary 7.2.6), the series diverges.
              </p>
              <p className="mb-3">
                <strong>Case 2:</strong> <Math tex="|x| < 1" />.
              </p>
              <p className="mb-3">
                We compute the partial sums. For any <Math tex="N \geq 0" />, multiplying the
                partial sum by <Math tex="(1-x)" />:
                <MathBlock tex="(1-x) \sum_{n=0}^{N} x^n = \sum_{n=0}^{N} x^n - \sum_{n=0}^{N} x^{n+1} = 1 - x^{N+1}." />
              </p>
              <p className="mb-3">
                Therefore (for <Math tex="x \neq 1" />):
                <MathBlock tex="S_N = \sum_{n=0}^{N} x^n = \frac{1 - x^{N+1}}{1-x}." />
              </p>
              <p className="mb-3">
                Since <Math tex="|x| < 1" />, we have <Math tex="x^{N+1} \to 0" /> as{' '}
                <Math tex="N \to \infty" /> (by properties of limits and the fact that{' '}
                <Math tex="|x|^{N+1} \to 0" />). Therefore:
                <MathBlock tex="\sum_{n=0}^{\infty} x^n = \lim_{N \to \infty} \frac{1 - x^{N+1}}{1-x} = \frac{1}{1-x}." />
              </p>
              <p>
                Absolute convergence follows since for <Math tex="|x| < 1" />,{' '}
                <Math tex="\sum |x^n| = \sum |x|^n = 1/(1-|x|)" /> converges.
              </p>
            </>
          }
        />

        <Example id="ex-geometric" title="Example: Geometric series applications">
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">
                (a) <Math tex="x = 1/2" />:
              </p>
              <MathBlock tex="\sum_{n=0}^{\infty} \left(\frac{1}{2}\right)^n = \frac{1}{1 - 1/2} = 2." />
            </div>
            <div>
              <p className="font-semibold mb-2">
                (b) <Math tex="x = -1/3" />:
              </p>
              <MathBlock tex="\sum_{n=0}^{\infty} \left(-\frac{1}{3}\right)^n = \frac{1}{1 - (-1/3)} = \frac{1}{4/3} = \frac{3}{4}." />
            </div>
            <div>
              <p className="font-semibold mb-2">
                (c) Starting from <Math tex="n = 1" /> instead of <Math tex="n = 0" />:
              </p>
              <MathBlock tex="\sum_{n=1}^{\infty} x^n = \sum_{n=0}^{\infty} x^n - 1 = \frac{1}{1-x} - 1 = \frac{x}{1-x}." />
              <p className="mt-2">
                For example, <Math tex="\sum_{n=1}^{\infty} (1/2)^n = 1/(1-1/2) - 1 = 1" />.
              </p>
            </div>
          </div>
        </Example>
      </section>

      {/* Proposition 7.3.4: Cauchy condensation test */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">The Cauchy Condensation Test</h2>

        <p className="text-lg leading-relaxed mb-6">
          The Cauchy condensation test provides a powerful criterion for testing convergence of
          series with decreasing non-negative terms. It reduces the question to examining a much
          sparser subsequence.
        </p>

        <Theorem
          id="prop-7.3.4"
          title="Proposition 7.3.4: Cauchy condensation test"
          statement={
            <>
              Let <Math tex="(a_n)_{n=1}^{\infty}" /> be a decreasing sequence of non-negative
              real numbers (so <Math tex="a_n \geq 0" /> and <Math tex="a_{n+1} \leq a_n" /> for
              all <Math tex="n \geq 1" />). Then the series <Math tex="\sum_{n=1}^{\infty} a_n" />{' '}
              is convergent if and only if the series
              <MathBlock tex="\sum_{k=0}^{\infty} 2^k a_{2^k} = a_1 + 2a_2 + 4a_4 + 8a_8 + \cdots" />
              is convergent.
            </>
          }
          proof={
            <>
              <p className="mb-3">
                Let <Math tex="S_N := \sum_{n=1}^{N} a_n" /> be the partial sums of{' '}
                <Math tex="\sum_{n=1}^{\infty} a_n" />, and let{' '}
                <Math tex="T_K := \sum_{k=0}^{K} 2^k a_{2^k}" /> be the partial sums of the
                condensed series. By Proposition 7.3.1, we need to show that <Math tex="(S_N)" />{' '}
                is bounded if and only if <Math tex="(T_K)" /> is bounded.
              </p>
              <p className="mb-3">
                <strong>Claim:</strong> For any natural number <Math tex="K" />, we have
                <MathBlock tex="S_{2^{K+1}-1} \leq T_K \leq 2S_{2^K}." />
              </p>
              <p className="mb-3">
                <em>Proof of claim by induction:</em>
              </p>
              <p className="mb-3">
                <strong>Base case (<Math tex="K = 0" />):</strong> We need{' '}
                <Math tex="S_1 \leq T_0 \leq 2S_1" />, i.e., <Math tex="a_1 \leq a_1 \leq 2a_1" />,
                which is true since <Math tex="a_1 \geq 0" />.
              </p>
              <p className="mb-3">
                <strong>Inductive step:</strong> Suppose the claim holds for <Math tex="K" />.
                We have <Math tex="T_{K+1} = T_K + 2^{K+1} a_{2^{K+1}}" />.
              </p>
              <p className="mb-3">
                For the upper bound:
                <MathBlock tex="S_{2^{K+1}} = S_{2^K} + \sum_{n=2^K+1}^{2^{K+1}} a_n \geq S_{2^K} + 2^K a_{2^{K+1}}" />
                (since there are <Math tex="2^K" /> terms and each is at least{' '}
                <Math tex="a_{2^{K+1}}" /> by monotonicity). Thus{' '}
                <Math tex="2S_{2^{K+1}} \geq 2S_{2^K} + 2^{K+1} a_{2^{K+1}} \geq T_K + 2^{K+1} a_{2^{K+1}} = T_{K+1}" />.
              </p>
              <p className="mb-3">
                For the lower bound:
                <MathBlock tex="S_{2^{K+2}-1} = S_{2^{K+1}-1} + \sum_{n=2^{K+1}}^{2^{K+2}-1} a_n \leq S_{2^{K+1}-1} + 2^{K+1} a_{2^{K+1}}" />
                (since there are <Math tex="2^{K+1}" /> terms and each is at most{' '}
                <Math tex="a_{2^{K+1}}" />). By the induction hypothesis{' '}
                <Math tex="S_{2^{K+1}-1} \leq T_K" />, so{' '}
                <Math tex="S_{2^{K+2}-1} \leq T_K + 2^{K+1} a_{2^{K+1}} = T_{K+1}" />.
              </p>
              <p className="mb-3">
                From the claim: if <Math tex="(S_N)" /> is bounded, then <Math tex="(S_{2^K})" />{' '}
                is bounded, hence <Math tex="(T_K)" /> is bounded. Conversely, if{' '}
                <Math tex="(T_K)" /> is bounded by some <Math tex="M" />, then{' '}
                <Math tex="S_{2^{K+1}-1} \leq M" /> for all <Math tex="K" />. Since{' '}
                <Math tex="2^{K+1} - 1 \geq K + 1" />, this implies <Math tex="(S_N)" /> is bounded.
              </p>
            </>
          }
        />

        <Callout type="note" className="mt-6">
          <strong>Remarkable feature:</strong> The Cauchy condensation test uses only the terms{' '}
          <Math tex="a_1, a_2, a_4, a_8, a_{16}, \ldots" /> (at powers of 2) to determine
          convergence of the entire series. This "sparse sampling" suffices because the terms
          are decreasing.
        </Callout>
      </section>

      {/* Corollary 7.3.7: p-series */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">The p-Series Test</h2>

        <Theorem
          id="cor-7.3.7"
          title="Corollary 7.3.7: p-series convergence"
          statement={
            <>
              Let <Math tex="q > 0" /> be a rational number. Then the series{' '}
              <Math tex="\sum_{n=1}^{\infty} \frac{1}{n^q}" /> is convergent when{' '}
              <Math tex="q > 1" /> and divergent when <Math tex="q \leq 1" />.
            </>
          }
          proof={
            <>
              <p className="mb-3">
                The sequence <Math tex="(1/n^q)_{n=1}^{\infty}" /> is non-negative and decreasing
                (for <Math tex="q > 0" />), so the Cauchy condensation test applies.
              </p>
              <p className="mb-3">
                The series converges if and only if the condensed series
                <MathBlock tex="\sum_{k=0}^{\infty} 2^k \cdot \frac{1}{(2^k)^q} = \sum_{k=0}^{\infty} 2^k \cdot 2^{-kq} = \sum_{k=0}^{\infty} 2^{k(1-q)}" />
                converges.
              </p>
              <p className="mb-3">
                This is a geometric series with ratio <Math tex="x = 2^{1-q}" />. By Lemma 7.3.3,
                it converges if and only if <Math tex="|2^{1-q}| < 1" />.
              </p>
              <p className="mb-3">
                Since <Math tex="2^{1-q} > 0" />, we need <Math tex="2^{1-q} < 1" />, which occurs
                if and only if <Math tex="1 - q < 0" />, i.e., <Math tex="q > 1" />.
              </p>
              <p>
                Therefore <Math tex="\sum_{n=1}^{\infty} 1/n^q" /> converges when{' '}
                <Math tex="q > 1" /> and diverges when <Math tex="q \leq 1" />.
              </p>
            </>
          }
        />

        <Example id="ex-p-series" title="Example: Important p-series">
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">
                (a) The harmonic series (<Math tex="q = 1" />):
              </p>
              <MathBlock tex="\sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \cdots" />
              <p className="mt-2">
                This series <strong>diverges</strong>. Even though <Math tex="1/n \to 0" />, the
                terms don't shrink fast enough for the series to converge.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">
                (b) The series <Math tex="\sum 1/n^2" /> (<Math tex="q = 2" />):
              </p>
              <MathBlock tex="\sum_{n=1}^{\infty} \frac{1}{n^2} = 1 + \frac{1}{4} + \frac{1}{9} + \frac{1}{16} + \cdots" />
              <p className="mt-2">
                This series <strong>converges</strong>. (In fact, it equals{' '}
                <Math tex="\pi^2/6" />, a famous result proved by Euler.)
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">
                (c) The borderline case:
              </p>
              <p>
                The condition <Math tex="q > 1" /> is sharp. For any <Math tex="\epsilon > 0" />,{' '}
                <Math tex="\sum 1/n^{1+\epsilon}" /> converges, but <Math tex="\sum 1/n" /> diverges.
                This illustrates how delicate convergence questions can be.
              </p>
            </div>
          </div>
        </Example>

        <Callout type="info" className="mt-6">
          <strong>The Riemann zeta function:</strong> The quantity{' '}
          <Math tex="\zeta(q) = \sum_{n=1}^{\infty} 1/n^q" /> (when it converges) is called the{' '}
          <em>Riemann zeta function</em>. This function is fundamental in number theory,
          particularly in understanding the distribution of prime numbers. The famous unsolved{' '}
          <em>Riemann Hypothesis</em> concerns the complex zeros of this function.
        </Callout>
      </section>

      {/* Summary and comparison of tests */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Summary of Convergence Tests</h2>

        <div className="bg-slate-800 p-6 rounded-lg">
          <p className="mb-4">
            For series of non-negative terms <Math tex="\sum_{n=m}^{\infty} a_n" /> with{' '}
            <Math tex="a_n \geq 0" />:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Bounded partial sums:</strong> Converges iff partial sums are bounded above
              (Proposition 7.3.1)
            </li>
            <li>
              <strong>Comparison test:</strong> If <Math tex="|a_n| \leq b_n" /> and{' '}
              <Math tex="\sum b_n" /> converges, then <Math tex="\sum a_n" /> converges absolutely
              (Corollary 7.3.2)
            </li>
            <li>
              <strong>Geometric series:</strong> <Math tex="\sum_{n=0}^{\infty} x^n" /> converges
              iff <Math tex="|x| < 1" />, with sum <Math tex="1/(1-x)" /> (Lemma 7.3.3)
            </li>
            <li>
              <strong>Cauchy condensation:</strong> For decreasing <Math tex="a_n \geq 0" />,{' '}
              <Math tex="\sum a_n" /> converges iff <Math tex="\sum 2^k a_{2^k}" /> converges
              (Proposition 7.3.4)
            </li>
            <li>
              <strong>p-series:</strong> <Math tex="\sum 1/n^q" /> converges iff{' '}
              <Math tex="q > 1" /> (Corollary 7.3.7)
            </li>
          </ul>
        </div>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Exercises</h2>

        <div className="space-y-6">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.3.1</h4>
            <p>
              Prove Corollary 7.3.2 (the comparison test). Use Proposition 7.3.1 and the
              triangle inequality for infinite series.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.3.2</h4>
            <p>
              Prove Lemma 7.3.3 (the geometric series formula). For the case{' '}
              <Math tex="|x| < 1" />, compute the partial sums explicitly using the identity{' '}
              <Math tex="(1-x)(1 + x + x^2 + \cdots + x^N) = 1 - x^{N+1}" />.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.3.3</h4>
            <p>
              Determine whether the following series converge or diverge:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><Math tex="\sum_{n=1}^{\infty} \frac{1}{n^{3/2}}" /></li>
              <li><Math tex="\sum_{n=1}^{\infty} \frac{1}{\sqrt{n}}" /></li>
              <li><Math tex="\sum_{n=2}^{\infty} \frac{1}{n \ln n}" /></li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Exercise 7.3.4</h4>
            <p>
              Let <Math tex="(a_n)_{n=1}^{\infty}" /> and <Math tex="(b_n)_{n=1}^{\infty}" />{' '}
              be sequences of non-negative numbers with <Math tex="a_n \leq b_n" /> for all{' '}
              <Math tex="n" />. Show that if <Math tex="\sum b_n" /> converges, then{' '}
              <Math tex="\sum (a_n)^2" /> also converges. (Hint: Eventually <Math tex="a_n < 1" />.)
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
              Non-negative series have <strong>increasing partial sums</strong>, so convergence
              is equivalent to boundedness above.
            </li>
            <li>
              The <strong>comparison test</strong> lets us establish convergence by comparing
              to a known convergent series with larger terms.
            </li>
            <li>
              The <strong>geometric series</strong> <Math tex="\sum x^n = 1/(1-x)" /> for{' '}
              <Math tex="|x| < 1" /> is a fundamental benchmark for comparison.
            </li>
            <li>
              The <strong>Cauchy condensation test</strong> dramatically simplifies convergence
              questions for decreasing sequences to checking only at powers of 2.
            </li>
            <li>
              The <strong>p-series</strong> <Math tex="\sum 1/n^q" /> converges precisely when{' '}
              <Math tex="q > 1" />, providing another important family of benchmark series.
            </li>
            <li>
              The <strong>harmonic series</strong> <Math tex="\sum 1/n" /> diverges—the boundary
              case <Math tex="q = 1" /> is just barely too slow to converge.
            </li>
          </ul>
        </div>
      </section>

      {/* Looking Ahead */}
      <section>
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Looking Ahead</h2>
        <p className="text-lg leading-relaxed">
          Having developed powerful tools for non-negative series, we will next explore{' '}
          <strong>rearrangements of series</strong>—what happens when we sum the terms in a
          different order. For absolutely convergent series, rearrangements don't change the
          sum, but conditionally convergent series can exhibit surprising behavior: the
          Riemann rearrangement theorem shows they can be rearranged to converge to any desired
          value, or even to diverge!
        </p>
      </section>
    </LessonLayout>
  );
}
