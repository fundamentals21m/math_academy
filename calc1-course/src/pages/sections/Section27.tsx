import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        We begin with a function <MathInline>{`f`}</MathInline> defined at least on some open interval
        <MathInline>{`(a, b)`}</MathInline> on the <MathInline>{`x`}</MathInline>-axis. We choose a fixed point
        <MathInline>{`x`}</MathInline> in this interval and introduce the <strong>difference quotient</strong>:
      </p>

      <MathBlock>{`\\frac{f(x + h) - f(x)}{h}`}</MathBlock>

      <p>
        where the number <MathInline>{`h`}</MathInline>, which may be positive or negative (but not zero),
        is such that <MathInline>{`x + h`}</MathInline> also lies in <MathInline>{`(a, b)`}</MathInline>. The
        numerator measures the change in the function when <MathInline>{`x`}</MathInline> changes from
        <MathInline>{`x`}</MathInline> to <MathInline>{`x + h`}</MathInline>. The quotient itself is referred
        to as the <strong>average rate of change</strong> of <MathInline>{`f`}</MathInline> in the
        interval joining <MathInline>{`x`}</MathInline> to <MathInline>{`x + h`}</MathInline>.
      </p>

      <Callout type="definition" title="The Derivative">
        <p>
          The <strong>derivative</strong> <MathInline>{`f'(x)`}</MathInline> is defined by the equation
        </p>
        <MathBlock>{`f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h},`}</MathBlock>
        <p>
          provided the limit exists. The number <MathInline>{`f'(x)`}</MathInline> is also called the
          <strong> rate of change</strong> of <MathInline>{`f`}</MathInline> at <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <p>
        The limit must be the same whether <MathInline>{`h`}</MathInline> approaches zero through
        positive values or through negative values. By comparing this definition with the
        velocity formula from Section 26, we see that instantaneous velocity is simply an
        example of the derivative concept. <strong>Velocity is the rate of change of position
        with respect to time.</strong>
      </p>

      <h2>Differentiation and Higher Derivatives</h2>
      <p>
        The limit process which produces <MathInline>{`f'(x)`}</MathInline> from <MathInline>{`f(x)`}</MathInline>
        gives us a way of obtaining a new function <MathInline>{`f'`}</MathInline> from a given function
        <MathInline>{`f`}</MathInline>. The process is called <strong>differentiation</strong>, and
        <MathInline>{`f'`}</MathInline> is called the <strong>first derivative</strong> of
        <MathInline>{`f`}</MathInline>.
      </p>

      <Callout type="definition" title="Higher Derivatives">
        <p>
          If <MathInline>{`f'`}</MathInline> is defined on an open interval, we can try to compute its
          derivative, denoted by <MathInline>{`f''`}</MathInline> and called the <strong>second derivative</strong>
          of <MathInline>{`f`}</MathInline>. Similarly, the <strong>nth derivative</strong> of
          <MathInline>{`f`}</MathInline>, denoted by <MathInline>{`f^{(n)}`}</MathInline>, is defined to be the
          first derivative of <MathInline>{`f^{(n-1)}`}</MathInline>.
        </p>
        <p>
          We make the convention that <MathInline>{`f^{(0)} = f`}</MathInline>, that is, the zeroth
          derivative is the function itself.
        </p>
      </Callout>

      <p>
        For rectilinear motion, the first derivative of velocity (second derivative of position)
        is called <strong>acceleration</strong>. In our projectile example from Section 26,
        the acceleration is constant and equal to <MathInline>{`-32`}</MathInline> feet per second per second.
      </p>

      <h2>Examples of Derivatives</h2>

      <Callout type="example" title="Example 1: Derivative of a Constant Function">
        <p>
          Suppose <MathInline>{`f`}</MathInline> is a constant function, say <MathInline>{`f(x) = c`}</MathInline>
          for all <MathInline>{`x`}</MathInline>. The difference quotient is:
        </p>
        <MathBlock>{`\\frac{f(x + h) - f(x)}{h} = \\frac{c - c}{h} = 0.`}</MathBlock>
        <p>
          Since the quotient is 0 for all <MathInline>{`h \\neq 0`}</MathInline>, its limit is also 0.
          Therefore:
        </p>
        <MathBlock>{`\\boxed{f'(x) = 0 \\quad \\text{for every } x.}`}</MathBlock>
        <p>
          <strong>A constant function has a zero derivative everywhere.</strong>
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Derivative of a Linear Function">
        <p>
          Suppose <MathInline>{`f`}</MathInline> is a linear function, say <MathInline>{`f(x) = mx + b`}</MathInline>
          for all real <MathInline>{`x`}</MathInline>. If <MathInline>{`h \\neq 0`}</MathInline>, we have:
        </p>
        <MathBlock>{`\\frac{f(x + h) - f(x)}{h} = \\frac{m(x + h) + b - (mx + b)}{h} = \\frac{mh}{h} = m.`}</MathBlock>
        <p>
          Since the difference quotient does not change when <MathInline>{`h`}</MathInline> approaches 0:
        </p>
        <MathBlock>{`\\boxed{f'(x) = m \\quad \\text{for every } x.}`}</MathBlock>
        <p>
          <strong>The derivative of a linear function is a constant function</strong> (the slope).
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Derivative of a Power Function">
        <p>
          Consider <MathInline>{`f(x) = x^n`}</MathInline>, where <MathInline>{`n`}</MathInline> is a positive
          integer. Using the algebraic identity for the difference of nth powers:
        </p>
        <MathBlock>{`a^n - b^n = (a - b)\\sum_{k=0}^{n-1} a^k b^{n-1-k}`}</MathBlock>
        <p>
          with <MathInline>{`a = x + h`}</MathInline> and <MathInline>{`b = x`}</MathInline>, we get:
        </p>
        <MathBlock>{`\\frac{(x + h)^n - x^n}{h} = \\sum_{k=0}^{n-1} (x + h)^k x^{n-1-k}.`}</MathBlock>
        <p>
          There are <MathInline>{`n`}</MathInline> terms in the sum. As <MathInline>{`h \\to 0`}</MathInline>,
          each term approaches <MathInline>{`x^{n-1}`}</MathInline>, so the sum approaches
          <MathInline>{`nx^{n-1}`}</MathInline>. Therefore:
        </p>
        <MathBlock>{`\\boxed{f'(x) = nx^{n-1} \\quad \\text{for every } x.}`}</MathBlock>
        <p>
          This is the famous <strong>power rule</strong>.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Derivative of the Sine Function">
        <p>
          Let <MathInline>{`s(x) = \\sin x`}</MathInline>. The difference quotient is:
        </p>
        <MathBlock>{`\\frac{s(x + h) - s(x)}{h} = \\frac{\\sin(x + h) - \\sin x}{h}.`}</MathBlock>
        <p>
          Using the identity <MathInline>{`\\sin y - \\sin x = 2\\sin\\frac{y-x}{2}\\cos\\frac{y+x}{2}`}</MathInline>
          with <MathInline>{`y = x + h`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{\\sin(x + h) - \\sin x}{h} = \\frac{\\sin(h/2)}{h/2} \\cdot \\cos\\left(x + \\frac{h}{2}\\right).`}</MathBlock>
        <p>
          As <MathInline>{`h \\to 0`}</MathInline>: the factor <MathInline>{`\\cos(x + h/2) \\to \\cos x`}</MathInline>
          by continuity, and <MathInline>{`\\frac{\\sin(h/2)}{h/2} \\to 1`}</MathInline> by our earlier
          limit formula. Therefore:
        </p>
        <MathBlock>{`\\boxed{s'(x) = \\cos x \\quad \\text{for every } x.}`}</MathBlock>
        <p>
          <strong>The derivative of sine is cosine.</strong>
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Derivative of the Cosine Function">
        <p>
          Let <MathInline>{`c(x) = \\cos x`}</MathInline>. Using the identity
          <MathInline>{`\\cos y - \\cos x = -2\\sin\\frac{y-x}{2}\\sin\\frac{y+x}{2}`}</MathInline>
          with <MathInline>{`y = x + h`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{\\cos(x + h) - \\cos x}{h} = -\\frac{\\sin(h/2)}{h/2} \\cdot \\sin\\left(x + \\frac{h}{2}\\right).`}</MathBlock>
        <p>
          By continuity of sine and our limit formula, as <MathInline>{`h \\to 0`}</MathInline>:
        </p>
        <MathBlock>{`\\boxed{c'(x) = -\\sin x \\quad \\text{for every } x.}`}</MathBlock>
        <p>
          <strong>The derivative of cosine is minus sine.</strong>
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Derivative of the nth-Root Function">
        <p>
          If <MathInline>{`n`}</MathInline> is a positive integer, let <MathInline>{`f(x) = x^{1/n}`}</MathInline>
          for <MathInline>{`x > 0`}</MathInline>. Let <MathInline>{`u = (x + h)^{1/n}`}</MathInline> and
          <MathInline>{`v = x^{1/n}`}</MathInline>. Then <MathInline>{`u^n = x + h`}</MathInline> and
          <MathInline>{`v^n = x`}</MathInline>, so <MathInline>{`h = u^n - v^n`}</MathInline>, and:
        </p>
        <MathBlock>{`\\frac{f(x + h) - f(x)}{h} = \\frac{u - v}{u^n - v^n} = \\frac{1}{u^{n-1} + u^{n-2}v + \\cdots + uv^{n-2} + v^{n-1}}.`}</MathBlock>
        <p>
          As <MathInline>{`h \\to 0`}</MathInline>, we have <MathInline>{`u \\to v`}</MathInline> by continuity
          of the nth-root function. Each of the <MathInline>{`n`}</MathInline> terms in the denominator
          approaches <MathInline>{`v^{n-1}`}</MathInline>, so:
        </p>
        <MathBlock>{`\\boxed{f'(x) = \\frac{1}{n}x^{1/n - 1} \\quad \\text{for } x > 0.}`}</MathBlock>
        <p>
          This extends the power rule to rational exponents of the form <MathInline>{`1/n`}</MathInline>.
        </p>
      </Callout>

      <h2>Differentiability Implies Continuity</h2>
      <p>
        There is an important relationship between differentiability and continuity.
      </p>

      <Callout type="theorem" title="Differentiability Implies Continuity">
        <p>
          If a function <MathInline>{`f`}</MathInline> has a derivative at a point <MathInline>{`x`}</MathInline>,
          then it is also continuous at <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          We use the identity (valid for <MathInline>{`h \\neq 0`}</MathInline>):
        </p>
        <MathBlock>{`f(x + h) = f(x) + h \\cdot \\frac{f(x + h) - f(x)}{h}.`}</MathBlock>
        <p>
          If we let <MathInline>{`h \\to 0`}</MathInline>, the difference quotient on the right approaches
          <MathInline>{`f'(x)`}</MathInline>, and since this quotient is multiplied by a factor which
          tends to 0, the second term approaches <MathInline>{`0 \\cdot f'(x) = 0`}</MathInline>.
        </p>
        <p>
          This shows that <MathInline>{`f(x + h) \\to f(x)`}</MathInline> as <MathInline>{`h \\to 0`}</MathInline>,
          and hence <MathInline>{`f`}</MathInline> is continuous at <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <p>
        This result provides a new way of showing that functions are continuous. Every time
        we establish the existence of a derivative <MathInline>{`f'(x)`}</MathInline>, we also establish
        the continuity of <MathInline>{`f`}</MathInline> at <MathInline>{`x`}</MathInline>.
      </p>

      <h2>The Converse is False</h2>
      <p>
        It is important to note that <strong>the converse is not true</strong>. Continuity at
        <MathInline>{`x`}</MathInline> does not necessarily mean that the derivative
        <MathInline>{`f'(x)`}</MathInline> exists.
      </p>

      <Callout type="example" title="Counterexample: The Absolute Value Function">
        <p>
          When <MathInline>{`f(x) = |x|`}</MathInline>, the point <MathInline>{`x = 0`}</MathInline> is a point
          of continuity of <MathInline>{`f`}</MathInline> (since <MathInline>{`f(x) \\to 0`}</MathInline> as
          <MathInline>{`x \\to 0`}</MathInline>), but <strong>there is no derivative at 0</strong>.
        </p>
        <p>
          The difference quotient is:
        </p>
        <MathBlock>{`\\frac{f(0 + h) - f(0)}{h} = \\frac{|h|}{h} = \\begin{cases} +1 & \\text{if } h > 0 \\ -1 & \\text{if } h < 0 \\end{cases}`}</MathBlock>
        <p>
          Since the left-hand limit (−1) and right-hand limit (+1) are different, the limit
          does not exist. The graph of <MathInline>{`f(x) = |x|`}</MathInline> has a "corner" at the
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
          The derivative <MathInline>{`f'(x)`}</MathInline> is defined as the limit of the difference
          quotient as <MathInline>{`h \\to 0`}</MathInline>.
        </li>
        <li>
          The derivative represents the <strong>instantaneous rate of change</strong> of the
          function.
        </li>
        <li>
          <strong>Differentiability implies continuity</strong>, but not conversely.
        </li>
        <li>
          The power rule <MathInline>{`(x^n)' = nx^{n-1}`}</MathInline> is one of the most fundamental
          derivative formulas.
        </li>
        <li>
          The derivatives of sine and cosine are cosine and minus sine, respectively.
        </li>
      </ul>
    </LessonLayout>
  );
}
