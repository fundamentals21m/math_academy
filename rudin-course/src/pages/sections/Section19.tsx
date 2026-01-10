import { LessonLayout } from '../../components/layout/LessonLayout';
import { Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-semibold mb-4">Series of Nonnegative Terms</h2>

      <p className="mb-6">
        The comparison test is a very useful one; to use it efficiently, we have to
        become familiar with a number of series of nonnegative terms whose convergence
        or divergence is known.
      </p>

      <Theorem
        title="The Geometric Series (3.26)"
        proof={
          <>
            <p className="mb-4">
              If <InlineMath>{'x \\neq 1'}</InlineMath>,
            </p>
            <MathBlock>{'s_n = \\sum_{k=0}^{n} x^k = \\frac{1 - x^{n+1}}{1 - x}.'}</MathBlock>
            <p>
              The result follows if we let <InlineMath>{'n \\to \\infty'}</InlineMath>.
              For <InlineMath>{'x = 1'}</InlineMath>, we get <InlineMath>{'1 + 1 + 1 + \\cdots'}</InlineMath>,
              which evidently diverges.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'0 \\leq x < 1'}</InlineMath>, then
        </p>
        <MathBlock>{'\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}.'}</MathBlock>
        <p className="mt-4">
          If <InlineMath>{'x \\geq 1'}</InlineMath>, the series diverges.
        </p>
      </Theorem>

      <Theorem
        title="Cauchy Condensation Test (3.27)"
        proof={
          <>
            <p className="mb-4">
              By Theorem 3.24, it suffices to consider boundedness of the partial sums. Let
            </p>
            <MathBlock>{'s_n = a_1 + a_2 + \\cdots + a_n,'}</MathBlock>
            <MathBlock>{'t_k = a_1 + 2a_2 + \\cdots + 2^k a_{2^k}.'}</MathBlock>
            <p className="mb-4">
              For <InlineMath>{'n < 2^k'}</InlineMath>,
            </p>
            <MathBlock>{'s_n \\leq a_1 + (a_2 + a_3) + \\cdots + (a_{2^k} + \\cdots + a_{2^{k+1}-1})'}</MathBlock>
            <MathBlock>{'\\leq a_1 + 2a_2 + \\cdots + 2^k a_{2^k}'}</MathBlock>
            <MathBlock>{'= t_k,'}</MathBlock>
            <p className="mb-4">
              so that
            </p>
            <MathBlock>{'s_n \\leq t_k.'}</MathBlock>
            <p className="mb-4">
              On the other hand, if <InlineMath>{'n > 2^k'}</InlineMath>,
            </p>
            <MathBlock>{'s_n \\geq a_1 + a_2 + (a_3 + a_4) + \\cdots + (a_{2^{k-1}+1} + \\cdots + a_{2^k})'}</MathBlock>
            <MathBlock>{'\\geq \\frac{1}{2}a_1 + a_2 + 2a_4 + \\cdots + 2^{k-1}a_{2^k}'}</MathBlock>
            <MathBlock>{'= \\frac{1}{2}t_k,'}</MathBlock>
            <p className="mb-4">
              so that
            </p>
            <MathBlock>{'2s_n \\geq t_k.'}</MathBlock>
            <p>
              By (8) and (9), the sequences <InlineMath>{'\\{s_n\\}'}</InlineMath> and <InlineMath>{'\\{t_k\\}'}</InlineMath> are
              either both bounded or both unbounded. This completes the proof.
            </p>
          </>
        }
      >
        <p className="mb-4">
          Suppose <InlineMath>{'a_1 \\geq a_2 \\geq a_3 \\geq \\cdots \\geq 0'}</InlineMath>.
          Then the series <InlineMath>{'\\sum_{n=1}^{\\infty} a_n'}</InlineMath> converges
          if and only if the series
        </p>
        <MathBlock>{'\\sum_{k=0}^{\\infty} 2^k a_{2^k} = a_1 + 2a_2 + 4a_4 + 8a_8 + \\cdots'}</MathBlock>
        <p>converges.</p>
      </Theorem>

      <Theorem
        title="The p-Series (3.28)"
        proof={
          <>
            <p className="mb-4">
              If <InlineMath>{'p \\leq 0'}</InlineMath>, divergence follows from Theorem 3.23.
              If <InlineMath>{'p > 0'}</InlineMath>, Theorem 3.27 is applicable, and we are led to the series
            </p>
            <MathBlock>{'\\sum_{k=0}^{\\infty} 2^k \\cdot \\frac{1}{2^{kp}} = \\sum_{k=0}^{\\infty} 2^{(1-p)k}.'}</MathBlock>
            <p>
              Now, <InlineMath>{'2^{1-p} < 1'}</InlineMath> if and only if <InlineMath>{'1 - p < 0'}</InlineMath>, and the result
              follows by comparison with the geometric series (take <InlineMath>{'x = 2^{1-p}'}</InlineMath> in Theorem 3.26).
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'\\sum \\frac{1}{n^p}'}</InlineMath> converges
          if <InlineMath>{'p > 1'}</InlineMath> and diverges if <InlineMath>{'p \\leq 1'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning">
        <p>
          The divergence of <InlineMath>{'\\sum 1/n'}</InlineMath> (the harmonic series)
          is particularly important. It shows that the terms of a convergent series
          must not only approach 0, but must do so "fast enough."
        </p>
      </Callout>

      <Theorem
        title="Logarithmic p-Series (3.29)"
        proof={
          <p>
            The monotonicity of the logarithmic function (which will be
            discussed in more detail in Chap. 8) implies that <InlineMath>{'\\{1/n(\\log n)^p\\}'}</InlineMath> decreases,
            and we can apply Theorem 3.27 to the series. This leads us to examine
            <InlineMath>{'\\sum 2^k \\cdot 1/(2^k(k \\log 2)^p) = (1/(\\log 2)^p) \\sum 1/k^p'}</InlineMath>,
            and the result follows from Theorem 3.28.
          </p>
        }
      >
        <p>
          If <InlineMath>{'p > 1'}</InlineMath>,
        </p>
        <MathBlock>{'\\sum_{n=2}^{\\infty} \\frac{1}{n(\\log n)^p}'}</MathBlock>
        <p>converges; if <InlineMath>{'p \\leq 1'}</InlineMath>, the series diverges.</p>
      </Theorem>

      <Theorem
        title="Comparison Test (3.25)"
        proof={
          <>
            <p className="mb-4">
              <strong>(a)</strong> Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there
              exists <InlineMath>{'N \\geq N_0'}</InlineMath> such that <InlineMath>{'m \\geq n \\geq N'}</InlineMath> implies
            </p>
            <MathBlock>{'\\sum_{k=n}^{m} c_k \\leq \\varepsilon,'}</MathBlock>
            <p className="mb-4">
              by the Cauchy criterion. Hence
            </p>
            <MathBlock>{'\\left| \\sum_{k=n}^{m} a_k \\right| \\leq \\sum_{k=n}^{m} |a_k| \\leq \\sum_{k=n}^{m} c_k \\leq \\varepsilon,'}</MathBlock>
            <p>
              and (a) follows.
            </p>
            <p className="mt-4">
              <strong>(b)</strong> follows from (a), for if <InlineMath>{'\\Sigma a_n'}</InlineMath> converges,
              so must <InlineMath>{'\\Sigma d_n'}</InlineMath> [note that (b) applies only to series of nonnegative terms <InlineMath>{'a_n'}</InlineMath>].
            </p>
          </>
        }
      >
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>(a)</strong> If <InlineMath>{'|a_n| \\leq c_n'}</InlineMath> for <InlineMath>{'n \\geq N_0'}</InlineMath>,
            where <InlineMath>{'N_0'}</InlineMath> is some fixed integer, and
            if <InlineMath>{'\\Sigma c_n'}</InlineMath> converges,
            then <InlineMath>{'\\Sigma a_n'}</InlineMath> converges.
          </li>
          <li>
            <strong>(b)</strong> If <InlineMath>{'a_n \\geq d_n \\geq 0'}</InlineMath> for <InlineMath>{'n \\geq N_0'}</InlineMath>,
            and if <InlineMath>{'\\Sigma d_n'}</InlineMath> diverges,
            then <InlineMath>{'\\Sigma a_n'}</InlineMath> diverges.
          </li>
        </ul>
      </Theorem>

      <Example title="Applications of the p-Series">
        <p className="mb-4">
          The p-series gives us a handy toolkit for comparison:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <InlineMath>{'\\sum 1/n^2'}</InlineMath> converges (since <InlineMath>{'2 > 1'}</InlineMath>).
            In fact, <InlineMath>{'\\sum_{n=1}^{\\infty} 1/n^2 = \\pi^2/6'}</InlineMath>.
          </li>
          <li>
            <InlineMath>{'\\sum 1/\\sqrt{n}'}</InlineMath> diverges (since <InlineMath>{'1/2 \\leq 1'}</InlineMath>).
          </li>
          <li>
            <InlineMath>{'\\sum 1/n^{1.001}'}</InlineMath> converges (since <InlineMath>{'1.001 > 1'}</InlineMath>),
            but very slowly.
          </li>
        </ul>
      </Example>
    </LessonLayout>
  );
}
