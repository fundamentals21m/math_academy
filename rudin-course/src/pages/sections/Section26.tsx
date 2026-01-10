import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      <h2 className="text-2xl font-semibold mb-4">Rearrangements</h2>

      <p className="mb-4">
        One of the most striking differences between absolutely and conditionally convergent
        series is their behavior under rearrangement. While absolutely convergent series always
        sum to the same value regardless of the order of terms, conditionally convergent series
        can be rearranged to converge to any desired value or even to diverge.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Definition of Rearrangement</h3>

      <Definition title="3.52 Rearrangement">
        <p>
          Let <InlineMath>{'\\{k_n\\}'}</InlineMath> be a sequence in which every positive integer
          appears once and only once (a permutation of the positive integers). Putting
        </p>
        <MathBlock>{'a\'_n = a_{k_n} \\quad (n = 1, 2, 3, \\ldots),'}</MathBlock>
        <p className="mt-2">
          we say that <InlineMath>{'\\Sigma a\'_n'}</InlineMath> is a <em>rearrangement</em> of{' '}
          <InlineMath>{'\\Sigma a_n'}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold mt-8 mb-4">Rearrangements of Absolutely Convergent Series</h3>

      <Theorem
        title="3.53 Invariance Under Rearrangement"
        proof={
          <>
            <p>
              Let <InlineMath>{'\\varepsilon > 0'}</InlineMath> be given. Since{' '}
              <InlineMath>{'\\Sigma |a_n|'}</InlineMath> converges, there exists{' '}
              <InlineMath>N</InlineMath> such that
            </p>
            <MathBlock>{'\\sum_{n=N+1}^{\\infty} |a_n| < \\varepsilon.'}</MathBlock>
            <p className="mt-2">
              Now choose <InlineMath>p</InlineMath> so that the integers{' '}
              <InlineMath>{'1, 2, \\ldots, N'}</InlineMath> are all contained in{' '}
              <InlineMath>{'\\{k_1, k_2, \\ldots, k_p\\}'}</InlineMath>. For{' '}
              <InlineMath>{'m > p'}</InlineMath>, let <InlineMath>{'A\'_m'}</InlineMath> be the
              partial sum of the rearranged series. Then
            </p>
            <MathBlock>{'A\'_m - A_N = \\sum (a_{k_j} : N < k_j, j \\leq m).'}</MathBlock>
            <p className="mt-2">Each term on the right has index greater than <InlineMath>N</InlineMath>, so</p>
            <MathBlock>{'|A\'_m - A_N| \\leq \\sum_{n=N+1}^{\\infty} |a_n| < \\varepsilon.'}</MathBlock>
            <p className="mt-2">
              Since <InlineMath>{'A_N \\to A'}</InlineMath> as{' '}
              <InlineMath>{'N \\to \\infty'}</InlineMath>, we get{' '}
              <InlineMath>{'A\'_m \\to A'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\Sigma a_n'}</InlineMath> converges absolutely to{' '}
          <InlineMath>A</InlineMath>, then every rearrangement of{' '}
          <InlineMath>{'\\Sigma a_n'}</InlineMath> converges to the same sum{' '}
          <InlineMath>A</InlineMath>.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Riemann's Rearrangement Theorem</h3>

      <Theorem
        title="3.54 Riemann Rearrangement Theorem"
        proof={
          <>
            <p>
              Let <InlineMath>{'p_1, p_2, p_3, \\ldots'}</InlineMath> denote the positive terms of{' '}
              <InlineMath>{'\\Sigma a_n'}</InlineMath> in the order in which they occur, and let{' '}
              <InlineMath>{'q_1, q_2, q_3, \\ldots'}</InlineMath> denote the absolute values of
              the negative terms. The series <InlineMath>{'\\Sigma p_n'}</InlineMath> and{' '}
              <InlineMath>{'\\Sigma q_n'}</InlineMath> must both diverge.
            </p>
            <p className="mt-2">
              For if both were convergent, then <InlineMath>{'\\Sigma (p_n + q_n)'}</InlineMath>{' '}
              would converge absolutely, contradicting conditional convergence. If only one
              converges, say <InlineMath>{'\\Sigma p_n'}</InlineMath>, then since{' '}
              <InlineMath>{'\\Sigma a_n'}</InlineMath> converges, we have{' '}
              <InlineMath>{'\\Sigma q_n = \\Sigma p_n - \\Sigma a_n'}</InlineMath> converges too,
              a contradiction.
            </p>
            <p className="mt-2">
              Now, to construct a rearrangement converging to <InlineMath>\\alpha</InlineMath>:
              Take just enough positive terms so the partial sum exceeds{' '}
              <InlineMath>\\alpha</InlineMath>, then enough negative terms to drop below{' '}
              <InlineMath>\\alpha</InlineMath>, then positive terms to exceed{' '}
              <InlineMath>\\alpha</InlineMath>, and so on. Since both{' '}
              <InlineMath>{'p_n \\to 0'}</InlineMath> and <InlineMath>{'q_n \\to 0'}</InlineMath>,
              the partial sums oscillate around <InlineMath>\\alpha</InlineMath> with ever smaller
              amplitude, converging to <InlineMath>\\alpha</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'\\Sigma a_n'}</InlineMath> be a series of real numbers which converges
          conditionally (i.e., converges but not absolutely). Let{' '}
          <InlineMath>{'\\alpha'}</InlineMath> be any real number, or{' '}
          <InlineMath>{'+\\infty'}</InlineMath> or <InlineMath>{'-\\infty'}</InlineMath>. Then
          there exists a rearrangement <InlineMath>{'\\Sigma a\'_n'}</InlineMath> with partial
          sums <InlineMath>{'A\'_n'}</InlineMath> such that
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} A\'_n = \\alpha.'}</MathBlock>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>Remarkable Consequence:</strong> This theorem shows that the sum of a
          conditionally convergent series is, in a sense, meaningless without specifying the
          order of summation. The number <InlineMath>{'\\ln 2'}</InlineMath> is not an intrinsic
          property of the alternating harmonic series, but depends entirely on the particular
          ordering of terms.
        </p>
      </Callout>

      <Example title="Rearranging the Alternating Harmonic Series">
        <p>The alternating harmonic series</p>
        <MathBlock>{'1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\frac{1}{5} - \\frac{1}{6} + \\cdots = \\ln 2'}</MathBlock>
        <p className="mt-2">
          can be rearranged to sum to <InlineMath>{'\\frac{3}{2}\\ln 2'}</InlineMath> as follows:
        </p>
        <MathBlock>{'1 + \\frac{1}{3} - \\frac{1}{2} + \\frac{1}{5} + \\frac{1}{7} - \\frac{1}{4} + \\cdots'}</MathBlock>
        <p className="mt-2">
          where we take two positive terms followed by one negative term. More generally, taking{' '}
          <InlineMath>p</InlineMath> positive terms for every <InlineMath>q</InlineMath> negative
          terms produces a rearrangement that sums to{' '}
          <InlineMath>{'\\ln 2 + \\frac{1}{2}\\ln(p/q)'}</InlineMath>.
        </p>
      </Example>

      <Example title="Rearranging to Diverge">
        <p>
          We can also rearrange the alternating harmonic series to diverge to{' '}
          <InlineMath>{'+\\infty'}</InlineMath>: take positive terms until the sum exceeds 10,
          then one negative term, then positive terms until exceeding 100, then one negative term,
          and so on. The partial sums grow without bound.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">The key results of this section are:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Definition 3.52: A rearrangement is obtained by permuting the terms
        </li>
        <li>
          Theorem 3.53: Absolutely convergent series have the same sum under any rearrangement
        </li>
        <li>
          Theorem 3.54 (Riemann): A conditionally convergent series can be rearranged to converge
          to any real number, or to diverge to <InlineMath>{'+\\infty'}</InlineMath> or{' '}
          <InlineMath>{'-\\infty'}</InlineMath>
        </li>
        <li>
          This stark contrast highlights the fundamental difference between absolute and
          conditional convergence
        </li>
      </ul>
    </LessonLayout>
  );
}
