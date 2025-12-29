import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          Suppose <MathInline>{`f`}</MathInline> and <MathInline>{`g`}</MathInline> are differentiable
          near <MathInline>{`a`}</MathInline> (except possibly at <MathInline>{`a`}</MathInline>), and
        </p>
        <MathBlock>{`\\lim_{x \\to a} f(x) = 0 \\quad \\text{and} \\quad \\lim_{x \\to a} g(x) = 0`}</MathBlock>
        <p>
          If <MathInline>{`g'(x) \\neq 0`}</MathInline> near <MathInline>{`a`}</MathInline> and
          <MathInline>{`\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}`}</MathInline> exists (or equals
          <MathInline>{`\\pm\\infty`}</MathInline>), then:
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
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <MathInline>{`0/0`}</MathInline> form. Applying L'Hôpital's rule:
        </p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\sin x}{x} = \\lim_{x \\to 0} \\frac{\\cos x}{1} = \\cos 0 = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Applying the Rule Twice">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <MathInline>{`0/0`}</MathInline>. First application:
        </p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\lim_{x \\to 0} \\frac{\\sin x}{2x}`}</MathBlock>
        <p>Still <MathInline>{`0/0`}</MathInline>. Apply again:</p>
        <MathBlock>{`= \\lim_{x \\to 0} \\frac{\\cos x}{2} = \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Exponential and Polynomial">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <MathInline>{`0/0`}</MathInline>. First application:
        </p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2} = \\lim_{x \\to 0} \\frac{e^x - 1}{2x}`}</MathBlock>
        <p>Still <MathInline>{`0/0`}</MathInline>. Apply again:</p>
        <MathBlock>{`= \\lim_{x \\to 0} \\frac{e^x}{2} = \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Logarithm">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 1} \\frac{\\ln x}{x - 1}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          At <MathInline>{`x = 1`}</MathInline>: <MathInline>{`\\ln 1 = 0`}</MathInline> and <MathInline>{`1 - 1 = 0`}</MathInline>.
          This is <MathInline>{`0/0`}</MathInline>.
        </p>
        <MathBlock>{`\\lim_{x \\to 1} \\frac{\\ln x}{x - 1} = \\lim_{x \\to 1} \\frac{1/x}{1} = \\frac{1}{1} = 1`}</MathBlock>
      </Callout>

      <h2>The ∞/∞ Form</h2>

      <Callout type="theorem" title="L'Hôpital's Rule (∞/∞ Form)">
        <p>
          L'Hôpital's rule also applies when both <MathInline>{`f(x) \\to \\pm\\infty`}</MathInline>
          and <MathInline>{`g(x) \\to \\pm\\infty`}</MathInline> as <MathInline>{`x \\to a`}</MathInline>
          (including <MathInline>{`a = \\pm\\infty`}</MathInline>):
        </p>
        <MathBlock>{`\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}`}</MathBlock>
        <p>provided the limit on the right exists or is <MathInline>{`\\pm\\infty`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Example 5: Polynomial Growth">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{x^2}{e^x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <MathInline>{`\\infty/\\infty`}</MathInline>. Apply L'Hôpital's rule:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^2}{e^x} = \\lim_{x \\to \\infty} \\frac{2x}{e^x}`}</MathBlock>
        <p>Still <MathInline>{`\\infty/\\infty`}</MathInline>. Apply again:</p>
        <MathBlock>{`= \\lim_{x \\to \\infty} \\frac{2}{e^x} = 0`}</MathBlock>
        <p>
          This shows that <MathInline>{`e^x`}</MathInline> grows faster than any polynomial.
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Logarithm vs Polynomial">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{\\ln x}{x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <MathInline>{`\\infty/\\infty`}</MathInline>:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = \\lim_{x \\to \\infty} \\frac{1/x}{1} = \\lim_{x \\to \\infty} \\frac{1}{x} = 0`}</MathBlock>
        <p>
          This shows that <MathInline>{`\\ln x`}</MathInline> grows slower than any positive power of <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 7: Comparing Powers">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{x^3 + 2x}{5x^3 - x^2 + 1}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <MathInline>{`\\infty/\\infty`}</MathInline>. Apply L'Hôpital three times:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^3 + 2x}{5x^3 - x^2 + 1} = \\lim_{x \\to \\infty} \\frac{3x^2 + 2}{15x^2 - 2x} = \\lim_{x \\to \\infty} \\frac{6x}{30x - 2} = \\lim_{x \\to \\infty} \\frac{6}{30} = \\frac{1}{5}`}</MathBlock>
        <p>
          Note: For rational functions, it's often easier to divide by the highest power.
        </p>
      </Callout>

      <h2>Other Indeterminate Forms</h2>

      <p>
        L'Hôpital's rule directly handles <MathInline>{`0/0`}</MathInline> and <MathInline>{`\\infty/\\infty`}</MathInline>.
        Other forms must be converted first.
      </p>

      <Callout type="theorem" title="Converting Other Forms">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong><MathInline>{`0 \\cdot \\infty`}</MathInline>:</strong> Write as
            <MathInline>{`\\frac{f}{1/g}`}</MathInline> (giving <MathInline>{`0/0`}</MathInline>) or
            <MathInline>{`\\frac{g}{1/f}`}</MathInline> (giving <MathInline>{`\\infty/\\infty`}</MathInline>)
          </li>
          <li>
            <strong><MathInline>{`\\infty - \\infty`}</MathInline>:</strong> Combine fractions or
            factor to get a quotient
          </li>
          <li>
            <strong><MathInline>{`0^0, 1^\\infty, \\infty^0`}</MathInline>:</strong> Take logarithm:
            if <MathInline>{`y = f^g`}</MathInline>, then <MathInline>{`\\ln y = g \\ln f`}</MathInline>
          </li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 8: The 0·∞ Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0^+} x \\ln x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          This is <MathInline>{`0 \\cdot (-\\infty)`}</MathInline>. Rewrite as <MathInline>{`\\infty/\\infty`}</MathInline>:
        </p>
        <MathBlock>{`x \\ln x = \\frac{\\ln x}{1/x}`}</MathBlock>
        <p>Now apply L'Hôpital:</p>
        <MathBlock>{`\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} = \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} \\frac{-x^2}{x} = \\lim_{x \\to 0^+} (-x) = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 9: The ∞ - ∞ Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0^+} \\left(\\frac{1}{x} - \\frac{1}{\\sin x}\\right)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Combine fractions:</p>
        <MathBlock>{`\\frac{1}{x} - \\frac{1}{\\sin x} = \\frac{\\sin x - x}{x \\sin x}`}</MathBlock>
        <p>This is <MathInline>{`0/0`}</MathInline>. Apply L'Hôpital:</p>
        <MathBlock>{`\\lim_{x \\to 0^+} \\frac{\\sin x - x}{x \\sin x} = \\lim_{x \\to 0^+} \\frac{\\cos x - 1}{\\sin x + x \\cos x}`}</MathBlock>
        <p>Still <MathInline>{`0/0`}</MathInline>. Apply again:</p>
        <MathBlock>{`= \\lim_{x \\to 0^+} \\frac{-\\sin x}{\\cos x + \\cos x - x \\sin x} = \\frac{0}{2} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 10: The 1^∞ Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} (1 + x)^{1/x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`y = (1+x)^{1/x}`}</MathInline>. Then <MathInline>{`\\ln y = \\frac{\\ln(1+x)}{x}`}</MathInline>.
        </p>
        <p>This is <MathInline>{`0/0`}</MathInline>. Apply L'Hôpital:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = \\lim_{x \\to 0} \\frac{1/(1+x)}{1} = 1`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to 0} (1+x)^{1/x} = e^1 = e`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 11: The 0^0 Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0^+} x^x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`y = x^x`}</MathInline>. Then <MathInline>{`\\ln y = x \\ln x`}</MathInline>.
        </p>
        <p>From Example 8, <MathInline>{`\\lim_{x \\to 0^+} x \\ln x = 0`}</MathInline>.</p>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to 0^+} x^x = e^0 = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 12: The ∞^0 Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} x^{1/x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`y = x^{1/x}`}</MathInline>. Then <MathInline>{`\\ln y = \\frac{\\ln x}{x}`}</MathInline>.
        </p>
        <p>From Example 6, <MathInline>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = 0`}</MathInline>.</p>
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
        <p>Consider <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x}`}</MathInline>.</p>
        <p><strong>Incorrect approach:</strong></p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} \\stackrel{?}{=} \\lim_{x \\to \\infty} \\frac{1 + \\cos x}{1}`}</MathBlock>
        <p>
          But <MathInline>{`1 + \\cos x`}</MathInline> oscillates between 0 and 2, so this limit
          doesn't exist!
        </p>
        <p><strong>Correct approach:</strong></p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x} = \\lim_{x \\to \\infty} \\left(1 + \\frac{\\sin x}{x}\\right) = 1 + 0 = 1`}</MathBlock>
        <p>
          The original limit exists even though the derivative limit doesn't.
        </p>
      </Callout>

      <Callout type="example" title="Example 14: Cyclic Application">
        <p>Consider <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{e^x}{e^x}`}</MathInline>.</p>
        <p>
          This is <MathInline>{`\\infty/\\infty`}</MathInline>, but applying L'Hôpital gives
          <MathInline>{`\\frac{e^x}{e^x}`}</MathInline> again—we're going in circles!
        </p>
        <p><strong>Solution:</strong> Simply cancel: <MathInline>{`\\frac{e^x}{e^x} = 1`}</MathInline>.</p>
      </Callout>

      <h2>Proof Sketch</h2>

      <Callout type="info" title="Why L'Hôpital's Rule Works">
        <p>
          For the <MathInline>{`0/0`}</MathInline> case with <MathInline>{`a`}</MathInline> finite, the proof
          uses the <strong>Cauchy Mean Value Theorem</strong>:
        </p>
        <p>
          If <MathInline>{`f`}</MathInline> and <MathInline>{`g`}</MathInline> are continuous on <MathInline>{`[a,b]`}</MathInline>
          and differentiable on <MathInline>{`(a,b)`}</MathInline>, with <MathInline>{`g'(x) \\neq 0`}</MathInline>
          on <MathInline>{`(a,b)`}</MathInline>, then there exists <MathInline>{`c \\in (a,b)`}</MathInline> such that:
        </p>
        <MathBlock>{`\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f'(c)}{g'(c)}`}</MathBlock>
        <p>
          When <MathInline>{`f(a) = g(a) = 0`}</MathInline>, this becomes
          <MathInline>{`\\frac{f(b)}{g(b)} = \\frac{f'(c)}{g'(c)}`}</MathInline>.
          As <MathInline>{`b \\to a`}</MathInline>, we have <MathInline>{`c \\to a`}</MathInline> also,
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
          <strong>L'Hôpital's Rule:</strong> For <MathInline>{`0/0`}</MathInline> or <MathInline>{`\\infty/\\infty`}</MathInline>,
          <MathInline>{`\\lim \\frac{f}{g} = \\lim \\frac{f'}{g'}`}</MathInline> (if the right side exists).
        </li>
        <li>
          <strong>Repeated application:</strong> If the result is still indeterminate, apply again.
        </li>
        <li>
          <strong>Other forms:</strong> Convert <MathInline>{`0 \\cdot \\infty`}</MathInline>,
          <MathInline>{`\\infty - \\infty`}</MathInline>, and exponential forms to quotients first.
        </li>
        <li>
          <strong>Exponential forms:</strong> For <MathInline>{`f^g`}</MathInline>, evaluate
          <MathInline>{`\\lim g \\ln f`}</MathInline> and exponentiate.
        </li>
        <li>
          <strong>Caution:</strong> The rule requires the limit of derivatives to exist; if it
          doesn't, the rule gives no information.
        </li>
        <li>
          <strong>Growth rates:</strong> <MathInline>{`\\ln x \\ll x^a \\ll e^x`}</MathInline> for any <MathInline>{`a > 0`}</MathInline>.
        </li>
      </ul>
    </LessonLayout>
  );
}
