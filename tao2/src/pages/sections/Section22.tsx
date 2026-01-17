import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">
        The Exponential and Logarithm Functions
      </h2>

      <p className="mb-4">
        We now use the machinery of power series to develop a rigorous foundation for the
        exponential and logarithm functions.
      </p>

      <Definition title="Exponential Function">
        <p>
          For every real number <InlineMath>x</InlineMath>, we define the <strong>exponential
          function</strong> <InlineMath>{`\\exp(x)`}</InlineMath> to be:
        </p>
        <MathBlock>{`\\exp(x) := \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of the Exponential
      </h3>

      <Definition title="Basic Properties of exp">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Convergence:</strong> The series <InlineMath>{`\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}`}</InlineMath>{' '}
            is absolutely convergent for every <InlineMath>{`x \\in \\mathbf{R}`}</InlineMath>. The
            power series has infinite radius of convergence, and <InlineMath>exp</InlineMath> is
            real analytic on <InlineMath>{`(-\\infty, \\infty)`}</InlineMath>.
          </li>
          <li>
            <strong>Derivative:</strong> <InlineMath>{`\\exp'(x) = \\exp(x)`}</InlineMath> for all{' '}
            <InlineMath>{`x \\in \\mathbf{R}`}</InlineMath>.
          </li>
          <li>
            <strong>Integral:</strong> <InlineMath>{`\\int_{[a,b]} \\exp(x) \\, dx = \\exp(b) - \\exp(a)`}</InlineMath>.
          </li>
          <li>
            <strong>Addition formula:</strong>{' '}
            <InlineMath>{`\\exp(x + y) = \\exp(x) \\exp(y)`}</InlineMath> for all{' '}
            <InlineMath>{`x, y \\in \\mathbf{R}`}</InlineMath>.
          </li>
          <li>
            <strong>Identity:</strong> <InlineMath>{`\\exp(0) = 1`}</InlineMath>.
          </li>
          <li>
            <strong>Positivity:</strong> <InlineMath>{`\\exp(x) > 0`}</InlineMath> for all{' '}
            <InlineMath>{`x \\in \\mathbf{R}`}</InlineMath>, and{' '}
            <InlineMath>{`\\exp(-x) = 1/\\exp(x)`}</InlineMath>.
          </li>
          <li>
            <strong>Monotonicity:</strong> <InlineMath>exp</InlineMath> is strictly increasing.
          </li>
        </ul>
      </Definition>

      <Definition title="Euler's Number">
        <p>
          The number <InlineMath>e</InlineMath>, also known as <strong>Euler's number</strong> or
          the <strong>base of the natural logarithm</strong>, is defined as:
        </p>
        <MathBlock>{`e := \\exp(1) = \\sum_{n=0}^{\\infty} \\frac{1}{n!} = 1 + 1 + \\frac{1}{2!} + \\frac{1}{3!} + \\cdots \\approx 2.71828`}</MathBlock>
      </Definition>

      <Callout type="success" title="Key Identity">
        <p>
          For every real number <InlineMath>x</InlineMath>, we have{' '}
          <InlineMath>{`\\exp(x) = e^x`}</InlineMath>. This justifies writing{' '}
          <InlineMath>{`e^x`}</InlineMath> for <InlineMath>{`\\exp(x)`}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Natural Logarithm</h3>

      <p className="mb-4">
        Since <InlineMath>{`e > 1`}</InlineMath>, we have <InlineMath>{`e^x \\to +\\infty`}</InlineMath>{' '}
        as <InlineMath>{`x \\to +\\infty`}</InlineMath> and <InlineMath>{`e^x \\to 0`}</InlineMath>{' '}
        as <InlineMath>{`x \\to -\\infty`}</InlineMath>. By the intermediate value theorem, the range
        of <InlineMath>exp</InlineMath> is <InlineMath>{`(0, \\infty)`}</InlineMath>. Since{' '}
        <InlineMath>exp</InlineMath> is strictly increasing, it has an inverse.
      </p>

      <Definition title="Natural Logarithm">
        <p>
          We define the <strong>natural logarithm function</strong>{' '}
          <InlineMath>{`\\ln : (0, \\infty) \\to \\mathbf{R}`}</InlineMath> (also called{' '}
          <InlineMath>log</InlineMath>) to be the inverse of the exponential function. Thus:
        </p>
        <MathBlock>{`\\exp(\\ln(x)) = x \\quad \\text{and} \\quad \\ln(\\exp(x)) = x`}</MathBlock>
      </Definition>

      <Definition title="Properties of ln">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Derivative:</strong> <InlineMath>{`\\ln'(x) = \\frac{1}{x}`}</InlineMath> for
            all <InlineMath>{`x \\in (0, \\infty)`}</InlineMath>.
          </li>
          <li>
            <strong>Integral:</strong>{' '}
            <InlineMath>{`\\int_{[a,b]} \\frac{1}{x} \\, dx = \\ln(b) - \\ln(a)`}</InlineMath>.
          </li>
          <li>
            <strong>Addition formula:</strong>{' '}
            <InlineMath>{`\\ln(xy) = \\ln(x) + \\ln(y)`}</InlineMath>.
          </li>
          <li>
            <strong>Identity:</strong> <InlineMath>{`\\ln(1) = 0`}</InlineMath> and{' '}
            <InlineMath>{`\\ln(1/x) = -\\ln(x)`}</InlineMath>.
          </li>
          <li>
            <strong>Power formula:</strong> <InlineMath>{`\\ln(x^y) = y \\ln(x)`}</InlineMath>.
          </li>
          <li>
            <strong>Power series:</strong> For <InlineMath>{`x \\in (-1, 1)`}</InlineMath>:
            <MathBlock>{`\\ln(1 - x) = -\\sum_{n=1}^{\\infty} \\frac{x^n}{n}`}</MathBlock>
          </li>
        </ul>
      </Definition>

      <Example title="Power Series for ln(x)">
        <p>
          The natural logarithm is real analytic at 1, with the power series expansion:
        </p>
        <MathBlock>{`\\ln(x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}(x - 1)^n = (x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3} - \\cdots`}</MathBlock>
        <p className="mt-2">
          for <InlineMath>{`x \\in (0, 2)`}</InlineMath>, with radius of convergence 1.
        </p>
      </Example>

      <Callout type="info" title="Irrationality of e">
        <p>
          It can be shown that <InlineMath>e</InlineMath> is irrational. The proof uses the fact
          that <InlineMath>{`n! e`}</InlineMath> is not an integer for <InlineMath>{`n \\geq 3`}</InlineMath>.
        </p>
      </Callout>
    </LessonLayout>
  );
}
