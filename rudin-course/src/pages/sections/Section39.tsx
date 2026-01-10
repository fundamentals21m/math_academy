import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2 className="text-2xl font-semibold mb-4">Taylor's Theorem</h2>

      <p className="mb-4">
        Taylor's theorem provides the theoretical foundation for approximating smooth functions
        by polynomials. It generalizes the Mean Value Theorem to higher derivatives and gives
        an explicit formula for the error in polynomial approximations.
      </p>

      <Theorem
        title="5.15 - Taylor's Theorem"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'M'}</InlineMath> be chosen so that <InlineMath>{'f(\\beta) = P(\\beta) + M(\\beta - \\alpha)^{n+1}'}</InlineMath>,
              and put
            </p>
            <MathBlock>{'g(t) = f(t) - P(t) - M(t - \\alpha)^{n+1} \\quad (\\alpha \\leq t \\leq \\beta)'}</MathBlock>
            <p className="mb-3">
              Then <InlineMath>{'g^{(n+1)}(t) = f^{(n+1)}(t) - (n+1)! M'}</InlineMath> for <InlineMath>{'\\alpha < t < \\beta'}</InlineMath>.
            </p>
            <p className="mb-3">
              Since <InlineMath>{'P^{(k)}(\\alpha) = f^{(k)}(\\alpha)'}</InlineMath> for <InlineMath>{'k = 0, 1, \\ldots, n'}</InlineMath>,
              we have
            </p>
            <MathBlock>{'g(\\alpha) = g\'(\\alpha) = \\cdots = g^{(n)}(\\alpha) = 0'}</MathBlock>
            <p className="mb-3">
              Also <InlineMath>{'g(\\beta) = 0'}</InlineMath> by our choice of <InlineMath>{'M'}</InlineMath>.
            </p>
            <p className="mb-3">
              By the Mean Value Theorem (Theorem 5.10), there exists <InlineMath>{'x_1 \\in (\\alpha, \\beta)'}</InlineMath> with <InlineMath>{'g\'(x_1) = 0'}</InlineMath>.
              Since <InlineMath>{'g\'(\\alpha) = 0'}</InlineMath>, there exists <InlineMath>{'x_2 \\in (\\alpha, x_1)'}</InlineMath> with <InlineMath>{'g\'\'(x_2) = 0'}</InlineMath>.
            </p>
            <p className="mb-3">
              Continuing this process <InlineMath>{'n+1'}</InlineMath> times, we find <InlineMath>{'x \\in (\\alpha, \\beta)'}</InlineMath> with <InlineMath>{'g^{(n+1)}(x) = 0'}</InlineMath>.
            </p>
            <p>
              Hence <InlineMath>{'f^{(n+1)}(x) = (n+1)! M'}</InlineMath>, which gives <InlineMath>{'M = f^{(n+1)}(x)/(n+1)!'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'f'}</InlineMath> is a real function on <InlineMath>{'[a, b]'}</InlineMath>, <InlineMath>{'n'}</InlineMath> is
          a positive integer, <InlineMath>{'f^{(n-1)}'}</InlineMath> is continuous on <InlineMath>{'[a, b]'}</InlineMath>,
          <InlineMath>{'f^{(n)}(t)'}</InlineMath> exists for every <InlineMath>{'t \\in (a, b)'}</InlineMath>.
          Let <InlineMath>{'\\alpha, \\beta'}</InlineMath> be distinct points of <InlineMath>{'[a, b]'}</InlineMath>,
          and define
        </p>
        <MathBlock>{'P(t) = \\sum_{k=0}^{n-1} \\frac{f^{(k)}(\\alpha)}{k!}(t - \\alpha)^k'}</MathBlock>
        <p className="mb-3">
          Then there exists a point <InlineMath>{'x'}</InlineMath> between <InlineMath>{'\\alpha'}</InlineMath> and <InlineMath>{'\\beta'}</InlineMath> such that
        </p>
        <MathBlock>{'f(\\beta) = P(\\beta) + \\frac{f^{(n)}(x)}{n!}(\\beta - \\alpha)^n'}</MathBlock>
      </Theorem>

      <Definition title="Taylor Polynomial and Remainder">
        <p className="mb-3">
          The polynomial <InlineMath>{'P_n(t)'}</InlineMath> of degree at most <InlineMath>{'n-1'}</InlineMath>:
        </p>
        <MathBlock>{'P_n(t) = \\sum_{k=0}^{n-1} \\frac{f^{(k)}(\\alpha)}{k!}(t - \\alpha)^k'}</MathBlock>
        <p className="mb-3">
          is called the <em>Taylor polynomial of degree <InlineMath>{'n-1'}</InlineMath></em> of <InlineMath>{'f'}</InlineMath> about <InlineMath>{'\\alpha'}</InlineMath>.
        </p>
        <p className="mb-3">
          The <em>Lagrange form of the remainder</em> is:
        </p>
        <MathBlock>{'R_n(\\beta) = \\frac{f^{(n)}(x)}{n!}(\\beta - \\alpha)^n'}</MathBlock>
        <p>
          where <InlineMath>{'x'}</InlineMath> is some point between <InlineMath>{'\\alpha'}</InlineMath> and <InlineMath>{'\\beta'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Taylor's Formula">
        <p className="mb-3">
          Writing <InlineMath>{'h = \\beta - \\alpha'}</InlineMath>, Taylor's theorem becomes:
        </p>
        <MathBlock>{'f(\\alpha + h) = f(\\alpha) + f\'(\\alpha)h + \\frac{f\'\'(\\alpha)}{2!}h^2 + \\cdots + \\frac{f^{(n-1)}(\\alpha)}{(n-1)!}h^{n-1} + \\frac{f^{(n)}(x)}{n!}h^n'}</MathBlock>
        <p>
          for some <InlineMath>{'x'}</InlineMath> between <InlineMath>{'\\alpha'}</InlineMath> and <InlineMath>{'\\alpha + h'}</InlineMath>.
        </p>
      </Callout>

      <Example title="Taylor Expansion of e^x">
        <p className="mb-3">
          For <InlineMath>{'f(x) = e^x'}</InlineMath>, we have <InlineMath>{'f^{(k)}(x) = e^x'}</InlineMath> for all <InlineMath>{'k'}</InlineMath>.
          At <InlineMath>{'\\alpha = 0'}</InlineMath>: <InlineMath>{'f^{(k)}(0) = 1'}</InlineMath>.
        </p>
        <MathBlock>{'e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots + \\frac{x^{n-1}}{(n-1)!} + \\frac{e^c}{n!}x^n'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'c'}</InlineMath> is between <InlineMath>{'0'}</InlineMath> and <InlineMath>{'x'}</InlineMath>.
        </p>
        <p>
          For <InlineMath>{'x = 1'}</InlineMath>: <InlineMath>{'e = \\sum_{k=0}^{n-1} \\frac{1}{k!} + \\frac{e^c}{n!}'}</InlineMath> where <InlineMath>{'0 < c < 1'}</InlineMath>,
          so the error is at most <InlineMath>{'e/n! < 3/n!'}</InlineMath>.
        </p>
      </Example>

      <Example title="Taylor Expansion of sin x">
        <p className="mb-3">
          For <InlineMath>{'f(x) = \\sin x'}</InlineMath>, the derivatives at <InlineMath>{'x = 0'}</InlineMath> follow
          the pattern: <InlineMath>{'0, 1, 0, -1, 0, 1, \\ldots'}</InlineMath>
        </p>
        <MathBlock>{'\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots'}</MathBlock>
        <p className="mb-3">
          Only odd powers appear. The remainder after <InlineMath>{'n'}</InlineMath> terms
          involves <InlineMath>{'\\sin c'}</InlineMath> or <InlineMath>{'\\cos c'}</InlineMath>, bounded by <InlineMath>{'1'}</InlineMath>.
        </p>
        <p>
          Hence for any <InlineMath>{'x'}</InlineMath>: <InlineMath>{'|R_n(x)| \\leq \\frac{|x|^n}{n!} \\to 0'}</InlineMath> as <InlineMath>{'n \\to \\infty'}</InlineMath>.
        </p>
      </Example>

      <Example title="Taylor Expansion of cos x">
        <p className="mb-3">
          Similarly, for <InlineMath>{'f(x) = \\cos x'}</InlineMath>:
        </p>
        <MathBlock>{'\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots'}</MathBlock>
        <p>
          Only even powers appear.
        </p>
      </Example>

      <Theorem title="Uniqueness of Taylor Coefficients">
        <p className="mb-3">
          If <InlineMath>{'f(x) = \\sum_{k=0}^{n} c_k (x - \\alpha)^k + o((x-\\alpha)^n)'}</InlineMath> as <InlineMath>{'x \\to \\alpha'}</InlineMath>,
          and if <InlineMath>{'f'}</InlineMath> has <InlineMath>{'n'}</InlineMath> derivatives at <InlineMath>{'\\alpha'}</InlineMath>, then
        </p>
        <MathBlock>{'c_k = \\frac{f^{(k)}(\\alpha)}{k!}'}</MathBlock>
        <p>
          The Taylor coefficients are uniquely determined by the derivatives at <InlineMath>{'\\alpha'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning" title="Taylor Series vs Taylor Polynomial">
        <p className="mb-3">
          A Taylor polynomial is a finite sum that approximates <InlineMath>{'f'}</InlineMath> near <InlineMath>{'\\alpha'}</InlineMath>.
          A Taylor series is the formal infinite sum:
        </p>
        <MathBlock>{'\\sum_{k=0}^{\\infty} \\frac{f^{(k)}(\\alpha)}{k!}(x - \\alpha)^k'}</MathBlock>
        <p>
          The series may or may not converge, and even when it converges, it may not equal <InlineMath>{'f(x)'}</InlineMath>.
          Functions for which the Taylor series converges to <InlineMath>{'f'}</InlineMath> are called <em>analytic</em>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Taylor's theorem: <InlineMath>{'f(\\beta) = P(\\beta) + \\frac{f^{(n)}(x)}{n!}(\\beta - \\alpha)^n'}</InlineMath></li>
        <li>The Taylor polynomial <InlineMath>{'P_n'}</InlineMath> approximates <InlineMath>{'f'}</InlineMath> near <InlineMath>{'\\alpha'}</InlineMath></li>
        <li>The Lagrange remainder gives the error: <InlineMath>{'R_n = \\frac{f^{(n)}(x)}{n!}(\\beta - \\alpha)^n'}</InlineMath></li>
        <li>For <InlineMath>{'e^x'}</InlineMath>: <InlineMath>{'e^x = \\sum_{k=0}^{\\infty} \\frac{x^k}{k!}'}</InlineMath></li>
        <li>For <InlineMath>{'\\sin x'}</InlineMath>: <InlineMath>{'\\sin x = \\sum_{k=0}^{\\infty} \\frac{(-1)^k x^{2k+1}}{(2k+1)!}'}</InlineMath></li>
        <li>For <InlineMath>{'\\cos x'}</InlineMath>: <InlineMath>{'\\cos x = \\sum_{k=0}^{\\infty} \\frac{(-1)^k x^{2k}}{(2k)!}'}</InlineMath></li>
        <li>Taylor coefficients are uniquely determined by derivatives at the center</li>
      </ul>
    </LessonLayout>
  );
}
