import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <p>
        Throughout this chapter, we have studied sequences <Math latex="(a_n)_{n=0}^{\infty}" /> of real numbers
        and their limits. Some sequences converge to a single limit, while others have multiple limit points
        but don't converge. For instance, the sequence
      </p>
      <MathBlock latex="1.1, 0.1, 1.01, 0.01, 1.001, 0.001, 1.0001, \ldots" />
      <p>
        has two limit points at 0 and 1 (the liminf and limsup respectively), but is not actually convergent.
        However, while this sequence is not convergent, it appears to contain convergent components—it seems
        to be a mixture of two convergent <em>subsequences</em>:
      </p>
      <MathBlock latex="1.1, 1.01, 1.001, \ldots \quad \text{and} \quad 0.1, 0.01, 0.001, \ldots" />
      <p>
        To make this notion precise, we need a formal definition of subsequence.
      </p>

      <Definition id="6.6.1" title="Subsequences">
        <p>
          Let <Math latex="(a_n)_{n=0}^{\infty}" /> and <Math latex="(b_n)_{n=0}^{\infty}" /> be sequences of
          real numbers. We say that <Math latex="(b_n)_{n=0}^{\infty}" /> is a <strong>subsequence</strong> of
          <Math latex="(a_n)_{n=0}^{\infty}" /> if and only if there exists a function <Math latex="f: \mathbb{N} \to \mathbb{N}" />
          which is <strong>strictly increasing</strong> (i.e., <Math latex="f(n+1) > f(n)" /> for all <Math latex="n \in \mathbb{N}" />)
          such that
        </p>
        <MathBlock latex="b_n = a_{f(n)} \quad \text{for all } n \in \mathbb{N}." />
      </Definition>

      <Example id="6.6.2" title="Even-indexed subsequence">
        <p>
          If <Math latex="(a_n)_{n=0}^{\infty}" /> is a sequence, then <Math latex="(a_{2n})_{n=0}^{\infty}" /> is
          a subsequence of <Math latex="(a_n)_{n=0}^{\infty}" />, since the function <Math latex="f: \mathbb{N} \to \mathbb{N}" />
          defined by <Math latex="f(n) := 2n" /> is strictly increasing.
        </p>
        <p className="mt-2">
          Note that we do not assume <Math latex="f" /> to be bijective, although it is necessarily injective
          (since strict monotonicity implies injectivity). More informally, the sequence
        </p>
        <MathBlock latex="a_0, a_2, a_4, a_6, \ldots" />
        <p>is a subsequence of</p>
        <MathBlock latex="a_0, a_1, a_2, a_3, a_4, \ldots" />
      </Example>

      <Example id="6.6.3" title="Subsequences of an alternating sequence">
        <p>
          The two sequences
        </p>
        <MathBlock latex="1.1, 1.01, 1.001, \ldots \quad \text{and} \quad 0.1, 0.01, 0.001, \ldots" />
        <p>
          mentioned earlier are both subsequences of
        </p>
        <MathBlock latex="1.1, 0.1, 1.01, 0.01, 1.001, 0.001, 1.0001, \ldots" />
        <p>
          The first subsequence uses the function <Math latex="f(n) = 2n" /> (selecting even indices),
          while the second uses <Math latex="f(n) = 2n + 1" /> (selecting odd indices).
        </p>
      </Example>

      <Callout type="info" title="Properties of the subsequence relation">
        <p>
          The property of being a subsequence is <strong>reflexive</strong> (every sequence is a subsequence
          of itself, using <Math latex="f(n) = n" />) and <strong>transitive</strong> (a subsequence of a
          subsequence is a subsequence of the original), but <strong>not symmetric</strong>.
        </p>
      </Callout>

      <Theorem
        id="6.6.4"
        title="Lemma: Reflexivity and transitivity of subsequences"
        statement={
          <>
            <p>
              Let <Math latex="(a_n)_{n=0}^{\infty}" />, <Math latex="(b_n)_{n=0}^{\infty}" />, and
              <Math latex="(c_n)_{n=0}^{\infty}" /> be sequences of real numbers. Then:
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li><Math latex="(a_n)_{n=0}^{\infty}" /> is a subsequence of itself.</li>
              <li>
                If <Math latex="(b_n)_{n=0}^{\infty}" /> is a subsequence of <Math latex="(a_n)_{n=0}^{\infty}" />,
                and <Math latex="(c_n)_{n=0}^{\infty}" /> is a subsequence of <Math latex="(b_n)_{n=0}^{\infty}" />,
                then <Math latex="(c_n)_{n=0}^{\infty}" /> is a subsequence of <Math latex="(a_n)_{n=0}^{\infty}" />.
              </li>
            </ol>
          </>
        }
        proof={
          <>
            <p>
              <strong>(i)</strong> The identity function <Math latex="f(n) = n" /> is strictly increasing,
              and <Math latex="a_n = a_{f(n)}" />, so every sequence is a subsequence of itself.
            </p>
            <p className="mt-2">
              <strong>(ii)</strong> Suppose <Math latex="b_n = a_{f(n)}" /> for some strictly increasing
              <Math latex="f" />, and <Math latex="c_n = b_{g(n)}" /> for some strictly increasing <Math latex="g" />.
              Then <Math latex="c_n = a_{f(g(n))}" />. The composition <Math latex="f \circ g" /> is strictly
              increasing since if <Math latex="n < m" />, then <Math latex="g(n) < g(m)" /> (by strict
              monotonicity of <Math latex="g" />), and thus <Math latex="f(g(n)) < f(g(m))" /> (by strict
              monotonicity of <Math latex="f" />).
            </p>
          </>
        }
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Subsequences and Limits</h2>

      <p>
        We now establish the fundamental connection between subsequences and the concepts of limits and limit points.
      </p>

      <Theorem
        id="6.6.5"
        title="Proposition: Subsequences related to limits"
        statement={
          <>
            <p>
              Let <Math latex="(a_n)_{n=0}^{\infty}" /> be a sequence of real numbers, and let <Math latex="L" />
              be a real number. Then the following two statements are logically equivalent:
            </p>
            <ol className="list-[lower-alpha] list-inside mt-2 space-y-1">
              <li>The sequence <Math latex="(a_n)_{n=0}^{\infty}" /> converges to <Math latex="L" />.</li>
              <li>Every subsequence of <Math latex="(a_n)_{n=0}^{\infty}" /> converges to <Math latex="L" />.</li>
            </ol>
          </>
        }
        proof={
          <>
            <p>
              <strong>(a) <Math latex="\Rightarrow" /> (b):</strong> Suppose <Math latex="(a_n)" /> converges
              to <Math latex="L" />. Let <Math latex="(b_n) = (a_{f(n)})" /> be any subsequence, where <Math latex="f" />
              is strictly increasing. We need to show <Math latex="\lim_{n \to \infty} b_n = L" />.
            </p>
            <p className="mt-2">
              Let <Math latex="\varepsilon > 0" />. Since <Math latex="a_n \to L" />, there exists <Math latex="N" />
              such that <Math latex="|a_n - L| < \varepsilon" /> for all <Math latex="n \geq N" />.
            </p>
            <p className="mt-2">
              Since <Math latex="f" /> is strictly increasing, we have <Math latex="f(n) \geq n" /> for all
              <Math latex="n" /> (this can be proved by induction). Therefore, for <Math latex="n \geq N" />,
              we have <Math latex="f(n) \geq n \geq N" />, so <Math latex="|b_n - L| = |a_{f(n)} - L| < \varepsilon" />.
            </p>
            <p className="mt-2">
              <strong>(b) <Math latex="\Rightarrow" /> (a):</strong> This is immediate since <Math latex="(a_n)" />
              is a subsequence of itself.
            </p>
          </>
        }
      />

      <Theorem
        id="6.6.6"
        title="Proposition: Subsequences related to limit points"
        statement={
          <>
            <p>
              Let <Math latex="(a_n)_{n=0}^{\infty}" /> be a sequence of real numbers, and let <Math latex="L" />
              be a real number. Then the following two statements are logically equivalent:
            </p>
            <ol className="list-[lower-alpha] list-inside mt-2 space-y-1">
              <li><Math latex="L" /> is a limit point of <Math latex="(a_n)_{n=0}^{\infty}" />.</li>
              <li>There exists a subsequence of <Math latex="(a_n)_{n=0}^{\infty}" /> which converges to <Math latex="L" />.</li>
            </ol>
          </>
        }
        proof={
          <>
            <p>
              <strong>(a) <Math latex="\Rightarrow" /> (b):</strong> Suppose <Math latex="L" /> is a limit point.
              We construct a subsequence converging to <Math latex="L" /> by defining indices <Math latex="n_j" />
              for each natural number <Math latex="j" /> as follows:
            </p>
            <MathBlock latex="n_j := \min\{n \in \mathbb{N} : |a_n - L| \leq 1/j \text{ and } n > n_{j-1}\}" />
            <p className="mt-2">
              This set is non-empty because <Math latex="L" /> is a limit point (the sequence is continually
              <Math latex="1/j" />-close to <Math latex="L" />). The sequence <Math latex="(a_{n_j})" /> satisfies
              <Math latex="|a_{n_j} - L| \leq 1/j \to 0" />, so it converges to <Math latex="L" />.
            </p>
            <p className="mt-2">
              <strong>(b) <Math latex="\Rightarrow" /> (a):</strong> Suppose <Math latex="(a_{f(n)})" /> converges
              to <Math latex="L" /> for some strictly increasing <Math latex="f" />. Let <Math latex="\varepsilon > 0" />
              and <Math latex="N \in \mathbb{N}" />. Since <Math latex="a_{f(n)} \to L" />, there exists <Math latex="M" />
              such that <Math latex="|a_{f(n)} - L| < \varepsilon" /> for all <Math latex="n \geq M" />.
              Since <Math latex="f" /> is strictly increasing, we can find <Math latex="n" /> large enough that
              <Math latex="f(n) \geq N" /> and <Math latex="n \geq M" />. Then <Math latex="|a_{f(n)} - L| < \varepsilon" />
              with <Math latex="f(n) \geq N" />, showing <Math latex="L" /> is a limit point.
            </p>
          </>
        }
      />

      <Callout type="warning" title="Limits vs. Limit Points">
        <p>
          The above two propositions give a sharp contrast between the notion of a <strong>limit</strong> and
          that of a <strong>limit point</strong>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>When a sequence has a limit <Math latex="L" />, then <em>all</em> subsequences converge to <Math latex="L" />.</li>
          <li>When a sequence has <Math latex="L" /> as a limit point, then only <em>some</em> subsequences converge to <Math latex="L" />.</li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Bolzano-Weierstrass Theorem</h2>

      <p>
        We now prove one of the most important theorems in real analysis, due to Bernard Bolzano (1781–1848)
        and Karl Weierstrass (1815–1897): every bounded sequence has a convergent subsequence.
      </p>

      <Theorem
        id="6.6.8"
        title="Bolzano-Weierstrass Theorem"
        statement={
          <p>
            Let <Math latex="(a_n)_{n=0}^{\infty}" /> be a <strong>bounded sequence</strong> (i.e., there exists
            a real number <Math latex="M > 0" /> such that <Math latex="|a_n| \leq M" /> for all <Math latex="n \in \mathbb{N}" />).
            Then there is at least one subsequence of <Math latex="(a_n)_{n=0}^{\infty}" /> which converges.
          </p>
        }
        proof={
          <>
            <p>
              Let <Math latex="L" /> be the limit superior of the sequence <Math latex="(a_n)_{n=0}^{\infty}" />.
              Since we have <Math latex="-M \leq a_n \leq M" /> for all natural numbers <Math latex="n" />, it
              follows from the comparison principle (Lemma 6.4.13) that <Math latex="-M \leq L \leq M" />.
            </p>
            <p className="mt-2">
              In particular, <Math latex="L" /> is a real number (not <Math latex="+\infty" /> or <Math latex="-\infty" />).
              By Proposition 6.4.12(e), <Math latex="L" /> is thus a limit point of <Math latex="(a_n)_{n=0}^{\infty}" />.
            </p>
            <p className="mt-2">
              Thus by Proposition 6.6.6, there exists a subsequence of <Math latex="(a_n)_{n=0}^{\infty}" /> which
              converges (in fact, it converges to <Math latex="L = \limsup_{n \to \infty} a_n" />).
            </p>
          </>
        }
      />

      <Callout type="info" title="Significance of Bolzano-Weierstrass">
        <p>
          The Bolzano-Weierstrass theorem says that if a sequence is bounded, then eventually it has no choice
          but to converge in some places; it has "no room" to spread out and stop itself from acquiring limit points.
        </p>
        <p className="mt-2">
          This is <strong>not true</strong> for unbounded sequences. For instance, the sequence
          <Math latex="1, 2, 3, \ldots" /> has no convergent subsequences whatsoever (because any subsequence
          would still be unbounded and thus divergent).
        </p>
        <p className="mt-2">
          In the language of topology, this means that the interval <Math latex="\{x \in \mathbb{R} : -M \leq x \leq M\}" />
          is <strong>compact</strong>, whereas an unbounded set such as the real line <Math latex="\mathbb{R}" /> is
          not compact. The distinction between compact and non-compact sets will be very important in later
          chapters—of similar importance to the distinction between finite and infinite sets.
        </p>
      </Callout>

      <Example id="6.6.unbounded" title="Unbounded sequences have no convergent subsequences">
        <p>
          Consider the sequence <Math latex="a_n = n" />, i.e., <Math latex="1, 2, 3, 4, \ldots" />. Any subsequence
          <Math latex="(a_{f(n)})" /> would still satisfy <Math latex="a_{f(n)} = f(n) \geq n" /> (since strictly
          increasing functions satisfy <Math latex="f(n) \geq n" />), and thus the subsequence is unbounded.
        </p>
        <p className="mt-2">
          An unbounded sequence cannot converge to any finite limit, so this sequence has no convergent subsequences.
        </p>
      </Example>

      <Example id="6.6.subsequence_extraction" title="Extracting convergent subsequences">
        <p>
          Consider the bounded sequence <Math latex="a_n = (-1)^n" />, i.e., <Math latex="-1, 1, -1, 1, \ldots" />.
          This sequence does not converge (the limsup is 1 and liminf is -1).
        </p>
        <p className="mt-2">
          However, by Bolzano-Weierstrass, it must have a convergent subsequence. Indeed:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The subsequence <Math latex="(a_{2n}) = 1, 1, 1, \ldots" /> converges to 1.</li>
          <li>The subsequence <Math latex="(a_{2n+1}) = -1, -1, -1, \ldots" /> converges to -1.</li>
        </ul>
        <p className="mt-2">
          These two limits (1 and -1) are precisely the two limit points of the original sequence.
        </p>
      </Example>

      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 6.6.1</p>
          <p className="mt-1">Prove Lemma 6.6.4 (reflexivity and transitivity of the subsequence relation).</p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 6.6.2</p>
          <p className="mt-1">
            Can you find two sequences <Math latex="(a_n)_{n=0}^{\infty}" /> and <Math latex="(b_n)_{n=0}^{\infty}" />
            which are not the same sequence, but such that each is a subsequence of the other?
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 6.6.3</p>
          <p className="mt-1">
            Let <Math latex="(a_n)_{n=0}^{\infty}" /> be a sequence which is not bounded. Show that there exists
            a subsequence <Math latex="(b_n)_{n=0}^{\infty}" /> of <Math latex="(a_n)_{n=0}^{\infty}" /> such that
            <Math latex="\lim_{n \to \infty} 1/b_n" /> exists and is equal to zero.
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            (Hint: for each natural number <Math latex="j" />, introduce the quantity
            <Math latex="n_j := \min\{n \in \mathbb{N} : |a_n| \geq j\}" />, first explaining why this set is
            non-empty. Then set <Math latex="b_j := a_{n_j}" />.)
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 6.6.4</p>
          <p className="mt-1">
            Prove Proposition 6.6.5. (Note that one of the two implications has a very short proof.)
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="font-medium">Exercise 6.6.5</p>
          <p className="mt-1">
            Prove Proposition 6.6.6. (Hint: to show that (a) implies (b), define the numbers <Math latex="n_j" />
            for each natural number <Math latex="j" /> by the formula
            <Math latex="n_j := \min\{n \in \mathbb{N} : |a_n - L| \leq 1/j\}" />, explaining why this set
            is non-empty. Then consider the sequence <Math latex="a_{n_j}" />.)
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li>
            A <strong>subsequence</strong> <Math latex="(b_n)" /> of <Math latex="(a_n)" /> is obtained by selecting
            terms via a strictly increasing function: <Math latex="b_n = a_{f(n)}" />.
          </li>
          <li>
            <strong>Limits and subsequences</strong>: A sequence converges to <Math latex="L" /> if and only if
            <em>every</em> subsequence converges to <Math latex="L" />.
          </li>
          <li>
            <strong>Limit points and subsequences</strong>: <Math latex="L" /> is a limit point if and only if
            <em>some</em> subsequence converges to <Math latex="L" />.
          </li>
          <li>
            <strong>Bolzano-Weierstrass Theorem</strong>: Every bounded sequence has a convergent subsequence.
          </li>
          <li>
            Bolzano-Weierstrass characterizes <strong>compactness</strong> of bounded intervals in <Math latex="\mathbb{R}" />.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>

      <p>
        With the theory of subsequences and the Bolzano-Weierstrass theorem established, we have completed
        our development of the fundamental theory of limits of sequences. In the next section, we return
        to the topic of real exponentiation and use limits to define <Math latex="x^\alpha" /> for all
        real exponents <Math latex="\alpha" />, not just rational ones.
      </p>
    </LessonLayout>
  );
}
