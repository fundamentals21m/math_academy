import { LessonLayout } from '../../components/layout/LessonLayout';
import { Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2 className="text-2xl font-semibold mb-4">Summation by Parts</h2>

      <Theorem
        title="Summation by Parts Formula (3.41)"
        proof={
          <>
            <MathBlock>{'\\sum_{n=p}^{q} a_n b_n = \\sum_{n=p}^{q} (A_n - A_{n-1})b_n = \\sum_{n=p}^{q} A_n b_n - \\sum_{n=p-1}^{q-1} A_n b_{n+1},'}</MathBlock>
            <p>
              and the last expression on the right is clearly equal to the right side of (20).
            </p>
          </>
        }
      >
        <p className="mb-4">
          Given two sequences <InlineMath>{'\\{a_n\\}'}</InlineMath>, <InlineMath>{'\\{b_n\\}'}</InlineMath>, put
        </p>
        <MathBlock>{'A_n = \\sum_{k=0}^{n} a_k'}</MathBlock>
        <p className="mb-4">
          if <InlineMath>{'n \\geq 0'}</InlineMath>; put <InlineMath>{'A_{-1} = 0'}</InlineMath>.
          Then, if <InlineMath>{'0 \\leq p \\leq q'}</InlineMath>, we have
        </p>
        <MathBlock>{'\\sum_{n=p}^{q} a_n b_n = \\sum_{n=p}^{q-1} A_n(b_n - b_{n+1}) + A_q b_q - A_{p-1}b_p.'}</MathBlock>
      </Theorem>

      <Callout type="info">
        <p>
          Formula (20), the so-called "partial summation formula," is useful in the
          investigation of series of the form <InlineMath>{'\\Sigma a_n b_n'}</InlineMath>,
          particularly when <InlineMath>{'\\{b_n\\}'}</InlineMath> is monotonic.
          We shall now give some applications.
        </p>
      </Callout>

      <Theorem
        title="Dirichlet's Test (3.42)"
        proof={
          <>
            <p className="mb-4">
              Choose <InlineMath>M</InlineMath> such that <InlineMath>{'|A_n| \\leq M'}</InlineMath> for
              all <InlineMath>n</InlineMath>. Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there is
              an integer <InlineMath>N</InlineMath> such that <InlineMath>{'b_N \\leq (\\varepsilon/2M)'}</InlineMath>.
              For <InlineMath>{'N \\leq p \\leq q'}</InlineMath>, we have
            </p>
            <MathBlock>{'\\left| \\sum_{n=p}^{q} a_n b_n \\right| = \\left| \\sum_{n=p}^{q-1} A_n(b_n - b_{n+1}) + A_q b_q - A_{p-1}b_p \\right|'}</MathBlock>
            <MathBlock>{'\\leq M \\left| \\sum_{n=p}^{q-1} (b_n - b_{n+1}) + b_q + b_p \\right|'}</MathBlock>
            <MathBlock>{'= 2Mb_p \\leq 2Mb_N \\leq \\varepsilon.'}</MathBlock>
            <p>
              Convergence now follows from the Cauchy criterion. We note that the
              first inequality in the above chain depends on the fact that <InlineMath>{'b_n - b_{n+1} \\geq 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-4">Suppose</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>(a)</strong> the partial sums <InlineMath>{'A_n'}</InlineMath> of <InlineMath>{'\\Sigma a_n'}</InlineMath> form
            a bounded sequence;
          </li>
          <li>
            <strong>(b)</strong> <InlineMath>{'b_0 \\geq b_1 \\geq b_2 \\geq \\cdots'}</InlineMath>;
          </li>
          <li>
            <strong>(c)</strong> <InlineMath>{'\\lim_{n \\to \\infty} b_n = 0'}</InlineMath>.
          </li>
        </ul>
        <p className="mt-4">Then <InlineMath>{'\\Sigma a_n b_n'}</InlineMath> converges.</p>
      </Theorem>

      <Theorem
        title="Alternating Series (Leibniz) Test (3.43)"
        proof={
          <p>
            Apply Theorem 3.42, with <InlineMath>{'a_n = (-1)^{n+1}'}</InlineMath>, <InlineMath>{'b_n = |c_n|'}</InlineMath>.
          </p>
        }
      >
        <p className="mb-4">Suppose</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>(a)</strong> <InlineMath>{'|c_1| \\geq |c_2| \\geq |c_3| \\geq \\cdots'}</InlineMath>;
          </li>
          <li>
            <strong>(b)</strong> <InlineMath>{'c_{2m-1} \\geq 0'}</InlineMath>, <InlineMath>{'c_{2m} \\leq 0'}</InlineMath> (<InlineMath>{'m = 1, 2, 3, \\ldots'}</InlineMath>);
          </li>
          <li>
            <strong>(c)</strong> <InlineMath>{'\\lim_{n \\to \\infty} c_n = 0'}</InlineMath>.
          </li>
        </ul>
        <p className="mt-4">Then <InlineMath>{'\\Sigma c_n'}</InlineMath> converges.</p>
      </Theorem>

      <p className="my-6">
        Series for which (b) holds are called "alternating series"; the theorem
        was known to Leibniz.
      </p>

      <Theorem
        title="Convergence on Circle of Convergence (3.44)"
        proof={
          <>
            <p className="mb-4">
              Put <InlineMath>{'a_n = z^n'}</InlineMath>, <InlineMath>{'b_n = c_n'}</InlineMath>.
              The hypotheses of Theorem 3.42 are then satisfied, since
            </p>
            <MathBlock>{'|A_n| = \\left| \\sum_{m=0}^{n} z^m \\right| = \\left| \\frac{1 - z^{n+1}}{1 - z} \\right| \\leq \\frac{2}{|1 - z|},'}</MathBlock>
            <p>
              if <InlineMath>{'|z| = 1'}</InlineMath>, <InlineMath>{'z \\neq 1'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-4">
          Suppose the radius of convergence of <InlineMath>{'\\Sigma c_n z^n'}</InlineMath> is 1, and suppose
        </p>
        <MathBlock>{'c_0 \\geq c_1 \\geq c_2 \\geq \\cdots, \\quad \\lim_{n \\to \\infty} c_n = 0.'}</MathBlock>
        <p>
          Then <InlineMath>{'\\Sigma c_n z^n'}</InlineMath> converges at every point on the
          circle <InlineMath>{'|z| = 1'}</InlineMath>, except possibly at <InlineMath>{'z = 1'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="The Alternating Harmonic Series">
        <p className="mb-4">
          The series
        </p>
        <MathBlock>{'\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots'}</MathBlock>
        <p className="mb-4">
          converges by the alternating series test, even though the harmonic
          series <InlineMath>{'\\sum 1/n'}</InlineMath> diverges.
        </p>
        <p>
          In fact, this series converges to <InlineMath>{'\\ln 2'}</InlineMath>.
        </p>
      </Example>
    </LessonLayout>
  );
}
