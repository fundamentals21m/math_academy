import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <h2 className="text-2xl font-semibold mb-4">Power Series</h2>

      <p className="mb-4">
        Chapter 8 studies some of the most important special functions in analysis:
        power series, exponentials, logarithms, and trigonometric functions. We begin
        with the general theory of power series.
      </p>

      <Definition title="8.1 - Power Series">
        <p className="mb-3">
          Given a sequence <InlineMath>{'\\{c_n\\}'}</InlineMath> of complex numbers, the series
        </p>
        <MathBlock>{'\\sum_{n=0}^{\\infty} c_n z^n'}</MathBlock>
        <p>
          is called a <em>power series</em>. The numbers <InlineMath>{'c_n'}</InlineMath> are
          the <em>coefficients</em> of the series; <InlineMath>{'z'}</InlineMath> is a complex variable.
        </p>
      </Definition>

      <Theorem
        title="8.2 - Existence of Radius of Convergence"
        proof={
          <>
            <p className="mb-3">
              Put <InlineMath>{'\\alpha = \\limsup_{n \\to \\infty} \\sqrt[n]{|c_n|}'}</InlineMath> and <InlineMath>{'R = 1/\\alpha'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'|z| < R'}</InlineMath>, choose <InlineMath>{'\\beta'}</InlineMath> with <InlineMath>{'|z| < \\beta < R'}</InlineMath>.
              Then <InlineMath>{'\\alpha < 1/\\beta'}</InlineMath>,
              so <InlineMath>{'\\sqrt[n]{|c_n|} < 1/\\beta'}</InlineMath> for large <InlineMath>{'n'}</InlineMath>.
              Thus <InlineMath>{'|c_n z^n| < (|z|/\\beta)^n'}</InlineMath>. Since <InlineMath>{'|z|/\\beta < 1'}</InlineMath>,
              the series converges absolutely by comparison with a geometric series.
            </p>
            <p>
              If <InlineMath>{'|z| > R'}</InlineMath>, then <InlineMath>{'\\sqrt[n]{|c_n|} > 1/|z|'}</InlineMath> for
              infinitely many <InlineMath>{'n'}</InlineMath>, so <InlineMath>{'|c_n z^n| > 1'}</InlineMath> for
              infinitely many <InlineMath>{'n'}</InlineMath>, and the series diverges.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Given the power series <InlineMath>{'\\sum c_n z^n'}</InlineMath>, put
        </p>
        <MathBlock>{'\\alpha = \\limsup_{n \\to \\infty} \\sqrt[n]{|c_n|}, \\quad R = \\frac{1}{\\alpha}'}</MathBlock>
        <p className="mb-3">
          (with <InlineMath>{'R = 0'}</InlineMath> if <InlineMath>{'\\alpha = +\\infty'}</InlineMath>,
          and <InlineMath>{'R = +\\infty'}</InlineMath> if <InlineMath>{'\\alpha = 0'}</InlineMath>).
        </p>
        <p className="mb-3">
          Then <InlineMath>{'\\sum c_n z^n'}</InlineMath> converges if <InlineMath>{'|z| < R'}</InlineMath> and
          diverges if <InlineMath>{'|z| > R'}</InlineMath>.
        </p>
        <p>
          <InlineMath>{'R'}</InlineMath> is called the <em>radius of convergence</em>.
        </p>
      </Theorem>

      <Example title="Examples of Radii of Convergence">
        <p className="mb-3">
          <strong>(a)</strong> <InlineMath>{'\\sum z^n'}</InlineMath>: Here <InlineMath>{'c_n = 1'}</InlineMath>,
          so <InlineMath>{'\\alpha = 1'}</InlineMath> and <InlineMath>{'R = 1'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>(b)</strong> <InlineMath>{'\\sum \\frac{z^n}{n!}'}</InlineMath>:
          We have <InlineMath>{'\\sqrt[n]{1/n!} \\to 0'}</InlineMath> (by Stirling),
          so <InlineMath>{'R = \\infty'}</InlineMath>. This series converges for all <InlineMath>{'z'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>(c)</strong> <InlineMath>{'\\sum n! z^n'}</InlineMath>:
          Here <InlineMath>{'\\sqrt[n]{n!} \\to \\infty'}</InlineMath>,
          so <InlineMath>{'R = 0'}</InlineMath>. The series converges only at <InlineMath>{'z = 0'}</InlineMath>.
        </p>
        <p>
          <strong>(d)</strong> <InlineMath>{'\\sum \\frac{z^n}{n^2}'}</InlineMath>:
          Since <InlineMath>{'\\sqrt[n]{1/n^2} = n^{-2/n} \\to 1'}</InlineMath>,
          we have <InlineMath>{'R = 1'}</InlineMath>.
        </p>
      </Example>

      <Theorem
        title="8.3 - Uniform Convergence of Power Series"
        proof={
          <p>
            For <InlineMath>{'|z| \\le r'}</InlineMath>, we have <InlineMath>{'|c_n z^n| \\le |c_n| r^n'}</InlineMath>.
            Since <InlineMath>{'r < R'}</InlineMath>, the series <InlineMath>{'\\sum |c_n| r^n'}</InlineMath> converges.
            By the Weierstrass M-test, <InlineMath>{'\\sum c_n z^n'}</InlineMath> converges uniformly
            on <InlineMath>{'|z| \\le r'}</InlineMath>.
          </p>
        }
      >
        <p>
          The power series <InlineMath>{'\\sum c_n z^n'}</InlineMath> converges uniformly on
          every closed disk <InlineMath>{'|z| \\le r'}</InlineMath> where <InlineMath>{'r < R'}</InlineMath>.
        </p>
      </Theorem>

      <Theorem
        title="8.4 - Term-by-Term Differentiation of Power Series"
        proof={
          <>
            <p className="mb-3">
              We have <InlineMath>{'\\limsup \\sqrt[n]{|nc_n|} = \\limsup \\sqrt[n]{|c_n|}'}</InlineMath> because <InlineMath>{'\\sqrt[n]{n} \\to 1'}</InlineMath>.
              Hence the derived series has the same radius of convergence.
            </p>
            <p className="mb-3">
              By Theorem 7.17, since the derived series converges uniformly on <InlineMath>{'|z| \\le r'}</InlineMath>,
              we can differentiate term by term.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'f(z) = \\sum_{n=0}^{\\infty} c_n z^n'}</InlineMath> has radius of
          convergence <InlineMath>{'R > 0'}</InlineMath>, then
        </p>
        <MathBlock>{'f\'(z) = \\sum_{n=1}^{\\infty} n c_n z^{n-1}'}</MathBlock>
        <p>
          for <InlineMath>{'|z| < R'}</InlineMath>. The derived series has the same radius of convergence.
        </p>
      </Theorem>

      <Callout type="info" title="Corollary: Power Series are Infinitely Differentiable">
        <p className="mb-3">
          Applying Theorem 8.4 repeatedly: if <InlineMath>{'f(z) = \\sum c_n z^n'}</InlineMath>,
          then <InlineMath>{'f'}</InlineMath> has derivatives of all orders in <InlineMath>{'|z| < R'}</InlineMath>, and
        </p>
        <MathBlock>{'f^{(k)}(z) = \\sum_{n=k}^{\\infty} n(n-1)\\cdots(n-k+1) c_n z^{n-k}'}</MathBlock>
        <p>
          In particular, <InlineMath>{'f^{(k)}(0) = k! \\, c_k'}</InlineMath>,
          so <InlineMath>{'c_k = \\frac{f^{(k)}(0)}{k!}'}</InlineMath>.
        </p>
      </Callout>

      <Theorem
        title="8.5 - Term-by-Term Integration of Power Series"
        proof={
          <p>
            The integrated series <InlineMath>{'\\sum \\frac{c_n}{n+1} z^{n+1}'}</InlineMath> has radius
            of convergence <InlineMath>{'R'}</InlineMath> (same argument as differentiation).
            By Theorem 7.16, integration commutes with uniform limits.
          </p>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'f(z) = \\sum_{n=0}^{\\infty} c_n z^n'}</InlineMath> converges
          for <InlineMath>{'|z| < R'}</InlineMath>, then for <InlineMath>{'|z| < R'}</InlineMath>:
        </p>
        <MathBlock>{'\\int_0^z f(w) \\, dw = \\sum_{n=0}^{\\infty} \\frac{c_n}{n+1} z^{n+1}'}</MathBlock>
      </Theorem>

      <Example title="8.6 - The Logarithm Series">
        <p className="mb-3">
          Starting from <InlineMath>{'\\frac{1}{1+z} = \\sum_{n=0}^{\\infty} (-1)^n z^n'}</InlineMath> for <InlineMath>{'|z| < 1'}</InlineMath>,
          integrate:
        </p>
        <MathBlock>{'\\log(1+z) = \\int_0^z \\frac{1}{1+w} \\, dw = \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n+1} z^{n+1} = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} z^n'}</MathBlock>
        <p>
          This is valid for <InlineMath>{'|z| < 1'}</InlineMath>, and (by Abel's theorem) also
          at <InlineMath>{'z = 1'}</InlineMath>: <InlineMath>{'\\log 2 = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Every power series has a radius of convergence <InlineMath>{'R = 1/\\limsup \\sqrt[n]{|c_n|}'}</InlineMath></li>
        <li>The series converges absolutely for <InlineMath>{'|z| < R'}</InlineMath> and diverges for <InlineMath>{'|z| > R'}</InlineMath></li>
        <li>Power series converge uniformly on closed subdisks <InlineMath>{'|z| \\le r < R'}</InlineMath></li>
        <li>Power series can be differentiated and integrated term by term inside the disk of convergence</li>
        <li>The coefficients are determined by derivatives: <InlineMath>{'c_n = f^{(n)}(0)/n!'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
