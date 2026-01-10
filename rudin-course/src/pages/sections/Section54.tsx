import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <h2 className="text-2xl font-semibold mb-4">The Exponential and Logarithmic Functions</h2>

      <p className="mb-4">
        We now define the exponential function via its power series and derive its
        fundamental properties. This provides a rigorous foundation for the most
        important function in analysis.
      </p>

      <Definition title="8.6 - The Exponential Function">
        <p className="mb-3">
          We define
        </p>
        <MathBlock>{'E(z) = \\sum_{n=0}^{\\infty} \\frac{z^n}{n!}'}</MathBlock>
        <p className="mb-3">
          By the ratio test, this series has radius of convergence <InlineMath>{'R = \\infty'}</InlineMath>:
        </p>
        <MathBlock>{'\\left| \\frac{z^{n+1}/(n+1)!}{z^n/n!} \\right| = \\frac{|z|}{n+1} \\to 0'}</MathBlock>
        <p>
          Thus <InlineMath>{'E(z)'}</InlineMath> is defined for all complex <InlineMath>{'z'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="8.7 - Functional Equation of the Exponential"
        proof={
          <>
            <p className="mb-3">
              By absolute convergence, we can multiply the series:
            </p>
            <MathBlock>{'E(z)E(w) = \\left( \\sum_{n=0}^{\\infty} \\frac{z^n}{n!} \\right) \\left( \\sum_{m=0}^{\\infty} \\frac{w^m}{m!} \\right)'}</MathBlock>
            <MathBlock>{'= \\sum_{n=0}^{\\infty} \\sum_{m=0}^{\\infty} \\frac{z^n w^m}{n! m!} = \\sum_{k=0}^{\\infty} \\sum_{n=0}^{k} \\frac{z^n w^{k-n}}{n!(k-n)!}'}</MathBlock>
            <MathBlock>{'= \\sum_{k=0}^{\\infty} \\frac{1}{k!} \\sum_{n=0}^{k} \\binom{k}{n} z^n w^{k-n} = \\sum_{k=0}^{\\infty} \\frac{(z+w)^k}{k!} = E(z+w)'}</MathBlock>
            <p>
              where we used the binomial theorem.
            </p>
          </>
        }
      >
        <p>
          For all complex numbers <InlineMath>{'z'}</InlineMath> and <InlineMath>{'w'}</InlineMath>:
        </p>
        <MathBlock>{'E(z+w) = E(z) E(w)'}</MathBlock>
      </Theorem>

      <Theorem
        title="8.8 - Properties of E(x) for Real x"
        proof={
          <>
            <p className="mb-3">
              <strong>(a)</strong> From the functional equation with <InlineMath>{'z = w = 0'}</InlineMath>: <InlineMath>{'E(0) = E(0)^2'}</InlineMath>,
              so <InlineMath>{'E(0) = 0'}</InlineMath> or <InlineMath>{'E(0) = 1'}</InlineMath>. Since <InlineMath>{'E(0) = 1'}</InlineMath> from the series.
            </p>
            <p className="mb-3">
              <strong>(b)</strong> <InlineMath>{'E(x)E(-x) = E(0) = 1'}</InlineMath>,
              so <InlineMath>{'E(-x) = 1/E(x)'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>(c)</strong> For <InlineMath>{'x > 0'}</InlineMath>, <InlineMath>{'E(x) = 1 + x + \\frac{x^2}{2!} + \\cdots > 1'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>(d)</strong> If <InlineMath>{'x < 0'}</InlineMath>, then <InlineMath>{'E(x) = 1/E(-x) > 0'}</InlineMath>.
            </p>
            <p>
              <strong>(e)</strong> <InlineMath>{'E\'(x) = \\sum_{n=1}^{\\infty} \\frac{nx^{n-1}}{n!} = \\sum_{n=1}^{\\infty} \\frac{x^{n-1}}{(n-1)!} = E(x)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-2">(a) <InlineMath>{'E(0) = 1'}</InlineMath>.</p>
        <p className="mb-2">(b) <InlineMath>{'E(-x) = 1/E(x)'}</InlineMath> for all <InlineMath>{'x'}</InlineMath>.</p>
        <p className="mb-2">(c) <InlineMath>{'E(x) > 0'}</InlineMath> for all real <InlineMath>{'x'}</InlineMath>.</p>
        <p className="mb-2">(d) <InlineMath>{'E'}</InlineMath> is strictly increasing on <InlineMath>{'\\mathbb{R}'}</InlineMath>.</p>
        <p className="mb-2">(e) <InlineMath>{'\\lim_{x \\to \\infty} E(x) = \\infty'}</InlineMath>, <InlineMath>{'\\lim_{x \\to -\\infty} E(x) = 0'}</InlineMath>.</p>
        <p>(f) <InlineMath>{'E\'(x) = E(x)'}</InlineMath>.</p>
      </Theorem>

      <Definition title="8.9 - The Number e">
        <p className="mb-3">
          We define
        </p>
        <MathBlock>{'e = E(1) = \\sum_{n=0}^{\\infty} \\frac{1}{n!} = 1 + 1 + \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{24} + \\cdots'}</MathBlock>
        <p>
          We have <InlineMath>{'e \\approx 2.71828\\ldots'}</InlineMath> It can be shown
          that <InlineMath>{'e'}</InlineMath> is irrational (in fact, transcendental).
        </p>
      </Definition>

      <Theorem
        title="8.10 - E(x) = e^x"
        proof={
          <>
            <p className="mb-3">
              By the functional equation, for positive integer <InlineMath>{'n'}</InlineMath>:
            </p>
            <MathBlock>{'E(n) = E(1+1+\\cdots+1) = E(1)^n = e^n'}</MathBlock>
            <p className="mb-3">
              For <InlineMath>{'p/q'}</InlineMath> rational: <InlineMath>{'E(p/q)^q = E(p) = e^p'}</InlineMath>,
              so <InlineMath>{'E(p/q) = e^{p/q}'}</InlineMath>.
            </p>
            <p>
              By continuity of <InlineMath>{'E'}</InlineMath> and density of rationals,
              <InlineMath>{'E(x) = e^x'}</InlineMath> for all real <InlineMath>{'x'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'E(x) = e^x'}</InlineMath> for all real <InlineMath>{'x'}</InlineMath>, where <InlineMath>{'e^x'}</InlineMath> is
          defined as <InlineMath>{'\\sup\\{e^r : r \\in \\mathbb{Q}, r < x\\}'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Notation">
        <p>
          From now on, we write <InlineMath>{'e^z'}</InlineMath> or <InlineMath>{'\\exp(z)'}</InlineMath> for <InlineMath>{'E(z)'}</InlineMath>.
          For complex <InlineMath>{'z'}</InlineMath>, <InlineMath>{'e^z = \\sum_{n=0}^{\\infty} z^n/n!'}</InlineMath>.
        </p>
      </Callout>

      <Definition title="8.11 - The Natural Logarithm">
        <p className="mb-3">
          Since <InlineMath>{'e^x: \\mathbb{R} \\to (0, \\infty)'}</InlineMath> is strictly increasing
          and continuous with range <InlineMath>{'(0, \\infty)'}</InlineMath>, it has an inverse.
        </p>
        <p className="mb-3">
          We define <InlineMath>{'\\log: (0, \\infty) \\to \\mathbb{R}'}</InlineMath> as the inverse
          of the exponential:
        </p>
        <MathBlock>{'\\log y = x \\iff e^x = y'}</MathBlock>
        <p>
          This is the <em>natural logarithm</em>.
        </p>
      </Definition>

      <Theorem
        title="Properties of the Logarithm"
        proof={
          <p>
            These follow from the corresponding properties of <InlineMath>{'e^x'}</InlineMath> and
            the inverse function theorem.
          </p>
        }
      >
        <p className="mb-2">(a) <InlineMath>{'\\log(xy) = \\log x + \\log y'}</InlineMath> for <InlineMath>{'x, y > 0'}</InlineMath>.</p>
        <p className="mb-2">(b) <InlineMath>{'\\log 1 = 0'}</InlineMath>, <InlineMath>{'\\log e = 1'}</InlineMath>.</p>
        <p className="mb-2">(c) <InlineMath>{'\\log x^\\alpha = \\alpha \\log x'}</InlineMath> for <InlineMath>{'x > 0'}</InlineMath>.</p>
        <p className="mb-2">(d) <InlineMath>{'\\frac{d}{dx} \\log x = \\frac{1}{x}'}</InlineMath>.</p>
        <p>(e) <InlineMath>{'\\log'}</InlineMath> is strictly increasing, <InlineMath>{'\\log x \\to \\infty'}</InlineMath> as <InlineMath>{'x \\to \\infty'}</InlineMath>, <InlineMath>{'\\log x \\to -\\infty'}</InlineMath> as <InlineMath>{'x \\to 0^+'}</InlineMath>.</p>
      </Theorem>

      <Example title="Power Series for log(1+x)">
        <p className="mb-3">
          From Section 53, integrating <InlineMath>{'\\frac{1}{1+x} = \\sum_{n=0}^{\\infty} (-1)^n x^n'}</InlineMath>:
        </p>
        <MathBlock>{'\\log(1+x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} x^n = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots'}</MathBlock>
        <p>
          valid for <InlineMath>{'-1 < x \\le 1'}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The exponential is defined by <InlineMath>{'e^z = \\sum_{n=0}^{\\infty} z^n/n!'}</InlineMath></li>
        <li>Fundamental property: <InlineMath>{'e^{z+w} = e^z e^w'}</InlineMath></li>
        <li>The exponential is its own derivative: <InlineMath>{'\\frac{d}{dx} e^x = e^x'}</InlineMath></li>
        <li><InlineMath>{'e = \\sum_{n=0}^{\\infty} 1/n! \\approx 2.71828'}</InlineMath></li>
        <li>The logarithm is the inverse of the exponential, with <InlineMath>{'\\frac{d}{dx} \\log x = 1/x'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
