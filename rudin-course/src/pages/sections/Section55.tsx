import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <h2 className="text-2xl font-semibold mb-4">The Trigonometric Functions</h2>

      <p className="mb-4">
        We define the sine and cosine functions via power series, derive their
        fundamental properties, and establish their connection to the exponential
        function through Euler's formula.
      </p>

      <Definition title="8.13 - Sine and Cosine">
        <p className="mb-3">
          For any complex <InlineMath>{'z'}</InlineMath>, we define:
        </p>
        <MathBlock>{'C(z) = \\cos z = \\frac{e^{iz} + e^{-iz}}{2} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n z^{2n}}{(2n)!}'}</MathBlock>
        <MathBlock>{'S(z) = \\sin z = \\frac{e^{iz} - e^{-iz}}{2i} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n z^{2n+1}}{(2n+1)!}'}</MathBlock>
        <p>
          Both series converge for all <InlineMath>{'z \\in \\mathbb{C}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="8.14 - Euler's Formula"
        proof={
          <>
            <p className="mb-3">
              We have
            </p>
            <MathBlock>{'e^{iz} = \\sum_{n=0}^{\\infty} \\frac{(iz)^n}{n!} = \\sum_{n=0}^{\\infty} \\frac{i^n z^n}{n!}'}</MathBlock>
            <p className="mb-3">
              Using <InlineMath>{'i^0 = 1, i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1, \\ldots'}</InlineMath>:
            </p>
            <MathBlock>{'e^{iz} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n z^{2n}}{(2n)!} + i \\sum_{n=0}^{\\infty} \\frac{(-1)^n z^{2n+1}}{(2n+1)!} = \\cos z + i \\sin z'}</MathBlock>
          </>
        }
      >
        <p>
          For all <InlineMath>{'z \\in \\mathbb{C}'}</InlineMath>:
        </p>
        <MathBlock>{'e^{iz} = \\cos z + i \\sin z'}</MathBlock>
      </Theorem>

      <Callout type="info" title="Euler's Identity">
        <p className="mb-3">
          Setting <InlineMath>{'z = \\pi'}</InlineMath> in Euler's formula gives the famous identity:
        </p>
        <MathBlock>{'e^{i\\pi} + 1 = 0'}</MathBlock>
        <p>
          This remarkable equation relates the five most important constants in mathematics:
          <InlineMath>{'e'}</InlineMath>, <InlineMath>{'i'}</InlineMath>, <InlineMath>{'\\pi'}</InlineMath>, <InlineMath>{'1'}</InlineMath>, and <InlineMath>{'0'}</InlineMath>.
        </p>
      </Callout>

      <Theorem
        title="8.15 - Properties of Sine and Cosine"
        proof={
          <p>
            These follow from the definitions, Euler's formula, and the properties
            of the exponential function.
          </p>
        }
      >
        <p className="mb-2">(a) <InlineMath>{'\\cos^2 z + \\sin^2 z = 1'}</InlineMath>.</p>
        <p className="mb-2">(b) <InlineMath>{'\\cos(-z) = \\cos z'}</InlineMath> (even), <InlineMath>{'\\sin(-z) = -\\sin z'}</InlineMath> (odd).</p>
        <p className="mb-2">(c) <InlineMath>{'\\frac{d}{dz} \\cos z = -\\sin z'}</InlineMath>, <InlineMath>{'\\frac{d}{dz} \\sin z = \\cos z'}</InlineMath>.</p>
        <p className="mb-2">(d) <InlineMath>{'\\cos(z + w) = \\cos z \\cos w - \\sin z \\sin w'}</InlineMath>.</p>
        <p>(e) <InlineMath>{'\\sin(z + w) = \\sin z \\cos w + \\cos z \\sin w'}</InlineMath>.</p>
      </Theorem>

      <Example title="Proof of Pythagorean Identity">
        <p className="mb-3">
          Using Euler's formula:
        </p>
        <MathBlock>{'|e^{iz}|^2 = e^{iz} \\cdot \\overline{e^{iz}} = e^{iz} \\cdot e^{-iz} = e^0 = 1'}</MathBlock>
        <p className="mb-3">
          But also:
        </p>
        <MathBlock>{'|e^{iz}|^2 = |\\cos z + i \\sin z|^2 = \\cos^2 z + \\sin^2 z'}</MathBlock>
        <p>
          (for real <InlineMath>{'z'}</InlineMath>). Hence <InlineMath>{'\\cos^2 z + \\sin^2 z = 1'}</InlineMath>.
        </p>
      </Example>

      <Definition title="8.16 - The Number Pi">
        <p className="mb-3">
          We show that there is a smallest positive number <InlineMath>{'x'}</InlineMath> such
          that <InlineMath>{'\\cos x = 0'}</InlineMath>. We define <InlineMath>{'\\pi'}</InlineMath> by
        </p>
        <MathBlock>{'\\pi = 2 \\cdot (\\text{smallest positive root of } \\cos)'}</MathBlock>
        <p className="mb-3">
          Equivalently, <InlineMath>{'\\pi/2'}</InlineMath> is the smallest positive
          zero of <InlineMath>{'\\cos'}</InlineMath>.
        </p>
        <p>
          We have <InlineMath>{'\\pi \\approx 3.14159\\ldots'}</InlineMath>
        </p>
      </Definition>

      <Theorem
        title="8.17 - Periodicity"
        proof={
          <>
            <p className="mb-3">
              From <InlineMath>{'\\cos(\\pi/2) = 0'}</InlineMath> and <InlineMath>{'\\cos^2 + \\sin^2 = 1'}</InlineMath>,
              we get <InlineMath>{'\\sin(\\pi/2) = \\pm 1'}</InlineMath>. Since <InlineMath>{'\\sin\'(0) = \\cos(0) = 1 > 0'}</InlineMath> and <InlineMath>{'\\sin(0) = 0'}</InlineMath>,
              we have <InlineMath>{'\\sin(\\pi/2) = 1'}</InlineMath>.
            </p>
            <p className="mb-3">
              Thus <InlineMath>{'e^{i\\pi/2} = i'}</InlineMath>, so <InlineMath>{'e^{i\\pi} = (e^{i\\pi/2})^2 = -1'}</InlineMath>,
              and <InlineMath>{'e^{2\\pi i} = 1'}</InlineMath>.
            </p>
            <p>
              Therefore <InlineMath>{'e^{i(z + 2\\pi)} = e^{iz} \\cdot e^{2\\pi i} = e^{iz}'}</InlineMath>,
              so <InlineMath>{'\\cos'}</InlineMath> and <InlineMath>{'\\sin'}</InlineMath> have period <InlineMath>{'2\\pi'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          The functions <InlineMath>{'\\cos'}</InlineMath> and <InlineMath>{'\\sin'}</InlineMath> are periodic
          with period <InlineMath>{'2\\pi'}</InlineMath>:
        </p>
        <MathBlock>{'\\cos(z + 2\\pi) = \\cos z, \\quad \\sin(z + 2\\pi) = \\sin z'}</MathBlock>
        <p>
          Moreover, <InlineMath>{'2\\pi'}</InlineMath> is the smallest positive period.
        </p>
      </Theorem>

      <Definition title="Other Trigonometric Functions">
        <p className="mb-3">
          We define:
        </p>
        <MathBlock>{'\\tan z = \\frac{\\sin z}{\\cos z}, \\quad \\cot z = \\frac{\\cos z}{\\sin z}'}</MathBlock>
        <MathBlock>{'\\sec z = \\frac{1}{\\cos z}, \\quad \\csc z = \\frac{1}{\\sin z}'}</MathBlock>
        <p>
          where defined (i.e., where the denominators are nonzero).
        </p>
      </Definition>

      <Example title="Special Values">
        <p className="mb-3">
          From the definitions and periodicity:
        </p>
        <MathBlock>{'\\sin 0 = 0, \\quad \\cos 0 = 1'}</MathBlock>
        <MathBlock>{'\\sin(\\pi/2) = 1, \\quad \\cos(\\pi/2) = 0'}</MathBlock>
        <MathBlock>{'\\sin \\pi = 0, \\quad \\cos \\pi = -1'}</MathBlock>
        <MathBlock>{'\\sin(3\\pi/2) = -1, \\quad \\cos(3\\pi/2) = 0'}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Euler's formula: <InlineMath>{'e^{iz} = \\cos z + i \\sin z'}</InlineMath></li>
        <li>Sine and cosine have power series with infinite radius of convergence</li>
        <li>Pythagorean identity: <InlineMath>{'\\cos^2 z + \\sin^2 z = 1'}</InlineMath></li>
        <li><InlineMath>{'\\pi'}</InlineMath> is defined as twice the first positive zero of cosine</li>
        <li>Sine and cosine are periodic with period <InlineMath>{'2\\pi'}</InlineMath></li>
        <li>Derivatives: <InlineMath>{'(\\sin z)\' = \\cos z'}</InlineMath>, <InlineMath>{'(\\cos z)\' = -\\sin z'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
