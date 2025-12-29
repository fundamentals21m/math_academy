import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <p>
        With the differentiation formulas developed thus far, we can find derivatives of
        functions that are finite sums of products or quotients of <MathInline>{`\\sin x`}</MathInline>,
        <MathInline>{`\\cos x`}</MathInline>, and <MathInline>{`x^r`}</MathInline> (for rational <MathInline>{`r`}</MathInline>).
        However, we have not yet learned to deal with something like <MathInline>{`f(x) = \\sin(x^2)`}</MathInline>
        without going back to the definition of derivative.
      </p>

      <p>
        In this section we present a theorem called the <strong>chain rule</strong> that enables
        us to differentiate <strong>composite functions</strong>. This substantially increases
        the number of functions we can differentiate.
      </p>

      <h2>Composite Functions</h2>
      <p>
        Recall that if <MathInline>{`u`}</MathInline> and <MathInline>{`v`}</MathInline> are functions such
        that the domain of <MathInline>{`u`}</MathInline> includes the range of <MathInline>{`v`}</MathInline>,
        we can define the composite function <MathInline>{`f = u \\circ v`}</MathInline> by:
      </p>
      <MathBlock>{`f(x) = u[v(x)]`}</MathBlock>
      <p>
        The chain rule tells us how to express the derivative of <MathInline>{`f`}</MathInline> in
        terms of the derivatives <MathInline>{`u'`}</MathInline> and <MathInline>{`v'`}</MathInline>.
      </p>

      <h2>The Chain Rule</h2>

      <Callout type="theorem" title="Theorem 4.2 (Chain Rule)">
        <p>
          Let <MathInline>{`f`}</MathInline> be the composition of two functions <MathInline>{`u`}</MathInline>
          and <MathInline>{`v`}</MathInline>, say <MathInline>{`f = u \\circ v`}</MathInline>. Suppose that
          both derivatives <MathInline>{`v'(x)`}</MathInline> and <MathInline>{`u'(y)`}</MathInline> exist,
          where <MathInline>{`y = v(x)`}</MathInline>. Then the derivative <MathInline>{`f'(x)`}</MathInline>
          also exists and is given by:
        </p>
        <MathBlock>{`f'(x) = u'(y) \\cdot v'(x) = u'[v(x)] \\cdot v'(x)`}</MathBlock>
      </Callout>

      <p>
        In other words, to compute the derivative of <MathInline>{`u \\circ v`}</MathInline> at
        <MathInline>{`x`}</MathInline>:
      </p>
      <ol>
        <li>First compute the derivative of <MathInline>{`u`}</MathInline> at the point <MathInline>{`y = v(x)`}</MathInline></li>
        <li>Then multiply this by <MathInline>{`v'(x)`}</MathInline></li>
      </ol>

      <h2>Different Ways to Write the Chain Rule</h2>

      <Callout type="info" title="Equivalent Forms of the Chain Rule">
        <p><strong>Function notation:</strong></p>
        <MathBlock>{`(u \\circ v)' = (u' \\circ v) \\cdot v'`}</MathBlock>

        <p><strong>Evaluated at a point:</strong></p>
        <MathBlock>{`f'(x) = u'[v(x)] \\cdot v'(x)`}</MathBlock>

        <p><strong>Leibniz notation:</strong> If <MathInline>{`y = v(x)`}</MathInline> and <MathInline>{`z = u(y)`}</MathInline>, then:</p>
        <MathBlock>{`\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}`}</MathBlock>
      </Callout>

      <p>
        The Leibniz notation makes the chain rule appear as a simple algebraic identity—the
        <MathInline>{`dy`}</MathInline>'s seem to "cancel." This suggestive form is especially useful
        in applications.
      </p>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Derivative of sin(x²)">
        <p>
          Compute <MathInline>{`f'(x)`}</MathInline> where <MathInline>{`f(x) = \\sin(x^2)`}</MathInline>.
        </p>
        <p>
          <strong>Solution:</strong> The function <MathInline>{`f`}</MathInline> is a composition
          <MathInline>{`f(x) = u[v(x)]`}</MathInline> where:
        </p>
        <ul>
          <li><MathInline>{`v(x) = x^2`}</MathInline> (the "inside" function)</li>
          <li><MathInline>{`u(y) = \\sin y`}</MathInline> (the "outside" function)</li>
        </ul>
        <p>
          We have <MathInline>{`v'(x) = 2x`}</MathInline> and <MathInline>{`u'(y) = \\cos y`}</MathInline>,
          so <MathInline>{`u'[v(x)] = \\cos(x^2)`}</MathInline>. By the chain rule:
        </p>
        <MathBlock>{`f'(x) = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: The General Power Rule">
        <p>
          If <MathInline>{`f(x) = [v(x)]^n`}</MathInline> where <MathInline>{`n`}</MathInline> is a positive
          integer and <MathInline>{`v'(x)`}</MathInline> exists, compute <MathInline>{`f'(x)`}</MathInline>.
        </p>
        <p>
          <strong>Solution:</strong> Here <MathInline>{`f(x) = u[v(x)]`}</MathInline> where
          <MathInline>{`u(y) = y^n`}</MathInline>. Since <MathInline>{`u'(y) = ny^{n-1}`}</MathInline>,
          we have <MathInline>{`u'[v(x)] = n[v(x)]^{n-1}`}</MathInline>. The chain rule gives:
        </p>
        <MathBlock>{`f'(x) = n[v(x)]^{n-1} \\cdot v'(x)`}</MathBlock>
        <p>As an equation involving functions:</p>
        <MathBlock>{`\\boxed{(v^n)' = nv^{n-1}v'}`}</MathBlock>
        <p>
          This formula is also valid for <em>rational</em> powers if <MathInline>{`v^n`}</MathInline>
          and <MathInline>{`v^{n-1}`}</MathInline> are defined.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Nested Compositions">
        <p>
          Differentiate <MathInline>{`f(x) = \\sqrt{1 + x^2}`}</MathInline>.
        </p>
        <p>
          <strong>Solution:</strong> Write <MathInline>{`f(x) = (1 + x^2)^{1/2}`}</MathInline>.
          Using the general power rule with <MathInline>{`v(x) = 1 + x^2`}</MathInline> and
          <MathInline>{`n = 1/2`}</MathInline>:
        </p>
        <MathBlock>{`f'(x) = \\frac{1}{2}(1 + x^2)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{1 + x^2}}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Multiple Applications">
        <p>
          Differentiate <MathInline>{`f(x) = \\sin(\\sin(\\sin x))`}</MathInline>.
        </p>
        <p>
          <strong>Solution:</strong> Apply the chain rule from outside to inside:
        </p>
        <MathBlock>{`\\begin{aligned}
f'(x) &= \\cos(\\sin(\\sin x)) \\cdot \\frac{d}{dx}[\\sin(\\sin x)] \\
&= \\cos(\\sin(\\sin x)) \\cdot \\cos(\\sin x) \\cdot \\frac{d}{dx}[\\sin x] \\
&= \\cos(\\sin(\\sin x)) \\cdot \\cos(\\sin x) \\cdot \\cos x
\\end{aligned}`}</MathBlock>
      </Callout>

      <h2>The Chain Rule in Leibniz Notation</h2>
      <p>
        The Leibniz form <MathInline>{`\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}`}</MathInline>
        has a powerful physical interpretation:
      </p>

      <Callout type="info" title="Physical Interpretation">
        <p>
          If <MathInline>{`z`}</MathInline> depends on <MathInline>{`y`}</MathInline> and <MathInline>{`y`}</MathInline>
          depends on <MathInline>{`x`}</MathInline>, then the <strong>rate of change of z with respect
          to x</strong> equals the product of:
        </p>
        <ul>
          <li>The rate of change of <MathInline>{`z`}</MathInline> with respect to <MathInline>{`y`}</MathInline></li>
          <li>The rate of change of <MathInline>{`y`}</MathInline> with respect to <MathInline>{`x`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 5: Related Rates (Expanding Balloon)">
        <p>
          A gas is pumped into a spherical balloon at a constant rate of 50 cubic centimeters
          per second. How fast is the radius increasing when the radius is 5 cm?
        </p>
        <p>
          <strong>Solution:</strong> Let <MathInline>{`r`}</MathInline> = radius and <MathInline>{`V`}</MathInline>
          = volume at time <MathInline>{`t`}</MathInline>. We are given <MathInline>{`dV/dt = 50`}</MathInline>
          and want <MathInline>{`dr/dt`}</MathInline> when <MathInline>{`r = 5`}</MathInline>.
        </p>
        <p>The chain rule states:</p>
        <MathBlock>{`\\frac{dV}{dt} = \\frac{dV}{dr} \\cdot \\frac{dr}{dt}`}</MathBlock>
        <p>
          Since <MathInline>{`V = \\frac{4}{3}\\pi r^3`}</MathInline>, we have
          <MathInline>{`\\frac{dV}{dr} = 4\\pi r^2`}</MathInline>. Therefore:
        </p>
        <MathBlock>{`50 = 4\\pi r^2 \\cdot \\frac{dr}{dt}`}</MathBlock>
        <p>
          When <MathInline>{`r = 5`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{dr}{dt} = \\frac{50}{4\\pi(25)} = \\frac{1}{2\\pi} \\text{ cm/sec}`}</MathBlock>
      </Callout>

      <h2>Proof of the Chain Rule</h2>

      <Callout type="info" title="Proof Sketch">
        <p>
          We assume <MathInline>{`v`}</MathInline> has a derivative at <MathInline>{`x`}</MathInline> and
          <MathInline>{`u`}</MathInline> has a derivative at <MathInline>{`v(x)`}</MathInline>. The difference
          quotient for <MathInline>{`f`}</MathInline> is:
        </p>
        <MathBlock>{`\\frac{f(x + h) - f(x)}{h} = \\frac{u[v(x + h)] - u[v(x)]}{h}`}</MathBlock>
        <p>
          Let <MathInline>{`y = v(x)`}</MathInline> and <MathInline>{`k = v(x + h) - v(x)`}</MathInline>.
          Then <MathInline>{`v(x + h) = y + k`}</MathInline> and:
        </p>
        <MathBlock>{`\\frac{f(x + h) - f(x)}{h} = \\frac{u(y + k) - u(y)}{h}`}</MathBlock>
        <p>
          If <MathInline>{`k \\neq 0`}</MathInline>, multiply and divide by <MathInline>{`k`}</MathInline>:
        </p>
        <MathBlock>{`= \\frac{u(y + k) - u(y)}{k} \\cdot \\frac{v(x + h) - v(x)}{h}`}</MathBlock>
        <p>
          As <MathInline>{`h \\to 0`}</MathInline>: <MathInline>{`k \\to 0`}</MathInline> (by continuity of
          <MathInline>{`v`}</MathInline>), the first factor approaches <MathInline>{`u'(y)`}</MathInline>,
          and the second approaches <MathInline>{`v'(x)`}</MathInline>. Thus
          <MathInline>{`f'(x) = u'(y) \\cdot v'(x)`}</MathInline>.
        </p>
      </Callout>

      <h2>Common Patterns</h2>

      <Callout type="info" title="Frequently Used Chain Rule Forms">
        <MathBlock>{`\\begin{aligned}
\\frac{d}{dx}[\\sin(v)] &= \\cos(v) \\cdot v' \\[6pt]
\\frac{d}{dx}[\\cos(v)] &= -\\sin(v) \\cdot v' \\[6pt]
\\frac{d}{dx}[v^n] &= nv^{n-1} \\cdot v' \\[6pt]
\\frac{d}{dx}[\\sqrt{v}] &= \\frac{v'}{2\\sqrt{v}} \\[6pt]
\\frac{d}{dx}\\left[\\frac{1}{v}\\right] &= -\\frac{v'}{v^2}
\\end{aligned}`}</MathBlock>
        <p>
          In each case, <MathInline>{`v = v(x)`}</MathInline> is a differentiable function of
          <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <h2>A Helpful Mnemonic</h2>
      <p>
        Think of the chain rule as: <strong>"derivative of the outside times derivative
        of the inside."</strong>
      </p>
      <p>
        For <MathInline>{`f(x) = u(v(x))`}</MathInline>:
      </p>
      <ul>
        <li>The "outside" function is <MathInline>{`u`}</MathInline></li>
        <li>The "inside" function is <MathInline>{`v`}</MathInline></li>
        <li><MathInline>{`f'(x) = \\underbrace{u'(v(x))}_{\\text{outside}'} \\cdot \\underbrace{v'(x)}_{\\text{inside}'}`}</MathInline></li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>
          The <strong>chain rule</strong> states: <MathInline>{`(u \\circ v)'(x) = u'[v(x)] \\cdot v'(x)`}</MathInline>
        </li>
        <li>
          In Leibniz notation: <MathInline>{`\\dfrac{dz}{dx} = \\dfrac{dz}{dy} \\cdot \\dfrac{dy}{dx}`}</MathInline>
        </li>
        <li>
          The <strong>general power rule</strong> <MathInline>{`(v^n)' = nv^{n-1}v'`}</MathInline>
          is a direct consequence of the chain rule.
        </li>
        <li>
          The chain rule is essential for <strong>related rates</strong> problems, where
          quantities are connected and we know the rate of change of one quantity and want
          to find another.
        </li>
        <li>
          Remember: "derivative of outside times derivative of inside."
        </li>
      </ul>
    </LessonLayout>
  );
}
