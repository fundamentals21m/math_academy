import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        We have defined Cauchy sequences - sequences that "want" to converge. But to define real
        numbers as limits of such sequences, we need to know when two Cauchy sequences should give
        the "same" limit, without first knowing what that limit is. This leads to the concept
        of <strong>equivalent Cauchy sequences</strong>.
      </p>

      <Callout type="info">
        <strong>The Challenge</strong>
        <p className="mt-2">
          Consider two sequences both approaching <Math tex="\sqrt{2}" />:
        </p>
        <MathBlock tex="1.4, \; 1.41, \; 1.414, \; 1.4142, \; \ldots \quad \text{and} \quad 1.5, \; 1.42, \; 1.415, \; 1.4143, \; \ldots" />
        <p className="mt-2">
          Both seem to converge to the same number, but we cannot say they have "the same limit"
          since we haven't defined <Math tex="\sqrt{2}" /> yet. We need a way to recognize equivalent
          sequences without referring to their limit.
        </p>
      </Callout>

      {/* ε-close sequences */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Comparing Sequences: <Math tex="\varepsilon" />-Closeness
      </h2>

      <p className="text-dark-200 mb-6">
        We use a similar approach to defining Cauchy sequences: build up from the notion
        of <Math tex="\varepsilon" />-closeness between individual rationals.
      </p>

      <Definition title="5.2.1 (ε-Close Sequences)">
        <p className="mb-3">
          Let <Math tex="(a_n)_{n=0}^{\infty}" /> and <Math tex="(b_n)_{n=0}^{\infty}" /> be two sequences,
          and let <Math tex="\varepsilon > 0" />. We say that the sequence <Math tex="(a_n)_{n=0}^{\infty}" /> is <strong><Math tex="\varepsilon" />-close</strong> to <Math tex="(b_n)_{n=0}^{\infty}" /> iff <Math tex="a_n" /> is <Math tex="\varepsilon" />-close
          to <Math tex="b_n" /> for each <Math tex="n \in \mathbb{N}" />.
        </p>
        <p>
          In other words, the sequence <Math tex="a_0, a_1, a_2, \ldots" /> is <Math tex="\varepsilon" />-close to
          the sequence <Math tex="b_0, b_1, b_2, \ldots" /> iff <Math tex="|a_n - b_n| \leq \varepsilon" /> for
          all <Math tex="n = 0, 1, 2, \ldots" />
        </p>
      </Definition>

      <Example title="5.2.2 (ε-Close Sequences)">
        <p className="mb-3">The two sequences:</p>
        <MathBlock tex="1, \; -1, \; 1, \; -1, \; 1, \; \ldots \quad \text{and} \quad 1.1, \; -1.1, \; 1.1, \; -1.1, \; 1.1, \; \ldots" />
        <p className="mt-3">
          are 0.1-close to each other. (Note however that neither of them are 0.1-steady - being
          close to <em>another</em> sequence is different from being steady <em>within</em> a sequence.)
        </p>
      </Example>

      <Definition title="5.2.3 (Eventually ε-Close Sequences)">
        <p className="mb-3">
          Let <Math tex="(a_n)_{n=0}^{\infty}" /> and <Math tex="(b_n)_{n=0}^{\infty}" /> be two sequences,
          and let <Math tex="\varepsilon > 0" />. We say that <Math tex="(a_n)_{n=0}^{\infty}" /> is <strong>eventually <Math tex="\varepsilon" />-close</strong> to <Math tex="(b_n)_{n=0}^{\infty}" /> iff there
          exists an <Math tex="N \geq 0" /> such that the sequences <Math tex="(a_n)_{n=N}^{\infty}" /> and <Math tex="(b_n)_{n=N}^{\infty}" /> are <Math tex="\varepsilon" />-close.
        </p>
        <p>
          In other words, <Math tex="a_0, a_1, a_2, \ldots" /> is eventually <Math tex="\varepsilon" />-close
          to <Math tex="b_0, b_1, b_2, \ldots" /> iff there exists an <Math tex="N \geq 0" /> such
          that <Math tex="|a_n - b_n| \leq \varepsilon" /> for all <Math tex="n \geq N" />.
        </p>
      </Definition>

      <Example title="5.2.5 (Eventually ε-Close Sequences)">
        <p className="mb-3">The two sequences:</p>
        <MathBlock tex="1.1, \; 1.01, \; 1.001, \; 1.0001, \; \ldots \quad \text{and} \quad 0.9, \; 0.99, \; 0.999, \; 0.9999, \; \ldots" />
        <p className="mt-3">
          are <strong>not</strong> 0.1-close (because the first elements, 1.1 and 0.9, differ by 0.2,
          which exceeds 0.1).
        </p>
        <p className="mt-3">
          However, the sequences <strong>are</strong> eventually 0.1-close: starting from the second
          elements onwards, 1.01 and 0.99 differ by only 0.02, and subsequent terms get even closer.
        </p>
        <p className="mt-3">
          Similarly, these sequences are eventually 0.01-close (starting from the third element),
          eventually 0.001-close, and so forth.
        </p>
      </Example>

      {/* Equivalent Sequences */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Equivalent Sequences</h2>

      <Definition title="5.2.6 (Equivalent Sequences)">
        <p className="mb-3">
          Two sequences <Math tex="(a_n)_{n=0}^{\infty}" /> and <Math tex="(b_n)_{n=0}^{\infty}" /> are <strong>equivalent</strong> iff
          for each rational <Math tex="\varepsilon > 0" />, the sequences <Math tex="(a_n)_{n=0}^{\infty}" /> and <Math tex="(b_n)_{n=0}^{\infty}" /> are
          eventually <Math tex="\varepsilon" />-close.
        </p>
        <p>
          In other words, <Math tex="a_0, a_1, a_2, \ldots" /> and <Math tex="b_0, b_1, b_2, \ldots" /> are
          equivalent iff for every rational <Math tex="\varepsilon > 0" />, there exists
          an <Math tex="N \geq 0" /> such that <Math tex="|a_n - b_n| \leq \varepsilon" /> for
          all <Math tex="n \geq N" />.
        </p>
      </Definition>

      <Callout type="note">
        <strong>Rational vs Real <Math tex="\varepsilon" /></strong>
        <p className="mt-2">
          As with Definition 5.1.8, the quantity <Math tex="\varepsilon > 0" /> is currently restricted
          to be a positive <em>rational</em>, since real numbers have not yet been constructed. However,
          we shall eventually see that it makes no difference whether <Math tex="\varepsilon" /> ranges
          over positive rationals or positive reals (see Exercise 6.1.10).
        </p>
      </Callout>

      {/* The 0.999... = 1.000... Proposition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        A Fundamental Example: <Math tex="0.999\ldots = 1.000\ldots" />
      </h2>

      <p className="text-dark-200 mb-6">
        From Definition 5.2.6, the two sequences in Example 5.2.5 appear to be equivalent. We now
        prove this rigorously, establishing one of the most famous (and sometimes controversial)
        facts in mathematics.
      </p>

      <Theorem
        title="5.2.8 (1.000... = 0.999...)"
        proof={
          <div className="space-y-4">
            <p>
              We need to prove that for every <Math tex="\varepsilon > 0" />, the two
              sequences <Math tex="(a_n)_{n=1}^{\infty}" /> and <Math tex="(b_n)_{n=1}^{\infty}" /> are
              eventually <Math tex="\varepsilon" />-close. So fix an <Math tex="\varepsilon > 0" />.
            </p>
            <p>
              We need to find an <Math tex="N > 0" /> such that:
            </p>
            <MathBlock tex="|a_n - b_n| \leq \varepsilon \quad \text{for all } n \geq N" />
            <p>
              However, we have:
            </p>
            <MathBlock tex="|a_n - b_n| = |(1 + 10^{-n}) - (1 - 10^{-n})| = 2 \times 10^{-n}" />
            <p>
              Since <Math tex="10^{-n}" /> is a decreasing function of <Math tex="n" /> (i.e., <Math tex="10^{-m} < 10^{-n}" /> whenever <Math tex="m > n" />),
              and <Math tex="n \geq N" />, we have <Math tex="2 \times 10^{-n} \leq 2 \times 10^{-N}" />.
            </p>
            <p>
              Thus:
            </p>
            <MathBlock tex="|a_n - b_n| \leq 2 \times 10^{-N} \quad \text{for all } n \geq N" />
            <p>
              So to obtain <Math tex="|a_n - b_n| \leq \varepsilon" /> for all <Math tex="n \geq N" />,
              it suffices to choose <Math tex="N" /> so that <Math tex="2 \times 10^{-N} \leq \varepsilon" />.
            </p>
            <p>
              This is easy using logarithms, but we haven't developed them yet. So we use a cruder method:
              First, <Math tex="10^N > N" /> for any <Math tex="N \geq 1" /> (see Exercise 4.3.5).
              Thus <Math tex="10^{-N} \leq 1/N" />, and so <Math tex="2 \times 10^{-N} \leq 2/N" />.
            </p>
            <p>
              To get <Math tex="2 \times 10^{-N} \leq \varepsilon" />, it suffices to
              choose <Math tex="N" /> so that <Math tex="2/N \leq \varepsilon" />, i.e., <Math tex="N \geq 2/\varepsilon" />.
              By Proposition 4.4.1, we can always choose such an <Math tex="N" />.
            </p>
          </div>
        }
      >
        <p className="mb-3">
          Let <Math tex="(a_n)_{n=1}^{\infty}" /> and <Math tex="(b_n)_{n=1}^{\infty}" /> be the sequences
          defined by:
        </p>
        <MathBlock tex="a_n = 1 + 10^{-n} \quad \text{and} \quad b_n = 1 - 10^{-n}" />
        <p className="mt-3">
          Then the sequences <Math tex="a_n" /> and <Math tex="b_n" /> are equivalent.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>What This Really Says</strong>
        <p className="mt-2">
          This proposition, in decimal notation, asserts that <Math tex="1.0000\ldots = 0.9999\ldots" />.
          The sequences <Math tex="1.1, 1.01, 1.001, \ldots" /> and <Math tex="0.9, 0.99, 0.999, \ldots" /> both
          approach 1, and our definition of equivalence captures this without needing to know that
          the limit is 1. See Proposition B.2.3 for a more detailed discussion of decimal representations.
        </p>
      </Callout>

      {/* Properties of Equivalence */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Equivalence</h2>

      <p className="text-dark-200 mb-6">
        For equivalence of Cauchy sequences to serve as the basis for defining real numbers, it must
        behave like an equivalence relation: it should be reflexive, symmetric, and transitive.
        The following exercises establish these properties.
      </p>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
          <h3 className="font-semibold text-blue-400 mb-2">Reflexive</h3>
          <p className="text-sm text-dark-300">
            Every sequence is equivalent to itself: <Math tex="(a_n) \sim (a_n)" />
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl border border-purple-500/20">
          <h3 className="font-semibold text-purple-400 mb-2">Symmetric</h3>
          <p className="text-sm text-dark-300">
            If <Math tex="(a_n) \sim (b_n)" />, then <Math tex="(b_n) \sim (a_n)" />
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-xl border border-amber-500/20">
          <h3 className="font-semibold text-amber-400 mb-2">Transitive</h3>
          <p className="text-sm text-dark-300">
            If <Math tex="(a_n) \sim (b_n)" /> and <Math tex="(b_n) \sim (c_n)" />, then <Math tex="(a_n) \sim (c_n)" />
          </p>
        </div>
      </div>

      <Callout type="info">
        <strong>Why Equivalence Matters</strong>
        <p className="mt-2">
          Once we know equivalence is an equivalence relation, we can partition all Cauchy sequences
          into equivalence classes. Each equivalence class will define a unique real number. This
          mirrors how we constructed the rationals (equivalence classes of formal fractions) and
          integers (equivalence classes of formal differences).
        </p>
      </Callout>

      {/* Important Preservation Properties */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Preservation Properties</h2>

      <p className="text-dark-200 mb-6">
        For our construction to work, equivalent sequences should share important properties:
      </p>

      <Theorem title="(Exercise 5.2.1: Cauchy Property Preserved)">
        <p>
          If <Math tex="(a_n)_{n=1}^{\infty}" /> and <Math tex="(b_n)_{n=1}^{\infty}" /> are equivalent
          sequences of rationals, then <Math tex="(a_n)_{n=1}^{\infty}" /> is a Cauchy sequence if
          and only if <Math tex="(b_n)_{n=1}^{\infty}" /> is a Cauchy sequence.
        </p>
      </Theorem>

      <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50 mt-4 mb-6">
        <p className="text-dark-300">
          <strong>Why this matters:</strong> This ensures that equivalent sequences are either both
          Cauchy or both non-Cauchy. When we define real numbers as equivalence classes of Cauchy
          sequences, we need this to guarantee the definition is well-posed.
        </p>
      </div>

      <Theorem title="(Exercise 5.2.2: Boundedness Preserved)">
        <p>
          Let <Math tex="\varepsilon > 0" />. If <Math tex="(a_n)_{n=1}^{\infty}" /> and <Math tex="(b_n)_{n=1}^{\infty}" /> are
          eventually <Math tex="\varepsilon" />-close, then <Math tex="(a_n)_{n=1}^{\infty}" /> is bounded
          if and only if <Math tex="(b_n)_{n=1}^{\infty}" /> is bounded.
        </p>
      </Theorem>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Exercises</h2>

      <div className="space-y-6">
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 5.2.1</h3>
          <p className="text-dark-300">
            Show that if <Math tex="(a_n)_{n=1}^{\infty}" /> and <Math tex="(b_n)_{n=1}^{\infty}" /> are
            equivalent sequences of rationals, then <Math tex="(a_n)_{n=1}^{\infty}" /> is a Cauchy
            sequence if and only if <Math tex="(b_n)_{n=1}^{\infty}" /> is a Cauchy sequence.
          </p>
        </div>

        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 5.2.2</h3>
          <p className="text-dark-300">
            Let <Math tex="\varepsilon > 0" />. Show that if <Math tex="(a_n)_{n=1}^{\infty}" /> and <Math tex="(b_n)_{n=1}^{\infty}" /> are
            eventually <Math tex="\varepsilon" />-close, then <Math tex="(a_n)_{n=1}^{\infty}" /> is
            bounded if and only if <Math tex="(b_n)_{n=1}^{\infty}" /> is bounded.
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Key Takeaways</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
          <h3 className="font-semibold text-blue-400 mb-2"><Math tex="\varepsilon" />-Close Sequences</h3>
          <p className="text-sm text-dark-300">
            Two sequences are <Math tex="\varepsilon" />-close if corresponding terms are
            within <Math tex="\varepsilon" />: <Math tex="|a_n - b_n| \leq \varepsilon" /> for all <Math tex="n" />.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl border border-purple-500/20">
          <h3 className="font-semibold text-purple-400 mb-2">Eventually Close</h3>
          <p className="text-sm text-dark-300">
            Sequences are eventually <Math tex="\varepsilon" />-close if they become <Math tex="\varepsilon" />-close
            after discarding finitely many initial terms.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-xl border border-amber-500/20">
          <h3 className="font-semibold text-amber-400 mb-2">Equivalent Sequences</h3>
          <p className="text-sm text-dark-300">
            Sequences are equivalent if they are eventually <Math tex="\varepsilon" />-close for
            every <Math tex="\varepsilon > 0" />. These represent the "same" real number.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/20">
          <h3 className="font-semibold text-emerald-400 mb-2">0.999... = 1.000...</h3>
          <p className="text-sm text-dark-300">
            The sequences approaching 1 from above and below are equivalent, providing a rigorous
            proof that <Math tex="0.999\ldots = 1" />.
          </p>
        </div>
      </div>

      {/* Looking Ahead */}
      <Callout type="info" className="mt-8">
        <strong>Looking Ahead</strong>
        <p className="mt-2">
          With the notion of equivalent Cauchy sequences established, we are ready to define real
          numbers. In the next section, we will define a real number as an equivalence class of
          Cauchy sequences, introduce the formal limit notation <Math tex="\text{LIM}_{n \to \infty} a_n" />,
          and define arithmetic operations on real numbers.
        </p>
      </Callout>
    </LessonLayout>
  );
}
