import { LessonLayout } from '../../components/layout/LessonLayout';
import { Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2 className="text-2xl font-semibold mb-4">The Root and Ratio Tests</h2>

      <Theorem
        title="Root Test (3.33)"
        proof={
          <>
            <p className="mb-4">
              If <InlineMath>{'\\alpha < 1'}</InlineMath>, we can choose <InlineMath>\\beta</InlineMath> so
              that <InlineMath>{'\\alpha < \\beta < 1'}</InlineMath>, and an integer <InlineMath>N</InlineMath> such that
            </p>
            <MathBlock>{'\\sqrt[n]{|a_n|} < \\beta'}</MathBlock>
            <p className="mb-4">
              for <InlineMath>{'n \\geq N'}</InlineMath> [by Theorem 3.17(b)]. That is, <InlineMath>{'n \\geq N'}</InlineMath> implies
            </p>
            <MathBlock>{'|a_n| < \\beta^n.'}</MathBlock>
            <p className="mb-4">
              Since <InlineMath>{'0 < \\beta < 1'}</InlineMath>, <InlineMath>{'\\Sigma \\beta^n'}</InlineMath> converges.
              Convergence of <InlineMath>{'\\Sigma a_n'}</InlineMath> follows now from
              the comparison test.
            </p>
            <p className="mb-4">
              If <InlineMath>{'\\alpha > 1'}</InlineMath>, then, again by Theorem 3.17, there is a
              sequence <InlineMath>{'\\{n_k\\}'}</InlineMath> such that
            </p>
            <MathBlock>{'\\sqrt[n_k]{|a_{n_k}|} \\to \\alpha.'}</MathBlock>
            <p className="mb-4">
              Hence <InlineMath>{'|a_n| > 1'}</InlineMath> for infinitely many values of <InlineMath>n</InlineMath>,
              so that the condition <InlineMath>{'a_n \\to 0'}</InlineMath>, necessary for convergence
              of <InlineMath>{'\\Sigma a_n'}</InlineMath>, does not hold (Theorem 3.23).
            </p>
            <p>
              To prove (c), we consider the series <InlineMath>{'\\Sigma 1/n'}</InlineMath>, <InlineMath>{'\\Sigma 1/n^2'}</InlineMath>.
              For each of these series <InlineMath>{'\\alpha = 1'}</InlineMath>, but the first diverges,
              the second converges.
            </p>
          </>
        }
      >
        <p className="mb-4">
          Given <InlineMath>{'\\Sigma a_n'}</InlineMath>, put <InlineMath>{'\\alpha = \\limsup_{n \\to \\infty} \\sqrt[n]{|a_n|}'}</InlineMath>.
        </p>
        <p className="mb-2">Then</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>(a)</strong> if <InlineMath>{'\\alpha < 1'}</InlineMath>, <InlineMath>{'\\Sigma a_n'}</InlineMath> converges;
          </li>
          <li>
            <strong>(b)</strong> if <InlineMath>{'\\alpha > 1'}</InlineMath>, <InlineMath>{'\\Sigma a_n'}</InlineMath> diverges;
          </li>
          <li>
            <strong>(c)</strong> if <InlineMath>{'\\alpha = 1'}</InlineMath>, the test gives no information.
          </li>
        </ul>
      </Theorem>

      <Theorem
        title="Ratio Test (3.34)"
        proof={
          <>
            <p className="mb-4">
              If condition (a) holds, we can find <InlineMath>{'\\beta < 1'}</InlineMath>, and an
              integer <InlineMath>N</InlineMath>, such that
            </p>
            <MathBlock>{'\\left|\\frac{a_{n+1}}{a_n}\\right| < \\beta'}</MathBlock>
            <p className="mb-4">for <InlineMath>{'n \\geq N'}</InlineMath>. In particular,</p>
            <MathBlock>{'|a_{N+1}| < \\beta|a_N|,'}</MathBlock>
            <MathBlock>{'|a_{N+2}| < \\beta|a_{N+1}| < \\beta^2|a_N|,'}</MathBlock>
            <p className="mb-4">and in general</p>
            <MathBlock>{'|a_{N+p}| < \\beta^p|a_N|.'}</MathBlock>
            <p className="mb-4">
              That is,
            </p>
            <MathBlock>{'|a_n| < |a_N|\\beta^{-N} \\cdot \\beta^n'}</MathBlock>
            <p className="mb-4">
              for <InlineMath>{'n \\geq N'}</InlineMath>, and (a) follows from the comparison
              test, since <InlineMath>{'\\Sigma \\beta^n'}</InlineMath> converges.
            </p>
            <p>
              If <InlineMath>{'|a_{n+1}| \\geq |a_n|'}</InlineMath> for <InlineMath>{'n \\geq n_0'}</InlineMath>,
              it is easily seen that the condition <InlineMath>{'a_n \\to 0'}</InlineMath> does not
              hold, and (b) follows.
            </p>
          </>
        }
      >
        <p className="mb-4">The series <InlineMath>{'\\Sigma a_n'}</InlineMath></p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>(a)</strong> converges if <InlineMath>{'\\limsup_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| < 1'}</InlineMath>,
          </li>
          <li>
            <strong>(b)</strong> diverges if <InlineMath>{'\\left|\\frac{a_{n+1}}{a_n}\\right| \\geq 1'}</InlineMath> for
            all <InlineMath>{'n \\geq n_0'}</InlineMath>, where <InlineMath>{'n_0'}</InlineMath> is some fixed integer.
          </li>
        </ul>
      </Theorem>

      <Callout type="info">
        <p className="mb-4">
          <strong>3.36 Remarks:</strong> The ratio test is frequently easier to apply than the root test,
          since it is usually easier to compute ratios than <InlineMath>n</InlineMath>th roots.
          However, the root test has wider scope. More precisely: Whenever the ratio test
          shows convergence, the root test does too; whenever the root test is inconclusive,
          the ratio test is too.
        </p>
        <p>
          This is a consequence of Theorem 3.37, and is illustrated by the examples in 3.35.
        </p>
      </Callout>

      <Theorem
        title="Root Test Dominates Ratio Test (3.37)"
        proof={
          <>
            <p className="mb-4">
              We shall prove the second inequality; the proof of the first is quite similar. Put
            </p>
            <MathBlock>{'\\alpha = \\limsup_{n \\to \\infty} \\frac{c_{n+1}}{c_n}.'}</MathBlock>
            <p className="mb-4">
              If <InlineMath>{'\\alpha = +\\infty'}</InlineMath>, there is nothing to prove.
              If <InlineMath>\\alpha</InlineMath> is finite, choose <InlineMath>{'\\beta > \\alpha'}</InlineMath>. There
              is an integer <InlineMath>N</InlineMath> such that
            </p>
            <MathBlock>{'\\frac{c_{n+1}}{c_n} \\leq \\beta'}</MathBlock>
            <p className="mb-4">
              for <InlineMath>{'n \\geq N'}</InlineMath>. In particular, for any <InlineMath>{'p > 0'}</InlineMath>,
            </p>
            <MathBlock>{'c_{N+k+1} \\leq \\beta c_{N+k} \\quad (k = 0, 1, \\ldots, p-1).'}</MathBlock>
            <p className="mb-4">Multiplying these inequalities, we obtain</p>
            <MathBlock>{'c_{N+p} \\leq \\beta^p c_N,'}</MathBlock>
            <p className="mb-4">or</p>
            <MathBlock>{'c_n \\leq c_N \\beta^{-N} \\cdot \\beta^n \\quad (n \\geq N).'}</MathBlock>
            <p className="mb-4">Hence</p>
            <MathBlock>{'\\sqrt[n]{c_n} \\leq \\sqrt[n]{c_N \\beta^{-N}} \\cdot \\beta,'}</MathBlock>
            <p>
              so that <InlineMath>{'\\limsup_{n \\to \\infty} \\sqrt[n]{c_n} \\leq \\beta'}</InlineMath>,
              by Theorem 3.20(b). Since (18) is true for every <InlineMath>{'\\beta > \\alpha'}</InlineMath>,
              we have the desired result.
            </p>
          </>
        }
      >
        <p className="mb-4">For any sequence <InlineMath>{'\\{c_n\\}'}</InlineMath> of positive numbers,</p>
        <MathBlock>{'\\liminf_{n \\to \\infty} \\frac{c_{n+1}}{c_n} \\leq \\liminf_{n \\to \\infty} \\sqrt[n]{c_n},'}</MathBlock>
        <MathBlock>{'\\limsup_{n \\to \\infty} \\sqrt[n]{c_n} \\leq \\limsup_{n \\to \\infty} \\frac{c_{n+1}}{c_n}.'}</MathBlock>
      </Theorem>

      <Example title="Examples (3.35)">
        <p className="mb-4">
          <strong>(a)</strong> Consider the series
        </p>
        <MathBlock>{'\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{2^2} + \\frac{1}{3^2} + \\frac{1}{2^3} + \\frac{1}{3^3} + \\frac{1}{2^4} + \\frac{1}{3^4} + \\cdots,'}</MathBlock>
        <p className="mb-4">for which</p>
        <MathBlock>{'\\liminf_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = \\lim_{n \\to \\infty} \\left(\\frac{2}{3}\\right)^n = 0,'}</MathBlock>
        <MathBlock>{'\\liminf_{n \\to \\infty} \\sqrt[n]{a_n} = \\lim_{n \\to \\infty} \\sqrt[2n]{\\frac{1}{3^n}} = \\frac{1}{\\sqrt{3}},'}</MathBlock>
        <MathBlock>{'\\limsup_{n \\to \\infty} \\sqrt[n]{a_n} = \\lim_{n \\to \\infty} \\sqrt[2n]{\\frac{1}{2^n}} = \\frac{1}{\\sqrt{2}},'}</MathBlock>
        <MathBlock>{'\\limsup_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = \\lim_{n \\to \\infty} \\frac{1}{2}\\left(\\frac{3}{2}\\right)^n = +\\infty.'}</MathBlock>
        <p className="mt-4">
          The root test indicates convergence; the ratio test does not apply.
        </p>
      </Example>
    </LessonLayout>
  );
}
