import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Multiplication of Power Series</h2>

      <p className="mb-4">
        We now show that the product of two real analytic functions is again real analytic, and we
        compute the power series of the product in terms of the power series of the factors.
      </p>

      <Definition title="Product of Power Series">
        <p>
          Let <InlineMath>{`f : (a - r, a + r) \\to \\mathbf{R}`}</InlineMath> and{' '}
          <InlineMath>{`g : (a - r, a + r) \\to \\mathbf{R}`}</InlineMath> be functions analytic on{' '}
          <InlineMath>{`(a - r, a + r)`}</InlineMath>, with power series expansions:
        </p>
        <MathBlock>{`f(x) = \\sum_{n=0}^{\\infty} c_n(x - a)^n \\quad \\text{and} \\quad g(x) = \\sum_{n=0}^{\\infty} d_n(x - a)^n`}</MathBlock>
        <p className="mt-2">
          Then <InlineMath>{`fg : (a - r, a + r) \\to \\mathbf{R}`}</InlineMath> is also analytic on{' '}
          <InlineMath>{`(a - r, a + r)`}</InlineMath>, with power series expansion:
        </p>
        <MathBlock>{`f(x)g(x) = \\sum_{n=0}^{\\infty} e_n(x - a)^n`}</MathBlock>
        <p className="mt-2">
          where the coefficients are given by the <strong>Cauchy product</strong>:
        </p>
        <MathBlock>{`e_n := \\sum_{m=0}^{n} c_m d_{n-m} = c_0 d_n + c_1 d_{n-1} + \\cdots + c_n d_0`}</MathBlock>
      </Definition>

      <Callout type="info" title="Convolution">
        <p>
          The sequence <InlineMath>{`(e_n)_{n=0}^{\\infty}`}</InlineMath> is sometimes called the{' '}
          <strong>convolution</strong> of the sequences{' '}
          <InlineMath>{`(c_n)_{n=0}^{\\infty}`}</InlineMath> and{' '}
          <InlineMath>{`(d_n)_{n=0}^{\\infty}`}</InlineMath>. This is closely related (though not
          identical) to the notion of convolution for functions.
        </p>
      </Callout>

      <Example title="Computing a Product">
        <p>
          Consider <InlineMath>{`f(x) = \\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n`}</InlineMath>{' '}
          and <InlineMath>{`g(x) = \\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n`}</InlineMath>.
        </p>
        <p className="mt-2">
          Both have coefficients <InlineMath>{`c_n = d_n = 1`}</InlineMath> for all{' '}
          <InlineMath>n</InlineMath>. The product coefficients are:
        </p>
        <MathBlock>{`e_n = \\sum_{m=0}^{n} 1 \\cdot 1 = n + 1`}</MathBlock>
        <p className="mt-2">
          Therefore:
        </p>
        <MathBlock>{`\\frac{1}{(1-x)^2} = \\sum_{n=0}^{\\infty} (n+1)x^n = 1 + 2x + 3x^2 + 4x^3 + \\cdots`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Proof Idea</h3>

      <p className="mb-4">
        The proof uses Fubini's theorem for series to justify rearranging a double sum. The key
        steps are:
      </p>

      <Definition title="Proof Outline">
        <p>
          <strong>Step 1:</strong> Show that the double series{' '}
          <InlineMath>{`\\sum_{n=0}^{\\infty} \\sum_{m=0}^{\\infty} |c_m(x-a)^m d_n(x-a)^n|`}</InlineMath>{' '}
          converges absolutely.
        </p>
        <p className="mt-2">
          <strong>Step 2:</strong> Compute the product:
        </p>
        <MathBlock>{`f(x)g(x) = \\sum_{n=0}^{\\infty} d_n(x-a)^n \\sum_{m=0}^{\\infty} c_m(x-a)^m = \\sum_{n=0}^{\\infty} \\sum_{m=0}^{\\infty} c_m d_n (x-a)^{n+m}`}</MathBlock>
        <p className="mt-2">
          <strong>Step 3:</strong> Apply Fubini's theorem to swap the order of summation, then
          substitute <InlineMath>{`n' = n + m`}</InlineMath> to get:
        </p>
        <MathBlock>{`f(x)g(x) = \\sum_{n'=0}^{\\infty} (x-a)^{n'} \\sum_{m=0}^{n'} c_m d_{n'-m}`}</MathBlock>
      </Definition>

      <Callout type="success" title="Algebraic Structure">
        <p>
          This theorem shows that real analytic functions form an <strong>algebra</strong>: the sum,
          difference, and product of real analytic functions are again real analytic. Combined with
          the chain rule (composition), this gives us powerful tools for building new real analytic
          functions from known ones.
        </p>
      </Callout>

      <Example title="Building More Functions">
        <p>
          Since <InlineMath>{`e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}`}</InlineMath> is real
          analytic on <InlineMath>{`\\mathbf{R}`}</InlineMath>, the product{' '}
          <InlineMath>{`e^x \\cdot e^x = e^{2x}`}</InlineMath> is also real analytic.
        </p>
        <p className="mt-2">
          Similarly, functions like <InlineMath>{`x^2 e^x`}</InlineMath>,{' '}
          <InlineMath>{`\\frac{e^x}{1-x}`}</InlineMath> (on appropriate domains), and{' '}
          <InlineMath>{`(1 + x)e^x`}</InlineMath> are all real analytic because they are products of
          real analytic functions.
        </p>
      </Example>
    </LessonLayout>
  );
}
