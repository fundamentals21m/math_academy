import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <p>
        When working with Taylor polynomials and approximations, we need a concise way to
        describe the behavior of error terms as they become small. The <strong>little-o
        notation</strong> provides exactly this—a powerful language for expressing that
        one quantity becomes negligible compared to another.
      </p>

      <h2>Definition of Little-o</h2>

      <Callout type="definition" title="The o-Notation">
        <p>
          Let <InlineMath>{`f`}</InlineMath> and <InlineMath>{`g`}</InlineMath> be functions defined near
          a point <InlineMath>{`a`}</InlineMath> (or for large <InlineMath>{`x`}</InlineMath>). We write:
        </p>
        <MathBlock>{`f(x) = o(g(x)) \\quad \\text{as } x \\to a`}</MathBlock>
        <p>
          (read "<InlineMath>{`f`}</InlineMath> is little-o of <InlineMath>{`g`}</InlineMath>") to mean:
        </p>
        <MathBlock>{`\\lim_{x \\to a} \\frac{f(x)}{g(x)} = 0`}</MathBlock>
        <p>
          In other words, <InlineMath>{`f(x)`}</InlineMath> goes to zero <em>faster</em> than
          <InlineMath>{`g(x)`}</InlineMath> as <InlineMath>{`x \\to a`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Intuition">
        <p>
          The statement <InlineMath>{`f(x) = o(g(x))`}</InlineMath> means that <InlineMath>{`f(x)`}</InlineMath>
          becomes negligible compared to <InlineMath>{`g(x)`}</InlineMath>. More precisely,
          <InlineMath>{`|f(x)|`}</InlineMath> can be made arbitrarily small relative
          to <InlineMath>{`|g(x)|`}</InlineMath> by taking <InlineMath>{`x`}</InlineMath> sufficiently
          close to <InlineMath>{`a`}</InlineMath>.
        </p>
      </Callout>

      <h2>Basic Examples</h2>

      <Callout type="example" title="Example 1: Powers of x">
        <p>
          As <InlineMath>{`x \\to 0`}</InlineMath>:
        </p>
        <MathBlock>{`x^2 = o(x)`}</MathBlock>
        <p><strong>Proof:</strong></p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{x^2}{x} = \\lim_{x \\to 0} x = 0`}</MathBlock>
        <p>
          More generally, <InlineMath>{`x^n = o(x^m)`}</InlineMath> whenever <InlineMath>{`n > m`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Higher Powers">
        <p>
          As <InlineMath>{`x \\to 0`}</InlineMath>:
        </p>
        <MathBlock>{`x^3 = o(x^2), \\quad x^{10} = o(x^5), \\quad x^{100} = o(x)`}</MathBlock>
        <p>
          In general, higher powers of <InlineMath>{`x`}</InlineMath> are "smaller" than lower powers
          as <InlineMath>{`x \\to 0`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Trigonometric Functions">
        <p>
          As <InlineMath>{`x \\to 0`}</InlineMath>:
        </p>
        <MathBlock>{`\\sin x - x = o(x)`}</MathBlock>
        <p><strong>Proof:</strong></p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\sin x - x}{x} = \\lim_{x \\to 0} \\left(\\frac{\\sin x}{x} - 1\\right) = 1 - 1 = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: A Sharper Statement">
        <p>
          We can be more precise: as <InlineMath>{`x \\to 0`}</InlineMath>:
        </p>
        <MathBlock>{`\\sin x - x = o(x^2)`}</MathBlock>
        <p><strong>Proof:</strong></p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\sin x - x}{x^2} = \\lim_{x \\to 0} \\frac{\\cos x - 1}{2x} = \\lim_{x \\to 0} \\frac{-\\sin x}{2} = 0`}</MathBlock>
        <p>(using L'Hôpital's rule twice)</p>
      </Callout>

      <h2>Taylor's Formula with o-Notation</h2>

      <p>
        The o-notation provides an elegant way to express Taylor's formula:
      </p>

      <Callout type="theorem" title="Taylor's Formula (o-form)">
        <p>
          If <InlineMath>{`f`}</InlineMath> has <InlineMath>{`n`}</InlineMath> derivatives at <InlineMath>{`a`}</InlineMath>, then:
        </p>
        <MathBlock>{`f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots + \\frac{f^{(n)}(a)}{n!}(x-a)^n + o((x-a)^n)`}</MathBlock>
        <p>as <InlineMath>{`x \\to a`}</InlineMath>.</p>
      </Callout>

      <p>
        The term <InlineMath>{`o((x-a)^n)`}</InlineMath> captures the remainder—it says that the
        error goes to zero faster than <InlineMath>{`(x-a)^n`}</InlineMath>.
      </p>

      <Callout type="example" title="Example 5: Taylor Formula for e^x">
        <p>As <InlineMath>{`x \\to 0`}</InlineMath>:</p>
        <MathBlock>{`e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + o(x^3)`}</MathBlock>
        <p>
          This says the error in the cubic approximation is smaller than any constant
          multiple of <InlineMath>{`x^3`}</InlineMath> for <InlineMath>{`x`}</InlineMath> near 0.
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Taylor Formula for sin x">
        <p>As <InlineMath>{`x \\to 0`}</InlineMath>:</p>
        <MathBlock>{`\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^5)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 7: Taylor Formula for cos x">
        <p>As <InlineMath>{`x \\to 0`}</InlineMath>:</p>
        <MathBlock>{`\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)`}</MathBlock>
      </Callout>

      <h2>Algebraic Properties of o-Notation</h2>

      <Callout type="theorem" title="Rules for o-Notation">
        <p>As <InlineMath>{`x \\to a`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Constant multiple:</strong> <InlineMath>{`c \\cdot o(g(x)) = o(g(x))`}</InlineMath> for any constant <InlineMath>{`c`}</InlineMath>.
          </li>
          <li>
            <strong>Sum:</strong> <InlineMath>{`o(g(x)) + o(g(x)) = o(g(x))`}</InlineMath>.
          </li>
          <li>
            <strong>Product:</strong> <InlineMath>{`o(f(x)) \\cdot o(g(x)) = o(f(x)g(x))`}</InlineMath>.
          </li>
          <li>
            <strong>Product with function:</strong> <InlineMath>{`f(x) \\cdot o(g(x)) = o(f(x)g(x))`}</InlineMath>.
          </li>
          <li>
            <strong>Transitivity:</strong> If <InlineMath>{`f = o(g)`}</InlineMath> and <InlineMath>{`g = o(h)`}</InlineMath>, then <InlineMath>{`f = o(h)`}</InlineMath>.
          </li>
          <li>
            <strong>Absorption:</strong> <InlineMath>{`o(x^n) + o(x^m) = o(x^{\\min(n,m)})`}</InlineMath> as <InlineMath>{`x \\to 0`}</InlineMath>.
          </li>
        </ol>
      </Callout>

      <Callout type="example" title="Example 8: Using the Rules">
        <p>Simplify <InlineMath>{`x^2 + o(x^3) + o(x^2)`}</InlineMath> as <InlineMath>{`x \\to 0`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Since <InlineMath>{`o(x^3) = o(x^2)`}</InlineMath> (higher powers are absorbed), we have:
        </p>
        <MathBlock>{`x^2 + o(x^3) + o(x^2) = x^2 + o(x^2)`}</MathBlock>
      </Callout>

      <h2>Computing Limits Using Taylor Expansions</h2>

      <p>
        The o-notation makes limit calculations systematic. We expand each function,
        combine terms, and the limit becomes clear.
      </p>

      <Callout type="example" title="Example 9: A Classic Limit">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Using the Taylor expansion:</p>
        <MathBlock>{`\\sin x = x - \\frac{x^3}{6} + o(x^3)`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\sin x - x = -\\frac{x^3}{6} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\frac{\\sin x - x}{x^3} = \\frac{-\\frac{x^3}{6} + o(x^3)}{x^3} = -\\frac{1}{6} + o(1)`}</MathBlock>
        <p>
          As <InlineMath>{`x \\to 0`}</InlineMath>, the <InlineMath>{`o(1)`}</InlineMath> term vanishes:
        </p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3} = -\\frac{1}{6}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 10: Another Limit">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`e^x = 1 + x + \\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`e^x - 1 - x = \\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`\\frac{e^x - 1 - x}{x^2} = \\frac{1}{2} + o(1) \\to \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 11: Combining Multiple Expansions">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos x}{x \\sin x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Expand both numerator and denominator:</p>
        <MathBlock>{`\\cos x = 1 - \\frac{x^2}{2} + o(x^2) \\quad \\Rightarrow \\quad 1 - \\cos x = \\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <MathBlock>{`\\sin x = x + o(x) \\quad \\Rightarrow \\quad x \\sin x = x^2 + o(x^2)`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\frac{1 - \\cos x}{x \\sin x} = \\frac{\\frac{x^2}{2} + o(x^2)}{x^2 + o(x^2)} = \\frac{\\frac{1}{2} + o(1)}{1 + o(1)} \\to \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 12: A More Complex Limit">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>We need expansions to sufficient order:</p>
        <MathBlock>{`\\sin x = x - \\frac{x^3}{6} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\cos x = 1 - \\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <p>For <InlineMath>{`\\tan x = \\frac{\\sin x}{\\cos x}`}</InlineMath>, we use:</p>
        <MathBlock>{`\\frac{1}{\\cos x} = \\frac{1}{1 - \\frac{x^2}{2} + o(x^2)} = 1 + \\frac{x^2}{2} + o(x^2)`}</MathBlock>
        <p>
          (using <InlineMath>{`\\frac{1}{1-u} = 1 + u + o(u)`}</InlineMath> with <InlineMath>{`u = \\frac{x^2}{2} + o(x^2)`}</InlineMath>)
        </p>
        <MathBlock>{`\\tan x = \\sin x \\cdot \\frac{1}{\\cos x} = \\left(x - \\frac{x^3}{6} + o(x^3)\\right)\\left(1 + \\frac{x^2}{2} + o(x^2)\\right)`}</MathBlock>
        <MathBlock>{`= x + \\frac{x^3}{2} - \\frac{x^3}{6} + o(x^3) = x + \\frac{x^3}{3} + o(x^3)`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\tan x - \\sin x = \\left(x + \\frac{x^3}{3}\\right) - \\left(x - \\frac{x^3}{6}\\right) + o(x^3) = \\frac{x^3}{2} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3} = \\frac{1}{2}`}</MathBlock>
      </Callout>

      <h2>Big-O Notation (Preview)</h2>

      <Callout type="definition" title="Big-O Notation">
        <p>
          A related notation is <strong>big-O</strong>: we write <InlineMath>{`f(x) = O(g(x))`}</InlineMath>
          as <InlineMath>{`x \\to a`}</InlineMath> if there exist constants <InlineMath>{`M > 0`}</InlineMath>
          and <InlineMath>{`\\delta > 0`}</InlineMath> such that:
        </p>
        <MathBlock>{`|f(x)| \\leq M|g(x)| \\quad \\text{for } 0 < |x - a| < \\delta`}</MathBlock>
        <p>
          This means <InlineMath>{`f(x)`}</InlineMath> is <em>bounded</em> by a constant multiple
          of <InlineMath>{`g(x)`}</InlineMath>, rather than being negligible.
        </p>
      </Callout>

      <Callout type="info" title="Comparison: o vs O">
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`f = o(g)`}</InlineMath>: <InlineMath>{`f`}</InlineMath> grows <em>slower</em> than <InlineMath>{`g`}</InlineMath> (ratio → 0)</li>
          <li><InlineMath>{`f = O(g)`}</InlineMath>: <InlineMath>{`f`}</InlineMath> grows <em>no faster</em> than <InlineMath>{`g`}</InlineMath> (ratio bounded)</li>
        </ul>
        <p className="mt-2">
          For example: <InlineMath>{`x^2 = o(x)`}</InlineMath> but <InlineMath>{`2x = O(x)`}</InlineMath> as <InlineMath>{`x \\to 0`}</InlineMath>.
        </p>
      </Callout>

      <h2>Common Taylor Expansions with o-Notation</h2>

      <Callout type="theorem" title="Reference: Key Expansions (as x → 0)">
        <MathBlock>{`e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^5)`}</MathBlock>
        <MathBlock>{`\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)`}</MathBlock>
        <MathBlock>{`\\tan x = x + \\frac{x^3}{3} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)`}</MathBlock>
        <MathBlock>{`(1+x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2}x^2 + o(x^2)`}</MathBlock>
        <MathBlock>{`\\frac{1}{1-x} = 1 + x + x^2 + x^3 + o(x^3)`}</MathBlock>
        <MathBlock>{`\\arctan x = x - \\frac{x^3}{3} + o(x^3)`}</MathBlock>
        <MathBlock>{`\\arcsin x = x + \\frac{x^3}{6} + o(x^3)`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Definition:</strong> <InlineMath>{`f(x) = o(g(x))`}</InlineMath> means
          <InlineMath>{`\\lim \\frac{f(x)}{g(x)} = 0`}</InlineMath>.
        </li>
        <li>
          <strong>Intuition:</strong> <InlineMath>{`f`}</InlineMath> is negligible compared
          to <InlineMath>{`g`}</InlineMath>.
        </li>
        <li>
          <strong>Taylor's formula:</strong> <InlineMath>{`f(x) = T_n(x) + o((x-a)^n)`}</InlineMath>
          expresses that the remainder is smaller than <InlineMath>{`(x-a)^n`}</InlineMath>.
        </li>
        <li>
          <strong>Algebraic rules:</strong> The o-notation obeys useful rules for
          addition, multiplication, and absorption.
        </li>
        <li>
          <strong>Limit computation:</strong> Expand functions using Taylor series with
          o-notation, simplify, and read off the limit.
        </li>
        <li>
          <strong>Big-O:</strong> <InlineMath>{`f = O(g)`}</InlineMath> means <InlineMath>{`f`}</InlineMath>
          is bounded by a multiple of <InlineMath>{`g`}</InlineMath> (weaker than little-o).
        </li>
      </ul>
    </LessonLayout>
  );
}
