import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <h2 className="text-2xl font-semibold mb-4">Power Series</h2>

      <Definition title="Power Series (3.38)">
        <p className="mb-4">
          Given a sequence <InlineMath>{'\\{c_n\\}'}</InlineMath> of complex numbers, the series
        </p>
        <MathBlock>{'\\sum_{n=0}^{\\infty} c_n z^n'}</MathBlock>
        <p>
          is called a <em>power series</em>. The numbers <InlineMath>{'c_n'}</InlineMath> are
          called the <em>coefficients</em> of the series; <InlineMath>z</InlineMath> is a complex number.
        </p>
      </Definition>

      <p className="my-6">
        In general, the series will converge or diverge, depending on the choice
        of <InlineMath>z</InlineMath>. More specifically, with every power series there is
        associated a circle, the <em>circle of convergence</em>, such that (19) converges
        if <InlineMath>z</InlineMath> is in the interior of the circle and diverges if <InlineMath>z</InlineMath> is
        in the exterior (to cover all cases, we have to consider the plane as the interior
        of a circle of infinite radius, and a point as a circle of radius zero). The
        behavior on the circle of convergence is much more varied and cannot be described
        so simply.
      </p>

      <Theorem
        title="Radius of Convergence (3.39)"
        proof={
          <>
            <p className="mb-4">
              Put <InlineMath>{'a_n = c_n z^n'}</InlineMath>, and apply the root test:
            </p>
            <MathBlock>{'\\limsup_{n \\to \\infty} \\sqrt[n]{|a_n|} = |z| \\limsup_{n \\to \\infty} \\sqrt[n]{|c_n|} = \\frac{|z|}{R}.'}</MathBlock>
          </>
        }
      >
        <p className="mb-4">
          Given the power series <InlineMath>{'\\Sigma c_n z^n'}</InlineMath>, put
        </p>
        <MathBlock>{'\\alpha = \\limsup_{n \\to \\infty} \\sqrt[n]{|c_n|}, \\quad R = \\frac{1}{\\alpha}.'}</MathBlock>
        <p className="mb-4">
          (If <InlineMath>{'\\alpha = 0'}</InlineMath>, <InlineMath>{'R = +\\infty'}</InlineMath>;
          if <InlineMath>{'\\alpha = +\\infty'}</InlineMath>, <InlineMath>{'R = 0'}</InlineMath>.)
          Then <InlineMath>{'\\Sigma c_n z^n'}</InlineMath> converges if <InlineMath>{'|z| < R'}</InlineMath>,
          and diverges if <InlineMath>{'|z| > R'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info">
        <p>
          <em>Note:</em> <InlineMath>R</InlineMath> is called the <em>radius of convergence</em> of <InlineMath>{'\\Sigma c_n z^n'}</InlineMath>.
        </p>
      </Callout>

      <Example title="Examples (3.40)">
        <p className="mb-4">
          <strong>(a)</strong> The series <InlineMath>{'\\Sigma n^n z^n'}</InlineMath> has <InlineMath>{'R = 0'}</InlineMath>.
        </p>
        <p className="mb-4">
          <strong>(b)</strong> The series <InlineMath>{'\\sum \\frac{z^n}{n!}'}</InlineMath> has <InlineMath>{'R = +\\infty'}</InlineMath>.
          (In this case the ratio test is easier to apply than the root test.)
        </p>
        <p className="mb-4">
          <strong>(c)</strong> The series <InlineMath>{'\\Sigma z^n'}</InlineMath> has <InlineMath>{'R = 1'}</InlineMath>.
          If <InlineMath>{'|z| = 1'}</InlineMath>, the series diverges, since <InlineMath>{'\\{z^n\\}'}</InlineMath> does
          not tend to 0 as <InlineMath>{'n \\to \\infty'}</InlineMath>.
        </p>
        <p className="mb-4">
          <strong>(d)</strong> The series <InlineMath>{'\\sum \\frac{z^n}{n}'}</InlineMath> has <InlineMath>{'R = 1'}</InlineMath>.
          It diverges if <InlineMath>{'z = 1'}</InlineMath>. It converges for all
          other <InlineMath>z</InlineMath> with <InlineMath>{'|z| = 1'}</InlineMath>.
          (This last assertion will be proved in Theorem 3.44.)
        </p>
        <p>
          <strong>(e)</strong> The series <InlineMath>{'\\sum \\frac{z^n}{n^2}'}</InlineMath> has <InlineMath>{'R = 1'}</InlineMath>.
          It converges for all <InlineMath>z</InlineMath> with <InlineMath>{'|z| = 1'}</InlineMath>,
          by the comparison test, since <InlineMath>{'|z^n/n^2| = 1/n^2'}</InlineMath>.
        </p>
      </Example>

      <Callout type="warning">
        <p className="mb-4">
          <strong>Key Point:</strong> The behavior of a power series on its circle of convergence
          (where <InlineMath>{'|z| = R'}</InlineMath>) can vary widely:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>It may diverge everywhere on the circle (example c)</li>
          <li>It may diverge at one point and converge elsewhere (example d)</li>
          <li>It may converge everywhere on the circle (example e)</li>
        </ul>
      </Callout>

      <Example title="Important Power Series">
        <p className="mb-4">
          Some of the most important functions in mathematics are defined by power series:
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Exponential:</strong> <InlineMath>{'e^z = \\sum_{n=0}^{\\infty} \\frac{z^n}{n!}'}</InlineMath> (<InlineMath>{'R = \\infty'}</InlineMath>)
          </li>
          <li>
            <strong>Sine:</strong> <InlineMath>{'\\sin z = \\sum_{n=0}^{\\infty} \\frac{(-1)^n z^{2n+1}}{(2n+1)!}'}</InlineMath> (<InlineMath>{'R = \\infty'}</InlineMath>)
          </li>
          <li>
            <strong>Cosine:</strong> <InlineMath>{'\\cos z = \\sum_{n=0}^{\\infty} \\frac{(-1)^n z^{2n}}{(2n)!}'}</InlineMath> (<InlineMath>{'R = \\infty'}</InlineMath>)
          </li>
          <li>
            <strong>Logarithm:</strong> <InlineMath>{'\\ln(1+z) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} z^n}{n}'}</InlineMath> (<InlineMath>{'R = 1'}</InlineMath>)
          </li>
        </ul>
      </Example>
    </LessonLayout>
  );
}
