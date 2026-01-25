import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <p>
        We are now ready to sum infinite series. Building on our theory of finite series and limits of
        sequences, we can give a rigorous definition of what it means for an infinite series to converge.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Formal Infinite Series</h2>

      <Definition id="7.2.1" title="Formal infinite series">
        <p>
          A <strong>(formal) infinite series</strong> is any expression of the form
        </p>
        <MathBlock latex="\sum_{n=m}^{\infty} a_n," />
        <p>
          where <Math latex="m" /> is an integer, and <Math latex="a_n" /> is a real number for any integer
          <Math latex="n \geq m" />. We sometimes write this series as
        </p>
        <MathBlock latex="a_m + a_{m+1} + a_{m+2} + \cdots" />
      </Definition>

      <Callout type="warning" title="Formal series are not yet numbers">
        <p>
          At present, the series <Math latex="\sum_{n=m}^{\infty} a_n" /> is only defined <em>formally</em>;
          we have not set this sum equal to any real number. The notation <Math latex="a_m + a_{m+1} + a_{m+2} + \cdots" />
          is designed to look suggestively like a sum, but it is not actually a finite sum because of the
          "<Math latex="\cdots" />" symbol. To rigorously define what the series sums to, we need the concept
          of convergence.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Convergence of Series</h2>

      <Definition id="7.2.2" title="Convergence of series">
        <p>
          Let <Math latex="\sum_{n=m}^{\infty} a_n" /> be a formal infinite series. For any integer
          <Math latex="N \geq m" />, we define the <strong><Math latex="N" />th partial sum</strong>
          <Math latex="S_N" /> of this series to be
        </p>
        <MathBlock latex="S_N := \sum_{n=m}^{N} a_n;" />
        <p>
          of course, <Math latex="S_N" /> is a real number. If the sequence <Math latex="(S_N)_{N=m}^{\infty}" />
          converges to some limit <Math latex="L" /> as <Math latex="N \to \infty" />, then we say that the
          infinite series <Math latex="\sum_{n=m}^{\infty} a_n" /> is <strong>convergent</strong>, and
          <strong>converges to <Math latex="L" /></strong>. We write
        </p>
        <MathBlock latex="L = \sum_{n=m}^{\infty} a_n," />
        <p>
          and say that <Math latex="L" /> is the <strong>sum</strong> of the infinite series. If the partial
          sums <Math latex="S_N" /> diverge, then we say that the infinite series is <strong>divergent</strong>,
          and we do not assign any real number value to that series.
        </p>
      </Definition>

      <Callout type="info" title="Uniqueness of the sum">
        <p>
          Proposition 6.1.7 shows that if a series converges, then it has a unique sum, so it is safe to
          talk about "the sum" <Math latex="L = \sum_{n=m}^{\infty} a_n" /> of a convergent series.
        </p>
      </Callout>

      <Example id="7.2.4a" title="A convergent geometric series">
        <p>
          Consider the formal infinite series
        </p>
        <MathBlock latex="\sum_{n=1}^{\infty} 2^{-n} = 2^{-1} + 2^{-2} + 2^{-3} + \cdots = \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots" />
        <p>
          The partial sums can be verified to equal
        </p>
        <MathBlock latex="S_N = \sum_{n=1}^{N} 2^{-n} = 1 - 2^{-N}" />
        <p>
          by induction. The sequence <Math latex="1 - 2^{-N}" /> converges to 1 as <Math latex="N \to \infty" />,
          and hence
        </p>
        <MathBlock latex="\sum_{n=1}^{\infty} 2^{-n} = 1." />
        <p>In particular, this series is convergent.</p>
      </Example>

      <Example id="7.2.4b" title="A divergent geometric series">
        <p>
          On the other hand, consider the series
        </p>
        <MathBlock latex="\sum_{n=1}^{\infty} 2^n = 2^1 + 2^2 + 2^3 + \cdots = 2 + 4 + 8 + \cdots" />
        <p>
          The partial sums are <Math latex="S_N = \sum_{n=1}^{N} 2^n = 2^{N+1} - 2" />, which is an unbounded
          sequence and hence divergent. Thus the series <Math latex="\sum_{n=1}^{\infty} 2^n" /> is divergent.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Cauchy Criterion for Series</h2>

      <Theorem
        id="7.2.5"
        title="Proposition: Cauchy criterion for series"
        statement={
          <p>
            Let <Math latex="\sum_{n=m}^{\infty} a_n" /> be a formal series of real numbers. Then
            <Math latex="\sum_{n=m}^{\infty} a_n" /> converges if and only if, for every real number
            <Math latex="\varepsilon > 0" />, there exists an integer <Math latex="N \geq m" /> such that
          </p>
        }
      />
      <MathBlock latex="\left|\sum_{n=p}^{q} a_n\right| \leq \varepsilon \quad \text{for all } p, q \geq N." />

      <p className="mt-4">
        This proposition follows from applying the Cauchy criterion for sequences (Proposition 6.4.18)
        to the sequence of partial sums.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Zero Test</h2>

      <Theorem
        id="7.2.6"
        title="Corollary: Zero test"
        statement={
          <>
            <p>
              Let <Math latex="\sum_{n=m}^{\infty} a_n" /> be a convergent series of real numbers. Then we
              must have <Math latex="\lim_{n \to \infty} a_n = 0" />.
            </p>
            <p className="mt-2">
              <strong>Contrapositive:</strong> If <Math latex="\lim_{n \to \infty} a_n" /> is non-zero or
              divergent, then the series <Math latex="\sum_{n=m}^{\infty} a_n" /> is divergent.
            </p>
          </>
        }
        proof={
          <p>
            If the series converges, then by Proposition 7.2.5 with <Math latex="p = q = n" />, for any
            <Math latex="\varepsilon > 0" /> there exists <Math latex="N" /> such that <Math latex="|a_n| \leq \varepsilon" />
            for all <Math latex="n \geq N" />. This means <Math latex="a_n \to 0" />.
          </p>
        }
      />

      <Callout type="warning" title="The zero test is necessary but not sufficient">
        <p>
          The zero test tells us that if <Math latex="a_n \not\to 0" />, then the series diverges.
          However, <strong>the converse is false</strong>: even if <Math latex="a_n \to 0" />, the series
          may still diverge. For example, <Math latex="1/n \to 0" /> but <Math latex="\sum_{n=1}^{\infty} 1/n" />
          (the harmonic series) diverges.
        </p>
      </Callout>

      <Example id="7.2.7" title="Applying the zero test">
        <p>
          The sequence <Math latex="a_n = 1" /> does not converge to 0 as <Math latex="n \to \infty" />,
          so <Math latex="\sum_{n=1}^{\infty} 1" /> is divergent. (Note: the constant sequence
          <Math latex="1, 1, 1, \ldots" /> is a convergent <em>sequence</em>; convergence of series is
          different from convergence of sequences.)
        </p>
        <p className="mt-2">
          Similarly, <Math latex="a_n = (-1)^n" /> diverges and does not converge to zero, so
          <Math latex="\sum_{n=1}^{\infty} (-1)^n" /> is also divergent.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Absolute and Conditional Convergence</h2>

      <Definition id="7.2.8" title="Absolute convergence">
        <p>
          Let <Math latex="\sum_{n=m}^{\infty} a_n" /> be a formal series of real numbers. We say that this
          series is <strong>absolutely convergent</strong> if and only if the series
          <Math latex="\sum_{n=m}^{\infty} |a_n|" /> is convergent.
        </p>
        <p className="mt-2">
          To distinguish convergence from absolute convergence, we sometimes refer to the former as
          <strong>conditional convergence</strong>.
        </p>
      </Definition>

      <Theorem
        id="7.2.9"
        title="Proposition: Absolute convergence test"
        statement={
          <>
            <p>
              Let <Math latex="\sum_{n=m}^{\infty} a_n" /> be a formal series of real numbers. If this series
              is absolutely convergent, then it is also conditionally convergent. Furthermore, we have the
              triangle inequality:
            </p>
            <MathBlock latex="\left|\sum_{n=m}^{\infty} a_n\right| \leq \sum_{n=m}^{\infty} |a_n|." />
          </>
        }
        proof={
          <p>
            By Proposition 7.2.5 applied to <Math latex="\sum |a_n|" />, for any <Math latex="\varepsilon > 0" />
            there exists <Math latex="N" /> such that <Math latex="\sum_{n=p}^{q} |a_n| \leq \varepsilon" /> for
            all <Math latex="p, q \geq N" />. By the triangle inequality for finite series,
            <Math latex="|\sum_{n=p}^{q} a_n| \leq \sum_{n=p}^{q} |a_n| \leq \varepsilon" />, so the original
            series converges by Proposition 7.2.5. The infinite triangle inequality follows by taking limits.
          </p>
        }
      />

      <Callout type="info" title="Absolute vs. conditional convergence">
        <p>
          The converse to Proposition 7.2.9 is <strong>not true</strong>: there exist series which are
          conditionally convergent but not absolutely convergent. We consider conditionally convergent
          series to include absolutely convergent series as a subclass. If we want to say a series converges
          conditionally but <em>not</em> absolutely, we say it is "only conditionally convergent."
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Alternating Series Test</h2>

      <Theorem
        id="7.2.12"
        title="Proposition: Alternating series test"
        statement={
          <p>
            Let <Math latex="(a_n)_{n=m}^{\infty}" /> be a sequence of real numbers which are non-negative
            and decreasing, i.e., <Math latex="a_n \geq 0" /> and <Math latex="a_n \geq a_{n+1}" /> for every
            <Math latex="n \geq m" />. Then the series <Math latex="\sum_{n=m}^{\infty} (-1)^n a_n" /> is
            convergent if and only if the sequence <Math latex="a_n" /> converges to 0 as <Math latex="n \to \infty" />.
          </p>
        }
        proof={
          <>
            <p>
              <strong>(<Math latex="\Rightarrow" />)</strong> From the zero test, if <Math latex="\sum (-1)^n a_n" />
              converges, then <Math latex="(-1)^n a_n \to 0" />, which implies <Math latex="a_n \to 0" />.
            </p>
            <p className="mt-2">
              <strong>(<Math latex="\Leftarrow" />)</strong> Suppose <Math latex="a_n \to 0" />. Let
              <Math latex="S_N = \sum_{n=m}^{N} (-1)^n a_n" />. Observe that
              <Math latex="S_{N+2} = S_N + (-1)^{N+1}(a_{N+1} - a_{N+2})" />. Since <Math latex="a_{N+1} - a_{N+2} \geq 0" />,
              we have <Math latex="S_{N+2} \geq S_N" /> when <Math latex="N" /> is odd and
              <Math latex="S_{N+2} \leq S_N" /> when <Math latex="N" /> is even.
            </p>
            <p className="mt-2">
              For even <Math latex="N" />, by induction <Math latex="S_{N+2k} \leq S_N" /> and
              <Math latex="S_{N+2k+1} \geq S_{N+1} = S_N - a_{N+1}" />. Also,
              <Math latex="S_{N+2k+1} \leq S_{N+2k}" />. Thus <Math latex="S_N - a_{N+1} \leq S_n \leq S_N" />
              for all <Math latex="n \geq N" />. Since <Math latex="a_N \to 0" />, the sequence <Math latex="S_n" />
              is eventually <Math latex="\varepsilon" />-steady for every <Math latex="\varepsilon > 0" />,
              hence convergent.
            </p>
          </>
        }
      />

      <Example id="7.2.13" title="Alternating harmonic series">
        <p>
          The sequence <Math latex="(1/n)_{n=1}^{\infty}" /> is non-negative, decreasing, and converges to zero.
          Thus by the alternating series test, <Math latex="\sum_{n=1}^{\infty} (-1)^n / n" /> is convergent.
        </p>
        <p className="mt-2">
          However, this series is <strong>not absolutely convergent</strong>, because
          <Math latex="\sum_{n=1}^{\infty} 1/n" /> (the harmonic series) diverges. Thus the alternating
          harmonic series is an example of a series that is conditionally convergent but not absolutely
          convergent.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Series Laws</h2>

      <Theorem
        id="7.2.14"
        title="Proposition: Series laws"
        statement={<p>The following properties hold for convergent series:</p>}
      />

      <div className="space-y-4 mt-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-semibold">(a) Sum of convergent series</p>
          <p className="mt-1">
            If <Math latex="\sum_{n=m}^{\infty} a_n" /> converges to <Math latex="x" /> and
            <Math latex="\sum_{n=m}^{\infty} b_n" /> converges to <Math latex="y" />, then
            <Math latex="\sum_{n=m}^{\infty} (a_n + b_n)" /> converges to <Math latex="x + y" />.
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-semibold">(b) Scalar multiplication</p>
          <p className="mt-1">
            If <Math latex="\sum_{n=m}^{\infty} a_n" /> converges to <Math latex="x" /> and <Math latex="c" />
            is a real number, then <Math latex="\sum_{n=m}^{\infty} (c a_n)" /> converges to <Math latex="cx" />.
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-semibold">(c) Splitting series</p>
          <p className="mt-1">
            If one of <Math latex="\sum_{n=m}^{\infty} a_n" /> and <Math latex="\sum_{n=m+k}^{\infty} a_n" />
            converges (for <Math latex="k \geq 0" />), then so does the other, and
          </p>
          <MathBlock latex="\sum_{n=m}^{\infty} a_n = \sum_{n=m}^{m+k-1} a_n + \sum_{n=m+k}^{\infty} a_n." />
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-semibold">(d) Index shifting</p>
          <p className="mt-1">
            If <Math latex="\sum_{n=m}^{\infty} a_n" /> converges to <Math latex="x" />, then
            <Math latex="\sum_{n=m+k}^{\infty} a_{n-k}" /> also converges to <Math latex="x" />.
          </p>
        </div>
      </div>

      <Callout type="info" title="Convergence doesn't depend on initial terms">
        <p>
          From property (c), we see that the convergence of a series does not depend on the first few
          elements (though those elements do influence the value the series converges to). Because of this,
          we usually don't pay much attention to the initial index <Math latex="m" /> of the series.
        </p>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">Telescoping Series</h2>

      <Theorem
        id="7.2.15"
        title="Lemma: Telescoping series"
        statement={
          <p>
            Let <Math latex="(a_n)_{n=0}^{\infty}" /> be a sequence of real numbers which converges to 0,
            i.e., <Math latex="\lim_{n \to \infty} a_n = 0" />. Then the series
            <Math latex="\sum_{n=0}^{\infty} (a_n - a_{n+1})" /> converges to <Math latex="a_0" />.
          </p>
        }
        proof={
          <p>
            The <Math latex="N" />th partial sum is <Math latex="S_N = \sum_{n=0}^{N} (a_n - a_{n+1}) = a_0 - a_{N+1}" />
            (this can be proved by induction—consecutive terms cancel). Since <Math latex="a_{N+1} \to 0" />,
            we have <Math latex="S_N \to a_0" />.
          </p>
        }
      />

      <Example id="7.2.telescope" title="Telescoping series example">
        <p>
          Consider <Math latex="\sum_{n=1}^{\infty} \frac{1}{n(n+1)}" />. Using partial fractions:
          <Math latex="\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}" />.
        </p>
        <p className="mt-2">
          So this is a telescoping series with <Math latex="a_n = 1/n" />. Since <Math latex="1/n \to 0" />,
          the series converges to <Math latex="a_1 = 1" />.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.2.1</p>
          <p className="mt-1">
            Is the series <Math latex="\sum_{n=1}^{\infty} (-1)^n" /> convergent or divergent? Justify your answer.
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.2.2</p>
          <p className="mt-1">
            Prove Proposition 7.2.5. (Hint: use Proposition 6.1.12 and Theorem 6.4.18.)
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.2.3</p>
          <p className="mt-1">
            Use Proposition 7.2.5 to prove Corollary 7.2.6 (the zero test).
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.2.4</p>
          <p className="mt-1">
            Prove Proposition 7.2.9. (Hint: use Proposition 7.2.5 and the triangle inequality for finite series.)
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.2.5</p>
          <p className="mt-1">
            Prove Proposition 7.2.14 (series laws). (Hint: use Theorem 6.1.19 on limit laws.)
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 7.2.6</p>
          <p className="mt-1">
            Prove Lemma 7.2.15. (Hint: work out the partial sums and prove your formula by induction.)
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li>
            An <strong>infinite series</strong> <Math latex="\sum_{n=m}^{\infty} a_n" /> converges to
            <Math latex="L" /> if its partial sums <Math latex="S_N = \sum_{n=m}^{N} a_n" /> converge to
            <Math latex="L" />.
          </li>
          <li>
            <strong>Zero test</strong>: If <Math latex="\sum a_n" /> converges, then <Math latex="a_n \to 0" />.
            The converse is false.
          </li>
          <li>
            <strong>Absolute convergence</strong> (<Math latex="\sum |a_n|" /> converges) implies conditional
            convergence, but not vice versa.
          </li>
          <li>
            <strong>Alternating series test</strong>: <Math latex="\sum (-1)^n a_n" /> converges iff
            <Math latex="a_n" /> is non-negative, decreasing, and converges to 0.
          </li>
          <li>
            <strong>Telescoping series</strong>: <Math latex="\sum (a_n - a_{n+1}) = a_0" /> when <Math latex="a_n \to 0" />.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>

      <p>
        In the next section, we will focus on series with <strong>non-negative terms</strong>, which have
        special properties. We will develop the <strong>comparison test</strong> and study the important
        <strong>geometric series</strong> <Math latex="\sum x^n" />, as well as the <strong>Cauchy condensation
        test</strong> which will allow us to determine whether the harmonic series diverges and the
        <Math latex="p" />-series <Math latex="\sum 1/n^p" /> converges.
      </p>
    </LessonLayout>
  );
}
