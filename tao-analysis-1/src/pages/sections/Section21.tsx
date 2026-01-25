import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';
import { SequenceLimitVisualizer } from '@/components/visualizations';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Introduction</h2>
        <p className="text-gray-300 mb-4">
          In Chapter 5, we defined the real numbers as formal limits of rational Cauchy
          sequences, using the notation <Math>\text{'{'}LIM{'}'}_{'{'}{'{'}n \to \infty{'}'}{'}'}a_n</Math>.
          We then defined arithmetic operations on these formal limits. However, unlike our
          work with integers (where formal differences became actual differences) and rationals
          (where formal quotients became actual quotients), we never replaced formal limits
          with <em>actual</em> limits.
        </p>
        <p className="text-gray-300 mb-4">
          In this chapter, we finally define what it means for a sequence to <strong>converge</strong> to
          a limit, written <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'}a_n</Math>. We will show that
          for Cauchy sequences of rationals, the formal limit equals the actual limit, so we
          can discard the formal notation entirely.
        </p>

        <Callout type="info" title="Why This Matters">
          <p>
            The theory of limits is the foundation of calculus and analysis. Limits allow us
            to make precise the intuitive notions of "approaching," "getting arbitrarily close,"
            and "in the long run." Everything that follows—continuity, differentiation,
            integration, series—depends on a rigorous understanding of limits.
          </p>
        </Callout>
      </section>

      {/* Interactive Visualization */}
      <div className="my-8">
        <SequenceLimitVisualizer />
      </div>

      {/* Distance and ε-close */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Distance and <Math>\varepsilon</Math>-Closeness
        </h2>

        <p className="text-gray-300 mb-4">
          We begin by extending our earlier definitions of distance and <Math>\varepsilon</Math>-closeness
          from rationals to reals.
        </p>

        <Definition id="6.1.1" title="Distance Between Two Real Numbers">
          <p>
            Given two real numbers <Math>x</Math> and <Math>y</Math>, we define
            their <strong>distance</strong> <Math>d(x, y)</Math> to be:
          </p>
          <MathBlock>
            d(x, y) := |x - y|
          </MathBlock>
        </Definition>

        <Definition id="6.1.2" title="ε-Close Real Numbers">
          <p>
            Let <Math>\varepsilon {'>'} 0</Math> be a real number. We say that two real
            numbers <Math>x</Math> and <Math>y</Math> are <strong><Math>\varepsilon</Math>-close</strong> iff
            we have <Math>d(x, y) \leq \varepsilon</Math>, i.e., <Math>|x - y| \leq \varepsilon</Math>.
          </p>
        </Definition>

        <p className="text-gray-300 my-4">
          These definitions are consistent with our earlier definitions for rationals
          (Definitions 4.3.2 and 4.3.4). The key difference is that now <Math>\varepsilon</Math> can
          be any positive real, not just a positive rational.
        </p>
      </section>

      {/* Cauchy Sequences of Reals */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Cauchy Sequences of Real Numbers
        </h2>

        <p className="text-gray-300 mb-4">
          We can now define Cauchy sequences of real numbers, extending our earlier definition
          for rational sequences.
        </p>

        <Definition id="6.1.3" title="Cauchy Sequences of Reals">
          <p className="mb-2">
            Let <Math>\varepsilon {'>'} 0</Math> be a real number. A
            sequence <Math>(a_n)_{'{'}{'{'}n=N{'}'}{'}'}{'{'}^\infty{'}'}</Math> of real numbers
            starting at some integer index <Math>N</Math> is said to be:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong><Math>\varepsilon</Math>-steady</strong> iff <Math>a_j</Math> and <Math>a_k</Math> are <Math>\varepsilon</Math>-close
              for every <Math>j, k \geq N</Math>.
            </li>
            <li>
              <strong>eventually <Math>\varepsilon</Math>-steady</strong> iff there exists
              an <Math>N' \geq N</Math> such that <Math>(a_n)_{'{'}{'{'}n=N'{'}'}{'}'}{'{'}^\infty{'}'}</Math> is <Math>\varepsilon</Math>-steady.
            </li>
            <li>
              a <strong>Cauchy sequence</strong> iff it is eventually <Math>\varepsilon</Math>-steady
              for every <Math>\varepsilon {'>'} 0</Math>.
            </li>
          </ul>
        </Definition>

        <p className="text-gray-300 my-4">
          In other words, a sequence <Math>(a_n)_{'{'}{'{'}n=m{'}'}{'}'}{'{'}^\infty{'}'}</Math> of
          real numbers is Cauchy if, for every <Math>\varepsilon {'>'} 0</Math>, there
          exists <Math>N \geq m</Math> such that <Math>|a_n - a_{'{'}n'{'}'}| \leq \varepsilon</Math> for
          all <Math>n, n' \geq N</Math>.
        </p>

        <Theorem id="6.1.4" title="Consistency of Cauchy Definitions">
          <p>
            Let <Math>(a_n)_{'{'}{'{'}n=m{'}'}{'}'}{'{'}^\infty{'}'}</Math> be a sequence of
            rational numbers. Then it is a Cauchy sequence in the sense of Definition 5.1.8
            (using rational <Math>\varepsilon</Math>) if and only if it is a Cauchy sequence
            in the sense of Definition 6.1.3 (using real <Math>\varepsilon</Math>).
          </p>
        </Theorem>

        <p className="text-gray-300 mt-4">
          Because of this proposition, we view Cauchy sequences as a single unified concept,
          whether we require <Math>\varepsilon</Math> to be rational or real.
        </p>
      </section>

      {/* Convergence */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Convergence of Sequences
        </h2>

        <p className="text-gray-300 mb-4">
          Now we define what it means for a sequence to converge to a limit.
        </p>

        <Definition id="6.1.5" title="Convergence of Sequences">
          <p className="mb-2">
            Let <Math>\varepsilon {'>'} 0</Math> be a real number, and let <Math>L</Math> be a
            real number. A sequence <Math>(a_n)_{'{'}{'{'}n=N{'}'}{'}'}{'{'}^\infty{'}'}</Math> of
            real numbers is said to be:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong><Math>\varepsilon</Math>-close to <Math>L</Math></strong> iff <Math>a_n</Math> is <Math>\varepsilon</Math>-close
              to <Math>L</Math> for every <Math>n \geq N</Math>, i.e., <Math>|a_n - L| \leq \varepsilon</Math> for
              every <Math>n \geq N</Math>.
            </li>
            <li>
              <strong>eventually <Math>\varepsilon</Math>-close to <Math>L</Math></strong> iff there
              exists <Math>N' \geq N</Math> such that <Math>(a_n)_{'{'}{'{'}n=N'{'}'}{'}'}{'{'}^\infty{'}'}</Math> is <Math>\varepsilon</Math>-close to <Math>L</Math>.
            </li>
            <li>
              <strong>convergent to <Math>L</Math></strong> iff it is eventually <Math>\varepsilon</Math>-close
              to <Math>L</Math> for every real <Math>\varepsilon {'>'} 0</Math>.
            </li>
          </ul>
        </Definition>

        <Example id="6.1.6" title="Convergence Example">
          <p className="mb-2">Consider the sequence:</p>
          <MathBlock>
            0.9, 0.99, 0.999, 0.9999, \ldots
          </MathBlock>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li>
              This sequence is <Math>0.1</Math>-close to <Math>1</Math> (every term differs
              from <Math>1</Math> by at most <Math>0.1</Math>).
            </li>
            <li>
              It is <em>not</em> <Math>0.01</Math>-close to <Math>1</Math> (the first
              term <Math>0.9</Math> differs from <Math>1</Math> by <Math>0.1 {'>'} 0.01</Math>).
            </li>
            <li>
              However, it is <em>eventually</em> <Math>0.01</Math>-close to <Math>1</Math> (starting
              from the second term).
            </li>
            <li>
              In fact, for every <Math>\varepsilon {'>'} 0</Math>, this sequence is
              eventually <Math>\varepsilon</Math>-close to <Math>1</Math>. Therefore it
              <strong> converges to <Math>1</Math></strong>.
            </li>
          </ul>
        </Example>
      </section>

      {/* Uniqueness of Limits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Uniqueness of Limits
        </h2>

        <Theorem
          id="6.1.7"
          title="Uniqueness of Limits"
          proof={`Suppose for contradiction that (aₙ) converges to both L and L', where L ≠ L'.

Let ε := |L - L'|/3. Note that ε > 0 since L ≠ L'.

Since (aₙ) converges to L, there exists N ≥ m such that d(aₙ, L) ≤ ε for all n ≥ N.

Since (aₙ) converges to L', there exists M ≥ m such that d(aₙ, L') ≤ ε for all n ≥ M.

Let n := max(N, M). Then d(aₙ, L) ≤ ε and d(aₙ, L') ≤ ε.

By the triangle inequality:
d(L, L') ≤ d(L, aₙ) + d(aₙ, L') ≤ ε + ε = 2ε = 2|L - L'|/3

This gives |L - L'| ≤ 2|L - L'|/3, which contradicts |L - L'| > 0.

Therefore (aₙ) cannot converge to both L and L'. □`}
        >
          <p>
            Let <Math>(a_n)_{'{'}{'{'}n=m{'}'}{'}'}{'{'}^\infty{'}'}</Math> be a real sequence,
            and let <Math>L \neq L'</Math> be two distinct real numbers. Then it is not possible
            for <Math>(a_n)</Math> to converge to <Math>L</Math> while also converging to <Math>L'</Math>.
          </p>
        </Theorem>

        <p className="text-gray-300 my-4">
          Since limits are unique, we can introduce notation for them:
        </p>

        <Definition id="6.1.8" title="Limits of Sequences">
          <p className="mb-2">
            If a sequence <Math>(a_n)_{'{'}{'{'}n=m{'}'}{'}'}{'{'}^\infty{'}'}</Math> converges to
            some real number <Math>L</Math>, we say that <Math>(a_n)</Math> is <strong>convergent</strong> and
            that its <strong>limit</strong> is <Math>L</Math>. We write:
          </p>
          <MathBlock>
            L = \lim_{'{'}{'{'}n \to \infty{'}'}{'}'} a_n
          </MathBlock>
          <p className="mt-2">
            If <Math>(a_n)</Math> does not converge to any real number, we say the sequence
            is <strong>divergent</strong> and leave <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'} a_n</Math> undefined.
          </p>
        </Definition>

        <Callout type="note" title="Notation">
          <p className="mb-2">
            We sometimes write "<Math>a_n \to L</Math> as <Math>n \to \infty</Math>" as an
            alternative to "<Math>(a_n)</Math> converges to <Math>L</Math>."
          </p>
          <p>
            The starting index <Math>m</Math> is irrelevant to the limit (changing finitely many
            terms doesn't affect convergence). The choice of index variable (<Math>n</Math>, <Math>k</Math>, etc.)
            is also irrelevant: <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'} a_n = \lim_{'{'}{'{'}k \to \infty{'}'}{'}'} a_k</Math>.
          </p>
        </Callout>
      </section>

      {/* Basic Examples and Properties */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Basic Examples and Properties
        </h2>

        <Theorem
          id="6.1.11"
          title="The Limit of 1/n"
          proof={`We need to show that for every ε > 0, the sequence (1/n) is eventually ε-close to 0.

Let ε > 0. We need to find N such that |aₙ - 0| ≤ ε for all n ≥ N.

For n ≥ N: |1/n - 0| = 1/n ≤ 1/N.

By the Archimedean property, we can choose N > 1/ε, so 1/N < ε.

Then for all n ≥ N: |1/n - 0| = 1/n ≤ 1/N < ε.

Thus (1/n) is eventually ε-close to 0 for every ε > 0, so lim_{n→∞} 1/n = 0. □`}
        >
          <p>
            We have <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'} 1/n = 0</Math>.
          </p>
        </Theorem>

        <Theorem id="6.1.12" title="Convergent Sequences are Cauchy">
          <p>
            Suppose that <Math>(a_n)_{'{'}{'{'}n=m{'}'}{'}'}{'{'}^\infty{'}'}</Math> is a
            convergent sequence of real numbers. Then <Math>(a_n)</Math> is also a Cauchy sequence.
          </p>
        </Theorem>

        <Example id="6.1.13" title="A Non-Convergent Sequence">
          <p>
            The sequence <Math>1, -1, 1, -1, 1, -1, \ldots</Math> is not a Cauchy sequence
            (it is not eventually <Math>1</Math>-steady), and hence by Proposition 6.1.12, it
            is not convergent.
          </p>
        </Example>

        <Theorem id="6.1.15" title="Formal Limits are Genuine Limits">
          <p className="mb-2">
            Suppose that <Math>(a_n)_{'{'}{'{'}n=1{'}'}{'}'}{'{'}^\infty{'}'}</Math> is a Cauchy
            sequence of <em>rational</em> numbers. Then <Math>(a_n)</Math> converges
            to <Math>\text{'{'}LIM{'}'}_{'{'}{'{'}n \to \infty{'}'}{'}'}a_n</Math>. In other words:
          </p>
          <MathBlock>
            \text{'{'}LIM{'}'}_{'{'}{'{'}n \to \infty{'}'}{'}'}a_n = \lim_{'{'}{'{'}n \to \infty{'}'}{'}'} a_n
          </MathBlock>
        </Theorem>

        <Callout type="info" title="Mission Accomplished">
          <p>
            This proposition shows that formal limits and actual limits coincide for Cauchy
            sequences of rationals. We can now discard the formal limit notation <Math>\text{'{'}LIM{'}'}</Math> and
            use only the standard limit notation <Math>\lim</Math>. The construction of the reals
            is complete!
          </p>
        </Callout>
      </section>

      {/* Bounded Sequences */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Bounded Sequences
        </h2>

        <Definition id="6.1.16" title="Bounded Sequences">
          <p>
            A sequence <Math>(a_n)_{'{'}{'{'}n=m{'}'}{'}'}{'{'}^\infty{'}'}</Math> of real numbers
            is <strong>bounded by <Math>M</Math></strong> iff <Math>|a_n| \leq M</Math> for
            all <Math>n \geq m</Math>. We say <Math>(a_n)</Math> is <strong>bounded</strong> iff
            it is bounded by <Math>M</Math> for some real number <Math>M {'>'} 0</Math>.
          </p>
        </Definition>

        <Theorem id="6.1.17" title="Convergent Sequences are Bounded">
          <p>
            Every convergent sequence of real numbers is bounded.
          </p>
        </Theorem>

        <Example id="6.1.18" title="An Unbounded Sequence">
          <p>
            The sequence <Math>1, 2, 3, 4, 5, \ldots</Math> is not bounded, and hence is not
            convergent.
          </p>
        </Example>
      </section>

      {/* Limit Laws */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Limit Laws
        </h2>

        <p className="text-gray-300 mb-4">
          The following theorem gives the standard rules for computing limits. These are
          essential tools for evaluating limits in practice.
        </p>

        <Theorem id="6.1.19" title="Limit Laws">
          <p className="mb-2">
            Let <Math>(a_n)_{'{'}{'{'}n=m{'}'}{'}'}{'{'}^\infty{'}'}</Math> and <Math>(b_n)_{'{'}{'{'}n=m{'}'}{'}'}{'{'}^\infty{'}'}</Math> be
            convergent sequences of real numbers, and let:
          </p>
          <MathBlock>
            x := \lim_{'{'}{'{'}n \to \infty{'}'}{'}'} a_n \quad \text{'{'}and{'}'} \quad y := \lim_{'{'}{'{'}n \to \infty{'}'}{'}'} b_n
          </MathBlock>
          <p className="mt-3 mb-2">Then:</p>
          <ol className="list-[lower-alpha] list-inside space-y-2 ml-4">
            <li>
              <strong>Sum:</strong> <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'}(a_n + b_n) = x + y</Math>
            </li>
            <li>
              <strong>Product:</strong> <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'}(a_n b_n) = xy</Math>
            </li>
            <li>
              <strong>Scalar multiple:</strong> For any <Math>c \in \mathbb{'{'}R{'}'}</Math>, <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'}(c \cdot a_n) = cx</Math>
            </li>
            <li>
              <strong>Difference:</strong> <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'}(a_n - b_n) = x - y</Math>
            </li>
            <li>
              <strong>Reciprocal:</strong> If <Math>y \neq 0</Math> and <Math>b_n \neq 0</Math> for all <Math>n</Math>,
              then <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'} b_n^{'{-1}'} = y^{'{-1}'}</Math>
            </li>
            <li>
              <strong>Quotient:</strong> If <Math>y \neq 0</Math> and <Math>b_n \neq 0</Math> for all <Math>n</Math>,
              then <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'} \frac{'{'}a_n{'}'}{'{'}b_n{'}'} = \frac{'{'}x{'}'}{'{'}y{'}'}</Math>
            </li>
            <li>
              <strong>Maximum:</strong> <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'} \max(a_n, b_n) = \max(x, y)</Math>
            </li>
            <li>
              <strong>Minimum:</strong> <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'} \min(a_n, b_n) = \min(x, y)</Math>
            </li>
          </ol>
        </Theorem>

        <Example id="6.1.19.1" title="Using Limit Laws">
          <p className="mb-2">
            Compute <Math>\lim_{'{'}{'{'}n \to \infty{'}'}{'}'} \frac{'{'}3n^2 + 2n{'}'}{'{'}n^2 + 1{'}'}</Math>.
          </p>
          <p className="text-gray-300">
            <strong>Solution:</strong> Divide numerator and denominator by <Math>n^2</Math>:
          </p>
          <MathBlock>
            \frac{'{'}3n^2 + 2n{'}'}{'{'}n^2 + 1{'}'} = \frac{'{'}3 + 2/n{'}'}{'{'}1 + 1/n^2{'}'}
          </MathBlock>
          <p className="text-gray-300 mt-2">
            Since <Math>\lim 1/n = 0</Math> and <Math>\lim 1/n^2 = 0</Math>, by the limit laws:
          </p>
          <MathBlock>
            \lim_{'{'}{'{'}n \to \infty{'}'}{'}'} \frac{'{'}3 + 2/n{'}'}{'{'}1 + 1/n^2{'}'} = \frac{'{'}3 + 0{'}'}{'{'}1 + 0{'}'} = 3
          </MathBlock>
        </Example>

        <Callout type="warning" title="When Limit Laws Fail">
          <p>
            The quotient rule (f) requires <Math>y \neq 0</Math>. If the denominator's limit
            is <Math>0</Math>, this rule does not apply—we may get <Math>0/0</Math> (indeterminate)
            or <Math>c/0</Math> (infinite). Such cases require other techniques like L'Hôpital's rule
            (Section 10.5).
          </p>
        </Callout>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Exercises</h2>
        <div className="space-y-6">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 6.1.1</p>
            <p className="text-gray-300">
              Let <Math>(a_n)_{'{'}{'{'}n=0{'}'}{'}'}{'{'}^\infty{'}'}</Math> be a sequence with <Math>a_{'{'}n+1{'}'} {'>'} a_n</Math> for
              each <Math>n</Math>. Prove that whenever <Math>m {'>'} n</Math>, we have <Math>a_m {'>'} a_n</Math>.
              (Such sequences are called <em>increasing</em>.)
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 6.1.2</p>
            <p className="text-gray-300">
              Let <Math>(a_n)</Math> be a sequence and <Math>L</Math> a real number. Show
              that <Math>(a_n)</Math> converges to <Math>L</Math> if and only if, for
              every <Math>\varepsilon {'>'} 0</Math>, there exists <Math>N</Math> such
              that <Math>|a_n - L| \leq \varepsilon</Math> for all <Math>n \geq N</Math>.
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 6.1.3</p>
            <p className="text-gray-300">
              Let <Math>(a_n)_{'{'}{'{'}n=m{'}'}{'}'}{'{'}^\infty{'}'}</Math> be a sequence
              and <Math>m' \geq m</Math>. Show that <Math>(a_n)_{'{'}{'{'}n=m{'}'}{'}'}{'{'}^\infty{'}'}</Math> converges
              to <Math>c</Math> if and only if <Math>(a_n)_{'{'}{'{'}n=m'{'}'}{'}'}{'{'}^\infty{'}'}</Math> converges to <Math>c</Math>.
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 6.1.5</p>
            <p className="text-gray-300">
              Prove Proposition 6.1.12. (Hint: Use the triangle inequality.)
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 6.1.8</p>
            <p className="text-gray-300">
              Prove Theorem 6.1.19 (the limit laws). (Hint: Parts can be used to prove other
              parts. The proofs are similar to Lemmas 5.3.6, 5.3.10, and 5.3.15.)
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Key Takeaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800">
            <h4 className="font-semibold text-blue-300 mb-2">Convergence</h4>
            <p className="text-gray-300 text-sm">
              A sequence <Math>(a_n)</Math> converges to <Math>L</Math> iff for
              every <Math>\varepsilon {'>'} 0</Math>, the sequence is eventually <Math>\varepsilon</Math>-close
              to <Math>L</Math>. This means <Math>|a_n - L|</Math> eventually stays small.
            </p>
          </div>

          <div className="p-4 bg-amber-900/20 rounded-lg border border-amber-800">
            <h4 className="font-semibold text-amber-300 mb-2">Uniqueness</h4>
            <p className="text-gray-300 text-sm">
              Limits are unique: a sequence cannot converge to two different values. This
              justifies writing <Math>\lim a_n = L</Math> as a well-defined number.
            </p>
          </div>

          <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-800">
            <h4 className="font-semibold text-emerald-300 mb-2">Formal = Actual</h4>
            <p className="text-gray-300 text-sm">
              For Cauchy sequences of rationals, <Math>\text{'{'}LIM{'}'} a_n = \lim a_n</Math>.
              We can now use only the standard limit notation.
            </p>
          </div>

          <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-800">
            <h4 className="font-semibold text-purple-300 mb-2">Limit Laws</h4>
            <p className="text-gray-300 text-sm">
              Limits respect arithmetic: <Math>\lim(a_n + b_n) = \lim a_n + \lim b_n</Math>,
              and similarly for products, quotients (when defined), max, and min.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <Callout type="info" title="Looking Ahead">
        <p>
          With the definition of limits in hand, we can now explore the properties of convergent
          sequences in depth. In the next section, we'll study the <strong>extended real number
          system</strong> <Math>\mathbb{'{'}R{'}'}^*</Math> (including <Math>\pm\infty</Math>) and
          define suprema and infima of sequences. Then we'll prove the crucial result that
          every Cauchy sequence of reals converges—completing the circle and showing
          that <Math>\mathbb{'{'}R{'}'}</Math> is <strong>complete</strong>.
        </p>
      </Callout>
    </LessonLayout>
  );
}
