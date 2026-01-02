import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <p>
        When evaluating limits, we often encounter expressions where direct substitution
        gives a meaningless form like <InlineMath>{`0/0`}</InlineMath> or <InlineMath>{`\\infty - \\infty`}</InlineMath>.
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
          Consider <InlineMath>{`0/0`}</InlineMath>: both <InlineMath>{`\\lim_{x \\to 0} \\frac{x}{x} = 1`}</InlineMath>
          and <InlineMath>{`\\lim_{x \\to 0} \\frac{x^2}{x} = 0`}</InlineMath> have the form <InlineMath>{`0/0`}</InlineMath>,
          yet give different answers. The form alone doesn't determine the limit—we need
          more information about how fast each part approaches its value.
        </p>
      </Callout>

      <h2>The 0/0 Form: Taylor Polynomial Method</h2>

      <p>
        The most common indeterminate form is <InlineMath>{`0/0`}</InlineMath>. Taylor polynomials
        reveal the precise rates at which the numerator and denominator approach zero.
      </p>

      <Callout type="theorem" title="Strategy for 0/0 Forms">
        <p>To evaluate <InlineMath>{`\\lim_{x \\to a} \\frac{f(x)}{g(x)}`}</InlineMath> when <InlineMath>{`f(a) = g(a) = 0`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Expand <InlineMath>{`f(x)`}</InlineMath> and <InlineMath>{`g(x)`}</InlineMath> in Taylor series about <InlineMath>{`x = a`}</InlineMath></li>
          <li>Keep enough terms to identify the leading nonzero terms</li>
          <li>Cancel common factors of <InlineMath>{`(x-a)`}</InlineMath></li>
          <li>Evaluate the remaining expression at <InlineMath>{`x = a`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="example" title="Example 1: Basic 0/0 Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <InlineMath>{`\\sin x = x - \\frac{x^3}{6} + o(x^3)`}</InlineMath>:</p>
        <MathBlock>{`\\frac{\\sin x}{x} = \\frac{x - \\frac{x^3}{6} + o(x^3)}{x} = 1 - \\frac{x^2}{6} + o(x^2)`}</MathBlock>
        <p>As <InlineMath>{`x \\to 0`}</InlineMath>:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Higher-Order Cancellation">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <InlineMath>{`e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3)`}</InlineMath>:</p>
        <MathBlock>{`e^x - 1 - x = \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\frac{e^x - 1 - x}{x^2} = \\frac{1}{2} + \\frac{x}{6} + o(x) \\to \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Combining Functions">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <InlineMath>{`\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)`}</InlineMath>:</p>
        <MathBlock>{`1 - \\cos x = \\frac{x^2}{2} - \\frac{x^4}{24} + o(x^4)`}</MathBlock>
        <MathBlock>{`\\frac{1 - \\cos x}{x^2} = \\frac{1}{2} - \\frac{x^2}{24} + o(x^2) \\to \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Three-Term Expansion Needed">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x - x + \\frac{x^3}{6}}{x^5}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <InlineMath>{`\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^5)`}</InlineMath>:</p>
        <MathBlock>{`\\sin x - x + \\frac{x^3}{6} = \\frac{x^5}{120} + o(x^5)`}</MathBlock>
        <MathBlock>{`\\frac{\\sin x - x + \\frac{x^3}{6}}{x^5} = \\frac{1}{120} + o(1) \\to \\frac{1}{120}`}</MathBlock>
      </Callout>

      <h2>The ∞ - ∞ Form</h2>

      <p>
        When two quantities both approach infinity, their difference is indeterminate.
        The key is to rewrite the expression to reveal cancellation.
      </p>

      <Callout type="example" title="Example 5: ∞ - ∞ Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\left(\\frac{1}{x} - \\frac{1}{\\sin x}\\right)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Combine over a common denominator:</p>
        <MathBlock>{`\\frac{1}{x} - \\frac{1}{\\sin x} = \\frac{\\sin x - x}{x \\sin x}`}</MathBlock>
        <p>Now expand:</p>
        <MathBlock>{`\\sin x - x = -\\frac{x^3}{6} + o(x^3)`}</MathBlock>
        <MathBlock>{`x \\sin x = x\\left(x - \\frac{x^3}{6} + o(x^3)\\right) = x^2 - \\frac{x^4}{6} + o(x^4) = x^2(1 + o(1))`}</MathBlock>
        <MathBlock>{`\\frac{\\sin x - x}{x \\sin x} = \\frac{-\\frac{x^3}{6} + o(x^3)}{x^2(1 + o(1))} = \\frac{-\\frac{x}{6} + o(x)}{1 + o(1)} \\to 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Another ∞ - ∞">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\left(\\frac{1}{x^2} - \\frac{1}{\\sin^2 x}\\right)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{1}{x^2} - \\frac{1}{\\sin^2 x} = \\frac{\\sin^2 x - x^2}{x^2 \\sin^2 x}`}</MathBlock>
        <p>Using <InlineMath>{`\\sin x = x - \\frac{x^3}{6} + o(x^3)`}</InlineMath>:</p>
        <MathBlock>{`\\sin^2 x = x^2 - \\frac{x^4}{3} + o(x^4)`}</MathBlock>
        <MathBlock>{`\\sin^2 x - x^2 = -\\frac{x^4}{3} + o(x^4)`}</MathBlock>
        <MathBlock>{`x^2 \\sin^2 x = x^4(1 + o(1))`}</MathBlock>
        <MathBlock>{`\\frac{\\sin^2 x - x^2}{x^2 \\sin^2 x} = \\frac{-\\frac{x^4}{3} + o(x^4)}{x^4(1 + o(1))} = -\\frac{1}{3}`}</MathBlock>
      </Callout>

      <h2>The 0 · ∞ Form</h2>

      <p>
        When one factor approaches 0 and another approaches ∞, rewrite as a quotient
        to convert to <InlineMath>{`0/0`}</InlineMath> or <InlineMath>{`\\infty/\\infty`}</InlineMath>.
      </p>

      <Callout type="example" title="Example 7: 0 · ∞ Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0^+} x \\ln x`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Rewrite as:</p>
        <MathBlock>{`x \\ln x = \\frac{\\ln x}{1/x}`}</MathBlock>
        <p>
          This is now <InlineMath>{`\\infty/\\infty`}</InlineMath> form. Using L'Hôpital's rule
          (or substitution <InlineMath>{`x = e^{-t}`}</InlineMath> where <InlineMath>{`t \\to \\infty`}</InlineMath>):
        </p>
        <MathBlock>{`\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} = \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 8: 0 · ∞ with Taylor">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} x \\cot x`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`x \\cot x = x \\cdot \\frac{\\cos x}{\\sin x} = \\frac{x \\cos x}{\\sin x}`}</MathBlock>
        <p>Using Taylor expansions:</p>
        <MathBlock>{`x \\cos x = x\\left(1 - \\frac{x^2}{2} + o(x^2)\\right) = x - \\frac{x^3}{2} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\sin x = x - \\frac{x^3}{6} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\frac{x \\cos x}{\\sin x} = \\frac{x - \\frac{x^3}{2} + o(x^3)}{x - \\frac{x^3}{6} + o(x^3)} = \\frac{1 - \\frac{x^2}{2} + o(x^2)}{1 - \\frac{x^2}{6} + o(x^2)} \\to 1`}</MathBlock>
      </Callout>

      <h2>Exponential Indeterminate Forms</h2>

      <p>
        Forms like <InlineMath>{`0^0`}</InlineMath>, <InlineMath>{`1^\\infty`}</InlineMath>, and <InlineMath>{`\\infty^0`}</InlineMath>
        involve exponentials. The key technique is to write <InlineMath>{`f(x)^{g(x)} = e^{g(x) \\ln f(x)}`}</InlineMath>
        and evaluate the exponent.
      </p>

      <Callout type="theorem" title="Strategy for Exponential Forms">
        <p>To evaluate <InlineMath>{`\\lim_{x \\to a} f(x)^{g(x)}`}</InlineMath> when it has an indeterminate form:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Write <InlineMath>{`f(x)^{g(x)} = e^{g(x) \\ln f(x)}`}</InlineMath></li>
          <li>Evaluate <InlineMath>{`L = \\lim_{x \\to a} g(x) \\ln f(x)`}</InlineMath></li>
          <li>The answer is <InlineMath>{`e^L`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="example" title="Example 9: The 1^∞ Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} (1 + x)^{1/x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`y = (1+x)^{1/x}`}</InlineMath>, so <InlineMath>{`\\ln y = \\frac{\\ln(1+x)}{x}`}</InlineMath>.</p>
        <p>Using <InlineMath>{`\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)`}</InlineMath>:</p>
        <MathBlock>{`\\frac{\\ln(1+x)}{x} = 1 - \\frac{x}{2} + \\frac{x^2}{3} + o(x^2) \\to 1`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to 0} (1+x)^{1/x} = e^1 = e`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 10: The 0^0 Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0^+} x^x`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`y = x^x`}</InlineMath>, so <InlineMath>{`\\ln y = x \\ln x`}</InlineMath>.</p>
        <p>From Example 7, <InlineMath>{`\\lim_{x \\to 0^+} x \\ln x = 0`}</InlineMath>.</p>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to 0^+} x^x = e^0 = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 11: Another 1^∞">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} (\\cos x)^{1/x^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`y = (\\cos x)^{1/x^2}`}</InlineMath>, so <InlineMath>{`\\ln y = \\frac{\\ln(\\cos x)}{x^2}`}</InlineMath>.</p>
        <p>Using <InlineMath>{`\\cos x = 1 - \\frac{x^2}{2} + o(x^2)`}</InlineMath> and <InlineMath>{`\\ln(1+u) = u - \\frac{u^2}{2} + o(u^2)`}</InlineMath> with <InlineMath>{`u = -\\frac{x^2}{2} + o(x^2)`}</InlineMath>:</p>
        <MathBlock>{`\\ln(\\cos x) = -\\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`\\frac{\\ln(\\cos x)}{x^2} = -\\frac{1}{2} + o(1) \\to -\\frac{1}{2}`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to 0} (\\cos x)^{1/x^2} = e^{-1/2} = \\frac{1}{\\sqrt{e}}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 12: The ∞^0 Form">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} x^{1/x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`y = x^{1/x}`}</InlineMath>, so <InlineMath>{`\\ln y = \\frac{\\ln x}{x}`}</InlineMath>.</p>
        <p>As <InlineMath>{`x \\to \\infty`}</InlineMath>, this is <InlineMath>{`\\infty/\\infty`}</InlineMath>. By L'Hôpital:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = \\lim_{x \\to \\infty} \\frac{1/x}{1} = 0`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} x^{1/x} = e^0 = 1`}</MathBlock>
      </Callout>

      <h2>More Complex Examples</h2>

      <Callout type="example" title="Example 13: Nested Functions">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\arctan x - x}{x^3}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <InlineMath>{`\\arctan x = x - \\frac{x^3}{3} + o(x^3)`}</InlineMath>:</p>
        <MathBlock>{`\\arctan x - x = -\\frac{x^3}{3} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\frac{\\arctan x - x}{x^3} = -\\frac{1}{3} + o(1) \\to -\\frac{1}{3}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 14: Products in Exponent">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{e^{x^2} - \\cos x}{x^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using <InlineMath>{`e^{x^2} = 1 + x^2 + o(x^2)`}</InlineMath> and <InlineMath>{`\\cos x = 1 - \\frac{x^2}{2} + o(x^2)`}</InlineMath>:</p>
        <MathBlock>{`e^{x^2} - \\cos x = \\left(1 + x^2\\right) - \\left(1 - \\frac{x^2}{2}\\right) + o(x^2) = \\frac{3x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`\\frac{e^{x^2} - \\cos x}{x^2} = \\frac{3}{2} + o(1) \\to \\frac{3}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 15: Composition of Functions">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\ln(1 + \\sin x) - \\sin x}{x^3}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`u = \\sin x = x - \\frac{x^3}{6} + o(x^3)`}</InlineMath>. Then:</p>
        <MathBlock>{`\\ln(1+u) = u - \\frac{u^2}{2} + o(u^2)`}</MathBlock>
        <MathBlock>{`\\ln(1 + \\sin x) = \\sin x - \\frac{\\sin^2 x}{2} + o(\\sin^2 x)`}</MathBlock>
        <MathBlock>{`= \\left(x - \\frac{x^3}{6}\\right) - \\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`\\ln(1 + \\sin x) - \\sin x = -\\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <p>Wait—we need to be more careful. The <InlineMath>{`x^3`}</InlineMath> term matters:</p>
        <MathBlock>{`\\sin^2 x = x^2 + o(x^2), \\quad \\frac{\\sin^2 x}{2} = \\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`\\ln(1+\\sin x) - \\sin x = -\\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <p>This doesn't give an <InlineMath>{`x^3`}</InlineMath> term, so the limit is:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\ln(1+\\sin x) - \\sin x}{x^3} = \\lim_{x \\to 0} \\frac{-\\frac{x^2}{2} + o(x^2)}{x^3} = \\lim_{x \\to 0} \\frac{-1}{2x} + o(1/x)`}</MathBlock>
        <p>This diverges. Let's recalculate with <InlineMath>{`x^2`}</InlineMath> in the denominator:</p>
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
              <td className="py-2"><InlineMath>{`0/0`}</InlineMath></td>
              <td>Taylor expand numerator and denominator</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><InlineMath>{`\\infty/\\infty`}</InlineMath></td>
              <td>L'Hôpital or algebraic manipulation</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><InlineMath>{`0 \\cdot \\infty`}</InlineMath></td>
              <td>Rewrite as <InlineMath>{`0/0`}</InlineMath> or <InlineMath>{`\\infty/\\infty`}</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><InlineMath>{`\\infty - \\infty`}</InlineMath></td>
              <td>Combine fractions, then Taylor expand</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-2"><InlineMath>{`0^0, 1^\\infty, \\infty^0`}</InlineMath></td>
              <td>Take logarithm: <InlineMath>{`f^g = e^{g \\ln f}`}</InlineMath></td>
            </tr>
          </tbody>
        </table>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Seven indeterminate forms:</strong> <InlineMath>{`0/0, \\infty/\\infty, 0 \\cdot \\infty, \\infty - \\infty, 0^0, 1^\\infty, \\infty^0`}</InlineMath>
        </li>
        <li>
          <strong>Taylor method:</strong> Expand functions, identify leading terms, cancel, evaluate.
        </li>
        <li>
          <strong>For <InlineMath>{`0/0`}</InlineMath>:</strong> Taylor expand numerator and denominator to sufficient order.
        </li>
        <li>
          <strong>For <InlineMath>{`\\infty - \\infty`}</InlineMath>:</strong> Combine fractions first, then expand.
        </li>
        <li>
          <strong>For exponential forms:</strong> Use <InlineMath>{`f^g = e^{g \\ln f}`}</InlineMath> and evaluate <InlineMath>{`g \\ln f`}</InlineMath>.
        </li>
        <li>
          <strong>Key insight:</strong> Taylor polynomials reveal the precise rate at which functions approach their limits.
        </li>
      </ul>
    </LessonLayout>
  );
}
