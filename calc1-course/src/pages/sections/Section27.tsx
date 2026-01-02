import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <p>
        The velocity problem from the previous section points the way to the introduction of
        the concept of <strong>derivative</strong>. We now give the formal definition and
        compute several important examples.
      </p>

      <h2>Definition of the Derivative</h2>
      <p>
        We begin with a function <InlineMath>{`f`}</InlineMath> defined at least on some open interval
        <InlineMath>{`(a, b)`}</InlineMath> on the <InlineMath>{`x`}</InlineMath>-axis. We choose a fixed point
        <InlineMath>{`x`}</InlineMath> in this interval and introduce the <strong>difference quotient</strong>:
      </p>

      <MathBlock>{`\\frac{f(x + h) - f(x)}{h}`}</MathBlock>

      <p>
        where the number <InlineMath>{`h`}</InlineMath>, which may be positive or negative (but not zero),
        is such that <InlineMath>{`x + h`}</InlineMath> also lies in <InlineMath>{`(a, b)`}</InlineMath>. The
        numerator measures the change in the function when <InlineMath>{`x`}</InlineMath> changes from
        <InlineMath>{`x`}</InlineMath> to <InlineMath>{`x + h`}</InlineMath>. The quotient itself is referred
        to as the <strong>average rate of change</strong> of <InlineMath>{`f`}</InlineMath> in the
        interval joining <InlineMath>{`x`}</InlineMath> to <InlineMath>{`x + h`}</InlineMath>.
      </p>

      <Callout type="definition" title="The Derivative">
        <p>
          The <strong>derivative</strong> <InlineMath>{`f'(x)`}</InlineMath> is defined by the equation
        </p>
        <MathBlock>{`f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h},`}</MathBlock>
        <p>
          provided the limit exists. The number <InlineMath>{`f'(x)`}</InlineMath> is also called the
          <strong> rate of change</strong> of <InlineMath>{`f`}</InlineMath> at <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <p>
        The limit must be the same whether <InlineMath>{`h`}</InlineMath> approaches zero through
        positive values or through negative values. By comparing this definition with the
        velocity formula from Section 26, we see that instantaneous velocity is simply an
        example of the derivative concept. <strong>Velocity is the rate of change of position
        with respect to time.</strong>
      </p>

      <h2>Differentiation and Higher Derivatives</h2>
      <p>
        The limit process which produces <InlineMath>{`f'(x)`}</InlineMath> from <InlineMath>{`f(x)`}</InlineMath>
        gives us a way of obtaining a new function <InlineMath>{`f'`}</InlineMath> from a given function
        <InlineMath>{`f`}</InlineMath>. The process is called <strong>differentiation</strong>, and
        <InlineMath>{`f'`}</InlineMath> is called the <strong>first derivative</strong> of
        <InlineMath>{`f`}</InlineMath>.
      </p>

      <Callout type="definition" title="Higher Derivatives">
        <p>
          If <InlineMath>{`f'`}</InlineMath> is defined on an open interval, we can try to compute its
          derivative, denoted by <InlineMath>{`f''`}</InlineMath> and called the <strong>second derivative</strong>
          of <InlineMath>{`f`}</InlineMath>. Similarly, the <strong>nth derivative</strong> of
          <InlineMath>{`f`}</InlineMath>, denoted by <InlineMath>{`f^{(n)}`}</InlineMath>, is defined to be the
          first derivative of <InlineMath>{`f^{(n-1)}`}</InlineMath>.
        </p>
        <p>
          We make the convention that <InlineMath>{`f^{(0)} = f`}</InlineMath>, that is, the zeroth
          derivative is the function itself.
        </p>
      </Callout>

      <p>
        For rectilinear motion, the first derivative of velocity (second derivative of position)
        is called <strong>acceleration</strong>. In our projectile example from Section 26,
        the acceleration is constant and equal to <InlineMath>{`-32`}</InlineMath> feet per second per second.
      </p>

      <h2>Examples of Derivatives</h2>

      <Callout type="example" title="Example 1: Derivative of a Constant Function">
        <p>
          Suppose <InlineMath>{`f`}</InlineMath> is a constant function, say <InlineMath>{`f(x) = c`}</InlineMath>
          for all <InlineMath>{`x`}</InlineMath>. The difference quotient is:
        </p>
        <MathBlock>{`\\frac{f(x + h) - f(x)}{h} = \\frac{c - c}{h} = 0.`}</MathBlock>
        <p>
          Since the quotient is 0 for all <InlineMath>{`h \\neq 0`}</InlineMath>, its limit is also 0.
          Therefore:
        </p>
        <MathBlock>{`\\boxed{f'(x) = 0 \\quad \\text{for every } x.}`}</MathBlock>
        <p>
          <strong>A constant function has a zero derivative everywhere.</strong>
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Derivative of a Linear Function">
        <p>
          Suppose <InlineMath>{`f`}</InlineMath> is a linear function, say <InlineMath>{`f(x) = mx + b`}</InlineMath>
          for all real <InlineMath>{`x`}</InlineMath>. If <InlineMath>{`h \\neq 0`}</InlineMath>, we have:
        </p>
        <MathBlock>{`\\frac{f(x + h) - f(x)}{h} = \\frac{m(x + h) + b - (mx + b)}{h} = \\frac{mh}{h} = m.`}</MathBlock>
        <p>
          Since the difference quotient does not change when <InlineMath>{`h`}</InlineMath> approaches 0:
        </p>
        <MathBlock>{`\\boxed{f'(x) = m \\quad \\text{for every } x.}`}</MathBlock>
        <p>
          <strong>The derivative of a linear function is a constant function</strong> (the slope).
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Derivative of a Power Function">
        <p>
          Consider <InlineMath>{`f(x) = x^n`}</InlineMath>, where <InlineMath>{`n`}</InlineMath> is a positive
          integer. Using the algebraic identity for the difference of nth powers:
        </p>
        <MathBlock>{`a^n - b^n = (a - b)\\sum_{k=0}^{n-1} a^k b^{n-1-k}`}</MathBlock>
        <p>
          with <InlineMath>{`a = x + h`}</InlineMath> and <InlineMath>{`b = x`}</InlineMath>, we get:
        </p>
        <MathBlock>{`\\frac{(x + h)^n - x^n}{h} = \\sum_{k=0}^{n-1} (x + h)^k x^{n-1-k}.`}</MathBlock>
        <p>
          There are <InlineMath>{`n`}</InlineMath> terms in the sum. As <InlineMath>{`h \\to 0`}</InlineMath>,
          each term approaches <InlineMath>{`x^{n-1}`}</InlineMath>, so the sum approaches
          <InlineMath>{`nx^{n-1}`}</InlineMath>. Therefore:
        </p>
        <MathBlock>{`\\boxed{f'(x) = nx^{n-1} \\quad \\text{for every } x.}`}</MathBlock>
        <p>
          This is the famous <strong>power rule</strong>.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Derivative of the Sine Function">
        <p>
          Let <InlineMath>{`s(x) = \\sin x`}</InlineMath>. The difference quotient is:
        </p>
        <MathBlock>{`\\frac{s(x + h) - s(x)}{h} = \\frac{\\sin(x + h) - \\sin x}{h}.`}</MathBlock>
        <p>
          Using the identity <InlineMath>{`\\sin y - \\sin x = 2\\sin\\frac{y-x}{2}\\cos\\frac{y+x}{2}`}</InlineMath>
          with <InlineMath>{`y = x + h`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{\\sin(x + h) - \\sin x}{h} = \\frac{\\sin(h/2)}{h/2} \\cdot \\cos\\left(x + \\frac{h}{2}\\right).`}</MathBlock>
        <p>
          As <InlineMath>{`h \\to 0`}</InlineMath>: the factor <InlineMath>{`\\cos(x + h/2) \\to \\cos x`}</InlineMath>
          by continuity, and <InlineMath>{`\\frac{\\sin(h/2)}{h/2} \\to 1`}</InlineMath> by our earlier
          limit formula. Therefore:
        </p>
        <MathBlock>{`\\boxed{s'(x) = \\cos x \\quad \\text{for every } x.}`}</MathBlock>
        <p>
          <strong>The derivative of sine is cosine.</strong>
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Derivative of the Cosine Function">
        <p>
          Let <InlineMath>{`c(x) = \\cos x`}</InlineMath>. Using the identity
          <InlineMath>{`\\cos y - \\cos x = -2\\sin\\frac{y-x}{2}\\sin\\frac{y+x}{2}`}</InlineMath>
          with <InlineMath>{`y = x + h`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{\\cos(x + h) - \\cos x}{h} = -\\frac{\\sin(h/2)}{h/2} \\cdot \\sin\\left(x + \\frac{h}{2}\\right).`}</MathBlock>
        <p>
          By continuity of sine and our limit formula, as <InlineMath>{`h \\to 0`}</InlineMath>:
        </p>
        <MathBlock>{`\\boxed{c'(x) = -\\sin x \\quad \\text{for every } x.}`}</MathBlock>
        <p>
          <strong>The derivative of cosine is minus sine.</strong>
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Derivative of the nth-Root Function">
        <p>
          If <InlineMath>{`n`}</InlineMath> is a positive integer, let <InlineMath>{`f(x) = x^{1/n}`}</InlineMath>
          for <InlineMath>{`x > 0`}</InlineMath>. Let <InlineMath>{`u = (x + h)^{1/n}`}</InlineMath> and
          <InlineMath>{`v = x^{1/n}`}</InlineMath>. Then <InlineMath>{`u^n = x + h`}</InlineMath> and
          <InlineMath>{`v^n = x`}</InlineMath>, so <InlineMath>{`h = u^n - v^n`}</InlineMath>, and:
        </p>
        <MathBlock>{`\\frac{f(x + h) - f(x)}{h} = \\frac{u - v}{u^n - v^n} = \\frac{1}{u^{n-1} + u^{n-2}v + \\cdots + uv^{n-2} + v^{n-1}}.`}</MathBlock>
        <p>
          As <InlineMath>{`h \\to 0`}</InlineMath>, we have <InlineMath>{`u \\to v`}</InlineMath> by continuity
          of the nth-root function. Each of the <InlineMath>{`n`}</InlineMath> terms in the denominator
          approaches <InlineMath>{`v^{n-1}`}</InlineMath>, so:
        </p>
        <MathBlock>{`\\boxed{f'(x) = \\frac{1}{n}x^{1/n - 1} \\quad \\text{for } x > 0.}`}</MathBlock>
        <p>
          This extends the power rule to rational exponents of the form <InlineMath>{`1/n`}</InlineMath>.
        </p>
      </Callout>

      <h2>Differentiability Implies Continuity</h2>
      <p>
        There is an important relationship between differentiability and continuity.
      </p>

      <Callout type="theorem" title="Differentiability Implies Continuity">
        <p>
          If a function <InlineMath>{`f`}</InlineMath> has a derivative at a point <InlineMath>{`x`}</InlineMath>,
          then it is also continuous at <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          We use the identity (valid for <InlineMath>{`h \\neq 0`}</InlineMath>):
        </p>
        <MathBlock>{`f(x + h) = f(x) + h \\cdot \\frac{f(x + h) - f(x)}{h}.`}</MathBlock>
        <p>
          If we let <InlineMath>{`h \\to 0`}</InlineMath>, the difference quotient on the right approaches
          <InlineMath>{`f'(x)`}</InlineMath>, and since this quotient is multiplied by a factor which
          tends to 0, the second term approaches <InlineMath>{`0 \\cdot f'(x) = 0`}</InlineMath>.
        </p>
        <p>
          This shows that <InlineMath>{`f(x + h) \\to f(x)`}</InlineMath> as <InlineMath>{`h \\to 0`}</InlineMath>,
          and hence <InlineMath>{`f`}</InlineMath> is continuous at <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <p>
        This result provides a new way of showing that functions are continuous. Every time
        we establish the existence of a derivative <InlineMath>{`f'(x)`}</InlineMath>, we also establish
        the continuity of <InlineMath>{`f`}</InlineMath> at <InlineMath>{`x`}</InlineMath>.
      </p>

      <h2>The Converse is False</h2>
      <p>
        It is important to note that <strong>the converse is not true</strong>. Continuity at
        <InlineMath>{`x`}</InlineMath> does not necessarily mean that the derivative
        <InlineMath>{`f'(x)`}</InlineMath> exists.
      </p>

      <Callout type="example" title="Counterexample: The Absolute Value Function">
        <p>
          When <InlineMath>{`f(x) = |x|`}</InlineMath>, the point <InlineMath>{`x = 0`}</InlineMath> is a point
          of continuity of <InlineMath>{`f`}</InlineMath> (since <InlineMath>{`f(x) \\to 0`}</InlineMath> as
          <InlineMath>{`x \\to 0`}</InlineMath>), but <strong>there is no derivative at 0</strong>.
        </p>
        <p>
          The difference quotient is:
        </p>
        <MathBlock>{`\\frac{f(0 + h) - f(0)}{h} = \\frac{|h|}{h} = \\begin{cases} +1 & \\text{if } h > 0 \\ -1 & \\text{if } h < 0 \\end{cases}`}</MathBlock>
        <p>
          Since the left-hand limit (−1) and right-hand limit (+1) are different, the limit
          does not exist. The graph of <InlineMath>{`f(x) = |x|`}</InlineMath> has a "corner" at the
          origin where no single tangent line can be drawn.
        </p>
      </Callout>

      <h2>Summary of Basic Derivatives</h2>
      <p>
        Here is a table of the derivatives we have computed:
      </p>

      <Callout type="info" title="Basic Derivative Formulas">
        <MathBlock>{`\\begin{aligned}
\\frac{d}{dx}(c) &= 0 && \\text{(constant)} \\[8pt]
\\frac{d}{dx}(mx + b) &= m && \\text{(linear function)} \\[8pt]
\\frac{d}{dx}(x^n) &= nx^{n-1} && \\text{(power rule, } n \\in \\mathbb{Z}^+\\text{)} \\[8pt]
\\frac{d}{dx}(x^{1/n}) &= \\frac{1}{n}x^{1/n - 1} && \\text{(root functions, } x > 0\\text{)} \\[8pt]
\\frac{d}{dx}(\\sin x) &= \\cos x \\[8pt]
\\frac{d}{dx}(\\cos x) &= -\\sin x
\\end{aligned}`}</MathBlock>
      </Callout>

      <h2>Key Takeaways</h2>
      <ul>
        <li>
          The derivative <InlineMath>{`f'(x)`}</InlineMath> is defined as the limit of the difference
          quotient as <InlineMath>{`h \\to 0`}</InlineMath>.
        </li>
        <li>
          The derivative represents the <strong>instantaneous rate of change</strong> of the
          function.
        </li>
        <li>
          <strong>Differentiability implies continuity</strong>, but not conversely.
        </li>
        <li>
          The power rule <InlineMath>{`(x^n)' = nx^{n-1}`}</InlineMath> is one of the most fundamental
          derivative formulas.
        </li>
        <li>
          The derivatives of sine and cosine are cosine and minus sine, respectively.
        </li>
      </ul>
    </LessonLayout>
  );
}
