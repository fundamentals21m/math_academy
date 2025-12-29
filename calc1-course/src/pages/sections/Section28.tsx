import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <p>
        Just as the limit theorems of Section 14 tell us how to compute limits of the sum,
        difference, product, and quotient of two functions, the next theorem provides us with
        a corresponding set of rules for computing <strong>derivatives</strong>.
      </p>

      <h2>The Main Theorem</h2>

      <Callout type="theorem" title="Theorem 4.1 (Algebra of Derivatives)">
        <p>
          Let <MathInline>{`f`}</MathInline> and <MathInline>{`g`}</MathInline> be two functions defined on
          a common interval. At each point where <MathInline>{`f`}</MathInline> and <MathInline>{`g`}</MathInline>
          have a derivative, the same is true of the sum <MathInline>{`f + g`}</MathInline>, the
          difference <MathInline>{`f - g`}</MathInline>, the product <MathInline>{`f \\cdot g`}</MathInline>,
          and the quotient <MathInline>{`f/g`}</MathInline>. (For <MathInline>{`f/g`}</MathInline> we need
          the extra proviso that <MathInline>{`g`}</MathInline> is not zero at the point in question.)
        </p>
        <p>The derivatives of these functions are given by the following formulas:</p>
        <MathBlock>{`\\begin{aligned}
\\text{(i)} \\quad (f + g)' &= f' + g' && \\text{(Sum Rule)} \\[8pt]
\\text{(ii)} \\quad (f - g)' &= f' - g' && \\text{(Difference Rule)} \\[8pt]
\\text{(iii)} \\quad (f \\cdot g)' &= f \\cdot g' + g \\cdot f' && \\text{(Product Rule)} \\[8pt]
\\text{(iv)} \\quad \\left(\\frac{f}{g}\\right)' &= \\frac{g \\cdot f' - f \\cdot g'}{g^2} && \\text{(Quotient Rule)}
\\end{aligned}`}</MathBlock>
        <p>
          The quotient rule applies at points <MathInline>{`x`}</MathInline> where <MathInline>{`g(x) \\neq 0`}</MathInline>.
        </p>
      </Callout>

      <h2>The Product Rule in Detail</h2>
      <p>
        The product rule is often stated informally as: "the derivative of a product equals
        the first times the derivative of the second, plus the second times the derivative
        of the first." In Leibniz notation:
      </p>
      <MathBlock>{`\\frac{d}{dx}[f(x) \\cdot g(x)] = f(x) \\cdot g'(x) + g(x) \\cdot f'(x)`}</MathBlock>

      <Callout type="info" title="Common Mistake">
        <p>
          Note that <MathInline>{`(f \\cdot g)' \\neq f' \\cdot g'`}</MathInline>. The derivative of a
          product is <strong>not</strong> simply the product of the derivatives. This is one
          of the most common errors in calculus.
        </p>
      </Callout>

      <h2>The Quotient Rule in Detail</h2>
      <p>
        The quotient rule can be remembered with the mnemonic: "low d-high minus high d-low,
        over low squared." In Leibniz notation:
      </p>
      <MathBlock>{`\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{g(x) \\cdot f'(x) - f(x) \\cdot g'(x)}{[g(x)]^2}`}</MathBlock>

      <h2>The Linearity Property</h2>
      <p>
        A special case of the product rule occurs when one of the two functions is constant,
        say <MathInline>{`g(x) = c`}</MathInline> for all <MathInline>{`x`}</MathInline>. Since the derivative
        of a constant is zero, the product rule gives:
      </p>
      <MathBlock>{`(c \\cdot f)' = c \\cdot f' + f \\cdot 0 = c \\cdot f'`}</MathBlock>

      <Callout type="definition" title="Linearity of Differentiation">
        <p>
          Combining the constant multiple rule with the sum rule, we obtain the
          <strong> linearity property</strong> of the derivative: for every pair of constants
          <MathInline>{`c_1`}</MathInline> and <MathInline>{`c_2`}</MathInline>,
        </p>
        <MathBlock>{`(c_1 f + c_2 g)' = c_1 f' + c_2 g'.`}</MathBlock>
        <p>
          This extends to arbitrary finite sums:
        </p>
        <MathBlock>{`\\left(\\sum_{i=1}^{n} c_i \\cdot f_i\\right)' = \\sum_{i=1}^{n} c_i \\cdot f_i',`}</MathBlock>
        <p>
          where <MathInline>{`c_1, \\ldots, c_n`}</MathInline> are constants and <MathInline>{`f_1, \\ldots, f_n`}</MathInline>
          are functions with derivatives <MathInline>{`f_1', \\ldots, f_n'`}</MathInline>.
        </p>
      </Callout>

      <p>
        The linearity property is analogous to the linearity property of the integral. It tells
        us that differentiation "distributes" over linear combinations.
      </p>

      <h2>Proofs of the Derivative Rules</h2>

      <Callout type="info" title="Proof of the Sum Rule">
        <p>
          Let <MathInline>{`x`}</MathInline> be a point where both derivatives <MathInline>{`f'(x)`}</MathInline>
          and <MathInline>{`g'(x)`}</MathInline> exist. The difference quotient for <MathInline>{`f + g`}</MathInline> is:
        </p>
        <MathBlock>{`\\frac{[f(x + h) + g(x + h)] - [f(x) + g(x)]}{h} = \\frac{f(x + h) - f(x)}{h} + \\frac{g(x + h) - g(x)}{h}.`}</MathBlock>
        <p>
          When <MathInline>{`h \\to 0`}</MathInline>, the first quotient on the right approaches
          <MathInline>{`f'(x)`}</MathInline>, the second approaches <MathInline>{`g'(x)`}</MathInline>, and
          hence the sum approaches <MathInline>{`f'(x) + g'(x)`}</MathInline>.
        </p>
        <p>
          The proof of the difference rule is similar.
        </p>
      </Callout>

      <Callout type="info" title="Proof of the Product Rule">
        <p>
          The difference quotient for the product <MathInline>{`f \\cdot g`}</MathInline> is:
        </p>
        <MathBlock>{`\\frac{f(x + h)g(x + h) - f(x)g(x)}{h}.`}</MathBlock>
        <p>
          To study this quotient as <MathInline>{`h \\to 0`}</MathInline>, we add and subtract in the
          numerator a term which enables us to write it as a sum of two terms. Adding and
          subtracting <MathInline>{`g(x)f(x + h)`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{f(x + h)g(x + h) - f(x)g(x)}{h} = g(x) \\cdot \\frac{f(x + h) - f(x)}{h} + f(x + h) \\cdot \\frac{g(x + h) - g(x)}{h}.`}</MathBlock>
        <p>
          When <MathInline>{`h \\to 0`}</MathInline>:
        </p>
        <ul>
          <li>The first term on the right approaches <MathInline>{`g(x) \\cdot f'(x)`}</MathInline></li>
          <li>Since <MathInline>{`f`}</MathInline> is continuous at <MathInline>{`x`}</MathInline>, we have
              <MathInline>{`f(x + h) \\to f(x)`}</MathInline>, so the second term approaches
              <MathInline>{`f(x) \\cdot g'(x)`}</MathInline></li>
        </ul>
        <p>
          Therefore <MathInline>{`(f \\cdot g)'(x) = g(x) \\cdot f'(x) + f(x) \\cdot g'(x)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof of the Quotient Rule">
        <p>
          A special case of the quotient rule occurs when <MathInline>{`f(x) = 1`}</MathInline> for
          all <MathInline>{`x`}</MathInline>. Since <MathInline>{`f'(x) = 0`}</MathInline>, the quotient rule
          reduces to the <strong>reciprocal rule</strong>:
        </p>
        <MathBlock>{`\\left(\\frac{1}{g}\\right)' = -\\frac{g'}{g^2}, \\quad \\text{provided } g(x) \\neq 0.`}</MathBlock>
        <p>
          We can deduce the general quotient rule from this special case by writing
          <MathInline>{`f/g`}</MathInline> as a product <MathInline>{`f \\cdot (1/g)`}</MathInline> and using
          the product rule:
        </p>
        <MathBlock>{`\\left(f \\cdot \\frac{1}{g}\\right)' = \\frac{1}{g} \\cdot f' + f \\cdot \\left(\\frac{1}{g}\\right)' = \\frac{f'}{g} - \\frac{f \\cdot g'}{g^2} = \\frac{g \\cdot f' - f \\cdot g'}{g^2}.`}</MathBlock>
        <p>
          It remains to prove the reciprocal rule. The difference quotient for <MathInline>{`1/g`}</MathInline> is:
        </p>
        <MathBlock>{`\\frac{[1/g(x + h)] - [1/g(x)]}{h} = -\\frac{g(x + h) - g(x)}{h} \\cdot \\frac{1}{g(x)} \\cdot \\frac{1}{g(x + h)}.`}</MathBlock>
        <p>
          As <MathInline>{`h \\to 0`}</MathInline>: the difference quotient approaches <MathInline>{`g'(x)`}</MathInline>,
          and by continuity of <MathInline>{`g`}</MathInline>, we have <MathInline>{`g(x + h) \\to g(x)`}</MathInline>.
          Therefore the limit is <MathInline>{`-g'(x)/[g(x)]^2`}</MathInline>.
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Derivative of a Polynomial">
        <p>
          Find the derivative of <MathInline>{`f(x) = 3x^4 - 5x^2 + 7x - 2`}</MathInline>.
        </p>
        <p>
          Using linearity and the power rule:
        </p>
        <MathBlock>{`f'(x) = 3 \\cdot 4x^3 - 5 \\cdot 2x + 7 \\cdot 1 - 0 = 12x^3 - 10x + 7.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Product Rule Application">
        <p>
          Find the derivative of <MathInline>{`f(x) = x^2 \\sin x`}</MathInline>.
        </p>
        <p>
          Using the product rule with <MathInline>{`u = x^2`}</MathInline> and <MathInline>{`v = \\sin x`}</MathInline>:
        </p>
        <MathBlock>{`f'(x) = x^2 \\cdot \\cos x + \\sin x \\cdot 2x = x^2 \\cos x + 2x \\sin x.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Quotient Rule Application">
        <p>
          Find the derivative of <MathInline>{`f(x) = \\dfrac{x^2}{1 + x}`}</MathInline> for <MathInline>{`x \\neq -1`}</MathInline>.
        </p>
        <p>
          Using the quotient rule with <MathInline>{`u = x^2`}</MathInline> and <MathInline>{`v = 1 + x`}</MathInline>:
        </p>
        <MathBlock>{`f'(x) = \\frac{(1 + x) \\cdot 2x - x^2 \\cdot 1}{(1 + x)^2} = \\frac{2x + 2x^2 - x^2}{(1 + x)^2} = \\frac{x^2 + 2x}{(1 + x)^2} = \\frac{x(x + 2)}{(1 + x)^2}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Derivative of Tangent">
        <p>
          Find the derivative of <MathInline>{`\\tan x = \\dfrac{\\sin x}{\\cos x}`}</MathInline>.
        </p>
        <p>
          Using the quotient rule:
        </p>
        <MathBlock>{`\\frac{d}{dx}(\\tan x) = \\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x.`}</MathBlock>
      </Callout>

      <h2>Summary of Differentiation Rules</h2>

      <Callout type="info" title="Table of Derivative Rules">
        <MathBlock>{`\\begin{aligned}
\\frac{d}{dx}(c) &= 0 && \\text{(constant)} \\[6pt]
\\frac{d}{dx}(x^n) &= nx^{n-1} && \\text{(power rule)} \\[6pt]
\\frac{d}{dx}[cf(x)] &= c \\cdot f'(x) && \\text{(constant multiple)} \\[6pt]
\\frac{d}{dx}[f(x) + g(x)] &= f'(x) + g'(x) && \\text{(sum rule)} \\[6pt]
\\frac{d}{dx}[f(x) - g(x)] &= f'(x) - g'(x) && \\text{(difference rule)} \\[6pt]
\\frac{d}{dx}[f(x) \\cdot g(x)] &= f(x) \\cdot g'(x) + g(x) \\cdot f'(x) && \\text{(product rule)} \\[6pt]
\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] &= \\frac{g(x) \\cdot f'(x) - f(x) \\cdot g'(x)}{[g(x)]^2} && \\text{(quotient rule)}
\\end{aligned}`}</MathBlock>
      </Callout>

      <h2>Key Takeaways</h2>
      <ul>
        <li>
          The derivative of a <strong>sum</strong> (or difference) is the sum (or difference)
          of the derivatives.
        </li>
        <li>
          The <strong>product rule</strong> states that <MathInline>{`(fg)' = fg' + gf'`}</MathInline>.
          The derivative of a product is <em>not</em> the product of derivatives.
        </li>
        <li>
          The <strong>quotient rule</strong> states that <MathInline>{`(f/g)' = (gf' - fg')/g^2`}</MathInline>.
        </li>
        <li>
          Differentiation is a <strong>linear operation</strong>: it preserves scalar multiplication
          and distributes over sums.
        </li>
        <li>
          These rules, combined with the basic derivatives from Section 27, allow us to
          differentiate any polynomial and many rational functions.
        </li>
      </ul>
    </LessonLayout>
  );
}
