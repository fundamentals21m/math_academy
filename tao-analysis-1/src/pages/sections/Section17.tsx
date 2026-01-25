import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        We are now ready to construct the real numbers. Using the machinery of Cauchy sequences and
        equivalence from the previous sections, we define real numbers as formal limits of Cauchy
        sequences. We then develop arithmetic operations and verify that the reals satisfy all the
        expected algebraic properties.
      </p>

      <Callout type="info">
        <strong>The Construction Pattern</strong>
        <p className="mt-2">
          Just as we constructed integers using formal differences <Math tex="a \text{---} b" /> and
          rationals using formal quotients <Math tex="a \mathbin{/\mkern-4mu/} b" />, we now construct
          real numbers using a formal limit symbol <Math tex="\text{LIM}_{n \to \infty} a_n" />. Eventually,
          this formal limit will match the genuine limit operation, at which point the formal notation
          can be discarded.
        </p>
      </Callout>

      {/* Definition of Real Numbers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Defining the Real Numbers</h2>

      <Definition title="5.3.1 (Real Numbers)">
        <p className="mb-3">
          A <strong>real number</strong> is defined to be an object of the
          form <Math tex="\text{LIM}_{n \to \infty} a_n" />, where <Math tex="(a_n)_{n=1}^{\infty}" /> is
          a Cauchy sequence of rational numbers.
        </p>
        <p className="mb-3">
          Two real numbers <Math tex="\text{LIM}_{n \to \infty} a_n" /> and <Math tex="\text{LIM}_{n \to \infty} b_n" /> are
          said to be <strong>equal</strong> iff <Math tex="(a_n)_{n=1}^{\infty}" /> and <Math tex="(b_n)_{n=1}^{\infty}" /> are
          equivalent Cauchy sequences.
        </p>
        <p>
          The set of all real numbers is denoted <Math tex="\mathbb{R}" />.
        </p>
      </Definition>

      <Example title="5.3.2 (Informal: Two Representations of √2)">
        <p className="mb-3">Let <Math tex="a_1, a_2, a_3, \ldots" /> denote the sequence:</p>
        <MathBlock tex="1.4, \; 1.41, \; 1.414, \; 1.4142, \; 1.41421, \; \ldots" />
        <p className="mt-3">and let <Math tex="b_1, b_2, b_3, \ldots" /> denote the sequence:</p>
        <MathBlock tex="1.5, \; 1.42, \; 1.415, \; 1.4143, \; 1.41422, \; \ldots" />
        <p className="mt-3">
          Then <Math tex="\text{LIM}_{n \to \infty} a_n" /> is a real number, and is the <em>same</em> real
          number as <Math tex="\text{LIM}_{n \to \infty} b_n" />, because <Math tex="(a_n)_{n=1}^{\infty}" /> and <Math tex="(b_n)_{n=1}^{\infty}" /> are
          equivalent Cauchy sequences:
        </p>
        <MathBlock tex="\text{LIM}_{n \to \infty} a_n = \text{LIM}_{n \to \infty} b_n" />
      </Example>

      <Callout type="note">
        <strong>Formal Limits</strong>
        <p className="mt-2">
          We refer to <Math tex="\text{LIM}_{n \to \infty} a_n" /> as the <em>formal limit</em> of the
          sequence <Math tex="(a_n)_{n=1}^{\infty}" />. Later we will define a genuine notion of limit,
          and show that the formal limit of a Cauchy sequence equals the actual limit of that sequence.
          After that, we won't need formal limits anymore.
        </p>
      </Callout>

      {/* Equality is Well-Defined */}
      <Theorem title="5.3.3 (Formal Limits are Well-Defined)">
        <p className="mb-3">
          Let <Math tex="x = \text{LIM}_{n \to \infty} a_n" />, <Math tex="y = \text{LIM}_{n \to \infty} b_n" />,
          and <Math tex="z = \text{LIM}_{n \to \infty} c_n" /> be real numbers. Then, with the above definition
          of equality for real numbers:
        </p>
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><strong>Reflexivity:</strong> <Math tex="x = x" /></li>
          <li><strong>Symmetry:</strong> If <Math tex="x = y" />, then <Math tex="y = x" /></li>
          <li><strong>Transitivity:</strong> If <Math tex="x = y" /> and <Math tex="y = z" />, then <Math tex="x = z" /></li>
        </ul>
      </Theorem>

      <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50 mt-4">
        <p className="text-dark-300">
          <strong>Why this matters:</strong> This proposition ensures our definition of equality
          between real numbers is legitimate. It follows directly from the fact that equivalence
          of Cauchy sequences is an equivalence relation (see Proposition 4.3.7).
        </p>
      </div>

      {/* Addition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Addition of Real Numbers</h2>

      <Definition title="5.3.4 (Addition of Reals)">
        <p className="mb-3">
          Let <Math tex="x = \text{LIM}_{n \to \infty} a_n" /> and <Math tex="y = \text{LIM}_{n \to \infty} b_n" /> be
          real numbers. Then we define the sum <Math tex="x + y" /> to be:
        </p>
        <MathBlock tex="x + y := \text{LIM}_{n \to \infty} (a_n + b_n)" />
      </Definition>

      <Example title="5.3.5">
        <p>
          The sum of <Math tex="\text{LIM}_{n \to \infty}(1 + 1/n)" /> and <Math tex="\text{LIM}_{n \to \infty}(2 + 3/n)" /> is <Math tex="\text{LIM}_{n \to \infty}(3 + 4/n)" />.
        </p>
      </Example>

      <Theorem
        title="5.3.6 (Sum of Cauchy Sequences is Cauchy)"
        proof={
          <div className="space-y-4">
            <p>
              We need to show that for every <Math tex="\varepsilon > 0" />, the
              sequence <Math tex="(a_n + b_n)_{n=1}^{\infty}" /> is eventually <Math tex="\varepsilon" />-steady.
            </p>
            <p>
              From hypothesis, <Math tex="(a_n)" /> and <Math tex="(b_n)" /> are each
              eventually <Math tex="\varepsilon" />-steady. But this only gives us that <Math tex="(a_n + b_n)" /> is
              eventually <Math tex="2\varepsilon" />-steady, which isn't quite what we want.
            </p>
            <p>
              <strong>The trick:</strong> Since <Math tex="(a_n)" /> is Cauchy, it is eventually <Math tex="\varepsilon/2" />-steady.
              Similarly, <Math tex="(b_n)" /> is eventually <Math tex="\varepsilon/2" />-steady.
            </p>
            <p>
              Let <Math tex="N" /> be such that <Math tex="(a_n)_{n=N}^{\infty}" /> is <Math tex="\varepsilon/2" />-steady,
              and let <Math tex="M" /> be such that <Math tex="(b_n)_{n=M}^{\infty}" /> is <Math tex="\varepsilon/2" />-steady.
            </p>
            <p>
              For <Math tex="n, m \geq \max(N, M)" />, we have <Math tex="a_n" /> and <Math tex="a_m" /> are <Math tex="\varepsilon/2" />-close,
              and <Math tex="b_n" /> and <Math tex="b_m" /> are <Math tex="\varepsilon/2" />-close. By Proposition 4.3.7,
              this means <Math tex="a_n + b_n" /> and <Math tex="a_m + b_m" /> are <Math tex="\varepsilon" />-close.
            </p>
          </div>
        }
      >
        <p>
          Let <Math tex="x = \text{LIM}_{n \to \infty} a_n" /> and <Math tex="y = \text{LIM}_{n \to \infty} b_n" /> be
          real numbers. Then <Math tex="x + y" /> is also a real number (i.e., <Math tex="(a_n + b_n)_{n=1}^{\infty}" /> is
          a Cauchy sequence of rationals).
        </p>
      </Theorem>

      <Theorem title="5.3.7 (Sums of Equivalent Cauchy Sequences are Equivalent)">
        <p>
          Let <Math tex="x = \text{LIM}_{n \to \infty} a_n" />, <Math tex="y = \text{LIM}_{n \to \infty} b_n" />,
          and <Math tex="x' = \text{LIM}_{n \to \infty} a'_n" /> be real numbers. Suppose
          that <Math tex="x = x'" />. Then <Math tex="x + y = x' + y" />.
        </p>
      </Theorem>

      <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50 mt-4">
        <p className="text-dark-300">
          <strong>Axiom of substitution:</strong> This lemma verifies that if we replace a real
          number by another equal to it, the sum doesn't change. A similar result holds for the
          other variable (since <Math tex="x + y = y + x" />).
        </p>
      </div>

      {/* Multiplication */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Multiplication of Real Numbers</h2>

      <Definition title="5.3.9 (Multiplication of Reals)">
        <p className="mb-3">
          Let <Math tex="x = \text{LIM}_{n \to \infty} a_n" /> and <Math tex="y = \text{LIM}_{n \to \infty} b_n" /> be
          real numbers. Then we define the product <Math tex="xy" /> to be:
        </p>
        <MathBlock tex="xy := \text{LIM}_{n \to \infty} a_n b_n" />
      </Definition>

      <Theorem title="5.3.10 (Multiplication is Well Defined)">
        <p>
          Let <Math tex="x = \text{LIM}_{n \to \infty} a_n" />, <Math tex="y = \text{LIM}_{n \to \infty} b_n" />,
          and <Math tex="x' = \text{LIM}_{n \to \infty} a'_n" /> be real numbers. Then <Math tex="xy" /> is
          also a real number. Furthermore, if <Math tex="x = x'" />, then <Math tex="xy = x'y" />.
        </p>
      </Theorem>

      {/* Embedding Rationals */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Embedding the Rationals</h2>

      <p className="text-dark-200 mb-6">
        We embed the rationals into the reals by equating every rational number <Math tex="q" /> with
        the real number <Math tex="\text{LIM}_{n \to \infty} q" /> (the constant sequence).
      </p>

      <Example title="Embedding Example">
        <p className="mb-3">
          If <Math tex="a_1, a_2, a_3, \ldots" /> is the constant sequence <Math tex="0.5, 0.5, 0.5, 0.5, \ldots" />,
          then we set <Math tex="\text{LIM}_{n \to \infty} a_n" /> equal to <Math tex="0.5" />.
        </p>
        <p>
          This embedding is consistent with addition and multiplication:
        </p>
        <MathBlock tex="(\text{LIM}_{n \to \infty} a) + (\text{LIM}_{n \to \infty} b) = \text{LIM}_{n \to \infty}(a + b)" />
        <MathBlock tex="(\text{LIM}_{n \to \infty} a) \times (\text{LIM}_{n \to \infty} b) = \text{LIM}_{n \to \infty}(ab)" />
      </Example>

      <Callout type="note">
        <strong>Rationals Inside Reals</strong>
        <p className="mt-2">
          When adding or multiplying two rational numbers <Math tex="a, b" />, it doesn't matter
          whether we think of them as rationals or as the real
          numbers <Math tex="\text{LIM}_{n \to \infty} a" />, <Math tex="\text{LIM}_{n \to \infty} b" />.
          The identification is also consistent with equality (Exercise 5.3.3).
        </p>
      </Callout>

      {/* Negation and Subtraction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Negation and Subtraction</h2>

      <p className="text-dark-200 mb-6">
        We define negation for real numbers using multiplication:
      </p>
      <MathBlock tex="-x := (-1) \times x" />
      <p className="text-dark-200 mb-6">
        Since <Math tex="-1" /> is rational (hence real), this is well-defined. Note this is consistent
        with negation for rationals since <Math tex="-q = (-1) \times q" /> for all rationals <Math tex="q" />.
      </p>
      <p className="text-dark-200 mb-6">
        From our definitions:
      </p>
      <MathBlock tex="-\text{LIM}_{n \to \infty} a_n = \text{LIM}_{n \to \infty}(-a_n)" />
      <p className="text-dark-200 mb-6">
        Once we have negation, we define subtraction:
      </p>
      <MathBlock tex="x - y := x + (-y)" />
      <p className="text-dark-200 mb-4">
        This implies:
      </p>
      <MathBlock tex="\text{LIM}_{n \to \infty} a_n - \text{LIM}_{n \to \infty} b_n = \text{LIM}_{n \to \infty}(a_n - b_n)" />

      {/* Laws of Algebra */}
      <Theorem title="5.3.11 (Laws of Algebra for Reals)">
        <p className="mb-3">
          All the laws of algebra from Proposition 4.1.6 hold not only for the integers, but for the reals as well.
        </p>
        <div className="grid gap-2 md:grid-cols-2 mt-4">
          <div className="p-3 bg-dark-800/30 rounded-lg">
            <p className="text-sm text-dark-300"><Math tex="x + y = y + x" /></p>
          </div>
          <div className="p-3 bg-dark-800/30 rounded-lg">
            <p className="text-sm text-dark-300"><Math tex="xy = yx" /></p>
          </div>
          <div className="p-3 bg-dark-800/30 rounded-lg">
            <p className="text-sm text-dark-300"><Math tex="(x + y) + z = x + (y + z)" /></p>
          </div>
          <div className="p-3 bg-dark-800/30 rounded-lg">
            <p className="text-sm text-dark-300"><Math tex="(xy)z = x(yz)" /></p>
          </div>
          <div className="p-3 bg-dark-800/30 rounded-lg">
            <p className="text-sm text-dark-300"><Math tex="x + 0 = x" /></p>
          </div>
          <div className="p-3 bg-dark-800/30 rounded-lg">
            <p className="text-sm text-dark-300"><Math tex="x \cdot 1 = x" /></p>
          </div>
          <div className="p-3 bg-dark-800/30 rounded-lg col-span-2">
            <p className="text-sm text-dark-300"><Math tex="x(y + z) = xy + xz" /> (distributive law)</p>
          </div>
        </div>
      </Theorem>

      <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50 mt-4">
        <p className="text-dark-300">
          <strong>Proof idea:</strong> For example, to prove <Math tex="x(y + z) = xy + xz" />,
          let <Math tex="x = \text{LIM} \, a_n" />, <Math tex="y = \text{LIM} \, b_n" />, <Math tex="z = \text{LIM} \, c_n" />.
          Then <Math tex="xy + xz = \text{LIM}(a_n b_n + a_n c_n)" /> and <Math tex="x(y + z) = \text{LIM} \, a_n(b_n + c_n)" />.
          But <Math tex="a_n(b_n + c_n) = a_n b_n + a_n c_n" /> for rationals, so the sequences are identical.
        </p>
      </div>

      {/* Reciprocals - The Tricky Part */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Reciprocals: The Subtle Case</h2>

      <p className="text-dark-200 mb-6">
        The last arithmetic operation to define is reciprocation: <Math tex="x \mapsto x^{-1}" />.
        This is more subtle than addition and multiplication. A naive attempt would be:
      </p>
      <MathBlock tex="(\text{LIM}_{n \to \infty} a_n)^{-1} := \text{LIM}_{n \to \infty} a_n^{-1}" />
      <p className="text-dark-200 mb-6">
        But there are problems. Consider the Cauchy sequence <Math tex="0.1, 0.01, 0.001, 0.0001, \ldots" />
        which converges to 0. Its reciprocals <Math tex="10, 100, 1000, 10000, \ldots" /> are <em>not</em> Cauchy
        (not even bounded!). So we must only allow reciprocals when <Math tex="x \neq 0" />.
      </p>

      <Callout type="warning">
        <strong>Another Problem</strong>
        <p className="mt-2">
          Even for non-zero reals, we have an issue. The number 1 equals <Math tex="\text{LIM}_{n \to \infty} a_n" /> where <Math tex="a_n = 0, 0.9, 0.99, 0.999, \ldots" />.
          But we can't invert the first element (0)! We need sequences that stay away from zero.
        </p>
      </Callout>

      <Definition title="5.3.12 (Sequences Bounded Away from Zero)">
        <p>
          A sequence <Math tex="(a_n)_{n=1}^{\infty}" /> of rational numbers is said to be <strong>bounded
          away from zero</strong> iff there exists a rational number <Math tex="c > 0" /> such
          that <Math tex="|a_n| \geq c" /> for all <Math tex="n \geq 1" />.
        </p>
      </Definition>

      <Example title="5.3.13 (Bounded Away from Zero)">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The sequence <Math tex="1, -1, 1, -1, 1, -1, \ldots" /> is bounded away from zero (all terms
            have absolute value at least 1).
          </li>
          <li>
            The sequence <Math tex="0.1, 0.01, 0.001, \ldots" /> is <strong>not</strong> bounded away from zero.
          </li>
          <li>
            The sequence <Math tex="0, 0.9, 0.99, 0.999, \ldots" /> is <strong>not</strong> bounded away from zero.
          </li>
          <li>
            The sequence <Math tex="10, 100, 1000, \ldots" /> is bounded away from zero, but is not bounded (above).
          </li>
        </ul>
      </Example>

      <Theorem title="5.3.14 (Non-Zero Reals Have Good Representatives)">
        <p>
          Let <Math tex="x" /> be a non-zero real number. Then <Math tex="x = \text{LIM}_{n \to \infty} a_n" /> for
          some Cauchy sequence <Math tex="(a_n)_{n=1}^{\infty}" /> which is bounded away from zero.
        </p>
      </Theorem>

      <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50 mt-4">
        <p className="text-dark-300">
          <strong>Proof idea:</strong> Start with any Cauchy sequence <Math tex="(b_n)" /> for <Math tex="x" />.
          Since <Math tex="x \neq 0" />, the sequence is not equivalent to the zero sequence. This means
          for some <Math tex="\varepsilon > 0" />, infinitely many <Math tex="b_n" /> have <Math tex="|b_n| > \varepsilon" />.
          Using the Cauchy property, we can show that eventually all <Math tex="|b_n| \geq \varepsilon/2" />.
          Replace the finite initial segment with <Math tex="\varepsilon/2" /> to get a sequence bounded away from zero.
        </p>
      </div>

      <Theorem title="5.3.15 (Reciprocals of Bounded-Away Sequences are Cauchy)">
        <p>
          Suppose that <Math tex="(a_n)_{n=1}^{\infty}" /> is a Cauchy sequence which is bounded away from zero.
          Then the sequence <Math tex="(a_n^{-1})_{n=1}^{\infty}" /> is also a Cauchy sequence.
        </p>
      </Theorem>

      <Definition title="5.3.16 (Reciprocals of Real Numbers)">
        <p className="mb-3">
          Let <Math tex="x" /> be a non-zero real number. Let <Math tex="(a_n)_{n=1}^{\infty}" /> be a Cauchy
          sequence bounded away from zero such that <Math tex="x = \text{LIM}_{n \to \infty} a_n" /> (such
          a sequence exists by Lemma 5.3.14). Then we define the reciprocal <Math tex="x^{-1}" /> by:
        </p>
        <MathBlock tex="x^{-1} := \text{LIM}_{n \to \infty} a_n^{-1}" />
        <p className="mt-3">
          (From Lemma 5.3.15, <Math tex="x^{-1}" /> is a real number.)
        </p>
      </Definition>

      <Theorem title="5.3.17 (Reciprocation is Well Defined)">
        <p>
          Let <Math tex="(a_n)_{n=1}^{\infty}" /> and <Math tex="(b_n)_{n=1}^{\infty}" /> be two Cauchy sequences
          bounded away from zero such that <Math tex="\text{LIM}_{n \to \infty} a_n = \text{LIM}_{n \to \infty} b_n" />.
          Then <Math tex="\text{LIM}_{n \to \infty} a_n^{-1} = \text{LIM}_{n \to \infty} b_n^{-1}" />.
        </p>
      </Theorem>

      <p className="text-dark-200 mt-6 mb-6">
        Once we have reciprocals, we define division:
      </p>
      <MathBlock tex="x/y := x \times y^{-1} \quad \text{(provided } y \neq 0\text{)}" />
      <p className="text-dark-200 mb-6">
        All field axioms (Proposition 4.2.4) now apply to the reals. The cancellation law holds:
        if <Math tex="xz = yz" /> and <Math tex="z \neq 0" />, then <Math tex="x = y" />.
      </p>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Exercises</h2>

      <div className="space-y-6">
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 5.3.1</h3>
          <p className="text-dark-300">
            Prove Proposition 5.3.3. (<em>Hint:</em> you may find Proposition 4.3.7 useful.)
          </p>
        </div>

        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 5.3.2</h3>
          <p className="text-dark-300">
            Prove Proposition 5.3.10. (<em>Hint:</em> again, Proposition 4.3.7 may be useful.)
          </p>
        </div>

        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 5.3.3</h3>
          <p className="text-dark-300">
            Let <Math tex="a, b" /> be rational numbers. Show that <Math tex="a = b" /> if and only
            if <Math tex="\text{LIM}_{n \to \infty} a = \text{LIM}_{n \to \infty} b" /> (i.e., the constant
            sequences <Math tex="a, a, a, \ldots" /> and <Math tex="b, b, b, \ldots" /> are equivalent if
            and only if <Math tex="a = b" />). This allows us to embed the rationals inside the reals
            in a well-defined manner.
          </p>
        </div>

        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 5.3.4</h3>
          <p className="text-dark-300">
            Let <Math tex="(a_n)_{n=0}^{\infty}" /> be a sequence of rational numbers which is bounded.
            Let <Math tex="(b_n)_{n=0}^{\infty}" /> be another sequence of rational numbers which is
            equivalent to <Math tex="(a_n)_{n=0}^{\infty}" />. Show that <Math tex="(b_n)_{n=0}^{\infty}" /> is
            also bounded.
          </p>
        </div>

        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Exercise 5.3.5</h3>
          <p className="text-dark-300">
            Show that <Math tex="\text{LIM}_{n \to \infty} 1/n = 0" />.
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Key Takeaways</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
          <h3 className="font-semibold text-blue-400 mb-2">Real Numbers</h3>
          <p className="text-sm text-dark-300">
            A real number is <Math tex="\text{LIM}_{n \to \infty} a_n" /> for a Cauchy sequence <Math tex="(a_n)" />.
            Two reals are equal iff their sequences are equivalent.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl border border-purple-500/20">
          <h3 className="font-semibold text-purple-400 mb-2">Addition & Multiplication</h3>
          <p className="text-sm text-dark-300">
            Add/multiply reals by adding/multiplying their representing sequences termwise.
            These operations are well-defined.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-xl border border-amber-500/20">
          <h3 className="font-semibold text-amber-400 mb-2">Embedding Rationals</h3>
          <p className="text-sm text-dark-300">
            Every rational <Math tex="q" /> is the real <Math tex="\text{LIM}_{n \to \infty} q" />.
            Arithmetic is preserved under this embedding.
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl border border-emerald-500/20">
          <h3 className="font-semibold text-emerald-400 mb-2">Reciprocals</h3>
          <p className="text-sm text-dark-300">
            For non-zero reals, use sequences bounded away from zero to define <Math tex="x^{-1}" />.
            The reals form a field.
          </p>
        </div>
      </div>

      {/* Looking Ahead */}
      <Callout type="info" className="mt-8">
        <strong>Looking Ahead</strong>
        <p className="mt-2">
          We now have all four basic arithmetic operations on reals: addition, subtraction,
          multiplication, and division, with all the usual algebraic laws. Next, we turn to
          the notion of <em>order</em> on the reals - determining when one real number is
          greater than another.
        </p>
      </Callout>
    </LessonLayout>
  );
}
