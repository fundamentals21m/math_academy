import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Introduction</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Consider the sequence <Math>{'1.1, -1.01, 1.001, -1.0001, 1.00001, \\ldots'}</Math>. This
          sequence does not converge—half the time it gets close to <Math>{'1'}</Math>, and half
          the time it gets close to <Math>{'-1'}</Math>. However, even though <Math>{'-1'}</Math> and <Math>{'+1'}</Math> are
          not limits of this sequence, it seems that in some vague way they "want" to be limits.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          To make this notion precise, we introduce <strong>limit points</strong>. We then define
          the <strong>limit superior</strong> (limsup) and <strong>limit inferior</strong> (liminf),
          which are the largest and smallest limit points of a sequence. These concepts allow us
          to characterize sequences that oscillate or diverge, and lead to powerful tools like
          the <em>squeeze test</em> and the <em>completeness theorem</em>.
        </p>
      </section>

      {/* Limit Points */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Limit Points</h2>

        <Definition
          id="6.4.1"
          title="Limit points"
        >
          <p>
            Let <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> be a sequence of real numbers,
            let <Math>{'x'}</Math> be a real number, and let <Math>{'\\varepsilon > 0'}</Math> be
            a real number.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              We say that <Math>{'x'}</Math> is <strong><Math>{'\\varepsilon'}</Math>-adherent</strong> to <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> iff
              there exists an <Math>{'n \\geq m'}</Math> such that <Math>{'a_n'}</Math> is <Math>{'\\varepsilon'}</Math>-close
              to <Math>{'x'}</Math>.
            </li>
            <li>
              We say that <Math>{'x'}</Math> is <strong>continually <Math>{'\\varepsilon'}</Math>-adherent</strong> to <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> iff
              it is <Math>{'\\varepsilon'}</Math>-adherent to <Math>{'(a_n)_{n=N}^{\\infty}'}</Math> for
              every <Math>{'N \\geq m'}</Math>.
            </li>
            <li>
              We say that <Math>{'x'}</Math> is a <strong>limit point</strong> or <strong>adherent
              point</strong> of <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> iff it is
              continually <Math>{'\\varepsilon'}</Math>-adherent to <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> for
              every <Math>{'\\varepsilon > 0'}</Math>.
            </li>
          </ul>
        </Definition>

        <Callout type="note" className="mt-4">
          <p>
            <strong>Remark 6.4.2:</strong> The verb "to adhere" means much the same as "to stick
            to"; hence the term "adhesive".
          </p>
        </Callout>

        <p className="text-slate-300 leading-relaxed mt-4 mb-4">
          Unwrapping all the definitions, we see that <Math>{'x'}</Math> is a limit point
          of <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> if, for every <Math>{'\\varepsilon > 0'}</Math> and
          every <Math>{'N \\geq m'}</Math>, there exists an <Math>{'n \\geq N'}</Math> such
          that <Math>{'|a_n - x| \\leq \\varepsilon'}</Math>.
        </p>

        <Callout type="warning" className="mt-4">
          <p>
            <strong>Subtle differences in quantifiers:</strong>
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              A sequence being <Math>{'\\varepsilon'}</Math>-close to <Math>{'L'}</Math> means <em>all</em> elements
              stay within distance <Math>{'\\varepsilon'}</Math> of <Math>{'L'}</Math>.
            </li>
            <li>
              <Math>{'L'}</Math> being <Math>{'\\varepsilon'}</Math>-adherent to a sequence only
              needs a <em>single</em> element within distance <Math>{'\\varepsilon'}</Math>.
            </li>
            <li>
              For <Math>{'L'}</Math> to be continually <Math>{'\\varepsilon'}</Math>-adherent, it must
              be <Math>{'\\varepsilon'}</Math>-adherent to <em>all</em> tails <Math>{'(a_n)_{n=N}^{\\infty}'}</Math>.
            </li>
            <li>
              For <Math>{'(a_n)'}</Math> to be eventually <Math>{'\\varepsilon'}</Math>-close to <Math>{'L'}</Math>,
              we only need <em>some</em> tail to be <Math>{'\\varepsilon'}</Math>-close.
            </li>
          </ul>
        </Callout>
      </section>

      {/* Examples of Limit Points */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Examples of Limit Points</h2>

        <Example id="6.4.3" title="Convergent sequence">
          <p>
            Let <Math>{'(a_n)_{n=1}^{\\infty}'}</Math> denote the
            sequence <Math>{'0.9, 0.99, 0.999, 0.9999, \\ldots'}</Math>.
          </p>
          <p className="mt-2">
            The number <Math>{'0.8'}</Math> is <Math>{'0.1'}</Math>-adherent to this sequence,
            since <Math>{'0.8'}</Math> is <Math>{'0.1'}</Math>-close to <Math>{'0.9'}</Math>. However,
            it is <strong>not</strong> continually <Math>{'0.1'}</Math>-adherent, since once one
            discards the first element there is no member of the sequence within <Math>{'0.1'}</Math> of <Math>{'0.8'}</Math>.
            Thus <Math>{'0.8'}</Math> is not a limit point.
          </p>
          <p className="mt-2">
            On the other hand, <Math>{'1'}</Math> is continually <Math>{'\\varepsilon'}</Math>-adherent
            for every <Math>{'\\varepsilon > 0'}</Math>, and hence <Math>{'1'}</Math> is a limit
            point of this sequence.
          </p>
        </Example>

        <Example id="6.4.4" title="Oscillating sequence">
          <p>
            Consider the sequence <Math>{'1.1, -1.01, 1.001, -1.0001, 1.00001, \\ldots'}</Math>.
          </p>
          <p className="mt-2">
            The number <Math>{'1'}</Math> is <Math>{'0.1'}</Math>-adherent to this sequence; in
            fact it is continually <Math>{'0.1'}</Math>-adherent, because no matter how many elements
            one discards, there are always elements within <Math>{'0.1'}</Math> of <Math>{'1'}</Math>.
            Since this holds for every <Math>{'\\varepsilon > 0'}</Math>, <Math>{'1'}</Math> is
            a limit point.
          </p>
          <p className="mt-2">
            Similarly, <Math>{'-1'}</Math> is a limit point. However, <Math>{'0'}</Math> is not
            a limit point (it is not continually <Math>{'0.1'}</Math>-adherent).
          </p>
        </Example>

        <Theorem
          id="6.4.5"
          title="Proposition: Limits are limit points"
          proof={`Suppose (aₙ) converges to c. Let ε > 0 and N ≥ m be given. Since (aₙ) converges to c, there exists some M ≥ m such that |aₙ - c| ≤ ε for all n ≥ M. Taking n = max(N, M), we have n ≥ N and |aₙ - c| ≤ ε. This shows c is ε-adherent to (aₙ)_{n=N}^∞ for every N ≥ m, so c is continually ε-adherent. Since ε was arbitrary, c is a limit point.

For uniqueness: suppose c' ≠ c is also a limit point. Let ε = |c - c'|/3 > 0. Since (aₙ) converges to c, eventually |aₙ - c| ≤ ε. But for c' to be continually ε-adherent, there would need to be arbitrarily late terms with |aₙ - c'| ≤ ε. By the triangle inequality, this would give |c - c'| ≤ 2ε = 2|c - c'|/3, a contradiction. So c is the only limit point.`}
        >
          <p>
            Let <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> be a sequence which converges to a real
            number <Math>{'c'}</Math>. Then <Math>{'c'}</Math> is a limit point
            of <Math>{'(a_n)_{n=m}^{\\infty}'}</Math>, and in fact it is the <strong>only</strong> limit
            point of <Math>{'(a_n)_{n=m}^{\\infty}'}</Math>.
          </p>
        </Theorem>
      </section>

      {/* Limit Superior and Limit Inferior */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Limit Superior and Limit Inferior</h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          Now we look at two special types of limit points: the <strong>limit superior</strong> (lim sup)
          and <strong>limit inferior</strong> (lim inf).
        </p>

        <Definition
          id="6.4.6"
          title="Limit superior and limit inferior"
        >
          <p>
            Suppose that <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> is a sequence. We define a new
            sequence <Math>{'(a_N^+)_{N=m}^{\\infty}'}</Math> by the formula:
          </p>
          <MathBlock>{`a_N^+ := \\sup(a_n)_{n=N}^{\\infty}`}</MathBlock>
          <p className="mt-2">
            More informally, <Math>{'a_N^+'}</Math> is the supremum of all the elements in the
            sequence from <Math>{'a_N'}</Math> onwards. We then define the <strong>limit
            superior</strong> of the sequence <Math>{'(a_n)_{n=m}^{\\infty}'}</Math>,
            denoted <Math>{'\\limsup_{n \\to \\infty} a_n'}</Math>, by the formula:
          </p>
          <MathBlock>{`\\limsup_{n \\to \\infty} a_n := \\inf(a_N^+)_{N=m}^{\\infty}`}</MathBlock>
          <p className="mt-4">
            Similarly, we can define:
          </p>
          <MathBlock>{`a_N^- := \\inf(a_n)_{n=N}^{\\infty}`}</MathBlock>
          <p className="mt-2">
            and define the <strong>limit inferior</strong> of the sequence <Math>{'(a_n)_{n=m}^{\\infty}'}</Math>,
            denoted <Math>{'\\liminf_{n \\to \\infty} a_n'}</Math>, by the formula:
          </p>
          <MathBlock>{`\\liminf_{n \\to \\infty} a_n := \\sup(a_N^-)_{N=m}^{\\infty}`}</MathBlock>
        </Definition>

        <Callout type="info" className="mt-4">
          <p>
            <strong>Piston analogy:</strong> Imagine a piston at <Math>{'+\\infty'}</Math> moving
            leftward until stopped by the sequence. It stops at <Math>{'a_1^+ = \\sup(a_n)_{n=1}^{\\infty}'}</Math>.
            Now remove <Math>{'a_1'}</Math>; the piston may slip to <Math>{'a_2^+'}</Math>. Keep
            removing elements—the piston keeps slipping leftward. The final position is the
            limsup. Similarly for liminf with a piston from <Math>{'-\\infty'}</Math>.
          </p>
        </Callout>
      </section>

      {/* Examples of Limsup and Liminf */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Examples of Limsup and Liminf</h2>

        <Example id="6.4.7" title="Oscillating sequence">
          <p>
            Let <Math>{'a_1, a_2, a_3, \\ldots'}</Math> denote the
            sequence <Math>{'1.1, -1.01, 1.001, -1.0001, 1.00001, \\ldots'}</Math>.
          </p>
          <p className="mt-2">
            Then <Math>{'a_1^+, a_2^+, a_3^+, \\ldots'}</Math> is the
            sequence <Math>{'1.1, 1.001, 1.001, 1.00001, 1.00001, \\ldots'}</Math>, and its infimum
            is <Math>{'1'}</Math>. Hence <Math>{'\\limsup_{n \\to \\infty} a_n = 1'}</Math>.
          </p>
          <p className="mt-2">
            Similarly, <Math>{'a_1^-, a_2^-, a_3^-, \\ldots'}</Math> is the
            sequence <Math>{'-1.01, -1.01, -1.0001, -1.0001, -1.000001, \\ldots'}</Math>, and its
            supremum is <Math>{'-1'}</Math>. Hence <Math>{'\\liminf_{n \\to \\infty} a_n = -1'}</Math>.
          </p>
          <p className="mt-2">
            Compare this with the supremum and infimum of the sequence, which are <Math>{'1.1'}</Math> and <Math>{'-1.01'}</Math> respectively.
          </p>
        </Example>

        <Example id="6.4.8" title="Unbounded oscillating sequence">
          <p>
            Let <Math>{'a_1, a_2, a_3, \\ldots'}</Math> denote the
            sequence <Math>{'1, -2, 3, -4, 5, -6, 7, -8, \\ldots'}</Math>.
          </p>
          <p className="mt-2">
            Then <Math>{'a_1^+, a_2^+, \\ldots'}</Math> is the
            sequence <Math>{'+\\infty, +\\infty, +\\infty, \\ldots'}</Math>, so the limit
            superior is <Math>{'+\\infty'}</Math>.
          </p>
          <p className="mt-2">
            Similarly, <Math>{'a_1^-, a_2^-, \\ldots'}</Math> is the
            sequence <Math>{'-\\infty, -\\infty, -\\infty, \\ldots'}</Math>, so the limit
            inferior is <Math>{'-\\infty'}</Math>.
          </p>
        </Example>

        <Example id="6.4.9" title="Alternating harmonic-type sequence">
          <p>
            Let <Math>{'a_1, a_2, a_3, \\ldots'}</Math> denote the
            sequence <Math>{'1, -1/2, 1/3, -1/4, 1/5, -1/6, \\ldots'}</Math>.
          </p>
          <p className="mt-2">
            Then <Math>{'a_1^+, a_2^+, \\ldots'}</Math> is the
            sequence <Math>{'1, 1/3, 1/3, 1/5, 1/5, 1/7, \\ldots'}</Math>, which has infimum <Math>{'0'}</Math>.
            So <Math>{'\\limsup_{n \\to \\infty} a_n = 0'}</Math>.
          </p>
          <p className="mt-2">
            Similarly, <Math>{'a_1^-, a_2^-, \\ldots'}</Math> is the
            sequence <Math>{'-1/2, -1/2, -1/4, -1/4, -1/6, -1/6, \\ldots'}</Math>, which has
            supremum <Math>{'0'}</Math>. So <Math>{'\\liminf_{n \\to \\infty} a_n = 0'}</Math>.
          </p>
        </Example>

        <Example id="6.4.10" title="Divergent to +∞">
          <p>
            Let <Math>{'a_1, a_2, a_3, \\ldots'}</Math> denote the
            sequence <Math>{'1, 2, 3, 4, 5, 6, \\ldots'}</Math>.
          </p>
          <p className="mt-2">
            Then <Math>{'a_1^+, a_2^+, \\ldots'}</Math> is the
            sequence <Math>{'+\\infty, +\\infty, +\\infty, \\ldots'}</Math>, so <Math>{'\\limsup = +\\infty'}</Math>.
          </p>
          <p className="mt-2">
            Similarly, <Math>{'a_1^-, a_2^-, \\ldots'}</Math> is the
            sequence <Math>{'1, 2, 3, 4, 5, \\ldots'}</Math>, which has
            supremum <Math>{'+\\infty'}</Math>. So <Math>{'\\liminf = +\\infty'}</Math>.
          </p>
        </Example>
      </section>

      {/* Properties of Limsup and Liminf */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Properties of Limsup and Liminf</h2>

        <Theorem
          id="6.4.12"
          title="Proposition: Properties of limsup and liminf"
          proof={`We prove parts (a) and (b); the others are similar or follow from these.

(a) Suppose x > L⁺. By definition of L⁺, we have x > inf(a_N⁺). By Proposition 6.3.6, there exists N ≥ m such that x > a_N⁺. Since a_N⁺ = sup(aₙ)_{n=N}^∞, we have x > aₙ for all n ≥ N, as desired.

(b) Suppose x < L⁺. Then x < inf(a_N⁺). For any N ≥ m, by Proposition 6.3.6, x < a_N⁺. Since a_N⁺ = sup(aₙ)_{n=N}^∞, there must exist n ≥ N such that aₙ > x.

Parts (c)-(f) follow by combining the earlier parts with the definitions and properties of limit points.`}
        >
          <p>
            Let <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> be a sequence of real numbers, let <Math>{'L^+'}</Math> be
            the limit superior, and let <Math>{'L^-'}</Math> be the limit inferior.
          </p>
          <ol className="list-alpha pl-6 mt-2 space-y-2">
            <li>
              For every <Math>{'x > L^+'}</Math>, there exists <Math>{'N \\geq m'}</Math> such
              that <Math>{'a_n < x'}</Math> for all <Math>{'n \\geq N'}</Math>. (Elements are
              eventually less than any value above <Math>{'L^+'}</Math>.)
            </li>
            <li>
              For every <Math>{'x < L^+'}</Math> and every <Math>{'N \\geq m'}</Math>, there
              exists <Math>{'n \\geq N'}</Math> such that <Math>{'a_n > x'}</Math>. (Elements
              exceed any value below <Math>{'L^+'}</Math> infinitely often.)
            </li>
            <li>
              We have <Math>{'\\inf(a_n)_{n=m}^{\\infty} \\leq L^- \\leq L^+ \\leq \\sup(a_n)_{n=m}^{\\infty}'}</Math>.
            </li>
            <li>
              If <Math>{'c'}</Math> is any limit point of <Math>{'(a_n)_{n=m}^{\\infty}'}</Math>,
              then <Math>{'L^- \\leq c \\leq L^+'}</Math>.
            </li>
            <li>
              If <Math>{'L^+'}</Math> is finite, then it is a limit point. Similarly
              for <Math>{'L^-'}</Math>.
            </li>
            <li>
              Let <Math>{'c'}</Math> be a real number. If <Math>{'(a_n)'}</Math> converges
              to <Math>{'c'}</Math>, then <Math>{'L^+ = L^- = c'}</Math>. Conversely,
              if <Math>{'L^+ = L^- = c'}</Math>, then <Math>{'(a_n)'}</Math> converges to <Math>{'c'}</Math>.
            </li>
          </ol>
        </Theorem>

        <Callout type="info" className="mt-4">
          <p>
            Parts (d) and (e) say that <Math>{'L^+'}</Math> is the <strong>largest</strong> limit
            point and <Math>{'L^-'}</Math> is the <strong>smallest</strong> limit point (when finite).
            Part (f) gives a way to test convergence: compute limsup and liminf; if they're equal,
            the sequence converges to that common value.
          </p>
        </Callout>
      </section>

      {/* Comparison Principle and Squeeze Test */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Comparison Principle and Squeeze Test</h2>

        <Theorem
          id="6.4.13"
          title="Lemma: Comparison principle"
          proof={`If aₙ ≤ bₙ for all n ≥ m, then the set {aₙ : n ≥ m} is bounded above by sup{bₙ : n ≥ m}, so sup(aₙ) ≤ sup(bₙ). Similarly for inf.

For limsup: we have a_N⁺ = sup(aₙ)_{n=N}^∞ ≤ sup(bₙ)_{n=N}^∞ = b_N⁺ for each N. Taking inf over N gives limsup aₙ ≤ limsup bₙ. The liminf case is similar.`}
        >
          <p>
            Suppose <Math>{'(a_n)_{n=m}^{\\infty}'}</Math> and <Math>{'(b_n)_{n=m}^{\\infty}'}</Math> are
            two sequences of real numbers such that <Math>{'a_n \\leq b_n'}</Math> for
            all <Math>{'n \\geq m'}</Math>. Then:
          </p>
          <MathBlock>{`\\sup(a_n)_{n=m}^{\\infty} \\leq \\sup(b_n)_{n=m}^{\\infty}`}</MathBlock>
          <MathBlock>{`\\inf(a_n)_{n=m}^{\\infty} \\leq \\inf(b_n)_{n=m}^{\\infty}`}</MathBlock>
          <MathBlock>{`\\limsup_{n \\to \\infty} a_n \\leq \\limsup_{n \\to \\infty} b_n`}</MathBlock>
          <MathBlock>{`\\liminf_{n \\to \\infty} a_n \\leq \\liminf_{n \\to \\infty} b_n`}</MathBlock>
        </Theorem>

        <Theorem
          id="6.4.14"
          title="Corollary: Squeeze test"
          proof={`Since aₙ ≤ bₙ ≤ cₙ and both (aₙ) and (cₙ) converge to L, by Proposition 6.4.12(f), limsup aₙ = liminf aₙ = L and limsup cₙ = liminf cₙ = L.

By the comparison principle (Lemma 6.4.13):
• liminf aₙ ≤ liminf bₙ ≤ liminf cₙ, so L ≤ liminf bₙ ≤ L
• limsup aₙ ≤ limsup bₙ ≤ limsup cₙ, so L ≤ limsup bₙ ≤ L

Thus liminf bₙ = limsup bₙ = L, so by Proposition 6.4.12(f), (bₙ) converges to L.`}
        >
          <p>
            Let <Math>{'(a_n)_{n=m}^{\\infty}'}</Math>, <Math>{'(b_n)_{n=m}^{\\infty}'}</Math>,
            and <Math>{'(c_n)_{n=m}^{\\infty}'}</Math> be sequences of real numbers such that:
          </p>
          <MathBlock>{`a_n \\leq b_n \\leq c_n \\quad \\text{for all } n \\geq m`}</MathBlock>
          <p className="mt-2">
            Suppose also that <Math>{'(a_n)'}</Math> and <Math>{'(c_n)'}</Math> both converge to the
            same limit <Math>{'L'}</Math>. Then <Math>{'(b_n)'}</Math> is also convergent to <Math>{'L'}</Math>.
          </p>
        </Theorem>

        <Example id="6.4.15" title="Application of squeeze test">
          <p>
            We know that <Math>{'\\lim_{n \\to \\infty} 1/n = 0'}</Math>. By the limit laws, this
            also implies <Math>{'\\lim_{n \\to \\infty} 2/n = 0'}</Math> and <Math>{'\\lim_{n \\to \\infty} (-2/n) = 0'}</Math>.
          </p>
          <p className="mt-2">
            The squeeze test then shows that any sequence <Math>{'(b_n)_{n=1}^{\\infty}'}</Math> for
            which <Math>{'-2/n \\leq b_n \\leq 2/n'}</Math> for all <Math>{'n \\geq 1'}</Math> is
            convergent to <Math>{'0'}</Math>.
          </p>
          <p className="mt-2">
            For instance, this shows that <Math>{'(-1)^n/n + 1/n^2'}</Math> converges to zero,
            or that <Math>{'2^{-n}'}</Math> converges to zero.
          </p>
        </Example>
      </section>

      {/* Zero Test and Completeness */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Zero Test and Completeness of the Reals</h2>

        <Theorem
          id="6.4.17"
          title="Corollary: Zero test for sequences"
          proof={`One direction: if aₙ → 0, then |aₙ| → 0 by the limit laws and the fact that ||x| - |y|| ≤ |x - y|.

Other direction: if |aₙ| → 0, we have -|aₙ| ≤ aₙ ≤ |aₙ|. Since both -|aₙ| → 0 and |aₙ| → 0, by the squeeze test, aₙ → 0.`}
        >
          <p>
            Let <Math>{'(a_n)_{n=M}^{\\infty}'}</Math> be a sequence of real numbers.
            Then <Math>{'\\lim_{n \\to \\infty} a_n'}</Math> exists and equals zero if and only
            if <Math>{'\\lim_{n \\to \\infty} |a_n|'}</Math> exists and equals zero.
          </p>
        </Theorem>

        <Theorem
          id="6.4.18"
          title="Theorem: Completeness of the reals"
          proof={`By Proposition 6.1.12, every convergent sequence is Cauchy. We prove the converse.

Let (aₙ)_{n=1}^∞ be Cauchy. By Corollary 6.1.17, it's bounded. By Proposition 6.4.12(c), L⁻ := liminf aₙ and L⁺ := limsup aₙ are both finite.

To show convergence, by Proposition 6.4.12(f), it suffices to show L⁻ = L⁺.

Let ε > 0. Since (aₙ) is Cauchy, there exists N ≥ 1 such that |aₙ - aₘ| ≤ ε for all n, m ≥ N. In particular, aₙ - ε ≤ aₘ ≤ aₙ + ε for all n, m ≥ N.

This means:
aₙ - ε ≤ inf(aₘ)_{m=N}^∞ ≤ sup(aₘ)_{m=N}^∞ ≤ aₙ + ε

By definition of L⁻ and L⁺:
aₙ - ε ≤ L⁻ ≤ L⁺ ≤ aₙ + ε

Thus 0 ≤ L⁺ - L⁻ ≤ 2ε. Since this holds for all ε > 0, we have L⁺ = L⁻.`}
        >
          <p>
            A sequence <Math>{'(a_n)_{n=1}^{\\infty}'}</Math> of real numbers is a Cauchy sequence
            if and only if it is convergent.
          </p>
        </Theorem>

        <Callout type="info" className="mt-4">
          <p>
            <strong>Remark 6.4.20:</strong> This theorem says that the real numbers are
            a <em>complete metric space</em>—they do not contain "holes" the same way the
            rationals do. (The rationals have many Cauchy sequences that don't converge to
            rationals, like <Math>{'1, 1.4, 1.41, 1.414, \\ldots \\to \\sqrt{2}'}</Math>.)
          </p>
          <p className="mt-2">
            This property, closely related to the least upper bound property (Theorem 5.5.9),
            is one of the principal characteristics that make the real numbers superior to the
            rationals for doing analysis.
          </p>
        </Callout>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Exercises</h2>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.4.1</p>
            <p className="text-slate-300">
              Prove Proposition 6.4.5.
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.4.3</p>
            <p className="text-slate-300">
              Prove parts (c), (d), (e), (f) of Proposition 6.4.12. (Hint: you can use earlier
              parts to prove later ones.)
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.4.4</p>
            <p className="text-slate-300">
              Prove Lemma 6.4.13.
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.4.5</p>
            <p className="text-slate-300">
              Use Lemma 6.4.13 to prove Corollary 6.4.14 (the squeeze test).
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <p className="text-amber-400 font-semibold mb-2">Exercise 6.4.7</p>
            <p className="text-slate-300">
              Prove Corollary 6.4.17. Is the corollary still true if we replace zero by some
              other number?
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>
            A <strong>limit point</strong> of a sequence is a value that is continually <Math>{'\\varepsilon'}</Math>-adherent
            for every <Math>{'\\varepsilon > 0'}</Math>—infinitely many terms stay arbitrarily close.
          </li>
          <li>
            If a sequence converges, its limit is the unique limit point.
          </li>
          <li>
            <strong>Limsup</strong> = inf of suprema of tails; <strong>liminf</strong> = sup of infima of tails.
          </li>
          <li>
            Limsup is the <em>largest</em> limit point; liminf is the <em>smallest</em>.
          </li>
          <li>
            A sequence converges iff limsup = liminf (and equals the limit).
          </li>
          <li>
            <strong>Squeeze test:</strong> If <Math>{'a_n \\leq b_n \\leq c_n'}</Math> and <Math>{'a_n, c_n \\to L'}</Math>,
            then <Math>{'b_n \\to L'}</Math>.
          </li>
          <li>
            <strong>Completeness:</strong> A sequence of reals is Cauchy iff it converges.
          </li>
        </ul>
      </section>

      {/* Looking Ahead */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Looking Ahead</h2>
        <p className="text-slate-300 leading-relaxed">
          In the next section, we will use the tools developed here to compute a variety of
          standard limits. The squeeze test, combined with the limit laws and the monotone
          bounded sequence theorem, allows us to evaluate limits
          like <Math>{'\\lim_{n \\to \\infty} n^{1/n}'}</Math> and <Math>{'\\lim_{n \\to \\infty} x^{1/n}'}</Math>.
          These techniques form the foundation for understanding series, which we'll study in
          Chapter 7.
        </p>
      </section>
    </LessonLayout>
  );
}
