import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2 className="text-2xl font-semibold mb-4">Absolute Convergence</h2>

      <p className="mb-4">
        We have seen that not every convergent series converges absolutely. This distinction
        turns out to be of fundamental importance. In this section, we study absolute convergence
        and show that it implies convergence, but not conversely.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Definition and Basic Properties</h3>

      <Definition title="3.45 Absolute Convergence">
        <p>
          The series <InlineMath>{'\\Sigma a_n'}</InlineMath> is said to <em>converge absolutely</em>{' '}
          if the series <InlineMath>{'\\Sigma |a_n|'}</InlineMath> converges.
        </p>
      </Definition>

      <Theorem
        title="3.46 Absolute Convergence Implies Convergence"
        proof={
          <>
            <p>
              Suppose <InlineMath>{'\\Sigma |a_n|'}</InlineMath> converges. Let{' '}
              <InlineMath>{'\\varepsilon > 0'}</InlineMath> be given. Then there exists{' '}
              <InlineMath>{'N'}</InlineMath> such that
            </p>
            <MathBlock>{'\\sum_{k=n}^{m} |a_k| < \\varepsilon'}</MathBlock>
            <p className="mt-2">
              for <InlineMath>{'m \\geq n \\geq N'}</InlineMath>. By the triangle inequality,
            </p>
            <MathBlock>{'\\left|\\sum_{k=n}^{m} a_k\\right| \\leq \\sum_{k=n}^{m} |a_k| < \\varepsilon.'}</MathBlock>
            <p className="mt-2">
              Thus <InlineMath>{'\\Sigma a_n'}</InlineMath> satisfies the Cauchy criterion
              (Theorem 3.22), so it converges.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\Sigma a_n'}</InlineMath> converges absolutely, then{' '}
          <InlineMath>{'\\Sigma a_n'}</InlineMath> converges.
        </p>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>The Converse is False:</strong> The alternating harmonic series shows that
          convergence does not imply absolute convergence. We have seen that{' '}
          <InlineMath>{'\\Sigma (-1)^{n+1}/n'}</InlineMath> converges, but{' '}
          <InlineMath>{'\\Sigma 1/n'}</InlineMath> diverges.
        </p>
      </Callout>

      <Definition title="Conditional Convergence">
        <p>
          A series is said to be <em>conditionally convergent</em> if it converges but does not
          converge absolutely.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold mt-8 mb-4">Examples</h3>

      <Example title="The Alternating Harmonic Series">
        <p>Consider the series</p>
        <MathBlock>{'\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots'}</MathBlock>
        <p className="mt-2">
          By the alternating series test (Theorem 3.43), this series converges. However,
        </p>
        <MathBlock>{'\\sum_{n=1}^{\\infty} \\left|\\frac{(-1)^{n+1}}{n}\\right| = \\sum_{n=1}^{\\infty} \\frac{1}{n}'}</MathBlock>
        <p className="mt-2">
          diverges (the harmonic series). Therefore, the alternating harmonic series is
          conditionally convergent but not absolutely convergent.
        </p>
      </Example>

      <Example title="Absolutely Convergent Series">
        <p>The series</p>
        <MathBlock>{'\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2}'}</MathBlock>
        <p className="mt-2">converges absolutely because</p>
        <MathBlock>{'\\sum_{n=1}^{\\infty} \\left|\\frac{(-1)^n}{n^2}\\right| = \\sum_{n=1}^{\\infty} \\frac{1}{n^2}'}</MathBlock>
        <p className="mt-2">
          converges (this is a <InlineMath>p</InlineMath>-series with{' '}
          <InlineMath>{'p = 2 > 1'}</InlineMath>).
        </p>
      </Example>

      <Example title="Series with Complex Terms">
        <p>
          Consider <InlineMath>{'\\sum_{n=1}^{\\infty} z^n / n^2'}</InlineMath> where{' '}
          <InlineMath>{'|z| \\leq 1'}</InlineMath>. Since
        </p>
        <MathBlock>{'\\left|\\frac{z^n}{n^2}\\right| = \\frac{|z|^n}{n^2} \\leq \\frac{1}{n^2},'}</MathBlock>
        <p className="mt-2">
          and <InlineMath>{'\\Sigma 1/n^2'}</InlineMath> converges, the comparison test shows that
          the series converges absolutely for all <InlineMath>{'|z| \\leq 1'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Connection to Convergence Tests</h3>

      <p className="my-4">
        The root test and ratio test are tests for absolute convergence:
      </p>

      <Callout type="info">
        <p>
          When the root test shows that <InlineMath>{'\\limsup \\sqrt[n]{|a_n|} < 1'}</InlineMath>,
          it actually proves that <InlineMath>{'\\Sigma |a_n|'}</InlineMath> converges, which means{' '}
          <InlineMath>{'\\Sigma a_n'}</InlineMath> converges absolutely. Similarly for the ratio
          test. These tests can only detect absolute convergence, never conditional convergence.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">The key results of this section are:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Definition 3.45: A series converges absolutely if{' '}
          <InlineMath>{'\\Sigma |a_n|'}</InlineMath> converges
        </li>
        <li>Theorem 3.46: Absolute convergence implies convergence</li>
        <li>
          The converse is false: the alternating harmonic series converges conditionally
        </li>
        <li>
          The root and ratio tests can only detect absolute convergence
        </li>
      </ul>
    </LessonLayout>
  );
}
