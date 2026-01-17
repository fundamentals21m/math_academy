import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Fourier and Plancherel Theorems</h2>

      <p className="mb-4">
        Using the Weierstrass approximation theorem for trigonometric polynomials, we can now
        generalize the Fourier inversion and Plancherel identities to arbitrary continuous
        periodic functions.
      </p>

      <Definition title="Fourier Theorem">
        <p>
          For any <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>, the
          series <InlineMath>{`\\sum_{n=-\\infty}^{\\infty} \\hat{f}(n) e_n`}</InlineMath>{' '}
          converges in <InlineMath>{`L^2`}</InlineMath> metric to <InlineMath>f</InlineMath>. In
          other words:
        </p>
        <MathBlock>{`\\lim_{N \\to \\infty} \\left\\| f - \\sum_{n=-N}^{N} \\hat{f}(n) e_n \\right\\|_2 = 0`}</MathBlock>
      </Definition>

      <Example title="Proof Sketch">
        <p>
          Let <InlineMath>{`\\varepsilon > 0`}</InlineMath>. By the Weierstrass approximation
          theorem, we can find a trigonometric polynomial{' '}
          <InlineMath>{`P = \\sum_{n=-N_0}^{N_0} c_n e_n`}</InlineMath> such that{' '}
          <InlineMath>{`\\|f - P\\|_{\\infty} \\leq \\varepsilon`}</InlineMath>, hence{' '}
          <InlineMath>{`\\|f - P\\|_2 \\leq \\varepsilon`}</InlineMath>.
        </p>
        <p className="mt-2">
          For <InlineMath>{`N > N_0`}</InlineMath>, let{' '}
          <InlineMath>{`F_N := \\sum_{n=-N}^{N} \\hat{f}(n) e_n`}</InlineMath>. The key observation
          is that <InlineMath>{`f - F_N`}</InlineMath> is orthogonal to{' '}
          <InlineMath>{`F_N - P`}</InlineMath> (since{' '}
          <InlineMath>{`\\langle f - F_N, e_m \\rangle = 0`}</InlineMath> for{' '}
          <InlineMath>{`|m| \\leq N`}</InlineMath>).
        </p>
        <p className="mt-2">
          By Pythagoras' theorem:{' '}
          <InlineMath>{`\\|f - P\\|_2^2 = \\|f - F_N\\|_2^2 + \\|F_N - P\\|_2^2`}</InlineMath>, so{' '}
          <InlineMath>{`\\|f - F_N\\|_2 \\leq \\|f - P\\|_2 \\leq \\varepsilon`}</InlineMath>.
        </p>
      </Example>

      <Callout type="warning" title="Type of Convergence">
        <p>
          We have only obtained convergence of the Fourier series to <InlineMath>f</InlineMath>{' '}
          in the <InlineMath>{`L^2`}</InlineMath> metric. One may ask whether one has convergence
          in the uniform or pointwise sense as well, but it turns out that the answer is{' '}
          <strong>no</strong> to both of those questions in general.
        </p>
        <p className="mt-2">
          However, if <InlineMath>f</InlineMath> is continuously differentiable, one can recover
          pointwise convergence; if <InlineMath>f</InlineMath> is continuously twice differentiable,
          one gets uniform convergence as well.
        </p>
      </Callout>

      <Definition title="Uniform Convergence Criterion">
        <p>
          Let <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>, and
          suppose that the series{' '}
          <InlineMath>{`\\sum_{n=-\\infty}^{\\infty} |\\hat{f}(n)|`}</InlineMath> is absolutely
          convergent. Then the series{' '}
          <InlineMath>{`\\sum_{n=-\\infty}^{\\infty} \\hat{f}(n) e_n`}</InlineMath> converges
          uniformly to <InlineMath>f</InlineMath>:
        </p>
        <MathBlock>{`\\lim_{N \\to \\infty} \\left\\| f - \\sum_{n=-N}^{N} \\hat{f}(n) e_n \\right\\|_{\\infty} = 0`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Plancherel Theorem</h3>

      <Definition title="Plancherel Theorem">
        <p>
          For any <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>, the
          series <InlineMath>{`\\sum_{n=-\\infty}^{\\infty} |\\hat{f}(n)|^2`}</InlineMath> is
          absolutely convergent, and:
        </p>
        <MathBlock>{`\\|f\\|_2^2 = \\sum_{n=-\\infty}^{\\infty} |\\hat{f}(n)|^2`}</MathBlock>
      </Definition>

      <Callout type="info" title="Parseval's Theorem">
        <p>
          The Plancherel theorem is also known as <strong>Parseval's theorem</strong>. It says
          that the Fourier transform preserves the <InlineMath>{`L^2`}</InlineMath> norm: the
          "energy" of a function in the time domain equals the "energy" in the frequency domain.
        </p>
      </Callout>

      <Example title="Interpreting the Plancherel Formula">
        <p>
          The Plancherel formula can be interpreted as follows: if we decompose a periodic
          function <InlineMath>f</InlineMath> into its frequency components{' '}
          <InlineMath>{`\\hat{f}(n)`}</InlineMath>, then the total "power" of{' '}
          <InlineMath>f</InlineMath> (measured by <InlineMath>{`\\|f\\|_2^2`}</InlineMath>) equals
          the sum of the powers of each frequency component.
        </p>
      </Example>

      <Callout type="success" title="Summary of Fourier Theory">
        <p>The key results of Fourier series theory are:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Every continuous periodic function can be uniformly approximated by trigonometric
            polynomials (Weierstrass approximation)
          </li>
          <li>
            The Fourier series of a continuous periodic function converges to it in{' '}
            <InlineMath>{`L^2`}</InlineMath> metric (Fourier theorem)
          </li>
          <li>
            The <InlineMath>{`L^2`}</InlineMath> norm is preserved by the Fourier transform
            (Plancherel theorem)
          </li>
        </ul>
        <p className="mt-2">
          Fourier series have vast applications in differential equations, signal processing,
          electrical engineering, physics, and number theory.
        </p>
      </Callout>
    </LessonLayout>
  );
}
