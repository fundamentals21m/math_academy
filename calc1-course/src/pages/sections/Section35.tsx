import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

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
        Similarly, if we operate on a continuous function <InlineMath>{`f`}</InlineMath> by
        integration, we get a new function (an <strong>indefinite integral</strong> of
        <InlineMath>{`f`}</InlineMath>) which, when differentiated, leads back to the original
        function <InlineMath>{`f`}</InlineMath>.
      </p>

      <h2>The Indefinite Integral</h2>

      <Callout type="definition" title="Indefinite Integral">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be integrable on <InlineMath>{`[a, b]`}</InlineMath>. For
          a fixed point <InlineMath>{`c`}</InlineMath> with <InlineMath>{`a \\leq c \\leq b`}</InlineMath>,
          define a new function <InlineMath>{`A`}</InlineMath> by:
        </p>
        <MathBlock>{`A(x) = \\int_c^x f(t) \\, dt \\quad \\text{for } a \\leq x \\leq b.`}</MathBlock>
        <p>
          This function <InlineMath>{`A`}</InlineMath> is called an <strong>indefinite integral</strong>
          of <InlineMath>{`f`}</InlineMath>. It represents the "accumulated area" under the curve
          from <InlineMath>{`c`}</InlineMath> to <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Motivating Example">
        <p>
          If <InlineMath>{`f(x) = x^2`}</InlineMath>, then an indefinite integral of
          <InlineMath>{`f`}</InlineMath> is:
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
          Let <InlineMath>{`f`}</InlineMath> be a function that is integrable on
          <InlineMath>{`[a, x]`}</InlineMath> for each <InlineMath>{`x`}</InlineMath> in
          <InlineMath>{`[a, b]`}</InlineMath>. Let <InlineMath>{`c`}</InlineMath> be such that
          <InlineMath>{`a \\leq c \\leq b`}</InlineMath> and define a new function
          <InlineMath>{`A`}</InlineMath> as follows:
        </p>
        <MathBlock>{`A(x) = \\int_c^x f(t) \\, dt \\quad \\text{if } a \\leq x \\leq b.`}</MathBlock>
        <p>
          Then the derivative <InlineMath>{`A'(x)`}</InlineMath> exists at each point
          <InlineMath>{`x`}</InlineMath> in the open interval <InlineMath>{`(a, b)`}</InlineMath> where
          <InlineMath>{`f`}</InlineMath> is <strong>continuous</strong>, and for such
          <InlineMath>{`x`}</InlineMath> we have:
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
          (at points where <InlineMath>{`f`}</InlineMath> is continuous).
        </p>
      </Callout>

      <h2>Geometric Motivation</h2>
      <p>
        To understand why the theorem is true, consider the geometric meaning of the
        difference quotient.
      </p>

      <Callout type="info" title="Geometric Argument">
        <p>
          Consider the graph of <InlineMath>{`f`}</InlineMath> over <InlineMath>{`[a, b]`}</InlineMath>.
          For <InlineMath>{`h > 0`}</InlineMath>:
        </p>
        <MathBlock>{`\\int_x^{x+h} f(t) \\, dt = \\int_c^{x+h} f(t) \\, dt - \\int_c^x f(t) \\, dt = A(x+h) - A(x)`}</MathBlock>
        <p>
          If <InlineMath>{`f`}</InlineMath> is continuous on <InlineMath>{`[x, x+h]`}</InlineMath>,
          by the mean-value theorem for integrals:
        </p>
        <MathBlock>{`A(x+h) - A(x) = h \\cdot f(z), \\quad \\text{where } x \\leq z \\leq x+h`}</MathBlock>
        <p>Therefore:</p>
        <MathBlock>{`\\frac{A(x+h) - A(x)}{h} = f(z)`}</MathBlock>
        <p>
          Since <InlineMath>{`x \\leq z \\leq x+h`}</InlineMath>, as <InlineMath>{`h \\to 0`}</InlineMath>,
          we have <InlineMath>{`z \\to x`}</InlineMath>, and by continuity of <InlineMath>{`f`}</InlineMath>:
        </p>
        <MathBlock>{`f(z) \\to f(x)`}</MathBlock>
        <p>
          Therefore <InlineMath>{`A'(x) = f(x)`}</InlineMath>.
        </p>
      </Callout>

      <h2>Analytic Proof</h2>

      <Callout type="info" title="Rigorous Proof">
        <p>
          Let <InlineMath>{`x`}</InlineMath> be a point where <InlineMath>{`f`}</InlineMath> is continuous.
          The difference quotient is:
        </p>
        <MathBlock>{`\\frac{A(x+h) - A(x)}{h}`}</MathBlock>
        <p>The numerator can be written as:</p>
        <MathBlock>{`A(x+h) - A(x) = \\int_c^{x+h} f(t) \\, dt - \\int_c^x f(t) \\, dt = \\int_x^{x+h} f(t) \\, dt`}</MathBlock>
        <p>
          Writing <InlineMath>{`f(t) = f(x) + [f(t) - f(x)]`}</InlineMath> in this integral:
        </p>
        <MathBlock>{`A(x+h) - A(x) = \\int_x^{x+h} f(x) \\, dt + \\int_x^{x+h} [f(t) - f(x)] \\, dt = hf(x) + \\int_x^{x+h} [f(t) - f(x)] \\, dt`}</MathBlock>
        <p>Dividing by <InlineMath>{`h`}</InlineMath>:</p>
        <MathBlock>{`\\frac{A(x+h) - A(x)}{h} = f(x) + \\frac{1}{h} \\int_x^{x+h} [f(t) - f(x)] \\, dt`}</MathBlock>
        <p>
          By continuity of <InlineMath>{`f`}</InlineMath> at <InlineMath>{`x`}</InlineMath>, for any
          <InlineMath>{`\\epsilon > 0`}</InlineMath> there exists <InlineMath>{`\\delta > 0`}</InlineMath>
          such that <InlineMath>{`|f(t) - f(x)| < \\epsilon`}</InlineMath> whenever
          <InlineMath>{`|t - x| < \\delta`}</InlineMath>. This makes the second term arbitrarily
          small as <InlineMath>{`h \\to 0`}</InlineMath>, proving <InlineMath>{`A'(x) = f(x)`}</InlineMath>.
        </p>
      </Callout>

      <h2>Important Observations</h2>

      <Callout type="info" title="The Role of Continuity">
        <p>
          The theorem requires <InlineMath>{`f`}</InlineMath> to be <strong>continuous</strong>
          at <InlineMath>{`x`}</InlineMath> for <InlineMath>{`A'(x)`}</InlineMath> to exist and equal
          <InlineMath>{`f(x)`}</InlineMath>.
        </p>
        <p>
          At points where <InlineMath>{`f`}</InlineMath> has a jump discontinuity, the
          indefinite integral <InlineMath>{`A`}</InlineMath> is still continuous (integrals
          smooth out discontinuities), but <InlineMath>{`A`}</InlineMath> may not be
          differentiable there.
        </p>
      </Callout>

      <Callout type="info" title="Independence of c">
        <p>
          The choice of the constant <InlineMath>{`c`}</InlineMath> does not affect the
          derivative <InlineMath>{`A'(x)`}</InlineMath>. Different choices of <InlineMath>{`c`}</InlineMath>
          give indefinite integrals that differ by a constant:
        </p>
        <MathBlock>{`\\int_{c_1}^x f(t) \\, dt - \\int_{c_2}^x f(t) \\, dt = \\int_{c_1}^{c_2} f(t) \\, dt = \\text{constant}`}</MathBlock>
        <p>
          Since adding a constant doesn't change the derivative, all indefinite integrals
          of <InlineMath>{`f`}</InlineMath> have the same derivative (namely, <InlineMath>{`f`}</InlineMath>).
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Basic Application">
        <p>
          Find <InlineMath>{`F'(x)`}</InlineMath> where <InlineMath>{`F(x) = \\int_0^x \\cos t \\, dt`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          By the First Fundamental Theorem, since <InlineMath>{`\\cos t`}</InlineMath> is
          continuous everywhere:
        </p>
        <MathBlock>{`F'(x) = \\cos x`}</MathBlock>
        <p>
          <em>Verification:</em> We can compute <InlineMath>{`F(x) = \\sin x - \\sin 0 = \\sin x`}</InlineMath>,
          and indeed <InlineMath>{`(\\sin x)' = \\cos x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Variable in the Lower Limit">
        <p>
          Find <InlineMath>{`G'(x)`}</InlineMath> where <InlineMath>{`G(x) = \\int_x^1 t^2 \\, dt`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>First, rewrite using the property of integrals:</p>
        <MathBlock>{`G(x) = \\int_x^1 t^2 \\, dt = -\\int_1^x t^2 \\, dt`}</MathBlock>
        <p>By the First Fundamental Theorem:</p>
        <MathBlock>{`G'(x) = -x^2`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Chain Rule Application">
        <p>
          Find <InlineMath>{`H'(x)`}</InlineMath> where <InlineMath>{`H(x) = \\int_0^{x^2} \\sin t \\, dt`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = x^2`}</InlineMath> and <InlineMath>{`F(u) = \\int_0^u \\sin t \\, dt`}</InlineMath>.
          Then <InlineMath>{`H(x) = F(x^2)`}</InlineMath>.
        </p>
        <p>By the chain rule:</p>
        <MathBlock>{`H'(x) = F'(x^2) \\cdot \\frac{d}{dx}(x^2) = \\sin(x^2) \\cdot 2x = 2x\\sin(x^2)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Both Limits Variable">
        <p>
          Find <InlineMath>{`\\frac{d}{dx} \\int_x^{x^2} e^{-t^2} dt`}</InlineMath>.
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
          If <InlineMath>{`a(x)`}</InlineMath> and <InlineMath>{`b(x)`}</InlineMath> are differentiable
          functions and <InlineMath>{`f`}</InlineMath> is continuous, then:
        </p>
        <MathBlock>{`\\frac{d}{dx} \\int_{a(x)}^{b(x)} f(t) \\, dt = f(b(x)) \\cdot b'(x) - f(a(x)) \\cdot a'(x)`}</MathBlock>
        <p>
          This combines the First Fundamental Theorem with the chain rule.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          The <strong>indefinite integral</strong> <InlineMath>{`A(x) = \\int_c^x f(t) \\, dt`}</InlineMath>
          represents accumulated area from <InlineMath>{`c`}</InlineMath> to <InlineMath>{`x`}</InlineMath>.
        </li>
        <li>
          <strong>First Fundamental Theorem:</strong> If <InlineMath>{`f`}</InlineMath> is continuous
          at <InlineMath>{`x`}</InlineMath>, then <InlineMath>{`A'(x) = f(x)`}</InlineMath>.
        </li>
        <li>
          In Leibniz notation: <InlineMath>{`\\dfrac{d}{dx} \\int_c^x f(t) \\, dt = f(x)`}</InlineMath>
        </li>
        <li>
          This theorem shows that <strong>differentiation undoes integration</strong>.
        </li>
        <li>
          The choice of the lower limit <InlineMath>{`c`}</InlineMath> affects
          <InlineMath>{`A(x)`}</InlineMath> by an additive constant, but does not affect
          <InlineMath>{`A'(x)`}</InlineMath>.
        </li>
        <li>
          When limits involve functions of <InlineMath>{`x`}</InlineMath>, use the
          <strong> chain rule</strong> in combination with the theorem.
        </li>
      </ul>
    </LessonLayout>
  );
}
