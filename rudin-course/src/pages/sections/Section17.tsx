import { LessonLayout } from '../../components/layout/LessonLayout';
import { Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-semibold mb-4">Some Special Sequences</h2>

      <p className="mb-6">
        We shall now compute the limits of some sequences which occur frequently.
        The proofs will all be based on the following remark: If <InlineMath>{'0 \\leq x_n \\leq s_n'}</InlineMath> for <InlineMath>{'n \\geq N'}</InlineMath>,
        where <InlineMath>N</InlineMath> is some fixed number, and if <InlineMath>{'s_n \\to 0'}</InlineMath>,
        then <InlineMath>{'x_n \\to 0'}</InlineMath>.
      </p>

      <Theorem
        title="Special Limits (3.20)"
        proof={
          <>
            <p className="mb-4">
              <strong>(a)</strong> Take <InlineMath>{'n > (1/e)^{1/p}'}</InlineMath>. (Note that the archimedean
              property of the real number system is used here.)
            </p>
            <p className="mb-4">
              <strong>(b)</strong> If <InlineMath>{'p > 1'}</InlineMath>, put <InlineMath>{'x_n = \\sqrt[n]{p} - 1'}</InlineMath>.
              Then <InlineMath>{'x_n > 0'}</InlineMath>, and, by the binomial theorem,
            </p>
            <MathBlock>{'1 + nx_n \\leq (1 + x_n)^n = p,'}</MathBlock>
            <p className="mb-4">
              so that
            </p>
            <MathBlock>{'0 < x_n \\leq \\frac{p-1}{n}.'}</MathBlock>
            <p className="mb-4">
              Hence <InlineMath>{'x_n \\to 0'}</InlineMath>. If <InlineMath>{'p = 1'}</InlineMath>, (b) is trivial,
              and if <InlineMath>{'0 < p < 1'}</InlineMath>, the result is obtained by taking reciprocals.
            </p>
            <p className="mb-4">
              <strong>(c)</strong> Put <InlineMath>{'x_n = \\sqrt[n]{n} - 1'}</InlineMath>.
              Then <InlineMath>{'x_n \\geq 0'}</InlineMath>, and, by the binomial theorem,
            </p>
            <MathBlock>{'n = (1 + x_n)^n \\geq \\frac{n(n-1)}{2}x_n^2.'}</MathBlock>
            <p className="mb-4">
              Hence
            </p>
            <MathBlock>{'0 \\leq x_n \\leq \\sqrt{\\frac{2}{n-1}} \\quad (n \\geq 2).'}</MathBlock>
            <p className="mb-4">
              <strong>(d)</strong> Let <InlineMath>k</InlineMath> be an integer such
              that <InlineMath>{'k > \\alpha'}</InlineMath>, <InlineMath>{'k > 0'}</InlineMath>.
              For <InlineMath>{'n > 2k'}</InlineMath>,
            </p>
            <MathBlock>{'(1 + p)^n > \\binom{n}{k} p^k = \\frac{n(n-1)\\cdots(n-k+1)}{k!}p^k > \\frac{n^k p^k}{2^k k!}.'}</MathBlock>
            <p className="mb-4">
              Hence
            </p>
            <MathBlock>{'0 < \\frac{n^\\alpha}{(1+p)^n} < \\frac{2^k k!}{p^k} n^{\\alpha - k} \\quad (n > 2k).'}</MathBlock>
            <p className="mb-4">
              Since <InlineMath>{'\\alpha - k < 0'}</InlineMath>, <InlineMath>{'n^{\\alpha - k} \\to 0'}</InlineMath>, by (a).
            </p>
            <p>
              <strong>(e)</strong> Take <InlineMath>{'\\alpha = 0'}</InlineMath> in (d).
            </p>
          </>
        }
      >
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>(a)</strong> If <InlineMath>{'p > 0'}</InlineMath>, then <InlineMath>{'\\lim_{n \\to \\infty} \\frac{1}{n^p} = 0'}</InlineMath>.
          </li>
          <li>
            <strong>(b)</strong> If <InlineMath>{'p > 0'}</InlineMath>, then <InlineMath>{'\\lim_{n \\to \\infty} \\sqrt[n]{p} = 1'}</InlineMath>.
          </li>
          <li>
            <strong>(c)</strong> <InlineMath>{'\\lim_{n \\to \\infty} \\sqrt[n]{n} = 1'}</InlineMath>.
          </li>
          <li>
            <strong>(d)</strong> If <InlineMath>{'p > 0'}</InlineMath> and <InlineMath>\\alpha</InlineMath> is
            real, then <InlineMath>{'\\lim_{n \\to \\infty} \\frac{n^\\alpha}{(1+p)^n} = 0'}</InlineMath>.
          </li>
          <li>
            <strong>(e)</strong> If <InlineMath>{'|x| < 1'}</InlineMath>, then <InlineMath>{'\\lim_{n \\to \\infty} x^n = 0'}</InlineMath>.
          </li>
        </ul>
      </Theorem>

      <Example title="Applications">
        <p className="mb-4">Part (c) is particularly useful. It says:</p>
        <MathBlock>{'\\lim_{n \\to \\infty} n^{1/n} = 1.'}</MathBlock>
        <p className="mb-4">
          This limit is often used when applying the root test to series.
          Part (d) shows that exponentials grow faster than any polynomial:
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} \\frac{n^{100}}{2^n} = 0.'}</MathBlock>
        <p>
          Even <InlineMath>{'n^{1000000}'}</InlineMath> eventually becomes negligible
          compared to <InlineMath>{'1.001^n'}</InlineMath>.
        </p>
      </Example>

      <Callout type="info">
        <p className="mb-4">
          <strong>Key Intuitions:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Part (b): Any positive number raised to the power <InlineMath>{'1/n'}</InlineMath> approaches 1.
          </li>
          <li>
            Part (c): <InlineMath>{'\\sqrt[n]{n}'}</InlineMath> approaches 1 even though <InlineMath>n</InlineMath> grows without bound.
          </li>
          <li>
            Part (d): Exponential growth dominates polynomial growth.
          </li>
          <li>
            Part (e): Numbers with absolute value less than 1, when repeatedly multiplied by themselves, approach 0.
          </li>
        </ul>
      </Callout>

      <Example title="Rate of Convergence">
        <p className="mb-4">
          Consider how fast <InlineMath>{'\\sqrt[n]{n}'}</InlineMath> approaches 1:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{'\\sqrt[10]{10} \\approx 1.26'}</InlineMath></li>
          <li><InlineMath>{'\\sqrt[100]{100} \\approx 1.047'}</InlineMath></li>
          <li><InlineMath>{'\\sqrt[1000]{1000} \\approx 1.0069'}</InlineMath></li>
        </ul>
        <p className="mt-4">
          The convergence is quite slow, which is typical for sequences involving roots.
        </p>
      </Example>
    </LessonLayout>
  );
}
