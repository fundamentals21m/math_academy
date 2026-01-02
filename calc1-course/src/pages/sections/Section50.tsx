import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <p>
        L'Hôpital's rule provides a powerful technique for evaluating limits of indeterminate
        forms by replacing the original limit with a limit of derivatives. While Taylor
        polynomials offer one approach, L'Hôpital's rule is often faster for simpler problems.
      </p>

      <h2>The 0/0 Form</h2>

      <Callout type="theorem" title="L'Hôpital's Rule (0/0 Form)">
        <p>
          Suppose <InlineMath>{`f`}</InlineMath> and <InlineMath>{`g`}</InlineMath> are differentiable
          near <InlineMath>{`a`}</InlineMath> (except possibly at <InlineMath>{`a`}</InlineMath>), and
        </p>
        <MathBlock>{`\\lim_{x \\to a} f(x) = 0 \\quad \\text{and} \\quad \\lim_{x \\to a} g(x) = 0`}</MathBlock>
        <p>
          If <InlineMath>{`g'(x) \\neq 0`}</InlineMath> near <InlineMath>{`a`}</InlineMath> and
          <InlineMath>{`\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}`}</InlineMath> exists (or equals
          <InlineMath>{`\\pm\\infty`}</InlineMath>), then:
        </p>
        <MathBlock>{`\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Key Points">
        <ul className="list-disc pl-6 space-y-1">
          <li>We differentiate numerator and denominator <em>separately</em>—this is NOT the quotient rule</li>
          <li>The rule can be applied repeatedly if the result is still indeterminate</li>
          <li>The rule applies to one-sided limits and limits at infinity</li>
          <li>If the limit of derivatives doesn't exist, the rule gives no information</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 1: A Classic Limit">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <InlineMath>{`0/0`}</InlineMath> form. Applying L'Hôpital's rule:
        </p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\sin x}{x} = \\lim_{x \\to 0} \\frac{\\cos x}{1} = \\cos 0 = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Applying the Rule Twice">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <InlineMath>{`0/0`}</InlineMath>. First application:
        </p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\lim_{x \\to 0} \\frac{\\sin x}{2x}`}</MathBlock>
        <p>Still <InlineMath>{`0/0`}</InlineMath>. Apply again:</p>
        <MathBlock>{`= \\lim_{x \\to 0} \\frac{\\cos x}{2} = \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Exponential and Polynomial">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <InlineMath>{`0/0`}</InlineMath>. First application:
        </p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2} = \\lim_{x \\to 0} \\frac{e^x - 1}{2x}`}</MathBlock>
        <p>Still <InlineMath>{`0/0`}</InlineMath>. Apply again:</p>
        <MathBlock>{`= \\lim_{x \\to 0} \\frac{e^x}{2} = \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Logarithm">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 1} \\frac{\\ln x}{x - 1}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          At <InlineMath>{`x = 1`}</InlineMath>: <InlineMath>{`\\ln 1 = 0`}</InlineMath> and <InlineMath>{`1 - 1 = 0`}</InlineMath>.
          This is <InlineMath>{`0/0`}</InlineMath>.
        </p>
        <MathBlock>{`\\lim_{x \\to 1} \\frac{\\ln x}{x - 1} = \\lim_{x \\to 1} \\frac{1/x}{1} = \\frac{1}{1} = 1`}</MathBlock>
      </Callout>

      <h2>The ∞/∞ Form</h2>

      <Callout type="theorem" title="L'Hôpital's Rule (∞/∞ Form)">
        <p>
          L'Hôpital's rule also applies when both <InlineMath>{`f(x) \\to \\pm\\infty`}</InlineMath>
          and <InlineMath>{`g(x) \\to \\pm\\infty`}</InlineMath> as <InlineMath>{`x \\to a`}</InlineMath>
          (including <InlineMath>{`a = \\pm\\infty`}</InlineMath>):
        </p>
        <MathBlock>{`\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}`}</MathBlock>
        <p>provided the limit on the right exists or is <InlineMath>{`\\pm\\infty`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Example 5: Polynomial Growth">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{x^2}{e^x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <InlineMath>{`\\infty/\\infty`}</InlineMath>. Apply L'Hôpital's rule:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^2}{e^x} = \\lim_{x \\to \\infty} \\frac{2x}{e^x}`}</MathBlock>
        <p>Still <InlineMath>{`\\infty/\\infty`}</InlineMath>. Apply again:</p>
        <MathBlock>{`= \\lim_{x \\to \\infty} \\frac{2}{e^x} = 0`}</MathBlock>
        <p>
          This shows that <InlineMath>{`e^x`}</InlineMath> grows faster than any polynomial.
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Logarithm vs Polynomial">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{\\ln x}{x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <InlineMath>{`\\infty/\\infty`}</InlineMath>:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = \\lim_{x \\to \\infty} \\frac{1/x}{1} = \\lim_{x \\to \\infty} \\frac{1}{x} = 0`}</MathBlock>
        <p>
          This shows that <InlineMath>{`\\ln x`}</InlineMath> grows slower than any positive power of <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 7: Comparing Powers">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{x^3 + 2x}{5x^3 - x^2 + 1}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <InlineMath>{`\\infty/\\infty`}</InlineMath>. Apply L'Hôpital three times:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^3 + 2x}{5x^3 - x^2 + 1} = \\lim_{x \\to \\infty} \\frac{3x^2 + 2}{15x^2 - 2x} = \\lim_{x \\to \\infty} \\frac{6x}{30x - 2} = \\lim_{x \\to \\infty} \\frac{6}{30} = \\frac{1}{5}`}</MathBlock>
        <p>
          Note: For rational functions, it's often easier to divide by the highest power.
        </p>
      </Callout>

      <h2>Other Indeterminate Forms</h2>

      <p>
        L'Hôpital's rule directly handles <InlineMath>{`0/0`}</InlineMath> and <InlineMath>{`\\infty/\\infty`}</InlineMath>.
        Other forms must be converted first.
      </p>

      <Callout type="theorem" title="Converting Other Forms">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong><InlineMath>{`0 \\cdot \\infty`}</InlineMath>:</strong> Write as
            <InlineMath>{`\\frac{f}{1/g}`}</InlineMath> (giving <InlineMath>{`0/0`}</InlineMath>) or
            <InlineMath>{`\\frac{g}{1/f}`}</InlineMath> (giving <InlineMath>{`\\infty/\\infty`}</InlineMath>)
          </li>
          <li>
            <strong><InlineMath>{`\\infty - \\infty`}</InlineMath>:</strong> Combine fractions or
            factor to get a quotient
          </li>
          <li>
            <strong><InlineMath>{`0^0, 1^\\infty, \\infty^0`}</InlineMath>:</strong> Take logarithm:
            if <InlineMath>{`y = f^g`}</InlineMath>, then <InlineMath>{`\\ln y = g \\ln f`}</InlineMath>
          </li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 8: The 0·∞ Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0^+} x \\ln x`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <InlineMath>{`0 \\cdot (-\\infty)`}</InlineMath>. Rewrite as <InlineMath>{`\\infty/\\infty`}</InlineMath>:
        </p>
        <MathBlock>{`x \\ln x = \\frac{\\ln x}{1/x}`}</MathBlock>
        <p>Now apply L'Hôpital:</p>
        <MathBlock>{`\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} = \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} \\frac{-x^2}{x} = \\lim_{x \\to 0^+} (-x) = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 9: The ∞ - ∞ Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0^+} \\left(\\frac{1}{x} - \\frac{1}{\\sin x}\\right)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Combine fractions:</p>
        <MathBlock>{`\\frac{1}{x} - \\frac{1}{\\sin x} = \\frac{\\sin x - x}{x \\sin x}`}</MathBlock>
        <p>This is <InlineMath>{`0/0`}</InlineMath>. Apply L'Hôpital:</p>
        <MathBlock>{`\\lim_{x \\to 0^+} \\frac{\\sin x - x}{x \\sin x} = \\lim_{x \\to 0^+} \\frac{\\cos x - 1}{\\sin x + x \\cos x}`}</MathBlock>
        <p>Still <InlineMath>{`0/0`}</InlineMath>. Apply again:</p>
        <MathBlock>{`= \\lim_{x \\to 0^+} \\frac{-\\sin x}{\\cos x + \\cos x - x \\sin x} = \\frac{0}{2} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 10: The 1^∞ Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} (1 + x)^{1/x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`y = (1+x)^{1/x}`}</InlineMath>. Then <InlineMath>{`\\ln y = \\frac{\\ln(1+x)}{x}`}</InlineMath>.
        </p>
        <p>This is <InlineMath>{`0/0`}</InlineMath>. Apply L'Hôpital:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = \\lim_{x \\to 0} \\frac{1/(1+x)}{1} = 1`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to 0} (1+x)^{1/x} = e^1 = e`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 11: The 0^0 Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0^+} x^x`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`y = x^x`}</InlineMath>. Then <InlineMath>{`\\ln y = x \\ln x`}</InlineMath>.
        </p>
        <p>From Example 8, <InlineMath>{`\\lim_{x \\to 0^+} x \\ln x = 0`}</InlineMath>.</p>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to 0^+} x^x = e^0 = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 12: The ∞^0 Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} x^{1/x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`y = x^{1/x}`}</InlineMath>. Then <InlineMath>{`\\ln y = \\frac{\\ln x}{x}`}</InlineMath>.
        </p>
        <p>From Example 6, <InlineMath>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = 0`}</InlineMath>.</p>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} x^{1/x} = e^0 = 1`}</MathBlock>
      </Callout>

      <h2>When L'Hôpital's Rule Fails</h2>

      <Callout type="info" title="Limitations">
        <p>L'Hôpital's rule may fail or be inappropriate when:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>The limit of the derivatives doesn't exist (even though the original limit does)</li>
          <li>Repeated application leads to a cycle</li>
          <li>The form is not actually indeterminate</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 13: When the Rule Fails">
        <p>Consider <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x}`}</InlineMath>.</p>
        <p><strong>Incorrect approach:</strong></p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} \\stackrel{?}{=} \\lim_{x \\to \\infty} \\frac{1 + \\cos x}{1}`}</MathBlock>
        <p>
          But <InlineMath>{`1 + \\cos x`}</InlineMath> oscillates between 0 and 2, so this limit
          doesn't exist!
        </p>
        <p><strong>Correct approach:</strong></p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} = \\lim_{x \\to \\infty} \\left(1 + \\frac{\\sin x}{x}\\right) = 1 + 0 = 1`}</MathBlock>
        <p>
          The original limit exists even though the derivative limit doesn't.
        </p>
      </Callout>

      <Callout type="example" title="Example 14: Cyclic Application">
        <p>Consider <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{e^x}{e^x}`}</InlineMath>.</p>
        <p>
          This is <InlineMath>{`\\infty/\\infty`}</InlineMath>, but applying L'Hôpital gives
          <InlineMath>{`\\frac{e^x}{e^x}`}</InlineMath> again—we're going in circles!
        </p>
        <p><strong>Solution:</strong> Simply cancel: <InlineMath>{`\\frac{e^x}{e^x} = 1`}</InlineMath>.</p>
      </Callout>

      <h2>Proof Sketch</h2>

      <Callout type="info" title="Why L'Hôpital's Rule Works">
        <p>
          For the <InlineMath>{`0/0`}</InlineMath> case with <InlineMath>{`a`}</InlineMath> finite, the proof
          uses the <strong>Cauchy Mean Value Theorem</strong>:
        </p>
        <p>
          If <InlineMath>{`f`}</InlineMath> and <InlineMath>{`g`}</InlineMath> are continuous on <InlineMath>{`[a,b]`}</InlineMath>
          and differentiable on <InlineMath>{`(a,b)`}</InlineMath>, with <InlineMath>{`g'(x) \\neq 0`}</InlineMath>
          on <InlineMath>{`(a,b)`}</InlineMath>, then there exists <InlineMath>{`c \\in (a,b)`}</InlineMath> such that:
        </p>
        <MathBlock>{`\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f'(c)}{g'(c)}`}</MathBlock>
        <p>
          When <InlineMath>{`f(a) = g(a) = 0`}</InlineMath>, this becomes
          <InlineMath>{`\\frac{f(b)}{g(b)} = \\frac{f'(c)}{g'(c)}`}</InlineMath>.
          As <InlineMath>{`b \\to a`}</InlineMath>, we have <InlineMath>{`c \\to a`}</InlineMath> also,
          yielding the result.
        </p>
      </Callout>

      <h2>Comparison: L'Hôpital vs Taylor</h2>

      <Callout type="info" title="When to Use Which">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-2">Method</th>
              <th className="text-left py-2">Advantages</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2"><strong>L'Hôpital</strong></td>
              <td>Quick for simple limits; mechanical process; works well with exponentials and logarithms</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><strong>Taylor</strong></td>
              <td>Reveals structure; gives more terms; better for limits involving products/compositions; essential for o-notation analysis</td>
            </tr>
          </tbody>
        </table>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>L'Hôpital's Rule:</strong> For <InlineMath>{`0/0`}</InlineMath> or <InlineMath>{`\\infty/\\infty`}</InlineMath>,
          <InlineMath>{`\\lim \\frac{f}{g} = \\lim \\frac{f'}{g'}`}</InlineMath> (if the right side exists).
        </li>
        <li>
          <strong>Repeated application:</strong> If the result is still indeterminate, apply again.
        </li>
        <li>
          <strong>Other forms:</strong> Convert <InlineMath>{`0 \\cdot \\infty`}</InlineMath>,
          <InlineMath>{`\\infty - \\infty`}</InlineMath>, and exponential forms to quotients first.
        </li>
        <li>
          <strong>Exponential forms:</strong> For <InlineMath>{`f^g`}</InlineMath>, evaluate
          <InlineMath>{`\\lim g \\ln f`}</InlineMath> and exponentiate.
        </li>
        <li>
          <strong>Caution:</strong> The rule requires the limit of derivatives to exist; if it
          doesn't, the rule gives no information.
        </li>
        <li>
          <strong>Growth rates:</strong> <InlineMath>{`\\ln x \\ll x^a \\ll e^x`}</InlineMath> for any <InlineMath>{`a > 0`}</InlineMath>.
        </li>
      </ul>
    </LessonLayout>
  );
}
