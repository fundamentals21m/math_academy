import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <p>
        With the differentiation formulas developed thus far, we can find derivatives of
        functions that are finite sums of products or quotients of <InlineMath>{`\\sin x`}</InlineMath>,
        <InlineMath>{`\\cos x`}</InlineMath>, and <InlineMath>{`x^r`}</InlineMath> (for rational <InlineMath>{`r`}</InlineMath>).
        However, we have not yet learned to deal with something like <InlineMath>{`f(x) = \\sin(x^2)`}</InlineMath>
        without going back to the definition of derivative.
      </p>

      <p>
        In this section we present a theorem called the <strong>chain rule</strong> that enables
        us to differentiate <strong>composite functions</strong>. This substantially increases
        the number of functions we can differentiate.
      </p>

      <h2>Composite Functions</h2>
      <p>
        Recall that if <InlineMath>{`u`}</InlineMath> and <InlineMath>{`v`}</InlineMath> are functions such
        that the domain of <InlineMath>{`u`}</InlineMath> includes the range of <InlineMath>{`v`}</InlineMath>,
        we can define the composite function <InlineMath>{`f = u \\circ v`}</InlineMath> by:
      </p>
      <MathBlock>{`f(x) = u[v(x)]`}</MathBlock>
      <p>
        The chain rule tells us how to express the derivative of <InlineMath>{`f`}</InlineMath> in
        terms of the derivatives <InlineMath>{`u'`}</InlineMath> and <InlineMath>{`v'`}</InlineMath>.
      </p>

      <h2>The Chain Rule</h2>

      <Callout type="theorem" title="Theorem 4.2 (Chain Rule)">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be the composition of two functions <InlineMath>{`u`}</InlineMath>
          and <InlineMath>{`v`}</InlineMath>, say <InlineMath>{`f = u \\circ v`}</InlineMath>. Suppose that
          both derivatives <InlineMath>{`v'(x)`}</InlineMath> and <InlineMath>{`u'(y)`}</InlineMath> exist,
          where <InlineMath>{`y = v(x)`}</InlineMath>. Then the derivative <InlineMath>{`f'(x)`}</InlineMath>
          also exists and is given by:
        </p>
        <MathBlock>{`f'(x) = u'(y) \\cdot v'(x) = u'[v(x)] \\cdot v'(x)`}</MathBlock>
      </Callout>

      <p>
        In other words, to compute the derivative of <InlineMath>{`u \\circ v`}</InlineMath> at
        <InlineMath>{`x`}</InlineMath>:
      </p>
      <ol>
        <li>First compute the derivative of <InlineMath>{`u`}</InlineMath> at the point <InlineMath>{`y = v(x)`}</InlineMath></li>
        <li>Then multiply this by <InlineMath>{`v'(x)`}</InlineMath></li>
      </ol>

      <h2>Different Ways to Write the Chain Rule</h2>

      <Callout type="info" title="Equivalent Forms of the Chain Rule">
        <p><strong>Function notation:</strong></p>
        <MathBlock>{`(u \\circ v)' = (u' \\circ v) \\cdot v'`}</MathBlock>

        <p><strong>Evaluated at a point:</strong></p>
        <MathBlock>{`f'(x) = u'[v(x)] \\cdot v'(x)`}</MathBlock>

        <p><strong>Leibniz notation:</strong> If <InlineMath>{`y = v(x)`}</InlineMath> and <InlineMath>{`z = u(y)`}</InlineMath>, then:</p>
        <MathBlock>{`\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}`}</MathBlock>
      </Callout>

      <p>
        The Leibniz notation makes the chain rule appear as a simple algebraic identity—the
        <InlineMath>{`dy`}</InlineMath>'s seem to "cancel." This suggestive form is especially useful
        in applications.
      </p>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Derivative of sin(x²)">
        <p>
          Compute <InlineMath>{`f'(x)`}</InlineMath> where <InlineMath>{`f(x) = \\sin(x^2)`}</InlineMath>.
        </p>
        <p>
          <strong>Solution:</strong> The function <InlineMath>{`f`}</InlineMath> is a composition
          <InlineMath>{`f(x) = u[v(x)]`}</InlineMath> where:
        </p>
        <ul>
          <li><InlineMath>{`v(x) = x^2`}</InlineMath> (the "inside" function)</li>
          <li><InlineMath>{`u(y) = \\sin y`}</InlineMath> (the "outside" function)</li>
        </ul>
        <p>
          We have <InlineMath>{`v'(x) = 2x`}</InlineMath> and <InlineMath>{`u'(y) = \\cos y`}</InlineMath>,
          so <InlineMath>{`u'[v(x)] = \\cos(x^2)`}</InlineMath>. By the chain rule:
        </p>
        <MathBlock>{`f'(x) = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: The General Power Rule">
        <p>
          If <InlineMath>{`f(x) = [v(x)]^n`}</InlineMath> where <InlineMath>{`n`}</InlineMath> is a positive
          integer and <InlineMath>{`v'(x)`}</InlineMath> exists, compute <InlineMath>{`f'(x)`}</InlineMath>.
        </p>
        <p>
          <strong>Solution:</strong> Here <InlineMath>{`f(x) = u[v(x)]`}</InlineMath> where
          <InlineMath>{`u(y) = y^n`}</InlineMath>. Since <InlineMath>{`u'(y) = ny^{n-1}`}</InlineMath>,
          we have <InlineMath>{`u'[v(x)] = n[v(x)]^{n-1}`}</InlineMath>. The chain rule gives:
        </p>
        <MathBlock>{`f'(x) = n[v(x)]^{n-1} \\cdot v'(x)`}</MathBlock>
        <p>As an equation involving functions:</p>
        <MathBlock>{`\\boxed{(v^n)' = nv^{n-1}v'}`}</MathBlock>
        <p>
          This formula is also valid for <em>rational</em> powers if <InlineMath>{`v^n`}</InlineMath>
          and <InlineMath>{`v^{n-1}`}</InlineMath> are defined.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Nested Compositions">
        <p>
          Differentiate <InlineMath>{`f(x) = \\sqrt{1 + x^2}`}</InlineMath>.
        </p>
        <p>
          <strong>Solution:</strong> Write <InlineMath>{`f(x) = (1 + x^2)^{1/2}`}</InlineMath>.
          Using the general power rule with <InlineMath>{`v(x) = 1 + x^2`}</InlineMath> and
          <InlineMath>{`n = 1/2`}</InlineMath>:
        </p>
        <MathBlock>{`f'(x) = \\frac{1}{2}(1 + x^2)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{1 + x^2}}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Multiple Applications">
        <p>
          Differentiate <InlineMath>{`f(x) = \\sin(\\sin(\\sin x))`}</InlineMath>.
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
        The Leibniz form <InlineMath>{`\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}`}</InlineMath>
        has a powerful physical interpretation:
      </p>

      <Callout type="info" title="Physical Interpretation">
        <p>
          If <InlineMath>{`z`}</InlineMath> depends on <InlineMath>{`y`}</InlineMath> and <InlineMath>{`y`}</InlineMath>
          depends on <InlineMath>{`x`}</InlineMath>, then the <strong>rate of change of z with respect
          to x</strong> equals the product of:
        </p>
        <ul>
          <li>The rate of change of <InlineMath>{`z`}</InlineMath> with respect to <InlineMath>{`y`}</InlineMath></li>
          <li>The rate of change of <InlineMath>{`y`}</InlineMath> with respect to <InlineMath>{`x`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 5: Related Rates (Expanding Balloon)">
        <p>
          A gas is pumped into a spherical balloon at a constant rate of 50 cubic centimeters
          per second. How fast is the radius increasing when the radius is 5 cm?
        </p>
        <p>
          <strong>Solution:</strong> Let <InlineMath>{`r`}</InlineMath> = radius and <InlineMath>{`V`}</InlineMath>
          = volume at time <InlineMath>{`t`}</InlineMath>. We are given <InlineMath>{`dV/dt = 50`}</InlineMath>
          and want <InlineMath>{`dr/dt`}</InlineMath> when <InlineMath>{`r = 5`}</InlineMath>.
        </p>
        <p>The chain rule states:</p>
        <MathBlock>{`\\frac{dV}{dt} = \\frac{dV}{dr} \\cdot \\frac{dr}{dt}`}</MathBlock>
        <p>
          Since <InlineMath>{`V = \\frac{4}{3}\\pi r^3`}</InlineMath>, we have
          <InlineMath>{`\\frac{dV}{dr} = 4\\pi r^2`}</InlineMath>. Therefore:
        </p>
        <MathBlock>{`50 = 4\\pi r^2 \\cdot \\frac{dr}{dt}`}</MathBlock>
        <p>
          When <InlineMath>{`r = 5`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{dr}{dt} = \\frac{50}{4\\pi(25)} = \\frac{1}{2\\pi} \\text{ cm/sec}`}</MathBlock>
      </Callout>

      <h2>Proof of the Chain Rule</h2>

      <Callout type="info" title="Proof Sketch">
        <p>
          We assume <InlineMath>{`v`}</InlineMath> has a derivative at <InlineMath>{`x`}</InlineMath> and
          <InlineMath>{`u`}</InlineMath> has a derivative at <InlineMath>{`v(x)`}</InlineMath>. The difference
          quotient for <InlineMath>{`f`}</InlineMath> is:
        </p>
        <MathBlock>{`\\frac{f(x + h) - f(x)}{h} = \\frac{u[v(x + h)] - u[v(x)]}{h}`}</MathBlock>
        <p>
          Let <InlineMath>{`y = v(x)`}</InlineMath> and <InlineMath>{`k = v(x + h) - v(x)`}</InlineMath>.
          Then <InlineMath>{`v(x + h) = y + k`}</InlineMath> and:
        </p>
        <MathBlock>{`\\frac{f(x + h) - f(x)}{h} = \\frac{u(y + k) - u(y)}{h}`}</MathBlock>
        <p>
          If <InlineMath>{`k \\neq 0`}</InlineMath>, multiply and divide by <InlineMath>{`k`}</InlineMath>:
        </p>
        <MathBlock>{`= \\frac{u(y + k) - u(y)}{k} \\cdot \\frac{v(x + h) - v(x)}{h}`}</MathBlock>
        <p>
          As <InlineMath>{`h \\to 0`}</InlineMath>: <InlineMath>{`k \\to 0`}</InlineMath> (by continuity of
          <InlineMath>{`v`}</InlineMath>), the first factor approaches <InlineMath>{`u'(y)`}</InlineMath>,
          and the second approaches <InlineMath>{`v'(x)`}</InlineMath>. Thus
          <InlineMath>{`f'(x) = u'(y) \\cdot v'(x)`}</InlineMath>.
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
          In each case, <InlineMath>{`v = v(x)`}</InlineMath> is a differentiable function of
          <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <h2>A Helpful Mnemonic</h2>
      <p>
        Think of the chain rule as: <strong>"derivative of the outside times derivative
        of the inside."</strong>
      </p>
      <p>
        For <InlineMath>{`f(x) = u(v(x))`}</InlineMath>:
      </p>
      <ul>
        <li>The "outside" function is <InlineMath>{`u`}</InlineMath></li>
        <li>The "inside" function is <InlineMath>{`v`}</InlineMath></li>
        <li><InlineMath>{`f'(x) = \\underbrace{u'(v(x))}_{\\text{outside}'} \\cdot \\underbrace{v'(x)}_{\\text{inside}'}`}</InlineMath></li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li>
          The <strong>chain rule</strong> states: <InlineMath>{`(u \\circ v)'(x) = u'[v(x)] \\cdot v'(x)`}</InlineMath>
        </li>
        <li>
          In Leibniz notation: <InlineMath>{`\\dfrac{dz}{dx} = \\dfrac{dz}{dy} \\cdot \\dfrac{dy}{dx}`}</InlineMath>
        </li>
        <li>
          The <strong>general power rule</strong> <InlineMath>{`(v^n)' = nv^{n-1}v'`}</InlineMath>
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
