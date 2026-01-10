import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2 className="text-2xl font-semibold mb-4">The Real Field</h2>

      <p className="mb-4">
        We now state the existence theorem which is the core of this chapter. The proof
        is rather long and a bit tedious, so it is presented in an Appendix to Chapter 1.
        The proof actually constructs <InlineMath>{'R'}</InlineMath> from <InlineMath>{'Q'}</InlineMath>.
      </p>

      <Theorem
        title="1.19 - Existence of the Real Field"
        proof={
          <p>
            The proof is presented in the Appendix to Chapter 1, where <InlineMath>{'R'}</InlineMath> is
            actually constructed from <InlineMath>{'Q'}</InlineMath> using Dedekind cuts.
          </p>
        }
      >
        <p className="mb-3">
          There exists an ordered field <InlineMath>{'R'}</InlineMath> which has the least-upper-bound property.
        </p>
        <p>
          Moreover, <InlineMath>{'R'}</InlineMath> contains <InlineMath>{'Q'}</InlineMath> as a subfield.
        </p>
      </Theorem>

      <Callout type="info" title="What This Means">
        <p>
          The second statement means that <InlineMath>{'Q \\subset R'}</InlineMath> and that the operations
          of addition and multiplication in <InlineMath>{'R'}</InlineMath>, when applied to members
          of <InlineMath>{'Q'}</InlineMath>, coincide with the usual operations on rational numbers;
          also, the positive rational numbers are positive elements of <InlineMath>{'R'}</InlineMath>.
        </p>
      </Callout>

      <p className="mb-4">
        The members of <InlineMath>{'R'}</InlineMath> are called <em>real numbers</em>.
      </p>

      <p className="mb-4">
        The next theorem could be extracted from the Dedekind cut construction with very
        little extra effort. However, we prefer to derive it from Theorem 1.19 since this
        provides a good illustration of what one can do with the least-upper-bound property.
      </p>

      <Theorem
        title="1.20 - The Archimedean Property and Density of Q"
        proof={
          <>
            <p className="mb-3">
              <strong>(a)</strong> Let <InlineMath>{'A'}</InlineMath> be the set of
              all <InlineMath>{'nx'}</InlineMath>, where <InlineMath>{'n'}</InlineMath> runs
              through the positive integers. If (a) were false, then <InlineMath>{'y'}</InlineMath> would
              be an upper bound of <InlineMath>{'A'}</InlineMath>. But then <InlineMath>{'A'}</InlineMath> has
              a least upper bound in <InlineMath>{'R'}</InlineMath>. Put <InlineMath>{'\\alpha = \\sup A'}</InlineMath>.
              Since <InlineMath>{'x > 0'}</InlineMath>, <InlineMath>{'\\alpha - x < \\alpha'}</InlineMath>,
              and <InlineMath>{'\\alpha - x'}</InlineMath> is not an upper bound of <InlineMath>{'A'}</InlineMath>.
              Hence <InlineMath>{'\\alpha - x < mx'}</InlineMath> for some positive
              integer <InlineMath>{'m'}</InlineMath>. But then <InlineMath>{'\\alpha < (m + 1)x \\in A'}</InlineMath>,
              which is impossible, since <InlineMath>{'\\alpha'}</InlineMath> is an upper bound of <InlineMath>{'A'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>(b)</strong> Since <InlineMath>{'x < y'}</InlineMath>, we
              have <InlineMath>{'y - x > 0'}</InlineMath>, and (a) furnishes a positive
              integer <InlineMath>{'n'}</InlineMath> such that
            </p>
            <MathBlock>{'n(y - x) > 1'}</MathBlock>
            <p className="mb-3">
              Apply (a) again, to obtain positive integers <InlineMath>{'m_1'}</InlineMath> and <InlineMath>{'m_2'}</InlineMath> such
              that <InlineMath>{'m_1 > nx'}</InlineMath>, <InlineMath>{'m_2 > -nx'}</InlineMath>. Then
            </p>
            <MathBlock>{'-m_2 < nx < m_1'}</MathBlock>
            <p className="mb-3">
              Hence there is an integer <InlineMath>{'m'}</InlineMath> (with <InlineMath>{'-m_2 \\leq m \\leq m_1'}</InlineMath>) such that
            </p>
            <MathBlock>{'m - 1 \\leq nx < m'}</MathBlock>
            <p className="mb-3">
              If we combine these inequalities, we obtain
            </p>
            <MathBlock>{'nx < m \\leq 1 + nx < ny'}</MathBlock>
            <p>
              Since <InlineMath>{'n > 0'}</InlineMath>, it follows that <InlineMath>{'x < m/n < y'}</InlineMath>.
              This proves (b), with <InlineMath>{'p = m/n'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          (a) If <InlineMath>{'x \\in R'}</InlineMath>, <InlineMath>{'y \\in R'}</InlineMath>,
          and <InlineMath>{'x > 0'}</InlineMath>, then there is a positive integer <InlineMath>{'n'}</InlineMath> such that
        </p>
        <MathBlock>{'nx > y'}</MathBlock>
        <p className="mb-3">
          (b) If <InlineMath>{'x \\in R'}</InlineMath>, <InlineMath>{'y \\in R'}</InlineMath>,
          and <InlineMath>{'x < y'}</InlineMath>, then there exists a <InlineMath>{'p \\in Q'}</InlineMath> such
          that <InlineMath>{'x < p < y'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="note" title="Interpretation">
        <p className="mb-2">
          Part (a) is usually referred to as the <em>archimedean property</em> of <InlineMath>{'R'}</InlineMath>.
        </p>
        <p>
          Part (b) may be stated by saying that <InlineMath>{'Q'}</InlineMath> is <em>dense</em> in <InlineMath>{'R'}</InlineMath>:
          Between any two real numbers there is a rational one.
        </p>
      </Callout>

      <p className="mb-4">
        We shall now prove the existence of <InlineMath>{'n'}</InlineMath>th roots of positive reals.
        This proof will show how the difficulty pointed out in the Introduction (the
        irrationality of <InlineMath>{'\\sqrt{2}'}</InlineMath>) can be handled in <InlineMath>{'R'}</InlineMath>.
      </p>

      <Theorem
        title="1.21 - Existence of nth Roots"
        proof={
          <>
            <p className="mb-3">
              That there is at most one such <InlineMath>{'y'}</InlineMath> is clear,
              since <InlineMath>{'0 < y_1 < y_2'}</InlineMath> implies <InlineMath>{'y_1^n < y_2^n'}</InlineMath>.
            </p>
            <p className="mb-3">
              Let <InlineMath>{'E'}</InlineMath> be the set consisting of all positive real
              numbers <InlineMath>{'t'}</InlineMath> such that <InlineMath>{'t^n < x'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'t = x/(1 + x)'}</InlineMath> then <InlineMath>{'0 \\leq t < 1'}</InlineMath>.
              Hence <InlineMath>{'t^n \\leq t < x'}</InlineMath>. Thus <InlineMath>{'t \\in E'}</InlineMath>,
              and <InlineMath>{'E'}</InlineMath> is not empty.
            </p>
            <p className="mb-3">
              If <InlineMath>{'t > 1 + x'}</InlineMath> then <InlineMath>{'t^n \\geq t > x'}</InlineMath>,
              so that <InlineMath>{'t \\notin E'}</InlineMath>. Thus <InlineMath>{'1 + x'}</InlineMath> is
              an upper bound of <InlineMath>{'E'}</InlineMath>.
            </p>
            <p className="mb-3">
              Hence Theorem 1.19 implies the existence of
            </p>
            <MathBlock>{'y = \\sup E'}</MathBlock>
            <p className="mb-3">
              To prove that <InlineMath>{'y^n = x'}</InlineMath> we will show that each of the
              inequalities <InlineMath>{'y^n < x'}</InlineMath> and <InlineMath>{'y^n > x'}</InlineMath> leads
              to a contradiction.
            </p>
            <p className="mb-3">
              The identity <InlineMath>{'b^n - a^n = (b - a)(b^{n-1} + b^{n-2}a + \\cdots + a^{n-1})'}</InlineMath> yields
              the inequality
            </p>
            <MathBlock>{'b^n - a^n < (b - a)nb^{n-1}'}</MathBlock>
            <p className="mb-3">
              when <InlineMath>{'0 < a < b'}</InlineMath>.
            </p>
            <p className="mb-3">
              Assume <InlineMath>{'y^n < x'}</InlineMath>. Choose <InlineMath>{'h'}</InlineMath> so
              that <InlineMath>{'0 < h < 1'}</InlineMath> and
            </p>
            <MathBlock>{'h < \\frac{x - y^n}{n(y + 1)^{n-1}}'}</MathBlock>
            <p className="mb-3">
              Put <InlineMath>{'a = y'}</InlineMath>, <InlineMath>{'b = y + h'}</InlineMath>. Then
            </p>
            <MathBlock>{'(y + h)^n - y^n < hn(y + h)^{n-1} < hn(y + 1)^{n-1} < x - y^n'}</MathBlock>
            <p className="mb-3">
              Thus <InlineMath>{'(y + h)^n < x'}</InlineMath>, and <InlineMath>{'y + h \\in E'}</InlineMath>.
              Since <InlineMath>{'y + h > y'}</InlineMath>, this contradicts the fact
              that <InlineMath>{'y'}</InlineMath> is an upper bound of <InlineMath>{'E'}</InlineMath>.
            </p>
            <p className="mb-3">
              Assume <InlineMath>{'y^n > x'}</InlineMath>. Put
            </p>
            <MathBlock>{'k = \\frac{y^n - x}{ny^{n-1}}'}</MathBlock>
            <p className="mb-3">
              Then <InlineMath>{'0 < k < y'}</InlineMath>. If <InlineMath>{'t \\geq y - k'}</InlineMath>, we conclude that
            </p>
            <MathBlock>{'y^n - t^n \\leq y^n - (y - k)^n < kny^{n-1} = y^n - x'}</MathBlock>
            <p className="mb-3">
              Thus <InlineMath>{'t^n > x'}</InlineMath>, and <InlineMath>{'t \\notin E'}</InlineMath>.
              It follows that <InlineMath>{'y - k'}</InlineMath> is an upper bound of <InlineMath>{'E'}</InlineMath>.
            </p>
            <p>
              But <InlineMath>{'y - k < y'}</InlineMath>, which contradicts the fact
              that <InlineMath>{'y'}</InlineMath> is the <em>least</em> upper bound of <InlineMath>{'E'}</InlineMath>.
              Hence <InlineMath>{'y^n = x'}</InlineMath>, and the proof is complete.
            </p>
          </>
        }
      >
        <p>
          For every real <InlineMath>{'x > 0'}</InlineMath> and every integer <InlineMath>{'n > 0'}</InlineMath> there
          is one and only one positive real <InlineMath>{'y'}</InlineMath> such
          that <InlineMath>{'y^n = x'}</InlineMath>.
        </p>
      </Theorem>

      <p className="mb-4">
        This number <InlineMath>{'y'}</InlineMath> is written <InlineMath>{'\\sqrt[n]{x}'}</InlineMath> or <InlineMath>{'x^{1/n}'}</InlineMath>.
      </p>

      <Theorem
        title="Corollary - Product Rule for Roots"
        proof={
          <>
            <p className="mb-3">
              Put <InlineMath>{'\\alpha = a^{1/n}'}</InlineMath>, <InlineMath>{'\\beta = b^{1/n}'}</InlineMath>. Then
            </p>
            <MathBlock>{'ab = \\alpha^n\\beta^n = (\\alpha\\beta)^n'}</MathBlock>
            <p>
              since multiplication is commutative. [Axiom (M2) in Definition 1.12.] The
              uniqueness assertion of Theorem 1.21 shows therefore that
            </p>
            <MathBlock>{'(ab)^{1/n} = \\alpha\\beta = a^{1/n}b^{1/n}'}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>{'a'}</InlineMath> and <InlineMath>{'b'}</InlineMath> are positive real numbers
          and <InlineMath>{'n'}</InlineMath> is a positive integer, then
        </p>
        <MathBlock>{'(ab)^{1/n} = a^{1/n}b^{1/n}'}</MathBlock>
      </Theorem>

      <Callout type="info" title="1.22 - Decimals">
        <p className="mb-3">
          We conclude this section by pointing out the relation between real numbers and decimals.
        </p>
        <p className="mb-3">
          Let <InlineMath>{'x > 0'}</InlineMath> be real. Let <InlineMath>{'n_0'}</InlineMath> be the
          largest integer such that <InlineMath>{'n_0 \\leq x'}</InlineMath>. (Note that the existence
          of <InlineMath>{'n_0'}</InlineMath> depends on the archimedean property of <InlineMath>{'R'}</InlineMath>.)
          Having chosen <InlineMath>{'n_0, n_1, \\ldots, n_{k-1}'}</InlineMath>,
          let <InlineMath>{'n_k'}</InlineMath> be the largest integer such that
        </p>
        <MathBlock>{'n_0 + \\frac{n_1}{10} + \\cdots + \\frac{n_k}{10^k} \\leq x'}</MathBlock>
        <p className="mb-3">
          Let <InlineMath>{'E'}</InlineMath> be the set of these numbers. Then <InlineMath>{'x = \\sup E'}</InlineMath>.
          The decimal expansion of <InlineMath>{'x'}</InlineMath> is
        </p>
        <MathBlock>{'n_0.n_1n_2n_3\\cdots'}</MathBlock>
        <p>
          Conversely, for any infinite decimal, the set <InlineMath>{'E'}</InlineMath> of numbers as above
          is bounded above, and the decimal is the decimal expansion of <InlineMath>{'\\sup E'}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>There exists an ordered field <InlineMath>{'R'}</InlineMath> with the least-upper-bound property</li>
        <li><InlineMath>{'Q'}</InlineMath> is contained in <InlineMath>{'R'}</InlineMath> as a subfield</li>
        <li>The Archimedean property: for any <InlineMath>{'x > 0'}</InlineMath> and any <InlineMath>{'y'}</InlineMath>, there exists <InlineMath>{'n'}</InlineMath> with <InlineMath>{'nx > y'}</InlineMath></li>
        <li><InlineMath>{'Q'}</InlineMath> is dense in <InlineMath>{'R'}</InlineMath>: between any two reals there is a rational</li>
        <li>Every positive real has a unique positive <InlineMath>{'n'}</InlineMath>th root</li>
        <li>Real numbers correspond to infinite decimal expansions</li>
      </ul>
    </LessonLayout>
  );
}
