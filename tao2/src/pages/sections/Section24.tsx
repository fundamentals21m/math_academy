import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Trigonometric Functions</h2>

      <p className="mb-4">
        We can now define the trigonometric functions rigorously using the complex exponential
        function and power series.
      </p>

      <Definition title="Complex Exponential">
        <p>
          For any complex number <InlineMath>{`z = x + iy`}</InlineMath> (with{' '}
          <InlineMath>{`x, y \\in \\mathbf{R}`}</InlineMath>), we define:
        </p>
        <MathBlock>{`\\exp(z) := \\sum_{n=0}^{\\infty} \\frac{z^n}{n!}`}</MathBlock>
        <p className="mt-2">
          This series converges absolutely for all <InlineMath>{`z \\in \\mathbf{C}`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Euler's Formula">
        <p>
          For any real number <InlineMath>{`\\theta`}</InlineMath>:
        </p>
        <MathBlock>{`e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\cos`}</InlineMath> and <InlineMath>{`\\sin`}</InlineMath> are
          defined by:
        </p>
        <MathBlock>{`\\cos(\\theta) := \\Re(e^{i\\theta}), \\quad \\sin(\\theta) := \\Im(e^{i\\theta})`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Power Series for Sine and Cosine
      </h3>

      <Definition title="Sine and Cosine Series">
        <p>
          The power series expansions for sine and cosine are:
        </p>
        <MathBlock>{`\\cos(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots`}</MathBlock>
        <MathBlock>{`\\sin(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots`}</MathBlock>
        <p className="mt-2">
          Both series converge absolutely for all <InlineMath>{`x \\in \\mathbf{R}`}</InlineMath>,
          so <InlineMath>{`\\sin`}</InlineMath> and <InlineMath>{`\\cos`}</InlineMath> are real
          analytic on <InlineMath>{`\\mathbf{R}`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of Trigonometric Functions
      </h3>

      <Definition title="Basic Properties">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Derivatives:</strong>{' '}
            <InlineMath>{`\\cos'(x) = -\\sin(x)`}</InlineMath> and{' '}
            <InlineMath>{`\\sin'(x) = \\cos(x)`}</InlineMath>.
          </li>
          <li>
            <strong>Initial values:</strong>{' '}
            <InlineMath>{`\\cos(0) = 1`}</InlineMath> and <InlineMath>{`\\sin(0) = 0`}</InlineMath>.
          </li>
          <li>
            <strong>Pythagorean identity:</strong>{' '}
            <InlineMath>{`\\cos^2(x) + \\sin^2(x) = 1`}</InlineMath>.
          </li>
          <li>
            <strong>Parity:</strong> <InlineMath>{`\\cos(-x) = \\cos(x)`}</InlineMath> (even) and{' '}
            <InlineMath>{`\\sin(-x) = -\\sin(x)`}</InlineMath> (odd).
          </li>
          <li>
            <strong>Addition formulas:</strong>
            <MathBlock>{`\\cos(x + y) = \\cos(x)\\cos(y) - \\sin(x)\\sin(y)`}</MathBlock>
            <MathBlock>{`\\sin(x + y) = \\sin(x)\\cos(y) + \\cos(x)\\sin(y)`}</MathBlock>
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Definition of Pi</h3>

      <Definition title="The Number Pi">
        <p>
          We define <InlineMath>{`\\pi`}</InlineMath> to be the smallest positive real number such
          that <InlineMath>{`\\cos(\\pi/2) = 0`}</InlineMath>. Equivalently,{' '}
          <InlineMath>{`\\pi/2`}</InlineMath> is the smallest positive root of{' '}
          <InlineMath>{`\\cos`}</InlineMath>.
        </p>
        <p className="mt-2">
          Key values:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`\\cos(\\pi/2) = 0`}</InlineMath>,{' '}
            <InlineMath>{`\\sin(\\pi/2) = 1`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\cos(\\pi) = -1`}</InlineMath>,{' '}
            <InlineMath>{`\\sin(\\pi) = 0`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\cos(2\\pi) = 1`}</InlineMath>,{' '}
            <InlineMath>{`\\sin(2\\pi) = 0`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Definition title="Periodicity">
        <p>
          Both <InlineMath>{`\\sin`}</InlineMath> and <InlineMath>{`\\cos`}</InlineMath> are{' '}
          <strong>periodic</strong> with period <InlineMath>{`2\\pi`}</InlineMath>:
        </p>
        <MathBlock>{`\\cos(x + 2\\pi) = \\cos(x), \\quad \\sin(x + 2\\pi) = \\sin(x)`}</MathBlock>
      </Definition>

      <Example title="Euler's Identity">
        <p>
          Setting <InlineMath>{`\\theta = \\pi`}</InlineMath> in Euler's formula gives the
          famous <strong>Euler's identity</strong>:
        </p>
        <MathBlock>{`e^{i\\pi} + 1 = 0`}</MathBlock>
        <p className="mt-2">
          This remarkable equation relates five fundamental constants: <InlineMath>e</InlineMath>,{' '}
          <InlineMath>i</InlineMath>, <InlineMath>{`\\pi`}</InlineMath>, 1, and 0.
        </p>
      </Example>

      <Callout type="success" title="Full Circle">
        <p>
          We have now rigorously defined all the standard transcendental functions —{' '}
          <InlineMath>exp</InlineMath>, <InlineMath>ln</InlineMath>, <InlineMath>sin</InlineMath>,{' '}
          <InlineMath>cos</InlineMath> — using power series. The key insight is that Euler's formula{' '}
          <InlineMath>{`e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)`}</InlineMath> connects the
          exponential function to the trigonometric functions.
        </p>
      </Callout>

      <Callout type="info" title="Other Trigonometric Functions">
        <p>
          The other trigonometric functions are defined in terms of sine and cosine:
        </p>
        <MathBlock>{`\\tan(x) := \\frac{\\sin(x)}{\\cos(x)}, \\quad \\cot(x) := \\frac{\\cos(x)}{\\sin(x)}, \\quad \\sec(x) := \\frac{1}{\\cos(x)}, \\quad \\csc(x) := \\frac{1}{\\sin(x)}`}</MathBlock>
      </Callout>
    </LessonLayout>
  );
}
