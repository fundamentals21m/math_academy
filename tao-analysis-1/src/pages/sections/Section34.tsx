import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      {/* ========== INTRODUCTION ========== */}
      <section className="mb-12">
        <p className="mb-4">
          We now introduce the concept of summation on <strong>countable sets</strong>, which
          will be well-defined provided that the sum is absolutely convergent. This extends
          our theory of infinite series from sequences indexed by natural numbers to series
          indexed by arbitrary countable sets.
        </p>
        <p className="mb-4">
          The key insight is that for absolutely convergent series, the order of summation
          doesn't matter - we can rearrange terms freely. This allows us to define sums
          over sets that have no natural ordering.
        </p>
        <Callout type="info">
          This section connects our work on countability (Section 33) with series theory
          (Sections 28-32), culminating in Fubini's theorem for infinite sums and Riemann's
          remarkable rearrangement theorem.
        </Callout>
      </section>

      {/* ========== SERIES ON COUNTABLE SETS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Series on Countable Sets</h2>

        <Definition
          id="def-8.2.1"
          title="Definition 8.2.1: Series on Countable Sets"
        >
          <p className="mb-2">
            Let <Math>X</Math> be a countable set, and let <Math>{`f: X \\to \\mathbf{R}`}</Math> be
            a function. We say that the series <Math>{`\\sum_{x \\in X} f(x)`}</Math> is{' '}
            <strong>absolutely convergent</strong> iff for some bijection{' '}
            <Math>{`g: \\mathbf{N} \\to X`}</Math>, the sum <Math>{`\\sum_{n=0}^{\\infty} f(g(n))`}</Math> is
            absolutely convergent.
          </p>
          <p className="mb-2">
            We then define the sum of <Math>{`\\sum_{x \\in X} f(x)`}</Math> by the formula:
          </p>
          <MathBlock>{`\\sum_{x \\in X} f(x) = \\sum_{n=0}^{\\infty} f(g(n)).`}</MathBlock>
        </Definition>

        <p className="my-4">
          From Proposition 7.4.3 (rearrangement of absolutely convergent series) and
          Proposition 3.6.4, one can show that these definitions do not depend on the
          choice of <Math>g</Math>, and so are well-defined. Any bijection gives the same answer!
        </p>

        <Example
          id="ex-sum-over-Z"
          title="Example: Summing over the Integers"
        >
          <p className="mb-2">
            Consider <Math>{`\\sum_{n \\in \\mathbf{Z}} 2^{-|n|}`}</Math>. Using the
            bijection <Math>{`g: \\mathbf{N} \\to \\mathbf{Z}`}</Math> from Section 33,
            we can compute:
          </p>
          <MathBlock>{`\\sum_{n \\in \\mathbf{Z}} 2^{-|n|} = 2^0 + 2 \\cdot \\sum_{n=1}^{\\infty} 2^{-n} = 1 + 2 \\cdot 1 = 3.`}</MathBlock>
          <p className="mt-2">
            This works because <Math>{`\\sum |2^{-|n|}| = \\sum 2^{-|n|}`}</Math> converges.
          </p>
        </Example>
      </section>

      {/* ========== FUBINI'S THEOREM ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Fubini's Theorem for Infinite Sums</h2>

        <p className="mb-4">
          One of the most important results about summation on countable sets is the ability
          to interchange the order of summation in double series.
        </p>

        <Theorem
          id="thm-8.2.2"
          title="Theorem 8.2.2: Fubini's Theorem for Infinite Sums"
          statement={
            <>
              Let <Math>{`f: \\mathbf{N} \\times \\mathbf{N} \\to \\mathbf{R}`}</Math> be a function
              such that <Math>{`\\sum_{(n,m) \\in \\mathbf{N} \\times \\mathbf{N}} f(n,m)`}</Math> is
              absolutely convergent. Then we have:
              <MathBlock>{`\\sum_{n=0}^{\\infty} \\left( \\sum_{m=0}^{\\infty} f(n,m) \\right) = \\sum_{(n,m) \\in \\mathbf{N} \\times \\mathbf{N}} f(n,m) = \\sum_{m=0}^{\\infty} \\left( \\sum_{n=0}^{\\infty} f(n,m) \\right).`}</MathBlock>
            </>
          }
          proof={
            <>
              <p className="mb-2">
                <em>(Sketch)</em> The second equality follows from Proposition 7.4.3 (rearrangement).
                We prove the first equality for the non-negative case.
              </p>
              <p className="mb-2">
                Write <Math>{`L := \\sum_{(n,m) \\in \\mathbf{N} \\times \\mathbf{N}} f(n,m)`}</Math>.
                For any finite set <Math>{`X \\subset \\mathbf{N} \\times \\mathbf{N}`}</Math>,
                we have <Math>{`\\sum_{(n,m) \\in X} f(n,m) \\le L`}</Math>.
              </p>
              <p className="mb-2">
                In particular, for any <Math>n, M</Math>:
                <Math>{`\\sum_{m=0}^{M} f(n,m) \\le L`}</Math>, so{' '}
                <Math>{`\\sum_{m=0}^{\\infty} f(n,m)`}</Math> converges for each <Math>n</Math>.
              </p>
              <p className="mb-2">
                Taking suprema over <Math>M</Math> and then summing over <Math>N</Math>:
              </p>
              <MathBlock>{`\\sum_{n=0}^{N} \\sum_{m=0}^{\\infty} f(n,m) \\le L.`}</MathBlock>
              <p className="my-2">
                Thus <Math>{`\\sum_{n=0}^{\\infty} \\sum_{m=0}^{\\infty} f(n,m) \\le L`}</Math>.
              </p>
              <p className="mb-2">
                For the reverse inequality, given <Math>{`\\varepsilon > 0`}</Math>, find finite{' '}
                <Math>{`X \\subset \\mathbf{N} \\times \\mathbf{N}`}</Math> with{' '}
                <Math>{`\\sum_{(n,m) \\in X} f(n,m) \\ge L - \\varepsilon`}</Math>. Since <Math>X</Math> is
                finite, it's contained in some <Math>{`\\{0, \\ldots, N\\} \\times \\{0, \\ldots, M\\}`}</Math>,
                giving <Math>{`\\sum_{n=0}^{\\infty} \\sum_{m=0}^{\\infty} f(n,m) \\ge L - \\varepsilon`}</Math>.
              </p>
              <p>
                The general case follows by decomposing <Math>f</Math> into positive and negative parts.
              </p>
            </>
          }
        />

        <Callout type="warning">
          <strong>Absolute convergence is essential!</strong> Recall from Example 1.2.5 in
          the introduction that without absolute convergence, switching the order of summation
          can change the answer. Fubini's theorem guarantees this doesn't happen when the
          double sum is absolutely convergent.
        </Callout>
      </section>

      {/* ========== CHARACTERIZATION OF ABSOLUTE CONVERGENCE ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Characterizing Absolute Convergence</h2>

        <Theorem
          id="lem-8.2.3"
          title="Lemma 8.2.3"
          statement={
            <>
              Let <Math>X</Math> be an at most countable set, and let{' '}
              <Math>{`f: X \\to \\mathbf{R}`}</Math> be a function. Then the
              series <Math>{`\\sum_{x \\in X} f(x)`}</Math> is absolutely convergent if and only if:
              <MathBlock>{`\\sup \\left\\{ \\sum_{x \\in A} |f(x)| : A \\subseteq X, A \\text{ finite} \\right\\} < \\infty.`}</MathBlock>
            </>
          }
          proof={
            <>
              <p className="mb-2">
                (<Math>{`\\Rightarrow`}</Math>) If <Math>{`\\sum_{x \\in X} |f(x)|`}</Math> converges
                to some <Math>L</Math>, then for any finite <Math>{`A \\subseteq X`}</Math>,
                we have <Math>{`\\sum_{x \\in A} |f(x)| \\le L`}</Math>.
              </p>
              <p>
                (<Math>{`\\Leftarrow`}</Math>) If the supremum is some finite <Math>M</Math>, then
                for any enumeration <Math>{`g: \\mathbf{N} \\to X`}</Math>, the partial sums{' '}
                <Math>{`\\sum_{n=0}^{N} |f(g(n))|`}</Math> are bounded by <Math>M</Math>, so
                the series converges by the monotone convergence theorem.
              </p>
            </>
          }
        />

        <p className="my-4">
          This characterization is important because it doesn't require choosing a specific
          enumeration of <Math>X</Math>. It also inspires the following extension to possibly
          uncountable sets.
        </p>
      </section>

      {/* ========== EXTENSION TO UNCOUNTABLE SETS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Extension to Uncountable Sets</h2>

        <Definition
          id="def-8.2.4"
          title="Definition 8.2.4: Absolute Convergence on Arbitrary Sets"
        >
          <p className="mb-2">
            Let <Math>X</Math> be a set (which could be uncountable), and let{' '}
            <Math>{`f: X \\to \\mathbf{R}`}</Math> be a function. We say that the
            series <Math>{`\\sum_{x \\in X} f(x)`}</Math> is <strong>absolutely convergent</strong> iff:
          </p>
          <MathBlock>{`\\sup \\left\\{ \\sum_{x \\in A} |f(x)| : A \\subseteq X, A \\text{ finite} \\right\\} < \\infty.`}</MathBlock>
        </Definition>

        <p className="my-4">
          But what value should we assign to such a series? The following lemma shows that
          we can always reduce to the countable case.
        </p>

        <Theorem
          id="lem-8.2.5"
          title="Lemma 8.2.5"
          statement={
            <>
              Let <Math>X</Math> be a set (which could be uncountable), and let{' '}
              <Math>{`f: X \\to \\mathbf{R}`}</Math> be a function such that the
              series <Math>{`\\sum_{x \\in X} f(x)`}</Math> is absolutely convergent. Then the
              set <Math>{`\\{x \\in X : f(x) \\ne 0\\}`}</Math> is at most countable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                Let <Math>{`M := \\sup\\{\\sum_{x \\in A} |f(x)| : A \\subseteq X, A \\text{ finite}\\}`}</Math>.
              </p>
              <p className="mb-2">
                For each positive integer <Math>n</Math>, consider the set{' '}
                <Math>{`S_n := \\{x \\in X : |f(x)| > 1/n\\}`}</Math>. If <Math>{`S_n`}</Math> had
                more than <Math>{`Mn`}</Math> elements, say <Math>{`x_1, \\ldots, x_k`}</Math> with{' '}
                <Math>{`k > Mn`}</Math>, then:
              </p>
              <MathBlock>{`\\sum_{i=1}^{k} |f(x_i)| > k \\cdot \\frac{1}{n} > M,`}</MathBlock>
              <p className="my-2">
                contradicting the definition of <Math>M</Math>. Thus <Math>{`S_n`}</Math> is finite
                with at most <Math>{`Mn`}</Math> elements.
              </p>
              <p>
                Since <Math>{`\\{x \\in X : f(x) \\ne 0\\} = \\bigcup_{n=1}^{\\infty} S_n`}</Math>,
                and countable unions of finite sets are at most countable (Exercise 8.1.9),
                the set of non-zero terms is at most countable.
              </p>
            </>
          }
        />

        <p className="my-4">
          Because of Lemma 8.2.5, we can define the value of <Math>{`\\sum_{x \\in X} f(x)`}</Math> for
          any absolutely convergent series on an uncountable set <Math>X</Math> by:
        </p>
        <MathBlock>{`\\sum_{x \\in X} f(x) := \\sum_{x \\in X: f(x) \\ne 0} f(x),`}</MathBlock>
        <p className="my-4">
          since we have replaced a sum on an uncountable set by a sum on the countable
          set <Math>{`\\{x \\in X : f(x) \\ne 0\\}`}</Math>.
        </p>
      </section>

      {/* ========== SERIES LAWS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Laws for Absolutely Convergent Series</h2>

        <Theorem
          id="prop-8.2.6"
          title="Proposition 8.2.6: Absolutely Convergent Series Laws"
          statement={
            <>
              Let <Math>X</Math> be an arbitrary set (possibly uncountable), and
              let <Math>{`f: X \\to \\mathbf{R}`}</Math> and <Math>{`g: X \\to \\mathbf{R}`}</Math> be
              functions such that <Math>{`\\sum_{x \\in X} f(x)`}</Math> and{' '}
              <Math>{`\\sum_{x \\in X} g(x)`}</Math> are both absolutely convergent.
              <p className="mt-2"><strong>(a) Sum rule:</strong></p>
              <MathBlock>{`\\sum_{x \\in X} (f(x) + g(x)) = \\sum_{x \\in X} f(x) + \\sum_{x \\in X} g(x).`}</MathBlock>
              <p className="mt-2"><strong>(b) Scalar multiplication:</strong> For any <Math>{`c \\in \\mathbf{R}`}</Math>,</p>
              <MathBlock>{`\\sum_{x \\in X} cf(x) = c \\sum_{x \\in X} f(x).`}</MathBlock>
              <p className="mt-2"><strong>(c) Splitting:</strong> If <Math>{`X = X_1 \\cup X_2`}</Math> for disjoint <Math>{`X_1, X_2`}</Math>,</p>
              <MathBlock>{`\\sum_{x \\in X} f(x) = \\sum_{x \\in X_1} f(x) + \\sum_{x \\in X_2} f(x).`}</MathBlock>
              <p className="mt-2"><strong>(d) Reindexing:</strong> If <Math>{`\\phi: Y \\to X`}</Math> is a bijection,</p>
              <MathBlock>{`\\sum_{y \\in Y} f(\\phi(y)) = \\sum_{x \\in X} f(x).`}</MathBlock>
            </>
          }
          proof={
            <>
              These all follow from the corresponding results for ordinary series (Chapter 7)
              and the definition of series on countable sets. The key is that we can always
              reduce to the countable case via Lemma 8.2.5.
            </>
          }
        />
      </section>

      {/* ========== CONDITIONALLY CONVERGENT SERIES ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Danger of Conditional Convergence</h2>

        <p className="mb-4">
          Recall from Example 7.4.4 that if a series is conditionally convergent but not
          absolutely convergent, then rearrangements can change its value. We now analyze
          this phenomenon more deeply.
        </p>

        <Theorem
          id="lem-8.2.7"
          title="Lemma 8.2.7"
          statement={
            <>
              Let <Math>{`\\sum_{n=0}^{\\infty} a_n`}</Math> be a series of real numbers which is
              conditionally convergent but not absolutely convergent. Define the sets{' '}
              <Math>{`A_+ := \\{n \\in \\mathbf{N} : a_n \\ge 0\\}`}</Math> and{' '}
              <Math>{`A_- := \\{n \\in \\mathbf{N} : a_n < 0\\}`}</Math>. Then both of the series{' '}
              <Math>{`\\sum_{n \\in A_+} a_n`}</Math> and <Math>{`\\sum_{n \\in A_-} a_n`}</Math> are
              not conditionally convergent (and thus not absolutely convergent either).
            </>
          }
          proof={
            <>
              <p className="mb-2">
                Suppose for contradiction that <Math>{`\\sum_{n \\in A_+} a_n`}</Math> converges
                to some <Math>L_+</Math>. Since <Math>{`\\sum_{n=0}^{\\infty} a_n`}</Math> converges
                to some <Math>L</Math>, we would have:
              </p>
              <MathBlock>{`\\sum_{n \\in A_-} a_n = L - L_+`}</MathBlock>
              <p className="my-2">
                But then <Math>{`\\sum_{n=0}^{\\infty} |a_n| = L_+ + |L - L_+|`}</Math> would
                converge, contradicting that the series is not absolutely convergent.
              </p>
              <p>
                A similar argument shows <Math>{`\\sum_{n \\in A_-} a_n`}</Math> diverges.
              </p>
            </>
          }
        />

        <p className="my-4">
          This lemma is the key to the remarkable Riemann rearrangement theorem.
        </p>
      </section>

      {/* ========== RIEMANN REARRANGEMENT THEOREM ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Riemann's Rearrangement Theorem</h2>

        <Theorem
          id="thm-8.2.8"
          title="Theorem 8.2.8: Riemann's Rearrangement Theorem"
          statement={
            <>
              Let <Math>{`\\sum_{n=0}^{\\infty} a_n`}</Math> be a series which is conditionally
              convergent, but not absolutely convergent, and let <Math>L</Math> be any real number.
              Then there exists a bijection <Math>{`f: \\mathbf{N} \\to \\mathbf{N}`}</Math> such
              that <Math>{`\\sum_{m=0}^{\\infty} a_{f(m)}`}</Math> converges conditionally to <Math>L</Math>.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                <em>(Sketch)</em> By Lemma 8.2.7, both <Math>{`\\sum_{n \\in A_+} a_n`}</Math> and{' '}
                <Math>{`\\sum_{n \\in A_-} a_n`}</Math> diverge, so <Math>{`A_+`}</Math> and{' '}
                <Math>{`A_-`}</Math> are both infinite.
              </p>
              <p className="mb-2">
                Let <Math>{`f_+: \\mathbf{N} \\to A_+`}</Math> and{' '}
                <Math>{`f_-: \\mathbf{N} \\to A_-`}</Math> be the increasing bijections
                (from Proposition 8.1.5).
              </p>
              <p className="mb-2">
                <strong>The algorithm:</strong> We build a sequence <Math>{`n_0, n_1, n_2, \\ldots`}</Math> recursively:
              </p>
              <ul className="list-disc ml-6 mb-2">
                <li>
                  If the partial sum <Math>{`\\sum_{i < j} a_{n_i} < L`}</Math>, set{' '}
                  <Math>{`n_j := \\min\\{n \\in A_+ : n \\ne n_i \\text{ for all } i < j\\}`}</Math>.
                </li>
                <li>
                  If the partial sum <Math>{`\\sum_{i < j} a_{n_i} \\ge L`}</Math>, set{' '}
                  <Math>{`n_j := \\min\\{n \\in A_- : n \\ne n_i \\text{ for all } i < j\\}`}</Math>.
                </li>
              </ul>
              <p className="mb-2">
                Intuitively: add positive terms when below <Math>L</Math>, negative terms when
                above <Math>L</Math>.
              </p>
              <p className="mb-2">
                One verifies: (1) the map <Math>{`j \\mapsto n_j`}</Math> is injective and surjective,
                (2) both cases occur infinitely often (since both sums diverge),
                (3) <Math>{`\\lim_{j \\to \\infty} a_{n_j} = 0`}</Math> (since <Math>{`a_n \\to 0`}</Math>),
                and (4) <Math>{`\\lim_{j \\to \\infty} \\sum_{i < j} a_{n_i} = L`}</Math>.
              </p>
              <p>
                Setting <Math>{`f(j) := n_j`}</Math> gives the desired bijection.
              </p>
            </>
          }
        />

        <Callout type="info">
          <strong>A remarkable result!</strong> This theorem says that conditionally convergent
          series are extremely ill-behaved: by rearranging, you can make them converge to{' '}
          <em>any</em> real number you want. You can even make them diverge to{' '}
          <Math>{`+\\infty`}</Math> or <Math>{`-\\infty`}</Math> (see Exercise 8.2.6).
        </Callout>

        <Example
          id="ex-riemann"
          title="Example: Rearranging the Alternating Harmonic Series"
        >
          <p className="mb-2">
            The alternating harmonic series <Math>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots`}</Math> converges
            to <Math>{`\\ln 2 \\approx 0.693`}</Math>.
          </p>
          <p className="mb-2">
            By Riemann's theorem, we can rearrange it to converge to any value. For instance,
            the rearrangement that takes two positive terms for each negative term:
          </p>
          <MathBlock>{`1 + \\frac{1}{3} - \\frac{1}{2} + \\frac{1}{5} + \\frac{1}{7} - \\frac{1}{4} + \\cdots`}</MathBlock>
          <p className="mt-2">
            converges to <Math>{`\\frac{3}{2} \\ln 2 \\approx 1.04`}</Math>, a different value!
          </p>
        </Example>
      </section>

      {/* ========== EXERCISES ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.2.1</p>
            <p>
              Prove Lemma 8.2.3. (Hint: you may find Exercise 3.6.3 to be useful.)
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.2.2</p>
            <p>
              Prove Lemma 8.2.5. (Hint: show that the sets{' '}
              <Math>{`\\{x \\in X : |f(x)| > 1/n\\}`}</Math> are finite with cardinality
              at most <Math>Mn</Math> for every positive integer <Math>n</Math>.
              Then use Exercise 8.1.9.)
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.2.3</p>
            <p>
              Prove Proposition 8.2.6. (Hint: use the results from Chapter 7.)
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.2.4</p>
            <p>
              Prove Lemma 8.2.7. (Hint: prove by contradiction, and use limit laws.)
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.2.5</p>
            <p>
              Explain the gaps marked (why?) in the proof of Theorem 8.2.8.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.2.6</p>
            <p>
              Let <Math>{`\\sum_{n=0}^{\\infty} a_n`}</Math> be a series which is conditionally
              convergent but not absolutely convergent. Show that there exists a bijection{' '}
              <Math>{`f: \\mathbf{N} \\to \\mathbf{N}`}</Math> such that{' '}
              <Math>{`\\sum_{m=0}^{\\infty} a_{f(m)}`}</Math> diverges to <Math>{`+\\infty`}</Math>.
            </p>
          </div>
        </div>
      </section>

      {/* ========== KEY TAKEAWAYS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Series on Countable Sets
            </h3>
            <p className="text-sm">
              Absolutely convergent series can be summed over any countable index set,
              independent of the enumeration chosen.
            </p>
          </div>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Fubini's Theorem
            </h3>
            <p className="text-sm">
              For absolutely convergent double series, the order of summation can be
              interchanged: <Math>{`\\sum_n \\sum_m = \\sum_m \\sum_n`}</Math>.
            </p>
          </div>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
            <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
              Uncountable Sets
            </h3>
            <p className="text-sm">
              An absolutely convergent series on an uncountable set has at most countably
              many non-zero terms, so it reduces to the countable case.
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
              Riemann's Theorem
            </h3>
            <p className="text-sm">
              Conditionally (but not absolutely) convergent series can be rearranged
              to converge to any value, or to diverge.
            </p>
          </div>
        </div>
      </section>

      {/* ========== LOOKING AHEAD ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
        <p className="mb-4">
          In the next section, we will prove that the real numbers are <em>uncountable</em> using
          Cantor's famous diagonal argument. This will reveal a fundamental distinction between
          the rationals and the reals: while both are infinite, the reals are "more infinite"
          than the rationals.
        </p>
        <p>
          Following that, we will study the axiom of choice and well-ordering, completing
          our foundational treatment of infinite sets before moving on to continuous functions.
        </p>
      </section>
    </LessonLayout>
  );
}
