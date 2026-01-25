import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Introduction</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Having defined the notion of a supremum and infimum of sets of reals, we can now
          also talk about the supremum and infimum of sequences. This allows us to characterize
          the "largest" and "smallest" values that a sequence approaches, even when the sequence
          doesn't actually attain these values.
        </p>
        <p className="text-slate-300 leading-relaxed">
          One of the most important results in this section is that <em>monotone bounded sequences
          converge</em>. This powerful theorem, combined with the completeness of the reals, gives
          us a way to prove convergence without knowing the limit in advance.
        </p>
      </section>

      {/* Definition of Sup and Inf of Sequences */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Supremum and Infimum of Sequences</h2>

        <Definition
          id="6.3.1"
          title="Sup and inf of sequences"
        >
          <p>
            Let <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> be a sequence of real numbers. Then we define:
          </p>
          <MathBlock>{`\\sup(a_n)_{n=m}^{\\infty} := \\sup\\{a_n : n \\geq m\\}`}</MathBlock>
          <p className="mt-2">
            to be the supremum of the set <Math>{'\\{a_n : n \\geq m\\}'}</Math>, and:
          </p>
          <MathBlock>{`\\inf(a_n)_{n=m}^{\\infty} := \\inf\\{a_n : n \\geq m\\}`}</MathBlock>
          <p className="mt-2">
            to be the infimum of the same set <Math>{'\\{a_n : n \\geq m\\}'}</Math>.
          </p>
        </Definition>

        <Callout type="note" className="mt-4">
          <p>
            <strong>Notation:</strong> The quantities <Math>{'\\sup(a_n)_{n=m}^{\\infty}'}</Math> and <Math>{'\\inf(a_n)_{n=m}^{\\infty}'}</Math> are
            sometimes written as <Math>{'\\sup_{n \\geq m} a_n'}</Math> and <Math>{'\\inf_{n \\geq m} a_n'}</Math> respectively.
          </p>
        </Callout>
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Examples</h2>

        <Example id="6.3.3" title="Alternating sequence">
          <p>
            Let <Math>{'a_n := (-1)^n'}</Math>; thus <Math>{'(a_n)_{n=1}^{\\infty}'}</Math> is the
            sequence <Math>{'-1, 1, -1, 1, \\ldots'}</Math>.
          </p>
          <p className="mt-2">
            Then the set <Math>{'\\{a_n : n \\geq 1\\}'}</Math> is just the two-element
            set <Math>{'\\{-1, 1\\}'}</Math>, and hence:
          </p>
          <MathBlock>{`\\sup(a_n)_{n=1}^{\\infty} = 1 \\quad \\text{and} \\quad \\inf(a_n)_{n=1}^{\\infty} = -1`}</MathBlock>
        </Example>

        <Example id="6.3.4" title="The harmonic sequence">
          <p>
            Let <Math>{'a_n := 1/n'}</Math>; thus <Math>{'(a_n)_{n=1}^{\\infty}'}</Math> is the
            sequence <Math>{'1, 1/2, 1/3, \\ldots'}</Math>.
          </p>
          <p className="mt-2">
            Then the set <Math>{'\\{a_n : n \\geq 1\\}'}</Math> is the countable
            set <Math>{'\\{1, 1/2, 1/3, 1/4, \\ldots\\}'}</Math>. Thus:
          </p>
          <MathBlock>{`\\sup(a_n)_{n=1}^{\\infty} = 1 \\quad \\text{and} \\quad \\inf(a_n)_{n=1}^{\\infty} = 0`}</MathBlock>
          <p className="mt-2">
            Notice here that the infimum of the sequence is <strong>not</strong> actually a member
            of the sequence, though it becomes very close to the sequence eventually. So it is
            a little inaccurate to think of the supremum and infimum as the "largest element of
            the sequence" and "smallest element of the sequence" respectively.
          </p>
        </Example>

        <Example id="6.3.5" title="The natural numbers">
          <p>
            Let <Math>{'a_n := n'}</Math>; thus <Math>{'(a_n)_{n=1}^{\\infty}'}</Math> is the
            sequence <Math>{'1, 2, 3, 4, \\ldots'}</Math>.
          </p>
          <p className="mt-2">
            Then the set <Math>{'\\{a_n : n \\geq 1\\}'}</Math> is just the positive
            integers <Math>{'\\{1, 2, 3, 4, \\ldots\\}'}</Math>. Then:
          </p>
          <MathBlock>{`\\sup(a_n)_{n=1}^{\\infty} = +\\infty \\quad \\text{and} \\quad \\inf(a_n)_{n=1}^{\\infty} = 1`}</MathBlock>
        </Example>

        <Callout type="info" className="mt-4">
          <p>
            As the last example shows, it is possible for the supremum or infimum of a sequence
            to be <Math>{'+\\infty'}</Math> or <Math>{'-\\infty'}</Math>. However, if a
            sequence <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> is <strong>bounded</strong>, say bounded
            by <Math>{'M'}</Math>, then all the elements <Math>{'a_n'}</Math> lie
            between <Math>{'-M'}</Math> and <Math>{'M'}</Math>, so that the supremum and infimum
            of a bounded sequence are <strong>real numbers</strong> (i.e., not <Math>{'+\\infty'}</Math> or <Math>{'-\\infty'}</Math>).
          </p>
        </Callout>
      </section>

      {/* Least Upper Bound Property */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Least Upper Bound Property for Sequences</h2>

        <Theorem
          id="6.3.6"
          title="Proposition: Least upper bound property"
          proof={`This follows from Theorem 6.2.11 applied to the set E = {aₙ : n ≥ m}.

For the first part: by definition, x = sup(aₙ) is an upper bound for the set {aₙ : n ≥ m}, so aₙ ≤ x for all n ≥ m.

For the second part: if M is any upper bound for aₙ (i.e., aₙ ≤ M for all n ≥ m), then M is an upper bound for the set {aₙ : n ≥ m}. By Theorem 6.2.11, we have sup{aₙ : n ≥ m} ≤ M, which means x ≤ M.

For the third part: let y < x. Since x = sup{aₙ : n ≥ m}, y is not an upper bound for this set (as x is the least upper bound). Therefore, there must exist some n ≥ m with aₙ > y. Since aₙ ≤ x always holds, we have y < aₙ ≤ x as required.`}
        >
          <p>
            Let <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> be a sequence of real numbers, and let <Math>{'x'}</Math> be
            the extended real number <Math>{'x := \\sup(a_n)_{n=m}^{\\infty}'}</Math>. Then:
          </p>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>
              We have <Math>{'a_n \\leq x'}</Math> for all <Math>{'n \\geq m'}</Math>.
            </li>
            <li>
              Whenever <Math>{'M \\in \\mathbf{R}^*'}</Math> is an upper bound
              for <Math>{'a_n'}</Math> (i.e., <Math>{'a_n \\leq M'}</Math> for
              all <Math>{'n \\geq m'}</Math>), we have <Math>{'x \\leq M'}</Math>.
            </li>
            <li>
              For every extended real number <Math>{'y'}</Math> for which <Math>{'y < x'}</Math>,
              there exists at least one <Math>{'n \\geq m'}</Math> for which <Math>{'y < a_n \\leq x'}</Math>.
            </li>
          </ol>
        </Theorem>

        <Callout type="note" className="mt-4">
          <p>
            <strong>Remark 6.3.7:</strong> There is a corresponding proposition for infima, but with
            all the references to order reversed (e.g., all upper bounds should now be lower bounds,
            etc.). The proof is exactly the same.
          </p>
        </Callout>
      </section>

      {/* Monotone Bounded Sequences */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Monotone Bounded Sequences Converge</h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          In the previous section we saw that all convergent sequences are bounded. It is natural
          to ask whether the converse is true: are all bounded sequences convergent? The answer
          is <strong>no</strong>; for instance, the sequence <Math>{'1, -1, 1, -1, \\ldots'}</Math> is
          bounded, but not Cauchy and hence not convergent.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          However, if we make the sequence both bounded and <strong>monotone</strong> (i.e.,
          increasing or decreasing), then it is true that it must converge:
        </p>

        <Theorem
          id="6.3.8"
          title="Proposition: Monotone bounded sequences converge"
          proof={`Since (aₙ) is increasing and bounded above by M, the set {aₙ : n ≥ m} is non-empty and bounded above. By the least upper bound property (Theorem 5.5.9), the supremum S := sup(aₙ)_{n=m}^∞ exists and is a real number with S ≤ M.

We claim that aₙ → S as n → ∞. Let ε > 0 be given. By Proposition 6.3.6(c), since S - ε < S, there exists N ≥ m such that S - ε < aₙ ≤ S.

Now for any n ≥ N: since the sequence is increasing and n ≥ N, we have aₙ ≥ aₙ. Combined with S - ε < aₙ, we get S - ε < aₙ. Also, aₙ ≤ S always holds by Proposition 6.3.6(a).

Therefore |aₙ - S| = S - aₙ < ε for all n ≥ N. This proves aₙ → S = sup(aₙ)_{n=m}^∞.`}
        >
          <p>
            Let <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> be a sequence of real numbers which has
            some finite upper bound <Math>{'M \\in \\mathbf{R}'}</Math>, and which is
            also <strong>increasing</strong> (i.e., <Math>{'a_{n+1} \\geq a_n'}</Math> for
            all <Math>{'n \\geq m'}</Math>). Then <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> is
            convergent, and in fact:
          </p>
          <MathBlock>{`\\lim_{n \\to \\infty} a_n = \\sup(a_n)_{n=m}^{\\infty} \\leq M`}</MathBlock>
        </Theorem>

        <Callout type="info" className="mt-4">
          <p>
            One can similarly prove that if a sequence <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> is <strong>bounded
            below</strong> and <strong>decreasing</strong> (i.e., <Math>{'a_{n+1} \\leq a_n'}</Math>),
            then it is convergent, and that the limit is equal to the infimum.
          </p>
          <p className="mt-2">
            A sequence is said to be <strong>monotone</strong> if it is either increasing or decreasing.
            From Proposition 6.3.8 and Corollary 6.1.17 we see that <em>a monotone sequence converges
            if and only if it is bounded</em>.
          </p>
        </Callout>

        <Example id="6.3.9" title="Decimal approximations to π">
          <p>
            The sequence <Math>{'3, 3.1, 3.14, 3.141, 3.1415, \\ldots'}</Math> is increasing, and
            is bounded above by <Math>{'4'}</Math>. Hence by Proposition 6.3.8 it must have a limit,
            which is a real number less than or equal to <Math>{'4'}</Math>.
          </p>
          <p className="mt-2">
            (This limit is of course <Math>{'\\pi'}</Math>, but the theorem doesn't tell us what
            the limit is—only that it exists!)
          </p>
        </Example>
      </section>

      {/* Application: Powers of x */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Application: Powers of x Converge to 0</h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          Proposition 6.3.8 asserts that the limit of a monotone sequence exists, but does not
          directly say what that limit is. Nevertheless, with a little extra work one can often
          find the limit once one is given that the limit does exist.
        </p>

        <Theorem
          id="6.3.10"
          title="Proposition: Powers of x converge to 0"
          proof={`Since 0 < x < 1, one can show that the sequence (xⁿ)_{n=1}^∞ is decreasing (because xⁿ⁺¹ = x · xⁿ < xⁿ when 0 < x < 1). On the other hand, the sequence (xⁿ)_{n=1}^∞ has a lower bound of 0.

Thus by Proposition 6.3.8 (for infima instead of suprema) the sequence (xⁿ)_{n=1}^∞ converges to some limit L ≥ 0.

Since xⁿ⁺¹ = x · xⁿ, we see from the limit laws (Theorem 6.1.19) that (xⁿ⁺¹)_{n=1}^∞ converges to xL. But the sequence (xⁿ⁺¹)_{n=1}^∞ is just the sequence (xⁿ)_{n=2}^∞ shifted by one, and so they must have the same limits. So xL = L.

Since x ≠ 1, we can solve for L to obtain L = 0. Thus (xⁿ)_{n=1}^∞ converges to 0.`}
        >
          <p>
            Let <Math>{'0 < x < 1'}</Math>. Then we have:
          </p>
          <MathBlock>{`\\lim_{n \\to \\infty} x^n = 0`}</MathBlock>
        </Theorem>

        <Callout type="warning" className="mt-4">
          <p>
            Note that this proof does not work when <Math>{'x > 1'}</Math>. In fact, the
            sequence <Math>{'(x^n)_{n=1}^{\\infty}'}</Math> <strong>diverges</strong> when <Math>{'x > 1'}</Math>.
            (It grows without bound, heading to <Math>{'+\\infty'}</Math>.)
          </p>
        </Callout>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Exercises</h2>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.3.1</p>
            <p className="text-slate-300">
              Verify the claim in Example 6.3.4: show that <Math>{'\\inf(1/n)_{n=1}^{\\infty} = 0'}</Math>.
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.3.2</p>
            <p className="text-slate-300">
              Prove Proposition 6.3.6. (Hint: use Theorem 6.2.11.)
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.3.3</p>
            <p className="text-slate-300">
              Prove Proposition 6.3.8. (Hint: use Proposition 6.3.6, together with the assumption
              that <Math>{'a_n'}</Math> is increasing, to show that <Math>{'a_n'}</Math> converges
              to <Math>{'\\sup(a_n)_{n=m}^{\\infty}'}</Math>.)
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.3.4</p>
            <p className="text-slate-300">
              Explain why Proposition 6.3.10 fails when <Math>{'x > 1'}</Math>. In fact, show
              that the sequence <Math>{'(x^n)_{n=1}^{\\infty}'}</Math> diverges
              when <Math>{'x > 1'}</Math>. (Hint: prove by contradiction and use the
              identity <Math>{'(1/x)^n x^n = 1'}</Math> and the limit laws in Theorem 6.1.19.)
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>
            The <strong>supremum of a sequence</strong> is the supremum of the set of its values;
            similarly for infimum.
          </li>
          <li>
            The sup/inf of a sequence may not be attained by any element of the sequence (e.g., <Math>{'\\inf(1/n) = 0'}</Math>).
          </li>
          <li>
            For <strong>bounded</strong> sequences, sup and inf are finite real numbers.
          </li>
          <li>
            <strong>Monotone bounded sequences converge</strong>: increasing + bounded above implies
            convergence to the supremum; decreasing + bounded below implies convergence to the infimum.
          </li>
          <li>
            A monotone sequence converges <em>if and only if</em> it is bounded.
          </li>
          <li>
            For <Math>{'0 < x < 1'}</Math>, we have <Math>{'\\lim_{n \\to \\infty} x^n = 0'}</Math>.
          </li>
        </ul>
      </section>

      {/* Looking Ahead */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Looking Ahead</h2>
        <p className="text-slate-300 leading-relaxed">
          In the next section, we will introduce the concepts of <strong>limit superior</strong> (limsup)
          and <strong>limit inferior</strong> (liminf). These are defined by taking suprema and infima
          of "tail" subsequences, and then taking limits. The limsup and liminf always exist (as extended
          reals) for any sequence, and they provide a powerful way to characterize the asymptotic
          behavior of sequences—even those that don't converge in the usual sense.
        </p>
      </section>
    </LessonLayout>
  );
}
