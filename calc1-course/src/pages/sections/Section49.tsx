import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <p>
        When evaluating limits, we often encounter expressions where direct substitution
        gives a meaningless form like <MathInline>{`0/0`}</MathInline> or <MathInline>{`\\infty - \\infty`}</MathInline>.
        These are called <strong>indeterminate forms</strong>. Taylor polynomials provide a
        powerful and systematic method for resolving them.
      </p>

      <h2>The Seven Indeterminate Forms</h2>

      <Callout type="definition" title="Indeterminate Forms">
        <p>The seven classical indeterminate forms are:</p>
        <MathBlock>{`\\frac{0}{0}, \\quad \\frac{\\infty}{\\infty}, \\quad 0 \\cdot \\infty, \\quad \\infty - \\infty, \\quad 0^0, \\quad 1^\\infty, \\quad \\infty^0`}</MathBlock>
        <p>
          Each of these can yield any value (or no limit at all), depending on how the
          quantities approach their limiting values.
        </p>
      </Callout>

      <Callout type="info" title="Why 'Indeterminate'?">
        <p>
          Consider <MathInline>{`0/0`}</MathInline>: both <MathInline>{`\\lim_{x \\to 0} \\frac{x}{x} = 1`}</MathInline>
          and <MathInline>{`\\lim_{x \\to 0} \\frac{x^2}{x} = 0`}</MathInline> have the form <MathInline>{`0/0`}</MathInline>,
          yet give different answers. The form alone doesn't determine the limit—we need
          more information about how fast each part approaches its value.
        </p>
      </Callout>

      <h2>The 0/0 Form: Taylor Polynomial Method</h2>

      <p>
        The most common indeterminate form is <MathInline>{`0/0`}</MathInline>. Taylor polynomials
        reveal the precise rates at which the numerator and denominator approach zero.
      </p>

      <Callout type="theorem" title="Strategy for 0/0 Forms">
        <p>To evaluate <MathInline>{`\\lim_{x \\to a} \\frac{f(x)}{g(x)}`}</MathInline> when <MathInline>{`f(a) = g(a) = 0`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Expand <MathInline>{`f(x)`}</MathInline> and <MathInline>{`g(x)`}</MathInline> in Taylor series about <MathInline>{`x = a`}</MathInline></li>
          <li>Keep enough terms to identify the leading nonzero terms</li>
          <li>Cancel common factors of <MathInline>{`(x-a)`}</MathInline></li>
          <li>Evaluate the remaining expression at <MathInline>{`x = a`}</MathInline></li>
        </ol>
      </Callout>

      <Callout type="example" title="Example 1: Basic 0/0 Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <MathInline>{`\\sin x = x - \\frac{x^3}{6} + o(x^3)`}</MathInline>:</p>
        <MathBlock>{`\\frac{\\sin x}{x} = \\frac{x - \\frac{x^3}{6} + o(x^3)}{x} = 1 - \\frac{x^2}{6} + o(x^2)`}</MathBlock>
        <p>As <MathInline>{`x \\to 0`}</MathInline>:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Higher-Order Cancellation">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <MathInline>{`e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3)`}</MathInline>:</p>
        <MathBlock>{`e^x - 1 - x = \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\frac{e^x - 1 - x}{x^2} = \\frac{1}{2} + \\frac{x}{6} + o(x) \\to \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Combining Functions">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <MathInline>{`\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)`}</MathInline>:</p>
        <MathBlock>{`1 - \\cos x = \\frac{x^2}{2} - \\frac{x^4}{24} + o(x^4)`}</MathBlock>
        <MathBlock>{`\\frac{1 - \\cos x}{x^2} = \\frac{1}{2} - \\frac{x^2}{24} + o(x^2) \\to \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Three-Term Expansion Needed">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x - x + \\frac{x^3}{6}}{x^5}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <MathInline>{`\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^5)`}</MathInline>:</p>
        <MathBlock>{`\\sin x - x + \\frac{x^3}{6} = \\frac{x^5}{120} + o(x^5)`}</MathBlock>
        <MathBlock>{`\\frac{\\sin x - x + \\frac{x^3}{6}}{x^5} = \\frac{1}{120} + o(1) \\to \\frac{1}{120}`}</MathBlock>
      </Callout>

      <h2>The ∞ - ∞ Form</h2>

      <p>
        When two quantities both approach infinity, their difference is indeterminate.
        The key is to rewrite the expression to reveal cancellation.
      </p>

      <Callout type="example" title="Example 5: ∞ - ∞ Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\left(\\frac{1}{x} - \\frac{1}{\\sin x}\\right)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Combine over a common denominator:</p>
        <MathBlock>{`\\frac{1}{x} - \\frac{1}{\\sin x} = \\frac{\\sin x - x}{x \\sin x}`}</MathBlock>
        <p>Now expand:</p>
        <MathBlock>{`\\sin x - x = -\\frac{x^3}{6} + o(x^3)`}</MathBlock>
        <MathBlock>{`x \\sin x = x\\left(x - \\frac{x^3}{6} + o(x^3)\\right) = x^2 - \\frac{x^4}{6} + o(x^4) = x^2(1 + o(1))`}</MathBlock>
        <MathBlock>{`\\frac{\\sin x - x}{x \\sin x} = \\frac{-\\frac{x^3}{6} + o(x^3)}{x^2(1 + o(1))} = \\frac{-\\frac{x}{6} + o(x)}{1 + o(1)} \\to 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Another ∞ - ∞">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\left(\\frac{1}{x^2} - \\frac{1}{\\sin^2 x}\\right)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{1}{x^2} - \\frac{1}{\\sin^2 x} = \\frac{\\sin^2 x - x^2}{x^2 \\sin^2 x}`}</MathBlock>
        <p>Using <MathInline>{`\\sin x = x - \\frac{x^3}{6} + o(x^3)`}</MathInline>:</p>
        <MathBlock>{`\\sin^2 x = x^2 - \\frac{x^4}{3} + o(x^4)`}</MathBlock>
        <MathBlock>{`\\sin^2 x - x^2 = -\\frac{x^4}{3} + o(x^4)`}</MathBlock>
        <MathBlock>{`x^2 \\sin^2 x = x^4(1 + o(1))`}</MathBlock>
        <MathBlock>{`\\frac{\\sin^2 x - x^2}{x^2 \\sin^2 x} = \\frac{-\\frac{x^4}{3} + o(x^4)}{x^4(1 + o(1))} = -\\frac{1}{3}`}</MathBlock>
      </Callout>

      <h2>The 0 · ∞ Form</h2>

      <p>
        When one factor approaches 0 and another approaches ∞, rewrite as a quotient
        to convert to <MathInline>{`0/0`}</MathInline> or <MathInline>{`\\infty/\\infty`}</MathInline>.
      </p>

      <Callout type="example" title="Example 7: 0 · ∞ Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0^+} x \\ln x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Rewrite as:</p>
        <MathBlock>{`x \\ln x = \\frac{\\ln x}{1/x}`}</MathBlock>
        <p>
          This is now <MathInline>{`\\infty/\\infty`}</MathInline> form. Using L'Hôpital's rule
          (or substitution <MathInline>{`x = e^{-t}`}</MathInline> where <MathInline>{`t \\to \\infty`}</MathInline>):
        </p>
        <MathBlock>{`\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} = \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 8: 0 · ∞ with Taylor">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} x \\cot x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`x \\cot x = x \\cdot \\frac{\\cos x}{\\sin x} = \\frac{x \\cos x}{\\sin x}`}</MathBlock>
        <p>Using Taylor expansions:</p>
        <MathBlock>{`x \\cos x = x\\left(1 - \\frac{x^2}{2} + o(x^2)\\right) = x - \\frac{x^3}{2} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\sin x = x - \\frac{x^3}{6} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\frac{x \\cos x}{\\sin x} = \\frac{x - \\frac{x^3}{2} + o(x^3)}{x - \\frac{x^3}{6} + o(x^3)} = \\frac{1 - \\frac{x^2}{2} + o(x^2)}{1 - \\frac{x^2}{6} + o(x^2)} \\to 1`}</MathBlock>
      </Callout>

      <h2>Exponential Indeterminate Forms</h2>

      <p>
        Forms like <MathInline>{`0^0`}</MathInline>, <MathInline>{`1^\\infty`}</MathInline>, and <MathInline>{`\\infty^0`}</MathInline>
        involve exponentials. The key technique is to write <MathInline>{`f(x)^{g(x)} = e^{g(x) \\ln f(x)}`}</MathInline>
        and evaluate the exponent.
      </p>

      <Callout type="theorem" title="Strategy for Exponential Forms">
        <p>To evaluate <MathInline>{`\\lim_{x \\to a} f(x)^{g(x)}`}</MathInline> when it has an indeterminate form:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Write <MathInline>{`f(x)^{g(x)} = e^{g(x) \\ln f(x)}`}</MathInline></li>
          <li>Evaluate <MathInline>{`L = \\lim_{x \\to a} g(x) \\ln f(x)`}</MathInline></li>
          <li>The answer is <MathInline>{`e^L`}</MathInline></li>
        </ol>
      </Callout>

      <Callout type="example" title="Example 9: The 1^∞ Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} (1 + x)^{1/x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <MathInline>{`y = (1+x)^{1/x}`}</MathInline>, so <MathInline>{`\\ln y = \\frac{\\ln(1+x)}{x}`}</MathInline>.</p>
        <p>Using <MathInline>{`\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)`}</MathInline>:</p>
        <MathBlock>{`\\frac{\\ln(1+x)}{x} = 1 - \\frac{x}{2} + \\frac{x^2}{3} + o(x^2) \\to 1`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to 0} (1+x)^{1/x} = e^1 = e`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 10: The 0^0 Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0^+} x^x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <MathInline>{`y = x^x`}</MathInline>, so <MathInline>{`\\ln y = x \\ln x`}</MathInline>.</p>
        <p>From Example 7, <MathInline>{`\\lim_{x \\to 0^+} x \\ln x = 0`}</MathInline>.</p>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to 0^+} x^x = e^0 = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 11: Another 1^∞">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} (\\cos x)^{1/x^2}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <MathInline>{`y = (\\cos x)^{1/x^2}`}</MathInline>, so <MathInline>{`\\ln y = \\frac{\\ln(\\cos x)}{x^2}`}</MathInline>.</p>
        <p>Using <MathInline>{`\\cos x = 1 - \\frac{x^2}{2} + o(x^2)`}</MathInline> and <MathInline>{`\\ln(1+u) = u - \\frac{u^2}{2} + o(u^2)`}</MathInline> with <MathInline>{`u = -\\frac{x^2}{2} + o(x^2)`}</MathInline>:</p>
        <MathBlock>{`\\ln(\\cos x) = -\\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`\\frac{\\ln(\\cos x)}{x^2} = -\\frac{1}{2} + o(1) \\to -\\frac{1}{2}`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to 0} (\\cos x)^{1/x^2} = e^{-1/2} = \\frac{1}{\\sqrt{e}}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 12: The ∞^0 Form">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} x^{1/x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <MathInline>{`y = x^{1/x}`}</MathInline>, so <MathInline>{`\\ln y = \\frac{\\ln x}{x}`}</MathInline>.</p>
        <p>As <MathInline>{`x \\to \\infty`}</MathInline>, this is <MathInline>{`\\infty/\\infty`}</MathInline>. By L'Hôpital:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = \\lim_{x \\to \\infty} \\frac{1/x}{1} = 0`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} x^{1/x} = e^0 = 1`}</MathBlock>
      </Callout>

      <h2>More Complex Examples</h2>

      <Callout type="example" title="Example 13: Nested Functions">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\arctan x - x}{x^3}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <MathInline>{`\\arctan x = x - \\frac{x^3}{3} + o(x^3)`}</MathInline>:</p>
        <MathBlock>{`\\arctan x - x = -\\frac{x^3}{3} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\frac{\\arctan x - x}{x^3} = -\\frac{1}{3} + o(1) \\to -\\frac{1}{3}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 14: Products in Exponent">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\frac{e^{x^2} - \\cos x}{x^2}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <MathInline>{`e^{x^2} = 1 + x^2 + o(x^2)`}</MathInline> and <MathInline>{`\\cos x = 1 - \\frac{x^2}{2} + o(x^2)`}</MathInline>:</p>
        <MathBlock>{`e^{x^2} - \\cos x = \\left(1 + x^2\\right) - \\left(1 - \\frac{x^2}{2}\\right) + o(x^2) = \\frac{3x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`\\frac{e^{x^2} - \\cos x}{x^2} = \\frac{3}{2} + o(1) \\to \\frac{3}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 15: Composition of Functions">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\ln(1 + \\sin x) - \\sin x}{x^3}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <MathInline>{`u = \\sin x = x - \\frac{x^3}{6} + o(x^3)`}</MathInline>. Then:</p>
        <MathBlock>{`\\ln(1+u) = u - \\frac{u^2}{2} + o(u^2)`}</MathBlock>
        <MathBlock>{`\\ln(1 + \\sin x) = \\sin x - \\frac{\\sin^2 x}{2} + o(\\sin^2 x)`}</MathBlock>
        <MathBlock>{`= \\left(x - \\frac{x^3}{6}\\right) - \\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`\\ln(1 + \\sin x) - \\sin x = -\\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <p>Wait—we need to be more careful. The <MathInline>{`x^3`}</MathInline> term matters:</p>
        <MathBlock>{`\\sin^2 x = x^2 + o(x^2), \\quad \\frac{\\sin^2 x}{2} = \\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`\\ln(1+\\sin x) - \\sin x = -\\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <p>This doesn't give an <MathInline>{`x^3`}</MathInline> term, so the limit is:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\ln(1+\\sin x) - \\sin x}{x^3} = \\lim_{x \\to 0} \\frac{-\\frac{x^2}{2} + o(x^2)}{x^3} = \\lim_{x \\to 0} \\frac{-1}{2x} + o(1/x)`}</MathBlock>
        <p>This diverges. Let's recalculate with <MathInline>{`x^2`}</MathInline> in the denominator:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\ln(1+\\sin x) - \\sin x}{x^2} = -\\frac{1}{2}`}</MathBlock>
      </Callout>

      <h2>Summary of Techniques</h2>

      <Callout type="info" title="Method Summary">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-2">Form</th>
              <th className="text-left py-2">Technique</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-700">
              <td className="py-2"><MathInline>{`0/0`}</MathInline></td>
              <td>Taylor expand numerator and denominator</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><MathInline>{`\\infty/\\infty`}</MathInline></td>
              <td>L'Hôpital or algebraic manipulation</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><MathInline>{`0 \\cdot \\infty`}</MathInline></td>
              <td>Rewrite as <MathInline>{`0/0`}</MathInline> or <MathInline>{`\\infty/\\infty`}</MathInline></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><MathInline>{`\\infty - \\infty`}</MathInline></td>
              <td>Combine fractions, then Taylor expand</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><MathInline>{`0^0, 1^\\infty, \\infty^0`}</MathInline></td>
              <td>Take logarithm: <MathInline>{`f^g = e^{g \\ln f}`}</MathInline></td>
            </tr>
          </tbody>
        </table>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Seven indeterminate forms:</strong> <MathInline>{`0/0, \\infty/\\infty, 0 \\cdot \\infty, \\infty - \\infty, 0^0, 1^\\infty, \\infty^0`}</MathInline>
        </li>
        <li>
          <strong>Taylor method:</strong> Expand functions, identify leading terms, cancel, evaluate.
        </li>
        <li>
          <strong>For <MathInline>{`0/0`}</MathInline>:</strong> Taylor expand numerator and denominator to sufficient order.
        </li>
        <li>
          <strong>For <MathInline>{`\\infty - \\infty`}</MathInline>:</strong> Combine fractions first, then expand.
        </li>
        <li>
          <strong>For exponential forms:</strong> Use <MathInline>{`f^g = e^{g \\ln f}`}</MathInline> and evaluate <MathInline>{`g \\ln f`}</MathInline>.
        </li>
        <li>
          <strong>Key insight:</strong> Taylor polynomials reveal the precise rate at which functions approach their limits.
        </li>
      </ul>
    </LessonLayout>
  );
}
