import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-semibold mb-4">Subsequences</h2>

      <p className="mb-6">
        Given a sequence <InlineMath>{'\\{p_n\\}'}</InlineMath>, we can extract from it
        another sequence by keeping only certain terms. This new sequence, called a
        subsequence, inherits many properties from the original sequence but can also
        have its own distinct behavior.
      </p>

      <Definition title="Subsequence (3.5)">
        <p className="mb-4">
          Given a sequence <InlineMath>{'\\{p_n\\}'}</InlineMath>, consider a sequence
          <InlineMath>{'\\{n_k\\}'}</InlineMath> of positive integers, such
          that <InlineMath>{'n_1 < n_2 < n_3 < \\cdots'}</InlineMath>. Then the
          sequence <InlineMath>{'\\{p_{n_k}\\}'}</InlineMath> is called
          a <em>subsequence</em> of <InlineMath>{'\\{p_n\\}'}</InlineMath>.
        </p>
        <p>
          If <InlineMath>{'\\{p_{n_k}\\}'}</InlineMath> converges, its limit is called
          a <em>subsequential limit</em> of <InlineMath>{'\\{p_n\\}'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          It is clear that <InlineMath>{'\\{p_n\\}'}</InlineMath> converges
          to <InlineMath>p</InlineMath> if and only if every subsequence
          of <InlineMath>{'\\{p_n\\}'}</InlineMath> converges to <InlineMath>p</InlineMath>.
          We leave the details of the proof to the reader.
        </p>
      </Callout>

      <Theorem
        title="Subsequences in Compact Spaces (3.6)"
        proof={
          <>
            <p className="mb-4">
              <strong>(a)</strong> Let <InlineMath>E</InlineMath> be the range
              of <InlineMath>{'\\{p_n\\}'}</InlineMath>. If <InlineMath>E</InlineMath> is finite
              then there is a <InlineMath>{'p \\in E'}</InlineMath> and a
              sequence <InlineMath>{'\\{n_i\\}'}</InlineMath> with <InlineMath>{'n_1 < n_2 < n_3 < \\cdots'}</InlineMath>,
              such that
            </p>
            <MathBlock>{'p_{n_1} = p_{n_2} = \\cdots = p.'}</MathBlock>
            <p className="mb-4">
              The subsequence <InlineMath>{'\\{p_{n_i}\\}'}</InlineMath> so obtained converges
              evidently to <InlineMath>p</InlineMath>.
            </p>
            <p className="mb-4">
              If <InlineMath>E</InlineMath> is infinite, Theorem 2.37 shows
              that <InlineMath>E</InlineMath> has a limit point <InlineMath>{'p \\in X'}</InlineMath>.
              Choose <InlineMath>{'n_1'}</InlineMath> so that <InlineMath>{'d(p, p_{n_1}) < 1'}</InlineMath>.
              Having chosen <InlineMath>{'n_1, \\ldots, n_{i-1}'}</InlineMath>, we see from
              Theorem 2.20 that there is an integer <InlineMath>{'n_i > n_{i-1}'}</InlineMath> such
              that <InlineMath>{'d(p, p_{n_i}) < 1/i'}</InlineMath>.
              Then <InlineMath>{'\\{p_{n_i}\\}'}</InlineMath> converges to <InlineMath>p</InlineMath>.
            </p>
            <p>
              <strong>(b)</strong> This follows from (a), since Theorem 2.41 implies that every bounded
              subset of <InlineMath>{'R^k'}</InlineMath> lies in a compact subset of <InlineMath>{'R^k'}</InlineMath>.
            </p>
          </>
        }
      >
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>(a)</strong> If <InlineMath>{'\\{p_n\\}'}</InlineMath> is a sequence
            in a compact metric space <InlineMath>X</InlineMath>, then some subsequence
            of <InlineMath>{'\\{p_n\\}'}</InlineMath> converges to a point of <InlineMath>X</InlineMath>.
          </li>
          <li>
            <strong>(b)</strong> Every bounded sequence in <InlineMath>{'R^k'}</InlineMath> contains
            a convergent subsequence.
          </li>
        </ul>
      </Theorem>

      <Callout type="warning">
        <p>
          Part (b) is the famous <strong>Bolzano-Weierstrass Theorem</strong>: every bounded
          sequence of real numbers has a convergent subsequence. This is one of the most
          important results in real analysis.
        </p>
      </Callout>

      <Theorem
        title="Subsequential Limits Form a Closed Set (3.7)"
        proof={
          <>
            <p className="mb-4">
              Let <InlineMath>{'E^*'}</InlineMath> be the set of all subsequential limits
              of <InlineMath>{'\\{p_n\\}'}</InlineMath> and let <InlineMath>q</InlineMath> be
              a limit point of <InlineMath>{'E^*'}</InlineMath>. We have to show
              that <InlineMath>{'q \\in E^*'}</InlineMath>.
            </p>
            <p className="mb-4">
              Choose <InlineMath>{'n_1'}</InlineMath> so that <InlineMath>{'p_{n_1} \\neq q'}</InlineMath>.
              (If no such <InlineMath>{'n_1'}</InlineMath> exists, then <InlineMath>{'E^*'}</InlineMath> has
              only one point, and there is nothing to prove.) Put <InlineMath>{'\\delta = d(q, p_{n_1})'}</InlineMath>.
              Suppose <InlineMath>{'n_1, \\ldots, n_{i-1}'}</InlineMath> are chosen.
              Since <InlineMath>q</InlineMath> is a limit point of <InlineMath>{'E^*'}</InlineMath>,
              there is an <InlineMath>{'x \\in E^*'}</InlineMath> with <InlineMath>{'d(x, q) < 2^{-i}\\delta'}</InlineMath>.
              Since <InlineMath>{'x \\in E^*'}</InlineMath>, there is
              an <InlineMath>{'n_i > n_{i-1}'}</InlineMath> such that <InlineMath>{'d(x, p_{n_i}) < 2^{-i}\\delta'}</InlineMath>. Thus
            </p>
            <MathBlock>{'d(q, p_{n_i}) \\leq 2^{1-i}\\delta'}</MathBlock>
            <p>
              for <InlineMath>{'i = 1, 2, 3, \\ldots'}</InlineMath>. This says
              that <InlineMath>{'\\{p_{n_i}\\}'}</InlineMath> converges to <InlineMath>q</InlineMath>.
              Hence <InlineMath>{'q \\in E^*'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          The subsequential limits of a sequence <InlineMath>{'\\{p_n\\}'}</InlineMath> in
          a metric space <InlineMath>X</InlineMath> form a closed subset of <InlineMath>X</InlineMath>.
        </p>
      </Theorem>

      <Example title="Subsequential Limits">
        <p className="mb-4">
          Consider the sequence <InlineMath>{'\\{(-1)^n\\}'}</InlineMath> in <InlineMath>{'\\mathbb{R}'}</InlineMath>.
          This sequence oscillates between <InlineMath>{'-1'}</InlineMath> and <InlineMath>{'1'}</InlineMath>,
          so it diverges. However:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The subsequence <InlineMath>{'\\{(-1)^{2n}\\} = \\{1, 1, 1, \\ldots\\}'}</InlineMath> converges
            to <InlineMath>1</InlineMath>.
          </li>
          <li>
            The subsequence <InlineMath>{'\\{(-1)^{2n+1}\\} = \\{-1, -1, -1, \\ldots\\}'}</InlineMath> converges
            to <InlineMath>{'-1'}</InlineMath>.
          </li>
        </ul>
        <p className="mt-4">
          Thus <InlineMath>{'\\{-1, 1\\}'}</InlineMath> is the set of subsequential limits.
          Note that this set is indeed closed (it is finite).
        </p>
      </Example>

      <Example title="Dense Subsequential Limits">
        <p className="mb-4">
          Let <InlineMath>{'\\{r_n\\}'}</InlineMath> be an enumeration of the rational
          numbers in <InlineMath>{'[0, 1]'}</InlineMath>. Then the set of subsequential
          limits is the entire interval <InlineMath>{'[0, 1]'}</InlineMath>.
        </p>
        <p>
          This is because for any <InlineMath>{'x \\in [0, 1]'}</InlineMath>, we can find
          a subsequence of rationals converging to <InlineMath>x</InlineMath> (by density
          of <InlineMath>{'\\mathbb{Q}'}</InlineMath>), and the set <InlineMath>{'[0, 1]'}</InlineMath> is
          indeed closed.
        </p>
      </Example>
    </LessonLayout>
  );
}
