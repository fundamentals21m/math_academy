import { LessonLayout } from '../../components/layout/LessonLayout';
import { Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <h2 className="text-2xl font-semibold mb-4">Uniform Convergence and Differentiation</h2>

      <p className="mb-4">
        Differentiation is more delicate than integration with respect to uniform convergence.
        Even if <InlineMath>{'f_n \\to f'}</InlineMath> uniformly and each <InlineMath>{'f_n'}</InlineMath> is
        differentiable, <InlineMath>{'f_n\''}</InlineMath> may not converge
        to <InlineMath>{'f\''}</InlineMath>. We need additional conditions.
      </p>

      <Callout type="warning" title="The Difficulty with Differentiation">
        <p className="mb-3">
          Recall Example 7.4: <InlineMath>{'f_n(x) = \\frac{\\sin(nx)}{\\sqrt{n}} \\to 0'}</InlineMath> uniformly,
          but <InlineMath>{'f_n\'(x) = \\sqrt{n}\\cos(nx)'}</InlineMath> does not converge.
        </p>
        <p>
          Uniform convergence of <InlineMath>{'\\{f_n\\}'}</InlineMath> is not sufficient for
          convergence of <InlineMath>{'\\{f_n\'\\}'}</InlineMath>. We need to require uniform
          convergence of the derivatives themselves.
        </p>
      </Callout>

      <Theorem
        title="7.17 - Differentiation of Uniformly Convergent Sequences"
        proof={
          <>
            <p className="mb-3">
              Fix a point <InlineMath>{'x \\in [a, b]'}</InlineMath>. For <InlineMath>{'t \\in [a, b]'}</InlineMath>, <InlineMath>{'t \\neq x'}</InlineMath>,
              define
            </p>
            <MathBlock>{'\\phi_n(t) = \\frac{f_n(t) - f_n(x)}{t - x}, \\quad \\phi(t) = \\frac{f(t) - f(x)}{t - x}'}</MathBlock>
            <p className="mb-3">
              Then <InlineMath>{'\\lim_{t \\to x} \\phi_n(t) = f_n\'(x)'}</InlineMath>.
            </p>
            <p className="mb-3">
              <strong>Claim:</strong> <InlineMath>{'\\phi_n \\to \\phi'}</InlineMath> uniformly on <InlineMath>{'[a, b] \\setminus \\{x\\}'}</InlineMath>.
            </p>
            <p className="mb-3">
              By the Mean Value Theorem, for each <InlineMath>{'t \\neq x'}</InlineMath>,
            </p>
            <MathBlock>{'\\phi_n(t) - \\phi_m(t) = \\frac{(f_n - f_m)(t) - (f_n - f_m)(x)}{t - x} = (f_n\' - f_m\')(s)'}</MathBlock>
            <p className="mb-3">
              for some <InlineMath>{'s'}</InlineMath> between <InlineMath>{'t'}</InlineMath> and <InlineMath>{'x'}</InlineMath>.
              Since <InlineMath>{'f_n\''}</InlineMath> converges uniformly, <InlineMath>{'\\{\\phi_n\\}'}</InlineMath> is
              uniformly Cauchy, so <InlineMath>{'\\phi_n \\to \\phi'}</InlineMath> uniformly.
            </p>
            <p className="mb-3">
              Now apply Theorem 7.12 (interchanging limits):
            </p>
            <MathBlock>{'f\'(x) = \\lim_{t \\to x} \\phi(t) = \\lim_{t \\to x} \\lim_{n \\to \\infty} \\phi_n(t) = \\lim_{n \\to \\infty} \\lim_{t \\to x} \\phi_n(t) = \\lim_{n \\to \\infty} f_n\'(x)'}</MathBlock>
            <p>
              This holds for every <InlineMath>{'x \\in [a, b]'}</InlineMath>, and the convergence is uniform
              by a similar argument.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\{f_n\\}'}</InlineMath> is a sequence of functions, differentiable
          on <InlineMath>{'[a, b]'}</InlineMath>, such that <InlineMath>{'\\{f_n(x_0)\\}'}</InlineMath> converges
          for some point <InlineMath>{'x_0 \\in [a, b]'}</InlineMath>. If <InlineMath>{'\\{f_n\'\\}'}</InlineMath> converges
          uniformly on <InlineMath>{'[a, b]'}</InlineMath>, then <InlineMath>{'\\{f_n\\}'}</InlineMath> converges
          uniformly on <InlineMath>{'[a, b]'}</InlineMath> to a function <InlineMath>{'f'}</InlineMath>, and
        </p>
        <MathBlock>{'f\'(x) = \\lim_{n \\to \\infty} f_n\'(x) \\quad (a \\le x \\le b)'}</MathBlock>
      </Theorem>

      <Callout type="info" title="Summary of Hypotheses">
        <p className="mb-2">To differentiate a limit, we need:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Each <InlineMath>{'f_n'}</InlineMath> is differentiable on <InlineMath>{'[a, b]'}</InlineMath></li>
          <li><InlineMath>{'\\{f_n(x_0)\\}'}</InlineMath> converges at some point <InlineMath>{'x_0'}</InlineMath></li>
          <li><InlineMath>{'\\{f_n\'\\}'}</InlineMath> converges <em>uniformly</em> on <InlineMath>{'[a, b]'}</InlineMath></li>
        </ol>
        <p className="mt-2">
          Then <InlineMath>{'f_n \\to f'}</InlineMath> uniformly and <InlineMath>{'f\' = \\lim f_n\''}</InlineMath>.
        </p>
      </Callout>

      <Example title="Differentiating a Series">
        <p className="mb-3">
          Consider the series
        </p>
        <MathBlock>{'f(x) = \\sum_{n=1}^{\\infty} \\frac{\\sin(nx)}{n^3}'}</MathBlock>
        <p className="mb-3">
          This converges uniformly on <InlineMath>{'\\mathbb{R}'}</InlineMath> by the Weierstrass
          M-test with <InlineMath>{'M_n = 1/n^3'}</InlineMath>.
        </p>
        <p className="mb-3">
          The term-by-term derivative is:
        </p>
        <MathBlock>{'g(x) = \\sum_{n=1}^{\\infty} \\frac{\\cos(nx)}{n^2}'}</MathBlock>
        <p className="mb-3">
          This also converges uniformly (M-test with <InlineMath>{'M_n = 1/n^2'}</InlineMath>).
        </p>
        <p>
          By Theorem 7.17, <InlineMath>{'f\'(x) = g(x)'}</InlineMath>.
        </p>
      </Example>

      <Example title="When Term-by-Term Differentiation Fails">
        <p className="mb-3">
          Consider
        </p>
        <MathBlock>{'f_n(x) = \\frac{1}{n} \\sin(n^2 x)'}</MathBlock>
        <p className="mb-3">
          Then <InlineMath>{'f_n \\to 0'}</InlineMath> uniformly (since <InlineMath>{'|f_n(x)| \\le 1/n'}</InlineMath>),
          and <InlineMath>{'f(x) = 0'}</InlineMath>.
        </p>
        <p className="mb-3">
          But <InlineMath>{'f_n\'(x) = n \\cos(n^2 x)'}</InlineMath>, which does not converge
          at any point. In particular, at <InlineMath>{'x = 0'}</InlineMath>:
          <InlineMath>{'f_n\'(0) = n \\to \\infty'}</InlineMath>.
        </p>
        <p>
          The condition of uniform convergence of <InlineMath>{'\\{f_n\'\\}'}</InlineMath> fails.
        </p>
      </Example>

      <Theorem
        title="Corollary - Differentiation of Series"
        proof={
          <p>
            Apply Theorem 7.17 to the partial sums <InlineMath>{'s_n = \\sum_{k=1}^{n} f_k'}</InlineMath>.
            We have <InlineMath>{'s_n\' = \\sum_{k=1}^{n} f_k\''}</InlineMath>. If <InlineMath>{'\\sum f_k\''}</InlineMath> converges
            uniformly and <InlineMath>{'\\sum f_k(x_0)'}</InlineMath> converges at some point,
            then <InlineMath>{'\\sum f_k'}</InlineMath> converges uniformly to a differentiable function
            whose derivative is <InlineMath>{'\\sum f_k\''}</InlineMath>.
          </p>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'\\{f_n\\}'}</InlineMath> is a sequence of differentiable functions
          on <InlineMath>{'[a, b]'}</InlineMath>. Suppose <InlineMath>{'\\sum_{n=1}^{\\infty} f_n(x_0)'}</InlineMath> converges
          for some <InlineMath>{'x_0 \\in [a, b]'}</InlineMath>,
          and <InlineMath>{'\\sum_{n=1}^{\\infty} f_n\'(x)'}</InlineMath> converges uniformly on <InlineMath>{'[a, b]'}</InlineMath>.
        </p>
        <p className="mb-3">
          Then <InlineMath>{'f(x) = \\sum_{n=1}^{\\infty} f_n(x)'}</InlineMath> converges uniformly
          on <InlineMath>{'[a, b]'}</InlineMath>, <InlineMath>{'f'}</InlineMath> is differentiable, and
        </p>
        <MathBlock>{'f\'(x) = \\sum_{n=1}^{\\infty} f_n\'(x)'}</MathBlock>
      </Theorem>

      <Callout type="note" title="Comparison with Integration">
        <p className="mb-3">
          For integration: uniform convergence of <InlineMath>{'\\{f_n\\}'}</InlineMath> implies we can integrate term by term.
        </p>
        <p>
          For differentiation: uniform convergence of <InlineMath>{'\\{f_n\'\\}'}</InlineMath> (plus convergence at one point) implies we can differentiate term by term.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Uniform convergence of <InlineMath>{'f_n'}</InlineMath> alone does not guarantee <InlineMath>{'f_n\' \\to f\''}</InlineMath></li>
        <li>Need uniform convergence of the derivatives <InlineMath>{'f_n\''}</InlineMath></li>
        <li>Also need pointwise convergence of <InlineMath>{'f_n'}</InlineMath> at one point</li>
        <li>These conditions then imply uniform convergence of <InlineMath>{'f_n'}</InlineMath> everywhere</li>
        <li>Differentiation is "harder" to commute with limits than integration</li>
      </ul>
    </LessonLayout>
  );
}
