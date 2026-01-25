import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';
import { CauchySequenceExplorer } from '@/components/visualizations';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        We begin our construction of the real numbers. The key idea is that a real number can be
        thought of as the "limit" of a sequence of rational numbers. But how do we define limits
        without first having real numbers? The answer lies in <strong>Cauchy sequences</strong> -
        sequences that "want" to converge, even if we don't know what they converge to.
      </p>

      <Callout type="info">
        <strong>Chapter Overview</strong>
        <p className="mt-2">
          We have constructed three number systems: the naturals <Math tex="\mathbb{N}" />, the
          integers <Math tex="\mathbb{Z}" />, and the rationals <Math tex="\mathbb{Q}" />. To pass
          from a "discrete" system to a "continuous" one requires introducing the concept of
          a <em>limit</em>. This section develops the machinery needed to rigorously define limits
          and construct the real numbers.
        </p>
      </Callout>

      {/* Definition of Sequences */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Sequences</h2>

      <Definition title="5.1.1 (Sequences)">
        <p className="mb-3">
          Let <Math tex="m" /> be an integer. A <strong>sequence</strong> <Math tex="(a_n)_{n=m}^{\infty}" /> of
          rational numbers is any function from the set <Math tex="\{n \in \mathbb{Z} : n \geq m\}" /> to <Math tex="\mathbb{Q}" />,
          i.e., a mapping which assigns to each integer <Math tex="n" /> greater than or equal to <Math tex="m" />,
          a rational number <Math tex="a_n" />.
        </p>
        <p>
          More informally, a sequence <Math tex="(a_n)_{n=m}^{\infty}" /> of rational numbers is a collection
          of rationals <Math tex="a_m, a_{m+1}, a_{m+2}, \ldots" />
        </p>
      </Definition>

      <Example title="5.1.2 (Examples of Sequences)">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The sequence <Math tex="(n^2)_{n=0}^{\infty}" /> is the collection <Math tex="0, 1, 4, 9, \ldots" /> of
            natural numbers (squares).
          </li>
          <li>
            The sequence <Math tex="(3)_{n=0}^{\infty}" /> is the constant collection <Math tex="3, 3, 3, \ldots" />
          </li>
          <li>
            The sequence <Math tex="(n^2)_{n=3}^{\infty}" /> starts from index 3: <Math tex="9, 16, 25, \ldots" />
          </li>
        </ul>
      </Example>

      {/* ε-steadiness */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">
        Capturing Convergence: <Math tex="\varepsilon" />-Steadiness
      </h2>

      <p className="text-dark-200 mb-6">
        We want to distinguish convergent sequences from divergent ones. For instance, the sequence:
      </p>
      <MathBlock tex="1.4, \quad 1.41, \quad 1.414, \quad 1.4142, \quad 1.41421, \quad \ldots" />
      <p className="text-dark-200 mb-6">
        looks like it's trying to converge to something, as does <Math tex="0.1, 0.01, 0.001, \ldots" />,
        while sequences like <Math tex="1, 2, 4, 8, 16, \ldots" /> or <Math tex="1, 0, 1, 0, 1, \ldots" /> do not.
        To capture this, we use the definition of <Math tex="\varepsilon" />-closeness from Definition 4.3.4.
      </p>

      <Definition title="5.1.3 (ε-Steadiness)">
        <p className="mb-3">
          Let <Math tex="\varepsilon > 0" />. A sequence <Math tex="(a_n)_{n=0}^{\infty}" /> is said to
          be <strong><Math tex="\varepsilon" />-steady</strong> iff each pair <Math tex="a_j, a_k" /> of
          sequence elements is <Math tex="\varepsilon" />-close for every natural number <Math tex="j, k" />.
        </p>
        <p>
          In other words, the sequence <Math tex="a_0, a_1, a_2, \ldots" /> is <Math tex="\varepsilon" />-steady
          iff <Math tex="d(a_j, a_k) \leq \varepsilon" /> for all <Math tex="j, k" />.
        </p>
      </Definition>

      <Example title="5.1.5 (Examples of ε-Steadiness)">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The sequence <Math tex="1, 0, 1, 0, 1, \ldots" /> is 1-steady, but is <strong>not</strong> 1/2-steady.
          </li>
          <li>
            The sequence <Math tex="0.1, 0.01, 0.001, 0.0001, \ldots" /> is 0.1-steady, but is <strong>not</strong> 0.01-steady
            (the first two terms differ by 0.09).
          </li>
          <li>
            The sequence <Math tex="1, 2, 4, 8, 16, \ldots" /> is not <Math tex="\varepsilon" />-steady for
            any <Math tex="\varepsilon" />.
          </li>
          <li>
            The constant sequence <Math tex="2, 2, 2, 2, \ldots" /> is <Math tex="\varepsilon" />-steady for
            every <Math tex="\varepsilon > 0" />.
          </li>
        </ul>
      </Example>

      <Callout type="note">
        <strong>The Problem with <Math tex="\varepsilon" />-Steadiness</strong>
        <p className="mt-2">
          The notion of <Math tex="\varepsilon" />-steadiness is too sensitive to initial elements.
          For instance, the sequence <Math tex="10, 0, 0, 0, 0, \ldots" /> is only 10-steady (not
          better), despite converging almost immediately to zero. We need a more robust notion.
        </p>
      </Callout>

      {/* Eventual ε-steadiness */}
      <Definition title="5.1.6 (Eventual ε-Steadiness)">
        <p className="mb-3">
          Let <Math tex="\varepsilon > 0" />. A sequence <Math tex="(a_n)_{n=0}^{\infty}" /> is said to
          be <strong>eventually <Math tex="\varepsilon" />-steady</strong> iff the sequence <Math tex="a_N, a_{N+1}, a_{N+2}, \ldots" /> is <Math tex="\varepsilon" />-steady
          for some natural number <Math tex="N \geq 0" />.
        </p>
        <p>
          In other words, <Math tex="a_0, a_1, a_2, \ldots" /> is eventually <Math tex="\varepsilon" />-steady
          iff there exists an <Math tex="N \geq 0" /> such that <Math tex="d(a_j, a_k) \leq \varepsilon" /> for
          all <Math tex="j, k \geq N" />.
        </p>
      </Definition>

      <Example title="5.1.7 (Eventual ε-Steadiness)">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The sequence <Math tex="a_n := 1/n" /> (i.e., <Math tex="1, 1/2, 1/3, 1/4, \ldots" />) is
            not 0.1-steady, but is <strong>eventually</strong> 0.1-steady, because starting
            from <Math tex="a_{10} = 1/10" />, the sequence <Math tex="1/10, 1/11, 1/12, \ldots" /> is 0.1-steady.
          </li>
          <li>
            The sequence <Math tex="10, 0, 0, 0, 0, \ldots" /> is not <Math tex="\varepsilon" />-steady for
            any <Math tex="\varepsilon < 10" />, but it is eventually <Math tex="\varepsilon" />-steady for
            every <Math tex="\varepsilon > 0" /> (just start from the second term).
          </li>
        </ul>
      </Example>

      {/* Cauchy Sequences */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Cauchy Sequences</h2>

      {/* Interactive Visualization */}
      <div className="my-8">
        <CauchySequenceExplorer />
      </div>

      <Definition title="5.1.8 (Cauchy Sequences)">
        <p className="mb-3">
          A sequence <Math tex="(a_n)_{n=0}^{\infty}" /> of rational numbers is said to be
          a <strong>Cauchy sequence</strong> iff for every rational <Math tex="\varepsilon > 0" />,
          the sequence <Math tex="(a_n)_{n=0}^{\infty}" /> is eventually <Math tex="\varepsilon" />-steady.
        </p>
        <p>
          In other words, <Math tex="a_0, a_1, a_2, \ldots" /> is a Cauchy sequence iff for
          every <Math tex="\varepsilon > 0" />, there exists an <Math tex="N \geq 0" /> such
          that <Math tex="d(a_j, a_k) \leq \varepsilon" /> for all <Math tex="j, k \geq N" />.
        </p>
      </Definition>

      <Callout type="note">
        <strong>On the Parameter <Math tex="\varepsilon" /></strong>
        <p className="mt-2">
          At present, <Math tex="\varepsilon" /> is restricted to be a positive <em>rational</em>; we cannot
          take <Math tex="\varepsilon" /> to be an arbitrary positive real, because real numbers have not
          yet been constructed. However, once we construct the reals, we shall see that the definition
          does not change if we require <Math tex="\varepsilon" /> to be real instead of rational
          (Proposition 6.1.4).
        </p>
      </Callout>

      <Example title="5.1.10 (Informal: Approximating √2)">
        <p className="mb-3">Consider the sequence:</p>
        <MathBlock tex="1.4, \quad 1.41, \quad 1.414, \quad 1.4142, \quad \ldots" />
        <p className="mt-3">
          This sequence is already 1-steady. Discarding the first element, the remaining
          sequence <Math tex="1.41, 1.414, 1.4142, \ldots" /> is 0.1-steady. Discarding the next gives
          the 0.01-steady sequence <Math tex="1.414, 1.4142, \ldots" />
        </p>
        <p className="mt-3">
          Continuing this way, it seems plausible that this sequence is eventually <Math tex="\varepsilon" />-steady
          for every <Math tex="\varepsilon > 0" />, suggesting it is a Cauchy sequence. However, this
          discussion is informal since we haven't precisely defined this sequence.
        </p>
      </Example>

      {/* Rigorous Example */}
      <Theorem
        title="5.1.11 (The Sequence 1/n is Cauchy)"
        proof={
          <div className="space-y-4">
            <p>
              We must show that for every <Math tex="\varepsilon > 0" />, the sequence <Math tex="a_1, a_2, \ldots" /> is
              eventually <Math tex="\varepsilon" />-steady. So let <Math tex="\varepsilon > 0" /> be arbitrary.
            </p>
            <p>
              We need to find an <Math tex="N \geq 1" /> such that the sequence <Math tex="a_N, a_{N+1}, \ldots" /> is <Math tex="\varepsilon" />-steady,
              meaning <Math tex="|1/j - 1/k| \leq \varepsilon" /> for every <Math tex="j, k \geq N" />.
            </p>
            <p>
              Since <Math tex="j, k \geq N" />, we know that <Math tex="0 < 1/j, 1/k \leq 1/N" />, so:
            </p>
            <MathBlock tex="|1/j - 1/k| \leq 1/N" />
            <p>
              To force <Math tex="|1/j - 1/k| \leq \varepsilon" />, it suffices to have <Math tex="1/N \leq \varepsilon" />,
              i.e., <Math tex="N \geq 1/\varepsilon" />.
            </p>
            <p>
              By Proposition 4.4.1, we can always choose such an <Math tex="N" />, and the claim follows.
            </p>
          </div>
        }
      >
        <p>
          The sequence <Math tex="a_1, a_2, a_3, \ldots" /> defined by <Math tex="a_n := 1/n" /> (i.e.,
          the sequence <Math tex="1, 1/2, 1/3, \ldots" />) is a Cauchy sequence.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>The Art of Choosing N</strong>
        <p className="mt-2">
          Verifying from first principles that a sequence is Cauchy requires effort, even for simple
          sequences like <Math tex="1/n" />. The key technique: work <em>backwards</em> from the
          conditions you need, determine what <Math tex="N" /> would suffice, then find such
          an <Math tex="N" />. Later, we'll develop limit laws that make this easier.
        </p>
      </Callout>

      {/* Bounded Sequences */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Bounded Sequences</h2>

      <Definition title="5.1.12 (Bounded Sequences)">
        <p className="mb-3">
          Let <Math tex="M \geq 0" /> be rational. A finite sequence <Math tex="a_1, a_2, \ldots, a_n" /> is <strong>bounded
          by M</strong> iff <Math tex="|a_i| \leq M" /> for all <Math tex="1 \leq i \leq n" />.
        </p>
        <p className="mb-3">
          An infinite sequence <Math tex="(a_n)_{n=1}^{\infty}" /> is <strong>bounded by M</strong> iff <Math tex="|a_i| \leq M" /> for
          all <Math tex="i \geq 1" />.
        </p>
        <p>
          A sequence is said to be <strong>bounded</strong> iff it is bounded by <Math tex="M" /> for
          some rational <Math tex="M \geq 0" />.
        </p>
      </Definition>

      <Example title="5.1.13 (Bounded vs Unbounded)">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The finite sequence <Math tex="1, -2, 3, -4" /> is bounded (by 4, or any <Math tex="M \geq 4" />).
          </li>
          <li>
            The infinite sequence <Math tex="1, -2, 3, -4, 5, -6, \ldots" /> is <strong>unbounded</strong>.
          </li>
          <li>
            The sequence <Math tex="1, -1, 1, -1, \ldots" /> is bounded (by 1), but is <strong>not</strong> a
            Cauchy sequence.
          </li>
        </ul>
      </Example>

      <Theorem
        title="5.1.14 (Finite Sequences are Bounded)"
        proof={
          <div className="space-y-4">
            <p>
              We prove this by induction on <Math tex="n" />.
            </p>
            <p>
              <strong>Base case:</strong> When <Math tex="n = 1" />, the sequence <Math tex="a_1" /> is
              bounded by <Math tex="M := |a_1|" />, since <Math tex="|a_1| \leq M" />.
            </p>
            <p>
              <strong>Inductive step:</strong> Suppose every sequence of length <Math tex="n" /> is bounded.
              Consider a sequence <Math tex="a_1, a_2, \ldots, a_{n+1}" />. By the induction hypothesis, <Math tex="a_1, \ldots, a_n" /> is
              bounded by some <Math tex="M \geq 0" />.
            </p>
            <p>
              Then <Math tex="a_1, \ldots, a_n, a_{n+1}" /> is bounded by <Math tex="M + |a_{n+1}|" />, since
              all terms <Math tex="a_1, \ldots, a_n" /> have absolute value at most <Math tex="M" />, and <Math tex="|a_{n+1}| \leq M + |a_{n+1}|" />.
            </p>
          </div>
        }
      >
        <p>
          Every finite sequence <Math tex="a_1, a_2, \ldots, a_n" /> is bounded.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Finite vs Infinite</strong>
        <p className="mt-2">
          While this argument shows every finite sequence is bounded (no matter how long), it says
          nothing about infinite sequences - infinity is not a natural number, so induction doesn't
          apply. However, for Cauchy sequences specifically, we have a stronger result.
        </p>
      </Callout>

      <Theorem title="5.1.15 (Cauchy Sequences are Bounded)">
        <p>
          Every Cauchy sequence <Math tex="(a_n)_{n=1}^{\infty}" /> is bounded.
        </p>
      </Theorem>

      <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50 mt-4">
        <p className="text-dark-300">
          <strong>Proof idea:</strong> Since <Math tex="(a_n)" /> is Cauchy, it is eventually 1-steady.
          So for some <Math tex="N" />, the "tail" <Math tex="a_N, a_{N+1}, \ldots" /> is 1-steady,
          meaning all terms differ by at most 1. The "head" <Math tex="a_1, \ldots, a_{N-1}" /> is
          finite, hence bounded by Lemma 5.1.14. Combining these gives a bound for the whole sequence.
        </p>
      </div>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Exercises</h2>

      <div className="space-y-6">
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 5.1.1</h3>
          <p className="text-dark-300">
            Prove Lemma 5.1.15. (<em>Hint:</em> use the fact that <Math tex="a_n" /> is eventually
            1-steady, and thus can be split into a finite sequence and a 1-steady sequence. Then
            use Lemma 5.1.14 for the finite part. Note there is nothing special about the number 1
            used here; any other positive number would have sufficed.)
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Key Takeaways</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
          <h3 className="font-semibold text-blue-400 mb-2">Sequences</h3>
          <p className="text-sm text-dark-300">
            A sequence <Math tex="(a_n)_{n=m}^{\infty}" /> is a function assigning a rational
            to each integer <Math tex="n \geq m" />.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl border border-purple-500/20">
          <h3 className="font-semibold text-purple-400 mb-2"><Math tex="\varepsilon" />-Steadiness</h3>
          <p className="text-sm text-dark-300">
            A sequence is <Math tex="\varepsilon" />-steady if all pairs of terms are within <Math tex="\varepsilon" /> of
            each other: <Math tex="|a_j - a_k| \leq \varepsilon" />.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-xl border border-amber-500/20">
          <h3 className="font-semibold text-amber-400 mb-2">Cauchy Sequences</h3>
          <p className="text-sm text-dark-300">
            A sequence is Cauchy if it is eventually <Math tex="\varepsilon" />-steady for
            every <Math tex="\varepsilon > 0" />. These are sequences that "want to converge."
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/20">
          <h3 className="font-semibold text-emerald-400 mb-2">Boundedness</h3>
          <p className="text-sm text-dark-300">
            Every Cauchy sequence is bounded. This is crucial for defining arithmetic operations
            on real numbers.
          </p>
        </div>
      </div>

      {/* Looking Ahead */}
      <Callout type="info" className="mt-8">
        <strong>Looking Ahead</strong>
        <p className="mt-2">
          Now that we have Cauchy sequences, we need to determine when two Cauchy sequences should
          represent the "same" real number. This leads to the notion of <em>equivalent Cauchy sequences</em>,
          which we'll explore in the next section. Real numbers will be defined as equivalence classes
          of Cauchy sequences.
        </p>
      </Callout>
    </LessonLayout>
  );
}
