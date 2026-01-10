import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-semibold mb-4">Series</h2>

      <p className="mb-6">
        In the remainder of this chapter, all sequences and series under consideration
        will be complex-valued, unless the contrary is explicitly stated. Extensions
        of some of the theorems which follow, to series with terms in <InlineMath>{'R^k'}</InlineMath>,
        are mentioned in Exercise 15.
      </p>

      <Definition title="Series and Partial Sums (3.21)">
        <p className="mb-4">
          Given a sequence <InlineMath>{'\\{a_n\\}'}</InlineMath>, we use the notation
        </p>
        <MathBlock>{'\\sum_{n=p}^{q} a_n \\quad (p \\leq q)'}</MathBlock>
        <p className="mb-4">
          to denote the sum <InlineMath>{'a_p + a_{p+1} + \\cdots + a_q'}</InlineMath>.
          With <InlineMath>{'\\{a_n\\}'}</InlineMath> we associate a sequence <InlineMath>{'\\{s_n\\}'}</InlineMath>, where
        </p>
        <MathBlock>{'s_n = \\sum_{k=1}^{n} a_k.'}</MathBlock>
        <p className="mb-4">
          For <InlineMath>{'\\{s_n\\}'}</InlineMath> we also use the symbolic expression
        </p>
        <MathBlock>{'a_1 + a_2 + a_3 + \\cdots'}</MathBlock>
        <p className="mb-4">or, more concisely,</p>
        <MathBlock>{'\\sum_{n=1}^{\\infty} a_n.'}</MathBlock>
        <p className="mb-4">
          The symbol (4) we call an <em>infinite series</em>, or just a <em>series</em>.
          The numbers <InlineMath>{'s_n'}</InlineMath> are called the <em>partial sums</em> of the series.
          If <InlineMath>{'\\{s_n\\}'}</InlineMath> converges to <InlineMath>s</InlineMath>, we say that
          the series <em>converges</em>, and write
        </p>
        <MathBlock>{'\\sum_{n=1}^{\\infty} a_n = s.'}</MathBlock>
        <p>
          The number <InlineMath>s</InlineMath> is called the sum of the series; but it should
          be clearly understood that <InlineMath>s</InlineMath> is <em>the limit of a sequence
          of sums</em>, and is not obtained simply by addition.
        </p>
        <p className="mt-4">
          If <InlineMath>{'\\{s_n\\}'}</InlineMath> diverges, the series is said to <em>diverge</em>.
        </p>
      </Definition>

      <Callout type="info">
        <p>
          Sometimes, for convenience of notation, we shall consider series of the form
          <InlineMath>{'\\sum_{n=0}^{\\infty} a_n'}</InlineMath>. And frequently, when there
          is no possible ambiguity, or when the distinction is immaterial, we shall
          simply write <InlineMath>{'\\Sigma a_n'}</InlineMath> in place of (4) or (5).
        </p>
      </Callout>

      <p className="my-6">
        It is clear that every theorem about sequences can be stated in terms of
        series (putting <InlineMath>{'a_1 = s_1'}</InlineMath>, and <InlineMath>{'a_n = s_n - s_{n-1}'}</InlineMath> for <InlineMath>{'n > 1'}</InlineMath>),
        and vice versa. But it is nevertheless useful to consider both concepts.
      </p>

      <Theorem
        title="Cauchy Criterion for Series (3.22)"
        proof={
          <p>
            This is a direct application of Theorem 3.11 to the sequence of partial sums.
            The condition <InlineMath>{'|s_m - s_n| < \\varepsilon'}</InlineMath> for <InlineMath>{'m > n \\geq N'}</InlineMath> is
            precisely the statement about partial sums.
          </p>
        }
      >
        <p className="mb-4">
          <InlineMath>{'\\Sigma a_n'}</InlineMath> converges if and only if for
          every <InlineMath>{'\\varepsilon > 0'}</InlineMath> there is an
          integer <InlineMath>N</InlineMath> such that
        </p>
        <MathBlock>{'\\left| \\sum_{k=n}^{m} a_k \\right| \\leq \\varepsilon'}</MathBlock>
        <p>
          if <InlineMath>{'m \\geq n \\geq N'}</InlineMath>.
        </p>
      </Theorem>

      <p className="my-6">
        In particular, by taking <InlineMath>{'m = n'}</InlineMath>, (6) becomes
      </p>
      <MathBlock>{'|a_n| \\leq \\varepsilon \\quad (n \\geq N).'}</MathBlock>
      <p className="mb-6">In other words:</p>

      <Theorem
        title="Necessary Condition (3.23)"
        proof={
          <p>
            This follows immediately from Theorem 3.22 by setting <InlineMath>{'m = n'}</InlineMath>.
          </p>
        }
      >
        <p>
          If <InlineMath>{'\\Sigma a_n'}</InlineMath> converges,
          then <InlineMath>{'\\lim_{n \\to \\infty} a_n = 0'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning">
        <p className="mb-4">
          The condition <InlineMath>{'a_n \\to 0'}</InlineMath> is not, however, sufficient
          to ensure convergence of <InlineMath>{'\\Sigma a_n'}</InlineMath>. For instance, the series
        </p>
        <MathBlock>{'\\sum_{n=1}^{\\infty} \\frac{1}{n}'}</MathBlock>
        <p>
          diverges; for the proof we refer to Theorem 3.28.
        </p>
      </Callout>

      <p className="my-6">
        Theorem 3.14, concerning monotonic sequences, also has an immediate
        counterpart for series.
      </p>

      <Theorem
        title="Nonnegative Series (3.24)"
        proof={
          <p>
            If <InlineMath>{'a_n \\geq 0'}</InlineMath>, then <InlineMath>{'s_n = s_{n-1} + a_n \\geq s_{n-1}'}</InlineMath>,
            so <InlineMath>{'\\{s_n\\}'}</InlineMath> is increasing. The result follows from Theorem 3.14.
          </p>
        }
      >
        <p>
          A series of nonnegative terms converges if and only if its
          partial sums form a bounded sequence.
        </p>
      </Theorem>

      <Example title="The Harmonic Series">
        <p className="mb-4">
          The most famous example of a divergent series whose terms go to zero is
          the <em>harmonic series</em>:
        </p>
        <MathBlock>{'\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots'}</MathBlock>
        <p className="mb-4">
          This series diverges to <InlineMath>{'+\\infty'}</InlineMath>, even
          though <InlineMath>{'1/n \\to 0'}</InlineMath>. The proof will be given in Section 19
          (Theorem 3.28).
        </p>
      </Example>

      <Example title="The Geometric Series">
        <p className="mb-4">
          For <InlineMath>{'|x| < 1'}</InlineMath>, the geometric series converges:
        </p>
        <MathBlock>{'\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}.'}</MathBlock>
        <p className="mb-4">
          This can be proved directly:
        </p>
        <MathBlock>{'s_n = \\sum_{k=0}^{n} x^k = \\frac{1 - x^{n+1}}{1 - x}.'}</MathBlock>
        <p>
          Since <InlineMath>{'x^{n+1} \\to 0'}</InlineMath> when <InlineMath>{'|x| < 1'}</InlineMath> (Theorem 3.20e),
          we get <InlineMath>{'s_n \\to 1/(1-x)'}</InlineMath>.
        </p>
      </Example>
    </LessonLayout>
  );
}
