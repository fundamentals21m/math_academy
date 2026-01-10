import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <h2 className="text-2xl font-semibold mb-4">L'Hospital's Rule</h2>

      <p className="mb-4">
        L'Hospital's rule is a powerful technique for evaluating limits of indeterminate forms.
        It allows us to reduce the computation of certain limits to the evaluation of limits
        of derivatives, which are often easier to compute.
      </p>

      <Definition title="Indeterminate Forms">
        <p className="mb-3">
          An <em>indeterminate form</em> arises when direct substitution in a limit leads
          to an expression that does not determine the limit. The most common indeterminate forms are:
        </p>
        <MathBlock>{'\\frac{0}{0}, \\quad \\frac{\\infty}{\\infty}, \\quad 0 \\cdot \\infty, \\quad \\infty - \\infty, \\quad 0^0, \\quad \\infty^0, \\quad 1^\\infty'}</MathBlock>
        <p>
          L'Hospital's rule directly addresses the first two of these forms.
        </p>
      </Definition>

      <Theorem
        title="5.13 - L'Hospital's Rule (0/0 Form)"
        proof={
          <>
            <p className="mb-3">
              We first consider the case <InlineMath>{'a < x < b'}</InlineMath>.
              Choose <InlineMath>{'r'}</InlineMath> such that <InlineMath>{'A < r < B'}</InlineMath>.
              Then there exists <InlineMath>{'c \\in (a, b)'}</InlineMath> such that
              if <InlineMath>{'a < x < c'}</InlineMath> and <InlineMath>{'a < t < c'}</InlineMath>, then
            </p>
            <MathBlock>{'\\left| \\frac{f\'(x)}{g\'(x)} - A \\right| < r - A'}</MathBlock>
            <p className="mb-3">
              Hence <InlineMath>{'f\'(x)/g\'(x) < r'}</InlineMath>.
              By the generalized mean value theorem, there exists <InlineMath>{'y'}</InlineMath> between <InlineMath>{'x'}</InlineMath> and <InlineMath>{'t'}</InlineMath> such that
            </p>
            <MathBlock>{'\\frac{f(t) - f(x)}{g(t) - g(x)} = \\frac{f\'(y)}{g\'(y)} < r'}</MathBlock>
            <p className="mb-3">
              Letting <InlineMath>{'t \\to a'}</InlineMath>, we use the hypothesis that <InlineMath>{'f(a) = g(a) = 0'}</InlineMath> to obtain
            </p>
            <MathBlock>{'\\frac{f(x)}{g(x)} \\leq r'}</MathBlock>
            <p>
              A similar argument gives the reverse inequality with <InlineMath>{'r'}</InlineMath> replaced
              by <InlineMath>{'s > A'}</InlineMath>. Since <InlineMath>{'r'}</InlineMath> and <InlineMath>{'s'}</InlineMath> can
              be arbitrarily close to <InlineMath>{'A'}</InlineMath>, the result follows.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> are real and differentiable
          in <InlineMath>{'(a, b)'}</InlineMath>, and <InlineMath>{'g\'(x) \\neq 0'}</InlineMath> for
          all <InlineMath>{'x \\in (a, b)'}</InlineMath>, where <InlineMath>{'-\\infty \\leq a < b \\leq +\\infty'}</InlineMath>.
          Suppose
        </p>
        <MathBlock>{'\\frac{f\'(x)}{g\'(x)} \\to A \\quad \\text{as } x \\to a'}</MathBlock>
        <p className="mb-3">
          If
        </p>
        <MathBlock>{'f(x) \\to 0 \\text{ and } g(x) \\to 0 \\text{ as } x \\to a'}</MathBlock>
        <p className="mb-3">
          or if
        </p>
        <MathBlock>{'g(x) \\to +\\infty \\text{ as } x \\to a'}</MathBlock>
        <p>
          then
        </p>
        <MathBlock>{'\\frac{f(x)}{g(x)} \\to A \\quad \\text{as } x \\to a'}</MathBlock>
      </Theorem>

      <Callout type="warning" title="Important Hypotheses">
        <p className="mb-3">
          The theorem requires:
        </p>
        <ul className="list-disc list-inside">
          <li><InlineMath>{'g\'(x) \\neq 0'}</InlineMath> in <InlineMath>{'(a, b)'}</InlineMath></li>
          <li>The limit <InlineMath>{'\\lim f\'/g\''}</InlineMath> must exist (including <InlineMath>{'\\pm \\infty'}</InlineMath>)</li>
          <li>Either both numerator and denominator tend to 0, or the denominator tends to <InlineMath>{'\\pm \\infty'}</InlineMath></li>
        </ul>
      </Callout>

      <Example title="The 0/0 Form">
        <p className="mb-3">
          <strong>(a)</strong> Evaluate <InlineMath>{'\\lim_{x \\to 0} \\frac{\\sin x}{x}'}</InlineMath>.
        </p>
        <p className="mb-3">
          This is the indeterminate form <InlineMath>{'0/0'}</InlineMath>. Applying L'Hospital's rule:
        </p>
        <MathBlock>{'\\lim_{x \\to 0} \\frac{\\sin x}{x} = \\lim_{x \\to 0} \\frac{\\cos x}{1} = \\cos 0 = 1'}</MathBlock>
        <p className="mb-3">
          <strong>(b)</strong> Evaluate <InlineMath>{'\\lim_{x \\to 0} \\frac{e^x - 1}{x}'}</InlineMath>.
        </p>
        <MathBlock>{'\\lim_{x \\to 0} \\frac{e^x - 1}{x} = \\lim_{x \\to 0} \\frac{e^x}{1} = e^0 = 1'}</MathBlock>
        <p className="mb-3">
          <strong>(c)</strong> Evaluate <InlineMath>{'\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}'}</InlineMath>.
        </p>
        <p className="mb-3">
          Applying L'Hospital's rule twice (since the first application still gives <InlineMath>{'0/0'}</InlineMath>):
        </p>
        <MathBlock>{'\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\lim_{x \\to 0} \\frac{\\sin x}{2x} = \\lim_{x \\to 0} \\frac{\\cos x}{2} = \\frac{1}{2}'}</MathBlock>
      </Example>

      <Example title="The infinity/infinity Form">
        <p className="mb-3">
          <strong>(a)</strong> Evaluate <InlineMath>{'\\lim_{x \\to \\infty} \\frac{x}{e^x}'}</InlineMath>.
        </p>
        <MathBlock>{'\\lim_{x \\to \\infty} \\frac{x}{e^x} = \\lim_{x \\to \\infty} \\frac{1}{e^x} = 0'}</MathBlock>
        <p className="mb-3">
          <strong>(b)</strong> Evaluate <InlineMath>{'\\lim_{x \\to \\infty} \\frac{\\ln x}{x}'}</InlineMath>.
        </p>
        <MathBlock>{'\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = \\lim_{x \\to \\infty} \\frac{1/x}{1} = \\lim_{x \\to \\infty} \\frac{1}{x} = 0'}</MathBlock>
        <p className="mb-3">
          <strong>(c)</strong> For any <InlineMath>{'n > 0'}</InlineMath>, <InlineMath>{'\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0'}</InlineMath>.
        </p>
        <p>
          Apply L'Hospital's rule <InlineMath>{'n'}</InlineMath> times, reducing the power of <InlineMath>{'x'}</InlineMath> in
          the numerator each time. This shows that exponentials grow faster than any polynomial.
        </p>
      </Example>

      <Callout type="info" title="Other Indeterminate Forms">
        <p className="mb-3">
          L'Hospital's rule can be adapted to other indeterminate forms by algebraic manipulation:
        </p>
        <p className="mb-2">
          <strong><InlineMath>{'0 \\cdot \\infty'}</InlineMath>:</strong> Write <InlineMath>{'fg = f/(1/g)'}</InlineMath> or <InlineMath>{'g/(1/f)'}</InlineMath>
        </p>
        <p className="mb-2">
          <strong><InlineMath>{'\\infty - \\infty'}</InlineMath>:</strong> Combine into a single fraction
        </p>
        <p>
          <strong><InlineMath>{'0^0, \\infty^0, 1^\\infty'}</InlineMath>:</strong> Take logarithms and use <InlineMath>{'\\lim e^{\\ln(f^g)} = e^{\\lim g \\ln f}'}</InlineMath>
        </p>
      </Callout>

      <Example title="The Form 0 times infinity">
        <p className="mb-3">
          Evaluate <InlineMath>{'\\lim_{x \\to 0^+} x \\ln x'}</InlineMath>.
        </p>
        <p className="mb-3">
          This is <InlineMath>{'0 \\cdot (-\\infty)'}</InlineMath>. Rewrite as:
        </p>
        <MathBlock>{'\\lim_{x \\to 0^+} x \\ln x = \\lim_{x \\to 0^+} \\frac{\\ln x}{1/x}'}</MathBlock>
        <p className="mb-3">
          Now apply L'Hospital's rule:
        </p>
        <MathBlock>{'= \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0'}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>L'Hospital's rule: if <InlineMath>{'f/g'}</InlineMath> is <InlineMath>{'0/0'}</InlineMath> or <InlineMath>{'\\infty/\\infty'}</InlineMath>, then <InlineMath>{'\\lim f/g = \\lim f\'/g\''}</InlineMath></li>
        <li>The rule requires <InlineMath>{'g\'(x) \\neq 0'}</InlineMath> near the limit point</li>
        <li>The limit of the derivatives must exist (including <InlineMath>{'\\pm \\infty'}</InlineMath>)</li>
        <li>The rule can be applied repeatedly for repeated indeterminate forms</li>
        <li>Other indeterminate forms can be converted to <InlineMath>{'0/0'}</InlineMath> or <InlineMath>{'\\infty/\\infty'}</InlineMath></li>
        <li>Exponential functions grow faster than any polynomial</li>
        <li>Logarithms grow slower than any positive power of <InlineMath>{'x'}</InlineMath></li>
      </ul>
    </LessonLayout>
  );
}
