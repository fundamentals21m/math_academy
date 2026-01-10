import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2 className="text-2xl font-semibold mb-4">Addition and Multiplication of Series</h2>

      <p className="mb-4">
        Having established the theory of convergence for series, we now investigate how series
        behave under algebraic operations. While addition is straightforward, multiplication
        requires care. The Cauchy product provides the natural way to multiply two series.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Addition of Series</h3>

      <Theorem
        title="3.47 Sum of Convergent Series"
        proof={
          <>
            <p>
              Let <InlineMath>{'A_n = \\sum_{k=1}^{n} a_k'}</InlineMath> and{' '}
              <InlineMath>{'B_n = \\sum_{k=1}^{n} b_k'}</InlineMath> be the partial sums.
              Then
            </p>
            <MathBlock>{'\\sum_{k=1}^{n} (a_k + b_k) = A_n + B_n.'}</MathBlock>
            <p className="mt-2">
              Since <InlineMath>{'A_n \\to A'}</InlineMath> and{' '}
              <InlineMath>{'B_n \\to B'}</InlineMath>, the limit theorem for sequences gives{' '}
              <InlineMath>{'A_n + B_n \\to A + B'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\Sigma a_n = A'}</InlineMath> and{' '}
          <InlineMath>{'\\Sigma b_n = B'}</InlineMath>, then{' '}
          <InlineMath>{'\\Sigma (a_n + b_n) = A + B'}</InlineMath>.
        </p>
      </Theorem>

      <p className="my-4">
        This follows immediately from the corresponding theorem for sequences. Similarly,{' '}
        <InlineMath>{'\\Sigma ca_n = cA'}</InlineMath> for any constant{' '}
        <InlineMath>c</InlineMath>.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">The Cauchy Product</h3>

      <Definition title="3.48 Cauchy Product">
        <p>
          Given <InlineMath>{'\\Sigma a_n'}</InlineMath> and{' '}
          <InlineMath>{'\\Sigma b_n'}</InlineMath>, we put
        </p>
        <MathBlock>{'c_n = \\sum_{k=0}^{n} a_k b_{n-k}'}</MathBlock>
        <p className="mt-2">
          and call <InlineMath>{'\\Sigma c_n'}</InlineMath> the <em>Cauchy product</em> of the
          two given series.
        </p>
        <p className="mt-2">
          This definition is motivated by the multiplication of finite sums: if we formally
          multiply <InlineMath>{'(\\sum a_n)(\\sum b_n)'}</InlineMath> and collect terms whose
          indices sum to <InlineMath>n</InlineMath>, we get exactly{' '}
          <InlineMath>{'c_n'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="warning">
        <p>
          <strong>Caution:</strong> The Cauchy product of two convergent series need not converge!
          Additional conditions (such as absolute convergence of at least one factor) are required.
        </p>
      </Callout>

      <Example title="3.49 A Divergent Cauchy Product">
        <p>
          Let <InlineMath>{'a_n = b_n = (-1)^n / \\sqrt{n+1}'}</InlineMath>. The series{' '}
          <InlineMath>{'\\Sigma a_n'}</InlineMath> converges by the alternating series test. However,
        </p>
        <MathBlock>{'c_n = \\sum_{k=0}^{n} \\frac{(-1)^k}{\\sqrt{k+1}} \\cdot \\frac{(-1)^{n-k}}{\\sqrt{n-k+1}} = (-1)^n \\sum_{k=0}^{n} \\frac{1}{\\sqrt{(k+1)(n-k+1)}}.'}</MathBlock>
        <p className="mt-2">
          One can show that <InlineMath>{'|c_n| \\geq n+1'}</InlineMath> by noting that each term
          in the sum is at least <InlineMath>{'1/(n+1)'}</InlineMath>, so{' '}
          <InlineMath>{'c_n \\not\\to 0'}</InlineMath>. Thus{' '}
          <InlineMath>{'\\Sigma c_n'}</InlineMath> diverges.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Mertens' Theorem</h3>

      <Theorem
        title="3.50 Mertens' Theorem"
        proof={
          <>
            <p>
              Put <InlineMath>{'A_n = \\sum_{k=0}^{n} a_k'}</InlineMath>,{' '}
              <InlineMath>{'B_n = \\sum_{k=0}^{n} b_k'}</InlineMath>,{' '}
              <InlineMath>{'C_n = \\sum_{k=0}^{n} c_k'}</InlineMath>, and{' '}
              <InlineMath>{'\\beta_n = B_n - B'}</InlineMath>.
            </p>
            <p className="mt-2">Then</p>
            <MathBlock>{'C_n = \\sum_{k=0}^{n} a_k B_{n-k} = \\sum_{k=0}^{n} a_k (B + \\beta_{n-k}) = A_n B + \\sum_{k=0}^{n} a_k \\beta_{n-k}.'}</MathBlock>
            <p className="mt-2">
              Put <InlineMath>{'\\gamma_n = \\sum_{k=0}^{n} a_k \\beta_{n-k}'}</InlineMath>. We need
              to show <InlineMath>{'\\gamma_n \\to 0'}</InlineMath>.
            </p>
            <p className="mt-2">
              Put <InlineMath>{'\\alpha = \\sum |a_n|'}</InlineMath>. Given{' '}
              <InlineMath>{'\\varepsilon > 0'}</InlineMath>, choose{' '}
              <InlineMath>N</InlineMath> so that{' '}
              <InlineMath>{'|\\beta_n| \\leq \\varepsilon'}</InlineMath> for{' '}
              <InlineMath>{'n \\geq N'}</InlineMath>. Then for <InlineMath>{'n > N'}</InlineMath>,
            </p>
            <MathBlock>{'|\\gamma_n| \\leq |\\beta_0 a_n + \\cdots + \\beta_N a_{n-N}| + |\\beta_{N+1}a_{n-N-1} + \\cdots + \\beta_n a_0|.'}</MathBlock>
            <p className="mt-2">
              The second sum is bounded by{' '}
              <InlineMath>{'\\varepsilon \\cdot \\alpha'}</InlineMath>. The first sum has a fixed
              number of terms, and each <InlineMath>{'a_k \\to 0'}</InlineMath> as{' '}
              <InlineMath>{'k \\to \\infty'}</InlineMath>. So for large{' '}
              <InlineMath>n</InlineMath>, <InlineMath>{'|\\gamma_n| < 2\\varepsilon\\alpha'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Suppose <InlineMath>{'\\Sigma a_n'}</InlineMath> converges absolutely to{' '}
          <InlineMath>A</InlineMath>, and <InlineMath>{'\\Sigma b_n'}</InlineMath> converges to{' '}
          <InlineMath>B</InlineMath>. Then their Cauchy product{' '}
          <InlineMath>{'\\Sigma c_n'}</InlineMath> converges to <InlineMath>AB</InlineMath>.
        </p>
      </Theorem>

      <Example title="Multiplying Power Series">
        <p>
          Consider <InlineMath>{'e^x = \\sum_{n=0}^{\\infty} x^n/n!'}</InlineMath>. Since this series
          converges absolutely for all <InlineMath>x</InlineMath>, Mertens' theorem tells us that
        </p>
        <MathBlock>{'e^x \\cdot e^y = \\sum_{n=0}^{\\infty} c_n'}</MathBlock>
        <p className="mt-2">where</p>
        <MathBlock>{'c_n = \\sum_{k=0}^{n} \\frac{x^k}{k!} \\cdot \\frac{y^{n-k}}{(n-k)!} = \\frac{1}{n!} \\sum_{k=0}^{n} \\binom{n}{k} x^k y^{n-k} = \\frac{(x+y)^n}{n!}.'}</MathBlock>
        <p className="mt-2">
          Thus <InlineMath>{'e^x \\cdot e^y = e^{x+y}'}</InlineMath>, proving the fundamental
          property of the exponential function.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">When Both Series Converge Absolutely</h3>

      <Theorem
        title="3.51 Product of Absolutely Convergent Series"
        proof={
          <>
            <p>
              We need to show that <InlineMath>{'\\Sigma |c_n|'}</InlineMath> converges.
              Note that
            </p>
            <MathBlock>{'|c_n| = \\left|\\sum_{k=0}^{n} a_k b_{n-k}\\right| \\leq \\sum_{k=0}^{n} |a_k| |b_{n-k}|.'}</MathBlock>
            <p className="mt-2">
              The right side is the Cauchy product of <InlineMath>{'\\Sigma |a_n|'}</InlineMath>{' '}
              and <InlineMath>{'\\Sigma |b_n|'}</InlineMath>. Since both series converge (absolutely),
              their Cauchy product converges by Mertens' theorem. By comparison,{' '}
              <InlineMath>{'\\Sigma |c_n|'}</InlineMath> converges.
            </p>
          </>
        }
      >
        <p>
          If both <InlineMath>{'\\Sigma a_n'}</InlineMath> and{' '}
          <InlineMath>{'\\Sigma b_n'}</InlineMath> converge absolutely to{' '}
          <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> respectively, then their
          Cauchy product converges absolutely to <InlineMath>AB</InlineMath>.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">The key results of this section are:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Addition of convergent series is straightforward</li>
        <li>
          Definition 3.48: The Cauchy product <InlineMath>{'c_n = \\sum_{k=0}^{n} a_k b_{n-k}'}</InlineMath>
        </li>
        <li>
          The Cauchy product of two convergent series may diverge (Example 3.49)
        </li>
        <li>
          Mertens' theorem (3.50): If one series converges absolutely and the other converges,
          the Cauchy product converges to the product of the sums
        </li>
        <li>
          If both series converge absolutely, so does their Cauchy product
        </li>
      </ul>
    </LessonLayout>
  );
}
