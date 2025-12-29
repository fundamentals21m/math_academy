import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <p>
        We come now to the remarkable connection that exists between integration and
        differentiation. The relationship between these two processes is somewhat analogous
        to that which holds between "squaring" and "taking the square root." If we square
        a positive number and then take the positive square root of the result, we get the
        original number back again.
      </p>

      <p>
        Similarly, if we operate on a continuous function <MathInline>{`f`}</MathInline> by
        integration, we get a new function (an <strong>indefinite integral</strong> of
        <MathInline>{`f`}</MathInline>) which, when differentiated, leads back to the original
        function <MathInline>{`f`}</MathInline>.
      </p>

      <h2>The Indefinite Integral</h2>

      <Callout type="definition" title="Indefinite Integral">
        <p>
          Let <MathInline>{`f`}</MathInline> be integrable on <MathInline>{`[a, b]`}</MathInline>. For
          a fixed point <MathInline>{`c`}</MathInline> with <MathInline>{`a \\leq c \\leq b`}</MathInline>,
          define a new function <MathInline>{`A`}</MathInline> by:
        </p>
        <MathBlock>{`A(x) = \\int_c^x f(t) \\, dt \\quad \\text{for } a \\leq x \\leq b.`}</MathBlock>
        <p>
          This function <MathInline>{`A`}</MathInline> is called an <strong>indefinite integral</strong>
          of <MathInline>{`f`}</MathInline>. It represents the "accumulated area" under the curve
          from <MathInline>{`c`}</MathInline> to <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Motivating Example">
        <p>
          If <MathInline>{`f(x) = x^2`}</MathInline>, then an indefinite integral of
          <MathInline>{`f`}</MathInline> is:
        </p>
        <MathBlock>{`A(x) = \\int_c^x t^2 \\, dt = \\frac{x^3}{3} - \\frac{c^3}{3}`}</MathBlock>
        <p>Differentiating, we find:</p>
        <MathBlock>{`A'(x) = x^2 = f(x)`}</MathBlock>
        <p>
          Differentiating the indefinite integral gives us back the original function!
        </p>
      </Callout>

      <h2>The First Fundamental Theorem</h2>

      <Callout type="theorem" title="Theorem 5.1 (First Fundamental Theorem of Calculus)">
        <p>
          Let <MathInline>{`f`}</MathInline> be a function that is integrable on
          <MathInline>{`[a, x]`}</MathInline> for each <MathInline>{`x`}</MathInline> in
          <MathInline>{`[a, b]`}</MathInline>. Let <MathInline>{`c`}</MathInline> be such that
          <MathInline>{`a \\leq c \\leq b`}</MathInline> and define a new function
          <MathInline>{`A`}</MathInline> as follows:
        </p>
        <MathBlock>{`A(x) = \\int_c^x f(t) \\, dt \\quad \\text{if } a \\leq x \\leq b.`}</MathBlock>
        <p>
          Then the derivative <MathInline>{`A'(x)`}</MathInline> exists at each point
          <MathInline>{`x`}</MathInline> in the open interval <MathInline>{`(a, b)`}</MathInline> where
          <MathInline>{`f`}</MathInline> is <strong>continuous</strong>, and for such
          <MathInline>{`x`}</MathInline> we have:
        </p>
        <MathBlock>{`A'(x) = f(x).`}</MathBlock>
      </Callout>

      <Callout type="info" title="What the Theorem Says">
        <p>In words, the First Fundamental Theorem states:</p>
        <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
          "The derivative of an indefinite integral equals the integrand."
        </p>
        <p>Or equivalently:</p>
        <MathBlock>{`\\frac{d}{dx} \\int_c^x f(t) \\, dt = f(x)`}</MathBlock>
        <p>
          This is the key connection: <strong>differentiation undoes integration</strong>
          (at points where <MathInline>{`f`}</MathInline> is continuous).
        </p>
      </Callout>

      <h2>Geometric Motivation</h2>
      <p>
        To understand why the theorem is true, consider the geometric meaning of the
        difference quotient.
      </p>

      <Callout type="info" title="Geometric Argument">
        <p>
          Consider the graph of <MathInline>{`f`}</MathInline> over <MathInline>{`[a, b]`}</MathInline>.
          For <MathInline>{`h > 0`}</MathInline>:
        </p>
        <MathBlock>{`\\int_x^{x+h} f(t) \\, dt = \\int_c^{x+h} f(t) \\, dt - \\int_c^x f(t) \\, dt = A(x+h) - A(x)`}</MathBlock>
        <p>
          If <MathInline>{`f`}</MathInline> is continuous on <MathInline>{`[x, x+h]`}</MathInline>,
          by the mean-value theorem for integrals:
        </p>
        <MathBlock>{`A(x+h) - A(x) = h \\cdot f(z), \\quad \\text{where } x \\leq z \\leq x+h`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\frac{A(x+h) - A(x)}{h} = f(z)`}</MathBlock>
        <p>
          Since <MathInline>{`x \\leq z \\leq x+h`}</MathInline>, as <MathInline>{`h \\to 0`}</MathInline>,
          we have <MathInline>{`z \\to x`}</MathInline>, and by continuity of <MathInline>{`f`}</MathInline>:
        </p>
        <MathBlock>{`f(z) \\to f(x)`}</MathBlock>
        <p>
          Therefore <MathInline>{`A'(x) = f(x)`}</MathInline>.
        </p>
      </Callout>

      <h2>Analytic Proof</h2>

      <Callout type="info" title="Rigorous Proof">
        <p>
          Let <MathInline>{`x`}</MathInline> be a point where <MathInline>{`f`}</MathInline> is continuous.
          The difference quotient is:
        </p>
        <MathBlock>{`\\frac{A(x+h) - A(x)}{h}`}</MathBlock>
        <p>The numerator can be written as:</p>
        <MathBlock>{`A(x+h) - A(x) = \\int_c^{x+h} f(t) \\, dt - \\int_c^x f(t) \\, dt = \\int_x^{x+h} f(t) \\, dt`}</MathBlock>
        <p>
          Writing <MathInline>{`f(t) = f(x) + [f(t) - f(x)]`}</MathInline> in this integral:
        </p>
        <MathBlock>{`A(x+h) - A(x) = \\int_x^{x+h} f(x) \\, dt + \\int_x^{x+h} [f(t) - f(x)] \\, dt = hf(x) + \\int_x^{x+h} [f(t) - f(x)] \\, dt`}</MathBlock>
        <p>Dividing by <MathInline>{`h`}</MathInline>:</p>
        <MathBlock>{`\\frac{A(x+h) - A(x)}{h} = f(x) + \\frac{1}{h} \\int_x^{x+h} [f(t) - f(x)] \\, dt`}</MathBlock>
        <p>
          By continuity of <MathInline>{`f`}</MathInline> at <MathInline>{`x`}</MathInline>, for any
          <MathInline>{`\\epsilon > 0`}</MathInline> there exists <MathInline>{`\\delta > 0`}</MathInline>
          such that <MathInline>{`|f(t) - f(x)| < \\epsilon`}</MathInline> whenever
          <MathInline>{`|t - x| < \\delta`}</MathInline>. This makes the second term arbitrarily
          small as <MathInline>{`h \\to 0`}</MathInline>, proving <MathInline>{`A'(x) = f(x)`}</MathInline>.
        </p>
      </Callout>

      <h2>Important Observations</h2>

      <Callout type="info" title="The Role of Continuity">
        <p>
          The theorem requires <MathInline>{`f`}</MathInline> to be <strong>continuous</strong>
          at <MathInline>{`x`}</MathInline> for <MathInline>{`A'(x)`}</MathInline> to exist and equal
          <MathInline>{`f(x)`}</MathInline>.
        </p>
        <p>
          At points where <MathInline>{`f`}</MathInline> has a jump discontinuity, the
          indefinite integral <MathInline>{`A`}</MathInline> is still continuous (integrals
          smooth out discontinuities), but <MathInline>{`A`}</MathInline> may not be
          differentiable there.
        </p>
      </Callout>

      <Callout type="info" title="Independence of c">
        <p>
          The choice of the constant <MathInline>{`c`}</MathInline> does not affect the
          derivative <MathInline>{`A'(x)`}</MathInline>. Different choices of <MathInline>{`c`}</MathInline>
          give indefinite integrals that differ by a constant:
        </p>
        <MathBlock>{`\\int_{c_1}^x f(t) \\, dt - \\int_{c_2}^x f(t) \\, dt = \\int_{c_1}^{c_2} f(t) \\, dt = \\text{constant}`}</MathBlock>
        <p>
          Since adding a constant doesn't change the derivative, all indefinite integrals
          of <MathInline>{`f`}</MathInline> have the same derivative (namely, <MathInline>{`f`}</MathInline>).
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Basic Application">
        <p>
          Find <MathInline>{`F'(x)`}</MathInline> where <MathInline>{`F(x) = \\int_0^x \\cos t \\, dt`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          By the First Fundamental Theorem, since <MathInline>{`\\cos t`}</MathInline> is
          continuous everywhere:
        </p>
        <MathBlock>{`F'(x) = \\cos x`}</MathBlock>
        <p>
          <em>Verification:</em> We can compute <MathInline>{`F(x) = \\sin x - \\sin 0 = \\sin x`}</MathInline>,
          and indeed <MathInline>{`(\\sin x)' = \\cos x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Variable in the Lower Limit">
        <p>
          Find <MathInline>{`G'(x)`}</MathInline> where <MathInline>{`G(x) = \\int_x^1 t^2 \\, dt`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>First, rewrite using the property of integrals:</p>
        <MathBlock>{`G(x) = \\int_x^1 t^2 \\, dt = -\\int_1^x t^2 \\, dt`}</MathBlock>
        <p>By the First Fundamental Theorem:</p>
        <MathBlock>{`G'(x) = -x^2`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Chain Rule Application">
        <p>
          Find <MathInline>{`H'(x)`}</MathInline> where <MathInline>{`H(x) = \\int_0^{x^2} \\sin t \\, dt`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = x^2`}</MathInline> and <MathInline>{`F(u) = \\int_0^u \\sin t \\, dt`}</MathInline>.
          Then <MathInline>{`H(x) = F(x^2)`}</MathInline>.
        </p>
        <p>By the chain rule:</p>
        <MathBlock>{`H'(x) = F'(x^2) \\cdot \\frac{d}{dx}(x^2) = \\sin(x^2) \\cdot 2x = 2x\\sin(x^2)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Both Limits Variable">
        <p>
          Find <MathInline>{`\\frac{d}{dx} \\int_x^{x^2} e^{-t^2} dt`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Split using an intermediate constant (say, 0):</p>
        <MathBlock>{`\\int_x^{x^2} e^{-t^2} dt = \\int_0^{x^2} e^{-t^2} dt - \\int_0^x e^{-t^2} dt`}</MathBlock>
        <p>Differentiating each part:</p>
        <MathBlock>{`\\frac{d}{dx}\\int_0^{x^2} e^{-t^2} dt = e^{-(x^2)^2} \\cdot 2x = 2x e^{-x^4}`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx}\\int_0^x e^{-t^2} dt = e^{-x^2}`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\frac{d}{dx} \\int_x^{x^2} e^{-t^2} dt = 2x e^{-x^4} - e^{-x^2}`}</MathBlock>
      </Callout>

      <h2>General Formula with Chain Rule</h2>

      <Callout type="info" title="Leibniz Integral Rule (Special Case)">
        <p>
          If <MathInline>{`a(x)`}</MathInline> and <MathInline>{`b(x)`}</MathInline> are differentiable
          functions and <MathInline>{`f`}</MathInline> is continuous, then:
        </p>
        <MathBlock>{`\\frac{d}{dx} \\int_{a(x)}^{b(x)} f(t) \\, dt = f(b(x)) \\cdot b'(x) - f(a(x)) \\cdot a'(x)`}</MathBlock>
        <p>
          This combines the First Fundamental Theorem with the chain rule.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          The <strong>indefinite integral</strong> <MathInline>{`A(x) = \\int_c^x f(t) \\, dt`}</MathInline>
          represents accumulated area from <MathInline>{`c`}</MathInline> to <MathInline>{`x`}</MathInline>.
        </li>
        <li>
          <strong>First Fundamental Theorem:</strong> If <MathInline>{`f`}</MathInline> is continuous
          at <MathInline>{`x`}</MathInline>, then <MathInline>{`A'(x) = f(x)`}</MathInline>.
        </li>
        <li>
          In Leibniz notation: <MathInline>{`\\dfrac{d}{dx} \\int_c^x f(t) \\, dt = f(x)`}</MathInline>
        </li>
        <li>
          This theorem shows that <strong>differentiation undoes integration</strong>.
        </li>
        <li>
          The choice of the lower limit <MathInline>{`c`}</MathInline> affects
          <MathInline>{`A(x)`}</MathInline> by an additive constant, but does not affect
          <MathInline>{`A'(x)`}</MathInline>.
        </li>
        <li>
          When limits involve functions of <MathInline>{`x`}</MathInline>, use the
          <strong> chain rule</strong> in combination with the theorem.
        </li>
      </ul>
    </LessonLayout>
  );
}
