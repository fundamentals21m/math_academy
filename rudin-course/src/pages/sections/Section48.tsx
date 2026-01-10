import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <h2 className="text-2xl font-semibold mb-4">Uniform Convergence and Continuity</h2>

      <p className="mb-4">
        We now prove one of the most important theorems about uniform convergence: the uniform
        limit of continuous functions is continuous. This resolves the counterexample we saw
        in Section 46 where pointwise convergence failed to preserve continuity.
      </p>

      <Theorem
        title="7.11 - Uniform Limit of Continuous Functions"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\varepsilon > 0'}</InlineMath> be given,
              and <InlineMath>{'x \\in E'}</InlineMath>. Since <InlineMath>{'f_n \\to f'}</InlineMath> uniformly,
              there exists <InlineMath>{'N'}</InlineMath> such that <InlineMath>{'n \\geq N'}</InlineMath> implies
            </p>
            <MathBlock>{'|f_n(t) - f(t)| < \\frac{\\varepsilon}{3}'}</MathBlock>
            <p className="mb-3">
              for all <InlineMath>{'t \\in E'}</InlineMath>. Fix such an <InlineMath>{'n'}</InlineMath>.
              Since <InlineMath>{'f_n'}</InlineMath> is continuous at <InlineMath>{'x'}</InlineMath>,
              there exists <InlineMath>{'\\delta > 0'}</InlineMath> such
              that <InlineMath>{'d(t, x) < \\delta'}</InlineMath> and <InlineMath>{'t \\in E'}</InlineMath> imply
            </p>
            <MathBlock>{'|f_n(t) - f_n(x)| < \\frac{\\varepsilon}{3}'}</MathBlock>
            <p className="mb-3">
              For such <InlineMath>{'t'}</InlineMath>, we have
            </p>
            <MathBlock>{'|f(t) - f(x)| \\leq |f(t) - f_n(t)| + |f_n(t) - f_n(x)| + |f_n(x) - f(x)|'}</MathBlock>
            <MathBlock>{'< \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} = \\varepsilon'}</MathBlock>
            <p>
              This proves that <InlineMath>{'f'}</InlineMath> is continuous at <InlineMath>{'x'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Suppose <InlineMath>{'f_n \\to f'}</InlineMath> uniformly on a set <InlineMath>{'E'}</InlineMath> in
          a metric space. If each <InlineMath>{'f_n'}</InlineMath> is continuous
          at a point <InlineMath>{'x \\in E'}</InlineMath>, then <InlineMath>{'f'}</InlineMath> is
          continuous at <InlineMath>{'x'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info" title="Corollary">
        <p>
          If <InlineMath>{'\\{f_n\\}'}</InlineMath> is a sequence of continuous functions
          on <InlineMath>{'E'}</InlineMath> and <InlineMath>{'f_n \\to f'}</InlineMath> uniformly
          on <InlineMath>{'E'}</InlineMath>, then <InlineMath>{'f'}</InlineMath> is continuous on <InlineMath>{'E'}</InlineMath>.
        </p>
      </Callout>

      <Theorem
        title="7.12 - Interchanging Limits"
        proof={
          <>
            <p className="mb-3">
              Given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, choose <InlineMath>{'N'}</InlineMath> so
              that <InlineMath>{'n, m \\geq N'}</InlineMath> implies
            </p>
            <MathBlock>{'|f_n(t) - f_m(t)| < \\varepsilon'}</MathBlock>
            <p className="mb-3">
              for all <InlineMath>{'t \\in E'}</InlineMath>. Fix <InlineMath>{'n, m \\geq N'}</InlineMath>.
              Letting <InlineMath>{'t \\to x'}</InlineMath>:
            </p>
            <MathBlock>{'|A_n - A_m| \\leq \\varepsilon'}</MathBlock>
            <p className="mb-3">
              Thus <InlineMath>{'\\{A_n\\}'}</InlineMath> is a Cauchy sequence, hence converges
              to some limit <InlineMath>{'A'}</InlineMath>.
            </p>
            <p className="mb-3">
              Now fix <InlineMath>{'\\varepsilon > 0'}</InlineMath> and choose <InlineMath>{'N'}</InlineMath> so
              that <InlineMath>{'n \\geq N'}</InlineMath> implies <InlineMath>{'|f_n(t) - f(t)| < \\varepsilon'}</InlineMath> for
              all <InlineMath>{'t'}</InlineMath>, and <InlineMath>{'|A_n - A| < \\varepsilon'}</InlineMath>.
            </p>
            <p className="mb-3">
              For <InlineMath>{'n \\geq N'}</InlineMath>, by continuity
              of <InlineMath>{'f_n'}</InlineMath> at <InlineMath>{'x'}</InlineMath>, there
              exists <InlineMath>{'\\delta > 0'}</InlineMath> such
              that <InlineMath>{'d(t, x) < \\delta'}</InlineMath> implies <InlineMath>{'|f_n(t) - A_n| < \\varepsilon'}</InlineMath>.
            </p>
            <p className="mb-3">
              For such <InlineMath>{'t'}</InlineMath>:
            </p>
            <MathBlock>{'|f(t) - A| \\leq |f(t) - f_n(t)| + |f_n(t) - A_n| + |A_n - A| < 3\\varepsilon'}</MathBlock>
            <p>
              Thus <InlineMath>{'\\lim_{t \\to x} f(t) = A = \\lim_{n \\to \\infty} A_n'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\{f_n\\}'}</InlineMath> is a sequence of functions on a
          set <InlineMath>{'E'}</InlineMath> in a metric space, and suppose <InlineMath>{'x'}</InlineMath> is
          a limit point of <InlineMath>{'E'}</InlineMath>. If
        </p>
        <MathBlock>{'\\lim_{t \\to x} f_n(t) = A_n \\quad (n = 1, 2, 3, \\ldots)'}</MathBlock>
        <p className="mb-3">
          and if <InlineMath>{'\\{f_n\\}'}</InlineMath> converges uniformly on <InlineMath>{'E'}</InlineMath>, then
        </p>
        <MathBlock>{'\\lim_{n \\to \\infty} A_n = A'}</MathBlock>
        <p className="mb-3">
          exists, and
        </p>
        <MathBlock>{'\\lim_{t \\to x} f(t) = A = \\lim_{n \\to \\infty} A_n'}</MathBlock>
        <p>
          In other words, the two limits can be interchanged:
        </p>
        <MathBlock>{'\\lim_{t \\to x} \\lim_{n \\to \\infty} f_n(t) = \\lim_{n \\to \\infty} \\lim_{t \\to x} f_n(t)'}</MathBlock>
      </Theorem>

      <Example title="Application: Continuity of Fourier-like Series">
        <p className="mb-3">
          Consider the series
        </p>
        <MathBlock>{'f(x) = \\sum_{n=1}^{\\infty} \\frac{\\sin(nx)}{n^2}'}</MathBlock>
        <p className="mb-3">
          Each partial sum is continuous (as a finite sum of continuous functions).
          By the Weierstrass M-test with <InlineMath>{'M_n = 1/n^2'}</InlineMath>,
          the series converges uniformly on <InlineMath>{'\\mathbb{R}'}</InlineMath>.
        </p>
        <p>
          By Theorem 7.11, the limit function <InlineMath>{'f'}</InlineMath> is continuous
          on <InlineMath>{'\\mathbb{R}'}</InlineMath>.
        </p>
      </Example>

      <Definition title="7.13 - Space of Bounded Continuous Functions">
        <p className="mb-3">
          Let <InlineMath>{'X'}</InlineMath> be a metric space. We denote
          by <InlineMath>{'\\mathscr{C}(X)'}</InlineMath> the set of all complex-valued,
          continuous, bounded functions on <InlineMath>{'X'}</InlineMath>.
        </p>
        <p className="mb-3">
          We associate with each <InlineMath>{'f \\in \\mathscr{C}(X)'}</InlineMath> its <em>supremum norm</em>:
        </p>
        <MathBlock>{'\\|f\\| = \\sup_{x \\in X} |f(x)|'}</MathBlock>
        <p>
          Since <InlineMath>{'f'}</InlineMath> is bounded, <InlineMath>{'\\|f\\| < \\infty'}</InlineMath>.
          We can also define the metric <InlineMath>{'d(f, g) = \\|f - g\\|'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="7.15 - Completeness of C(X)"
        proof={
          <>
            <p className="mb-3">
              Let <InlineMath>{'\\{f_n\\}'}</InlineMath> be a Cauchy sequence
              in <InlineMath>{'\\mathscr{C}(X)'}</InlineMath>. This means:
              given <InlineMath>{'\\varepsilon > 0'}</InlineMath>, there
              exists <InlineMath>{'N'}</InlineMath> such
              that <InlineMath>{'\\|f_n - f_m\\| < \\varepsilon'}</InlineMath> for <InlineMath>{'n, m \\geq N'}</InlineMath>.
            </p>
            <p className="mb-3">
              Thus <InlineMath>{'\\{f_n\\}'}</InlineMath> converges uniformly to some
              function <InlineMath>{'f'}</InlineMath>. By Theorem 7.11, <InlineMath>{'f'}</InlineMath> is
              continuous. Since <InlineMath>{'\\|f\\| \\leq \\|f - f_n\\| + \\|f_n\\|'}</InlineMath>,
              and <InlineMath>{'\\|f_n\\|'}</InlineMath> is bounded (Cauchy sequences are bounded),
              <InlineMath>{'f'}</InlineMath> is bounded. Hence <InlineMath>{'f \\in \\mathscr{C}(X)'}</InlineMath>.
            </p>
            <p>
              Finally, <InlineMath>{'\\|f_n - f\\| \\to 0'}</InlineMath>, so <InlineMath>{'f_n \\to f'}</InlineMath> in
              the metric of <InlineMath>{'\\mathscr{C}(X)'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          <InlineMath>{'\\mathscr{C}(X)'}</InlineMath> is a complete metric space under the supremum norm.
        </p>
      </Theorem>

      <Callout type="note" title="Significance">
        <p>
          The completeness of <InlineMath>{'\\mathscr{C}(X)'}</InlineMath> is fundamental in
          functional analysis. It means that every uniformly Cauchy sequence of continuous
          bounded functions converges to a continuous bounded function. This makes <InlineMath>{'\\mathscr{C}(X)'}</InlineMath> a
          <em>Banach space</em> (a complete normed vector space).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The uniform limit of continuous functions is continuous</li>
        <li>Uniform convergence allows interchanging two limits</li>
        <li>The space <InlineMath>{'\\mathscr{C}(X)'}</InlineMath> of bounded continuous functions is complete under the supremum norm</li>
        <li>This result explains why <InlineMath>{'x^n'}</InlineMath> converging to a discontinuous limit: the convergence was not uniform</li>
        <li>Uniform convergence is the precise condition needed to preserve continuity through limits</li>
      </ul>
    </LessonLayout>
  );
}
